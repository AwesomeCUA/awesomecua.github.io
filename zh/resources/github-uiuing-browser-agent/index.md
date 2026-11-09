# Browser Agent (uiuing)

Chrome 侧边栏智能体的页面引擎读取整页语义 DOM 快照，通过元素指纹重新定位目标，派发 DOM 事件，并在报告成功前检查操作后的条件。

- 目录页面：https://awesomecua.com/zh/resources/github-uiuing-browser-agent/
- English：https://awesomecua.com/resources/github-uiuing-browser-agent/index.md
- 原始来源：https://github.com/uiuing/browser-agent
- 类型：智能体
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、状态追踪、工作流
- 证据核查日期：2026-10-18T15:56:55Z
- ID：github:uiuing/browser-agent

## 范围记录

Chrome Manifest V3 extension by uiuing, first released as v0.0.1 (Chrome zip in GitHub releases). The model acts on pages only through the page_act tool, which hands a goal to an engine that builds a semantic snapshot of DOM nodes with roles, accessible names, values, occlusion, open shadow roots and same-origin iframes (packages/extension/src/engine/page/perception.ts), resolves targets by fingerprint against a fresh snapshot and fires click, input, change and key events in the page (engine/page/execute.ts). The page_screenshot tool shows a capture to the user; its description limits the model to other page information rather than the pixels (tools/page.ts). A chrome.debugger channel is used for file uploads and falls back to DOM synthesis. Tools carry read, act or dangerous risk tiers with site allow/block lists and confirmation; verified runs can be saved as skills and replayed over batch rows. Model ports cover OpenAI-compatible, OpenAI Responses and Anthropic APIs. The docs/benchmark.md comparison is publisher-run on the project's own fixtures against its own replica of a viewport-only baseline.

- 完整记录 JSON：https://awesomecua.com/resources/github-uiuing-browser-agent/record.json

## 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/uiuing/browser-agent/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/uiuing/browser-agent/HEAD/README.md（获取于 2026-10-18T15:56:55Z；SHA-256：2e46eff7ae7f8eb2e67eb1c6977815bb695b7f87437069bfdd59f3db4b062f9a）
- https://api.github.com/repos/uiuing/browser-agent（获取于 2026-10-18T15:56:02Z；SHA-256：2a90a9a2a2874d612b7f6699ca2cabdda0748a7d9e272427b5235fc788aa22e0）
- https://api.github.com/repos/uiuing/browser-agent/git/trees/a8517e2c5cd5be9d77e66f90180e25490c67d9ba?recursive=1（获取于 2026-10-18T15:56:03Z；SHA-256：db5ed13baf5a90c4171402b7524f3a58339c07bc5d5f182f9e0f51460dbfafaa）
- https://raw.githubusercontent.com/uiuing/browser-agent/a8517e2c5cd5be9d77e66f90180e25490c67d9ba/packages/extension/src/engine/page/perception.ts（获取于 2026-10-18T15:56:04Z；SHA-256：80e0a8b613c8e5cba19a271b9c894d255be1e2de1abdd1b93fc4f8ad18feeec3）
- https://raw.githubusercontent.com/uiuing/browser-agent/a8517e2c5cd5be9d77e66f90180e25490c67d9ba/packages/extension/src/engine/page/execute.ts（获取于 2026-10-18T15:56:04Z；SHA-256：48d24585c85d1c2b4a69be99e9fd6522ed4a80e6a0b896523c4a42474a9fcc40）
- https://raw.githubusercontent.com/uiuing/browser-agent/a8517e2c5cd5be9d77e66f90180e25490c67d9ba/packages/extension/src/tools/page.ts（获取于 2026-10-18T15:56:04Z；SHA-256：c2ba6828effa3842819ccd1172b27b3b6fe30864815e92f8a974c2987a922297）
- https://raw.githubusercontent.com/uiuing/browser-agent/a8517e2c5cd5be9d77e66f90180e25490c67d9ba/LICENSE（获取于 2026-10-18T15:56:04Z；SHA-256：20b3cdfa2aa7d5f0167686808c60687040f42a89d62b248de1e26ad2d1470fe0）
- https://raw.githubusercontent.com/uiuing/browser-agent/HEAD/LICENSE（获取于 2026-10-18T15:57:01Z；SHA-256：20b3cdfa2aa7d5f0167686808c60687040f42a89d62b248de1e26ad2d1470fe0）
