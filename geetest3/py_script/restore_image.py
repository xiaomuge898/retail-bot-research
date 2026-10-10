from PIL import Image
from typing import Union
import base64
import io

def background_image_restoration_v1(image_real):
    width, height = image_real.size

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
        image2 = image_real.crop((c, u, c + 10, u + 80))
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

def background_image_restoration_v2(image_real):
    old_width, old_height = image_real.size

    # 目标图片尺寸。
    new_width = 260
    new_height = 116

    # 每个碎片在原图中的实际有效区域。
    # background-position 每隔 12px 变化一次，
    # 但实际显示的碎片宽度为 10px。
    piece_width = 10
    piece_height = 58

    # 每行 26 个碎片，两行共 52 个。
    pieces_per_row = new_width // piece_width

    positions = [
        # 第一组：background-position-y = -58px
        (-157, -58), (-145, -58), (-265, -58), (-277, -58),
        (-181, -58), (-169, -58), (-241, -58), (-253, -58),
        (-109, -58), (-97, -58), (-289, -58), (-301, -58),
        (-85, -58), (-73, -58), (-25, -58), (-37, -58),
        (-13, -58), (-1, -58), (-121, -58), (-133, -58),
        (-61, -58), (-49, -58), (-217, -58), (-229, -58),
        (-205, -58), (-193, -58),

        # 第二组：background-position-y = 0px
        (-145, 0), (-157, 0), (-277, 0), (-265, 0),
        (-169, 0), (-181, 0), (-253, 0), (-241, 0),
        (-97, 0), (-109, 0), (-301, 0), (-289, 0),
        (-73, 0), (-85, 0), (-37, 0), (-25, 0),
        (-1, 0), (-13, 0), (-133, 0), (-121, 0),
        (-49, 0), (-61, 0), (-229, 0), (-217, 0),
        (-193, 0), (-205, 0),
    ]

    # 防止坐标表不完整，导致还原结果缺少碎片。
    if len(positions) != 52:
        raise ValueError(f"碎片数量错误：当前 {len(positions)} 个，预期 52 个")

    # 创建目标画布。
    # 使用透明背景，避免未填充区域被默认填成黑色。
    new_image = Image.new(
        "RGBA",
        (new_width, new_height),
        (0, 0, 0, 0),
    )

    for index, (background_x, background_y) in enumerate(positions):
        # CSS background-position 使用负偏移量。
        # 转换成 Pillow 裁剪坐标时，需要取反。
        source_x = -background_x
        source_y = -background_y

        # 计算当前碎片在目标图中的位置。
        # index // 26 决定目标行，index % 26 决定目标列。
        target_x = (index % pieces_per_row) * piece_width
        target_y = (index // pieces_per_row) * piece_height

        # 从原图裁剪出当前碎片。
        # 注意：裁剪宽度是 10px，而不是 12px。
        piece = image_real.crop((
            source_x,
            source_y,
            source_x + piece_width,
            source_y + piece_height,
        ))

        # 将碎片粘贴到目标画布的指定位置。
        new_image.paste(piece, (target_x, target_y))

    # 将图片保存到内存中，生成 PNG 二进制数据。
    buffered = io.BytesIO()
    new_image.save(buffered, format="PNG")
    restored_bytes = buffered.getvalue()

    # 同时保存到当前工作目录，方便直接查看还原结果。
    new_image.save("还原后.png", format="PNG")

    # 返回图片 Base64 及原图、目标图尺寸。
    return {
        "base64": base64.b64encode(restored_bytes).decode("ascii"),
        "old_wide": old_width,
        "old_height": old_height,
        "new_wide": new_width,
        "new_height": new_height,
    }

def run(beijingtu_base64: Union[str, bytes]):
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
    image_real = Image.open(io.BytesIO(beijingtu_base64))

    if image_real.size == (312, 160):
        return background_image_restoration_v1(image_real)

    if image_real.size == (312, 116):
        return background_image_restoration_v2(image_real)
    raise Exception("图片尺码错误，无法恢复")



if __name__ == '__main__':
    # 读取本地原始图片，支持 WebP、PNG、JPEG 等 Pillow 可识别格式。
    with open("c710304b3.webp", "rb") as f:
        data = f.read()

    result = run(data)
    print(result)


