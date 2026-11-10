# WorkArena

围绕 ServiceNow 构建的浏览器端企业工作流程任务。

- 目录页面：https://awesomecua.com/zh/resources/github-servicenow-workarena/
- English：https://awesomecua.com/resources/github-servicenow-workarena/index.md
- 原始来源：https://github.com/ServiceNow/WorkArena
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、工作流
- 证据核查日期：2026-10-16T06:35:57Z
- ID：github:servicenow/workarena

- 完整记录 JSON：https://awesomecua.com/resources/github-servicenow-workarena/record.json

## 结构化规格

- 动作 / 输出：BrowserGym browser actions
- 评测方式：Task-specific checks on ServiceNow workflows; levels and task configurations define different evaluations.
- 侧重：enterprise web workflows, compositional tasks
- 观测：multimodal browser observations
- 任务设置：交互式

### 数量记录

- 33 个任务定义 — WorkArena-L1 atomic tasks（来源报告；来源：https://raw.githubusercontent.com/ServiceNow/WorkArena/HEAD/README.md）
- 19,912 个任务实例 — WorkArena-L1 documented instances（来源报告；来源：https://raw.githubusercontent.com/ServiceNow/WorkArena/HEAD/README.md）
- 682 个任务定义 — WorkArena++ compositional tasks（来源报告；来源：https://raw.githubusercontent.com/ServiceNow/WorkArena/HEAD/README.md）

Definitions and instantiated tasks are different units. ServiceNow instance access is gated. WorkArena-L1 and WorkArena++ should be reported separately.

## 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/ServiceNow/WorkArena/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/ServiceNow/WorkArena/HEAD/README.md（获取于 2026-10-16T06:35:57Z；SHA-256：834a48f0346036a0fc591a36f9eb6f513b44a2777a66afa0917f28fc63f29334）
- https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=800&max_results=100&sortBy=submittedDate&sortOrder=descending（获取于 2026-10-16T06:36:58Z；SHA-256：c87e97eb397da04806d53145cf9c13be739fc657bb54dca9318c8c4ed2a36249）
- https://raw.githubusercontent.com/ServiceNow/WorkArena/HEAD/LICENSE（获取于 2026-10-16T06:41:57Z；SHA-256：b192c58991e8ff585cc574615d40e74185404d4b96c1109d423071ab1367344b）
