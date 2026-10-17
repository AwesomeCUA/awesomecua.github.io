# Wave UI

Screenshot-instruction records with target boxes and UI metadata such as OCR, source, element type and platform.

- Catalog URL: https://awesomecua.github.io/resources/url-0dbb55f127da04d95222/
- Original source: https://huggingface.co/datasets/agentsea/wave-ui
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, screen-understanding
- Evidence checked: 2026-10-17T04:01:33Z
- ID: url:0dbb55f127da04d95222

## Limitations

Train, validation and test Parquet files are publicly listed. The compilation license explicitly preserves each image’s original source terms and grants no extra rights to those images. The card exposes a platform column without listing its values, so operating-system coverage remains unspecified.

- Record JSON: https://awesomecua.github.io/resources/url-0dbb55f127da04d95222/record.json

## Structured profile

- formats: Parquet
- modalities: images, text, bounding boxes, OCR metadata
- splits: train, validation, test
- supervision: instruction-to-target boxes

### Count observations

- 63,530 rows — train split (reported; source: https://huggingface.co/datasets/agentsea/wave-ui/raw/main/README.md)
- 7,944 rows — validation split (reported; source: https://huggingface.co/datasets/agentsea/wave-ui/raw/main/README.md)
- 7,938 rows — test split (reported; source: https://huggingface.co/datasets/agentsea/wave-ui/raw/main/README.md)

Card-reported row counts are not unique-screen counts. The source field is important for the per-image license terms; the compilation does not relicense original images.

## License declarations

- code: not recorded
- data: Wave UI Dataset License; per-image source terms retained — https://huggingface.co/datasets/agentsea/wave-ui/raw/main/LICENSE.md
- document: not recorded
- weights: not recorded

- data review: The compilation expressly does not relicense its images and lists differing source terms. No blanket permissive data license is appropriate.
  Sources: https://huggingface.co/datasets/agentsea/wave-ui/raw/main/LICENSE.md

## Primary evidence

- https://huggingface.co/api/datasets/agentsea/wave-ui (retrieved 2026-10-17T04:01:33Z; SHA-256 76e5e458eb8788f2c2cfddd06cb944327f363ec70120e122ce93d1350cf82e19)
- https://huggingface.co/datasets/agentsea/wave-ui/raw/main/README.md (retrieved 2026-10-17T04:01:33Z; SHA-256 27ec13aa77dc55113e4d1a19c2269070e2d69d2fe8df8e2313721a1e3fc66bd9)
- https://huggingface.co/datasets/agentsea/wave-ui/raw/main/LICENSE.md (retrieved 2026-10-17T04:06:57Z; SHA-256 63c6b3ce6a3d9c21a505865ceed698df2894bcb292590c59686e9477df867942)
- https://huggingface.co/datasets/cckevinn/GUI-Actor-Data/raw/main/README.md (retrieved 2026-10-17T02:42:32Z; SHA-256 e42bbcf8d466c977f9b2150feb73d8cbda2ff907c279630ad4730a8b1f5d665c)
- https://huggingface.co/api/datasets/agentsea/wave-ui (retrieved 2026-10-17T04:01:33Z; SHA-256 76e5e458eb8788f2c2cfddd06cb944327f363ec70120e122ce93d1350cf82e19)
