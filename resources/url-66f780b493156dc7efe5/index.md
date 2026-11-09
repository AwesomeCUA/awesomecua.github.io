# Multimodal-Mind2Web

Mind2Web action steps aligned with the matching webpage screenshot, plus raw and cleaned HTML, candidate elements and the target operation, in a train split and test splits held out by task, website and domain.

- Catalog URL: https://awesomecua.com/resources/url-66f780b493156dc7efe5/
- Original source: https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, action-prediction, evaluation
- Evidence checked: 2026-10-18T16:02:04Z
- ID: url:66f780b493156dc7efe5

## Limitations

Each row is one action step with the page state before the action; tasks are distinct annotation IDs. The card says the three test splits were human-verified for element visibility and rendering, while the train split may contain badly rendered screenshots. Its test task counts (177, 142 and 694) are lower than the 252, 177 and 912 task instances that the Mind2Web README lists for the cross-task, cross-website and cross-domain test sets. The card points to the SeeAct repository and paper and declares OpenRAIL, recorded as stated; terms for the underlying website content were not assessed.

- Record JSON: https://awesomecua.com/resources/url-66f780b493156dc7efe5/record.json

## Structured profile

- Formats: Parquet
- Modalities: webpage screenshots, raw and cleaned HTML, task descriptions, action histories
- Splits: train, test_task, test_website, test_domain
- Supervision: target operation per step (CLICK, TYPE or SELECT with value), positive and negative candidate elements

### Count observations

- 7,775 action steps — train split (reported; source: https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web/raw/1b4c6a8cf9f77b7a5e0d641959935c80c4a05889/README.md)
- 1,009 tasks — train split (reported; source: https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web/raw/1b4c6a8cf9f77b7a5e0d641959935c80c4a05889/README.md)
- 1,339 action steps — test_task split (reported; source: https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web/raw/1b4c6a8cf9f77b7a5e0d641959935c80c4a05889/README.md)
- 177 tasks — test_task split (reported; source: https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web/raw/1b4c6a8cf9f77b7a5e0d641959935c80c4a05889/README.md)
- 1,019 action steps — test_website split (reported; source: https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web/raw/1b4c6a8cf9f77b7a5e0d641959935c80c4a05889/README.md)
- 142 tasks — test_website split (reported; source: https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web/raw/1b4c6a8cf9f77b7a5e0d641959935c80c4a05889/README.md)
- 4,060 action steps — test_domain split (reported; source: https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web/raw/1b4c6a8cf9f77b7a5e0d641959935c80c4a05889/README.md)
- 694 tasks — test_domain split (reported; source: https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web/raw/1b4c6a8cf9f77b7a5e0d641959935c80c4a05889/README.md)

Action steps and tasks are different units; the split sizes are the card's figures, and a column read of the Parquet files at this revision gave the same step and task counts.

## License declarations

- code: not recorded
- data: openrail — https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/api/datasets/osunlp/Multimodal-Mind2Web (retrieved 2026-10-18T16:02:04Z; SHA-256 261ab42b94fc347c2581445f61ed158ffdfd201f192c51ded49fe9fe1b298503)
- https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web/raw/1b4c6a8cf9f77b7a5e0d641959935c80c4a05889/README.md (retrieved 2026-10-18T16:02:04Z; SHA-256 8bb1e02777556f3f679c4610be9e5572b3cb218a89b98d6f75a4fc1b82fa06dd)
- https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web/33bd95caeee7bba22dd08ecc935845e15c5e5dc7/README.md (retrieved 2026-10-18T16:02:15Z; SHA-256 157dbd840264ea29f958c0b7383d63783845c573b3e19a1f39b773be22e0b32d)
- https://huggingface.co/api/datasets/osunlp/Multimodal-Mind2Web (retrieved 2026-10-18T16:02:04Z; SHA-256 261ab42b94fc347c2581445f61ed158ffdfd201f192c51ded49fe9fe1b298503)
