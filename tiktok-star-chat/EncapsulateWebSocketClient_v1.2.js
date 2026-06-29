/*
封装的WebSocketClient
*/
class WebSocketClient {
    constructor(shop_info) {
        // 设置店铺信息
        this.shop_info = shop_info;
        this.ws = null;
        this.api_v1_im_token = null;
        this.api_v1_shop_im_token = null;
        this.aid = window._menuUrlParam.aid;
    }

    async init(){
        // 初始化
        if (!this.shop_info) throw new Error("请传入店铺信息");
        var m = {
            "shop_region": "站点类型缺少",
            "oec_seller_id": "店铺ID缺少"
        }
        for (let d in m) {
            let value = this.shop_info[d]
            if (!value || typeof value !== "string"){
                throw new Error(`${d} 必传，且保持 String 类型 (${value})`);
            }
        }

        await this.__get_api_v1_im_token()
        await this.__connect()
        await this.sleep(1000)
        return this;
    }

    async __get_api_v1_im_token(){
        // 获取 WS 连接前所需要的参数【达人接口专用】
        const base = `${location.origin}/api/v1/oec/affiliate/seller/im/get/token`;
        const params = {
            "shop_region": this.shop_info.shop_region,
            "oec_region": this.shop_info.shop_region,
            "oec_seller_id": this.shop_info.oec_seller_id,
            "user_language": "zh-CN",
            "aid": this.aid,
            "app_name": "i18n_ecom_alliance",
            "device_id": "0",
            "device_platform": "web",
            "cookie_enabled": "true"
        };
        const url = new URL(base);
        url.search = new URLSearchParams(params).toString();
        const res = await fetch(url.toString(), {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "x-tt-oec-region": this.shop_info.shop_region
            },
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "include"
        });
        const data = await res.json();
        console.log(data);
        if (data?.code != 0 || !data?.data){
            throw new Error(`[api/v1/oec/affiliate/seller/im/get/token]该接口请求异常，【达人】无法获取建立ws连接前所需要的参数，返回参数状态码为${data?.code}`);
        }
        this.api_v1_im_token = data?.data;
        return data
    }
    
    async __connect() {
        if (!this.api_v1_im_token && !(this.api_v1_shop_im_token && this.shop_info_data)){
            throw new Error(`【达人发信】请先调用 get_api_v1_im_token 方法获取建立ws连接所需的参数，然后再执行connect | 【买家发信】请先调用 get_api_v1_shop_im_user_get_info_list、get_api_v1_shop_im_token 方法获取建立ws连接所需的参数，然后再执行connect`);
        }

        // 发起连接
        if (!this.ws){
            let url, params;
            if (this.api_v1_im_token){
                url = new URL(this.api_v1_im_token.ws_url);
                params = {
                    "token": this.api_v1_im_token.token,
                    "aid": this.api_v1_im_token.app_id,
                    "fpid": this.api_v1_im_token.fp_id,
                    "device_id": this.api_v1_im_token.user.user_id,
                    "access_key": Me(`${this.api_v1_im_token.fp_id + this.api_v1_im_token.app_key + this.api_v1_im_token.user.user_id}f8a69f1719916z`),
                    "device_platform": 'web',
                    "version_code": this.api_v1_im_token.biz_service_id,
                    "websocket_switch_region": this.api_v1_im_token.shop_region,
                    "x-tt-env": this.api_v1_im_token.env,
                }
            } else if (this.api_v1_shop_im_token && this.shop_info_data){
                url = new URL(this.api_v1_shop_im_token.websocket_url);
                params = {
                    "token": this.api_v1_shop_im_token.token,
                    "aid": "5341",
                    "fpid": "92",
                    "device_id": this.api_v1_shop_im_token.im_customer_service_id,
                    "access_key": Me(`${"92" + "b42d99769353ce6304e74fb597e36e90" + this.api_v1_shop_im_token.im_customer_service_id}f8a69f1719916z`),
                    "device_platform": "web",
                    "version_code": "10000",
                    "websocket_switch_region": this.shop_info_data.shop_region,
                    "im_role": "2",
                    "im_shop_id": this.shop_info_data.im_shop_id,
                    "x-tt-env": this.api_v1_shop_im_token.env
                };
            }

            url.search = new URLSearchParams(params).toString();
            return new Promise((resolve, reject) => {
                this.ws = new WebSocket(url.toString(), ['binary', 'base64', 'pbbp2']);
                this.ws.binaryType = "arraybuffer";
                this.ws.onopen = () => {
                    this.seqId = this.api_v1_im_token?.biz_service_id || 10000;
                    // 连接建立时触发
                    console.log("✅ WebSocket 已连接");
                    this.ws.send("hi");

                    // 防止重复定时（若断开重连）
                    if (this.keepAliveTimer) clearInterval(this.keepAliveTimer);

                    // 每隔5秒发送一次“hi”
                    this.keepAliveTimer = setInterval(() => {
                        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
                            this.ws.send("hi");
                            console.log("💓 心跳已发送");
                        }
                    }, 10000);
                };
                this.ws.onmessage = (event) => {
                    // 客户端接收到服务器数据时触发
                    
                    // 心跳不执行解密
                    if (event.data === "hi") {
                        console.log("❤️ 心跳已收到");
                        return null;
                    };
                    this.__log("WS接收到的信息", "rgb(0, 158, 61)", event.data)
                    // 回调函数自己写
                    this.__onmessageCallback(event);
                };
                // ✅ 成功连接
                this.ws.onopen = () => {
                    console.log("WS OPENED");
                    resolve();
                };
                this.ws.onclose = (e) => {
                    // 关闭连接触发
                    console.warn("⚠️ WebSocket 已关闭:", e.code, e.reason);
                    if (this.keepAliveTimer) clearInterval(this.keepAliveTimer);
                    this.ws = null;
                };
                this.ws.onerror = (err) => {
                    console.error("❌ WebSocket 出错:", err);
                    reject(err);
                };

            })
            
        };
    }

    async close() {
        // 关闭连接
        this.ws.close();
    }

    __onmessageCallback(event){
        // 回调函数执行

        // 解密返回的信息
        var decrypted_information = we(xe(event.data).payload);
        this.__log("WS接收到的信息执行解密处理", "rgb(0, 158, 61)", decrypted_information)
    }

    async __create_v1_im_conversation_create(creator_oec_id){
        // 获取达人聊天室ID
        if (!this.api_v1_im_token) await this.__get_api_v1_im_token()
        // 和达人建立聊天室ID【达人接口专用】
        const base = `${this.api_v1_im_token.api_url}/api/v1/im/conversation/create`;
        const params = {
            "biz_source": "shop_creator_shop",
            "shop_region": this.shop_info.shop_region,
            "oec_region": this.shop_info.shop_region,
            "oec_seller_id": this.shop_info.oec_seller_id,
            "user_language": "zh-CN",
            "aid": this.aid,
            "app_name": "i18n_ecom_alliance",
            "device_id": "0",
        }
        const url = new URL(base);
        url.search = new URLSearchParams(params).toString();
        const res = await fetch(url.toString(), {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "content-type": "application/json",
                "x-im-paas-token": this.api_v1_im_token.token
            },
            "body": JSON.stringify({
                "participants": [
                    {
                        "role": 0,
                        "uid": creator_oec_id,  // 达人ID
                        "extra": {
                            "sender_im_role": "4"
                        }
                    },
                    {
                        "role": 1,
                        "uid": this.shop_info.oec_seller_id,
                        "extra": {
                            "sender_im_role": "2"
                        }
                    }
                ]
            }),
            "method": "POST",
            "mode": "cors",
            "credentials": "omit"
        });
        const data = await res.json();
        console.log(data);
        if (data?.code != 0 || !data?.data?.conversation_short_id){
            throw new Error(`[api/v1/im/conversation/create]该接口请求异常，聊天室建立失败，返回参数状态码为${data?.code}`);
        }
        this.conversation_short_id = data?.data?.conversation_short_id;
    }

    async __send_request(url, method, body){
        // 通用的请求方法
        const res = await fetch(url, {
            "headers": {},
            "body": body,
            "method": method,
            "mode": "cors",
            "credentials": "omit"
        })
        var _l = await we(await res.bytes());
        this.__log("请求返回的原文数据", "rgba(0, 108, 151, 1)", _l)
        return _l
    }

    async get_uuid() {
        // 获取一个UUID
        const j = new Array(16);
        const N = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
        const e = function () {
            for (let e = 0, t = 0; e < 16; e++)
                3 & e || (t = 4294967296 * Math.random()),
                    j[e] = t >>> ((3 & e) << 3) & 255;
            return j
        }();
        return e[6] = 15 & e[6] | 64,
            e[8] = 63 & e[8] | 128,
            function (e) {
                let t = 0;
                const n = N;
                return [n[e[t++]], n[e[t++]], n[e[t++]], n[e[t++]], "-", n[e[t++]], n[e[t++]], "-", n[e[t++]], n[e[t++]], "-", n[e[t++]], n[e[t++]], "-", n[e[t++]], n[e[t++]], n[e[t++]], n[e[t++]], n[e[t++]], n[e[t++]]].join("")
            }(j)
    }

    __log(msg, rgb, data){
        console.log(`%c ${msg}`, `padding: 3px; border-radius: 7px; color: rgb(255, 255, 255); background-color: ${rgb};`, data)
    }

    __structure_data() {
        return {
            "headers": {},
            "sequence_id": {low: this.seqId, high: 0, unsigned: false},
            "refer": 3,
            "token": this.api_v1_im_token.token,
            "device_id": this.api_v1_im_token.user.user_id,
            "sdk_version": "1.2.16",  // 和 build_number 统一
            "build_number": "6eae7a1:master",  // 参数写死的 达人发信和买家发信是不一样的 可以全局搜索master， https://lf16-scmcdn.oecstatic.com/obj/oec-magellan-sg/i18n/ecom/alliance/im/static/js/546.4ff75a23.js
            "inbox_type": 0,
            "device_platform": 'web',
            "auth_type": 2
        }
    }
    
    async __encryption_send(struct) {
        // 加密 -> 发信
        if (!this.ws) {
            throw new Error("ws未连接，请先 connect 连接");
        };
        if (!struct) {
            throw new Error("struct 为空，无法加密发信");
        };
        // struct = 发信的结构体，需要经过加密
        this.__log("【第一次加密前】", "rgb(0, 100, 200)", struct);
        const t = be(struct);   // be 第一次加密
        this.__log("【第一次加密后】", "rgb(0, 100, 200)", t);
        const n = await this.__in_sign_command_list(struct.cmd) ? await this.__frontier_sign() : {}
            , o = n
            , i = ve.create({
            service: this.api_v1_im_token.frontier_service_id || this.api_v1_shop_im_token.biz_service_id,
            method: 1,
            headers: Object.entries(o).map((([e, t]) => ({
                key: e,
                value: t
            }))),
            seqid: d.r.fromNumber(this.seqId),
            logid: d.r.fromNumber(Date.now()),
            payload_type: "pb",
            payload: t
        });
        // 第一次加密后，封装成字典，再次进行加密处理
        this.__log("【第二次加密前】", "rgb(0, 100, 200)", i);
        const _o = ke(i);
        this.__log("【第二次加密后】", "rgb(0, 100, 200)", _o);

        this.ws.send(_o);
        // 每次发信都需要+1
        this.seqId += 1;
        this.sleep(1000);
    }

    async __in_sign_command_list(e) {
        // 代表客户端的操作信息，具体意思不知道
        // 100代表我们发送任意信息，信息、图片、商品等
        return [100, 609, 2012, 650, 651, 655, 921, 902, 904, 922, 614, 2036, 2056, 705, 2021].includes(e)
    }

    async __frontier_sign() {
        if ("undefined" != typeof window && void 0 !== window.byted_acrawler && "function" == typeof this.byted_acrawler_frontierSign) {
            const e = await this.__byted_acrawler_frontier_sign();
            return null != e ? e : {}
        }
        ;
        return {}
    }
    
    async sleep(ms){
        new Promise(resolve => setTimeout(resolve, ms));
    }

    async __byted_acrawler_frontier_sign() {
        // 获取随机X-MS-STUB值
        // 定义字符集
        const chars = "xHnEkZFrAOaMIGNChbeRjuSQXTwqyPoWDpsfgvzBUKLYmicVldJt/+";
        function randomString(length = 15) {
            let result = "WR"[Math.floor(Math.random() * 2)];
            for (let i = 0; i < length; i++) {
                const index = Math.floor(Math.random() * chars.length);
                result += chars[index];
            }
            ;
            return result;
        };
        return {"X-MS-STUB": randomString()};
    }

    async set_chat_room(creator_oec_id) {
        // 设置达人聊天室
        await this.__create_v1_im_conversation_create(creator_oec_id)
        const client_message_id = await this.get_uuid()
        const data = {
            ...this.__structure_data(),
            "body": {
                "participants_read_index_body": {
                    "conversation_id": this.conversation_short_id,   // 聊天室ID conversation_short_id   /api/v1/im/conversation/create
                    "conversation_short_id": d.r.fromString(this.conversation_short_id),  // 对聊天室进行编码处理
                    "conversation_type": 2
                }
            },
            "cmd": 2000
        }
        this.__log("设置达人聊天室 结构体", "rgb(0, 0, 0)", data);
        await this.__encryption_send(data);
    }

    
    async send_guru_information(msg) {
        /**
         * 给达人发信息 结构体
         *
         * @param {string} msg - 要发送的信息 长度不能超过2000
         */
        const client_message_id = await this.get_uuid()
        const data = {
            ...this.__structure_data(),
            "body": {
                "send_message_body": {
                    "conversation_id": this.conversation_short_id,   // 聊天室ID conversation_short_id   /api/v1/im/conversation/create
                    "conversation_short_id": d.r.fromString(this.conversation_short_id),  // 对聊天室进行编码处理
                    "conversation_type": 2,
                    "content": msg,
                    "mentioned_users": [],
                    "client_message_id": client_message_id,
                    "ticket": "deprecated",
                    "message_type": 1000,
                    "ext": {
                        "PIGEON_BIZ_TYPE": "1",
                        "monitor_send_message_platform": "pc",
                        "sender_role": "2",
                        "a:user_language": "zh",
                        "shop_region": this.shop_info.shop_region,
                        "sender_im_id": this.api_v1_im_token.user.user_id,
                        "sender_im_role": "2",
                        "type": "text",
                        "original_content": "",
                        "s:mentioned_users": "",
                        "s:client_message_id": client_message_id
                    },
                    "send_media_list": []
                }
            },
            "cmd": 100,   // 100就是发信
        }
        this.__log("给达人发信息 结构体", "rgb(0, 0, 0)", data);
        await this.__encryption_send(data);
    }

    async send_guru_img(image_url) {
        /**
         * 给达人发图片 结构体
         *
         * @param {string} image_url - 要发送的图片地址
         * 这个图片链接，可以是任意网站的图片，只要海外网络可以访问即可
         * 如果想要伪造聊天记录，可以尝试把发送出去的图片，进行更换，用固定的url路径，只需要把图片更换即可实现
         */
        const client_message_id = await this.get_uuid()
        const data = {
            ...this.__structure_data(),
            "body": {
                "send_message_body": {
                    "conversation_id": this.conversation_short_id,   // 聊天室ID conversation_short_id   /api/v1/im/conversation/create
                    "conversation_short_id": d.r.fromString(this.conversation_short_id),  // 对聊天室进行编码处理
                    "conversation_type": 2,
                    "content": "[图片]",
                    "mentioned_users": [],
                    "client_message_id": client_message_id,
                    "ticket": "deprecated",
                    "message_type": 1000,
                    "ext": {
                        "type": "file_image",
                        "imageUrl": image_url,
                        // "imageHeight": "141",
                        // "imageWidth": "304",
                        // "imageHeight": "640",
                        // "imageWidth": "960",
                        "sender_role": "2",
                        "is_allocated_event": "1",
                        "s:mentioned_users": "",
                        "s:client_message_id": client_message_id,
                        "PIGEON_BIZ_TYPE": "1",
                        "monitor_send_message_platform": "pc",
                        "a:user_language": "zh",
                        "shop_region": this.shop_info.shop_region,
                        "sender_im_id": this.api_v1_im_token.user.user_id,
                        "sender_im_role": "2",
                        "starling_content_key": "im_sdk_cell_sent_photo",
                        "s:send_response_check_code": "0",
                        "s:send_response_check_msg": "",
                        "s:send_response_extra_info": "",
                        "s:send_response_status": "0",
                        "s:is_parallel_conv_gray": "true",
                        "s:msg_grade": "normal",
                        "s:sub_scene": "default",
                        "s:base_scene": "default",
                        "s:device_platform": 'web',
                        "s:is_stranger": "false",
                        "s:is_parallel_user_gray": "true",
                        "s:biz_aid": this.api_v1_im_token.app_id
                    },
                    "send_media_list": []
                }
            },
            "cmd": 100
        }
        this.__log("给达人发图片 结构体", "rgb(0, 0, 0)", data);
        await this.__encryption_send(data);
    }

    async send_guru_commodity(product_id) {
        /**
         * 给达人发商品 结构体
         *
         * @param {string} product_id - 要发送的商品ID
         */
        const client_message_id = await this.get_uuid()
        const data = {
            ...this.__structure_data(),
            "body": {
                "send_message_body": {
                    "conversation_id": this.conversation_short_id,   // 聊天室ID conversation_short_id   /api/v1/im/conversation/create
                    "conversation_short_id": d.r.fromString(this.conversation_short_id),  // 对聊天室进行编码处理
                    "conversation_type": 2,
                    "content": "[商品卡片]",
                    "mentioned_users": [],
                    "client_message_id": client_message_id,
                    "ticket": "deprecated",
                    "message_type": 1000,
                    "ext": {
                        "PIGEON_BIZ_TYPE": "1",
                        "monitor_send_message_platform": "pc",
                        "sender_role": "2",
                        "a:user_language": "zh",
                        "shop_region": this.shop_info.shop_region,
                        "sender_im_id": this.api_v1_im_token.user.user_id,
                        "sender_im_role": "2",
                        "type": "product",
                        "starling_content_key": "im_creator_message_type_product_card",
                        "productId": product_id,    // 商品ID
                        "s:mentioned_users": "",
                        "s:client_message_id": client_message_id,
                        "s:send_response_check_code": "0",
                        "s:send_response_check_msg": "",
                        "s:send_response_extra_info": "",
                        "s:send_response_status": "0",
                        "s:msg_grade": "normal",
                        "s:biz_aid": this.api_v1_im_token.app_id,
                        "s:is_stranger": "false",
                        "b:oec_im_search_context": JSON.stringify({
                            "sender_name": "|",
                            "biz_msg_type": "product_card",
                            "search_content": "|"
                        }),  // search_content是商品的名称  需要用接口获取，经过测试发现随便传值也可以
                        "s:is_parallel_user_gray": "true",
                        "s:base_scene": "default",
                        "s:is_parallel_conv_gray": "true",
                        "s:sub_scene": "default",
                        "s:device_platform": 'web',
                    },
                    "send_media_list": []
                }
            },
            "cmd": 100
        }
        this.__log("给达人发商品 结构体", "rgb(0, 0, 0)", data);
        await this.__encryption_send(data);
    }

    async get_inbox_guru(cursor, custom_group_name) {
        /**
         * 达人 获取指定收件箱的达人列表 结构体 （可以不用建立ws连接，但需要执行 get_api_v1_im_token）
         *
         * @param {Object} cursor - 翻页游标
         * @param {string} custom_group_name - 要获取的页面类型 s_all=全部  s_unread=未读  s_un_reply=未回复 s_archived=已归档  s_star=已加星标
         */
        if (!cursor) {
            cursor = d.r.fromString(new Date().getTime().toString());
        }
        const url = `${this.api_v1_im_token.api_url}/v1/conversation/get_group_list`;
        const data = {
            ...this.__structure_data(),
            "body": {
                "get_conversation_group_list_body": {
                    "group_list_req_param": [
                        {
                            "group_name": {
                                "user_id": d.r.fromString(this.api_v1_im_token.user.user_id),
                                "custom_group_name": custom_group_name
                            },
                            "cursor": cursor,    // 注意：获取第一页需要用自定义的时间戳，想要获取下一页就需要用返回结果内的cursor值
                            "direction": 0, // 0=最新时间至旧时间排序查找达人  1=从旧时间至最新时间排序查找达人  正常使用 0 即可
                            "limit": 50  // 默认每次只能获取20个达人，但最高可以获取50个达人
                        }
                    ]
                }
            },
            "cmd": 690
        };
        this.__log(`获取收件箱【${custom_group_name}】列表的用户 结构体`, "rgb(0, 0, 0)", data);
        const ee = await this.__send_request(url, 'POST', be(data).buffer);
        this.__log(`获取收件箱【${custom_group_name}】列表的用户 返回结果`, "rgb(0, 0, 0)", ee);
        return ee;
    }

    async set_guru_star(is_seller_starred_creator, is_seller_archived_creator, creator_oec_id, r_=1) {
        /**
         * 达人 设置收件箱用户是否加星标  structure （可以直接使用）
         *
         * @param {boolean} is_seller_starred_creator - 添加星标或移除星标
         * @param {boolean} is_seller_archived_creator - 添加存档或移除存档
         * @param {string} creator_oec_id - 达人ID
         * 两个不能同时进行修改
         */
        if (typeof is_seller_starred_creator == 'boolean') {
            var tags = { "is_seller_starred_creator": is_seller_starred_creator.toString() };
        } else if (typeof is_seller_archived_creator == 'boolean') {
            var tags = { "is_seller_archived_creator": is_seller_archived_creator.toString() };
        } else {
            throw new Error('❌ 参数错误：至少需要传入 is_seller_starred_creator 或 is_seller_archived_creator 之一。');
        }
        const base = `${location.origin}/api/v1/affiliate/notification/im/conversation/update`;
        const params = {
            "shop_region": this.shop_info.shop_region,
            "oec_region": this.shop_info.shop_region,
            "oec_seller_id": this.shop_info.oec_seller_id,
            "user_language": "zh-CN",
            "aid": this.aid,
            "app_name": "i18n_ecom_alliance",
            "device_id": "0",
            "device_platform": "web",
            "cookie_enabled": "true",
            "screen_width": "1920",
            "screen_height": "1080",
            "browser_language": "zh-HK",
            "browser_platform": "Win32"
        }
        const url = new URL(base);
        url.search = new URLSearchParams(params).toString();
        const res = await fetch(url.toString(), {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "accept-language": "zh-HK,zh-TW;q=0.9,zh;q=0.8",
                "content-type": "application/json",
                "x-tt-oec-region": this.shop_info.shop_region
            },
            "body": JSON.stringify({
                "source": {
                    "role": 2,
                    "user_id": this.shop_info.oec_seller_id,
                },
                "target": {
                    "role": 1,
                    "user_id": creator_oec_id,
                },
                "tags": tags
            }),
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        });
        const data = await res.json();
        this.__log(`设置收件箱用户是否加星标`, "rgb(0, 0, 0)", data);
        if (data?.code == 0 && data?.message == 'success'){
            return data;
        }
        if (data?.code == 98001001 && r_ < 3) return this.set_guru_star(is_seller_starred_creator, is_seller_archived_creator, creator_oec_id, r_=r_+1)
        throw new Error(`[api/v1/affiliate/notification/im/conversation/update]该接口请求异常，${tags}, 返回参数状态码为${data?.code}`);
    }
    
}
