# MobileGUI-VBench

Mobile-app task definitions covering everyday scenarios, with annotated preconditions and clarification requirements for evaluating agent behavior.

- Catalog URL: https://awesomecua.github.io/resources/url-d7a4f34a6a5202af5f64/
- Original source: https://huggingface.co/datasets/vivo-ai/MobileGUI-VBench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: evaluation, mobile-navigation, cross-app
- Evidence checked: 2026-10-17T02:42:32Z
- ID: url:d7a4f34a6a5202af5f64

## Limitations

Public task files are available as JSONL and XLSX with documentation. The card explicitly declares Apache-2.0 for the dataset, despite having no license field in its YAML metadata. It identifies mobile apps without fixing an operating-system taxonomy; model scores are not imported.

## Structured profile

- actions: mobile interface operations, clarification requests
- evaluation: Published task definitions include preconditions and clarification requirements; the metadata review does not independently validate the reported agent scores.
- focus: mobile task completion, clarification behavior, cross-app tasks
- observations: mobile app interfaces
- setting: interactive

### Count observations

- 150 tasks — MobileGUI-VBench release (reported; source: https://huggingface.co/datasets/vivo-ai/MobileGUI-VBench/raw/main/README.md)
- 40 mobile apps — MobileGUI-VBench release (reported; source: https://huggingface.co/datasets/vivo-ai/MobileGUI-VBench/raw/main/README.md)

The card describes 140 single-app and 10 cross-app tasks. Task and app counts are different units.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/vivo-ai/MobileGUI-VBench/raw/main/README.md (retrieved 2026-10-17T02:42:32Z; SHA-256 422ff6a557a1aabd8f6c6ef26e5fd05b992f4acf0e5128ab8bc437021fcc5ea7)
- https://huggingface.co/api/datasets/vivo-ai/MobileGUI-VBench (retrieved 2026-10-17T02:42:32Z; SHA-256 5850fc58f54c877cffe328dba2a0b5e3e98767637aae6d6efd9a037cf06eabce)
