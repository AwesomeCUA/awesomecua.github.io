# ScaleCUA (THUDM) Qwen3.5-9B ScienceBoard

Qwen3.5-9B computer-use agent checkpoint from THUDM's ScaleCUA, trained with online RL for ScienceBoard scientific-software tasks after an SFT start point and served through an OpenAI-compatible endpoint.

- Catalog URL: https://awesomecua.com/resources/url-d2d07c09a1c92e5f4a43/
- Original source: https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-scienceboard
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: reinforcement-learning, action-prediction, science
- Evidence checked: 2026-10-19T06:02:06Z
- ID: url:d2d07c09a1c92e5f4a43

## Limitations

Hub API at revision ca2bc686 lists four BF16 safetensors shards (about 9.41B parameters) in the Qwen3_5ForConditionalGeneration architecture; the repository is not gated. The card calls this the online-RL (RLVR) checkpoint and names extreme1228/ScaleCUA-qwen3.5-scienceboard-sft as its start point, which is also its Hub base_model. The card and the THUDM/SCALE-CUA README report 54.0% on ScienceBoard; this is a publisher figure and was not reproduced. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the license of Qwen3.5-9B; that license is not resolved here. This project is distinct from OpenGVLab/ScaleCUA.

- Record JSON: https://awesomecua.com/resources/url-d2d07c09a1c92e5f4a43/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-scienceboard/raw/ca2bc686c6d428fde67b114e002dd69e4eeb59b5/README.md

## Primary evidence

- https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-scienceboard/raw/ca2bc686c6d428fde67b114e002dd69e4eeb59b5/README.md (retrieved 2026-10-19T06:02:06Z; SHA-256 9a3e1927afa4a12c03721c4dbd96550f61e653cd098cc9841e6462cd891b4d3d)
- https://huggingface.co/api/models/extreme1228/ScaleCUA-qwen3.5-scienceboard/revision/ca2bc686c6d428fde67b114e002dd69e4eeb59b5 (retrieved 2026-10-19T06:02:06Z; SHA-256 1bfdc228a5e9b8b0b9bc676d77f11b18ae866c936316496ab8793b94dbc53c90)
- https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-scienceboard/raw/ca2bc686c6d428fde67b114e002dd69e4eeb59b5/config.json (retrieved 2026-10-19T06:02:06Z; SHA-256 19a077d2064ea10c90fb9936730cc621134b53e89c406187c2d6b6a2983739bb)
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md (retrieved 2026-10-19T06:02:06Z; SHA-256 d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea)
- https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-scienceboard/raw/ca2bc686c6d428fde67b114e002dd69e4eeb59b5/README.md (retrieved 2026-10-19T06:02:06Z; SHA-256 9a3e1927afa4a12c03721c4dbd96550f61e653cd098cc9841e6462cd891b4d3d)
