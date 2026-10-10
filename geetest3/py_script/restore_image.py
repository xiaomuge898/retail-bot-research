from PIL import Image
from typing import Union
import base64
import io

def background_image_restoration(beijingtu_base64: Union[str, bytes]):
    """
    找到此接口：get.php
    查看版本是否是：6.0.9
    当前脚本仅适用于 6.0.9 版本的图片还原，其他版本没有测试，可自行测试
    """
    if isinstance(beijingtu_base64, str):
        beijingtu_base64 = beijingtu_base64.split(';base64,', 1)[-1]
        beijingtu_base64 = base64.b64decode(beijingtu_base64)
    if not isinstance(beijingtu_base64, bytes):
        raise TypeError('请传 base64 字符串或 bytes 字节码')
    image = Image.open(io.BytesIO(beijingtu_base64))
    width, height = image.size

    # 通过断画布获取版本
    actual_width = 260
    actual_height = 160
    # 创建新的空白图片
    new_image = Image.new('RGBA', (actual_width, actual_height))
    # 坐标
    k = 0
    # 定值, 在极验3.0版本中, 通过画布断点获取数据 2024/03/23 日逆向后, 获取的数据如下 （2026-10-11已复查可正常使用）
    Ut = [39, 38, 48, 49, 41, 40, 46, 47, 35, 34, 50, 51, 33, 32, 28, 29, 27, 26, 36, 37, 31, 30, 44, 45,
          43, 42, 12, 13,
          23, 22, 14, 15, 21, 20, 8, 9, 25, 24, 6, 7, 3, 2, 0, 1, 11, 10, 4, 5, 19, 18, 16, 17]
    # Ut有多少参数, 就有多少个小碎片拼图
    for _ in range(len(Ut)):
        # 通过计算得出 小碎片的起始坐标
        c = Ut[_] % 26 * 12 + 1
        # 计算是否当前小碎片在第一层还是第二层, 三元表达式
        u = (lambda: 80 if 25 < Ut[_] else 0)()
        # 将裁切下来小碎片的数据存储 c为起始坐标（从图像左边缘向右的偏移量），u为高度的起始坐标（从图像上边缘向下的偏移量）。 c+10是裁切多大的宽度   u+80是裁切多大的高度
        image2 = image.crop((c, u, c + 10, u + 80))
        # 如果等于26, 则重置小碎片的放置坐标,因为他第一层已经还原完成了，该还原第二层了
        if _ == 26: k = 0
        # 当_大于25，说明已经开始还原第二层的图片了
        new_image.paste(image2, (k, (lambda _: 80 if _ > 25 else 0)(_)))
        k += 10

    buffered = io.BytesIO()
    # 将数据写入buffered里
    new_image.save(buffered, format="PNG")
    # 保存到本地
    new_image.save("还原后.png", format="PNG")
    return {
        'base64': base64.b64encode(buffered.getvalue()).decode(),
        'old_wide': width,
        'old_height': height,
        'new_wide': actual_width,
        'new_height': actual_height
    }

if __name__ == '__main__':
    with open("c710304b3.webp", "rb") as f:
        data = f.read()

    print(background_image_restoration(data))


