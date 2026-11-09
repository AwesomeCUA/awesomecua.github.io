# OpenPhone (Secondly)

基于 LineageOS 的 AI 原生 Android 系统；其特权助手通过新增框架服务读取屏幕和 UI 树，跨应用点击、滑动和输入，并提供确认、监视器和审计日志。

- 目录页面：https://awesomecua.com/zh/resources/github-secondly-com-openphone/
- English：https://awesomecua.com/resources/github-secondly-com-openphone/index.md
- 原始来源：https://github.com/secondly-com/OpenPhone
- 类型：智能体
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：手机操作、人机协作、安全与防护
- 证据核查日期：2026-10-18T15:46:31Z
- ID：github:secondly-com/openphone

## 范围记录

Developer preview based on LineageOS 23.2 / Android 16, targeting the Pixel 9a first, with an emulator build path. The repository holds an overlay (the privileged OpenPhoneAssistant app and vendor configuration), patch stacks for LineageOS repositories and build scripts. The frameworks_base patches add an agent manager service with task-scoped input action execution, a framework-mediated UI tree snapshot, opt-in screenshots captured by system_server, a pending-action confirmation flow and a tamper-evident audit log. overlay/vendor/openphone/config/openphone_model_tools.json lists 54 model-visible tools, including screen reading, tap, swipe, typing, app launch, messages, calendar, watchers and background jobs. Models are reached through a development model broker in services/. It is unrelated to the HKUDS OpenPhone mobile foundation-model paper (arXiv 2510.22009).

- 完整记录 JSON：https://awesomecua.com/resources/github-secondly-com-openphone/record.json

## 许可证信息

- 代码：PolyForm-Noncommercial-1.0.0 — https://raw.githubusercontent.com/secondly-com/OpenPhone/b4b6e76fc353bac249a9877cdda9722e7b3f3db8/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 代码审核：GitHub reports NOASSERTION. LICENSE is a custom mixed-license notice that places OpenPhone-owned materials under PolyForm Noncommercial 1.0.0 (text in docs/legal/LICENSE.noncommercial); this is source-available, not an open-source license, and it does not relicense the Android, LineageOS or GPL material the patches touch.
  来源：https://raw.githubusercontent.com/secondly-com/OpenPhone/b4b6e76fc353bac249a9877cdda9722e7b3f3db8/LICENSE, https://raw.githubusercontent.com/secondly-com/OpenPhone/b4b6e76fc353bac249a9877cdda9722e7b3f3db8/docs/legal/LICENSE.noncommercial

## 一手证据

- https://raw.githubusercontent.com/secondly-com/OpenPhone/HEAD/README.md（获取于 2026-10-18T15:46:31Z；SHA-256：2f59d1bb27c2ab6041ca0e1f11526818fa7a7ab3e676dafbb646a7a61e17aacd）
- https://raw.githubusercontent.com/secondly-com/OpenPhone/b4b6e76fc353bac249a9877cdda9722e7b3f3db8/patches/frameworks_base/0003-OpenPhone-add-task-scoped-input-action-execution.patch（获取于 2026-10-18T15:46:11Z；SHA-256：2fb596e43ed7e8baa1ccc5fce1b32b1c237468e24cdb14350d898648cf21cf2c）
- https://raw.githubusercontent.com/secondly-com/OpenPhone/b4b6e76fc353bac249a9877cdda9722e7b3f3db8/patches/frameworks_base/0017-OpenPhone-framework-mediated-UI-tree-snapshot.patch（获取于 2026-10-18T15:46:11Z；SHA-256：632146c12f13198f0d3c77f4c256b206d31af96aa5aada84f098b0e3973815fa）
- https://raw.githubusercontent.com/secondly-com/OpenPhone/b4b6e76fc353bac249a9877cdda9722e7b3f3db8/overlay/packages/apps/OpenPhoneAssistant/src/org/openphone/assistant/agent/FrameworkToolExecutor.java（获取于 2026-10-18T15:46:11Z；SHA-256：830ae7eae39ce64719493b2c220ff0b220a9bc314e71c169224d64c980d3eb23）
- https://raw.githubusercontent.com/secondly-com/OpenPhone/b4b6e76fc353bac249a9877cdda9722e7b3f3db8/overlay/vendor/openphone/config/openphone_model_tools.json（获取于 2026-10-18T15:46:12Z；SHA-256：eee43e026576617b186c5e89803cee42646cb8b2bdcce142f7449602d3a86f10）
- https://raw.githubusercontent.com/secondly-com/OpenPhone/b4b6e76fc353bac249a9877cdda9722e7b3f3db8/LICENSE（获取于 2026-10-18T15:46:12Z；SHA-256：45ed2adbc9092ba471690f70e3d8191bcaa616d053cfd7a2f86e4ec0f094719d）
- https://raw.githubusercontent.com/secondly-com/OpenPhone/b4b6e76fc353bac249a9877cdda9722e7b3f3db8/docs/legal/LICENSE.noncommercial（获取于 2026-10-18T15:46:12Z；SHA-256：4723409558ffb850c2c43302dae8b5c3359bcb8d9596293e888414d494115717）
