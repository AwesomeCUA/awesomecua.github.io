# ECHOES: Seeing Beyond the Current Image via Recursive History Compression and Privileged On-Policy Distillation

ECHOES learns recursive textual task memory through privileged screenshot-history distillation and GRPO, then predicts GUI actions from the current screenshot and memory.

- Catalog URL: https://awesomecua.github.io/resources/arxiv-2610-22408/
- Original source: https://arxiv.org/abs/2610.22408
- Kind: paper
- Review: curated
- Scope: core
- Environments: android
- Topics: memory, interaction-history, state-tracking, long-horizon, imitation-learning, reinforcement-learning, efficiency, evaluation
- Evidence checked: 2026-10-20T13:12:54.814500Z
- ID: arxiv:2610.22408

## Limitations

Privileged screenshot history is used during training, while deployment retains self-generated textual state. GUI results use action/step metrics and model-specific history settings; online Sokoban transfer is separate. GRPO rewards action correctness, valid output format and compression length. Diagnostic memory replay is distinct from the validation gap used to schedule training. No independent reproduction.

- Record JSON: https://awesomecua.github.io/resources/arxiv-2610-22408/record.json

## Authors

Tengda Guo, Jiawang Hu, Yifei Tao, Yin Wang, Haotian Hu, Fanyi Wang, Liujuan Tang

## Citation exports

- BibTeX: https://awesomecua.github.io/resources/arxiv-2610-22408/citation.bib
- CSL JSON: https://awesomecua.github.io/resources/arxiv-2610-22408/citation.csl.json

## Recorded arXiv snapshot

- Version: 1
- Version source: https://arxiv.org/abs/2610.22408v1
- First submission: 2026-10-14T14:39:41Z
- Version updated: 2026-10-14T14:39:41Z
- Abstract SHA-256: 025c7018c86ae4de79a659242070b2f91c5913333e9ecd4bd7fd357d13d27a34
- Abstract hash normalization: sha256-utf8-whitespace-collapsed-v1

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://export.arxiv.org/api/query?search_query=%28abs%3A%22computer-use+agents%22+OR+abs%3A%22GUI+agents%22+OR+abs%3A%22browser+agents%22+OR+abs%3A%22mobile+GUI%22%29+AND+submittedDate%3A%5B202609200000+TO+202610201255%5D&start=0&max_results=200&sortBy=submittedDate&sortOrder=descending (retrieved 2026-10-20T12:58:20.217517Z; SHA-256 f275c47a8b6d349a70e39a9e55eea5a09d99d5f35cc896100f3bcfd5b0923e0b)
- https://arxiv.org/html/2610.22408v1 (retrieved 2026-10-20T13:12:54.814500Z; SHA-256 0389d96a8f6c4975129f5c526e8df9ca4690f31364a2f4e66aaea4a75f0eabbc)
