# GUI-Net-1M

A TongUI-collected training corpus from multimodal web tutorials, distributed as annotation files and split screenshot archives for GUI trajectory supervision.

- Catalog URL: https://awesomecua.github.io/resources/url-8c9aaafb918aaf8b4e92/
- Original source: https://huggingface.co/datasets/Bofeee5675/GUI-Net-1M
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: data-generation, grounding, imitation-learning
- Evidence checked: 2026-10-17T12:30:54Z
- ID: url:8c9aaafb918aaf8b4e92

## Limitations

The ungated manifest lists JSON annotations and multipart image archives. Training documentation describes roughly one million collected training trajectories from Wikihow, Baidu Experience and GUI videos; this is distinct from larger mixtures that add external datasets. Platform-specific distribution and exact row counts were not established from this release metadata. Apache-2.0 is the publisher dataset declaration, without a grant of additional rights to upstream tutorial content. No image archive or example record was downloaded.

- Record JSON: https://awesomecua.github.io/resources/url-8c9aaafb918aaf8b4e92/record.json

## Structured profile

- formats: JSON annotations, multipart image archives
- modalities: text, screenshots
- splits: training collection
- supervision: GUI trajectory supervision from multimodal tutorials

### Count observations

- ≈ 1,000,000 training trajectories — TongUI-collected GUI-Net-1M data, excluding added external mixtures (reported; source: https://raw.githubusercontent.com/TongUI-agent/TongUI-agent/HEAD/docs/train.md)

The source reports an approximate trajectory total; it does not establish per-platform counts or a complete test-split inventory.

## License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/Bofeee5675/GUI-Net-1M/raw/main/README.md
- document: not recorded
- weights: not recorded

- data review: Publisher declaration for this dataset packaging; original web/tutorial materials retain applicable rights.
  Sources: https://huggingface.co/datasets/Bofeee5675/GUI-Net-1M/raw/main/README.md

## Primary evidence

- https://raw.githubusercontent.com/TongUI-agent/TongUI-agent/HEAD/README.md (retrieved 2026-10-17T12:30:54Z; SHA-256 f30a18d1a533b8f71f436dae2ee7369f8971422bd76527e069499c5bba911912)
- https://huggingface.co/api/datasets/Bofeee5675/GUI-Net-1M (retrieved 2026-10-17T12:32:07Z; SHA-256 314a77eb0ba43bedffbe6869601e41aea41993eaca59d86ba346652c853802d2)
- https://raw.githubusercontent.com/TongUI-agent/TongUI-agent/HEAD/docs/train.md (retrieved 2026-10-17T12:36:55Z; SHA-256 b51acb70c95d079ccbe1de0a685ad7c8a4b3b5bed11e6162e6f7c2f60d78805e)
- https://huggingface.co/datasets/Bofeee5675/GUI-Net-1M/raw/main/README.md (retrieved 2026-10-17T12:32:07Z; SHA-256 c2df5c3a6dd576ae53f0dc0f72ecab07d93ed034b04336abd2072a6f0d812c64)
