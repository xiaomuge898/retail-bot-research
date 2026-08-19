class WebSocketClient {
    constructor() {
        this.ws_url = null;
        // 当前正在等待的请求
        this.pendingResolve = null;
        this.pendingReject = null;
        this.cmd = null;
    }
    
    async init(ws_url){
        this.ws_url = ws_url
        await this.__connect()
        return this;
    }

    async __connect() {
        // 建立链接
        return new Promise((resolve, reject) => {
            this.ws = new WebSocket(this.ws_url, ['binary', 'base64', 'pbbp2']);
            this.ws.binaryType = "arraybuffer";
            this.ws.onopen = () => {
                // 连接建立时触发
                console.log("✅ WebSocket 已连接");
                this.ws.send("hi");

                // 防止重复定时（若断开重连）
                if (this.keepAliveTimer) clearInterval(this.keepAliveTimer);

                // 每隔几秒发送一次“hi”
                this.keepAliveTimer = setInterval(() => {
                    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
                        this.ws.send("hi");
                    }
                }, 10000);
                
                resolve();
            };
            
            this.ws.onmessage = (event) => {
                // 客户端接收到服务器数据时触发
                
                // 心跳不执行解密
                if (event.data === "hi") {
                    console.log("❤️ 心跳已收到");
                    return;
                };
                // 回调函数自己写
                this.__onmessageCallback(event);
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
    }

    async close() {
        // 关闭连接
        this.ws.close();
    }

    __onmessageCallback(event){
        try {

            // 解密返回的信息
            var decrypted_information = we(xe(event.data).payload);
            // 当前有正在等待的请求
            if (this.pendingResolve && decrypted_information.cmd == this.cmd) {
                const resolve = this.pendingResolve;

                // 清空，防止重复调用
                this.pendingResolve = null;
                this.pendingReject = null;

                // 把服务器结果返回给 encryption_send()
                resolve(decrypted_information);
            }
        } catch (error) {
            console.error("❌ WebSocket 响应处理失败:", error);

            if (this.pendingReject) {
                const reject = this.pendingReject;

                this.pendingResolve = null;
                this.pendingReject = null;

                reject(error);
            }
        }
    }

    async encryption_send(template, service, seq_id) {
        // 检查 WebSocket
        if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
            throw new Error("WebSocket 未连接");
        }
        // 防止上一条请求还没有返回，又发送新的
        if (this.pendingResolve) {
            throw new Error("上一条 WebSocket 请求还没有返回");
        }
        this.cmd = template.cmd
        const t = be(template);
        const i = ve.create({
            service: service,
            method: 1,
            headers: [],
            seqid: proprietary_code.fromValue(seq_id),
            logid: proprietary_code.fromValue(Date.now()),
            payload_type: "pb",
            payload: t
        });
        const o = ke(i);
        // 创建等待服务器响应的 Promise
        return new Promise((resolve, reject) => {

            // 保存 resolve / reject
            this.pendingResolve = resolve;
            this.pendingReject = reject;

            try {
                // 发送
                this.ws.send(o);

            } catch (error) {
                // 发送失败
                this.pendingResolve = null;
                this.pendingReject = null;

                reject(error);
            }
        });
    }
}