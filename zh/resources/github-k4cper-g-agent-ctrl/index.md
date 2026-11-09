# agent-ctrl

Rust CLI 和守护进程，让智能体将原生应用无障碍树快照为元素引用并据此操作，在 Windows 使用 UI Automation、macOS 使用 AX，Linux 提供只读 AT-SPI 接口。

- 目录页面：https://awesomecua.com/zh/resources/github-k4cper-g-agent-ctrl/
- English：https://awesomecua.com/resources/github-k4cper-g-agent-ctrl/index.md
- 原始来源：https://github.com/k4cper-g/agent-ctrl
- 类型：工具
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Windows、macOS、Linux
- 主题：工具集成、自动化、界面理解
- 证据核查日期：2026-10-20T08:22:41Z
- ID：github:k4cper-g/agent-ctrl

## 范围记录

Published on npm as @agent-ctrl/cli (package.json and Cargo.toml 0.1.4; annotated tag v0.1.4 points at the inspected commit), with release binaries for Windows x64 and macOS arm64/x64 and a typed @agent-ctrl/client TypeScript wrapper. agent-ctrl open <surface> starts a per-session daemon; snapshot pins a target window and returns its accessibility tree with @eN action refs and @sN scope refs, which click, type, fill, select, check, scroll, drag, press, wait and find commands consume. Screenshots of a window, region, element or the desktop can be annotated with cached refs. Windows (crates/surface-uia, UI Automation patterns plus SendInput) and macOS (crates/surface-ax, Accessibility plus CGEvent input) have the full action vocabulary; Linux (crates/surface-atspi) only snapshots, finds, inspects and lists windows, and Android and iOS surfaces are planned. The README leaves browser automation to the separate agent-browser project. The tool contains no model or agent loop.

- 完整记录 JSON：https://awesomecua.com/resources/github-k4cper-g-agent-ctrl/record.json

## 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/k4cper-g/agent-ctrl/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/k4cper-g/agent-ctrl/HEAD/README.md（获取于 2026-10-20T08:22:41Z；SHA-256：83ef4fe4a724261be2733d09636b44ffc50b882d89f3b3587a087a1b2867125e）
- https://raw.githubusercontent.com/k4cper-g/agent-ctrl/7cc6b3d6d25ae6064aa1cf56d32df3af6e24a212/README.md（获取于 2026-10-20T08:21:52Z；SHA-256：83ef4fe4a724261be2733d09636b44ffc50b882d89f3b3587a087a1b2867125e）
- https://raw.githubusercontent.com/k4cper-g/agent-ctrl/7cc6b3d6d25ae6064aa1cf56d32df3af6e24a212/package.json（获取于 2026-10-20T08:21:53Z；SHA-256：f9b4b4ac293091890ee0f4918a96326b80f714023c294010e4300b5ef7466399）
- https://raw.githubusercontent.com/k4cper-g/agent-ctrl/7cc6b3d6d25ae6064aa1cf56d32df3af6e24a212/Cargo.toml（获取于 2026-10-20T08:21:53Z；SHA-256：6bcfe6ae39fb5c0ec1a7c4ca30cdf1cf4965f3c772947ed6c60f11ef60581f64）
- https://raw.githubusercontent.com/k4cper-g/agent-ctrl/7cc6b3d6d25ae6064aa1cf56d32df3af6e24a212/crates/surface-uia/src/windows_impl.rs（获取于 2026-10-20T08:21:54Z；SHA-256：b5b77cdbb6a4540d4f76354378b3a5506fc7408ce65de3c218df82ae15c8dbcb）
- https://raw.githubusercontent.com/k4cper-g/agent-ctrl/7cc6b3d6d25ae6064aa1cf56d32df3af6e24a212/crates/surface-ax/src/macos.rs（获取于 2026-10-20T08:21:54Z；SHA-256：da1e91a186b0a729b06b2e7a673a4ae84383a18a0fba32ea78827d5d31a09d49）
- https://raw.githubusercontent.com/k4cper-g/agent-ctrl/7cc6b3d6d25ae6064aa1cf56d32df3af6e24a212/crates/surface-atspi/src/linux.rs（获取于 2026-10-20T08:21:54Z；SHA-256：0f2b814fa5b2d95843af097896330f4ea524f8046ae637730b9f1583ccf9c465）
- https://raw.githubusercontent.com/k4cper-g/agent-ctrl/7cc6b3d6d25ae6064aa1cf56d32df3af6e24a212/LICENSE（获取于 2026-10-20T08:21:54Z；SHA-256：71696a8c0214c93f3c693cfcae345f026287e46611e7d5e8d0659ab364c0f936）
- https://api.github.com/repos/k4cper-g/agent-ctrl/git/tags/37ad90bd95020d9c421d214cf9623f700cd64e44（获取于 2026-10-20T08:22:19Z；SHA-256：cd7cf488acfd83e5b78bf4040e350eca3f2f0586b096d6d49b45ddc3a9c749e0）
- https://raw.githubusercontent.com/k4cper-g/agent-ctrl/HEAD/LICENSE（获取于 2026-10-20T08:22:50Z；SHA-256：71696a8c0214c93f3c693cfcae345f026287e46611e7d5e8d0659ab364c0f936）
