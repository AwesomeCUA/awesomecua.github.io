---
title: "OpenBUA · 智能体 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-alisharjeell-openbua/
updated: 2026-10-19
type: agent
lang: zh-CN
---

# OpenBUA

在用户已登录的浏览器中运行的 Chrome 侧边栏智能体，读取 DOM 控件清单和标签页截图，再通过注入的合成事件点击、输入和填写表单。

- 目录页面：https://awesomecua.com/zh/resources/github-alisharjeell-openbua/
- English：https://awesomecua.com/resources/github-alisharjeell-openbua/index.md
- 原始来源：https://github.com/AliSharjeell/OpenBUA
- 类型：智能体
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、记忆、自动化
- 证据核查日期：2026-10-19T06:11:56Z
- ID：github:alisharjeell/openbua

## 范围记录

Chrome Manifest V3 extension (manifest version 1.9.1) whose agent loop is built on the pi-agent-core and pi-ai packages. Its tools (src/agent/tools.ts) read a paginated inventory of interactive DOM controls including open shadow roots, inspect forms, click elements or screenshot-pixel coordinates (used for canvas editors such as Google Docs), type, scroll, switch and open tabs, upload files, post to social sites and send webmail; capture_tab_screenshot returns the visible-tab image to the model. Actions run as scripts injected with chrome.scripting that dispatch synthetic pointer and mouse events (src/agent/browser-bridge.ts); the manifest requests no debugger permission. Before showing its human CAPTCHA gate, the bridge makes up to two automatic rounds in which a vision model is asked to click inside detected challenge regions (src/agent/captcha-auto.ts). It acts in the user's logged-in sessions and keeps a memory store with optional parallel worker windows. The README ends with 'MIT', but the inspected tree has no license file.

- 完整记录 JSON：https://awesomecua.com/resources/github-alisharjeell-openbua/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 代码审核：The README's closing License section says MIT, but the inspected tree at the reviewed commit has no license file, so no source-license grant is recorded.
  来源：https://raw.githubusercontent.com/AliSharjeell/OpenBUA/HEAD/README.md, https://api.github.com/repos/AliSharjeell/OpenBUA/git/trees/bc2c9b490291647a00946267e470efe3bf0cfd89?recursive=1

## 一手证据

- https://raw.githubusercontent.com/AliSharjeell/OpenBUA/HEAD/README.md（获取于 2026-10-19T06:11:56Z；SHA-256：c1d5cabceb9a7f2f937c1f1962fc03ae51313e46ac80be197d8ba2db8b292be3）
- https://api.github.com/repos/AliSharjeell/OpenBUA/git/trees/bc2c9b490291647a00946267e470efe3bf0cfd89?recursive=1（获取于 2026-10-19T06:11:55Z；SHA-256：04481a6b01ee0386e3cd559cb42400af037941b5f1eb665e572e7a00ee9f3ce4）
- https://raw.githubusercontent.com/AliSharjeell/OpenBUA/bc2c9b490291647a00946267e470efe3bf0cfd89/src/agent/tools.ts（获取于 2026-10-18T15:58:59Z；SHA-256：0391525a73502329678b684d4578670e0d2f58f5cfe3f861cb7ace0218a7b8bf）
- https://raw.githubusercontent.com/AliSharjeell/OpenBUA/bc2c9b490291647a00946267e470efe3bf0cfd89/src/agent/browser-bridge.ts（获取于 2026-10-18T15:58:59Z；SHA-256：afeb6e6a596c37830507d17bc072d84227b7270424e862bef8ccb6aced1cc990）
- https://raw.githubusercontent.com/AliSharjeell/OpenBUA/bc2c9b490291647a00946267e470efe3bf0cfd89/src/agent/captcha-auto.ts（获取于 2026-10-18T15:59:00Z；SHA-256：d58f3f48e7e856f53403c548c8109bd0b5db5533db21a3ab53d140afed6646b3）
- https://raw.githubusercontent.com/AliSharjeell/OpenBUA/bc2c9b490291647a00946267e470efe3bf0cfd89/manifest.json（获取于 2026-10-18T15:59:00Z；SHA-256：253c1a71f7ea8500636ed0ef2481efe1b7ee4f6af714e83f5300761c9ac488d4）
- https://raw.githubusercontent.com/AliSharjeell/OpenBUA/bc2c9b490291647a00946267e470efe3bf0cfd89/package.json（获取于 2026-10-18T15:59:25Z；SHA-256：14fdc27f27df8a8a2764be5783881263ae96ddf21838ac1811c3cb2d71dd2b60）
- https://github.com/AliSharjeell/OpenBUA/releases/expanded_assets/v1.9.1（获取于 2026-10-18T15:59:30Z；SHA-256：b396bf7a21795c24abeaed411e6836dabada657e2059e5469c69100c524da792）
