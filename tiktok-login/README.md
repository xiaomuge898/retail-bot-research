## Tiktok 登录参数加密方法
> 支持：Tiktok 本土/非本土

> 支持站点类型：MY/PH/SG/TH/VN/US/IT/AT/BE/DE/ES/FR/GR/IE/CZ/HU/NL/PL/PT(东南亚/美区/欧区)

> [!CAUTION]
> 此库仅用于教育和研究目的。使用此库即表示您同意遵守本地和国际数据抓取和隐私法律。作者和贡献者对本仓库代码的任何滥用不承担责任。始终尊重网站的服务条款和法律法规。

#### 本库只提供官方的函数方法
```js
// 要加密的字段
var type_list = ["mobile", "username", "email", "account", "password", "code"]
// 载荷
var body = {
    "username": "qweqwe@165.com",
    "email": "qweqwe@165.com",
    "account_sdk_source": "web",
    "email_logic_type": "0"
}
console.log(encryptParams(body, type_list))
// 结果：{mix_mode: 1, username: '747260747260453433302b666a68', email: '747260747260453433302b666a68', account_sdk_source: 'web', email_logic_type: '0'}
```


### 定位加密位置
- 打开发信页面、打开F12面板
- 登录随便填，点击登录，找到登录的链接
- 堆栈从底部开始找 能匹配 `e.*Login` 就直接打断点，例如：`e.singleUserLogin` `e.totpVerifyWithoutLogin`
- 加密关键字 `n4.a.encryptParams`