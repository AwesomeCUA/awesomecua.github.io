---
title: "TimeWarp · 评测基准 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-sparklabutah-timewarp/
updated: 2026-10-20
type: benchmark
lang: zh-CN
---

# TimeWarp

在自托管 Wiki、News 和 Shop 网站上运行的网页智能体基准，每个网站有六种不同时代风格的 UI 版本，共注册 231 个 BrowserGym 任务，主要由确定性答案验证器评分。

- 目录页面：https://awesomecua.com/zh/resources/github-sparklabutah-timewarp/
- English：https://awesomecua.com/resources/github-sparklabutah-timewarp/index.md
- 原始来源：https://github.com/sparklabutah/timewarp
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、鲁棒性、模仿学习
- 证据核查日期：2026-10-20T07:40:09Z
- ID：github:sparklabutah/timewarp

## 范围记录

Code for the TimeWarp paper, which the README's citation lists as to appear in the NeurIPS 2026 Evaluations and Datasets Track. env/ holds Flask apps for Wiki and News and an adapted copy of WebShop for Shop (with WebShop's MIT license text), plus a homepage app; each loads one of six numbered UI themes styled after different eras (the Wiki app also registers a seventh 'modern' theme), and new themes can be added as folders. Site data is downloaded from the Hugging Face dataset sparklabutah/timewarp-env-data. src/browsergym/timewarp registers timewarp.1 to timewarp.231 with BrowserGym; its task file has 231 tasks: 70 Wiki-only, 64 Shop-only, 47 News-only and 50 spanning two or three sites. Agents answer in free text, which is normalized and checked by string_match, number_match and list_match verifiers (AND-combined per task); 2 tasks use only the LLM judge (GPT-5 by default, or a locally served Gemma model). scripts/ runs AgentLab studies per site and sweeps models and UI versions; collectTeacherTraj/ provides a modified AgentLab loop and agent that save teacher trajectories, llamafactory/ has full and LoRA fine-tuning configs for training on them, and the README points to GPT-5 traces on Hugging Face. scripts/annotation holds the verifier authoring and audit tooling, results/ has page-measurement and visual-information validation data, and proofs/ has Lean 4 proofs of the appendix theory. The README shows an MIT badge without a link, and the tree has no root license file. Not a fork, not archived; no release.

- 完整记录 JSON：https://awesomecua.com/resources/github-sparklabutah-timewarp/record.json

## 结构化规格

- 动作 / 输出：BrowserGym browser actions, free-text answer message to the user
- 评测方式：Each task's free-text answer is normalized (case, unicode, markdown, punctuation, number formatting) and checked by the verifiers listed in its eval_types (string_match, number_match, list_match, combined with AND); tasks still on llm_judge are graded by GPT-5 by default or an open Gemma judge. The same tasks are run against each UI version.
- 侧重：robustness of web agents to UI redesigns across eras, information seeking across Wiki, News and Shop sites
- 观测：BrowserGym observations of the self-hosted sites, as selected by the agent
- 任务设置：交互式

### 数量记录

- 231 个任务 — BrowserGym task file src/browsergym/timewarp/data/test.raw.json（计算得出）（来源：https://raw.githubusercontent.com/sparklabutah/timewarp/4978e690ef2ad33d81a4a0c043da3f80588902a0/src/browsergym/timewarp/data/test.raw.json）
- 70 个任务 — Wiki-only tasks（计算得出）（来源：https://raw.githubusercontent.com/sparklabutah/timewarp/4978e690ef2ad33d81a4a0c043da3f80588902a0/src/browsergym/timewarp/data/test.raw.json）
- 64 个任务 — Shop-only tasks（计算得出）（来源：https://raw.githubusercontent.com/sparklabutah/timewarp/4978e690ef2ad33d81a4a0c043da3f80588902a0/src/browsergym/timewarp/data/test.raw.json）
- 47 个任务 — News-only tasks（计算得出）（来源：https://raw.githubusercontent.com/sparklabutah/timewarp/4978e690ef2ad33d81a4a0c043da3f80588902a0/src/browsergym/timewarp/data/test.raw.json）
- 50 个任务 — tasks spanning two or three sites（计算得出）（来源：https://raw.githubusercontent.com/sparklabutah/timewarp/4978e690ef2ad33d81a4a0c043da3f80588902a0/src/browsergym/timewarp/data/test.raw.json）
- 2 个任务 — tasks scored only by the LLM judge（计算得出）（来源：https://raw.githubusercontent.com/sparklabutah/timewarp/4978e690ef2ad33d81a4a0c043da3f80588902a0/src/browsergym/timewarp/data/test.raw.json）
- 6 个 UI 版本（每个网站） — numbered themes for each of Wiki, News and Shop（来源报告；来源：https://raw.githubusercontent.com/sparklabutah/timewarp/4978e690ef2ad33d81a4a0c043da3f80588902a0/README.md）

Task counts were computed from the task file's sites and eval.eval_types fields at the reviewed commit; test.raw.v2.json is byte-identical, and test.raw.llm_judge.json is a variant that routes all 231 tasks to the LLM judge. Results depend on the UI version served, so a score should state the version.

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 代码审核：The README shows an MIT badge with an empty link, and the complete tree at the reviewed commit has no root license file; the MIT text under env/webshop covers the bundled WebShop copy only.
  来源：https://api.github.com/repos/sparklabutah/timewarp/git/trees/4978e690ef2ad33d81a4a0c043da3f80588902a0?recursive=1

## 一手证据

- https://raw.githubusercontent.com/sparklabutah/timewarp/HEAD/README.md（获取于 2026-10-20T07:40:09Z；SHA-256：96644cd15ad327a891d602d46bbb1bbc3332335b6ec8ef8e89c371f99082e73a）
- https://api.github.com/repos/sparklabutah/timewarp/git/trees/4978e690ef2ad33d81a4a0c043da3f80588902a0?recursive=1（获取于 2026-10-20T04:39:35Z；SHA-256：fd7f883a5f6b4e520abcb8759a66e26fd91c2219dd50e45881b4c1bec18b3518）
- https://raw.githubusercontent.com/sparklabutah/timewarp/4978e690ef2ad33d81a4a0c043da3f80588902a0/README.md（获取于 2026-10-20T04:39:37Z；SHA-256：96644cd15ad327a891d602d46bbb1bbc3332335b6ec8ef8e89c371f99082e73a）
- https://raw.githubusercontent.com/sparklabutah/timewarp/4978e690ef2ad33d81a4a0c043da3f80588902a0/src/browsergym/timewarp/data/test.raw.json（获取于 2026-10-20T04:39:37Z；SHA-256：51fa0eb24ba21d177d8e1fb1f2a53544416bbf84eae343449e60ff9c919592dc）
- https://raw.githubusercontent.com/sparklabutah/timewarp/4978e690ef2ad33d81a4a0c043da3f80588902a0/src/browsergym/timewarp/task.py（获取于 2026-10-20T04:39:38Z；SHA-256：bf65e287b4929dfab48ceffb4f1e523b8be3bc92970fe3d594200f0149ec7b92）
- https://raw.githubusercontent.com/sparklabutah/timewarp/4978e690ef2ad33d81a4a0c043da3f80588902a0/src/browsergym/timewarp/config.py（获取于 2026-10-20T04:39:38Z；SHA-256：8d9031adb0b9f5ffdc0778542703b7476861ba20ee2faf0ffe9beb5dc318ecce）
- https://raw.githubusercontent.com/sparklabutah/timewarp/4978e690ef2ad33d81a4a0c043da3f80588902a0/env/wiki/wiki_app.py（获取于 2026-10-20T04:39:39Z；SHA-256：c61fdde172f86f1414a7d45fe6af0db3226baa55fd354b8bf7679f86619ba513）
- https://raw.githubusercontent.com/sparklabutah/timewarp/4978e690ef2ad33d81a4a0c043da3f80588902a0/scripts/singleBenchmark/benchmarkGeneralWiki.py（获取于 2026-10-20T04:39:40Z；SHA-256：2bb06ac3980085b81fd3d9f2f4efe7421792e9414ad34e2dc30d21ae269453ec）
