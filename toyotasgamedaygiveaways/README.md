## 轻松跳过烦人的人机
<img src="https://raw.githubusercontent.com/xiaomuge898/xiaomuge898/refs/heads/main/toyotasgamedaygiveaways-img/2025-12-24_16-58-43.png" width="800" />
<br/>
<img src="https://raw.githubusercontent.com/xiaomuge898/xiaomuge898/refs/heads/main/toyotasgamedaygiveaways-img/2025-12-24_17-47-59.gif" width="1200" />

#### 注意：该功能已经实现了绕过人机功能，但仅临时救急使用，感兴趣的可以二次修改封装，有空我在进行优化处理，如果有什么问题，可以直接私。
### 改模块将会持续更新...

## 使用流程

### 获取 _pxhd 令牌（该令牌可以绕过人机）
```python
from ToyotaGameDayGiveaways import ToyotaGameDayGiveaways

# 实例化
toyota = ToyotaGameDayGiveaways()

# 可以使用自己的本地vpn测试,获取直接挂上隧道ip池
# proxies = { 'http': 'socks5h://username:password@ip:port/', 'https': 'socks5h://username:password@ip:port/' }
proxies = { 'http': 'socks5h://127.0.0.1:7898', 'https': 'socks5h://127.0.0.1:7898' }

# 获取 _pxvid 令牌 (建议获取令牌后,稍微等待几秒后在使用)
_pxvid = toyota.get_pxvid_cookie(proxies=proxies)
print('_pxvid 令牌 -> ', _pxvid)

# 输入随机邮箱进行测试
res = toyota.initiate_request(_pxvid, '45623123412@gmail.com', None)
print('请求结果 -> ', res)
```


### 注意！！！
1. 请使用socks5h协议代理，该协议支持服务器DNS解析
2. 请使用海外隧道IP池，稳定性强，防风控强
3. 本地试用的翻墙也要稳定，不要使用不稳定机场或节点，否定可能会请求失败报错等...
4. ja3风控
5. 由于时间不足,只能临时解决一下,如果需要高并发,请魔改header和ja3指纹后,在进行并发使用
