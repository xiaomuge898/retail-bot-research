## 轻松跳过烦人的人机，实现高效采集数据
<img src="https://raw.githubusercontent.com/xiaomuge898/xiaomuge898/refs/heads/main/walmart-img/2025-10-04_15-25-18.png" width="400"/>
<br>
<img src="https://raw.githubusercontent.com/xiaomuge898/xiaomuge898/refs/heads/main/walmart-img/2025-12-24_17-59-03.gif" width="1200"/>


#### 注意：模块方法都是封装好的，专过人机检测风控，最好不要随意修改，因为某些参数一旦修改，可能会造成一系列的请求错误，或人机无法绕过的情况，如果有什么问题，可以直接私。
### 改模块将会持续更新...

## 使用流程 0.0.3
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
4. 获取过人机验证的令牌
```python
WalMart = WalMart()
# 获取 _pxvid 令牌
get_pxvid_v2 = WalMart.get_pxvid_v2()
# 使用令牌请求资源
res = WalMart.request(
    url='https://www.walmart.com/ip/Skytech-Archangel-Gaming-PC-Desktop-AMD-Ryzen-7-7700-NVIDIA-GeForce-RTX-5060-1TB-Gen4-NVMe-SSD-32GB-DDR5-RAM-Windows-11/17438712331?athAsset=eyJhdGhjcGlkIjoiMTc0Mzg3MTIzMzEiLCJhdGhzdGlkIjoiQ1MwMjAiLCJhdGhhbmNpZCI6Ikl0ZW1DYXJvdXNlbCIsImF0aHJrIjowLjB9&athena=true',
    cookies={"_pxvid": get_pxvid_v2}
)
print(res.text)
# 注意：获取令牌后，最好等待5-10秒在使用。 1个令牌不能并发请求多个资源，想要并发请求资源可以自己搭建一个令牌池。
# 一个令牌可以请求多个资源，令牌如果失效了，可以存储起来，等待2-5个小时即可恢复使用，具体轮询时间请自测
# 建议请求数据使用socks5h协议代理,该协议支持服务器DNS解析, 并选择好的海外隧道IP池，支持自动更新IP是最好不过的方式。
# 获取令牌 WalMart.get_pxvid_v2(proxies={...}) 也可以自己设置独立的ip去请求令牌。
```

## 使用场景如下(非登陆模式)
1. 产品数据的采集(主要功能)
```python
from walmartBot import WalMart
# 实例化
WalMart = WalMart()
# 设置ip池，最好是隧道代理
WalMart.set_proxy("socks5h://username:password@ip:port/")
# 请求获取数据
res = WalMart.request('https://www.walmart.com/ip/Skytech-Archangel-Gaming-PC-Desktop-AMD-Ryzen-7-7700-NVIDIA-GeForce-RTX-5060-1TB-Gen4-NVMe-SSD-32GB-DDR5-RAM-Windows-11/17438712331?athAsset=eyJhdGhjcGlkIjoiMTc0Mzg3MTIzMzEiLCJhdGhzdGlkIjoiQ1MwMjAiLCJhdGhhbmNpZCI6Ikl0ZW1DYXJvdXNlbCIsImF0aHJrIjowLjB9&athena=true')
# 拿到数据
print(res.text)
```
2. 订单信息的采集
```python
import random
import re
import time
from walmartBot import WalMart

def get_tracking_cookie(tracking_id) -> dict:
    i = 0
    while i < 3:
        res = WalMart.request(f'https://www.walmart.com/tracking?tracking_id={tracking_id}')
        get_dict = res.cookies.get_dict()
        time.sleep(1)
        i += 1
        if len(get_dict) > 5:
            return get_dict

def get_tracking_data(cookie, tracking_id) -> dict:
    headers = {
        "accept": "*/*",
        "referer": f"https://www.walmart.com/tracking?tracking_id={tracking_id}&language=en",
        "Wm_consumer.Id": "27909687-61fa-401e-b321-27da8fa30291",
        "Wm_svc.Env": "prod2.0.0",
        "Wm_svc.Name": "HALO-DECK-CLIENT"
    }
    res = WalMart.request4(f'https://www.walmart.com/api/tracking?trackingId={tracking_id}&language=en',
                           headers={**WalMart.headers(''), **headers},
                           cookies=cookie
                           )
    try:
        res_data = res.json()
        return res_data
    except:
        print(f'错误html - {tracking_id}')

if __name__ == '__main__':
    # 实例化
    WalMart = WalMart()
    # 设置代理
    WalMart.set_proxy("socks5h://t16233522400727:gj7yv093@u980.kdltpspro.com:15818/")
    # 订单号
    tracking_ids = ['1LSCXLNA012957153', '1LSCXLNA012630543', '1LSCXLNA012279691', '1LSCXLNA012444333', '1LSCXLNA012958930', '1LSCXLNA012976471']
    for tracking_id in tracking_ids:
        # 获取cookie
        cookie = get_tracking_cookie(tracking_id)
        # 请求获取订单信息（高并发可能会出现其他小问题，如果请求报错，可以重试任务即可，整个流程可以稳定运行，成功率在80%以上，具体数据自己测）
        print(get_tracking_data(cookie, tracking_id))
```

### 注意！！！
1. 请试用socks5h协议代理，该协议支持服务器DNS解析
2. 请试用海外隧道IP池，稳定性强，防风控强
3. 本地试用的翻墙也要稳定，不要使用不稳定机场或节点，否定可能会请求失败报错等...
该风控可能由两种情况引起，一个是header检测，另一个是tls检测。
目前已解决header检测风控，测试后发现可以正常获取数据，如果多线程获取数据任然平凡出现风控，请联系我，我将添加tls指纹功能
