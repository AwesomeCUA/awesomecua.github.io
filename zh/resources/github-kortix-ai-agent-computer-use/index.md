# agent-computer-use

Rust CLI（agent-cu）将桌面应用无障碍树快照为元素引用或选择器，供智能体点击、输入、滚动或拖动，在 macOS 使用 AX、Windows 使用 UI Automation、Linux 使用 AT-SPI2。

- 目录页面：https://awesomecua.com/zh/resources/github-kortix-ai-agent-computer-use/
- English：https://awesomecua.com/resources/github-kortix-ai-agent-computer-use/index.md
- 原始来源：https://github.com/kortix-ai/agent-computer-use
- 类型：工具
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、macOS、Windows、Linux
- 主题：自动化、工具集成、界面理解、历史
- 证据核查日期：2026-10-20T08:36:34Z
- ID：github:kortix-ai/agent-computer-use

## 范围记录

Published on npm as agent-cu (package.json 0.1.1 at the inspected commit) with precompiled binaries, and also installable as an agent skill (skills/agent-computer-use/SKILL.md). Commands snapshot an app's accessibility tree into @eN refs or query it with a selector DSL (role, name, id, parent-child chains), then click, type, press keys, scroll, drag, move or resize windows, wait for elements, take screenshots, and run JSON batches or YAML workflows; output is JSON by default. Backends: macOS uses AXUIElement with CGEvent input, Windows uses UI Automation, and Linux uses AT-SPI2 over D-Bus with xdotool for input. Electron apps can be driven over the Chrome DevTools Protocol, but automatic Electron detection and relaunch with a debug port is implemented only on macOS (cli/crates/agent-computer-use-cdp/src/detect.rs). The README marks every platform as preview and states that the project is no longer maintained, recommending Cua Driver instead. The repository was formerly named kortix-ai/agent-click (same GitHub repository ID). The tool contains no model or agent loop.

- 完整记录 JSON：https://awesomecua.com/resources/github-kortix-ai-agent-computer-use/record.json

## 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/kortix-ai/agent-computer-use/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/kortix-ai/agent-computer-use/HEAD/README.md（获取于 2026-10-20T08:36:34Z；SHA-256：0f1bff0fd1f3e7f13281464fd680d24174a6e8f990db92fe1da2e7436b22d9e2）
- https://raw.githubusercontent.com/kortix-ai/agent-computer-use/d67eca2fadffa76c46d448e091b0ec4243e90b59/README.md（获取于 2026-10-20T08:34:28Z；SHA-256：0f1bff0fd1f3e7f13281464fd680d24174a6e8f990db92fe1da2e7436b22d9e2）
- https://raw.githubusercontent.com/kortix-ai/agent-computer-use/d67eca2fadffa76c46d448e091b0ec4243e90b59/cli/crates/agent-computer-use-macos/src/ax.rs（获取于 2026-10-20T08:34:46Z；SHA-256：a790122ec596272c1c2b24a53e7fddbaf6c96c03d638af30ecfb8848e5772309）
- https://raw.githubusercontent.com/kortix-ai/agent-computer-use/d67eca2fadffa76c46d448e091b0ec4243e90b59/cli/crates/agent-computer-use-macos/src/input.rs（获取于 2026-10-20T08:34:36Z；SHA-256：7d3e9685873b6c957a1bec231b58a45a67e452575f9424c94514bfdaaf4193b8）
- https://raw.githubusercontent.com/kortix-ai/agent-computer-use/d67eca2fadffa76c46d448e091b0ec4243e90b59/cli/crates/agent-computer-use-windows/src/uia.rs（获取于 2026-10-20T08:34:55Z；SHA-256：4fd52bfe92dd8c0f8948a23ac2111dbf0e953dc49ea02e72e577c93f1fdd062b）
- https://raw.githubusercontent.com/kortix-ai/agent-computer-use/d67eca2fadffa76c46d448e091b0ec4243e90b59/cli/crates/agent-computer-use-linux/src/atspi.rs（获取于 2026-10-20T08:35:05Z；SHA-256：3137a6d868a8a961ed9dd94edccae779bfb0ce0cd20199a128d46fbea368c054）
- https://raw.githubusercontent.com/kortix-ai/agent-computer-use/d67eca2fadffa76c46d448e091b0ec4243e90b59/cli/crates/agent-computer-use-linux/src/input.rs（获取于 2026-10-20T08:35:06Z；SHA-256：b6de2ca443d06b70b577a08015890f2f8c90be716925c9d40d0ab93876507813）
- https://raw.githubusercontent.com/kortix-ai/agent-computer-use/d67eca2fadffa76c46d448e091b0ec4243e90b59/cli/crates/agent-computer-use-cdp/src/detect.rs（获取于 2026-10-20T08:35:10Z；SHA-256：9bb5db69945bd11940e07dbbe369512a2dfe7c6cdfae49c9d114badae61a87e0）
- https://raw.githubusercontent.com/kortix-ai/agent-computer-use/d67eca2fadffa76c46d448e091b0ec4243e90b59/package.json（获取于 2026-10-20T08:35:14Z；SHA-256：f98b4ddf4f446f799b433cc3e4b74be5dabc325acc7d6651a43e89ab36458c8f）
- https://raw.githubusercontent.com/kortix-ai/agent-computer-use/d67eca2fadffa76c46d448e091b0ec4243e90b59/LICENSE（获取于 2026-10-20T08:35:14Z；SHA-256：1e40d4e4a07efcc82df9df675c07c365b8a7a7b87a95dc539e882bf172db4e3a）
- https://raw.githubusercontent.com/kortix-ai/agent-computer-use/HEAD/LICENSE（获取于 2026-10-20T08:36:56Z；SHA-256：1e40d4e4a07efcc82df9df675c07c365b8a7a7b87a95dc539e882bf172db4e3a）
- https://api.github.com/repos/kortix-ai/agent-click（获取于 2026-10-20T08:35:21Z；SHA-256：f1cf004fcfb3d3e7d626574385e9eebd8a25b2eba62b31f2e953f1b030a30e7d）
- https://api.github.com/repos/kortix-ai/agent-computer-use（获取于 2026-10-20T08:35:24Z；SHA-256：f1cf004fcfb3d3e7d626574385e9eebd8a25b2eba62b31f2e953f1b030a30e7d）
