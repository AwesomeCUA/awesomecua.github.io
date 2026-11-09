# Holo2 235B-A22B

Research-preview Holo2 checkpoint, a 235B-total, 22B-active mixture-of-experts fine-tune of Qwen3-VL-235B-A22B-Thinking for UI localization and navigation on web, desktop and mobile screens.

- Catalog URL: https://awesomecua.com/resources/url-dad3d02b2f9603713287/
- Original source: https://huggingface.co/Hcompany/Holo2-235B-A22B
- Kind: model
- Review: curated
- Scope: core
- Environments: web, desktop, cross-platform
- Topics: grounding, planning, action-prediction, reinforcement-learning
- Evidence checked: 2026-10-18T16:11:14Z
- ID: url:dad3d02b2f9603713287

## Limitations

Hub API at revision f7f85b14 lists 96 BF16 safetensors shards (about 235.7B parameters) in the Qwen3VLMoeForConditionalGeneration architecture; the repository is publicly accessible. H Company's models page calls this release a research preview. The card describes supervised fine-tuning followed by online GRPO on a mix of open-source, synthetic and human-annotated data, some of it proprietary, and reports publisher localization scores including an iterative 'agentic localization' mode. No weights were downloaded. The card declares conflicting licenses; see the license review.

- Record JSON: https://awesomecua.com/resources/url-dad3d02b2f9603713287/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: CC-BY-NC-4.0 — https://huggingface.co/Hcompany/Holo2-235B-A22B/raw/f7f85b14ffdeafba313a1198407b9e2722b0341d/README.md

- weights review: The card's YAML license field is cc-by-nc-4.0 and its size list gives Holo2-235B-A22B a research-only, non-commercial license, and H Company's models page lists the Holo2-235B-A22B preview under CC BY-NC 4.0; a 'License: Apache 2.0' line in the card's developer block conflicts with both and is not adopted. Code and training-data terms are separate.
  Sources: https://huggingface.co/Hcompany/Holo2-235B-A22B/raw/f7f85b14ffdeafba313a1198407b9e2722b0341d/README.md, https://hcompany.ai/research/models

## Primary evidence

- https://huggingface.co/Hcompany/Holo2-235B-A22B/raw/f7f85b14ffdeafba313a1198407b9e2722b0341d/README.md (retrieved 2026-10-18T16:11:14Z; SHA-256 4f6f76d177f42044f840327a941b259dd84d46622e63c960c9b259fe2700d2ac)
- https://huggingface.co/api/models/Hcompany/Holo2-235B-A22B/revision/f7f85b14ffdeafba313a1198407b9e2722b0341d (retrieved 2026-10-18T16:10:49Z; SHA-256 a106ad31bf308a787574abc132bf3e5201c41a348452e1de476952fd7206beae)
- https://huggingface.co/Hcompany/Holo2-235B-A22B/raw/f7f85b14ffdeafba313a1198407b9e2722b0341d/config.json (retrieved 2026-10-18T16:10:49Z; SHA-256 c24d2cbea1eff6495a9b28b3bc604afa86d20d347ef8379ed76c6139c171218e)
- https://hcompany.ai/research/models (retrieved 2026-10-18T16:10:28Z; SHA-256 ddfa335cd71d0a7a4e61640752b1b24830f951a72c175e88fd03bf00a5e783c8)
- https://huggingface.co/Hcompany/Holo2-235B-A22B/raw/f7f85b14ffdeafba313a1198407b9e2722b0341d/README.md (retrieved 2026-10-18T16:11:14Z; SHA-256 4f6f76d177f42044f840327a941b259dd84d46622e63c960c9b259fe2700d2ac)
