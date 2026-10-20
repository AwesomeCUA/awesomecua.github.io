# MemGUI-Agent

MemGUI-Agent training and offline evaluation tools provide trajectory conversion, LoRA SFT templates, and step-level checks of GUI actions, memory updates and context folding.

- Catalog URL: https://awesomecua.github.io/resources/github-kwai-memgui-agent/
- Original source: https://github.com/kwai/MemGUI-Agent
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: memory, interaction-history, long-horizon, imitation-learning, evaluation
- Evidence checked: 2026-10-20T03:54:57.854138+00:00
- ID: github:kwai/memgui-agent

## Limitations

The inspected release documentation describes dataset utilities, a LoRA SFT template and gold-step offline evaluation; live Android rollouts are explicitly outside that evaluator and linked to separate benchmark repositories. Executable source files, external datasets/checkpoints and reported results were not independently verified in this bounded review.

- Record JSON: https://awesomecua.github.io/resources/github-kwai-memgui-agent/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: The README declares Apache-2.0, but the inspected LICENSE is a short notice and link rather than the complete terms; the code license remains unconfirmed.
  Sources: https://raw.githubusercontent.com/kwai/MemGUI-Agent/main/LICENSE, https://raw.githubusercontent.com/kwai/MemGUI-Agent/main/README.md

## Primary evidence

- https://raw.githubusercontent.com/kwai/MemGUI-Agent/main/README.md (retrieved 2026-10-20T03:54:57.854138+00:00; SHA-256 3f7545f466407ed5336f47d18b12e8354ec352ff83dcf973b1545f81d9a629ac)
- https://raw.githubusercontent.com/kwai/MemGUI-Agent/main/evaluation/memgui3k_offline_eval/README.md (retrieved 2026-10-20T03:55:26.237759+00:00; SHA-256 4c92c584b6885a3bde8ee89d04ccf48287e7f6119889f75cde0c034c90bd8217)
- https://raw.githubusercontent.com/kwai/MemGUI-Agent/main/LICENSE (retrieved 2026-10-20T03:55:01.061844+00:00; SHA-256 d4e344274155be1d0a192c8ae2940169abb0bd8546d045b96b45810593860636)
- https://api.github.com/search/repositories?q=topic%3Agui-agent+is%3Apublic+fork%3Afalse+created%3A2008-01-01..2026-10-18&per_page=100&page=1&sort=updated&order=asc (retrieved 2026-10-19T19:10:26.954787+00:00; SHA-256 0ae4477b885b0915e43874399c2a6b91f7d07954697370204550df931f7db82c)
