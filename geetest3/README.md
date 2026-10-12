## Geetest 极验3 人机验证参数生成方法

![Node Version](https://img.shields.io/badge/Node-v24.16.0-blue)

> 支持人机验证类型：滑动拼图验证

> [!CAUTION]
> 此库仅用于教育和研究目的。使用此库即表示您同意遵守本地和国际数据抓取和隐私法律。作者和贡献者对本仓库代码的任何滥用不承担责任。始终尊重网站的服务条款和法律法规。

### 测试网址
|网站|host|版本|人机类型|传送|
|--|:--:|:--:|:--:|--|
|官方geetest3 Demo 测试|https://demos.geetest.com|fullpage-v9.2.0/slide-v7.9.3/click-v3.1.2|无感/滑块/文字图标点选|[点击直达](https://demos.geetest.com)|
|LGNewUi|https://auth-love.kikiw.cn|slide-v7.9.3|滑块|[点击直达](https://auth-love.kikiw.cn/user/index/login.html)|
|异网带宽流量采集平台|http://101.69.219.249:8083|slide-v7.9.3|滑块|[点击直达](http://101.69.219.249:8083/findpsd)|
|TextIn|https://www.textin.com|fullpage-v9.2.0/slide-v7.9.3/click-v3.1.2|无感/滑块/文字图标点选|[点击直达](https://www.textin.com/user/login?redirect=%2F)|

### 解混淆后JS文件

`此混淆相对OB混淆，略微复杂一点点，但也可直接使用 ast 进行解混淆，并支持格式化`

- 这个是官方的源码和解混淆处理后的源码，可以直接在浏览器进行替换，变量没法恢复，但至少增加了可读性。

`gt.js 是第三方人机验证的主脚本，他的版本是由官方统一更新迭代，和参数生成无关，但和接口验证逻辑相关，一旦官方更新，则代表接口的验证逻辑可能发生变化。` 

`fullpage*.js 是第三方人机验证参数生成的核心脚本，不同的版本，参数生成或加密参数的逻辑不同，通常不能共用同一种脚本生成参数，这个脚本可以用来验证无感人机，当无感验证失败后会加载其他脚本，例如：滑块、文字点选` 

`slide*.js 是第三方用来实例滑块人机验证`

`click*.js 是第三方用来实例文字图标点选人机验证`


![gt3](https://img.shields.io/badge/gt3-v0.4.8-blue)
![slide](https://img.shields.io/badge/slide-v7.9.3-blue)
![fullpage](https://img.shields.io/badge/fullpage-v9.2.0-blue)
![click](https://img.shields.io/badge/click-v3.1.2-blue)

|-|name|path|docs|
|:--|--|--|--|
|🤖主加载器（源码）|gt-v0.4.8|[点击跳转](./source_src/gt-v0.4.8.js)|风控验证主脚本，未修改。|
|人机验证（源码）|slide-v7.9.3|[点击跳转](./source_src/slide-v7.9.3/slide.7.9.3.js)|7.9.3 版本的官方源码，未处理前|
|人机验证（解混淆后）|slide-v7.9.3|[点击跳转](./decongestion_src/slide-v7.9.3/slide.7.9.3.js)|7.9.3 版本源码解混淆后，可直接用于浏览器替换。|
|🛠️ast解混淆程序|slide-v7.9.3|[点击跳转](./decongestion_src/slide-v7.9.3/ast_src/run.js)|7.9.3 版本的人机验证 `slide-v7.9.3` 专用解混淆脚本 |
|人机验证（源码）|fullpage-v9.2.0|[点击跳转](./source_src/fullpage-v9.2.0/fullpage.9.2.0-guwyxh.js)|9.2.0 版本的官方源码，未处理前|
|人机验证（解混淆后）|fullpage-v9.2.0|[点击跳转](./decongestion_src/fullpage-v9.2.0/fullpage.9.2.0-guwyxh.js)|9.2.0 版本源码解混淆后，可直接用于浏览器替换。|
|🛠️ast解混淆程序|fullpage-v9.2.0|[点击跳转](./decongestion_src/fullpage-v9.2.0/ast_src/run.js)|9.2.0 版本的人机验证 `fullpage-v9.2.0` 专用解混淆脚本 |
|人机验证（源码）|click-v3.1.2|[点击跳转](./source_src/click-v3.1.2/click.3.1.2.js)|3.1.2 版本的官方源码，未处理前|
|人机验证（解混淆后）|click-v3.1.2|[点击跳转](./decongestion_src/click-v3.1.2/click.3.1.2.js)|3.1.2 版本源码解混淆后，可直接用于浏览器替换。|
|🛠️ast解混淆程序|click-v3.1.2|[点击跳转](./decongestion_src/click-v3.1.2/ast_src/run.js)|3.1.2 版本的人机验证 `click-v3.1.2` 专用解混淆脚本 |

### 支持生成的载荷参数

`请自行比对版本，请使用版本和人机验证类型都一致的js，不同类型的人机验证，生成的逻辑不同，可能存在密钥或参数关联，。`

`当一个参数内有两个版本时，则代表当前js生成的参数同时支持两个版本`

|逆向更新日期|参数|版本|位数|传送|
|--|:--:|--|:--:|--|
|2026-10-11|w|v7.9.3|无固定|[w-slide-v7.9.3.js](./w/w-slide-v7.9.3.js)|
|2026-10-12|w*2|v9.2.0|无固定|[w-fullpage-v9.2.0.js](./w/w-fullpage-v9.2.0.js)|
|2026-10-12|w|v3.1.2|无固定|[w-click-v3.1.2.js](./w/w-click-v3.1.2.js)|

### 图片还原脚本

![Python Version](https://img.shields.io/badge/Python-3.12-blue)

`针对极验3版本的图片还原，支持两种，一个是老版本的图片还原，一个是当前版本的图片还原，具体可以看脚本注释`

- 点击传输到脚本目录 [`restore_image.py`](./py_script/)，已存放两种不同的图片，可测试还原。


## 📚 `w` 参数生成

<details>

<summary>🔧 滑块 slide 版本兼容：v7.9.3</summary>

#### 此版本滑块验证通过，可使用下方代码生成 `w` 参数
```js
// 轨迹（需自行生成）
var trajectory = [[-30,-32,0],[0,0,0],...,[106,12,940],[106,12,1147]]

// 筛选此接口 geevisit.com/get.php，里面有所需数据
var c = [12, 58, 98, 36, 43, 95, 62, 15, 12]
var s = "3a286c37"
var gt = "dc214b06795c6a41682dfb100b164993"
var challenge = "00960984805d7232e87d8606b46ab0ca70"

var data = w_o(trajectory, c, s, gt, challenge)

var h = w_slide(data)
console.log(h)
// aj99rQBCpNVwrbZ6TmOwH4ojguRckB18SoCoJc3xqKVLEBOqyj7NTEDfvNdV0Eh...
```

#### 详解 `data` 参数内部构造

- 这参数没什么好说的，注释都在源码里，看一下就能懂

```json
{
    "aa": $_BBEl($_FDd(trajectory), c, s),
    "ep": {
        // 滑块版本号
        "v": "7.9.3",
        // 触摸事件，手机端:true, pc:false
        "$_BIT": false,
        // 鼠标事件，手机端:false，pc:true
        "me": true,
        // 写死即可，应该不是强校验
        "tm": {
            "a": 1791668063818,
            "b": 1791668064065,
            "c": 1791668064065,
            "d": 0,
            "e": 0,
            "f": 1791668063819,
            "g": 1791668063822,
            "h": 1791668063824,
            "i": 1791668063824,
            "j": 1791668063896,
            "k": 1791668063859,
            "l": 1791668063896,
            "m": 1791668064055,
            "n": 1791668064057,
            "o": 1791668064068,
            "p": 1791668064209,
            "q": 1791668064209,
            "r": 1791668064209,
            "s": 1791668064395,
            "t": 1791668064395,
            "u": 1791668064397
        },
        // 固定
        "td": -1
    },
    // 固定
    "h9s9": "1816378497",
    "lang": "zh-cn",
    // 滑块初始化渲染加载耗时时间，随机 30 - 200 毫秒之间
    "imgload": Math.floor(Math.random() * (200 - 30 + 1)) + 30,
    "passtime": passtime,
    // md5
    "rp": X(gt + challenge["slice"](0, 32) + passtime),
    "userresponse": H(x, challenge)
}
```

- 要注意一个地方，`AES 加密内容所使用的密钥`，这个密钥一定要先生成，然后用 RSA 去加密并验证是否符合 `256` 长度，当 `RSA 加密通过后`，再让 AES 使用密钥加密内容，否则会导致服务器验证报错显示 `param decrypt error`
```js
function w_slide(data){
    // 先运行 RSA
    var u = rsa_encrypt()
    // 后运行 AES
    var h = aes_encrypt(data)
    return h + u
}
```

</details>



<details>

<summary>🔧 无感 fullpage 版本兼容：v9.2.0</summary>

#### 此版本无感验证通过，可使用下方代码生成 `w` 参数

`注意：由于官方对 gt、challenge 并不是强校验，下面所以的参数都可以写死，直接生成结果使用即可`

```js
// 第一次 w 参数结果，用于提交aes的密钥，没其他用途，无须传参
console.log("接口一提交 -> ", w_wind_1())

// 写死即可
var c = [12, 58, 98, 36, 43, 95, 62, 15, 12]
var s = Array.from({ length: 8 }, () => Math.floor(Math.random() * 9) + 1).join('');

// 填写接口返回的内容(也可写死，并非强校验)
var gt = "cb25522b383a44c171e2e6566654c18f"
var challenge = "d3863ef34e909121a7189476fff50358" 
// 第二次 w 参数结果，据我分析，这个参数是弱校验，只要数据没问题就给放行，哪怕是写死的参数，也可以正常使用
console.log("接口二验证 ->  ", w_wind_2(c, s, gt, challenge))
```

- demo 测试脚本 [`demo-fullpage.9.2.0.py`](./py_script/) 可以自行测试


</details>

<details>

<summary>🔧 文字图标 click 版本兼容：v3.1.2</summary>

#### 此版本文字图标验证通过，可使用下方代码生成 `w` 参数

`官方并未做强校验，部分参数可以写死或随机，但下面这三次参数是必须要实打实的填写，gt 和 challenge 可以在接口内找到，而 coordinate_list 坐标可以通过OCR识别，原图使用ocr识别出来的坐标，是可以直接使用，无须二次处理`

```js
// 要点击的 文字/图标 的坐标，ocr识别出来的坐标可以直接使用
var coordinate_list = [
    [142,205],
    [225,218]
]

// 下面这两个参数接口会有返回
var gt = '5172bacee2537149aa63fc966c3796d9'
var challenge = '87e6c969c9f5212861febbeb06e220c9'
console.log(w_click(gt, challenge, coordinate_list))
```

</details>