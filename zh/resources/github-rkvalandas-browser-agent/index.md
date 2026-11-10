---
title: "Browser Agent (github.com/rkvalandas/bro… · 智能体 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-rkvalandas-browser-agent/
updated: 2026-10-18
type: agent
lang: zh-CN
---

# Browser Agent

Python 智能体通过 CDP 将 Playwright 连接到本地 Chrome，把 DOM 中可见交互元素映射为编号 ID，再由 LLM 浏览、点击、输入、选择并向用户询问缺失信息。

- 目录页面：https://awesomecua.com/zh/resources/github-rkvalandas-browser-agent/
- English：https://awesomecua.com/resources/github-rkvalandas-browser-agent/index.md
- 原始来源：https://github.com/rkvalandas/browser_agent
- 类型：智能体
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、自动化、人机协作
- 证据核查日期：2026-10-18T16:15:38Z
- ID：github:rkvalandas/browser_agent

## 范围记录

Single-author personal project. browser/browser_setup.py connects to Chrome on localhost:9222 through connect_over_cdp and launches Chrome with remote debugging when none is running. browser/analyzers/page_analyzer.py runs a DOM script that classifies elements by tag and ARIA role, builds unique selectors and detects modal overlays; no screenshots are taken. docs/BROWSER_TOOLS.md documents the tool set (analyze_page, navigate, go_back, scroll, click, type, select_option, keyboard_action, ask_user). LLM backends are OpenAI, Azure OpenAI, Groq or Anthropic (agent/llm_providers.py). No evaluation results are published.

- 完整记录 JSON：https://awesomecua.com/resources/github-rkvalandas-browser-agent/record.json

## 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/rkvalandas/browser_agent/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/rkvalandas/browser_agent/HEAD/Readme.md（获取于 2026-10-18T16:15:38Z；SHA-256：7ba8cad538a338630440563c00bd72748cefef5e13a8d0c053ca6634c317c9e1）
- https://raw.githubusercontent.com/rkvalandas/browser_agent/2070c4eec9bbb0f55d63b4ac3728fd881c0de734/browser/analyzers/page_analyzer.py（获取于 2026-10-18T16:15:27Z；SHA-256：0ec630731e58ca29f367a743cc15fbb02cbde52a4b82ffcb5f7a951c79cad832）
- https://raw.githubusercontent.com/rkvalandas/browser_agent/2070c4eec9bbb0f55d63b4ac3728fd881c0de734/browser/browser_setup.py（获取于 2026-10-18T16:15:27Z；SHA-256：4c90f3ae2d6b3de04fba90e888c1694f61cf9ec59352822f8be62c56eeab65c6）
- https://raw.githubusercontent.com/rkvalandas/browser_agent/2070c4eec9bbb0f55d63b4ac3728fd881c0de734/docs/BROWSER_TOOLS.md（获取于 2026-10-18T16:15:27Z；SHA-256：147c7d957c5ce03a7f431233565ac4427253e3928614e23f0355d09f8464665a）
- https://raw.githubusercontent.com/rkvalandas/browser_agent/2070c4eec9bbb0f55d63b4ac3728fd881c0de734/agent/llm_providers.py（获取于 2026-10-18T16:15:27Z；SHA-256：700b76c889c23b1b889c5458fba238b0cb6c0ee12ad57b86d40a2117ddc075b4）
- https://raw.githubusercontent.com/rkvalandas/browser_agent/2070c4eec9bbb0f55d63b4ac3728fd881c0de734/LICENSE（获取于 2026-10-18T16:15:27Z；SHA-256：09ea4c8909e48f4ccaad85df33c0e79b6ad27704422aee0c41efbb510f682b97）
- https://raw.githubusercontent.com/rkvalandas/browser_agent/HEAD/LICENSE（获取于 2026-10-18T16:15:52Z；SHA-256：09ea4c8909e48f4ccaad85df33c0e79b6ad27704422aee0c41efbb510f682b97）
