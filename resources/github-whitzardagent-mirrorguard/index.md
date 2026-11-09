# MirrorGuard code

MirrorGuard pipeline that synthesizes risky and benign computer-use trajectories in a text-based GUI simulator, builds unsafe-to-safe thought corrections for training, and plugs the corrector into OSWorld-style agents.

- Catalog URL: https://awesomecua.com/resources/github-whitzardagent-mirrorguard/
- Original source: https://github.com/WhitzardAgent/MirrorGuard
- Kind: framework
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: safety-security, data-generation
- Evidence checked: 2026-10-19T06:50:26Z
- ID: github:whitzardagent/mirrorguard

## Limitations

Official WhitzardAgent code for the MirrorGuard paper. MirrorWorld task generation (task_generation/) and an LLM-driven GUI simulator (simulator.py) produce text-only trajectories; dataset_generation/safe_thought.py rewrites unsafe thoughts and prepare_dataset.py packages ShareGPT-style training files. The repository includes dataset_generation/train.jsonl (about 86 MB) and test.jsonl (2,439 lines, of which 16 are invalid standalone JSON), each holding a system prompt and a conversation. Integration examples cover replacement steering for a ReAct agent, prefilling steering for UI-TARS, and an Owl agent reference, written as OSWorld-style agent files; examples/shared/correction_runtime.py calls the deployed corrector through an OpenAI-compatible endpoint with the screenshot, history and original thought. The released MirrorGuard VLM is on Hugging Face. Unsafe-rate and OSWorld figures in the README are paper results; code was read.

- Record JSON: https://awesomecua.com/resources/github-whitzardagent-mirrorguard/record.json

## License declarations

- code: MIT — https://raw.githubusercontent.com/WhitzardAgent/MirrorGuard/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/WhitzardAgent/MirrorGuard/9c5fb812a126493c75b6adda757af3b680a24708/README.md (retrieved 2026-10-19T06:50:26Z; SHA-256 90ab7463e9d9c4d6c5e3b60acf385486ca1d9f09455aea0450b167406cfdf728)
- https://api.github.com/repos/WhitzardAgent/MirrorGuard/git/trees/9c5fb812a126493c75b6adda757af3b680a24708?recursive=1 (retrieved 2026-10-19T06:50:27Z; SHA-256 211b758a19e3b00b79b57bdc8f3f649687aa955195f5714be25693ed693ceb0f)
- https://raw.githubusercontent.com/WhitzardAgent/MirrorGuard/9c5fb812a126493c75b6adda757af3b680a24708/dataset_generation/test.jsonl (retrieved 2026-10-19T06:50:27Z; SHA-256 4c9079f876657bd3c2ff7d43629ab5e8d92eb14fa5132e422c28ff73e646c087)
- https://raw.githubusercontent.com/WhitzardAgent/MirrorGuard/9c5fb812a126493c75b6adda757af3b680a24708/examples/shared/correction_runtime.py (retrieved 2026-10-19T06:50:28Z; SHA-256 29a8e430e061f53a4ed958f1f48a7ebc5e6a5d7792cb65e423716da1946a4e23)
- https://raw.githubusercontent.com/WhitzardAgent/MirrorGuard/9c5fb812a126493c75b6adda757af3b680a24708/simulator.py (retrieved 2026-10-19T06:50:28Z; SHA-256 9554149045ab49a83727510e159d7cea448ab97ba1d4853aa632b6796e4b5dbf)
- https://raw.githubusercontent.com/WhitzardAgent/MirrorGuard/9c5fb812a126493c75b6adda757af3b680a24708/LICENSE (retrieved 2026-10-19T06:50:27Z; SHA-256 8bb263819f9a6ee87b8c7bc6d058c3c4b1d338835006d5b5089f53560c2bc770)
- https://raw.githubusercontent.com/WhitzardAgent/MirrorGuard/HEAD/LICENSE (retrieved 2026-10-19T06:51:27Z; SHA-256 8bb263819f9a6ee87b8c7bc6d058c3c4b1d338835006d5b5089f53560c2bc770)
