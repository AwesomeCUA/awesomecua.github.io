# WebRewardBench

An offline preference-evaluation set for web process reward models, pairing page and trajectory context with preferred and rejected candidate decisions.

- Catalog URL: https://awesomecua.github.io/resources/url-ac6d0f80765f5a32255a/
- Original source: https://huggingface.co/datasets/LangAGI-Lab/WebRewardBench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, reward-models, evaluation
- Evidence checked: 2026-10-17T02:44:50Z
- ID: url:ac6d0f80765f5a32255a

## Limitations

Two public Parquet shards are present. Card metadata reports 776 test rows, whereas the project describes 1,000-plus test cases without reconciling that count to rows. Both observations are retained as a grain/coverage caveat rather than treating either as a confirmed number of independent tasks. No data license is declared.

- Record JSON: https://awesomecua.github.io/resources/url-ac6d0f80765f5a32255a/record.json

## Structured profile

- actions: candidate-decision preference
- evaluation: Compare reward-model preferences with the provided chosen/rejected decision labels; no independent score was reproduced.
- focus: web process-reward evaluation
- observations: page screenshots, text observations, action history, task checklists
- setting: offline

### Count observations

- 776 rows — Hub test split (reported; source: https://huggingface.co/datasets/LangAGI-Lab/WebRewardBench/raw/main/README.md)

The current Hub row count and project case-count claim use unresolved counting units. Candidate lists mean a row must not be assumed to equal one task or one pair.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/LangAGI-Lab/WebRewardBench/raw/main/README.md (retrieved 2026-10-17T02:44:50Z; SHA-256 0968f60eea10b95f79cd16ad3746b0e0b1acaeb0e97c45856f709d53a14dd73a)
- https://huggingface.co/api/datasets/LangAGI-Lab/WebRewardBench (retrieved 2026-10-17T02:44:50Z; SHA-256 db06c66b8cf5687008b0ad0d9ae269fcc27936887d238cfe2bdeb52151e1683e)
- https://raw.githubusercontent.com/kyle8581/Web-Shepherd/HEAD/README.md (retrieved 2026-10-17T02:44:04Z; SHA-256 07431058d8b9a71b80e75b7a74a40a8346c1503eec240628459cc4d4e2f0802f)
