---
title: "VSC-RL code | AwesomeCUA"
url: https://awesomecua.com/resources/github-ai-agents-2030-vsc-rl/
updated: 2026-10-19
type: framework
lang: en
---

# VSC-RL code

VSC-RL training code for Android in the Wild tasks: Gemini-generated subgoals condition an Auto-UI policy trained online in emulators with learned critics and a Gemini end-state evaluator, built on DigiRL.

- Catalog URL: https://awesomecua.com/resources/github-ai-agents-2030-vsc-rl/
- Original source: https://github.com/ai-agents-2030/VSC_RL
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: reinforcement-learning, planning, mobile-navigation
- Evidence checked: 2026-10-19T06:58:12Z
- ID: github:ai-agents-2030/vsc_rl

## Limitations

The README presents the repository as the implementation for reproducing VSC-RL on the AitW benchmarks, built on DigiRL, and names vscrl/algorithms/vscrl/trainer.py and subgoal_generator.py as the core files, with example generated subgoals for the general task set. The project page links this repository and arXiv 2502.07949. subgoal_generator.py prompts Gemini with a downscaled screenshot and a one-shot example to split a task into subtasks. The Android environment (vscrl/environment/android/env.py) drives emulators through Appium and returns screenshots; evaluate.py judges task completion with Gemini 1.5 Pro from the final screenshots. The default config selects the AitW general or web-shopping task set, Auto-UI-Base as the policy and roberta-base as the critic; emulator setup follows DigiRL's instructions. No license file is present.

- Record JSON: https://awesomecua.com/resources/github-ai-agents-2030-vsc-rl/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: The repository tree has no license file and the README states no license.
  Sources: https://api.github.com/repos/ai-agents-2030/VSC_RL/git/trees/401d793efa6ab54aa6ff3634590e03c2f13fe487?recursive=1

## Primary evidence

- https://raw.githubusercontent.com/ai-agents-2030/VSC_RL/401d793efa6ab54aa6ff3634590e03c2f13fe487/README.md (retrieved 2026-10-19T06:58:12Z; SHA-256 36f2f34b8a09839a4b221107d2946cc49c1c4a3a5fc9339182d5ad1779ecc373)
- https://api.github.com/repos/ai-agents-2030/VSC_RL/git/trees/401d793efa6ab54aa6ff3634590e03c2f13fe487?recursive=1 (retrieved 2026-10-19T06:58:14Z; SHA-256 4642117bc56e5ede1f0c0a3cf98ec4c61d90332534278f364af0eda4583f934b)
- https://raw.githubusercontent.com/ai-agents-2030/VSC_RL/401d793efa6ab54aa6ff3634590e03c2f13fe487/subgoal_generator.py (retrieved 2026-10-19T06:58:16Z; SHA-256 1024260b7eeb3c8d6b83c3ba171f84f9eb04743640e09ef40cec2ac045839b88)
- https://raw.githubusercontent.com/ai-agents-2030/VSC_RL/401d793efa6ab54aa6ff3634590e03c2f13fe487/vscrl/environment/android/evaluate.py (retrieved 2026-10-19T06:58:16Z; SHA-256 3b6c145f5bbc054ba66fb813c6ffd02c027d81f1ffaaa6766742b803fdddeb7d)
- https://raw.githubusercontent.com/ai-agents-2030/VSC_RL/401d793efa6ab54aa6ff3634590e03c2f13fe487/vscrl/environment/android/env.py (retrieved 2026-10-19T06:58:18Z; SHA-256 d17c4727f0a0afa95cdae09d490aaf573917345e3c3b39f2b7c136b8dd4d4646)
- https://raw.githubusercontent.com/ai-agents-2030/VSC_RL/401d793efa6ab54aa6ff3634590e03c2f13fe487/scripts/config/main/default.yaml (retrieved 2026-10-19T06:58:18Z; SHA-256 0613f266683adc2c59d7511ee2923d94b68359aabce41945e8469b06cb54c883)
- https://ai-agents-2030.github.io/VSC-RL/ (retrieved 2026-10-19T06:58:18Z; SHA-256 051df85a1ed6c481d84022855ea4bfc28db35e5668d8812e032ee83fc81f8792)
