# Holo1.5 3B

Smallest Holo1.5 checkpoint, fine-tuned from Qwen2.5-VL-3B-Instruct with supervised training then GRPO, for locating interface elements and answering questions about web, desktop and mobile screens.

- Catalog URL: https://awesomecua.com/resources/url-dc20a06c296207ac11a6/
- Original source: https://huggingface.co/Hcompany/Holo1.5-3B
- Kind: model
- Review: curated
- Scope: core
- Environments: web, desktop, cross-platform
- Topics: grounding, screen-understanding
- Evidence checked: 2026-10-18T16:14:15Z
- ID: url:dc20a06c296207ac11a6

## Limitations

Hub API at revision f10805d3 lists two BF16 safetensors shards (about 3.75B parameters) in the Qwen2_5_VLForConditionalGeneration architecture; the repository is not gated. The card describes proprietary training data mixed from open-source, synthetic and human-annotated samples, so no training dataset is linked; its localization and screen-QA scores are publisher-reported and are not recorded. Mobile is named without an operating system. The card's license field is 'other': it says the 3B size inherits Qwen's license and names the Qwen Research License, and the repository's LICENSE file is an H research agreement limited to non-commercial use. The 7B and 72B sizes carry different terms, and H Company's models page gives the family one CC BY-NC 4.0 label.

- Record JSON: https://awesomecua.com/resources/url-dc20a06c296207ac11a6/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: other — https://huggingface.co/Hcompany/Holo1.5-3B/raw/f10805d3a566ac2932ca17dfeeed91986ead01f8/README.md

## Primary evidence

- https://huggingface.co/Hcompany/Holo1.5-3B/raw/f10805d3a566ac2932ca17dfeeed91986ead01f8/README.md (retrieved 2026-10-18T16:14:15Z; SHA-256 13cc49f7c52e358d2ad34bff43e7c46c66c291928ff19a4e4c9a2aed6bf9c1a2)
- https://huggingface.co/api/models/Hcompany/Holo1.5-3B/revision/f10805d3a566ac2932ca17dfeeed91986ead01f8 (retrieved 2026-10-18T16:13:49Z; SHA-256 619580184acaa520e054f1844a17b0fc44bef8df2dafb9a47ad0dc3bac759223)
- https://huggingface.co/Hcompany/Holo1.5-3B/raw/f10805d3a566ac2932ca17dfeeed91986ead01f8/LICENSE (retrieved 2026-10-18T16:13:21Z; SHA-256 f91e82dddcf31da795865d15dbe3e7bedd2a4170382df5191d672a2f357c4184)
- https://hcompany.ai/research/models (retrieved 2026-10-18T16:10:28Z; SHA-256 ddfa335cd71d0a7a4e61640752b1b24830f951a72c175e88fd03bf00a5e783c8)
- https://huggingface.co/Hcompany/Holo1.5-3B/raw/f10805d3a566ac2932ca17dfeeed91986ead01f8/README.md (retrieved 2026-10-18T16:14:15Z; SHA-256 13cc49f7c52e358d2ad34bff43e7c46c66c291928ff19a4e4c9a2aed6bf9c1a2)
