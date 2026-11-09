# ClawBench

Everyday-task benchmark on live websites that runs browser agents in containerized Chromium, blocks each final submission request for scoring by URL match and an LLM judge, and records five layers of run evidence.

- Catalog URL: https://awesomecua.com/resources/github-tiger-ai-lab-clawbench/
- Original source: https://github.com/TIGER-AI-Lab/ClawBench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation, workflow, observability
- Evidence checked: 2026-10-18T11:53:46Z
- ID: github:tiger-ai-lab/clawbench

## Limitations

Renamed from reacher-z/ClawBench; both API names return repository 1206519531 (TIGER-AI-Lab/ClawBench), which remains active as the same repository. Counts and scoring rules were read at commit 07eb50a3. The tree also holds v1-lite, claw-eval and environmental-observation task folders; this record’s counts cover the stated task set. Task definitions and execution traces are also published as Hugging Face datasets (NAIL-Group/ClawBench, NAIL-Group/ClawBenchV1Trace, TIGER-Lab/ClawBenchV2Trace); their data licenses remain unverified in this record. Apache-2.0 is recorded for repository code only. Nothing was installed or run.

- Record JSON: https://awesomecua.com/resources/github-tiger-ai-lab-clawbench/record.json

## Structured profile

- actions: harness-defined browser actions such as navigating, clicking and filling forms
- evaluation: Two stages per task run: a request interceptor inside the container blocks the final HTTP request and marks the run intercepted when its URL regex and method match the task's eval_schema; an LLM judge (default deepseek-v4-pro at temperature 0) then checks the intercepted body against the instruction. A pass needs both. The original V1 paper rubric instead compares agent and human-reference trajectories.
- focus: everyday online tasks on production websites, multi-step, write-heavy form workflows
- observations: not recorded
- setting: interactive

### Count observations

- 152 tasks — V1 corpus shipped in test-cases/v1 (task.json files) (computed) (computed; source: https://api.github.com/repos/TIGER-AI-Lab/ClawBench/git/trees/d12a2dda577f2c943a74d833e8253860eda81eaf?recursive=1)
- 129 tasks — V2 corpus shipped in test-cases/v2 (task.json files) (computed) (computed; source: https://api.github.com/repos/TIGER-AI-Lab/ClawBench/git/trees/d12a2dda577f2c943a74d833e8253860eda81eaf?recursive=1)
- 153 tasks — V1 corpus as published in the paper and used as the scoring denominator (reported; source: https://raw.githubusercontent.com/TIGER-AI-Lab/ClawBench/07eb50a3d4c5a799f5ad4eebd57c67c10417787f/eval/scoring.md)
- 130 tasks — V2 corpus as published and used as the scoring denominator (reported; source: https://raw.githubusercontent.com/TIGER-AI-Lab/ClawBench/07eb50a3d4c5a799f5ad4eebd57c67c10417787f/eval/scoring.md)
- 143 live websites — shipped V1 corpus (reported; source: https://raw.githubusercontent.com/TIGER-AI-Lab/ClawBench/HEAD/README.md)
- 63 live websites — shipped V2 corpus (reported; source: https://raw.githubusercontent.com/TIGER-AI-Lab/ClawBench/HEAD/README.md)

The README says two ASPCA tasks were removed after publication, so the shipped corpora hold 152 and 129 tasks while scoring.md still divides by 153 and 130. Live sites change over time, and the README asks for comparisons under the same corpus revision, harness and rubric. Agents run through selectable harnesses (for example Hermes and OpenClaw), so observations and actions depend on the harness.

## License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/TIGER-AI-Lab/ClawBench/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/TIGER-AI-Lab/ClawBench/HEAD/README.md (retrieved 2026-10-18T11:53:46Z; SHA-256 61bad2a8e6ab56df159237d75f1081e1246b294183b31ef7abe47193ac26b541)
- https://api.github.com/repos/TIGER-AI-Lab/ClawBench/git/trees/d12a2dda577f2c943a74d833e8253860eda81eaf?recursive=1 (retrieved 2026-10-18T11:54:35Z; SHA-256 144a65c3dd92c7437e4ce065bed7b16e4c33496ea395d2bb1ecbd74132da29ce)
- https://raw.githubusercontent.com/TIGER-AI-Lab/ClawBench/07eb50a3d4c5a799f5ad4eebd57c67c10417787f/eval/scoring.md (retrieved 2026-10-18T11:54:36Z; SHA-256 8d8ade83a355e10800591435de5aa111e8d8297374b025ff88804358ee80b71a)
- https://raw.githubusercontent.com/TIGER-AI-Lab/ClawBench/HEAD/LICENSE (retrieved 2026-10-18T11:55:00Z; SHA-256 cb861e529412e9eec01498bdf4b74c5ee4f29139737a1193e39b24004019e606)
- https://api.github.com/repos/reacher-z/ClawBench (retrieved 2026-10-18T11:54:36Z; SHA-256 4b80afa11f3998830090c9c186afc753f261cc05abbcd4d906400f757f41e4da)
- https://api.github.com/repos/TIGER-AI-Lab/ClawBench (retrieved 2026-10-18T11:54:37Z; SHA-256 4b80afa11f3998830090c9c186afc753f261cc05abbcd4d906400f757f41e4da)
