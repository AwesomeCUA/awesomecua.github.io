---
title: "Salesforce Grounding Dataset | AwesomeCUA"
url: https://awesomecua.com/resources/url-1001251b5a7729988118/
updated: 2026-10-18
type: dataset
lang: en
---

# Salesforce Grounding Dataset

GUI grounding set that merges Aria-UI, OmniAct, Widget Caption, UI-Vision and OS-Atlas screenshots into target boxes with action, appearance, function and combined instructions, cited to GTA1.

- Catalog URL: https://awesomecua.com/resources/url-1001251b5a7729988118/
- Original source: https://huggingface.co/datasets/Salesforce/grounding_dataset
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: grounding, data-generation
- Evidence checked: 2026-10-18T12:26:45Z
- ID: url:1001251b5a7729988118

## Limitations

Hub revision 0bf2eb71 lists the card and 75 train Parquet shards; access is open. The card names desktop, web, mobile and operating-system interfaces without naming a mobile OS. Each row keeps a source-dataset tag and the original caption; the card does not describe how the description, function and combined instruction fields were produced, and no rows were downloaded. The card asks users to cite GTA1 and the five source datasets but does not say which GTA1 checkpoint was trained on this release. No license is declared for the compilation itself.

- Record JSON: https://awesomecua.com/resources/url-1001251b5a7729988118/record.json

## Structured profile

- Formats: Parquet
- Modalities: GUI screenshots, bounding boxes, instructions, element descriptions
- Splits: train
- Supervision: instruction-to-bounding-box GUI grounding

### Count observations

- 70,688 examples — train split at Hub revision 0bf2eb71 (reported; source: https://huggingface.co/datasets/Salesforce/grounding_dataset/raw/0bf2eb71734353da92f137f8b26e27c2f75efcfc/README.md)

The count is the card's dataset_info num_examples for the train split. An example is one screenshot-target pair with its instructions. Rows are tagged ariaui, omniact, widget_caption, ui_vision or os_altas by source.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: The card declares no license for this compilation. It lists the five source datasets' own licenses (Apache-2.0, MIT, CC BY 4.0), which stay with those sources and are not a grant for this release.
  Sources: https://huggingface.co/datasets/Salesforce/grounding_dataset/raw/0bf2eb71734353da92f137f8b26e27c2f75efcfc/README.md

## Primary evidence

- https://huggingface.co/datasets/Salesforce/grounding_dataset/raw/0bf2eb71734353da92f137f8b26e27c2f75efcfc/README.md (retrieved 2026-10-18T12:26:45Z; SHA-256 503369538fd705e5932f9eaa32b1107874fbb1392ead98c64988d9f1da3c4459)
- https://huggingface.co/api/datasets/Salesforce/grounding_dataset/revision/0bf2eb71734353da92f137f8b26e27c2f75efcfc (retrieved 2026-10-18T12:25:55Z; SHA-256 573d7ee66dbb84e8eef9609b7f1ce3913659521a4895fb92c2731b73d7de82ab)
