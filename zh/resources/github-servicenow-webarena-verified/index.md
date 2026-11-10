---
title: "WebArena-Verified · 评测基准 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-servicenow-webarena-verified/
updated: 2026-10-18
type: benchmark
lang: zh-CN
---

# WebArena-Verified

经审校重新发布 WebArena 的 812 项网页任务，修正参考答案，并以确定性评估器根据结构化智能体回答和捕获的网络轨迹评分，另含 258 项高难度任务子集。

- 目录页面：https://awesomecua.com/zh/resources/github-servicenow-webarena-verified/
- English：https://awesomecua.com/resources/github-servicenow-webarena-verified/index.md
- 原始来源：https://github.com/ServiceNow/webarena-verified
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航
- 证据核查日期：2026-10-18T11:06:05Z
- ID：github:servicenow/webarena-verified

## 范围记录

The README describes this as the verified release of WebArena and keeps the original task file (assets/dataset/test.raw.json) for reference; scores on it are not interchangeable with original WebArena results. The cited paper is a NeurIPS 2025 Scaling Environments for Agents workshop paper on OpenReview (94tlGxmqkN) with no arXiv identifier, so no paper record is linked. The task file is also published as the Hugging Face dataset AmineHA/WebArena-Verified, which was not reviewed here; Apache-2.0 is the repository code license and is not applied to the task data or to the self-hosted site images. Docker images and a PyPI package are documented.

- 完整记录 JSON：https://awesomecua.com/resources/github-servicenow-webarena-verified/record.json

## 结构化规格

- 动作 / 输出：browser interactions on self-hosted WebArena sites
- 评测方式：Deterministic evaluators compare a structured agent response (task type, status, retrieved data) with the reference; 488 of the 812 tasks also check network events from a captured HAR trace, with 663 network-event checks in all. LLM-as-a-judge and substring matching were removed, and runs can be scored offline from saved responses and traces.
- 侧重：web task completion, information retrieval from self-hosted websites
- 观测：未记录
- 任务设置：交互式

### 数量记录

- 812 个任务定义 — assets/dataset/webarena-verified.json（计算得出）（来源：https://raw.githubusercontent.com/ServiceNow/webarena-verified/HEAD/assets/dataset/webarena-verified.json）
- 258 个任务 ID — WebArena-Verified Hard subset (assets/dataset/subsets/webarena-verified-hard.json)（计算得出）（来源：https://raw.githubusercontent.com/ServiceNow/webarena-verified/HEAD/assets/dataset/subsets/webarena-verified-hard.json）

Counts are unique task_id values in the inspected manifests. Tasks span the shopping, shopping_admin, gitlab, reddit, map and wikipedia sites, including cross-site tasks; each task carries a revision number. The observation format and agent harness are not prescribed. Record the task-file revision, subset and environment images with a score.

## 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/ServiceNow/webarena-verified/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/ServiceNow/webarena-verified/HEAD/README.md（获取于 2026-10-18T11:06:05Z；SHA-256：8f343078ba55263182f86ec54497958a1174d90cb8ce7573cedcc29f5c8e6b50）
- https://api.github.com/repos/ServiceNow/webarena-verified（获取于 2026-10-18T11:06:07Z；SHA-256：564d8926e929185697d0471e5554b84743cf1eae4776045ab46f72b2cab49c31）
- https://api.github.com/repos/ServiceNow/webarena-verified/git/trees/main?recursive=1（获取于 2026-10-18T11:06:08Z；SHA-256：7fefd38b6a2cacdc12e0d659e37bed409a3784da269b0c18558e74ab71ae1e06）
- https://raw.githubusercontent.com/ServiceNow/webarena-verified/HEAD/assets/dataset/webarena-verified.json（获取于 2026-10-18T11:06:05Z；SHA-256：d65275660814663375028e9017e1f929e3c38321041b125795e2713b52243d30）
- https://raw.githubusercontent.com/ServiceNow/webarena-verified/HEAD/assets/dataset/subsets/webarena-verified-hard.json（获取于 2026-10-18T11:06:06Z；SHA-256：3b0a4df231bb5a0c642215e521c3fa97701a384f52a734dc2db8f617ad0591a7）
- https://raw.githubusercontent.com/ServiceNow/webarena-verified/HEAD/LICENSE（获取于 2026-10-18T11:06:06Z；SHA-256：c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4）
- https://raw.githubusercontent.com/ServiceNow/webarena-verified/HEAD/LICENSE（获取于 2026-10-18T11:06:06Z；SHA-256：c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4）
