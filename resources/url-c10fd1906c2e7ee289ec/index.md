---
title: "FiftyOne GUI Grounding Training Set with… | AwesomeCUA"
url: https://awesomecua.com/resources/url-c10fd1906c2e7ee289ec/
updated: 2026-10-18
type: dataset
lang: en
---

# FiftyOne GUI Grounding Training Set with Synthetic Augmentation

4,036 GUI screenshots, mostly macOS browser views, with interaction keypoints and task descriptions: 739 manually annotated originals plus 3,297 color-vision and reworded-task variants made with a FiftyOne plugin.

- Catalog URL: https://awesomecua.com/resources/url-c10fd1906c2e7ee289ec/
- Original source: https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, macos, web
- Topics: grounding, data-generation, robustness
- Evidence checked: 2026-10-18T15:59:00Z
- ID: url:c10fd1906c2e7ee289ec

## Limitations

First published as harpreetsahota/FiftyOne-GUI-Grounding-Train-with-Synthetic, which the Hub now resolves to this repository. The card describes grayscale, color inversion, six color-vision simulations, resolution scaling and text variants, and says synthetic samples carry a transform_record field. The exported samples at revision 3deedc5d have no such field (metadata.json lists none), and their tags name only three transforms: 1,884 tritanopia, 942 color-inverted and 471 task-description-augmented samples. The 739 originals are tagged 370 train and 369 val, and every synthetic sample is tagged train. Apache-2.0 is the card's data declaration.

- Record JSON: https://awesomecua.com/resources/url-c10fd1906c2e7ee289ec/record.json

## Structured profile

- Formats: FiftyOne dataset export (samples.json, metadata.json), PNG
- Modalities: screenshots, task descriptions, interaction keypoints
- Splits: train, val
- Supervision: human-placed interaction points, action types, natural-language task descriptions, programmatic image and text augmentations

### Count observations

- 4,036 samples — whole release (reported; source: https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic/raw/3deedc5d3667696aff317e5e8a3b47d83b9fb48c/README.md)
- 739 original annotated screenshots — real samples in the release (reported; source: https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic/raw/3deedc5d3667696aff317e5e8a3b47d83b9fb48c/README.md)
- 3,297 synthetic variant samples — augmented samples in the release (reported; source: https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic/raw/3deedc5d3667696aff317e5e8a3b47d83b9fb48c/README.md)
- 4,036 PNG files — data/ at Hub revision 3deedc5d (computed) (computed; source: https://huggingface.co/api/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic/revision/3deedc5d3667696aff317e5e8a3b47d83b9fb48c)

Computed from samples.json at this revision (15.7 MB, read once): 4,036 samples, of which 739 have plain timestamp file names and 3,297 carry a hash suffix; sample tags give 1,884 tritanopia, 942 color_inverted and 471 task_description_augmented variants, and 370 train plus 369 val originals; 17,916 keypoints in all, counted again on each variant; platform labels 3,721 macOS, 205 Mobile and 110 blank. Variants duplicate the annotations of their source screenshots; sample counts include those repeated annotations. Samples, files and keypoints are different units; these counts are reported separately.

## License declarations

- code: not recorded
- data: Apache-2.0 — https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic/raw/3deedc5d3667696aff317e5e8a3b47d83b9fb48c/README.md
- document: not recorded
- weights: not recorded

- data review: Publisher dataset-card declaration for this release.
  Sources: https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic/raw/3deedc5d3667696aff317e5e8a3b47d83b9fb48c/README.md

## Primary evidence

- https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic/raw/3deedc5d3667696aff317e5e8a3b47d83b9fb48c/README.md (retrieved 2026-10-18T15:59:00Z; SHA-256 44795390cfe06d7e1fe10541bb949f609cc1af8fd204857f6f6487eb3ba71895)
- https://huggingface.co/api/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic/revision/3deedc5d3667696aff317e5e8a3b47d83b9fb48c (retrieved 2026-10-18T15:58:38Z; SHA-256 3bb91cff67b20daec766bb819352cc443bc03a942985a27a2bb94f36734ddb60)
- https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic/raw/3deedc5d3667696aff317e5e8a3b47d83b9fb48c/metadata.json (retrieved 2026-10-18T15:58:39Z; SHA-256 350cc2918e6a826bfda5f5b5feb9f6f35320d5b7fd06eda1c677e269ee462d07)
- https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic/raw/3deedc5d3667696aff317e5e8a3b47d83b9fb48c/README.md (retrieved 2026-10-18T15:59:00Z; SHA-256 44795390cfe06d7e1fe10541bb949f609cc1af8fd204857f6f6487eb3ba71895)
- https://huggingface.co/api/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic (retrieved 2026-10-18T15:58:39Z; SHA-256 3bb91cff67b20daec766bb819352cc443bc03a942985a27a2bb94f36734ddb60)
- https://huggingface.co/api/datasets/harpreetsahota/FiftyOne-GUI-Grounding-Train-with-Synthetic (retrieved 2026-10-18T15:58:39Z; SHA-256 3bb91cff67b20daec766bb819352cc443bc03a942985a27a2bb94f36734ddb60)
