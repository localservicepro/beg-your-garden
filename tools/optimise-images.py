#!/usr/bin/env python3
"""
Image pipeline for the Beg Your Garden site.

Reads the client's original photos from assets/source/ and writes optimised
WebP variants into src/public/images/ (committed, served as-is by the static
build). Run with:  python3 tools/optimise-images.py

Rules (from the SEO brief): WebP, max 1600px wide for hero/feature images,
quality ~72, smaller variants for cards, logo kept lossless with alpha.
"""
from __future__ import annotations

import os
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "assets" / "source"
OUT = ROOT / "src" / "public" / "images"
OUT.mkdir(parents=True, exist_ok=True)

QUALITY = 72


def save_webp(im: Image.Image, name: str, width: int | None = None, quality: int = QUALITY, lossless: bool = False) -> None:
    im = ImageOps.exif_transpose(im)
    if width and im.width > width:
        ratio = width / im.width
        im = im.resize((width, round(im.height * ratio)), Image.LANCZOS)
    if not lossless and im.mode not in ("RGB",):
        im = im.convert("RGB")
    path = OUT / name
    if lossless:
        im.save(path, "WEBP", lossless=True, quality=100, method=6)
    else:
        im.save(path, "WEBP", quality=quality, method=6)
    print(f"{name:48s} {im.width}x{im.height} {os.path.getsize(path)//1024} KB")


def photo(src: Path, base: str, widths: tuple[int, ...]) -> None:
    im = Image.open(src)
    for w in widths:
        suffix = "" if w == widths[0] else f"-{w}"
        save_webp(im, f"{base}{suffix}.webp", width=w)


def crop_box(src: Path, box: tuple[int, int, int, int], base: str, widths: tuple[int, ...]) -> None:
    im = Image.open(src).crop(box)
    for w in widths:
        suffix = "" if w == widths[0] else f"-{w}"
        save_webp(im, f"{base}{suffix}.webp", width=w)


def main() -> None:
    lc = SRC / "leadconnector"
    gbp = SRC / "gbp"
    gen = SRC / "generated"

    # --- Logo (keep alpha, lossless) ---------------------------------------
    logo = Image.open(lc / "logo-original.png").convert("RGBA")
    bbox = logo.getbbox()
    logo = logo.crop(bbox)
    save_webp(logo, "logo-full.webp", width=900, lossless=True)
    save_webp(logo, "logo-full-480.webp", width=480, lossless=True)
    # Badge only: the square illustration above the wordmark. Find the badge
    # by scanning for the first fully transparent row gap below the frame.
    w, h = logo.size
    alpha = logo.split()[3]
    rows = [y for y in range(h) if alpha.crop((0, y, w, y + 1)).getbbox() is None]
    gap = next(y for y in rows if y > h * 0.4)
    badge = logo.crop((0, 0, w, gap))
    badge = badge.crop(badge.getbbox())
    save_webp(badge, "logo-badge.webp", width=320, lossless=True)
    save_webp(badge, "logo-badge-160.webp", width=160, lossless=True)
    # Favicons / app icons from the badge
    for size in (32, 180, 192, 512):
        ic = badge.resize((size, size), Image.LANCZOS) if badge.width == badge.height else ImageOps.fit(badge, (size, size), Image.LANCZOS)
        ic.save(OUT / f"icon-{size}.png", "PNG", optimize=True)
    badge.resize((48, 48), Image.LANCZOS).save(OUT / "favicon.ico", format="ICO", sizes=[(48, 48), (32, 32), (16, 16)])

    # --- LeadConnector originals (client's own site photos) ----------------
    photo(lc / "john-mowing-battery-mower.png", "hero-john-mowing-battery-raceview", (1366, 800))
    photo(lc / "front-yard-mulch-garden-bed.jpeg", "front-yard-mulch-garden-bed-ipswich", (1600, 1000, 640))
    photo(lc / "battery-mower-collage.jpeg", "battery-mower-greenworks-collage", (1020, 640))
    photo(lc / "battery-mower-front-lawn.png", "battery-mower-front-lawn-ipswich", (940, 640))
    photo(lc / "john-weed-control-ppe.png", "weed-control-ppe-spraying-ipswich", (940, 640))
    photo(lc / "lawn-edge-verge.webp", "lawn-edging-verge-ipswich", (680,))
    photo(lc / "front-yard-mown-street.webp", "front-yard-mown-springfield", (680,))
    photo(lc / "acreage-mowing-blower.webp", "acreage-mowing-blower-ipswich", (510,))
    # Before/after composites -> split into halves for the comparison slider
    crop_box(lc / "backyard-before-after-stacked.png", (0, 0, 940, 400), "before-backyard-overgrown-ipswich", (940, 640))
    crop_box(lc / "backyard-before-after-stacked.png", (0, 411, 940, 788), "after-backyard-mown-ipswich", (940, 640))
    crop_box(lc / "backyard-before-after-stacked-2.webp", (0, 1, 680, 226), "before-backyard-2-ipswich", (680,))
    crop_box(lc / "backyard-before-after-stacked-2.webp", (0, 228, 680, 452), "after-backyard-2-ipswich", (680,))

    # --- Google Business Profile photos (small originals, used in gallery) --
    gbp_map = {
        "gbp-26.webp": "garden-bed-mulch-pebbles-ripley",
        "gbp-28.webp": "verge-edging-footpath-booval",
        "gbp-40.webp": "nature-strip-mowing-fenceline-brassall",
        "gbp-42.webp": "street-verge-mowing-raceview",
        "gbp-44.webp": "backyard-clean-up-before-after-grid",
        "gbp-46.webp": "footpath-edge-trimming-silkstone",
        "gbp-50.webp": "courtyard-garden-tidy-yamanto",
        "gbp-52.webp": "lawn-mowing-equipment-shade-ipswich",
        "gbp-32.webp": "front-yard-new-build-springfield-lakes",
        "gbp-48.webp": "acreage-slashing-mount-walker-view",
        "gbp-34.webp": "footpath-verge-mowing-collage-ipswich",
        "gbp-18.webp": "nature-strip-battery-mowing-east-ipswich",
        "gbp-38.webp": "lawn-mowing-job-ipswich",
    }
    for src_name, base in gbp_map.items():
        src = gbp / src_name
        if src.exists():
            photo(src, base, (800,))

    # --- Generated gap-fill images (flagged in the site summary) -----------
    if gen.exists():
        for src in sorted(gen.glob("*")):
            if src.suffix.lower() in (".png", ".jpg", ".jpeg", ".webp"):
                photo(src, src.stem, (1200, 640))


if __name__ == "__main__":
    main()
