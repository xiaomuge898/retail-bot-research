## Geetest 极验4 人机验证参数生成方法

![Node Version](https://img.shields.io/badge/Node-v24.16.0-blue)

> 支持人机验证类型：滑动拼图验证/消消乐验证/文字点选验证/图标点选验证/字序点选验证/五子棋验证/九宫格验证/一键通过/svg图标验证

> 支持生成的载荷参数：w、td


> [!CAUTION]
> 此库仅用于教育和研究目的。使用此库即表示您同意遵守本地和国际数据抓取和隐私法律。作者和贡献者对本仓库代码的任何滥用不承担责任。始终尊重网站的服务条款和法律法规。

### [点击直达官网 geetest4 Demo 测试](http://gt4.geetest.com/)

`说明：支持纯node环境运行，所有的参数生成均无须补环境。`
|key|value|
|--|--|
|记录日期|2026-10-03|
|更新日期|2026-10-08|
|目标参数|td + w|
|极验版本|gt4|
|算法版本|v1.9.7|
|Node|v24.16.0|
|类型|webpack + 混淆|
|官方源码|[./source_gcaptcha4.js](./source_gcaptcha4.js)|
|ast解混淆后（可直接代替源码）|[./ast_gcaptcha4.js](./ast_gcaptcha4.js)|
|ast解混淆程序|[./ast_src/run.js](./ast_src/run.js)|
|w 参数生成|[./w_generate.js](./w_generate.js)|
|td 参数生成|[./td_generate.js](./td_generate.js)|



## ast 解混淆

#### 先使用 pnpm 安装模块包
```sh
cd ./ast_src
pnpm install
```
#### run.js 是入口文件，修改要解混淆的js文件路径和输出文件路径
```js
var ast_code = fs.readFileSync("./【极验4的源码】gcaptcha4.js", {encoding: 'utf-8'});

fs.writeFile("./解密后-结果.js", output, (err) => {});
```

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

