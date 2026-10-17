# Aguvis stage 1 grounding data

The first-stage Aguvis training collection, packaging GUI element-grounding annotations and image archives from multiple interface-data sources.

- Catalog URL: https://awesomecua.github.io/resources/url-06dd5ac7917c45d48509/
- Original source: https://huggingface.co/datasets/xlangai/aguvis-stage1
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding, data-generation
- Evidence checked: 2026-10-17T02:03:33Z
- ID: url:06dd5ac7917c45d48509

## Limitations

The manifest contains grounding JSON annotations and packaged images. The card declares Apache-2.0, which is recorded for this release without overriding source-dataset rights. This first-stage grounding collection is distinct from the project’s second-stage trajectory collection. No archive or training sample was downloaded.

- Record JSON: https://awesomecua.github.io/resources/url-06dd5ac7917c45d48509/record.json

## Structured profile

- formats: JSON annotations, ZIP image packages, multipart TAR image packages
- modalities: GUI screenshots, grounding annotations
- splits: training
- supervision: GUI grounding supervised fine-tuning

### Count observations

No count recorded.

Stage 1 grounding release, Hub revision 5d11f8f5. JSON annotations and ZIP/multipart TAR image packages are publicly listed. The official training configuration groups web, desktop and mobile inputs and selects all rows of its configured inputs; this is a training recipe, not a release sample count or held-out split. The config names omniact.json while the Hub manifest lists omniact_fix.json, so local paths need reconciliation. No sample total is inferred from names such as webui350k. Apache-2.0 is the release card declaration; upstream source rights remain separate.

## License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/xlangai/aguvis-stage1/raw/main/README.md
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/xlangai/aguvis-stage1/raw/main/README.md (retrieved 2026-10-17T02:03:33Z; SHA-256 38bda302cf741b9d2b2394b53d157b3c19d8a73e3704c01ed2f9a27c374feb77)
- https://huggingface.co/api/datasets/xlangai/aguvis-stage1 (retrieved 2026-10-17T02:03:33Z; SHA-256 cb3b8ec88d811d946df3cbf38ef555db5a10d1124668765710c380e9b1988b06)
- https://raw.githubusercontent.com/xlang-ai/aguvis/HEAD/README.md (retrieved 2026-10-16T06:36:00Z; SHA-256 2dd9f36b818c1b7b6bd772ba8575f6c0ebab6d9e0d307edcc2f196f3e4ba502e)
- https://raw.githubusercontent.com/xlang-ai/aguvis/HEAD/data/stage1.yaml (retrieved 2026-10-17T14:21:11Z; SHA-256 f6a9e55c5d48469e2c8f7799d917d25e7a758036f71c7c045fa92c35057d20da)
- https://huggingface.co/datasets/xlangai/aguvis-stage1/raw/main/README.md (retrieved 2026-10-17T02:03:33Z; SHA-256 38bda302cf741b9d2b2394b53d157b3c19d8a73e3704c01ed2f9a27c374feb77)
