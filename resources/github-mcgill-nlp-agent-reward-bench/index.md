# AgentRewardBench

A benchmark and evaluation toolkit for comparing automatic web-agent judges against expert judgments of task success, side effects and repetition.

- Catalog URL: https://awesomecua.github.io/resources/github-mcgill-nlp-agent-reward-bench/
- Original source: https://github.com/McGill-NLP/agent-reward-bench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, reward-models, web-navigation
- Evidence checked: 2026-10-17T03:59:54Z
- ID: github:mcgill-nlp/agent-reward-bench

## Limitations

The public repository contains judges, evaluation utilities and annotation files; the linked Hub hosts trajectory/screenshot manifests. No root code license is declared. Dataset Terms of Use are custom and retain third-party restrictions rather than declaring an SPDX license. The paper-reported 1,302 trajectories describe its reviewed study population, not a count recomputed from current Hub files.

- Record JSON: https://awesomecua.github.io/resources/github-mcgill-nlp-agent-reward-bench/record.json

## Structured profile

- actions: judge verdicts
- evaluation: Compare automatic judgments with expert answers on task success, side effects and repetitiveness.
- focus: automatic evaluator agreement, task success, side effects, repetition
- observations: web trajectories, screenshots, actions
- setting: offline

### Count observations

- 1,302 trajectories — paper-reported expert-reviewed set (reported; source: https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=700&max_results=100&sortBy=submittedDate&sortOrder=descending)

Counts refer to the paper study; current Hub package files are not converted into trajectory totals.

## License declarations

- code: not recorded
- data: Custom AgentRewardBench Terms of Use — https://huggingface.co/datasets/McGill-NLP/agent-reward-bench/raw/main/README.md
- document: not recorded
- weights: not recorded

- data review: The dataset card supplies custom Terms of Use and preserves third-party conditions. The repository has no root code license, and no dataset license is inherited from its benchmarks.
  Sources: https://huggingface.co/datasets/McGill-NLP/agent-reward-bench/raw/main/README.md

## Primary evidence

- https://raw.githubusercontent.com/McGill-NLP/agent-reward-bench/HEAD/README.md (retrieved 2026-10-17T03:59:54Z; SHA-256 fb753e41c3eb19be172e9e7fccbc6bcadf44288507f82b190ca99e64144294b6)
- https://api.github.com/repos/McGill-NLP/agent-reward-bench (retrieved 2026-10-17T03:59:54Z; SHA-256 7dfac983a6e443d5f66e1fc0fc3706ebea4c93005f03457cc0a2b13a2bd89601)
- https://api.github.com/repos/McGill-NLP/agent-reward-bench/git/trees/main?recursive=1 (retrieved 2026-10-17T03:59:54Z; SHA-256 79a1639cd4738719e51fc7f32313d63c0483914517cee96175459f63513e8c07)
- https://huggingface.co/api/datasets/McGill-NLP/agent-reward-bench (retrieved 2026-10-17T04:03:18Z; SHA-256 20c910fad3ad45a0c8c39b182c53632a821d3b6b546278bea6b7a78fbcb3f6cb)
- https://huggingface.co/datasets/McGill-NLP/agent-reward-bench/raw/main/README.md (retrieved 2026-10-17T04:03:20Z; SHA-256 e16adf817e3950441d70c7bb1bb3f44bd8dc65344938247f23fea4aaff9f654e)
- https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=700&max_results=100&sortBy=submittedDate&sortOrder=descending (retrieved 2026-10-16T06:36:54Z; SHA-256 4953a8e0f029016aef668bce98cec4d2873a7ae49c1fe33c4311fa5eb8d24089)
