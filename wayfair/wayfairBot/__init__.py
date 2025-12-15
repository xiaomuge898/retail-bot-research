import json
import base64
import re
import requests
from typing import Optional

class Wayfair:
    def __init__(self):
        self.headers = {
            "accept": "*/*",
            "accept-language": "zh-CN,zh;q=0.9",
            "cache-control": "no-cache",
            "origin": "https://www.wayfair.com",
            "priority": "u=1, i",
            "referer": "https://www.wayfair.com/",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"138\", \"Brave\";v=\"138\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            "sec-gpc": "1",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36"
        }
        self._pxvid = None
        self._px_data = None
        self._praphql_id = None

    def set_px_data(self, data: dict):
        """设置 px/xhr/api/v2/collector 接口的载荷信息"""
        self._px_data = data

    def get_pxvid(self, data: Optional[dict] = None) -> str:
        """
        获取 _pxvid 令牌 该令牌可以直接跳过人机验证的风控, 请配合代理池使用
        _pxvid = oo1oo1 = px/xhr/api/v2/collector(ob值)
        """
        headers = {
            **self.headers,
            "content-type": "application/x-www-form-urlencoded"
        }
        url = "https://prx.wayfair.com/px/xhr/api/v2/collector"
        # data参数固定, 可以自己修改
        data = data or {
            "payload": "aUkQRhAIEHBaVUpqd3xIfXVBDxAeEFYQCEkQZXVCRFBaBnpTA1kPEAgQWkZGQkEIHR1FRUUcRVNLVFNbQBxRXV8dQUZdQFNVVx9dQFVTXFtIU0ZbXVwdQlZCHUFGV1deQVtWVx9fW15eU1wfAwQfQlNbQB9BWl1XH0FGXUBTVVcfUVNQW1xXRh9FAgILCwsBBwIAHFpGX14QHhBQWHNofHFGaHVjdw8QCAIeEHN3ewFwWWdGf1hFDxAIEGVbXAEAEB4QYAFZRWJjd2VG8VV0PEAhGQEdXHhBo^SA15jamF3BWd1Ag8QCAIeEHZ0aw}V3WVD0GYmFzDxANKIBwIACx4QdmpWBH88CVVdUVVkPEAgBDBAICHhBUdN2t c1hdR3NIZwa>8QCAMFBAcFCgYBBwABAQQeEGhYDVWBicXxgdWMGDxAIAwUEBwUKBgEHAAEH`KAR}4QcXRdHXpZBgN8W10PEAgQAAQBBAEKUQIfVgsKCx8DA1QCH1NRAwIfAFADUFNWAgdQUFEFGKEB4Qc3d77AXBZZ0F/ZnMPEAhcR15eHhB/WUp0cXpRW2NICg8QCAIeEHl2QlRiXwd7hZXNnDxAIVFNeQVdPT28=",
            "appId": "PX3Vk96I6i",
            "tag": "SBp/GQZvdnJV",  # 解码密钥
            "uuid": "263638c0-d989-11f0-ac10-2b1bad05bbc7",
            "ft": "369",
            "seq": "0",
            "en": "NTA",
            "bi": "HmApLktZbA9YOksLB3J/LwtJaRRBM24QB2YtAVkNI1MCZCxaRCRvJ3NZdQQWazZOTgVoOyBfO1wWPSpXDCFvLB9Wb0IRfHIWEmUteAgJKF4ZOHoEWSI dx5PYEJFPCI=",
            "pc": "5875883283781080",
            "p1": "0",
            "rsc": "1"
        }
        response = requests.post(url, headers=headers, data=data)
        response.raise_for_status()
        ob = response.json().get('ob')
        assert ob, 'No result'
        # ob = 'Uw0NUw0NQF8JBQpeDQVfEVgFBF4RDQ1aDBEEXQgEEVoFWg0MDwwOWgpfC0JCQkJTU1NTDQ1AX0lCQkJCUw0NU1MNDQ1AVEhITE8GExNPEkxEUEhbThJfU1ETDhMECQUNBQUTXVJdUEVIVV9PElZPA1hIAQQJBQ0FBQ0LDggPCAwPBAUMCA0MDAwaTFgBXUpIH0JCQkJTDQ1TUw0NDUBUSEhMTwYTE09TUl1OEk9fTlVMSBJdXxNfBAkFDQUFE19QVxJWTwNIAU9ZUBpRUwENQkJCQlMNDVNTDQ0NQFRISExPBhMTTxJMRFBIW04SX1NREw4TBAkFDQUFE11SXVBFSFVfTxJWTwNYSAEECQUNBQUNCw8FCAsJCQgKCwsEDAwMGkxYAV1KSBpfDQFfUFcaUVgBCBpIVQFLDAwFBQUPCQwOY1JJUFAaWFUBS0tLEktdRVpdVU4SX1NRGlhZAQ5CQkJCUw0NU1NTQA0LDAoLCAsODwsMCAQEDw8NBAUMQkJCQlMNDVMNDVMNQA0LCgkLBAkICwQLDgtCQkJCDVMNDQ1TQFgISk5KDVAMWldZXwsPWQwLWk8MQkJCQlMNDVMNDVNTQAQOBEJCQkJTDQ1TDVNTU0BfCQUKXg8FDRFYBQReEQ0NWgwRBF0IBBFaBVoNDA8MDloKXwtAWl1QT1lCQkJCU1NTUw1TQFoNC14EXw1ZCwwOD14NCF0FX11YDQ4OBA4NWA4EX14FWQsECwtYWF0NWFgFWAgJBQsPDgULXlkLWg4FBV5YXgVCQkJCU1MNU1MNQF8JBQpdXQQNEVgFBF4RDQ1aDBEEXQgEEQRfDwwPDwoLBFgICEAPDQkPCgwMDEBaXVBPWUJCQkJTDQ0NDVNAX19ACgxAaQ56SGZqckxYe2kFaHt6CHNLAQFCQkJCUw0NDQ1TQFVYTGNfQAoMQA0QT0JCQkINDQ0NDVNASVVVCAYKDA=='
        data = base64.b64decode(ob.encode('utf-8')).decode('utf-8')
        # PX 常见写法
        result_char = ''.join((chr(60 ^ ord(_)) for _ in data))
        _ = (_ for _ in result_char.split('~~~~') if _.count('|') == 3 and 'oo1oo1' in _)
        oo1oo1 = next(_)
        assert oo1oo1, 'No result'
        self._pxvid = oo1oo1.split('|')[1]
        return self._pxvid

    def get_url_data(self, url: str, cookies: Optional[dict] = None, latest: bool = True) -> requests.Response:
        """请求url数据"""
        headers = {
            **self.headers,
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
            "accept-language": "zh-CN,zh;q=0.9",
            "referer": "https://www.wayfair.com/storage-organization/sb0/shoe-storage-c504342.html?redir=shoes&rtype=9"
        }
        cookies = cookies or {
            "_pxvid": self._pxvid
        }
        # latest 每次都获取最新的 _pxvid 令牌
        if latest or not cookies["_pxvid"]: cookies["_pxvid"] = self.get_pxvid(self._px_data)
        # url = "https://www.wayfair.com/storage-organization/pdp/ophelia-co-435-shoe-storage-bench-with-lift-top-storage-and-removable-cushion-shoe-bench-with-3-barn-doors-and-adjustable-shelf-for-entryway-bedroom-w114567370.html?piid=1904109882&auctionId=aeb46527-ff31-45ee-b612-84e16ce682b9&trackingId=%7B%22adType%22%3A%22WSP%22%2C%22auctionId%22%3A%22aeb46527-ff31-45ee-b612-84e16ce682b9%22%7D&adTypeId=1"
        return requests.get(url, headers=headers, cookies=cookies)

    def get_product_id(self, text: str) -> str:
        """获取 praphql_id"""
        text = text.replace('\n','').replace('\t','').replace('\f','').replace('\r','')
        praphql_id = re.findall(r'<script>self\.__next_f\.push\(\[1,"[a-zA-Z0-9]{2}:T424,(.+?[=]{1,3})', text)
        praphql_id = praphql_id[0] if praphql_id else None
        self._praphql_id = praphql_id
        return self._praphql_id

    def get_comment_content(self, latest: bool = True) -> list:
        """获取评论内容"""
        assert self._praphql_id, 'No result'
        headers = {
            "accept": "*/*",
            "accept-language": "zh-CN,zh;q=0.9",
            "apollographql-client-name": "@wayfair/sf-ui-core-funnel",
            "apollographql-client-version": "518d1653cdc199d05a38657b2606ce0a10d563ba",
            "cache-control": "no-cache",
            "content-type": "application/json",
            "origin": "https://www.wayfair.com",
            "pragma": "no-cache",
            "priority": "u=1, i",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"138\", \"Brave\";v=\"138\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "sec-gpc": "1",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
            "wf-b2b-aisle": "null",
            "wf-b2b-experience": "false",
            "wf-locale": "en-US",
            "wf-page-context": "{\"pageType\":\"Product-Detail\",\"pageTypeId\":5,\"pageKey\":\"Product-Detail\"}",
            "wf-store-id": "49",
            "x-oi-client": "sf-ui-web",
            "x-wayfair-host-override": "www.wayfair.com",
            "x-wayfair-locale": "en-US",
            "x-wf-way": "true"
        }
        cookies = {
            "_pxvid": self._pxvid
        }
        # latest 每次都获取最新的 _pxvid 令牌
        if latest or not cookies["_pxvid"]: cookies["_pxvid"] = self.get_pxvid(self._px_data)
        url = "https://www.wayfair.com/federation/graphql"
        data = {
            "operationName": "reviewsListPossibleMPLDataByNodeIdQuery",
            "variables": {
                "nodeId": self._praphql_id,
                "firstReview": 10000,
                "sort": "DATE_DESC",
                "filter": {
                    "aspects": [],
                    "textSearch": "",
                    "ratings": None
                },
                "includeImages": True,
            },
            "extensions": {
                "persistedQuery": {
                    "version": 1,
                    "sha256Hash": "32e2aa8aa03b78b2ec0a27e9455f5c5d61dabe92c3ef58fdee528c73302163eb"
                }
            }
        }
        edges = []
        while True:
            response = requests.post(url, headers=headers, cookies=cookies, data=json.dumps(data, separators=(',', ':')))
            res = response.json()
            endCursor = res.get('data', {}).get('listingVariant', {}).get('reviewslist', {}).get('reviews', {}).get(
                'pageInfo', {}).get('endCursor', '')
            edges += res.get('data', {}).get('listingVariant', {}).get('reviewslist', {}).get('reviews', {}).get('edges', []) or []
            if not endCursor or data['variables']['firstReview'] > len(edges):
                break
            data['variables']['afterReview'] = endCursor
        return edges

__all__ = [ "Wayfair" ]