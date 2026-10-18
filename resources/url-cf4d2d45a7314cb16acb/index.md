# AndroidCode

HTML and annotation release used for Code2World’s action-conditioned GUI-state prediction training, constructed from mobile GUI trajectories.

- Catalog URL: https://awesomecua.github.io/resources/url-cf4d2d45a7314cb16acb/
- Original source: https://huggingface.co/datasets/GD-ML/AndroidCode
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: world-models, data-generation, screen-understanding
- Evidence checked: 2026-10-18T04:27:14Z
- ID: url:cf4d2d45a7314cb16acb

## Limitations

The Hub card is license-only; semantic description and reported scale come from the official Code2World README. The public manifest contains HTML files, Android-Control train/test JSON files and extraction/loading scripts. It does not list standalone screenshot image files, and embedded/reference image packaging was not inspected. MIT is the data-card declaration, not a grant for every upstream source dataset.

- Record JSON: https://awesomecua.github.io/resources/url-cf4d2d45a7314cb16acb/record.json

## Structured profile

- formats: HTML, JSON, Python extraction/loading scripts
- modalities: GUI screenshots (described input), GUI actions, HTML
- splits: Android-Control train file, Android-Control test file
- supervision: action-conditioned next-state code prediction, generated HTML supervision

### Count observations

- > 80,000 screen–action pairs — AndroidCode corpus described by Code2World README; released JSON rows not recounted (reported; source: https://raw.githubusercontent.com/AMAP-ML/Code2World/HEAD/readme.md)

The manifest lists 58,953 HTML files, which are not converted into transition/example counts. The reported >80k pairs and the HTML-file inventory have different units. The card itself has no sample schema or count; archive/image completeness and JSON contents were not audited.

## License declarations

- code: not recorded
- data: MIT — https://huggingface.co/datasets/GD-ML/AndroidCode/raw/af316a6be79bbe08c4fc09ea588b5f80f177ed25/README.md
- document: not recorded
- weights: not recorded

- data review: Publisher dataset-card declaration for this release; it does not establish rights to all upstream screenshots, applications or source content.
  Sources: https://huggingface.co/datasets/GD-ML/AndroidCode/raw/af316a6be79bbe08c4fc09ea588b5f80f177ed25/README.md

## Primary evidence

- https://raw.githubusercontent.com/AMAP-ML/Code2World/HEAD/readme.md (retrieved 2026-10-18T04:27:14Z; SHA-256 26c14a14166d3b747454d1924ecdf6d96652ac857ae6ad488630dc843036a777)
- https://huggingface.co/api/datasets/GD-ML/AndroidCode (retrieved 2026-10-18T04:33:22Z; SHA-256 5774a3c096264fbba58b7a16587ea65f35628edb9ca39afe8a32c74ec7fd1ce7)
- https://huggingface.co/datasets/GD-ML/AndroidCode/raw/af316a6be79bbe08c4fc09ea588b5f80f177ed25/README.md (retrieved 2026-10-18T04:35:17Z; SHA-256 d8d7a46d41a1a37fe4f0a5f637bf55c649310185329127d8a2204632e480be17)
