---
title: "Qwen-AgentWorld | AwesomeCUA"
url: https://awesomecua.com/resources/github-qwenlm-qwen-agentworld/
updated: 2026-11-10
type: model
lang: en
---

# Qwen-AgentWorld

A language world model that predicts the next environment observation across seven domains, including Android screens, browser pages and desktop accessibility trees, released with AgentWorldBench evaluation code.

- Catalog URL: https://awesomecua.com/resources/github-qwenlm-qwen-agentworld/
- Original source: https://github.com/QwenLM/Qwen-AgentWorld
- Kind: model
- Review: curated
- Scope: adjacent
- Environments: android, web, desktop, cross-platform
- Topics: world-models, evaluation, reinforcement-learning
- Evidence checked: 2026-11-10T03:01:00Z
- ID: github:qwenlm/qwen-agentworld

## Limitations

The repository holds the AgentWorldBench evaluation script (eval/eval.py) and per-domain world-model and judge system prompts; the Qwen-AgentWorld-35B-A3B weights (MoE, 35B total, 3B active, 256K context) and the AgentWorldBench dataset are hosted on Hugging Face. The README reports training on more than 10M interaction trajectories and gives SGLang, vLLM and Transformers usage.

- Record JSON: https://awesomecua.com/resources/github-qwenlm-qwen-agentworld/record.json

## License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/QwenLM/Qwen-AgentWorld/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/QwenLM/Qwen-AgentWorld/cd0aa83dc7a9c733695eb9c4652e0a68b6e6ecde/README.md (retrieved 2026-11-10T03:01:00Z; SHA-256 9d1998bc98242b63ab640e6905e13672b72dfae3ff7063a85580a23f04dbeeee)
- https://raw.githubusercontent.com/QwenLM/Qwen-AgentWorld/HEAD/LICENSE (retrieved 2026-11-10T02:08:18Z; SHA-256 3e047f3880a1d65c98cd5ee9cf07f433aa3a4a9b9fc9547cf200f6b1a8586d4a)
