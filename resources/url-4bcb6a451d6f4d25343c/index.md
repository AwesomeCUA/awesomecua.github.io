# ScaleCUA (THUDM) GLM-4.6V-Flash ScienceBoard

GLM-4.6V-Flash computer-use agent checkpoint from THUDM's ScaleCUA, trained with online RL from a released SFT start point for ScienceBoard scientific-software tasks.

- Catalog URL: https://awesomecua.com/resources/url-4bcb6a451d6f4d25343c/
- Original source: https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-scienceboard
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: reinforcement-learning, action-prediction, science
- Evidence checked: 2026-10-18T15:56:10Z
- ID: url:4bcb6a451d6f4d25343c

## Limitations

Hub API at revision 3b089b66 lists five BF16 safetensors shards (about 10.29B parameters) in the Glm4vForConditionalGeneration architecture; the repository is publicly accessible. The card calls this the online-RL (RLVR) checkpoint and names extreme1228/ScaleCUA-glm4.6v-scienceboard-sft as its start point, which is also its Hub base_model. The card and the THUDM/SCALE-CUA README report 49.4% on ScienceBoard as a publisher figure. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the license of GLM-4.6V-Flash; that license is not resolved here. The card states no parameter size, so no label is recorded. This project is distinct from OpenGVLab/ScaleCUA.

- Record JSON: https://awesomecua.com/resources/url-4bcb6a451d6f4d25343c/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-scienceboard/raw/3b089b66c9d0ffd3e56477fce32b31ab5ad56361/README.md

## Primary evidence

- https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-scienceboard/raw/3b089b66c9d0ffd3e56477fce32b31ab5ad56361/README.md (retrieved 2026-10-18T15:56:10Z; SHA-256 e02cf943e5a41f954173add4922ecab70e9737a0b1b64aa3a401f20d877a0e46)
- https://huggingface.co/api/models/extreme1228/ScaleCUA-glm4.6v-scienceboard/revision/3b089b66c9d0ffd3e56477fce32b31ab5ad56361 (retrieved 2026-10-18T15:55:27Z; SHA-256 ce5f0216e60abd678633ad918497e4dd6d3d6332bdc0e196ef9b1627c1466c78)
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md (retrieved 2026-10-18T15:55:27Z; SHA-256 d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea)
- https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-scienceboard/raw/3b089b66c9d0ffd3e56477fce32b31ab5ad56361/README.md (retrieved 2026-10-18T15:56:10Z; SHA-256 e02cf943e5a41f954173add4922ecab70e9737a0b1b64aa3a401f20d877a0e46)
