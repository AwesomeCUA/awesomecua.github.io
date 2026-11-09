# WebBench

Live-web benchmark from Halluminate and Skyvern with read, create, update, delete and file-download tasks on 452 high-traffic websites, including logins and form entry, with released per-agent run results.

- Catalog URL: https://awesomecua.com/resources/github-halluminate-webbench/
- Original source: https://github.com/Halluminate/WebBench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation
- Evidence checked: 2026-10-18T11:13:06Z
- ID: github:halluminate/webbench

## Limitations

The README and dataset card describe 2,454 tasks on 452 websites (category counts summing to 2,454) and an expanded pool of 5,750 tasks. The released webbenchfinal.csv has 2,647 rows with unique IDs and 453 distinct starting URLs, so the released file and the documented total differ. Tasks run on live third-party websites, so content, logins and anti-bot measures change over time. The repository holds the task CSVs and per-agent result files but no evaluation harness; the README points to the leaderboard and technical report for methodology. The Hugging Face dataset card declares MIT for the task data; the repository LICENSE is MIT for the repository. Website content and account requirements belong to the target sites.

- Record JSON: https://awesomecua.com/resources/github-halluminate-webbench/record.json

## Structured profile

- Actions / outputs: browser interactions on live websites
- Evaluation: The repository releases per-agent result files; the scoring procedure is described in the publisher's technical report rather than an executable evaluator in the repository.
- Focus: live-web task completion, write operations such as account creation, updates and deletions, file downloads
- Observations: not recorded
- Setting: interactive

### Count observations

- 2,454 tasks — documented WebBench task set (reported; source: https://raw.githubusercontent.com/Halluminate/WebBench/HEAD/README.md)
- 452 websites — documented site coverage (reported; source: https://raw.githubusercontent.com/Halluminate/WebBench/HEAD/README.md)
- 2,647 task rows — webbenchfinal.csv as released (computed) (computed; source: https://raw.githubusercontent.com/Halluminate/WebBench/HEAD/webbenchfinal.csv)

The released CSV has columns ID, Starting URL, Category and Task, with 1,637 READ, 594 CREATE, 206 UPDATE, 166 DELETE and 44 FILE_MANIPULATION rows; the README's category table sums to 2,454. A separate webbench_hitl_final.csv covers human-in-the-loop runs. Record the task file revision with a score.

## License declarations

- code: MIT — https://raw.githubusercontent.com/Halluminate/WebBench/HEAD/LICENSE
- data: MIT — https://huggingface.co/datasets/Halluminate/WebBench/raw/main/README.md
- document: not recorded
- weights: not recorded

- data review: The dataset card for the Hub copy of the task CSV declares license: mit; this is a data declaration from the dataset card, not inferred from the repository code license.
  Sources: https://huggingface.co/datasets/Halluminate/WebBench/raw/main/README.md

## Primary evidence

- https://raw.githubusercontent.com/Halluminate/WebBench/HEAD/README.md (retrieved 2026-10-18T11:13:06Z; SHA-256 9898c4ea9c7d08c08566893dd6adb6a6ca3d2e3ef85a2dbcbc350b2bd22736b8)
- https://raw.githubusercontent.com/Halluminate/WebBench/HEAD/webbenchfinal.csv (retrieved 2026-10-18T11:13:07Z; SHA-256 fd5311a38bdb6f941e8f544150735656c114d76fbfb17193da973d5de0165217)
- https://huggingface.co/datasets/Halluminate/WebBench/raw/main/README.md (retrieved 2026-10-18T11:13:09Z; SHA-256 017626f88e56eacdb45d7f8b90540ba4a65fa67b78ea745c026b8c28181dff29)
- https://huggingface.co/api/datasets/Halluminate/WebBench (retrieved 2026-10-18T11:13:09Z; SHA-256 fd85246105d23d09511b920505391f1937bbd0ca3037963498edb9744554d593)
- https://raw.githubusercontent.com/Halluminate/WebBench/HEAD/LICENSE (retrieved 2026-10-18T11:13:09Z; SHA-256 96804aa272fe40cdfb8b5c8f4d1d94757bcfaf1bf5596fb829214843d2371e58)
- https://raw.githubusercontent.com/Halluminate/WebBench/HEAD/LICENSE (retrieved 2026-10-18T11:13:09Z; SHA-256 96804aa272fe40cdfb8b5c8f4d1d94757bcfaf1bf5596fb829214843d2371e58)
