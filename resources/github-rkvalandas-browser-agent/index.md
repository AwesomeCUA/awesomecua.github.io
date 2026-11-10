---
title: "Browser Agent (github.com/rkvalandas/browser_a… | AwesomeCUA"
url: https://awesomecua.com/resources/github-rkvalandas-browser-agent/
updated: 2026-10-18
type: agent
lang: en
---

# Browser Agent

Python agent that attaches Playwright to a local Chrome over CDP, maps visible interactive elements from the DOM into numbered IDs, and lets an LLM navigate, click, type, select and ask the user for missing input.

- Catalog URL: https://awesomecua.com/resources/github-rkvalandas-browser-agent/
- Original source: https://github.com/rkvalandas/browser_agent
- Kind: agent
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, automation, human-in-the-loop
- Evidence checked: 2026-10-18T16:15:38Z
- ID: github:rkvalandas/browser_agent

## Limitations

Single-author personal project. browser/browser_setup.py connects to Chrome on localhost:9222 through connect_over_cdp and launches Chrome with remote debugging when none is running. browser/analyzers/page_analyzer.py runs a DOM script that classifies elements by tag and ARIA role, builds unique selectors and detects modal overlays; no screenshots are taken. docs/BROWSER_TOOLS.md documents the tool set (analyze_page, navigate, go_back, scroll, click, type, select_option, keyboard_action, ask_user). LLM backends are OpenAI, Azure OpenAI, Groq or Anthropic (agent/llm_providers.py). No evaluation results are published.

- Record JSON: https://awesomecua.com/resources/github-rkvalandas-browser-agent/record.json

## License declarations

- code: MIT — https://raw.githubusercontent.com/rkvalandas/browser_agent/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/rkvalandas/browser_agent/HEAD/Readme.md (retrieved 2026-10-18T16:15:38Z; SHA-256 7ba8cad538a338630440563c00bd72748cefef5e13a8d0c053ca6634c317c9e1)
- https://raw.githubusercontent.com/rkvalandas/browser_agent/2070c4eec9bbb0f55d63b4ac3728fd881c0de734/browser/analyzers/page_analyzer.py (retrieved 2026-10-18T16:15:27Z; SHA-256 0ec630731e58ca29f367a743cc15fbb02cbde52a4b82ffcb5f7a951c79cad832)
- https://raw.githubusercontent.com/rkvalandas/browser_agent/2070c4eec9bbb0f55d63b4ac3728fd881c0de734/browser/browser_setup.py (retrieved 2026-10-18T16:15:27Z; SHA-256 4c90f3ae2d6b3de04fba90e888c1694f61cf9ec59352822f8be62c56eeab65c6)
- https://raw.githubusercontent.com/rkvalandas/browser_agent/2070c4eec9bbb0f55d63b4ac3728fd881c0de734/docs/BROWSER_TOOLS.md (retrieved 2026-10-18T16:15:27Z; SHA-256 147c7d957c5ce03a7f431233565ac4427253e3928614e23f0355d09f8464665a)
- https://raw.githubusercontent.com/rkvalandas/browser_agent/2070c4eec9bbb0f55d63b4ac3728fd881c0de734/agent/llm_providers.py (retrieved 2026-10-18T16:15:27Z; SHA-256 700b76c889c23b1b889c5458fba238b0cb6c0ee12ad57b86d40a2117ddc075b4)
- https://raw.githubusercontent.com/rkvalandas/browser_agent/2070c4eec9bbb0f55d63b4ac3728fd881c0de734/LICENSE (retrieved 2026-10-18T16:15:27Z; SHA-256 09ea4c8909e48f4ccaad85df33c0e79b6ad27704422aee0c41efbb510f682b97)
- https://raw.githubusercontent.com/rkvalandas/browser_agent/HEAD/LICENSE (retrieved 2026-10-18T16:15:52Z; SHA-256 09ea4c8909e48f4ccaad85df33c0e79b6ad27704422aee0c41efbb510f682b97)
