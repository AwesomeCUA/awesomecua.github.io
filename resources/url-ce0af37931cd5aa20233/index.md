---
title: "Tongyi UI Agent API | AwesomeCUA"
url: https://awesomecua.com/resources/url-ce0af37931cd5aa20233/
updated: 2026-10-19
type: product
lang: en
---

# Tongyi UI Agent API

Alibaba Cloud Model Studio API that returns the next GUI action with its reasoning for a screenshot and task, with a mobile pipeline and a PC pipeline using planner, worker, reflector and memory agents.

- Catalog URL: https://awesomecua.com/resources/url-ce0af37931cd5aa20233/
- Original source: https://help.aliyun.com/zh/model-studio/ui-agent-api
- Kind: product
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, windows
- Topics: mobile-navigation, automation, planning, self-reflection
- Evidence checked: 2026-10-19T06:31:54Z
- ID: url:ce0af37931cd5aa20233

## Limitations

The page (version V0.0.1) documents a DashScope endpoint for the gui-owl app that takes a screenshot URL, a task instruction, a session ID and optional operation hints (add_info), and returns the next action, such as a click or swipe with screen coordinates, with a thought and an explanation. Requests set device_type to mobile or pc and use the model pre-gui_owl_7b; the PC pipeline also names worker, manager, reflector and notetaker models and can enable the reflection and memory agents. The page states that the agent targets phones, in-car systems, TVs and PCs, names no mobile operating system, and lists usage as free for a limited time. The X-PLUG/MobileAgent README links this page as a limited-time free Mobile-Agent-v3 API; the page itself names no paper or released checkpoint, so no relation to the Mobile-Agent or GUI-Owl records is asserted. The receipt uses the Markdown export because the HTML embeds a per-request tracking ID.

- Record JSON: https://awesomecua.com/resources/url-ce0af37931cd5aa20233/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://help.aliyun.com/zh/model-studio/ui-agent-api.md (retrieved 2026-10-19T06:31:54Z; SHA-256 cb5bc5f73accb2e5e73cc3e1043ca741f371e50ea4784ddf6b207dfd5a66506a)
- https://raw.githubusercontent.com/X-PLUG/MobileAgent/11cea575561fb7800b5fb6b6cafa56f7a91de11f/README.md (retrieved 2026-10-19T06:31:53Z; SHA-256 ca402ffd3b05f72a6d72f47de52c962f92e410749a77939044f3301d4330af16)
