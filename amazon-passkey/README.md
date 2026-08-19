## Amazon Passkey 临时复刻

> 亚马逊将在7月起向所有卖家中心账户推出通行密钥（Passkeys）。这是一种新的免密登录方式，后续将逐步取代部分传统“账号密码+验证码”的登录流程。

> Passkey 临时复刻主要用于多设备且指纹浏览器不唯一的时候使用，比如：A类型的指纹浏览器已绑定Passkey，但B指纹浏览器是另一个家公司开发的，但无法绑定Passkey，但自动化项目需要用Passkey，那么这个时候就需要用到Passkey临时复刻，复刻后不影响原有的Passkey

## 免责声明

> [!CAUTION]
> 此库仅用于教育和研究目的。使用此库即表示您同意遵守本地和国际数据抓取和隐私法律。作者和贡献者对本软件的任何滥用不承担责任。始终尊重网站的服务条款和法律法规。

### Credential 完整材料
- 这个材料是通过CDP获取（如果某些指纹浏览器使用插件强行接管navigator.credentials.create，那么可能会导致无法获取到这个值，那就只能通过逆向分析去获取）
```json
{
  "method": "WebAuthn.credentialAsserted",
  "params": {
    "authenticatorId": "1d79effc-4e55-4cef-8c87-5585b53c44cc",
    "credential": {
      "credentialId": "pv5KacxoHeuvQeWekJeCufhcivdgfRoBNAW54b2+mM8=",
      "isResidentCredential": true,
      "rpId": "amazon.co.uk",
      "privateKey": "MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgKJ5UAT+FcFtjeFXNXHSGhP0Xnaalibu0lNDCPYLtAZKhRANCAAQaOlFCEDSpboXE3mu8EPXYrjGsoS0HhBykFLwINgm+dp52mnH46N4cgrRqQ9kg609qL6CQ3IVy7NaXit0ugUVr",
      "userHandle": "ZzZiNzhjYTRiYzM2aDdiMmNkZjkzZDllNmJlNDQzMWE0Nzc2ZTY5MGFkMzEzOWQ3OWIxMzY3MmRkMDVlYzg4Nw==",
      "signCount": 20,
      "backupEligibility": false,
      "backupState": false,
      "userName": "buskme...@outlook.com",
      "userDisplayName": "gewei"
    }
  }
}
```

### CDP流程如下
#### 1、CDP 官方要求先启用 WebAuthn Domain；WebAuthn.enable 会让当前 session 开始使用 Virtual Authenticator 环境。
```shell
# 开启虚拟 Virtual Authenticator 环境
method：WebAuthn.enable
params：{
    "enableUI": false
}
```

#### 2、获取 authenticator_id
```shell
method：WebAuthn.addVirtualAuthenticator
params：{
    "options": {
        "protocol": "ctap2",
        "transport": "internal",
        "hasResidentKey": true,
        "hasUserVerification": true,
        "automaticPresenceSimulation": true,
        "isUserVerified": true
    }
}
```
#### 3、创建 navigator.credentials.create
```shell
# 在官方passkey创建页面进行创建，创建成功后，CDP会自动返回 `Credential 完整材料`
```
#### 4、获取 Credential 完整材料
- 如果没有返回 `Credential 完整材料`，则使用下面这个命令获取
```shell
method：WebAuthn.getCredentials
params：{
    # 填入 authenticator_id
    "authenticatorId": "ace3c500-d7ed-45e5-92c4-2acb4b84b25e"
}
```
### 根据以上材料在B指纹环境复刻Passkey
- 在B环境执行上面的 【1、2】
- 获取到 authenticator_id 后，把 `Credential 完整材料` 填入下面，然后执行
- 注意：如果【credentialId、privateKey、userHandle】内存在 `-` `_` 这两种字符，则需要替换一下 `replace(/-/g, "+").replace(/_/g, "/")`

```shell
method：WebAuthn.addCredential
params：{
    # 这个id要填 authenticator_id
    "authenticatorId": authenticator_id,
    "credential": {
        "credentialId": "pv5KacxoHeuvQeWekJeCufhcivdgfRoBNAW54b2+mM8=",
        "isResidentCredential": True,
        "rpId": "amazon.co.uk",
        "privateKey": "MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgK.....",
        "userHandle": "ZzZiNzhjYTRiYzM2aDdiMmNkZjkzZDllNmJlNDQzMWE0Nzc2ZTY5MGFkMzEzOWQ3OWIxMzY3MmRkMDVlYz...",
        "signCount": 1, # 计数
    },
}
```
### 其他工具
```js
function pa(a) {
    return Uint8Array.from(a, function(a) {
        return a.charCodeAt(0)
    }).buffer
}
function Ma(a) {
    return pa(atob(a.replace(/-/g, "+").replace(/_/g, "/")))
}
function Kf(a){
    return btoa(
        String.fromCharCode(
            ...new Uint8Array(a)
        )
    );
}
// 文本 转 ArrayBuffer
var l = Ma("nNIHXb/1Sg9HflhEYf2oH+pKch0nKIwh4ZvJrbxzGIU=")

// ArrayBuffer(32) {byteLength: 32, maxByteLength: 32, resizable: false, detached: false}
console.log(l)


// ArrayBuffer 转 文本
var k = Kf(l)

// nNIHXb/1Sg9HflhEYf2oH+pKch0nKIwh4ZvJrbxzGIU=
console.log(k)
```