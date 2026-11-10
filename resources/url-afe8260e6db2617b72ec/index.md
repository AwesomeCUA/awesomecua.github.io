---
title: "GUIrilla-Task | AwesomeCUA"
url: https://awesomecua.com/resources/url-afe8260e6db2617b72ec/
updated: 2026-10-18
type: dataset
lang: en
---

# GUIrilla-Task

macOS screenshots paired with generated instructions and a ground-truth click or type action on a labelled element, collected by the GUIrilla accessibility-API crawler in app-disjoint train and test splits.

- Catalog URL: https://awesomecua.com/resources/url-afe8260e6db2617b72ec/
- Original source: https://huggingface.co/datasets/macpaw-research/GUIrilla-Task
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, macos
- Topics: grounding, action-prediction, data-generation
- Evidence checked: 2026-10-18T12:27:04Z
- ID: url:afe8260e6db2617b72ec

## Limitations

Each record holds the full screenshot, a cropped app-window image, the window's accessibility JSON, the element data (bounding box for clicks, insertion location and text for typing) and task/element categories. The card says GPT-4 agents drafted the tasks during crawling, so instructions are model-generated. The data license is CC-BY-NC-4.0 per card metadata and the bundled LICENSE; the separate MacPaw/GUIrilla code repository's MIT license is not transferred to the data.

- Record JSON: https://awesomecua.com/resources/url-afe8260e6db2617b72ec/record.json

## Structured profile

- Formats: Parquet
- Modalities: screenshots, cropped window images, accessibility trees, instructions, actions
- Splits: train, test
- Supervision: generated task instructions, ground-truth click and type actions, element bounding boxes

### Count observations

- 25,606 examples — train split at Hub revision ec4853a2 (reported; source: https://huggingface.co/datasets/macpaw-research/GUIrilla-Task/raw/ec4853a26f96e1c8adcc31670054f58a67a87297/README.md)
- 1,565 examples — test split at Hub revision ec4853a2 (reported; source: https://huggingface.co/datasets/macpaw-research/GUIrilla-Task/raw/ec4853a26f96e1c8adcc31670054f58a67a87297/README.md)
- 101 Parquet shards — data/ files at Hub revision ec4853a2 (96 train, 5 test) (computed) (computed; source: https://huggingface.co/api/datasets/macpaw-research/GUIrilla-Task/revision/ec4853a26f96e1c8adcc31670054f58a67a87297)

The card states the splits are application-level disjoint. Example counts come from the card's dataset_info and split table; shard counts were computed from the pinned Hub file list. An example is one screenshot-instruction-action triple; multi-step trajectories use a different unit.

## License declarations

- code: not recorded
- data: cc-by-nc-4.0 — https://huggingface.co/datasets/macpaw-research/GUIrilla-Task/raw/ec4853a26f96e1c8adcc31670054f58a67a87297/README.md
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/macpaw-research/GUIrilla-Task/raw/ec4853a26f96e1c8adcc31670054f58a67a87297/README.md (retrieved 2026-10-18T12:27:04Z; SHA-256 2ae8320c30f7d22085f290137e47dd2a735bf69e1a2c524bf1e340d9bd5ea658)
- https://huggingface.co/api/datasets/macpaw-research/GUIrilla-Task/revision/ec4853a26f96e1c8adcc31670054f58a67a87297 (retrieved 2026-10-18T12:26:25Z; SHA-256 bccbc1dd9fd5aae317583d464c9119090984aea910cb8dd6be3cc077d6bbb037)
- https://raw.githubusercontent.com/MacPaw/GUIrilla/15896d8c3158b7c4bbfaafc57582f1a28ff50074/README.md (retrieved 2026-10-18T12:26:24Z; SHA-256 9ffc792287271564b8dc841fa9b86f2cfc7d9f1e2b30c0d90aae059329f59273)
- https://huggingface.co/datasets/macpaw-research/GUIrilla-Task/raw/ec4853a26f96e1c8adcc31670054f58a67a87297/README.md (retrieved 2026-10-18T12:27:04Z; SHA-256 2ae8320c30f7d22085f290137e47dd2a735bf69e1a2c524bf1e340d9bd5ea658)
