# Holo3.1 4B

4B checkpoint of H Company's Holo3.1 family, a vision-language model for web, desktop and mobile computer-use agents with native function calling, built on a dense Qwen3.5 architecture.

- Catalog URL: https://awesomecua.com/resources/url-90b24afa7bb8b2181205/
- Original source: https://huggingface.co/Hcompany/Holo-3.1-4B
- Kind: model
- Review: curated
- Scope: core
- Environments: web, desktop, cross-platform
- Topics: grounding, action-prediction, mobile-navigation, tool-integration
- Evidence checked: 2026-10-18T16:02:24Z
- ID: url:90b24afa7bb8b2181205

## Limitations

Hub API at revision 8c88265a lists two BF16 safetensors shards (about 5.17B parameters, including the vision encoder) in the dense Qwen3_5ForConditionalGeneration architecture; the repository is publicly accessible. The card is shared by the whole Holo3.1 family (0.8B, 4B, 9B and 35B-A3B) and names web, desktop and mobile without a mobile operating system. Its YAML base_model lists Qwen3.6-35B-A3B and three Qwen3.5 sizes and its prose says the Qwen 3.5 family, so base_model is unset. The card lists quantized releases only for the 35B-A3B size. The card declares Apache-2.0 for the weights.

- Record JSON: https://awesomecua.com/resources/url-90b24afa7bb8b2181205/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Hcompany/Holo-3.1-4B/raw/8c88265a5a159bfd1492db9243733dd2e6e04a6e/README.md

## Primary evidence

- https://huggingface.co/Hcompany/Holo-3.1-4B/raw/8c88265a5a159bfd1492db9243733dd2e6e04a6e/README.md (retrieved 2026-10-18T16:02:24Z; SHA-256 059de62841a8ca6c8d2c32f1210ecf58cd8efc8755c2795000d8d87afe49ad5e)
- https://huggingface.co/api/models/Hcompany/Holo-3.1-4B/revision/8c88265a5a159bfd1492db9243733dd2e6e04a6e (retrieved 2026-10-18T16:02:03Z; SHA-256 50190a160f8c380aabc1bd4bc2738f357b2bb84e7efbee9a82fca403da13a306)
- https://huggingface.co/Hcompany/Holo-3.1-4B/raw/8c88265a5a159bfd1492db9243733dd2e6e04a6e/README.md (retrieved 2026-10-18T16:02:24Z; SHA-256 059de62841a8ca6c8d2c32f1210ecf58cd8efc8755c2795000d8d87afe49ad5e)
