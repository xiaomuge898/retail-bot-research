from curl_cffi import requests

class ToyotaGameDayGiveaways:
    def __init__(self):
        self.headers = {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
            "accept-language": "zh-CN,zh;q=0.9",
            "cache-control": "no-cache",
            "pragma": "no-cache",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"137\", \"Brave\";v=\"137\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "none",
            "sec-fetch-user": "?1",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36"
        }

    def get_pxvid_cookie(self, proxies) -> str:
        url = "https://toyotasgamedaygiveaways.com/registration"
        response = requests.head(url, headers=self.headers, impersonate="chrome136", proxies=proxies)
        cookie = response.cookies.get_dict()
        if '_pxhd' in cookie and cookie.get('_pxhd'):
            # 5251c36cc32102cd098826541c90c2ad5fcebe017be9e6c3353a1c77bc05b82c:70408b30-e0a4-11f0-a9c9-553111d26c7e
            _pxvid = cookie['_pxhd'].split(':')[1]
            # 70408b30-e0a4-11f0-a9c9-553111d26c7e
            return _pxvid
        raise Exception('未获取到cookie')

    def initiate_request(self, _pxvid, email, proxies) -> dict:
        """发起请求测试"""
        headers = {
            **self.headers,
            "accept": "*/*",
            "accept-language": "zh-CN,zh;q=0.9",
            "cache-control": "no-cache",
            "content-type": "application/json",
            "origin": "https://toyotasgamedaygiveaways.com",
            "referer": "https://toyotasgamedaygiveaways.com/",
        }
        cookies = { "_pxvid": _pxvid }
        url = "https://toyotasgamedaygiveaways.com/api/enterEmail"
        data = {
            "extended": {
                "screenWidth": 1920,
                "screenHeight": 1080
            },
            "email": email
        }
        response = requests.post(url, headers=headers, impersonate="chrome136", cookies=cookies, json=data, proxies=proxies)
        # {'next': {'redirect': {'procedure': 'register', 'payload': {}}}}
        try:
            return response.json()
        except:
            raise Exception('已触发云盾')

__all__ = [ 'ToyotaGameDayGiveaways' ]