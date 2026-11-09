# OSReward

Evaluator and collection code for OSReward, which tests VLM judges' SUCCESS/FAIL verdicts on human-labelled computer-use trajectories, plus web, Windows, Android and Ubuntu trajectory pipelines.

- Catalog URL: https://awesomecua.com/resources/github-os-copilot-osreward/
- Original source: https://github.com/OS-Copilot/OSReward
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web, desktop, windows, linux, android
- Topics: reward-models, evaluation, data-generation
- Evidence checked: 2026-10-20T07:40:03Z
- ID: github:os-copilot/osreward

## Limitations

Code for the OSReward paper; the trajectories themselves are released separately on Hugging Face as OS-Copilot/OSReward (the README reports 1,019 Full and 284 Hard trajectories with screenshots and human verdicts), alongside the gated OS-Shepherd-100K corpus and OS-Shepherd checkpoints. eval_pipeline/run_judge.py downloads the Full or Hard Parquet split (or reads local traces), sends a judge the full thought and action history and, by default, the last five screenshots with red markers at normalized action points, at temperature 0, through an OpenAI-compatible or native Anthropic API, and parses one 'Judge: SUCCESS' or 'Judge: FAIL' verdict per trajectory. It reports accuracy, balanced accuracy, SUCCESS and FAIL recall and coverage; missing, failed and unparseable outputs count as incorrect. Its subset option offers full, hard and custom, with no OSReward-Multi option, although the README roadmap lists Multi under the evaluation harness. trajectory_collection/ holds the collection pipelines: webtrail for live and self-hosted websites, a Windows Agent Arena based Windows 11 VM pipeline, an AndroidWorld based emulator pipeline, and an OSWorld based Ubuntu pipeline with a screenshot-only tool-call agent (the root README calls Ubuntu 'on the way' and the collection README calls it a placeholder, but its code is in the tree), plus export_judged_sft.py for judge-SFT bundles. benchmarking_analysis/ scores judges against the ground-truth labels of OSWorld, WindowsAgentArena, WebArena and AndroidWorld rollouts, with small samples under data/raw. The OS-Shepherd-100K construction pipeline and the OS-Shepherd training and inference code are listed as pending release. There is no root LICENSE; the bundled Windows and Android pipelines carry Microsoft's MIT and the Apache-2.0 license texts. Not a fork, not archived; no release.

- Record JSON: https://awesomecua.com/resources/github-os-copilot-osreward/record.json

## Structured profile

- actions: one SUCCESS or FAIL verdict per trajectory
- evaluation: Verdicts are compared with human gold labels; the evaluator reports accuracy, balanced accuracy, SUCCESS recall, FAIL recall and coverage, counting missing, API-error and unparseable outputs as incorrect.
- focus: reliability of VLM judges and reward models on computer-use trajectories, binary success verdicts
- observations: task instruction, full thought and action history, last five screenshots with red action-point markers (default)
- setting: offline

### Count observations

- 1,019 trajectories — OSReward Full split on Hugging Face (reported; source: https://raw.githubusercontent.com/OS-Copilot/OSReward/0e1e401910e4033c7d3dc2631dc7171dd3c99d9a/README.md)
- 284 trajectories — OSReward Hard split on Hugging Face (reported; source: https://raw.githubusercontent.com/OS-Copilot/OSReward/0e1e401910e4033c7d3dc2631dc7171dd3c99d9a/README.md)

Counts are as the README reports them for the Hugging Face release. Screenshot window, history mode, markers and temperature are evaluator defaults that can be changed by flags.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: The complete tree at the reviewed commit has no root license file; the MIT and Apache-2.0 texts under trajectory_collection/windows and trajectory_collection/mobile cover those bundled upstream-derived pipelines, not the whole repository.
  Sources: https://api.github.com/repos/OS-Copilot/OSReward/git/trees/0e1e401910e4033c7d3dc2631dc7171dd3c99d9a?recursive=1

## Primary evidence

- https://raw.githubusercontent.com/OS-Copilot/OSReward/HEAD/README.md (retrieved 2026-10-20T07:40:03Z; SHA-256 ea91d9df443f0dc23a7cf8f53e91adc0ac187c8472e8bfbe0b14bb3ed779083d)
- https://api.github.com/repos/OS-Copilot/OSReward/git/trees/0e1e401910e4033c7d3dc2631dc7171dd3c99d9a?recursive=1 (retrieved 2026-10-20T04:33:17Z; SHA-256 6522233e6807ed71417ba52358dfe6609c040e606260b056e0f7b1422d0bdf99)
- https://raw.githubusercontent.com/OS-Copilot/OSReward/0e1e401910e4033c7d3dc2631dc7171dd3c99d9a/README.md (retrieved 2026-10-20T04:33:21Z; SHA-256 ea91d9df443f0dc23a7cf8f53e91adc0ac187c8472e8bfbe0b14bb3ed779083d)
- https://raw.githubusercontent.com/OS-Copilot/OSReward/0e1e401910e4033c7d3dc2631dc7171dd3c99d9a/eval_pipeline/README.md (retrieved 2026-10-20T04:33:22Z; SHA-256 13bd46be73db879e77e073368c9a67fa308878074901bf0a43190a8754057704)
- https://raw.githubusercontent.com/OS-Copilot/OSReward/0e1e401910e4033c7d3dc2631dc7171dd3c99d9a/eval_pipeline/run_judge.py (retrieved 2026-10-20T04:33:22Z; SHA-256 6dc1ca1812a15b72ebf11145d53dddbda770b31b7a9df2093c0746cbc2a25598)
- https://raw.githubusercontent.com/OS-Copilot/OSReward/0e1e401910e4033c7d3dc2631dc7171dd3c99d9a/trajectory_collection/README.md (retrieved 2026-10-20T04:33:22Z; SHA-256 8044300c8f0a28ee1ebbce35294769b2837a287554dfa18c270d85251f582d4c)
- https://raw.githubusercontent.com/OS-Copilot/OSReward/0e1e401910e4033c7d3dc2631dc7171dd3c99d9a/trajectory_collection/ubuntu/README.md (retrieved 2026-10-20T04:33:22Z; SHA-256 c41a25d24a74a01cbb809df70edc0dacce8cd6a2bb0c34a77413269713bf7ee7)
- https://raw.githubusercontent.com/OS-Copilot/OSReward/0e1e401910e4033c7d3dc2631dc7171dd3c99d9a/benchmarking_analysis/README.md (retrieved 2026-10-20T04:33:23Z; SHA-256 99c9a201fab38897465f439688326bef7789b76dc92bd3f4555f4f252f47be8a)
