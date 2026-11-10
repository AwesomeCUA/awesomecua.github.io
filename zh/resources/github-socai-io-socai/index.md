---
title: "socai · 工具 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-socai-io-socai/
updated: 2026-10-18
type: tool
lang: zh-CN
---

# socai

Rust CLI、Agent Skill 和桌面研究智能体通过 DevTools Protocol 操控已登录的 Chrome，并提供按平台划分的工具，用于搜索和阅读社交网站的帖子、评论与个人资料。

- 目录页面：https://awesomecua.com/zh/resources/github-socai-io-socai/
- English：https://awesomecua.com/resources/github-socai-io-socai/index.md
- 原始来源：https://github.com/socai-io/socai
- 类型：工具
- 审核状态：已审核
- 范围：相关研究
- 运行环境：网页
- 主题：网页导航、自动化
- 证据核查日期：2026-10-18T15:48:16Z
- ID：github:socai-io/socai

## 范围记录

Adjacent: models call fixed site operations (search, open posts and profiles, expand comments, OCR images, transcribe video, and a few write actions such as comments and replies on Xiaohongshu, X, Instagram and LinkedIn). Covered sites are Xiaohongshu, Douyin, TikTok, Instagram, LinkedIn, X and WeChat Official Account articles; podcast commands read an indexed library without a browser. core/src/cdp connects to Chrome or Edge through the DevTools Protocol and performs paced navigation, clicks and scrolling, with per-site page scripts under core/src/sites; Firefox and Safari backends are documented as not implemented. The desktop app runs its own tool-calling agent loop (core/src/agent) with OpenAI or Anthropic models, and the CLI installs a Skill for hosts such as Codex and Claude Code.

- 完整记录 JSON：https://awesomecua.com/resources/github-socai-io-socai/record.json

## 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/socai-io/socai/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/socai-io/socai/HEAD/README.md（获取于 2026-10-18T15:48:16Z；SHA-256：a04f29106e908d0d45044f712106f5dc3eefeec8c45a5b535cc3cee5c79619e6）
- https://raw.githubusercontent.com/socai-io/socai/7bafd783fe0a3d03ee0098bf1ba3415d62e7967f/core/src/cdp/session.rs（获取于 2026-10-18T15:47:56Z；SHA-256：a812eeb9994281d6dde95256480bfdd92888628eb7b7ae5309b2eb8f751f67b3）
- https://raw.githubusercontent.com/socai-io/socai/7bafd783fe0a3d03ee0098bf1ba3415d62e7967f/core/src/agent/loop.rs（获取于 2026-10-18T15:47:56Z；SHA-256：408f59a82a97255fcf0c9de6b6adb825fbb6dd00a3e300811ce0917f82c664b2）
- https://raw.githubusercontent.com/socai-io/socai/7bafd783fe0a3d03ee0098bf1ba3415d62e7967f/docs/browser-backends.md（获取于 2026-10-18T15:47:56Z；SHA-256：a365bc947f7a8a2f22096e43a3fef720c850c4efbf74152f5ea2ca146ad8b80b）
- https://raw.githubusercontent.com/socai-io/socai/7bafd783fe0a3d03ee0098bf1ba3415d62e7967f/docs/guide.md（获取于 2026-10-18T15:47:56Z；SHA-256：2e1d9d6bbe1bc42433d326f4d9fe46eb6711d29a421939b2221eb12302b741da）
- https://raw.githubusercontent.com/socai-io/socai/7bafd783fe0a3d03ee0098bf1ba3415d62e7967f/LICENSE（获取于 2026-10-18T15:47:58Z；SHA-256：e3c589e788200c12f2e325071bcc7602a49ec6e22d32dcc2fcdb920cf13b0436）
- https://raw.githubusercontent.com/socai-io/socai/HEAD/LICENSE（获取于 2026-10-18T15:48:22Z；SHA-256：e3c589e788200c12f2e325071bcc7602a49ec6e22d32dcc2fcdb920cf13b0436）
