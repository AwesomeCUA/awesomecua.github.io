# Holotron4 30B-A3B

NemotronH Nano Omni-based computer-use checkpoint in H Company's Holo4 family; an external harness sends it screenshots and tool results and executes the clicks, typing, code and tool calls it requests.

- Catalog URL: https://awesomecua.com/resources/url-7638e3f688374cea2217/
- Original source: https://huggingface.co/Hcompany/Holotron4-30B-A3B
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop
- Topics: grounding, action-prediction, tool-integration
- Evidence checked: 2026-10-18T15:52:15Z
- ID: url:7638e3f688374cea2217

## Limitations

The pinned Hub manifest lists 17 BF16 safetensors shards (about 33.0B parameters by the Hub count) with custom modeling code, and config.json declares the NemotronH_Nano_Omni_Reasoning_V3 architecture. The card says the model is built on NVIDIA Nemotron 3 Nano Omni and lists it in the Holo4 family beside the Qwen-based Holo4 checkpoints; its YAML names no base_model, so none is recorded. The card declares the NVIDIA Open Model Agreement for the weights (Hub license 'other'). OSWorld, OSWorld 2.0, AutomationBench, PinchBench and ALE scores on the card are publisher figures; the FreeCAD demo on the card shows Holo4-27B, a separate checkpoint. An FP8 repository is a separate release. No weights were downloaded or run.

- Record JSON: https://awesomecua.com/resources/url-7638e3f688374cea2217/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/Hcompany/Holotron4-30B-A3B/raw/52184310f6c916e5e7d4b8f055af49fc41642574/README.md

## Primary evidence

- https://huggingface.co/Hcompany/Holotron4-30B-A3B/raw/52184310f6c916e5e7d4b8f055af49fc41642574/README.md (retrieved 2026-10-18T15:52:15Z; SHA-256 9095b7a5137876923d527f739c3013c3a12d84a7178b83502b7457058a8e081c)
- https://huggingface.co/api/models/Hcompany/Holotron4-30B-A3B/revision/52184310f6c916e5e7d4b8f055af49fc41642574 (retrieved 2026-10-18T15:51:48Z; SHA-256 cac950916e085d7206498a31f0b8d9cecd52090d6e04f6c2a34832589e080050)
- https://huggingface.co/Hcompany/Holotron4-30B-A3B/raw/52184310f6c916e5e7d4b8f055af49fc41642574/config.json (retrieved 2026-10-18T15:51:48Z; SHA-256 b008470b6b727f11fd65a16f9e037553995b04621868e389b2480fed8ac908da)
- https://huggingface.co/Hcompany/Holotron4-30B-A3B/raw/52184310f6c916e5e7d4b8f055af49fc41642574/README.md (retrieved 2026-10-18T15:52:15Z; SHA-256 9095b7a5137876923d527f739c3013c3a12d84a7178b83502b7457058a8e081c)
