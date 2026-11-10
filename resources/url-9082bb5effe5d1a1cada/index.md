---
title: "GUI-Libra 4B | AwesomeCUA"
url: https://awesomecua.com/resources/url-9082bb5effe5d1a1cada/
updated: 2026-10-18
type: model
lang: en
---

# GUI-Libra 4B

GUI-Libra checkpoint fine-tuned from Qwen3-VL-4B-Instruct (about 4.83B BF16 parameters) that turns a screenshot, task and action history into a <thinking> reasoning block and a JSON action with point_2d coordinates.

- Catalog URL: https://awesomecua.com/resources/url-9082bb5effe5d1a1cada/
- Original source: https://huggingface.co/GUI-Libra/GUI-Libra-4B
- Kind: model
- Review: curated
- Scope: core
- Environments: web, android
- Topics: grounding, action-prediction, web-navigation, mobile-navigation, reinforcement-learning
- Evidence checked: 2026-10-18T15:56:14Z
- ID: url:9082bb5effe5d1a1cada

## Limitations

The Hub manifest at revision 35fc6d34 lists 2 Safetensors shards with an index plus configuration and tokenizer files. The card's usage section serves the checkpoint through vLLM as an OpenAI-compatible endpoint and prompts it with a GUI action list (Click, Select, Write, KeyboardPress, Scroll). The paper link and the web and Android evaluation targets come from the official GitHub README, which the card links. Apache-2.0 is the card's weight declaration; the code repository's license and the training data's terms are separate.

- Record JSON: https://awesomecua.com/resources/url-9082bb5effe5d1a1cada/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: Apache-2.0 — https://huggingface.co/GUI-Libra/GUI-Libra-4B/raw/35fc6d34d1ffce801baefb0b693c5be13c4399eb/README.md

- weights review: Model-card metadata declaration (license: apache-2.0) for this checkpoint; the code repository's license and the training data's terms are separate.
  Sources: https://huggingface.co/GUI-Libra/GUI-Libra-4B/raw/35fc6d34d1ffce801baefb0b693c5be13c4399eb/README.md

## Primary evidence

- https://huggingface.co/GUI-Libra/GUI-Libra-4B/raw/35fc6d34d1ffce801baefb0b693c5be13c4399eb/README.md (retrieved 2026-10-18T15:56:14Z; SHA-256 f79b3b1b6b75a04fd41d8475bf76f1ad3bafa21a4bf85519f87709b7788d3308)
- https://huggingface.co/api/models/GUI-Libra/GUI-Libra-4B/revision/35fc6d34d1ffce801baefb0b693c5be13c4399eb (retrieved 2026-10-18T15:55:30Z; SHA-256 0a1b2bbd4ddab8a2b23af66e43053ffca379d14d29168de8e7510f5df0495dda)
- https://raw.githubusercontent.com/GUI-Libra/GUI-Libra/f3e9c78e5c6435d0fb39210191ce1ad284361120/README.md (retrieved 2026-10-18T15:55:29Z; SHA-256 f34c5bcf454368db37dde4bb2229fd14ae5e4a118684c6d7fbb6a25f9f246911)
- https://huggingface.co/GUI-Libra/GUI-Libra-4B/raw/35fc6d34d1ffce801baefb0b693c5be13c4399eb/README.md (retrieved 2026-10-18T15:56:14Z; SHA-256 f79b3b1b6b75a04fd41d8475bf76f1ad3bafa21a4bf85519f87709b7788d3308)
