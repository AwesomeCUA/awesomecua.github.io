---
title: "Gym-Anything | AwesomeCUA"
url: https://awesomecua.com/resources/github-cmu-l3-gym-anything/
updated: 2026-10-19
type: benchmark
lang: en
---

# Gym-Anything

Runtime and CUA-World task suite that turn real applications on Ubuntu, Windows 11, Android and macOS into screen-observing, mouse-and-keyboard agent environments with setup scripts and program verifiers.

- Catalog URL: https://awesomecua.com/resources/github-cmu-l3-gym-anything/
- Original source: https://github.com/cmu-l3/gym-anything
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: desktop, linux, windows, macos, android
- Topics: evaluation, sandbox, long-horizon
- Evidence checked: 2026-10-19T06:44:15Z
- ID: github:cmu-l3/gym-anything

## Limitations

Official code of the Gym-Anything paper. The README describes three parts that can be used separately: the core runtime (src/gym_anything), the CUA-World benchmark (benchmarks/cua_world) and reference agents for Claude, Gemini, Qwen, Kimi and other models. The inspected environment configs (Moodle, Power BI Desktop, an Android AVD calculator and macOS Finder) declare screen observations with mouse and keyboard actions on Ubuntu GNOME, Windows 11, Android AVD 34 and macOS bases; the Finder config also exposes a UI tree, and macOS environments sit in a separate benchmarks/cua_world-macos suite. A task such as moodle_env/enroll_student pairs setup and export hooks with a verifier.py program check and a VLM checklist file. extras/research/software_as_env/creation_audit implements the paper's environment creation-and-audit pipeline, driven by Claude Code by default or Codex CLI. Runners (Docker, Apptainer, QEMU, AVD, AVF, Modal, local and Sandweave) differ in caching, snapshot and recording support. Code was read.

- Record JSON: https://awesomecua.com/resources/github-cmu-l3-gym-anything/record.json

## Structured profile

- Actions / outputs: mouse, keyboard
- Evaluation: Each task's task.json names a program check (verifier.py) that runs after the episode, with pre-task setup and post-task export hooks; task folders also carry a VLM checklist file.
- Focus: long-horizon computer use in professional and enterprise software, conversion of arbitrary applications into agent environments
- Observations: screen frames, UI tree (some macOS environments)
- Setting: interactive

### Count observations

- 200 software applications — applications processed into CUA-World (paper v1 abstract) (reported; source: https://arxiv.org/abs/2604.06126v1)
- > 10,000 long-horizon tasks — CUA-World (paper v1 abstract) (reported; source: https://arxiv.org/abs/2604.06126v1)
- 7,150 tasks — verified split manifest benchmarks/cua_world/splits/verified.json at 4a8d967 (computed) (computed; source: https://raw.githubusercontent.com/cmu-l3/gym-anything/4a8d9672d92d8ff2daef232c4bf9c49d3ac4f2ca/benchmarks/cua_world/splits/verified.json)
- 191 environments — verified split manifest benchmarks/cua_world/splits/verified.json at 4a8d967 (computed) (computed; source: https://raw.githubusercontent.com/cmu-l3/gym-anything/4a8d9672d92d8ff2daef232c4bf9c49d3ac4f2ca/benchmarks/cua_world/splits/verified.json)

The paper's application and task totals and the repository's verified manifest are different populations; these counts are reported separately. Per-environment split files list train and test tasks, and several cover variant folders of one application; these counts are reported separately.

## License declarations

- code: MIT — https://raw.githubusercontent.com/cmu-l3/gym-anything/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/cmu-l3/gym-anything/4a8d9672d92d8ff2daef232c4bf9c49d3ac4f2ca/README.md (retrieved 2026-10-19T06:44:15Z; SHA-256 11821d717f09b17762937661eed9a2bcb80606ca765de1381f9047fe8c58cf9a)
- https://api.github.com/repos/cmu-l3/gym-anything/git/trees/4a8d9672d92d8ff2daef232c4bf9c49d3ac4f2ca (retrieved 2026-10-19T06:44:16Z; SHA-256 fb2aa984e243b90058d62435ade2aa2ad9e5a3729df6f293e1c9a536f9749f45)
- https://api.github.com/repos/cmu-l3/gym-anything/git/commits/4a8d9672d92d8ff2daef232c4bf9c49d3ac4f2ca (retrieved 2026-10-19T06:44:17Z; SHA-256 cd7d25da944d9deaf995e320d2c0b4752c194557b4fc53da8473c3afee4ec511)
- https://raw.githubusercontent.com/cmu-l3/gym-anything/4a8d9672d92d8ff2daef232c4bf9c49d3ac4f2ca/benchmarks/cua_world/splits/verified.json (retrieved 2026-10-19T06:44:17Z; SHA-256 727c6beaff1de5f36bea959037e7346453fb5d40b4817529fa31566acc7fbb04)
- https://raw.githubusercontent.com/cmu-l3/gym-anything/4a8d9672d92d8ff2daef232c4bf9c49d3ac4f2ca/benchmarks/cua_world/environments/moodle_env/env.json (retrieved 2026-10-19T06:44:17Z; SHA-256 ab0398ca5df1d7e8b41357f2a1966c3576f8d2bdd4c6c81db3249a51826a5d9b)
- https://raw.githubusercontent.com/cmu-l3/gym-anything/4a8d9672d92d8ff2daef232c4bf9c49d3ac4f2ca/benchmarks/cua_world/environments/moodle_env/tasks/enroll_student/task.json (retrieved 2026-10-19T06:44:17Z; SHA-256 0d6b81e193cc3a15269c1eb580b91f88c72e607173b21427f7f3ee13b67b9047)
- https://raw.githubusercontent.com/cmu-l3/gym-anything/4a8d9672d92d8ff2daef232c4bf9c49d3ac4f2ca/benchmarks/cua_world/environments/power_bi_desktop_env/env.json (retrieved 2026-10-19T06:44:17Z; SHA-256 f32ac8bb3b99e4ea9550994ac18700066138a2aaa3f835c3e30cce38ca2e6c1b)
- https://raw.githubusercontent.com/cmu-l3/gym-anything/4a8d9672d92d8ff2daef232c4bf9c49d3ac4f2ca/benchmarks/cua_world/environments/android_avd_calculator_env/env.json (retrieved 2026-10-19T06:44:17Z; SHA-256 d1aabfba25b6f586c3054a64bbd3e013b95ff4d012ffea3c2432bb4895e11660)
- https://raw.githubusercontent.com/cmu-l3/gym-anything/4a8d9672d92d8ff2daef232c4bf9c49d3ac4f2ca/benchmarks/cua_world-macos/environments/finder_env/env.json (retrieved 2026-10-19T06:44:17Z; SHA-256 85f6d078b5b9228bc1aa17b3f73ec3852db0a01a878979112ad2fc10bfedae8f)
- https://raw.githubusercontent.com/cmu-l3/gym-anything/4a8d9672d92d8ff2daef232c4bf9c49d3ac4f2ca/docs/content/docs/core/runners.mdx (retrieved 2026-10-19T06:44:17Z; SHA-256 0756ebcad68e10d820ce586d3b058a65e054f98d7f8540de5e80914e13620635)
- https://raw.githubusercontent.com/cmu-l3/gym-anything/4a8d9672d92d8ff2daef232c4bf9c49d3ac4f2ca/docs/content/docs/extras/creation-audit.mdx (retrieved 2026-10-19T06:44:57Z; SHA-256 201cb50510bf7b7c9f56bdbffb43f75baa1fc1cf24edce4c39f66ddd34461a37)
- https://raw.githubusercontent.com/cmu-l3/gym-anything/4a8d9672d92d8ff2daef232c4bf9c49d3ac4f2ca/LICENSE (retrieved 2026-10-19T06:44:18Z; SHA-256 d289e0e1ddfe766ba384068d7cf83848aaf07470f6482711c57ce12763072614)
- https://arxiv.org/abs/2604.06126v1 (retrieved 2026-10-19T06:44:18Z; SHA-256 89fe4dad54d6ef84e001d5b7c46375946223e1a3bf6a041ca2925a883e9a767a)
- https://raw.githubusercontent.com/cmu-l3/gym-anything/HEAD/LICENSE (retrieved 2026-10-19T06:45:58Z; SHA-256 d289e0e1ddfe766ba384068d7cf83848aaf07470f6482711c57ce12763072614)
