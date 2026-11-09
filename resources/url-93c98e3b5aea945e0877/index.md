# OS-Genesis 7B WA

The WebArena-oriented Qwen2-VL-7B checkpoint trained on web trajectories generated through OS-Genesis reverse task synthesis, predicting the next thought and action from an instruction, history and page.

- Catalog URL: https://awesomecua.com/resources/url-93c98e3b5aea945e0877/
- Original source: https://huggingface.co/OS-Copilot/OS-Genesis-7B-WA
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, action-prediction, imitation-learning
- Evidence checked: 2026-10-18T16:04:38Z
- ID: url:93c98e3b5aea945e0877

## Limitations

Hub API at revision 710c529d lists four BF16 safetensors shards (about 8.29B parameters) in the Qwen2VLForConditionalGeneration architecture; the repository is publicly accessible. The card declares Apache-2.0 and Qwen/Qwen2-VL-7B-Instruct as the base, calls it a web action model, names the OS-Genesis web training file as its training data and points to WebArena evaluation code, although its family-table caption says AndroidControl. The OS-Genesis README lists it under Web. The card's example prompt combines a screenshot, an accessibility tree, the instruction and the action history, and loads its processor from OS-Atlas-Base-7B. AndroidWorld and AndroidControl variants are separate releases, and no result is transferred to this checkpoint.

- Record JSON: https://awesomecua.com/resources/url-93c98e3b5aea945e0877/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OS-Copilot/OS-Genesis-7B-WA/raw/710c529da0975103edf7e2ad50c0f93fde690a84/README.md

## Primary evidence

- https://huggingface.co/OS-Copilot/OS-Genesis-7B-WA/raw/710c529da0975103edf7e2ad50c0f93fde690a84/README.md (retrieved 2026-10-18T16:04:38Z; SHA-256 6c35603768028607de9b32109cfe56455dc23612dd012a6f50393a380a7163a5)
- https://huggingface.co/api/models/OS-Copilot/OS-Genesis-7B-WA/revision/710c529da0975103edf7e2ad50c0f93fde690a84 (retrieved 2026-10-18T16:04:05Z; SHA-256 4d5370a7b91db042c71ed36c0178c2a556684813e34b85b3c04e7bc190830d68)
- https://raw.githubusercontent.com/OS-Copilot/OS-Genesis/72128850dad4ca9ba642ee7399794b4fb8f5154d/README.md (retrieved 2026-10-18T16:04:24Z; SHA-256 430e495ab250395d666854bd18b0fc29b819cd784cd7730215ef65e461834d0d)
- https://huggingface.co/OS-Copilot/OS-Genesis-7B-WA/raw/710c529da0975103edf7e2ad50c0f93fde690a84/README.md (retrieved 2026-10-18T16:04:38Z; SHA-256 6c35603768028607de9b32109cfe56455dc23612dd012a6f50393a380a7163a5)
