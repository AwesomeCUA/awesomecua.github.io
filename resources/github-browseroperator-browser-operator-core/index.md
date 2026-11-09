# Browser Operator

Chromium-based AI browser whose DevTools panel runs a multi-agent framework (web-task, action, form-fill, research and verification agents) over accessibility trees with OpenRouter, OpenAI, Groq or LiteLLM models.

- Catalog URL: https://awesomecua.com/resources/github-browseroperator-browser-operator-core/
- Original source: https://github.com/BrowserOperator/browser-operator-core
- Kind: agent
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, planning, memory
- Evidence checked: 2026-10-19T06:14:52Z
- ID: github:browseroperator/browser-operator-core

## Limitations

The repository is a modified Chrome DevTools frontend; the AI Chat panel holds the agent framework, accessibility-tree and extraction tools, memory, MCP client and evaluation code, and agent-server is a Node.js HTTP and WebSocket wrapper that sends tasks to agents and captures pages over CDP. The README offers macOS 10.15+ and Windows 10+ builds; the latest release is v0.6.0 (2025-12-11) and the last push was 2026-03-19. The LICENSE is the Chromium Authors' BSD-3-Clause text inherited from DevTools; third_party components keep their own terms.

- Record JSON: https://awesomecua.com/resources/github-browseroperator-browser-operator-core/record.json

## License declarations

- code: BSD-3-Clause — https://raw.githubusercontent.com/BrowserOperator/browser-operator-core/85da86c2a9421c44d682af0e627243b76d3df0ef/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: enrich does not recognize the comment-prefixed text, but it is the three-clause BSD license used by Chromium and the README declares BSD-3-Clause; models, browser builds and third-party components are not covered.
  Sources: https://raw.githubusercontent.com/BrowserOperator/browser-operator-core/85da86c2a9421c44d682af0e627243b76d3df0ef/LICENSE

## Primary evidence

- https://raw.githubusercontent.com/BrowserOperator/browser-operator-core/HEAD/README.md (retrieved 2026-10-19T06:14:52Z; SHA-256 1d3912f652635cda661e6e7c30d392aa587178d5923b7485620bdfcc2b249d46)
- https://raw.githubusercontent.com/BrowserOperator/browser-operator-core/85da86c2a9421c44d682af0e627243b76d3df0ef/front_end/panels/ai_chat/agent_framework/implementation/ConfiguredAgents.ts (retrieved 2026-10-18T12:03:03Z; SHA-256 a6912cb7177b0ec98c4181b067efa6f4d52fa19b189eb644dba53b4c31b36f50)
- https://raw.githubusercontent.com/BrowserOperator/browser-operator-core/85da86c2a9421c44d682af0e627243b76d3df0ef/front_end/panels/ai_chat/Readme.md (retrieved 2026-10-18T12:02:57Z; SHA-256 53a65ac8d6bccf74ffdcdafa03f9947c5cde0bd21b3d746c904c265027ce5a9d)
- https://raw.githubusercontent.com/BrowserOperator/browser-operator-core/85da86c2a9421c44d682af0e627243b76d3df0ef/agent-server/README.md (retrieved 2026-10-18T12:02:58Z; SHA-256 95e1d0b3672c8eab9846d4ec299b58817fdd89e4dc4de28bf50ea65654a189a8)
- https://raw.githubusercontent.com/BrowserOperator/browser-operator-core/85da86c2a9421c44d682af0e627243b76d3df0ef/LICENSE (retrieved 2026-10-18T12:02:57Z; SHA-256 ff11d445fb41a1087c7630e120ab15f1a2cb67c1b707173cb494141805fca35e)
