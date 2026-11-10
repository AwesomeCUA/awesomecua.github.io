# WebTestBench

端到端网页测试基准，智能体根据开发说明制定测试清单，与已部署的应用交互，并报告功能或约束方面的缺陷。

- 目录页面：https://awesomecua.com/zh/resources/github-friedrichor-webtestbench/
- English：https://awesomecua.com/resources/github-friedrichor-webtestbench/index.md
- 原始来源：https://github.com/friedrichor/WebTestBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、工具集成
- 证据核查日期：2026-10-17T11:18:18Z
- ID：github:friedrichor/webtestbench

## 范围记录

Public evaluation/deployment scripts accompany an ungated Hub release with JSON/JSONL metadata and 100 application ZIP files. The ZIP count is an artifact inventory. The documented baseline uses Claude Agent SDK and a pinned Playwright MCP version with external model credentials. Code and data Apache-2.0 declarations are retained separately.

- 完整记录 JSON：https://awesomecua.com/resources/github-friedrichor-webtestbench/record.json

## 结构化规格

- 动作 / 输出：browser interaction, test checklist generation, defect reports
- 评测方式：The supplied WebTester pipeline separates checklist generation from interactive defect detection and provides a scoring workflow.
- 侧重：web functionality testing, latent permission and business constraints
- 观测：web application interface, development instruction
- 任务设置：interactive

### 数量记录

- 7 application categories — publisher benchmark overview（来源报告；来源：https://raw.githubusercontent.com/friedrichor/WebTestBench/HEAD/README.md）
- 100 web-application archives — Hub file manifest（计算得出；来源：https://huggingface.co/api/datasets/friedrichor/WebTestBench）

The 100 archive files form an artifact inventory. Backend/tool versions and deployment settings affect reproducibility.

## 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/friedrichor/WebTestBench/HEAD/LICENSE
- 数据：apache-2.0 — https://huggingface.co/datasets/friedrichor/WebTestBench/raw/main/README.md
- 文档：未记录
- 权重：未记录

- 代码审核：Repository source LICENSE.
  来源：https://raw.githubusercontent.com/friedrichor/WebTestBench/HEAD/LICENSE

- 数据审核：Publisher Hub-card license declaration for the released benchmark dataset.
  来源：https://huggingface.co/datasets/friedrichor/WebTestBench/raw/main/README.md

## 一手证据

- https://raw.githubusercontent.com/friedrichor/WebTestBench/HEAD/README.md（获取于 2026-10-17T11:18:18Z；SHA-256：b41472026cd7d4f81a01d58bf39193dc1fabc7875c61e370090a20cc77500cdd）
- https://api.github.com/repos/friedrichor/WebTestBench（获取于 2026-10-17T11:18:18Z；SHA-256：7203ecc2aae5f1697eeeb804ca8f21d47b9f22a8b8fa43a4064c4e1c49f5e72c）
- https://api.github.com/repos/friedrichor/WebTestBench/git/trees/main?recursive=1（获取于 2026-10-17T11:22:55Z；SHA-256：bd1f09149b00d59a0078d414216bd2fb78e09ce7212d15bbda84ddec7052c8af）
- https://huggingface.co/api/datasets/friedrichor/WebTestBench（获取于 2026-10-17T11:23:08Z；SHA-256：db1e97f40107038ae03835dc20f17b13b37e74b5c8587f8c39b441271618f017）
- https://huggingface.co/datasets/friedrichor/WebTestBench/raw/main/README.md（获取于 2026-10-17T11:23:08Z；SHA-256：6f2f94a25ed66a14779f6b4e6686044d0510eb32a0187645cc473978d93f7c5b）
- https://raw.githubusercontent.com/friedrichor/WebTestBench/HEAD/LICENSE（获取于 2026-10-17T11:22:55Z；SHA-256：c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4）
