# GUI-Libra 8B

GUI-Libra checkpoint fine-tuned from Qwen3-VL-8B-Instruct (about 8.77B BF16 parameters) that turns a screenshot, task and action history into a <thinking> reasoning block and a JSON action with point_2d coordinates.

- Catalog URL: https://awesomecua.com/resources/url-6694391b0cf50389d2e9/
- Original source: https://huggingface.co/GUI-Libra/GUI-Libra-8B
- Kind: model
- Review: curated
- Scope: core
- Environments: web, android
- Topics: grounding, action-prediction, web-navigation, mobile-navigation, reinforcement-learning
- Evidence checked: 2026-10-18T15:56:14Z
- ID: url:6694391b0cf50389d2e9

## Limitations

The Hub manifest at revision 15ee285b lists 4 Safetensors shards with an index plus configuration and tokenizer files. The card's usage section serves the checkpoint through vLLM as an OpenAI-compatible endpoint and prompts it with a GUI action list (Click, Select, Write, KeyboardPress, Scroll). The paper link and the web and Android evaluation targets come from the official GitHub README, which the card links. Apache-2.0 is the card's weight declaration; the code repository's license and the training data's terms are separate.

- Record JSON: https://awesomecua.com/resources/url-6694391b0cf50389d2e9/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: Apache-2.0 — https://huggingface.co/GUI-Libra/GUI-Libra-8B/raw/15ee285bc1e279eee1b7ea5e953b7dd823e6dbd3/README.md

- weights review: Model-card metadata declaration (license: apache-2.0) for this checkpoint; the code repository's license and the training data's terms are separate.
  Sources: https://huggingface.co/GUI-Libra/GUI-Libra-8B/raw/15ee285bc1e279eee1b7ea5e953b7dd823e6dbd3/README.md

## Primary evidence

- https://huggingface.co/GUI-Libra/GUI-Libra-8B/raw/15ee285bc1e279eee1b7ea5e953b7dd823e6dbd3/README.md (retrieved 2026-10-18T15:56:14Z; SHA-256 3167bb98de26f8706db1cde493ebbc04031c48d7946b122552a60d8aa772469d)
- https://huggingface.co/api/models/GUI-Libra/GUI-Libra-8B/revision/15ee285bc1e279eee1b7ea5e953b7dd823e6dbd3 (retrieved 2026-10-18T15:55:31Z; SHA-256 8a17da30a39508a921bbe7be37ee686ad8517582667cc905785393291c94e78f)
- https://raw.githubusercontent.com/GUI-Libra/GUI-Libra/f3e9c78e5c6435d0fb39210191ce1ad284361120/README.md (retrieved 2026-10-18T15:55:29Z; SHA-256 f34c5bcf454368db37dde4bb2229fd14ae5e4a118684c6d7fbb6a25f9f246911)
- https://huggingface.co/GUI-Libra/GUI-Libra-8B/raw/15ee285bc1e279eee1b7ea5e953b7dd823e6dbd3/README.md (retrieved 2026-10-18T15:56:14Z; SHA-256 3167bb98de26f8706db1cde493ebbc04031c48d7946b122552a60d8aa772469d)
