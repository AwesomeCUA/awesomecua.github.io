# OS-Genesis 8B WA

WebArena-oriented InternVL2-8B checkpoint trained on web trajectories from OS-Genesis reverse task synthesis; the card's example prompt pairs a screenshot and accessibility tree with the instruction and action history.

- Catalog URL: https://awesomecua.com/resources/url-f2c34526651f5f57cf98/
- Original source: https://huggingface.co/OS-Copilot/OS-Genesis-8B-WA
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, action-prediction, imitation-learning
- Evidence checked: 2026-10-18T16:15:54Z
- ID: url:f2c34526651f5f57cf98

## Limitations

Hub API at revision d1ec7c7f lists four BF16 safetensors shards (about 8.08B parameters) in the InternVLChatModel architecture, with custom InternViT and InternLM2 modeling files; the repository is not gated. The card prose and config.json name InternVL2-8B (InternLM2 language model) as the starting model, while the card's YAML base_model field says InternVL2-4B; the prose and configuration are followed. The card lists this checkpoint in its WA table with the OS-Genesis web training file and points to WebArena evaluation code, although its quick-start sentence calls it a mobile action model and its table caption says AndroidControl. The OS-Genesis README lists it under Web. The card declares Apache-2.0. The 4B and 7B WA checkpoints and the AndroidWorld and AndroidControl variants are separate releases, and no result is transferred to this checkpoint; no weights were loaded.

- Record JSON: https://awesomecua.com/resources/url-f2c34526651f5f57cf98/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OS-Copilot/OS-Genesis-8B-WA/raw/d1ec7c7f7dd2478d1830e04a812fd216a479e34c/README.md

## Primary evidence

- https://huggingface.co/OS-Copilot/OS-Genesis-8B-WA/raw/d1ec7c7f7dd2478d1830e04a812fd216a479e34c/README.md (retrieved 2026-10-18T16:15:54Z; SHA-256 c966adef0998300a623921d0882bf155025da261357263cef3ed8c3ac165ed6e)
- https://huggingface.co/api/models/OS-Copilot/OS-Genesis-8B-WA/revision/d1ec7c7f7dd2478d1830e04a812fd216a479e34c (retrieved 2026-10-18T16:15:55Z; SHA-256 27a4a4c781412908e220a274b39085507aed74fd56fca2471d9c2b3c7019da37)
- https://huggingface.co/OS-Copilot/OS-Genesis-8B-WA/raw/d1ec7c7f7dd2478d1830e04a812fd216a479e34c/config.json (retrieved 2026-10-18T16:15:55Z; SHA-256 918ec82f37bd5bf98f1e2a01940943f4dc7b60b01751447e32324410597278d5)
- https://raw.githubusercontent.com/OS-Copilot/OS-Genesis/72128850dad4ca9ba642ee7399794b4fb8f5154d/README.md (retrieved 2026-10-18T16:15:57Z; SHA-256 430e495ab250395d666854bd18b0fc29b819cd784cd7730215ef65e461834d0d)
- https://huggingface.co/OS-Copilot/OS-Genesis-8B-WA/raw/d1ec7c7f7dd2478d1830e04a812fd216a479e34c/README.md (retrieved 2026-10-18T16:15:54Z; SHA-256 c966adef0998300a623921d0882bf155025da261357263cef3ed8c3ac165ed6e)
