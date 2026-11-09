# Holotron-12B

Computer-use policy checkpoint from H Company and NVIDIA, fine-tuned from Nemotron Nano 12B v2 VL on localization and navigation data, with a hybrid SSM-attention backbone for high-throughput multi-image inference.

- Catalog URL: https://awesomecua.com/resources/url-6c16f91d8d79d7836283/
- Original source: https://huggingface.co/Hcompany/Holotron-12B
- Kind: model
- Review: curated
- Scope: core
- Environments: web, desktop, cross-platform
- Topics: grounding, action-prediction, web-navigation, efficiency
- Evidence checked: 2026-10-18T15:55:28Z
- ID: url:6c16f91d8d79d7836283

## Limitations

The manifest lists six Safetensors shards, about 13.2B BF16 parameters by the Hub count. The card names the NVIDIA Open Model License in its text but sets no license field and ships no license file; H's models page lists the same license and includes Holotron-12B among the lab's open checkpoints. The fine-tuning mixture is proprietary and not released. Throughput and WebVoyager figures are publisher measurements that were not reproduced; no weights were loaded.

- Record JSON: https://awesomecua.com/resources/url-6c16f91d8d79d7836283/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: NVIDIA Open Model License — https://huggingface.co/Hcompany/Holotron-12B/raw/a68349a8cbee7570c86e85c5864a3481ab2f3520/README.md

- weights review: Publisher model-card text names the NVIDIA Open Model License for this checkpoint, matching H's models page; code and training-data terms are separate.
  Sources: https://huggingface.co/Hcompany/Holotron-12B/raw/a68349a8cbee7570c86e85c5864a3481ab2f3520/README.md, https://hcompany.ai/research/models

## Primary evidence

- https://huggingface.co/Hcompany/Holotron-12B/raw/a68349a8cbee7570c86e85c5864a3481ab2f3520/README.md (retrieved 2026-10-18T15:55:28Z; SHA-256 92912de5e547c322760b307abb5e917b80bc100237e52e95089019ce42b9e985)
- https://huggingface.co/api/models/Hcompany/Holotron-12B (retrieved 2026-10-18T15:55:18Z; SHA-256 e89d926da5f3eb86e379dc922b002273aa58c7eddcae5526a6307dd650ed4be2)
- https://huggingface.co/Hcompany/Holotron-12B/raw/a68349a8cbee7570c86e85c5864a3481ab2f3520/config.json (retrieved 2026-10-18T15:55:18Z; SHA-256 c122cb7428978b26e1dcb19fdd1bab6db8c33dcb42fc380d505783b5b189594f)
- https://hcompany.ai/research/models (retrieved 2026-10-18T15:55:18Z; SHA-256 ddfa335cd71d0a7a4e61640752b1b24830f951a72c175e88fd03bf00a5e783c8)
