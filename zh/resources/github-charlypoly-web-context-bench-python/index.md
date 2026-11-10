---
title: "Web Context Bench (Python) · 评测基准 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-charlypoly-web-context-bench-python/
updated: 2026-10-20
type: benchmark
lang: zh-CN
---

# Web Context Bench (Python)

基于本地页面的基准，比较 6 种浏览器表示在 token 用量、事实读取和目标元素选择上的表现，并采用确定性答案评分。

- 目录页面：https://awesomecua.com/zh/resources/github-charlypoly-web-context-bench-python/
- English：https://awesomecua.com/resources/github-charlypoly-web-context-bench-python/index.md
- 原始来源：https://github.com/charlypoly/web-context-bench-python
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、GUI 定位、效率、界面理解
- 证据核查日期：2026-10-20T11:51:30.874397Z
- ID：github:charlypoly/web-context-bench-python

## 范围记录

This is a single-snapshot representation evaluation on local fixtures and captured pages. Its shared-prompt, one-model setup differs from complete Browser Use or Stagehand agents. The methodology notes unresolved redistribution licensing for third-party practice-site snapshots; MIT is recorded for repository code only.

- 完整记录 JSON：https://awesomecua.com/resources/github-charlypoly-web-context-bench-python/record.json

## 结构化规格

- 动作 / 输出：READ text answer, ACT selector, text/label, accessible role/name, DOM index, Stagehand reference or screenshot point, according to the representation
- 评测方式：READ uses normalized exact match against an answer or allowed alias. ACT resolves predicted identifiers to ground-truth elements, or checks screenshot points inside the target box. Representation-token accounting subtracts fixed-prompt tokens; screenshots use billed input usage minus the fixed prompt. These are answer/target correctness and token metrics.
- 侧重：Browser-representation token use, Factual READ accuracy, ACT target-element selection
- 观测：Top-document HTML, Markdown converted from HTML, Playwright accessibility snapshot, Browser Use indexed DOM, Stagehand hybrid snapshot, Viewport screenshot
- 任务设置：离线

### 数量记录

未记录数量。

Fixed local-page observations; the reported run uses claude-sonnet-5 and a shared prompt, without scrolling or an agent loop. Browser Use disables its viewport cutoff and sends untruncated text; Stagehand uses a separate matched browser load. Short-string representability labels are approximate. The offline evaluation uses model API calls. Third-party snapshot redistribution remains unresolved.

## 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/charlypoly/web-context-bench-python/58d604bfaaac60ad42f02013f53f9fb301c1dcda/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 代码审核：The inspected root LICENSE contains complete MIT terms for repository software. Redistribution permission for captured third-party practice-site pages is unresolved in the methodology.
  来源：https://raw.githubusercontent.com/charlypoly/web-context-bench-python/58d604bfaaac60ad42f02013f53f9fb301c1dcda/LICENSE

## 一手证据

- https://raw.githubusercontent.com/charlypoly/web-context-bench-python/58d604bfaaac60ad42f02013f53f9fb301c1dcda/README.md（获取于 2026-10-20T11:51:30.874397Z；SHA-256：14775f6e3daba69d4684380fd33bf717bdc3093b65be796eb863bbd27d0c0bab）
- https://api.github.com/search/repositories?q=topic%3Aweb-agents+is%3Apublic+fork%3Afalse+created%3A2008-01-01..2026-10-20&per_page=100&page=1&sort=updated&order=asc（获取于 2026-10-20T11:05:35.063004+00:00；SHA-256：3e22e1cbfa47bcf98f6f70a5f6f162a31a509a9f2091a84679bb5231977e29d9）
- https://github.com/charlypoly/web-context-bench-python（获取于 2026-10-20T11:50:54.545491Z；SHA-256：fd30e94e78e7167a49579922259fde1c7d7f8259e9f00afba15faf3a71966a94）
- https://raw.githubusercontent.com/charlypoly/web-context-bench-python/58d604bfaaac60ad42f02013f53f9fb301c1dcda/METHODOLOGY.md（获取于 2026-10-20T11:52:30.131541Z；SHA-256：1c3c0cbf9f9d9f7cd9e7a2f027ecb217fd5c16fa157916281a15bb7f403f6f1c）
- https://raw.githubusercontent.com/charlypoly/web-context-bench-python/58d604bfaaac60ad42f02013f53f9fb301c1dcda/src/wpbench/scoring.py（获取于 2026-10-20T11:53:28.567861Z；SHA-256：8cada5d71b5a61e7aff2e1ac2b951c266eb2db7c082c06c5a13aa127d42b3fc5）
- https://raw.githubusercontent.com/charlypoly/web-context-bench-python/58d604bfaaac60ad42f02013f53f9fb301c1dcda/LICENSE（获取于 2026-10-20T11:51:41.499735Z；SHA-256：9b64ef672f5091b6074d02502f6d3c161d94308a3d9d142d7437dcddf611bbc4）
