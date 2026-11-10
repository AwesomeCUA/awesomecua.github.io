# Holotron 3 Nano

Computer-use policy checkpoint that H Company post-trained from NVIDIA Nemotron 3 Nano Omni, a hybrid Mamba-MoE model with 3B of 30B parameters active per token, aimed at lower-latency agent workloads.

- Catalog URL: https://awesomecua.com/resources/url-f39d67f7a4a6f869f39c/
- Original source: https://huggingface.co/Hcompany/Holotron-3-Nano
- Kind: model
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: grounding, action-prediction, efficiency
- Evidence checked: 2026-10-19T06:02:55Z
- ID: url:f39d67f7a4a6f869f39c

## Limitations

Hub API at revision 525e05a4 lists seven safetensors shards (about 33.01B parameters, nearly all BF16) with custom modeling code, and config.json declares NemotronH_Nano_Omni_Reasoning_V3 with 128 routed experts, 6 active per token, and a 262,144-token position limit; the repository is publicly accessible. The card text names the NVIDIA Open Model License while its metadata says 'other' and no license file ships; H's models page lists the same license. The card fetches the RADIO vision code from nvidia/C-RADIOv2-H while the release post names C-RADIOv4, so no encoder version is recorded. OSWorld-Verified, ScreenSpot-Pro, OSWorld-G and internal enterprise scores in the release post are publisher figures.

- Record JSON: https://awesomecua.com/resources/url-f39d67f7a4a6f869f39c/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: NVIDIA Open Model License — https://huggingface.co/Hcompany/Holotron-3-Nano/raw/525e05a4b21747ea5c32b09a5969bfc425d5e95c/README.md

- weights review: Publisher model-card text names the NVIDIA Open Model License for this checkpoint, matching H's models page.
  Sources: https://huggingface.co/Hcompany/Holotron-3-Nano/raw/525e05a4b21747ea5c32b09a5969bfc425d5e95c/README.md, https://hcompany.ai/research/models

## Primary evidence

- https://huggingface.co/Hcompany/Holotron-3-Nano/raw/525e05a4b21747ea5c32b09a5969bfc425d5e95c/README.md (retrieved 2026-10-19T06:02:55Z; SHA-256 5cc77556ea6205641e21d666ddd9a714e5f4b317a6300ebc4af1b80e835f2730)
- https://huggingface.co/api/models/Hcompany/Holotron-3-Nano/revision/525e05a4b21747ea5c32b09a5969bfc425d5e95c (retrieved 2026-10-19T06:02:55Z; SHA-256 2cf0bf25a4651598ffa97f1f8346995e1621d5b7c6e8d9e222da2ff5c65201e1)
- https://huggingface.co/Hcompany/Holotron-3-Nano/raw/525e05a4b21747ea5c32b09a5969bfc425d5e95c/config.json (retrieved 2026-10-19T06:02:55Z; SHA-256 c35380544d8a4e0363423330906500bf0b542a65daba17af2047637efad8c6ff)
- https://hcompany.ai/research/models (retrieved 2026-10-19T06:02:56Z; SHA-256 ddfa335cd71d0a7a4e61640752b1b24830f951a72c175e88fd03bf00a5e783c8)
- https://hcompany.ai/newsroom/holotron3 (retrieved 2026-10-19T06:02:56Z; SHA-256 f1a85322e0c82ee5b12cf3dbdd986ba2578330df80859a059beddd12f34b573e)
- https://huggingface.co/Hcompany/Holotron-3-Nano/raw/525e05a4b21747ea5c32b09a5969bfc425d5e95c/README.md (retrieved 2026-10-19T06:02:55Z; SHA-256 5cc77556ea6205641e21d666ddd9a714e5f4b317a6300ebc4af1b80e835f2730)
