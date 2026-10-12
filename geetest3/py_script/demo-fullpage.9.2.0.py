import random
import re
import time
import requests
import json
"""
fullpage.9.2.0 无感验证测试脚本
"""
class PassGeetest:
    challenge: str
    def __init__(self, gt, challenge):
        self.headers = {
            "Accept": "*/*",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "Referer": "https://www.textin.com/",
            "Sec-Fetch-Storage-Access": "active",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.0.0 Safari/537.36",
            "sec-ch-ua": "\"Brave\";v=\"153\", \"Not_A Brand\";v=\"8\", \"Chromium\";v=\"153\""
        }
        self.params = {
            "gt": gt,
            "challenge": challenge,
            "lang": "zh-cn",
            "pt": "0",
            "client_type": "web",
            "callback": f"geetest_{int(time.time()*1000)}"
        }
    @staticmethod
    def register():
        cookies = {"language": "zh"}
        url = "https://demos.geetest.com/gt/register-userdemo"
        response = requests.get(url, cookies=cookies)
        tem_data = response.json()
        print("授权信息", tem_data)
        return tem_data['gt'], tem_data['challenge']

    def reset(self, w):
        url = "https://api.geetest.com/reset.php"
        self.params['w'] = w
        response = requests.get(url, headers=self.headers, params=self.params)
        data = json.loads(re.findall(r"geetest_[0-9]{13}\((.*?)\)", response.text)[0])
        if "user_error" in data: raise Exception("第一次验证结果异常")
        self.challenge = data['data']['challenge']
        print("第一次验证结果(获取到challenge) ->", self.challenge)

    def ajax(self, w):
        url = "https://api.geetest.com/ajax.php"
        self.params['w'] = w
        self.params['callback'] = f"geetest_{int(time.time()*1000)}"
        self.params['challenge'] = self.challenge
        response = requests.get(url, headers=self.headers, params=self.params)
        data = json.loads(re.findall(r"geetest_[0-9]{13}\((.*?)\)", response.text)[0])
        print("第二次验证结果 ->", data)


if __name__ == "__main__":
    # 测试demo专用的，用来自动获取 gt 和 challenge
    gt, challenge = PassGeetest.register()

    # 填写网站对应的 gt 和 challenge
    # gt, challenge = "5172bacee2537149aa63fc966c3796d9", "c73f7321d145375f05738a473f45c68f"

    # 下面这些都可以写死，官方并非强校验
    pass_geetest = PassGeetest(gt, challenge)
    # 接口一提交 参数（里面含有aes密钥）
    w = "flcXXXNInZ5)MZclbiM9ptetCvpVWScZarRyfO00d92K1j1HHWCstkqUal6ubhP5lVmdFMqaYAsRJcpF6DlBJUuP6y8YEF6k2eDzinedZdU3tCXdQMZttyEykTuBDwXj4KSJrLQwm2B4IkNKbNS7NXsNUD)Ar3TYu(KUihSLg5EnVPb5zqz0yhtQve1lJOgMlQXtEu5jzlpvtnNU0Au54JBdGwfPw0XqaeYCXH)BlKLq03zWsPt9snhvVGxtO6WzmTIXHknA8kV9puKIU7QHjA1PMUASE)IPEglIB(O1nRdwTNdcxdxNQMB1nhzUyFOkfMaOUGfzMgMJEfhmfu1uXRSDUEahwfWB5hokUylwfKlxjNp5oS0fJ0tpoAFebe2RJZcYyLHYc)N5xY6w)h2bWj3O57jHWBRMIH05sjoloPwt3D(0OvGy0htba3oNz6qYb5cfa967eb98854f12353a9b79a4f62de6c7455915c94c5e1443edede790606e5eacaf6d14884b87d267af980b18fbc450e04ad98efc6f687e2908643ef2e305706ec6aeeadbae8001dd3514676c9feadf0d5b6e09194861d710677343c2036cd7e3e448dab727bbcf4cd45f547048e21741502895bf7a66601609e51a646f3f"
    pass_geetest.reset(w)
    time.sleep(random.uniform(1, 2))
    # 接口二验证，会使用接口一提交的aes密钥进行验证里面的数据
    w = "flcXXXNInZ5)MZclbiM9pn4y6Bl)I3X3BglXebvfNrF3c2Ty52aiIj0EU)ez4(3Vp5(vBgdNoygbKEekT5ZUNlLtBKoGuHa5WUmj8YFk7jBPFq8xTLURWK7tURZ6g5AMhLNHNPVB0(M6UQl1ZZFJOnxJ5K3ltUVVQvVXc2hQIaStr819uO1Z7m6AoDOy7ce)y)GFHGwSltv18qU5Wv7lAeY5LCyM3)fHKJBrkIcqTnx1d4L4F9OrheHaqMw8ijV56vSXIEY8bs98GGTXer7Wp(8FfQ0IAaNGX9OOhYHOCB8w5xhxIiUXUPIV90gZC2lIZovTm)Q6qEAsfOnbZZekUbceJJwagCxF(Nxh)vFX1be)GGXXSEmvHr8vfCcWcTpHedUMHFBpO5a85m13n7jUNZ0)B2Yuz4cqNxX1HgD3wy6I3kPnjmHH0oYp6Y(tqJ2Fm2HQTfQK0TzyPXSl24kw1tmxsH5yDo1UYjpjtftR0XtcLqOMplWSTRy6W3fl7YgI72VKgX6RPVM34uGTtLUtbhkqdKWjLyanTeakq7G70k(vv42e)6AWqptWMcRPontH7vBvxpwsCdRtuw8mQhy6TyF1CX(vOXp0T4l6cv01xgt6oaHVSlEwSfP(TpS57EBNuhgWvbinUOmhh6RTUEdNyMPrZt4VW7WFd00sCY1tav7l3ScvhTqrkP6xi0gjAgeUTbC1I0G1GQdeKL)HTZEmUOVpUPZoj)kV9OGJMblDIShZznWcCLZn8qBCuHryWbflewZbGNsMwuGYbibmzRLyiEsHZ5Vxu83zNxsnA0i2fjicsK27dgoUFd6u3kdZtHymgaEQTDB8sO2aTeq5Dd1tVz(a2BX0mT71HJN0BxfOViM4o2oS10n9eXAeV3ItIy8ur5ZzrGyxRClAoc78nJxCc79Jt12Z7ZUdc7MxGSDUXUjaihEEIhDio998Lha8BRanqz(6ueR851tnpuILDd0coz2RrJB1MUIyaJllwLYpWEnR(5lKq4wxjuZmH0g9ICqeuKXJGBxVs6HM1ljVydimAzcV(eeBM2OHbPIdCUKoNmxumjdjMlfpULjodwUPUN13POEsGEVrrUWu4olV3uWKFpBAZZFXKi37C7Ok3PGH2DVOi3umM2deh7yKTrMx6FSFjzgf0Hec)W)xFiN)nM8adJbCYCzghsb6k1JuMRjSPAe8PLdtKNbzgryYr9WB3NiJE4ULC9Zy3rq7Gexiq2G2CtKqBF(a7XgEgM0ucjRWz5FYjJHOGXo6VEVx9p2fNcLLVIhfLzzOQWzb(qJL7szAc(LGLExTN0AzTZAdZo9Tua0rDc3R5QKGa6d)2INX6oEeKGIpWiLpmGAvSkk1i)r)Upclz84ewHJmEK6tSm)(G6)sF0SIfPvmT2xT8ohhGGK9n5oM(socA2TO(s40oCGqKvtgOqYGbJQq8Usq8OuAMYGOMAjGY(uIXD6h2GI4vKKqQUyymcDmStkMSbPbFjQgRnpYkyH3d5YA4pYJe69RsAGvbrKBnX8KBA6yf)udqjaf5gdA2C82QwFBaTQkdhfMurkFIOcyQt)40yOONMYOWkhN)XidTgG9L6FOWoIVI1Vh0SWx8SxmI3gDgPHdDfDFTpWS4GZGJepPXPN7pUXomMWkAPlFvcTtC9sy1AoRfFliKabIjd1S47WGFXrWiuqECXMMZeqZ0G)KCkPON60FK9WO1FoYI7MI2z0PW8dV7E9jzSP9(QpNj0TgyzQVzqKxrnqhmtUNT7brPxp55(7pYzXYQXmFVFghVQG4foehj1nKqkLMgjm0pamp9gqz6dkg0PXJjMaev9vVm2Or5fCuIyQNDBNgIsAgvTiZqG8TVgM5g5aDjUDigBBFrAtC(IWc8pAh(LSuNnKiYCqCavby9(I7EtUyN0QjkCwREsp(8Ga2oI(9hv7(ymTXN9KNNRXOS9S9h6(RJIsVXaLCv0nhJaKy3SYHnp)z0emiBKULX25bURgyKkNSfxEfnwD0eVrHBvCd9HkTrwvvZBBqCLIoqg1C38YeWga545OKTcq)FNnz2Bk4OKeFaNWlBoDKtv9x7bt9WxIiJbWeLN26YuzrWF5Cxzf3J(EGRDKlfyZ28oa7BlYdXiOmX2t7d)zfahNiv3QBhSHzSgrM3X8izs7NolobFHF4NFqLmwKNkXypbK8(UX1PtyEuGbGJDWKkmvBa0UYs0xdiYL7)eFthIjvPYGuIERgl69CeSsuTnoJXOUPtvsvyVimMVN(2RYDVmrnECI)MqDDNOu)DV2KV7EpbJTpmTLmRejRYl6s1a2rO6AQ21DUSWRUM7X23gPodvM(1zhEA2Eisiyi74NCKgs75N679IRZu1q9VE8kP5zy1F(l6vKuALy8FdVzTngKvbFslEtZUI7aESz0lUTczMGXQUcVq)wS(eRzaaJ7YQ0fxJk1OXJeemdg3OjLx138ta8g)R557B4I2GwNfPB6QKPpnKcpaF)mUTKUUnw1avqnwo6SFcc8z6kxZ7N8h5WMCjqMSJ9V7hlI9rYfOYbx9YOnSibuhI3p5F1y0oIYUO6Gk8sOGQBqx((ylqtw8LOzCnOly7iNqFRJ9O9rmfIXAkLuSYb9SvQyZq7dB5K9CcZqlXghUcyoXucx52m8cZrXZS(0U7g.."
    pass_geetest.ajax(w)
