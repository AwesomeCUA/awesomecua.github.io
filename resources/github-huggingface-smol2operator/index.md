# Smol2Operator

Hugging Face recipe that converts Aguvis GUI data into one normalized action space and fine-tunes SmolVLM2-2.2B in two phases, first for screenshot grounding and then for agentic GUI action code.

- Catalog URL: https://awesomecua.com/resources/github-huggingface-smol2operator/
- Original source: https://github.com/huggingface/smol2operator
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, desktop, android
- Topics: grounding, imitation-learning, data-generation, action-prediction
- Evidence checked: 2026-10-18T11:11:16Z
- ID: github:huggingface/smol2operator

## Limitations

The README is the project write-up. The inspected tree contains recipe.ipynb, action-conversion and Aguvis preprocessing code, a function parser, an action-space converter, a collator and evaluation prompts. The README names derived datasets (smolagents/aguvis-stage-1 and smolagents/aguvis-stage-2), the SmolVLM2-2.2B-Instruct-Agentic-GUI checkpoint and a demo Space; those Hub assets are not separate records here, and their licenses were not reviewed. The uses relations record that the recipe transforms the xlangai Aguvis stage 1 and stage 2 releases. ScreenSpot-v2 results are publisher-reported. The repository has no license file, so code permissions are unknown.

- Record JSON: https://awesomecua.com/resources/github-huggingface-smol2operator/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/huggingface/smol2operator/HEAD/README.md (retrieved 2026-10-18T11:11:16Z; SHA-256 d0190080edc5e44afad1a655c2e575c6071afdbab181a75c546e7210d17c4f44)
- https://api.github.com/repos/huggingface/smol2operator (retrieved 2026-10-18T11:11:35Z; SHA-256 f9e05da9ff37a969dcf83993af2141e8ef0738ad0c89340660f20f806907a149)
- https://api.github.com/repos/huggingface/smol2operator/git/trees/main?recursive=1 (retrieved 2026-10-18T11:11:36Z; SHA-256 537f734934d9dbc7eea363326a81558c0fda99d8b292d70219b124b2e5fb8ac9)
