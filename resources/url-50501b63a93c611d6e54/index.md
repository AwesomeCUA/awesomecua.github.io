# ScaleCUA (THUDM) Qwen3-VL-8B OSWorld SFT

Supervised Qwen3-VL-8B checkpoint from THUDM's ScaleCUA, released as the start point from which online RL trains its OSWorld desktop computer-use agent.

- Catalog URL: https://awesomecua.com/resources/url-50501b63a93c611d6e54/
- Original source: https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-osworld-sft
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: action-prediction
- Evidence checked: 2026-10-18T15:57:54Z
- ID: url:50501b63a93c611d6e54

## Limitations

Hub API at revision 406fe375 lists four BF16 safetensors shards (about 8.77B parameters) in the Qwen3VLForConditionalGeneration architecture, plus a training args.json; the repository is not gated. The card calls this the SFT start point used to initialize online RL and names Qwen3-VL-8B as its base without Hub base_model metadata, so base_model is unset. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the license of Qwen3-VL-8B; that license is not resolved here. The card reports no score for this checkpoint. The THUDM/SCALE-CUA README lists it among six SFT start-point checkpoints, each with a ModelScope mirror. This project is distinct from OpenGVLab/ScaleCUA.

- Record JSON: https://awesomecua.com/resources/url-50501b63a93c611d6e54/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-osworld-sft/raw/406fe37598dc77b452bee1904c43411fbb6c5fad/README.md

## Primary evidence

- https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-osworld-sft/raw/406fe37598dc77b452bee1904c43411fbb6c5fad/README.md (retrieved 2026-10-18T15:57:54Z; SHA-256 db1c5b96ae888c47a475250884fdfb73f89f3e371ebc9a4fab1975008394493f)
- https://huggingface.co/api/models/extreme1228/ScaleCUA-qwen3-vl-osworld-sft/revision/406fe37598dc77b452bee1904c43411fbb6c5fad (retrieved 2026-10-18T15:57:26Z; SHA-256 2dd5f21883e032c18c3a4af56d8772be57672e839367a6fb17c18282da7f170b)
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md (retrieved 2026-10-18T15:55:27Z; SHA-256 d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea)
- https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-osworld-sft/raw/406fe37598dc77b452bee1904c43411fbb6c5fad/README.md (retrieved 2026-10-18T15:57:54Z; SHA-256 db1c5b96ae888c47a475250884fdfb73f89f3e371ebc9a4fab1975008394493f)
