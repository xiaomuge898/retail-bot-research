## 轻松跳过烦人的人机，实现高效采集数据
<img src="https://raw.githubusercontent.com/xiaomuge898/xiaomuge898/refs/heads/main/wayfair-img/2025-12-15_16-21-36.png" width="400"/>

#### 注意：该功能已经实现了绕过人机功能，但仅临时救急使用，感兴趣的可以二次修改封装，有空我在进行优化处理，如果有什么问题，可以直接私。
### 改模块将会持续更新...

## 使用流程

### 获取 pxvid 令牌（该令牌可以绕过人机）
```python
from wayfairBot import Wayfair

wayfair = Wayfair()
pxvid = wayfair.get_pxvid()
print(pxvid)  # f577094a-d998-11f0-a607-866ad95254b4
```

### 请求网页数据（会自动获取 pxvid 令牌）
```python
from wayfairBot import Wayfair

wayfair = Wayfair()
data = wayfair.get_url_data('https://www.wayfair.com/storage-organization/pdp/ophelia-co-435-shoe-storage-bench-with-lift-top-storage-and-removable-cushion-shoe-bench-with-3-barn-doors-and-adjustable-shelf-for-entryway-bedroom-w114567370.html?piid=1904109882&auctionId=aeb46527-ff31-45ee-b612-84e16ce682b9&trackingId=%7B%22adType%22%3A%22WSP%22%2C%22auctionId%22%3A%22aeb46527-ff31-45ee-b612-84e16ce682b9%22%7D&adTypeId=1')
print(data)    # <html>...</html>
```

### 令牌的复用
```python
from wayfairBot import Wayfair

wayfair = Wayfair()
# 请求一个新令牌
wayfair.get_pxvid()
# latest 
#   True 默认值，每次请求会自动获取最新的pxvid令牌
#   False, 重复使用同一个令牌（只能手动请求更换新的令牌）
data = wayfair.get_url_data(url='https://www.wayfair.com/....', latest=False)
print(data)    # <html>...</html>
```


### 注意！！！
1. 请使用socks5h协议代理，该协议支持服务器DNS解析
2. 请使用海外隧道IP池，稳定性强，防风控强
3. 本地试用的翻墙也要稳定，不要使用不稳定机场或节点，否定可能会请求失败报错等...
