---
title: "OpenMobile code | AwesomeCUA"
url: https://awesomecua.com/resources/github-njucckevin-openmobile-code/
updated: 2026-10-19
type: framework
lang: en
---

# OpenMobile code

OpenMobile pipeline for AndroidWorld: random-walk exploration, memory-based task-instruction synthesis, learner/expert policy-switching rollouts, conversion to LLaMA-Factory SFT data, and AndroidWorld evaluation.

- Catalog URL: https://awesomecua.com/resources/github-njucckevin-openmobile-code/
- Original source: https://github.com/njucckevin/OpenMobile-Code
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: data-generation, mobile-navigation, imitation-learning
- Evidence checked: 2026-10-19T06:53:33Z
- ID: github:njucckevin/openmobile-code

## Limitations

Official code of the OpenMobile paper (COLM 2026 per the README). AndroidWorld/ holds a modified AndroidWorld copy with exploration (random_walk_aw.py), rollout (run_diy.py), post-processing and evaluation scripts; task_synthesis/ builds screen context and environment memory and generates and judges instructions with a strong multimodal model; LlamaFactory/ registers the four released data splits and gives Qwen3-VL and Qwen3.5 SFT configs. The tree also contains an Android-Lab folder. The Qwen3VL agent in AndroidWorld/android_world/agents/seeact_v.py sends recent plain screenshots to an OpenAI-compatible endpoint and executes the returned mobile_use tool calls; UI-element metadata is saved for post-processing only. The policy-switching mode lets a strong model monitor a weaker actor and take over. The README's AndroidWorld success rates include Qwen3.5-9B results it identifies as unreproducible under vLLM.

- Record JSON: https://awesomecua.com/resources/github-njucckevin-openmobile-code/record.json

## License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/njucckevin/OpenMobile-Code/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/njucckevin/OpenMobile-Code/faca68f386aff7277cdf494c84693c51090229c6/README.md (retrieved 2026-10-19T06:53:33Z; SHA-256 8594e32aab90e0fdbaf436997e4082884423b6d3298f46247dcf0820e0499080)
- https://api.github.com/repos/njucckevin/OpenMobile-Code/git/trees/faca68f386aff7277cdf494c84693c51090229c6?recursive=1 (retrieved 2026-10-19T06:53:35Z; SHA-256 eb6fdd1db8dc4497999545d3f2cccdc8fe76a4adb2fd645801d0c15a7600b7fb)
- https://raw.githubusercontent.com/njucckevin/OpenMobile-Code/faca68f386aff7277cdf494c84693c51090229c6/AndroidWorld/android_world/agents/seeact_v.py (retrieved 2026-10-19T06:53:36Z; SHA-256 93d1727d85392961feeb885c55d3d6834d8ff9f7085c7a54754cff126feee0fd)
- https://raw.githubusercontent.com/njucckevin/OpenMobile-Code/faca68f386aff7277cdf494c84693c51090229c6/LlamaFactory/dataset_info.json (retrieved 2026-10-19T06:53:36Z; SHA-256 1c915333e2d61d34742eb6f669ca0a3721f7566ce79a2eecdb9706845bd53138)
- https://raw.githubusercontent.com/njucckevin/OpenMobile-Code/faca68f386aff7277cdf494c84693c51090229c6/LICENSE (retrieved 2026-10-19T06:53:35Z; SHA-256 b09fcaf4fbc265223c2479c410beef2b98c5e687c78ecedf3452aa12ffc465f1)
- https://raw.githubusercontent.com/njucckevin/OpenMobile-Code/HEAD/LICENSE (retrieved 2026-10-19T06:54:58Z; SHA-256 b09fcaf4fbc265223c2479c410beef2b98c5e687c78ecedf3452aa12ffc465f1)
