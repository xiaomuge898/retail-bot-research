## 网易易盾 人机验证参数生成方法

![Node Version](https://img.shields.io/badge/Node-v24.16.0-blue)

> 支持人机验证类型：滑动拼图验


> [!CAUTION]
> 此库仅用于教育和研究目的。使用此库即表示您同意遵守本地和国际数据抓取和隐私法律。作者和贡献者对本仓库代码的任何滥用不承担责任。始终尊重网站的服务条款和法律法规。

### [点击直达官网 网易易盾 Demo 测试](https://dun.163.com/trial/jigsaw)

### 解混淆后JS文件

`OB混淆比较简单，直接使用 ast 进行解混淆，并支持格式化`

- 这个是官方的源码和解混淆处理后的源码，可以直接在浏览器进行替换，变量没法恢复，但至少增加了可读性。

|-|name|path|
|:--|--|--|
|源码|core-optimi-v2.28.5|[点击跳转](./source_src/core-optimi-v2.28.5/core-optimi.m25b40.v2.28.5.min.js)|
|解混淆后|core-optimi-v2.28.5|[点击跳转](./decongestion_src/core-optimi-v2.28.5/core-optimi.m25b40.v2.28.5.min.js)|
|ast解混淆程序|core-optimi-v2.28.5|[点击跳转](./decongestion_src/core-optimi-v2.28.5/ast_src/run.js)|
|源码|ir-v2.0.13|[点击跳转](./source_src/ir-v2.0.13/ir.2.0.13.min.js)|



### 支持生成的载荷参数
|逆向更新日期|参数|版本|位数|传送|
|--|--|--|--|--|
|2026-10-09|cb|v2.28.5|92位|[cb-v2.28.5.js](./cb/cb-v2.28.5.js)|
|2026-10-09|fp|v2.28.5|190位|[fp-v2.28.5.js](./fp/fp-v2.28.5.js)|