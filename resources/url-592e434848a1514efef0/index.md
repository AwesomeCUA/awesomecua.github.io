---
title: "UIX-Qwen2-Mind2Web | AwesomeCUA"
url: https://awesomecua.com/resources/url-592e434848a1514efef0/
updated: 2026-10-18
type: model
lang: en
---

# UIX-Qwen2-Mind2Web

UIX-Qwen2 further fine-tuned on the Mind2Web training set; the MultiUI paper evaluates it on predicting the next web action from a screenshot, the task and previous actions.

- Catalog URL: https://awesomecua.com/resources/url-592e434848a1514efef0/
- Original source: https://huggingface.co/neulab/UIX-Qwen2-Mind2Web
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, action-prediction, grounding
- Evidence checked: 2026-10-18T16:06:26Z
- ID: url:592e434848a1514efef0

## Limitations

Hub API at revision cf1654a2 lists four root BF16 safetensors shards (about 8.03B parameters) whose config declares LlavaQwenForCausalLM with the google/siglip-so400m-patch14-384 vision tower; the repository is publicly accessible. It also keeps two intermediate training folders, checkpoint-565 and checkpoint-1130, each with its own weight shards plus scheduler, RNG and trainer state. The MultiUI README lists this repository as UIX-Qwen2-M2W on Qwen2-7B-Instruct. The paper marks -M2W models as further fine-tuned on the Mind2Web training set and reports publisher figures for step success rate and element accuracy for UIX-Qwen2-M2W on the cross-task, cross-website and cross-domain splits. The card declares odc-by, a data-oriented designation kept as the publisher's weight declaration; base-model terms are not resolved.

- Record JSON: https://awesomecua.com/resources/url-592e434848a1514efef0/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: odc-by — https://huggingface.co/neulab/UIX-Qwen2-Mind2Web/raw/cf1654a2df366e87c4ec80009bb958395afe3c35/README.md

## Primary evidence

- https://huggingface.co/neulab/UIX-Qwen2-Mind2Web/raw/cf1654a2df366e87c4ec80009bb958395afe3c35/README.md (retrieved 2026-10-18T16:06:26Z; SHA-256 62dc9d53441e2075355c39922ba4d158e488658c11950c3748676d1afdf287fa)
- https://huggingface.co/api/models/neulab/UIX-Qwen2-Mind2Web/revision/cf1654a2df366e87c4ec80009bb958395afe3c35 (retrieved 2026-10-18T16:05:53Z; SHA-256 ab55b10ee9e1daedda116e1ecd3dfa5fa6d37b2f0c62403c79c64dd57e1d9cd3)
- https://raw.githubusercontent.com/neulab/MultiUI/e261d8ad3d329a8b6e719cfd4f6a6d8e6df3cede/README.md (retrieved 2026-10-18T16:02:59Z; SHA-256 fe0c03fe73529a29788d559103c4aed48dca6ed9ba3bfd5f151f902fa8858b38)
- https://arxiv.org/html/2410.13824v3 (retrieved 2026-10-18T16:03:00Z; SHA-256 383ada0c47d09acea6b865ed67571c9540b2d602bd6b0ea8ad3130121efd190c)
- https://huggingface.co/neulab/UIX-Qwen2-Mind2Web/raw/cf1654a2df366e87c4ec80009bb958395afe3c35/config.json (retrieved 2026-10-18T16:06:17Z; SHA-256 5deaf05d45d21acaca2d43d129ffadfbda840902167dbaa83a86004d133f2c20)
- https://huggingface.co/neulab/UIX-Qwen2-Mind2Web/raw/cf1654a2df366e87c4ec80009bb958395afe3c35/README.md (retrieved 2026-10-18T16:06:26Z; SHA-256 62dc9d53441e2075355c39922ba4d158e488658c11950c3748676d1afdf287fa)
