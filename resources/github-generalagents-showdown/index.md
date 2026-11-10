# showdown

Evaluation code for the showdown-clicks benchmark: eval.py checks whether a model's predicted click on a macOS screenshot lands in the annotated bounding box, with integrations for Claude, Qwen, UI-TARS and others.

- Catalog URL: https://awesomecua.com/resources/github-generalagents-showdown/
- Original source: https://github.com/generalagents/showdown
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: desktop, macos
- Topics: grounding, evaluation, action-prediction
- Evidence checked: 2026-11-10T03:00:59Z
- ID: github:generalagents/showdown

## Limitations

The clicks/ directory holds eval.py, scripts and model integrations for Ace, Claude, Gemini, Molmo, OmniParser, OpenAI, OpenAI CUA, Qwen and UI-TARS; its .gitignore excludes data/*, and the README links the showdown-clicks-dev data on Hugging Face. The README reports accuracy with bootstrapped 95% intervals and latency per model on the 557-click dev subset of a 5,679-click collection.

- Record JSON: https://awesomecua.com/resources/github-generalagents-showdown/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/generalagents/showdown/86cbd20d161eb3a3e49babe677a26dcec4beb91a/README.md (retrieved 2026-11-10T03:00:59Z; SHA-256 bce749a655255ac4100318b93fd8a40f381b90f093c38f7884edd1f8b3de593b)
