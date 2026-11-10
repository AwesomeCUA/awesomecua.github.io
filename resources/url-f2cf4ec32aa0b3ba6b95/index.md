---
title: "WaveUI-25k | AwesomeCUA"
url: https://awesomecua.com/resources/url-f2cf4ec32aa0b3ba6b95/
updated: 2026-10-18
type: dataset
lang: en
---

# WaveUI-25k

A 24,978-example subset of an ~80k UI element collection, pairing screenshots and instructions with target boxes and annotated element names, descriptions, types, OCR, purposes and click expectations.

- Catalog URL: https://awesomecua.com/resources/url-f2cf4ec32aa0b3ba6b95/
- Original source: https://huggingface.co/datasets/agentsea/wave-ui-25k
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web, desktop, cross-platform
- Topics: grounding, screen-understanding
- Evidence checked: 2026-10-18T16:19:30Z
- ID: url:f2cf4ec32aa0b3ba6b95

## Limitations

The card describes this as a subset of a collection of about 80k preprocessed examples built from WebUI, RoboFlow website screenshots and GroundUI-18K, filtered for duplicates, overlaps, low quality and many text elements, with added annotation fields. The publisher's agentsea/wave-ui dataset (Wave UI) has the same 13 fields and 79,412 rows across three splits; the component link rests on that match. Dataset-viewer statistics over 12,493 of the rows (partial) show platform values web, desktop and mobile and source labels including roboflow, webui, mind2web_test_*, omniact, motif, screenspot and agent_studio. The repository declares no license, and the source datasets' terms are not inferred.

- Record JSON: https://awesomecua.com/resources/url-f2cf4ec32aa0b3ba6b95/record.json

## Structured profile

- Formats: Parquet
- Modalities: images, text, bounding boxes, OCR metadata
- Splits: train
- Supervision: instruction-to-target boxes, element annotations

### Count observations

- 24,978 rows — train split (reported; source: https://huggingface.co/datasets/agentsea/wave-ui-25k/raw/1b77b749cb4c9936f35838ed8cb0f1b69957ad08/README.md)

The row count comes from the card's dataset_info metadata; rows count labeled element examples, a separate unit from unique screens. The annotation fields are name, description, type, OCR, language, purpose and expectation.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: The WaveUI-25k repository has no license metadata or license file. The compilation license in the separate agentsea/wave-ui repository is not applied here, and the WebUI, RoboFlow and GroundUI-18K source terms are not inferred.
  Sources: https://huggingface.co/api/datasets/agentsea/wave-ui-25k

## Primary evidence

- https://huggingface.co/api/datasets/agentsea/wave-ui-25k (retrieved 2026-10-18T16:19:30Z; SHA-256 b74327a4ecca6fd198ba54ff78b6820a65f6451a7e8af6bf7aaacdb51488b0ec)
- https://huggingface.co/datasets/agentsea/wave-ui-25k/raw/1b77b749cb4c9936f35838ed8cb0f1b69957ad08/README.md (retrieved 2026-10-18T16:19:32Z; SHA-256 612d075ed11bba7357482d31b3d0d3dfa6d397babe36a236e6aa218ce6eb5488)
- https://datasets-server.huggingface.co/statistics?dataset=agentsea/wave-ui-25k&config=default&split=train (retrieved 2026-10-18T16:19:34Z; SHA-256 7ad5c9887649c0eaaa4180816c5bd8381d5b7e394f665134cfcdc6c01ba61210)
- https://huggingface.co/datasets/agentsea/wave-ui/raw/21dc5aa1b39c038aea30f4572d80edef592b7989/README.md (retrieved 2026-10-18T16:19:34Z; SHA-256 27ec13aa77dc55113e4d1a19c2269070e2d69d2fe8df8e2313721a1e3fc66bd9)
- https://huggingface.co/api/datasets/agentsea/wave-ui-25k (retrieved 2026-10-18T16:19:30Z; SHA-256 b74327a4ecca6fd198ba54ff78b6820a65f6451a7e8af6bf7aaacdb51488b0ec)
