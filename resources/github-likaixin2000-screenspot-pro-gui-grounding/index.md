# ScreenSpot Pro

GUI grounding benchmark focused on professional high-resolution interfaces.

- Catalog URL: https://awesomecua.github.io/resources/github-likaixin2000-screenspot-pro-gui-grounding/
- Original source: https://github.com/likaixin2000/ScreenSpot-Pro-GUI-Grounding
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: desktop, windows, macos, linux
- Topics: evaluation, grounding
- Evidence checked: 2026-10-16T06:35:58Z
- ID: github:likaixin2000/screenspot-pro-gui-grounding

## Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.github.io/resources/github-likaixin2000-screenspot-pro-gui-grounding/record.json

## Structured profile

- actions: predicted target coordinates
- evaluation: For positive targets, the predicted point must fall inside the annotated bounding box.
- focus: GUI grounding
- observations: high-resolution screenshots, target instructions
- setting: offline

### Count observations

- 1,581 target annotations — sum of icon/text counts in the published card table (computed) (computed; source: https://huggingface.co/datasets/likaixin/ScreenSpot-Pro/raw/main/README.md)

Language, instruction style, and positive/negative target configuration are explicit evaluator options. This profile describes target localization, not end-to-end workflow completion. The target count is computed from the card table, not from expanded language/style evaluation instances.

## License declarations

- code: MIT — https://raw.githubusercontent.com/likaixin2000/ScreenSpot-Pro-GUI-Grounding/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/likaixin2000/ScreenSpot-Pro-GUI-Grounding/HEAD/readme.md (retrieved 2026-10-16T06:35:58Z; SHA-256 7b64ccad9cfec24c2c9cb35f55923bff93d53729cef3cc7463c79b29bdb1de1a)
- https://raw.githubusercontent.com/likaixin2000/ScreenSpot-Pro-GUI-Grounding/HEAD/eval_screenspot_pro.py (retrieved 2026-10-16T11:38:05Z; SHA-256 a77c859775b33591b5619e8520c94702a53a1f9a29ada93e66744dbe23afe9dc)
- https://huggingface.co/datasets/likaixin/ScreenSpot-Pro/raw/main/README.md (retrieved 2026-10-16T11:35:55Z; SHA-256 76ae2231564fe84af029f8625c02d9cd7fb6cf85c5f8af1b2a2593e2107719d9)
- https://raw.githubusercontent.com/likaixin2000/ScreenSpot-Pro-GUI-Grounding/HEAD/LICENSE (retrieved 2026-10-16T06:41:57Z; SHA-256 c78681e624c748b7a9980b6a9fd1514cec5140c7b3c7f08fe21b36bc7468f2ce)
