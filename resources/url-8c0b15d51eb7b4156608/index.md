---
title: "ScreenParser | AwesomeCUA"
url: https://awesomecua.com/resources/url-8c0b15d51eb7b4156608/
updated: 2026-10-18
type: model
lang: en
---

# ScreenParser

YOLO11-L UI element detector from IBM Research and ETH Zurich that boxes and labels 55 element classes in web screenshots; the main checkpoint is trained on ScreenParse v2 and the v1 detector stays on a branch.

- Catalog URL: https://awesomecua.com/resources/url-8c0b15d51eb7b4156608/
- Original source: https://huggingface.co/docling-project/ScreenParser
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: screen-understanding
- Evidence checked: 2026-10-18T12:04:56Z
- ID: url:8c0b15d51eb7b4156608

## Limitations

The model outputs boxes, class labels and confidences only, without element text; the card suggests OCR or a separate vision-language model for text. It is trained on rendered web screenshots, and the card warns that results may differ on native desktop or mobile screens. The main-branch Hub manifest holds one Ultralytics weight file, best.pt, and the card gives a 1280-pixel fine-tuning resolution. Apache-2.0 is the card's weight declaration; base-model and training-data terms are separate.

- Record JSON: https://awesomecua.com/resources/url-8c0b15d51eb7b4156608/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: Apache-2.0 — https://huggingface.co/docling-project/ScreenParser/raw/f029e565f1206577402e43206454522075be3f72/README.md

- weights review: Publisher model-card declaration for this checkpoint; base-model and training-data terms are separate.
  Sources: https://huggingface.co/docling-project/ScreenParser/raw/f029e565f1206577402e43206454522075be3f72/README.md

## Primary evidence

- https://huggingface.co/docling-project/ScreenParser/raw/f029e565f1206577402e43206454522075be3f72/README.md (retrieved 2026-10-18T12:04:56Z; SHA-256 0889bc9a333b47c638fd1e0e437c89c0d76202d9a6fdc419479c5008d52e9aa6)
- https://huggingface.co/api/models/docling-project/ScreenParser (retrieved 2026-10-18T12:04:56Z; SHA-256 be47c7821b642c03e5965e1ce4870b2b6f8240f8418c27469f1ced07293a4909)
- https://huggingface.co/docling-project/ScreenParser/raw/f029e565f1206577402e43206454522075be3f72/README.md (retrieved 2026-10-18T12:04:56Z; SHA-256 0889bc9a333b47c638fd1e0e437c89c0d76202d9a6fdc419479c5008d52e9aa6)
