---
title: "Open Operator Evals | AwesomeCUA"
url: https://awesomecua.com/resources/github-nottelabs-open-operator-evals/
updated: 2026-10-19
type: benchmark
lang: en
---

# Open Operator Evals

Archived Notte Labs harness and results that run web agents eight times on a 30-task WebVoyager subset, judging each run with a GPT-4o screenshot judge and comparing it with the agent's self-reported success.

- Catalog URL: https://awesomecua.com/resources/github-nottelabs-open-operator-evals/
- Original source: https://github.com/nottelabs/open-operator-evals
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation, robustness
- Evidence checked: 2026-10-19T06:03:58Z
- ID: github:nottelabs/open-operator-evals

## Limitations

GitHub marks the repository archived. Notte Labs, the developer of one of the compared agents, published the results and ranks Notte first in its README; the results are publisher-run. The March 2025 runs used Notte v1.3.3 with Gemini 2.0 Flash, Browser-Use 0.1.40 with GPT-4o and Convergence Proxy-lite at a pinned commit, headless, from a residential Swiss IP. Agent handlers in eval/agent_handlers also cover Falco, a Browser-Use API and a mock agent. WebVoyager30 is the publisher's sample of WebVoyager; the repository also carries the full WebVoyager task file and archived variants. Per-run results, summary images and logs for the three providers are committed under WebVoyager30/. Live websites change, so scores are tied to their run dates. No license file is present.

- Record JSON: https://awesomecua.com/resources/github-nottelabs-open-operator-evals/record.json

## Structured profile

- Actions / outputs: agent-defined browser actions
- Evaluation: A GPT-4o judge (default model in eval/evaluators/webvoyager.py) receives the task, the agent's final response and up to its last four screenshots under WebVoyager's evaluation prompt and returns SUCCESS, NOT SUCCESS or UNKNOWN; the agent's own success claim is recorded separately. The three published configurations (configs/) run each task 8 times with at most 20 steps and 360 seconds.
- Focus: live-website task completion, agent self-report calibration, run-to-run variance
- Observations: agent-defined browser observations, final screenshots and response for the judge
- Setting: interactive

### Count observations

- 30 tasks — WebVoyager30 (eval/data/webvoyager/webvoyager_simple.jsonl) (computed) (computed; source: https://raw.githubusercontent.com/nottelabs/open-operator-evals/50f8e472230cbcc9c4ff24e1e8ed5ae42683b238/eval/data/webvoyager/webvoyager_simple.jsonl)
- 15 websites — WebVoyager30 (eval/data/webvoyager/webvoyager_simple.jsonl) (computed) (computed; source: https://raw.githubusercontent.com/nottelabs/open-operator-evals/50f8e472230cbcc9c4ff24e1e8ed5ae42683b238/eval/data/webvoyager/webvoyager_simple.jsonl)
- 643 tasks — full WebVoyager task file in the repository (eval/data/webvoyager/webvoyager.jsonl) (computed) (computed; source: https://raw.githubusercontent.com/nottelabs/open-operator-evals/50f8e472230cbcc9c4ff24e1e8ed5ae42683b238/eval/data/webvoyager/webvoyager.jsonl)

Counts are distinct task identifiers and website_name values in the inspected task files at the reviewed commit. The README calls WebVoyager about 600 tasks; the repository file holds 643 rows. Results depend on the agent version, model, step and time budget, IP location and run date.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/nottelabs/open-operator-evals/HEAD/README.md (retrieved 2026-10-19T06:03:58Z; SHA-256 64bfc6493fa8f24cf5d1f0fb640a2d16239c6ad5a1673bd679bb72db4f2644af)
- https://api.github.com/repos/nottelabs/open-operator-evals (retrieved 2026-10-19T06:03:10Z; SHA-256 a9a61c471c5582fea8ee4daaf9ca3eff80605c5b458a167c85eee50e34683a1a)
- https://api.github.com/repos/nottelabs/open-operator-evals/git/trees/50f8e472230cbcc9c4ff24e1e8ed5ae42683b238?recursive=1 (retrieved 2026-10-19T06:04:37Z; SHA-256 7cd274b6cff857d101a49b84522cdcc25e864eda9befdb768c7642fde04867ca)
- https://raw.githubusercontent.com/nottelabs/open-operator-evals/50f8e472230cbcc9c4ff24e1e8ed5ae42683b238/eval/data/webvoyager/webvoyager_simple.jsonl (retrieved 2026-10-19T06:03:11Z; SHA-256 09c9e30f8bc7f47e6039764d4fa58f74d2617c0cd47d5f0ba372b1274e52a893)
- https://raw.githubusercontent.com/nottelabs/open-operator-evals/50f8e472230cbcc9c4ff24e1e8ed5ae42683b238/eval/data/webvoyager/webvoyager.jsonl (retrieved 2026-10-19T06:03:11Z; SHA-256 b5c50649aa9caf5f299e1ef94e8d843760222bbfe790d8b3931664f7cb3ac59f)
- https://raw.githubusercontent.com/nottelabs/open-operator-evals/50f8e472230cbcc9c4ff24e1e8ed5ae42683b238/eval/evaluators/webvoyager.py (retrieved 2026-10-19T06:03:11Z; SHA-256 2a87b31230b130fece98a9e057644cc5776b94996c43e7e173ae41c5c7decc9f)
- https://raw.githubusercontent.com/nottelabs/open-operator-evals/50f8e472230cbcc9c4ff24e1e8ed5ae42683b238/eval/run.py (retrieved 2026-10-19T06:03:11Z; SHA-256 e1eb241cc61cb24b21c622ce3671193e06d24cc304a5c5a5142dc29ebc732bf9)
- https://raw.githubusercontent.com/nottelabs/open-operator-evals/50f8e472230cbcc9c4ff24e1e8ed5ae42683b238/configs/notte.headless.gemini.toml (retrieved 2026-10-19T06:03:11Z; SHA-256 4729b8007aa2c63f94ae02477c55a69f94b4f86d2a14cca6420e74feccc2a8cf)
- https://raw.githubusercontent.com/nottelabs/open-operator-evals/50f8e472230cbcc9c4ff24e1e8ed5ae42683b238/configs/browseruse.headless.openai.toml (retrieved 2026-10-19T06:03:56Z; SHA-256 dd4be7388dcecaf2f294ca9d975617d2659a06fc10ef1f419d4e4cb81af26e11)
- https://raw.githubusercontent.com/nottelabs/open-operator-evals/50f8e472230cbcc9c4ff24e1e8ed5ae42683b238/configs/convergence.headless.toml (retrieved 2026-10-19T06:03:57Z; SHA-256 87311f9335da34b9c8a99d506b886053b8da1a9b609b9f3e691394a899a3a223)
