# Holo2 30B-A3B

Mixture-of-experts Holo2 checkpoint fine-tuned from Qwen3-VL-30B-A3B-Thinking through supervised and online RL stages for UI element localization and multi-step navigation on web, desktop and mobile screens.

- Catalog URL: https://awesomecua.com/resources/url-ed8d5883c240b78e329f/
- Original source: https://huggingface.co/Hcompany/Holo2-30B-A3B
- Kind: model
- Review: curated
- Scope: core
- Environments: web, desktop, cross-platform
- Topics: grounding, planning, action-prediction, reinforcement-learning
- Evidence checked: 2026-10-18T16:06:57Z
- ID: url:ed8d5883c240b78e329f

## Limitations

Hub API at revision 81dfb86d lists 13 BF16 safetensors shards (about 31.07B parameters) and config.json declares Qwen3VLMoeForConditionalGeneration with 128 experts, 8 active per token; the repository is publicly accessible. The card YAML declares CC-BY-NC-4.0 and its size list marks the 30B-A3B as research-only and non-commercial, while a generic 'Apache 2.0' line in the shared family text applies to the 4B and 8B sizes. H Company's models page lists Holo2 at 4B, 8B and 30B-A3B under CC BY-NC 4.0. Navigation and localization scores on the card were measured by the publisher inside its Surfer 2 agent.

- Record JSON: https://awesomecua.com/resources/url-ed8d5883c240b78e329f/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: CC-BY-NC-4.0 — https://huggingface.co/Hcompany/Holo2-30B-A3B/raw/81dfb86d56aef36d2b1d53870328e97eb107cdc8/README.md

- weights review: The card YAML declares cc-by-nc-4.0 and the card marks Holo2-30B-A3B as research-only (non-commercial); its generic Apache 2.0 line covers the 4B and 8B sizes and is not applied to this checkpoint.
  Sources: https://huggingface.co/Hcompany/Holo2-30B-A3B/raw/81dfb86d56aef36d2b1d53870328e97eb107cdc8/README.md

## Primary evidence

- https://huggingface.co/Hcompany/Holo2-30B-A3B/raw/81dfb86d56aef36d2b1d53870328e97eb107cdc8/README.md (retrieved 2026-10-18T16:06:57Z; SHA-256 1c6013e3162ce129946c156bd827cc7d21ab33355b997cc11825b25f68cc377c)
- https://huggingface.co/api/models/Hcompany/Holo2-30B-A3B/revision/81dfb86d56aef36d2b1d53870328e97eb107cdc8 (retrieved 2026-10-18T16:06:57Z; SHA-256 51245a56fc3139e759c2ad9fdd66c682021be18709e0917827822f5d9c7e5f06)
- https://huggingface.co/Hcompany/Holo2-30B-A3B/raw/81dfb86d56aef36d2b1d53870328e97eb107cdc8/config.json (retrieved 2026-10-18T16:06:57Z; SHA-256 1503651c977346f2c5569e49a58e68dbd97e18540aafc55c6be6617dd56e7464)
- https://hcompany.ai/research/models (retrieved 2026-10-18T16:06:57Z; SHA-256 ddfa335cd71d0a7a4e61640752b1b24830f951a72c175e88fd03bf00a5e783c8)
- https://huggingface.co/Hcompany/Holo2-30B-A3B/raw/81dfb86d56aef36d2b1d53870328e97eb107cdc8/README.md (retrieved 2026-10-18T16:06:57Z; SHA-256 1c6013e3162ce129946c156bd827cc7d21ab33355b997cc11825b25f68cc377c)
