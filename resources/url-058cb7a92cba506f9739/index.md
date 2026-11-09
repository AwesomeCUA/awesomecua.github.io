# ScaleCUA (THUDM) Qwen3-VL-8B ScienceBoard SFT

Supervised Qwen3-VL-8B checkpoint from THUDM's ScaleCUA, released as the start point that online RL initializes from for its ScienceBoard computer-use agent.

- Catalog URL: https://awesomecua.com/resources/url-058cb7a92cba506f9739/
- Original source: https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-scienceboard-sft
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: action-prediction, science
- Evidence checked: 2026-10-18T15:40:15Z
- ID: url:058cb7a92cba506f9739

## Limitations

Hub API at revision 48c39bb3 lists four BF16 safetensors shards (about 8.77B parameters) in the Qwen3VLForConditionalGeneration architecture, plus a training-state file iter_0000494/common.pt; the repository is not gated. The card calls this the SFT start point used to initialize online RL and names Qwen3-VL-8B as its base without Hub base_model metadata, so base_model is unset. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the base model's license; that license is not resolved here. The card reports no score for this checkpoint. The THUDM/SCALE-CUA README lists it among six SFT start-point checkpoints, each with a ModelScope mirror. This project is distinct from OpenGVLab/ScaleCUA.

- Record JSON: https://awesomecua.com/resources/url-058cb7a92cba506f9739/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-scienceboard-sft/raw/48c39bb30e1920e02c440fc256f5bb4e1d44765b/README.md

## Primary evidence

- https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-scienceboard-sft/raw/48c39bb30e1920e02c440fc256f5bb4e1d44765b/README.md (retrieved 2026-10-18T15:40:15Z; SHA-256 30280bb114a38b1118a92fa575a0acca169bf833fe1a490080e275c92b6b286d)
- https://huggingface.co/api/models/extreme1228/ScaleCUA-qwen3-vl-scienceboard-sft/revision/48c39bb30e1920e02c440fc256f5bb4e1d44765b (retrieved 2026-10-18T15:39:37Z; SHA-256 da5c9b828ce4c562b2dbb767829b64960d73d1c0d1161f17ef00dc652f0abb1e)
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md (retrieved 2026-10-18T15:39:37Z; SHA-256 d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea)
- https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-scienceboard-sft/raw/48c39bb30e1920e02c440fc256f5bb4e1d44765b/README.md (retrieved 2026-10-18T15:40:15Z; SHA-256 30280bb114a38b1118a92fa575a0acca169bf833fe1a490080e275c92b6b286d)
