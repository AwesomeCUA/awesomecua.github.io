# ScaleCUA (THUDM) GLM-4.6V-Flash OSWorld SFT

Supervised GLM-4.6V-Flash checkpoint from THUDM's ScaleCUA, released as the start point that online RL initializes from for its OSWorld desktop computer-use agent.

- Catalog URL: https://awesomecua.com/resources/url-f59c2dd51c1f5c570a28/
- Original source: https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-osworld-sft
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: action-prediction
- Evidence checked: 2026-10-19T06:05:00Z
- ID: url:f59c2dd51c1f5c570a28

## Limitations

Hub API at revision b13810f3 lists five BF16 safetensors shards (about 10.29B parameters) in the Glm4vForConditionalGeneration architecture, plus args.json and training-state files under iter_0001838/; the repository is not gated. The card calls this the SFT start point used to initialize online RL and names GLM-4.6V-Flash as its base without Hub base_model metadata, so base_model is unset. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the base model's license; that license is not resolved here. The card reports no score for this checkpoint. The THUDM/SCALE-CUA README lists it among six SFT start-point checkpoints, each with a ModelScope mirror. This project is distinct from OpenGVLab/ScaleCUA.

- Record JSON: https://awesomecua.com/resources/url-f59c2dd51c1f5c570a28/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-osworld-sft/raw/b13810f35275021d1d70082b4d1071e941a2a857/README.md

## Primary evidence

- https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-osworld-sft/raw/b13810f35275021d1d70082b4d1071e941a2a857/README.md (retrieved 2026-10-19T06:05:00Z; SHA-256 d4dbc07bbc6c5b548d198e324302a2c3a7f075f38c764da660c35ab2f5028286)
- https://huggingface.co/api/models/extreme1228/ScaleCUA-glm4.6v-osworld-sft/revision/b13810f35275021d1d70082b4d1071e941a2a857 (retrieved 2026-10-19T06:05:01Z; SHA-256 f27d3fcc8c98d68e9b29f2e43eac963322de6488bf35e5b9991bbbfd4bf05231)
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md (retrieved 2026-10-19T06:05:01Z; SHA-256 d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea)
- https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-osworld-sft/raw/b13810f35275021d1d70082b4d1071e941a2a857/README.md (retrieved 2026-10-19T06:05:00Z; SHA-256 d4dbc07bbc6c5b548d198e324302a2c3a7f075f38c764da660c35ab2f5028286)
