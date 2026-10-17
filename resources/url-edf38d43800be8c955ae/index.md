# GUIChat

Conversational GUI supervision with text-rich images and bounding boxes, organized as single-turn questions and multi-turn dialogues.

- Catalog URL: https://awesomecua.github.io/resources/url-edf38d43800be8c955ae/
- Original source: https://huggingface.co/datasets/yiye2023/GUIChat
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, data-generation
- Evidence checked: 2026-10-16T06:36:01Z
- ID: url:edf38d43800be8c955ae

## Limitations

Public JSON annotations and Parquet image packages are present. The project README declares CC-BY-4.0 for datasets, while this Hub card declares Apache-2.0; these conflicting declarations are retained without asserting a single confirmed data license. The project code’s MIT declaration is separate.

- Record JSON: https://awesomecua.github.io/resources/url-edf38d43800be8c955ae/record.json

## Structured profile

- formats: JSON, Parquet
- modalities: screenshots, text, bounding boxes
- splits: not recorded
- supervision: single-turn question answering, multi-turn dialogue

### Count observations

- ≈ 44,000 QA pairs — single-turn portion (reported; source: https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md)
- ≈ 6,000 dialogues — multi-turn portion (reported; source: https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md)

Quantities are rounded publisher descriptions, not downloaded sample counts. Data-license declarations conflict across first-party sources; no permissive license is inferred.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: Conflicting first-party dataset declarations: the GUICourse project README assigns CC-BY-4.0 to the datasets, while this exact Hub card declares Apache-2.0. The code MIT declaration does not resolve the data conflict.
  Sources: https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md, https://huggingface.co/datasets/yiye2023/GUIChat/raw/main/README.md

## Primary evidence

- https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md (retrieved 2026-10-16T06:36:01Z; SHA-256 0968273442bfb9a6478fe78f8b9a6247a3bb8e6d028880939b432fd009961e98)
- https://huggingface.co/api/datasets/yiye2023/GUIChat (retrieved 2026-10-17T04:01:33Z; SHA-256 3ccb4a9ded4f45aa334f0df5dc9a0f8963c645857e8442c46efe1d9cf4a4360b)
- https://huggingface.co/datasets/yiye2023/GUIChat/raw/main/README.md (retrieved 2026-10-17T04:01:33Z; SHA-256 4bcf87ecfbbb8e07a01b21415a970c8b53a5283bf6872b657040d3f45c9241f7)
