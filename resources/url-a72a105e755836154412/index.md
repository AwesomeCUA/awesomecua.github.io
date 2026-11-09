# Holotron4 30B-A3B FP8

FP8 release of Holotron4-30B-A3B, H Company's computer-use model built on Nemotron 3 Nano Omni; an external harness sends it screenshots and tool results and executes the clicks, typing, code and tool calls it requests.

- Catalog URL: https://awesomecua.com/resources/url-a72a105e755836154412/
- Original source: https://huggingface.co/Hcompany/Holotron4-30B-A3B-FP8
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: action-prediction, tool-integration, efficiency
- Evidence checked: 2026-10-19T06:18:46Z
- ID: url:a72a105e755836154412

## Limitations

The card lists this repository as the FP8 checkpoint of Holotron4-30B-A3B within the Holo4 family, but its Hub metadata declares no base_model link. config.json declares NemotronH_Nano_Omni_Reasoning_V3 with compressed-tensors FP8 quantization of linear layers (per-channel weights, dynamic per-token activations), and the manifest lists 17 Safetensors shards. The card names no target platforms; its GUI scores are OSWorld and OSWorld 2.0, alongside MCP and terminal benchmarks. Those scores are publisher claims for Holotron4-30B-A3B. The card places the weights under the NVIDIA Open Model Agreement.

- Record JSON: https://awesomecua.com/resources/url-a72a105e755836154412/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: NVIDIA Open Model Agreement — https://huggingface.co/Hcompany/Holotron4-30B-A3B-FP8/raw/c2114d9636458189f132f9de5d912bcbc30403dd/README.md

- weights review: Publisher model-card declaration for these FP8 weights (NVIDIA Open Model Agreement, linked from the card); code and training-data terms are separate.
  Sources: https://huggingface.co/Hcompany/Holotron4-30B-A3B-FP8/raw/c2114d9636458189f132f9de5d912bcbc30403dd/README.md

## Primary evidence

- https://huggingface.co/Hcompany/Holotron4-30B-A3B-FP8/raw/c2114d9636458189f132f9de5d912bcbc30403dd/README.md (retrieved 2026-10-19T06:18:46Z; SHA-256 a193d5b0c7f85a97361d4655240cfe549a244c31ac7f04befe14ae852806ac26)
- https://huggingface.co/api/models/Hcompany/Holotron4-30B-A3B-FP8/revision/c2114d9636458189f132f9de5d912bcbc30403dd (retrieved 2026-10-19T06:18:45Z; SHA-256 f5f0b6f378377afdfd40274df0a2574d727037c74a6d6239ca5028bfe0bca4c5)
- https://huggingface.co/Hcompany/Holotron4-30B-A3B-FP8/raw/c2114d9636458189f132f9de5d912bcbc30403dd/config.json (retrieved 2026-10-18T15:57:39Z; SHA-256 f538dcbf62b570a527f939db535bbdedd4c4aea0b125dbc6a27c1f3016d28632)
- https://huggingface.co/Hcompany/Holotron4-30B-A3B-FP8/raw/c2114d9636458189f132f9de5d912bcbc30403dd/README.md (retrieved 2026-10-19T06:18:46Z; SHA-256 a193d5b0c7f85a97361d4655240cfe549a244c31ac7f04befe14ae852806ac26)
