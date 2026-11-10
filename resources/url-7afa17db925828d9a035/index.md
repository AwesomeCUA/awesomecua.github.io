---
title: "OS-Genesis 7B AW | AwesomeCUA"
url: https://awesomecua.com/resources/url-7afa17db925828d9a035/
updated: 2026-10-18
type: model
lang: en
---

# OS-Genesis 7B AW

The AndroidWorld-oriented Qwen2-VL checkpoint trained on mobile trajectories generated through OS-Genesis reverse task synthesis, predicting the next thought and action from an instruction, history and screen.

- Catalog URL: https://awesomecua.com/resources/url-7afa17db925828d9a035/
- Original source: https://huggingface.co/OS-Copilot/OS-Genesis-7B-AW
- Kind: model
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, action-prediction, imitation-learning
- Evidence checked: 2026-10-18T15:57:04Z
- ID: url:7afa17db925828d9a035

## Limitations

Hub API at revision 069001de lists four BF16 safetensors shards (about 8.29B parameters) in the Qwen2VLForConditionalGeneration architecture; the repository is publicly accessible. The card declares Apache-2.0 and Qwen/Qwen2-VL-7B-Instruct as the base, and names the AW training file of the OS-Genesis mobile data as its training data. The OS-Genesis README lists this checkpoint under AndroidWorld, and the card points to its AndroidWorld evaluation code, but the card's family-table caption says AndroidControl. The card's example loads its processor from OS-Atlas-Base-7B. AndroidControl and WebArena variants are separate releases, and no result is transferred to this checkpoint.

- Record JSON: https://awesomecua.com/resources/url-7afa17db925828d9a035/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/OS-Copilot/OS-Genesis-7B-AW/raw/069001de84358b6a83a3f34638e37df485f49bd0/README.md

## Primary evidence

- https://huggingface.co/OS-Copilot/OS-Genesis-7B-AW/raw/069001de84358b6a83a3f34638e37df485f49bd0/README.md (retrieved 2026-10-18T15:57:04Z; SHA-256 d21cdbfe878c8e990e8baffca226b9c433ec69839273f8d22bc5c7692337e770)
- https://huggingface.co/api/models/OS-Copilot/OS-Genesis-7B-AW/revision/069001de84358b6a83a3f34638e37df485f49bd0 (retrieved 2026-10-18T15:56:45Z; SHA-256 f118fbcc0b4622cb7eaf9134f5bb578e74ced0d07be442e8b73307296ed7dc64)
- https://raw.githubusercontent.com/OS-Copilot/OS-Genesis/72128850dad4ca9ba642ee7399794b4fb8f5154d/README.md (retrieved 2026-10-18T15:56:45Z; SHA-256 430e495ab250395d666854bd18b0fc29b819cd784cd7730215ef65e461834d0d)
- https://huggingface.co/OS-Copilot/OS-Genesis-7B-AW/raw/069001de84358b6a83a3f34638e37df485f49bd0/README.md (retrieved 2026-10-18T15:57:04Z; SHA-256 d21cdbfe878c8e990e8baffca226b9c433ec69839273f8d22bc5c7692337e770)
