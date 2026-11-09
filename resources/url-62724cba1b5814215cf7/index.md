# WebVIA-Agent

GLM-4.1V-9B-based web exploration agent from WebVIA that reads a page screenshot and DOM tree and picks click, type or select actions to reach each interactive UI state for UI-to-code work.

- Catalog URL: https://awesomecua.com/resources/url-62724cba1b5814215cf7/
- Original source: https://huggingface.co/zai-org/WebVIA-Agent
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, data-generation, ui-design
- Evidence checked: 2026-10-18T12:16:11Z
- ID: url:62724cba1b5814215cf7

## Limitations

In the linked code repository, the agent launcher sends the page's DOM tree with element IDs and a screenshot to a configurable OpenAI-compatible endpoint and parses click[id], enter[id][text] and select[id][text] actions from the reply, so this checkpoint is served separately. Hub API at revision d6ee0ce1 lists four BF16 safetensors shards (about 10.29B parameters) in the Glm4vForConditionalGeneration architecture; access is open. GitHub reports no license for the code repository. The card declares MIT for the checkpoint.

- Record JSON: https://awesomecua.com/resources/url-62724cba1b5814215cf7/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/zai-org/WebVIA-Agent/raw/d6ee0ce156bc194a4f9ddcd1c4827544321c9db2/README.md

## Primary evidence

- https://huggingface.co/zai-org/WebVIA-Agent/raw/d6ee0ce156bc194a4f9ddcd1c4827544321c9db2/README.md (retrieved 2026-10-18T12:16:11Z; SHA-256 1b2a79a5d45c3e3524b624e04dc3dce1a4d53d8bcd76da3151ba5a92ea9fba49)
- https://huggingface.co/api/models/zai-org/WebVIA-Agent/revision/d6ee0ce156bc194a4f9ddcd1c4827544321c9db2 (retrieved 2026-10-18T12:16:12Z; SHA-256 5d7f0dce7579dc1d4c6fe3a82568cec7187c8ef5ee70e27e1b8482ba574f246a)
- https://raw.githubusercontent.com/zheny2751-dotcom/WebVIA/1b228001e8b24f0cab8d9e00a9f6e7ae521d6c67/code/agent/start_agent.py (retrieved 2026-10-18T12:16:12Z; SHA-256 79b219bd4a415a6bac297acf2aefb786d0789e8daad386c6ed6cf831be0a77a1)
- https://huggingface.co/zai-org/WebVIA-Agent/raw/d6ee0ce156bc194a4f9ddcd1c4827544321c9db2/README.md (retrieved 2026-10-18T12:16:11Z; SHA-256 1b2a79a5d45c3e3524b624e04dc3dce1a4d53d8bcd76da3151ba5a92ea9fba49)
