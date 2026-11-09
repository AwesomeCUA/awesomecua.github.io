# AMEX dataset release

Official Hub release of AMEX: Android app screenshots annotated for interactive-element grounding, screen and element functionality, and instructions with stepwise GUI-action chains.

- Catalog URL: https://awesomecua.com/resources/url-1b2091d717c977d4f8b9/
- Original source: https://huggingface.co/datasets/Yuxiang007/AMEX
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: grounding, screen-understanding, mobile-navigation
- Evidence checked: 2026-10-19T06:22:26Z
- ID: url:1b2091d717c977d4f8b9

## Limitations

The card calls this the official dataset repository of the AMEX paper. The full release sits under AMEX/ as element_anno.zip, instruction_anno.zip and a screenshot archive split into eight 10 GiB parts plus a final zip (about 93.5 GB together); a sample/ folder holds one episode's five screenshots with its annotations. The card adds publisher figures for ScreenSpot mobile-subset and AndroidControl beyond the arXiv paper. The AMEX project page links both this dataset and the AMEX-codebase training-code repository, which the catalog holds as the AMEX record github:yuxiangchai/amex-codebase; this release is recorded as its component. CC-BY-4.0 is the card's data declaration; that repository's Apache-2.0 code license is separate.

- Record JSON: https://awesomecua.com/resources/url-1b2091d717c977d4f8b9/record.json

## Structured profile

- Formats: split ZIP archives, JSON, PNG
- Modalities: screenshots, element bounding boxes, functionality descriptions, instructions, actions
- Splits: not recorded
- Supervision: interactive-element grounding, screen and element functionality descriptions, instructions with stepwise GUI-action chains

### Count observations

- > 104,000 screenshots — AMEX collection described in the arXiv v1 abstract (reported; source: https://arxiv.org/abs/2407.17490v1)
- 3,046 instruction episodes — AMEX/instruction_anno.zip at revision 17196b29 (one JSON file per episode, unique episode_id) (computed) (computed; source: https://huggingface.co/datasets/Yuxiang007/AMEX/resolve/17196b29c88dd48a7fb90ef9131bc5c7bf39f26e/AMEX/instruction_anno.zip)
- 38,709 action steps — steps lists of the 3,046 instruction episodes in AMEX/instruction_anno.zip at revision 17196b29 (computed) (computed; source: https://huggingface.co/datasets/Yuxiang007/AMEX/resolve/17196b29c88dd48a7fb90ef9131bc5c7bf39f26e/AMEX/instruction_anno.zip)

Episode and step counts were computed with a script from the instruction archive; the screenshot figure is the paper's reported scale. Each step records the action type, touch and lift coordinates, typed text, package name and screenshot path. No train/test split is published.

## License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/Yuxiang007/AMEX/raw/17196b29c88dd48a7fb90ef9131bc5c7bf39f26e/README.md
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/Yuxiang007/AMEX/raw/17196b29c88dd48a7fb90ef9131bc5c7bf39f26e/README.md (retrieved 2026-10-19T06:22:26Z; SHA-256 dbae95ce714b90305b09b8b7a9dd8d01c277f1f6a6d265f8210e9f6bab6a2192)
- https://huggingface.co/api/datasets/Yuxiang007/AMEX/revision/17196b29c88dd48a7fb90ef9131bc5c7bf39f26e (retrieved 2026-10-18T15:51:37Z; SHA-256 dad2a3226a7c3c2f74998be09f4e989a82bd91cf21b1cbd22211d807cfa91d97)
- https://huggingface.co/datasets/Yuxiang007/AMEX/resolve/17196b29c88dd48a7fb90ef9131bc5c7bf39f26e/AMEX/instruction_anno.zip (retrieved 2026-10-18T15:51:38Z; SHA-256 673d89f1fee1b3be6ec8c3c380e24768265c04f0ece87d852ff185b05daa585a)
- https://arxiv.org/abs/2407.17490v1 (retrieved 2026-10-18T15:51:39Z; SHA-256 0b19217aee442587ec75e7d691d4645f6d6125e82edf0c08ee5670a1a64ddfd8)
- https://yxchai.com/AMEX/ (retrieved 2026-10-19T06:21:55Z; SHA-256 4aab61e6a95ab6b6598fb64b8e55d787cd49b5c4f242d15372aed2dd312f97aa)
- https://huggingface.co/datasets/Yuxiang007/AMEX/raw/17196b29c88dd48a7fb90ef9131bc5c7bf39f26e/README.md (retrieved 2026-10-19T06:22:26Z; SHA-256 dbae95ce714b90305b09b8b7a9dd8d01c277f1f6a6d265f8210e9f6bab6a2192)
