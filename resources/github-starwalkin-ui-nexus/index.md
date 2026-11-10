---
title: "UI-NEXUS | AwesomeCUA"
url: https://awesomecua.com/resources/github-starwalkin-ui-nexus/
updated: 2026-10-20
type: benchmark
lang: en
---

# UI-NEXUS

Compositional mobile-agent benchmark: 100 task templates chaining actions across local utility apps on an AndroidWorld-based emulator and online Chinese and English service apps, with emulator state-setup tooling.

- Catalog URL: https://awesomecua.com/resources/github-starwalkin-ui-nexus/
- Original source: https://github.com/StarWalkin/UI-NEXUS
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: android
- Topics: evaluation, mobile-navigation, long-horizon
- Evidence checked: 2026-10-20T07:41:49Z
- ID: github:starwalkin/ui-nexus

## Limitations

Official repository of the paper "Atomic-to-Compositional Generalization for Mobile Agents with A New Benchmark and Scheduling System" (named by title in the README). The task files are data/offline_English.csv (50 English tasks for UI-NEXUS-Anchor, the local utility app subset), data/online_Chinese.csv (25 tasks) and data/online_English.xlsx (25 tasks); each row has a category (Simple Concatenation, Context Transition or Deep Dive), the apps involved, a template and one instantiation. UI-NEXUS-Anchor reuses AndroidWorld's 20 apps on a Pixel 6, API 33 emulator; the repository bundles adapted copies of AndroidWorld and AndroidEnv (each with its Apache-2.0 license text), and the README also credits SPA-Bench's AndroidWorld adaptation. android_world/emulator_init sets app and system state (contacts, SMS, calendar, music, notes, settings) from JSON files; android_world/task_config holds representative configurations for five Anchor tasks (six files; one is filed under two categories), and the README says the complete set will follow. The README says the agent-running code is still being refactored, and neither the task files nor the state configurations carry success criteria, so the evaluation procedure cannot be reproduced from this repository. The README reports 30 online service apps and an average optimal length of 14.05 steps. There is no root license file. Not a fork, not archived; no release.

- Record JSON: https://awesomecua.com/resources/github-starwalkin-ui-nexus/record.json

## Structured profile

- Actions / outputs: agent-defined Android actions
- Evaluation: Not specified in the repository: the README defers the agent-running code, and neither the task files nor the state configurations carry success criteria.
- Focus: compositional multi-app mobile tasks, generalization from atomic to compositional tasks
- Observations: agent-defined observations of the Android emulator or device
- Setting: interactive

### Count observations

- 100 task templates — all task files (50 + 25 + 25 rows) (computed) (computed; source: https://raw.githubusercontent.com/StarWalkin/UI-NEXUS/c2ebeadc2c6821ecd246e097787efcc9a448b1b5/data/offline_English.csv)
- 50 task templates — UI-NEXUS-Anchor, English, local utility apps (data/offline_English.csv) (computed) (computed; source: https://raw.githubusercontent.com/StarWalkin/UI-NEXUS/c2ebeadc2c6821ecd246e097787efcc9a448b1b5/data/offline_English.csv)
- 25 task templates — online service apps, Chinese (data/online_Chinese.csv) (computed) (computed; source: https://raw.githubusercontent.com/StarWalkin/UI-NEXUS/c2ebeadc2c6821ecd246e097787efcc9a448b1b5/data/online_Chinese.csv)
- 25 task templates — online service apps, English (data/online_English.xlsx) (computed) (computed; source: https://raw.githubusercontent.com/StarWalkin/UI-NEXUS/c2ebeadc2c6821ecd246e097787efcc9a448b1b5/data/online_English.xlsx)

Template counts are data rows with distinct task IDs, counted with Python's csv module and by parsing the XLSX sheet XML. Anchor categories: Simple Concatenation 20, Context Transition 20, Deep Dive 10; each online file: Simple Concatenation 7, Context Transition 11, Deep Dive 7. Each row carries one instantiation of its template.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: The complete tree at the reviewed commit has no root license file; the Apache-2.0 texts under android_env and android_world cover those bundled adapted upstream packages, not the benchmark's own task data or scripts.
  Sources: https://api.github.com/repos/StarWalkin/UI-NEXUS/git/trees/c2ebeadc2c6821ecd246e097787efcc9a448b1b5?recursive=1

## Primary evidence

- https://raw.githubusercontent.com/StarWalkin/UI-NEXUS/HEAD/README.md (retrieved 2026-10-20T07:41:49Z; SHA-256 4a2ebb00b718b7aca9f4460827270d6e9828cc7ee9148a124ae663c6b1186f84)
- https://api.github.com/repos/StarWalkin/UI-NEXUS/git/trees/c2ebeadc2c6821ecd246e097787efcc9a448b1b5?recursive=1 (retrieved 2026-10-20T04:36:11Z; SHA-256 0ea9401ff29cf9fd9cc5adb4b084e77c09f25a2df0119e45a4bc056895c55fde)
- https://raw.githubusercontent.com/StarWalkin/UI-NEXUS/c2ebeadc2c6821ecd246e097787efcc9a448b1b5/README.md (retrieved 2026-10-20T04:36:15Z; SHA-256 4a2ebb00b718b7aca9f4460827270d6e9828cc7ee9148a124ae663c6b1186f84)
- https://raw.githubusercontent.com/StarWalkin/UI-NEXUS/c2ebeadc2c6821ecd246e097787efcc9a448b1b5/data/offline_English.csv (retrieved 2026-10-20T04:36:15Z; SHA-256 c37e589a077131149f1d1a292500b60354e5c2ff401494422d36cda8ccbe1b2d)
- https://raw.githubusercontent.com/StarWalkin/UI-NEXUS/c2ebeadc2c6821ecd246e097787efcc9a448b1b5/data/online_Chinese.csv (retrieved 2026-10-20T04:36:17Z; SHA-256 815766e4ba5fa6111289ad66fabc6bdc44ed5ea9af40052e4388b27781771472)
- https://raw.githubusercontent.com/StarWalkin/UI-NEXUS/c2ebeadc2c6821ecd246e097787efcc9a448b1b5/data/online_English.xlsx (retrieved 2026-10-20T04:36:17Z; SHA-256 819efeb7ea389ff0a340d717e0b39ae5ab89bf7ebcad1b45dac8acf414f5b111)
- https://raw.githubusercontent.com/StarWalkin/UI-NEXUS/c2ebeadc2c6821ecd246e097787efcc9a448b1b5/android_world/emulator_init/README.md (retrieved 2026-10-20T04:36:18Z; SHA-256 29d7bcb1df1d7264d685945a580e0238cef82a9e1d3fbae9b2cfffba8a3e5c86)
