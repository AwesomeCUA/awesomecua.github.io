# FiftyOne GUI Grounding Training Set

739 GUI screenshots, mostly macOS browser views, labeled with interaction points, action types and per-action task descriptions in a COCO4GUI-based FiftyOne format for element grounding and click prediction.

- Catalog URL: https://awesomecua.com/resources/url-f0eac3ad813245645492/
- Original source: https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, macos, web
- Topics: grounding, data-generation
- Evidence checked: 2026-10-18T15:34:01Z
- ID: url:f0eac3ad813245645492

## Limitations

First published as harpreetsahota/FiftyOne-GUI-Grounding-Train, which the Hub now resolves to this repository. Per the card, the dataset curator captured and annotated the screenshots with the GUI annotation tool it links, between July 22 and August 8, 2025, mostly on macOS in Arc and Chrome. It is a small training set, not a benchmark; files other than samples.json and metadata.json were not downloaded.

- Record JSON: https://awesomecua.com/resources/url-f0eac3ad813245645492/record.json

## Structured profile

- formats: FiftyOne dataset export (samples.json, metadata.json), PNG
- modalities: screenshots, task descriptions, interaction keypoints
- splits: train
- supervision: human-placed interaction points, action types, natural-language task descriptions

### Count observations

- 739 annotated screenshots — training set described by the card at revision ec67c2bf (reported; source: https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train/raw/ec67c2bfce4f6a9c9fcc52ce455c5b7a783dc812/README.md)

The Hub manifest at this revision lists 739 PNG files under data/. Computed from samples.json at this revision (26 MB, not retained as a receipt): 2,397 interaction keypoints (1,960 click, 185 hover, 158 select, 48 type, 46 drag) and platform labels of 704 macOS, 23 Mobile and 12 blank. Samples also carry a screenparser_preds detection field that the card does not describe; it is not counted as human annotation.

## License declarations

- code: not recorded
- data: Apache-2.0 — https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train/raw/ec67c2bfce4f6a9c9fcc52ce455c5b7a783dc812/README.md
- document: not recorded
- weights: not recorded

- data review: Publisher dataset-card declaration for this release; it does not establish rights to the third-party applications and websites shown in the screenshots.
  Sources: https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train/raw/ec67c2bfce4f6a9c9fcc52ce455c5b7a783dc812/README.md

## Primary evidence

- https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train/raw/ec67c2bfce4f6a9c9fcc52ce455c5b7a783dc812/README.md (retrieved 2026-10-18T15:34:01Z; SHA-256 d41b2473cac9303784d9470a17c2d56f21e1f7980610acd20de6575817238b35)
- https://huggingface.co/api/datasets/Voxel51/FiftyOne-GUI-Grounding-Train/revision/ec67c2bfce4f6a9c9fcc52ce455c5b7a783dc812 (retrieved 2026-10-18T15:34:01Z; SHA-256 49cf4994baaae0c3703b7b084e7c4640b9a57e9d4bdfa7c9484ad69d41a5eb78)
- https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train/raw/ec67c2bfce4f6a9c9fcc52ce455c5b7a783dc812/metadata.json (retrieved 2026-10-18T15:34:01Z; SHA-256 607b0b21cb543562117e879949cacad745caec12ebadbb5c42010ac3f22898e8)
- https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train/raw/ec67c2bfce4f6a9c9fcc52ce455c5b7a783dc812/README.md (retrieved 2026-10-18T15:34:01Z; SHA-256 d41b2473cac9303784d9470a17c2d56f21e1f7980610acd20de6575817238b35)
- https://huggingface.co/api/datasets/harpreetsahota/FiftyOne-GUI-Grounding-Train (retrieved 2026-10-18T15:34:10Z; SHA-256 49cf4994baaae0c3703b7b084e7c4640b9a57e9d4bdfa7c9484ad69d41a5eb78)
- https://huggingface.co/api/datasets/Voxel51/FiftyOne-GUI-Grounding-Train (retrieved 2026-10-18T15:34:10Z; SHA-256 49cf4994baaae0c3703b7b084e7c4640b9a57e9d4bdfa7c9484ad69d41a5eb78)
