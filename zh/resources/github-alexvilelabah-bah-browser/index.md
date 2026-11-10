---
title: "Bah · 智能体 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-alexvilelabah-bah-browser/
updated: 2026-10-18
type: agent
lang: zh-CN
---

# Bah

Electron AI 浏览器，其侧边栏智能体读取 DOM 或 Accessibility 树中带编号的页面元素、页面文字和 OCR 结果，再通过 Chromium 输入事件点击和输入，可使用云端或本地 Ollama 模型。

- 目录页面：https://awesomecua.com/zh/resources/github-alexvilelabah-bah-browser/
- English：https://awesomecua.com/resources/github-alexvilelabah-bah-browser/index.md
- 原始来源：https://github.com/alexvilelabah/bah-browser
- 类型：智能体
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、人机协作、自动化
- 证据核查日期：2026-10-18T15:46:09Z
- ID：github:alexvilelabah/bah-browser

## 范围记录

Browser application by VilelaLab with Windows and macOS builds (release v1.9.2). The agent loop observes each page through an injected script or the CDP accessibility tree (src/renderer/page-executor.ts), adds tesseract.js OCR text, and attaches a page screenshot only when the configured model accepts images (src/main/ai-engine.ts); clicks and keys go through Electron sendInputEvent on the page (src/main/main.ts). Tools include element-reference clicks and fills, coordinate clicks, tabs and navigation, plus non-interface skills such as image generation, video and price lookups. The README states a 25-step cap, confirmation before paying, buying, deleting or entering card data, and a hand-off on CAPTCHAs and login walls. It runs in the user's persistent logged-in session, presents a Chrome user agent and masks navigator.webdriver, and the app also bundles an ad blocker, password manager, media downloader and torrent client. Supported providers are DeepSeek, Mistral, NVIDIA NIM and Ollama.

- 完整记录 JSON：https://awesomecua.com/resources/github-alexvilelabah-bah-browser/record.json

## 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/alexvilelabah/bah-browser/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/alexvilelabah/bah-browser/HEAD/README.md（获取于 2026-10-18T15:46:09Z；SHA-256：3ea4ce1a8965d8f880b6776ae8203aff5e63994c77dd44d2245315f1e7aa19c4）
- https://api.github.com/repos/alexvilelabah/bah-browser（获取于 2026-10-18T15:46:10Z；SHA-256：bf0ad7dfbd7cf46bd160275a0128196f13aa63f3cac5059f32bfdba3b24e56e4）
- https://api.github.com/repos/alexvilelabah/bah-browser/git/trees/6441bdce349ab31041c79f5b9002d82e0fa9f4bc?recursive=1（获取于 2026-10-18T15:46:11Z；SHA-256：8682c74424570d8181af812c426e92ecd071586f033da1e9c4d3a789d927f45a）
- https://raw.githubusercontent.com/alexvilelabah/bah-browser/6441bdce349ab31041c79f5b9002d82e0fa9f4bc/src/renderer/page-executor.ts（获取于 2026-10-18T15:46:11Z；SHA-256：f092fe6b3199d6525ba61db8cb5d90c3398c1e974be0813a6239c33ee411870e）
- https://raw.githubusercontent.com/alexvilelabah/bah-browser/6441bdce349ab31041c79f5b9002d82e0fa9f4bc/src/main/ai-engine.ts（获取于 2026-10-18T15:46:11Z；SHA-256：d6ffb9b27132a5834b25c0de9d5469c70a75a8ce3fdb3c476ea0f3ba85da8c1b）
- https://raw.githubusercontent.com/alexvilelabah/bah-browser/6441bdce349ab31041c79f5b9002d82e0fa9f4bc/src/main/main.ts（获取于 2026-10-18T15:46:12Z；SHA-256：a37361b80074e376de55115338401f46ef5f99f008d2f93d1127cce7ab799c7a）
- https://raw.githubusercontent.com/alexvilelabah/bah-browser/6441bdce349ab31041c79f5b9002d82e0fa9f4bc/LICENSE（获取于 2026-10-18T15:46:12Z；SHA-256：40a1c1e0a2996effbe5ab31283e34886b02125428d23bfb5d69aaa14e0dd17f7）
- https://raw.githubusercontent.com/alexvilelabah/bah-browser/HEAD/LICENSE（获取于 2026-10-18T15:46:47Z；SHA-256：40a1c1e0a2996effbe5ab31283e34886b02125428d23bfb5d69aaa14e0dd17f7）
