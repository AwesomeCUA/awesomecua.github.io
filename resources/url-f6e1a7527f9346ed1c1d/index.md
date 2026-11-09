# GUI-Libra-81K-SFT

SFT release of GUI-Libra-81K: per-step reasoning traces and coordinate-grounded actions over web and Android screenshots, in JSON annotation files with full, no-reasoning and 1,000-sample variants.

- Catalog URL: https://awesomecua.com/resources/url-f6e1a7527f9346ed1c1d/
- Original source: https://huggingface.co/datasets/GUI-Libra/GUI-Libra-81K-SFT
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web, android
- Topics: data-generation, grounding, web-navigation, mobile-navigation
- Evidence checked: 2026-10-18T12:32:45Z
- ID: url:f6e1a7527f9346ed1c1d

## Limitations

The thin card only describes the annotation files and split image archives; the paper link, training role and data format come from the official GUI-Libra repository, whose SFT guide downloads this dataset. Annotations re-annotate screenshots from public sources (Mind2Web, GUIAct web, AITW, AMEX, AndroidControl, GUI-Odyssey, Android in the Zoo). The 81K figure is the repository's.

- Record JSON: https://awesomecua.com/resources/url-f6e1a7527f9346ed1c1d/record.json

## Structured profile

- formats: JSON, split tar.gz image archives
- modalities: screenshots, instructions, interaction history, reasoning text, actions
- splits: not recorded
- supervision: step-level reasoning text, demonstrated GUI actions, coordinate-grounded targets

### Count observations

- ≈ 81,000 reasoning steps — GUI-Libra-81K as described by the official repository README (reported; source: https://raw.githubusercontent.com/GUI-Libra/GUI-Libra/f3e9c78e5c6435d0fb39210191ce1ad284361120/README.md)
- 32 JSON annotation files — data/annotations at revision 05bb2c5f: 8 source subsets, each with full, no-reasoning, 1,000-sample and 1,000-sample no-reasoning variants (computed) (computed; source: https://huggingface.co/api/datasets/GUI-Libra/GUI-Libra-81K-SFT/revision/05bb2c5f7e81de38f3d7826739db46913dd08a23)
- 8 image archive groups — data/images at revision 05bb2c5f, stored as 9 split .tar.gz part files (computed) (computed; source: https://huggingface.co/api/datasets/GUI-Libra/GUI-Libra-81K-SFT/revision/05bb2c5f7e81de38f3d7826739db46913dd08a23)

Steps, files and archive groups are different units and are counted separately. Variant files overlap: the 1,000-sample and no-reasoning files are subsets or reformulations of the same source data and share examples.

## License declarations

- code: not recorded
- data: Apache-2.0 — https://huggingface.co/datasets/GUI-Libra/GUI-Libra-81K-SFT/raw/05bb2c5f7e81de38f3d7826739db46913dd08a23/README.md
- document: not recorded
- weights: not recorded

- data review: Publisher dataset-card declaration for this release; it does not establish rights to the upstream screenshots and source datasets it repackages.
  Sources: https://huggingface.co/datasets/GUI-Libra/GUI-Libra-81K-SFT/raw/05bb2c5f7e81de38f3d7826739db46913dd08a23/README.md

## Primary evidence

- https://huggingface.co/datasets/GUI-Libra/GUI-Libra-81K-SFT/raw/05bb2c5f7e81de38f3d7826739db46913dd08a23/README.md (retrieved 2026-10-18T12:32:45Z; SHA-256 dc2eec26b0c27a2d6478eb9972a6aa3c14b879cb743301c71571c31b14c802bd)
- https://huggingface.co/api/datasets/GUI-Libra/GUI-Libra-81K-SFT/revision/05bb2c5f7e81de38f3d7826739db46913dd08a23 (retrieved 2026-10-18T12:32:46Z; SHA-256 ef92cfb5e07d55d121f269e6432e41bd6d0c37077a5ce770d2fd6f67287f1444)
- https://raw.githubusercontent.com/GUI-Libra/GUI-Libra/f3e9c78e5c6435d0fb39210191ce1ad284361120/README.md (retrieved 2026-10-18T12:32:46Z; SHA-256 f34c5bcf454368db37dde4bb2229fd14ae5e4a118684c6d7fbb6a25f9f246911)
- https://raw.githubusercontent.com/GUI-Libra/GUI-Libra/f3e9c78e5c6435d0fb39210191ce1ad284361120/SFT/README.md (retrieved 2026-10-18T12:32:46Z; SHA-256 de69ba44d3233547f25f8297edf60300b7a9a7ea261805bacbc00b118d0a08ff)
- https://huggingface.co/datasets/GUI-Libra/GUI-Libra-81K-SFT/raw/05bb2c5f7e81de38f3d7826739db46913dd08a23/README.md (retrieved 2026-10-18T12:32:45Z; SHA-256 dc2eec26b0c27a2d6478eb9972a6aa3c14b879cb743301c71571c31b14c802bd)
