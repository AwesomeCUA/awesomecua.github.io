# MT-Mind2Web

基于 Mind2Web 交互构建的多轮网页导航对话，包含对话轮次、HTML 快照、候选元素及点击、输入、选择操作序列。

- 目录页面：https://awesomecua.com/zh/resources/url-bdfb50330deb97893ce4/
- English：https://awesomecua.com/resources/url-bdfb50330deb97893ce4/index.md
- 原始来源：https://huggingface.co/datasets/magicgh/MT-Mind2Web
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、模仿学习、记忆
- 证据核查日期：2026-10-17T12:34:10Z
- ID：url:bdfb50330deb97893ce4

## 范围记录

The ungated Hub manifest contains train, test-task, test-website and test-subdomain JSON shards plus a candidate-ranking pickle file. Counts distinguish conversation sessions from dialogue turns; neither is a screenshot or action-step count. No pickle or sample data was loaded. The card declares CC-BY-4.0 and identifies the original Mind2Web interactions as its source.

- 完整记录 JSON：https://awesomecua.com/resources/url-bdfb50330deb97893ce4/record.json

## 结构化规格

- 格式：JSON, auxiliary PKL
- 模态：dialogue text, HTML, element candidates, actions
- 数据划分：train, test_task, test_website, test_subdomain
- 监督信号：multi-turn web instruction following, element/action prediction

### 数量记录

- 600 段对话 — train（来源报告；来源：https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md）
- 34 段对话 — test-task（来源报告；来源：https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md）
- 42 段对话 — test-website（来源报告；来源：https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md）
- 44 段对话 — test-subdomain（来源报告；来源：https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md）
- 2,896 轮对话 — train（来源报告；来源：https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md）
- 191 轮对话 — test-task（来源报告；来源：https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md）
- 218 轮对话 — test-website（来源报告；来源：https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md）
- 216 轮对话 — test-subdomain（来源报告；来源：https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md）

Conversation, dialogue-turn and action-step units differ. The released file manifest is inspected.

## 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：Publisher dataset-card declaration for the multi-turn annotation release.
  来源：https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md

## 一手证据

- https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md（获取于 2026-10-17T12:34:10Z；SHA-256：8685e0a26a06b3339b5c078632a7b0ade1ead40e6b586ef1ff3676414699a4bc）
- https://huggingface.co/api/datasets/magicgh/MT-Mind2Web（获取于 2026-10-17T12:34:10Z；SHA-256：4455e6daf1151694c03b2a1ebd4a7af40b5b079b0568706a1783a0222383bb1d）
- https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=800&max_results=100&sortBy=submittedDate&sortOrder=descending（获取于 2026-10-16T06:36:58Z；SHA-256：c87e97eb397da04806d53145cf9c13be739fc657bb54dca9318c8c4ed2a36249）
