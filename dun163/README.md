## 网易易盾 人机验证参数生成方法

![Node Version](https://img.shields.io/badge/Node-v24.16.0-blue)

> [!CAUTION]
> 此库仅用于教育和研究目的。使用此库即表示您同意遵守本地和国际数据抓取和隐私法律。作者和贡献者对本仓库代码的任何滥用不承担责任。始终尊重网站的服务条款和法律法规。

### 测试网址
|网站|host|版本|人机类型|传送|
|--|:--:|--|:--:|--|
|163邮箱|https://mail.163.com|v2.21.5|滑块/文字点选/无感|[点击直达](https://mail.163.com/)|
|官方网易易盾 Demo 测试|https://dun.163.com|v2.28.5|全部|[点击直达](https://dun.163.com/trial/jigsaw)|
|销售云|https://www.xiaoshouyi.com|v2.28.5|滑块|[点击直达](https://www.xiaoshouyi.com/register)|


### 解混淆后JS文件

`OB混淆比较简单，直接使用 ast 进行解混淆，并支持格式化`

- 这个是官方的源码和解混淆处理后的源码，可以直接在浏览器进行替换，变量没法恢复，但至少增加了可读性。

`load.min*.js 是第三方人机验证的主脚本，他的版本是由官方统一更新迭代，和参数生成无关，但和接口验证逻辑相关，一旦官方更新，则代表接口的验证逻辑可能发生变化。` 

`core-optimi*.js、core*.js 是第三方人机验证参数生成的核心脚本，不同的版本，参数生成的逻辑不同，通常不能共用同一种脚本生成参数` 


![load.min](https://img.shields.io/badge/load.min-v2.5.4-blue)
![core*](https://img.shields.io/badge/core%2A-v2.28.5-blue)

|-|name|path|docs|
|:--|--|--|--|
|🤖主加载器（处理后）|load.min-v2.5.4|[点击跳转](./decongestion_src/load.min-v2.5.4/load.min.js)|风控验证主脚本已优化，移除人机验证链接末尾的时间戳参数，防止刷新网页导致断点丢失。|
|人机验证（源码）|core-optimi-v2.28.5|[点击跳转](./source_src/core-optimi-v2.28.5/core-optimi.m25b40.v2.28.5.min.js)|2.28.5 版本的官方源码，未处理前|
|人机验证（解混淆后）|core-optimi-v2.28.5|[点击跳转](./decongestion_src/core-optimi-v2.28.5/core-optimi.m25b40.v2.28.5.min.js)|2.28.5 版本源码解混淆后，可直接用于浏览器替换。|
|🛠️ast解混淆程序|core-optimi-v2.28.5|[点击跳转](./decongestion_src/core-optimi-v2.28.5/ast_src/run.js)|2.28.5 版本的人机验证 `core-optimi*.js` 专用解混淆脚本 |
|其他（源码）|ir-v2.0.13|[点击跳转](./source_src/ir-v2.0.13/ir.2.0.13.min.js)|...|



### 支持生成的载荷参数

`请自行比对版本，请使用版本一致的js，【cb、fp、NECaptchaValidate】这三个参数是可以用于所有类型的人机验证，【data】不同类型的人机验证，需要自行修改一下加密逻辑即可，方法函数都已存在。`

`当一个参数内有两个版本时，则代表当前js生成的参数同时支持两个版本`

|逆向更新日期|参数|版本|位数|传送|
|--|:--:|--|:--:|--|
|2026-10-09|cb|v2.28.5|92位|[cb-v2.28.5.js](./cb/cb-v2.28.5.js)|
|2026-10-09|fp|v2.28.5/v2.21.5|190位|[fp-v2.28.5.js](./fp/fp-v2.28.5.js)|
|2026-10-09|NECaptchaValidate|v2.28.5|531位|[NECaptchaValidate-v2.28.5.js](./NECaptchaValidate/NECaptchaValidate-v2.28.5.js)|
|2026-10-09|data|v2.28.5|无固定|[data-v2.28.5.js](./data/data-v2.28.5.js)|

### `cb` 参数生成详解
- 这个参数生成不依赖浏览器环境指纹，只要把代码一个一个扣下来即可，要多注意 `try` 异常包，可能会出现异常不抛出仅返回空值。

### `fp` 参数生成详解
- 这个参数在扣代码的过程中，会遇补环境，例如 `_0x5ecc4a` 变量，最终是一个 `['7464393905049', '9182022974468']` 的一个环境指纹，但服务器并不会做强校验，所以只要生成指纹即可，生成指纹所需要的环境参数，可以随便写。
- 参数生成的过程中，会遇到多个 `try` 异常包，如果不多观察，就会导致返回的结果无法使用，或者为空。
- `fp` 参数生成，有一个环境是强校验，`host` 域名，这个域名是当前正在使用人机验证的网站，这个是必填项，填错或不填都会导致人机验证过不去，也可能会出现人机验证成功，但最终的 `NECaptchaValidate` 值验收不通过。
- 这个参数在刷新页面时生成，可以使用下方hook代码进行抓取，先清除 `本地存储空间` 的 `gdxidpyhxdE` 字段，然后在 `事件监听器` 的 `脚本` 开启断点，然后在刷新页面，当页面断住后，执行下方代码即可
```js
// cookie hook 脚本
(function () {
    // 保存原始的 document.cookie
    var $cookie = document.cookie;
    // ****************** 处理是否更新或添加 cookie
    var flag = true;  // false=拦截cookie不设置， true=正常设置cookie
    Object.defineProperty(document, "cookie", {
        set: function (val) {
            console.log(`[J] - cookie设置内容 -> ${val}`);
            if (val.indexOf("gdxidpyhxdE") !== -1) {
                console.log(`[J] - cookie捕获到设置 已断点 -> ${val}`);
                debugger;
                flag = false;  // 该参数不设置
            } else {
                flag = true;
            }

            // 提取出 cookie 名和值
            const cookie = val.split(";")[0];
            const ncookie = cookie.split("=");
            console.log(`[J] - cookie设置 -> [${ncookie[0]}]==[${ncookie[1]}]`);

            // 更新 $cookie，避免重复添加同一个 cookie
            const cache = $cookie.split("; ").map((item) => {
                const [key] = item.split("=");
                if (key === ncookie[0]) {
                    flag = true;
                    return cookie;  // 替换已有的 cookie
                }
                return item;  // 保持原有的 cookie
            });

            // 如果没有找到该 cookie，就将其添加到 cookie_cache
            if (!!flag) {
                cache.push(cookie);
            }

            // 更新 cookie_cache，并合并所有 cookies
            $cookie = cache.join("; ");
            return $cookie;
        },
        get: function () {
            return $cookie;
        }
    });
})();
```

### `NECaptchaValidate` 参数生成详解
- 这个参数和 `cb` 参数生成用的是同一个方法，直接照搬过来即可使用。

### `data` 参数生成详解
- 这个参数也是扣代码，和 `cb` 和 `fp` 方法是一样的，但需要额外补充一些缺失的方法。
- 我将 `cb`、`fp`、`NECaptchaValidate` 三种参数组合到一个 `data` 文件内，支持所有的参数生成。
```js
e.fp = _0x28c2a9;     // fp 参数生成
e.cb = _0x62692;      // cb 参数生成
e.NECaptchaValidate = _0xab267f;    // NECaptchaValidate 参数生成
e.sliderVerifyCaptcha = sliderVerifyCaptcha;    // 滑块 data 参数生成
e.textClickVerifyCaptcha = textClickVerifyCaptcha;    // 文字点选 data 参数生成
... // 所有的data都差不多，自行补全吧，代码我都扣完了，直接补一下不同类型的 data 参数生成逻辑即可
```