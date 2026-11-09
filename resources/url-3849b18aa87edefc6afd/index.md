# OpenMobile-Data

OpenMobile's synthesized Android agent data: four LLaMA-Factory SFT split files built from AndroidWorld rollouts plus an archive of the original rollout trajectories and screenshots.

- Catalog URL: https://awesomecua.com/resources/url-3849b18aa87edefc6afd/
- Original source: https://huggingface.co/datasets/cckevinn/OpenMobile-Data
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: data-generation, mobile-navigation, imitation-learning
- Evidence checked: 2026-10-19T06:53:38Z
- ID: url:3849b18aa87edefc6afd

## Limitations

The short card says the four JSON files are LLaMA-Factory training files and raw_dumps.tar.gz holds the original rollout trajectories with the screenshots the training files need. The OpenMobile code README registers the files as openmobile_split1 to openmobile_split4 in ShareGPT format and gives a converter to the Qwen3.5 format. No license is declared on the card.

- Record JSON: https://awesomecua.com/resources/url-3849b18aa87edefc6afd/record.json

## Structured profile

- formats: LLaMA-Factory ShareGPT JSON, tar.gz archive of raw rollouts
- modalities: screenshots, instructions, step histories, reasoning text, actions, target element bounding boxes
- splits: split1, split2, split3, split4
- supervision: synthesized task instructions, agent rollout trajectories with learner/expert policy switching

### Count observations

- ≈ 2,800 synthesized instructions — OpenMobile dataset (project page) (reported; source: https://njucckevin.github.io/openmobile/)
- ≈ 34,000 action steps — OpenMobile dataset (project page) (reported; source: https://njucckevin.github.io/openmobile/)
- 20 Android apps — OpenMobile dataset (project page) (reported; source: https://njucckevin.github.io/openmobile/)

Instruction, step and app counts are the project page's headline figures. Streaming the four split files at revision 8ed12d1 gave 7,393, 6,767, 9,345 and 3,855 step-level samples (27,360 in total), each with one screenshot path into raw_dumps, a system prompt with the mobile_use tool, the task and step history, an assistant thought with a tool call, and a target bounding box; the files exceed the receipt budget, leaving these computed counts outside count observations. Steps in the files and the page's action steps are not reconciled. The four split names are training files.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: The dataset card declares no license; the code repository's Apache-2.0 license is not transferred to the data, and the code README says other released artifacts may have their own terms.
  Sources: https://huggingface.co/datasets/cckevinn/OpenMobile-Data/raw/8ed12d15763057f8e8d40134cfddfcc756ff8a7a/README.md

## Primary evidence

- https://huggingface.co/datasets/cckevinn/OpenMobile-Data/raw/8ed12d15763057f8e8d40134cfddfcc756ff8a7a/README.md (retrieved 2026-10-19T06:53:38Z; SHA-256 5a119d88171e645b3dccad526ed25e75d4e28e4e5c101f89daa1c6697b92d601)
- https://huggingface.co/api/datasets/cckevinn/OpenMobile-Data/revision/8ed12d15763057f8e8d40134cfddfcc756ff8a7a (retrieved 2026-10-19T06:53:39Z; SHA-256 054432be78024ecf09b1d8f022c11b82addf7ee5127a8f355d9a6eb18b212355)
- https://njucckevin.github.io/openmobile/ (retrieved 2026-10-19T06:53:36Z; SHA-256 b37f01ef9fcffa0eef1f6c5c317a333e6f14210dfda54843fdaba2f88331b864)
- https://raw.githubusercontent.com/njucckevin/OpenMobile-Code/faca68f386aff7277cdf494c84693c51090229c6/README.md (retrieved 2026-10-19T06:53:33Z; SHA-256 8594e32aab90e0fdbaf436997e4082884423b6d3298f46247dcf0820e0499080)
