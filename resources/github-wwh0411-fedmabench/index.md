# FedMABench

A federated mobile-agent training and evaluation suite that varies user-data heterogeneity and application distribution, with released partition annotations and inference/scoring scripts.

- Catalog URL: https://awesomecua.github.io/resources/github-wwh0411-fedmabench/
- Original source: https://github.com/wwh0411/FedMABench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: android
- Topics: evaluation, imitation-learning, mobile-navigation
- Evidence checked: 2026-10-17T11:18:17Z
- ID: github:wwh0411/fedmabench

## Limitations

The public Hub lists six dataset families of JSON/JSONL partition annotations. The repository explicitly says unpacked screenshots are not provided and must be reconstructed from original AndroidControl and AITW sources. This is offline training/evaluation infrastructure rather than a live Android task environment. No repository license file or dataset-license declaration was found in the inspected sources; neither is inferred from the underlying ms-swift project.

- Record JSON: https://awesomecua.github.io/resources/github-wwh0411-fedmabench/record.json

## Structured profile

- actions: model predictions on mobile-agent examples
- evaluation: The provided evaluation workflow performs model inference over selected partitions and invokes test_swift_fed.py for accuracy scoring.
- focus: mobile-agent federated training, data heterogeneity
- observations: mobile-agent examples with externally sourced screenshots
- setting: offline

### Count observations

- 6 dataset families — released FedMABench partition families (reported; source: https://huggingface.co/datasets/wwh0411/FedMABench/raw/main/README.md)
- 3 heterogeneity types — publisher benchmark overview (reported; source: https://raw.githubusercontent.com/wwh0411/FedMABench/HEAD/README.md)
- 8 federated learning algorithms — publisher benchmark overview (reported; source: https://raw.githubusercontent.com/wwh0411/FedMABench/HEAD/README.md)

The dataset-family count does not count tasks, apps, screenshots or client instances. Code and data licenses are unknown; external image sources are required.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/wwh0411/FedMABench/HEAD/README.md (retrieved 2026-10-17T11:18:17Z; SHA-256 b49e2b419918078ef9c68f3c9becc6c13d8fe530c165a36bdd61e370746eeea8)
- https://api.github.com/repos/wwh0411/FedMABench (retrieved 2026-10-17T11:18:17Z; SHA-256 3e1b2b643a263af129b3a4092a84efe47d3643f00509f7b9517da21a4aac0371)
- https://api.github.com/repos/wwh0411/FedMABench/git/trees/master?recursive=1 (retrieved 2026-10-17T11:22:54Z; SHA-256 4fb977a469cee3d5083da0b5bf2984fedc6b867146a90b20963985e08f9e9716)
- https://huggingface.co/api/datasets/wwh0411/FedMABench (retrieved 2026-10-17T11:23:06Z; SHA-256 df5379f4a9b350dad0c3d374d2f9a1d6eacd974b6d54750e2a14ecec1faec6e5)
- https://huggingface.co/datasets/wwh0411/FedMABench/raw/main/README.md (retrieved 2026-10-17T11:23:06Z; SHA-256 2874269995d8c9f5dabe266433ecf724bf54c27af599d899f3f0090b8ee37cdc)
