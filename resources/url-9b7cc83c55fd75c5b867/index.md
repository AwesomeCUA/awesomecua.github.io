---
title: "ScaleCUA (THUDM) Qwen3.5-9B OSWorld SFT | AwesomeCUA"
url: https://awesomecua.com/resources/url-9b7cc83c55fd75c5b867/
updated: 2026-10-18
type: model
lang: en
---

# ScaleCUA (THUDM) Qwen3.5-9B OSWorld SFT

Supervised Qwen3.5-9B checkpoint from THUDM's ScaleCUA, released as the start point that online RL initializes from for its OSWorld computer-use agent.

- Catalog URL: https://awesomecua.com/resources/url-9b7cc83c55fd75c5b867/
- Original source: https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-osworld-sft
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: action-prediction
- Evidence checked: 2026-10-18T16:08:23Z
- ID: url:9b7cc83c55fd75c5b867

## Limitations

Hub API at revision ff2508f6 lists four BF16 safetensors shards (about 9.41B parameters) in the Qwen3_5ForConditionalGeneration architecture, plus a training-state file iter_0001940/common.pt; the repository is publicly accessible. The card calls this the SFT start point used to initialize online RL and names Qwen3.5-9B as its base without Hub base_model metadata, so base_model is unset. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the base model's license; that license is not resolved here. The card reports no score for this checkpoint. The THUDM/SCALE-CUA README lists it among six SFT start-point checkpoints, each with a ModelScope mirror. This project is distinct from OpenGVLab/ScaleCUA.

- Record JSON: https://awesomecua.com/resources/url-9b7cc83c55fd75c5b867/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-osworld-sft/raw/ff2508f621e46efa7ec2d449a182ab9a9a0e9745/README.md

## Primary evidence

- https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-osworld-sft/raw/ff2508f621e46efa7ec2d449a182ab9a9a0e9745/README.md (retrieved 2026-10-18T16:08:23Z; SHA-256 7589b02e03bcfaf31709ea6b8c0263d17b935b21042f6694dcfe5b66efbc6937)
- https://huggingface.co/api/models/extreme1228/ScaleCUA-qwen3.5-osworld-sft/revision/ff2508f621e46efa7ec2d449a182ab9a9a0e9745 (retrieved 2026-10-18T16:08:05Z; SHA-256 e0accb8f68bfa0886c16b9842f29b9076c2860d3f8745c766f864f098ffe71dd)
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md (retrieved 2026-10-18T16:08:05Z; SHA-256 d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea)
- https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-osworld-sft/raw/ff2508f621e46efa7ec2d449a182ab9a9a0e9745/README.md (retrieved 2026-10-18T16:08:23Z; SHA-256 7589b02e03bcfaf31709ea6b8c0263d17b935b21042f6694dcfe5b66efbc6937)
