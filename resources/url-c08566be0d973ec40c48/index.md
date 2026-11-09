# UI-I2E-Bench

GUI grounding benchmark from UI-E2I-Synth: 1,477 explicit and implicit instructions on mobile, desktop and web screenshots, each paired with a target element's bounding box and element type.

- Catalog URL: https://awesomecua.com/resources/url-c08566be0d973ec40c48/
- Original source: https://huggingface.co/datasets/vaundys/I2E-Bench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding, evaluation
- Evidence checked: 2026-10-19T07:08:32Z
- ID: url:c08566be0d973ec40c48

## Limitations

The Hub card has only metadata (apache-2.0, English, 1K<n<10K). The UI-I2E-Bench leaderboard page in microsoft/FIVE-UI-Evol links this dataset, the UI-E2I-Synth paper and the code, and describes the benchmark as using implicit instructions and long-tail element types with realistic element-to-screen size ratios. Each annotation row gives an image path, instruction, bounding box, element type, source and quality flags. The evaluation script in that repository counts a prediction correct when the predicted point falls inside the box and reports accuracy by source, element type and instruction type. The apache-2.0 declaration does not settle rights to the screenshots.

- Record JSON: https://awesomecua.com/resources/url-c08566be0d973ec40c48/record.json

## Structured profile

- Actions / outputs: point prediction
- Evaluation: Point-in-box accuracy against the annotated bounding box, broken down by source platform, element type and instruction type (UI-E2I-Synth/i2e-bench-eval.py).
- Focus: GUI element grounding from explicit and implicit instructions
- Observations: screenshots, natural-language instructions
- Setting: offline

### Count observations

- 1,477 annotated instructions — I2E-bench-annotation.jsonl at Hub revision ecfcc01 (computed) (computed; source: https://huggingface.co/datasets/vaundys/I2E-Bench/resolve/ecfcc016d92c87ce6c194dba1b3faffabf7db51d/I2E-bench-annotation.jsonl)
- 1,161 distinct screenshots referenced — I2E-bench-annotation.jsonl at Hub revision ecfcc01 (computed) (computed; source: https://huggingface.co/datasets/vaundys/I2E-Bench/resolve/ecfcc016d92c87ce6c194dba1b3faffabf7db51d/I2E-bench-annotation.jsonl)
- 705 mobile instructions — I2E-bench-annotation.jsonl at Hub revision ecfcc01 (computed) (computed; source: https://huggingface.co/datasets/vaundys/I2E-Bench/resolve/ecfcc016d92c87ce6c194dba1b3faffabf7db51d/I2E-bench-annotation.jsonl)
- 519 desktop instructions — I2E-bench-annotation.jsonl at Hub revision ecfcc01 (computed) (computed; source: https://huggingface.co/datasets/vaundys/I2E-Bench/resolve/ecfcc016d92c87ce6c194dba1b3faffabf7db51d/I2E-bench-annotation.jsonl)
- 253 web instructions — I2E-bench-annotation.jsonl at Hub revision ecfcc01 (computed) (computed; source: https://huggingface.co/datasets/vaundys/I2E-Bench/resolve/ecfcc016d92c87ce6c194dba1b3faffabf7db51d/I2E-bench-annotation.jsonl)
- 917 implicit instructions — I2E-bench-annotation.jsonl at Hub revision ecfcc01 (computed) (computed; source: https://huggingface.co/datasets/vaundys/I2E-Bench/resolve/ecfcc016d92c87ce6c194dba1b3faffabf7db51d/I2E-bench-annotation.jsonl)

Counts were computed from the pinned annotation file; source counts sum to the instruction total, and implicit plus 560 explicit instructions do too. The Hub manifest has 1,509 PNG files in five folders, more than the 1,161 screenshots the annotations reference. No split is declared.

## License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/vaundys/I2E-Bench
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/api/datasets/vaundys/I2E-Bench/revision/ecfcc016d92c87ce6c194dba1b3faffabf7db51d (retrieved 2026-10-19T07:08:32Z; SHA-256 cf382038d5dc2c54bb2353b50fad311ff8fab34bab7433fe26a66147ef44607c)
- https://huggingface.co/datasets/vaundys/I2E-Bench/resolve/ecfcc016d92c87ce6c194dba1b3faffabf7db51d/I2E-bench-annotation.jsonl (retrieved 2026-10-19T07:08:32Z; SHA-256 56f69897e22e683d82f015e698f33e35d19de25d77eeaba992039767efe63981)
- https://raw.githubusercontent.com/microsoft/FIVE-UI-Evol/a07e8ecfad9203c202ba04557f8c5ad9f58d61f1/UI-E2I-Synth/leaderboard/index.html (retrieved 2026-10-19T07:08:31Z; SHA-256 9ddfcc1e1898d61fa01197cdb0fafee7990cc92e3671c229ae83634330c66814)
- https://raw.githubusercontent.com/microsoft/FIVE-UI-Evol/a07e8ecfad9203c202ba04557f8c5ad9f58d61f1/UI-E2I-Synth/i2e-bench-eval.py (retrieved 2026-10-19T07:08:31Z; SHA-256 504f491e65b1d242644857d5c1ed2cdf86a6c214f252332d4b84a4f31adc6dbc)
- https://huggingface.co/datasets/vaundys/I2E-Bench/raw/ecfcc016d92c87ce6c194dba1b3faffabf7db51d/README.md (retrieved 2026-10-19T07:08:32Z; SHA-256 718a10fa2b6c81adfe66e848f13cd9672364685e2ab638ef67c3892a1cb74d8a)
- https://huggingface.co/api/datasets/vaundys/I2E-Bench/revision/ecfcc016d92c87ce6c194dba1b3faffabf7db51d (retrieved 2026-10-19T07:08:32Z; SHA-256 cf382038d5dc2c54bb2353b50fad311ff8fab34bab7433fe26a66147ef44607c)
