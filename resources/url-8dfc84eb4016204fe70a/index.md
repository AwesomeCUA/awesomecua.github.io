# WebPRM Collection preference data

Checklist-annotated web decision records with page observations, prior actions, one preferred continuation and rejected alternatives for process-reward learning.

- Catalog URL: https://awesomecua.github.io/resources/url-8dfc84eb4016204fe70a/
- Original source: https://huggingface.co/datasets/LangAGI-Lab/WebPRMCollection_preference_pair
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, reward-models, evaluation
- Evidence checked: 2026-10-17T02:44:50Z
- ID: url:8dfc84eb4016204fe70a

## Limitations

Ten public Parquet shards are present. The card names its split test and reports 9,460 rows; the project’s 40K-plus preference-annotation claim is a different grain and is not substituted for this row count. A row can contain multiple rejected alternatives. No data-license declaration is present.

- Record JSON: https://awesomecua.github.io/resources/url-8dfc84eb4016204fe70a/record.json

## Structured profile

- formats: Parquet
- modalities: screenshots, text, action history
- splits: test
- supervision: preferred and rejected continuations, task checklists

### Count observations

- 9,460 rows — Hub split named test (reported; source: https://huggingface.co/datasets/LangAGI-Lab/WebPRMCollection_preference_pair/raw/main/README.md)

Preserves the publisher’s split label despite the collection’s training purpose. Rows are not individual preference pairs because rejected is a list. Data license is unknown.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/LangAGI-Lab/WebPRMCollection_preference_pair/raw/main/README.md (retrieved 2026-10-17T02:44:50Z; SHA-256 9c091c5fc625ce53f53f8262f5cee8d08194e4fd1b8eeed543ff1c3723c823fd)
- https://huggingface.co/api/datasets/LangAGI-Lab/WebPRMCollection_preference_pair (retrieved 2026-10-17T02:44:50Z; SHA-256 28a1d5d12e84fc38515bd3c5031ae0cf315c5f8772b90d982d926b98f2857563)
- https://raw.githubusercontent.com/kyle8581/Web-Shepherd/HEAD/README.md (retrieved 2026-10-17T02:44:04Z; SHA-256 07431058d8b9a71b80e75b7a74a40a8346c1503eec240628459cc4d4e2f0802f)
