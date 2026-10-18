# WebSRC v1.0

Webpage segments, questions, answers, HTML, screenshots and layout metadata for structural reading comprehension.

- Catalog URL: https://awesomecua.github.io/resources/url-e0ba328ae1a643b0a5aa/
- Original source: https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0
- Kind: dataset
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: screen-understanding, grounding
- Evidence checked: 2026-10-18T04:35:16Z
- ID: url:e0ba328ae1a643b0a5aa

## Limitations

Public release includes train+dev and test ZIP packages plus a test-answer JSON file. The v1.0 card’s exact split table differs from the older project-page headline of 0.44M questions/6.5K pages; counts are kept with their sources. This is static webpage understanding, not an interactive browser-agent trajectory dataset. CC-BY-4.0 is the data-card declaration.

- Record JSON: https://awesomecua.github.io/resources/url-e0ba328ae1a643b0a5aa/record.json

## Structured profile

- formats: CSV, HTML, JSON, ZIP packages
- modalities: questions and answers, HTML, screenshots, layout metadata
- splits: train, dev, test
- supervision: extractive or yes/no answers, answer DOM-element references

### Count observations

- 307,315 question–answer examples — WebSRC v1.0 train (reported; source: https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md)
- 4,549 web pages — WebSRC v1.0 train (reported; source: https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md)
- 52,826 question–answer examples — WebSRC v1.0 dev (reported; source: https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md)
- 913 web pages — WebSRC v1.0 dev (reported; source: https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md)
- 40,357 question–answer examples — WebSRC v1.0 test (reported; source: https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md)
- 985 web pages — WebSRC v1.0 test (reported; source: https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md)

Each dataset.csv row is a QA example; web pages and QA examples are different units. Use the v1.0 split table rather than merging the older project headline into it. The card retains email-evaluation instructions, while the manifest now includes test answers; no submission was made. Payload archives were not downloaded.

## License declarations

- code: not recorded
- data: CC-BY-4.0 — https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md
- document: not recorded
- weights: not recorded

- data review: Publisher dataset-card declaration for this release; it does not establish rights to all upstream screenshots, applications or source content.
  Sources: https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md

## Primary evidence

- https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md (retrieved 2026-10-18T04:35:16Z; SHA-256 061e5bcaa49e819f0133afb912ad5ce20a8c2b6c28ca60319a4635d6ce835ddb)
- https://huggingface.co/api/datasets/X-LANCE/WebSRC_v1.0 (retrieved 2026-10-18T04:33:29Z; SHA-256 a7976dd931c3fcf11de2456614f95eb071978599bd70fb89c0ea009d31da4300)
- https://x-lance.github.io/WebSRC/ (retrieved 2026-10-17T15:37:04Z; SHA-256 3c2c601d8b4ad2f379cac9b97a2cbb901883d9bc6c1a682359f9b4135e6dd4bc)
