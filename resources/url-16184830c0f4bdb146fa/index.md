# UI-S1 released training examples

A public example subset of the UI-S1 mobile training data, packaged as JSONL annotations and Parquet images.

- Catalog URL: https://awesomecua.github.io/resources/url-16184830c0f4bdb146fa/
- Original source: https://huggingface.co/datasets/mPLUG/UI_S1_dataset
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: reinforcement-learning, data-generation, mobile-navigation
- Evidence checked: 2026-10-17T04:07:19Z
- ID: url:16184830c0f4bdb146fa

## Limitations

The release contains train_1000.jsonl and images.parquet. The official README explicitly describes 1,000 released examples and calls the release only part of the training dataset. Apache-2.0 is declared by the dataset card; this is not the complete training corpus.

- Record JSON: https://awesomecua.github.io/resources/url-16184830c0f4bdb146fa/record.json

## Structured profile

- formats: JSONL, Parquet
- modalities: images, text, actions
- splits: training example subset
- supervision: GUI actions

### Count observations

- 1,000 training examples — public example subset (reported; source: https://raw.githubusercontent.com/X-PLUG/MobileAgent/HEAD/UI-S1/README.md)

The count is explicitly reported by the publisher, not inferred from the filename. Full training data remains outside this release.

## License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/mPLUG/UI_S1_dataset/raw/main/README.md
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/mPLUG/UI_S1_dataset/raw/main/README.md (retrieved 2026-10-17T04:07:19Z; SHA-256 d826463e2aa159f083dc74869bfabb8abb5b8ea4f2cdf4aeb7676172b18aaaa5)
- https://huggingface.co/api/datasets/mPLUG/UI_S1_dataset (retrieved 2026-10-17T04:07:19Z; SHA-256 cdfbcbf23a3b1b4a609e1943e80dcf144ca1224a74ebf2308fde4fcb4326ab3c)
- https://raw.githubusercontent.com/X-PLUG/MobileAgent/HEAD/UI-S1/README.md (retrieved 2026-10-17T04:06:57Z; SHA-256 f668c890a5a87953a243715d0d47367c23f0c99b524d80f48bbdde8163f3e942)
- https://huggingface.co/datasets/mPLUG/UI_S1_dataset/raw/main/README.md (retrieved 2026-10-17T04:07:19Z; SHA-256 d826463e2aa159f083dc74869bfabb8abb5b8ea4f2cdf4aeb7676172b18aaaa5)
