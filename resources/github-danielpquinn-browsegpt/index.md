# BrowseGPT

Chrome extension with a local Node.js server that lists the visible page's links, buttons and inputs as a numbered outline and asks OpenAI gpt-3.5-turbo for the next CLICK, ENTER_TEXT or NAVIGATE step toward a goal.

- Catalog URL: https://awesomecua.com/resources/github-danielpquinn-browsegpt/
- Original source: https://github.com/danielpquinn/browsegpt
- Kind: agent
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, automation
- Evidence checked: 2026-10-19T07:16:33Z
- ID: github:danielpquinn/browsegpt

## Limitations

Inspected at commit c86c148e (23 July 2024), the latest commit on the default branch. The content script assigns IDs to visible, in-viewport elements and sends the first 100 outline lines with the goal, URL and up to five previous steps to the server, whose few-shot prompt asks gpt-3.5-turbo for one JSON command with a reason; the extension then calls click(), enters text or changes the location. Each submission runs one step, and elements already acted on are left out of later outlines. The Manifest V3 extension is labelled version 2.0. The browsegpt.ai site and its llms.txt describe Claude Haiku 4.5 as the default model with OpenAI GPT as an option; the public repository's server calls only the OpenAI API. The Chrome Web Store build remains uninspected. The repository has no license file, so the code license is unknown. No code was run.

- Record JSON: https://awesomecua.com/resources/github-danielpquinn-browsegpt/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/danielpquinn/browsegpt/HEAD/README.md (retrieved 2026-10-19T07:16:33Z; SHA-256 b9fb78e90668bcdf178ed8370837dff0359b2841e659e3b977c8125cfcf50b74)
- https://api.github.com/repos/danielpquinn/browsegpt/git/trees/c86c148ec7862f971fe827e1270684b9c8c41016?recursive=1 (retrieved 2026-10-19T07:16:32Z; SHA-256 c62774e401dfeeb8345bceb4bce0bbe78bae756ee25617813401828f8052ac29)
- https://raw.githubusercontent.com/danielpquinn/browsegpt/c86c148ec7862f971fe827e1270684b9c8c41016/extension/content.js (retrieved 2026-10-19T06:15:41Z; SHA-256 3dbf1c8225ca5bdc2d3ab7c5c7678a564ab105d6bda589285aedfe6658fa9ad7)
- https://raw.githubusercontent.com/danielpquinn/browsegpt/c86c148ec7862f971fe827e1270684b9c8c41016/extension/main-vue.js (retrieved 2026-10-19T06:15:41Z; SHA-256 a64ba7f0038e262163f378df4e320371fc1231a80600883102810abf14c24a3e)
- https://raw.githubusercontent.com/danielpquinn/browsegpt/c86c148ec7862f971fe827e1270684b9c8c41016/server/lib.js (retrieved 2026-10-19T06:15:41Z; SHA-256 27446dfeb7b4e3f333360b2ec2a9869d258f1c4a2f91a89d054ea4da09dd461c)
- https://raw.githubusercontent.com/danielpquinn/browsegpt/c86c148ec7862f971fe827e1270684b9c8c41016/extension/manifest.json (retrieved 2026-10-19T06:15:41Z; SHA-256 ecb5c03ffde657405ed8ab4098430e4a9f33df21b5ded6be56c843d2940f8f80)
- https://browsegpt.ai/llms.txt (retrieved 2026-10-19T06:15:41Z; SHA-256 38cff1cc93e9fc68fa63038d9594027848d741111749cbaa47e18f98cb3c0995)
