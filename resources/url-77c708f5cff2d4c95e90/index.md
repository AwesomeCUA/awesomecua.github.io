---
title: "ScaleCUA (THUDM) GLM-4.6V-Flash OSWorld | AwesomeCUA"
url: https://awesomecua.com/resources/url-77c708f5cff2d4c95e90/
updated: 2026-10-18
type: model
lang: en
---

# ScaleCUA (THUDM) GLM-4.6V-Flash OSWorld

GLM-4.6V-Flash computer-use agent checkpoint from THUDM's ScaleCUA, trained with online RL for OSWorld desktop tasks after an SFT start point and served through an OpenAI-compatible endpoint.

- Catalog URL: https://awesomecua.com/resources/url-77c708f5cff2d4c95e90/
- Original source: https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-osworld
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: reinforcement-learning, action-prediction
- Evidence checked: 2026-10-18T15:55:21Z
- ID: url:77c708f5cff2d4c95e90

## Limitations

Hub API at revision f877281f lists five BF16 safetensors shards (about 10.29B parameters) in the Glm4vForConditionalGeneration architecture; the repository is publicly accessible. The card calls this the online-RL (RLVR) checkpoint and names extreme1228/ScaleCUA-glm4.6v-osworld-sft as its start point, which is also its Hub base_model. The card and the THUDM/SCALE-CUA README report 66.5% on OSWorld as a publisher figure. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the license of GLM-4.6V-Flash; that license is not resolved here. The card gives no parameter size label. This project is distinct from OpenGVLab/ScaleCUA.

- Record JSON: https://awesomecua.com/resources/url-77c708f5cff2d4c95e90/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-osworld/raw/f877281fc6f326fd43271163ea21b028db8eaa22/README.md

## Primary evidence

- https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-osworld/raw/f877281fc6f326fd43271163ea21b028db8eaa22/README.md (retrieved 2026-10-18T15:55:21Z; SHA-256 782c7a503f05c95537f8a2d4a75ca4fc7f078ec5a76dbbcb58aee98cf5a70b0f)
- https://huggingface.co/api/models/extreme1228/ScaleCUA-glm4.6v-osworld/revision/f877281fc6f326fd43271163ea21b028db8eaa22 (retrieved 2026-10-18T15:54:54Z; SHA-256 c06e2f6cb5ce247bf67db276869d4409225968201d0c4565b2ceeef7c19b66a3)
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md (retrieved 2026-10-18T15:54:54Z; SHA-256 d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea)
- https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-osworld/raw/f877281fc6f326fd43271163ea21b028db8eaa22/README.md (retrieved 2026-10-18T15:55:21Z; SHA-256 782c7a503f05c95537f8a2d4a75ca4fc7f078ec5a76dbbcb58aee98cf5a70b0f)
