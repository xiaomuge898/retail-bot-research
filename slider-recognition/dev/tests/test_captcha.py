from __future__ import annotations

import base64
import re
import unittest
from pathlib import Path

from CAPTCHA import HumanBehaviorSimulator


ROOT = Path(__file__).resolve().parents[1]


def load_cases(folder: Path) -> list[tuple[Path, Path, int]]:
    """Read the fixture pairs without depending on file ordering."""
    pattern = re.compile(r"(\d+)\.jpg\+(\d+)\.png=(\d+)")
    return [
        (folder / f"{jpg}.png", folder / f"{jpg}.jpg", int(distance))
        for jpg, png, distance in pattern.findall(
            (folder / "滑块真实距离.txt").read_text(encoding="utf-8")
        )
        if jpg == png
    ]


class InputContractTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        cls.solver = HumanBehaviorSimulator()
        cls.target = (ROOT / "样本/样本1/1.png").read_bytes()
        cls.background = (ROOT / "样本/样本1/1.jpg").read_bytes()

    def test_returns_only_integer_distance(self) -> None:
        self.assertIsInstance(
            self.solver.slide_match_identify(self.target, self.background), int
        )

    def test_bytes_plain_base64_and_data_url_are_equivalent(self) -> None:
        expected = self.solver.slide_match_identify(self.target, self.background)
        target64, background64 = map(
            lambda value: base64.b64encode(value).decode(),
            (self.target, self.background),
        )

        self.assertEqual(
            expected, self.solver.slide_match_identify(target64, background64)
        )
        self.assertEqual(
            expected,
            self.solver.slide_match_identify(
                f"data:image/png;base64,{target64}",
                f"data:image/jpeg;base64,{background64}",
            ),
        )

    def test_invalid_image_raises_value_error(self) -> None:
        with self.assertRaisesRegex(ValueError, "解码"):
            self.solver.slide_match_identify(b"not-image", self.background)


class DevelopmentAccuracyTests(unittest.TestCase):
    def test_candidate_clusters_prefer_cross_feature_consensus(self) -> None:
        candidates = [
            (101, 0.70, "edge:20"),
            (102, 0.65, "edge:50"),
            (100, 0.80, "saturation"),
            (240, 0.99, "texture"),
        ]

        self.assertEqual(
            101, HumanBehaviorSimulator._cluster_candidates(candidates, min_x=50)
        )

    def test_all_development_samples_are_within_three_pixels(self) -> None:
        solver, failures = HumanBehaviorSimulator(), []
        folders = [ROOT / "样本" / f"样本{index}" for index in range(1, 10)]
        cases = [case for folder in folders for case in load_cases(folder)]
        self.assertEqual(135, len(cases))

        for target, background, expected in cases:
            predicted = solver.slide_match_identify(
                target.read_bytes(), background.read_bytes()
            )
            if abs(predicted - expected) > 3:
                failures.append((str(target.relative_to(ROOT)), expected, predicted))

        self.assertEqual([], failures)


class ValidationAccuracyTests(unittest.TestCase):
    def test_every_validation_sample_is_within_three_pixels(self) -> None:
        solver, failures = HumanBehaviorSimulator(), []
        cases = load_cases(ROOT / "样本/验证样本")
        self.assertEqual(35, len(cases))

        for target, background, expected in cases:
            predicted = solver.slide_match_identify(
                target.read_bytes(), background.read_bytes()
            )
            error = abs(predicted - expected)
            if error > 3:
                failures.append((target.name, expected, predicted, error))

        self.assertEqual([], failures)
