---
title: "OS-Genesis 4B AW | AwesomeCUA"
url: https://awesomecua.com/resources/url-a2362e23fdcbc73763e6/
updated: 2026-10-19
type: model
lang: en
---

# OS-Genesis 4B AW

InternVL2-4B checkpoint fine-tuned on OS-Genesis AndroidWorld trajectories; its card prompt pairs a screenshot and accessibility tree with the goal and action history to produce the next thought and action.

- Catalog URL: https://awesomecua.com/resources/url-a2362e23fdcbc73763e6/
- Original source: https://huggingface.co/OS-Copilot/OS-Genesis-4B-AW
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, action-prediction, imitation-learning
- Evidence checked: 2026-10-19T06:18:22Z
- ID: url:a2362e23fdcbc73763e6

## Limitations

This is the 4B AndroidWorld (AW) task-specific checkpoint; the 7B and 8B AW checkpoints and the AndroidControl (AC) and web variants are separate releases, with results scoped to each release. The card prose, its YAML base_model field and config.json agree on InternVL2-4B, whose language model is Phi-3-mini (Phi3ForCausalLM). The card's table caption mentions the AndroidControl Benchmark, while its evaluation link and the OS-Genesis repository README place the AW checkpoints under AndroidWorld. Two public Safetensors shards are present and the Hub reports 4,146,868,224 BF16 parameters. The card declares Apache-2.0 for the checkpoint. No checkpoint was loaded and no result was reproduced.

- Record JSON: https://awesomecua.com/resources/url-a2362e23fdcbc73763e6/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: Apache-2.0 — https://huggingface.co/OS-Copilot/OS-Genesis-4B-AW/raw/004b6a2aced3cde9d57be11508f78d8178ed4d09/README.md

- weights review: Publisher model-card declaration for the checkpoint; base-model, code and training-data terms are separate.
  Sources: https://huggingface.co/OS-Copilot/OS-Genesis-4B-AW/raw/004b6a2aced3cde9d57be11508f78d8178ed4d09/README.md

## Primary evidence

- https://huggingface.co/OS-Copilot/OS-Genesis-4B-AW/raw/004b6a2aced3cde9d57be11508f78d8178ed4d09/README.md (retrieved 2026-10-19T06:18:22Z; SHA-256 e362f6baabfa23d366d8fe27c0cf7277a47aeb1da9ba5f15c96ea0b2c0d49a63)
- https://huggingface.co/api/models/OS-Copilot/OS-Genesis-4B-AW/revision/004b6a2aced3cde9d57be11508f78d8178ed4d09 (retrieved 2026-10-19T06:18:22Z; SHA-256 a26e69689546a2e4ddee5460bbe2fa55679c5fd557098f7e679cdbe323a00015)
- https://huggingface.co/OS-Copilot/OS-Genesis-4B-AW/raw/004b6a2aced3cde9d57be11508f78d8178ed4d09/config.json (retrieved 2026-10-18T15:54:46Z; SHA-256 bda54194dc2fa23a880791f0a7ce2d78cc1be849d745c0af67bbf96cbbb05a8c)
- https://raw.githubusercontent.com/OS-Copilot/OS-Genesis/72128850dad4ca9ba642ee7399794b4fb8f5154d/README.md (retrieved 2026-10-18T15:54:47Z; SHA-256 430e495ab250395d666854bd18b0fc29b819cd784cd7730215ef65e461834d0d)
- https://huggingface.co/OS-Copilot/OS-Genesis-4B-AW/raw/004b6a2aced3cde9d57be11508f78d8178ed4d09/README.md (retrieved 2026-10-19T06:18:22Z; SHA-256 e362f6baabfa23d366d8fe27c0cf7277a47aeb1da9ba5f15c96ea0b2c0d49a63)
