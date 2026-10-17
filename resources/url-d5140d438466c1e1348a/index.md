# CUAVerifierBench

Human-annotated browser-agent trajectories for comparing automated task-success and process-quality verifiers against reviewer judgments.

- Catalog URL: https://awesomecua.github.io/resources/url-d5140d438466c1e1348a/
- Original source: https://huggingface.co/datasets/microsoft/CUAVerifierBench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, reward-models, web-navigation
- Evidence checked: 2026-10-17T02:42:32Z
- ID: url:d5140d438466c1e1348a

## Limitations

Public Parquet configs separate trajectories from per-reviewer annotations. The card declares MIT. The two splits have different review stages: Online-Mind2Web includes blind and verifier-informed annotations, whereas the internal split is blind-only. This measures verifier agreement rather than agent task success.

## Structured profile

- actions: success verdict, process score
- evaluation: Agreement metrics including Cohen’s kappa, accuracy and F1 against human annotations; review stages must be kept distinct.
- focus: verifier-human agreement, process quality
- observations: screenshots, action logs, final answers
- setting: offline

### Count observations

- 106 trajectories — fara7b_om2w_browserbase split (reported; source: https://huggingface.co/datasets/microsoft/CUAVerifierBench/raw/main/README.md)
- 154 trajectories — internal split (reported; source: https://huggingface.co/datasets/microsoft/CUAVerifierBench/raw/main/README.md)
- 215 annotation rows — fara7b_om2w_browserbase split (reported; source: https://huggingface.co/datasets/microsoft/CUAVerifierBench/raw/main/README.md)
- 154 annotation rows — internal split (reported; source: https://huggingface.co/datasets/microsoft/CUAVerifierBench/raw/main/README.md)

Trajectory rows and reviewer rows have different grains. Internal task labels do not make the released Parquet files private. No payload data was downloaded.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/microsoft/CUAVerifierBench/raw/main/README.md (retrieved 2026-10-17T02:42:32Z; SHA-256 44d7190b72ae489297f59d6fadff635ced6dd067c845c77b04f187a7b2d7bec7)
- https://huggingface.co/api/datasets/microsoft/CUAVerifierBench (retrieved 2026-10-17T02:42:32Z; SHA-256 fb1fe8a9fd6e45fc82157c65c08d5c682d08bead5196308776200ef3c39c1e41)
