# ScreenRef Annotations

Annotation files, task recipes, and image manifests for ScreenRef; screenshots reside in the separately gated image repository.

- Catalog URL: https://awesomecua.github.io/resources/url-c1db2ba79e6d6a3db2b9/
- Original source: https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, web, android, linux
- Topics: grounding, data-generation
- Evidence checked: 2026-10-17T01:48:10Z
- ID: url:c1db2ba79e6d6a3db2b9

## Limitations

The card declares restricted academic research use and no redistribution. Annotation coordinates use a normalized 1000 by 1000 space. Some source instructions name gestures other than the single-click target; the publisher recommends treating those as location supervision.

## Structured profile

- formats: JSONL, JSON task recipes, TSV manifests
- modalities: text, coordinates, image references
- splits: full/train, point/train
- supervision: instruction-to-click grounding, bounding boxes, absent-target abstention

### Count observations

- 633,369 annotation rows — full recipe (reported; source: https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md)
- 610,894 annotation rows — point recipe (reported; source: https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md)

The recipes reuse source images and are not additive datasets. This download contains no screenshots. Counts are publisher-reported; rows named for trajectories are independent decision examples, not full trajectories.

## License declarations

- code: not recorded
- data: other — https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md (retrieved 2026-10-17T01:48:10Z; SHA-256 96a87222645c3f823e6f67e50708792e2917ddeb8eea5aacdf2de8c5bbff165f)
- https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md (retrieved 2026-10-17T01:48:10Z; SHA-256 96a87222645c3f823e6f67e50708792e2917ddeb8eea5aacdf2de8c5bbff165f)
