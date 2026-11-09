# Qwen-GUI checkpoint

Qwen-VL checkpoint released with GUICourse and tuned on its GUIAct and GUIChat data; the card's demo draws the box and point coordinates it returns, on a 0–1000 grid, onto the input screenshot.

- Catalog URL: https://awesomecua.com/resources/url-23bc63f93d3c31d74af3/
- Original source: https://huggingface.co/RhapsodyAI/qwen_vl_guidance
- Kind: model
- Review: curated
- Scope: core
- Environments: web, android
- Topics: grounding, action-prediction, screen-understanding
- Evidence checked: 2026-10-18T15:43:24Z
- ID: url:23bc63f93d3c31d74af3

## Limitations

GUICourse's README announces this repository as the Qwen-GUI weights. The card has no prose: its YAML lists GUIChat and GUIAct as datasets and declares Apache-2.0, and its only content is an inference script. config.json gives a QWenLMHeadModel with a 448-pixel visual encoder. The manifest holds one PyTorch weight file plus trainer state. Web and Android coverage follows from the training data; no checkpoint was loaded and no result was reproduced. The terms of the Qwen-VL base model were not assessed.

- Record JSON: https://awesomecua.com/resources/url-23bc63f93d3c31d74af3/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: Apache-2.0 — https://huggingface.co/RhapsodyAI/qwen_vl_guidance/raw/2b1a7c404a153d683a87314ddc03c806cfc96a1d/README.md

- weights review: Publisher model-card declaration for the checkpoint; base-model, code and training-data terms are separate.
  Sources: https://huggingface.co/RhapsodyAI/qwen_vl_guidance/raw/2b1a7c404a153d683a87314ddc03c806cfc96a1d/README.md

## Primary evidence

- https://huggingface.co/api/models/RhapsodyAI/qwen_vl_guidance (retrieved 2026-10-18T15:43:24Z; SHA-256 c73d0b1d9c9a48d27771751fd5c151c25bc39e8003173438abb3499cd05ac581)
- https://huggingface.co/RhapsodyAI/qwen_vl_guidance/raw/2b1a7c404a153d683a87314ddc03c806cfc96a1d/README.md (retrieved 2026-10-18T15:43:24Z; SHA-256 d995100b41eaa95f3476df60d95544c4932b2c25d9df7926d77a9fc2741022d6)
- https://huggingface.co/RhapsodyAI/qwen_vl_guidance/raw/2b1a7c404a153d683a87314ddc03c806cfc96a1d/config.json (retrieved 2026-10-18T15:43:25Z; SHA-256 2c9878d68214797ea1ba0602a6360860d4862f4cf9f56b29cb27af781e6afab3)
- https://raw.githubusercontent.com/RUCBM/GUICourse/a6dd4c3f0445c8b568d2c4792934a65ee4454bef/README.md (retrieved 2026-10-18T15:43:25Z; SHA-256 0968273442bfb9a6478fe78f8b9a6247a3bb8e6d028880939b432fd009961e98)
- https://huggingface.co/api/models/RhapsodyAI/qwen_vl_guidance (retrieved 2026-10-18T15:43:24Z; SHA-256 c73d0b1d9c9a48d27771751fd5c151c25bc39e8003173438abb3499cd05ac581)
