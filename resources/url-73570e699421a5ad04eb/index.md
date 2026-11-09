# MiniCPM-GUIDance

MiniCPM-V checkpoint released with GUICourse and tuned on its GUIEnv, GUIAct and GUIChat data; card prompts cover next-action generation from a task and action history, and screenshot chat with grounded boxes.

- Catalog URL: https://awesomecua.com/resources/url-73570e699421a5ad04eb/
- Original source: https://huggingface.co/RhapsodyAI/minicpm-guidance
- Kind: model
- Review: curated
- Scope: core
- Environments: web, android
- Topics: grounding, action-prediction, screen-understanding
- Evidence checked: 2026-10-18T15:57:12Z
- ID: url:73570e699421a5ad04eb

## Limitations

GUICourse's README announces this repository as the MiniCPM-GUI weights with inference code. The card's YAML lists GUIChat, GUIEnv and GUIAct and declares Apache-2.0; its prose gives action and grounding prompt templates and a batch-size-one inference example whose output marks an element with a box. config.json gives MiniCPMVForCausalLM, and the card does not name the base checkpoint. The manifest holds one PyTorch weight file. Web and Android coverage follows from the training data; no checkpoint was loaded and no result was reproduced. The terms of the MiniCPM base model were not assessed.

- Record JSON: https://awesomecua.com/resources/url-73570e699421a5ad04eb/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: Apache-2.0 — https://huggingface.co/RhapsodyAI/minicpm-guidance/raw/854aaf385ec56b8e738161b4aedb3eed5d28f9bc/README.md

- weights review: Publisher model-card declaration for the checkpoint; base-model, code and training-data terms are separate.
  Sources: https://huggingface.co/RhapsodyAI/minicpm-guidance/raw/854aaf385ec56b8e738161b4aedb3eed5d28f9bc/README.md

## Primary evidence

- https://huggingface.co/api/models/RhapsodyAI/minicpm-guidance (retrieved 2026-10-18T15:57:12Z; SHA-256 034b80c1ef1d1e5832bf2c430a82c470980a7f5e8190ce9abc922445455d67b9)
- https://huggingface.co/RhapsodyAI/minicpm-guidance/raw/854aaf385ec56b8e738161b4aedb3eed5d28f9bc/README.md (retrieved 2026-10-18T15:57:11Z; SHA-256 2dfe7d1252e18ad2f107e4d450440ca6217edfde26684c8763f57ec28790a7d2)
- https://huggingface.co/RhapsodyAI/minicpm-guidance/raw/854aaf385ec56b8e738161b4aedb3eed5d28f9bc/config.json (retrieved 2026-10-18T15:57:11Z; SHA-256 4974d4b6f3eacca89a03a88ec790ff3982ddea01fbbc01e8c37b783521c56044)
- https://raw.githubusercontent.com/RUCBM/GUICourse/a6dd4c3f0445c8b568d2c4792934a65ee4454bef/README.md (retrieved 2026-10-18T15:57:11Z; SHA-256 0968273442bfb9a6478fe78f8b9a6247a3bb8e6d028880939b432fd009961e98)
- https://huggingface.co/api/models/RhapsodyAI/minicpm-guidance (retrieved 2026-10-18T15:57:12Z; SHA-256 034b80c1ef1d1e5832bf2c430a82c470980a7f5e8190ce9abc922445455d67b9)
