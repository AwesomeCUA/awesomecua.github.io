# Phi Browser

Chromium 浏览器的原生 macOS 客户端；其智能体 Spaces 允许内置助手或外部智能体在用户授权后通过 DevTools Protocol 套接字控制窗口，用户可观看并接管。

- 目录页面：https://awesomecua.com/zh/resources/github-phibrowser-phibrowser-mac/
- English：https://awesomecua.com/resources/github-phibrowser-phibrowser-mac/index.md
- 原始来源：https://github.com/phibrowser/phibrowser-mac
- 类型：基础设施
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面、macOS
- 主题：网页导航、人机协作、安全与防护
- 证据核查日期：2026-10-18T15:44:36Z
- ID：github:phibrowser/phibrowser-mac

## 范围记录

This is the open macOS client (Swift, AppKit and SwiftUI). Building it requires the prebuilt Phi Framework, the publisher's own Chromium build, whose source is not published and which the Apache-2.0 license does not cover; the built-in assistant's models, prompts and pipelines are server-side and not in this repository, and a self-built copy does not reach Phi Cloud. Sources/ChromiumBridge/AgentCDP/AgentCDPListener.swift owns a Unix-domain socket through which agent tools reach the browser's DevTools endpoint after per-agent user consent. tools/phi-browser-skill (SKILL.md, scripts/lib/cdp.mjs) is an Agent Skill that drives agent Spaces: hidden windows on a chosen profile that the user can watch, take over and hand back, or off-screen shadow windows. Privacy and local-model statements are publisher claims.

- 完整记录 JSON：https://awesomecua.com/resources/github-phibrowser-phibrowser-mac/record.json

## 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/phibrowser/phibrowser-mac/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/phibrowser/phibrowser-mac/HEAD/README.md（获取于 2026-10-18T15:44:36Z；SHA-256：e3220badbc2d7391a6eb799f8014f44d76156f2fb7f0bba581f74f0c8ff99128）
- https://raw.githubusercontent.com/phibrowser/phibrowser-mac/7ace23508bb9e2dceea393cd223628b14514681f/Sources/ChromiumBridge/AgentCDP/AgentCDPListener.swift（获取于 2026-10-18T15:44:22Z；SHA-256：4baeb23b56aa42d138b56775be3ee54d6ae9488e00901111035dfe6b620812d1）
- https://raw.githubusercontent.com/phibrowser/phibrowser-mac/7ace23508bb9e2dceea393cd223628b14514681f/tools/phi-browser-skill/SKILL.md（获取于 2026-10-18T15:44:22Z；SHA-256：b25192207cca26069c8dda437c49ec31bad26ddfd3c8e44c76eccb71410f707d）
- https://raw.githubusercontent.com/phibrowser/phibrowser-mac/7ace23508bb9e2dceea393cd223628b14514681f/tools/phi-browser-skill/scripts/lib/cdp.mjs（获取于 2026-10-18T15:44:22Z；SHA-256：1ea23ce373bdcca229f6aaf7c652ee8945aad2d07f77c3aa2fcb45d439b8090d）
- https://raw.githubusercontent.com/phibrowser/phibrowser-mac/7ace23508bb9e2dceea393cd223628b14514681f/LICENSE（获取于 2026-10-18T15:44:23Z；SHA-256：7c1eb6bf2936ea78c389fd1fa17e116364853a1577df105bc4db6fd929b849c3）
- https://raw.githubusercontent.com/phibrowser/phibrowser-mac/HEAD/LICENSE（获取于 2026-10-18T15:44:45Z；SHA-256：7c1eb6bf2936ea78c389fd1fa17e116364853a1577df105bc4db6fd929b849c3）
