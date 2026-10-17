# MobBench task definitions

A public set of real-device mobile task definitions used to evaluate MobA, with Chinese and English task material packaged in a versioned JSON release.

- Catalog URL: https://awesomecua.github.io/resources/url-b53e03a6e4ca4226d126/
- Original source: https://huggingface.co/datasets/OpenDFM/MobA-MobBench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: android
- Topics: evaluation, mobile-navigation
- Evidence checked: 2026-10-17T12:32:07Z
- ID: url:b53e03a6e4ca4226d126

## Limitations

The ungated manifest lists MobBench_tasks_release_v1.0.json and bilingual cards. The card reports fifty tasks; no sample records were downloaded to recount them. This release supplies task definitions and agent setup guidance, not an independently verified automatic judge or a bundled Android environment. The data card declares CC-BY-NC-SA-4.0; code and model licenses are separate.

- Record JSON: https://awesomecua.github.io/resources/url-b53e03a6e4ca4226d126/record.json

## Structured profile

- actions: mobile GUI actions through a separately configured agent
- evaluation: The publisher reports a fifty-task real-device evaluation; the inspected release does not establish an automatic correctness judge.
- focus: mobile task completion
- observations: Android device interface
- setting: interactive

### Count observations

- 50 tasks — MobBench tasks used in the paper (reported; source: https://huggingface.co/datasets/OpenDFM/MobA-MobBench/raw/main/README.md)

Task definitions are distinct from device images, agent execution and automated scoring.

## License declarations

- code: not recorded
- data: cc-by-nc-sa-4.0 — https://huggingface.co/datasets/OpenDFM/MobA-MobBench/raw/main/README.md
- document: not recorded
- weights: not recorded

- data review: Dataset-card declaration for the MobBench task-definition release only.
  Sources: https://huggingface.co/datasets/OpenDFM/MobA-MobBench/raw/main/README.md

## Primary evidence

- https://huggingface.co/datasets/OpenDFM/MobA-MobBench/raw/main/README.md (retrieved 2026-10-17T12:32:07Z; SHA-256 231a8f483256c774840c99383ab6536520a0aed0f04d62b4d64f1f59477b906e)
- https://huggingface.co/api/datasets/OpenDFM/MobA-MobBench (retrieved 2026-10-17T12:32:07Z; SHA-256 4e7225f956d7cee98fe671e7bfd91fc407d87dd805d8f0c11c3b0c839714ccf3)
