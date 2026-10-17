# GUIEnv-local

The released local-supervision portion of GUIEnv, pairing webpage regions and text for OCR and GUI grounding.

- Catalog URL: https://awesomecua.github.io/resources/url-0af07e00658a430cee6a/
- Original source: https://huggingface.co/datasets/yiye2023/GUIEnv
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: grounding, data-generation
- Evidence checked: 2026-10-16T06:36:01Z
- ID: url:0af07e00658a430cee6a

## Limitations

Public JSON annotations and Parquet image packages are present. The project README declares CC-BY-4.0 for datasets, while this Hub card declares Apache-2.0; these conflicting declarations are retained without asserting a single confirmed data license. The project code’s MIT declaration is separate. Only GUIEnv-local is marked released; the advertised 10M-example GUIEnv-global pretraining collection is still unchecked and is not counted here.

## Structured profile

- formats: JSON, Parquet
- modalities: screenshots, text, bounding boxes
- splits: train, test
- supervision: OCR, region-text grounding

### Count observations

- ≈ 700,000 region-text QA pairs — GUIEnv-local SFT data (reported; source: https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md)

Quantities are rounded publisher descriptions, not downloaded sample counts. Data-license declarations conflict across first-party sources; no permissive license is inferred.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: Conflicting first-party dataset declarations: the GUICourse project README assigns CC-BY-4.0 to the datasets, while this exact Hub card declares Apache-2.0. The code MIT declaration does not resolve the data conflict.
  Sources: https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md, https://huggingface.co/datasets/yiye2023/GUIEnv/raw/main/README.md

## Primary evidence

- https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md (retrieved 2026-10-16T06:36:01Z; SHA-256 0968273442bfb9a6478fe78f8b9a6247a3bb8e6d028880939b432fd009961e98)
- https://huggingface.co/api/datasets/yiye2023/GUIEnv (retrieved 2026-10-17T04:01:33Z; SHA-256 15813be05dc76aed5f667875188bf9612e74ff2f4699d270dd0d1aeda86767f8)
- https://huggingface.co/datasets/yiye2023/GUIEnv/raw/main/README.md (retrieved 2026-10-17T04:01:33Z; SHA-256 4bcf87ecfbbb8e07a01b21415a970c8b53a5283bf6872b657040d3f45c9241f7)
