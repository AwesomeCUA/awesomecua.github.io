---
title: "LFM2-350M-ComputerUse | AwesomeCUA"
url: https://awesomecua.com/resources/url-b68b02b47c87f006533e/
updated: 2026-11-10
type: model
lang: en
---

# LFM2-350M-ComputerUse

LoRA adapter for LFM2-350M trained with GRPO to click a button on the MiniWoB click-test task, reading the page as a BrowserGym accessibility tree and acting in a sandboxed browser.

- Catalog URL: https://awesomecua.com/resources/url-b68b02b47c87f006533e/
- Original source: https://huggingface.co/DingoBeast/LFM2-350M-ComputerUse
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: reinforcement-learning, web-navigation
- Evidence checked: 2026-11-10T03:01:13Z
- ID: url:b68b02b47c87f006533e

## Limitations

The repository holds adapter_model.safetensors and a checkpoint-100 folder with optimizer and scheduler state. Per the README, training used LoRA rank 8 and alpha 16 for 100 iterations with up to 10 browser actions per episode on Modal GPUs; the card's quick-start example is generic text generation.

- Record JSON: https://awesomecua.com/resources/url-b68b02b47c87f006533e/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/api/models/DingoBeast/LFM2-350M-ComputerUse (retrieved 2026-11-10T03:01:13Z; SHA-256 d0cb149920714b972e2b5405d2bea012ba5ecbbc9c2645aa8e57c8ed3138dd6f)
- https://huggingface.co/api/models/DingoBeast/LFM2-350M-ComputerUse (retrieved 2026-11-10T03:01:13Z; SHA-256 d0cb149920714b972e2b5405d2bea012ba5ecbbc9c2645aa8e57c8ed3138dd6f)
