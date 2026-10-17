# Plan-and-Act training data

Planner and action-executor training examples for WebArena-Lite and WebVoyager, with model-specific processed files and raw trajectory annotations.

- Catalog URL: https://awesomecua.github.io/resources/url-ba6453cfdae0eb049ced/
- Original source: https://huggingface.co/datasets/xTRam1/plan-and-act-data
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: planning, web-navigation, data-generation
- Evidence checked: 2026-10-17T02:02:29Z
- ID: url:ba6453cfdae0eb049ced

## Limitations

The public manifest exposes JSON/JSONL data for planner and actor roles, including train and validation variants. The card declares MIT. Its loading examples use a different Hub repository identifier and omit the data/ prefix for one file; use the inspected xTRam1 manifest rather than copying those examples verbatim. Third-party site content retains its own terms.

## Structured profile

- formats: JSON, JSONL
- modalities: text, plans, actions
- splits: train (QwQ-32B files), validation (QwQ-32B files)
- supervision: high-level plans, action execution

### Count observations

No count recorded.

The release contains planner and actor files for two web environments. No sample count is inferred from the package-file manifest. Card loading examples have repository/path inconsistencies.

## License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/xTRam1/plan-and-act-data/raw/main/README.md
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/xTRam1/plan-and-act-data/raw/main/README.md (retrieved 2026-10-17T02:02:29Z; SHA-256 2ec8f4a03b8331bdd2ba8d6f6800d6dea9d955cfd9e7c1d2168ecb64deb25448)
- https://huggingface.co/api/datasets/xTRam1/plan-and-act-data (retrieved 2026-10-17T02:02:28Z; SHA-256 a98f98b7d4ceb81b00f217983ff271257f2f1e7d2c1a09836b872b2350d79ae9)
- https://huggingface.co/datasets/xTRam1/plan-and-act-data/raw/main/README.md (retrieved 2026-10-17T02:02:29Z; SHA-256 2ec8f4a03b8331bdd2ba8d6f6800d6dea9d955cfd9e7c1d2168ecb64deb25448)
