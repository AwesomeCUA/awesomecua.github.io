# Meta-Llama-3.1-8B-Instruct-value-model-16k-qlora-adapter-v2

QLoRA adapter for Llama-3.1-8B-Instruct that acts as the value model of the WMA web agent, rating world-model predictions of each candidate action's outcome so the agent can choose the top-scored one.

- Catalog URL: https://awesomecua.com/resources/url-062d2cb4ccb89de78162/
- Original source: https://huggingface.co/LangAGI-Lab/Meta-Llama-3.1-8B-Instruct-value-model-16k-qlora-adapter-v2
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: reward-models, web-navigation, world-models
- Evidence checked: 2026-11-10T03:01:01Z
- ID: url:062d2cb4ccb89de78162

## Limitations

PEFT 0.12.0 adapter weights (adapter_model.safetensors) with optimizer, scheduler and trainer-state files for the base model meta-llama/Meta-Llama-3.1-8B-Instruct. The WMA paper trains the value function on Mind2Web with rewards set by progress toward the goal; the card states no license.

- Record JSON: https://awesomecua.com/resources/url-062d2cb4ccb89de78162/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/api/models/LangAGI-Lab/Meta-Llama-3.1-8B-Instruct-value-model-16k-qlora-adapter-v2 (retrieved 2026-11-10T03:01:01Z; SHA-256 0d619b9ca316aed1291df800d6c438a217b720197ae4ff759a040a148d03dd63)
- https://huggingface.co/api/models/LangAGI-Lab/Meta-Llama-3.1-8B-Instruct-value-model-16k-qlora-adapter-v2 (retrieved 2026-11-10T03:01:01Z; SHA-256 0d619b9ca316aed1291df800d6c438a217b720197ae4ff759a040a148d03dd63)
