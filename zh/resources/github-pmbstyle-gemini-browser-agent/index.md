# Gemini Browser Agent

Chrome 扩展和 Python WebSocket 桥接器，在用户当前标签页运行 Gemini 2.5 Computer Use，将标签页截图发给模型，并通过内容脚本执行点击、输入和滚动。

- 目录页面：https://awesomecua.com/zh/resources/github-pmbstyle-gemini-browser-agent/
- English：https://awesomecua.com/resources/github-pmbstyle-gemini-browser-agent/index.md
- 原始来源：https://github.com/pmbstyle/gemini-browser-agent
- 类型：智能体
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、自动化
- 证据核查日期：2026-10-20T08:41:39Z
- ID：github:pmbstyle/gemini-browser-agent

## 范围记录

The README calls the project a research experiment and scaffolding. websocket_agent.py is a local WebSocket server that calls gemini-2.5-computer-use-preview-10-2025 through google-genai with the browser computer-use environment; widget/ is an unpacked Manifest V3 extension with a side panel where the user connects to the bridge and enters a goal. Each turn the extension captures the visible tab with chrome.tabs.captureVisibleTab, the bridge converts the model's 0-1000 normalized coordinates to viewport pixels, and the extension carries out clicks, typing, key presses, hovering, scrolling and navigation by injecting functions (chrome.scripting.executeScript) that dispatch synthetic DOM events at document.elementFromPoint. Drag and drop is approximated with mousedown and mouseup events, unhandled model actions return an unimplemented warning, and the side panel sets a step limit (default 10). It needs a Gemini API key and acts in the user's own browser without a sandbox; the README points to the author's separate gemini-computer-use repository for sandboxed runs. The repository has no license file at the inspected commit.

- 完整记录 JSON：https://awesomecua.com/resources/github-pmbstyle-gemini-browser-agent/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 代码审核：The inspected recursive tree has no license file and the README names no license; source terms remain unknown.
  来源：https://api.github.com/repos/pmbstyle/gemini-browser-agent/git/trees/540b6fd7f1bfcfc351b2f7139ea4404cb089472f?recursive=1

## 一手证据

- https://raw.githubusercontent.com/pmbstyle/gemini-browser-agent/HEAD/README.md（获取于 2026-10-20T08:41:39Z；SHA-256：e7e20064cbb8a84025f04dddf5a6e849fe05405ed2e779a1fc04cdb3493757bd）
- https://raw.githubusercontent.com/pmbstyle/gemini-browser-agent/540b6fd7f1bfcfc351b2f7139ea4404cb089472f/README.md（获取于 2026-10-20T08:39:58Z；SHA-256：e7e20064cbb8a84025f04dddf5a6e849fe05405ed2e779a1fc04cdb3493757bd）
- https://raw.githubusercontent.com/pmbstyle/gemini-browser-agent/540b6fd7f1bfcfc351b2f7139ea4404cb089472f/websocket_agent.py（获取于 2026-10-20T08:40:04Z；SHA-256：a9fdbe483e2717f92dd902577247ef6d5478b55e0d532710fca422ed2887782a）
- https://raw.githubusercontent.com/pmbstyle/gemini-browser-agent/540b6fd7f1bfcfc351b2f7139ea4404cb089472f/widget/actions/browserActions.js（获取于 2026-10-20T08:40:14Z；SHA-256：2fd9d29f3b2c1c80ca2188e3b10a5682490d11884a57c938f8f56cd809cde394）
- https://raw.githubusercontent.com/pmbstyle/gemini-browser-agent/540b6fd7f1bfcfc351b2f7139ea4404cb089472f/widget/manifest.json（获取于 2026-10-20T08:40:33Z；SHA-256：7bab746e7cf307067432b25d28ef4dd85c6682b2f88c156bde2208d7409c9ccc）
- https://api.github.com/repos/pmbstyle/gemini-browser-agent/git/trees/540b6fd7f1bfcfc351b2f7139ea4404cb089472f?recursive=1（获取于 2026-10-20T08:41:08Z；SHA-256：84df487918fcec7f8565aed76ef0c7c4da0e4ee98d3c578e13a7aecebc365d5a）
