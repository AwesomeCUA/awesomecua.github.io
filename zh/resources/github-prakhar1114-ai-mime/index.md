---
title: "AI Mime · 智能体 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-prakhar1114-ai-mime/
updated: 2026-10-20
type: agent
lang: zh-CN
---

# AI Mime

macOS 应用录制演示任务，由智能体将其编译为包含脚本、浏览器 CDP 步骤和计算机使用回退机制的可移植技能，并在重跑失败时修补该技能。

- 目录页面：https://awesomecua.com/zh/resources/github-prakhar1114-ai-mime/
- English：https://awesomecua.com/resources/github-prakhar1114-ai-mime/index.md
- 原始来源：https://github.com/prakhar1114/ai_mime
- 类型：智能体
- 审核状态：已审核
- 范围：核心
- 运行环境：macOS、桌面、网页
- 主题：录制、工作流、自动化、鲁棒性
- 证据核查日期：2026-10-20T08:40:23Z
- ID：github:prakhar1114/ai_mime

## 范围记录

Requires macOS 13 or newer, Python 3.12 and Accessibility, Screen Recording and Input Monitoring permissions; Windows support remains pending. The recorder (pynput listeners and mss screenshots) writes a manifest of clicks, typing, hotkeys and scrolls with pre-action screenshots, plus optional extract and detail notes. Reflection turns the trace into a coordinate-free schema.json; an optimizer writes optimized_plan.json, preferring script steps, then browser_harness steps (Chrome CDP through a browser-harness git submodule), then ui_agent steps; a build agent packages a Claude Skill-compatible folder with run.sh, inputs and a fallback plan. The ui_agent drives the Mac in the foreground through cua-computer-server MCP tools, which AI Mime extends with combined screenshot-plus-accessibility-tree reads, and is told to target accessibility elements before screenshot coordinates. Agent runtimes are Anthropic (Claude Code) or OpenAI (Codex), selected during onboarding, with custom providers in user_config.yml. A prebuilt macOS DMG is linked from the README.

- 完整记录 JSON：https://awesomecua.com/resources/github-prakhar1114-ai-mime/record.json

## 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/prakhar1114/ai_mime/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/prakhar1114/ai_mime/HEAD/README.md（获取于 2026-10-20T08:40:23Z；SHA-256：75bc7660d005f5407470449ddb466695192c3cf56c1052f026ac9449cc299916）
- https://raw.githubusercontent.com/prakhar1114/ai_mime/0d5e9d3168cdde02d43448fa4a80521ebac3501d/README.md（获取于 2026-10-20T08:38:51Z；SHA-256：75bc7660d005f5407470449ddb466695192c3cf56c1052f026ac9449cc299916）
- https://raw.githubusercontent.com/prakhar1114/ai_mime/0d5e9d3168cdde02d43448fa4a80521ebac3501d/docs/architecture.md（获取于 2026-10-20T08:38:54Z；SHA-256：72484de01db7cae978b1a0b8d5efcbe186b16297f3cfbaf471c2541edc3a8452）
- https://raw.githubusercontent.com/prakhar1114/ai_mime/0d5e9d3168cdde02d43448fa4a80521ebac3501d/src/ai_mime/agent_runner/computer_use.py（获取于 2026-10-20T08:39:01Z；SHA-256：33a8ecce99dc84b106a94a6946cec5e11c742c0c66acdaa9e95d06a737a41e21）
- https://raw.githubusercontent.com/prakhar1114/ai_mime/0d5e9d3168cdde02d43448fa4a80521ebac3501d/src/ai_mime/computer_server_custom.py（获取于 2026-10-20T08:39:09Z；SHA-256：8107c5ddd0c3890875ab492a0075adfd308fb9df75e2d82c8e046c86a616c2cd）
- https://raw.githubusercontent.com/prakhar1114/ai_mime/0d5e9d3168cdde02d43448fa4a80521ebac3501d/src/ai_mime/record/capture.py（获取于 2026-10-20T08:40:06Z；SHA-256：a424dc623f967b6d40ee8c9369fd5c19a73345853ff84cac0bec69fd852dbddb）
- https://raw.githubusercontent.com/prakhar1114/ai_mime/0d5e9d3168cdde02d43448fa4a80521ebac3501d/pyproject.toml（获取于 2026-10-20T08:39:12Z；SHA-256：e30cdf0b24abf56cf7465e115dae74f3438e183356e5b3ec82c3531ed068d4b5）
- https://raw.githubusercontent.com/prakhar1114/ai_mime/0d5e9d3168cdde02d43448fa4a80521ebac3501d/LICENSE（获取于 2026-10-20T08:39:22Z；SHA-256：9f31d9ff0d3bb24073544e54810ab69bc51f713d2e61334a0a1fa19978cda8da）
- https://raw.githubusercontent.com/prakhar1114/ai_mime/HEAD/LICENSE（获取于 2026-10-20T08:41:20Z；SHA-256：9f31d9ff0d3bb24073544e54810ab69bc51f713d2e61334a0a1fa19978cda8da）
