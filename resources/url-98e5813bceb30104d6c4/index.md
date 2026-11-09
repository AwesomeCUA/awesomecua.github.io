# Holo1.5 7B

H Company's Qwen2.5-VL-7B-based Holo1.5 checkpoint for locating interface elements and answering questions about screens across web, desktop and mobile, trained with supervised fine-tuning then GRPO.

- Catalog URL: https://awesomecua.com/resources/url-98e5813bceb30104d6c4/
- Original source: https://huggingface.co/Hcompany/Holo1.5-7B
- Kind: model
- Review: curated
- Scope: core
- Environments: web, desktop, cross-platform
- Topics: grounding, screen-understanding
- Evidence checked: 2026-10-18T16:06:18Z
- ID: url:98e5813bceb30104d6c4

## Limitations

Hub API at revision a1019821 lists four BF16 safetensors shards (about 8.29B parameters) in the Qwen2_5_VLForConditionalGeneration architecture; the repository is not gated. The card names Qwen/Qwen2.5-VL-7B-Instruct as the base and describes proprietary training data mixed from open-source, synthetic and human-annotated samples, so no training dataset is linked. It declares Apache-2.0 for this 7B size only: the same card says the 3B size inherits Qwen's license and the 72B size is research-only. Localization and screen-QA scores in the card are publisher-reported and are not recorded. Mobile is named without an operating system.

- Record JSON: https://awesomecua.com/resources/url-98e5813bceb30104d6c4/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/Hcompany/Holo1.5-7B/raw/a1019821ea078820dc284e90214a397faceab2bf/README.md

## Primary evidence

- https://huggingface.co/Hcompany/Holo1.5-7B/raw/a1019821ea078820dc284e90214a397faceab2bf/README.md (retrieved 2026-10-18T16:06:18Z; SHA-256 2490cdabf0cf570660b75888f164d8041b46e1878ddaeb92cd9864b40bda7922)
- https://huggingface.co/api/models/Hcompany/Holo1.5-7B/revision/a1019821ea078820dc284e90214a397faceab2bf (retrieved 2026-10-18T16:06:05Z; SHA-256 fae52db874701c3cb5f4894d8eb5db5859414f2d6709f9ec4add35f182a975db)
- https://huggingface.co/Hcompany/Holo1.5-7B/raw/a1019821ea078820dc284e90214a397faceab2bf/README.md (retrieved 2026-10-18T16:06:18Z; SHA-256 2490cdabf0cf570660b75888f164d8041b46e1878ddaeb92cd9864b40bda7922)
