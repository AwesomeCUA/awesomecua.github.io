# WebClick

A web-interface localization benchmark with screenshot instructions and target boxes, including agent browsing, human browsing and calendar cases.

- Catalog URL: https://awesomecua.github.io/resources/url-5e2bd1b3398974b79c9c/
- Original source: https://huggingface.co/datasets/Hcompany/WebClick
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: grounding, evaluation, web-navigation
- Evidence checked: 2026-10-17T04:01:33Z
- ID: url:5e2bd1b3398974b79c9c

## Limitations

Four public test Parquet shards are present. The dataset card declares Apache-2.0. This is an offline localization test, not an end-to-end web-task success benchmark; reported screenshots and samples are not summed as different populations.

## Structured profile

- actions: click target or bounding box
- evaluation: Assess localization against annotated targets; agentbrowse, humanbrowse and calendars are distinct source buckets.
- focus: instruction-conditioned web localization
- observations: web screenshots, instructions
- setting: offline

### Count observations

- 1,639 examples — test split (reported; source: https://huggingface.co/datasets/Hcompany/WebClick/raw/main/README.md)

The card reports more than 100 websites but does not provide a precise website total. Grounding accuracy does not establish task completion.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/Hcompany/WebClick/raw/main/README.md (retrieved 2026-10-17T04:01:33Z; SHA-256 958bbf0eb9f61afd6c576673fbe6f7d84e6c4b8a9d4d8c4fc0e1224b5d8da30b)
- https://huggingface.co/api/datasets/Hcompany/WebClick (retrieved 2026-10-17T04:01:33Z; SHA-256 c9576957a3cb14785bf274691b50f90b04567a442ed60ee8c39f0f73108359f4)
