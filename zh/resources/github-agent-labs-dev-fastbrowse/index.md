---
title: "fastbrowse · 智能体 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-agent-labs-dev-fastbrowse/
updated: 2026-10-18
type: agent
lang: zh-CN
---

# fastbrowse

浏览器智能体由 TypeSafe Jev 通过 CDP 从页面索引控件中选择操作，LLM 负责规划和阅读，代码控制输入、机密信息及不可逆步骤；回答引用页面原文。

- 目录页面：https://awesomecua.com/zh/resources/github-agent-labs-dev-fastbrowse/
- English：https://awesomecua.com/resources/github-agent-labs-dev-fastbrowse/index.md
- 原始来源：https://github.com/agent-labs-dev/fastbrowse
- 类型：智能体
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、效率、安全与防护
- 证据核查日期：2026-10-18T15:54:53Z
- ID：github:agent-labs-dev/fastbrowse

## 范围记录

Python package fastbrowse 0.5.23 by Agent Labs (Python 3.13+), with a CLI, an MCP server (fastbrowse-mcp) and a JavaScript SDK. The browser layer speaks CDP through cdp-use; snapshot.js, ported from jev-ultrafast, indexes each frame's controls, viewport text and a freshness fingerprint, including open shadow roots. Per the design document, Jev chooses the operation and target among indexed controls (with relevance pruning on dense pages), an LLM proposes start addresses, plans checkable requirements, reads page text, writes non-secret field text and composes the answer, and code enforces freshness and hit-tests before input, no automatic retry of mutations, authorization for submit, pay, delete or send, secret redaction and budgets; a run counts as complete only when every requirement is evidenced. Browsers are Browser Use Cloud by default, local Chrome, or an existing CDP endpoint including Electron windows. Jev is reached through TypeSafe, OpenRouter or the Vercel AI Gateway. Benchmark comparisons in the README are the publisher's. Root LICENSE is MIT, with a NOTICE file.

- 完整记录 JSON：https://awesomecua.com/resources/github-agent-labs-dev-fastbrowse/record.json

## 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/agent-labs-dev/fastbrowse/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/agent-labs-dev/fastbrowse/HEAD/README.md（获取于 2026-10-18T15:54:53Z；SHA-256：b6bb5c906892f8908080daaa288fb288d720cfa5fc9c59c67d0e556328233a40）
- https://raw.githubusercontent.com/agent-labs-dev/fastbrowse/d35f75f43e4e2ed42edb4edec72843435af73a0b/docs/design.md（获取于 2026-10-18T15:54:24Z；SHA-256：c567f1b6383438c4e237d2810938a1a51379fd2209e2490d1f563dc83f07d260）
- https://raw.githubusercontent.com/agent-labs-dev/fastbrowse/d35f75f43e4e2ed42edb4edec72843435af73a0b/src/fastbrowse/browser/snapshot.js（获取于 2026-10-18T15:54:24Z；SHA-256：51064fe8dc008253ed7b3da4347c682f960e47773446c4529f0bbd7260172112）
- https://raw.githubusercontent.com/agent-labs-dev/fastbrowse/d35f75f43e4e2ed42edb4edec72843435af73a0b/src/fastbrowse/browser/session.py（获取于 2026-10-18T15:54:24Z；SHA-256：473d342ad4c934085f80bd0c321a8d0389c0238d8c745d426153b69f1f5744ef）
- https://raw.githubusercontent.com/agent-labs-dev/fastbrowse/d35f75f43e4e2ed42edb4edec72843435af73a0b/pyproject.toml（获取于 2026-10-18T15:54:24Z；SHA-256：cb459a7e2d93520feab457cec9604f0c4e045a06c59c6001c13fdb568a940f93）
- https://raw.githubusercontent.com/agent-labs-dev/fastbrowse/HEAD/LICENSE（获取于 2026-10-18T15:54:54Z；SHA-256：81c51acc6fe3e5ad9b94a3e67caa91284f7c28ea97da43db598f843ad41988d5）
