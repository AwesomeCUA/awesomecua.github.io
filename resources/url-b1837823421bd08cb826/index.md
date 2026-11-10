---
title: "OS-Genesis 4B AC | AwesomeCUA"
url: https://awesomecua.com/resources/url-b1837823421bd08cb826/
updated: 2026-10-18
type: model
lang: en
---

# OS-Genesis 4B AC

InternVL2-4B checkpoint fine-tuned on OS-Genesis AndroidControl trajectories; its card prompt pairs a screenshot and accessibility tree with the goal and action history to produce the next thought and action.

- Catalog URL: https://awesomecua.com/resources/url-b1837823421bd08cb826/
- Original source: https://huggingface.co/OS-Copilot/OS-Genesis-4B-AC
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, action-prediction, imitation-learning
- Evidence checked: 2026-10-18T16:04:12Z
- ID: url:b1837823421bd08cb826

## Limitations

This is the 4B AndroidControl (AC) task-specific checkpoint; the card calls it a mobile action model, and the 7B and 8B AC checkpoints and the AndroidWorld (AW) and web variants are separate releases, with results scoped to each release. The card prose, its YAML base_model field and config.json agree on InternVL2-4B, whose language model is Phi-3-mini (Phi3ForCausalLM). The card and the OS-Genesis repository README both list it among the AC family models used for the AndroidControl benchmark. Two public Safetensors shards are present and the Hub reports 4,146,868,224 BF16 parameters. The card declares Apache-2.0 for the checkpoint. No checkpoint was loaded and no result was reproduced.

- Record JSON: https://awesomecua.com/resources/url-b1837823421bd08cb826/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: Apache-2.0 — https://huggingface.co/OS-Copilot/OS-Genesis-4B-AC/raw/c73c72530fb7a9d7e482fbb96ad23b118a47e8c3/README.md

- weights review: Publisher model-card declaration for the checkpoint; base-model, code and training-data terms are separate.
  Sources: https://huggingface.co/OS-Copilot/OS-Genesis-4B-AC/raw/c73c72530fb7a9d7e482fbb96ad23b118a47e8c3/README.md

## Primary evidence

- https://huggingface.co/OS-Copilot/OS-Genesis-4B-AC/raw/c73c72530fb7a9d7e482fbb96ad23b118a47e8c3/README.md (retrieved 2026-10-18T16:04:12Z; SHA-256 db757573a6e4646207890032dffd6bc7592409063399b2dd8d1d0e706db18394)
- https://huggingface.co/api/models/OS-Copilot/OS-Genesis-4B-AC/revision/c73c72530fb7a9d7e482fbb96ad23b118a47e8c3 (retrieved 2026-10-18T16:03:42Z; SHA-256 212d8f3727374d3fb2f91de0381698199e05855d2206cf68498d36c22b213df4)
- https://huggingface.co/OS-Copilot/OS-Genesis-4B-AC/raw/c73c72530fb7a9d7e482fbb96ad23b118a47e8c3/config.json (retrieved 2026-10-18T16:03:42Z; SHA-256 bda54194dc2fa23a880791f0a7ce2d78cc1be849d745c0af67bbf96cbbb05a8c)
- https://raw.githubusercontent.com/OS-Copilot/OS-Genesis/72128850dad4ca9ba642ee7399794b4fb8f5154d/README.md (retrieved 2026-10-18T16:03:42Z; SHA-256 430e495ab250395d666854bd18b0fc29b819cd784cd7730215ef65e461834d0d)
- https://huggingface.co/OS-Copilot/OS-Genesis-4B-AC/raw/c73c72530fb7a9d7e482fbb96ad23b118a47e8c3/README.md (retrieved 2026-10-18T16:04:12Z; SHA-256 db757573a6e4646207890032dffd6bc7592409063399b2dd8d1d0e706db18394)
