# WebEvolver SFT data

Two JSONL collections for supervised fine-tuning the WebEvolver agent policy and web world model.

- Catalog URL: https://awesomecua.github.io/resources/url-e126bbd9729ebdaf05ab/
- Original source: https://huggingface.co/datasets/CognitiveKernel/WebEvolver
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, world-models, imitation-learning
- Evidence checked: 2026-10-18T04:35:17Z
- ID: url:e126bbd9729ebdaf05ab

## Limitations

The card and public manifest identify separate policy-model and world-model JSONL files. No row total or complete record schema is documented in the inspected card; the files were not downloaded as training samples. MIT is the publisher’s data declaration.

- Record JSON: https://awesomecua.github.io/resources/url-e126bbd9729ebdaf05ab/record.json

## Structured profile

- formats: JSONL
- modalities: not recorded
- splits: not recorded
- supervision: agent-policy supervised fine-tuning, web-world-model supervised fine-tuning

### Count observations

No count recorded.

Two purpose-specific files are released: webevolver_policy_sft.jsonl and webevolver_world_model_sft.jsonl. They are not assumed disjoint train/test splits, and no modality or example count is inferred from filenames alone.

## License declarations

- code: not recorded
- data: MIT — https://huggingface.co/datasets/CognitiveKernel/WebEvolver/raw/13f4f45b359e138a45b1c89bd4e913298c586ca9/README.md
- document: not recorded
- weights: not recorded

- data review: Publisher dataset-card declaration for this release; it does not establish rights to all upstream screenshots, applications or source content.
  Sources: https://huggingface.co/datasets/CognitiveKernel/WebEvolver/raw/13f4f45b359e138a45b1c89bd4e913298c586ca9/README.md

## Primary evidence

- https://huggingface.co/datasets/CognitiveKernel/WebEvolver/raw/13f4f45b359e138a45b1c89bd4e913298c586ca9/README.md (retrieved 2026-10-18T04:35:17Z; SHA-256 36ccdce12c1b1512ad4b21326c5d0c0379c73e85f0b8150779d43240b54686de)
- https://huggingface.co/api/datasets/CognitiveKernel/WebEvolver (retrieved 2026-10-18T04:33:29Z; SHA-256 cbef3f8037405d311ed9fe8aa620ec3734f91c77ca8f4209fbe98167fb33bee8)
- https://raw.githubusercontent.com/Tencent/SelfEvolvingAgent/HEAD/WebEvolver/README.md (retrieved 2026-10-18T04:27:14Z; SHA-256 447dfa1e52789f7f3f111e9e0d453fb1f9fd8bf2d7b858f28fbe21a2239b4b2e)
