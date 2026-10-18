# Precision CUA Bench

Evaluation resources for pixel-precise cursor grounding in code editors.

- Catalog URL: https://awesomecua.github.io/resources/github-microsoft-precision-cua-bench/
- Original source: https://github.com/microsoft/precision-cua-bench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: evaluation, grounding
- Evidence checked: 2026-10-16T06:40:52Z
- ID: github:microsoft/precision-cua-bench

## Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.github.io/resources/github-microsoft-precision-cua-bench/record.json

## Structured profile

- actions: pixel (x,y) cursor coordinate
- evaluation: The inspected evaluator scales target boxes from a 1000×1000 reference grid into image pixels and tests pixel predictions, allowing ±10 pixels around the center along any target dimension narrower than 1 pixel after scaling. It reports cumulative hit accuracy by turn (earlier hits remain correct), miss distances, any-turn hit rate, and a correction rate whose denominator is all successfully processed samples. The default budget is five turns; retain prompt/feedback variant, turn budget, and processed/skipped coverage.
- focus: pixel-precise editor cursor placement, multi-turn visual self-correction
- observations: code-editor screenshot, cursor-location instruction, red-cross feedback marking previous incorrect prediction
- setting: offline

### Count observations

No count recorded.

The release has four editor/theme JSONL partitions (Cursor/VS Code × dark/light) and screenshot files. Partitions are not train/test splits or independent task totals. README’s initial field table calls bbox pixel coordinates, but the evaluation-format section and actual ratio_h/ratio_w=dimension/1000 code use normalized target boxes; profile follows the inspected evaluator and retains the inconsistency. Source/images were not executed or downloaded as a dataset. MIT is recorded for repository code only.

## License declarations

- code: MIT — https://raw.githubusercontent.com/microsoft/precision-cua-bench/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://github.com/microsoft/precision-cua-bench (retrieved 2026-10-16T06:40:52Z; SHA-256 23d0dc8ea0a10c080cf8ae32121eade2785ae923a6b0d853d166c94c195e789b)
- https://raw.githubusercontent.com/microsoft/precision-cua-bench/HEAD/README.md (retrieved 2026-10-16T06:35:59Z; SHA-256 84ad4fb798abb776dce813cf4dab296d6e03248d8ae29388e1f06cccd27d1241)
- https://raw.githubusercontent.com/microsoft/precision-cua-bench/HEAD/eval/test_allturns_api.py (retrieved 2026-10-17T14:21:08Z; SHA-256 1fda7c3980fe7a7c373478eda6ecfabff227e92c2b1f19c6fe903b408f583797)
- https://api.github.com/repos/microsoft/precision-cua-bench/git/trees/main?recursive=1 (retrieved 2026-10-17T14:14:06Z; SHA-256 ede84e3dda47f80fada4234caa2423db08e21ff7667a37599c03aae657b2f84b)
- https://export.arxiv.org/api/query?id_list=2603.12823%2C2603.14707%2C2603.15039%2C2603.17357%2C2603.18429%2C2603.19191%2C2603.24440%2C2603.25226%2C2603.25864%2C2603.26211%2C2603.26648%2C2603.29318%2C2604.01535%2C2604.02947%2C2604.04399%2C2604.05477%2C2604.06126%2C2604.06182%2C2604.06367%2C2604.07429%2C2604.08455%2C2604.08516%2C2604.08523%2C2604.09155%2C2604.09574%2C2604.09587%2C2604.09815%2C2604.09937%2C2604.11259%2C2604.11784%2C2604.12284%2C2604.13019%2C2604.13822%2C2604.14113%2C2604.14262%2C2604.14956%2C2604.15093%2C2604.15309%2C2604.17817%2C2604.17821%2C2604.18860%2C2604.24964%2C2604.25380%2C2604.25562%2C2604.27151%2C2604.27253%2C2604.27776%2C2605.00642%2C2605.06393%2C2605.06664&max_results=50 (retrieved 2026-10-16T06:32:00Z; SHA-256 4d09ebfb093e43a4c44adef86c8fa8374f90d907fc33bd8e12a1315e62d5a583)
- https://raw.githubusercontent.com/microsoft/precision-cua-bench/HEAD/LICENSE (retrieved 2026-10-16T06:41:59Z; SHA-256 c2cfccb812fe482101a8f04597dfc5a9991a6b2748266c47ac91b6a5aae15383)
