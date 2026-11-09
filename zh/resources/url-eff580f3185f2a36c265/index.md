# Yutori

Yutori 网页智能体平台，提供 Navigator 计算机使用模型 API（浏览器用 n1.5、完整桌面用 n2）、浏览、研究和 Scout 网页监测任务 API，以及 Delegate 个人智能体。

- 目录页面：https://awesomecua.com/zh/resources/url-eff580f3185f2a36c265/
- English：https://awesomecua.com/resources/url-eff580f3185f2a36c265/index.md
- 原始来源：https://yutori.com
- 类型：产品
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面、macOS
- 主题：网页导航、自动化、工具集成
- 证据核查日期：2026-10-20T05:23:11Z
- ID：url:eff580f3185f2a36c265

## 范围记录

Yutori was founded by Abhishek Das, Devi Parikh and Dhruv Batra and announced its seed round in March 2025. Navigator models are called through an OpenAI Chat Completions-compatible endpoint: the caller sends a screenshot and a task, the model returns actions as tool calls, and the caller executes them and sends a fresh screenshot in an agent loop. n1.5 drives browsers in a normalized 1000x1000 coordinate space with a core set of 18 coordinate-based tools or an expanded set that adds element extraction, find, set_element_value and JavaScript execution, and can return JSON matching a caller schema. n2 operates a full desktop through batched GUI actions plus bash and file tools; the SDK ships local Docker and Daytona examples, and Yutori MCP runs it on the visible macOS desktop, sending screen contents to Yutori. A Python SDK wraps the APIs, a CLI runs research, browsing and Scout tasks, and an MCP server with workflow skills exposes these tasks and computer use to coding agents. Scouts monitor the web on a schedule, and Delegate is a consumer agent meant to complete handed-off tasks independently. Yutori also publishes a computer-use leaderboards page compiling reported results for six benchmarks. The publisher describes its Online-Mind2Web figure as independently verified and its Navi-Bench v2 and Westworld figures as its own evaluations.

- 完整记录 JSON：https://awesomecua.com/resources/url-eff580f3185f2a36c265/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://yutori.com/llms.txt（获取于 2026-10-20T05:23:11Z；SHA-256：822e35d2ec69df8b89cdda8d03ff48fb0b345365b92534e6af00a7ae643cce3a）
- https://yutori.com/api/llms.txt（获取于 2026-10-20T05:22:56Z；SHA-256：5b14d5fedf3be3ea19e70ac6425b7fd8bb80aeaab17b379c636ef66a7bf3b423）
- https://yutori.com/leaderboards.md（获取于 2026-10-20T05:22:56Z；SHA-256：63614bc1a81a0090992b8ac6ed1ee9471ca22239e699f14e3480657a8c1f24db）
