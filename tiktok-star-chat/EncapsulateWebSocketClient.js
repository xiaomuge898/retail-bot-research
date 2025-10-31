// 封装WebSocketClient


// 私信的类
class WebSocketClient {
    constructor(shop_info) {
        // 设置店铺信息
        this.shop_info = shop_info;
        debugger;
        if (!shop_info)
            throw new Error("请传入店铺信息");
        if (!shop_info?.shop_region || !shop_info?.oec_seller_id || typeof shop_info?.shop_region !== "string" || typeof shop_info?.oec_seller_id !== "string"){
            throw new Error("shop_region & oec_seller_id 必传，且均为String类型");
        }
    };

    async get_api_v1_im_token(){
        // 获取建立ws连接前所需要的参数
        const base = "https://affiliate.tiktokshopglobalselling.com/api/v1/oec/affiliate/seller/im/get/token";
        const params = {
            "shop_region": this.shop_info.shop_region,
            "oec_region": this.shop_info.shop_region,
            "oec_seller_id": this.shop_info.oec_seller_id,
            "user_language": "zh-CN",
            "aid": "6556",
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
            throw new Error(`[api/v1/oec/affiliate/seller/im/get/token]该接口请求异常，无法获取建立ws连接前所需要的参数，返回参数状态码为${data?.code}`);
        }
        this.api_v1_im_token = data?.data;
        return data
    }

    async create_v1_im_conversation_create(creator_oec_id){
        // 和达人建立聊天室ID
        const base = "https://oec-im-tt-sg.tiktokglobalshopv.com/api/v1/im/conversation/create";
        const params = {
            "biz_source": "shop_creator_shop",
            "shop_region": this.shop_info.shop_region,
            "oec_region": this.shop_info.shop_region,
            "oec_seller_id": this.shop_info.oec_seller_id,
            "user_language": "zh-CN",
            "aid": "6556",
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


    setAuthorization(authorization) {
        this.authorization = authorization;
        this.seqId = this.authorization.version_code + 1;
    };

    connect() {
        window.__WS__connect = false;
        // 发起连接
        if (!this.ws)
            this.ws = new WebSocket(this.url, ['binary', 'base64', 'pbbp2']);
        this.ws.binaryType = "arraybuffer";
        this.ws.onopen = () => {
            // 连接建立时触发
            this.ws.send("hi")
            this.ws.send("hi")
            this.ws.send("hi")
            this.ws.send("hi")
        };
        this.ws.onmessage = (event) => {
            // 客户端接收到服务器数据时触发
            console.log('%cWS接收到的信息', 'padding: 3px; border-radius: 7px; color: rgb(255, 255, 255); background-color: rgb(0, 158, 61);', event.data)

            // 心跳不执行解密
            if (event.data === "hi") {
                window.__WS__connect = true;  // 连接成功
                return null;
            };
            this.onmessageCallback(event);
        };

        this.ws.onclose = (event) => {
            // 关闭连接触发
            this.ws = null
            window.__WS__connect = false;
        };
        this.ws.onerror = (error) => {
            // 报错触发
            this.ws = null
            window.__WS__connect = false;
        };
    };

    onmessageCallback(event){
        // 返回的信息处理
        console.log('返回的信息处理');

        // 解密返回的信息
        var decrypted_information = we(xe(event.data).payload);
        console.log('%cWS接收到的信息执行解密处理', 'padding: 3px; border-radius: 7px; color: rgb(255, 255, 255); background-color: rgb(0, 158, 61);', decrypted_information);

        if (decrypted_information?.cmd == 100){
            // 发信的处理
            if (decrypted_information?.body?.send_message_body?.extra_info) {
                try {
                    var error_info = atob(decrypted_information.body.send_message_body.extra_info);
                    console.log('%c私信失败', 'padding: 3px; border-radius: 7px; color: rgb(255, 255, 255); background-color: rgb(238, 0, 0);', error_info);
                    window.__WS__msg = error_info;
                } catch (error) {
                    console.log('%c私信失败', 'padding: 3px; border-radius: 7px; color: rgb(255, 255, 255); background-color: rgb(238, 0, 0);', error);
                    window.__WS__msg = `base64解码失败 - ${error} - ${decrypted_information.body.send_message_body.extra_info}`;
                };
            } else {
                window.__WS__msg = '信息发送成功'
                console.log('%c信息发送成功', 'padding: 3px; border-radius: 7px; color: rgb(255, 255, 255); background-color: rgba(10, 218, 38, 1);',  window.__WS__msg);
            };
        } else if (decrypted_information?.cmd == 690){
            // 用户列表信息的处理
            if (decrypted_information?.error_desc == 'OK'){
                window.__WS__data = JSON.stringify(decrypted_information?.body?.get_conversation_group_list_body?.data || null)
                console.log('%c获取用户列表成功', 'padding: 3px; border-radius: 7px; color: rgb(255, 255, 255); background-color: rgba(10, 218, 38, 1);', window.__WS__data);

            } else {
                window.__WS__msg = `【未回复】列表获取错误 ${decrypted_information?.error_desc}`
                console.log('%c获取用户列表信息失败', 'padding: 3px; border-radius: 7px; color: rgb(255, 255, 255); background-color: rgb(238, 0, 0);', window.__WS__msg);
            };

        } else if (decrypted_information?.cmd == 200){
            // 获取翻页 next_cursor 信息
            if (decrypted_information?.error_desc == 'OK'){
                console.log('%c获取----用户列表', 'padding: 3px; border-radius: 7px; color: rgb(255, 255, 255); background-color: rgba(10, 218, 38, 1);', decrypted_information.body.messages_per_user_body.next_cursor);
                this.next_cursor = decrypted_information.body.messages_per_user_body.next_cursor
                return decrypted_information.body.messages_per_user_body.next_cursor
            } else {
                console.log('%c获取----用户列表 失败', 'padding: 3px; border-radius: 7px; color: rgb(255, 255, 255); background-color: rgb(238, 0, 0);', window.__WS__msg);
            };
        }
    }

    restorFromNumber(data_dict){
        // 还原被加密的字典
        // data_dict = {
        //     "low": -184123118,
        //     "high": 1761294079,
        //     "unsigned": false
        // }
        var _l = d.r.fromString('1');
        Object.assign(_l, data_dict);
        return _l.toString()
    }

    sendMessage(message) {
        if (!window.__WS__connect) {
            window.__WS__msg = 'ws未连接|连接失败';
        }
        ;
        // 发送信息
        this.ws.send(message);
    };

    close() {
        // 关闭连接
        if (this.ws) {
            window.__WS__connect = false;
            this.ws.close();
        }
        ;
    };

    inSignCommandList(e) {
        // 代表客户端的操作信息，具体意思不知道
        // 100代表我们发送任意信息，信息、图片、商品等
        return [100, 609, 2012, 650, 651, 655, 921, 902, 904, 922, 614, 2036, 2056, 705, 2021].includes(e)
    };

    frontierSign() {
        if ("undefined" != typeof window && void 0 !== window.byted_acrawler && "function" == typeof this.byted_acrawler_frontierSign) {
            const e = this.byted_acrawler_frontierSign();
            return null != e ? e : {}
        }
        ;
        return {}
    };

    byted_acrawler_frontierSign() {
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
    };

    uuid() {
        // 就是一个UUID
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
    };

    send_information(msg) {
        /**
         * 发信息 结构体
         *
         * @param {string} msg - 要发送的信息 长度不能超过2000
         */
        const client_message_id = this.uuid()
        const data = {
            "headers": {},
            "body": {
                "send_message_body": {
                    "conversation_id": this.authorization.conversation_short_id,   // 聊天室ID conversation_short_id   /api/v1/im/conversation/create
                    "conversation_short_id": d.r.fromString(this.authorization.conversation_short_id),  // 对聊天室进行编码处理
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
                        "shop_region": this.authorization.websocket_switch_region,   // 店铺站点
                        "sender_im_id": this.authorization.device_id,  // user.user_id  api/v1/oec/affiliate/seller/im/get/token
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
            "sequence_id": {low: this.seqId, high: 0, unsigned: false},
            "refer": 3,
            "token": this.authorization.token,      // token  api/v1/oec/affiliate/seller/im/get/token
            "device_id": this.authorization.device_id,
            "sdk_version": "1.2.16",    // 和build_number是一起的
            "build_number": "6eae7a1:master",  // 参数写死的  可以全局搜索master， https://lf16-scmcdn.oecstatic.com/obj/oec-magellan-sg/i18n/ecom/alliance/im/static/js/546.4ff75a23.js
            "inbox_type": 0,
            "device_platform": this.authorization.device_platform,
            "auth_type": 2
        }
        console.log('%c发信息 结构体', 'padding: 3px; border-radius: 7px; color: rgb(255, 255, 255); background-color: rgb(0, 0, 0);', data)
        return data;
    };

    send_commodity(productId) {
        /**
         * 发商品 结构体
         *
         * @param {string} productId - 要发送的商品ID
         */
            // 发商品 结构体
        const client_message_id = this.uuid()
        const data = {
            "headers": {},
            "body": {
                "send_message_body": {
                    "conversation_id": this.authorization.conversation_short_id,   // 聊天室ID conversation_short_id   /api/v1/im/conversation/create
                    "conversation_short_id": d.r.fromString(this.authorization.conversation_short_id),  // 对聊天室进行编码处理
                    "conversation_type": 2,
                    "content": "[商品卡片]",
                    "mentioned_users": [],
                    "client_message_id": client_message_id,  // 需修改
                    "ticket": "deprecated",
                    "message_type": 1000,
                    "ext": {
                        "PIGEON_BIZ_TYPE": "1",
                        "monitor_send_message_platform": "pc",
                        "sender_role": "2",
                        "a:user_language": "zh",
                        "shop_region": this.authorization.websocket_switch_region,   // 店铺站点
                        "sender_im_id": this.authorization.device_id,  // user.user_id  api/v1/oec/affiliate/seller/im/get/token
                        "sender_im_role": "2",
                        "type": "product",
                        "starling_content_key": "im_creator_message_type_product_card",
                        "productId": productId,    // 商品ID
                        "s:mentioned_users": "",
                        "s:client_message_id": client_message_id,   // 需修改
                        "s:send_response_check_code": "0",
                        "s:send_response_check_msg": "",
                        "s:send_response_extra_info": "",
                        "s:send_response_status": "0",
                        "s:msg_grade": "normal",
                        "s:biz_aid": this.authorization.aid,     // app_id  api/v1/oec/affiliate/seller/im/get/token
                        "s:is_stranger": "false",
                        "b:oec_im_search_context": JSON.stringify({
                            "sender_name": this.authorization.user_info_name,
                            "biz_msg_type": "product_card",
                            "search_content": "|"
                        }),  // search_content是商品的名称  需要用接口获取，经过测试发现随便传值也可以
                        "s:is_parallel_user_gray": "true",
                        "s:base_scene": "default",
                        "s:is_parallel_conv_gray": "true",
                        "s:sub_scene": "default",
                        "s:device_platform": this.authorization.device_platform,
                    },
                    "send_media_list": []
                }
            },
            "cmd": 100,
            "sequence_id": {low: this.seqId, high: 0, unsigned: false},
            "refer": 3,
            "token": this.authorization.token,    // token  api/v1/oec/affiliate/seller/im/get/token
            "device_id": this.authorization.device_id,  // user.user_id  api/v1/oec/affiliate/seller/im/get/token
            "sdk_version": "1.2.16",
            "build_number": "6eae7a1:master",   // 参数写死的  可以全局搜索master， https://lf16-scmcdn.oecstatic.com/obj/oec-magellan-sg/i18n/ecom/alliance/im/static/js/546.4ff75a23.js
            "inbox_type": 0,
            "device_platform": this.authorization.device_platform,
            "auth_type": 2
        }
        console.log('%c发商品 结构体', 'padding: 3px; border-radius: 7px; color: rgb(255, 255, 255); background-color: rgb(0, 0, 0);', data)
        return data;
    };

    send_img(imageUrl) {
        /**
         * 发图片 结构体
         *
         * @param {string} imageUrl - 要发送的图片地址
         * 这个图片链接，可以是任意网站的图片，只要海外可以打开即可
         * 如果想要伪造聊天记录，可以尝试把发送出去的图片，进行更换，用固定的url路径，只需要把图片更换即可实现
         */
            // 发图片 结构体
        const client_message_id = this.uuid()
        const data = {
            "headers": {},
            "body": {
                "send_message_body": {
                    "conversation_id": this.authorization.conversation_short_id,   // 聊天室ID conversation_short_id   /api/v1/im/conversation/create
                    "conversation_short_id": d.r.fromString(this.authorization.conversation_short_id),  // 对聊天室进行编码处理
                    "conversation_type": 2,
                    "content": "[图片]",
                    "mentioned_users": [],
                    "client_message_id": client_message_id,
                    "ticket": "deprecated",
                    "message_type": 1000,
                    "ext": {
                        "type": "file_image",
                        "imageUrl": imageUrl,
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
                        "shop_region": this.authorization.websocket_switch_region,   // 店铺站点
                        "sender_im_id": this.authorization.device_id,  // user.user_id  api/v1/oec/affiliate/seller/im/get/token
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
                        "s:device_platform": this.authorization.device_platform,
                        "s:is_stranger": "false",
                        "s:is_parallel_user_gray": "true",
                        "s:biz_aid": String(this.authorization.aid)
                    },
                    "send_media_list": []
                }
            },
            "cmd": 100,
            "sequence_id": {low: this.seqId, high: 0, unsigned: false},
            "refer": 3,
            "token": this.authorization.token,
            "device_id": this.authorization.device_id,
            "sdk_version": "1.2.16",
            "build_number": "6eae7a1:master",
            "inbox_type": 0,
            "device_platform": this.authorization.device_platform,
            "auth_type": 2
        }
        console.log('%c发图片 结构体', 'padding: 3px; border-radius: 7px; color: rgb(255, 255, 255); background-color: rgb(0, 0, 0);', data)
        return data;
    };


    decrypt_biz_ext(uint8Arr){
        // 解码 biz_ext 参数，将 Uint8Array 数组转为字符串
        return new TextDecoder('utf-8').decode(uint8Arr);
    }

    async request(body){
        // 获取【未回复】列表的用户，载荷为  new Uint8Array()，返回的结果是 bytes ，可直接解密
        const res = await fetch(this._request_url, {
            "headers": {},
            "body": body,
            "method": "POST",
            "mode": "cors",
            "credentials": "omit"
        })
        var _l = await we(await res.bytes());
        console.log('%c请求返回的原文数据', 'padding: 3px; border-radius: 7px; color: rgb(255, 255, 255); background-color: rgba(0, 108, 151, 1);', _l);
        return _l
    }

    send_system_interaction(next_cursor, custom_group_name){
        /**
         * 获取【未回复】达人列表的用户 结构体
         *
         * 发信息，表示我要获取用户列表【达人】
         */
        this._request_url = "https://oec-im-tt-sg.tiktokglobalshopv.com/v1/conversation/get_group_list";
        const data = {
            "headers": {},
            "body": {
                "get_conversation_group_list_body": {
                    "group_list_req_param": [
                        {
                            "group_name": {
                                "user_id": d.r.fromString(this.authorization.device_id),
                                "custom_group_name": custom_group_name   // s_all=获取【全部】列表的用户   s_un_reply=获取【未回复】列表的用户   s_unread=获取【未读】列表的用户  s_archived=获取【已存档】列表的用户   s_star=获取【已加星标】列表的用户
                            },
                            "cursor": next_cursor, // 首次需要用最新的时间戳，d.r.fromString(String((new Date).getTime()))，请求出来结果后，可以用请求结果内的 cursor
                            "direction": 0,  // （我们只需要用0，然后首次传最新的时间，向前查看旧信息）这个参数只能填写0/1， 0=以当前传参的时间为标准，向前查看旧信息。 1=以当前传参的时间为标准，向后查看新消息
                            "limit": 50  // 每次最大只能获取50个用户
                        }
                    ]
                }
            },
            "cmd": 690,
            "sequence_id": {low: this.seqId, high: 0, unsigned: false},
            "refer": 3,
            "token": this.authorization.token,
            "device_id": this.authorization.device_id,
            "sdk_version": "1.2.16",
            "build_number": "6eae7a1:master",
            "inbox_type": 0,
            "device_platform": this.authorization.device_platform,
            "auth_type": 2
        }
        console.log('%c获取【未回复】【达人】用户列表 结构体', 'padding: 3px; border-radius: 7px; color: rgb(255, 255, 255); background-color: rgb(0, 0, 0);', data)
        return data;
    }

    send_messages_per_user_init_v2_body(page){
        /**
         * 获取【未回复】买家列表的用户 结构体
         *
         * 发信息，表示我要获取用户列表【买家】
         * @param {string} page - 翻页，0为第一页 10为第二页，以此递增
         * 每次只能获取10个用户信息和10个用户的所有聊天记录
         */
        this._request_url = "https://oec-im-tt-sg.tiktokglobalshopv.com/v2/message/get_by_user_init";
        const data = {
            "headers": {},
            "body": {
                "messages_per_user_init_v2_body": {
                    "cursor": { "low": page, "high": 0, "unsigned": false }
                }
            },
            "cmd": 203,
            "sequence_id": {low: this.seqId, high: 0, unsigned: false},
            "refer": 3,
            "token": this.authorization.token,
            "device_id": this.authorization.device_id,
            "sdk_version": "1.2.2",    // 买家只能用这个版本
            "build_number": "5dd76f3:master",   // 买家只能用这个版本
            "inbox_type": 0,
            "device_platform": this.authorization.device_platform,
            "auth_type": 2
        }
        console.log('%c获取【未回复】【买家】用户列表 结构体', 'padding: 3px; border-radius: 7px; color: rgb(255, 255, 255); background-color: rgb(0, 0, 0);', data)
        return data;
    }

    encryption_send(msg) {
        window.__WS__msg = '';
        // 加密发信
        console.log('%c【加密前-1】', 'padding: 3px; border-radius: 7px; color: rgb(255, 255, 255); background-color: rgb(0, 100, 200);', msg)
        const t = be(msg)   // be 第一次加密
        console.log('%c【加密后-1】', 'padding: 3px; border-radius: 7px; color: rgb(255, 255, 255); background-color: rgb(0, 100, 200);', t)
        const n = this.inSignCommandList(msg.cmd) ? this.frontierSign() : {}
            , o = n // Object.assign(Object.assign({}, n), this.ctx.option.headers)
            , i = ve.create({
            service: this.authorization.frontier_service_id,  // 通过接口获取 frontier_service_id api/v1/oec/affiliate/seller/im/get/token
            method: 1, // 1=GET
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
        console.log('%c【加密前-2】', 'padding: 3px; border-radius: 7px; color: rgb(255, 255, 255); background-color: rgb(0, 100, 200);', i)
        const ooo = ke(i)
        console.log('%c【加密后-2】', 'padding: 3px; border-radius: 7px; color: rgb(255, 255, 255); background-color: rgb(0, 100, 200);', ooo)

        this.sendMessage(ooo)
        // 每次发信都需要+1
        this.seqId += 1;
    };
};

cc = new WebSocketClient({oec_seller_id:"8649026796888229815",shop_region:"TH"})
cc.get_api_v1_im_token()
cc.create_v1_im_conversation_create()