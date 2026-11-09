# ScaleCUA (THUDM) Qwen3.5-9B OSWorld

Qwen3.5-9B computer-use agent checkpoint from THUDM's ScaleCUA, trained with online RL for OSWorld desktop tasks after an SFT start point and served through an OpenAI-compatible endpoint.

- Catalog URL: https://awesomecua.com/resources/url-0919e695670c5740a123/
- Original source: https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-osworld
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: reinforcement-learning, action-prediction
- Evidence checked: 2026-10-18T15:41:57Z
- ID: url:0919e695670c5740a123

## Limitations

Hub API at revision 2ad1314b lists four BF16 safetensors shards (about 9.41B parameters) in the Qwen3_5ForConditionalGeneration architecture; the repository is not gated. The card calls this the online-RL (RLVR) checkpoint and names extreme1228/ScaleCUA-qwen3.5-osworld-sft as its start point, which is also its Hub base_model. The card and the THUDM/SCALE-CUA README report 68.7% on OSWorld; this is a publisher figure and was not reproduced. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the license of Qwen3.5-9B; that license is not resolved here. This project is distinct from OpenGVLab/ScaleCUA.

- Record JSON: https://awesomecua.com/resources/url-0919e695670c5740a123/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-osworld/raw/2ad1314b6076591e35f299b2efed214e2454deab/README.md

## Primary evidence

- https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-osworld/raw/2ad1314b6076591e35f299b2efed214e2454deab/README.md (retrieved 2026-10-18T15:41:57Z; SHA-256 8dbec1da9f5dddb73561021af5f386e0c456e6b9ea8b6d422aa60df5f57abd44)
- https://huggingface.co/api/models/extreme1228/ScaleCUA-qwen3.5-osworld/revision/2ad1314b6076591e35f299b2efed214e2454deab (retrieved 2026-10-18T15:41:39Z; SHA-256 38f67b1b143810cd843f99f047fd3310b26b0084948a8d6b3dc31999ce20ab74)
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md (retrieved 2026-10-18T15:41:39Z; SHA-256 d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea)
- https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-osworld/raw/2ad1314b6076591e35f299b2efed214e2454deab/README.md (retrieved 2026-10-18T15:41:57Z; SHA-256 8dbec1da9f5dddb73561021af5f386e0c456e6b9ea8b6d422aa60df5f57abd44)
