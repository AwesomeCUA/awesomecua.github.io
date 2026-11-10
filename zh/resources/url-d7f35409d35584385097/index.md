# AgentCIBench

计算机使用智能体的上下文完整性基准：117 个合成多应用工作区场景，将信息不完整的请求与必须共享和禁止共享的信息清单配对，另含 50 个实时 UI 场景的子集。

- 目录页面：https://awesomecua.com/zh/resources/url-d7f35409d35584385097/
- English：https://awesomecua.com/resources/url-d7f35409d35584385097/index.md
- 原始来源：https://huggingface.co/datasets/UKPLab/agentcibench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、安全与防护、跨应用
- 证据核查日期：2026-10-19T06:04:29Z
- ID：url:d7f35409d35584385097

## 范围记录

Each scenario is a JSON snapshot of app states in the OpenApps workspace (messenger, todo, calendar, code editor, maps and shopping apps) with a task prompt and a disclosure policy. The card's test split serves the state-grounded reasoning track; test_e2e is a 50-scenario subset of it (all IDs overlap) for runs in the rendered UI, which the code README describes as a local multi-app web environment driven through Playwright; seeds holds 36 disjoint hand-written scenarios. The card says source is seed or mcts, but every released row reads seed or legacy_pilot_seed. The code repository linked as ukplab/arxiv2026-agentcibench now resolves to UKPLab/emnlp2026-agentcibench (GitHub API), and the card's second code link, agentcibench/agentcibench, returns 404. The 67.9% average leakage over 15 agents is a publisher figure. CC BY 4.0 is the card's data declaration; the code is a separate Apache-2.0 release.

- 完整记录 JSON：https://awesomecua.com/resources/url-d7f35409d35584385097/record.json

## 结构化规格

- 动作 / 输出：GUI actions in the rendered workspace (live-UI subset), content shared or sent through the workspace apps
- 评测方式：The code release scores each run for utility (required items shared) and contextual-integrity violation (prohibited items leaked), combining deterministic text matching against the scenario's must-share and must-not-share lists with an LLM judge at temperature 0; summaries report utility rate, leak rate and average reward.
- 侧重：contextual-integrity compliance of computer-use agents, information disclosure across personal apps
- 观测：decoded app states, rendered app UI (live-UI subset), natural-language task prompts
- 任务设置：混合

### 数量记录

- 117 个场景 — test split（来源报告；来源：https://huggingface.co/datasets/UKPLab/agentcibench/raw/f5523cb986828ee77bc505120a933f114bbcf4f3/README.md）
- 50 个场景 — test_e2e split (subset of test used for live-UI evaluation)（来源报告；来源：https://huggingface.co/datasets/UKPLab/agentcibench/raw/f5523cb986828ee77bc505120a933f114bbcf4f3/README.md）
- 36 个场景 — seeds split (hand-written seed scenarios)（来源报告；来源：https://huggingface.co/datasets/UKPLab/agentcibench/raw/f5523cb986828ee77bc505120a933f114bbcf4f3/README.md）
- 75 个场景 — test split, failure mode task_ambiguity_overshare（来源报告；来源：https://huggingface.co/datasets/UKPLab/agentcibench/raw/f5523cb986828ee77bc505120a933f114bbcf4f3/README.md）
- 24 个场景 — test split, failure mode recipient_misalignment（来源报告；来源：https://huggingface.co/datasets/UKPLab/agentcibench/raw/f5523cb986828ee77bc505120a933f114bbcf4f3/README.md）
- 18 个场景 — test split, failure mode visual_co_location（来源报告；来源：https://huggingface.co/datasets/UKPLab/agentcibench/raw/f5523cb986828ee77bc505120a933f114bbcf4f3/README.md）

Setting is mixed: the reasoning track scores responses over decoded app states, while the test_e2e subset runs in the rendered web UI. A script recount of the released JSONL files matches every reported split and failure-mode count. The 50 test_e2e IDs all appear in test; seeds share separate IDs.

## 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/UKPLab/agentcibench/raw/f5523cb986828ee77bc505120a933f114bbcf4f3/README.md
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/UKPLab/agentcibench/raw/f5523cb986828ee77bc505120a933f114bbcf4f3/README.md（获取于 2026-10-19T06:04:29Z；SHA-256：3e34a24a57ba5602f25711c464635970a14582ae8e39b146f932f81e65950cde）
- https://huggingface.co/api/datasets/UKPLab/agentcibench/revision/f5523cb986828ee77bc505120a933f114bbcf4f3（获取于 2026-10-19T06:04:29Z；SHA-256：2ae68d96a7bff7a2eb78f323c3e87b09768812c06f2a2e0aadbaee2d627f5f7d）
- https://huggingface.co/datasets/UKPLab/agentcibench/resolve/f5523cb986828ee77bc505120a933f114bbcf4f3/data/test-00000-of-00001.jsonl（获取于 2026-10-19T06:04:29Z；SHA-256：709d43e4e09d2f3558d9290b8bdf4c15e95e4fefc29a56be6d12b52e646c99d7）
- https://huggingface.co/datasets/UKPLab/agentcibench/resolve/f5523cb986828ee77bc505120a933f114bbcf4f3/data/test_e2e-00000-of-00001.jsonl（获取于 2026-10-19T06:04:30Z；SHA-256：9aced6b0d1e1368c28b3b110ba85e79a935b501a03a3c1b48fb97996dd4c05b2）
- https://huggingface.co/datasets/UKPLab/agentcibench/resolve/f5523cb986828ee77bc505120a933f114bbcf4f3/data/seeds-00000-of-00001.jsonl（获取于 2026-10-19T06:04:30Z；SHA-256：1b1a458c15ac64d63b7f6c20fab23740115a2b09d151ceeeb6f2c353c97f5418）
- https://raw.githubusercontent.com/UKPLab/emnlp2026-agentcibench/7b3fad424d0c5a450ac3bc3dc4050c38094c6dc6/README.md（获取于 2026-10-19T06:04:30Z；SHA-256：f836c578d6fea20f7b38092071a9646d2db19b422fe6117d57e6de57ab5e1324）
- https://raw.githubusercontent.com/UKPLab/emnlp2026-agentcibench/7b3fad424d0c5a450ac3bc3dc4050c38094c6dc6/mcts/reward_judge.py（获取于 2026-10-19T06:04:30Z；SHA-256：9527a682f91c5d7455853f392096ad47f117e35a14fda01b03969a4ef9c3bdc5）
- https://raw.githubusercontent.com/UKPLab/emnlp2026-agentcibench/7b3fad424d0c5a450ac3bc3dc4050c38094c6dc6/eval/metrics.py（获取于 2026-10-19T06:04:30Z；SHA-256：c51a95f1e0df49d627e986e6be845e3917260f4d1e82991bd88fecb6724dda24）
- https://huggingface.co/datasets/UKPLab/agentcibench/raw/f5523cb986828ee77bc505120a933f114bbcf4f3/README.md（获取于 2026-10-19T06:04:29Z；SHA-256：3e34a24a57ba5602f25711c464635970a14582ae8e39b146f932f81e65950cde）
