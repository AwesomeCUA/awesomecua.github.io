# Holo4 27B BF16

Dense 27B computer-use checkpoint from H Company built on Qwen3.8-27B; an external harness sends it screenshots and tool results and executes the clicks, typing, code and tool calls it requests.

- Catalog URL: https://awesomecua.com/resources/url-acd43f38167ba02e7ff8/
- Original source: https://huggingface.co/Hcompany/Holo4-27B
- Kind: model
- Review: curated
- Scope: core
- Environments: web, desktop, cross-platform
- Topics: grounding, action-prediction, tool-integration
- Evidence checked: 2026-10-18T16:09:32Z
- ID: url:acd43f38167ba02e7ff8

## Limitations

This is the full-precision BF16 Holo4-27B repository; the card lists FP8, NVFP4 and Q4 GGUF builds as separate repositories and names web, desktop and mobile as target environments. config.json declares Qwen3_5ForConditionalGeneration, while the card and Hub metadata name Qwen/Qwen3.8-27B as the base. The manifest lists 18 Safetensors shards and the Hub reports 27,356,728,560 BF16 parameters. The card declares CC BY-NC 4.0 for the weights and also ships the base model's Apache-2.0 text. OSWorld, OSWorld 2.0 and AutomationBench scores and costs on the card are publisher claims and were not reproduced; no weights were loaded.

- Record JSON: https://awesomecua.com/resources/url-acd43f38167ba02e7ff8/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: CC-BY-NC-4.0 — https://huggingface.co/Hcompany/Holo4-27B/raw/4de03cfeee1d930b616bfd4817570293f29ad8b9/README.md

- weights review: Publisher model-card declaration for the Holo4-27B weights, matched by the repository's CC BY-NC 4.0 LICENSE file; the bundled Apache-2.0 text covers the Qwen base model, and code and training-data terms are separate.
  Sources: https://huggingface.co/Hcompany/Holo4-27B/raw/4de03cfeee1d930b616bfd4817570293f29ad8b9/README.md, https://huggingface.co/Hcompany/Holo4-27B/raw/4de03cfeee1d930b616bfd4817570293f29ad8b9/LICENSE

## Primary evidence

- https://huggingface.co/Hcompany/Holo4-27B/raw/4de03cfeee1d930b616bfd4817570293f29ad8b9/README.md (retrieved 2026-10-18T16:09:32Z; SHA-256 2254c1065a1d88bc491a93e060c5c55e25edc90a34c935a457b5dc1466a1c123)
- https://huggingface.co/api/models/Hcompany/Holo4-27B (retrieved 2026-10-18T16:09:31Z; SHA-256 32d1105195420bd56f24e9267bbbfd543a407d53468318c2387695fd71faa480)
- https://huggingface.co/Hcompany/Holo4-27B/raw/4de03cfeee1d930b616bfd4817570293f29ad8b9/config.json (retrieved 2026-10-18T16:09:32Z; SHA-256 c0dac651abc94fc028da5ecef306b23c795ec5ebbd3f30b3772c6995f34c8a44)
- https://huggingface.co/Hcompany/Holo4-27B/raw/4de03cfeee1d930b616bfd4817570293f29ad8b9/LICENSE (retrieved 2026-10-18T16:09:33Z; SHA-256 41003d4a74749c0220e33dd415042164b5a1093ed401f36277234f772d22d3d0)
- https://huggingface.co/Hcompany/Holo4-27B/raw/4de03cfeee1d930b616bfd4817570293f29ad8b9/README.md (retrieved 2026-10-18T16:09:32Z; SHA-256 2254c1065a1d88bc491a93e060c5c55e25edc90a34c935a457b5dc1466a1c123)
