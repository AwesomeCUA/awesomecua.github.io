---
title: "OS-Atlas Pro 7B | AwesomeCUA"
url: https://awesomecua.com/resources/url-9c5e0c8f6784bedeb153/
updated: 2026-10-18
type: model
lang: en
---

# OS-Atlas Pro 7B

OS-Atlas action checkpoint fine-tuned from OS-Atlas-Base-7B that reads a screenshot, task and history and writes a thought plus the next basic or user-defined GUI action, in the Qwen2-VL architecture.

- Catalog URL: https://awesomecua.com/resources/url-9c5e0c8f6784bedeb153/
- Original source: https://huggingface.co/OS-Copilot/OS-Atlas-Pro-7B
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: action-prediction, grounding
- Evidence checked: 2026-10-18T12:03:55Z
- ID: url:9c5e0c8f6784bedeb153

## Limitations

Hub API at revision 6c0135de lists four BF16 safetensors shards (about 8.29B parameters) in the Qwen2VLForConditionalGeneration architecture; access is open. The card says the checkpoint is fine-tuned from OS-Atlas-Base-7B and is the Pro model of the paper's Section 5.4, while the Hub base_model metadata names Qwen/Qwen2-VL-7B-Instruct. The card's inference example loads weights from local paths; this Hub ID is absent from the example. The card declares Apache-2.0 for the checkpoint.

- Record JSON: https://awesomecua.com/resources/url-9c5e0c8f6784bedeb153/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OS-Copilot/OS-Atlas-Pro-7B/raw/6c0135de0627db98533ac4b47ae71fa17cf21c48/README.md

## Primary evidence

- https://huggingface.co/OS-Copilot/OS-Atlas-Pro-7B/raw/6c0135de0627db98533ac4b47ae71fa17cf21c48/README.md (retrieved 2026-10-18T12:03:55Z; SHA-256 44a33feb0172449e12f3b54b26073acf90af66a64c598768040fd6de32a44e6f)
- https://huggingface.co/api/models/OS-Copilot/OS-Atlas-Pro-7B/revision/6c0135de0627db98533ac4b47ae71fa17cf21c48 (retrieved 2026-10-18T12:03:55Z; SHA-256 8fe182b06e327e37d5b655239aa4e87ce634612e0da9bf6739c6bc94c1bc1ea1)
- https://huggingface.co/OS-Copilot/OS-Atlas-Pro-7B/raw/6c0135de0627db98533ac4b47ae71fa17cf21c48/README.md (retrieved 2026-10-18T12:03:55Z; SHA-256 44a33feb0172449e12f3b54b26073acf90af66a64c598768040fd6de32a44e6f)
