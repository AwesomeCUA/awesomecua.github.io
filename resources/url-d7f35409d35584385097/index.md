# AgentCIBench

Contextual-integrity benchmark for computer-use agents: 117 synthetic multi-app workspace scenarios that pair under-specified requests with must-share and must-not-share lists, plus a 50-scenario live-UI subset.

- Catalog URL: https://awesomecua.com/resources/url-d7f35409d35584385097/
- Original source: https://huggingface.co/datasets/UKPLab/agentcibench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, safety-security, cross-app
- Evidence checked: 2026-10-19T06:04:29Z
- ID: url:d7f35409d35584385097

## Limitations

Each scenario is a JSON snapshot of app states in the OpenApps workspace (messenger, todo, calendar, code editor, maps and shopping apps) with a task prompt and a disclosure policy. The card's test split serves the state-grounded reasoning track; test_e2e is a 50-scenario subset of it (all IDs overlap) for runs in the rendered UI, which the code README describes as a local multi-app web environment driven through Playwright; seeds holds 36 disjoint hand-written scenarios. The card says source is seed or mcts, but every released row reads seed or legacy_pilot_seed. The code repository linked as ukplab/arxiv2026-agentcibench now resolves to UKPLab/emnlp2026-agentcibench (GitHub API), and the card's second code link, agentcibench/agentcibench, returns 404. The 67.9% average leakage over 15 agents is a publisher figure and was not reproduced. CC BY 4.0 is the card's data declaration; the code is a separate Apache-2.0 release.

- Record JSON: https://awesomecua.com/resources/url-d7f35409d35584385097/record.json

## Structured profile

- actions: GUI actions in the rendered workspace (live-UI subset), content shared or sent through the workspace apps
- evaluation: The code release scores each run for utility (required items shared) and contextual-integrity violation (prohibited items leaked), combining deterministic text matching against the scenario's must-share and must-not-share lists with an LLM judge at temperature 0; summaries report utility rate, leak rate and average reward.
- focus: contextual-integrity compliance of computer-use agents, information disclosure across personal apps
- observations: decoded app states, rendered app UI (live-UI subset), natural-language task prompts
- setting: mixed

### Count observations

- 117 scenarios — test split (reported; source: https://huggingface.co/datasets/UKPLab/agentcibench/raw/f5523cb986828ee77bc505120a933f114bbcf4f3/README.md)
- 50 scenarios — test_e2e split (subset of test used for live-UI evaluation) (reported; source: https://huggingface.co/datasets/UKPLab/agentcibench/raw/f5523cb986828ee77bc505120a933f114bbcf4f3/README.md)
- 36 scenarios — seeds split (hand-written seed scenarios) (reported; source: https://huggingface.co/datasets/UKPLab/agentcibench/raw/f5523cb986828ee77bc505120a933f114bbcf4f3/README.md)
- 75 scenarios — test split, failure mode task_ambiguity_overshare (reported; source: https://huggingface.co/datasets/UKPLab/agentcibench/raw/f5523cb986828ee77bc505120a933f114bbcf4f3/README.md)
- 24 scenarios — test split, failure mode recipient_misalignment (reported; source: https://huggingface.co/datasets/UKPLab/agentcibench/raw/f5523cb986828ee77bc505120a933f114bbcf4f3/README.md)
- 18 scenarios — test split, failure mode visual_co_location (reported; source: https://huggingface.co/datasets/UKPLab/agentcibench/raw/f5523cb986828ee77bc505120a933f114bbcf4f3/README.md)

Setting is mixed: the reasoning track scores responses over decoded app states, while the test_e2e subset runs in the rendered web UI. A script recount of the released JSONL files matches every reported split and failure-mode count. The 50 test_e2e IDs all appear in test, so the two splits are not added; seeds share no IDs with either.

## License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/UKPLab/agentcibench/raw/f5523cb986828ee77bc505120a933f114bbcf4f3/README.md
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/UKPLab/agentcibench/raw/f5523cb986828ee77bc505120a933f114bbcf4f3/README.md (retrieved 2026-10-19T06:04:29Z; SHA-256 3e34a24a57ba5602f25711c464635970a14582ae8e39b146f932f81e65950cde)
- https://huggingface.co/api/datasets/UKPLab/agentcibench/revision/f5523cb986828ee77bc505120a933f114bbcf4f3 (retrieved 2026-10-19T06:04:29Z; SHA-256 2ae68d96a7bff7a2eb78f323c3e87b09768812c06f2a2e0aadbaee2d627f5f7d)
- https://huggingface.co/datasets/UKPLab/agentcibench/resolve/f5523cb986828ee77bc505120a933f114bbcf4f3/data/test-00000-of-00001.jsonl (retrieved 2026-10-19T06:04:29Z; SHA-256 709d43e4e09d2f3558d9290b8bdf4c15e95e4fefc29a56be6d12b52e646c99d7)
- https://huggingface.co/datasets/UKPLab/agentcibench/resolve/f5523cb986828ee77bc505120a933f114bbcf4f3/data/test_e2e-00000-of-00001.jsonl (retrieved 2026-10-19T06:04:30Z; SHA-256 9aced6b0d1e1368c28b3b110ba85e79a935b501a03a3c1b48fb97996dd4c05b2)
- https://huggingface.co/datasets/UKPLab/agentcibench/resolve/f5523cb986828ee77bc505120a933f114bbcf4f3/data/seeds-00000-of-00001.jsonl (retrieved 2026-10-19T06:04:30Z; SHA-256 1b1a458c15ac64d63b7f6c20fab23740115a2b09d151ceeeb6f2c353c97f5418)
- https://raw.githubusercontent.com/UKPLab/emnlp2026-agentcibench/7b3fad424d0c5a450ac3bc3dc4050c38094c6dc6/README.md (retrieved 2026-10-19T06:04:30Z; SHA-256 f836c578d6fea20f7b38092071a9646d2db19b422fe6117d57e6de57ab5e1324)
- https://raw.githubusercontent.com/UKPLab/emnlp2026-agentcibench/7b3fad424d0c5a450ac3bc3dc4050c38094c6dc6/mcts/reward_judge.py (retrieved 2026-10-19T06:04:30Z; SHA-256 9527a682f91c5d7455853f392096ad47f117e35a14fda01b03969a4ef9c3bdc5)
- https://raw.githubusercontent.com/UKPLab/emnlp2026-agentcibench/7b3fad424d0c5a450ac3bc3dc4050c38094c6dc6/eval/metrics.py (retrieved 2026-10-19T06:04:30Z; SHA-256 c51a95f1e0df49d627e986e6be845e3917260f4d1e82991bd88fecb6724dda24)
- https://huggingface.co/datasets/UKPLab/agentcibench/raw/f5523cb986828ee77bc505120a933f114bbcf4f3/README.md (retrieved 2026-10-19T06:04:29Z; SHA-256 3e34a24a57ba5602f25711c464635970a14582ae8e39b146f932f81e65950cde)
