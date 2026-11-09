# DSHBox

Android 应用，在 PRoot Debian 沙箱中本地运行 DeepSeek Harness 智能体，并为其提供 WebView 浏览器 CLI，以及通过 Accessibility 和 Shizuku 后端操作原生应用的手机助手。

- 目录页面：https://awesomecua.com/zh/resources/github-wsk-build-dshbox/
- English：https://awesomecua.com/resources/github-wsk-build-dshbox/index.md
- 原始来源：https://github.com/WSK-build/DSHBox
- 类型：智能体
- 审核状态：已审核
- 范围：相关研究
- 运行环境：Android、网页
- 主题：手机操作、人机协作、工具集成
- 证据核查日期：2026-10-18T15:45:48Z
- ID：github:wsk-build/dshbox

## 范围记录

Adjacent: the app's main job is hosting DeepSeek Harness (DSH), a coding-agent runtime, on Android 10+ ARM64 without root or Termux, alongside a terminal and file manager; the GUI executors are bundled tools that DSH chooses between. The browser workspace exposes 24 tools through a bundled browser-use plugin and a sandbox browser CLI (observe, locate, click on screenshot coordinates, type, scroll, screenshot, plus opt-in CDP debugging). Pilot, the phone assistant, lists 39 capabilities and reaches the app layer through a file-based mailbox; its vendored interlock-relay core has an Accessibility backend (node actions and gestures on the default display), a Shizuku shell backend that can also act on a background virtual display, and direct platform calls, behind approval gates. The README declares GPL v3 for the project; pilot/NOTICE marks interlock-relay-core as Apache-2.0 and the DSHBox adapter as GPL-3.0, and PRoot, Debian and other components keep their own terms. README.md is in Chinese and README.en.md in English.

- 完整记录 JSON：https://awesomecua.com/resources/github-wsk-build-dshbox/record.json

## 许可证信息

- 代码：GPL-3.0 — https://raw.githubusercontent.com/WSK-build/DSHBox/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/WSK-build/DSHBox/HEAD/README.md（获取于 2026-10-18T15:45:48Z；SHA-256：a324853986002f902cedd37fbfa2fe4316d5de44a85de949755fb0a4e8ffa4ab）
- https://api.github.com/repos/WSK-build/DSHBox/git/commits/0b429b442004b901aac81dfeb8e81e12564d1cf1（获取于 2026-10-18T15:45:21Z；SHA-256：df1251e23881fd1e86633827566179d347398f163abdec1cf844ba8745f38102）
- https://raw.githubusercontent.com/WSK-build/DSHBox/0b429b442004b901aac81dfeb8e81e12564d1cf1/README.en.md（获取于 2026-10-18T15:45:22Z；SHA-256：769307be59ac76df4d91c5ed8fb7bd5961b2a93a67e327880d70bde7dabe5597）
- https://raw.githubusercontent.com/WSK-build/DSHBox/0b429b442004b901aac81dfeb8e81e12564d1cf1/pilot/interlock-relay-core/src/main/java/interlock/relay/core/exec/a11y/A11yBackend.kt（获取于 2026-10-18T15:45:21Z；SHA-256：b9141af5d128fbd2f787515094928761591c86fe3964ae3a966617eda59bd82b）
- https://raw.githubusercontent.com/WSK-build/DSHBox/0b429b442004b901aac81dfeb8e81e12564d1cf1/browser/browser-bridge/src/main/assets/browser/lib/browser-cli.cjs（获取于 2026-10-18T15:45:21Z；SHA-256：ca8f977a38b7f5bbb8225de2d98485d4bb2311b86fef443d3428839a60f58eab）
- https://raw.githubusercontent.com/WSK-build/DSHBox/0b429b442004b901aac81dfeb8e81e12564d1cf1/pilot/NOTICE（获取于 2026-10-18T15:45:22Z；SHA-256：c4f29f4d44fb98c326d5434029554565ed83c38c97e67b35d5e4c0674e3eb680）
- https://raw.githubusercontent.com/WSK-build/DSHBox/HEAD/LICENSE（获取于 2026-10-18T15:45:49Z；SHA-256：3972dc9744f6499f0f9b2dbf76696f2ae7ad8af9b23dde66d6af86c9dfb36986）
