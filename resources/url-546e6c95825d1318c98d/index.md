# OpenMobile-Data-v2

Mobile-agent supervision from emulator and simulator trajectories, plus executable tasks with starting states and success checks for reinforcement learning.

- Catalog URL: https://awesomecua.github.io/resources/url-546e6c95825d1318c98d/
- Original source: https://huggingface.co/datasets/OpenMobile-2/OpenMobile-Data-v2
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android, web
- Topics: mobile-navigation, data-generation, reinforcement-learning, tool-integration
- Evidence checked: 2026-10-17T01:48:51Z
- ID: url:546e6c95825d1318c98d

## Limitations

The reviewed card contains no explicit license declaration, so data-license status remains unknown. The repository code license is not inherited. The current code README points to the v2 dataset; an older project-page URL was not counted as a separate asset.

- Record JSON: https://awesomecua.github.io/resources/url-546e6c95825d1318c98d/record.json

## Structured profile

- formats: JSON, JSONL, PNG
- modalities: screenshots, text, tool calls
- splits: sft/train, rl/train
- supervision: next-action supervision, verifiable task outcomes

### Count observations

- 11,643 trajectories — SFT collection (reported; source: https://huggingface.co/datasets/OpenMobile-2/OpenMobile-Data-v2/raw/main/README.md)
- 118,582 decision steps — SFT collection (reported; source: https://huggingface.co/datasets/OpenMobile-2/OpenMobile-Data-v2/raw/main/README.md)
- 2,475 executable tasks — RL collection (reported; source: https://huggingface.co/datasets/OpenMobile-2/OpenMobile-Data-v2/raw/main/README.md)

These are publisher-reported totals at three distinct grains, not values to sum. Earlier screenshots may be collapsed; each SFT example keeps at most three images. The card and repository disagree on the singular/plural RL filename, so consumers should inspect the actual file manifest.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/OpenMobile-2/OpenMobile-Data-v2/raw/main/README.md (retrieved 2026-10-17T01:48:51Z; SHA-256 abacf9a10759a9e7a8eeec5a266c96ed83742bd9296a19be95d09c9717e18b7c)
- https://raw.githubusercontent.com/OpenMobile2/OpenMobile2-Code/HEAD/README.md (retrieved 2026-10-17T01:48:10Z; SHA-256 485279038266d9454df75e27a80a0a0d71c24e90700126d2dcfa0da921b1273d)
