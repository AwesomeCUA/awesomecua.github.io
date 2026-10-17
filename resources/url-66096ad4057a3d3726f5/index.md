# GUI-Actor data

A processed screenshot and bounding-box collection released for training GUI-Actor visual grounding models.

- Catalog URL: https://awesomecua.github.io/resources/url-66096ad4057a3d3726f5/
- Original source: https://huggingface.co/datasets/cckevinn/GUI-Actor-Data
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, data-generation
- Evidence checked: 2026-10-17T02:42:32Z
- ID: url:66096ad4057a3d3726f5

## Limitations

Public JSON annotations and image archives are present. The card has no data-license declaration. Its source list contains mismatched hyperlinks and says six datasets while naming fewer distinct entries; no source-derivation relationships or aggregate count are imported from that list.

- Record JSON: https://awesomecua.github.io/resources/url-66096ad4057a3d3726f5/record.json

## Structured profile

- formats: JSON annotations, ZIP image packages, multipart image archives
- modalities: GUI screenshots, bounding boxes, grounding annotations
- splits: training
- supervision: GUI grounding with bounding-box supervision

### Count observations

No count recorded.

Public Hub revision 5a0b35fb includes six bbox JSON files and associated image archives. The training configuration names six input paths with sampling_strategy=all; those input paths are not six disjoint datasets or a verified example count. The card’s source-list wording and mismatched hyperlinks remain unresolved, so its approximately 1M screenshots/10M elements headline is not adopted as a release inventory. No data license is established by the card, and the model repository license is not transferred to these data.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/cckevinn/GUI-Actor-Data/raw/main/README.md (retrieved 2026-10-17T02:42:32Z; SHA-256 e42bbcf8d466c977f9b2150feb73d8cbda2ff907c279630ad4730a8b1f5d665c)
- https://huggingface.co/api/datasets/cckevinn/GUI-Actor-Data (retrieved 2026-10-17T02:42:32Z; SHA-256 d6271cff879b1a2a70490cf3dd95765bef44ecfca531d8ef3545f101673b4423)
- https://raw.githubusercontent.com/microsoft/GUI-Actor/HEAD/README.md (retrieved 2026-10-16T06:36:00Z; SHA-256 2dafdebf2fa1e0a5db871addd103e50cb55625f0108c757708029e885920ee4e)
- https://raw.githubusercontent.com/microsoft/GUI-Actor/HEAD/data/data_config.yaml (retrieved 2026-10-17T14:21:12Z; SHA-256 3521c849b29d7fc88430a8e73a8b2aeb2e613d7fa16ca054dd5bf4ec011b36ca)
