import json
import base64
import random
from curl_cffi import requests as cffi_requests
import requests
from string import digits, ascii_letters, ascii_lowercase
import time
from functools import wraps
from typing import Union, Tuple, Optional, Literal
import uuid
import hashlib

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
    def request(self, url:str='', params=None, headers=None, proxies=None, cookies=None) -> requests.Response:
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
        params = params or {
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
        return requests.get(url=url, params=params, headers=headers or self.headers(url), proxies=proxies or self.get_requests_proxy(), cookies=cookies)

    @retry(max_retries=3)
    def request4(self, *args, **kwargs) -> cffi_requests.Response:
        """请求"""
        kwargs['proxies'] = self.get_requests_proxy()
        kwargs['impersonate'] = random.choice(["chrome136", "chrome131", "chrome124", "chrome123", "chrome120", "chrome119"])
        return cffi_requests.get(*args, **kwargs)

    @retry(max_retries=3)
    def get_pxvid_v2(self, proxies=None) -> str:
        """
        v: 0.0.2 - 第二代版本令牌生成器
        _pxhd = "d51c42a52c7a23d8814208272100d3aa5abf9f39149bf8467cf770e1d8aebfe6:77081ca2-bddf-11f0-be7d-1c658a019c18"
        "_pxhd"： 关键性令牌 提取后面的 uuid, 最为 "_pxvid" 的参数用于cookie验证。
        获取令牌 刚生成的令牌最好等待5-10秒后在使用，一个令牌可以发起多个请求，过期后，等待2-4个小时后仍可继续使用，
        这是一个持久化的令牌，具体的持久信息和请求商品数量，需要自测，具体情况以官网测试为主。
        """
        correlation_id = self.random_string(34)
        headers = {
            "accept": "application/json",
            "accept-language": "en-US",
            "ads-module-type": "SponsoredProductCarousel",
            "baggage": f"trafficType=customer,deviceType=desktop,renderScope=SSR,webRequestSource=Browser,pageName=itemPage,isomorphicSessionId=ZzCAeVmnU06fKQaZp1F_8,renderViewId={str(uuid.uuid4())}",
            "cache-control": "no-cache",
            "content-type": "application/json",
            "origin": "https://www.walmart.com",
            "pragma": "no-cache",
            "priority": "u=1, i",
            "referer": f"https://www.walmart.com/ip/{random.randint(1000000000, 9999999999)}",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"138\", \"Brave\";v=\"138\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "sec-gpc": "1",
            "tenant-id": "elh9ie",
            "traceparent": f"00-{uuid.uuid4().hex}-71cf4711539fedaa-00",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
            "wm_mp": "true",
            "wm_page_url": f"https://www.walmart.com/ip/{random.randint(1000000000, 9999999999)}",
            "wm_qos.correlation_id": f"{correlation_id}-2",
            "x-apollo-operation-name": "AdV2",
            "x-enable-server-timing": "1",
            "x-latency-trace": "1",
            "x-o-bu": "WALMART-US",
            "x-o-ccm": "server",
            "x-o-correlation-id": f"{correlation_id}-2",
            "x-o-gql-query": "query AdV2",
            "x-o-mart": "B2C",
            "x-o-platform": "rweb",
            "x-o-platform-version": f"usweb-1.224.0-{self.hash_encrypt(f'{self.random_string(64)}', 'sha1')}-{random.randint(1000000, 9999999)}r",
            "x-o-segment": "oaoh"
        }
        _headers = self.headers('')
        headers = {
            **headers,
            "sec-ch-ua":_headers['sec-ch-ua'],
            "user-agent":_headers['user-agent']
        }
        url = "https://www.walmart.com/orchestra/home/graphql"
        stateCode = random.choice(["CA", "US", "PH", "TH"])
        data = {
            "query": "query AdV2( $platform:Platform! $pageId:String! $pageType:PageType! $tenant:String! $moduleType:ModuleType! $pageContext:PageContextIn $locationContext:LocationContextIn $moduleConfigs:JSON $adsContext:AdsContextIn $adRequestComposite:AdRequestCompositeIn $enableRxDrugScheduleModal:Boolean = false $enableAdsPromoData:Boolean = false $enableSignInToSeePrice:Boolean = false $enableItemLimits:Boolean = false $fetchSBAV1:Boolean = false ){adV2( platform:$platform pageId:$pageId pageType:$pageType tenant:$tenant moduleType:$moduleType locationContext:$locationContext pageContext:$pageContext moduleConfigs:$moduleConfigs adsContext:$adsContext adRequestComposite:$adRequestComposite ){status adContent{type model title displayTitle qc data @skip(if:$fetchSBAV1){__typename...AdDataDisplayAdFragment __typename...AdDataSponsoredProductsFragment __typename...AdDataSponsoredVideoFragment}dataV1 @include(if:$fetchSBAV1){__typename...AdDataDisplayAdFragment __typename...AdDataSponsoredProductsFragment __typename...AdDataSponsoredVideoFragment}}}}fragment AdDataDisplayAdFragment on AdData{...on DisplayAd{json status}}fragment AdDataSponsoredProductsFragment on AdData{...on SponsoredProducts{adUuid adExpInfo moduleInfo products{...ProductFragment}}}fragment ProductFragment on Product{usItemId offerId specialCtaType @include(if:$enableSignInToSeePrice) orderMinLimit @include(if:$enableItemLimits) orderLimit @include(if:$enableItemLimits) badges{flags{__typename...on BaseBadge{id text key query type styleId}...on PreviouslyPurchasedBadge{id text key lastBoughtOn numBought criteria{name value}}}labels{__typename...on BaseBadge{id text key}...on PreviouslyPurchasedBadge{id text key lastBoughtOn numBought}}tags{__typename...on BaseBadge{id text key}}groups{__typename name members{...on BadgeGroupMember{__typename id key memberType rank slaText styleId text type}...on CompositeGroupMember{__typename join memberType styleId suffix members{__typename id key memberType rank slaText styleId text type}}}}groupsV2{name flow pos members{memType memId memStyleId fbMemStyleId content{type value styleId fbStyleId contDesc url actionId}}}}priceInfo{priceDisplayCodes{rollback reducedPrice eligibleForAssociateDiscount clearance strikethrough submapType priceDisplayCondition unitOfMeasure pricePerUnitUom}currentPrice{price priceString priceDisplay}wasPrice{price priceString}listPrice{price priceString}priceRange{minPrice maxPrice priceString}unitPrice{price priceString}savingsAmount{amount priceString}comparisonPrice{priceString}subscriptionPrice{priceString subscriptionString price minPrice maxPrice intervalFrequency duration percentageRate durationUOM interestUOM downPaymentString}wPlusEarlyAccessPrice{memberPrice{price priceString priceDisplay}savings{amount priceString}eventStartTime eventStartTimeDisplay}}preOrder{streetDate streetDateDisplayable streetDateType isPreOrder preOrderMessage preOrderStreetDateMessage}annualEventV2 earlyAccessEvent isEarlyAccessItem eventAttributes{priceFlip specialBuy}snapEligible showOptions promoData @include(if:$enableAdsPromoData){type templateData{priceString imageUrl}}sponsoredProduct{spQs clickBeacon spTags}canonicalUrl conditionV2{code groupCode}numberOfReviews averageRating availabilityStatus imageInfo{thumbnailUrl allImages{id url}}name fulfillmentBadge classType type showAtc brand sellerId sellerName sellerType rxDrugScheduleType @include(if:$enableRxDrugScheduleModal)}fragment AdDataSponsoredVideoFragment on AdData{...on SponsoredVideos{adUuid adExpInfo moduleInfo videos{video{vastXml thumbnail spqs}products{...ProductFragment}}}}",
            "variables": {
                "adRequestComposite": {
                    "adsConfig": "{}",
                    "keyword": ""
                },
                "adsContext": {},
                "pageContext": {},
                "pageId": f"{random.randint(100000000,999999999)}", # 800851001  340894177
                "pageType": "ITEM",
                "platform": "DESKTOP",
                "tenant": "WM_GLASS",
                "locationContext": {
                    "storeId": f"{random.randint(1000, 9999)}",  # 3081
                    "stateCode": stateCode,  # CA
                    "zipCode": f"{random.randint(10000, 99999)}"  # 95829
                },
                "moduleConfigs": {
                    "moduleLocation": "car1",
                    "lazy": "1200"
                },
                "moduleType": "SponsoredProductCarousel"
            }
        }
        response = requests.post(url=url, headers=headers, json=data, proxies=proxies or self.get_requests_proxy())
        cookies = response.cookies.get_dict()
        assert '_pxhd' in cookies, "_pxhd 生成失败"
        _pxhd = cookies['_pxhd'].split(':')[-1]
        # # 更加严格的筛选 非寻常的令牌
        # assert 'AID' in cookies, f"_pxhd 令牌不生效 {_pxhd}"
        # print('----------成功获取_pxhd令牌 请等待10秒后使用----------')
        return _pxhd

    @staticmethod
    def hash_encrypt(string: str,
                     algorithm: Literal['md5', 'sha1', 'sha224', 'sha256', 'sha384', 'sha512', 'blake2b', 'blake2s',
                     'sha3_224', 'sha3_256', 'sha3_384', 'sha3_512',
                     'shake_128', 'shake_256']) -> str:
        # 支持的算法列表
        supported_algorithms = ['md5', 'sha1', 'sha224', 'sha256', 'sha384', 'sha512',
                                'blake2b', 'blake2s',
                                'sha3_224', 'sha3_256', 'sha3_384', 'sha3_512',
                                'shake_128', 'shake_256']
        if algorithm not in supported_algorithms:
            raise Exception('不支持的算法')
        try:
            hash_obj = getattr(hashlib, algorithm)()
            hash_obj.update(string.encode('utf-8'))
            return hash_obj.hexdigest()
        except Exception as e:
            raise Exception(f'加密发生错误: {e}')


__all__ = ["WalMart"]