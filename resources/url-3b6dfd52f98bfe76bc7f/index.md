# WebTailBench

Live-web task definitions and rubrics for evaluating computer-use agents, with preserved original tasks, a refreshed V2 task suite and a separate refusal set.

- Catalog URL: https://awesomecua.github.io/resources/url-3b6dfd52f98bfe76bc7f/
- Original source: https://huggingface.co/datasets/microsoft/WebTailBench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation, safety-security
- Evidence checked: 2026-10-17T02:42:32Z
- ID: url:3b6dfd52f98bfe76bc7f

## Limitations

Public TSV files contain V1, V2 and refusal task definitions. The card declares MIT for the dataset. V1 and V2 share the same 609 task identities and must not be summed as distinct tasks. The May 2026 refresh supersedes calendar-bound task wording; live-site availability is not established by this metadata review.

- Record JSON: https://awesomecua.github.io/resources/url-3b6dfd52f98bfe76bc7f/record.json

## Structured profile

- actions: browser interaction
- evaluation: Task-specific precomputed rubrics; refusal tasks are a separate evaluation population.
- focus: live web task completion, unsafe-request refusal
- observations: web pages
- setting: interactive

### Count observations

- 609 task identities — main V1/V2 suite (shared identities) (reported; source: https://huggingface.co/datasets/microsoft/WebTailBench/raw/main/README.md)
- 111 tasks — refusal suite (reported; source: https://huggingface.co/datasets/microsoft/WebTailBench/raw/main/README.md)

V2 refreshes task strings and rubrics while preserving V1 task IDs. Counts are task definitions, not independently verified runnable website states.

## License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/microsoft/WebTailBench/raw/main/README.md
- document: not recorded
- weights: not recorded

- data review: The benchmark's Hub dataset card declares MIT in its metadata header (license: mit).
  Sources: https://huggingface.co/datasets/microsoft/WebTailBench/raw/main/README.md

## Primary evidence

- https://huggingface.co/datasets/microsoft/WebTailBench/raw/main/README.md (retrieved 2026-10-17T02:42:32Z; SHA-256 c4cfc361d1d47d7855269af4110483363964e23f9c65244a1182830eccccbb7f)
- https://huggingface.co/api/datasets/microsoft/WebTailBench (retrieved 2026-10-17T02:42:32Z; SHA-256 93469a20d333219dde89a225891a54ee716120d559eb8ac9f69a1a7ee84f57a3)
