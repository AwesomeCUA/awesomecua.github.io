# OS-Critic Bench

A cross-platform GUI-critic benchmark with mobile, desktop and web JSONL splits and screenshot assets, accompanied by public inference and accuracy-scoring scripts.

- Catalog URL: https://awesomecua.github.io/resources/url-c73ba0618d1b3c505887/
- Original source: https://huggingface.co/datasets/OS-Copilot/OS-Critic-Bench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: evaluation, reward-models, screen-understanding
- Evidence checked: 2026-10-17T11:18:18Z
- ID: url:c73ba0618d1b3c505887

## Limitations

The Hub card provides split/format/license metadata, while the official OS-Oracle README establishes critic-evaluation purpose and platform scope. The repository currently releases only benchmark inference/scoring components; data-synthesis code, training datasets and model checkpoints remain unchecked TODOs and are not counted as released assets. Apache-2.0 is recorded for benchmark data only; the evaluation code has no inspected license declaration.

- Record JSON: https://awesomecua.github.io/resources/url-c73ba0618d1b3c505887/record.json

## Structured profile

- actions: critic-model responses
- evaluation: The official repository runs model inference and computes accuracy with cal_acc.py.
- focus: GUI critic prediction
- observations: benchmark JSONL, UI screenshots
- setting: offline

### Count observations

- 3 platform JSONL splits — mobile/desktop/web configurations in the Hub card (computed) (computed; source: https://huggingface.co/datasets/OS-Copilot/OS-Critic-Bench/raw/main/README.md)

No sample count is inferred from the n<1K Hub size band. Evaluation code availability does not establish the release of OS-Oracle training data or weights.

## License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/OS-Copilot/OS-Critic-Bench/raw/main/README.md
- document: not recorded
- weights: not recorded

- data review: Publisher dataset-card license declaration for OS-Critic-Bench; not an evaluation-code or model-weight license.
  Sources: https://huggingface.co/datasets/OS-Copilot/OS-Critic-Bench/raw/main/README.md

## Primary evidence

- https://raw.githubusercontent.com/numbmelon/OS-Oracle/HEAD/README.md (retrieved 2026-10-17T11:18:18Z; SHA-256 58305b8ebe1af5dfbddd636484d63722d4e21d28ed3e22bb8c0068e654f33479)
- https://api.github.com/repos/numbmelon/OS-Oracle (retrieved 2026-10-17T11:18:17Z; SHA-256 17bcf851f39d06e7e357871df1dc1ddf697bcbea31842c16348227bbf4fbb224)
- https://api.github.com/repos/numbmelon/OS-Oracle/git/trees/main?recursive=1 (retrieved 2026-10-17T11:22:55Z; SHA-256 516beea465382b54548e4b8bfd12ae510080a49451b30262ad1c769ed5a3398e)
- https://huggingface.co/api/datasets/OS-Copilot/OS-Critic-Bench (retrieved 2026-10-17T11:23:06Z; SHA-256 ef311b49437e246ffef6ad13c090277a0bdacc4a124e5b3cfe8d2643ced8f843)
- https://huggingface.co/datasets/OS-Copilot/OS-Critic-Bench/raw/main/README.md (retrieved 2026-10-17T11:23:07Z; SHA-256 4139e25e8911ca8450f6db9acb8dc3a98c126c3c43514c72bcefa4ed33b8ffa8)
