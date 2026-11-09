# MirrorGuard checkpoint

Qwen2.5-VL-7B-Instruct fine-tune that reads an instruction, history, screenshot and a computer-use agent's thought, returns the thought unchanged when safe and rewrites or refuses it when risky.

- Catalog URL: https://awesomecua.com/resources/url-5f4264af210fb2686870/
- Original source: https://huggingface.co/WhitzardAgent/MirrorGuard
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: safety-security
- Evidence checked: 2026-10-19T06:50:28Z
- ID: url:5f4264af210fb2686870

## Limitations

The card gives the system prompt, a vLLM serving command and training settings (LLaMA-Factory 'full' tags, 6 epochs, learning rate 1e-5). The WhitzardAgent/MirrorGuard code README describes this checkpoint as the final VLM trained on reasoning-correction data from its MirrorWorld pipeline and deploys it as a runtime corrector in its agent examples. The card's GitHub link (github.com/bmz-q-q/MirrorGuard) returns 404. Weights were not downloaded or run; the manifest lists four Safetensors shards and an index.

- Record JSON: https://awesomecua.com/resources/url-5f4264af210fb2686870/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- weights review: The card's metadata declares license 'other' and its License section points to a LICENSE file at github.com/bmz-q-q/MirrorGuard, which returns 404; the MIT license of the WhitzardAgent/MirrorGuard code is not transferred to the weights.
  Sources: https://huggingface.co/WhitzardAgent/MirrorGuard/raw/ea5025874aa1d8a32cabec9d2c05b5634db34c14/README.md

## Primary evidence

- https://huggingface.co/WhitzardAgent/MirrorGuard/raw/ea5025874aa1d8a32cabec9d2c05b5634db34c14/README.md (retrieved 2026-10-19T06:50:28Z; SHA-256 477c263651059d4926f1bdc24daf09d43514853afd69a2286f7df1ce66743e36)
- https://huggingface.co/api/models/WhitzardAgent/MirrorGuard/revision/ea5025874aa1d8a32cabec9d2c05b5634db34c14 (retrieved 2026-10-19T06:50:29Z; SHA-256 18d2ac4e60be47c04e0fa32dfea16699913196b9ec9bc52a84e889b11aaa0eea)
- https://huggingface.co/WhitzardAgent/MirrorGuard/raw/ea5025874aa1d8a32cabec9d2c05b5634db34c14/config.json (retrieved 2026-10-19T06:50:29Z; SHA-256 0657beb7641fb2b71666de6760616f429fa4ed39e7b8d8989686ac1a4f2ee1fd)
- https://raw.githubusercontent.com/WhitzardAgent/MirrorGuard/9c5fb812a126493c75b6adda757af3b680a24708/README.md (retrieved 2026-10-19T06:50:26Z; SHA-256 90ab7463e9d9c4d6c5e3b60acf385486ca1d9f09455aea0450b167406cfdf728)
- https://huggingface.co/WhitzardAgent/MirrorGuard/raw/ea5025874aa1d8a32cabec9d2c05b5634db34c14/README.md (retrieved 2026-10-19T06:50:28Z; SHA-256 477c263651059d4926f1bdc24daf09d43514853afd69a2286f7df1ce66743e36)
