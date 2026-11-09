# ScaleCUA (THUDM) GLM-4.6V-Flash ScienceBoard SFT

Supervised GLM-4.6V-Flash checkpoint from THUDM's ScaleCUA, released as the start point that online RL initializes from for its ScienceBoard computer-use agent.

- Catalog URL: https://awesomecua.com/resources/url-7fbde54a49250739baee/
- Original source: https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-scienceboard-sft
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: action-prediction, science
- Evidence checked: 2026-10-18T16:01:08Z
- ID: url:7fbde54a49250739baee

## Limitations

Hub API at revision 2bcf77b8 lists five BF16 safetensors shards (about 10.29B parameters) in the Glm4vForConditionalGeneration architecture, plus training-state files under iter_0000494/; the repository is publicly accessible. The card calls this the SFT start point used to initialize online RL and names GLM-4.6V-Flash as its base without Hub base_model metadata, so base_model is unset. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the base model's license; that license is not resolved here. The card reports no score for this checkpoint. The THUDM/SCALE-CUA README lists it among six SFT start-point checkpoints, each with a ModelScope mirror. This project is distinct from OpenGVLab/ScaleCUA.

- Record JSON: https://awesomecua.com/resources/url-7fbde54a49250739baee/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-scienceboard-sft/raw/2bcf77b8a30c161d9ed2e075276877275319d1ad/README.md

## Primary evidence

- https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-scienceboard-sft/raw/2bcf77b8a30c161d9ed2e075276877275319d1ad/README.md (retrieved 2026-10-18T16:01:08Z; SHA-256 0e3266010e93daa32e8ba81ceca8d83771ecbbbd8cd409833d0aae518e6348db)
- https://huggingface.co/api/models/extreme1228/ScaleCUA-glm4.6v-scienceboard-sft/revision/2bcf77b8a30c161d9ed2e075276877275319d1ad (retrieved 2026-10-18T16:00:48Z; SHA-256 4feef38e55602ab8eb6cbc2f1d8dcccc7d3d1cad0e91128570ca85e9e8caa177)
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md (retrieved 2026-10-18T16:00:48Z; SHA-256 d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea)
- https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-scienceboard-sft/raw/2bcf77b8a30c161d9ed2e075276877275319d1ad/README.md (retrieved 2026-10-18T16:01:08Z; SHA-256 0e3266010e93daa32e8ba81ceca8d83771ecbbbd8cd409833d0aae518e6348db)
