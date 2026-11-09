# ScaleCUA (THUDM) Qwen3-VL-8B OSWorld

Qwen3-VL-8B computer-use agent checkpoint from THUDM's ScaleCUA, trained with online RL for OSWorld desktop tasks after a released SFT start point.

- Catalog URL: https://awesomecua.com/resources/url-1807bdb33fc352a97240/
- Original source: https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-osworld
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: reinforcement-learning, action-prediction
- Evidence checked: 2026-10-18T15:43:12Z
- ID: url:1807bdb33fc352a97240

## Limitations

Hub API at revision d27cdab2 lists four BF16 safetensors shards (about 8.77B parameters) in the Qwen3VLForConditionalGeneration architecture; the repository is not gated. The card calls this the online-RL (RLVR) checkpoint and names extreme1228/ScaleCUA-qwen3-vl-osworld-sft as its start point, which is also its Hub base_model. The card and the THUDM/SCALE-CUA README report 67.7% on OSWorld; this is a publisher figure and was not reproduced. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the license of Qwen3-VL-8B; that license is not resolved here. This project is distinct from OpenGVLab/ScaleCUA.

- Record JSON: https://awesomecua.com/resources/url-1807bdb33fc352a97240/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-osworld/raw/d27cdab2d500f323af27c0c9fdcf123f40c83d42/README.md

## Primary evidence

- https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-osworld/raw/d27cdab2d500f323af27c0c9fdcf123f40c83d42/README.md (retrieved 2026-10-18T15:43:12Z; SHA-256 7f1fb5e0229ec526c6f75baa9331864d49442200a19ea7888fe4f4d69eead546)
- https://huggingface.co/api/models/extreme1228/ScaleCUA-qwen3-vl-osworld/revision/d27cdab2d500f323af27c0c9fdcf123f40c83d42 (retrieved 2026-10-18T15:42:53Z; SHA-256 39802e7890517c83ddd53b16c3e1196c1cde03d85803d64fa8e49ce48c659838)
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md (retrieved 2026-10-18T15:41:39Z; SHA-256 d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea)
- https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-osworld/raw/d27cdab2d500f323af27c0c9fdcf123f40c83d42/README.md (retrieved 2026-10-18T15:43:12Z; SHA-256 7f1fb5e0229ec526c6f75baa9331864d49442200a19ea7888fe4f4d69eead546)
