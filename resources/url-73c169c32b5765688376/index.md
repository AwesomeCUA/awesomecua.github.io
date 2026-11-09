# ScaleCUA (THUDM) Qwen3-VL-8B ScienceBoard

Qwen3-VL-8B computer-use agent checkpoint from THUDM's ScaleCUA, trained with online RL for ScienceBoard scientific-software tasks after an SFT start point and served through an OpenAI-compatible endpoint.

- Catalog URL: https://awesomecua.com/resources/url-73c169c32b5765688376/
- Original source: https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-scienceboard
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: reinforcement-learning, action-prediction, science
- Evidence checked: 2026-10-18T15:49:59Z
- ID: url:73c169c32b5765688376

## Limitations

Hub API at revision 13947f05 lists four BF16 safetensors shards (about 8.77B parameters) in the Qwen3VLForConditionalGeneration architecture; the repository is publicly accessible. The card calls this the online-RL (RLVR) checkpoint and names extreme1228/ScaleCUA-qwen3-vl-scienceboard-sft as its start point, which is also its Hub base_model. The card and the THUDM/SCALE-CUA README report 51.9% on ScienceBoard as a publisher figure. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the license of Qwen3-VL-8B; that license is not resolved here. This project is distinct from OpenGVLab/ScaleCUA.

- Record JSON: https://awesomecua.com/resources/url-73c169c32b5765688376/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-scienceboard/raw/13947f05bff0742e09784310b6c68ae39bff67e5/README.md

## Primary evidence

- https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-scienceboard/raw/13947f05bff0742e09784310b6c68ae39bff67e5/README.md (retrieved 2026-10-18T15:49:59Z; SHA-256 7c299ac74c20235bb4f501ba6543503cc3c117c0b0c4e8121b72bd6f4050f970)
- https://huggingface.co/api/models/extreme1228/ScaleCUA-qwen3-vl-scienceboard/revision/13947f05bff0742e09784310b6c68ae39bff67e5 (retrieved 2026-10-18T15:49:22Z; SHA-256 df0d6a684c4d7ae8657744b285a5e8a30f31fe7f369b771b52f3a15f53cf0b1e)
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md (retrieved 2026-10-18T15:49:22Z; SHA-256 d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea)
- https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-scienceboard/raw/13947f05bff0742e09784310b6c68ae39bff67e5/README.md (retrieved 2026-10-18T15:49:59Z; SHA-256 7c299ac74c20235bb4f501ba6543503cc3c117c0b0c4e8121b72bd6f4050f970)
