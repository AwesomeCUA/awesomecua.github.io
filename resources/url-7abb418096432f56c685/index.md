---
title: "ScreenSpot | AwesomeCUA"
url: https://awesomecua.com/resources/url-7abb418096432f56c685/
updated: 2026-10-17
type: benchmark
lang: en
---

# ScreenSpot

GUI grounding test set of 1,272 screenshot instructions from iOS, Android, macOS, Windows and web interfaces, each labeled with the target element's bounding box.

- Catalog URL: https://awesomecua.com/resources/url-7abb418096432f56c685/
- Original source: https://huggingface.co/datasets/rootsautomation/ScreenSpot
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding, evaluation
- Evidence checked: 2026-10-16T06:38:26Z
- ID: url:7abb418096432f56c685

- Record JSON: https://awesomecua.com/resources/url-7abb418096432f56c685/record.json

## Structured profile

- Actions / outputs: predicted click point; a predicted box is reduced to its center
- Evaluation: The SeeClick evaluator scores whether the predicted point falls inside the target box, with platform and text/icon breakdowns. The Hub packaging uses xyxy boxes, whereas the original evaluator reads xywh and converts it; adapt the loader to the chosen release.
- Focus: single-step GUI element grounding
- Observations: screenshot, English instruction
- Setting: offline

### Count observations

- 1,272 instruction–target examples — Hub test split at 0be08781; row count distinct from unique screenshots (reported; source: https://huggingface.co/datasets/bevaya/ScreenSpot/raw/0be08781e2e188582f6131625ae1598d443b4d5d/README.md)

Offline, zero-shot evaluation across mobile, desktop, and web. The card explicitly excludes training use in its intended-use description. Public API reports ungated Parquet files and canonical Hub id bevaya/ScreenSpot; the catalog identity is preserved. Apache-2.0 is the Hub data declaration. No runtime or underlying screenshot rights audit was performed.

## License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/rootsautomation/ScreenSpot
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/api/datasets/rootsautomation/ScreenSpot (retrieved 2026-10-16T06:38:26Z; SHA-256 9e2d2a2c076032225911ae1032b548eafa6331ea81a2779632610f0f1c82dfd9)
- https://huggingface.co/datasets/bevaya/ScreenSpot/raw/0be08781e2e188582f6131625ae1598d443b4d5d/README.md (retrieved 2026-10-17T14:10:00Z; SHA-256 5ab2240c064502f75a6726311e10e7724ab7055347697f883b15a6ee8e7d00a6)
- https://raw.githubusercontent.com/njucckevin/SeeClick/HEAD/pretrain/screenspot_test.py (retrieved 2026-10-17T14:22:04Z; SHA-256 eb72113eefd4868114f8a8105eba2d3385da9034a5b3a4860661e03ae7dcae15)
- https://huggingface.co/api/datasets/rootsautomation/ScreenSpot (retrieved 2026-10-16T06:38:26Z; SHA-256 9e2d2a2c076032225911ae1032b548eafa6331ea81a2779632610f0f1c82dfd9)
- https://huggingface.co/api/datasets/bevaya/ScreenSpot (retrieved 2026-10-17T19:14:56Z; SHA-256 af0c4babeff84158ff196b54bf47242923bbf502d2805a1dd4eb52dba44be89c)
- https://huggingface.co/api/datasets/rootsautomation/ScreenSpot (retrieved 2026-10-17T19:14:56Z; SHA-256 af0c4babeff84158ff196b54bf47242923bbf502d2805a1dd4eb52dba44be89c)
