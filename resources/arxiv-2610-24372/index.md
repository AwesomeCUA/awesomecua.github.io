# Beyond Next-Screen Prediction: The Decision Value of GUI World Models

Separates next-screen prediction from action evaluation in GUI lookahead and trains Direct Action Ranking on reference actions, comparing prediction-augmented scoring under matched offline supervision.

- Catalog URL: https://awesomecua.github.io/resources/arxiv-2610-24372/
- Original source: https://arxiv.org/abs/2610.24372
- Kind: paper
- Review: curated
- Scope: core
- Environments: android, web
- Topics: evaluation, world-models, action-prediction, imitation-learning
- Evidence checked: 2026-10-20T13:12:51.579373Z
- ID: arxiv:2610.24372

## Limitations

The matched augmentation experiment measures offline ranking; AndroidWorld task-success comparisons use differently trained evaluators and do not isolate prediction value. A separate web evaluator is trained on Mind2Web, and web results do not uniformly favor direct scoring. The main study concerns one-step selection. No independent reproduction.

- Record JSON: https://awesomecua.github.io/resources/arxiv-2610-24372/record.json

## Authors

Sizhe Tang, Hanhan Zhou, Jeffrey Svajlenko, Rashmi Gangadharaiah

## Citation exports

- BibTeX: https://awesomecua.github.io/resources/arxiv-2610-24372/citation.bib
- CSL JSON: https://awesomecua.github.io/resources/arxiv-2610-24372/citation.csl.json

## Recorded arXiv snapshot

- Version: 1
- Version source: https://arxiv.org/abs/2610.24372v1
- First submission: 2026-10-17T02:03:20Z
- Version updated: 2026-10-17T02:03:20Z
- Abstract SHA-256: 9d6808cf26a609b50b7835ae3ecece0a13580aafcd589823f0b1eeff54732f69
- Abstract hash normalization: sha256-utf8-whitespace-collapsed-v1

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://export.arxiv.org/api/query?search_query=%28ti%3AGUI+OR+ti%3A%22computer-using%22+OR+ti%3A%22agentic+browsing%22+OR+ti%3A%22visual+grounding%22+OR+ti%3A%22UI+automation%22%29+AND+submittedDate%3A%5B202608210000+TO+202610201255%5D&start=0&max_results=200&sortBy=submittedDate&sortOrder=descending (retrieved 2026-10-20T12:58:15.922053Z; SHA-256 b379e14eefa272f62641224fe1d839b7dfbc414d957124b8abeb103444a843ef)
- https://arxiv.org/html/2610.24372v1 (retrieved 2026-10-20T13:12:51.579373Z; SHA-256 9dff18935a1faa7ec16366bac6a6e9e41f0381d561568c3aba39fe783efcfbd3)
