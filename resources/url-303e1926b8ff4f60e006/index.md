# PTA-1

AskUI's Florence-2-base grounding model of about 270M parameters that returns a bounding box for a described element in a screenshot, intended for low-latency local computer and phone automation.

- Catalog URL: https://awesomecua.com/resources/url-303e1926b8ff4f60e006/
- Original source: https://huggingface.co/AskUI/PTA-1
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform, desktop
- Topics: grounding, efficiency
- Evidence checked: 2026-10-18T15:50:29Z
- ID: url:303e1926b8ff4f60e006

## Limitations

Inference uses Florence-2's <OPEN_VOCABULARY_DETECTION> task prompt with the element description and the repository's remote code. The card calls its evaluation a first version on 999 samples (333 each from three datasets) scored by click success, marks datasets whose training splits the model saw, and attributes part of its score to data bias; no result was reproduced. MIT is declared on the card for the weights; Florence-2's own terms and the training data's terms are separate.

- Record JSON: https://awesomecua.com/resources/url-303e1926b8ff4f60e006/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: MIT — https://huggingface.co/AskUI/PTA-1/raw/cf9877cde0d7c75b60b4d699f359922a848ee3ec/README.md

- weights review: Publisher model-card declaration for the checkpoint; base-model, code and training-data terms are separate.
  Sources: https://huggingface.co/AskUI/PTA-1/raw/cf9877cde0d7c75b60b4d699f359922a848ee3ec/README.md

## Primary evidence

- https://huggingface.co/AskUI/PTA-1/raw/cf9877cde0d7c75b60b4d699f359922a848ee3ec/README.md (retrieved 2026-10-18T15:50:29Z; SHA-256 f20016443dcaf6018668ebb0acf7e40105f12fdf28acf370663c8b9b005f9d61)
- https://huggingface.co/api/models/AskUI/PTA-1 (retrieved 2026-10-18T15:50:30Z; SHA-256 a51d649a22372d609874dc6a512645770f2e785919f1dab23df5ec2476b75ec6)
- https://huggingface.co/AskUI/PTA-1/raw/cf9877cde0d7c75b60b4d699f359922a848ee3ec/config.json (retrieved 2026-10-18T15:50:30Z; SHA-256 74c60cc3088daaed377d9399c3a68577c424394ab4e03ced000bfd28d752938e)
- https://huggingface.co/AskUI/PTA-1/raw/cf9877cde0d7c75b60b4d699f359922a848ee3ec/README.md (retrieved 2026-10-18T15:50:29Z; SHA-256 f20016443dcaf6018668ebb0acf7e40105f12fdf28acf370663c8b9b005f9d61)
