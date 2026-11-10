---
title: "Login Machine · 智能体 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-richardhruby-login-machine/
updated: 2026-10-18
type: agent
lang: zh-CN
---

# Login Machine

面向网站登录的浏览器智能体循环：Claude 根据截图和精简 HTML 判断登录界面，并返回经 DOM 验证的 Playwright 定位器；用户输入的凭据不发送给模型。

- 目录页面：https://awesomecua.com/zh/resources/github-richardhruby-login-machine/
- English：https://awesomecua.com/resources/github-richardhruby-login-machine/index.md
- 原始来源：https://github.com/RichardHruby/login-machine
- 类型：智能体
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、人机协作、安全与防护
- 证据核查日期：2026-10-18T12:26:18Z
- ID：github:richardhruby/login-machine

## 范围记录

Built by @RichardHruby and @jesse-olympus at Anon as a Next.js app. Each step sends a JPEG screenshot and form-relevant HTML (walking into shadow roots) to claude-sonnet-4-5-20250929, which returns one of six typed screen states (credential_login_form, choice_screen, magic_login_link, loading_screen, blocked_screen, logged_in_screen) with Playwright locators; locators unresolved in the live DOM are fed back for up to three analysis attempts. Browsers are Browserbase sessions reached over CDP, so Anthropic and Browserbase keys are required. The user supplies credentials, choices and magic links through the chat UI, and Playwright types or clicks them. package.json is a private app (login-machine 0.1.0); a hosted demo is linked from the README.

- 完整记录 JSON：https://awesomecua.com/resources/github-richardhruby-login-machine/record.json

## 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/RichardHruby/login-machine/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/RichardHruby/login-machine/HEAD/README.md（获取于 2026-10-18T12:26:18Z；SHA-256：917691af2168f99e281551d00819c0125f178355a4b76e9a8172dbb520a4c4be）
- https://api.github.com/repos/RichardHruby/login-machine/git/commits/e1da92965029ce23bfc372f4483ed7c55ba84736（获取于 2026-10-18T12:26:18Z；SHA-256：3dd4d7a23842da95003e3452dde81eb7a814fbcf679e92216febc1f3c25b343b）
- https://raw.githubusercontent.com/RichardHruby/login-machine/e1da92965029ce23bfc372f4483ed7c55ba84736/src/lib/ai-login/agent.ts（获取于 2026-10-18T12:26:19Z；SHA-256：07924cbc22126327ae31f4acae001d818386d512f0b0fbfaa6dbab4e721b9618）
- https://raw.githubusercontent.com/RichardHruby/login-machine/e1da92965029ce23bfc372f4483ed7c55ba84736/src/lib/ai-login/browser.ts（获取于 2026-10-18T12:26:19Z；SHA-256：b007559f084f25fc8d9faa4d502511d9a9b8ac42c83f006468281364593da1d0）
- https://raw.githubusercontent.com/RichardHruby/login-machine/e1da92965029ce23bfc372f4483ed7c55ba84736/src/lib/ai-login/types.ts（获取于 2026-10-18T12:26:19Z；SHA-256：f9ba3dc39c6497c0c68990881d32a59878b96053bc10c6b65f2fc496d4cd11bd）
- https://raw.githubusercontent.com/RichardHruby/login-machine/HEAD/LICENSE（获取于 2026-10-18T12:26:44Z；SHA-256：c268300fd627deb702f7647767590e36184083a5e23e40cb76ecbe07fbfe5132）
