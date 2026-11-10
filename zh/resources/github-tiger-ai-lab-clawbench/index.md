---
title: "ClawBench · 评测基准 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-tiger-ai-lab-clawbench/
updated: 2026-10-18
type: benchmark
lang: zh-CN
---

# ClawBench

真实网站上的日常任务基准，让浏览器智能体在容器化 Chromium 中运行，拦截每次最终提交请求并通过 URL 匹配和 LLM 裁判评分，同时记录 5 层运行证据。

- 目录页面：https://awesomecua.com/zh/resources/github-tiger-ai-lab-clawbench/
- English：https://awesomecua.com/resources/github-tiger-ai-lab-clawbench/index.md
- 原始来源：https://github.com/TIGER-AI-Lab/ClawBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、工作流、可观测性
- 证据核查日期：2026-10-18T11:53:46Z
- ID：github:tiger-ai-lab/clawbench

## 范围记录

Renamed from reacher-z/ClawBench; both API names return repository 1206519531 (TIGER-AI-Lab/ClawBench), which remains active as the same repository. Counts and scoring rules were read at commit 07eb50a3. The tree also holds v1-lite, claw-eval and environmental-observation task folders; this record’s counts cover the stated task set. Task definitions and execution traces are also published as Hugging Face datasets (NAIL-Group/ClawBench, NAIL-Group/ClawBenchV1Trace, TIGER-Lab/ClawBenchV2Trace); their data licenses remain unverified in this record. Apache-2.0 is recorded for repository code only. Nothing was installed or run.

- 完整记录 JSON：https://awesomecua.com/resources/github-tiger-ai-lab-clawbench/record.json

## 结构化规格

- 动作 / 输出：harness-defined browser actions such as navigating, clicking and filling forms
- 评测方式：Two stages per task run: a request interceptor inside the container blocks the final HTTP request and marks the run intercepted when its URL regex and method match the task's eval_schema; an LLM judge (default deepseek-v4-pro at temperature 0) then checks the intercepted body against the instruction. A pass needs both. The original V1 paper rubric instead compares agent and human-reference trajectories.
- 侧重：everyday online tasks on production websites, multi-step, write-heavy form workflows
- 观测：未记录
- 任务设置：交互式

### 数量记录

- 152 个任务 — V1 corpus shipped in test-cases/v1 (task.json files)（计算得出）（来源：https://api.github.com/repos/TIGER-AI-Lab/ClawBench/git/trees/d12a2dda577f2c943a74d833e8253860eda81eaf?recursive=1）
- 129 个任务 — V2 corpus shipped in test-cases/v2 (task.json files)（计算得出）（来源：https://api.github.com/repos/TIGER-AI-Lab/ClawBench/git/trees/d12a2dda577f2c943a74d833e8253860eda81eaf?recursive=1）
- 153 个任务 — V1 corpus as published in the paper and used as the scoring denominator（来源报告；来源：https://raw.githubusercontent.com/TIGER-AI-Lab/ClawBench/07eb50a3d4c5a799f5ad4eebd57c67c10417787f/eval/scoring.md）
- 130 个任务 — V2 corpus as published and used as the scoring denominator（来源报告；来源：https://raw.githubusercontent.com/TIGER-AI-Lab/ClawBench/07eb50a3d4c5a799f5ad4eebd57c67c10417787f/eval/scoring.md）
- 143 个在线网站 — shipped V1 corpus（来源报告；来源：https://raw.githubusercontent.com/TIGER-AI-Lab/ClawBench/HEAD/README.md）
- 63 个在线网站 — shipped V2 corpus（来源报告；来源：https://raw.githubusercontent.com/TIGER-AI-Lab/ClawBench/HEAD/README.md）

The README says two ASPCA tasks were removed after publication, so the shipped corpora hold 152 and 129 tasks while scoring.md still divides by 153 and 130. Live sites change over time, and the README asks for comparisons under the same corpus revision, harness and rubric. Agents run through selectable harnesses (for example Hermes and OpenClaw), so observations and actions depend on the harness.

## 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/TIGER-AI-Lab/ClawBench/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/TIGER-AI-Lab/ClawBench/HEAD/README.md（获取于 2026-10-18T11:53:46Z；SHA-256：61bad2a8e6ab56df159237d75f1081e1246b294183b31ef7abe47193ac26b541）
- https://api.github.com/repos/TIGER-AI-Lab/ClawBench/git/trees/d12a2dda577f2c943a74d833e8253860eda81eaf?recursive=1（获取于 2026-10-18T11:54:35Z；SHA-256：144a65c3dd92c7437e4ce065bed7b16e4c33496ea395d2bb1ecbd74132da29ce）
- https://raw.githubusercontent.com/TIGER-AI-Lab/ClawBench/07eb50a3d4c5a799f5ad4eebd57c67c10417787f/eval/scoring.md（获取于 2026-10-18T11:54:36Z；SHA-256：8d8ade83a355e10800591435de5aa111e8d8297374b025ff88804358ee80b71a）
- https://raw.githubusercontent.com/TIGER-AI-Lab/ClawBench/HEAD/LICENSE（获取于 2026-10-18T11:55:00Z；SHA-256：cb861e529412e9eec01498bdf4b74c5ee4f29139737a1193e39b24004019e606）
- https://api.github.com/repos/reacher-z/ClawBench（获取于 2026-10-18T11:54:36Z；SHA-256：4b80afa11f3998830090c9c186afc753f261cc05abbcd4d906400f757f41e4da）
- https://api.github.com/repos/TIGER-AI-Lab/ClawBench（获取于 2026-10-18T11:54:37Z；SHA-256：4b80afa11f3998830090c9c186afc753f261cc05abbcd4d906400f757f41e4da）
