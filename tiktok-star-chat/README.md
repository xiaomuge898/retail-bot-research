## Tiktok 聊天发信功能
| 支持：Tiktok 本土/非本土
| 支持站点类型：MY/PH/SG/TH/VN/US（其他站点没测，但基本都支持）
### 达人私信v：1.2.16（官方js版本）
#### ~~买家发信v：1.2.2（买家发信完善中...）~~

### 方法功能都已经写好了，可以自己封装一下，无论是做成插件，还是用python自动化，都是不错的选择。
| EncapsulateWebSocketClient.js 是旧版，已弃用

<img src="https://raw.githubusercontent.com/xiaomuge898/xiaomuge898/refs/heads/main/tiktok-img/2025-12-24_19-29-14.gif" width="1200" />

## 【达人】发信方法如下
1. **_非本土_** 店铺打开【 https://affiliate.tiktokshopglobalselling.com/api/v1/affiliate/account/info 】页面(可以省略很多的网络资源)
2. **_本土_** 店铺打开【 https://affiliate.tiktok.com/api/v1/affiliate/account/info_v2 】页面(可以省略很多的网络资源)
3. 打开并复制 *00e72210e498b35e5268c6f6d4cec1ee.js* 文件的内容，直接粘贴到控制台中运行，然后把 *EncapsulateWebSocketClient_v1.2.js* 文件中的内容也粘贴到控制台中运行
4. 然后使用下面的代码进行一系列的操作即可
- 常规操作
```js
(async () => {
    // 实例化（不同的站点需要重新创建实例化）
    ws = await new WebSocketClient({
        oec_seller_id: "8647214523272168685", 
        shop_region: "VN"
    }).init()
    
    // 对该达人开启聊天模式（切换）
    await ws.set_chat_room("达人ID")
    
    // 发信息
    await ws.send_guru_information("hello")
    
    // 发图片
    await ws.send_guru_img("https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/3c1212db21f94a95a84d4da985044959~tplv-fhlh96nyum-origin-jpeg.jpeg?dr=12178&from=520841845&idc=useast5&ps=933b5bde&shcp=2c1af732&shp=1f0b6a75&t=555f072d")
    
    // 发商品卡片
    await ws.send_guru_commodity("商品ID")
    
    // 设置星标 true=设置  false=取消
    await ws.set_guru_star(true, "", "达人ID")
    
    // 设置存档 true=设置  false=取消（可能无法取消）
    await ws.set_guru_star("", false, "达人ID")
    
    // 关闭所有聊天窗口
    await ws.close()
})()
```
- 给多个达人批量发送 信息、商品卡片、图片
```js
(async () => {
    // 实例化（不同的站点需要重新创建实例化）
    ws = await new WebSocketClient({
        oec_seller_id: "店铺ID,字符串类型", 
        shop_region: "US"
    }).init()
    var creator_oec_id_list = ["7494669816897702627", "7494675858420959720", "7494372236601035062"]
    for (var i=0;i<creator_oec_id_list.length;i++){
        // 对该达人开启聊天模式（切换）
        await ws.set_chat_room(creator_oec_id_list[i])
        
        // 发信息
        await ws.send_guru_information("hello")
        
        // 发图片
        await ws.send_guru_img("https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/3c1212db21f94a95a84d4da985044959~tplv-fhlh96nyum-origin-jpeg.jpeg?dr=12178&from=520841845&idc=useast5&ps=933b5bde&shcp=2c1af732&shp=1f0b6a75&t=555f072d")
        
        // 发商品卡片
        await ws.send_guru_commodity("商品ID")
    }
    // 关闭所有聊天窗口
    await ws.close()
})()
```
- 获取指定收件箱的达人列表
```js
(async () => {
    // 实例化（不同的站点需要重新创建实例化）
    ws = await new WebSocketClient({
        oec_seller_id: "7496034600577370325", 
        shop_region: "US"
    }).init()
    
    // 要获取的页面类型 s_all=全部  s_unread=未读  s_un_reply=未回复 s_archived=已归档  s_star=已加星标
    // 获取指定收件箱的达人列表 (第一次请求用null获取第一页的数据)
    var data = await ws.get_inbox_guru(null, "s_all")
    console.log("data", data)
    
    // 想要获取第二页的数据，需要把第一页的请求后返回数据的cursor传进来即可
    // await ws.get_inbox_guru({"low": -1006656308,"high": 408,"unsigned": false}, "s_all")
    data = await ws.get_inbox_guru(data.body.get_conversation_group_list_body.data[0].cursor, "s_all")
    console.log("data", data)
    
    // 关闭所有聊天窗口
    await ws.close()
})()
```
- 对某个达人设置【星标、存档】
```js
(async () => {
    // 先实例化 oec_seller_id=店铺ID  shop_region=店铺站点
    ws = await new WebSocketClient({oec_seller_id:"店铺ID,字符串类型", shop_region:"VN"}).init()
    
    // 对某个达人添加星标，true修改未false则删除星标
    await ws.set_guru_star(true, null, "达人ID,字符串类型")
    
    // 对某个达人添加存档，true修改未false则删除存档
    await ws.set_guru_star(null, true, "达人ID,字符串类型")
})()
```

## 编码与解码
```js
// 解码 数据
{"low": 1875778455, "high": 408, "unsigned": false}

// 用此方法可以将上面的数据进行 *解码处理*
// 先实例化 oec_seller_id=店铺ID  shop_region=店铺站点
ws = new WebSocketClient({oec_seller_id:"店铺ID,字符串类型", shop_region:"VN"});
ws.decrypt_restor_from_number({"low": 1875778455, "high": 408, "unsigned": false})
// 还原后的数据为：'1754222435223'
```
```js
// 编码 数据
'1754222435223'
// 用此方法可以将上面的数据进行 *编码处理*
d.r.fromString('1754222435223')
// 编码后的数据为：{"low": 1875778455, "high": 408, "unsigned": false}
```
```js
还原数据
biz_ext = [123,34,99,114,101,97,116,111,114,95,111,101,99,95,105,100,34,58,34,55,52,57,53,52,56,55,55,48,51,49,55,52,56,52,50,53,49,53,34,44,34,104,97,110,100,108,101,34,58,34,114,111,115,101,95,110,97,116,104,114,105,110,105,34,44,34,97,118,97,116,97,114,34,58,34,104,116,116,112,115,58,47,47,112,49,54,45,115,105,103,110,45,115,103,46,116,105,107,116,111,107,99,100,110,46,99,111,109,47,116,111,115,45,97,108,105,115,103,45,97,118,116,45,48,48,54,56,47,48,52,56,99,54,52,51,54,52,52,50,100,100,49,48,48,99,100,97,99,54,97,54,55,51,100,48,55,56,102,98,53,126,116,112,108,118,45,116,105,107,116,111,107,120,45,99,114,111,112,99,101,110,116,101,114,58,49,48,56,48,58,49,48,56,48,46,119,101,98,112,63,100,114,61,49,52,53,55,57,92,117,48,48,50,54,114,101,102,114,101,115,104,95,116,111,107,101,110,61,56,102,52,97,50,57,97,49,92,117,48,48,50,54,120,45,101,120,112,105,114,101,115,61,49,55,54,50,49,52,57,54,48,48,92,117,48,48,50,54,120,45,115,105,103,110,97,116,117,114,101,61,57,67,106,122,75,37,50,66,113,120,97,37,50,66,103,73,74,78,87,109,71,68,84,116,78,88,122,54,107,116,119,37,51,68,92,117,48,48,50,54,116,61,52,100,53,98,48,52,55,52,92,117,48,48,50,54,112,115,61,49,51,55,52,48,54,49,48,92,117,48,48,50,54,115,104,112,61,97,53,100,52,56,48,55,56,92,117,48,48,50,54,115,104,99,112,61,50,48,53,54,53,54,54,57,92,117,48,48,50,54,105,100,99,61,109,121,34,125]

// 先实例化 oec_seller_id=店铺ID  shop_region=店铺站点
ws = new WebSocketClient({oec_seller_id:"店铺ID,字符串类型", shop_region:"VN"});
// 执行还原功能
ws.decrypt_biz_ext(biz_ext)
// 数据还原后：'{"creator_oec_id":"7495487703174842515","handle":"rose_nathrini","avatar":"https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/048c6436442dd100cdac6a673d078fb5~tplv-tiktokx-cropcenter:1080:1080.webp?dr=14579\\u0026refresh_token=8f4a29a1\\u0026x-expires=1762149600\\u0026x-signature=9CjzK%2Bqxa%2BgIJNWmGDTtNXz6ktw%3D\\u0026t=4d5b0474\\u0026ps=13740610\\u0026shp=a5d48078\\u0026shcp=20565669\\u0026idc=my"}'
```