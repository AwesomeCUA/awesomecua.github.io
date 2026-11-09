# Cetus

用于运行和审阅编码智能体运行环境的 macOS 客户端；内置运行环境含通过带编号的 Accessibility 元素操作前台应用的计算机使用辅助工具，并支持 Chrome 控制。

- 目录页面：https://awesomecua.com/zh/resources/github-drewnekota-cetus/
- English：https://awesomecua.com/resources/github-drewnekota-cetus/index.md
- 原始来源：https://github.com/drewnekota/cetus
- 类型：智能体
- 审核状态：已审核
- 范围：相关研究
- 运行环境：桌面、macOS、网页
- 主题：自动化、人机协作
- 证据核查日期：2026-10-18T15:39:54Z
- ID：github:drewnekota/cetus

## 范围记录

Adjacent: Cetus is mainly a review board and launcher for Claude Code, Codex, DeepSeek Harness, OpenCode, Grok Build, Kimi CLI and its own runtime (a bundled pi agent), with scheduled runs, per-run git worktrees and on-device screen-history OCR and meeting transcription. GUI control lives in two opt-in plugins of the built-in runtime. The computer-use plugin tunnels requests through the Rust host to a long-lived Swift helper (src-tauri/cua/cetus-cua-helper.swift) that dumps the frontmost or named app's Accessibility tree as numbered elements; computer_act presses or sets values by index and falls back to synthetic CGEvent clicks and keystrokes, asking for confirmation before the first consequential action and before destructive or sensitive ones, and computer_verify re-observes. The browser-use plugin attaches the external chrome-devtools-mcp to Chrome on port 9222. Apple Silicon only, macOS 13+ (Tauri build) or 15+ (Swift beta). Root LICENSE is MIT.

- 完整记录 JSON：https://awesomecua.com/resources/github-drewnekota-cetus/record.json

## 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/drewnekota/cetus/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/drewnekota/cetus/HEAD/README.md（获取于 2026-10-18T15:39:54Z；SHA-256：57a7e8522eefee5eeb0ee71ce50242aad6ff4910b0d04e18dd14c3cb7216337b）
- https://api.github.com/repos/drewnekota/cetus/git/commits/2f1ab95d1bc2ecd6d05ae99dd88ec61ec5860a5a（获取于 2026-10-18T15:39:26Z；SHA-256：5cf2cad9d813c36a226c107819cb2d0019587c1fdf6b9c41b9eea9b263d24957）
- https://raw.githubusercontent.com/drewnekota/cetus/2f1ab95d1bc2ecd6d05ae99dd88ec61ec5860a5a/src-tauri/cetus-plugins/computer-use/extensions/computer-use.ts（获取于 2026-10-18T15:39:27Z；SHA-256：e6ac7ed162414474532d4b92da142ccba86d375e2f5f18a6485fd35135d2710d）
- https://raw.githubusercontent.com/drewnekota/cetus/2f1ab95d1bc2ecd6d05ae99dd88ec61ec5860a5a/src-tauri/cua/cetus-cua-helper.swift（获取于 2026-10-18T15:39:27Z；SHA-256：e2ede2d1ff0374d06c30f990513160e24d2f7fe7938bb7c854874d9b24acc50e）
- https://raw.githubusercontent.com/drewnekota/cetus/2f1ab95d1bc2ecd6d05ae99dd88ec61ec5860a5a/src-tauri/cetus-plugins/browser-use/.mcp.json（获取于 2026-10-18T15:39:27Z；SHA-256：bbe459ac55792664ecb1b6cf1d73b1be283126b3d8a957b990ac31b9aab8f594）
- https://raw.githubusercontent.com/drewnekota/cetus/HEAD/LICENSE（获取于 2026-10-18T15:39:55Z；SHA-256：02e8a50516622ae2f3b7d8819ffef997fe808e2f9f082876be409ff590d2ee41）
