---
title: "showdown-clicks | AwesomeCUA"
url: https://awesomecua.com/resources/url-863cc1744cd5d40418be/
updated: 2026-10-18
type: benchmark
lang: en
---

# showdown-clicks

Offline click benchmark from General Agents: 557 human left clicks on macOS screenshots, each with an instruction and the bounding box of valid click locations, scored by whether a predicted point lands inside.

- Catalog URL: https://awesomecua.com/resources/url-863cc1744cd5d40418be/
- Original source: https://huggingface.co/datasets/generalagents/showdown-clicks
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: macos, desktop
- Topics: grounding, evaluation
- Evidence checked: 2026-10-18T11:14:39Z
- ID: url:863cc1744cd5d40418be

## Limitations

The card describes showdown-clicks as part of General Agents' showdown suite and a 5,679-click collection recorded in late 2024, of which only the 557-click showdown-clicks-dev subset is released; the remainder is not public. Screenshots range from 1280x800 to 1680x1050. The card's results table includes the publisher's own ace-control models. The card declares MIT and notes that screenshots may contain third-party content.

- Record JSON: https://awesomecua.com/resources/url-863cc1744cd5d40418be/record.json

## Structured profile

- Actions / outputs: single left-click coordinate
- Evaluation: A prediction counts as correct when the predicted click point falls inside the annotated bounding box of viable click locations; the card reports accuracy with bootstrapped 95% confidence intervals and latency.
- Focus: instruction-conditioned click grounding, low-level desktop control
- Observations: macOS screenshots
- Setting: offline

### Count observations

- 557 annotated clicks — showdown-clicks-dev/data.csv (dev split) (computed) (computed; source: https://huggingface.co/datasets/generalagents/showdown-clicks/raw/main/showdown-clicks-dev/data.csv)
- 5,679 left clicks — full showdown-clicks collection described by the card; not released (reported; source: https://huggingface.co/datasets/generalagents/showdown-clicks/raw/main/README.md)

The released CSV has 557 rows with unique IDs and screenshots, and columns for instruction, bounding box and image size. Only the dev subset is public, so scores on the full collection cannot be reproduced from the release.

## License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/generalagents/showdown-clicks/raw/main/README.md
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/generalagents/showdown-clicks/raw/main/README.md (retrieved 2026-10-18T11:14:39Z; SHA-256 14d46319e7abf54616df512b8bbc7d6d62347e9b1a36e21a61aa2c4667e909a4)
- https://huggingface.co/api/datasets/generalagents/showdown-clicks (retrieved 2026-10-18T11:14:40Z; SHA-256 b1a8a685e2bca74891afc030decdb65fc46d2f0a2d2842df1df24faa2999c678)
- https://huggingface.co/datasets/generalagents/showdown-clicks/raw/main/showdown-clicks-dev/data.csv (retrieved 2026-10-18T11:14:41Z; SHA-256 c13a190cdc2157438ec505778dfa21ebbce1b9f518d06b8d3ebb31737aeb5312)
- https://huggingface.co/datasets/generalagents/showdown-clicks/raw/main/README.md (retrieved 2026-10-18T11:14:39Z; SHA-256 14d46319e7abf54616df512b8bbc7d6d62347e9b1a36e21a61aa2c4667e909a4)
