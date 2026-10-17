# GUIHalluBench

Measures hallucination in UI-element parsing by matching the boxes and descriptions a model lists for 1,000 English and 1,000 Chinese screenshots against human annotations.

- Catalog URL: https://awesomecua.github.io/resources/github-ant-research-guihallubench/
- Original source: https://github.com/ant-research/GUIHalluBench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: evaluation, robustness
- Evidence checked: 2026-10-16T06:40:51Z
- ID: github:ant-research/guihallubench

## Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.github.io/resources/github-ant-research-guihallubench/record.json

## Structured profile

- actions: list of UI element boxes [x1,y1,x2,y2] and text descriptions
- evaluation: Metrics use greedy one-to-one matching in descending IoU order, then micro precision/recall/F1 and lowercased difflib.SequenceMatcher description similarity on matched pairs. Actual metrics.py accepts IoU >= 0.5 at its default threshold; README prose says > 0.5. Predictions align to annotations by image_path; callers must supply complete prediction coverage because missing predictions are not independently enumerated by evaluate_dataset.
- focus: GUI page-element detection, element-description consistency
- observations: page screenshot
- setting: offline

### Count observations

- 1,000 page-annotation entries — English annotation subset reported by README (reported; source: https://raw.githubusercontent.com/ant-research/GUIHalluBench/HEAD/README.md)
- 1,000 page-annotation entries — Chinese annotation subset reported by README (reported; source: https://raw.githubusercontent.com/ant-research/GUIHalluBench/HEAD/README.md)

Each annotation entry represents a page, not one UI element. README’s illustrative num_samples=4796 output is not adopted as a corpus count. Public tree contains both annotation JSON files and an images.tar.gz Git-LFS pointer; payload availability/integrity was not tested by downloading images. LEGAL.md only governs comment-language precedence, not a code/data license grant; both slots remain unknown. No benchmark run was performed.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://github.com/ant-research/GUIHalluBench (retrieved 2026-10-16T06:40:51Z; SHA-256 51df9dbcf52f46e4774207f2e6ad84dc8a6d117cdab6f77a38e9897ded1d0963)
- https://raw.githubusercontent.com/ant-research/GUIHalluBench/HEAD/README.md (retrieved 2026-10-16T06:35:59Z; SHA-256 d9c476d6960a4ef99e20d4c3b5d35a63f3ae5e61fc20e9dea00b11e64b74c9e9)
- https://raw.githubusercontent.com/ant-research/GUIHalluBench/HEAD/src/metrics.py (retrieved 2026-10-17T14:21:09Z; SHA-256 f36707dfcd3e83fc9d7f57b50d0c27007801e5029cc1ac255e000560ecf778fc)
- https://api.github.com/repos/ant-research/GUIHalluBench/git/trees/master?recursive=1 (retrieved 2026-10-17T14:14:07Z; SHA-256 c0896bc90d515b7bd8fe86b062aeb199bd47570e6eca8474986f5b1ef1d98dbd)
- https://raw.githubusercontent.com/ant-research/GUIHalluBench/HEAD/LEGAL.md (retrieved 2026-10-17T14:21:09Z; SHA-256 adba50d9794b9ef3f7ec8cbc680f7f1fa3fbf9df0ac8d1f9b9ccab6d941bc11b)
- https://raw.githubusercontent.com/ant-research/GUIHalluBench/HEAD/.gitattributes (retrieved 2026-10-17T14:34:56Z; SHA-256 8f35fa75be42a7a53e4f96de1b62be84962d2cf1beb8b23dfcfaecfaea4a6b90)
