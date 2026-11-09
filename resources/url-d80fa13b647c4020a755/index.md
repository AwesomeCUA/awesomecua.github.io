# GUI-G2 3B

The 3B GUI-G2 grounding checkpoint: Qwen2.5-VL-3B-Instruct fine-tuned with Gaussian point and coverage rewards to locate interface elements in screenshots from text instructions.

- Catalog URL: https://awesomecua.com/resources/url-d80fa13b647c4020a755/
- Original source: https://huggingface.co/inclusionAI/GUI-G2-3B
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding, reinforcement-learning, reward-models
- Evidence checked: 2026-10-18T16:05:24Z
- ID: url:d80fa13b647c4020a755

## Limitations

Hub API at revision 41325677 lists two BF16 safetensors shards (about 3.75B parameters) in the Qwen2_5_VLForConditionalGeneration architecture; the repository is not gated. The card names Qwen2.5-VL-3B-Instruct as the base in prose but sets no base_model field. Its ScreenSpot-v2 table reports only the 7B release and says 3B grounding results are still to come, so no score is recorded here. The project README announces the 3B and 7B releases together. Apache-2.0 is the model-card weight declaration, not a code or training-data license.

- Record JSON: https://awesomecua.com/resources/url-d80fa13b647c4020a755/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/inclusionAI/GUI-G2-3B/raw/413256770087058c21662c05c13fa8c199a08fb4/README.md

## Primary evidence

- https://huggingface.co/inclusionAI/GUI-G2-3B/raw/413256770087058c21662c05c13fa8c199a08fb4/README.md (retrieved 2026-10-18T16:05:24Z; SHA-256 fa3f7d158e061ec2cc5bec0f2e70ce31401a9b7c4c9a0a60801e8e5a3809ada9)
- https://huggingface.co/api/models/inclusionAI/GUI-G2-3B/revision/413256770087058c21662c05c13fa8c199a08fb4 (retrieved 2026-10-18T16:04:21Z; SHA-256 cfdbdc73fa2cd8fdd0387d849f3d2a0cfa7d5fd794ea18e6672a7a2f91f08f2a)
- https://raw.githubusercontent.com/ZJU-REAL/GUI-G2/5c5c36581654364073385e37deca28f4d765aa94/README.md (retrieved 2026-10-18T16:04:47Z; SHA-256 f9ecdf208ed4b7845ea4dbd1a7c936c016d11f7ec28f17e71338ab3c2f5b5c0d)
- https://huggingface.co/inclusionAI/GUI-G2-3B/raw/413256770087058c21662c05c13fa8c199a08fb4/README.md (retrieved 2026-10-18T16:05:24Z; SHA-256 fa3f7d158e061ec2cc5bec0f2e70ce31401a9b7c4c9a0a60801e8e5a3809ada9)
