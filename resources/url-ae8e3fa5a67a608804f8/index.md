---
title: "GUI-Libra 3B | AwesomeCUA"
url: https://awesomecua.com/resources/url-ae8e3fa5a67a608804f8/
updated: 2026-10-18
type: model
lang: en
---

# GUI-Libra 3B

GUI-Libra checkpoint fine-tuned from Qwen2.5-VL-3B-Instruct (about 4.07B BF16 parameters) that turns a screenshot, task and action history into a <think> reasoning block and a JSON action with point_2d coordinates.

- Catalog URL: https://awesomecua.com/resources/url-ae8e3fa5a67a608804f8/
- Original source: https://huggingface.co/GUI-Libra/GUI-Libra-3B
- Kind: model
- Review: curated
- Scope: core
- Environments: web, android
- Topics: grounding, action-prediction, web-navigation, mobile-navigation, reinforcement-learning
- Evidence checked: 2026-10-18T15:56:14Z
- ID: url:ae8e3fa5a67a608804f8

## Limitations

The Hub manifest at revision 98ec8af3 lists 2 Safetensors shards with an index plus configuration and tokenizer files. The card's usage section serves the checkpoint through vLLM as an OpenAI-compatible endpoint and prompts it with a GUI action list (Click, Select, Write, KeyboardPress, Scroll). Its vllm serve command names GUI-Libra-4B, while its Python example names GUI-Libra-3B. The paper link and the web and Android evaluation targets come from the official GitHub README, which the card links. Apache-2.0 is the card's weight declaration; the code repository's license and the training data's terms are separate.

- Record JSON: https://awesomecua.com/resources/url-ae8e3fa5a67a608804f8/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: Apache-2.0 — https://huggingface.co/GUI-Libra/GUI-Libra-3B/raw/98ec8af3939dbfa87e9e39082c7edbb1c1e7ee1f/README.md

- weights review: Model-card metadata declaration (license: apache-2.0) for this checkpoint; the code repository's license and the training data's terms are separate.
  Sources: https://huggingface.co/GUI-Libra/GUI-Libra-3B/raw/98ec8af3939dbfa87e9e39082c7edbb1c1e7ee1f/README.md

## Primary evidence

- https://huggingface.co/GUI-Libra/GUI-Libra-3B/raw/98ec8af3939dbfa87e9e39082c7edbb1c1e7ee1f/README.md (retrieved 2026-10-18T15:56:14Z; SHA-256 e678c8bb953de37182a69d60aa8c8fd7c9dd273fcd9cee457e8d2447b4b9feab)
- https://huggingface.co/api/models/GUI-Libra/GUI-Libra-3B/revision/98ec8af3939dbfa87e9e39082c7edbb1c1e7ee1f (retrieved 2026-10-18T15:55:30Z; SHA-256 2cae2eed1c4d3c6551b737d48d7cfaad1c87413292530753c0ea80a8a1877755)
- https://raw.githubusercontent.com/GUI-Libra/GUI-Libra/f3e9c78e5c6435d0fb39210191ce1ad284361120/README.md (retrieved 2026-10-18T15:55:29Z; SHA-256 f34c5bcf454368db37dde4bb2229fd14ae5e4a118684c6d7fbb6a25f9f246911)
- https://huggingface.co/GUI-Libra/GUI-Libra-3B/raw/98ec8af3939dbfa87e9e39082c7edbb1c1e7ee1f/README.md (retrieved 2026-10-18T15:56:14Z; SHA-256 e678c8bb953de37182a69d60aa8c8fd7c9dd273fcd9cee457e8d2447b4b9feab)
