## 轻松跳过烦人的人机，实现高效采集数据
<img src="https://raw.githubusercontent.com/xiaomuge898/xiaomuge898/refs/heads/main/walmart-img/2025-10-04_15-25-18.png" width="400"/>

## 使用流程
1. 安装模块
```shell
pip install walmartBot
```
2. 导入模块
```python
from walmartBot import WalMart

WalMart = WalMart()
res = WalMart.request('https://www.walmart.com/ip/Skytech-Archangel-Gaming-PC-Desktop-AMD-Ryzen-7-7700-NVIDIA-GeForce-RTX-5060-1TB-Gen4-NVMe-SSD-32GB-DDR5-RAM-Windows-11/17438712331?athAsset=eyJhdGhjcGlkIjoiMTc0Mzg3MTIzMzEiLCJhdGhzdGlkIjoiQ1MwMjAiLCJhdGhhbmNpZCI6Ikl0ZW1DYXJvdXNlbCIsImF0aHJrIjowLjB9&athena=true')
print(res.text)
```
3. 代理配置与查看
```python
WalMart = WalMart()
# 设置代理
WalMart.set_proxy('socks5h://127.0.0.1:7898/')
WalMart.set_proxy("socks5h://username:password@ip:port/")
# 禁用代理
WalMart.disable_proxy()
# 查看代理字符串
print(WalMart.current_proxy())
# 查看request使用的代理
print(WalMart.get_requests_proxy())
```
### 注意！！！
该风控可能由两种情况引起，一个是header检测，另一个是tls检测。
目前已解决header检测风控，测试后发现可以正常获取数据，如果多线程获取数据任然平凡出现风控，请联系我，我将添加tls指纹功能
