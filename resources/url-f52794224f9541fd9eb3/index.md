# GUI-Libra 7B

GUI-Libra checkpoint fine-tuned from Qwen2.5-VL-7B-Instruct (about 8.29B BF16 parameters) that turns a screenshot, task and action history into a <think> reasoning block and a JSON action with point_2d coordinates.

- Catalog URL: https://awesomecua.com/resources/url-f52794224f9541fd9eb3/
- Original source: https://huggingface.co/GUI-Libra/GUI-Libra-7B
- Kind: model
- Review: curated
- Scope: core
- Environments: web, android
- Topics: grounding, action-prediction, web-navigation, mobile-navigation, reinforcement-learning
- Evidence checked: 2026-10-18T15:56:14Z
- ID: url:f52794224f9541fd9eb3

## Limitations

The Hub manifest at revision 0355b647 lists 4 Safetensors shards with an index plus configuration and tokenizer files; weights were not downloaded and no benchmark result was reproduced. The card's usage section serves the checkpoint through vLLM as an OpenAI-compatible endpoint and prompts it with a GUI action list (Click, Select, Write, KeyboardPress, Scroll). Its vllm serve command names GUI-Libra-4B rather than GUI-Libra-7B, while its Python example names GUI-Libra-7B. The paper link and the web and Android evaluation targets come from the official GitHub README, which the card links. Apache-2.0 is the card's weight declaration; the code repository's license and the training data's terms are separate.

- Record JSON: https://awesomecua.com/resources/url-f52794224f9541fd9eb3/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: Apache-2.0 — https://huggingface.co/GUI-Libra/GUI-Libra-7B/raw/0355b647f41136c65bd6c7f6705fba8e5a2e250a/README.md

- weights review: Model-card metadata declaration (license: apache-2.0) for this checkpoint; the code repository's license and the training data's terms are separate.
  Sources: https://huggingface.co/GUI-Libra/GUI-Libra-7B/raw/0355b647f41136c65bd6c7f6705fba8e5a2e250a/README.md

## Primary evidence

- https://huggingface.co/GUI-Libra/GUI-Libra-7B/raw/0355b647f41136c65bd6c7f6705fba8e5a2e250a/README.md (retrieved 2026-10-18T15:56:14Z; SHA-256 93e22f5ded472a60c66b812bd9a5c07ae93634c68195b4c9d36fca2dbc780f8d)
- https://huggingface.co/api/models/GUI-Libra/GUI-Libra-7B/revision/0355b647f41136c65bd6c7f6705fba8e5a2e250a (retrieved 2026-10-18T15:55:30Z; SHA-256 3e6048b720e7dc0e10a88eb5b34804a8e063cfa255813281157bce9dbe7981fc)
- https://raw.githubusercontent.com/GUI-Libra/GUI-Libra/f3e9c78e5c6435d0fb39210191ce1ad284361120/README.md (retrieved 2026-10-18T15:55:29Z; SHA-256 f34c5bcf454368db37dde4bb2229fd14ae5e4a118684c6d7fbb6a25f9f246911)
- https://huggingface.co/GUI-Libra/GUI-Libra-7B/raw/0355b647f41136c65bd6c7f6705fba8e5a2e250a/README.md (retrieved 2026-10-18T15:56:14Z; SHA-256 93e22f5ded472a60c66b812bd9a5c07ae93634c68195b4c9d36fca2dbc780f8d)
