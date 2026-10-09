## Geetest 极验4 人机验证参数生成方法

![Node Version](https://img.shields.io/badge/Node-v24.16.0-blue)

> 支持人机验证类型：滑动拼图验证/消消乐验证/文字点选验证/图标点选验证/字序点选验证/五子棋验证/九宫格验证/一键通过/svg图标验证

> [!CAUTION]
> 此库仅用于教育和研究目的。使用此库即表示您同意遵守本地和国际数据抓取和隐私法律。作者和贡献者对本仓库代码的任何滥用不承担责任。始终尊重网站的服务条款和法律法规。

### 测试网址
|网站|host|版本|人机类型|传送|
|--|:--:|--|:--:|--|
|官方geetest4 Demo 测试|http://gt4.geetest.com|v1.9.7|全部|[点击直达](http://gt4.geetest.com/)|
|七星影院|https://www.ui07nxj.com|v1.9.8|文字语序点选/图标点选|[点击直达](https://www.ui07nxj.com/login)|

### 解混淆后JS文件

`此混淆相对OB混淆，略微复杂一点点，但也可直接使用 ast 进行解混淆，并支持格式化`

- 这个是官方的源码和解混淆处理后的源码，可以直接在浏览器进行替换，变量没法恢复，但至少增加了可读性。

`gt4.js 是第三方人机验证的主脚本，他的版本是由官方统一更新迭代，和参数生成无关，但和接口验证逻辑相关，一旦官方更新，则代表接口的验证逻辑可能发生变化。` 

`gcaptcha4.js 是第三方人机验证参数生成的核心脚本，不同的版本，参数生成或加密参数的逻辑不同，通常不能共用同一种脚本生成参数` 

`人机验证类型通常由 captcha_id 用户控制`

![gt4](https://img.shields.io/badge/gt4-v4.2.1-blue)
![gcaptcha4](https://img.shields.io/badge/gcaptcha4-v1.9.7-blue)

|-|name|path|docs|
|:--|--|--|--|
|🤖主加载器（源码）|gt4-v4.2.1|[点击跳转](./source_src/gt4-v4.2.1/gt4-v4.2.1.js)|风控验证主脚本，未修改。|
|人机验证（源码）|gcaptcha4-v1.9.7|[点击跳转](./source_src/gcaptcha4-v1.9.7/gcaptcha4-v1.9.7.js)|1.9.7 版本的官方源码，未处理前|
|人机验证（解混淆后）|gcaptcha4-v1.9.7|[点击跳转](./decongestion_src/gcaptcha4-v1.9.7/gcaptcha4-v1.9.7.js)|1.9.7 版本源码解混淆后，可直接用于浏览器替换。|
|🛠️ast解混淆程序|gcaptcha4-v1.9.7|[点击跳转](./decongestion_src/gcaptcha4-v1.9.7/ast_src/run.js)|1.9.7 版本的人机验证 `gcaptcha4.js` 专用解混淆脚本 |
|人机验证（源码）|gcaptcha4-v1.9.8|[点击跳转](./source_src/gcaptcha4-v1.9.8/gcaptcha4-v1.9.8.js)|1.9.8 版本的官方源码，未处理前|
|人机验证（解混淆后）|gcaptcha4-v1.9.8|[点击跳转](./decongestion_src/gcaptcha4-v1.9.8/gcaptcha4-v1.9.8.js)|1.9.8 版本源码解混淆后，可直接用于浏览器替换。|
|🛠️ast解混淆程序|gcaptcha4-v1.9.8|[点击跳转](./decongestion_src/gcaptcha4-v1.9.8/ast_src/run.js)|1.9.8 版本的人机验证 `gcaptcha4.js` 专用解混淆脚本 |

### 支持生成的载荷参数

`请自行比对版本，请使用版本一致的js，【w、td】这两个参数是可以用于所有类型的人机验证，不同类型的人机验证，需要自行修改一下 w 传参即可，方法函数都已存在。`

`当一个参数内有两个版本时，则代表当前js生成的参数同时支持两个版本`

|逆向更新日期|参数|版本|位数|传送|
|--|:--:|--|:--:|--|
|2026-10-08|w|v1.9.7/v1.9.8|无固定|[w-v1.9.7.js](./w/w-v1.9.7.js)|
|2026-10-08|td|v1.9.7/v1.9.8|无固定|[td-v1.9.7.js](./td/td-v1.9.7.js)|



## `w` 参数生成

#### 将 `w_generate.js` 和 `decongestion.js` 一并下载到统一目录，修改 `data` 和 `options` 值后进行生成
```js
// 从接口获取
var options = {"options": {"pt": "1"}}

// 这个data需要自行拼接获取
var data = '{"passtime":3080,"userresponse":[[5254,4427],[2669,5073],[6215,1496]],"device_id":"","lot_number":"e6b9633e58214da6980d777a20ae8c68","pow_msg":"1|0|md5|2026-10-08 09:28:33.778174+08:00|008c0c24dd9338263c30346ef695e1d3|e6b9633e58214da6980d777a20ae8c68||5a3ace11be631602","pow_sign":"780807f0638e82be95b040d29cc81fa4","geetest":"captcha","lang":"zh","ep":"123","biht":"1426265548","d4tf":"9342","980d":{"b963777a":{"808d":"7a20"}},"em":{"ph":0,"cp":0,"ek":"11","wd":1,"nt":0,"si":0,"sc":0},"td_sign":"f65579333f4b539cd3c1907ee944dc4770e05f115bbb692fd41a9ad42e7c9337"}'

console.log(t.default(data, options))
// dfa5a0812c1dd8ffd274aea297a3d7a75589de82f89d0dd3404a49c6466...一目
```

#### 详解 `data` 参数内部构造
```json
{
    // 轨迹内最后一次end时间(t) 减去 第一次end时间(t) = 耗时时长 = 开始到结束时间间隔时长ms（passtime参数）
    "passtime": 3080,
    // 点选坐标/滑块终点...
    "userresponse": [[5254,4427],[2669,5073],[6215,1496]],

    // 接口返回的参数
    "lot_number": "e6b9633e58214da6980d777a20ae8c68",

    // 特殊参数，看下面详解
    "980d": {"b963777a":{"808d":"7a20"}},
    
    "pow_msg": "1|0|md5|2026-10-08 09:28:33.778174+08:00|008c0c24dd9338263c30346ef695e1d3|e6b9633e58214da6980d777a20ae8c68||5a3ace11be631602",
    "pow_sign": "780807f0638e82be95b040d29cc81fa4",

    // 固定
    "device_id": "",
    "geetest": "captcha",
    "lang": "zh",
    "ep": "123",
    "biht": "1426265548",
    "em": {"ph":0,"cp":0,"ek":"11","wd":1,"nt":0,"si":0,"sc":0},

    // 环境固定参数 window._lib
    "d4tf": "9342",

    "td_sign": "f65579333f4b539cd3c1907ee944dc4770e05f115bbb692fd41a9ad42e7c9337"
}
```
- `userresponse` 这个坐标点是经过处理后得出的，可以直接从轨迹(end)内提取，然后使用下方代码把轨迹的xy坐标转换成web像素px，然后在后面添加两位随机小数即可，最好不要让第一个小数大于等于5，因为按照官方代码逻辑，大于等于5则会进一，那么可能会出现偏差，导致值无法对应（官方没有这么严谨，可以忽略不计）
```js
function randomDecimal(integer) {
    integer = Math.floor(integer);
    const decimal = (Math.floor(Math.random() * 4) + 1) * 10
                  + Math.floor(Math.random() * 9) + 1;
    return integer * 100 + decimal;
}

var x = 256
var y = 146
console.log(randomDecimal(x / 3.05));
console.log(randomDecimal(y / 2));
```
 
- `"980d": {"b963777a":{"808d":"7a20"}}` 这个数据是由 `lot_number` 字段进行多次裁切拼接而成，具体看下方代码示例
```js
function parseLotNumber(r) {
    return {
        [r.slice(16, 20)]: {
            [r.slice(2, 6) + r.slice(20, 24)]: {
                [r[28] + r[18] + r[9] + r[13]]: r.slice(22, 26)
            }
        }
    };
}
console.log(JSON.stringify(parseLotNumber("e6b9633e58214da6980d777a20ae8c68")))
// {"980d":{"b963777a":{"808d":"7a20"}}}
```

- `pow_msg` 是用 已知参数+随机参数 进行组合而成。`pow_sign` 是通过将 `pow_msg` 哈希得来的，使用 `md5/sha256/...?` 需要依赖 `pow_detail.hashfunc`。 还有一个 `bits` 参数很重要，当他是非 `0` 时，则代表他对 `pow_sign` 有要求，如下面js代码所示，会陷入无限循环，每次循环都会刷新随机值，`pow_sign` 的值也会发送变化，直到 `pow_sign` 达到要求后才会跳出循环。

```js
// pow_detail.version|pow_detail.bits|pow_detail.hashfunc|device_id|pow_detail.datetime|captcha_id|lot_number||{{参数}}
// captcha_id 是网站在请求滑块验证码时使用的固定参数，通常由网站预先分配。不同网站对应的 captcha_id 不同，不能跨网站混用。可以将它理解为一种“授权 ID”，只有携带正确的 captcha_id，才能正常请求并获取对应的人机验证。
// var pow_msg = "1|0|md5|2026-10-08 09:28:33.778174+08:00|008c0c24dd9338263c30346ef695e1d3|e6b9633e58214da6980d777a20ae8c68||5a3ace11be631602"
function s(lot_number, captcha_id, hashfunc, version, bits, datetime, device_id) {
    const remainder = bits % 4;
    const prefixLength = Math.floor(bits / 4);
    const prefix = "0".repeat(prefixLength);

    const messagePrefix = [
        version,
        bits,
        hashfunc,
        datetime,
        captcha_id,
        lot_number,
        device_id,
        ""
    ].join("|");

    while (true) {
        const h = Array.from(
            { length: 4 },
            () => ((65536 * (1 + Math.random())) | 0).toString(16).substring(1)
        ).join("");

        const pow_msg = messagePrefix + h;

        const pow_sign = {
            md5: MD5,
            sha1: SHA1,
            sha256: SHA256
        }[hashfunc](pow_msg);

        if (!pow_sign.startsWith(prefix)) {
            continue;
        }

        if (remainder === 0 || pow_sign[prefixLength] <= [0, 7, 3, 1][remainder]) {
            return { pow_msg, pow_sign };
        }
    }
}
console.log(s("e6b9633e58214da6980d777a20ae8c68", "008c0c24dd9338263c30346ef695e1d3", "md5", "1", 0, "2026-10-08 09:28:33.778174+08:00", ""))
```

- `td_sign` 参数是由 `td` 结果用 `sha256` 哈希得出


## `td` 参数生成

#### 将 `td_generate.js` 和 `decongestion.js` 一并下载到统一目录，修改 `points` 值后进行生成
```js
// 轨迹
const points = [{"x":9,"y":121,"width":286.7021179199219,"height":248.07861328125,"t":0,"type":"start","source":1,"pressure":0},{"x":6,"y":100,"width":286.7021179199219,"height":248.07861328125,"t":54,"type":"move","source":1,"pressure":0},{"x":39,"y":90,"width":286.70208740234375,"height":248.07861328125,"t":73,"type":"move","source":1,"pressure":0},...]
// 轨迹转换处理，$Set 是自写方法
const trajectory_processing = t.default.prototype.$Set(points)
console.log("轨迹二次处理后 -> ", JSON.stringify(trajectory_processing))
// 轨迹加密
console.log("td参数 -> ", j.default(trajectory_processing))
//  H4sIAJn9xmoAA1WVMY4cOwxE79JxYyGJIinNVRYbfuAnBgw4cGD47i4WqZnZxO...
```

#### 详解 `points` 参数内部构造
```json
{   
    // 活动区域（通常是固定大小）
    "width": 301.79168701171875,
    "height": 261.13543701171875,
    
    // 鼠标的坐标
    "x": 9,
    "y": 121,

    // 累积耗时
    "t": 0,

    // 类型，开始/移动/点击（按下和结束）
    "type": "start",

    // 固定
    "source": 1,

    // 看下面详解
    "pressure": 0
}
```
- 轨迹记录 `活动区域`，这个是用来记录鼠标在指定区域内的移动轨迹和鼠标点击情况，当前人机验证并非监听整个页面，而是仅监听`人机图片区域到按钮区域`的鼠标事件，超出区域的事件是不会记录写入轨迹的。
```json
{
    // 这个大小写死即可，通常是固定的。如果修改了这个尺码，通常也需要跟进并更新一下轨迹和坐标的二次处理。
    "width": 301.79168701171875,
    "height": 261.13543701171875,
}
```

<img width="900" src="https://raw.githubusercontent.com/xiaomuge898/xiaomuge898/refs/heads/main/geetest-img/331251604f566dd6b1c918bfa88bb0bd.jpg" />

- `pressure` 这个值有两种状态，`0 和 0.5`，分别代表 `已完成、待完成`，鼠标轨迹每次滑动都是 `0`,代表记录已完成，而鼠标点击按下的那一刻，他是 `0.5`，代表 `待完成`，因为鼠标按下去后还没有抬起来，当按下抬起后，那么这个动作即代表完成 `0`。

