import base64
import cv2
import numpy as np

class HumanBehaviorSimulator:
    def slide_match_identify(self, target_data: bytes | str, background_data: bytes | str) -> int:
        """
        target_data 小拼图 可以传 bytes 或 base64数据
        background_data 背景图 可以传 bytes 或 base64数据
        返回：缺口距离
        """
        target = self._decode_image(target_data, cv2.IMREAD_UNCHANGED)
        background = self._decode_image(background_data, cv2.IMREAD_COLOR)
        piece, mask, box = self._alpha_crop(target)

        if target.shape[0] >= background.shape[0] * 0.85 and target.ndim == 3 and target.shape[2] == 4:
            x, y = self._match_full_height_gap(background, target, piece, mask, box)
        else:
            x, y = self._match_edge_gap(background, piece, box)

        # 注意，有些网站图片在web页面展示的时候宽高会压缩，如果是模拟滑动，请一定要手动分析并重新将结果进行再次处理，否则会有很大的误差
        return int(x)

    @staticmethod
    def _to_bytes(data: bytes | str) -> bytes:
        """兼容 bytes、纯 base64、data-url base64 三种输入。"""
        return data if isinstance(data, bytes) else base64.b64decode(data.split(";base64,", 1)[-1])

    def _decode_image(self, data: bytes | str, flags: int) -> np.ndarray:
        image = cv2.imdecode(np.frombuffer(self._to_bytes(data), np.uint8), flags)
        if image is None:
            raise ValueError("图片数据无法被 OpenCV 解码")
        return image

    @staticmethod
    def _alpha_crop(target: np.ndarray) -> tuple[np.ndarray, np.ndarray, tuple[int, int, int, int]]:
        """
        PNG 透明区域不属于真实拼图，直接参与匹配会把背景边缘带进模板。
        返回：裁剪后的 BGR 拼图、alpha mask、原图中的 (x1, y1, x2, y2)。
        """
        if target.ndim == 3 and target.shape[2] == 4:
            alpha = target[:, :, 3]
            ys, xs = np.where(alpha > 10)
            if xs.size:
                x1, y1, x2, y2 = map(int, (xs.min(), ys.min(), xs.max() + 1, ys.max() + 1))
                return target[y1:y2, x1:x2, :3], alpha[y1:y2, x1:x2], (x1, y1, x2, y2)

        bgr = cv2.cvtColor(target, cv2.COLOR_GRAY2BGR) if target.ndim == 2 else target[:, :, :3]
        mask = np.full(bgr.shape[:2], 255, np.uint8)
        return bgr, mask, (0, 0, bgr.shape[1], bgr.shape[0])

    @staticmethod
    def _enhance_gray(image: np.ndarray) -> np.ndarray:
        gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY) if image.ndim == 3 else image
        return cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8)).apply(gray)

    def _match_full_height_gap(
            self, background: np.ndarray, target: np.ndarray, piece: np.ndarray, mask: np.ndarray,
                               box: tuple[int, int, int, int]
    ) -> tuple[int, int]:
        """
        全高 PNG 的 alpha 已给出缺口纵坐标，根据图片结构融合稳定特征。

        不同验证码生成器留下的信号不同：窄图的缺口通常是低饱和填充，
        中宽图需要多个边缘尺度投票，宽图则以低阈值轮廓最稳定。
        """
        _, y1, _, _ = box
        height, width = piece.shape[:2]
        y2 = min(background.shape[0], y1 + height)
        if y2 - y1 != height or background.shape[1] < width:
            raise ValueError("滑块有效区域超出背景图片范围")

        aspect_ratio = background.shape[1] / background.shape[0]
        if aspect_ratio < 1.6:
            return self._saturation_candidate(background, mask, y1) + 1, y1

        if aspect_ratio < 1.8:
            candidates = self._edge_candidates(background, piece, (20, 30, 50))
            best_x = self._cluster_candidates(candidates)
            if best_x is None:
                raise ValueError("未找到有效的滑块边缘候选")
            return best_x + 8, y1

        candidates = self._edge_candidates(background, piece, (20,))
        best_x = self._cluster_candidates(candidates)
        if best_x is None:
            raise ValueError("未找到有效的滑块边缘候选")
        border_offset = 3 if background.shape[1] >= 500 else 0
        return best_x + border_offset, y1

    def _edge_candidates(
            self, background: np.ndarray, piece: np.ndarray, thresholds: tuple[int, ...]
    ) -> list[tuple[int, float, str]]:
        """在多个边缘尺度生成可比较的横坐标候选。"""
        background_gray = self._enhance_gray(background)
        piece_gray = self._enhance_gray(piece)
        candidates: list[tuple[int, float, str]] = []

        for low in thresholds:
            high = min(255, low * 3 if low < 100 else low * 2)
            background_edge = cv2.Canny(background_gray, low, high)
            piece_edge = cv2.Canny(piece_gray, low, high)
            if np.count_nonzero(piece_edge) < 5:
                continue

            result = cv2.matchTemplate(
                background_edge, piece_edge, cv2.TM_CCOEFF_NORMED
            )
            _, score, _, location = cv2.minMaxLoc(result)
            candidates.append((int(location[0]), float(score), f"edge:{low}"))

        return candidates

    @staticmethod
    def _cluster_candidates(
            candidates: list[tuple[int, float, str]], min_x: int = 0
    ) -> int | None:
        """优先选择跨特征重复命中且内部离散程度较低的候选簇。"""
        eligible = [
            item for item in candidates
            if item[0] >= min_x and np.isfinite(item[1])
        ]
        clusters = [
            [item for item in eligible if abs(item[0] - center) <= 3]
            for center, _, _ in eligible
        ]
        if not clusters:
            return None

        best = max(
            clusters,
            key=lambda items: (
                len({source for _, _, source in items}),
                -float(np.std([x for x, _, _ in items])),
                sum(score for _, score, _ in items) / len(items),
            ),
        )
        return int(round(float(np.median([x for x, _, _ in best]))))

    @staticmethod
    def _saturation_candidate(
            background: np.ndarray, mask: np.ndarray, y: int
    ) -> int:
        """融合低饱和填充与 alpha 边界梯度，避开雪地等天然浅色区域。"""
        height, width = mask.shape
        effective_mask = mask > 10
        eroded_mask = cv2.erode(
            effective_mask.astype(np.uint8), np.ones((3, 3), np.uint8)
        ).astype(bool)
        boundary_mask = effective_mask & ~eroded_mask
        start_x = int(background.shape[1] * 0.4)
        stop_x = background.shape[1] - width
        if y + height > background.shape[0] or start_x > stop_x:
            raise ValueError("滑块蒙版尺寸超过背景图片范围")

        gray = cv2.cvtColor(background, cv2.COLOR_BGR2GRAY)
        gradient = cv2.magnitude(
            cv2.Sobel(gray, cv2.CV_32F, 1, 0),
            cv2.Sobel(gray, cv2.CV_32F, 0, 1),
        )
        features = np.array([
            (
                cv2.cvtColor(
                    background[y:y + height, x:x + width], cv2.COLOR_BGR2HSV
                )[:, :, 1][effective_mask].mean(),
                gradient[y:y + height, x:x + width][boundary_mask].mean(),
            )
            for x in range(start_x, stop_x + 1)
        ], dtype=np.float32)

        minimum = features.min(axis=0)
        scale = np.maximum(features.max(axis=0) - minimum, 1e-6)
        saturation, boundary_gradient = ((features - minimum) / scale).T
        scores = 2 * saturation - 3 * boundary_gradient
        return start_x + int(np.argmin(scores))

    def _match_edge_gap(
            self, background: np.ndarray, piece: np.ndarray, box: tuple[int, int, int, int]
    ) -> tuple[int, int]:
        """
        TikTok 这类普通小拼图：先裁掉透明边，再用增强灰度边缘匹配。
        CLAHE 可以压住明暗差异，Canny 让匹配更关注缺口轮廓。
        """
        x_offset, y_offset, _, _ = box
        relative_width = piece.shape[1] / background.shape[1]
        threshold, border_offset = (150, 1) if relative_width >= 0.20 else (100, 2)
        candidates = self._edge_candidates(background, piece, (threshold,))
        best_x = self._cluster_candidates(candidates)
        if best_x is None:
            raise ValueError("滑块有效边缘不足，无法匹配缺口")

        background_edge = cv2.Canny(
            self._enhance_gray(background), threshold, min(255, threshold * 2)
        )
        piece_edge = cv2.Canny(
            self._enhance_gray(piece), threshold, min(255, threshold * 2)
        )
        result = cv2.matchTemplate(
            background_edge, piece_edge, cv2.TM_CCOEFF_NORMED
        )
        _, _, _, max_loc = cv2.minMaxLoc(result)
        return int(best_x + x_offset + border_offset), int(max_loc[1] + y_offset)
if __name__ == "__main__":
    hum = HumanBehaviorSimulator()
    # 本地演示仅在直接运行此文件时执行，导入模块不会读取示例图片。
    with open("7.jpg", "rb") as f:
        beijingtu = f.read()
    with open("7.png", "rb") as f:
        xiaopingtu = f.read()
    x = hum.slide_match_identify(xiaopingtu, beijingtu)
    print("滑块缺口距离", x)
