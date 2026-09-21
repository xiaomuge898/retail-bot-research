# 滑块缺口距离离线识别
![Python Version](https://img.shields.io/badge/Python-3.12|3.13|3.14-blue)
![CAPTCHA](https://img.shields.io/badge/CAPTCHA|version-1.1.4-blue)
> 支持：Temu/Fruugo/Tiktok/义乌购/GEETEST/数美/网易易盾/简书/腾讯天御/360天御/央视网...

> 支持滑块类型：小拼图 + 背景图

基于 OpenCV 和 NumPy 的离线滑块缺口定位工具。输入小拼图与背景图，返回背景图原始坐标系中的缺口横坐标 `x`。

本项目面向图像算法研究、离线测试和新型滑块样本适配，不包含浏览器控制、轨迹生成或在线请求逻辑。

## 功能

- 支持图片 `bytes`、纯 Base64 和 Base64 Data URL。
- 支持透明全高图和普通小拼图等多种图片结构。
- 结合 alpha 蒙版、高亮轮廓、低饱和特征、多阈值边缘和候选聚类定位缺口。
- 附带 175 组“小拼图 + 背景图”样本，其中 140 组用于开发适配，35 组用于冻结参数后的回归验证。

## 安装

建议使用 Python 3.12 和项目虚拟环境：

```bash
python -m venv .venv
```

Windows：

```powershell
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
```

macOS / Linux：

```bash
./.venv/bin/python -m pip install -r requirements.txt
```

## 使用
```python
from CAPTCHA import HumanBehaviorSimulator

hum = HumanBehaviorSimulator()
# 图片可以是 bytes 或 base64
xiaopingtu = "小拼图 bytes 或 base64"
beijingtu = "背景图 bytes 或 base64"
x = hum.slide_match_identify(xiaopingtu, beijingtu)
print("滑块缺口横坐标", x)
```

返回值对应原始背景图宽度。若展示页面缩放了图片，需要由调用方按显示宽度与原图宽度的比例换算。

## 样本包必须先解压

适配算法或运行完整回归测试前，直接解压 [`dev/样本.zip`](dev/%E6%A0%B7%E6%9C%AC.zip)。压缩包内的顶层目录已是 `样本/`，解压后结构如下：

```text
dev/样本/
├── 样本1/ ... 样本9/    # 140 组开发样本
└── 验证样本/             # 35 组冻结参数后的验证样本
```

压缩包和解压目录内容相同。项目默认忽略 `dev/样本/`，避免向 GitHub 重复提交两份样本。详细解压步骤和新型滑块适配流程见 [项目说明](dev/docs/项目说明.md)。

## 文档

- [项目说明](dev/docs/项目说明.md)
- [识别设计](dev/docs/superpowers/specs/2026-07-11-slider-gap-fusion-design.md)
- [新型滑块适配计划](dev/docs/superpowers/plans/2026-07-11-slider-gap-fusion.md)

## 风险与替代方案

- 未见过的尺寸、颜色或缺口结构可能超出现有规则覆盖范围，应先补充开发样本再调整特征。
- OpenCV 版本变化可能带来少量像素级差异，稳定部署时可锁定依赖版本。
- 当规则算法无法覆盖大量新结构时，可改用轻量目标检测模型；代价是需要更多标注、训练和模型部署工作。
