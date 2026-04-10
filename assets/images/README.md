# Images

Drop your real images here with the following filenames and the LP will pick them up automatically. Until you do, the site shows placeholder images from placehold.co (via the `onerror` fallback on each `<img>`).

## Required files

| Filename | Used in | Recommended size | Notes |
|---|---|---|---|
| `hero-children.png` | Hero section | 1120 × 840 (2x of 560×420) | Transparent PNG of children works best |
| `story-1.jpg` | Story card 1 — Kukuma Orphanage | 800 × 520 | 16:10 |
| `story-2.jpg` | Story card 2 — Daily life | 800 × 520 | 16:10 |
| `story-3.jpg` | Story card 3 — Graduates | 800 × 520 | 16:10 |
| `moment-1.jpg` | Everyday moments grid | 640 × 440 | 16:11 |
| `moment-2.jpg` | Everyday moments grid | 640 × 440 | 16:11 |
| `moment-3.jpg` | Everyday moments grid | 640 × 440 | 16:11 |
| `moment-4.jpg` | Everyday moments grid | 640 × 440 | 16:11 |
| `moment-5.jpg` | Everyday moments grid | 640 × 440 | 16:11 |
| `moment-6.jpg` | Everyday moments grid | 640 × 440 | 16:11 |

## Tips

- Keep each image under ~300KB (compress with https://squoosh.app or `cwebp`).
- For JPGs, 80% quality is usually plenty.
- If you want to change a filename, update the matching `<img src="...">` in `index.html`.

## Swapping one image with a different filename

Open `index.html`, find the `<img>` you want to change, and replace the `src` attribute:

```html
<img src="assets/images/YOUR_FILE.jpg" ... alt="...">
```
