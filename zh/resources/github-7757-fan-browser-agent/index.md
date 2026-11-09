# Fan

Electron 桌面智能体通过编号 DOM 和无障碍快照操作内嵌的可见 Chromium 浏览器，运行有边界的 JavaScript 浏览器事务，并在登录和高风险步骤交还控制权。

- 目录页面：https://awesomecua.com/zh/resources/github-7757-fan-browser-agent/
- English：https://awesomecua.com/resources/github-7757-fan-browser-agent/index.md
- 原始来源：https://github.com/7757/Fan-Browser-Agent
- 类型：智能体
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、人机协作、自动化
- 证据核查日期：2026-10-18T16:07:48Z
- ID：github:7757/fan-browser-agent

## 范围记录

Early-preview desktop app (v0.4.3 unsigned builds for macOS, Windows and Linux were the latest GitHub release at review). The README states that its Python agent runtime is adapted from Nous Research's Hermes Agent under MIT, and the root LICENSE keeps both copyright notices. Observation (apps/desktop/electron/browser-runtime/observation/operations.cjs) combines CDP DOMSnapshot.captureSnapshot with Accessibility.getFullAXTree into a numbered snapshot; browser_snapshot can attach a plain screenshot or one with numbered element boxes. browser_run executes model-written JavaScript against a sandboxed fan.* API, clicks go through Input.dispatchMouseEvent, and browser_handoff returns control to the user. The runtime also has terminal, file, memory, MCP and scheduled-task tools. Models come from user-configured providers.

- 完整记录 JSON：https://awesomecua.com/resources/github-7757-fan-browser-agent/record.json

## 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/7757/Fan-Browser-Agent/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/7757/Fan-Browser-Agent/HEAD/README.md（获取于 2026-10-18T16:07:48Z；SHA-256：d123c5afc5ec4cc25c9590a3b390a704eb3179821baab910bb66184097424842）
- https://raw.githubusercontent.com/7757/Fan-Browser-Agent/665b5a6e57eede8cf4d58b85fce6a636d6b6dac7/tools/browser_program_tool.py（获取于 2026-10-18T16:07:47Z；SHA-256：75f80576d8c2c52cc33ddc30e40a6e4a486bd1adfd41af9bbbadc77d5a6f5f56）
- https://raw.githubusercontent.com/7757/Fan-Browser-Agent/665b5a6e57eede8cf4d58b85fce6a636d6b6dac7/apps/desktop/electron/browser-runtime/observation/operations.cjs（获取于 2026-10-18T16:07:47Z；SHA-256：df166e24596206f86aacbf7f85cda27138f3ddaed29c826b234f524d0a1f17ce）
- https://raw.githubusercontent.com/7757/Fan-Browser-Agent/665b5a6e57eede8cf4d58b85fce6a636d6b6dac7/apps/desktop/electron/browser-runtime/interaction/click-operations.cjs（获取于 2026-10-18T16:07:47Z；SHA-256：6643182eefa1642340bab0965675ebfec80055721a179e8bb65a8710ee08e741）
- https://raw.githubusercontent.com/7757/Fan-Browser-Agent/665b5a6e57eede8cf4d58b85fce6a636d6b6dac7/LICENSE（获取于 2026-10-18T16:07:47Z；SHA-256：8a4885604d276a67e12363f648ac06e27b55d53cea9742a67aac7ecaed0ff655）
- https://raw.githubusercontent.com/7757/Fan-Browser-Agent/HEAD/LICENSE（获取于 2026-10-18T16:08:09Z；SHA-256：8a4885604d276a67e12363f648ac06e27b55d53cea9742a67aac7ecaed0ff655）
