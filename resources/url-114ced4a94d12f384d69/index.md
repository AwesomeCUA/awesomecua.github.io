# Mobile-R1 trajectory sample

Open sample of Mobile-R1's annotated trajectories on Chinese Android apps: 1,007 tasks whose steps pair a screenshot with a thought, a subtask and a mobile_use action such as click, swipe, type or open.

- Catalog URL: https://awesomecua.com/resources/url-114ced4a94d12f384d69/
- Original source: https://huggingface.co/datasets/Mobile-R1/Mobile-R1
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, imitation-learning
- Evidence checked: 2026-10-19T06:56:13Z
- ID: url:114ced4a94d12f384d69

## Limitations

The card describes this release as an open-sourced sample: the full Mobile-R1 dataset has 24,521 manually annotated instances from 4,635 trajectories, of which 1,007 trajectories on 28 applications are published. Instructions, thoughts and subtasks are in Chinese. Each data.jsonl row carries the app name, instruction, system prompt, screen size and a step list whose entries hold an image filename, thought, subtask, a mobile_use function call and the full model-style response. The card's apache-2.0 declaration covers this release and does not settle rights to the app screenshots.

- Record JSON: https://awesomecua.com/resources/url-114ced4a94d12f384d69/record.json

## Structured profile

- Formats: JSONL, PNG images
- Modalities: screenshots, instructions, thoughts, subtask descriptions, actions
- Splits: not recorded
- Supervision: manually annotated trajectories

### Count observations

- 1,007 trajectories — Mobile-R1 Hub release (card statistics) (reported; source: https://huggingface.co/datasets/Mobile-R1/Mobile-R1/raw/c3904f0fdad03a3a4191492880312bda5ad36516/README.md)
- 28 applications — Mobile-R1 Hub release (card statistics) (reported; source: https://huggingface.co/datasets/Mobile-R1/Mobile-R1/raw/c3904f0fdad03a3a4191492880312bda5ad36516/README.md)
- 3,924 samples (steps) — Mobile-R1 Hub release (card statistics) (reported; source: https://huggingface.co/datasets/Mobile-R1/Mobile-R1/raw/c3904f0fdad03a3a4191492880312bda5ad36516/README.md)
- 1,007 data.jsonl rows — Mobile-R1 Hub release at revision c3904f0 (computed) (computed; source: https://huggingface.co/datasets/Mobile-R1/Mobile-R1/resolve/c3904f0fdad03a3a4191492880312bda5ad36516/data.jsonl)
- 3,899 trajectory step entries — Mobile-R1 Hub release at revision c3904f0 (computed) (computed; source: https://huggingface.co/datasets/Mobile-R1/Mobile-R1/resolve/c3904f0fdad03a3a4191492880312bda5ad36516/data.jsonl)
- 3,924 PNG files under images/ — Mobile-R1 Hub release at revision c3904f0 (computed) (computed; source: https://huggingface.co/api/datasets/Mobile-R1/Mobile-R1/revision/c3904f0fdad03a3a4191492880312bda5ad36516)

Counts use different units; these counts are reported separately. The card's 3,924 samples equal the number of PNG files in the manifest, but data.jsonl references 3,899 distinct images, all present, leaving 25 files unreferenced. The rows use 30 non-empty app_name strings, including variant spellings of the same app (B站 and 哔哩哔哩), plus 5 rows with an empty name; the card reports 28 applications. No train/test split is declared.

## License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/Mobile-R1/Mobile-R1/raw/c3904f0fdad03a3a4191492880312bda5ad36516/README.md
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/Mobile-R1/Mobile-R1/raw/c3904f0fdad03a3a4191492880312bda5ad36516/README.md (retrieved 2026-10-19T06:56:13Z; SHA-256 c92e2343802f3b669e2efd1818ee48080c1eb992fc44237d564a5853b08fd625)
- https://huggingface.co/api/datasets/Mobile-R1/Mobile-R1/revision/c3904f0fdad03a3a4191492880312bda5ad36516 (retrieved 2026-10-19T06:56:14Z; SHA-256 3379e01e9e163c27700a3c11a8647cef1311faad72f740a58d8255ab2342ed98)
- https://huggingface.co/datasets/Mobile-R1/Mobile-R1/resolve/c3904f0fdad03a3a4191492880312bda5ad36516/data.jsonl (retrieved 2026-10-19T06:56:15Z; SHA-256 a5af20573ee10ee858ab6b464cc7ed27b964cd6c967993b3711967c3069ebce3)
- https://huggingface.co/datasets/Mobile-R1/Mobile-R1/raw/c3904f0fdad03a3a4191492880312bda5ad36516/README.md (retrieved 2026-10-19T06:56:13Z; SHA-256 c92e2343802f3b669e2efd1818ee48080c1eb992fc44237d564a5853b08fd625)
