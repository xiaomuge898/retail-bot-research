import json
import base64
import random
from curl_cffi import requests as cffi_requests
import requests
from string import digits, ascii_letters
import time
from functools import wraps
from typing import Union, Tuple, Optional

class WalMart:
    def __init__(self, proxies: str = None):
        self._raw_proxy: Optional[str] = proxies
        self.proxies: Optional[dict[str, str]] = self._format_proxy(proxies)

    def _format_proxy(self, proxy: Optional[str]) -> Optional[dict[str, str]]:
        return {"http": proxy, "https": proxy} if proxy else None

    def set_proxy(self, proxy: Optional[str]) -> None:
        """设置代理"""
        self._raw_proxy = proxy
        self.proxies = self._format_proxy(proxy)

    def disable_proxy(self) -> None:
        """禁用代理"""
        self.set_proxy(None)

    def current_proxy(self) -> Optional[str]:
        """获取当前原始代理字符串"""
        return self._raw_proxy

    def get_requests_proxy(self) -> Optional[dict[str, str]]:
        """获取可直接用于 requests 的代理配置"""
        return self.proxies

    def retry(*, max_retries: int = 3, delay: Union[int, float] = 1, exceptions: Tuple[Exception, ...] = (Exception,)):
        """装饰器重试"""
        def decorator(func):
            @wraps(func)
            def wrapper(*args, **kwargs):
                retries = 0
                while retries < max_retries:
                    try:
                        return func(*args, **kwargs)
                    except exceptions as e:
                        retries += 1
                        if retries >= max_retries:
                            raise e.__class__(f"操作在重试{max_retries}次后仍然失败: {e}")
                        time.sleep(delay)
            return wrapper
        return decorator

    @staticmethod
    def random_string(length: int = None) -> str:
        """随机字符串"""
        return ''.join(random.choice(ascii_letters + digits) for _ in range(length or random.randint(10, 30)))

    def headers(self, url: str) -> dict:
        """防分析"""
        v1 = random.randint(557, 600)
        v2 = 140
        v3 = 36 or random.randrange(6, 50, 2)
        v4 = random.choice([8, 24, 99, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36])
        dpr = round(random.uniform(0.5, 3.0), 2)
        downlink = round(random.uniform(0.5, 100.0), 2)
        headers = {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
            "accept-language": "zh-CN,zh;q=0.9",
            "cache-control": "no-cache",
            "pragma": "no-cache",
            "downlink": str(downlink),
            "referer": f'{url}?athcpid={v1}',
            "dpr": str(dpr),
            "priority": "u=0, i",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "none",
            "sec-fetch-user": "?1",
            "sec-gpc": "1",
            "upgrade-insecure-requests": "1",
            "sec-ch-ua": f"\"Chromium\";v=\"{v2}\", \"Not=A?Brand\";v=\"{v4}\", \"Google Chrome\";v=\"{v2}\"",  # 常用,
            "user-agent": f"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/{v1}.{v3} (KHTML, like Gecko) Chrome/{v2}.0.0.0 Safari/{v1}.{v3}",
            f"x-rand{self.random_string(random.randint(4, 9))}": f"{self.random_string()}-{self.random_string()}{self.random_string()}"
        }
        return headers

    @staticmethod
    def processing(url: str) -> dict:
        """url处理"""
        url = url.split("?")[0]
        commodity_id = url.split('/')[-1]
        return {"commodity_id": commodity_id, "url": url}

    @retry(max_retries=3)
    def request(self, url: str) -> requests.Response:
        """请求"""
        processing = self.processing(url)
        commodity_id = processing["commodity_id"]
        url = processing["url"]
        _ = {"athcpid":f"{commodity_id}","athstid":"CS020","athancid":"ItemCarousel","athrk":0.0}
        athAsset = base64.b64encode(
            json.dumps(
                _,
                ensure_ascii=False,
                separators=(',', ':')
            ).encode('utf-8')
        ).decode('utf-8')
        params = {
            "athpgid": "AthenaBrandPage",
            "athcgid": "null",
            "athieid": "v0",
            "athstid": "CS020",
            "athancid": "null",
            "athbdg": "L1600",
            "athAsset": athAsset,
            "athena": "true",
            "%": "%",
            f"{self.random_string(random.randint(6, 20))}": self.random_string(random.randint(1, 20)),
        }
        return requests.get(url=url, params=params, headers=self.headers(url), proxies=self.get_requests_proxy())

    @retry(max_retries=3)
    def request4(self, *args, **kwargs) -> cffi_requests.Response:
        """请求"""
        kwargs['proxies'] = self.get_requests_proxy()
        kwargs['impersonate'] = random.choice(["chrome136", "chrome131", "chrome124", "chrome123", "chrome120", "chrome119"])
        return cffi_requests.get(*args, **kwargs)

__all__ = ["WalMart"]