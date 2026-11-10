---
title: "CUAVerifierBench | AwesomeCUA"
url: https://awesomecua.com/resources/url-d5140d438466c1e1348a/
updated: 2026-10-17
type: benchmark
lang: en
---

# CUAVerifierBench

Human-annotated browser-agent trajectories for comparing automated task-success and process-quality verifiers against reviewer judgments.

- Catalog URL: https://awesomecua.com/resources/url-d5140d438466c1e1348a/
- Original source: https://huggingface.co/datasets/microsoft/CUAVerifierBench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, reward-models, web-navigation
- Evidence checked: 2026-10-17T02:42:32Z
- ID: url:d5140d438466c1e1348a

## Limitations

Public Parquet configs separate trajectories from per-reviewer annotations. The card declares MIT. The two splits have different review stages: Online-Mind2Web includes blind and verifier-informed annotations, whereas the internal split is blind-only. This measures verifier agreement.

- Record JSON: https://awesomecua.com/resources/url-d5140d438466c1e1348a/record.json

## Structured profile

- Actions / outputs: success verdict, process score
- Evaluation: Agreement metrics including Cohen’s kappa, accuracy and F1 against human annotations; review stages must be kept distinct.
- Focus: verifier-human agreement, process quality
- Observations: screenshots, action logs, final answers
- Setting: offline

### Count observations

- 106 trajectories — fara7b_om2w_browserbase split (reported; source: https://huggingface.co/datasets/microsoft/CUAVerifierBench/raw/main/README.md)
- 154 trajectories — internal split (reported; source: https://huggingface.co/datasets/microsoft/CUAVerifierBench/raw/main/README.md)
- 215 annotation rows — fara7b_om2w_browserbase split (reported; source: https://huggingface.co/datasets/microsoft/CUAVerifierBench/raw/main/README.md)
- 154 annotation rows — internal split (reported; source: https://huggingface.co/datasets/microsoft/CUAVerifierBench/raw/main/README.md)

Trajectory rows and reviewer rows have different grains. The released Parquet files are public despite internal task labels. No payload data was downloaded.

## License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/microsoft/CUAVerifierBench/raw/main/README.md
- document: not recorded
- weights: not recorded

- data review: The benchmark's Hub dataset card declares MIT in its metadata header (license: mit).
  Sources: https://huggingface.co/datasets/microsoft/CUAVerifierBench/raw/main/README.md

## Primary evidence

- https://huggingface.co/datasets/microsoft/CUAVerifierBench/raw/main/README.md (retrieved 2026-10-17T02:42:32Z; SHA-256 44d7190b72ae489297f59d6fadff635ced6dd067c845c77b04f187a7b2d7bec7)
- https://huggingface.co/api/datasets/microsoft/CUAVerifierBench (retrieved 2026-10-17T02:42:32Z; SHA-256 fb1fe8a9fd6e45fc82157c65c08d5c682d08bead5196308776200ef3c39c1e41)
