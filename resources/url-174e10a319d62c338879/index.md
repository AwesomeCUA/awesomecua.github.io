---
title: "GroundNext-7B-V0 | AwesomeCUA"
url: https://awesomecua.com/resources/url-174e10a319d62c338879/
updated: 2026-10-18
type: model
lang: en
---

# GroundNext-7B-V0

GroundNext GUI-grounding checkpoint fine-tuned from Qwen2.5-VL-7B-Instruct with SFT then RLOO on GroundCUA desktop data; it maps a screenshot and instruction to a computer_use click call.

- Catalog URL: https://awesomecua.com/resources/url-174e10a319d62c338879/
- Original source: https://huggingface.co/ServiceNow/GroundNext-7B-V0
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, cross-platform
- Topics: grounding, reinforcement-learning
- Evidence checked: 2026-10-18T15:37:29Z
- ID: url:174e10a319d62c338879

## Limitations

The card's model is trained on desktop data only and reports publisher-run results on desktop grounding benchmarks and on mobile and web benchmarks (MMBench-GUI, ScreenSpot-v2). Its limitations say the model currently supports mouse clicks only, while the repository's groundcua.py system prompt declares a full computer_use tool schema with keyboard, scroll and drag actions. A 3B GroundNext model appears in the card's OSWorld table, but ServiceNow has not published a 3B checkpoint on the Hub. The Hub manifest lists four Safetensors shards and an index, and the API reports a Qwen2_5_VLForConditionalGeneration config with 8,292,166,656 BF16 parameters (the card states 7.0B). Apache-2.0 is the card's weight declaration and is not extended to the base model or training data.

- Record JSON: https://awesomecua.com/resources/url-174e10a319d62c338879/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/ServiceNow/GroundNext-7B-V0/raw/1c8864c5e64d04897b5d577711fccfc8782b65c0/README.md

## Primary evidence

- https://huggingface.co/ServiceNow/GroundNext-7B-V0/raw/1c8864c5e64d04897b5d577711fccfc8782b65c0/README.md (retrieved 2026-10-18T15:37:29Z; SHA-256 c655e19cc92de2b5794f629b885c1b6cc235457e75c71d7f60c78ca434a6fe4f)
- https://huggingface.co/api/models/ServiceNow/GroundNext-7B-V0?expand%5B%5D=sha&expand%5B%5D=gated&expand%5B%5D=disabled&expand%5B%5D=cardData&expand%5B%5D=config&expand%5B%5D=safetensors&expand%5B%5D=siblings&expand%5B%5D=lastModified (retrieved 2026-10-18T15:37:30Z; SHA-256 a43aea947bea033c19fd4a02f7a9881a728bd264745680f4efe99556fdfa7ee1)
- https://huggingface.co/ServiceNow/GroundNext-7B-V0/raw/1c8864c5e64d04897b5d577711fccfc8782b65c0/groundcua.py (retrieved 2026-10-18T15:37:30Z; SHA-256 8a6fbdd818e027f730677a63c03f7a0e02e7f548b48618a38cef8e7202006cca)
- https://huggingface.co/ServiceNow/GroundNext-7B-V0/raw/1c8864c5e64d04897b5d577711fccfc8782b65c0/README.md (retrieved 2026-10-18T15:37:29Z; SHA-256 c655e19cc92de2b5794f629b885c1b6cc235457e75c71d7f60c78ca434a6fe4f)
