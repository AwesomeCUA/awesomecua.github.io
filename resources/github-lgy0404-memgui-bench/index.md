# MemGUI-Bench

Memory-centric Android benchmark of 128 tasks across 26 apps, run in Dockerized emulators on a MobileWorld-style runtime and judged by MemGUI-Eval, an LLM evaluator reporting pass@k and memory metrics.

- Catalog URL: https://awesomecua.com/resources/github-lgy0404-memgui-bench/
- Original source: https://github.com/lgy0404/MemGUI-Bench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: android
- Topics: evaluation, memory, long-horizon, cross-app
- Evidence checked: 2026-10-19T07:05:14Z
- ID: github:lgy0404/memgui-bench

## Limitations

Official benchmark code for the MemGUI-Bench paper (ACM MM 2026 per the README). The mg CLI pulls a prebuilt Docker runtime with the Android emulator and the MemGUI AVD snapshot, launches parallel backend containers on a Linux host with KVM, runs agents through MobileWorld's agent interface (src/mobile_world) and writes MobileWorld-format trajectories with screenshots. MemGUI-Eval (memgui_eval/) describes each step with a multimodal model and makes a final decision with a second model; the leaderboard uses Gemini 2.5 Flash and Gemini 2.5 Pro for these roles. Each task CSV row gives the app(s), difficulty, whether UI memory is required and golden steps; the default step budget is int(golden_steps * 2.5 + 1). The Hugging Face dataset lgy0404/MemGUI-Bench holds the same two task CSV files (byte-identical at revisions 217713e and 3fb01b6), so it is recorded as an alias. Agent results in the README and leaderboard were not reproduced.

- Record JSON: https://awesomecua.com/resources/github-lgy0404-memgui-bench/record.json

## Structured profile

- actions: MobileWorld JSON actions
- evaluation: MemGUI-Eval: an LLM step-description model and a final-decision model judge each trajectory; reported metrics are pass@K, information retrieval rate (IRR), failure recovery rate (FRR), memory task performance ratio (MTPR), step ratio, time per step and cost per step.
- focus: memory-intensive mobile GUI tasks, cross-app long-horizon tasks
- observations: screenshots
- setting: interactive

### Count observations

- 128 tasks — data/memgui-tasks-all.csv at 3fb01b6 (full benchmark) (computed) (computed; source: https://raw.githubusercontent.com/lgy0404/MemGUI-Bench/3fb01b6cc0d13e287c67f488c76f449df7d65558/data/memgui-tasks-all.csv)
- 40 tasks — data/memgui-tasks-40.csv at 3fb01b6 (quick-test subset) (computed) (computed; source: https://raw.githubusercontent.com/lgy0404/MemGUI-Bench/3fb01b6cc0d13e287c67f488c76f449df7d65558/data/memgui-tasks-40.csv)
- 26 applications — data/memgui-tasks-all.csv at 3fb01b6 (full benchmark) (computed) (computed; source: https://raw.githubusercontent.com/lgy0404/MemGUI-Bench/3fb01b6cc0d13e287c67f488c76f449df7d65558/data/memgui-tasks-all.csv)
- 115 tasks marked as requiring UI memory — data/memgui-tasks-all.csv at 3fb01b6 (full benchmark) (computed) (computed; source: https://raw.githubusercontent.com/lgy0404/MemGUI-Bench/3fb01b6cc0d13e287c67f488c76f449df7d65558/data/memgui-tasks-all.csv)

Counts come from the pinned CSV files and match the README badges (128 tasks, 26 apps, 89.8% memory-intensive). The full set has 48, 42 and 38 tasks at difficulty levels 1, 2 and 3, and its golden steps average about 36. The 40-task file is a subset of the 128 tasks, so the two counts are not summed. Leaderboard settings fix the judge models; debugging runs may use others.

## License declarations

- code: MIT — https://raw.githubusercontent.com/lgy0404/MemGUI-Bench/HEAD/LICENSE
- data: mit — https://huggingface.co/datasets/lgy0404/MemGUI-Bench/raw/217713ee891b227b1f297c3a59dd1798e9d4a09b/README.md
- document: not recorded
- weights: not recorded

- data review: The Hub card for the task CSV files (the alias lgy0404/MemGUI-Bench) declares mit; it covers the task definitions, not app content.
  Sources: https://huggingface.co/datasets/lgy0404/MemGUI-Bench/raw/217713ee891b227b1f297c3a59dd1798e9d4a09b/README.md

## Primary evidence

- https://raw.githubusercontent.com/lgy0404/MemGUI-Bench/3fb01b6cc0d13e287c67f488c76f449df7d65558/README.md (retrieved 2026-10-19T07:05:14Z; SHA-256 fab1bf3b766c2e59e46515dd60cf71b040986690b169bfcc0d35c6e9bc0f58fb)
- https://api.github.com/repos/lgy0404/MemGUI-Bench/git/trees/3fb01b6cc0d13e287c67f488c76f449df7d65558?recursive=1 (retrieved 2026-10-19T07:05:17Z; SHA-256 5ea1ee28f93335f167bc25b3db56248dc01cfc066ea8eceaddaf361545fc03ab)
- https://raw.githubusercontent.com/lgy0404/MemGUI-Bench/3fb01b6cc0d13e287c67f488c76f449df7d65558/data/memgui-tasks-all.csv (retrieved 2026-10-19T07:05:18Z; SHA-256 28d862beb94250e5630b6f7cc2a50369f4fb533fe7cf780991c1f4f73790be07)
- https://raw.githubusercontent.com/lgy0404/MemGUI-Bench/3fb01b6cc0d13e287c67f488c76f449df7d65558/data/memgui-tasks-40.csv (retrieved 2026-10-19T07:05:18Z; SHA-256 138b8371bf1880df837b99d596e5a86679a9fe0ce0be33da69846e4ea2b44169)
- https://raw.githubusercontent.com/lgy0404/MemGUI-Bench/3fb01b6cc0d13e287c67f488c76f449df7d65558/memgui_eval/evaluator.py (retrieved 2026-10-19T07:05:18Z; SHA-256 c8e9270c39852e17fa1b2d34bf3ca630375f68a1d817474e6a446e53d9490c1f)
- https://raw.githubusercontent.com/lgy0404/MemGUI-Bench/3fb01b6cc0d13e287c67f488c76f449df7d65558/LICENSE (retrieved 2026-10-19T07:05:18Z; SHA-256 4fcd9de2604362b40f3529af286e34882e01bd4cb26dbedc9934c09a3f6ee827)
- https://huggingface.co/datasets/lgy0404/MemGUI-Bench/raw/217713ee891b227b1f297c3a59dd1798e9d4a09b/README.md (retrieved 2026-10-19T07:05:19Z; SHA-256 1c291cb5096e2cf98e945456b1acb66d7b1bebd3d950c9d043b34ef75dd660b5)
- https://huggingface.co/api/datasets/lgy0404/MemGUI-Bench/revision/217713ee891b227b1f297c3a59dd1798e9d4a09b (retrieved 2026-10-19T07:05:19Z; SHA-256 d44183bab1958372904dd52e19efdb4d8bb277a896fe24a9954b65e2fc926db1)
- https://raw.githubusercontent.com/lgy0404/MemGUI-Bench/HEAD/LICENSE (retrieved 2026-10-19T07:06:23Z; SHA-256 4fcd9de2604362b40f3529af286e34882e01bd4cb26dbedc9934c09a3f6ee827)
