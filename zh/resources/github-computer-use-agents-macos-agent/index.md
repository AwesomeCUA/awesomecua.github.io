---
title: "MacOS Agent (BIGAI) · 智能体 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-computer-use-agents-macos-agent/
updated: 2026-10-19
type: agent
lang: zh-CN
---

# MacOS Agent (BIGAI)

macOS 智能体使用 smolagents 代码智能体调度各应用子智能体；子智能体读取无障碍树和窗口截图，通过 pyautogui 鼠标与键盘输入执行操作。

- 目录页面：https://awesomecua.com/zh/resources/github-computer-use-agents-macos-agent/
- English：https://awesomecua.com/resources/github-computer-use-agents-macos-agent/index.md
- 原始来源：https://github.com/Computer-use-agents/MacOS-Agent
- 类型：智能体
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、macOS
- 主题：跨应用、规划、自动化
- 证据核查日期：2026-10-19T06:14:40Z
- ID：github:computer-use-agents/macos-agent

## 范围记录

Released by the Computer-use-agents organization; the project page credits the BIGAI ML Group. macosagent/macosagent.py builds a smolagents CodeAgent whose tools are ten app agents (macosagent/agents/__init__.py): Browser, Calendar, Excel, Finder, Player, PowerPoint, Preview, TextEdit, WeChat and Word. The browser agent wraps the external browser-use library (agents/browser_agent/browser.py). In the Calendar agent, the window is captured with screencapture, interactive elements from the macOS accessibility API are drawn as numbered boxes on that screenshot, and the image plus element list go to the model (calendar/calendar.py, calendar/context.py, calendar/utils.py, agent/service.py); clicks and typing use pyautogui and pynput (controller/service.py). The Excel agent likewise clicks and types with pyautogui and runs AppleScript to save and close workbooks (excel_agent/controller/service.py). The README's License section names CC BY-NC 4.0, but the inspected tree has no license file.

- 完整记录 JSON：https://awesomecua.com/resources/github-computer-use-agents-macos-agent/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 代码审核：The README's License section names CC BY-NC 4.0, but the inspected tree at the reviewed commit has no license file, so no source-license grant is recorded.
  来源：https://raw.githubusercontent.com/Computer-use-agents/MacOS-Agent/HEAD/README.md, https://api.github.com/repos/Computer-use-agents/MacOS-Agent/git/trees/a047656cbfecd0d7067661ed9c1ed718027d052a?recursive=1

## 一手证据

- https://raw.githubusercontent.com/Computer-use-agents/MacOS-Agent/HEAD/README.md（获取于 2026-10-19T06:14:40Z；SHA-256：13b2e3d4a2b2d3fa6af976bf6e3a37c95e0198c981ca082f2295f3da3d4fe0be）
- https://api.github.com/repos/Computer-use-agents/MacOS-Agent/git/trees/a047656cbfecd0d7067661ed9c1ed718027d052a?recursive=1（获取于 2026-10-19T06:14:39Z；SHA-256：eef72bdba62410ffbe6313e3d80f44fce69134d7b21f9b561b4ef945e4987427）
- https://raw.githubusercontent.com/Computer-use-agents/MacOS-Agent/a047656cbfecd0d7067661ed9c1ed718027d052a/macosagent/macosagent.py（获取于 2026-10-18T16:04:04Z；SHA-256：28f74e7e8f15f6dfadfc3fa379bc1b3eb354dd184ba0a4f9607f17c031547422）
- https://raw.githubusercontent.com/Computer-use-agents/MacOS-Agent/a047656cbfecd0d7067661ed9c1ed718027d052a/macosagent/agents/__init__.py（获取于 2026-10-18T16:04:04Z；SHA-256：0887e9fcb53039e886f60e869104bb4bd2a3be8eb27719f554a62c72ff361f0b）
- https://raw.githubusercontent.com/Computer-use-agents/MacOS-Agent/a047656cbfecd0d7067661ed9c1ed718027d052a/macosagent/agents/browser_agent/browser.py（获取于 2026-10-18T16:04:04Z；SHA-256：a39edf46c7a1e304a8bf10c04d6a0682cebf31f6686d6d35b045a92675dc4490）
- https://raw.githubusercontent.com/Computer-use-agents/MacOS-Agent/a047656cbfecd0d7067661ed9c1ed718027d052a/macosagent/agents/calendar_agent/calendar/calendar.py（获取于 2026-10-18T16:04:05Z；SHA-256：0cd47d5c73b34f8d226aaa716dae58fca3a8dde85849878bcbc39322b22ea0f0）
- https://raw.githubusercontent.com/Computer-use-agents/MacOS-Agent/a047656cbfecd0d7067661ed9c1ed718027d052a/macosagent/agents/calendar_agent/calendar/context.py（获取于 2026-10-18T16:04:05Z；SHA-256：72416f838c5858f5ec5e9099a043a9d45c89c44ca86bcd9593595bfdb5c1446f）
- https://raw.githubusercontent.com/Computer-use-agents/MacOS-Agent/a047656cbfecd0d7067661ed9c1ed718027d052a/macosagent/agents/calendar_agent/calendar/utils.py（获取于 2026-10-18T16:05:22Z；SHA-256：d7e4d38936e1492de86a482f23e84b5c4eb2bb548f1b80ebd3adb27a32d70396）
- https://raw.githubusercontent.com/Computer-use-agents/MacOS-Agent/a047656cbfecd0d7067661ed9c1ed718027d052a/macosagent/agents/calendar_agent/agent/service.py（获取于 2026-10-18T16:04:05Z；SHA-256：26a2502e4e952ea08b68adb79cec2f297ecfe2e2fd847b7ec521ca57215cfc0c）
- https://raw.githubusercontent.com/Computer-use-agents/MacOS-Agent/a047656cbfecd0d7067661ed9c1ed718027d052a/macosagent/agents/calendar_agent/controller/service.py（获取于 2026-10-18T16:04:05Z；SHA-256：0870d1830bfb53cfa8458d7acfbb84091fe1702005c70e882c25004136d7ccc4）
- https://raw.githubusercontent.com/Computer-use-agents/MacOS-Agent/a047656cbfecd0d7067661ed9c1ed718027d052a/macosagent/agents/excel_agent/controller/service.py（获取于 2026-10-18T16:04:57Z；SHA-256：976d625d7dbe171af7ae467904d5f736b61f68ad50af9f4e6c576658512b4375）
- https://raw.githubusercontent.com/Computer-use-agents/MacOS-Agent/a047656cbfecd0d7067661ed9c1ed718027d052a/pyproject.toml（获取于 2026-10-18T16:04:06Z；SHA-256：fa1f717d5392934603ff9e4d9466a92fb875da2a0165e2ba8ff01fb1cf4f1c6e）
- https://computer-use-agents.github.io/macos/（获取于 2026-10-18T16:04:07Z；SHA-256：23b1260ed59a7c103368885d661f2f4975fc6e244b200292324d79c6384032f5）
