---
title: "Computer-use agent datasets | AwesomeCUA"
url: https://awesomecua.com/categories/dataset/
updated: 2026-11-10
type: category
lang: en
---

# Computer-use agent datasets

Computer-use datasets supply screenshots, instructions, element annotations and action trajectories for training or evaluating GUI agents. Supervision ranges from single-element grounding to complete multi-step trajectories.

> 278 curated records of this kind in the AwesomeCUA catalog, each with its complete annotation, primary evidence and license declarations. Snapshot 2026-11-14T08:17:18Z.

HTML page: https://awesomecua.com/categories/dataset/ · Catalog index: https://awesomecua.com/llms.txt · API: https://awesomecua.com/api/v1/resources.json

Each record is reviewed against its primary sources. Code, data, weights and document licenses are recorded separately.

## How to choose

| Dataset | Platform | Supervision | Scale | License |
| --- | --- | --- | --- | --- |
| [ScreenSpot-Pro data](https://awesomecua.com/resources/url-c79e152e6f7af1a9efed/) | Desktop | GUI grounding | [1,581 target annotations](https://huggingface.co/datasets/likaixin/ScreenSpot-Pro/raw/main/README.md) | [MIT (data)](https://huggingface.co/datasets/likaixin/ScreenSpot-Pro/raw/main/README.md) |
| [OS-Genesis](https://awesomecua.com/resources/github-os-copilot-os-genesis/) | Cross-platform | reverse task synthesis, GUI action trajectories | — | — |
| [AMEX dataset release](https://awesomecua.com/resources/url-1b2091d717c977d4f8b9/) | Mobile | interactive-element grounding, screen and element functionality descriptions | [> 104,000 screenshots](https://arxiv.org/abs/2407.17490v1) | [CC-BY-4.0 (data)](https://huggingface.co/datasets/Yuxiang007/AMEX/raw/17196b29c88dd48a7fb90ef9131bc5c7bf39f26e/README.md) |
| [GUIAct](https://awesomecua.com/resources/url-6cd150ec23361b4d2e84/) | Web · Mobile | single-step actions, multi-step navigation | [≈ 67,000 action instructions](https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md) | — |
| [GroundCUA dataset](https://awesomecua.com/resources/url-f6c88faa4392848f81b6/) | Desktop | UI element bounding boxes, element text or short descriptions | [51,175 screenshot-annotation file pairs](https://huggingface.co/api/datasets/ServiceNow/GroundCUA/tree/5d6845b0116029d46ec762e734701c5b8ce207c3/data) | [MIT (data)](https://huggingface.co/datasets/ServiceNow/GroundCUA/raw/5d6845b0116029d46ec762e734701c5b8ce207c3/README.md) |
| [GUI-Actor data](https://awesomecua.com/resources/url-66096ad4057a3d3726f5/) | — | GUI grounding with bounding-box supervision | — | — |

## Questions

### Which datasets are mentioned most in the catalog?

[ScreenSpot-Pro data](https://awesomecua.com/resources/url-c79e152e6f7af1a9efed/) (12 records), [OS-Genesis](https://awesomecua.com/resources/github-os-copilot-os-genesis/) (11 records) and [AMEX dataset release](https://awesomecua.com/resources/url-1b2091d717c977d4f8b9/) (7 records) are mentioned in the reviewed sources of the most other catalog records.

### Which platforms do these datasets cover?

Of 278 reviewed datasets, 122 are tagged web, 78 desktop, 74 mobile and 34 cross-platform; 36 have no platform recorded. An entry tagged with several platforms counts under each.

### Which datasets record their supervision and scale?

125 of 278 datasets have a profile with supervision, modalities, formats, splits and counts with units. The most common supervision types are element grounding (6), agent-generated trajectories (5) and interaction trajectories (4). The [dataset comparison page](https://awesomecua.com/compare/datasets/) sets them side by side.

### Which licenses do datasets declare?

The most common declared licenses are Apache-2.0 (72), MIT (45) and CC-BY-4.0 (35). 90 of 278 have no declared license in their record.

### How is this list ordered?

By the number of catalog records whose reviewed sources mention each entry, most first, then by name. The sort menu above the list switches to A–Z.

---

## ScreenSpot-Pro data

High-resolution professional interface screenshots and target annotations for evaluating instruction-based GUI localization.

- Catalog URL: https://awesomecua.com/resources/url-c79e152e6f7af1a9efed/
- Original source: https://huggingface.co/datasets/likaixin/ScreenSpot-Pro
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, windows, macos, linux
- Topics: grounding, evaluation
- Evidence checked: 2026-10-16T11:35:55Z
- ID: url:c79e152e6f7af1a9efed

### Limitations

This is the benchmark data asset, distinct from its evaluation-code repository. Target counts and unique image counts are different units.

- Record JSON: https://awesomecua.com/resources/url-c79e152e6f7af1a9efed/record.json

### Structured profile

- Formats: JSON annotations, screen images
- Modalities: high-resolution screenshots, instructions, bounding boxes
- Splits: not recorded
- Supervision: GUI grounding

#### Count observations

- 1,581 target annotations — sum of icon/text counts in the published card table (computed) (computed; source: https://huggingface.co/datasets/likaixin/ScreenSpot-Pro/raw/main/README.md)

Counts describe target annotations; unique screenshots and expanded language/style variants use different units. The evaluation code can reuse a target across configurations.

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/likaixin/ScreenSpot-Pro/raw/main/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/likaixin/ScreenSpot-Pro/raw/main/README.md (retrieved 2026-10-16T11:35:55Z; SHA-256 76ae2231564fe84af029f8625c02d9cd7fb6cf85c5f8af1b2a2593e2107719d9)
- https://raw.githubusercontent.com/likaixin2000/ScreenSpot-Pro-GUI-Grounding/HEAD/eval_screenspot_pro.py (retrieved 2026-10-16T11:38:05Z; SHA-256 a77c859775b33591b5619e8520c94702a53a1f9a29ada93e66744dbe23afe9dc)
- https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=700&max_results=100&sortBy=submittedDate&sortOrder=descending (retrieved 2026-10-16T06:36:54Z; SHA-256 4953a8e0f029016aef668bce98cec4d2873a7ae49c1fe33c4311fa5eb8d24089)
- https://gui-agent.github.io/grounding-leaderboard/ (retrieved 2026-10-18T04:27:10Z; SHA-256 2f7f635dee3c593b40efc61246c082ab1d76f7ce78f84a1d4b6391d30fa4e8fd)
- https://huggingface.co/datasets/likaixin/ScreenSpot-Pro/raw/main/README.md (retrieved 2026-10-16T11:35:55Z; SHA-256 76ae2231564fe84af029f8625c02d9cd7fb6cf85c5f8af1b2a2593e2107719d9)

---

## OS-Genesis

Interaction-driven pipeline that synthesizes mobile and web GUI agent trajectories without human supervision or predefined tasks, via reverse task synthesis and a trajectory reward model.

- Catalog URL: https://awesomecua.com/resources/github-os-copilot-os-genesis/
- Original source: https://github.com/OS-Copilot/OS-Genesis
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: data-generation
- Evidence checked: 2026-10-16T06:36:01Z
- ID: github:os-copilot/os-genesis

- Record JSON: https://awesomecua.com/resources/github-os-copilot-os-genesis/record.json

### Structured profile

- Formats: JSONL trajectories, JSON transition triples
- Modalities: screenshots, text, actions
- Splits: not recorded
- Supervision: reverse task synthesis, GUI action trajectories

#### Count observations

No count recorded.

The repository links distinct AndroidControl-oriented, AndroidWorld-oriented, and web training files plus raw pre-state/action/post-state triples. These are training artifacts with related representations of the same corpus; the release documents no train/test split. No numerical inventory is asserted from release names or linked archives.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/OS-Copilot/OS-Genesis/HEAD/README.md (retrieved 2026-10-16T06:36:01Z; SHA-256 430e495ab250395d666854bd18b0fc29b819cd784cd7730215ef65e461834d0d)
- https://raw.githubusercontent.com/OS-Copilot/OS-Genesis/HEAD/README.md (retrieved 2026-10-16T06:36:01Z; SHA-256 430e495ab250395d666854bd18b0fc29b819cd784cd7730215ef65e461834d0d)
- https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=800&max_results=100&sortBy=submittedDate&sortOrder=descending (retrieved 2026-10-16T06:36:58Z; SHA-256 c87e97eb397da04806d53145cf9c13be739fc657bb54dca9318c8c4ed2a36249)

---

## AMEX dataset release

Official Hub release of AMEX: Android app screenshots annotated for interactive-element grounding, screen and element functionality, and instructions with stepwise GUI-action chains.

- Catalog URL: https://awesomecua.com/resources/url-1b2091d717c977d4f8b9/
- Original source: https://huggingface.co/datasets/Yuxiang007/AMEX
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: grounding, screen-understanding, mobile-navigation
- Evidence checked: 2026-10-19T06:22:26Z
- ID: url:1b2091d717c977d4f8b9

### Limitations

The card calls this the official dataset repository of the AMEX paper. The full release sits under AMEX/ as element_anno.zip, instruction_anno.zip and a screenshot archive split into eight 10 GiB parts plus a final zip (about 93.5 GB together); a sample/ folder holds one episode's five screenshots with its annotations. The card adds publisher figures for ScreenSpot mobile-subset and AndroidControl beyond the arXiv paper. The AMEX project page links both this dataset and the AMEX-codebase training-code repository, which the catalog holds as the AMEX record github:yuxiangchai/amex-codebase; this release is recorded as its component. CC-BY-4.0 is the card's data declaration; that repository's Apache-2.0 code license is separate.

- Record JSON: https://awesomecua.com/resources/url-1b2091d717c977d4f8b9/record.json

### Structured profile

- Formats: split ZIP archives, JSON, PNG
- Modalities: screenshots, element bounding boxes, functionality descriptions, instructions, actions
- Splits: not recorded
- Supervision: interactive-element grounding, screen and element functionality descriptions, instructions with stepwise GUI-action chains

#### Count observations

- > 104,000 screenshots — AMEX collection described in the arXiv v1 abstract (reported; source: https://arxiv.org/abs/2407.17490v1)
- 3,046 instruction episodes — AMEX/instruction_anno.zip at revision 17196b29 (one JSON file per episode, unique episode_id) (computed) (computed; source: https://huggingface.co/datasets/Yuxiang007/AMEX/resolve/17196b29c88dd48a7fb90ef9131bc5c7bf39f26e/AMEX/instruction_anno.zip)
- 38,709 action steps — steps lists of the 3,046 instruction episodes in AMEX/instruction_anno.zip at revision 17196b29 (computed) (computed; source: https://huggingface.co/datasets/Yuxiang007/AMEX/resolve/17196b29c88dd48a7fb90ef9131bc5c7bf39f26e/AMEX/instruction_anno.zip)

Episode and step counts were computed with a script from the instruction archive; the screenshot figure is the paper's reported scale. Each step records the action type, touch and lift coordinates, typed text, package name and screenshot path. No train/test split is published.

### License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/Yuxiang007/AMEX/raw/17196b29c88dd48a7fb90ef9131bc5c7bf39f26e/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/Yuxiang007/AMEX/raw/17196b29c88dd48a7fb90ef9131bc5c7bf39f26e/README.md (retrieved 2026-10-19T06:22:26Z; SHA-256 dbae95ce714b90305b09b8b7a9dd8d01c277f1f6a6d265f8210e9f6bab6a2192)
- https://huggingface.co/api/datasets/Yuxiang007/AMEX/revision/17196b29c88dd48a7fb90ef9131bc5c7bf39f26e (retrieved 2026-10-18T15:51:37Z; SHA-256 dad2a3226a7c3c2f74998be09f4e989a82bd91cf21b1cbd22211d807cfa91d97)
- https://huggingface.co/datasets/Yuxiang007/AMEX/resolve/17196b29c88dd48a7fb90ef9131bc5c7bf39f26e/AMEX/instruction_anno.zip (retrieved 2026-10-18T15:51:38Z; SHA-256 673d89f1fee1b3be6ec8c3c380e24768265c04f0ece87d852ff185b05daa585a)
- https://arxiv.org/abs/2407.17490v1 (retrieved 2026-10-18T15:51:39Z; SHA-256 0b19217aee442587ec75e7d691d4645f6d6125e82edf0c08ee5670a1a64ddfd8)
- https://yxchai.com/AMEX/ (retrieved 2026-10-19T06:21:55Z; SHA-256 4aab61e6a95ab6b6598fb64b8e55d787cd49b5c4f242d15372aed2dd312f97aa)
- https://huggingface.co/datasets/Yuxiang007/AMEX/raw/17196b29c88dd48a7fb90ef9131bc5c7bf39f26e/README.md (retrieved 2026-10-19T06:22:26Z; SHA-256 dbae95ce714b90305b09b8b7a9dd8d01c277f1f6a6d265f8210e9f6bab6a2192)

---

## Holo4 Trajectories

Dataset of 7,366 computer-use agent execution trajectories from Holo4 27B and Holo4 35B-A3B, recording step-level reasoning, actions, tool results, and screenshots.

- Catalog URL: https://awesomecua.com/resources/url-b5dab1881ac1069e44ce/
- Original source: https://huggingface.co/datasets/Hcompany/trajectories
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web, desktop, android, cross-platform
- Topics: evaluation, observability, data-generation
- Evidence checked: 2026-10-17T05:32:58Z
- ID: url:b5dab1881ac1069e44ce

- Record JSON: https://awesomecua.com/resources/url-b5dab1881ac1069e44ce/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/Hcompany/trajectories
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/Hcompany/trajectories (retrieved 2026-10-17T05:32:58Z; SHA-256 147ea4deaadb2d9961302d2a15893d16cc90b40aa41d911ffe2dc2af794fe05c)
- https://huggingface.co/api/datasets/Hcompany/trajectories (retrieved 2026-10-17T05:32:58Z; SHA-256 147ea4deaadb2d9961302d2a15893d16cc90b40aa41d911ffe2dc2af794fe05c)

---

## GroundCUA dataset

Desktop GUI-grounding data from the GroundCUA project: PNG screenshots of 87 applications paired by hash with JSON lists of element boxes, visible text and optional coarse categories.

- Catalog URL: https://awesomecua.com/resources/url-f6c88faa4392848f81b6/
- Original source: https://huggingface.co/datasets/ServiceNow/GroundCUA
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, windows, macos, linux
- Topics: grounding, screen-understanding, data-generation
- Evidence checked: 2026-10-18T15:33:17Z
- ID: url:f6c88faa4392848f81b6

### Limitations

At revision 5d6845b0 a paged listing of the Hub tree gives 51,175 PNG screenshots under images/ and 51,175 JSON annotation files with the same hashes under data/, in 87 application folders. The project's GitHub README reports 56K screenshots and about 3.56M element annotations, so the Hub file count and the reported screenshot count differ. The card says categories are approximate and present only for some elements. The repository root also holds an instruction_tuning.tar.gz archive (about 202 MB). The card names Windows, macOS and Linux for the applications but does not label each screenshot's operating system. MIT is the card's data declaration.

- Record JSON: https://awesomecua.com/resources/url-f6c88faa4392848f81b6/record.json

### Structured profile

- Formats: PNG, JSON
- Modalities: desktop screenshots, element annotations
- Splits: not recorded
- Supervision: UI element bounding boxes, element text or short descriptions, coarse element categories for some elements

#### Count observations

- 51,175 screenshot-annotation file pairs — Hub release at revision 5d6845b0 (images/*.png matched by hash to data/*.json) (computed) (computed; source: https://huggingface.co/api/datasets/ServiceNow/GroundCUA/tree/5d6845b0116029d46ec762e734701c5b8ce207c3/data)
- 87 application folders — data/ at revision 5d6845b0 (computed) (computed; source: https://huggingface.co/api/datasets/ServiceNow/GroundCUA/tree/5d6845b0116029d46ec762e734701c5b8ce207c3/data)
- ≈ 56,000 screenshots — GroundCUA dataset as described in the project README (reported; source: https://raw.githubusercontent.com/ServiceNow/GroundCUA/94cba61693d6258c7100f7016a299b84b1bb7732/README.md)
- ≈ 3,560,000 element annotations — GroundCUA dataset as described in the project README (reported; source: https://raw.githubusercontent.com/ServiceNow/GroundCUA/94cba61693d6258c7100f7016a299b84b1bb7732/README.md)

Screenshots, file pairs, folders and element annotations are different units and are counted separately. The pair count was computed by paging the recursive Hub tree of data/ and images/ at revision 5d6845b0; the listed receipt records the 87 application folders. The README figures describe the project dataset. No train/test split is declared.

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/ServiceNow/GroundCUA/raw/5d6845b0116029d46ec762e734701c5b8ce207c3/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/ServiceNow/GroundCUA/raw/5d6845b0116029d46ec762e734701c5b8ce207c3/README.md (retrieved 2026-10-18T15:33:17Z; SHA-256 fe18179d2a2de962e29b9cb7efbad79add481c65840d235163af0b8cb88d72da)
- https://huggingface.co/api/datasets/ServiceNow/GroundCUA?expand%5B%5D=sha&expand%5B%5D=gated&expand%5B%5D=disabled&expand%5B%5D=cardData&expand%5B%5D=lastModified (retrieved 2026-10-18T15:34:25Z; SHA-256 1dfb2e14b6113d469314c2f1b752214d8f6f795710387b9f0e3769d218179191)
- https://huggingface.co/api/datasets/ServiceNow/GroundCUA/tree/5d6845b0116029d46ec762e734701c5b8ce207c3/data (retrieved 2026-10-18T15:33:17Z; SHA-256 a0534eba3c6ef17b9d63eec787825e29507eed375e778effe84230930e00628b)
- https://huggingface.co/api/datasets/ServiceNow/GroundCUA/tree/5d6845b0116029d46ec762e734701c5b8ce207c3 (retrieved 2026-10-18T15:33:18Z; SHA-256 5ae73e5d203c9561fde9279e39e0dc15e375c2e806408d4addd8ae002de5849a)
- https://raw.githubusercontent.com/ServiceNow/GroundCUA/94cba61693d6258c7100f7016a299b84b1bb7732/README.md (retrieved 2026-10-18T15:33:18Z; SHA-256 ea25e5db95415f19bcf42f37547912eed185b72441a4fa57a0c981a7f50d732a)
- https://huggingface.co/datasets/ServiceNow/GroundCUA/raw/5d6845b0116029d46ec762e734701c5b8ce207c3/README.md (retrieved 2026-10-18T15:33:17Z; SHA-256 fe18179d2a2de962e29b9cb7efbad79add481c65840d235163af0b8cb88d72da)

---

## GUI-Actor data

A processed screenshot and bounding-box collection released for training GUI-Actor visual grounding models.

- Catalog URL: https://awesomecua.com/resources/url-66096ad4057a3d3726f5/
- Original source: https://huggingface.co/datasets/cckevinn/GUI-Actor-Data
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, data-generation
- Evidence checked: 2026-10-17T02:42:32Z
- ID: url:66096ad4057a3d3726f5

### Limitations

Public JSON annotations and image archives are present. The card has no data-license declaration. Its source list contains mismatched hyperlinks and says six datasets while naming fewer distinct entries; no source-derivation relationships or aggregate count are imported from that list.

- Record JSON: https://awesomecua.com/resources/url-66096ad4057a3d3726f5/record.json

### Structured profile

- Formats: JSON annotations, ZIP image packages, multipart image archives
- Modalities: GUI screenshots, bounding boxes, grounding annotations
- Splits: training
- Supervision: GUI grounding with bounding-box supervision

#### Count observations

No count recorded.

Public Hub revision 5a0b35fb includes six bbox JSON files and associated image archives. The training configuration names six input paths with sampling_strategy=all; path count and verified example count are different units. No data license is established by the card, and the model repository license is not transferred to these data.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/cckevinn/GUI-Actor-Data/raw/main/README.md (retrieved 2026-10-17T02:42:32Z; SHA-256 e42bbcf8d466c977f9b2150feb73d8cbda2ff907c279630ad4730a8b1f5d665c)
- https://huggingface.co/api/datasets/cckevinn/GUI-Actor-Data (retrieved 2026-10-17T02:42:32Z; SHA-256 d6271cff879b1a2a70490cf3dd95765bef44ecfca531d8ef3545f101673b4423)
- https://raw.githubusercontent.com/microsoft/GUI-Actor/HEAD/README.md (retrieved 2026-10-16T06:36:00Z; SHA-256 2dafdebf2fa1e0a5db871addd103e50cb55625f0108c757708029e885920ee4e)
- https://raw.githubusercontent.com/microsoft/GUI-Actor/HEAD/data/data_config.yaml (retrieved 2026-10-17T14:21:12Z; SHA-256 3521c849b29d7fc88430a8e73a8b2aeb2e613d7fa16ca054dd5bf4ec011b36ca)

---

## GUI-Odyssey

Human-demonstrated Android episodes for cross-app navigation, spanning six task types, 212 apps and about 1,400 app combinations, for training and evaluating agents.

- Catalog URL: https://awesomecua.com/resources/github-opengvlab-gui-odyssey/
- Original source: https://github.com/OpenGVLab/GUI-Odyssey
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: cross-app, data-generation
- Evidence checked: 2026-10-16T06:36:01Z
- ID: github:opengvlab/gui-odyssey

- Record JSON: https://awesomecua.com/resources/github-opengvlab-gui-odyssey/record.json

### Structured profile

- Formats: JSON annotations, PNG screenshots
- Modalities: screenshots, instructions, actions, bounding boxes, step context
- Splits: random, task, device, app
- Supervision: cross-app trajectories, action grounding

#### Count observations

- 8,334 episodes — recommended hflqf88888/GUIOdyssey release (reported; source: https://huggingface.co/datasets/hflqf88888/GUIOdyssey/raw/main/README.md)

The repository gives conflicting episode totals (8,334 and 8,834). This profile uses 8,334 from the specifically recommended current dataset card. No independent archive recount was performed. Coordinates are normalized to 0–1000.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/OpenGVLab/GUI-Odyssey/HEAD/README.md (retrieved 2026-10-16T06:36:01Z; SHA-256 4585b765d7c8b3e9bb6187d36d576edde454d4c0158a6aa8b3fdbedf34c89a15)
- https://huggingface.co/datasets/hflqf88888/GUIOdyssey/raw/main/README.md (retrieved 2026-10-16T11:39:52Z; SHA-256 fd627ee0a6ee0596e0ee8147996b9a7a3436f754fc95ed63cf5f408d778b2831)
- https://raw.githubusercontent.com/OpenGVLab/GUI-Odyssey/HEAD/introduction.md (retrieved 2026-10-16T11:39:52Z; SHA-256 78c19ee712487af60df1913f11572958564e59a1a2cc663b1b30d971855d7a28)

---

## Online-Mind2Web task data

Gated Hub release of the Online-Mind2Web task set: one JSON test split of tasks on live websites, 300 tasks on 136 sites per the project README, which the publishers revise when sites change.

- Catalog URL: https://awesomecua.com/resources/url-a252b36bf1c440269a2e/
- Original source: https://huggingface.co/datasets/osunlp/Online-Mind2Web
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, evaluation
- Evidence checked: 2026-10-18T11:39:35Z
- ID: url:a252b36bf1c440269a2e

### Limitations

The Hub API at revision eacad896 reports gated 'auto' (access is approved automatically after a logged-in request) and one data file, Online_Mind2Web.json, configured as the test split. The card and task file sit behind the gate; the description and counts come from the project README, which links this dataset as its data. The Hub card metadata declares CC BY 4.0, matching the README's dataset license; the repository code is MIT and is not applied to the data. The publishers replace invalid tasks over time (36 on 2025-11-03), so a result needs the dataset revision.

- Record JSON: https://awesomecua.com/resources/url-a252b36bf1c440269a2e/record.json

### Structured profile

- Formats: JSON
- Modalities: text
- Splits: test
- Supervision: task definitions for live-web evaluation

#### Count observations

- 300 tasks — Online-Mind2Web task set as documented in the README (reported; source: https://raw.githubusercontent.com/OSU-NLP-Group/Online-Mind2Web/HEAD/README.md)
- 136 websites — Online-Mind2Web task set as documented in the README (reported; source: https://raw.githubusercontent.com/OSU-NLP-Group/Online-Mind2Web/HEAD/README.md)

Counts describe the task set according to the README; the gated file count remains unknown. The README says replacements aim to keep the same websites and a similar reference length, but the task population still changes between revisions.

### License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/osunlp/Online-Mind2Web
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/osunlp/Online-Mind2Web (retrieved 2026-10-18T11:39:35Z; SHA-256 a72ff426815ef4dcabcefd4a315b2c683b81107bee905a05f2d41ecfcdda0a23)
- https://raw.githubusercontent.com/OSU-NLP-Group/Online-Mind2Web/HEAD/README.md (retrieved 2026-10-18T11:39:36Z; SHA-256 49d7cc317fd2ba0df65abf65a0357d1fa2384e59019a96d4e24b784888599eaa)
- https://huggingface.co/api/datasets/osunlp/Online-Mind2Web (retrieved 2026-10-18T11:39:35Z; SHA-256 a72ff426815ef4dcabcefd4a315b2c683b81107bee905a05f2d41ecfcdda0a23)

---

## Click-100k

101,314 screenshot–instruction pairs with target boxes for click grounding, filtered from public GUI grounding sets and tutorial-video frames, packaged with EasyR1 point-prediction prompts.

- Catalog URL: https://awesomecua.com/resources/url-bf847949766b2b257d1c/
- Original source: https://huggingface.co/datasets/mlfoundations/Click-100k
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, web
- Topics: grounding, data-generation
- Evidence checked: 2026-10-18T15:54:59Z
- ID: url:bf847949766b2b257d1c

### Limitations

Sources named by the card: ShowUI (web and desktop), AutoGUI, PC-Agent-E, WaveUI, OS-Atlas, UGround, PixMo Points, SeeClick, UI-Vision, a Jedi spreadsheet subset and frames from professional-application tutorial videos labelled with Claude 4 Sonnet (the card says 85 videos, the release README 80+). Each source was capped at 50k instances, and noisy or trivial samples were removed with OmniParser and grounding-model filters. The card says SeeClick, PixMo and UGround samples were excluded during RL training, so the training subset is smaller than the release. The release declares no data license, and the upstream sources keep their own terms. The training config names the dataset mlfoundations/clicks-100k, a spelling that differs from this Hub ID.

- Record JSON: https://awesomecua.com/resources/url-bf847949766b2b257d1c/record.json

### Structured profile

- Formats: Parquet
- Modalities: screenshots, instructions, bounding boxes
- Splits: train
- Supervision: element instructions with target bounding boxes

#### Count observations

- 101,314 examples — train split (dataset_info in the card metadata) (reported; source: https://huggingface.co/datasets/mlfoundations/Click-100k/raw/f728db8f1dab96b09f8042c309fffb810f8e19e7/README.md)
- 64 Parquet shards — data/ at Hub revision f728db8f (computed) (computed; source: https://huggingface.co/api/datasets/mlfoundations/Click-100k/revision/f728db8f1dab96b09f8042c309fffb810f8e19e7)

Each row holds an image path, the image, an EasyR1 prompt that embeds the element description, pixel and normalized boxes and the image size. Examples and shards are different units. Per-source counts are not given.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: Neither the dataset card nor the release repository declares a license for Click-100k; the code repository has no license file, and the upstream sources keep their own terms.
  Sources: https://huggingface.co/datasets/mlfoundations/Click-100k/raw/f728db8f1dab96b09f8042c309fffb810f8e19e7/README.md

### Primary evidence

- https://huggingface.co/datasets/mlfoundations/Click-100k/raw/f728db8f1dab96b09f8042c309fffb810f8e19e7/README.md (retrieved 2026-10-18T15:54:59Z; SHA-256 3d6d130f966f51338eb58cae805640aa37db9985a7bbc86fa95417bcbef4fe01)
- https://huggingface.co/api/datasets/mlfoundations/Click-100k/revision/f728db8f1dab96b09f8042c309fffb810f8e19e7 (retrieved 2026-10-18T15:53:39Z; SHA-256 e3636612b79e3c042500613bf351bb4202669acaf1d3ccbb82cc73279bc049a8)
- https://raw.githubusercontent.com/mlfoundations/Gelato/2a8757d473a63d34f71b043192d08dad61d298ee/README.md (retrieved 2026-10-18T15:53:38Z; SHA-256 437eb06553ed6d63d871d18842906b26b6148db5b0a5489064736ef6f5f0cfcf)
- https://raw.githubusercontent.com/mlfoundations/Gelato/2a8757d473a63d34f71b043192d08dad61d298ee/training_configs/README.md (retrieved 2026-10-18T15:53:37Z; SHA-256 c2a6c7ebe068b732f3e2cf21ee085c1ca375e4c044e39a053bd34e74c0287669)

---

## GroundCUA

GroundCUA releases 56,000 desktop screenshots with 3.56M human-verified UI element annotations across 87 applications plus GroundNext models.

- Catalog URL: https://awesomecua.com/resources/github-servicenow-groundcua/
- Original source: https://github.com/ServiceNow/GroundCUA
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, linux, windows, macos
- Topics: grounding, screen-understanding, data-generation
- Evidence checked: 2026-11-04T13:12:35Z
- ID: github:servicenow/groundcua

- Record JSON: https://awesomecua.com/resources/github-servicenow-groundcua/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ServiceNow/GroundCUA/HEAD/README.md (retrieved 2026-11-04T13:12:35Z; SHA-256 ea25e5db95415f19bcf42f37547912eed185b72441a4fa57a0c981a7f50d732a)

---

## GUI-Odyssey — original OpenGVLab release

Original Hub upload of GUI Odyssey: 7,735 cross-app Android navigation episodes from six emulated devices with per-step screenshots, actions and four split files, which the card says is superseded.

- Catalog URL: https://awesomecua.com/resources/url-5f7e55313246edf727bf/
- Original source: https://huggingface.co/datasets/OpenGVLab/GUI-Odyssey
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, cross-app, data-generation
- Evidence checked: 2026-10-18T12:08:12Z
- ID: url:5f7e55313246edf727bf

### Limitations

The card now asks users to switch to the newer hflqf88888/GUIOdyssey release, which reports a different episode total; this record keeps the earlier OpenGVLab upload, whose card still links the GUI-Odyssey repository and paper. Hub API at revision 71e0e7e2: open access, with all_anno.json, 7,735 annotation JSON files, four split files and screenshot folders; its sibling list stops at 100,000 entries. A paginated Hub tree listing at the same revision counted 118,791 PNG files in 100 screenshot folders; zipped copies of annotations and screenshots sit under zips/. The card declares CC-BY-4.0 for the data.

- Record JSON: https://awesomecua.com/resources/url-5f7e55313246edf727bf/record.json

### Structured profile

- Formats: JSON annotations, PNG screenshots, zip archives
- Modalities: screenshots, instructions, actions, click and scroll coordinates, device metadata
- Splits: random, task, device, app
- Supervision: cross-app trajectories, action grounding

#### Count observations

- 7,735 episodes — original OpenGVLab/GUI-Odyssey release (reported; source: https://huggingface.co/datasets/OpenGVLab/GUI-Odyssey/raw/71e0e7e2d169c642e7a99c264d82ffecadf67889/README.md)
- 7,735 annotation JSON files — annotations/ at revision 71e0e7e2 (computed) (computed; source: https://huggingface.co/api/datasets/OpenGVLab/GUI-Odyssey/revision/71e0e7e2d169c642e7a99c264d82ffecadf67889)

Each annotation file is one episode keyed by episode_id, with device, task (category, apps, meta-task, instruction) and per-step screenshot, action, info and ps fields; actions are CLICK, SCROLL, LONG_PRESS, TYPE, COMPLETE, IMPOSSIBLE, HOME and BACK, with coordinates normalized to 0-1000. Each split file lists train and test episode IDs.

### License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/OpenGVLab/GUI-Odyssey/raw/71e0e7e2d169c642e7a99c264d82ffecadf67889/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/OpenGVLab/GUI-Odyssey/raw/71e0e7e2d169c642e7a99c264d82ffecadf67889/README.md (retrieved 2026-10-18T12:08:12Z; SHA-256 e881ff64f9657889838715ff44588c4963a41b7b389d527da88214626fd8159a)
- https://huggingface.co/api/datasets/OpenGVLab/GUI-Odyssey/revision/71e0e7e2d169c642e7a99c264d82ffecadf67889 (retrieved 2026-10-18T12:08:13Z; SHA-256 4a8355cb0fb25eb47234f7ed6eace6abf12e462768f7f9240f81577a58811c4e)
- https://huggingface.co/datasets/OpenGVLab/GUI-Odyssey/raw/71e0e7e2d169c642e7a99c264d82ffecadf67889/README.md (retrieved 2026-10-18T12:08:12Z; SHA-256 e881ff64f9657889838715ff44588c4963a41b7b389d527da88214626fd8159a)

---

## GUIAct

Web and Android GUI action-instruction data, with single-step, multi-step and smartphone partitions.

- Catalog URL: https://awesomecua.com/resources/url-6cd150ec23361b4d2e84/
- Original source: https://huggingface.co/datasets/yiye2023/GUIAct
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web, android
- Topics: grounding, data-generation
- Evidence checked: 2026-10-16T06:36:01Z
- ID: url:6cd150ec23361b4d2e84

### Limitations

Public JSON annotations and Parquet image packages are present. The project README declares CC-BY-4.0 for datasets, while this Hub card declares Apache-2.0; these conflicting declarations are retained without asserting a single confirmed data license. The project code’s MIT declaration is separate.

- Record JSON: https://awesomecua.com/resources/url-6cd150ec23361b4d2e84/record.json

### Structured profile

- Formats: JSON, Parquet
- Modalities: screenshots, instructions, actions
- Splits: train, test
- Supervision: single-step actions, multi-step navigation

#### Count observations

- ≈ 67,000 action instructions — single-step portion (reported; source: https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md)
- ≈ 15,000 action instructions — multi-step portion (reported; source: https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md)

Quantities are rounded publisher descriptions. Data-license declarations conflict across first-party sources; no permissive license is inferred.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: Conflicting first-party dataset declarations: the GUICourse project README assigns CC-BY-4.0 to the datasets, while this exact Hub card declares Apache-2.0. The code MIT declaration does not resolve the data conflict.
  Sources: https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md, https://huggingface.co/datasets/yiye2023/GUIAct/raw/main/README.md

### Primary evidence

- https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md (retrieved 2026-10-16T06:36:01Z; SHA-256 0968273442bfb9a6478fe78f8b9a6247a3bb8e6d028880939b432fd009961e98)
- https://huggingface.co/api/datasets/yiye2023/GUIAct (retrieved 2026-10-17T04:01:33Z; SHA-256 624ccdd6e6c5b29b588a4289d1d94c1a1c0803868bd586175f2c9ebc3bfdd0b6)
- https://huggingface.co/datasets/yiye2023/GUIAct/raw/main/README.md (retrieved 2026-10-17T04:01:33Z; SHA-256 98b45ea81164d1e1a1dd82255207053b15cd6c69d922a1c5cf3387ce604d4b74)

---

## OS-Atlas Data

GUI grounding pre-training data for OS-Atlas in desktop (Linux, macOS, Windows), mobile and web domains, with element boxes stored as relative left, top, right and bottom ratios.

- Catalog URL: https://awesomecua.com/resources/url-0fdeb1cf5f49f84820e6/
- Original source: https://huggingface.co/datasets/OS-Copilot/OS-Atlas-data
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding, data-generation
- Evidence checked: 2026-10-16T06:38:26Z
- ID: url:0fdeb1cf5f49f84820e6

- Record JSON: https://awesomecua.com/resources/url-0fdeb1cf5f49f84820e6/record.json

### Structured profile

- Formats: JSON annotations, image archives
- Modalities: screenshots, referring expressions, bounding boxes
- Splits: not recorded
- Supervision: element grounding

#### Count observations

- > 270,000 screenshots — SeeClick-derived web subset (reported; source: https://huggingface.co/datasets/OS-Copilot/OS-Atlas-data/raw/main/README.md)
- > 3,000,000 UI elements — SeeClick-derived web subset (reported; source: https://huggingface.co/datasets/OS-Copilot/OS-Atlas-data/raw/main/README.md)
- ≥ 1,600,000 images — FineWeb-derived subset (reported; source: https://huggingface.co/datasets/OS-Copilot/OS-Atlas-data/raw/main/README.md)

These are subset-specific counts for OS-Atlas. Raw boxes use 0–1 coordinates; the documented training wrapper scales them to 0–1000.

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/OS-Copilot/OS-Atlas-data
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/OS-Copilot/OS-Atlas-data (retrieved 2026-10-16T06:38:26Z; SHA-256 c2c5f7b3f07d92349ffd8256792599c856ed77c89108c45dbaef48a4699abe20)
- https://huggingface.co/datasets/OS-Copilot/OS-Atlas-data/raw/main/README.md (retrieved 2026-10-16T11:40:46Z; SHA-256 19f28b4bc0798e28180b968010c0f7c8dfed2dbfb24b122b958476b871d2e4fd)
- https://huggingface.co/api/datasets/OS-Copilot/OS-Atlas-data (retrieved 2026-10-16T06:38:26Z; SHA-256 c2c5f7b3f07d92349ffd8256792599c856ed77c89108c45dbaef48a4699abe20)

---

## VisualWebBench dataset

Hugging Face dataset release for VisualWebBench spanning seven visual web understanding, OCR, element grounding, and action prediction tasks.

- Catalog URL: https://awesomecua.com/resources/url-149769d8bf07b7fbabdc/
- Original source: https://huggingface.co/datasets/visualwebbench/VisualWebBench
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, grounding, screen-understanding, web-navigation
- Evidence checked: 2026-11-01T19:22:16Z
- ID: url:149769d8bf07b7fbabdc

- Record JSON: https://awesomecua.com/resources/url-149769d8bf07b7fbabdc/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/visualwebbench/VisualWebBench
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/visualwebbench/VisualWebBench (retrieved 2026-11-01T19:22:16Z; SHA-256 5e9a830858c10166213bd4c7c360ff93d722fed198910736116f0b3f2f4b4a85)
- https://huggingface.co/api/datasets/visualwebbench/VisualWebBench (retrieved 2026-11-01T19:22:16Z; SHA-256 5e9a830858c10166213bd4c7c360ff93d722fed198910736116f0b3f2f4b4a85)

---

## GUIChat

Conversational GUI supervision with text-rich images and bounding boxes, organized as single-turn questions and multi-turn dialogues.

- Catalog URL: https://awesomecua.com/resources/url-edf38d43800be8c955ae/
- Original source: https://huggingface.co/datasets/yiye2023/GUIChat
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, data-generation
- Evidence checked: 2026-10-16T06:36:01Z
- ID: url:edf38d43800be8c955ae

### Limitations

Public JSON annotations and Parquet image packages are present. The project README declares CC-BY-4.0 for datasets, while this Hub card declares Apache-2.0; these conflicting declarations are retained without asserting a single confirmed data license. The project code’s MIT declaration is separate.

- Record JSON: https://awesomecua.com/resources/url-edf38d43800be8c955ae/record.json

### Structured profile

- Formats: JSON, Parquet
- Modalities: screenshots, text, bounding boxes
- Splits: not recorded
- Supervision: single-turn question answering, multi-turn dialogue

#### Count observations

- ≈ 44,000 QA pairs — single-turn portion (reported; source: https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md)
- ≈ 6,000 dialogues — multi-turn portion (reported; source: https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md)

Quantities are rounded publisher descriptions. Data-license declarations conflict across first-party sources; no permissive license is inferred.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: Conflicting first-party dataset declarations: the GUICourse project README assigns CC-BY-4.0 to the datasets, while this exact Hub card declares Apache-2.0. The code MIT declaration does not resolve the data conflict.
  Sources: https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md, https://huggingface.co/datasets/yiye2023/GUIChat/raw/main/README.md

### Primary evidence

- https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md (retrieved 2026-10-16T06:36:01Z; SHA-256 0968273442bfb9a6478fe78f8b9a6247a3bb8e6d028880939b432fd009961e98)
- https://huggingface.co/api/datasets/yiye2023/GUIChat (retrieved 2026-10-17T04:01:33Z; SHA-256 3ccb4a9ded4f45aa334f0df5dc9a0f8963c645857e8442c46efe1d9cf4a4360b)
- https://huggingface.co/datasets/yiye2023/GUIChat/raw/main/README.md (retrieved 2026-10-17T04:01:33Z; SHA-256 4bcf87ecfbbb8e07a01b21415a970c8b53a5283bf6872b657040d3f45c9241f7)

---

## GUIEnv-local

The released local-supervision portion of GUIEnv, pairing webpage regions and text for OCR and GUI grounding.

- Catalog URL: https://awesomecua.com/resources/url-0af07e00658a430cee6a/
- Original source: https://huggingface.co/datasets/yiye2023/GUIEnv
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: grounding, data-generation
- Evidence checked: 2026-10-16T06:36:01Z
- ID: url:0af07e00658a430cee6a

### Limitations

Public JSON annotations and Parquet image packages are present. The project README declares CC-BY-4.0 for datasets, while this Hub card declares Apache-2.0; these conflicting declarations are retained without asserting a single confirmed data license. The project code’s MIT declaration is separate. GUIEnv-local is released; the advertised 10M-example GUIEnv-global pretraining collection is still unchecked.

- Record JSON: https://awesomecua.com/resources/url-0af07e00658a430cee6a/record.json

### Structured profile

- Formats: JSON, Parquet
- Modalities: screenshots, text, bounding boxes
- Splits: train, test
- Supervision: OCR, region-text grounding

#### Count observations

- ≈ 700,000 region-text QA pairs — GUIEnv-local SFT data (reported; source: https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md)

Quantities are rounded publisher descriptions. Data-license declarations conflict across first-party sources; no permissive license is inferred.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: Conflicting first-party dataset declarations: the GUICourse project README assigns CC-BY-4.0 to the datasets, while this exact Hub card declares Apache-2.0. The code MIT declaration does not resolve the data conflict.
  Sources: https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md, https://huggingface.co/datasets/yiye2023/GUIEnv/raw/main/README.md

### Primary evidence

- https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md (retrieved 2026-10-16T06:36:01Z; SHA-256 0968273442bfb9a6478fe78f8b9a6247a3bb8e6d028880939b432fd009961e98)
- https://huggingface.co/api/datasets/yiye2023/GUIEnv (retrieved 2026-10-17T04:01:33Z; SHA-256 15813be05dc76aed5f667875188bf9612e74ff2f4699d270dd0d1aeda86767f8)
- https://huggingface.co/datasets/yiye2023/GUIEnv/raw/main/README.md (retrieved 2026-10-17T04:01:33Z; SHA-256 4bcf87ecfbbb8e07a01b21415a970c8b53a5283bf6872b657040d3f45c9241f7)

---

## Mind2Web data

Hub release of Mind2Web's crowdsourced web-task demonstrations: train-split JSON with raw and cleaned HTML, candidate elements and CLICK/TYPE/SELECT steps, plus a password-protected archive of the three test splits.

- Catalog URL: https://awesomecua.com/resources/url-380a6eedcb4de7778e88/
- Original source: https://huggingface.co/datasets/osunlp/Mind2Web
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, action-prediction, data-generation
- Evidence checked: 2026-10-18T11:38:06Z
- ID: url:380a6eedcb4de7778e88

### Limitations

This is the Hub data release, distinct from the code and benchmark repository github:osu-nlp-group/mind2web. The Hub API at revision 17ece8eb reports an ungated repository holding 11 train JSON shards, test.zip and scores_all_data.pkl. The card declares CC BY 4.0 for the data; the code repository's MIT license is not applied to it. Multimodal-Mind2Web (paired screenshots) and the raw trace dump are separate releases outside this record.

- Record JSON: https://awesomecua.com/resources/url-380a6eedcb4de7778e88/record.json

### Structured profile

- Formats: JSON, password-protected ZIP (test splits)
- Modalities: task descriptions, raw HTML, cleaned HTML, candidate elements, actions
- Splits: train, test_task, test_website, test_domain
- Supervision: crowdsourced action sequences, ground-truth target elements

#### Count observations

- > 2,000 tasks — full Mind2Web collection (reported; source: https://huggingface.co/datasets/osunlp/Mind2Web/raw/17ece8eb89862368edc0cc806acee6fca5163474/README.md)
- 137 websites — full Mind2Web collection (reported; source: https://huggingface.co/datasets/osunlp/Mind2Web/raw/17ece8eb89862368edc0cc806acee6fca5163474/README.md)
- 31 domains — full Mind2Web collection (reported; source: https://huggingface.co/datasets/osunlp/Mind2Web/raw/17ece8eb89862368edc0cc806acee6fca5163474/README.md)
- 1,009 task instances — train split (reported; source: https://huggingface.co/datasets/osunlp/Mind2Web/raw/17ece8eb89862368edc0cc806acee6fca5163474/README.md)
- 252 task instances — cross-task test split (test_task) (reported; source: https://huggingface.co/datasets/osunlp/Mind2Web/raw/17ece8eb89862368edc0cc806acee6fca5163474/README.md)
- 177 task instances — cross-website test split (test_website) (reported; source: https://huggingface.co/datasets/osunlp/Mind2Web/raw/17ece8eb89862368edc0cc806acee6fca5163474/README.md)
- 912 task instances — cross-domain test split (test_domain) (reported; source: https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web/HEAD/README.md)

Each instance is one task with its multi-step action sequence; step counts use a different unit. The card prints the cross-domain size as '9,12'; the repository README gives 912. The test splits are released only as a ZIP whose password the README publishes, with a request not to redistribute the unzipped files. scores_all_data.pkl holds candidate-ranking outputs of a tuned DeBERTa-v3-base model, not annotations.

### License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/osunlp/Mind2Web/raw/17ece8eb89862368edc0cc806acee6fca5163474/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/osunlp/Mind2Web/raw/17ece8eb89862368edc0cc806acee6fca5163474/README.md (retrieved 2026-10-18T11:38:06Z; SHA-256 d2da20abbf17ac82f874d78ced28ceaaf3b15466011d3674deaa2c4597862a4a)
- https://huggingface.co/api/datasets/osunlp/Mind2Web (retrieved 2026-10-18T11:38:07Z; SHA-256 25fcf0a0ee9c1c89b33cdae0ebe7ffd5721e4685fe4b74377184be983bd1f597)
- https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web/HEAD/README.md (retrieved 2026-10-18T11:38:07Z; SHA-256 157dbd840264ea29f958c0b7383d63783845c573b3e19a1f39b773be22e0b32d)
- https://huggingface.co/datasets/osunlp/Mind2Web/raw/17ece8eb89862368edc0cc806acee6fca5163474/README.md (retrieved 2026-10-18T11:38:06Z; SHA-256 d2da20abbf17ac82f874d78ced28ceaaf3b15466011d3674deaa2c4597862a4a)

---

## Mind2Web-Live

Task files for the WebCanvas live-web benchmark: 438 training and 104 test tasks derived from Mind2Web, each with key-node checks on URLs or page elements that score intermediate progress.

- Catalog URL: https://awesomecua.com/resources/url-03ffa3f28413bc2edb1b/
- Original source: https://huggingface.co/datasets/iMeanAI/Mind2Web-Live
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation
- Evidence checked: 2026-10-18T15:45:39Z
- ID: url:03ffa3f28413bc2edb1b

### Limitations

The files hold task instructions, reference task lengths and key-node evaluation functions (URL inclusion or exact match, element path and value matches, and semantic URL and value matches); trajectories and page snapshots are separate data types. Agents run on live websites through the WebCanvas framework, so results depend on site changes, location and time. The test file was revised on 2024-10-24; the 2024-05-28 test file stays under old_version with 104 tasks and 444 key nodes, which with the 1,995 training key nodes gives the 2,439 states the WebCanvas README reports. The card itself links only the WebCanvas repository and declares CC-BY-4.0.

- Record JSON: https://awesomecua.com/resources/url-03ffa3f28413bc2edb1b/record.json

### Structured profile

- Formats: JSON
- Modalities: task instructions, URL and page-element evaluation functions
- Splits: train (2024-05-28 file), test (2024-10-24 file)
- Supervision: key-node evaluation annotations, reference task lengths

#### Count observations

- 438 tasks — train file mind2web-live_train_20240528.json at Hub revision 160677b5 (computed) (computed; source: https://huggingface.co/datasets/iMeanAI/Mind2Web-Live/resolve/160677b57f6a608e6d63b51849a33d2920b35588/mind2web-live_train_20240528.json)
- 1,995 key-node evaluation entries — train file mind2web-live_train_20240528.json at Hub revision 160677b5 (computed) (computed; source: https://huggingface.co/datasets/iMeanAI/Mind2Web-Live/resolve/160677b57f6a608e6d63b51849a33d2920b35588/mind2web-live_train_20240528.json)
- 104 tasks — test file mind2web-live_test_20241024.json at Hub revision 160677b5 (computed) (computed; source: https://huggingface.co/datasets/iMeanAI/Mind2Web-Live/resolve/160677b57f6a608e6d63b51849a33d2920b35588/mind2web-live_test_20241024.json)
- 443 key-node evaluation entries — test file mind2web-live_test_20241024.json at Hub revision 160677b5 (computed) (computed; source: https://huggingface.co/datasets/iMeanAI/Mind2Web-Live/resolve/160677b57f6a608e6d63b51849a33d2920b35588/mind2web-live_test_20241024.json)
- 542 tasks — original Mind2Web-Live release as described in the WebCanvas README (reported; source: https://raw.githubusercontent.com/iMeanAI/WebCanvas/b9f289128614cd99b97abd0bb9bfc3a45f0847e0/README.md)

Tasks and key-node evaluation entries are different units. The revised test file has one fewer key node than the original 2024-05-28 test file.

### License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/iMeanAI/Mind2Web-Live
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/iMeanAI/Mind2Web-Live (retrieved 2026-10-18T15:45:39Z; SHA-256 1d1ea013b8b39f2c526dec3846bd750199c5570c0961b7495ff3d1b99924438d)
- https://huggingface.co/datasets/iMeanAI/Mind2Web-Live/raw/160677b57f6a608e6d63b51849a33d2920b35588/README.md (retrieved 2026-10-18T15:45:39Z; SHA-256 8ac014447b87cd4450289e5e3b3254e0f8ad9a90d31e76b0efcb70c402aaa80e)
- https://raw.githubusercontent.com/iMeanAI/WebCanvas/b9f289128614cd99b97abd0bb9bfc3a45f0847e0/README.md (retrieved 2026-10-18T15:45:39Z; SHA-256 5b2b4b4ce1241db7fd776f2ba0856ec2e0e441a56fa6461234abe0c6516f643e)
- https://huggingface.co/datasets/iMeanAI/Mind2Web-Live/resolve/160677b57f6a608e6d63b51849a33d2920b35588/mind2web-live_train_20240528.json (retrieved 2026-10-18T15:45:39Z; SHA-256 026adb028cc07f72e39af0952c8770fa630d59ea8ceffb4dc4fab5e01fd57b35)
- https://huggingface.co/datasets/iMeanAI/Mind2Web-Live/resolve/160677b57f6a608e6d63b51849a33d2920b35588/mind2web-live_test_20241024.json (retrieved 2026-10-18T15:45:40Z; SHA-256 abc2032302fed1ac801539ecc6003dd73ff0aafe824aaf9450e4e504a8ff83f2)
- https://huggingface.co/api/datasets/iMeanAI/Mind2Web-Live (retrieved 2026-10-18T15:45:39Z; SHA-256 1d1ea013b8b39f2c526dec3846bd750199c5570c0961b7495ff3d1b99924438d)

---

## Multimodal-Mind2Web

Mind2Web action steps aligned with the matching webpage screenshot, plus raw and cleaned HTML, candidate elements and the target operation, in a train split and test splits held out by task, website and domain.

- Catalog URL: https://awesomecua.com/resources/url-66f780b493156dc7efe5/
- Original source: https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, action-prediction, evaluation
- Evidence checked: 2026-10-18T16:02:04Z
- ID: url:66f780b493156dc7efe5

### Limitations

Each row is one action step with the page state before the action; tasks are distinct annotation IDs. The card says the three test splits were human-verified for element visibility and rendering, while the train split may contain badly rendered screenshots. Its test task counts (177, 142 and 694) are lower than the 252, 177 and 912 task instances that the Mind2Web README lists for the cross-task, cross-website and cross-domain test sets. The card points to the SeeAct repository and paper and declares OpenRAIL, recorded as stated; terms for the underlying website content were not assessed.

- Record JSON: https://awesomecua.com/resources/url-66f780b493156dc7efe5/record.json

### Structured profile

- Formats: Parquet
- Modalities: webpage screenshots, raw and cleaned HTML, task descriptions, action histories
- Splits: train, test_task, test_website, test_domain
- Supervision: target operation per step (CLICK, TYPE or SELECT with value), positive and negative candidate elements

#### Count observations

- 7,775 action steps — train split (reported; source: https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web/raw/1b4c6a8cf9f77b7a5e0d641959935c80c4a05889/README.md)
- 1,009 tasks — train split (reported; source: https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web/raw/1b4c6a8cf9f77b7a5e0d641959935c80c4a05889/README.md)
- 1,339 action steps — test_task split (reported; source: https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web/raw/1b4c6a8cf9f77b7a5e0d641959935c80c4a05889/README.md)
- 177 tasks — test_task split (reported; source: https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web/raw/1b4c6a8cf9f77b7a5e0d641959935c80c4a05889/README.md)
- 1,019 action steps — test_website split (reported; source: https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web/raw/1b4c6a8cf9f77b7a5e0d641959935c80c4a05889/README.md)
- 142 tasks — test_website split (reported; source: https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web/raw/1b4c6a8cf9f77b7a5e0d641959935c80c4a05889/README.md)
- 4,060 action steps — test_domain split (reported; source: https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web/raw/1b4c6a8cf9f77b7a5e0d641959935c80c4a05889/README.md)
- 694 tasks — test_domain split (reported; source: https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web/raw/1b4c6a8cf9f77b7a5e0d641959935c80c4a05889/README.md)

Action steps and tasks are different units; the split sizes are the card's figures, and a column read of the Parquet files at this revision gave the same step and task counts.

### License declarations

- code: not recorded
- data: openrail — https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/osunlp/Multimodal-Mind2Web (retrieved 2026-10-18T16:02:04Z; SHA-256 261ab42b94fc347c2581445f61ed158ffdfd201f192c51ded49fe9fe1b298503)
- https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web/raw/1b4c6a8cf9f77b7a5e0d641959935c80c4a05889/README.md (retrieved 2026-10-18T16:02:04Z; SHA-256 8bb1e02777556f3f679c4610be9e5572b3cb218a89b98d6f75a4fc1b82fa06dd)
- https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web/33bd95caeee7bba22dd08ecc935845e15c5e5dc7/README.md (retrieved 2026-10-18T16:02:15Z; SHA-256 157dbd840264ea29f958c0b7383d63783845c573b3e19a1f39b773be22e0b32d)
- https://huggingface.co/api/datasets/osunlp/Multimodal-Mind2Web (retrieved 2026-10-18T16:02:04Z; SHA-256 261ab42b94fc347c2581445f61ed158ffdfd201f192c51ded49fe9fe1b298503)

---

## MultiUI

7.3 million training samples built from webpage UIs and structured with enhanced accessibility trees, for text-rich visual understanding, released with UIX-Qwen2 models.

- Catalog URL: https://awesomecua.com/resources/github-neulab-multiui/
- Original source: https://github.com/neulab/multiui
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: screen-understanding, data-generation
- Evidence checked: 2026-10-16T06:36:01Z
- ID: github:neulab/multiui

- Record JSON: https://awesomecua.com/resources/github-neulab-multiui/record.json

### Structured profile

- Formats: not recorded
- Modalities: webpage UI content, text, accessibility-derived structure
- Splits: training collection
- Supervision: UI understanding, text-rich visual tasks

#### Count observations

- ≈ 7,300,000 samples — reported MultiUI training collection (reported; source: https://raw.githubusercontent.com/neulab/multiui/HEAD/README.md)

The README provides a rounded sample count. Unique screenshots and normalized split sizes are unrecorded. Synthetic examples and publicly sourced web content have provenance and quality limits; data terms must be checked separately from repository code.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/neulab/multiui/HEAD/README.md (retrieved 2026-10-16T06:36:01Z; SHA-256 fe0c03fe73529a29788d559103c4aed48dca6ed9ba3bfd5f151f902fa8858b38)
- https://raw.githubusercontent.com/neulab/multiui/HEAD/README.md (retrieved 2026-10-16T06:36:01Z; SHA-256 fe0c03fe73529a29788d559103c4aed48dca6ed9ba3bfd5f151f902fa8858b38)

---

## OpenMobile-Data-v2

Mobile-agent supervision from emulator and simulator trajectories, plus executable tasks with starting states and success checks for reinforcement learning.

- Catalog URL: https://awesomecua.com/resources/url-546e6c95825d1318c98d/
- Original source: https://huggingface.co/datasets/OpenMobile-2/OpenMobile-Data-v2
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android, web
- Topics: mobile-navigation, data-generation, reinforcement-learning, tool-integration
- Evidence checked: 2026-10-17T01:48:51Z
- ID: url:546e6c95825d1318c98d

### Limitations

The reviewed card contains no explicit license declaration, so data-license status remains unknown. The repository code license is not inherited. The current code README points to the v2 dataset.

- Record JSON: https://awesomecua.com/resources/url-546e6c95825d1318c98d/record.json

### Structured profile

- Formats: JSON, JSONL, PNG
- Modalities: screenshots, text, tool calls
- Splits: sft/train, rl/train
- Supervision: next-action supervision, verifiable task outcomes

#### Count observations

- 11,643 trajectories — SFT collection (reported; source: https://huggingface.co/datasets/OpenMobile-2/OpenMobile-Data-v2/raw/main/README.md)
- 118,582 decision steps — SFT collection (reported; source: https://huggingface.co/datasets/OpenMobile-2/OpenMobile-Data-v2/raw/main/README.md)
- 2,475 executable tasks — RL collection (reported; source: https://huggingface.co/datasets/OpenMobile-2/OpenMobile-Data-v2/raw/main/README.md)

These are publisher-reported totals at three distinct grains. Earlier screenshots may be collapsed; each SFT example keeps at most three images. The card and repository disagree on the singular/plural RL filename, so consumers should inspect the actual file manifest.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/OpenMobile-2/OpenMobile-Data-v2/raw/main/README.md (retrieved 2026-10-17T01:48:51Z; SHA-256 abacf9a10759a9e7a8eeec5a266c96ed83742bd9296a19be95d09c9717e18b7c)
- https://raw.githubusercontent.com/OpenMobile2/OpenMobile2-Code/HEAD/README.md (retrieved 2026-10-17T01:48:10Z; SHA-256 485279038266d9454df75e27a80a0a0d71c24e90700126d2dcfa0da921b1273d)
- https://huggingface.co/api/datasets/OpenMobile-2/OpenMobile-Data (retrieved 2026-10-17T19:15:18Z; SHA-256 14b1211ed709147f4022f311c17303ca70faaffa22be143617eb431d966eec1a)
- https://huggingface.co/api/datasets/OpenMobile-2/OpenMobile-Data-v2 (retrieved 2026-10-17T19:15:20Z; SHA-256 14b1211ed709147f4022f311c17303ca70faaffa22be143617eb431d966eec1a)

---

## ScreenQA

About 86,000 human-written question-answer pairs over 35,000 Rico mobile screenshots, plus ScreenQA Short and ComplexQA variants, for benchmarking screen content understanding.

- Catalog URL: https://awesomecua.com/resources/github-google-research-datasets-screen-qa/
- Original source: https://github.com/google-research-datasets/screen_qa
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: screen-understanding
- Evidence checked: 2026-10-16T06:36:01Z
- ID: github:google-research-datasets/screen_qa

- Record JSON: https://awesomecua.com/resources/github-google-research-datasets-screen-qa/record.json

### Structured profile

- Formats: JSON
- Modalities: questions, answers, screen references, bounding boxes
- Splits: train, validation, test
- Supervision: screen question answering, answer grounding

#### Count observations

- 68,951 question-answer pairs — original ScreenQA train split (reported; source: https://raw.githubusercontent.com/google-research-datasets/screen_qa/HEAD/README.md)
- 8,614 question-answer pairs — original ScreenQA validation split (reported; source: https://raw.githubusercontent.com/google-research-datasets/screen_qa/HEAD/README.md)
- 8,419 question-answer pairs — original ScreenQA test split (reported; source: https://raw.githubusercontent.com/google-research-datasets/screen_qa/HEAD/README.md)

All questions for a given screenshot share one split. ScreenQA Short reuses the same questions/screens; ComplexQA is a separate extension. ScreenQA Short reuses the same questions and screens; ComplexQA is a separate extension.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/google-research-datasets/screen_qa/HEAD/README.md (retrieved 2026-10-16T06:36:01Z; SHA-256 7d1bfe7d6eddd5d3fc4c33d4814de3cabf7a6b6fd3d3f85ba4c2b33036bf8867)

---

## ScreenRef

GUI screenshots paired with localization instructions and targets, including absent-target examples; image access is gated under publisher terms.

- Catalog URL: https://awesomecua.com/resources/url-56bda04bd8d3a438deb3/
- Original source: https://huggingface.co/datasets/PrentisAI/ScreenRef
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, web, android, linux
- Topics: grounding, data-generation, screen-understanding
- Evidence checked: 2026-10-17T01:48:51Z
- ID: url:56bda04bd8d3a438deb3

### Limitations

The public Hub API reports gated=auto and a Restricted Research-Only declaration. The companion card distinguishes annotations from screenshots and limits reuse. Access terms were inspected as public metadata; no access agreement was accepted or gated files downloaded.

- Record JSON: https://awesomecua.com/resources/url-56bda04bd8d3a438deb3/record.json

### Structured profile

- Formats: Parquet
- Modalities: screenshots, text, coordinates
- Splits: train
- Supervision: instruction-to-click grounding, bounding boxes, absent-target abstention

#### Count observations

- 585,981 distinct screenshots — ScreenRef image inventory (reported; source: https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md)
- 633,369 annotation rows — full recipe (reported; source: https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md)
- 22,475 annotation rows — refusal subset of full recipe (reported; source: https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md)

The publisher reports these inventories in the companion annotation card. The refusal subset is included in the full recipe. Screenshot access is gated; no image download or independent corpus recount was performed.

### License declarations

- code: not recorded
- data: other — https://huggingface.co/datasets/PrentisAI/ScreenRef
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/PrentisAI/ScreenRef (retrieved 2026-10-17T01:48:51Z; SHA-256 634b479c7d089e50735f6d4a25f78a63f4d0c2a8c1955015e7641b7afd61c317)
- https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md (retrieved 2026-10-17T01:48:10Z; SHA-256 96a87222645c3f823e6f67e50708792e2917ddeb8eea5aacdf2de8c5bbff165f)
- https://huggingface.co/api/datasets/PrentisAI/ScreenRef (retrieved 2026-10-17T01:48:51Z; SHA-256 634b479c7d089e50735f6d4a25f78a63f4d0c2a8c1955015e7641b7afd61c317)

---

## UI-Vision

Desktop GUI data for interface understanding and interaction research.

- Catalog URL: https://awesomecua.com/resources/url-2c2004baae4669f8169a/
- Original source: https://huggingface.co/datasets/ServiceNow/ui-vision
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop
- Topics: grounding, screen-understanding
- Evidence checked: 2026-10-16T06:38:26Z
- ID: url:2c2004baae4669f8169a

- Record JSON: https://awesomecua.com/resources/url-2c2004baae4669f8169a/record.json

### Structured profile

- Formats: JSON annotations, image files
- Modalities: screenshots, bounding boxes, UI labels, action annotations
- Splits: not recorded
- Supervision: element grounding, layout grounding, action prediction

#### Count observations

- 83 software applications — paper-described benchmark coverage (reported; source: https://huggingface.co/datasets/ServiceNow/ui-vision/raw/main/README.md)

This is an offline evaluation dataset. Application coverage and sample counts are different units. The inspected file-layout documentation describes grounding annotations and images. A common split and complete action-trajectory inventory are unrecorded.

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/ServiceNow/ui-vision
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/ServiceNow/ui-vision (retrieved 2026-10-16T06:38:26Z; SHA-256 34f4ad5c9e7160b5be5aa8ae77e6e9f83a277aada41a272b82a2628d21159a8c)
- https://huggingface.co/datasets/ServiceNow/ui-vision/raw/main/README.md (retrieved 2026-10-17T02:02:37Z; SHA-256 295cf7f7500a18cea5c80eab1cdf4d7264f2f0e959b75efc5ba59083d93c9097)
- https://huggingface.co/api/datasets/ServiceNow/ui-vision (retrieved 2026-10-16T06:38:26Z; SHA-256 34f4ad5c9e7160b5be5aa8ae77e6e9f83a277aada41a272b82a2628d21159a8c)

---

## Aguvis stage 1 grounding data

The first-stage Aguvis training collection, packaging GUI element-grounding annotations and image archives from multiple interface-data sources.

- Catalog URL: https://awesomecua.com/resources/url-06dd5ac7917c45d48509/
- Original source: https://huggingface.co/datasets/xlangai/aguvis-stage1
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding, data-generation
- Evidence checked: 2026-10-17T02:03:33Z
- ID: url:06dd5ac7917c45d48509

### Limitations

The manifest contains grounding JSON annotations and packaged images. The card declares Apache-2.0, which is recorded for this release without overriding source-dataset rights. This first-stage grounding collection is distinct from the project’s second-stage trajectory collection. No archive or training sample was downloaded.

- Record JSON: https://awesomecua.com/resources/url-06dd5ac7917c45d48509/record.json

### Structured profile

- Formats: JSON annotations, ZIP image packages, multipart TAR image packages
- Modalities: GUI screenshots, grounding annotations
- Splits: training
- Supervision: GUI grounding supervised fine-tuning

#### Count observations

No count recorded.

Stage 1 grounding release, Hub revision 5d11f8f5. JSON annotations and ZIP/multipart TAR image packages are publicly listed. The official training configuration groups web, desktop and mobile inputs and selects all rows of its configured inputs. The config names omniact.json while the Hub manifest lists omniact_fix.json, so local paths need reconciliation. No sample total is inferred from names such as webui350k. Apache-2.0 is the release card declaration; upstream source rights remain separate.

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/xlangai/aguvis-stage1/raw/main/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/xlangai/aguvis-stage1/raw/main/README.md (retrieved 2026-10-17T02:03:33Z; SHA-256 38bda302cf741b9d2b2394b53d157b3c19d8a73e3704c01ed2f9a27c374feb77)
- https://huggingface.co/api/datasets/xlangai/aguvis-stage1 (retrieved 2026-10-17T02:03:33Z; SHA-256 cb3b8ec88d811d946df3cbf38ef555db5a10d1124668765710c380e9b1988b06)
- https://raw.githubusercontent.com/xlang-ai/aguvis/HEAD/README.md (retrieved 2026-10-16T06:36:00Z; SHA-256 2dd9f36b818c1b7b6bd772ba8575f6c0ebab6d9e0d307edcc2f196f3e4ba502e)
- https://raw.githubusercontent.com/xlang-ai/aguvis/HEAD/data/stage1.yaml (retrieved 2026-10-17T14:21:11Z; SHA-256 f6a9e55c5d48469e2c8f7799d917d25e7a758036f71c7c045fa92c35057d20da)
- https://huggingface.co/datasets/xlangai/aguvis-stage1/raw/main/README.md (retrieved 2026-10-17T02:03:33Z; SHA-256 38bda302cf741b9d2b2394b53d157b3c19d8a73e3704c01ed2f9a27c374feb77)

---

## Aguvis stage 2 trajectory data

The second-stage Aguvis collection of interface trajectories for learning action sequences, planning and reasoning after grounding pretraining.

- Catalog URL: https://awesomecua.com/resources/url-b5e2127e07f692d516b9/
- Original source: https://huggingface.co/datasets/xlangai/aguvis-stage2
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: planning, data-generation
- Evidence checked: 2026-10-17T02:03:33Z
- ID: url:b5e2127e07f692d516b9

### Limitations

The manifest contains trajectory annotations and archives associated with mobile, desktop and web sources. The card declares Apache-2.0. This stage has a different training purpose and files from the grounding release. No archive or training sample was downloaded.

- Record JSON: https://awesomecua.com/resources/url-b5e2127e07f692d516b9/record.json

### Structured profile

- Formats: JSON annotations, ZIP image packages, multipart TAR image packages
- Modalities: GUI screenshots, natural-language instructions, action trajectories
- Splits: training
- Supervision: GUI trajectory supervised fine-tuning, planning and reasoning with inner monologue

#### Count observations

No count recorded.

Stage 2 trajectory release, Hub revision bd6f1ed4, is distinct from Stage 1 grounding. The public manifest lists source-specific JSON levels and image ZIP/multipart TAR packages. The training recipe uses all rows for some inputs and random:33% for others; several l2 paths occur twice while the manifest also contains l3 files. Recipe rows/levels are neither independent datasets nor disjoint train/test splits. No example/action/trajectory count is inferred. Apache-2.0 is the card declaration, with separate underlying source terms.

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/xlangai/aguvis-stage2/raw/main/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/xlangai/aguvis-stage2/raw/main/README.md (retrieved 2026-10-17T02:03:33Z; SHA-256 550293f00905615e19e63ac896818f9875dad38fea0ffe196c6302a29719aa72)
- https://huggingface.co/api/datasets/xlangai/aguvis-stage2 (retrieved 2026-10-17T02:03:33Z; SHA-256 f030264a7a8c7485dc7cf15ca554d84450cc492d2ac90e5965810a0207ef370b)
- https://raw.githubusercontent.com/xlang-ai/aguvis/HEAD/README.md (retrieved 2026-10-16T06:36:00Z; SHA-256 2dd9f36b818c1b7b6bd772ba8575f6c0ebab6d9e0d307edcc2f196f3e4ba502e)
- https://raw.githubusercontent.com/xlang-ai/aguvis/HEAD/data/stage2.yaml (retrieved 2026-10-17T14:21:11Z; SHA-256 8c1b39e9d16067018ce845fd4e996f34e2b47346c342b2ba26b030f4a5338b66)
- https://huggingface.co/datasets/xlangai/aguvis-stage2/raw/main/README.md (retrieved 2026-10-17T02:03:33Z; SHA-256 550293f00905615e19e63ac896818f9875dad38fea0ffe196c6302a29719aa72)

---

## AutoGUI v1 training data

Screenshot-based grounding and captioning samples with UI functionality descriptions, target coordinates, and bounding boxes.

- Catalog URL: https://awesomecua.com/resources/url-79287058342289aa5d45/
- Original source: https://huggingface.co/datasets/AutoGUI/AutoGUI-v1-702k
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web, cross-platform
- Topics: grounding, screen-understanding
- Evidence checked: 2026-10-16T10:42:13Z
- ID: url:79287058342289aa5d45

### Limitations

The row count and unique-screen count are different units. The data card documents image scaling conventions that affect coordinate interpretation.

- Record JSON: https://awesomecua.com/resources/url-79287058342289aa5d45/record.json

### Structured profile

- Formats: not recorded
- Modalities: screenshots, instructions, functionality labels, bounding boxes
- Splits: train
- Supervision: element grounding, functionality captioning

#### Count observations

- 701,864 training rows — default/train in the dataset card metadata (reported; source: https://huggingface.co/datasets/AutoGUI/AutoGUI-v1-702k/raw/main/README.md)

Rows and unique screenshots are different units. The card documents image-downscaling conventions that affect coordinates; preserve the device and original image-size fields.

### License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/AutoGUI/AutoGUI-v1-702k/raw/main/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/AutoGUI/AutoGUI-v1-702k/raw/main/README.md (retrieved 2026-10-16T10:42:13Z; SHA-256 c73b46acc2ff034a443fb8dbde327de1888535267199c9fb1819adf66898f1d7)
- https://huggingface.co/datasets/AutoGUI/AutoGUI-v1-702k/raw/main/README.md (retrieved 2026-10-16T10:42:13Z; SHA-256 c73b46acc2ff034a443fb8dbde327de1888535267199c9fb1819adf66898f1d7)

---

## CAGUI

Chinese Android GUI benchmark released with AgentCPM-GUI, with a grounding track for widgets and OCR text and an agent track for multi-step tasks in Chinese apps.

- Catalog URL: https://awesomecua.com/resources/url-a06622da7688e3718a7b/
- Original source: https://huggingface.co/datasets/openbmb/CAGUI
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: data-generation
- Evidence checked: 2026-10-16T06:38:26Z
- ID: url:a06622da7688e3718a7b

- Record JSON: https://awesomecua.com/resources/url-a06622da7688e3718a7b/record.json

### License declarations

- code: not recorded
- data: cc-by-nc-4.0 — https://huggingface.co/datasets/openbmb/CAGUI
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/openbmb/CAGUI (retrieved 2026-10-16T06:38:26Z; SHA-256 98699e13f7c7f5af812e1cbbd5e71eaceefa8aa73ca37167a772774a40818efd)
- https://huggingface.co/api/datasets/openbmb/CAGUI (retrieved 2026-10-16T06:38:26Z; SHA-256 98699e13f7c7f5af812e1cbbd5e71eaceefa8aa73ca37167a772774a40818efd)

---

## ChilleD/WildAWM

WildAWM provides 341 computer-use tasks across CLI, MCP, and web interfaces, with frozen task worlds and training and test splits for Harbor runs.

- Catalog URL: https://awesomecua.com/resources/url-eb8af3be965f5c0fde6a/
- Original source: https://huggingface.co/datasets/ChilleD/WildAWM
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform, web
- Topics: evaluation, data-generation, sandbox, tool-integration
- Evidence checked: 2026-11-09T19:56:22Z
- ID: url:eb8af3be965f5c0fde6a

### Limitations

The card lists 100 supervised fine-tuning tasks, 208 reinforcement-learning tasks, and 33 test tasks. It describes programmatic verification with completion and failure rewards.

- Record JSON: https://awesomecua.com/resources/url-eb8af3be965f5c0fde6a/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/ChilleD/WildAWM (retrieved 2026-11-09T19:56:22Z; SHA-256 be67f753d85e6d1de66f1d22a247a80131d71647f58b2758e53e71ab9d644733)
- https://huggingface.co/api/datasets/ChilleD/WildAWM (retrieved 2026-11-09T19:56:22Z; SHA-256 be67f753d85e6d1de66f1d22a247a80131d71647f58b2758e53e71ab9d644733)

---

## cua-ai/cua-s1-forms

Training and evaluation examples for selecting GUI form actions from document content, with synthetic train, validation, and test splits plus real browser form demos.

- Catalog URL: https://awesomecua.com/resources/url-62d912811f786f787ae4/
- Original source: https://huggingface.co/datasets/cua-ai/cua-s1-forms
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: data-generation, action-prediction, evaluation
- Evidence checked: 2026-11-09T05:05:17Z
- ID: url:62d912811f786f787ae4

### Limitations

The card lists train.jsonl, validation.jsonl, test.jsonl, and demo.jsonl. Each row contains a context, candidate options, and the correct option index. The stated license is MIT.

- Record JSON: https://awesomecua.com/resources/url-62d912811f786f787ae4/record.json

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/cua-ai/cua-s1-forms
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/cua-ai/cua-s1-forms (retrieved 2026-11-09T05:05:17Z; SHA-256 8d3f5b91c78778051ee4c287658eb823c39ae9e3ff6f55ed720d55d78174afef)
- https://huggingface.co/api/datasets/cua-ai/cua-s1-forms (retrieved 2026-11-09T05:05:17Z; SHA-256 8d3f5b91c78778051ee4c287658eb823c39ae9e3ff6f55ed720d55d78174afef)

---

## CUA-Gym

Computer-use environment and task resources for agent research.

- Catalog URL: https://awesomecua.com/resources/url-6aa1aa58a7a888395189/
- Original source: https://huggingface.co/datasets/xlangai/CUA-Gym
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop
- Topics: evaluation, data-generation
- Evidence checked: 2026-10-16T06:38:26Z
- ID: url:6aa1aa58a7a888395189

- Record JSON: https://awesomecua.com/resources/url-6aa1aa58a7a888395189/record.json

### License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/xlangai/CUA-Gym
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/xlangai/CUA-Gym (retrieved 2026-10-16T06:38:26Z; SHA-256 43b8ebde3b971e1b8b61d789c786ead59b45a2490bc6ed19e204bafc03a31f44)
- https://huggingface.co/datasets/xlangai/CUA-Gym/raw/main/README.md (retrieved 2026-10-17T16:10:25Z; SHA-256 962cd9162bea83f7adfedb3da50129bcf4203ae65176bdf53f0af6788b9603ef)
- https://huggingface.co/api/datasets/xlangai/CUA-Gym (retrieved 2026-10-16T06:38:26Z; SHA-256 43b8ebde3b971e1b8b61d789c786ead59b45a2490bc6ed19e204bafc03a31f44)

---

## Dreamer V1 Data

Web-world-model training data with prompts, images, action descriptions, and responses, released with the WebDreamer project.

- Catalog URL: https://awesomecua.com/resources/url-eadc6cba9ea46c38dd1d/
- Original source: https://huggingface.co/datasets/osunlp/Dreamer-V1-Data
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: world-models, data-generation
- Evidence checked: 2026-10-16T11:09:28Z
- ID: url:eadc6cba9ea46c38dd1d

### Limitations

The card reports a cleaned size of 3.12M without explicitly defining its counting unit. The catalog leaves the exact sample count unknown. Its data license differs from the model-weight license.

- Record JSON: https://awesomecua.com/resources/url-eadc6cba9ea46c38dd1d/record.json

### Structured profile

- Formats: not recorded
- Modalities: images, prompts, actions, responses
- Splits: not recorded
- Supervision: web-world-model prediction

#### Count observations

No count recorded.

The card reports a cleaned size of 3.12M without defining the counting unit, so no sample total is inferred. The data card declares noncommercial share-alike terms, separately from the model-weight license.

### License declarations

- code: not recorded
- data: cc-by-nc-sa-4.0 — https://huggingface.co/datasets/osunlp/Dreamer-V1-Data/raw/main/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/osunlp/Dreamer-V1-Data/raw/main/README.md (retrieved 2026-10-16T11:09:28Z; SHA-256 e656246f09340fed08136cf41a8b79880e19e1397ddd176410688ddee4e6365c)
- https://huggingface.co/datasets/osunlp/Dreamer-V1-Data/raw/main/README.md (retrieved 2026-10-16T11:09:28Z; SHA-256 e656246f09340fed08136cf41a8b79880e19e1397ddd176410688ddee4e6365c)

---

## GUI-R1 data bundle

Training and evaluation Parquet bundles accompanying GUI-R1, including GUI grounding and mobile/web action-prediction data.

- Catalog URL: https://awesomecua.com/resources/url-df680385f18b01a825be/
- Original source: https://huggingface.co/datasets/ritzzai/GUI-R1
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, windows, linux, macos, android, web
- Topics: grounding, reinforcement-learning, evaluation
- Evidence checked: 2026-10-17T02:42:32Z
- ID: url:df680385f18b01a825be

### Limitations

The Hub is a dataset repository with Parquet payloads, although the short card mistakenly calls it a model. The official project identifies it as training/evaluation data and describes subsequent expanded mixtures. MIT is declared in this dataset card; upstream dataset terms remain separate. No 3K/800K aggregate count is inferred for the mutable bundle.

- Record JSON: https://awesomecua.com/resources/url-df680385f18b01a825be/record.json

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/ritzzai/GUI-R1/raw/main/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/ritzzai/GUI-R1/raw/main/README.md (retrieved 2026-10-17T02:42:32Z; SHA-256 7b14996d1a99675990cb2f3aeada2b2f9898f9daee46d3680988e16f6365abe3)
- https://huggingface.co/api/datasets/ritzzai/GUI-R1 (retrieved 2026-10-17T02:42:32Z; SHA-256 f31ae9547d94967dd91f5cde5e5c66430d7d59ee3a525c0914bc600a79999af7)
- https://raw.githubusercontent.com/ritzz-ai/GUI-R1/HEAD/README.md (retrieved 2026-10-16T10:43:11Z; SHA-256 94c7c78bede11dde727940f56592a04594c1c59438812dff47540bf53c1bed7d)
- https://huggingface.co/datasets/ritzzai/GUI-R1/raw/main/README.md (retrieved 2026-10-17T02:42:32Z; SHA-256 7b14996d1a99675990cb2f3aeada2b2f9898f9daee46d3680988e16f6365abe3)

---

## GUIOdyssey — current data release

Cross-app Android interaction episodes with fine-grained step instructions, screen descriptions, action context, and target boxes.

- Catalog URL: https://awesomecua.com/resources/url-511903ebfac45e6751b2/
- Original source: https://huggingface.co/datasets/hflqf88888/GUIOdyssey
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, cross-app, data-generation
- Evidence checked: 2026-10-16T11:39:52Z
- ID: url:511903ebfac45e6751b2

### Limitations

The project recommends this release over its earlier OpenGVLab/GUI-Odyssey upload. Episode count follows the current data card; conflicting repository prose is documented in the profile.

- Record JSON: https://awesomecua.com/resources/url-511903ebfac45e6751b2/record.json

### Structured profile

- Formats: JSON annotations, PNG screenshots
- Modalities: screenshots, instructions, actions, bounding boxes, step context
- Splits: random, task, device, app
- Supervision: cross-app trajectories, action grounding

#### Count observations

- 8,334 episodes — recommended hflqf88888/GUIOdyssey release (reported; source: https://huggingface.co/datasets/hflqf88888/GUIOdyssey/raw/main/README.md)

The repository gives conflicting episode totals (8,334 and 8,834). This profile uses 8,334 from the specifically recommended current dataset card. No independent archive recount was performed. Coordinates are normalized to 0–1000.

### License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/hflqf88888/GUIOdyssey/raw/main/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/hflqf88888/GUIOdyssey/raw/main/README.md (retrieved 2026-10-16T11:39:52Z; SHA-256 fd627ee0a6ee0596e0ee8147996b9a7a3436f754fc95ed63cf5f408d778b2831)
- https://raw.githubusercontent.com/OpenGVLab/GUI-Odyssey/HEAD/README.md (retrieved 2026-10-16T06:36:01Z; SHA-256 4585b765d7c8b3e9bb6187d36d576edde454d4c0158a6aa8b3fdbedf34c89a15)
- https://raw.githubusercontent.com/OpenGVLab/GUI-Odyssey/HEAD/introduction.md (retrieved 2026-10-16T11:39:52Z; SHA-256 78c19ee712487af60df1913f11572958564e59a1a2cc663b1b30d971855d7a28)
- https://huggingface.co/datasets/hflqf88888/GUIOdyssey/raw/main/README.md (retrieved 2026-10-16T11:39:52Z; SHA-256 fd627ee0a6ee0596e0ee8147996b9a7a3436f754fc95ed63cf5f408d778b2831)

---

## MONDAY annotations

Video-derived mobile navigation annotations that pair scene boundaries and screen or element boxes with action labels for training and evaluating GUI agents.

- Catalog URL: https://awesomecua.com/resources/url-570654ff67ecefa2b955/
- Original source: https://huggingface.co/datasets/runamu/MONDAY
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android, ios
- Topics: data-generation, mobile-navigation, video, imitation-learning
- Evidence checked: 2026-10-17T12:32:07Z
- ID: url:570654ff67ecefa2b955

### Limitations

The ungated Hub publishes four Parquet splits containing video identifiers and annotations. Original videos and extracted screenshots must be obtained separately; the code README explains that consumers download source videos from YouTube. A Windows Mobile unseen-OS test split is documented. The companion code has an Apache-2.0 file, while the data card declares no data license and the repository defers third-party materials to original terms. Training scripts, pretrained checkpoints and the full generation pipeline remain planned updates.

- Record JSON: https://awesomecua.com/resources/url-570654ff67ecefa2b955/record.json

### Structured profile

- Formats: Parquet
- Modalities: text, timestamps, bounding boxes, action labels
- Splits: train, validation, test, test_unseen_os
- Supervision: video-derived scene and action annotations

#### Count observations

- 19,725 video annotation records — train split (reported; source: https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md)
- 495 video annotation records — validation split (reported; source: https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md)
- 100 video annotation records — test split (reported; source: https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md)
- 50 video annotation records — test_unseen_os split (reported; source: https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md)
- ≈ 333,000 detected scenes — publisher overview of MONDAY (reported; source: https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md)
- ≈ 313,000 identified actions — publisher overview of MONDAY (reported; source: https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md)

Split counts are video-annotation rows; scene and action totals are rounded publisher reports. Source videos/images are not included in the Hub files.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: No dataset-license declaration in the inspected card; Apache-2.0 applies to companion code and is not transferred to YouTube content or this annotation package.
  Sources: https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md, https://raw.githubusercontent.com/runamu/monday/HEAD/README.md, https://raw.githubusercontent.com/runamu/monday/HEAD/LICENSE

### Primary evidence

- https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md (retrieved 2026-10-17T12:32:07Z; SHA-256 62a346fd0d328deb5b56a652c8581850b0c8120f5c77e53b33f24b9baf937adb)
- https://huggingface.co/api/datasets/runamu/MONDAY (retrieved 2026-10-17T12:32:07Z; SHA-256 f55c319a70c8ff988049363dc8fc266a9f1b1a09b8ac7096ee573f962e8f9492)
- https://raw.githubusercontent.com/runamu/monday/HEAD/README.md (retrieved 2026-10-17T12:30:53Z; SHA-256 cb3d2329571a80b6edeab98c04f8b63c7f4e976929788d6a8283238b0b7fdadc)
- https://raw.githubusercontent.com/runamu/monday/HEAD/LICENSE (retrieved 2026-10-17T12:34:09Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## MultiUI training data

Gated Hub release of the MultiUI web-UI training data, about 7.3 million samples per the project README, packaged as two training-stage JSON files and 21 split TAR archive parts.

- Catalog URL: https://awesomecua.com/resources/url-8cd911654653a6ba8521/
- Original source: https://huggingface.co/datasets/neulab/MultiUI
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: screen-understanding, data-generation
- Evidence checked: 2026-10-18T15:57:03Z
- ID: url:8cd911654653a6ba8521

### Limitations

The Hub API at revision c17e5f29 reports gated 'auto' and lists stage1_data.json (about 5.2 GB), stage2_data_to_be_combined_with_general_data.json (about 0.25 GB) and 21 TAR parts in three groups: v0.6_5M (12 parts), v0.7_exclude_v0.6 (4) and v0.8_exclude_v0.7 (5), about 955 GB in all. The card and files sit behind the gate; the description comes from the project README, which links this dataset as its 7.3-million-sample training set and says the data was built from webpages linked in FineWeb or generated by LLMs. The card metadata declares ODC-BY for the data; the GitHub repository has no license file, so its code terms stay unknown.

- Record JSON: https://awesomecua.com/resources/url-8cd911654653a6ba8521/record.json

### Structured profile

- Formats: JSON, split TAR archives
- Modalities: webpage UI content, text, accessibility-derived structure
- Splits: not recorded
- Supervision: text-rich web UI understanding tasks

#### Count observations

- ≈ 7,300,000 samples — MultiUI training dataset as described in the project README (reported; source: https://raw.githubusercontent.com/neulab/multiui/e261d8ad3d329a8b6e719cfd4f6a6d8e6df3cede/README.md)
- 21 TAR archive parts — Hub file manifest at revision c17e5f29 (computed) (computed; source: https://huggingface.co/api/datasets/neulab/MultiUI/tree/c17e5f297392be76741dcc3599e8fedc4304b386)

The sample count is the README's rounded figure; the gated files remain uncounted. Archive parts are package files. The versioned archive names (v0.7 excluding v0.6, v0.8 excluding v0.7) suggest incremental releases, but the card that would explain them is gated.

### License declarations

- code: not recorded
- data: odc-by — https://huggingface.co/datasets/neulab/MultiUI
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/neulab/MultiUI (retrieved 2026-10-18T15:57:03Z; SHA-256 05ffe28893cff7ee8ae2612252432a64af1e270393c5bdc9113e223601abf815)
- https://raw.githubusercontent.com/neulab/multiui/e261d8ad3d329a8b6e719cfd4f6a6d8e6df3cede/README.md (retrieved 2026-10-18T15:56:29Z; SHA-256 fe0c03fe73529a29788d559103c4aed48dca6ed9ba3bfd5f151f902fa8858b38)
- https://huggingface.co/api/datasets/neulab/MultiUI/tree/c17e5f297392be76741dcc3599e8fedc4304b386 (retrieved 2026-10-18T15:56:29Z; SHA-256 a21100c8e73264bf6c02af02d1d490dc6436bf674e97f297fbb3d77b7d97a944)
- https://huggingface.co/api/datasets/neulab/MultiUI (retrieved 2026-10-18T15:57:03Z; SHA-256 05ffe28893cff7ee8ae2612252432a64af1e270393c5bdc9113e223601abf815)

---

## OpenGVLab/MMBench-GUI

MMBench-GUI releases annotations and offline images for evaluating interface understanding and grounding within a GUI-agent benchmark spanning desktop, mobile and web platforms.

- Catalog URL: https://awesomecua.com/resources/url-339e28b1f939ae45f9fe/
- Original source: https://huggingface.co/datasets/OpenGVLab/MMBench-GUI
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, windows, macos, linux, ios, android, web
- Topics: evaluation, grounding, screen-understanding, automation
- Evidence checked: 2026-11-09T06:16:39Z
- ID: url:339e28b1f939ae45f9fe

### Limitations

The repository includes L1 and L2 annotation files and an offline image archive. The card declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-339e28b1f939ae45f9fe/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/OpenGVLab/MMBench-GUI
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/OpenGVLab/MMBench-GUI (retrieved 2026-11-09T06:16:39Z; SHA-256 bee7e3ec919487a075372e5503416e279fd97fa17bfba654d17a957de5569dff)
- https://huggingface.co/api/datasets/OpenGVLab/MMBench-GUI (retrieved 2026-11-09T06:16:39Z; SHA-256 bee7e3ec919487a075372e5503416e279fd97fa17bfba654d17a957de5569dff)

---

## OpenMobile-Data

OpenMobile's synthesized Android agent data: four LLaMA-Factory SFT split files built from AndroidWorld rollouts plus an archive of the original rollout trajectories and screenshots.

- Catalog URL: https://awesomecua.com/resources/url-3849b18aa87edefc6afd/
- Original source: https://huggingface.co/datasets/cckevinn/OpenMobile-Data
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: data-generation, mobile-navigation, imitation-learning
- Evidence checked: 2026-10-19T06:53:38Z
- ID: url:3849b18aa87edefc6afd

### Limitations

The short card says the four JSON files are LLaMA-Factory training files and raw_dumps.tar.gz holds the original rollout trajectories with the screenshots the training files need. The OpenMobile code README registers the files as openmobile_split1 to openmobile_split4 in ShareGPT format and gives a converter to the Qwen3.5 format. No license is declared on the card.

- Record JSON: https://awesomecua.com/resources/url-3849b18aa87edefc6afd/record.json

### Structured profile

- Formats: LLaMA-Factory ShareGPT JSON, tar.gz archive of raw rollouts
- Modalities: screenshots, instructions, step histories, reasoning text, actions, target element bounding boxes
- Splits: split1, split2, split3, split4
- Supervision: synthesized task instructions, agent rollout trajectories with learner/expert policy switching

#### Count observations

- ≈ 2,800 synthesized instructions — OpenMobile dataset (project page) (reported; source: https://njucckevin.github.io/openmobile/)
- ≈ 34,000 action steps — OpenMobile dataset (project page) (reported; source: https://njucckevin.github.io/openmobile/)
- 20 Android apps — OpenMobile dataset (project page) (reported; source: https://njucckevin.github.io/openmobile/)

Instruction, step and app counts are the project page's headline figures. Streaming the four split files at revision 8ed12d1 gave 7,393, 6,767, 9,345 and 3,855 step-level samples (27,360 in total), each with one screenshot path into raw_dumps, a system prompt with the mobile_use tool, the task and step history, an assistant thought with a tool call, and a target bounding box; the files exceed the receipt budget, leaving these computed counts outside count observations. Steps in the files and the page's action steps are not reconciled. The four split names are training files.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: The dataset card declares no license; the code repository's Apache-2.0 license is not transferred to the data, and the code README says other released artifacts may have their own terms.
  Sources: https://huggingface.co/datasets/cckevinn/OpenMobile-Data/raw/8ed12d15763057f8e8d40134cfddfcc756ff8a7a/README.md

### Primary evidence

- https://huggingface.co/datasets/cckevinn/OpenMobile-Data/raw/8ed12d15763057f8e8d40134cfddfcc756ff8a7a/README.md (retrieved 2026-10-19T06:53:38Z; SHA-256 5a119d88171e645b3dccad526ed25e75d4e28e4e5c101f89daa1c6697b92d601)
- https://huggingface.co/api/datasets/cckevinn/OpenMobile-Data/revision/8ed12d15763057f8e8d40134cfddfcc756ff8a7a (retrieved 2026-10-19T06:53:39Z; SHA-256 054432be78024ecf09b1d8f022c11b82addf7ee5127a8f355d9a6eb18b212355)
- https://njucckevin.github.io/openmobile/ (retrieved 2026-10-19T06:53:36Z; SHA-256 b37f01ef9fcffa0eef1f6c5c317a333e6f14210dfda54843fdaba2f88331b864)
- https://raw.githubusercontent.com/njucckevin/OpenMobile-Code/faca68f386aff7277cdf494c84693c51090229c6/README.md (retrieved 2026-10-19T06:53:33Z; SHA-256 8594e32aab90e0fdbaf436997e4082884423b6d3298f46247dcf0820e0499080)

---

## OSWorld 2.0 task classes

Gated Hub release of the OSWorld 2.0 benchmark's Python task classes, which hold task setup and evaluator logic kept out of the public code to limit leakage and are pinned per benchmark release.

- Catalog URL: https://awesomecua.com/resources/url-1c4a0389ace7c5cb8a4b/
- Original source: https://huggingface.co/datasets/xlangai/osworld_v2_tasks
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: evaluation, long-horizon
- Evidence checked: 2026-10-18T11:47:41Z
- ID: url:1c4a0389ace7c5cb8a4b

### Limitations

The Hub API at revision 0a1aadad reports gated 'auto' (access is approved automatically after a logged-in request) and 147 files: 108 task_*.py classes, 34 task implementation notes, a task-hash manifest and the card. The card and files sit behind the gate; the description comes from the OSWorld-V2 README, which links this dataset as its data and downloads it into evaluation_examples/task_class. The README pins task, asset and website snapshots per benchmark release (osworld-v2.1 recommended, plus osworld-v2-2026.08.08 and osworld-v2-2026.06.24); main-branch file counts are distinct from release task counts. Task assets are in the separate gated xlangai/osworld_v2_assets_gated dataset and anonymous runtime assets in xlangai/osworld_v2_assets; neither is covered here. The code repository github.com/xlang-ai/OSWorld-V2 has no active catalog record, so no component relation is recorded. The card metadata declares Apache-2.0.

- Record JSON: https://awesomecua.com/resources/url-1c4a0389ace7c5cb8a4b/record.json

### Structured profile

- Formats: Python, Markdown, JSON manifest
- Modalities: Python task classes, implementation notes
- Splits: not recorded
- Supervision: task setup and evaluator code

#### Count observations

- 108 task class files — task_*.py on the main branch at revision 0a1aadad (computed) (computed; source: https://huggingface.co/api/datasets/xlangai/osworld_v2_tasks)
- 34 implementation note files — implementation_notes/task_*.md on the main branch at revision 0a1aadad (computed) (computed; source: https://huggingface.co/api/datasets/xlangai/osworld_v2_tasks)

Counts are files in the public main-branch manifest. Benchmark releases are pinned to their own tags; these are main-branch counts.

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/xlangai/osworld_v2_tasks
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/xlangai/osworld_v2_tasks (retrieved 2026-10-18T11:47:41Z; SHA-256 b9ef429ad3f9ef51702093db5bc1cb4e53d6ed5624cd2003162c4fedb3855c87)
- https://raw.githubusercontent.com/xlang-ai/OSWorld-V2/d9953673daf55381237e058fd9388cc2d74c5538/README.md (retrieved 2026-10-18T11:47:41Z; SHA-256 0d1d3e91e8786720a167b8bc26a41bd27832eefae652ab1c166193073e99b2b4)
- https://huggingface.co/api/datasets/xlangai/osworld_v2_tasks (retrieved 2026-10-18T11:47:41Z; SHA-256 b9ef429ad3f9ef51702093db5bc1cb4e53d6ed5624cd2003162c4fedb3855c87)

---

## osworld_v2_assets_gated

Gated Hub snapshot of the task assets for the OSWorld 2.0 computer-use benchmark, such as setup files and ground-truth files, downloaded locally and pinned per benchmark release before tasks run.

- Catalog URL: https://awesomecua.com/resources/url-3de50fa3eee0081d31ac/
- Original source: https://huggingface.co/datasets/xlangai/osworld_v2_assets_gated
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: evaluation, long-horizon
- Evidence checked: 2026-11-10T03:01:06Z
- ID: url:3de50fa3eee0081d31ac

### Limitations

Access requires accepting a gated request; the visible file list shows a shared/ folder with archives such as email_031.tar.gz and cached external images, about 4.92 GB in total. The OSWorld-V2 README fetches it with scripts/tools/download_osworld_v2_assets.py and points OSWORLD_FILE_BASE_URL at the local copy; xlangai/osworld_v2_assets holds only browser-facing files.

- Record JSON: https://awesomecua.com/resources/url-3de50fa3eee0081d31ac/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/xlangai/osworld_v2_assets_gated (retrieved 2026-11-10T03:01:06Z; SHA-256 cf51915e2522cafe54a43e9bf969b425c73304f6745f2e55d9286c9c632ca646)
- https://huggingface.co/api/datasets/xlangai/osworld_v2_assets_gated (retrieved 2026-11-10T03:01:06Z; SHA-256 cf51915e2522cafe54a43e9bf969b425c73304f6745f2e55d9286c9c632ca646)

---

## ScaleCUA Data

Cross-platform training data released with ScaleCUA, with grounding and navigation annotations for Ubuntu, Windows, macOS, Android, iPhone and web screenshots.

- Catalog URL: https://awesomecua.com/resources/url-631e74223e198ef40202/
- Original source: https://huggingface.co/datasets/OpenGVLab/ScaleCUA-Data
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: data-generation
- Evidence checked: 2026-10-16T06:38:26Z
- ID: url:631e74223e198ef40202

- Record JSON: https://awesomecua.com/resources/url-631e74223e198ef40202/record.json

### Structured profile

- Formats: JSONL annotations, JSON manifest, split image archives
- Modalities: screenshots, text, actions
- Splits: not recorded
- Supervision: GUI grounding, GUI action trajectories

#### Count observations

- 6 platform categories — Linux, macOS, Windows, Android, iOS, and Web (reported; source: https://huggingface.co/datasets/OpenGVLab/ScaleCUA-Data/raw/main/README.md)

The six categories include Web. Grounding and trajectory annotations follow different collection processes. No sample total or train/test division is inferred from archive-part counts or Hub size tags.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/OpenGVLab/ScaleCUA-Data (retrieved 2026-10-16T06:38:26Z; SHA-256 dca4b89176c7653e83545363e4868bd2d5f0bf618df007b68a7e25407262f1ac)
- https://huggingface.co/datasets/OpenGVLab/ScaleCUA-Data/raw/main/README.md (retrieved 2026-10-17T02:02:37Z; SHA-256 8c545d66cc7199a9258bd91ed48930691d0d99555bc30ee457fae9bf656fd18d)
- https://huggingface.co/api/datasets/OpenGVLab/ScaleCUA-Data (retrieved 2026-10-16T06:38:26Z; SHA-256 dca4b89176c7653e83545363e4868bd2d5f0bf618df007b68a7e25407262f1ac)

---

## Screen Point-and-Read Data

Screen Point-and-Read Data pairs OS, web and mobile screenshots with selected points, annotated regions and corrected captions for layout-aware GUI interpretation.

- Catalog URL: https://awesomecua.com/resources/url-4b747a376f628e6f9760/
- Original source: https://huggingface.co/datasets/yfan1997/ScreenPR
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: screen-understanding, grounding, data-generation, evaluation
- Evidence checked: 2026-11-09T06:16:35Z
- ID: url:4b747a376f628e6f9760

### Limitations

The dataset card documents point coordinates, human-annotated region boxes, reference regions and cycle-consistency candidates. It declares an MIT license.

- Record JSON: https://awesomecua.com/resources/url-4b747a376f628e6f9760/record.json

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/yfan1997/ScreenPR
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/yfan1997/ScreenPR (retrieved 2026-11-09T06:16:35Z; SHA-256 31ffc7c11a54ba92ee5936a57412ffdcd7735e90e7331387d31671177329f434)
- https://huggingface.co/api/datasets/yfan1997/ScreenPR (retrieved 2026-11-09T06:16:35Z; SHA-256 31ffc7c11a54ba92ee5936a57412ffdcd7735e90e7331387d31671177329f434)

---

## ScreenDrag

GUI dragging data with screen observations, prior state, and continuous pointer actions, provided as trajectory files and Parquet representations.

- Catalog URL: https://awesomecua.com/resources/url-fe43af1801032be708cc/
- Original source: https://huggingface.co/datasets/h-siyuan/ScreenDrag
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop
- Topics: grounding, evaluation
- Evidence checked: 2026-10-16T11:12:56Z
- ID: url:fe43af1801032be708cc

### Limitations

Raw and Parquet folders are alternative views of the same data. The inspected card did not state a license.

- Record JSON: https://awesomecua.com/resources/url-fe43af1801032be708cc/record.json

### Structured profile

- Formats: Parquet, episode files
- Modalities: screen images, instructions, previous state, continuous actions
- Splits: train, test
- Supervision: continuous GUI dragging

#### Count observations

No count recorded.

Raw and Parquet folders are alternative views of the same data. Each sample describes a dragging task over multiple timesteps; action vectors encode button state and coordinates.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/h-siyuan/ScreenDrag/raw/main/README.md (retrieved 2026-10-16T11:12:56Z; SHA-256 39c7c028f7ef5ca5c75f79b59a107c7e25444776095a2a08bb7535c4f523f7fa)
- https://raw.githubusercontent.com/showlab/showui-pi/HEAD/README.md (retrieved 2026-10-16T11:09:28Z; SHA-256 88df552ccbe80efd7020905d77d526f4f9efe2d09a11fed2714b083988f9dcef)

---

## ScreenParse

Dense screen-parsing data that labels the visible UI elements of rendered web screenshots with boxes, 55 element classes, text, interactability and reading order, generated by an automated crawl-and-filter pipeline.

- Catalog URL: https://awesomecua.com/resources/url-98e8a413ddd670214755/
- Original source: https://huggingface.co/datasets/docling-project/screenparse
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: screen-understanding, data-generation, grounding
- Evidence checked: 2026-10-18T12:16:38Z
- ID: url:98e8a413ddd670214755

### Limitations

The main branch holds the v2 release, which the card describes as using leaf-element annotations, stricter quality filtering and varied viewport resolutions; the first release stays on the repository's v1 branch, outside this record. Labels come from DOM extraction refined by Qwen3-VL-8B-Instruct and VLM-as-a-judge filtering. CC-BY-4.0 is the card's data declaration.

- Record JSON: https://awesomecua.com/resources/url-98e8a413ddd670214755/record.json

### Structured profile

- Formats: Parquet
- Modalities: web screenshots, source URLs, element annotations
- Splits: train
- Supervision: UI element bounding boxes, element class labels, element text, interactable flags, reading-order indices

#### Count observations

- 1,447,100 screenshots — ScreenParse v2 train split (main branch) (reported; source: https://huggingface.co/datasets/docling-project/screenparse/raw/bc0113f94e262ac39bf881c60547a09b5b4e4462/README.md)
- 25,575,213 UI element annotations — ScreenParse v2 train split (main branch) (reported; source: https://huggingface.co/datasets/docling-project/screenparse/raw/bc0113f94e262ac39bf881c60547a09b5b4e4462/README.md)
- 55 UI element classes — ScreenParse v2 label set (reported; source: https://huggingface.co/datasets/docling-project/screenparse/raw/bc0113f94e262ac39bf881c60547a09b5b4e4462/README.md)
- 1,448 Parquet shards — Hub manifest at revision bc0113f9 (computed) (computed; source: https://huggingface.co/api/datasets/docling-project/screenparse)

Screenshots, element annotations, classes and shards are different units and are counted separately. Screenshot and annotation counts are the card's v2 figures; the shard count is computed from the Hub file manifest.

### License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/docling-project/screenparse/raw/bc0113f94e262ac39bf881c60547a09b5b4e4462/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/docling-project/screenparse/raw/bc0113f94e262ac39bf881c60547a09b5b4e4462/README.md (retrieved 2026-10-18T12:16:38Z; SHA-256 9e39571a8b8d5406fe580a4160ac43226b3fc6abb461d96b5b644171223f948e)
- https://huggingface.co/api/datasets/docling-project/screenparse (retrieved 2026-10-18T12:16:38Z; SHA-256 cd1f607be439cef0ed4a47265be47673495964289006ee6cbac63b4cdd507bcb)
- https://huggingface.co/datasets/docling-project/screenparse/raw/bc0113f94e262ac39bf881c60547a09b5b4e4462/README.md (retrieved 2026-10-18T12:16:38Z; SHA-256 9e39571a8b8d5406fe580a4160ac43226b3fc6abb461d96b5b644171223f948e)

---

## ShowUI Desktop

7,496 desktop grounding examples built from OmniAct screenshots, with annotations rewritten by GPT-4o to describe element appearance, spatial relations and function.

- Catalog URL: https://awesomecua.com/resources/url-f976dec3d1c5e0bedbd7/
- Original source: https://huggingface.co/datasets/showlab/ShowUI-desktop-8K
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop
- Topics: data-generation
- Evidence checked: 2026-10-16T06:38:26Z
- ID: url:f976dec3d1c5e0bedbd7

- Record JSON: https://awesomecua.com/resources/url-f976dec3d1c5e0bedbd7/record.json

### Structured profile

- Formats: Hub table with an image column
- Modalities: screenshots, text, bounding boxes, points
- Splits: train
- Supervision: instruction-to-element grounding

#### Count observations

- 7,496 examples — train split declared in the dataset card (reported; source: https://huggingface.co/datasets/showlab/ShowUI-desktop-8K/raw/main/README.md)

The card declares 7,496 examples for the 8K release. Images and original annotations come from OmniAct and are augmented with generated descriptions. Examples are not asserted to be unique screenshots.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/showlab/ShowUI-desktop-8K (retrieved 2026-10-16T06:38:26Z; SHA-256 84bd2ef05ea837eaeebb248002b2942dd5c72f072beb29a9bd70eda1ea433a31)
- https://huggingface.co/datasets/showlab/ShowUI-desktop-8K/raw/main/README.md (retrieved 2026-10-17T02:02:38Z; SHA-256 577a78efa03cde05141c23033222014094681cb5d04786dbb4a698df8543b3df)
- https://huggingface.co/api/datasets/showlab/ShowUI-desktop-8K (retrieved 2026-10-16T06:38:26Z; SHA-256 84bd2ef05ea837eaeebb248002b2942dd5c72f072beb29a9bd70eda1ea433a31)
- https://huggingface.co/api/datasets/showlab/ShowUI-desktop (retrieved 2026-10-17T19:14:57Z; SHA-256 57eaa720c20e9e3a4428c8292c150e1949f3372c75c6890e424ba3c6600a5e5d)
- https://huggingface.co/api/datasets/showlab/ShowUI-desktop-8K (retrieved 2026-10-17T19:14:58Z; SHA-256 57eaa720c20e9e3a4428c8292c150e1949f3372c75c6890e424ba3c6600a5e5d)

---

## UGround V1 Data

Gated web grounding training data for UGround in Web-Hybrid and Web-Direct subsets, with a bounding-box version whose coordinates are normalized to 0-999.

- Catalog URL: https://awesomecua.com/resources/url-c4898ad1bfc049926a63/
- Original source: https://huggingface.co/datasets/osunlp/UGround-V1-Data
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding, data-generation
- Evidence checked: 2026-10-16T06:38:26Z
- ID: url:c4898ad1bfc049926a63

- Record JSON: https://awesomecua.com/resources/url-c4898ad1bfc049926a63/record.json

### Structured profile

- Formats: Parquet shards
- Modalities: GUI screenshots, natural-language grounding descriptions
- Splits: not recorded
- Supervision: GUI visual-grounding training for the UGround-V1 family

#### Count observations

No count recorded.

Public API revision 33325877 lists Parquet assets but gated=auto; the pinned raw card returned HTTP 401 and no access was requested. Official README identifies this as V1 training data; the API excerpt also announces a Web-Hybrid bounding-box variant with coordinates normalized to [0,999]. The public API excerpt documents a Web-Hybrid bounding-box variant; shard schemas and a release-wide point/bbox count remain unspecified. No train/test partition, example total, or unrestricted downloadability is claimed. Preserve the recorded CC-BY-NC-SA-4.0 data declaration separately from model/code terms.

### License declarations

- code: not recorded
- data: cc-by-nc-sa-4.0 — https://huggingface.co/datasets/osunlp/UGround-V1-Data
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/osunlp/UGround-V1-Data (retrieved 2026-10-16T06:38:26Z; SHA-256 0342862bd7857dd21e389ee5d351375dfea722cad4725c8e33271efc93e009f6)
- https://raw.githubusercontent.com/OSU-NLP-Group/UGround/HEAD/README.md (retrieved 2026-10-16T06:36:00Z; SHA-256 72ca3f23114c3a08fefb724573acf10c9f0a1b3d4a50d811c98356264ecf6ffc)
- https://huggingface.co/api/datasets/osunlp/UGround-V1-Data (retrieved 2026-10-16T06:38:26Z; SHA-256 0342862bd7857dd21e389ee5d351375dfea722cad4725c8e33271efc93e009f6)

---

## UGround-V1-Data-Box

UGround-V1-Data-Box contains Web-Hybrid and Web-Direct GUI grounding data with images and conversations; its bounding-box version uses normalized coordinates.

- Catalog URL: https://awesomecua.com/resources/url-9e89e3332db1770388bc/
- Original source: https://huggingface.co/datasets/osunlp/UGround-V1-Data-Box
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: grounding, data-generation, screen-understanding
- Evidence checked: 2026-11-09T19:57:12Z
- ID: url:9e89e3332db1770388bc

### Limitations

The repository file list contains Parquet shards. The rendered page specifies image bytes, dimensions, and serialized conversations in its record format. Access requires approval, and the page states a CC BY-NC-SA 4.0 license.

- Record JSON: https://awesomecua.com/resources/url-9e89e3332db1770388bc/record.json

### License declarations

- code: not recorded
- data: cc-by-nc-sa-4.0 — https://huggingface.co/datasets/osunlp/UGround-V1-Data-Box
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/osunlp/UGround-V1-Data-Box (retrieved 2026-11-09T19:57:12Z; SHA-256 eecef815309ed235f58ed7979f2ecbfb9302edfdd8f4e5c6ae420de3babcde66)
- https://huggingface.co/api/datasets/osunlp/UGround-V1-Data-Box (retrieved 2026-11-09T19:57:12Z; SHA-256 eecef815309ed235f58ed7979f2ecbfb9302edfdd8f4e5c6ae420de3babcde66)

---

## UI-AGILE-Data

UI-AGILE training annotations and screenshots together with converted GUI-grounding and AndroidControl evaluation files.

- Catalog URL: https://awesomecua.com/resources/url-41abb1b7206689cf5057/
- Original source: https://huggingface.co/datasets/KDEGroup/UI-AGILE-Data
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: grounding, reinforcement-learning, evaluation
- Evidence checked: 2026-10-17T02:43:19Z
- ID: url:41abb1b7206689cf5057

### Limitations

Public JSON, image archives and Parquet evaluation files are present. The card has no data-license declaration; the model’s MIT declaration is not inherited. The publisher describes fixes to AndroidControl action parameters.

- Record JSON: https://awesomecua.com/resources/url-41abb1b7206689cf5057/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/KDEGroup/UI-AGILE-Data/raw/main/README.md (retrieved 2026-10-17T02:43:19Z; SHA-256 ce35413bc1ef28338bc6fd9f132fa271a4f5e0bf23cecd7346f54adf0a964fd7)
- https://huggingface.co/api/datasets/KDEGroup/UI-AGILE-Data (retrieved 2026-10-17T02:43:19Z; SHA-256 7782422de88830a497d9eb530bd2f0fb6283904cbb25dafcf2ff4d03358a377a)

---

## WaveUI-25k

A 24,978-example subset of an ~80k UI element collection, pairing screenshots and instructions with target boxes and annotated element names, descriptions, types, OCR, purposes and click expectations.

- Catalog URL: https://awesomecua.com/resources/url-f2cf4ec32aa0b3ba6b95/
- Original source: https://huggingface.co/datasets/agentsea/wave-ui-25k
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web, desktop, cross-platform
- Topics: grounding, screen-understanding
- Evidence checked: 2026-10-18T16:19:30Z
- ID: url:f2cf4ec32aa0b3ba6b95

### Limitations

The card describes this as a subset of a collection of about 80k preprocessed examples built from WebUI, RoboFlow website screenshots and GroundUI-18K, filtered for duplicates, overlaps, low quality and many text elements, with added annotation fields. The publisher's agentsea/wave-ui dataset (Wave UI) has the same 13 fields and 79,412 rows across three splits; the component link rests on that match. Dataset-viewer statistics over 12,493 of the rows (partial) show platform values web, desktop and mobile and source labels including roboflow, webui, mind2web_test_*, omniact, motif, screenspot and agent_studio. The repository declares no license, and the source datasets' terms are not inferred.

- Record JSON: https://awesomecua.com/resources/url-f2cf4ec32aa0b3ba6b95/record.json

### Structured profile

- Formats: Parquet
- Modalities: images, text, bounding boxes, OCR metadata
- Splits: train
- Supervision: instruction-to-target boxes, element annotations

#### Count observations

- 24,978 rows — train split (reported; source: https://huggingface.co/datasets/agentsea/wave-ui-25k/raw/1b77b749cb4c9936f35838ed8cb0f1b69957ad08/README.md)

The row count comes from the card's dataset_info metadata; rows count labeled element examples, a separate unit from unique screens. The annotation fields are name, description, type, OCR, language, purpose and expectation.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: The WaveUI-25k repository has no license metadata or license file. The compilation license in the separate agentsea/wave-ui repository is not applied here, and the WebUI, RoboFlow and GroundUI-18K source terms are not inferred.
  Sources: https://huggingface.co/api/datasets/agentsea/wave-ui-25k

### Primary evidence

- https://huggingface.co/api/datasets/agentsea/wave-ui-25k (retrieved 2026-10-18T16:19:30Z; SHA-256 b74327a4ecca6fd198ba54ff78b6820a65f6451a7e8af6bf7aaacdb51488b0ec)
- https://huggingface.co/datasets/agentsea/wave-ui-25k/raw/1b77b749cb4c9936f35838ed8cb0f1b69957ad08/README.md (retrieved 2026-10-18T16:19:32Z; SHA-256 612d075ed11bba7357482d31b3d0d3dfa6d397babe36a236e6aa218ce6eb5488)
- https://datasets-server.huggingface.co/statistics?dataset=agentsea/wave-ui-25k&config=default&split=train (retrieved 2026-10-18T16:19:34Z; SHA-256 7ad5c9887649c0eaaa4180816c5bd8381d5b7e394f665134cfcdc6c01ba61210)
- https://huggingface.co/datasets/agentsea/wave-ui/raw/21dc5aa1b39c038aea30f4572d80edef592b7989/README.md (retrieved 2026-10-18T16:19:34Z; SHA-256 27ec13aa77dc55113e4d1a19c2269070e2d69d2fe8df8e2313721a1e3fc66bd9)
- https://huggingface.co/api/datasets/agentsea/wave-ui-25k (retrieved 2026-10-18T16:19:30Z; SHA-256 b74327a4ecca6fd198ba54ff78b6820a65f6451a7e8af6bf7aaacdb51488b0ec)

---

## weboperator-experiments

Run logs of the WebOperator web agent with gpt-4o on 812 WebArena tasks and a 155-task WebArena-lite ablation, holding per-task trajectories, search trees, screenshots and scores.

- Catalog URL: https://awesomecua.com/resources/url-a12c18540006368e69ab/
- Original source: https://huggingface.co/datasets/mahirlabibdihan/weboperator-experiments
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, evaluation, planning
- Evidence checked: 2026-11-10T03:01:12Z
- ID: url:a12c18540006368e69ab

### Limitations

Each run folder holds config.yml and summary.json, and each task folder holds trajectory.json, tree.json, evaluation.json, experiment.log, action-generator logs, a trajectory.html viewer and step screenshots. The card reports a 54.56% WebArena success rate and 60.00% on WebArena-lite for the full system.

- Record JSON: https://awesomecua.com/resources/url-a12c18540006368e69ab/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/mahirlabibdihan/weboperator-experiments (retrieved 2026-11-10T03:01:12Z; SHA-256 6714d278f5dc08e3b882b5c5e47670057db8112e0359f28ed30dfbe01d57d93b)
- https://huggingface.co/api/datasets/mahirlabibdihan/weboperator-experiments (retrieved 2026-11-10T03:01:12Z; SHA-256 6714d278f5dc08e3b882b5c5e47670057db8112e0359f28ed30dfbe01d57d93b)

---

## WildGUI

WildGUI release from Video2GUI: per-task JSONL trajectories mined from Internet tutorial videos, with instructions, plans and grounded actions on web, desktop and mobile, plus screenshot shards for parts 1-15.

- Catalog URL: https://awesomecua.com/resources/url-daf52475338f385b9310/
- Original source: https://huggingface.co/datasets/xwm/WildGUI
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop
- Topics: data-generation, video, grounding, action-prediction
- Evidence checked: 2026-10-18T12:28:47Z
- ID: url:daf52475338f385b9310

### Limitations

The card describes this as a personally reprocessed annotation release: records were regenerated and cleaned following the annotation workflow, then split so that each JSONL line holds one task with its ordered action trajectory; action parameters are omitted when grounding is unreliable (use_grounding false). The Video2GUI project README links this repository as the WildGUI dataset and names the joker-112/WildGUI_Screenshots repository as the host of the part16-part19 frames. Its figures of about 12M trajectories over more than 1,500 applications and websites describe WildGUI in the paper; the 19 JSONL shards (about 78 GB) were not downloaded, so the Hub record count is not established. The project README says trajectories and grounding boxes were produced by Gemini-3-Pro, so labels are model-generated. The data license is the card's CC-BY-NC-4.0 declaration; the source videos and screenshots keep their own rights, and the Apache-2.0 license of the project repository is not transferred to the data.

- Record JSON: https://awesomecua.com/resources/url-daf52475338f385b9310/record.json

### Structured profile

- Formats: JSONL, tar archives of JPEG frames
- Modalities: screenshots, instructions, plans, actions, action rationales
- Splits: not recorded
- Supervision: video-derived task instructions and plans, model-generated action grounding

#### Count observations

- 19 annotation JSONL shards — Hub repository at revision 75287698 (parts 1-19) (computed) (computed; source: https://huggingface.co/api/datasets/xwm/WildGUI/revision/75287698d5876692d4b998be30a724723906e769)
- 4,137 screenshot tar shards — Hub repository at revision 75287698 (parts 1-15) (computed) (computed; source: https://huggingface.co/api/datasets/xwm/WildGUI/revision/75287698d5876692d4b998be30a724723906e769)
- ≈ 12,000,000 interaction trajectories — WildGUI as described in the Video2GUI project README; not recounted in this Hub release (reported; source: https://raw.githubusercontent.com/WeiminXiong/Video2GUI/02f61de0c329f6763ce1b130596a650e4a9291f1/README.md)

Shard counts were computed by script from the pinned Hub API file list; they count files. Each JSONL line is one task with its ordered action trajectory; the number of lines was not counted. The reported trajectory figure comes from the project README and may differ from the reprocessed Hub release. Frames for parts 16-19 are in a separate repository.

### License declarations

- code: not recorded
- data: cc-by-nc-4.0 — https://huggingface.co/datasets/xwm/WildGUI/raw/75287698d5876692d4b998be30a724723906e769/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/xwm/WildGUI/raw/75287698d5876692d4b998be30a724723906e769/README.md (retrieved 2026-10-18T12:28:47Z; SHA-256 5bfb27b61da056f73d3d0040098b694b17785bbb56b59ecbc9c10e6a58c82f0a)
- https://huggingface.co/api/datasets/xwm/WildGUI/revision/75287698d5876692d4b998be30a724723906e769 (retrieved 2026-10-18T12:27:40Z; SHA-256 0f2184af45c554954dcdfaf27d74e3a4907e637b7297ca7b5d34372a3f264c8f)
- https://raw.githubusercontent.com/WeiminXiong/Video2GUI/02f61de0c329f6763ce1b130596a650e4a9291f1/README.md (retrieved 2026-10-18T12:27:41Z; SHA-256 5e3e6a0baa737232700c39449d4cbe48dc7e4640fe0de12f521e03b6e7d64f92)
- https://huggingface.co/datasets/xwm/WildGUI/raw/75287698d5876692d4b998be30a724723906e769/README.md (retrieved 2026-10-18T12:28:47Z; SHA-256 5bfb27b61da056f73d3d0040098b694b17785bbb56b59ecbc9c10e6a58c82f0a)

---

## WildGUI Screenshots (parts 16-19)

Companion Hub repository holding the WildGUI screenshot tar shards for parts 16-19; the matching trajectory annotations and the other parts' frames are in the main WildGUI repository.

- Catalog URL: https://awesomecua.com/resources/url-348f31b5b339403ec26f/
- Original source: https://huggingface.co/datasets/joker-112/WildGUI_Screenshots
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop
- Topics: data-generation, video
- Evidence checked: 2026-10-18T12:28:47Z
- ID: url:348f31b5b339403ec26f

### Limitations

The repository contains only JPEG frames packed in tar shards (671 for part16, 878 for part17, 212 for part18 and 161 for part19) and no annotations; each frame is stored as {video_id}/screenshot_{MM_SS}.jpg and is linked to an action through the annotation's video_id and timestamp. The card notes that a small fraction of annotated frames may be missing. The Video2GUI project README lists this repository as part of the WildGUI release. The data license is the card's CC-BY-NC-4.0 declaration; frames derived from third-party tutorial videos keep their own rights.

- Record JSON: https://awesomecua.com/resources/url-348f31b5b339403ec26f/record.json

### Structured profile

- Formats: tar archives of JPEG frames
- Modalities: screenshots
- Splits: not recorded
- Supervision: frames referenced by video-derived trajectory annotations

#### Count observations

- 1,922 screenshot tar shards — Hub repository at revision 8d31cbd4 (parts 16-19) (computed) (computed; source: https://huggingface.co/api/datasets/joker-112/WildGUI_Screenshots/revision/8d31cbd45c9cb82683bbd5dea767782bb604fbcd)

Shard count computed by script from the pinned Hub API file list; it counts files. The card says each shard holds up to about 20,000 frames; the number of frames was not counted.

### License declarations

- code: not recorded
- data: cc-by-nc-4.0 — https://huggingface.co/datasets/joker-112/WildGUI_Screenshots/raw/8d31cbd45c9cb82683bbd5dea767782bb604fbcd/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/joker-112/WildGUI_Screenshots/raw/8d31cbd45c9cb82683bbd5dea767782bb604fbcd/README.md (retrieved 2026-10-18T12:28:47Z; SHA-256 4f2bbaa917b3c4c5927bcd4f23a5e882c58d0610e07f982e6549c840b942c64d)
- https://huggingface.co/api/datasets/joker-112/WildGUI_Screenshots/revision/8d31cbd45c9cb82683bbd5dea767782bb604fbcd (retrieved 2026-10-18T12:27:41Z; SHA-256 7532cb6ed1d70aab3c8aa3fc0cc76a4e52809f0440179f0c8f2de4bdfb6349e4)
- https://raw.githubusercontent.com/WeiminXiong/Video2GUI/02f61de0c329f6763ce1b130596a650e4a9291f1/README.md (retrieved 2026-10-18T12:27:41Z; SHA-256 5e3e6a0baa737232700c39449d4cbe48dc7e4640fe0de12f521e03b6e7d64f92)
- https://huggingface.co/datasets/joker-112/WildGUI_Screenshots/raw/8d31cbd45c9cb82683bbd5dea767782bb604fbcd/README.md (retrieved 2026-10-18T12:28:47Z; SHA-256 4f2bbaa917b3c4c5927bcd4f23a5e882c58d0610e07f982e6549c840b942c64d)

---

## Agent-Trajectories

An archive dataset of evaluated web, Android, and iOS agent trajectories, including iOS emulator runs and WebArena runs used for agent refinement.

- Catalog URL: https://awesomecua.com/resources/url-61c09ceb7c78f6b5e74f/
- Original source: https://huggingface.co/datasets/Agent-Eval-Refine/Agent-Trajectories
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web, android, ios, cross-platform
- Topics: interaction-history, data-generation, evaluation
- Evidence checked: 2026-11-09T21:08:38Z
- ID: url:61c09ceb7c78f6b5e74f

### Limitations

The release lists trajectory ZIP archives for WebArena, Android, and iOS, plus separate WebArena evaluator variants. The card does not specify a license.

- Record JSON: https://awesomecua.com/resources/url-61c09ceb7c78f6b5e74f/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/Agent-Eval-Refine/Agent-Trajectories (retrieved 2026-11-09T21:08:38Z; SHA-256 f63ca67f8ebf5f3f2bcd31fae923a522fa49eb41e65dc31bce2f9378061ee03a)
- https://huggingface.co/api/datasets/Agent-Eval-Refine/Agent-Trajectories (retrieved 2026-11-09T21:08:38Z; SHA-256 f63ca67f8ebf5f3f2bcd31fae923a522fa49eb41e65dc31bce2f9378061ee03a)

---

## agentboard

Evaluation data of the AgentBoard benchmark for multi-turn LLM agents: 9 tasks in embodied, game, web and tool settings, including WebShop and WebArena, with goals, subgoals and difficulty labels.

- Catalog URL: https://awesomecua.com/resources/url-be5b952e5f0b4b7e4747/
- Original source: https://huggingface.co/datasets/hkust-nlp/agentboard
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation
- Evidence checked: 2026-11-10T06:29:24Z
- ID: url:be5b952e5f0b4b7e4747

### Limitations

Each task has a test.jsonl split, and data.tar.gz holds the complete data with extra environment files; the card says the Dataset Viewer data is incomplete. GPL-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-be5b952e5f0b4b7e4747/record.json

### License declarations

- code: not recorded
- data: gpl-2.0 — https://huggingface.co/datasets/hkust-nlp/agentboard
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/hkust-nlp/agentboard (retrieved 2026-11-10T06:29:24Z; SHA-256 f00f1166fdfdea0d991b12cacb9534f7076c4abb5e46ceb14d3df9c992e165ba)
- https://huggingface.co/api/datasets/hkust-nlp/agentboard (retrieved 2026-11-10T06:29:24Z; SHA-256 f00f1166fdfdea0d991b12cacb9534f7076c4abb5e46ceb14d3df9c992e165ba)

---

## AgentGym-RL-Data-ID

Train and eval task splits for AgentGym-RL multi-turn reinforcement learning, listing task IDs for WebArena web navigation alongside search, game, embodied and science environments.

- Catalog URL: https://awesomecua.com/resources/url-9140ca5ba8252d373b8d/
- Original source: https://huggingface.co/datasets/AgentGym/AgentGym-RL-Data-ID
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: reinforcement-learning, web-navigation, long-horizon, evaluation
- Evidence checked: 2026-11-10T06:29:33Z
- ID: url:9140ca5ba8252d373b8d

### Limitations

JSON files under train/ and eval/ hold item_id values that select tasks served by the AgentGym environment servers; training and evaluation scripts live in the AgentGym-RL repository. The card states the CC-BY-NC-4.0 license.

- Record JSON: https://awesomecua.com/resources/url-9140ca5ba8252d373b8d/record.json

### License declarations

- code: not recorded
- data: cc-by-nc-4.0 — https://huggingface.co/datasets/AgentGym/AgentGym-RL-Data-ID
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/AgentGym/AgentGym-RL-Data-ID (retrieved 2026-11-10T06:29:33Z; SHA-256 e16a910a9a3f4c09d8632ed9ff5f2ef2da2861d0bae40f45150257cd6dd23365)
- https://huggingface.co/api/datasets/AgentGym/AgentGym-RL-Data-ID (retrieved 2026-11-10T06:29:33Z; SHA-256 e16a910a9a3f4c09d8632ed9ff5f2ef2da2861d0bae40f45150257cd6dd23365)

---

## AgentNet

22.6K human-annotated desktop computer-use tasks on Windows, macOS and Ubuntu, released with OpenCUA for training and evaluating vision-language-action models.

- Catalog URL: https://awesomecua.com/resources/url-964d70c40bfc5ca8e1ee/
- Original source: https://huggingface.co/datasets/xlangai/AgentNet
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop
- Topics: data-generation
- Evidence checked: 2026-10-16T06:38:26Z
- ID: url:964d70c40bfc5ca8e1ee

- Record JSON: https://awesomecua.com/resources/url-964d70c40bfc5ca8e1ee/record.json

### Structured profile

- Formats: JSONL, image archives
- Modalities: screenshots, instructions, actions, generated reasoning
- Splits: not recorded
- Supervision: computer-use trajectories, synthesized reasoning

#### Count observations

- ≈ 22,600 tasks — AgentNet collection (reported; source: https://huggingface.co/datasets/xlangai/AgentNet/raw/main/README.md)

The card distinguishes human task instructions from generated summaries, reasoning, reflections, and quality fields. The card distinguishes human task instructions from generated summaries, reasoning, reflections and quality fields; generated labels use a different acceptance process from independent human quality records.

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/xlangai/AgentNet
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/xlangai/AgentNet (retrieved 2026-10-16T06:38:26Z; SHA-256 f23c588ea9fb27210f9d605e164a32527a24298ca516df98272ff7ca7110eac6)
- https://huggingface.co/datasets/xlangai/AgentNet/raw/main/README.md (retrieved 2026-10-16T11:40:46Z; SHA-256 327a77856df259db0a0c2405478f75a0d0f2bf17c51806abc7c509ad82c3ad57)
- https://huggingface.co/api/datasets/xlangai/AgentNet (retrieved 2026-10-16T06:38:26Z; SHA-256 f23c588ea9fb27210f9d605e164a32527a24298ca516df98272ff7ca7110eac6)

---

## AgentRewardBench dataset

Hugging Face dataset release for AgentRewardBench containing trajectory evaluation instances across WebArena, VisualWebArena, AssistantBench, WorkArena, and OSWorld.

- Catalog URL: https://awesomecua.com/resources/url-866251b68d6bba8b8ba6/
- Original source: https://huggingface.co/datasets/McGill-NLP/agent-reward-bench
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web, desktop, cross-platform
- Topics: evaluation, reward-models, web-navigation
- Evidence checked: 2026-10-17T04:03:18Z
- ID: url:866251b68d6bba8b8ba6

- Record JSON: https://awesomecua.com/resources/url-866251b68d6bba8b8ba6/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/McGill-NLP/agent-reward-bench (retrieved 2026-10-17T04:03:18Z; SHA-256 20c910fad3ad45a0c8c39b182c53632a821d3b6b546278bea6b7a78fbcb3f6cb)
- https://huggingface.co/api/datasets/McGill-NLP/agent-reward-bench (retrieved 2026-10-17T04:03:18Z; SHA-256 20c910fad3ad45a0c8c39b182c53632a821d3b6b546278bea6b7a78fbcb3f6cb)

---

## AMEX-8K

An 8K-sample subset of AMEX with mobile app screenshots for GUI grounding pretraining across varied apps, device forms, and screen densities.

- Catalog URL: https://awesomecua.com/resources/url-2b4b3e54d9c52f868b4e/
- Original source: https://huggingface.co/datasets/zonghanHZH/AMEX-8k
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android, ios
- Topics: grounding, mobile-navigation, data-generation
- Evidence checked: 2026-11-09T19:57:10Z
- ID: url:2b4b3e54d9c52f868b4e

### Limitations

The card identifies AMEX as the source dataset and lists Apache 2.0 licensing. It names the ZonUI-3B paper as using this subset in its training corpus.

- Record JSON: https://awesomecua.com/resources/url-2b4b3e54d9c52f868b4e/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/zonghanHZH/AMEX-8k
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/zonghanHZH/AMEX-8k (retrieved 2026-11-09T19:57:10Z; SHA-256 ec70a6c3db4c1f4700287aa7c71ab8d55a03e161826ccd31853b36f809c16f22)
- https://huggingface.co/api/datasets/zonghanHZH/AMEX-8k (retrieved 2026-11-09T19:57:10Z; SHA-256 ec70a6c3db4c1f4700287aa7c71ab8d55a03e161826ccd31853b36f809c16f22)

---

## android_control_test

android_control_test packages a processed Android Control test set for evaluating the InfiGUI-R1 mobile GUI agent.

- Catalog URL: https://awesomecua.com/resources/url-1f248862e4b691b85343/
- Original source: https://huggingface.co/datasets/Reallm-Labs/android_control_test
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: evaluation, mobile-navigation
- Evidence checked: 2026-11-09T05:05:04Z
- ID: url:1f248862e4b691b85343

### Limitations

The repository lists an Android Control test-set archive. The card points to project instructions for use with InfiGUI-R1 and states an Apache 2.0 license.

- Record JSON: https://awesomecua.com/resources/url-1f248862e4b691b85343/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/Reallm-Labs/android_control_test
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/Reallm-Labs/android_control_test (retrieved 2026-11-09T05:05:04Z; SHA-256 47b43c2c9249af946be4c46c979934d7b4765a60f4191538f5f1fb399b5e1e56)
- https://huggingface.co/api/datasets/Reallm-Labs/android_control_test (retrieved 2026-11-09T05:05:04Z; SHA-256 47b43c2c9249af946be4c46c979934d7b4765a60f4191538f5f1fb399b5e1e56)
- https://huggingface.co/api/datasets/Reallm-Labs/android_control_test (retrieved 2026-11-09T05:25:45Z; SHA-256 47b43c2c9249af946be4c46c979934d7b4765a60f4191538f5f1fb399b5e1e56)
- https://huggingface.co/api/datasets/InfiX-ai/android_control_test (retrieved 2026-11-09T05:25:46Z; SHA-256 47b43c2c9249af946be4c46c979934d7b4765a60f4191538f5f1fb399b5e1e56)

---

## AndroidCode

HTML and annotation release used for Code2World’s action-conditioned GUI-state prediction training, constructed from mobile GUI trajectories.

- Catalog URL: https://awesomecua.com/resources/url-cf4d2d45a7314cb16acb/
- Original source: https://huggingface.co/datasets/GD-ML/AndroidCode
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: world-models, data-generation, screen-understanding
- Evidence checked: 2026-10-18T04:27:14Z
- ID: url:cf4d2d45a7314cb16acb

### Limitations

The Hub card is license-only; semantic description and reported scale come from the official Code2World README. The public manifest contains HTML files, Android-Control train/test JSON files and extraction/loading scripts. The public manifest lists HTML files, Android-Control train/test JSON files and scripts; standalone screenshot image files are absent from that listing, and embedded/reference image packaging is unspecified. MIT is the data-card declaration, not a grant for every upstream source dataset.

- Record JSON: https://awesomecua.com/resources/url-cf4d2d45a7314cb16acb/record.json

### Structured profile

- Formats: HTML, JSON, Python extraction/loading scripts
- Modalities: GUI screenshots (described input), GUI actions, HTML
- Splits: Android-Control train file, Android-Control test file
- Supervision: action-conditioned next-state code prediction, generated HTML supervision

#### Count observations

- > 80,000 screen–action pairs — AndroidCode corpus described by Code2World README; the released JSON-row count remains unverified. (reported; source: https://raw.githubusercontent.com/AMAP-ML/Code2World/HEAD/readme.md)

The manifest lists 58,953 HTML files; the >80k reported pairs use a different unit. The reported >80k pairs and the HTML-file inventory have different units. The card supplies neither a sample schema nor a count; archive/image completeness and JSON contents remain unverified.

### License declarations

- code: not recorded
- data: MIT — https://huggingface.co/datasets/GD-ML/AndroidCode/raw/af316a6be79bbe08c4fc09ea588b5f80f177ed25/README.md
- document: not recorded
- weights: not recorded

- data review: Publisher dataset-card declaration for this release.
  Sources: https://huggingface.co/datasets/GD-ML/AndroidCode/raw/af316a6be79bbe08c4fc09ea588b5f80f177ed25/README.md

### Primary evidence

- https://raw.githubusercontent.com/AMAP-ML/Code2World/HEAD/readme.md (retrieved 2026-10-18T04:27:14Z; SHA-256 26c14a14166d3b747454d1924ecdf6d96652ac857ae6ad488630dc843036a777)
- https://huggingface.co/api/datasets/GD-ML/AndroidCode (retrieved 2026-10-18T04:33:22Z; SHA-256 5774a3c096264fbba58b7a16587ea65f35628edb9ca39afe8a32c74ec7fd1ce7)
- https://huggingface.co/datasets/GD-ML/AndroidCode/raw/af316a6be79bbe08c4fc09ea588b5f80f177ed25/README.md (retrieved 2026-10-18T04:35:17Z; SHA-256 d8d7a46d41a1a37fe4f0a5f637bf55c649310185329127d8a2204632e480be17)

---

## Aria-UI Context-aware Data

Episode-based mobile GUI grounding data released with Aria-UI for incorporating interaction history into target localization.

- Catalog URL: https://awesomecua.com/resources/url-07b65dc937756ddff4a1/
- Original source: https://huggingface.co/datasets/Aria-UI/Aria-UI_Context-aware_Data
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: grounding, memory
- Evidence checked: 2026-10-16T11:11:53Z
- ID: url:07b65dc937756ddff4a1

### Limitations

The publisher reports approximately 992K instruction-output pairs in its repository. The Hub card contains a license declaration; schema quality and exact sample counts remain unverified.

- Record JSON: https://awesomecua.com/resources/url-07b65dc937756ddff4a1/record.json

### Structured profile

- Formats: not recorded
- Modalities: screen observations, instructions, interaction history
- Splits: not recorded
- Supervision: context-aware grounding

#### Count observations

- ≈ 992,000 instruction-output pairs — context-aware episode training release (reported; source: https://raw.githubusercontent.com/AriaUI/Aria-UI/HEAD/README.md)

The Hub card contains only licensing metadata. The project README supports the episode-training description and rounded count; archive-level quality and exact row counts remain unverified.

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/Aria-UI/Aria-UI_Context-aware_Data
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/Aria-UI/Aria-UI_Context-aware_Data (retrieved 2026-10-16T11:11:53Z; SHA-256 79f91aab71bb8a0ec3ad9859cbc42d70227e01db729ec80dc5690b466b259cad)
- https://raw.githubusercontent.com/AriaUI/Aria-UI/HEAD/README.md (retrieved 2026-10-16T06:36:00Z; SHA-256 a2a3c5ad115e4e2109b56686c9e0b073bcfec6d9f052a58bc92683af44933480)
- https://huggingface.co/api/datasets/Aria-UI/Aria-UI_Context-aware_Data (retrieved 2026-10-16T11:11:53Z; SHA-256 79f91aab71bb8a0ec3ad9859cbc42d70227e01db729ec80dc5690b466b259cad)

---

## Aria-UI Data

GUI element descriptions and grounding instructions spanning web, mobile, and Ubuntu desktop interfaces.

- Catalog URL: https://awesomecua.com/resources/url-f8566bd0394d36ed4f8e/
- Original source: https://huggingface.co/datasets/Aria-UI/Aria-UI_Data
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web, android, desktop, linux
- Topics: grounding, screen-understanding
- Evidence checked: 2026-10-16T10:42:13Z
- ID: url:f8566bd0394d36ed4f8e

### Limitations

The publisher flags original desktop files as deprecated because of screenshot-mapping issues, and identifies corrected versions in the dataset card.

- Record JSON: https://awesomecua.com/resources/url-f8566bd0394d36ed4f8e/record.json

### Structured profile

- Formats: JSON annotations, image archives
- Modalities: screenshots, instructions, element captions
- Splits: not recorded
- Supervision: element grounding, element descriptions

#### Count observations

- ≈ 2,900,000 instructions — web subset (reported; source: https://huggingface.co/datasets/Aria-UI/Aria-UI_Data/raw/main/README.md)
- ≈ 173,000 images — web subset (reported; source: https://huggingface.co/datasets/Aria-UI/Aria-UI_Data/raw/main/README.md)
- ≈ 1,100,000 instructions — mobile subset (reported; source: https://huggingface.co/datasets/Aria-UI/Aria-UI_Data/raw/main/README.md)
- ≈ 104,000 images — mobile subset (reported; source: https://huggingface.co/datasets/Aria-UI/Aria-UI_Data/raw/main/README.md)
- ≈ 150,000 instructions — desktop subset (reported; source: https://huggingface.co/datasets/Aria-UI/Aria-UI_Data/raw/main/README.md)
- ≈ 7,800 images — desktop subset (reported; source: https://huggingface.co/datasets/Aria-UI/Aria-UI_Data/raw/main/README.md)

The card identifies deprecated desktop files with screenshot-mapping errors and names corrected releases. Counts are rounded publisher figures for separate platform subsets; instructions and images are different units.

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/Aria-UI/Aria-UI_Data/raw/main/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/Aria-UI/Aria-UI_Data/raw/main/README.md (retrieved 2026-10-16T10:42:13Z; SHA-256 8713ca2a6b1962d5dce7da132e1135898d467053dc6b53b4463a0d43a6433bcb)
- https://huggingface.co/datasets/Aria-UI/Aria-UI_Data/raw/main/README.md (retrieved 2026-10-16T10:42:13Z; SHA-256 8713ca2a6b1962d5dce7da132e1135898d467053dc6b53b4463a0d43a6433bcb)

---

## AssistantBench

AssistantBench tasks on Hugging Face: realistic, time-consuming open-web questions in dev and test JSONL files, with answers, gold URLs and explanations in the dev rows. The paper reports 214 tasks.

- Catalog URL: https://awesomecua.com/resources/url-447997967beea3b07f6f/
- Original source: https://huggingface.co/datasets/AssistantBench/AssistantBench
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation
- Evidence checked: 2026-11-10T03:01:03Z
- ID: url:447997967beea3b07f6f

### Limitations

Two files, assistant_bench_v1.0_dev.jsonl and assistant_bench_v1.0_test.jsonl; dev rows carry task, answer, gold_url, explanation and difficulty fields. The card declares Apache-2.0, and the benchmark repository links a Hugging Face leaderboard for submissions.

- Record JSON: https://awesomecua.com/resources/url-447997967beea3b07f6f/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/AssistantBench/AssistantBench
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/AssistantBench/AssistantBench (retrieved 2026-11-10T03:01:03Z; SHA-256 c20c637d01ea35c22b59ea2ec06317fbebeb6b3b5793a999ce8053e8af9d1fb7)
- https://huggingface.co/api/datasets/AssistantBench/AssistantBench (retrieved 2026-11-10T03:01:03Z; SHA-256 c20c637d01ea35c22b59ea2ec06317fbebeb6b3b5793a999ce8053e8af9d1fb7)

---

## AutoGUI-v1-zip

A training data repository for AutoGUI containing an annotated GUI set and selected vision datasets, with instructions for merging their JSON files for fine-tuning.

- Catalog URL: https://awesomecua.com/resources/url-02370867dd4b96000a33/
- Original source: https://huggingface.co/datasets/WebAgent/AutoGUI-v1-zip
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: data-generation, screen-understanding
- Evidence checked: 2026-11-09T19:58:07Z
- ID: url:02370867dd4b96000a33

### Limitations

The repository lists JSON data and image archives. The card instructs users to adjust image paths and merge three JSON files for the AutoGUI training script. It declares a cc license.

- Record JSON: https://awesomecua.com/resources/url-02370867dd4b96000a33/record.json

### License declarations

- code: not recorded
- data: cc — https://huggingface.co/datasets/WebAgent/AutoGUI-v1-zip
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/WebAgent/AutoGUI-v1-zip (retrieved 2026-11-09T19:58:07Z; SHA-256 4650e1a432aba0ccc003c29d757bc6811edde1fa4573b9953efa3cded2a8bd55)
- https://huggingface.co/api/datasets/WebAgent/AutoGUI-v1-zip (retrieved 2026-11-09T19:58:07Z; SHA-256 4650e1a432aba0ccc003c29d757bc6811edde1fa4573b9953efa3cded2a8bd55)
- https://huggingface.co/api/datasets/WebAgent/AutoGUI-v1-zip (retrieved 2026-11-09T20:03:11Z; SHA-256 4650e1a432aba0ccc003c29d757bc6811edde1fa4573b9953efa3cded2a8bd55)
- https://huggingface.co/api/datasets/HongxinLi/AutoGUI-v1-zip (retrieved 2026-11-09T20:03:11Z; SHA-256 4650e1a432aba0ccc003c29d757bc6811edde1fa4573b9953efa3cded2a8bd55)

---

## BrowserART

A browser-agent safety dataset of 100 harmful browser-related behaviors, designed for red-team evaluation across real and synthetic websites.

- Catalog URL: https://awesomecua.com/resources/url-dec73112f4c2dad889cb/
- Original source: https://huggingface.co/datasets/ScaleAI/BrowserART
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: safety-security, evaluation, web-navigation
- Evidence checked: 2026-11-09T06:16:32Z
- ID: url:dec73112f4c2dad889cb

### Limitations

The repository file list includes a behavior CSV. The card says the synthetic websites' code is hosted separately on GitHub and declares a CC-BY-NC-4.0 license.

- Record JSON: https://awesomecua.com/resources/url-dec73112f4c2dad889cb/record.json

### License declarations

- code: not recorded
- data: cc-by-nc-4.0 — https://huggingface.co/datasets/ScaleAI/BrowserART
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/ScaleAI/BrowserART (retrieved 2026-11-09T06:16:32Z; SHA-256 854d13f5b05b7b0f7f96f0c2f6016dbe2ead826a4d6255574c323ad743b29ca2)
- https://huggingface.co/api/datasets/ScaleAI/BrowserART (retrieved 2026-11-09T06:16:32Z; SHA-256 854d13f5b05b7b0f7f96f0c2f6016dbe2ead826a4d6255574c323ad743b29ca2)

---

## CaptchaArena-Trajectories

Chain-of-thought computer-use trajectories on 20 interactive CAPTCHA types: 46,000 browser rollouts with step screenshots and click, drag, hold or type actions, kept only when the page verifier accepts.

- Catalog URL: https://awesomecua.com/resources/url-52067b3e48e9381e4c66/
- Original source: https://huggingface.co/datasets/ZHEN-04/CaptchaArena-Trajectories
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: imitation-learning, data-generation
- Evidence checked: 2026-11-10T03:01:03Z
- ID: url:52067b3e48e9381e4c66

### Limitations

Train and val splits hold 42,000 and 4,000 trajectories, expanded into 144,618 per-turn SFT samples with 169,945 PNG screenshots (about 50.9 GB). Access is gated with manual approval under CC-BY-NC-4.0; the 4,000 test puzzles sit in the separate CaptchaArena puzzle dataset.

- Record JSON: https://awesomecua.com/resources/url-52067b3e48e9381e4c66/record.json

### License declarations

- code: not recorded
- data: cc-by-nc-4.0 — https://huggingface.co/datasets/ZHEN-04/CaptchaArena-Trajectories
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/ZHEN-04/CaptchaArena-Trajectories?expand%5B%5D=cardData&expand%5B%5D=gated&expand%5B%5D=disabled&expand%5B%5D=tags (retrieved 2026-11-10T03:01:03Z; SHA-256 24c896e5df4852c97d768899db1c62734937394c8d6f3526321f4af181a05bc4)
- https://huggingface.co/api/datasets/ZHEN-04/CaptchaArena-Trajectories?expand%5B%5D=cardData&expand%5B%5D=gated&expand%5B%5D=disabled&expand%5B%5D=tags (retrieved 2026-11-10T03:01:03Z; SHA-256 24c896e5df4852c97d768899db1c62734937394c8d6f3526321f4af181a05bc4)

---

## Cie1/MMSearch-Plus

A dataset of 311 image-based tasks for evaluating multimodal browsing agents that use iterative image and text retrieval to answer questions.

- Catalog URL: https://awesomecua.com/resources/url-8fd4e25ae5c0fe619969/
- Original source: https://huggingface.co/datasets/Cie1/MMSearch-Plus
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation, screen-understanding
- Evidence checked: 2026-11-09T19:57:44Z
- ID: url:8fd4e25ae5c0fe619969

### Limitations

The card describes five Arrow shards, encrypted answers, and a decryption helper. It records corrections to two answer annotations and declares a CC BY 4.0 license.

- Record JSON: https://awesomecua.com/resources/url-8fd4e25ae5c0fe619969/record.json

### License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/Cie1/MMSearch-Plus
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/Cie1/MMSearch-Plus (retrieved 2026-11-09T19:57:44Z; SHA-256 bf8e8178e5ce2e31e7be679b0457b876cbcb99266eae43dddcb1ef933544d5d6)
- https://huggingface.co/api/datasets/Cie1/MMSearch-Plus (retrieved 2026-11-09T19:57:44Z; SHA-256 bf8e8178e5ce2e31e7be679b0457b876cbcb99266eae43dddcb1ef933544d5d6)

---

## ClawBench

A browser-agent task corpus for everyday work on live websites, with V1 and V2 test splits, task context, and schemas that intercept final submissions.

- Catalog URL: https://awesomecua.com/resources/url-9c96a767b56ba0eb4494/
- Original source: https://huggingface.co/datasets/TIGER-Lab/ClawBench
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, evaluation, safety-security, workflow
- Evidence checked: 2026-11-09T05:05:16Z
- ID: url:9c96a767b56ba0eb4494

### Limitations

The card documents Parquet test splits, supplementary JSON files, a leaderboard file, and separate companion trace datasets. It declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-9c96a767b56ba0eb4494/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/TIGER-Lab/ClawBench
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/TIGER-Lab/ClawBench (retrieved 2026-11-09T05:05:16Z; SHA-256 9cddcd7abe86f5a70c1ebb61bd46521e5c67fa04e147fce9f1134f25f59de997)
- https://huggingface.co/api/datasets/TIGER-Lab/ClawBench (retrieved 2026-11-09T05:05:16Z; SHA-256 9cddcd7abe86f5a70c1ebb61bd46521e5c67fa04e147fce9f1134f25f59de997)

---

## ClawBenchV2Trace

Raw execution traces of browser-agent runs on the 130-task ClawBench V2 set, each with a screen recording, network capture, browser action stream, agent reasoning, the intercepted final request and a judge verdict.

- Catalog URL: https://awesomecua.com/resources/url-3452cef2f99d7de2935a/
- Original source: https://huggingface.co/datasets/TIGER-Lab/ClawBenchV2Trace
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation, observability
- Evidence checked: 2026-11-10T03:01:05Z
- ID: url:3452cef2f99d7de2935a

### Limitations

As of 2026-05-12 the card lists 806 V2 runs from six models under the hermes harness, each run directory self-contained at about 10 to 15 MB. Scoring combines a per-task interception schema with an LLM judge; the card declares Apache-2.0, and V1 traces sit in NAIL-Group/ClawBenchV1Trace.

- Record JSON: https://awesomecua.com/resources/url-3452cef2f99d7de2935a/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/TIGER-Lab/ClawBenchV2Trace
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/TIGER-Lab/ClawBenchV2Trace (retrieved 2026-11-10T03:01:05Z; SHA-256 bea2ceb965a9a52fbc1df358a92e046afba55bb8b99295afa7cfbc87830e3c4f)
- https://huggingface.co/api/datasets/TIGER-Lab/ClawBenchV2Trace (retrieved 2026-11-10T03:01:05Z; SHA-256 bea2ceb965a9a52fbc1df358a92e046afba55bb8b99295afa7cfbc87830e3c4f)

---

## ClawGUI-Eval

GUI grounding evaluation data for six benchmarks, with images, prompts, and prior outputs for an inference, judging, and metrics workflow.

- Catalog URL: https://awesomecua.com/resources/url-e8cea6261ab19611ad23/
- Original source: https://huggingface.co/datasets/johnzqlu/clawgui-eval
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: evaluation, grounding
- Evidence checked: 2026-11-09T06:16:38Z
- ID: url:e8cea6261ab19611ad23

### Limitations

The repository lists image.zip, data.zip, and output.zip. The card says the archives contain benchmark images, data and prompts, and precomputed inference and judge results.

- Record JSON: https://awesomecua.com/resources/url-e8cea6261ab19611ad23/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/johnzqlu/clawgui-eval (retrieved 2026-11-09T06:16:38Z; SHA-256 2cf582665728f9ce157236b5f8e23dd4383568325e62e2d8a809214bff313ac3)
- https://huggingface.co/api/datasets/johnzqlu/clawgui-eval (retrieved 2026-11-09T06:16:38Z; SHA-256 2cf582665728f9ce157236b5f8e23dd4383568325e62e2d8a809214bff313ac3)

---

## CognitiveKernel-Pro-Query

CognitiveKernel-Pro-Query holds the training queries generated for Cognitive Kernel-Pro: multi-hop URLQA and hint-annotated AgentWebQA in JSONL, used to sample web agent trajectories.

- Catalog URL: https://awesomecua.com/resources/url-2304547d5025246abbe4/
- Original source: https://huggingface.co/datasets/CognitiveKernel/CognitiveKernel-Pro-Query
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: data-generation, web-navigation
- Evidence checked: 2026-11-10T06:29:31Z
- ID: url:2304547d5025246abbe4

### Limitations

Files are urlqa.jsonl (Section 3.2 of the paper) and agentwebqa_hint.jsonl (Section 3.3); the card also names queries reused from WebWalkerQA and other sets. Custom cognitive-kernel-pro license.

- Record JSON: https://awesomecua.com/resources/url-2304547d5025246abbe4/record.json

### License declarations

- code: not recorded
- data: other — https://huggingface.co/datasets/CognitiveKernel/CognitiveKernel-Pro-Query
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/CognitiveKernel/CognitiveKernel-Pro-Query (retrieved 2026-11-10T06:29:31Z; SHA-256 538f06629296adf6b3546ea67a26670eeb04b628b8e7e7e08d8a8fe56623063d)
- https://huggingface.co/api/datasets/CognitiveKernel/CognitiveKernel-Pro-Query (retrieved 2026-11-10T06:29:31Z; SHA-256 538f06629296adf6b3546ea67a26670eeb04b628b8e7e7e08d8a8fe56623063d)

---

## CognitiveKernel-Pro-SFT

CognitiveKernel-Pro-SFT contains rejection-sampled GPT-4.1 trajectories for fine-tuning Cognitive Kernel-Pro agents, from URLQA web queries, DocBench, TableBench and a WebWalkerQA subset.

- Catalog URL: https://awesomecua.com/resources/url-7c431ccb1d5dc1f035d8/
- Original source: https://huggingface.co/datasets/CognitiveKernel/CognitiveKernel-Pro-SFT
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: data-generation, web-navigation, imitation-learning
- Evidence checked: 2026-11-10T06:29:31Z
- ID: url:7c431ccb1d5dc1f035d8

### Limitations

Four JSONL files: ck-pro-web, docbench, tablebench and webwalker_subset SFT data. Custom cognitive-kernel-pro license.

- Record JSON: https://awesomecua.com/resources/url-7c431ccb1d5dc1f035d8/record.json

### License declarations

- code: not recorded
- data: other — https://huggingface.co/datasets/CognitiveKernel/CognitiveKernel-Pro-SFT
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/CognitiveKernel/CognitiveKernel-Pro-SFT (retrieved 2026-11-10T06:29:31Z; SHA-256 8c494a616c08cab5ddd2447adf9f6f004b4f71397d36950a58980b1563db2e2f)
- https://huggingface.co/api/datasets/CognitiveKernel/CognitiveKernel-Pro-SFT (retrieved 2026-11-10T06:29:31Z; SHA-256 8c494a616c08cab5ddd2447adf9f6f004b4f71397d36950a58980b1563db2e2f)

---

## ConClick-Data

ConClick-Data provides screenshot grounding examples with target coordinates and distractor boxes, released as JSONL files for training.

- Catalog URL: https://awesomecua.com/resources/url-bf416a816f74718f94dd/
- Original source: https://huggingface.co/datasets/ruotian/ConClick-Data
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, data-generation, screen-understanding
- Evidence checked: 2026-11-09T19:56:15Z
- ID: url:bf416a816f74718f94dd

### Limitations

The card describes separate target–distractor and ordinary grounding files derived from Click-100k. It says screenshots retain their upstream source terms.

- Record JSON: https://awesomecua.com/resources/url-bf416a816f74718f94dd/record.json

### License declarations

- code: not recorded
- data: other — https://huggingface.co/datasets/ruotian/ConClick-Data
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/ruotian/ConClick-Data (retrieved 2026-11-09T19:56:15Z; SHA-256 9954accff9c056352ccca18dbc315c2bfe43f0baa16c37f3d5e671f8dcef9693)
- https://huggingface.co/api/datasets/ruotian/ConClick-Data (retrieved 2026-11-09T19:56:15Z; SHA-256 9954accff9c056352ccca18dbc315c2bfe43f0baa16c37f3d5e671f8dcef9693)

---

## DeskForge-1M

A desktop GUI dataset with screenshots, element annotations, and action records, released with training, validation, and varied application, theme, and resolution test splits.

- Catalog URL: https://awesomecua.com/resources/url-e555cae98afb22876f3b/
- Original source: https://huggingface.co/datasets/docling-project/DeskForge-1M
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop
- Topics: grounding, screen-understanding, data-generation, evaluation
- Evidence checked: 2026-11-09T21:08:47Z
- ID: url:e555cae98afb22876f3b

### Limitations

The card lists WebDataset tar shards and a transitions preview with before and after images. It declares the MIT license.

- Record JSON: https://awesomecua.com/resources/url-e555cae98afb22876f3b/record.json

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/docling-project/DeskForge-1M
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/docling-project/DeskForge-1M (retrieved 2026-11-09T21:08:47Z; SHA-256 eccb46263cdbea3615ea6d0ad1dad966217d935c7c2e42f3306c0d03168dd94c)
- https://huggingface.co/api/datasets/docling-project/DeskForge-1M (retrieved 2026-11-09T21:08:47Z; SHA-256 eccb46263cdbea3615ea6d0ad1dad966217d935c7c2e42f3306c0d03168dd94c)

---

## DroidCall data

Instruction-to-function-call examples for learning Android intent invocation, with training, testing and API-annotation files for mobile task execution.

- Catalog URL: https://awesomecua.com/resources/url-ae8f5208eea9e7f1f606/
- Original source: https://huggingface.co/datasets/mllmTeam/DroidCall
- Kind: dataset
- Review: curated
- Scope: adjacent
- Environments: android
- Topics: mobile-navigation, tool-integration, data-generation
- Evidence checked: 2026-10-17T02:02:28Z
- ID: url:ae8f5208eea9e7f1f606

### Limitations

The release provides JSONL data and API annotations. This is Android intent-calling supervision, marked adjacent to screenshot-and-click trajectories. The dataset card declares Apache-2.0; the companion repository’s MIT code license is a separate declaration.

- Record JSON: https://awesomecua.com/resources/url-ae8f5208eea9e7f1f606/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/mllmTeam/DroidCall/raw/main/README.md
- document: not recorded
- weights: not recorded

- data review: The Hub dataset card declares Apache-2.0 in its metadata header (license: apache-2.0). The companion repository's MIT code license is a separate declaration.
  Sources: https://huggingface.co/datasets/mllmTeam/DroidCall/raw/main/README.md

### Primary evidence

- https://huggingface.co/datasets/mllmTeam/DroidCall/raw/main/README.md (retrieved 2026-10-17T02:02:28Z; SHA-256 08a6c5cfa655e1ecd774a41a9a815e845ad0afd47b289378bc1d6ee66c81dda9)
- https://huggingface.co/api/datasets/mllmTeam/DroidCall (retrieved 2026-10-17T02:02:28Z; SHA-256 c7804987d56b03314a4c48e3ddf2e5819fc0d9c83cc65ba54a981a2f4a584dd9)

---

## ExACT-VWA

Post-processed R-MCTS and GPT-4o agent trajectories collected on VisualWebArena, stored as context and response pairs with domain and task metadata; part of the set was used to fine-tune GPT-4o.

- Catalog URL: https://awesomecua.com/resources/url-792920a5f64df66d34d7/
- Original source: https://huggingface.co/datasets/Columbia-NLP/ExACT-VWA
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, planning, imitation-learning
- Evidence checked: 2026-11-10T06:29:27Z
- ID: url:792920a5f64df66d34d7

### Limitations

One parquet train split of 176 examples; fields are a context message list, a response string and metadata with domain, source and task_id. The card states no license.

- Record JSON: https://awesomecua.com/resources/url-792920a5f64df66d34d7/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/Columbia-NLP/ExACT-VWA (retrieved 2026-11-10T06:29:27Z; SHA-256 05f511ce57c9320391e448d4371894807852b6ee6df1de19212e6625823c750c)
- https://huggingface.co/api/datasets/Columbia-NLP/ExACT-VWA (retrieved 2026-11-10T06:29:27Z; SHA-256 05f511ce57c9320391e448d4371894807852b6ee6df1de19212e6625823c750c)

---

## Fanbin/waa_steve_trajectories

A dataset of STEVE-R1 evaluation trajectories on WindowsAgentArena, pairing task screenshots and agent responses with action traces and outcome labels.

- Catalog URL: https://awesomecua.com/resources/url-2bab4b78c81cde1d5ecb/
- Original source: https://huggingface.co/datasets/Fanbin/waa_steve_trajectories
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, windows
- Topics: evaluation, interaction-history, data-generation
- Evidence checked: 2026-11-09T05:05:12Z
- ID: url:2bab4b78c81cde1d5ecb

### Limitations

The card describes 16 zip files covering experiments on 154 tasks and 37K action steps. Each trajectory includes screenshots, plan responses, traj.jsonl, and result.txt.

- Record JSON: https://awesomecua.com/resources/url-2bab4b78c81cde1d5ecb/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/Fanbin/waa_steve_trajectories (retrieved 2026-11-09T05:05:12Z; SHA-256 53118f052a6bc8860aabd4c8fb43a7a47f16799a959406df31ab5c48af5986f8)
- https://huggingface.co/api/datasets/Fanbin/waa_steve_trajectories (retrieved 2026-11-09T05:05:12Z; SHA-256 53118f052a6bc8860aabd4c8fb43a7a47f16799a959406df31ab5c48af5986f8)

---

## gameworld-qwen38-flash-next-trajectory

A dataset of 1,020 GameWorld agent trajectories from general and computer-use interfaces, with step records, screenshots, outcomes, and metrics.

- Catalog URL: https://awesomecua.com/resources/url-e3c3e5a5a00f024ebac5/
- Original source: https://huggingface.co/datasets/yyyang/gameworld-qwen38-flash-next-trajectory
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: evaluation, interaction-history, data-generation
- Evidence checked: 2026-11-09T21:08:40Z
- ID: url:e3c3e5a5a00f024ebac5

### Limitations

The card describes six trajectory archives, each with 170 runs, plus examples for inspecting individual steps. It identifies the benchmark protocol as fine-control-2026-08.

- Record JSON: https://awesomecua.com/resources/url-e3c3e5a5a00f024ebac5/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/yyyang/gameworld-qwen38-flash-next-trajectory (retrieved 2026-11-09T21:08:40Z; SHA-256 27b8969cd119cb939d2eb21921a0f1d62117b65007556317a79e418300b69dee)
- https://huggingface.co/api/datasets/yyyang/gameworld-qwen38-flash-next-trajectory (retrieved 2026-11-09T21:08:40Z; SHA-256 27b8969cd119cb939d2eb21921a0f1d62117b65007556317a79e418300b69dee)
- https://huggingface.co/api/datasets/yyyang/gameworld-qwen38-flash-next-trajectory (retrieved 2026-11-09T21:12:44Z; SHA-256 27b8969cd119cb939d2eb21921a0f1d62117b65007556317a79e418300b69dee)
- https://huggingface.co/api/datasets/yyyang/gameworld-benchmark-trajectories (retrieved 2026-11-09T21:12:44Z; SHA-256 27b8969cd119cb939d2eb21921a0f1d62117b65007556317a79e418300b69dee)

---

## Gelato OS-World agent trajectories

Gelato-30B-A3B and GTA1-32B OS-World agent runs, three trials each in the same GPT-5-planned GTA1.5-based harness, with per-task trajectories, initial and step screenshots, and automated results.

- Catalog URL: https://awesomecua.com/resources/url-aed610c413d6bb9f1caa/
- Original source: https://huggingface.co/datasets/mlfoundations/gelato-osworld-agent-trajectories
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop
- Topics: evaluation, observability
- Evidence checked: 2026-10-18T15:37:17Z
- ID: url:aed610c413d6bb9f1caa

### Limitations

The dataset card holds only license metadata; the description and scope come from the official Gelato README, which says this repository provides all of the agent's OS-World trajectories from runs on a fixed OS-World snapshot with GPT-5 as planner and a 50-step limit. The file list also holds the GTA1-32B baseline runs from the same harness, which the README compares as separate baseline material. The README reports 58.71 ± 0.66% automated and 61.85 ± 0.79% human-corrected success for Gelato-30B-A3B, against 56.97 ± 1.47% and 59.47 ± 1.27% for GTA1-32B. The GitHub repository has no license file; MIT is the dataset card's declaration.

- Record JSON: https://awesomecua.com/resources/url-aed610c413d6bb9f1caa/record.json

### Structured profile

- Formats: JSONL, PNG, plain text
- Modalities: screenshots, action trajectories, task results
- Splits: not recorded
- Supervision: agent-generated trajectories, automated task results

#### Count observations

- 2,166 task trajectory directories with traj.jsonl — six run directories at Hub revision b9495a8e (computed) (computed; source: https://huggingface.co/api/datasets/mlfoundations/gelato-osworld-agent-trajectories/revision/b9495a8eca361b16d564e62cc0041ed3aecef618)
- 6 run directories — gelato-30b/run_1-3 and gta1-32b_baseline/run_1-3 at Hub revision b9495a8e (computed) (computed; source: https://huggingface.co/api/datasets/mlfoundations/gelato-osworld-agent-trajectories/revision/b9495a8eca361b16d564e62cc0041ed3aecef618)
- 361 distinct OS-World tasks — each run directory at Hub revision b9495a8e (the same task set in all six) (computed) (computed; source: https://huggingface.co/api/datasets/mlfoundations/gelato-osworld-agent-trajectories/revision/b9495a8eca361b16d564e62cc0041ed3aecef618)
- 34,598 PNG screenshots — six run directories at Hub revision b9495a8e (computed) (computed; source: https://huggingface.co/api/datasets/mlfoundations/gelato-osworld-agent-trajectories/revision/b9495a8eca361b16d564e62cc0041ed3aecef618)

Counts come from a script over the pinned Hub file list. Every task directory holds traj.jsonl, result.txt, an initial screenshot and step screenshots; the 361 tasks span 10 OS-World domain folders. Results are the automated evaluation; the README's human re-check of 20 tasks lives in the GitHub repository. Directories, tasks and screenshots are different units and are counted separately.

### License declarations

- code: not recorded
- data: MIT — https://huggingface.co/datasets/mlfoundations/gelato-osworld-agent-trajectories/raw/b9495a8eca361b16d564e62cc0041ed3aecef618/README.md
- document: not recorded
- weights: not recorded

- data review: Dataset-card metadata declaration (license: mit) for this release; the card contains only that metadata.
  Sources: https://huggingface.co/datasets/mlfoundations/gelato-osworld-agent-trajectories/raw/b9495a8eca361b16d564e62cc0041ed3aecef618/README.md

### Primary evidence

- https://raw.githubusercontent.com/mlfoundations/Gelato/2a8757d473a63d34f71b043192d08dad61d298ee/README.md (retrieved 2026-10-18T15:37:17Z; SHA-256 437eb06553ed6d63d871d18842906b26b6148db5b0a5489064736ef6f5f0cfcf)
- https://huggingface.co/api/datasets/mlfoundations/gelato-osworld-agent-trajectories/revision/b9495a8eca361b16d564e62cc0041ed3aecef618 (retrieved 2026-10-18T15:36:09Z; SHA-256 218daeb50d48f98a41b69b9eae6ef3bb7676b6a1da223574cbf3348490878c6f)
- https://huggingface.co/datasets/mlfoundations/gelato-osworld-agent-trajectories/raw/b9495a8eca361b16d564e62cc0041ed3aecef618/README.md (retrieved 2026-10-18T15:36:09Z; SHA-256 d8d7a46d41a1a37fe4f0a5f637bf55c649310185329127d8a2204632e480be17)

---

## Go-Browse-WA processed data

Flattened web-interaction training records with accessibility-tree observations, assistant completions, trajectory rewards and step-link metadata.

- Catalog URL: https://awesomecua.com/resources/url-a13a187bc058fbb4f6af/
- Original source: https://huggingface.co/datasets/apurvaga/go-browse-wa
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, imitation-learning
- Evidence checked: 2026-10-17T02:44:50Z
- ID: url:a13a187bc058fbb4f6af

### Limitations

The public release contains nine Parquet shards. The short card supplies schema and split metadata but no license declaration; the official README describes successful and unsuccessful trajectories processed for fine-tuning. The raw screenshot/HTML corpus is a separate release.

- Record JSON: https://awesomecua.com/resources/url-a13a187bc058fbb4f6af/record.json

### Structured profile

- Formats: Parquet
- Modalities: text, accessibility-tree observations, actions
- Splits: train
- Supervision: action completion, trajectory outcome

#### Count observations

- 164,533 step records — train split (reported; source: https://huggingface.co/datasets/apurvaga/go-browse-wa/raw/main/README.md)

The card count is flattened step records. Both successful and unsuccessful trajectories are included according to the project README; no license is declared.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/apurvaga/go-browse-wa (retrieved 2026-10-17T02:44:50Z; SHA-256 494f4ac9ab9e94831dcf768be001b7284e30e00704674358baf3bb2060344361)
- https://huggingface.co/datasets/apurvaga/go-browse-wa/raw/main/README.md (retrieved 2026-10-17T02:44:50Z; SHA-256 18ab64833acf31113a83b2463359f1c7e37c4aaabfe11c33db2ba3e7d32818c6)
- https://raw.githubusercontent.com/ApGa/Go-Browse/HEAD/README.md (retrieved 2026-10-17T02:44:04Z; SHA-256 0d4b28c993ccb977c7910ff3fecb5de29db364a7a7ad55523c8e052c9bae2566)
- https://huggingface.co/api/datasets/apurvaga/go-browse-wa (retrieved 2026-10-17T02:44:50Z; SHA-256 494f4ac9ab9e94831dcf768be001b7284e30e00704674358baf3bb2060344361)

---

## go-browse-wa-raw

go-browse-wa-raw is a browser-agent trajectory dataset with page observations, actions, goals, rewards, and images. Its train split contains 196462 examples.

- Catalog URL: https://awesomecua.com/resources/url-edb0eadcc3df5559e941/
- Original source: https://huggingface.co/datasets/apurvaga/go-browse-wa-raw
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, evaluation, interaction-history
- Evidence checked: 2026-11-09T05:04:58Z
- ID: url:edb0eadcc3df5559e941

### Limitations

The schema includes accessibility-tree text, pruned HTML, action errors, thoughts, success flags, and PNG images. The source defines a train split stored in data/train-* files.

- Record JSON: https://awesomecua.com/resources/url-edb0eadcc3df5559e941/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/apurvaga/go-browse-wa-raw (retrieved 2026-11-09T05:04:58Z; SHA-256 833d1bf1a46a112e48dd81f4ec0604052879a3f037a00903e2236fb66f7c462b)
- https://huggingface.co/api/datasets/apurvaga/go-browse-wa-raw (retrieved 2026-11-09T05:04:58Z; SHA-256 833d1bf1a46a112e48dd81f4ec0604052879a3f037a00903e2236fb66f7c462b)

---

## GroundGUI RL Dataset

Desktop grounding prompts selected from GroundCUA and formatted for click-based reinforcement learning with target-box rewards.

- Catalog URL: https://awesomecua.com/resources/url-4e71dc456c4112eed727/
- Original source: https://huggingface.co/datasets/PrentisAI/GroundGUI_RL
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop
- Topics: grounding, reinforcement-learning, data-generation
- Evidence checked: 2026-10-17T01:48:10Z
- ID: url:4e71dc456c4112eed727

### Limitations

The card declares MIT and attributes the source examples to GroundCUA.

- Record JSON: https://awesomecua.com/resources/url-4e71dc456c4112eed727/record.json

### Structured profile

- Formats: Parquet
- Modalities: screenshots, text, coordinates
- Splits: train
- Supervision: instruction-to-click grounding, target bounding boxes

#### Count observations

- 12,600 prompts — RL training corpus (reported; source: https://huggingface.co/datasets/PrentisAI/GroundGUI_RL/raw/main/README.md)
- 11,205 screenshots — RL training corpus (reported; source: https://huggingface.co/datasets/PrentisAI/GroundGUI_RL/raw/main/README.md)
- 87 desktop applications — RL training corpus (reported; source: https://huggingface.co/datasets/PrentisAI/GroundGUI_RL/raw/main/README.md)

Publisher-reported counts cover a selection and reformatting of GroundCUA. No independent image-overlap audit was performed.

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/PrentisAI/GroundGUI_RL/raw/main/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/PrentisAI/GroundGUI_RL/raw/main/README.md (retrieved 2026-10-17T01:48:10Z; SHA-256 34f0025f686d0e48e2baa5244056a4362018aaad77ac54abea7f1f6eb25c4276)
- https://huggingface.co/datasets/PrentisAI/GroundGUI_RL/raw/main/README.md (retrieved 2026-10-17T01:48:10Z; SHA-256 34f0025f686d0e48e2baa5244056a4362018aaad77ac54abea7f1f6eb25c4276)

---

## Grounding-Anything-GUI

The public training archive linked by the Phi-Ground project for its Phi-Ground-Any model.

- Catalog URL: https://awesomecua.com/resources/url-d1830de02226155ee16d/
- Original source: https://huggingface.co/datasets/Miaosen/Grounding-Anything-GUI
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, data-generation
- Evidence checked: 2026-10-17T02:42:32Z
- ID: url:d1830de02226155ee16d

### Limitations

The Hub exposes train.zip and a card containing only license/language metadata. The official repository marks this training-data release complete, but its Phi-Ground-Any paper is still pending. No binding to the earlier Phi-Ground paper, sample count, split structure or operating-system coverage is inferred.

- Record JSON: https://awesomecua.com/resources/url-d1830de02226155ee16d/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/Miaosen/Grounding-Anything-GUI
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/Miaosen/Grounding-Anything-GUI (retrieved 2026-10-17T02:42:32Z; SHA-256 c64f72eae3dd50d28996f99ab744a5093896e8bb29caa6f7b33a2f60a0b530a5)
- https://huggingface.co/datasets/Miaosen/Grounding-Anything-GUI/raw/main/README.md (retrieved 2026-10-17T02:42:32Z; SHA-256 31b964cfd198f99491f0f480024b2322fbdf3a237f7806847e83978109bc5856)
- https://raw.githubusercontent.com/microsoft/Phi-Ground/HEAD/README.md (retrieved 2026-10-16T06:36:00Z; SHA-256 a0609394a736dc495d077cd57a2945b018123e5b3f9514d7d5bafb9e690aeae2)
- https://huggingface.co/api/datasets/Miaosen/Grounding-Anything-GUI (retrieved 2026-10-17T02:42:32Z; SHA-256 c64f72eae3dd50d28996f99ab744a5093896e8bb29caa6f7b33a2f60a0b530a5)

---

## GUI-Dense-Descriptions

A dataset of GUI screenshots paired with dense text descriptions, released as a train split containing 1,263 image-text examples.

- Catalog URL: https://awesomecua.com/resources/url-fd24a394359c59b35c71/
- Original source: https://huggingface.co/datasets/Agent-Eval-Refine/GUI-Dense-Descriptions
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: screen-understanding, data-generation
- Evidence checked: 2026-11-09T06:16:32Z
- ID: url:fd24a394359c59b35c71

### Limitations

The card lists image and string text fields in a train split. The repository file list includes a Parquet data file.

- Record JSON: https://awesomecua.com/resources/url-fd24a394359c59b35c71/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/Agent-Eval-Refine/GUI-Dense-Descriptions (retrieved 2026-11-09T06:16:32Z; SHA-256 bdb1aa3804c30607563e9f1eaadceb9fbe1369158dd50f86e2a5e5953db8a6a9)
- https://huggingface.co/api/datasets/Agent-Eval-Refine/GUI-Dense-Descriptions (retrieved 2026-11-09T06:16:32Z; SHA-256 bdb1aa3804c30607563e9f1eaadceb9fbe1369158dd50f86e2a5e5953db8a6a9)

---

## GUI-Lasagne L1

The published GUI-Lasagne training-data collection used for SpiritSight, distributed as dated archive shards for visual interface learning.

- Catalog URL: https://awesomecua.com/resources/url-0c5659ca9e59d942aea3/
- Original source: https://huggingface.co/datasets/SenseLLM/GUI-Lasagne-L1
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, screen-understanding, data-generation
- Evidence checked: 2026-10-17T02:02:28Z
- ID: url:0c5659ca9e59d942aea3

### Limitations

Public archive shards are present. The dataset card declares Apache-2.0; it does not resolve rights in third-party interface content. The short card supplies no reliable sample count or explicit train/test partition, so these remain unspecified. An associated SpiritSight model card still describes dataset release as forthcoming; the independent dataset card and public archive manifest establish this release's availability.

- Record JSON: https://awesomecua.com/resources/url-0c5659ca9e59d942aea3/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/SenseLLM/GUI-Lasagne-L1/raw/main/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/SenseLLM/GUI-Lasagne-L1/raw/main/README.md (retrieved 2026-10-17T02:02:28Z; SHA-256 270b3af0904a2a50d040948100a327458839dffa5083fc74bb030298f5ab3985)
- https://huggingface.co/api/datasets/SenseLLM/GUI-Lasagne-L1 (retrieved 2026-10-17T02:02:28Z; SHA-256 224d6487de47cc63251c3b5c5c9f6e75e692b5ef0e12f0a7f71000da0b866e6f)
- https://huggingface.co/SenseLLM/SpiritSight-Agent-8B/raw/main/README.md (retrieved 2026-10-17T02:02:28Z; SHA-256 916bde91ff00aba22ff13ed3d8b4ca679bc8c198632f1d3bc9469660287cb5d3)
- https://huggingface.co/datasets/SenseLLM/GUI-Lasagne-L1/raw/main/README.md (retrieved 2026-10-17T02:02:28Z; SHA-256 270b3af0904a2a50d040948100a327458839dffa5083fc74bb030298f5ab3985)

---

## GUI-SD-data

Training data for GUI-SD, an on-policy self-distillation method for GUI grounding, with about 6.99k screenshots and a JSONL annotation file read by the GUI-SD training scripts.

- Catalog URL: https://awesomecua.com/resources/url-1a495ecc8b0d73e04308/
- Original source: https://huggingface.co/datasets/yankie123/GUI-SD-data
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding
- Evidence checked: 2026-11-10T03:01:01Z
- ID: url:1a495ecc8b0d73e04308

### Limitations

The repository holds an images/ folder of PNG screenshots and anno.jsonl in a single train split, with no dataset card or license. The GUI-SD repository's ms-swift training script loads the data through its --dataset argument.

- Record JSON: https://awesomecua.com/resources/url-1a495ecc8b0d73e04308/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/yankie123/GUI-SD-data (retrieved 2026-11-10T03:01:01Z; SHA-256 07aeef4c2b766ef4e95ec3aa6439c7060aadd9d046936aa197216da59cf8d67a)
- https://huggingface.co/api/datasets/yankie123/GUI-SD-data (retrieved 2026-11-10T03:01:01Z; SHA-256 07aeef4c2b766ef4e95ec3aa6439c7060aadd9d046936aa197216da59cf8d67a)

---

## GUI-World

GUI video benchmark and training data covering six scenarios, from Android and iOS to websites and XR, with eight question types for image and video LLMs and the GUI-Vid model.

- Catalog URL: https://awesomecua.com/resources/github-dongping-chen-gui-world/
- Original source: https://github.com/Dongping-Chen/GUI-World
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: video, screen-understanding
- Evidence checked: 2026-10-16T06:40:52Z
- ID: github:dongping-chen/gui-world

- Record JSON: https://awesomecua.com/resources/github-dongping-chen-gui-world/record.json

### Structured profile

- Formats: not recorded
- Modalities: videos, frame images, text
- Splits: train, test
- Supervision: GUI video question answering, temporal interface understanding

#### Count observations

- 6 GUI scenario categories — dataset taxonomy (reported; source: https://raw.githubusercontent.com/Dongping-Chen/GUI-World/master/Readme.md)
- 8 question types — dataset taxonomy (reported; source: https://raw.githubusercontent.com/Dongping-Chen/GUI-World/master/Readme.md)

Taxonomy counts describe coverage; video and question counts use different units. Cases include Android, iOS, desktop software, websites, multi-application use, and XR. Keyframe-selection settings affect evaluation.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://github.com/Dongping-Chen/GUI-World (retrieved 2026-10-16T06:40:52Z; SHA-256 d02fa5da3384a3e58cf1d28aad47497de73fe3aad0ce57219585da04fc3187ef)
- https://raw.githubusercontent.com/Dongping-Chen/GUI-World/master/Readme.md (retrieved 2026-10-17T02:03:23Z; SHA-256 905bf69ce80c866377841474cefe08f85ec4ef552cdd9ffeb2fb1531e07370b6)
- https://huggingface.co/datasets/ONE-Lab/GUI-World/raw/main/README.md (retrieved 2026-10-17T02:06:30Z; SHA-256 d2dd5886bce90f6eaee880719c79a6ede6ec0eaa08da32d7610bde656b8dc9ed)
- https://export.arxiv.org/api/query?id_list=2403.03186%2C2403.03788%2C2403.07718%2C2403.10170%2C2403.11905%2C2403.16971%2C2403.17918%2C2403.20271%2C2404.01549%2C2404.01744%2C2404.02475%2C2404.03648%2C2404.05427%2C2404.05719%2C2404.05955%2C2404.06474%2C2404.07972%2C2404.08755%2C2404.08860%2C2404.08948%2C2404.09992%2C2404.10887%2C2404.11459%2C2404.16006%2C2404.16048%2C2404.16054%2C2404.16660%2C2404.18074%2C2404.19296%2C2405.00516%2C2405.11120%2C2405.12842%2C2405.14573%2C2405.14751%2C2405.15793%2C2405.16247%2C2405.20309%2C2406.01014%2C2406.01623%2C2406.03679%2C2406.06947%2C2406.07822%2C2406.08184%2C2406.08340%2C2406.08451%2C2406.10227%2C2406.10819%2C2406.11317%2C2406.11896%2C2406.12373&max_results=50 (retrieved 2026-10-16T06:31:28Z; SHA-256 be244bfae7f89ef9449b69d85aac44295eb7b5f7e5e1bbedd76df312696676a7)

---

## GUI-World data

Hub release of GUI-World: GUI screen-recording videos from six scenarios (Android, iOS, website, software, multi-app and XR) with train and benchmark annotation JSONL for GUI-oriented video question answering.

- Catalog URL: https://awesomecua.com/resources/url-40ce19527f25bfa3bd63/
- Original source: https://huggingface.co/datasets/ONE-Lab/GUI-World
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform, android, ios, web
- Topics: video, screen-understanding, evaluation
- Evidence checked: 2026-10-18T11:41:24Z
- ID: url:40ce19527f25bfa3bd63

### Limitations

This is the Hub data release; the repository record github:dongping-chen/gui-world covers the evaluation and GUI-Vid code and case studies, and its README calls this dataset the canonical train and test release. The Hub API at revision 7901fa3f reports an ungated repository with 12 annotation JSONL files (benchmark and train for each scenario) and 12,379 MP4 or MOV video files in per-scenario folders. The card has no license metadata field; its License section states CC BY 4.0. The GUI-Vid checkpoint is a separate Hub model.

- Record JSON: https://awesomecua.com/resources/url-40ce19527f25bfa3bd63/record.json

### Structured profile

- Formats: MP4 and MOV video files, JSONL annotations
- Modalities: screen-recording videos, text annotations
- Splits: train, benchmark
- Supervision: GUI-oriented question-answer annotations

#### Count observations

- 12,379 video files — MP4 and MOV files in the Hub manifest at revision 7901fa3f (computed) (computed; source: https://huggingface.co/api/datasets/ONE-Lab/GUI-World)
- 12 annotation files — JSONL files under Annotation/benchmark and Annotation/train at revision 7901fa3f (computed) (computed; source: https://huggingface.co/api/datasets/ONE-Lab/GUI-World)
- 6 GUI scenario categories — dataset taxonomy (reported; source: https://huggingface.co/datasets/ONE-Lab/GUI-World/raw/7901fa3f0b9e36afa87d24ff9ecd48037c7fd6a0/README.md)
- 8 question types — dataset taxonomy (reported; source: https://huggingface.co/datasets/ONE-Lab/GUI-World/raw/7901fa3f0b9e36afa87d24ff9ecd48037c7fd6a0/README.md)

Video files were counted from the Hub file manifest; video, question and annotation counts use different units.

### License declarations

- code: not recorded
- data: CC-BY-4.0 — https://huggingface.co/datasets/ONE-Lab/GUI-World/raw/7901fa3f0b9e36afa87d24ff9ecd48037c7fd6a0/README.md
- document: not recorded
- weights: not recorded

- data review: The card states that the work is licensed under CC BY 4.0. The declaration is recorded in prose because enrich only extracts card metadata.
  Sources: https://huggingface.co/datasets/ONE-Lab/GUI-World/raw/7901fa3f0b9e36afa87d24ff9ecd48037c7fd6a0/README.md

### Primary evidence

- https://huggingface.co/datasets/ONE-Lab/GUI-World/raw/7901fa3f0b9e36afa87d24ff9ecd48037c7fd6a0/README.md (retrieved 2026-10-18T11:41:24Z; SHA-256 d2dd5886bce90f6eaee880719c79a6ede6ec0eaa08da32d7610bde656b8dc9ed)
- https://huggingface.co/api/datasets/ONE-Lab/GUI-World (retrieved 2026-10-18T11:41:24Z; SHA-256 dfb9a575c567a2fe97640cd1f1f73c8fa6ba970c392f335791f1ed857f504a89)
- https://raw.githubusercontent.com/Dongping-Chen/GUI-World/master/Readme.md (retrieved 2026-10-18T11:41:24Z; SHA-256 905bf69ce80c866377841474cefe08f85ec4ef552cdd9ffeb2fb1531e07370b6)

---

## gui_and_terminal_operation_recording

A dataset of GUI and terminal operation recordings. GUI sessions include timestamped screenshots, mouse events and keyboard events; terminal sessions include input and output logs.

- Catalog URL: https://awesomecua.com/resources/url-dfa0c83ebd679a37ad00/
- Original source: https://huggingface.co/datasets/cybergod-agi/gui_and_terminal_operation_recording
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop
- Topics: recording, data-generation, tool-integration
- Evidence checked: 2026-11-09T19:57:42Z
- ID: url:dfa0c83ebd679a37ad00

### Limitations

The repository lists individual recording files and a 7z archive of the same directory structure. The card declares the Unlicense license.

- Record JSON: https://awesomecua.com/resources/url-dfa0c83ebd679a37ad00/record.json

### License declarations

- code: not recorded
- data: unlicense — https://huggingface.co/datasets/cybergod-agi/gui_and_terminal_operation_recording
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/cybergod-agi/gui_and_terminal_operation_recording (retrieved 2026-11-09T19:57:42Z; SHA-256 3e8e163e3b7b66542bedd273c4f1a7a8c231a6844787005122a907ddc2b6fcc3)
- https://huggingface.co/api/datasets/cybergod-agi/gui_and_terminal_operation_recording (retrieved 2026-11-09T19:57:42Z; SHA-256 3e8e163e3b7b66542bedd273c4f1a7a8c231a6844787005122a907ddc2b6fcc3)

---

## GUI_Reflection_SFT_train

Offline supervised fine-tuning data for GUI Reflection, released as JSONL files. Users obtain the corresponding images from the source datasets named in the card.

- Catalog URL: https://awesomecua.com/resources/url-528f6fe128b77e9615aa/
- Original source: https://huggingface.co/datasets/craigwu/GUI_Reflection_SFT_train
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: imitation-learning, self-reflection, data-generation
- Evidence checked: 2026-11-09T05:05:16Z
- ID: url:528f6fe128b77e9615aa

### Limitations

The repository lists JSONL files for several source datasets and reflection examples. The card declares an MIT license.

- Record JSON: https://awesomecua.com/resources/url-528f6fe128b77e9615aa/record.json

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/craigwu/GUI_Reflection_SFT_train
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/craigwu/GUI_Reflection_SFT_train (retrieved 2026-11-09T05:05:16Z; SHA-256 e4f44e03fc317dabcc66e8fecfe9285805cd1cbc746a9bc1e106a520f434d8a0)
- https://huggingface.co/api/datasets/craigwu/GUI_Reflection_SFT_train (retrieved 2026-11-09T05:05:16Z; SHA-256 e4f44e03fc317dabcc66e8fecfe9285805cd1cbc746a9bc1e106a520f434d8a0)

---

## GUI_Reflection_Task_Suite_train

Training split of the GUI Reflection Task Suite: JSONL files for action verification, action reversal and mistake-informed reattempt, built on AndroidControl, GUI Odyssey, AMEX, OS-Atlas and Wave UI.

- Catalog URL: https://awesomecua.com/resources/url-f68939821685c9dcc78c/
- Original source: https://huggingface.co/datasets/craigwu/GUI_Reflection_Task_Suite_train
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: self-reflection, data-generation
- Evidence checked: 2026-11-10T06:29:28Z
- ID: url:f68939821685c9dcc78c

### Limitations

The repository holds seven JSONL annotation files; screenshots come from the source datasets. The card declares an MIT license.

- Record JSON: https://awesomecua.com/resources/url-f68939821685c9dcc78c/record.json

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/craigwu/GUI_Reflection_Task_Suite_train
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/craigwu/GUI_Reflection_Task_Suite_train (retrieved 2026-11-10T06:29:28Z; SHA-256 5a7fa4c17a1a944b61e55c23e2c730c60a5609efab9ce7635e278b66bafb93bd)
- https://huggingface.co/api/datasets/craigwu/GUI_Reflection_Task_Suite_train (retrieved 2026-11-10T06:29:28Z; SHA-256 5a7fa4c17a1a944b61e55c23e2c730c60a5609efab9ce7635e278b66bafb93bd)

---

## GUICourse

Three datasets for turning general VLMs into GUI agents: GUIEnv for OCR and grounding, GUIAct with 67k single-step and 15k multi-step web and Android actions, and GUIChat dialogues.

- Catalog URL: https://awesomecua.com/resources/github-yiye3-guicourse/
- Original source: https://github.com/yiye3/GUICourse
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: data-generation
- Evidence checked: 2026-10-16T06:36:01Z
- ID: github:yiye3/guicourse

- Record JSON: https://awesomecua.com/resources/github-yiye3-guicourse/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md (retrieved 2026-10-16T06:36:01Z; SHA-256 0968273442bfb9a6478fe78f8b9a6247a3bb8e6d028880939b432fd009961e98)

---

## Halluminate/WebBench

Halluminate/WebBench releases task data for evaluating browser agents on read, create, update, delete, and file workflows across live websites.

- Catalog URL: https://awesomecua.com/resources/url-5831a1ae8385cda79575/
- Original source: https://huggingface.co/datasets/Halluminate/WebBench
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation, workflow
- Evidence checked: 2026-11-09T21:09:08Z
- ID: url:5831a1ae8385cda79575

### Limitations

The card reports 2,454 tasks across 452 websites and declares an MIT license. The repository file list includes a CSV task file; the linked GitHub repository holds code and results.

- Record JSON: https://awesomecua.com/resources/url-5831a1ae8385cda79575/record.json

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/Halluminate/WebBench
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/Halluminate/WebBench (retrieved 2026-11-09T21:09:08Z; SHA-256 8ddd687af7aff13b7c0c80351243e6b1959e2d9cb81614a2f79d6820e46070d3)
- https://huggingface.co/api/datasets/Halluminate/WebBench (retrieved 2026-11-09T21:09:08Z; SHA-256 8ddd687af7aff13b7c0c80351243e6b1959e2d9cb81614a2f79d6820e46070d3)

---

## HiconAgent-AMEX

Training and validation data for HiconAgent built from the AMEX Android dataset: each sample holds a goal, earlier screenshots and actions, and the next action as the answer, for history-aware RL of GUI agents.

- Catalog URL: https://awesomecua.com/resources/url-3df97229d34c44c2014a/
- Original source: https://huggingface.co/datasets/Minuskid/HiconAgent-AMEX
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, interaction-history, reinforcement-learning
- Evidence checked: 2026-11-10T03:01:06Z
- ID: url:3df97229d34c44c2014a

### Limitations

Two parquet files, train and validation, with id, images, problem, answer and image_size fields; the paper samples 3,000 AMEX steps without extra filtering. The card lists the task category as robotics and declares no license; the HiconAgent repository links this dataset as its data.

- Record JSON: https://awesomecua.com/resources/url-3df97229d34c44c2014a/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/Minuskid/HiconAgent-AMEX (retrieved 2026-11-10T03:01:06Z; SHA-256 139a63bf925823f929bfc1877e6e1659ceb33ee834051eac18348a16bd325e38)
- https://huggingface.co/api/datasets/Minuskid/HiconAgent-AMEX (retrieved 2026-11-10T03:01:06Z; SHA-256 139a63bf925823f929bfc1877e6e1659ceb33ee834051eac18348a16bd325e38)

---

## InSTA 150k Tasks (v3)

About 150k web navigation tasks from the InSTA project, each giving a website domain, an instruction, suggested steps and success criteria, with train and test splits drawn from different websites.

- Catalog URL: https://awesomecua.com/resources/url-a80c7330dbfd4f897693/
- Original source: https://huggingface.co/datasets/data-for-agents/insta-150k-v3
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, data-generation
- Evidence checked: 2026-10-18T16:03:36Z
- ID: url:a80c7330dbfd4f897693

### Limitations

The card cites arXiv 2502.06776 (InSTA: Towards Internet-Scale Training For Agents) and points to an LLM judge in the separate data-for-agents/insta code repository; this record covers the task data. Rows contain text task specifications alone, with agent trajectories and screenshots outside this release. The card declares MIT for the dataset.

- Record JSON: https://awesomecua.com/resources/url-a80c7330dbfd4f897693/record.json

### Structured profile

- Formats: Parquet
- Modalities: text
- Splits: train, test
- Supervision: task instructions, suggested step lists, success criteria

#### Count observations

- ≈ 150,000 tasks — complete v3 release (reported; source: https://huggingface.co/datasets/data-for-agents/insta-150k-v3/raw/5a689ac657a24b0e55b1c0a0d690acfadd443c38/README.md)
- 143,508 examples — train split (reported; source: https://huggingface.co/datasets/data-for-agents/insta-150k-v3/raw/5a689ac657a24b0e55b1c0a0d690acfadd443c38/README.md)
- 2,933 examples — test split (reported; source: https://huggingface.co/datasets/data-for-agents/insta-150k-v3/raw/5a689ac657a24b0e55b1c0a0d690acfadd443c38/README.md)
- 2,933 distinct website domains — test split (computed) (computed; source: https://huggingface.co/datasets/data-for-agents/insta-150k-v3/resolve/5a689ac657a24b0e55b1c0a0d690acfadd443c38/data/test-00000-of-00001.parquet)

Split sizes are the card's dataset_info num_examples. The distinct-domain count was computed from the inspected test Parquet file.

### License declarations

- code: not recorded
- data: MIT — https://huggingface.co/datasets/data-for-agents/insta-150k-v3/raw/5a689ac657a24b0e55b1c0a0d690acfadd443c38/README.md
- document: not recorded
- weights: not recorded

- data review: Publisher dataset-card declaration for the v3 task release; the InSTA code repository and the websites named in tasks are not covered by this evidence.
  Sources: https://huggingface.co/datasets/data-for-agents/insta-150k-v3/raw/5a689ac657a24b0e55b1c0a0d690acfadd443c38/README.md

### Primary evidence

- https://huggingface.co/datasets/data-for-agents/insta-150k-v3/raw/5a689ac657a24b0e55b1c0a0d690acfadd443c38/README.md (retrieved 2026-10-18T16:03:36Z; SHA-256 0a005ebed3bc549e700fb3d6a8db64a99fe28acce7c46ceb4c66cbe37c009d23)
- https://huggingface.co/api/datasets/data-for-agents/insta-150k-v3 (retrieved 2026-10-18T16:03:35Z; SHA-256 480f7e251f32652812aafd5ffcb638a14c9612cec73bbb33c245f9685a542808)
- https://huggingface.co/datasets/data-for-agents/insta-150k-v3/resolve/5a689ac657a24b0e55b1c0a0d690acfadd443c38/data/test-00000-of-00001.parquet (retrieved 2026-10-18T16:04:11Z; SHA-256 3ae8bb40fd3da6991c15e5d34579b0a631f9ad520ad70a09358ef99770cb239d)
- https://huggingface.co/datasets/data-for-agents/insta-150k-v3/raw/5a689ac657a24b0e55b1c0a0d690acfadd443c38/README.md (retrieved 2026-10-18T16:03:36Z; SHA-256 0a005ebed3bc549e700fb3d6a8db64a99fe28acce7c46ceb4c66cbe37c009d23)

---

## jacklishufan/MobileWorld

Annotation archive for the MobileWorldBench training data: one tar with parquet subsets built on AiTW and AndroidControl screens plus a cleaned QA split, for fine-tuning mobile semantic world models.

- Catalog URL: https://awesomecua.com/resources/url-3d12df2fd27076504434/
- Original source: https://huggingface.co/datasets/jacklishufan/MobileWorld
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: world-models, mobile-navigation
- Evidence checked: 2026-11-10T03:01:06Z
- ID: url:3d12df2fd27076504434

### Limitations

One mobileworld.tar of about 184 MB; the README asks users to download and untar it manually. Screenshots come from the separate jacklishufan/aitw and jacklishufan/android_control image datasets, and the README also links the Qwen3-VL-8B-Instruct-MobileWorld-SFT model. The repository has no card or license.

- Record JSON: https://awesomecua.com/resources/url-3d12df2fd27076504434/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/jacklishufan/MobileWorld (retrieved 2026-11-10T03:01:06Z; SHA-256 1f10d590e7459e736945793ddc41dd83112bcbb411dd62db596dad8396fb8786)
- https://huggingface.co/api/datasets/jacklishufan/MobileWorld (retrieved 2026-11-10T03:01:06Z; SHA-256 1f10d590e7459e736945793ddc41dd83112bcbb411dd62db596dad8396fb8786)

---

## James4Ever0/the_frozen_forest

A dataset archive of screen recordings paired with keyboard and mouse events. Timestamp files align video frames with recorded input actions.

- Catalog URL: https://awesomecua.com/resources/url-ede673f7e6f369eae600/
- Original source: https://huggingface.co/datasets/James4Ever0/the_frozen_forest
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: recording, video, data-generation
- Evidence checked: 2026-11-09T19:57:28Z
- ID: url:ede673f7e6f369eae600

### Limitations

The repository contains recordings.rar. The card describes timestamped folders containing video, HID event records and timestamp JSON files, and declares a WTFPL license.

- Record JSON: https://awesomecua.com/resources/url-ede673f7e6f369eae600/record.json

### License declarations

- code: not recorded
- data: wtfpl — https://huggingface.co/datasets/James4Ever0/the_frozen_forest
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/James4Ever0/the_frozen_forest (retrieved 2026-11-09T19:57:28Z; SHA-256 861e9a2a44ef7386d6b207e08832a0132428f9098d7136ca2009658fdd15f46e)
- https://huggingface.co/api/datasets/James4Ever0/the_frozen_forest (retrieved 2026-11-09T19:57:28Z; SHA-256 861e9a2a44ef7386d6b207e08832a0132428f9098d7136ca2009658fdd15f46e)

---

## Jedi

Synthetic GUI grounding data associated with UI decomposition research and the OSWorld-G benchmark.

- Catalog URL: https://awesomecua.com/resources/url-e062cf1445eaee0f3ade/
- Original source: https://huggingface.co/datasets/xlangai/Jedi
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop
- Topics: grounding, data-generation
- Evidence checked: 2026-10-16T09:33:18Z
- ID: url:e062cf1445eaee0f3ade

### Limitations

The dataset card requires coordinate scaling to stay aligned with the image processor. Follow the publisher recipe before using the grounding labels.

- Record JSON: https://awesomecua.com/resources/url-e062cf1445eaee0f3ade/record.json

### Structured profile

- Formats: not recorded
- Modalities: images, text, coordinates
- Splits: not recorded
- Supervision: icon grounding, component grounding, layout grounding, refusal

#### Count observations

No count recorded.

Coordinates were resized for a specified Qwen2.5-VL image processor and must remain aligned with image resizing. AGUVIS++ material requires images from upstream AGUVIS and OS-Atlas releases.

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/xlangai/Jedi
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/xlangai/Jedi (retrieved 2026-10-16T09:33:18Z; SHA-256 63ff72bea0a2cb9218093d7a5a420b39c01861aef66141433d7c56c1e0ad05ad)
- https://huggingface.co/datasets/xlangai/Jedi/raw/main/README.md (retrieved 2026-10-17T02:02:38Z; SHA-256 1d4d15c0cd27837602d55f0fda1ed91d9e8a98b33b3e3c4ba64decae42399558)
- https://huggingface.co/api/datasets/xlangai/Jedi (retrieved 2026-10-16T09:33:18Z; SHA-256 63ff72bea0a2cb9218093d7a5a420b39c01861aef66141433d7c56c1e0ad05ad)

---

## JUMPDiscovery

Task data for the Orion computer-using agent's open discovery task: a problem statement, CellProfiler pipelines, gene sets and a script that downloads JUMP Cell Painting morphological profiles.

- Catalog URL: https://awesomecua.com/resources/url-925ca9e4519cb9ecdc00/
- Original source: https://huggingface.co/datasets/orion-agent/JUMPDiscovery
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: science, long-horizon
- Evidence checked: 2026-11-10T06:29:24Z
- ID: url:925ca9e4519cb9ecdc00

### Limitations

Gated dataset of about 124 kB holding ProblemStatement.md, two .cppipe pipelines, hallmark_genesets.json, Verified_Hypothesis.txt and download_JUMP_features.sh. Discovery runs are evaluated manually, and the agent outputs are published as JUMPDiscovery_results.

- Record JSON: https://awesomecua.com/resources/url-925ca9e4519cb9ecdc00/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/orion-agent/JUMPDiscovery (retrieved 2026-11-10T06:29:24Z; SHA-256 c529651cbfcb78e3274d09010fd4783e4279964bcfc744c3e2ff6d7346fafa4f)
- https://huggingface.co/api/datasets/orion-agent/JUMPDiscovery (retrieved 2026-11-10T06:29:24Z; SHA-256 c529651cbfcb78e3274d09010fd4783e4279964bcfc744c3e2ff6d7346fafa4f)

---

## JUMPDiscovery_results

Outputs of the Orion computer-using agent on the JUMP Cell Painting discovery task: one folder per attempt with hypotheses, figures, analysis scripts and reports, plus an example trajectory.

- Catalog URL: https://awesomecua.com/resources/url-4c4b6238a1b1f1dfd4f4/
- Original source: https://huggingface.co/datasets/orion-agent/JUMPDiscovery_results
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: science
- Evidence checked: 2026-11-10T06:29:23Z
- ID: url:4c4b6238a1b1f1dfd4f4

### Limitations

Gated dataset (accept the conditions to access), about 12.9 GB. Two attempts, attempt_17_final and attempt_44_final, were refined through review rounds; the Orion agent runs in an Ubuntu desktop VM.

- Record JSON: https://awesomecua.com/resources/url-4c4b6238a1b1f1dfd4f4/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/orion-agent/JUMPDiscovery_results (retrieved 2026-11-10T06:29:23Z; SHA-256 88062ea9e94316c575807cbb02f6c72fab11dd209dedae1a29aad4a6ee05333c)
- https://huggingface.co/api/datasets/orion-agent/JUMPDiscovery_results (retrieved 2026-11-10T06:29:23Z; SHA-256 88062ea9e94316c575807cbb02f6c72fab11dd209dedae1a29aad4a6ee05333c)

---

## KNOWS Benchmark

KNOWS provides 110 web-agent task prompts and grading rubrics for creating documents, spreadsheets, and slides in Google Workspace.

- Catalog URL: https://awesomecua.com/resources/url-573954fad8617c3d5e57/
- Original source: https://huggingface.co/datasets/utahnlp/knows-benchmark
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation, workflow
- Evidence checked: 2026-11-09T21:08:28Z
- ID: url:573954fad8617c3d5e57

### Limitations

The test split is stored in data/test.jsonl. The card directs users to the separate GitHub repository for task-specific evaluators and states an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-573954fad8617c3d5e57/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/utahnlp/knows-benchmark
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/utahnlp/knows-benchmark (retrieved 2026-11-09T21:08:28Z; SHA-256 b0b80319026a6027e08ea9ea190d3fca2478deb707d62236a9ca27fa3742dea5)
- https://huggingface.co/api/datasets/utahnlp/knows-benchmark (retrieved 2026-11-09T21:08:28Z; SHA-256 b0b80319026a6027e08ea9ea190d3fca2478deb707d62236a9ca27fa3742dea5)

---

## kuangtie/GUI-Robust

Hub release of the GUI-Robust data: step screenshots with JSON annotations for GUI tasks that include seven types of real-world anomalies, scored by the GUI-Robust script for step grounding and full-task success.

- Catalog URL: https://awesomecua.com/resources/url-369456114b26b0ff0a05/
- Original source: https://huggingface.co/datasets/kuangtie/GUI-Robust
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: robustness, evaluation, action-prediction
- Evidence checked: 2026-11-10T03:01:05Z
- ID: url:369456114b26b0ff0a05

### Limitations

The repository holds a 16.1 GB ui-agent-benchmark.rar archive and a folder of 65 task directories with per-step PNG screenshots and JSON annotations, step names in Chinese; the card declares Apache-2.0, English and Chinese, and 1K to 10K examples. The paper collects user action sequences with RPA tools and writes step and task descriptions with MLLMs.

- Record JSON: https://awesomecua.com/resources/url-369456114b26b0ff0a05/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/kuangtie/GUI-Robust
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/kuangtie/GUI-Robust (retrieved 2026-11-10T03:01:05Z; SHA-256 651ba105b1684b3f9ccc1fdfd127506a574e4d1b801a4cfeb962e3e69c1ea459)
- https://huggingface.co/api/datasets/kuangtie/GUI-Robust (retrieved 2026-11-10T03:01:05Z; SHA-256 651ba105b1684b3f9ccc1fdfd127506a574e4d1b801a4cfeb962e3e69c1ea459)

---

## LexBench-Trajectory-Replay

LexBench-Trajectory-Replay provides 30 public-website tasks with fixed browser actions and assertions for evaluating browser execution and retrieval.

- Catalog URL: https://awesomecua.com/resources/url-c049eba816b97d5076d0/
- Original source: https://huggingface.co/datasets/Lexmount/LexBench-Trajectory-Replay
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation, workflow
- Evidence checked: 2026-11-09T19:56:08Z
- ID: url:c049eba816b97d5076d0

### Limitations

The card identifies a test split in data/curated-v1.jsonl and a runtime suite in definitions/suites/curated-v1.json. It declares Apache-2.0 licensing.

- Record JSON: https://awesomecua.com/resources/url-c049eba816b97d5076d0/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/Lexmount/LexBench-Trajectory-Replay
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/Lexmount/LexBench-Trajectory-Replay (retrieved 2026-11-09T19:56:08Z; SHA-256 bd851321fe399fd11eec2cc933f202d5c91d7c28205ba19598d40e43e627b884)
- https://huggingface.co/api/datasets/Lexmount/LexBench-Trajectory-Replay (retrieved 2026-11-09T19:56:08Z; SHA-256 bd851321fe399fd11eec2cc933f202d5c91d7c28205ba19598d40e43e627b884)

---

## LexBench-WebArena-Replay

LexBench-WebArena-Replay pairs WebArena task definitions with fixed browser actions so Browser Eval can replay them and score completion across a published 812-task set.

- Catalog URL: https://awesomecua.com/resources/url-a96c70bcf5a235f980b6/
- Original source: https://huggingface.co/datasets/Lexmount/LexBench-WebArena-Replay
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation, recording
- Evidence checked: 2026-11-09T19:57:26Z
- ID: url:a96c70bcf5a235f980b6

### Limitations

The release includes a JSONL viewer split and an archive of runtime suites, task scopes, corrected inputs, a site map and file hashes. Execution requires self-hosted WebArena sites and the Browser Eval implementation.

- Record JSON: https://awesomecua.com/resources/url-a96c70bcf5a235f980b6/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/Lexmount/LexBench-WebArena-Replay
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/Lexmount/LexBench-WebArena-Replay (retrieved 2026-11-09T19:57:26Z; SHA-256 1f99a48d5c214ee5e22fb3cbc7bc3d7f49fabd678ac76a48a724bddde19a4b33)
- https://huggingface.co/api/datasets/Lexmount/LexBench-WebArena-Replay (retrieved 2026-11-09T19:57:26Z; SHA-256 1f99a48d5c214ee5e22fb3cbc7bc3d7f49fabd678ac76a48a724bddde19a4b33)

---

## LGWM data and RSWT-Bench

A dataset of GUI screen transitions for training a world model, released with RSWT-Bench to evaluate whether observed screens follow the intended actions.

- Catalog URL: https://awesomecua.com/resources/url-fde41ce8459b7d3f647f/
- Original source: https://huggingface.co/datasets/jiamingzz/lgwm-data
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android, web, cross-platform
- Topics: data-generation, evaluation, world-models, safety-security
- Evidence checked: 2026-11-09T19:58:06Z
- ID: url:fde41ce8459b7d3f647f

### Limitations

The card lists training and validation transition indices, screenshot shards and benchmark train and test splits. It identifies the accompanying paper.

- Record JSON: https://awesomecua.com/resources/url-fde41ce8459b7d3f647f/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/jiamingzz/lgwm-data (retrieved 2026-11-09T19:58:06Z; SHA-256 0f6310fa2c8ef9320e440732393eddc1c9afc2a325f0462ce11a37aa5e283ebe)
- https://huggingface.co/api/datasets/jiamingzz/lgwm-data (retrieved 2026-11-09T19:58:06Z; SHA-256 0f6310fa2c8ef9320e440732393eddc1c9afc2a325f0462ce11a37aa5e283ebe)

---

## LPS-Bench

A dataset for evaluating safety across computer-use agent trajectories, with 570 base cases and 40 skill variants covering benign and adversarial tasks.

- Catalog URL: https://awesomecua.com/resources/url-625bd97c7aa32cf05833/
- Original source: https://huggingface.co/datasets/tianyyuu/LPS-Bench
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop
- Topics: evaluation, safety-security, long-horizon
- Evidence checked: 2026-11-09T21:08:38Z
- ID: url:625bd97c7aa32cf05833

### Limitations

The card lists test JSONL tables, case JSON files, mock tools, skill documents, and schemas. It links the execution runner and evaluators in the separate GitHub repository and declares an MIT license.

- Record JSON: https://awesomecua.com/resources/url-625bd97c7aa32cf05833/record.json

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/tianyyuu/LPS-Bench
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/tianyyuu/LPS-Bench (retrieved 2026-11-09T21:08:38Z; SHA-256 88e850233b0a1279a596fbb244e20eecf2a5e069aa08e7b78cddb3c59cae4a53)
- https://huggingface.co/api/datasets/tianyyuu/LPS-Bench (retrieved 2026-11-09T21:08:38Z; SHA-256 88e850233b0a1279a596fbb244e20eecf2a5e069aa08e7b78cddb3c59cae4a53)

---

## lumos_unified_ground_iterative

A JSONL training dataset for the Lumos-I grounding module, combining math, question-answering, and web-agent annotations, including examples from Mind2Web.

- Catalog URL: https://awesomecua.com/resources/url-87bba046fba8c1cd968c/
- Original source: https://huggingface.co/datasets/ai2lumos/lumos_unified_ground_iterative
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: grounding, web-navigation, imitation-learning
- Evidence checked: 2026-11-09T19:57:38Z
- ID: url:87bba046fba8c1cd968c

### Limitations

The repository lists a JSONL data file and an Apache-2.0 license. The card identifies the resource's paper as arXiv:2311.05657.

- Record JSON: https://awesomecua.com/resources/url-87bba046fba8c1cd968c/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/ai2lumos/lumos_unified_ground_iterative
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/ai2lumos/lumos_unified_ground_iterative (retrieved 2026-11-09T19:57:38Z; SHA-256 316af5b9ad684ce01a4fca1d20f6125a33667224c2caa12057dd4dcfec71a779)
- https://huggingface.co/api/datasets/ai2lumos/lumos_unified_ground_iterative (retrieved 2026-11-09T19:57:38Z; SHA-256 316af5b9ad684ce01a4fca1d20f6125a33667224c2caa12057dd4dcfec71a779)

---

## lumos_unified_plan_iterative

lumos_unified_plan_iterative is a JSONL training dataset for the Lumos planning module. It combines web-agent examples with math and complex question-answering tasks.

- Catalog URL: https://awesomecua.com/resources/url-543aff764901777e6ad5/
- Original source: https://huggingface.co/datasets/ai2lumos/lumos_unified_plan_iterative
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: planning, web-navigation, data-generation
- Evidence checked: 2026-11-09T19:55:45Z
- ID: url:543aff764901777e6ad5

### Limitations

The repository includes a JSONL data file. The card lists Mind2Web among the data sources and declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-543aff764901777e6ad5/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/ai2lumos/lumos_unified_plan_iterative
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/ai2lumos/lumos_unified_plan_iterative (retrieved 2026-11-09T19:55:45Z; SHA-256 218b2e60f439ec331b2004b0dc911ff8cd1eb8f435233a59e787e5429cf3680f)
- https://huggingface.co/api/datasets/ai2lumos/lumos_unified_plan_iterative (retrieved 2026-11-09T19:55:45Z; SHA-256 218b2e60f439ec331b2004b0dc911ff8cd1eb8f435233a59e787e5429cf3680f)

---

## lumos_web_agent_ground_iterative

A Lumos-Iterative dataset for training a web agent's grounding module. Its card identifies 1009 Mind2Web annotations and links to models trained on the data.

- Catalog URL: https://awesomecua.com/resources/url-1e85f7557b39ae40193f/
- Original source: https://huggingface.co/datasets/ai2lumos/lumos_web_agent_ground_iterative
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: grounding, web-navigation, data-generation
- Evidence checked: 2026-11-09T21:08:46Z
- ID: url:1e85f7557b39ae40193f

### Limitations

The repository lists a JSONL data file and declares an Apache-2.0 license. The card associates the data with the Lumos paper.

- Record JSON: https://awesomecua.com/resources/url-1e85f7557b39ae40193f/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/ai2lumos/lumos_web_agent_ground_iterative
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/ai2lumos/lumos_web_agent_ground_iterative (retrieved 2026-11-09T21:08:46Z; SHA-256 ba56bb812567e39ec9f1db863059ae9fe9cf063d3fc1a89cde644eea07d90c51)
- https://huggingface.co/api/datasets/ai2lumos/lumos_web_agent_ground_iterative (retrieved 2026-11-09T21:08:46Z; SHA-256 ba56bb812567e39ec9f1db863059ae9fe9cf063d3fc1a89cde644eea07d90c51)

---

## lumos_web_agent_plan_iterative

A Lumos-Iterative dataset for training a web agent's planning module, with 1009 Mind2Web task annotations in the described data overview.

- Catalog URL: https://awesomecua.com/resources/url-0772193ae2967c407d22/
- Original source: https://huggingface.co/datasets/ai2lumos/lumos_web_agent_plan_iterative
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: planning, web-navigation, data-generation
- Evidence checked: 2026-11-09T05:05:19Z
- ID: url:0772193ae2967c407d22

### Limitations

The repository contains a JSONL data file. The card declares Apache-2.0 and links to the Lumos paper and related model repositories.

- Record JSON: https://awesomecua.com/resources/url-0772193ae2967c407d22/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/ai2lumos/lumos_web_agent_plan_iterative
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/ai2lumos/lumos_web_agent_plan_iterative (retrieved 2026-11-09T05:05:19Z; SHA-256 fb27dc6294ff4bace360fdb62cc5c160478cf59a56671d2257455744a0adf2d6)
- https://huggingface.co/api/datasets/ai2lumos/lumos_web_agent_plan_iterative (retrieved 2026-11-09T05:05:19Z; SHA-256 fb27dc6294ff4bace360fdb62cc5c160478cf59a56671d2257455744a0adf2d6)

---

## luzimu/WebGen-Bench

A dataset of website-generation instructions and UI test cases for evaluating interactive sites, with separate training and test splits.

- Catalog URL: https://awesomecua.com/resources/url-405959de004b6e32c911/
- Original source: https://huggingface.co/datasets/luzimu/WebGen-Bench
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, ui-design
- Evidence checked: 2026-11-09T19:56:12Z
- ID: url:405959de004b6e32c911

### Limitations

The card reports 6667 training instructions, 101 test instructions and 647 test cases. The repository contains train and test Parquet files and declares an MIT license.

- Record JSON: https://awesomecua.com/resources/url-405959de004b6e32c911/record.json

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/luzimu/WebGen-Bench
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/luzimu/WebGen-Bench (retrieved 2026-11-09T19:56:12Z; SHA-256 3e967dc4663052e125531ea5e4f10e9af4902b753591543f6e8e4c2967dec12c)
- https://huggingface.co/api/datasets/luzimu/WebGen-Bench (retrieved 2026-11-09T19:56:12Z; SHA-256 3e967dc4663052e125531ea5e4f10e9af4902b753591543f6e8e4c2967dec12c)

---

## luzimu/WebGen-Bench_train_data

WebGen-Instruct is a training dataset of 6,667 website generation instructions, including 600 trajectories and fields describing expected UI tasks.

- Catalog URL: https://awesomecua.com/resources/url-c47b5927fc41eb9a24d4/
- Original source: https://huggingface.co/datasets/luzimu/WebGen-Bench_train_data
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: ui-design, data-generation
- Evidence checked: 2026-11-09T21:08:34Z
- ID: url:c47b5927fc41eb9a24d4

### Limitations

The card shows train and test splits and an example using the Hugging Face Datasets library. It declares an MIT license.

- Record JSON: https://awesomecua.com/resources/url-c47b5927fc41eb9a24d4/record.json

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/luzimu/WebGen-Bench_train_data
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/luzimu/WebGen-Bench_train_data (retrieved 2026-11-09T21:08:34Z; SHA-256 0365a303f495ae9b49354f7f4f035a0397bef0ab8265eb4b4701acb1415112e6)
- https://huggingface.co/api/datasets/luzimu/WebGen-Bench_train_data (retrieved 2026-11-09T21:08:34Z; SHA-256 0365a303f495ae9b49354f7f4f035a0397bef0ab8265eb4b4701acb1415112e6)

---

## Magma-AITW-SoM

Magma-AITW-SoM supplies AITW data used to fine-tune the Magma multimodal agent model for downstream tasks.

- Catalog URL: https://awesomecua.com/resources/url-ffe40334f1050b94f8b2/
- Original source: https://huggingface.co/datasets/MagmaAI/Magma-AITW-SoM
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: mobile-navigation, data-generation
- Evidence checked: 2026-11-09T05:05:01Z
- ID: url:ffe40334f1050b94f8b2

### Limitations

The card declares an MIT license. The listed repository files include Arrow data shards and dataset metadata.

- Record JSON: https://awesomecua.com/resources/url-ffe40334f1050b94f8b2/record.json

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/MagmaAI/Magma-AITW-SoM
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/MagmaAI/Magma-AITW-SoM (retrieved 2026-11-09T05:05:01Z; SHA-256 65435577e2f15341b26bf596fa97da930eb8f779f9e082ef9f6429beaeddd8f8)
- https://huggingface.co/api/datasets/MagmaAI/Magma-AITW-SoM (retrieved 2026-11-09T05:05:01Z; SHA-256 65435577e2f15341b26bf596fa97da930eb8f779f9e082ef9f6429beaeddd8f8)

---

## Magma-Mind2Web-SoM

Magma-Mind2Web-SoM provides Mind2Web data for downstream fine-tuning of the Magma multimodal agent model.

- Catalog URL: https://awesomecua.com/resources/url-e8256e338a9c379ca85b/
- Original source: https://huggingface.co/datasets/MagmaAI/Magma-Mind2Web-SoM
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, data-generation
- Evidence checked: 2026-11-09T05:05:01Z
- ID: url:e8256e338a9c379ca85b

### Limitations

The card declares an MIT license. The listed repository files include Arrow data shards and dataset metadata.

- Record JSON: https://awesomecua.com/resources/url-e8256e338a9c379ca85b/record.json

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/MagmaAI/Magma-Mind2Web-SoM
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/MagmaAI/Magma-Mind2Web-SoM (retrieved 2026-11-09T05:05:01Z; SHA-256 112de38c5e1f1d4c4d5d93e399a75c8eed014ae2f8cf2c6a18f3179d177322a9)
- https://huggingface.co/api/datasets/MagmaAI/Magma-Mind2Web-SoM (retrieved 2026-11-09T05:05:01Z; SHA-256 112de38c5e1f1d4c4d5d93e399a75c8eed014ae2f8cf2c6a18f3179d177322a9)

---

## McGill-NLP/safearena

SafeArena supplies safe and harmful task splits for evaluating the safety of autonomous web agents, with accompanying environment archives under gated access.

- Catalog URL: https://awesomecua.com/resources/url-be4ca14d1724b0cf8314/
- Original source: https://huggingface.co/datasets/McGill-NLP/safearena
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: safety-security, evaluation, web-navigation
- Evidence checked: 2026-11-09T05:05:20Z
- ID: url:be4ca14d1724b0cf8314

### Limitations

The page names safe.json and harm.json task files and requires users to request dataset access before downloading. The repository file list includes forum, GitLab and shopping-admin archives.

- Record JSON: https://awesomecua.com/resources/url-be4ca14d1724b0cf8314/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/McGill-NLP/safearena (retrieved 2026-11-09T05:05:20Z; SHA-256 8b31816950372082f6ce4496f8a696ea67172a6cb96d865b81d8887928950978)
- https://huggingface.co/api/datasets/McGill-NLP/safearena (retrieved 2026-11-09T05:05:20Z; SHA-256 8b31816950372082f6ce4496f8a696ea67172a6cb96d865b81d8887928950978)

---

## MemGUI-Bench agent trajectories

Recorded MemGUI-Bench runs of mobile GUI agents and models, packaged as per-agent ZIP archives with step screenshots, action logs and evaluator outputs, plus compressed trajectory previews for the leaderboard viewer.

- Catalog URL: https://awesomecua.com/resources/url-2b7363c3a20d8022b319/
- Original source: https://huggingface.co/datasets/lgy0404/memgui-bench-trajs
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: evaluation, memory
- Evidence checked: 2026-10-19T07:05:19Z
- ID: url:2b7363c3a20d8022b319

### Limitations

The card says each attempt holds step screenshots, a log.json action sequence, evaluation_summary.json and final_decision.json, and action visualizations. The MemGUI-Bench README asks submitters to add a gzip JSON preview and MP4 under site/trajs/ through Hub pull requests. Archive names identify the agent or model, such as M3A, T3A, Mobile-Agent-E, Agent-S2, GUI-Owl-7B and several API models. The card's usage section shows an older run.py interface. The card's apache-2.0 declaration does not settle rights to app screenshots.

- Record JSON: https://awesomecua.com/resources/url-2b7363c3a20d8022b319/record.json

### Structured profile

- Formats: ZIP archives, gzip JSON, MP4
- Modalities: screenshots, action logs, evaluation results, video previews
- Splits: not recorded
- Supervision: agent execution trajectories with LLM-judged outcomes

#### Count observations

- 14 per-agent ZIP archives — Hub manifest at revision 4525fc5 (computed) (computed; source: https://huggingface.co/api/datasets/lgy0404/memgui-bench-trajs/revision/4525fc5b11cf0033cc31cafa78beb2237df6890a)
- 19 gzip JSON trajectory preview bundles — site/trajs/ in the Hub manifest at revision 4525fc5 (computed) (computed; source: https://huggingface.co/api/datasets/lgy0404/memgui-bench-trajs/revision/4525fc5b11cf0033cc31cafa78beb2237df6890a)

Archives and preview bundles are different packagings and overlap in the agents they cover; neither is a trajectory or task count. site/trajs/index.json lists only 9 of the 19 preview bundles.

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/lgy0404/memgui-bench-trajs/raw/4525fc5b11cf0033cc31cafa78beb2237df6890a/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/lgy0404/memgui-bench-trajs/raw/4525fc5b11cf0033cc31cafa78beb2237df6890a/README.md (retrieved 2026-10-19T07:05:19Z; SHA-256 62d58168fbb7a1a7fd895627d839a4b37d0c46f9d2914c2888ea2356cc012735)
- https://huggingface.co/api/datasets/lgy0404/memgui-bench-trajs/revision/4525fc5b11cf0033cc31cafa78beb2237df6890a (retrieved 2026-10-19T07:05:19Z; SHA-256 36b39075a426e792530250753c3befd3136b963e65b67e230ed1deedca9b1296)
- https://huggingface.co/datasets/lgy0404/memgui-bench-trajs/raw/4525fc5b11cf0033cc31cafa78beb2237df6890a/site/trajs/index.json (retrieved 2026-10-19T07:05:21Z; SHA-256 d7889d1a5f6da09930ce70b128e304d61b08768c27bc0500cb9f8863b314a866)
- https://raw.githubusercontent.com/lgy0404/MemGUI-Bench/3fb01b6cc0d13e287c67f488c76f449df7d65558/README.md (retrieved 2026-10-19T07:05:14Z; SHA-256 fab1bf3b766c2e59e46515dd60cf71b040986690b169bfcc0d35c6e9bc0f58fb)
- https://huggingface.co/datasets/lgy0404/memgui-bench-trajs/raw/4525fc5b11cf0033cc31cafa78beb2237df6890a/README.md (retrieved 2026-10-19T07:05:19Z; SHA-256 62d58168fbb7a1a7fd895627d839a4b37d0c46f9d2914c2888ea2356cc012735)

---

## META-GUI dataset

Hub release of META-GUI, task-oriented dialogues in which an agent operates mobile apps: each turn pairs the conversation with screenshots, view-hierarchy XML, recorded GUI actions and a reply.

- Catalog URL: https://awesomecua.com/resources/url-05a9a7c592089d1ddd46/
- Original source: https://huggingface.co/datasets/X-LANCE/META-GUI
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: mobile-navigation, human-in-the-loop, action-prediction
- Evidence checked: 2026-10-18T15:46:20Z
- ID: url:05a9a7c592089d1ddd46

### Limitations

The card only links the paper and the X-LANCE/META-GUI-baseline repository, which documents the raw dialog folders (dialog.json, per-turn actions.json, PNG screenshots and XML view hierarchies) and the processed data.json fields. The Hub manifest at revision 12660de5 holds train.tar and test.tar (about 14.3 GB and 1.8 GB); the baseline README instead describes train and dev folders from an Amazon S3 archive, and the split correspondence is not established. No source names the mobile operating system. Apache-2.0 is the Hub card's data declaration; the baseline code's MIT license is separate.

- Record JSON: https://awesomecua.com/resources/url-05a9a7c592089d1ddd46/record.json

### Structured profile

- Formats: TAR archives, JSON, PNG, XML
- Modalities: dialogue text, screenshots, view hierarchies, actions
- Splits: train, test
- Supervision: GUI action sequences per dialogue turn, target elements for clicks, system response text

#### Count observations

No count recorded.

Splits are the two Hub archive names; the baseline README's processed data uses train and dev folders. Formats inside the archives come from the baseline README's raw-data description.

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/X-LANCE/META-GUI/raw/12660de515ad55e40e8c4e5afa8f4d0e7430ab34/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/X-LANCE/META-GUI/raw/12660de515ad55e40e8c4e5afa8f4d0e7430ab34/README.md (retrieved 2026-10-18T15:46:20Z; SHA-256 cb86b4648766f07f671290abec4b75658496082a2e77661ca47aa593351eacda)
- https://huggingface.co/api/datasets/X-LANCE/META-GUI/revision/12660de515ad55e40e8c4e5afa8f4d0e7430ab34 (retrieved 2026-10-18T15:45:56Z; SHA-256 ef370ba12e94c45d0fb74fe3e44b29f9e058e19fab739a15a6a1d04f4101460d)
- https://raw.githubusercontent.com/X-LANCE/META-GUI-baseline/a845f88e7d89fe60d3666d15adb32d4e2ef907db/README.md (retrieved 2026-10-18T15:45:57Z; SHA-256 2cea1be73ea75acd46990ab1fb567fbd83ad58a2bc69ca858b207660df9fe8c1)
- https://huggingface.co/datasets/X-LANCE/META-GUI/raw/12660de515ad55e40e8c4e5afa8f4d0e7430ab34/README.md (retrieved 2026-10-18T15:46:20Z; SHA-256 cb86b4648766f07f671290abec4b75658496082a2e77661ca47aa593351eacda)

---

## Microscopy-Dataset

Task set for the Orion computer-using agent's microscopy image-processing task: 12 CellProfiler training modules and 14 test challenges with problem statements, images, ground truth and unit tests.

- Catalog URL: https://awesomecua.com/resources/url-62a92edacc4b703aaa05/
- Original source: https://huggingface.co/datasets/orion-agent/Microscopy-Dataset
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: science, evaluation
- Evidence checked: 2026-11-10T06:29:24Z
- ID: url:62a92edacc4b703aaa05

### Limitations

Gated dataset of about 575 MB. Each task folder holds a ProblemStatement.md, a starting .cppipe pipeline and images; test challenges add ground-truth answers and a unit_test.py.

- Record JSON: https://awesomecua.com/resources/url-62a92edacc4b703aaa05/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/orion-agent/Microscopy-Dataset (retrieved 2026-11-10T06:29:24Z; SHA-256 aba559162b8e545df6e0f829c1a3af3177b64687a42e59691434e315de2e7b68)
- https://huggingface.co/api/datasets/orion-agent/Microscopy-Dataset (retrieved 2026-11-10T06:29:24Z; SHA-256 aba559162b8e545df6e0f829c1a3af3177b64687a42e59691434e315de2e7b68)

---

## Mind2Web 2 task data and judge scripts

Auto-gated Hub release of Mind2Web 2: dev and test task CSVs for long-horizon agentic web search, plus 130 per-task Python evaluation scripts that act as its judge agents.

- Catalog URL: https://awesomecua.com/resources/url-4f4c4f0bf0cec93c59d1/
- Original source: https://huggingface.co/datasets/osunlp/Mind2Web-2
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation, long-horizon
- Evidence checked: 2026-10-18T16:01:45Z
- ID: url:4f4c4f0bf0cec93c59d1

### Limitations

The Hub API at revision 54f5b254 reports gated 'auto' (access is approved automatically after a logged-in request) and lists dev_set.csv and test_set.csv as the dev_set and test_set splits, a changelog, and 130 Python files under evaluation_scripts/2025_10_23. The description comes from the project README, which links this dataset as its tasks and judge-agent evaluation scripts and says the scripts for both the public dev set and the test set were released on 2025-10-23. The Hub card metadata declares CC BY 4.0; the repository code is MIT and is not applied to the data. Per the README, scoring with the scripts needs model API keys, and precaching the cited webpages is optional but recommended.

- Record JSON: https://awesomecua.com/resources/url-4f4c4f0bf0cec93c59d1/record.json

### Structured profile

- Formats: CSV, Python
- Modalities: text, Python code
- Splits: dev_set, test_set
- Supervision: task definitions for live-web agentic search, per-task judge-agent evaluation scripts

#### Count observations

- 130 per-task evaluation scripts — evaluation_scripts/2025_10_23 in osunlp/Mind2Web-2 at revision 54f5b25 (computed) (computed; source: https://huggingface.co/datasets/osunlp/Mind2Web-2/tree/54f5b2546c30b86812d9564f4800c0c6f77deb45/evaluation_scripts/2025_10_23)

The script count is the number of distinct .py files in the pinned tree listing. The automatic access gate leaves the dev and test task CSVs unopened and their per-split task counts unknown.

### License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/osunlp/Mind2Web-2
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/osunlp/Mind2Web-2/revision/54f5b2546c30b86812d9564f4800c0c6f77deb45 (retrieved 2026-10-18T16:01:45Z; SHA-256 c45e4a7945527c90d6854ea7ccee0e04d061ec160ef278c58f8e5d947a1d7a0e)
- https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web-2/1fcbfda98bf5c669daa2ed0a27f1d2f2499475ee/README.md (retrieved 2026-10-18T16:01:21Z; SHA-256 5cc72b992cfc11094dcf341c284d5baadc6c66a302fdfd474b27913fe1c91f6f)
- https://huggingface.co/api/datasets/osunlp/Mind2Web-2/tree/54f5b2546c30b86812d9564f4800c0c6f77deb45/evaluation_scripts/2025_10_23 (retrieved 2026-10-18T16:00:57Z; SHA-256 42844a52150a767be14adcad614f2973e537a7154944a24c0dcb6bce6bf47d9d)
- https://huggingface.co/api/datasets/osunlp/Mind2Web-2/revision/54f5b2546c30b86812d9564f4800c0c6f77deb45 (retrieved 2026-10-18T16:01:45Z; SHA-256 c45e4a7945527c90d6854ea7ccee0e04d061ec160ef278c58f8e5d947a1d7a0e)

---

## Mind2Web bbox eval (MultiUI)

Mind2Web steps repackaged by the MultiUI authors as JPEG screenshots with per-step JSONL queries and candidate-element boxes, for MultiUI's screenshot-based Mind2Web action evaluation.

- Catalog URL: https://awesomecua.com/resources/url-56b5936190d20fa3d1c1/
- Original source: https://huggingface.co/datasets/neulab/Mind2Web_bbox_eval
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, action-prediction, evaluation
- Evidence checked: 2026-10-18T16:03:54Z
- ID: url:56b5936190d20fa3d1c1

### Limitations

The Hub API at revision b089ea88 lists two ZIP archives (about 6.25 GB and 14.4 GB) beside a card that declares ODC-By; the repository is publicly accessible. The card only names this the Mind2Web evaluation set for the MultiUI paper. The MultiUI README calls it its processed Mind2Web evaluation dataset, places it under its Mind2Web-SeeAct offline-experiment directory and runs eval_m2w.py on test_task, test_website or test_domain. Archive contents were read from their ZIP central directories and one sample query: each step folder, named by Mind2Web annotation and action IDs, holds a queries.jsonl with the task, previous actions, target operation and positive and negative candidate elements with bounding boxes, plus JPEG images. The archive named for ground-truth crops also has a train split; the paper's Appendix H says screenshots are randomly cropped around the target element. Mind2Web's own data terms are not resolved here; ODC-By is the card declaration.

- Record JSON: https://awesomecua.com/resources/url-56b5936190d20fa3d1c1/record.json

### Structured profile

- Formats: ZIP archives, JSONL, JPEG
- Modalities: screenshots, task instructions, previous actions, target operations, candidate elements with bounding boxes
- Splits: train, test_task, test_website, test_domain
- Supervision: next-action prediction on Mind2Web steps, candidate-element bounding boxes

#### Count observations

No count recorded.

Counts were taken with a script from the archives' ZIP central directories at revision b089ea88 and have no retained receipt, so they are kept here rather than as count observations. bbox_generate_gt_crop_offline_data_-1choices.zip: 16,715 step folders with one JPEG each (train 7,357; test_task 2,093; test_website 1,370; test_domain 5,895). offline_data_-1choices.zip: 9,364 step folders with 27,967 JPEGs, test splits only (test_task 2,093; test_website 1,373; test_domain 5,898). Step folders and tasks are different units; distinct annotation IDs per split are train 1,009, test_task 252, test_website 177 and test_domain 912, with the same test counts in both archives.

### License declarations

- code: not recorded
- data: odc-by — https://huggingface.co/datasets/neulab/Mind2Web_bbox_eval/raw/b089ea88cd2cabc44c10d62f7e99a896a4aeaf2d/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/neulab/Mind2Web_bbox_eval/raw/b089ea88cd2cabc44c10d62f7e99a896a4aeaf2d/README.md (retrieved 2026-10-18T16:03:54Z; SHA-256 ef5fe8c440d4670845bb315570bff678673ea2fa3953871fb60f0e82c67df970)
- https://huggingface.co/api/datasets/neulab/Mind2Web_bbox_eval/revision/b089ea88cd2cabc44c10d62f7e99a896a4aeaf2d (retrieved 2026-10-18T16:02:59Z; SHA-256 e662d712439d9cfc547fc2b1834051c194eff072e3947281a3588281662f49ab)
- https://huggingface.co/api/datasets/neulab/Mind2Web_bbox_eval/tree/b089ea88cd2cabc44c10d62f7e99a896a4aeaf2d (retrieved 2026-10-18T16:02:59Z; SHA-256 b623f067568ec9fa36b4caed1b7de98a01d0d4197945ce42de078d32be508698)
- https://raw.githubusercontent.com/neulab/MultiUI/e261d8ad3d329a8b6e719cfd4f6a6d8e6df3cede/README.md (retrieved 2026-10-18T16:02:59Z; SHA-256 fe0c03fe73529a29788d559103c4aed48dca6ed9ba3bfd5f151f902fa8858b38)
- https://arxiv.org/html/2410.13824v3 (retrieved 2026-10-18T16:03:00Z; SHA-256 383ada0c47d09acea6b865ed67571c9540b2d602bd6b0ea8ad3130121efd190c)
- https://huggingface.co/datasets/neulab/Mind2Web_bbox_eval/raw/b089ea88cd2cabc44c10d62f7e99a896a4aeaf2d/README.md (retrieved 2026-10-18T16:03:54Z; SHA-256 ef5fe8c440d4670845bb315570bff678673ea2fa3953871fb60f0e82c67df970)

---

## Mind2Web-cleaned-lite-value-model-w-cot-test

A Mind2Web dataset of 6125 web-action records with element candidates, accessibility trees, prior actions, rationales, and value scores.

- Catalog URL: https://awesomecua.com/resources/url-9e2c14b01faf8d48b4e9/
- Original source: https://huggingface.co/datasets/LangAGI-Lab/Mind2Web-cleaned-lite-value-model-w-cot-test
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: data-generation, grounding, reward-models, web-navigation
- Evidence checked: 2026-11-09T21:10:46Z
- ID: url:9e2c14b01faf8d48b4e9

### Limitations

The card defines a train split and lists fields for the current and next accessibility trees. The repository lists Parquet data files.

- Record JSON: https://awesomecua.com/resources/url-9e2c14b01faf8d48b4e9/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/LangAGI-Lab/Mind2Web-cleaned-lite-value-model-w-cot-test (retrieved 2026-11-09T21:10:46Z; SHA-256 3270a1d936f40fd9607b173103cf444aee725d9137f49f58dfea9ea5b237d70b)
- https://huggingface.co/api/datasets/LangAGI-Lab/Mind2Web-cleaned-lite-value-model-w-cot-test (retrieved 2026-11-09T21:10:46Z; SHA-256 3270a1d936f40fd9607b173103cf444aee725d9137f49f58dfea9ea5b237d70b)

---

## Mobile3M

Pre-training corpus for Xiaomi's MobileVLM, distributed as per-app graph archives for mobile apps such as Baidu Map, QQ Music, Ctrip and Vipshop.

- Catalog URL: https://awesomecua.com/resources/url-b80bfa0a4939a493a11f/
- Original source: https://huggingface.co/datasets/xwk123/Mobile3M
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: screen-understanding
- Evidence checked: 2026-10-16T06:38:26Z
- ID: url:b80bfa0a4939a493a11f

- Record JSON: https://awesomecua.com/resources/url-b80bfa0a4939a493a11f/record.json

### Structured profile

- Formats: 7z app-graph archives, multipart 7z files
- Modalities: not recorded
- Splits: partial training release
- Supervision: mobile UI pretraining for MobileVLM

#### Count observations

No count recorded.

Official README calls this a partial training release and says app data will be uploaded gradually. Its training-JSON and test-data links point to separate Hub repositories with separate file and split inventories. Public revision 3df26694 lists app-graph archives; the downloadable example count remains unspecified. The card YAML says Apache-2.0 while its prose and official README assign CC-BY-NC-SA-4.0 to data and Apache to code; the existing data-license value remains unknown with the conflict documented.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: The retained first-party API has Apache-2.0 card metadata but its publisher description explicitly assigns Apache to source code and CC-BY-NC-SA-4.0 to the dataset. A single permissive dataset declaration is unresolved.
  Sources: https://huggingface.co/api/datasets/xwk123/Mobile3M

### Primary evidence

- https://huggingface.co/api/datasets/xwk123/Mobile3M (retrieved 2026-10-16T06:38:26Z; SHA-256 356a8dca28fa3dc46bc05b13eaf04a3db273e63c06be4fd15d0e87e0343c0824)
- https://huggingface.co/datasets/xwk123/Mobile3M/raw/3df26694ff9186604eb44a8e633894d3ece67ed9/README.md (retrieved 2026-10-17T14:10:01Z; SHA-256 8a097dbc7384d3743f262dc0164c176ed577bf720cbbc92ff8b3cd820d1aed4f)
- https://raw.githubusercontent.com/XiaoMi/mobilevlm/HEAD/README.md (retrieved 2026-10-17T14:22:04Z; SHA-256 e8a92a783b6b65cacedf105e5ede583668f8774f2a81a2005dc6897da6fa88ef)
- https://huggingface.co/api/datasets/xwk123/Mobile3M (retrieved 2026-10-16T06:38:26Z; SHA-256 356a8dca28fa3dc46bc05b13eaf04a3db273e63c06be4fd15d0e87e0343c0824)

---

## MobileViews

Over 600,000 Android screenshot and view-hierarchy pairs from more than 20,000 Google Play apps, collected with an optimized DroidBot, with complete per-app traces.

- Catalog URL: https://awesomecua.com/resources/url-cc4aa8caeee0cff58e73/
- Original source: https://huggingface.co/datasets/mllmTeam/MobileViews
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: screen-understanding
- Evidence checked: 2026-10-16T06:38:26Z
- ID: url:cc4aa8caeee0cff58e73

- Record JSON: https://awesomecua.com/resources/url-cc4aa8caeee0cff58e73/record.json

### Structured profile

- Formats: JPEG, JSON, XML, Parquet, CSV, ZIP packages, HTML/JavaScript trace visualization
- Modalities: screenshots, view hierarchies, action traces, app metadata
- Splits: not recorded
- Supervision: paired screenshot/view-hierarchy structure, recorded app states, actions and transitions

#### Count observations

- > 600,000 screenshot–view-hierarchy pairs — publisher-reported MobileViews-600K first release (reported; source: https://huggingface.co/datasets/mllmTeam/MobileViews/raw/c734715eb90a8f3ac0c80973f93ee63950e5a8c8/README.md)
- > 20,000 Android apps — publisher-reported MobileViews-600K first release (reported; source: https://huggingface.co/datasets/mllmTeam/MobileViews/raw/c734715eb90a8f3ac0c80973f93ee63950e5a8c8/README.md)

Counts describe the card’s first-release claim. The card distinguishes globally image-hash-deduplicated screenshot/VH pairs from November 2024 complete-app traces; trace states reuse the screen population. JPEG/JSON and Parquet are alternative representations. Listed filename ranges are examples; a complete corpus count requires a separate inventory. No train/validation/test split is documented. Hub revision c734715e is ungated; MIT is its data declaration, without resolving third-party app content rights.

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/mllmTeam/MobileViews
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/mllmTeam/MobileViews (retrieved 2026-10-16T06:38:26Z; SHA-256 d36d62283deecd3c5ccf1ac1af49aa7ba779a1d69cdcaea39a1bed37ff5d66b9)
- https://huggingface.co/datasets/mllmTeam/MobileViews/raw/c734715eb90a8f3ac0c80973f93ee63950e5a8c8/README.md (retrieved 2026-10-17T14:10:01Z; SHA-256 94a4f04e180dbd597c271b0d7470c907e6526b95a6420f01b3183feb1ee24d6e)
- https://huggingface.co/api/datasets/mllmTeam/MobileViews (retrieved 2026-10-16T06:38:26Z; SHA-256 d36d62283deecd3c5ccf1ac1af49aa7ba779a1d69cdcaea39a1bed37ff5d66b9)

---

## mobilevlm_test

Test data for MobileVLM's Mobile3M benchmark, shared as a two-part 7z archive. Mobile3M is a Chinese mobile UI dataset of 3 million pages linked by real transition actions.

- Catalog URL: https://awesomecua.com/resources/url-5182ab4e9bd7843f240b/
- Original source: https://huggingface.co/datasets/xwk123/mobilevlm_test
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: screen-understanding, mobile-navigation, evaluation
- Evidence checked: 2026-11-10T03:01:03Z
- ID: url:5182ab4e9bd7843f240b

### Limitations

Files are test_data.7z.001 and test_data.7z.002. The card states CC BY-NC-SA 4.0 for the dataset and Apache 2.0 for code; the MobileVLM repository releases Mobile3M training data, training JSON files and the Appium collection script separately.

- Record JSON: https://awesomecua.com/resources/url-5182ab4e9bd7843f240b/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/xwk123/mobilevlm_test
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/xwk123/mobilevlm_test (retrieved 2026-11-10T03:01:03Z; SHA-256 abee6057987d5794c4f18114c0918a85ec346a1d253e5610c2d691e4ee6f9d65)
- https://huggingface.co/api/datasets/xwk123/mobilevlm_test (retrieved 2026-11-10T03:01:03Z; SHA-256 abee6057987d5794c4f18114c0918a85ec346a1d253e5610c2d691e4ee6f9d65)

---

## MoCon

Icon and text bounding-box annotations for 10,364 mobile app screenshots, with 154 icon classes and font-family text labels in LabelMe JSON and train, val and test splits; the release supplies annotations separately from the referenced images.

- Catalog URL: https://awesomecua.com/resources/url-c7489f15e7883a695832/
- Original source: https://huggingface.co/datasets/OpenDFM/MoCon
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: screen-understanding, data-generation
- Evidence checked: 2026-10-18T16:15:57Z
- ID: url:c7489f15e7883a695832

### Limitations

The card, shared with its sibling crawl release, carries only the license, links and citation requests, and the pre-release PDF it links is a two-page announcement framed around mobile GUI agents without methods or statistics. Contents were read from the 15.6 MB mocondata.zip (SHA-256 98463d69…, matching the Hub LFS object): one LabelMe 4.5.9 JSON file per screenshot whose imagePath names a JPEG outside this repository and whose imageData is empty. A script counted 364,352 rectangles: 212,342 labelled icon with one of the 154 icon.csv classes (in Chinese or English) and 152,010 text boxes labelled with a font family (sans, fantasy, serif, cursive, mono or math) and the transcribed text. Image sizes are mostly 1080×1920 and 540×960 portrait. No operating system is named, so the environment stays unspecified. CC BY-NC-SA 4.0 is the card's data declaration.

- Record JSON: https://awesomecua.com/resources/url-c7489f15e7883a695832/record.json

### Structured profile

- Formats: LabelMe JSON, ZIP, CSV
- Modalities: bounding-box annotations, UI text transcriptions
- Splits: train, val, test
- Supervision: icon bounding boxes with class labels, text bounding boxes with transcribed text and font-family labels

#### Count observations

- 6,972 annotated screenshots — MoCon train split (computed) (computed; source: https://huggingface.co/datasets/OpenDFM/MoCon/resolve/e37127c9ad04ccd5a1381aa60054683eda8a5462/split.csv)
- 1,143 annotated screenshots — MoCon val split (computed) (computed; source: https://huggingface.co/datasets/OpenDFM/MoCon/resolve/e37127c9ad04ccd5a1381aa60054683eda8a5462/split.csv)
- 2,249 annotated screenshots — MoCon test split (computed) (computed; source: https://huggingface.co/datasets/OpenDFM/MoCon/resolve/e37127c9ad04ccd5a1381aa60054683eda8a5462/split.csv)
- 154 icon classes — icon.csv class table (Chinese and English names) (computed) (computed; source: https://huggingface.co/datasets/OpenDFM/MoCon/resolve/e37127c9ad04ccd5a1381aa60054683eda8a5462/icon.csv)

split.csv assigns each of the 10,364 annotation IDs to exactly one split, and the IDs match the JSON file names in mocondata.zip one to one. Screenshot images are referenced by file name; pairing the annotations with pixels requires images from outside this repository. The publisher states no counts; all counts were computed from the released files.

### License declarations

- code: not recorded
- data: cc-by-nc-sa-4.0 — https://huggingface.co/datasets/OpenDFM/MoCon/raw/e37127c9ad04ccd5a1381aa60054683eda8a5462/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/OpenDFM/MoCon/raw/e37127c9ad04ccd5a1381aa60054683eda8a5462/README.md (retrieved 2026-10-18T16:15:57Z; SHA-256 7d930295e3a7b1cc8b1b186a242f53963214df78156567e90184b39ebbf479dd)
- https://huggingface.co/api/datasets/OpenDFM/MoCon (retrieved 2026-10-18T16:15:56Z; SHA-256 9ddd265eeda4ed7439927fefd24805573c46fb9ee072341b8129a377d720f8f5)
- https://huggingface.co/api/datasets/OpenDFM/MoCon/tree/e37127c9ad04ccd5a1381aa60054683eda8a5462 (retrieved 2026-10-18T16:16:12Z; SHA-256 4cbfe0afb8a5b37901a986d9bfcb38c2e6bd9455eebdb95879039c15c205d6a9)
- https://huggingface.co/datasets/OpenDFM/MoCon/resolve/e37127c9ad04ccd5a1381aa60054683eda8a5462/split.csv (retrieved 2026-10-18T16:15:58Z; SHA-256 281c3b35f822b9e7b278552c663718df17ba698fccc8ef65ef29280cbae2dd18)
- https://huggingface.co/datasets/OpenDFM/MoCon/resolve/e37127c9ad04ccd5a1381aa60054683eda8a5462/icon.csv (retrieved 2026-10-18T16:15:59Z; SHA-256 409e9b424de315eafd248f80030221b70c4f372355f88b1ce36b076c52db1ef5)
- https://huggingface.co/datasets/OpenDFM/MoCon/resolve/e37127c9ad04ccd5a1381aa60054683eda8a5462/MoGUI_Paper_v0.1.pdf (retrieved 2026-10-18T16:16:00Z; SHA-256 5f7a66c12756ae057bbd3216e45b874825e671769e751cd7efb31081d05a52f5)
- https://huggingface.co/datasets/OpenDFM/MoCon/raw/e37127c9ad04ccd5a1381aa60054683eda8a5462/README.md (retrieved 2026-10-18T16:15:57Z; SHA-256 7d930295e3a7b1cc8b1b186a242f53963214df78156567e90184b39ebbf479dd)

---

## MoGUI

Android app GUI crawl with per-app navigation graphs that link screen IDs through the UI action taken, plus 200 archive shards of the captured screens.

- Catalog URL: https://awesomecua.com/resources/url-be89a250747f507a27ef/
- Original source: https://huggingface.co/datasets/OpenDFM/MoGUI
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: screen-understanding, data-generation, mobile-navigation
- Evidence checked: 2026-10-19T06:19:12Z
- ID: url:be89a250747f507a27ef

### Limitations

The card carries the license, links and citation requests (MobA, META-GUI, CAM-GUI and a MoGUI/MoCon technical report); the announced complete report remains unlinked, leaving the paper relation unrecorded. The repository's MoGUI_Paper_v0.1.pdf is a two-page pre-release announcement without methods or statistics. Android is established by the metadata: Google Play package names, android.widget element classes and Android permission-controller screens. At revision 19639219 the manifest holds 200 metadata JSON shards, 200 moguidata tar.gz shards totalling about 1.14 TB, and an apk_infos.json file of Google Play listing fields per package. Metadata shard 1 alone holds navigation graphs for 1,084 app packages listing 13,726 valid screens. A streamed read of the start of the first tar.gz shard showed per-app folders of PNG screenshots with same-named XML files. CC BY-NC-SA 4.0 is the card's data declaration. The sibling MoCon dataset is a separate release.

- Record JSON: https://awesomecua.com/resources/url-be89a250747f507a27ef/record.json

### Structured profile

- Formats: JSON, tar.gz archives, PNG, XML
- Modalities: UI action strings naming element text, package, widget class and bounds, screenshots (seen in a partial archive read), XML view hierarchies (seen in a partial archive read)
- Splits: not recorded
- Supervision: crawled screen-transition navigation graphs

#### Count observations

No count recorded.

Each metadata shard maps an app package to a root screen, a valid-screen list and a navigation graph whose nodes are screen hashes with next screens and the triggering actions. Only metadata shard 1 was counted; total app, screen and transition counts remain unspecified by the publisher, and file counts are a separate unit from samples.

### License declarations

- code: not recorded
- data: cc-by-nc-sa-4.0 — https://huggingface.co/datasets/OpenDFM/MoGUI/raw/19639219617d083a03e24842fc620e010cc63189/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/OpenDFM/MoGUI/raw/19639219617d083a03e24842fc620e010cc63189/README.md (retrieved 2026-10-19T06:19:12Z; SHA-256 bb6ec801aed5db9d540cf3ccbae6a5e6bc2c26348d69dd34c72c3d88a57492b8)
- https://huggingface.co/api/datasets/OpenDFM/MoGUI/revision/19639219617d083a03e24842fc620e010cc63189 (retrieved 2026-10-19T06:19:11Z; SHA-256 aa4356912f147cade9b4f9067103beff80dc594f7b6562f6ae61ac4b9ef9bb71)
- https://huggingface.co/datasets/OpenDFM/MoGUI/resolve/19639219617d083a03e24842fc620e010cc63189/metadata/data_00001_of_00200.json (retrieved 2026-10-18T16:04:11Z; SHA-256 758a3c377b240a779d73b96b4c2ac5a185c99e0dc04bbda5d4dbcaa3ae59f166)
- https://huggingface.co/api/datasets/OpenDFM/MoGUI/tree/19639219617d083a03e24842fc620e010cc63189/moguidata (retrieved 2026-10-18T16:04:13Z; SHA-256 a518ed2d7726225d4c399bdd06c3d9e1a5333425b6dd86446e3d22f2fef1a007)
- https://huggingface.co/datasets/OpenDFM/MoGUI/resolve/19639219617d083a03e24842fc620e010cc63189/MoGUI_Paper_v0.1.pdf (retrieved 2026-10-18T16:04:23Z; SHA-256 5f7a66c12756ae057bbd3216e45b874825e671769e751cd7efb31081d05a52f5)
- https://huggingface.co/datasets/OpenDFM/MoGUI/raw/19639219617d083a03e24842fc620e010cc63189/README.md (retrieved 2026-10-19T06:19:12Z; SHA-256 bb6ec801aed5db9d540cf3ccbae6a5e6bc2c26348d69dd34c72c3d88a57492b8)

---

## MolmoPoint-GUISyn

Ai2's synthetic GUI grounding set of about 36K code-rendered desktop, mobile and web screenshots, each with dense element boxes, names and five natural-language intents per element for training pointing models.

- Catalog URL: https://awesomecua.com/resources/url-a7e3c6c6b37793c3151c/
- Original source: https://huggingface.co/datasets/allenai/MolmoPoint-GUISyn
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, windows, macos, linux, android, ios, web
- Topics: grounding, data-generation
- Evidence checked: 2026-10-19T06:17:16Z
- ID: url:a7e3c6c6b37793c3151c

### Limitations

Screenshots are rendered with headless Chromium from HTML that Claude Sonnet 4.6 wrote, so the Windows, macOS, Linux, iOS and Android labels describe simulated interfaces; the card says this content is subject to Anthropic's terms. Each example keeps its source HTML and generation metadata. The Hub repository also holds the MolmoPoint paper PDF; the generation pipeline and the companion pointing model are released separately.

- Record JSON: https://awesomecua.com/resources/url-a7e3c6c6b37793c3151c/record.json

### Structured profile

- Formats: Parquet
- Modalities: screenshots, HTML source, bounding boxes, instructions
- Splits: desktop train, desktop validation, mobile train, mobile validation, web train, web validation
- Supervision: synthetic GUI element annotations, element names, natural-language interaction intents

#### Count observations

- ≈ 36,000 screenshots — all three subsets as described in the card prose (reported; source: https://huggingface.co/datasets/allenai/MolmoPoint-GUISyn/raw/24bb3e990bb1e48796d80ade9dbc858dda695e75/README.md)
- 16,232 screenshot examples — desktop train split in the card metadata (reported; source: https://huggingface.co/datasets/allenai/MolmoPoint-GUISyn/raw/24bb3e990bb1e48796d80ade9dbc858dda695e75/README.md)
- 256 screenshot examples — desktop validation split in the card metadata (reported; source: https://huggingface.co/datasets/allenai/MolmoPoint-GUISyn/raw/24bb3e990bb1e48796d80ade9dbc858dda695e75/README.md)
- 9,830 screenshot examples — web train split in the card metadata (reported; source: https://huggingface.co/datasets/allenai/MolmoPoint-GUISyn/raw/24bb3e990bb1e48796d80ade9dbc858dda695e75/README.md)
- 256 screenshot examples — web validation split in the card metadata (reported; source: https://huggingface.co/datasets/allenai/MolmoPoint-GUISyn/raw/24bb3e990bb1e48796d80ade9dbc858dda695e75/README.md)
- ≈ 10,500 screenshot examples — mobile subset as described in the card prose (reported; source: https://huggingface.co/datasets/allenai/MolmoPoint-GUISyn/raw/24bb3e990bb1e48796d80ade9dbc858dda695e75/README.md)

The card metadata gives split sizes for the desktop and web configurations only; the mobile configuration's sizes appear only as the prose figure of 10.5K. The prose figures for desktop (16.6K) and web (10.2K) differ slightly from the metadata split totals (16,488 and 10,086). Each element carries a name, five intents and center/size coordinates; the card reports an average of 54 annotated elements per image. Annotations are LLM-generated.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: Conflicting declarations in the same card: the metadata header declares Apache-2.0, while the License section declares ODC-BY and adds that Claude-generated screenshots are subject to Anthropic's terms. The GitHub code license does not resolve the data terms.
  Sources: https://huggingface.co/datasets/allenai/MolmoPoint-GUISyn/raw/24bb3e990bb1e48796d80ade9dbc858dda695e75/README.md

### Primary evidence

- https://huggingface.co/datasets/allenai/MolmoPoint-GUISyn/raw/24bb3e990bb1e48796d80ade9dbc858dda695e75/README.md (retrieved 2026-10-19T06:17:16Z; SHA-256 74fe1e395b4121dec7ea222d2ee42d1b538f4d7445a2a59158d96d9208af01dd)
- https://huggingface.co/api/datasets/allenai/MolmoPoint-GUISyn/revision/24bb3e990bb1e48796d80ade9dbc858dda695e75 (retrieved 2026-10-19T06:17:16Z; SHA-256 df47b9fad1bfd4ec67013263cd4bfe1be0a32e3f303f2e13be068ac81bdc4101)
- https://huggingface.co/datasets/allenai/MolmoPoint-GUISyn/raw/24bb3e990bb1e48796d80ade9dbc858dda695e75/README.md (retrieved 2026-10-19T06:17:16Z; SHA-256 74fe1e395b4121dec7ea222d2ee42d1b538f4d7445a2a59158d96d9208af01dd)

---

## MoTIF

Mobile task demonstrations and natural-language instructions.

- Catalog URL: https://awesomecua.com/resources/github-aburns4-motif/
- Original source: https://github.com/aburns4/MoTIF
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation
- Evidence checked: 2026-10-16T06:36:01Z
- ID: github:aburns4/motif

- Record JSON: https://awesomecua.com/resources/github-aburns4-motif/record.json

### Structured profile

- Formats: JSON metadata, screen images
- Modalities: screenshots, view hierarchies, language, interaction sequences, feasibility labels
- Splits: not recorded
- Supervision: interaction trajectories, task feasibility

#### Count observations

No count recorded.

The raw collection mixes action, language, exploration, and unusable/other traces. These groups have different annotation coverage; valid task demonstrations are a subset of raw traces.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/aburns4/MoTIF/HEAD/README.md (retrieved 2026-10-16T06:36:01Z; SHA-256 4b2f5a23dc28e96b671272380b953e7fabaf34f4b1e83f3513643846718e3389)

---

## NAIL-Group/ClawBench

NAIL-Group/ClawBench releases task data for evaluating browser agents on live websites. Its card describes V1 and V2 corpora, task metadata, and loading through the datasets library.

- Catalog URL: https://awesomecua.com/resources/url-146edbaee6701bdb6ee0/
- Original source: https://huggingface.co/datasets/NAIL-Group/ClawBench
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation, data-generation
- Evidence checked: 2026-11-09T05:05:02Z
- ID: url:146edbaee6701bdb6ee0

### Limitations

The repository lists a Parquet data file, test cases, extra task information, and leaderboard results. The card declares an Apache-2.0 license and links companion trace datasets.

- Record JSON: https://awesomecua.com/resources/url-146edbaee6701bdb6ee0/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/NAIL-Group/ClawBench
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/NAIL-Group/ClawBench (retrieved 2026-11-09T05:05:02Z; SHA-256 324d28cf0a3bccc791f36ad98baeeea0ae2c3279d4a37562a9f63c846ba0b2dc)
- https://huggingface.co/api/datasets/NAIL-Group/ClawBench (retrieved 2026-11-09T05:05:02Z; SHA-256 324d28cf0a3bccc791f36ad98baeeea0ae2c3279d4a37562a9f63c846ba0b2dc)

---

## NAIL-Group/ClawBenchV1Trace

ClawBench V1 Traces releases browser-agent run records with screen video, actions, network traffic and agent messages for replay, debugging and regrading.

- Catalog URL: https://awesomecua.com/resources/url-e7653b062bded670198a/
- Original source: https://huggingface.co/datasets/NAIL-Group/ClawBenchV1Trace
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, observability, recording, web-navigation
- Evidence checked: 2026-11-09T05:05:10Z
- ID: url:e7653b062bded670198a

### Limitations

Each run directory includes metadata, recording.mp4, actions.jsonl, requests.jsonl, agent-messages.jsonl and interception.json. The card declares an Apache 2.0 license.

- Record JSON: https://awesomecua.com/resources/url-e7653b062bded670198a/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/NAIL-Group/ClawBenchV1Trace
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/NAIL-Group/ClawBenchV1Trace (retrieved 2026-11-09T05:05:10Z; SHA-256 548f66ce537d36b35656141469524f6f0a7a9fea92cc4cb37d60ede5421a57a5)
- https://huggingface.co/api/datasets/NAIL-Group/ClawBenchV1Trace (retrieved 2026-11-09T05:05:10Z; SHA-256 548f66ce537d36b35656141469524f6f0a7a9fea92cc4cb37d60ede5421a57a5)

---

## navi-bench

Task data for Navi-Bench, everyday web tasks on live websites: a 200-row validation split over ten sites such as Apartments, Craigslist and Google Flights, each with a task-generation config, domain and categories.

- Catalog URL: https://awesomecua.com/resources/url-5bbbc1012ab02e9df3bb/
- Original source: https://huggingface.co/datasets/yutori-ai/navi-bench
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation
- Evidence checked: 2026-11-10T03:01:04Z
- ID: url:5bbbc1012ab02e9df3bb

### Limitations

One parquet file with fields such as task_id, task_generation_config_json, env, domain, l1_category, l2_category and suggested_difficulty; the card declares Apache-2.0. The domain column covers ten sites: Resy, Zillow, Allbirds, Craigslist, Google Flights, OpenTable, Gymshark, Apartments, Redfin and Trip, 20 rows each; 66 of the 200 rows carry a suggested difficulty.

- Record JSON: https://awesomecua.com/resources/url-5bbbc1012ab02e9df3bb/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/yutori-ai/navi-bench
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/yutori-ai/navi-bench (retrieved 2026-11-10T03:01:04Z; SHA-256 8c41c65a4a1df2c3ba8602bace4dff99dc72529b18e72e15068346a332e95435)
- https://huggingface.co/api/datasets/yutori-ai/navi-bench (retrieved 2026-11-10T03:01:04Z; SHA-256 8c41c65a4a1df2c3ba8602bace4dff99dc72529b18e72e15068346a332e95435)

---

## NNetNav Live data

Browser-interaction data released with NNetNav for its live-website setting, with separate training and test files.

- Catalog URL: https://awesomecua.com/resources/url-4f47abde8cd28a1ec1e1/
- Original source: https://huggingface.co/datasets/stanfordnlp/nnetnav-live
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: data-generation, web-navigation
- Evidence checked: 2026-10-16T11:11:53Z
- ID: url:4f47abde8cd28a1ec1e1

### Limitations

The Hub card supplies a license but no detailed schema. Dataset purpose is supported by the project's README; exact sample counts and annotation quality remain unverified.

- Record JSON: https://awesomecua.com/resources/url-4f47abde8cd28a1ec1e1/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/stanfordnlp/nnetnav-live
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/stanfordnlp/nnetnav-live (retrieved 2026-10-16T11:11:53Z; SHA-256 d8f8571dfc583d3a46d5b3a6a285e77f17057b36a8111d416d711513aa4ecf16)
- https://raw.githubusercontent.com/MurtyShikhar/NNetnav/HEAD/README.md (retrieved 2026-10-16T10:42:34Z; SHA-256 3095f7262b7d4ff916c6f58c55e6fc9902c08f77d09bf3951199945501148bb3)
- https://huggingface.co/api/datasets/stanfordnlp/nnetnav-live (retrieved 2026-10-16T11:11:53Z; SHA-256 d8f8571dfc583d3a46d5b3a6a285e77f17057b36a8111d416d711513aa4ecf16)

---

## OneJev-Data

OneJev-Data releases 94,707 question-and-answer training rows spanning GUI-agent runs, screens, images, video and text in Parquet files.

- Catalog URL: https://awesomecua.com/resources/url-f2e2030eaee4250d995d/
- Original source: https://huggingface.co/datasets/OmniJev/OneJev-Data
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: data-generation, screen-understanding, video
- Evidence checked: 2026-11-09T19:56:33Z
- ID: url:f2e2030eaee4250d995d

### Limitations

The full training split is stored in 18 Parquet files, alongside a 100-row sample. Each row retains its source license, recorded in the license column and licenses.csv.

- Record JSON: https://awesomecua.com/resources/url-f2e2030eaee4250d995d/record.json

### License declarations

- code: not recorded
- data: other — https://huggingface.co/datasets/OmniJev/OneJev-Data
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/OmniJev/OneJev-Data (retrieved 2026-11-09T19:56:33Z; SHA-256 73166b2733fff59c6c924944c812fb307107832f4768bf33098aa2c04ce463b5)
- https://huggingface.co/api/datasets/OmniJev/OneJev-Data (retrieved 2026-11-09T19:56:33Z; SHA-256 73166b2733fff59c6c924944c812fb307107832f4768bf33098aa2c04ce463b5)

---

## OpenJev-Data

OpenJev-Data provides labeled browser steps for training models to choose a web agent's next operation and target element, plus a fixed test set for endpoint evaluation.

- Catalog URL: https://awesomecua.com/resources/url-a54a35c90681ced60cec/
- Original source: https://huggingface.co/datasets/alanhuangya/OpenJev-Data
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: action-prediction, web-navigation, evaluation, data-generation
- Evidence checked: 2026-11-09T19:57:36Z
- ID: url:a54a35c90681ced60cec

### Limitations

The card lists Parquet configurations with training, validation, and test splits. Its license field says mixed-see-card.

- Record JSON: https://awesomecua.com/resources/url-a54a35c90681ced60cec/record.json

### License declarations

- code: not recorded
- data: other — https://huggingface.co/datasets/alanhuangya/OpenJev-Data
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/alanhuangya/OpenJev-Data (retrieved 2026-11-09T19:57:36Z; SHA-256 7459e00d6843a6a8bfb39a17642ecf161efb97f351ccfecbdfedb13c2f95090d)
- https://huggingface.co/api/datasets/alanhuangya/OpenJev-Data (retrieved 2026-11-09T19:57:36Z; SHA-256 7459e00d6843a6a8bfb39a17642ecf161efb97f351ccfecbdfedb13c2f95090d)

---

## OpenPhone_dataset

Training data for the OpenPhone mobile agent: the AndroidLab training archive plus a Hugging Face vision-language set with LLM-generated reasoning and reflection chains, formatted for GRPO training.

- Catalog URL: https://awesomecua.com/resources/url-e7ea65893ab264517d83/
- Original source: https://huggingface.co/datasets/hkuds/OpenPhone_dataset
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, data-generation, reinforcement-learning
- Evidence checked: 2026-11-10T03:01:14Z
- ID: url:e7ea65893ab264517d83

### Limitations

Two zip archives: android-lab-train.zip, copied from the AndroidLab project, and android_lab_o1_visual_hf.zip, produced from it by the OpenPhone prepare_data scripts. The OpenPhone repository uses them for SFT with LLaMA-Factory and GRPO training of a Qwen2.5-VL-3B model. License: MIT.

- Record JSON: https://awesomecua.com/resources/url-e7ea65893ab264517d83/record.json

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/hkuds/OpenPhone_dataset
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/hkuds/OpenPhone_dataset (retrieved 2026-11-10T03:01:14Z; SHA-256 c8025c985de2d2b28592be5da74b2047e41b081d908de1d07cdfc8cf7b63d211)
- https://huggingface.co/api/datasets/hkuds/OpenPhone_dataset (retrieved 2026-11-10T03:01:14Z; SHA-256 c8025c985de2d2b28592be5da74b2047e41b081d908de1d07cdfc8cf7b63d211)

---

## OS-Copilot/OS-Shepherd-100K

A dataset of GUI agent trajectories and screenshots for training models to judge task completion, with supervised records and reinforcement learning splits.

- Catalog URL: https://awesomecua.com/resources/url-d716497286ae5cd5e762/
- Original source: https://huggingface.co/datasets/OS-Copilot/OS-Shepherd-100K
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: reward-models, data-generation, evaluation
- Evidence checked: 2026-11-09T19:57:44Z
- ID: url:d716497286ae5cd5e762

### Limitations

The card lists supervised JSON files, screenshot tar shards, and GRPO training and validation Parquet files. It also describes a mobile trajectory supplement.

- Record JSON: https://awesomecua.com/resources/url-d716497286ae5cd5e762/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/OS-Copilot/OS-Shepherd-100K (retrieved 2026-11-09T19:57:44Z; SHA-256 d4df1d3dc30c514bed42ee3c09c04de4e9c5fe6421ad8e2d15904920d2e7c7a8)
- https://huggingface.co/api/datasets/OS-Copilot/OS-Shepherd-100K (retrieved 2026-11-09T19:57:44Z; SHA-256 d4df1d3dc30c514bed42ee3c09c04de4e9c5fe6421ad8e2d15904920d2e7c7a8)

---

## OS-Copilot/OSReward

OSReward releases labeled computer-use trajectories with aligned screenshots in Full and Hard test sets for evaluating task-success judgments.

- Catalog URL: https://awesomecua.com/resources/url-e01658de14c2e62fbf20/
- Original source: https://huggingface.co/datasets/OS-Copilot/OSReward
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop, windows, linux, android
- Topics: evaluation, reward-models, data-generation
- Evidence checked: 2026-11-09T21:09:36Z
- ID: url:e01658de14c2e62fbf20

### Limitations

The card reports 1,019 Full trajectories and 284 Hard trajectories, stored as sharded Parquet files with embedded images and binary SUCCESS or FAIL labels. It cites arXiv:2607.28609.

- Record JSON: https://awesomecua.com/resources/url-e01658de14c2e62fbf20/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/OS-Copilot/OSReward (retrieved 2026-11-09T21:09:36Z; SHA-256 6f98b648853c9e98c1e12032773fcb03b5db49b34867c5de93a5f52927a848ad)
- https://huggingface.co/api/datasets/OS-Copilot/OSReward (retrieved 2026-11-09T21:09:36Z; SHA-256 6f98b648853c9e98c1e12032773fcb03b5db49b34867c5de93a5f52927a848ad)

---

## OSWorld 2.0 trajectories

XLang's gated release of OSWorld 2.0 agent runs: 21 ZIP result archives named by model and run settings, plus per-task trajectory JSONL, step screenshots, results and logs for seven model runs.

- Catalog URL: https://awesomecua.com/resources/url-3b4e6c30e1d095c22771/
- Original source: https://huggingface.co/datasets/xlangai/osworld2.0-trajectory
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: evaluation, long-horizon
- Evidence checked: 2026-10-18T12:07:35Z
- ID: url:3b4e6c30e1d095c22771

### Limitations

The repository is gated with automatic approval; its card could not be read without accepting the gate, and the Hub API carries no card metadata or license. The OSWorld-V2 README links it as the benchmark's trajectory download beside a hosted trajectory viewer. Some archive names carry the v2.1 label, a release the README dates after the paper, and step budgets of 150, 300 or 500; the runs include evaluations beyond the paper.

- Record JSON: https://awesomecua.com/resources/url-3b4e6c30e1d095c22771/record.json

### Structured profile

- Formats: ZIP archives, PNG, JSONL, JSON, text logs
- Modalities: screenshots, trajectory logs, result files, API usage records
- Splits: not recorded
- Supervision: agent run trajectories, evaluation results

#### Count observations

- 21 ZIP result archives — repository root at Hub revision a9cd5b05 (computed) (computed; source: https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0)
- 7 model run folders — website_demo folder at Hub revision a9cd5b05 (computed) (computed; source: https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo)
- 108 task folders — website_demo/MiniMax-M3/tasks at Hub revision a9cd5b05 (computed) (computed; source: https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/MiniMax-M3/tasks)
- 108 task folders — website_demo/claude-opus-4-7/tasks at Hub revision a9cd5b05 (computed) (computed; source: https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/claude-opus-4-7/tasks)
- 108 task folders — website_demo/claude-sonnet-4-6-max/tasks at Hub revision a9cd5b05 (computed) (computed; source: https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/claude-sonnet-4-6-max/tasks)
- 108 task folders — website_demo/claude-sonnet-4-6-medium/tasks at Hub revision a9cd5b05 (computed) (computed; source: https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/claude-sonnet-4-6-medium/tasks)
- 108 task folders — website_demo/gpt-5.5/tasks at Hub revision a9cd5b05 (computed) (computed; source: https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/gpt-5.5/tasks)
- 107 task folders — website_demo/gpt-5.6/tasks at Hub revision a9cd5b05 (computed) (computed; source: https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/gpt-5.6/tasks)
- 108 task folders — website_demo/qwen3.7/tasks at Hub revision a9cd5b05 (computed) (computed; source: https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/qwen3.7/tasks)

Counts come from the Hub tree listings at the pinned revision. A task folder is one model's run of one task; folders across models overlap by task, with 107 folders for gpt-5.6 and 108 for the others. The inspected folder website_demo/MiniMax-M3/tasks/001 holds traj.jsonl, 501 PNG step screenshots, result and per-step-budget result files, eval and runtime logs, checkpoint results and API usage. ZIP archive contents and their trajectory counts are unknown.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: No data-license declaration is readable: the card is behind the access gate and the Hub API has no card metadata.
  Sources: https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory

### Primary evidence

- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory (retrieved 2026-10-18T12:07:35Z; SHA-256 691732625f39ef050607d3795e9d1bc9a75fa1c7fb78c65775b4d0288dc662ea)
- https://raw.githubusercontent.com/xlang-ai/OSWorld-V2/d9953673daf55381237e058fd9388cc2d74c5538/README.md (retrieved 2026-10-18T12:07:36Z; SHA-256 0d1d3e91e8786720a167b8bc26a41bd27832eefae652ab1c166193073e99b2b4)
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0 (retrieved 2026-10-18T12:07:36Z; SHA-256 ea47577538434f9f4095efec3ab5df156cdb90132c4b226c64c53ba861a34fbe)
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo (retrieved 2026-10-18T12:07:37Z; SHA-256 9049b14cdecc2be6a23eae60362769f2eea4284454f3d35a0a0e6d20a86a2bf0)
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/MiniMax-M3/tasks (retrieved 2026-10-18T12:07:37Z; SHA-256 e66da738b64af2d79bbae9f75befa2423c6e2bdb00941c7f12afb58d9413c083)
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/claude-opus-4-7/tasks (retrieved 2026-10-18T12:07:37Z; SHA-256 4e51c4903cc95fb305a39e4f6eb5d496aa5c67f47c499f6185d922fac6cd4bc3)
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/claude-sonnet-4-6-max/tasks (retrieved 2026-10-18T12:07:37Z; SHA-256 24e4bd257eb6a7a0b015227b726057f587fd617d26878d88208d1871877169be)
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/claude-sonnet-4-6-medium/tasks (retrieved 2026-10-18T12:07:37Z; SHA-256 7892c77e47a846b79191df5dd94b44671c96343d34ca0dc13685300b36592253)
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/gpt-5.5/tasks (retrieved 2026-10-18T12:07:37Z; SHA-256 842dee0c38022622e0b6f226fc78fb83ff18e28ee7debe21c81717ea0cb50388)
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/gpt-5.6/tasks (retrieved 2026-10-18T12:07:38Z; SHA-256 adf4626b61ff2cdffe049d18ac335b9abb31b5d80c52a7053e3f4a26ca4248a6)
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/qwen3.7/tasks (retrieved 2026-10-18T12:07:38Z; SHA-256 1ce80893f5c161008d75aba19ddc25db10b169c9b5047a9530668bf5b72768e7)
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory/tree/a9cd5b050c26012f21515b227d6b9c7af728a8f0/website_demo/MiniMax-M3/tasks/001 (retrieved 2026-10-18T12:07:38Z; SHA-256 2381fce2e44ea97602a22d0dac4f6a2879860e04800bfd3f0552eb3e6ace38d5)
- https://huggingface.co/api/datasets/xlangai/osworld2.0-trajectory (retrieved 2026-10-18T12:07:35Z; SHA-256 691732625f39ef050607d3795e9d1bc9a75fa1c7fb78c65775b4d0288dc662ea)

---

## OSWorld-Science task data

Gated Hub release of OSWorld-Science task definitions, staged inputs, grader references and prepared Ubuntu VM images for computer-use agents working in scientific software.

- Catalog URL: https://awesomecua.com/resources/url-263e82b29d4fca964463/
- Original source: https://huggingface.co/datasets/SciAILab/OSWorld-Science-data
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: evaluation, science
- Evidence checked: 2026-10-18T12:33:40Z
- ID: url:263e82b29d4fca964463

### Limitations

Access requires manual approval by the publisher; the record rests on the public Hub metadata and file list, the paper and the benchmark README. The paper says the release holds all question sets and images and carries a contamination watermark; the benchmark README says it includes answer keys. The Windows/ANSYS image is not part of the release. Hub metadata declares CC-BY-NC-4.0 for the data; bundled scientific software and third-party inputs keep their own terms.

- Record JSON: https://awesomecua.com/resources/url-263e82b29d4fca964463/record.json

### Structured profile

- Formats: JSON, QCOW2, Python, CSV
- Modalities: task instructions, input files, reference outputs, VM disk images
- Splits: not recorded
- Supervision: expert-defined task definitions, grader reference files

#### Count observations

- 153 task-definition JSON files — <domain>/tasks/ at Hub revision 9b8de9ad (chem 44, biomed 34, physics 31, stat 20, eeg 10, econ 6, geoscience 6, linguistics 2) (computed) (computed; source: https://huggingface.co/api/datasets/SciAILab/OSWorld-Science-data/revision/9b8de9ad9325c87fbeba90e0676e8d640be70681)
- 115 translated task files — ablation/ at Hub revision 9b8de9ad (23 each in es, fr, ja, th, zh) (computed) (computed; source: https://huggingface.co/api/datasets/SciAILab/OSWorld-Science-data/revision/9b8de9ad9325c87fbeba90e0676e8d640be70681)
- 11 QCOW2 VM images — files at Hub revision 9b8de9ad (computed) (computed; source: https://huggingface.co/api/datasets/SciAILab/OSWorld-Science-data/revision/9b8de9ad9325c87fbeba90e0676e8d640be70681)
- 2,759 files — Hub repository at revision 9b8de9ad (computed) (computed; source: https://huggingface.co/api/datasets/SciAILab/OSWorld-Science-data/revision/9b8de9ad9325c87fbeba90e0676e8d640be70681)

All counts come from a script over the pinned Hub file list; no file was downloaded. The paper and README report 146 tasks in seven domains, while the listing has 153 task files in eight domain folders, including six econ tasks; a task file is a definition, while an agent run is a different unit. Task files, translated variants, images and files are different units and are counted separately.

### License declarations

- code: not recorded
- data: cc-by-nc-4.0 — https://huggingface.co/datasets/SciAILab/OSWorld-Science-data
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/SciAILab/OSWorld-Science-data/revision/9b8de9ad9325c87fbeba90e0676e8d640be70681 (retrieved 2026-10-18T12:33:40Z; SHA-256 68262ed16b86bb34261d6be0051011ee459bade323689bb38703342148ccb28e)
- https://raw.githubusercontent.com/DiscoAILab/OSWorld-Science/HEAD/README.md (retrieved 2026-10-18T12:32:26Z; SHA-256 5871a62e7dac017cbb16017bc28b956aa20058193aebced9505210f34fdc7057)
- https://arxiv.org/html/2609.39903v1 (retrieved 2026-10-18T12:32:28Z; SHA-256 b4878955429b6b8d177c7d18fde30004fafd1973dda36f7d0412fb61dd2b0178)
- https://huggingface.co/api/datasets/SciAILab/OSWorld-Science-data/revision/9b8de9ad9325c87fbeba90e0676e8d640be70681 (retrieved 2026-10-18T12:33:40Z; SHA-256 68262ed16b86bb34261d6be0051011ee459bade323689bb38703342148ccb28e)

---

## OSWorld-V2 0624 Codex attempt trajectories

Self-reported OSWorld-V2 run of a Codex-based harness with gpt-5.6-sol on all 108 tasks: per-step CLI and GUI actions, screenshots and scores, plus retried attempts and the solution and recovery cards that guided them.

- Catalog URL: https://awesomecua.com/resources/url-9112dfcb201f2de7241f/
- Original source: https://huggingface.co/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: evaluation, observability
- Evidence checked: 2026-10-18T15:49:15Z
- ID: url:9112dfcb201f2de7241f

### Limitations

The card calls this a self-reported trajectory package; it links no paper or harness code, and the run was not listed in the official OSWorld-V2 leaderboard data when checked on 2026-10-18. run_manifest.json records benchmark release osworld-v2-2026.06.24, a Docker provider with a QEMU backend at 1920x1080, a 400-step limit, a screenshot at every step with accessibility tree and OCR on demand, and a multi-attempt policy with one reported result per task. Per task_results.csv, 83 reported results come from initial attempts, 22 from recovery attempts and 3 from retries; the preview table names a different selected attempt for 6 tasks, and the manifest and summary.json give different recovery limits (2 and 3). Each attempt has a card written as instructions to the agent: the solution card opened for task 001 lists the exact schedule entries to enter, the events to delete and the final checks, and the recovery card opened for task 002 plans a guided retry from its parent attempt. summary.json reports a mean score of 0.661 and 43 binary passes over 108 tasks (the preview table marks 44 because task 015 scores 0.9999999999999999); these are publisher measurements from guided, multi-attempt runs. Linux is established from the Ubuntu Calendar target and /home/user shell commands in task 001. The card declares no license.

- Record JSON: https://awesomecua.com/resources/url-9112dfcb201f2de7241f/record.json

### Structured profile

- Formats: JSONL, JSON, PNG, CSV, Parquet
- Modalities: screenshots, action trajectories, task guidance cards, scores
- Splits: not recorded
- Supervision: agent-generated trajectories, evaluator task scores

#### Count observations

- 108 tasks — OSWorld-V2 v2026.06.24 tasks 001-108 in this run (reported; source: https://huggingface.co/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/raw/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2/run_manifest.json)
- 108 reported task folders with traj.jsonl — Hub manifest at revision 523e49b9 (computed) (computed; source: https://huggingface.co/api/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/revision/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2)
- 154 retained earlier-attempt folders — Hub manifest at revision 523e49b9 (computed) (computed; source: https://huggingface.co/api/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/revision/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2)
- 132 solution cards — Hub manifest at revision 523e49b9 (computed) (computed; source: https://huggingface.co/api/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/revision/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2)
- 51 recovery cards — Hub manifest at revision 523e49b9 (computed) (computed; source: https://huggingface.co/api/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/revision/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2)
- 12,868 PNG screenshots in reported task folders — Hub manifest at revision 523e49b9 (computed) (computed; source: https://huggingface.co/api/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/revision/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2)
- 16,400 PNG screenshots in earlier-attempt folders — Hub manifest at revision 523e49b9 (computed) (computed; source: https://huggingface.co/api/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/revision/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2)

Counts come from a script over the pinned Hub file list; tasks, folders, cards and screenshots are different units and are counted separately. The manifest's own card totals (132 solution, 51 recovery) match the file list. The preview Parquet and CSV tables are derived indexes of the same trajectories. Scores come from the benchmark evaluator as reported by the publisher; no trajectory was replayed.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: Neither the card metadata nor the file list at this revision declares a license, so no data grant is established. Agent outputs and logged third-party content keep their own terms.
  Sources: https://huggingface.co/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/raw/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2/README.md

### Primary evidence

- https://huggingface.co/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/raw/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2/README.md (retrieved 2026-10-18T15:49:15Z; SHA-256 73f86ad3b7fac604225cb982469db22ac68d863cbe0a636e3bee40fd0e7a5bdb)
- https://huggingface.co/api/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/revision/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2 (retrieved 2026-10-18T15:49:14Z; SHA-256 1f1a6cabddd3e68b93b61bb78648788d88df4ca829ebc0d3cc4542049e906857)
- https://huggingface.co/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/raw/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2/run_manifest.json (retrieved 2026-10-18T15:49:14Z; SHA-256 5bb8864f430494a989c86a8717ec1e210e63d16d58a3593990c4986a949a5f20)
- https://huggingface.co/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/raw/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2/summary.json (retrieved 2026-10-18T15:49:14Z; SHA-256 1dab011e8a4f1ed1ca5d0da13252f0ac8fd894d07fe6e286bae041bdb059507d)
- https://huggingface.co/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/raw/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2/task_results.csv (retrieved 2026-10-18T15:49:14Z; SHA-256 dfc978893fc67eeeea8ed1677edde5f6425829f4c3439d8c7b8812ed3384279d)
- https://huggingface.co/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/raw/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2/preview/task_summary.csv (retrieved 2026-10-18T15:49:14Z; SHA-256 dc8267b5a34741f2386d363a8f1ab465db026925c2f52239b5290872d0b572ac)
- https://huggingface.co/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/raw/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2/cards/001/attempt_001/solution_card.json (retrieved 2026-10-18T15:49:14Z; SHA-256 131afcc6939d517594c70890e250d3e8202d4c9c7662e865921eff120e605c00)
- https://huggingface.co/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/raw/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2/cards/002/attempt_002/recovery_card.json (retrieved 2026-10-18T15:49:14Z; SHA-256 7ee876e0e0322f815cc2d8ee171cf721c0680c9396d6cabf32ef4aae32457ff4)
- https://huggingface.co/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/raw/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2/tasks/001/traj.jsonl (retrieved 2026-10-18T15:49:14Z; SHA-256 6450de28c3909d27bbb25099589b4c5bfc65daa42be9d21a31b4ad25e3b47f1b)

---

## P-GUI-Evo

A synthetic dataset of 622 GUI scenarios for evaluating how agents extract privacy rules, judge proposed actions, and respond to user feedback.

- Catalog URL: https://awesomecua.com/resources/url-b79ca6f7731ebf067709/
- Original source: https://huggingface.co/datasets/Keonq/P-GUI-Evo
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: safety-security, evaluation, screen-understanding, data-generation
- Evidence checked: 2026-11-09T19:56:40Z
- ID: url:b79ca6f7731ebf067709

### Limitations

The release describes D1, D2 and D3 evaluation buckets with JSONL manifests and screenshot images. The card declares a CC BY 4.0 license.

- Record JSON: https://awesomecua.com/resources/url-b79ca6f7731ebf067709/record.json

### License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/Keonq/P-GUI-Evo
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/Keonq/P-GUI-Evo (retrieved 2026-11-09T19:56:40Z; SHA-256 660eb1b5d563fdf5f75e5f9b0089e5c8c82ec3deddcb6fb3ee4b3144621bfc31)
- https://huggingface.co/api/datasets/Keonq/P-GUI-Evo (retrieved 2026-11-09T19:56:40Z; SHA-256 660eb1b5d563fdf5f75e5f9b0089e5c8c82ec3deddcb6fb3ee4b3144621bfc31)

---

## pae-data

pae-data releases data associated with PAE research on internet agents, including task files for WebArena and WebVoyager and model checkpoint files.

- Catalog URL: https://awesomecua.com/resources/url-72301bf2dec104205c8d/
- Original source: https://huggingface.co/datasets/yifeizhou/pae-data
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, data-generation, evaluation
- Evidence checked: 2026-11-09T19:57:11Z
- ID: url:72301bf2dec104205c8d

### Limitations

The repository file list includes JSONL task sets, an example archive, and checkpoint files. The rendered page lists a CC BY 4.0 license and requires accepting access conditions.

- Record JSON: https://awesomecua.com/resources/url-72301bf2dec104205c8d/record.json

### License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/yifeizhou/pae-data
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/yifeizhou/pae-data (retrieved 2026-11-09T19:57:11Z; SHA-256 9a6673f9c8b9eeca2b641e402ac60e3adf9b8881fcd8d47805afb18bed3b92d0)
- https://huggingface.co/api/datasets/yifeizhou/pae-data (retrieved 2026-11-09T19:57:11Z; SHA-256 9a6673f9c8b9eeca2b641e402ac60e3adf9b8881fcd8d47805afb18bed3b92d0)

---

## Pathology-Dataset

Task set for the Orion computer-using agent's digital pathology task in QuPath: tutorial material, lymph-node metastasis segmentation on CAMELYON slides and TP53 index calculation, with test suites.

- Catalog URL: https://awesomecua.com/resources/url-6aa8885dd2c713b4c64f/
- Original source: https://huggingface.co/datasets/orion-agent/Pathology-Dataset
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: science, evaluation
- Evidence checked: 2026-11-10T06:29:24Z
- ID: url:6aa8885dd2c713b4c64f

### Limitations

Gated dataset of about 4.75 GB. The tutorial split reuses QuPath documentation and a slide, the segmentation split uses H&E sentinel lymph node sections from CAMELYON, and the TP53 split uses a tissue microarray from the Human Protein Atlas; a download script fetches large slides.

- Record JSON: https://awesomecua.com/resources/url-6aa8885dd2c713b4c64f/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/orion-agent/Pathology-Dataset (retrieved 2026-11-10T06:29:24Z; SHA-256 3eaf0b6b0b65369b9491b5c37b485ef4187fd108b3c198a642ee67647d332ae3)
- https://huggingface.co/api/datasets/orion-agent/Pathology-Dataset (retrieved 2026-11-10T06:29:24Z; SHA-256 3eaf0b6b0b65369b9491b5c37b485ef4187fd108b3c198a642ee67647d332ae3)

---

## PC-Agent-E training data

Released dataset used to train PC-Agent-E, linked by the official pipeline for refining human trajectories and synthesizing action reasoning.

- Catalog URL: https://awesomecua.com/resources/url-14449fe321e0a1ca34ea/
- Original source: https://huggingface.co/datasets/henryhe0123/PC-Agent-E
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, windows, linux
- Topics: data-generation, imitation-learning
- Evidence checked: 2026-10-18T04:27:13Z
- ID: url:14449fe321e0a1ca34ea

### Limitations

Hub release contains data.zip. Training-purpose and platform descriptions come from the official pipeline README; the brief card establishes the paper association and MIT data declaration.

- Record JSON: https://awesomecua.com/resources/url-14449fe321e0a1ca34ea/record.json

### Structured profile

- Formats: ZIP package
- Modalities: GUI screenshots, action trajectories, generated reasoning
- Splits: training
- Supervision: human demonstration refinement, generated action reasoning, trajectory augmentation

#### Count observations

No count recorded.

Public manifest exposes data.zip; the internal file schema and number of examples remain unverified. Supervision describes the publisher’s refinement/thought-completion/trajectory-boost pipeline.

### License declarations

- code: not recorded
- data: MIT — https://huggingface.co/datasets/henryhe0123/PC-Agent-E/raw/4f64c7b055154bed9ffea677aa86aeb51a01cb73/README.md
- document: not recorded
- weights: not recorded

- data review: Publisher dataset-card declaration for this release.
  Sources: https://huggingface.co/datasets/henryhe0123/PC-Agent-E/raw/4f64c7b055154bed9ffea677aa86aeb51a01cb73/README.md

### Primary evidence

- https://raw.githubusercontent.com/GAIR-NLP/PC-Agent-E/HEAD/README.md (retrieved 2026-10-18T04:27:13Z; SHA-256 3ffb8c843c6acb8c2d5bbba11ba49d6b36cd566553a89974b6252a2bfd289d5d)
- https://huggingface.co/api/datasets/henryhe0123/PC-Agent-E (retrieved 2026-10-18T04:33:21Z; SHA-256 66f70ee2704cdf2e8847cfe04be05d9e14b3a3c1bee953e744f8209d6c9c2b85)
- https://huggingface.co/datasets/henryhe0123/PC-Agent-E/raw/4f64c7b055154bed9ffea677aa86aeb51a01cb73/README.md (retrieved 2026-10-18T04:35:17Z; SHA-256 4dfd1f3ec40f7ff3c94896955216cb60a25114b320caff29e909d296d375d6ef)

---

## Plan-and-Act training data

Planner and action-executor training examples for WebArena-Lite and WebVoyager, with model-specific processed files and raw trajectory annotations.

- Catalog URL: https://awesomecua.com/resources/url-ba6453cfdae0eb049ced/
- Original source: https://huggingface.co/datasets/xTRam1/plan-and-act-data
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: planning, web-navigation, data-generation
- Evidence checked: 2026-10-17T02:02:29Z
- ID: url:ba6453cfdae0eb049ced

### Limitations

The public manifest exposes JSON/JSONL data for planner and actor roles, including train and validation variants. The card declares MIT. Its loading examples use a different Hub repository identifier and omit the data/ prefix for one file; the inspected xTRam1 manifest records the file layout.

- Record JSON: https://awesomecua.com/resources/url-ba6453cfdae0eb049ced/record.json

### Structured profile

- Formats: JSON, JSONL
- Modalities: text, plans, actions
- Splits: train (QwQ-32B files), validation (QwQ-32B files)
- Supervision: high-level plans, action execution

#### Count observations

No count recorded.

The release contains planner and actor files for two web environments. No sample count is inferred from the package-file manifest. Card loading examples have repository/path inconsistencies.

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/xTRam1/plan-and-act-data/raw/main/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/xTRam1/plan-and-act-data/raw/main/README.md (retrieved 2026-10-17T02:02:29Z; SHA-256 2ec8f4a03b8331bdd2ba8d6f6800d6dea9d955cfd9e7c1d2168ecb64deb25448)
- https://huggingface.co/api/datasets/xTRam1/plan-and-act-data (retrieved 2026-10-17T02:02:28Z; SHA-256 a98f98b7d4ceb81b00f217983ff271257f2f1e7d2c1a09836b872b2350d79ae9)
- https://huggingface.co/datasets/xTRam1/plan-and-act-data/raw/main/README.md (retrieved 2026-10-17T02:02:29Z; SHA-256 2ec8f4a03b8331bdd2ba8d6f6800d6dea9d955cfd9e7c1d2168ecb64deb25448)

---

## Preflight Bench

A dataset of paired screenshots, click outcomes and checker answers for evaluating pre-click checks on changing web pages. It includes Lance tables and development and test splits.

- Catalog URL: https://awesomecua.com/resources/url-a40fc87ac700add33232/
- Original source: https://huggingface.co/datasets/multimodal-ai-engineering/preflight-bench
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, state-tracking, data-generation
- Evidence checked: 2026-11-09T19:57:47Z
- ID: url:a40fc87ac700add33232

### Limitations

The card lists click_pairs, outcome_pairs and checker_answers tables. It states that the data uses six synthetic web pages and includes labels for both splits. The card declares a CC BY 4.0 license.

- Record JSON: https://awesomecua.com/resources/url-a40fc87ac700add33232/record.json

### License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/multimodal-ai-engineering/preflight-bench
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/multimodal-ai-engineering/preflight-bench (retrieved 2026-11-09T19:57:47Z; SHA-256 f7182f98fbd70b45239f75146b3e5582a957669410575d228cf89de6720411e6)
- https://huggingface.co/api/datasets/multimodal-ai-engineering/preflight-bench (retrieved 2026-11-09T19:57:47Z; SHA-256 f7182f98fbd70b45239f75146b3e5582a957669410575d228cf89de6720411e6)

---

## PrivScreen

PrivScreen is a dataset associated with research on protecting privacy in mobile-agent screenshots; its repository contains images and question-answer files.

- Catalog URL: https://awesomecua.com/resources/url-a0f2b96269c91c5c815c/
- Original source: https://huggingface.co/datasets/fyzzzzzz/PrivScreen
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: safety-security, data-generation
- Evidence checked: 2026-11-09T21:08:34Z
- ID: url:a0f2b96269c91c5c815c

### Limitations

The listed files include website screenshot images and normal and privacy question-answer JSON files. The card says the data is synthetic, anonymized, or legally sourced and intended for research and safety development.

- Record JSON: https://awesomecua.com/resources/url-a0f2b96269c91c5c815c/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/fyzzzzzz/PrivScreen (retrieved 2026-11-09T21:08:34Z; SHA-256 e63543a82296eaf5a2ad16075a301ceee2432b9fc07958fdb46456a14850233c)
- https://huggingface.co/api/datasets/fyzzzzzz/PrivScreen (retrieved 2026-11-09T21:08:34Z; SHA-256 e63543a82296eaf5a2ad16075a301ceee2432b9fc07958fdb46456a14850233c)

---

## PSAI computer-use dataset

Human computer-use recordings for 3,167 browser and desktop tasks, each with a screen video, input events and reasoning steps, plus screenshots or DOM snapshots for part of the tasks.

- Catalog URL: https://awesomecua.com/resources/url-10a75e1b7b975b3617ae/
- Original source: https://huggingface.co/datasets/anaisleila/computer-use-data-psai
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web, desktop, windows, macos
- Topics: data-generation, recording, video
- Evidence checked: 2026-10-18T12:12:10Z
- ID: url:10a75e1b7b975b3617ae

### Limitations

Released by Paradigm Shift AI. The card reports 2,220 browser and 947 computer tasks over 294 websites and 173 applications, labels most tasks cross-platform with a few Windows or macOS tasks, and says human vendors performed the tasks under signed release agreements but that recordings may contain personal information. Hub API at revision 0e1b7c63: not gated, 16 parquet shards, 3,167 MP4 videos and 1,766 DOM-snapshot zips; there is no LICENSE file in the repository. The card metadata declares MIT for the data.

- Record JSON: https://awesomecua.com/resources/url-10a75e1b7b975b3617ae/record.json

### Structured profile

- Formats: Parquet, MP4, zip archives, JSON strings
- Modalities: screen videos, screenshots, DOM snapshots, keyboard and mouse events, task metadata
- Splits: train
- Supervision: human computer-use demonstrations, reasoning steps

#### Count observations

- 3,167 tasks — unique completed tasks in the train split (reported; source: https://huggingface.co/datasets/anaisleila/computer-use-data-psai/raw/0e1b7c63072833ba58b89dcfcc0cbac45107b0f4/README.md)
- 3,267 rows — train split rows, including 100 duplicate rows (reported; source: https://huggingface.co/datasets/anaisleila/computer-use-data-psai/raw/0e1b7c63072833ba58b89dcfcc0cbac45107b0f4/README.md)
- 14,740 screenshots — images embedded in the parquet files, covering 1,349 tasks (reported; source: https://huggingface.co/datasets/anaisleila/computer-use-data-psai/raw/0e1b7c63072833ba58b89dcfcc0cbac45107b0f4/README.md)
- 3,167 video files — videos/*.mp4 at revision 0e1b7c63 (computed) (computed; source: https://huggingface.co/api/datasets/anaisleila/computer-use-data-psai/revision/0e1b7c63072833ba58b89dcfcc0cbac45107b0f4)
- 1,766 DOM snapshot archives — dom_snaps/*.zip at revision 0e1b7c63 (computed) (computed; source: https://huggingface.co/api/datasets/anaisleila/computer-use-data-psai/revision/0e1b7c63072833ba58b89dcfcc0cbac45107b0f4)

Rows carry task name, category (browser or computer task), sub-categories, application or website, difficulty, OS label, login requirement, completion time, screenshots, video and DOM file paths, event JSON, reasoning steps and system metadata. Tasks share template IDs across vendors. Deduplicate on unique_data_id.

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/anaisleila/computer-use-data-psai/raw/0e1b7c63072833ba58b89dcfcc0cbac45107b0f4/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/anaisleila/computer-use-data-psai/raw/0e1b7c63072833ba58b89dcfcc0cbac45107b0f4/README.md (retrieved 2026-10-18T12:12:10Z; SHA-256 599cec3395df4562f867d0262183df8fc0bd6c2c3e871d518298772e4498c94e)
- https://huggingface.co/api/datasets/anaisleila/computer-use-data-psai/revision/0e1b7c63072833ba58b89dcfcc0cbac45107b0f4 (retrieved 2026-10-18T12:12:10Z; SHA-256 4b2708de50c2368246883bc0d62919cef0c6843c2172c5ec708d168a0670eaf7)
- https://huggingface.co/datasets/anaisleila/computer-use-data-psai/raw/0e1b7c63072833ba58b89dcfcc0cbac45107b0f4/README.md (retrieved 2026-10-18T12:12:10Z; SHA-256 599cec3395df4562f867d0262183df8fc0bd6c2c3e871d518298772e4498c94e)

---

## Regimes/androidcontrol-cl

AndroidControl-CL provides Android GUI screenshot trajectories and structured training and evaluation data for continual GUI learning.

- Catalog URL: https://awesomecua.com/resources/url-461e9b8305356347077e/
- Original source: https://huggingface.co/datasets/Regimes/androidcontrol-cl
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, data-generation, imitation-learning
- Evidence checked: 2026-11-09T21:08:54Z
- ID: url:461e9b8305356347077e

### Limitations

The card lists screenshot trajectories, JSONL files, Parquet files, and train and test splits organized by task category.

- Record JSON: https://awesomecua.com/resources/url-461e9b8305356347077e/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/Regimes/androidcontrol-cl (retrieved 2026-11-09T21:08:54Z; SHA-256 77b1e1ec0ae8579e928caa9ea305f82e2b71000bdab10805665b13d1afd49981)
- https://huggingface.co/api/datasets/Regimes/androidcontrol-cl (retrieved 2026-11-09T21:08:54Z; SHA-256 77b1e1ec0ae8579e928caa9ea305f82e2b71000bdab10805665b13d1afd49981)

---

## Screen Annotation

Google Research release of ScreenAI's Screen Annotation data: train, validation and test CSVs that describe the UI elements of Rico mobile screens by type, box coordinates, on-screen text and image captions.

- Catalog URL: https://awesomecua.com/resources/github-google-research-datasets-screen-annotation/
- Original source: https://github.com/google-research-datasets/screen_annotation
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: screen-understanding
- Evidence checked: 2026-10-18T12:32:42Z
- ID: github:google-research-datasets/screen_annotation

### Limitations

Each CSV row pairs a Rico screen ID with one text serialization of the screen's UI elements, nested by containment; screenshots come from Rico, which the Rico paper describes as Android apps. The README says the labels were produced automatically and then verified and corrected by human raters, and that the splits follow Screen2Words. Its per-split figures (15,743, 2,364 and 4,310 screenshots) are larger than the rows in the CSVs at commit 053a4a1c: 15,548 train, 2,311 valid and 4,217 test. The README names the columns image_id and label, while the files use screen_id and screen_annotation. CC BY 4.0 is the README's dataset declaration; the repository has no LICENSE file, and Rico screenshots keep their own terms.

- Record JSON: https://awesomecua.com/resources/github-google-research-datasets-screen-annotation/record.json

### Structured profile

- Formats: CSV
- Modalities: text annotations, bounding-box coordinates, Rico screen IDs
- Splits: train, valid, test
- Supervision: screen annotation: UI element type, location, text and image description

#### Count observations

- 15,743 screenshots — train split as stated in the README (Screen2Words split) (reported; source: https://raw.githubusercontent.com/google-research-datasets/screen_annotation/053a4a1c4737969def99fd36084d7adf3715798f/README.md)
- 2,364 screenshots — validation split as stated in the README (Screen2Words split) (reported; source: https://raw.githubusercontent.com/google-research-datasets/screen_annotation/053a4a1c4737969def99fd36084d7adf3715798f/README.md)
- 4,310 screenshots — test split as stated in the README (Screen2Words split) (reported; source: https://raw.githubusercontent.com/google-research-datasets/screen_annotation/053a4a1c4737969def99fd36084d7adf3715798f/README.md)
- 2,311 annotated screens (CSV rows) — valid.csv at commit 053a4a1c (computed) (computed; source: https://raw.githubusercontent.com/google-research-datasets/screen_annotation/053a4a1c4737969def99fd36084d7adf3715798f/valid.csv)
- 4,217 annotated screens (CSV rows) — test.csv at commit 053a4a1c (computed) (computed; source: https://raw.githubusercontent.com/google-research-datasets/screen_annotation/053a4a1c4737969def99fd36084d7adf3715798f/test.csv)

The README's split sizes count screenshots; the CSV row counts count annotated screens, one row per screen ID. train.csv holds 15,548 rows at the same commit. Labels were machine-generated and then verified and corrected by human raters, according to the README.

### License declarations

- code: not recorded
- data: CC-BY-4.0 — https://raw.githubusercontent.com/google-research-datasets/screen_annotation/053a4a1c4737969def99fd36084d7adf3715798f/README.md
- document: not recorded
- weights: not recorded

- data review: The README states that the dataset is licensed under CC BY 4.0; Rico screenshots keep their own terms.
  Sources: https://raw.githubusercontent.com/google-research-datasets/screen_annotation/053a4a1c4737969def99fd36084d7adf3715798f/README.md

### Primary evidence

- https://raw.githubusercontent.com/google-research-datasets/screen_annotation/053a4a1c4737969def99fd36084d7adf3715798f/README.md (retrieved 2026-10-18T12:32:42Z; SHA-256 db749dd869ced469a63b403173d9a69593778afc4afb43aacde4f2149d0485f9)
- https://api.github.com/repos/google-research-datasets/screen_annotation/git/trees/053a4a1c4737969def99fd36084d7adf3715798f?recursive=1 (retrieved 2026-10-18T12:32:43Z; SHA-256 ca12adf80ac7aa1efa98dab82d3a533fb40b49eeb8510f28df696788efa5236a)
- https://danafergan.com/publications/deka2017rico.pdf (retrieved 2026-10-18T12:33:11Z; SHA-256 a1ec58c526b152c052c5c72f9a62725f1026b5f0e4f45c8fe85fce284295da84)
- https://raw.githubusercontent.com/google-research-datasets/screen_annotation/053a4a1c4737969def99fd36084d7adf3715798f/valid.csv (retrieved 2026-10-18T12:32:44Z; SHA-256 a1f5928168d2dc71e70f41f8dcd7cc8f855d76bde709ddfd4b58e4660aa18457)
- https://raw.githubusercontent.com/google-research-datasets/screen_annotation/053a4a1c4737969def99fd36084d7adf3715798f/test.csv (retrieved 2026-10-18T12:32:44Z; SHA-256 db247ac02ce875c49c3429ae0bdfef0039cacc663598c61b7541f24342537f98)

---

## Screen2AX-Element

A dataset of macOS application screenshots with UI element boxes and category labels for training and evaluating interface element detectors.

- Catalog URL: https://awesomecua.com/resources/url-e96299566d12e790422e/
- Original source: https://huggingface.co/datasets/MacPaw/Screen2AX-Element
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, macos
- Topics: screen-understanding, grounding, evaluation
- Evidence checked: 2026-11-09T19:58:09Z
- ID: url:e96299566d12e790422e

### Limitations

The card lists train, valid, and test splits and declares an Apache 2.0 license.

- Record JSON: https://awesomecua.com/resources/url-e96299566d12e790422e/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/MacPaw/Screen2AX-Element
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/MacPaw/Screen2AX-Element (retrieved 2026-11-09T19:58:09Z; SHA-256 eeedf3d2243edcd2aa11df3e282731fe6d6c4d20f67a1834af2384130ab56ecd)
- https://huggingface.co/api/datasets/MacPaw/Screen2AX-Element (retrieved 2026-11-09T19:58:09Z; SHA-256 eeedf3d2243edcd2aa11df3e282731fe6d6c4d20f67a1834af2384130ab56ecd)
- https://huggingface.co/api/datasets/MacPaw/Screen2AX-Element (retrieved 2026-11-09T20:03:13Z; SHA-256 eeedf3d2243edcd2aa11df3e282731fe6d6c4d20f67a1834af2384130ab56ecd)
- https://huggingface.co/api/datasets/macpaw-research/Screen2AX-Element (retrieved 2026-11-09T20:03:13Z; SHA-256 eeedf3d2243edcd2aa11df3e282731fe6d6c4d20f67a1834af2384130ab56ecd)

---

## Screen2AX-Group

A dataset of macOS application screenshots with bounding boxes and UI group labels for training and evaluating interface object detection models.

- Catalog URL: https://awesomecua.com/resources/url-6680e812b94c168e6bed/
- Original source: https://huggingface.co/datasets/MacPaw/Screen2AX-Group
- Kind: dataset
- Review: curated
- Scope: adjacent
- Environments: desktop, macos
- Topics: screen-understanding, grounding, evaluation
- Evidence checked: 2026-11-09T19:56:42Z
- ID: url:6680e812b94c168e6bed

### Limitations

The release provides train, valid and test splits in Parquet files. Each sample has an image and objects with bounding boxes and category labels. The card declares an Apache 2.0 license.

- Record JSON: https://awesomecua.com/resources/url-6680e812b94c168e6bed/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/MacPaw/Screen2AX-Group
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/MacPaw/Screen2AX-Group (retrieved 2026-11-09T19:56:42Z; SHA-256 5cc9c0a1e97b60cbfb6b931ae3e5d30ee26aba6fc9468bc57f0b8380361cc7a5)
- https://huggingface.co/api/datasets/MacPaw/Screen2AX-Group (retrieved 2026-11-09T19:56:42Z; SHA-256 5cc9c0a1e97b60cbfb6b931ae3e5d30ee26aba6fc9468bc57f0b8380361cc7a5)
- https://huggingface.co/api/datasets/MacPaw/Screen2AX-Group (retrieved 2026-11-09T20:02:43Z; SHA-256 5cc9c0a1e97b60cbfb6b931ae3e5d30ee26aba6fc9468bc57f0b8380361cc7a5)
- https://huggingface.co/api/datasets/macpaw-research/Screen2AX-Group (retrieved 2026-11-09T20:02:43Z; SHA-256 5cc9c0a1e97b60cbfb6b931ae3e5d30ee26aba6fc9468bc57f0b8380361cc7a5)

---

## Screen2AX-Task

A macOS UI grounding dataset that pairs application screenshots and action commands with target bounding boxes and visual descriptions.

- Catalog URL: https://awesomecua.com/resources/url-97d846b5b33235f566a1/
- Original source: https://huggingface.co/datasets/MacPaw/Screen2AX-Task
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, macos
- Topics: grounding, screen-understanding, evaluation
- Evidence checked: 2026-11-09T21:09:04Z
- ID: url:97d846b5b33235f566a1

### Limitations

The card lists image, bounding-box coordinates, image dimensions, command and visual-description fields. It declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-97d846b5b33235f566a1/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/MacPaw/Screen2AX-Task
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/MacPaw/Screen2AX-Task (retrieved 2026-11-09T21:09:04Z; SHA-256 cfe2c81a380adacc6928662dac240b88fd760e191c178758099d368bf6768dde)
- https://huggingface.co/api/datasets/MacPaw/Screen2AX-Task (retrieved 2026-11-09T21:09:04Z; SHA-256 cfe2c81a380adacc6928662dac240b88fd760e191c178758099d368bf6768dde)
- https://huggingface.co/api/datasets/MacPaw/Screen2AX-Task (retrieved 2026-11-09T21:12:48Z; SHA-256 cfe2c81a380adacc6928662dac240b88fd760e191c178758099d368bf6768dde)
- https://huggingface.co/api/datasets/macpaw-research/Screen2AX-Task (retrieved 2026-11-09T21:12:48Z; SHA-256 cfe2c81a380adacc6928662dac240b88fd760e191c178758099d368bf6768dde)

---

## Screen2AX-Tree

A dataset of macOS application screenshots paired with serialized accessibility trees for training models to reconstruct UI hierarchies from visual input.

- Catalog URL: https://awesomecua.com/resources/url-3821c0d8516819a50d28/
- Original source: https://huggingface.co/datasets/MacPaw/Screen2AX-Tree
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, macos
- Topics: screen-understanding, data-generation
- Evidence checked: 2026-11-09T21:09:02Z
- ID: url:3821c0d8516819a50d28

### Limitations

The card lists image and accessibility fields and a train split. It declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-3821c0d8516819a50d28/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/MacPaw/Screen2AX-Tree
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/MacPaw/Screen2AX-Tree (retrieved 2026-11-09T21:09:02Z; SHA-256 cd5f7922f75322b8b9e58cc65499445fb2baa14f6df842732e91aced29b1236b)
- https://huggingface.co/api/datasets/MacPaw/Screen2AX-Tree (retrieved 2026-11-09T21:09:02Z; SHA-256 cd5f7922f75322b8b9e58cc65499445fb2baa14f6df842732e91aced29b1236b)
- https://huggingface.co/api/datasets/MacPaw/Screen2AX-Tree (retrieved 2026-11-09T21:12:47Z; SHA-256 cd5f7922f75322b8b9e58cc65499445fb2baa14f6df842732e91aced29b1236b)
- https://huggingface.co/api/datasets/macpaw-research/Screen2AX-Tree (retrieved 2026-11-09T21:12:48Z; SHA-256 cd5f7922f75322b8b9e58cc65499445fb2baa14f6df842732e91aced29b1236b)

---

## Screen2Words

Mobile screen descriptions for language-based screen understanding.

- Catalog URL: https://awesomecua.com/resources/github-google-research-datasets-screen2words/
- Original source: https://github.com/google-research-datasets/screen2words
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: screen-understanding
- Evidence checked: 2026-10-16T06:36:01Z
- ID: github:google-research-datasets/screen2words

- Record JSON: https://awesomecua.com/resources/github-google-research-datasets-screen2words/record.json

### Structured profile

- Formats: CSV
- Modalities: text summaries, RICO screen references
- Splits: train, dev, test
- Supervision: screen summarization

#### Count observations

- 112,085 summaries — screen2words release (reported; source: https://raw.githubusercontent.com/google-research-datasets/screen2words/HEAD/README.md)
- 22,417 screens — RICO screens referenced by screen2words (reported; source: https://raw.githubusercontent.com/google-research-datasets/screen2words/HEAD/README.md)

Multiple summaries describe one screen. The repository provides annotations and split files; use the referenced RICO assets for screenshots.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/google-research-datasets/screen2words/HEAD/README.md (retrieved 2026-10-16T06:36:01Z; SHA-256 8be66dc5a3907e0e84993a66679416d928ed1a32aae70db8bb0e0f771c7a8715)

---

## ScreenRef Annotations

Annotation files, task recipes, and image manifests for ScreenRef; screenshots reside in the separately gated image repository.

- Catalog URL: https://awesomecua.com/resources/url-c1db2ba79e6d6a3db2b9/
- Original source: https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, web, android, linux
- Topics: grounding, data-generation
- Evidence checked: 2026-10-17T01:48:10Z
- ID: url:c1db2ba79e6d6a3db2b9

### Limitations

The card declares restricted academic research use and no redistribution. Annotation coordinates use a normalized 1000 by 1000 space. Some source instructions name gestures other than the single-click target; the publisher recommends treating those as location supervision.

- Record JSON: https://awesomecua.com/resources/url-c1db2ba79e6d6a3db2b9/record.json

### Structured profile

- Formats: JSONL, JSON task recipes, TSV manifests
- Modalities: text, coordinates, image references
- Splits: full/train, point/train
- Supervision: instruction-to-click grounding, bounding boxes, absent-target abstention

#### Count observations

- 633,369 annotation rows — full recipe (reported; source: https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md)
- 610,894 annotation rows — point recipe (reported; source: https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md)

The recipes reuse source images and represent related views of the same dataset. This download contains no screenshots. Counts are publisher-reported; rows named for trajectories are independent decision examples.

### License declarations

- code: not recorded
- data: other — https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md (retrieved 2026-10-17T01:48:10Z; SHA-256 96a87222645c3f823e6f67e50708792e2917ddeb8eea5aacdf2de8c5bbff165f)
- https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md (retrieved 2026-10-17T01:48:10Z; SHA-256 96a87222645c3f823e6f67e50708792e2917ddeb8eea5aacdf2de8c5bbff165f)

---

## SE-GUI-3k

Seed training data for SE-GUI, a GUI grounding model trained with self-evolutionary reinforcement fine-tuning; each row pairs a tool-calling conversation and a screenshot with a target bounding box.

- Catalog URL: https://awesomecua.com/resources/url-380318a8de65fe45956c/
- Original source: https://huggingface.co/datasets/XinBB/SE-GUI-3k
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, reinforcement-learning
- Evidence checked: 2026-11-10T03:01:05Z
- ID: url:380318a8de65fe45956c

### Limitations

One SE-GUI-3k.json file of about 1.38 GB; the Hub viewer shows a single train split of 772 rows with six-value bbox fields. The SE-GUI README describes a 3,018-sample curated seed set used to train 3B and 7B Qwen2.5-VL grounding models; the repository has no card or license.

- Record JSON: https://awesomecua.com/resources/url-380318a8de65fe45956c/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/XinBB/SE-GUI-3k (retrieved 2026-11-10T03:01:05Z; SHA-256 dba30cb278f98b0bddff5c49747894c90fc832cebd52f50e73ca2ed79b91bd4a)
- https://huggingface.co/api/datasets/XinBB/SE-GUI-3k (retrieved 2026-11-10T03:01:05Z; SHA-256 dba30cb278f98b0bddff5c49747894c90fc832cebd52f50e73ca2ed79b91bd4a)

---

## sharryXR/asil-training-data

Training data for ASIL agents includes replayed action traces, guided supervision, and an evaluator-backed reinforcement-learning curriculum in JSONL and Parquet splits.

- Catalog URL: https://awesomecua.com/resources/url-e9423bcf01a8d6b078bc/
- Original source: https://huggingface.co/datasets/sharryXR/asil-training-data
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: data-generation, imitation-learning, reinforcement-learning
- Evidence checked: 2026-11-09T21:09:15Z
- ID: url:e9423bcf01a8d6b078bc

### Limitations

The card lists train and validation splits for supervised and reinforcement-learning data, plus a manifest and checksums. It declares a CC BY 4.0 license.

- Record JSON: https://awesomecua.com/resources/url-e9423bcf01a8d6b078bc/record.json

### License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/sharryXR/asil-training-data
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/sharryXR/asil-training-data (retrieved 2026-11-09T21:09:15Z; SHA-256 e64fb2f16482fca87ba948c98ba607a74d9111f51a44aab621791f9ba66a3028)
- https://huggingface.co/api/datasets/sharryXR/asil-training-data (retrieved 2026-11-09T21:09:15Z; SHA-256 e64fb2f16482fca87ba948c98ba607a74d9111f51a44aab621791f9ba66a3028)

---

## ShowUI-web

Web-interface grounding examples with instructions, element boxes and points, paired with a separately packaged screenshot archive.

- Catalog URL: https://awesomecua.com/resources/url-8933977bb0a57940ed23/
- Original source: https://huggingface.co/datasets/showlab/ShowUI-web
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: grounding, data-generation
- Evidence checked: 2026-10-17T02:42:32Z
- ID: url:8933977bb0a57940ed23

### Limitations

Public Parquet annotations, metadata JSON and images.tar.gz are present. The card refers to image.tar.gz in its extraction command, while the actual archive is plural. No data-license declaration is present; the ShowUI code or model licenses are not inherited.

- Record JSON: https://awesomecua.com/resources/url-8933977bb0a57940ed23/record.json

### Structured profile

- Formats: Parquet, JSON, TAR.GZ
- Modalities: screenshots, text, bounding boxes, points
- Splits: train
- Supervision: element grounding

#### Count observations

- 21,988 rows — train split (reported; source: https://huggingface.co/datasets/showlab/ShowUI-web/raw/main/README.md)

Row count is the card dataset_info value; one row may contain multiple instructions. The card summarizes screenshots as approximately 22K. No data license is declared.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/showlab/ShowUI-web/raw/main/README.md (retrieved 2026-10-17T02:42:32Z; SHA-256 08586aa1ded1f1a1f984fb55697fdb1007d86c7fdf4988a2dc1fcf3fdfd49a47)
- https://huggingface.co/api/datasets/showlab/ShowUI-web (retrieved 2026-10-17T02:42:32Z; SHA-256 12412480f1a3957069d9dcdc53abce4ad3e34be7dac7ca6fe1726d04764cadfd)

---

## ShowUI-web-8K

An 8K-sample subset of ShowUI-web with screenshots from varied websites for training GUI grounding models in web interfaces.

- Catalog URL: https://awesomecua.com/resources/url-2260aaa47fb9c63bb917/
- Original source: https://huggingface.co/datasets/zonghanHZH/ShowUI-web-8k
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: grounding, data-generation
- Evidence checked: 2026-11-09T19:57:15Z
- ID: url:2260aaa47fb9c63bb917

### Limitations

The card names ShowUI-web as the source dataset and declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-2260aaa47fb9c63bb917/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/zonghanHZH/ShowUI-web-8k
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/zonghanHZH/ShowUI-web-8k (retrieved 2026-11-09T19:57:15Z; SHA-256 172b24977469772785e35919560aa150f11bbd0c97377cefa2c3a6770e62239d)
- https://huggingface.co/api/datasets/zonghanHZH/ShowUI-web-8k (retrieved 2026-11-09T19:57:15Z; SHA-256 172b24977469772785e35919560aa150f11bbd0c97377cefa2c3a6770e62239d)

---

## ShowUI-π training data

Drag-and-click episode data for the ShowUI-π model, spanning desktop editing, presentation, handwriting and other interface tasks.

- Catalog URL: https://awesomecua.com/resources/url-3dab53c6c38c9e7217ea/
- Original source: https://huggingface.co/datasets/showlab/ShowUI-pi-data
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop
- Topics: grounding, action-prediction, imitation-learning
- Evidence checked: 2026-10-17T04:01:33Z
- ID: url:3dab53c6c38c9e7217ea

### Limitations

Public Parquet chunks and LeRobot metadata are present. The card names a v3.0 revision in its usage example. No data license is declared. Hub size-category bands describe storage size; episode counts use a different unit.

- Record JSON: https://awesomecua.com/resources/url-3dab53c6c38c9e7217ea/record.json

### Structured profile

- Formats: Parquet, LeRobot metadata
- Modalities: screenshots, instructions, actions
- Splits: not recorded
- Supervision: drag trajectories, click episodes

#### Count observations

No count recorded.

No sample or episode count is inferred from the size tag or package manifest. Main-branch files were inspected.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/showlab/ShowUI-pi-data/raw/main/README.md (retrieved 2026-10-17T04:01:33Z; SHA-256 0e3a2a923865ae24d0de590143e9e32564b0e20db059579582d6181cdcf75bf1)
- https://huggingface.co/api/datasets/showlab/ShowUI-pi-data (retrieved 2026-10-17T04:01:33Z; SHA-256 86fadf9a32185f018f6a8e49d52b39ee5c99c177075510361202dc25a214191f)

---

## Static-FineBench

Data for FineState-Bench, a fine-grained GUI state-control benchmark: desktop, web and mobile screenshots with XML and JSON annotations of locate and interact instructions and separate localization and interaction boxes.

- Catalog URL: https://awesomecua.com/resources/url-94adc54bf1cd168da768/
- Original source: https://huggingface.co/datasets/wumiaoshou/Static-FineBench
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, web, cross-platform
- Topics: grounding, evaluation, state-tracking
- Evidence checked: 2026-11-10T03:00:58Z
- ID: url:94adc54bf1cd168da768

### Limitations

The repository holds desktop, web and mobile screenshots with Pascal VOC-style XML annotations and per-category JSON annotation folders, with Chinese copies, and has no dataset card. The FineState-Bench GitHub repository holds the desktop, web and mobile evaluation scripts with Loc SR, Int SR, SA-Locate SR and SA-Interact SR metrics and declares the MIT License.

- Record JSON: https://awesomecua.com/resources/url-94adc54bf1cd168da768/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/wumiaoshou/Static-FineBench (retrieved 2026-11-10T03:00:58Z; SHA-256 b1d8c94f6f1618016211ae73cf5dcf2c177bf69e0d43d6090671721ad01b83dc)
- https://huggingface.co/api/datasets/wumiaoshou/Static-FineBench (retrieved 2026-11-10T03:00:58Z; SHA-256 b1d8c94f6f1618016211ae73cf5dcf2c177bf69e0d43d6090671721ad01b83dc)

---

## SWEeper-Bench

SWEeper-Bench provides tasks drawn from web application bugs for evaluating agents that inspect running apps and repair them. Each task includes a prompt, repository revisions, and browser behavior tests.

- Catalog URL: https://awesomecua.com/resources/url-9d35341e71dfd457fd79/
- Original source: https://huggingface.co/datasets/zlab-princeton/SWEeper-Bench
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation, workflow
- Evidence checked: 2026-11-09T21:09:37Z
- ID: url:9d35341e71dfd457fd79

### Limitations

The repository lists test data in JSONL and Parquet formats. The card describes 200 tasks, a separate runner, and a CC BY 4.0 license for this dataset.

- Record JSON: https://awesomecua.com/resources/url-9d35341e71dfd457fd79/record.json

### License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/zlab-princeton/SWEeper-Bench
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/zlab-princeton/SWEeper-Bench (retrieved 2026-11-09T21:09:37Z; SHA-256 cbbcfed6889c2a8622daa179c754fc7076d6a90d3a0a2538e2806f2ae330b1ff)
- https://huggingface.co/api/datasets/zlab-princeton/SWEeper-Bench (retrieved 2026-11-09T21:09:37Z; SHA-256 cbbcfed6889c2a8622daa179c754fc7076d6a90d3a0a2538e2806f2ae330b1ff)

---

## SWEeper-Bench-traces

Recorded runs from the SWEeper-Bench paper, 5,200 in all across 42 agent configurations, each with the coding agent's trajectory, shell commands and patch plus the browser verifier's trajectories and verdicts.

- Catalog URL: https://awesomecua.com/resources/url-54907fd6dc968eaced34/
- Original source: https://huggingface.co/datasets/zlab-princeton/SWEeper-Bench-traces
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, observability, tool-integration
- Evidence checked: 2026-11-10T03:01:04Z
- ID: url:54907fd6dc968eaced34

### Limitations

runs.csv indexes every run by task, model, harness, prompt, template and verdict; the full set is about 5 GB in 65,000 files. Ablations cover bug-described prompts, a non-browser template, other harnesses and time budgets. Released under CC BY 4.0.

- Record JSON: https://awesomecua.com/resources/url-54907fd6dc968eaced34/record.json

### License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/zlab-princeton/SWEeper-Bench-traces
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/zlab-princeton/SWEeper-Bench-traces (retrieved 2026-11-10T03:01:04Z; SHA-256 26dfa3a4bf48206366e877224ee72f9bb8a1310186bbbdaf28748b8f52133c33)
- https://huggingface.co/api/datasets/zlab-princeton/SWEeper-Bench-traces (retrieved 2026-11-10T03:01:04Z; SHA-256 26dfa3a4bf48206366e877224ee72f9bb8a1310186bbbdaf28748b8f52133c33)

---

## TimeWarp

Dataset of 231 web-agent goals for Wiki, News, and Shop sites across six interface eras, with train and test splits and evaluator specifications.

- Catalog URL: https://awesomecua.com/resources/url-8be414a28d1984abb1b9/
- Original source: https://huggingface.co/datasets/sparklabutah/timewarp
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, robustness, web-navigation
- Evidence checked: 2026-11-09T19:57:15Z
- ID: url:8be414a28d1984abb1b9

### Limitations

The release lists train.csv with 128 goals, test.csv with 103, and data.json with runnable task specifications. The card declares an MIT license.

- Record JSON: https://awesomecua.com/resources/url-8be414a28d1984abb1b9/record.json

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/sparklabutah/timewarp
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/sparklabutah/timewarp (retrieved 2026-11-09T19:57:15Z; SHA-256 19932bff03ae237843b6e8e933eb940912c518c829ea180ae94e3c3e4628cd7d)
- https://huggingface.co/api/datasets/sparklabutah/timewarp (retrieved 2026-11-09T19:57:15Z; SHA-256 19932bff03ae237843b6e8e933eb940912c518c829ea180ae94e3c3e4628cd7d)

---

## TimeWarp-GPT5-Traces

GPT-5 teacher trajectories on the TimeWarp web benchmark, grouped by UI version, with SoM-annotated screenshots for each step and experiment logs, used to fine-tune web agents with LlamaFactory.

- Catalog URL: https://awesomecua.com/resources/url-fa8fd2873571ab1b3556/
- Original source: https://huggingface.co/datasets/sparklabutah/TimeWarp-GPT5-Traces
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, imitation-learning, robustness
- Evidence checked: 2026-11-10T03:01:15Z
- ID: url:fa8fd2873571ab1b3556

### Limitations

Folders version_1 to version_6 hold GenericAgentWithTraining runs of gpt-5-2025-08-07 on timewarp tasks, each with SoM screenshots, pickled experiment arguments and goal objects, logs and package versions. The TimeWarp repository's convert2sgptArgs.py converts them to ShareGPT format. License: MIT.

- Record JSON: https://awesomecua.com/resources/url-fa8fd2873571ab1b3556/record.json

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/sparklabutah/TimeWarp-GPT5-Traces
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/sparklabutah/TimeWarp-GPT5-Traces (retrieved 2026-11-10T03:01:15Z; SHA-256 eae468a563d694f77c32bb9759c7b46184c450416451dc9db95ee9d60479d41a)
- https://huggingface.co/api/datasets/sparklabutah/TimeWarp-GPT5-Traces (retrieved 2026-11-10T03:01:15Z; SHA-256 eae468a563d694f77c32bb9759c7b46184c450416451dc9db95ee9d60479d41a)

---

## TreeCUA-Datasets

TreeCUA-Datasets releases GUI exploration trees with setup files, action sequences, goals, and verification results. Users replay the trees in OSWorld to reconstruct screen observations.

- Catalog URL: https://awesomecua.com/resources/url-2e8bba756c71f9fe3fbd/
- Original source: https://huggingface.co/datasets/jdy18/TreeCUA-Datasets
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, web
- Topics: data-generation, evaluation, workflow, screen-understanding
- Evidence checked: 2026-11-09T05:04:58Z
- ID: url:2e8bba756c71f9fe3fbd

### Limitations

The release contains tree configurations, JSONL action nodes, and task initialization assets. The card specifies a 1024x768 desktop resolution for replay and declares a CC-BY-4.0 dataset license.

- Record JSON: https://awesomecua.com/resources/url-2e8bba756c71f9fe3fbd/record.json

### License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/jdy18/TreeCUA-Datasets
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/jdy18/TreeCUA-Datasets (retrieved 2026-11-09T05:04:58Z; SHA-256 473264e06d71f68f257563edab08d0e733ac0e8f0940eb493d15a20395a717de)
- https://huggingface.co/api/datasets/jdy18/TreeCUA-Datasets (retrieved 2026-11-09T05:04:58Z; SHA-256 473264e06d71f68f257563edab08d0e733ac0e8f0940eb493d15a20395a717de)

---

## UGround-single

A GUI grounding dataset with 8.29 million training rows that pair image references and element requests with bounding-box coordinates and click actions.

- Catalog URL: https://awesomecua.com/resources/url-9bb57ce3dde2c8289ac1/
- Original source: https://huggingface.co/datasets/smz8599/UGround-single
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, data-generation
- Evidence checked: 2026-11-09T21:08:46Z
- ID: url:9bb57ce3dde2c8289ac1

### Limitations

The repository page shows a single train split and previews conversation records. The file list includes a JSON data file.

- Record JSON: https://awesomecua.com/resources/url-9bb57ce3dde2c8289ac1/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/smz8599/UGround-single (retrieved 2026-11-09T21:08:46Z; SHA-256 306722a8bf25aea33ce9864dc16dd03b0651c900450e7c504cb901f324c0c395)
- https://huggingface.co/api/datasets/smz8599/UGround-single (retrieved 2026-11-09T21:08:46Z; SHA-256 306722a8bf25aea33ce9864dc16dd03b0651c900450e7c504cb901f324c0c395)

---

## UGround-V1-8k

UGround-V1-8k supplies an 8K-sample subset of web interface screenshots for GUI grounding pretraining across varied resolutions and aspect ratios.

- Catalog URL: https://awesomecua.com/resources/url-8d87e8ae53971aab3f8d/
- Original source: https://huggingface.co/datasets/zonghanHZH/UGround-V1-8k
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: grounding, data-generation, screen-understanding
- Evidence checked: 2026-11-09T21:08:30Z
- ID: url:8d87e8ae53971aab3f8d

### Limitations

The card says the samples come from UGround-V1-Data (Web-Hybrid) and cover simulated mobile, tablet, and desktop views. It declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-8d87e8ae53971aab3f8d/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/zonghanHZH/UGround-V1-8k
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/zonghanHZH/UGround-V1-8k (retrieved 2026-11-09T21:08:30Z; SHA-256 3c1d4a73bd40394cf3604529aed61005a28ca9a9f29aec10ce9b3c8ef08973b2)
- https://huggingface.co/api/datasets/zonghanHZH/UGround-V1-8k (retrieved 2026-11-09T21:08:30Z; SHA-256 3c1d4a73bd40394cf3604529aed61005a28ca9a9f29aec10ce9b3c8ef08973b2)

---

## UI-Genie reward data

Mobile GUI reward annotations released for training UI-Genie’s trajectory-assessment model.

- Catalog URL: https://awesomecua.com/resources/url-84e5aeeffaf561baa966/
- Original source: https://huggingface.co/datasets/HanXiao1999/UI-Genie-RM-517k
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: data-generation, mobile-navigation, reward-models
- Evidence checked: 2026-10-17T04:01:34Z
- ID: url:84e5aeeffaf561baa966

### Limitations

The public manifest contains reward_data.jsonl but no separately packaged image archive. The card declares MIT. The 517k identifier is a release name; verified sample count and complete image packaging remain unspecified.

- Record JSON: https://awesomecua.com/resources/url-84e5aeeffaf561baa966/record.json

### Structured profile

- Formats: JSONL
- Modalities: text
- Splits: not recorded
- Supervision: trajectory rewards

#### Count observations

No count recorded.

The public manifest contains reward_data.jsonl but no separately packaged image archive. The card declares MIT. The 517k identifier is a release name; verified sample count and complete image packaging remain unspecified.

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/HanXiao1999/UI-Genie-RM-517k/raw/main/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/HanXiao1999/UI-Genie-RM-517k/raw/main/README.md (retrieved 2026-10-17T04:01:34Z; SHA-256 dddb70b2b6986525f3980cbe50c3241d17f840a81fda9715b01ac3b25dd35d63)
- https://huggingface.co/api/datasets/HanXiao1999/UI-Genie-RM-517k (retrieved 2026-10-17T04:01:33Z; SHA-256 ab4bf30b6188959f825f2747ca711b0f190dddfe1658319c881ca9c73be9ecc9)
- https://raw.githubusercontent.com/Euphoria16/UI-Genie/HEAD/README.md (retrieved 2026-10-17T03:59:54Z; SHA-256 e08569bd9d8a6ff44537d4fe69243ddfeb8a41ae5c9f87ef84af50a67c64c726)
- https://huggingface.co/datasets/HanXiao1999/UI-Genie-RM-517k/raw/main/README.md (retrieved 2026-10-17T04:01:34Z; SHA-256 dddb70b2b6986525f3980cbe50c3241d17f840a81fda9715b01ac3b25dd35d63)

---

## UI-Genie trajectory data

Synthetic mobile GUI trajectory supervision and screenshots released with the UI-Genie agent-training pipeline.

- Catalog URL: https://awesomecua.com/resources/url-2e1927450da2183a5abe/
- Original source: https://huggingface.co/datasets/HanXiao1999/UI-Genie-Agent-16k
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: data-generation, mobile-navigation, imitation-learning
- Evidence checked: 2026-10-17T04:01:34Z
- ID: url:2e1927450da2183a5abe

### Limitations

Public JSONL annotations and screenshots are present. MIT is declared in the dataset card. The release name, model-card links and annotation filename use different size labels.

- Record JSON: https://awesomecua.com/resources/url-2e1927450da2183a5abe/record.json

### Structured profile

- Formats: JSONL, PNG
- Modalities: screenshots, text, actions
- Splits: not recorded
- Supervision: GUI action trajectories

#### Count observations

No count recorded.

Public JSONL annotations and screenshots are present. MIT is declared in the dataset card. The release name, model-card links and annotation filename use different size labels.

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/HanXiao1999/UI-Genie-Agent-16k/raw/main/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/HanXiao1999/UI-Genie-Agent-16k/raw/main/README.md (retrieved 2026-10-17T04:01:34Z; SHA-256 a748fc7dbb53d5d751c5ee109e437c377e214b1d837762f8d09995349d86cec9)
- https://huggingface.co/api/datasets/HanXiao1999/UI-Genie-Agent-16k (retrieved 2026-10-17T04:01:33Z; SHA-256 548df402288350920a26bff2099544bf21835200ee58ff2c657c331fa6200317)
- https://raw.githubusercontent.com/Euphoria16/UI-Genie/HEAD/README.md (retrieved 2026-10-17T03:59:54Z; SHA-256 e08569bd9d8a6ff44537d4fe69243ddfeb8a41ae5c9f87ef84af50a67c64c726)
- https://huggingface.co/datasets/HanXiao1999/UI-Genie-Agent-16k/raw/main/README.md (retrieved 2026-10-17T04:01:34Z; SHA-256 a748fc7dbb53d5d751c5ee109e437c377e214b1d837762f8d09995349d86cec9)
- https://huggingface.co/api/datasets/HanXiao1999/UI-Genie-Agent-5k (retrieved 2026-10-17T19:15:09Z; SHA-256 66006a586e03be3eb1dfc29dc9c951241fd7e4204430e7db258da1037e17ac6e)
- https://huggingface.co/api/datasets/HanXiao1999/UI-Genie-Agent-16k (retrieved 2026-10-17T19:15:10Z; SHA-256 66006a586e03be3eb1dfc29dc9c951241fd7e4204430e7db258da1037e17ac6e)

---

## UI-R1 3B training data

The released mobile training subset for the original UI-R1 3B model, with action annotations and individual screenshot files.

- Catalog URL: https://awesomecua.com/resources/url-7c568d88a472f914d316/
- Original source: https://huggingface.co/datasets/LZXzju/UI-R1-3B-Train
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: data-generation, grounding, action-prediction
- Evidence checked: 2026-10-17T02:03:33Z
- ID: url:7c568d88a472f914d316

### Limitations

The public manifest includes train.json and a train_imgs directory. The card has no dataset-license declaration, and the model’s MIT metadata is not inherited. The official repository identifies this as v1 training data drawn from AndroidControl and ScreenSpot; later enlarged training mixtures are distinct.

- Record JSON: https://awesomecua.com/resources/url-7c568d88a472f914d316/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/LZXzju/UI-R1-3B-Train/raw/main/README.md (retrieved 2026-10-17T02:03:33Z; SHA-256 640cb5908abefb770ea6bb8d12f22e9eca622224fa73e9f5c67a3a95f4f7b8e5)
- https://huggingface.co/api/datasets/LZXzju/UI-R1-3B-Train (retrieved 2026-10-17T02:03:33Z; SHA-256 482d1304ad53736b3e410694cfa427067ff8b45267374964e4a8ff3833afbbd3)
- https://raw.githubusercontent.com/lll6gg/UI-R1/HEAD/README.md (retrieved 2026-10-16T06:36:00Z; SHA-256 f55ac6a0c50d298d46c5f7083a0879959fd7cd3c1d91496af295ebf2afcc13a3)

---

## UI-S1 released training examples

A public example subset of the UI-S1 mobile training data, packaged as JSONL annotations and Parquet images.

- Catalog URL: https://awesomecua.com/resources/url-16184830c0f4bdb146fa/
- Original source: https://huggingface.co/datasets/mPLUG/UI_S1_dataset
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: reinforcement-learning, data-generation, mobile-navigation
- Evidence checked: 2026-10-17T04:07:19Z
- ID: url:16184830c0f4bdb146fa

### Limitations

The release contains train_1000.jsonl and images.parquet. The official README explicitly describes 1,000 released examples and calls the release only part of the training dataset. Apache-2.0 is declared by the dataset card. The release contains part of the training corpus.

- Record JSON: https://awesomecua.com/resources/url-16184830c0f4bdb146fa/record.json

### Structured profile

- Formats: JSONL, Parquet
- Modalities: images, text, actions
- Splits: training example subset
- Supervision: GUI actions

#### Count observations

- 1,000 training examples — public example subset (reported; source: https://raw.githubusercontent.com/X-PLUG/MobileAgent/HEAD/UI-S1/README.md)

The count is explicitly reported by the publisher. Full training data remains outside this release.

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/mPLUG/UI_S1_dataset/raw/main/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/mPLUG/UI_S1_dataset/raw/main/README.md (retrieved 2026-10-17T04:07:19Z; SHA-256 d826463e2aa159f083dc74869bfabb8abb5b8ea4f2cdf4aeb7676172b18aaaa5)
- https://huggingface.co/api/datasets/mPLUG/UI_S1_dataset (retrieved 2026-10-17T04:07:19Z; SHA-256 cdfbcbf23a3b1b4a609e1943e80dcf144ca1224a74ebf2308fde4fcb4326ab3c)
- https://raw.githubusercontent.com/X-PLUG/MobileAgent/HEAD/UI-S1/README.md (retrieved 2026-10-17T04:06:57Z; SHA-256 f668c890a5a87953a243715d0d47367c23f0c99b524d80f48bbdde8163f3e942)
- https://huggingface.co/datasets/mPLUG/UI_S1_dataset/raw/main/README.md (retrieved 2026-10-17T04:07:19Z; SHA-256 d826463e2aa159f083dc74869bfabb8abb5b8ea4f2cdf4aeb7676172b18aaaa5)

---

## UIBert AppSim and RefExp annotations

Two Rico-derived UI component retrieval datasets: AppSim pairs semantically similar elements across screens, while RefExp links referring expressions to target elements.

- Catalog URL: https://awesomecua.com/resources/github-google-research-datasets-uibert/
- Original source: https://github.com/google-research-datasets/uibert
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: grounding, screen-understanding, evaluation
- Evidence checked: 2026-10-17T12:30:54Z
- ID: github:google-research-datasets/uibert

### Limitations

The archived repository retains TFRecord train/dev/test files for AppSim and RefExp. These are annotation and UI-structure records with Rico image identifiers. The README’s 72k figure describes the upstream Rico source. The publisher explicitly assigns CC-BY-4.0 to these datasets.

- Record JSON: https://awesomecua.com/resources/github-google-research-datasets-uibert/record.json

### Structured profile

- Formats: TFRecord
- Modalities: text, bounding boxes, UI hierarchy metadata, Rico image identifiers
- Splits: AppSim train/dev/test, RefExp train/dev/test
- Supervision: similar UI element retrieval, referring-expression component retrieval

#### Count observations

No count recorded.

Original UI images are retrieved separately by Rico IDs. No release-specific sample count is established.

### License declarations

- code: not recorded
- data: CC-BY-4.0 — https://raw.githubusercontent.com/google-research-datasets/uibert/HEAD/README.md
- document: not recorded
- weights: not recorded

- data review: The README explicitly says the datasets are licensed under CC BY 4.0; original Rico materials keep their source terms.
  Sources: https://raw.githubusercontent.com/google-research-datasets/uibert/HEAD/README.md

### Primary evidence

- https://raw.githubusercontent.com/google-research-datasets/uibert/HEAD/README.md (retrieved 2026-10-17T12:30:54Z; SHA-256 45d1ca0f5c727cf58b2671dc5579f0628f4d78e07b977a5d8b018295c6fe1f58)
- https://api.github.com/repos/google-research-datasets/uibert (retrieved 2026-10-17T12:30:54Z; SHA-256 24a7838d425bdae363a7d5872702996b22068c1f0e47be274fdfbc4b0e20144f)
- https://api.github.com/repos/google-research-datasets/uibert/git/trees/main?recursive=1 (retrieved 2026-10-17T12:32:05Z; SHA-256 9a6fc19c6b407309943fe645f4addb3d032f153856976c4f8d7a8cfb6d2ffe6b)
- https://interactionmining.org/rico (retrieved 2026-10-17T12:36:55Z; SHA-256 f752ebfb2598b7f848d343f428502b28e0f591f27849ab707f14bee398d4eb8d)

---

## VeriGUI

VeriWeb dataset of 302 web information-seeking tasks, with annotated subtasks, human action logs, and execution videos for evaluating long-chain agents.

- Catalog URL: https://awesomecua.com/resources/url-8477ada5b7de1d399c9d/
- Original source: https://huggingface.co/datasets/2077AIDataFoundation/VeriGUI
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, long-horizon, evaluation, recording
- Evidence checked: 2026-11-09T05:05:16Z
- ID: url:8477ada5b7de1d399c9d

### Limitations

The card describes task JSON and video files, including webpage URLs, optional HTML, timestamps, mouse coordinates, and target element information. It declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-8477ada5b7de1d399c9d/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/2077AIDataFoundation/VeriGUI
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/2077AIDataFoundation/VeriGUI (retrieved 2026-11-09T05:05:16Z; SHA-256 9d03ab794419daccbdc6aef9d9df3c9863c96b87d8b33d81332446ca1b49b9cd)
- https://huggingface.co/api/datasets/2077AIDataFoundation/VeriGUI (retrieved 2026-11-09T05:05:16Z; SHA-256 9d03ab794419daccbdc6aef9d9df3c9863c96b87d8b33d81332446ca1b49b9cd)
- https://huggingface.co/api/datasets/2077AIDataFoundation/VeriGUI (retrieved 2026-11-09T05:26:01Z; SHA-256 9d03ab794419daccbdc6aef9d9df3c9863c96b87d8b33d81332446ca1b49b9cd)
- https://huggingface.co/api/datasets/2077AIDataFoundation/VeriWeb (retrieved 2026-11-09T05:26:01Z; SHA-256 9d03ab794419daccbdc6aef9d9df3c9863c96b87d8b33d81332446ca1b49b9cd)

---

## VeriOS-Bench

A dataset for training and evaluating GUI-operating OS agents on decisions to ask a person for help when autonomous action could be unreliable.

- Catalog URL: https://awesomecua.com/resources/url-16a5ccde8bb16cda19ff/
- Original source: https://huggingface.co/datasets/wuuuuuz/VeriOS-Bench
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop
- Topics: human-in-the-loop, evaluation, safety-security
- Evidence checked: 2026-11-09T05:04:57Z
- ID: url:16a5ccde8bb16cda19ff

### Limitations

The repository lists a VeriOS-Bench.zip file. The card points to evaluation scripts in the linked code repository for the agent and baselines.

- Record JSON: https://awesomecua.com/resources/url-16a5ccde8bb16cda19ff/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/wuuuuuz/VeriOS-Bench (retrieved 2026-11-09T05:04:57Z; SHA-256 a83d5343770ef0bc12a00dab4c1c64dba9349d6db58403173b1f20a1102478a5)
- https://huggingface.co/api/datasets/wuuuuuz/VeriOS-Bench (retrieved 2026-11-09T05:04:57Z; SHA-256 a83d5343770ef0bc12a00dab4c1c64dba9349d6db58403173b1f20a1102478a5)

---

## VG-RL-filter-dataset-hf

A dataset released for the second stage of GUI-Spotlight training; its card says the authors used 18.5K samples for that stage.

- Catalog URL: https://awesomecua.com/resources/url-07fb5e963998782505a6/
- Original source: https://huggingface.co/datasets/nuoxu1993/VG-RL-filter-dataset-hf
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: data-generation, grounding
- Evidence checked: 2026-11-09T19:57:04Z
- ID: url:07fb5e963998782505a6

### Limitations

The repository listing contains Arrow data shards. The card does not describe individual fields or a license.

- Record JSON: https://awesomecua.com/resources/url-07fb5e963998782505a6/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/nuoxu1993/VG-RL-filter-dataset-hf (retrieved 2026-11-09T19:57:04Z; SHA-256 ca57c936b2732f3f06f4e95d3f3233c3bedb2389ef8c98648859968a86629cfe)
- https://huggingface.co/api/datasets/nuoxu1993/VG-RL-filter-dataset-hf (retrieved 2026-11-09T19:57:04Z; SHA-256 ca57c936b2732f3f06f4e95d3f3233c3bedb2389ef8c98648859968a86629cfe)

---

## Vision_GUI_Assistant

A GUI-image conversation dataset provides instruction and conversation JSON files for staged visual fine-tuning; its examples ask models to identify interface buttons.

- Catalog URL: https://awesomecua.com/resources/url-b9a56cf9e9346a359c0b/
- Original source: https://huggingface.co/datasets/zylate/Vision_GUI_Assistant
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: screen-understanding, data-generation
- Evidence checked: 2026-11-09T19:58:08Z
- ID: url:b9a56cf9e9346a359c0b

### Limitations

The card names instruction and conversation splits and instructs users to obtain the Rico images separately. It describes training with LLaVA and declares a CC BY-NC 4.0 license.

- Record JSON: https://awesomecua.com/resources/url-b9a56cf9e9346a359c0b/record.json

### License declarations

- code: not recorded
- data: cc-by-nc-4.0 — https://huggingface.co/datasets/zylate/Vision_GUI_Assistant
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/zylate/Vision_GUI_Assistant (retrieved 2026-11-09T19:58:08Z; SHA-256 9f366a78ca176c7a5aeec93042546ce247e900b2209da83c4569bb9d05b0b714)
- https://huggingface.co/api/datasets/zylate/Vision_GUI_Assistant (retrieved 2026-11-09T19:58:08Z; SHA-256 9f366a78ca176c7a5aeec93042546ce247e900b2209da83c4569bb9d05b0b714)

---

## Wave UI

Screenshot-instruction records with target boxes and UI metadata such as OCR, source, element type and platform.

- Catalog URL: https://awesomecua.com/resources/url-0dbb55f127da04d95222/
- Original source: https://huggingface.co/datasets/agentsea/wave-ui
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, screen-understanding
- Evidence checked: 2026-10-17T04:01:33Z
- ID: url:0dbb55f127da04d95222

### Limitations

Train, validation and test Parquet files are publicly listed. The compilation license explicitly preserves each image’s original source terms and grants no extra rights to those images. The card exposes a platform column without listing its values, so operating-system coverage remains unspecified.

- Record JSON: https://awesomecua.com/resources/url-0dbb55f127da04d95222/record.json

### Structured profile

- Formats: Parquet
- Modalities: images, text, bounding boxes, OCR metadata
- Splits: train, validation, test
- Supervision: instruction-to-target boxes

#### Count observations

- 63,530 rows — train split (reported; source: https://huggingface.co/datasets/agentsea/wave-ui/raw/main/README.md)
- 7,944 rows — validation split (reported; source: https://huggingface.co/datasets/agentsea/wave-ui/raw/main/README.md)
- 7,938 rows — test split (reported; source: https://huggingface.co/datasets/agentsea/wave-ui/raw/main/README.md)

Card-reported row counts and unique-screen counts are different units. The source field is important for the per-image license terms; the compilation does not relicense original images.

### License declarations

- code: not recorded
- data: Wave UI Dataset License; per-image source terms retained — https://huggingface.co/datasets/agentsea/wave-ui/raw/main/LICENSE.md
- document: not recorded
- weights: not recorded

- data review: The compilation expressly does not relicense its images and lists differing source terms. No blanket permissive data license is appropriate.
  Sources: https://huggingface.co/datasets/agentsea/wave-ui/raw/main/LICENSE.md

### Primary evidence

- https://huggingface.co/api/datasets/agentsea/wave-ui (retrieved 2026-10-17T04:01:33Z; SHA-256 76e5e458eb8788f2c2cfddd06cb944327f363ec70120e122ce93d1350cf82e19)
- https://huggingface.co/datasets/agentsea/wave-ui/raw/main/README.md (retrieved 2026-10-17T04:01:33Z; SHA-256 27ec13aa77dc55113e4d1a19c2269070e2d69d2fe8df8e2313721a1e3fc66bd9)
- https://huggingface.co/datasets/agentsea/wave-ui/raw/main/LICENSE.md (retrieved 2026-10-17T04:06:57Z; SHA-256 63c6b3ce6a3d9c21a505865ceed698df2894bcb292590c59686e9477df867942)
- https://huggingface.co/datasets/cckevinn/GUI-Actor-Data/raw/main/README.md (retrieved 2026-10-17T02:42:32Z; SHA-256 e42bbcf8d466c977f9b2150feb73d8cbda2ff907c279630ad4730a8b1f5d665c)
- https://huggingface.co/api/datasets/agentsea/wave-ui (retrieved 2026-10-17T04:01:33Z; SHA-256 76e5e458eb8788f2c2cfddd06cb944327f363ec70120e122ce93d1350cf82e19)

---

## WebArena-Infinity browser agent trajectories

Passing runs of three browser agents on 13 WebArena-Infinity web apps generated from product documentation, with per-step reasoning, actions, screenshots and programmatic verifier results.

- Catalog URL: https://awesomecua.com/resources/url-ccac8d260d6d1d330bf5/
- Original source: https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, data-generation, imitation-learning
- Evidence checked: 2026-10-18T12:33:11Z
- ID: url:ccac8d260d6d1d330bf5

### Limitations

Released by the web-arena-x organization. The card cites a project page (webarena.dev/webarena-infinity); the environment-generation pipeline is the separate repository github.com/web-arena-x/webarena-infinity. Only trajectories that passed the programmatic state checks in a three-repetition final run are included; the sample contains successful trajectories. In the sampled history files, Gemini 2.5 Flash (Browser Use harness) acts on indexed DOM elements, while Kimi K2.5 and Qwen 2.5 VL Plus trajectories store clicks as absolute pixel coordinates next to the model's raw output. MIT is the card's data declaration.

- Record JSON: https://awesomecua.com/resources/url-ccac8d260d6d1d330bf5/record.json

### Structured profile

- Formats: JSON, PNG
- Modalities: browser screenshots, task instructions, agent reasoning, actions
- Splits: not recorded
- Supervision: agent-generated successful trajectories, programmatic state-verifier outcomes

#### Count observations

- 2,329 trajectories — manifest.json at revision 73cf7f57: Gemini 2.5 Flash 978, Kimi K2.5 643, Qwen 2.5 VL Plus 708 (computed) (computed; source: https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories/resolve/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe/data/manifest.json)
- 1,124 distinct tasks (environment and task_id pairs) — manifest.json at revision 73cf7f57 (computed) (computed; source: https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories/resolve/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe/data/manifest.json)
- 13 web-application environments — manifest.json at revision 73cf7f57 (computed) (computed; source: https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories/resolve/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe/data/manifest.json)
- 25,503 agent steps (sum of the manifest steps field) — manifest.json at revision 73cf7f57 (computed) (computed; source: https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories/resolve/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe/data/manifest.json)
- 2,195 trajectory folders with history.json — Hub file tree at revision 73cf7f57 (computed) (computed; source: https://huggingface.co/api/datasets/webarena-x/webarena-infinity-trajectories/revision/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe)

Trajectories, tasks, environments, steps and folders are different units and are counted separately. Each agent has at most one trajectory per task. Manifest difficulty labels: 604 easy, 508 medium, 1,217 hard. The manifest lists 134 Gemini trajectories (89 gitlab-plan-and-track, 45 gmail) whose folders are absent from the file tree at this revision, so 2,195 trajectories have files. Two history files were sampled.

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories/raw/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories/raw/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe/README.md (retrieved 2026-10-18T12:33:11Z; SHA-256 02e1fc0c65b0314dffb0c141d07048f11a29789938902d617408fc680b3b1031)
- https://huggingface.co/api/datasets/webarena-x/webarena-infinity-trajectories/revision/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe (retrieved 2026-10-18T12:32:01Z; SHA-256 b764c9a4e6c27838c898d433b386a0b08a864ba53a0edfa896391db28d939e15)
- https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories/resolve/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe/data/manifest.json (retrieved 2026-10-18T12:32:01Z; SHA-256 d0c98be46cfc16e8eb408c62c774924edd8b7bd9f958fe65d983d55072a38c4d)
- https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories/resolve/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe/data/gemini/paypal-my-wallet/task_e1/history.json (retrieved 2026-10-18T12:33:30Z; SHA-256 3e990071c45afa463fe8372fd613ca78852fc42a35877373336d7a742fee256a)
- https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories/resolve/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe/data/kimi/gmail/task_e10/history.json (retrieved 2026-10-18T12:33:30Z; SHA-256 cfa5f0eda4c0817879c957c70aad7881013a5b4590e0270a4ae86b8e26a0e596)
- https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories/raw/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe/README.md (retrieved 2026-10-18T12:33:11Z; SHA-256 02e1fc0c65b0314dffb0c141d07048f11a29789938902d617408fc680b3b1031)

---

## webarena-world-model-cot

WebArena page-transition data for training language world models: chain-of-thought annotations paired with the accessibility-tree item changes that follow an action, used for SFT and RLVR in RLVR-World.

- Catalog URL: https://awesomecua.com/resources/url-3e0f07cb0ff3f32dfc0e/
- Original source: https://huggingface.co/datasets/thuml/webarena-world-model-cot
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: world-models, web-navigation
- Evidence checked: 2026-11-10T03:01:06Z
- ID: url:3e0f07cb0ff3f32dfc0e

### Limitations

Train and test parquet files; the card declares MIT. The paper derives it from the WMA WebArena dataset, keeps about 7,000 of 14,000 trajectories under a 5,000-token limit, and splits them 99% for training and 1% for testing.

- Record JSON: https://awesomecua.com/resources/url-3e0f07cb0ff3f32dfc0e/record.json

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/thuml/webarena-world-model-cot
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/thuml/webarena-world-model-cot (retrieved 2026-11-10T03:01:06Z; SHA-256 537384af9032d029a2079216fec61c1bd484778b2f02ac8b7d95a01537924244)
- https://huggingface.co/api/datasets/thuml/webarena-world-model-cot (retrieved 2026-11-10T03:01:06Z; SHA-256 537384af9032d029a2079216fec61c1bd484778b2f02ac8b7d95a01537924244)

---

## WebChain (original release)

Original WebChain release of human-annotated trajectories on live websites, with raw JSON records, viewport and partial full-page screenshots, and Parquet files for high-level planning and low-level grounding steps.

- Catalog URL: https://awesomecua.com/resources/url-116431f8ea32dbc6d637/
- Original source: https://huggingface.co/datasets/webagentlab/webchain-legacy
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: data-generation, web-navigation, grounding, planning
- Evidence checked: 2026-10-18T12:24:21Z
- ID: url:116431f8ea32dbc6d637

### Limitations

The publisher's cleaned v2 release is a separate Hub repository (webagentlab/webchain) whose card calls this repository the original release with the least-processed artifacts and earlier high- and low-level formulations; v2 reports different counts after cleaning. Here the image and full-page screenshot folders are split ZIP sets, and the card says full-page screenshots cover only some steps. Rationales come from synthetic generation. CC-BY-4.0 is the card's data declaration.

- Record JSON: https://awesomecua.com/resources/url-116431f8ea32dbc6d637/record.json

### Structured profile

- Formats: zipped JSON, split ZIP image archives, Parquet
- Modalities: viewport screenshots, partial full-page screenshots, HTML snapshots, accessibility-tree snapshots, instructions, actions
- Splits: high-level train, high-level test, low-level train, low-level test
- Supervision: human-executed web task trajectories, element bounding boxes and click coordinates, CSS selectors and DOM references, action types and input text, generated rationales where included

#### Count observations

- 31,725 trajectories — WebChain corpus as stated on the original-release card (reported; source: https://huggingface.co/datasets/webagentlab/webchain-legacy/raw/bd5699076abec17010963ca6a7c66ea7c5fa01ff/README.md)
- 317,993 interaction steps — WebChain corpus as stated on the original-release card (reported; source: https://huggingface.co/datasets/webagentlab/webchain-legacy/raw/bd5699076abec17010963ca6a7c66ea7c5fa01ff/README.md)
- 428 web domains — WebChain corpus as stated on the original-release card (reported; source: https://huggingface.co/datasets/webagentlab/webchain-legacy/raw/bd5699076abec17010963ca6a7c66ea7c5fa01ff/README.md)
- 13 Parquet files — processed/high_parquet (2) and processed/low_parquet (11) at revision bd569907 (computed) (computed; source: https://huggingface.co/api/datasets/webagentlab/webchain-legacy)

Trajectories, steps, domains and files are different units and are counted separately. The trajectory, step and domain figures match the paper's statistics; the v2 card says they describe the corpus before final cleaning. The file count comes from the Hub manifest.

### License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/webagentlab/webchain-legacy/raw/bd5699076abec17010963ca6a7c66ea7c5fa01ff/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/webagentlab/webchain-legacy/raw/bd5699076abec17010963ca6a7c66ea7c5fa01ff/README.md (retrieved 2026-10-18T12:24:21Z; SHA-256 730371b6a3093cb13b226fb19ff4002450ebafc4c5a3c620effdb70122d3ab60)
- https://huggingface.co/api/datasets/webagentlab/webchain-legacy (retrieved 2026-10-18T12:24:21Z; SHA-256 808a507eed99aac784cf773cf1c4dbb0cd03a4c66b75c49466f3c0dc353a325b)
- https://huggingface.co/datasets/webagentlab/webchain/raw/59ab57fea3d6270c260b6603418afb93dee8c1ce/README.md (retrieved 2026-10-18T12:24:21Z; SHA-256 ac41dbb10c924efbad8cc93340a34a73cb9218f1930ef6d8dced582050cbd68c)
- https://huggingface.co/datasets/webagentlab/webchain-legacy/raw/bd5699076abec17010963ca6a7c66ea7c5fa01ff/README.md (retrieved 2026-10-18T12:24:21Z; SHA-256 730371b6a3093cb13b226fb19ff4002450ebafc4c5a3c620effdb70122d3ab60)

---

## WebChain v2

Cleaned v2 release of WebChain's human web trajectories, packaged as trajectory-level and Seed-style sliding-window SFT Parquet with aligned screenshots, plus action metadata and a 150-trace evaluation subset.

- Catalog URL: https://awesomecua.com/resources/url-56f08987cc19b82dc607/
- Original source: https://huggingface.co/datasets/webagentlab/webchain
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: data-generation, web-navigation, grounding, planning, imitation-learning
- Evidence checked: 2026-10-18T15:33:42Z
- ID: url:56f08987cc19b82dc607

### Limitations

The card calls this the cleaned, training-ready release and points to the publisher's separate original release (Hub repository webagentlab/webchain-legacy) for raw JSON records, split screenshot archives and the earlier high- and low-level formulations. Its counts (31,675 trajectories, 317,682 steps) are after cleaning; the paper's 31,725 trajectories and 317,993 steps describe the corpus before it. Annotators executed tasks on live websites; tasks were synthesized from site schemas and reasoning text was added in post-processing. CC-BY-4.0 is the card's data declaration.

- Record JSON: https://awesomecua.com/resources/url-56f08987cc19b82dc607/record.json

### Structured profile

- Formats: Parquet (Trace SFT and Seed/Demo SFT), Parquet and CSV metadata tables, SHA-256 manifests
- Modalities: viewport screenshots, task queries, reasoning text, actions, DOM and accessibility-tree references in trace metadata
- Splits: not recorded
- Supervision: human-executed web task trajectories, click coordinates, bounding boxes and CSS selectors, action types and text arguments, reasoning text added in post-processing

#### Count observations

- 31,675 cleaned trajectories — WebChain v2 release as stated on its card (reported; source: https://huggingface.co/datasets/webagentlab/webchain/raw/59ab57fea3d6270c260b6603418afb93dee8c1ce/README.md)
- 317,682 interaction steps — WebChain v2 release as stated on its card (reported; source: https://huggingface.co/datasets/webagentlab/webchain/raw/59ab57fea3d6270c260b6603418afb93dee8c1ce/README.md)
- 39,332 Seed/Demo sliding-window rows — WebChain v2 release as stated on its card (reported; source: https://huggingface.co/datasets/webagentlab/webchain/raw/59ab57fea3d6270c260b6603418afb93dee8c1ce/README.md)
- 263,995 SFT image/action turns — WebChain v2 release as stated on its card (reported; source: https://huggingface.co/datasets/webagentlab/webchain/raw/59ab57fea3d6270c260b6603418afb93dee8c1ce/README.md)
- 150 evaluation traces — test_suite_150 subset as stated on the card (reported; source: https://huggingface.co/datasets/webagentlab/webchain/raw/59ab57fea3d6270c260b6603418afb93dee8c1ce/README.md)
- 48 data parts per format — Hub manifest at revision 59ab57fe, data/trace_sft and data/seed_sft (computed) (computed; source: https://huggingface.co/api/datasets/webagentlab/webchain/revision/59ab57fea3d6270c260b6603418afb93dee8c1ce)
- 71 SFT Parquet shards per format — Hub manifest at revision 59ab57fe, data/trace_sft and data/seed_sft (computed) (computed; source: https://huggingface.co/api/datasets/webagentlab/webchain/revision/59ab57fea3d6270c260b6603418afb93dee8c1ce)

Trajectories, steps, windows, turns, parts and shards are different units and are counted separately. Trace SFT has one row per cleaned trajectory; Seed/Demo SFT re-cuts the same trajectories into bounded windows, so the formats overlap. The 150-trace subset is a stratified sample for loader checks and compact offline evaluation; the card does not say it is held out from the parts. The part and shard counts from the manifest match the card.

### License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/webagentlab/webchain/raw/59ab57fea3d6270c260b6603418afb93dee8c1ce/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/webagentlab/webchain/raw/59ab57fea3d6270c260b6603418afb93dee8c1ce/README.md (retrieved 2026-10-18T15:33:42Z; SHA-256 ac41dbb10c924efbad8cc93340a34a73cb9218f1930ef6d8dced582050cbd68c)
- https://huggingface.co/api/datasets/webagentlab/webchain/revision/59ab57fea3d6270c260b6603418afb93dee8c1ce (retrieved 2026-10-18T15:33:18Z; SHA-256 b2845f4365632a07cf5296879f18b516603a08a7b7700558db543962475a7bfa)
- https://huggingface.co/datasets/webagentlab/webchain/raw/59ab57fea3d6270c260b6603418afb93dee8c1ce/README.md (retrieved 2026-10-18T15:33:42Z; SHA-256 ac41dbb10c924efbad8cc93340a34a73cb9218f1930ef6d8dced582050cbd68c)

---

## webgames

Task list for WebGames, a set of client-side web challenges for browsing agents: one JSONL file giving each task's id, title, description, page path, success password and tags.

- Catalog URL: https://awesomecua.com/resources/url-654e0cbc1a22b59eca47/
- Original source: https://huggingface.co/datasets/convergence-ai/webgames
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation
- Evidence checked: 2026-11-10T03:01:04Z
- ID: url:654e0cbc1a22b59eca47

### Limitations

Agents are scored by checking that the task's password appears in their final message; the WebGames repository also includes an Inspect AI eval scaffold and a hosted version of the challenges. The card declares the MIT license.

- Record JSON: https://awesomecua.com/resources/url-654e0cbc1a22b59eca47/record.json

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/convergence-ai/webgames
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/convergence-ai/webgames (retrieved 2026-11-10T03:01:04Z; SHA-256 01956443717e1c85b8d643e5875e85719f6b9138b67185d03ce291df6ce33f54)
- https://huggingface.co/api/datasets/convergence-ai/webgames (retrieved 2026-11-10T03:01:04Z; SHA-256 01956443717e1c85b8d643e5875e85719f6b9138b67185d03ce291df6ce33f54)

---

## WebGuard

Dataset of 5,999 browser-action safety annotations, pairing website and action details with risk classifications for web-agent research.

- Catalog URL: https://awesomecua.com/resources/url-df10c80a8da55773154d/
- Original source: https://huggingface.co/datasets/osunlp/WebGuard
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: safety-security, evaluation, web-navigation
- Evidence checked: 2026-11-09T05:05:11Z
- ID: url:df10c80a8da55773154d

### Limitations

The card lists a train split, a dataset-loading example, and the CC BY-NC 4.0 license. Screenshot fields contain Google Drive view links.

- Record JSON: https://awesomecua.com/resources/url-df10c80a8da55773154d/record.json

### License declarations

- code: not recorded
- data: cc-by-nc-4.0 — https://huggingface.co/datasets/osunlp/WebGuard
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/osunlp/WebGuard (retrieved 2026-11-09T05:05:11Z; SHA-256 814d636b8d709972501e27cd5818fff4438a0c297ca703496f8dae5516358dcd)
- https://huggingface.co/api/datasets/osunlp/WebGuard (retrieved 2026-11-09T05:05:11Z; SHA-256 814d636b8d709972501e27cd5818fff4438a0c297ca703496f8dae5516358dcd)

---

## WebLINX dataset

Hub data of WebLINX 1.0: conversational web-navigation demonstrations preprocessed into per-turn records with dialogue, cleaned HTML, candidate elements and action history, plus reranking data.

- Catalog URL: https://awesomecua.com/resources/url-1517e989c470563bd08d/
- Original source: https://huggingface.co/datasets/McGill-NLP/WebLINX
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, human-in-the-loop, action-prediction
- Evidence checked: 2026-10-18T15:49:24Z
- ID: url:1517e989c470563bd08d

### Limitations

The WebLINX repository README calls this the official dataset page and its library loads the data. The main revision a30ff2cb holds the preprocessed chat and reranking configurations, per-split CSV files, splits.json and prompt templates; the card points to a separate McGill-NLP/WebLINX-full repository for the complete raw demonstrations outside this record. The card describes WebLINX 1.1, a reprocessed BrowserGym release in another Hub repository, and links this original release as the v1.0 tag. CC-BY-NC-SA-4.0 with added terms of use is the card's data declaration; the code repository's Apache-2.0 license is separate.

- Record JSON: https://awesomecua.com/resources/url-1517e989c470563bd08d/record.json

### Structured profile

- Formats: gzip-compressed JSON Lines, CSV, JSON
- Modalities: dialogue utterances, cleaned HTML, candidate element descriptions, action history, viewport size
- Splits: train, valid, test_iid, test_geo, test_vis, test_cat, test_web
- Supervision: next action per navigator turn, conversational instructions and responses

#### Count observations

- 2,337 demonstrations — all splits in splits.json at revision a30ff2cb (train, valid and five test splits; disjoint) (computed) (computed; source: https://huggingface.co/datasets/McGill-NLP/WebLINX/raw/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/splits.json)
- 969 demonstrations — train split in splits.json at revision a30ff2cb (computed) (computed; source: https://huggingface.co/datasets/McGill-NLP/WebLINX/raw/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/splits.json)
- 100 demonstrations — valid split in splits.json at revision a30ff2cb (computed) (computed; source: https://huggingface.co/datasets/McGill-NLP/WebLINX/raw/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/splits.json)
- 100 demonstrations — test_iid split in splits.json at revision a30ff2cb (computed) (computed; source: https://huggingface.co/datasets/McGill-NLP/WebLINX/raw/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/splits.json)
- 290 demonstrations — test_geo split in splits.json at revision a30ff2cb (computed) (computed; source: https://huggingface.co/datasets/McGill-NLP/WebLINX/raw/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/splits.json)
- 444 demonstrations — test_vis split in splits.json at revision a30ff2cb (computed) (computed; source: https://huggingface.co/datasets/McGill-NLP/WebLINX/raw/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/splits.json)
- 223 demonstrations — test_cat split in splits.json at revision a30ff2cb (computed) (computed; source: https://huggingface.co/datasets/McGill-NLP/WebLINX/raw/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/splits.json)
- 211 demonstrations — test_web split in splits.json at revision a30ff2cb (computed) (computed; source: https://huggingface.co/datasets/McGill-NLP/WebLINX/raw/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/splits.json)
- 2,126 chat-config turn records — valid split, data/chat/valid.json.gz at revision a30ff2cb (computed) (computed; source: https://huggingface.co/datasets/McGill-NLP/WebLINX/resolve/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/data/chat/valid.json.gz)
- 2,308 chat-config turn records — test_iid split, data/chat/test_iid.json.gz at revision a30ff2cb (computed) (computed; source: https://huggingface.co/datasets/McGill-NLP/WebLINX/resolve/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/data/chat/test_iid.json.gz)
- 7,672 chat-config turn records — test_geo split, data/chat/test_geo.json.gz at revision a30ff2cb (computed) (computed; source: https://huggingface.co/datasets/McGill-NLP/WebLINX/resolve/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/data/chat/test_geo.json.gz)
- 9,023 chat-config turn records — test_vis split, data/chat/test_vis.json.gz at revision a30ff2cb (computed) (computed; source: https://huggingface.co/datasets/McGill-NLP/WebLINX/resolve/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/data/chat/test_vis.json.gz)
- 5,971 chat-config turn records — test_cat split, data/chat/test_cat.json.gz at revision a30ff2cb (computed) (computed; source: https://huggingface.co/datasets/McGill-NLP/WebLINX/resolve/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/data/chat/test_cat.json.gz)
- 4,856 chat-config turn records — test_web split, data/chat/test_web.json.gz at revision a30ff2cb (computed) (computed; source: https://huggingface.co/datasets/McGill-NLP/WebLINX/resolve/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/data/chat/test_web.json.gz)

Counts were computed with a script. Demonstrations come from splits.json, whose seven splits are disjoint; its iid_all list is the union of valid and test_iid and overlaps those splits. Turn records are rows of the chat configuration, one per evaluated navigator turn, a different unit from demonstrations; the train file exceeds the catalog's 10 MB evidence budget, leaving its turn-record count unrecorded. The card's extra test split duplicates test_iid. The counts cover demonstrations and chat turn records; reranking files and CSVs fall outside those counts. Screenshots are not in this repository.

### License declarations

- code: not recorded
- data: cc-by-nc-sa-4.0 — https://huggingface.co/datasets/McGill-NLP/WebLINX/raw/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/McGill-NLP/WebLINX/raw/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/README.md (retrieved 2026-10-18T15:49:24Z; SHA-256 9bd7512e257f5914d66b091530d7eb711a6f90bc21dc89cbba53015c7136c527)
- https://huggingface.co/api/datasets/McGill-NLP/WebLINX/revision/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13 (retrieved 2026-10-18T15:48:39Z; SHA-256 940bc61bb13a1ea7a4a038a812161121d932e2cd5af4d866accc508839d401de)
- https://raw.githubusercontent.com/McGill-NLP/weblinx/9a7e814ffaac36d36ae5291dc3407c530055e16f/README.md (retrieved 2026-10-18T15:48:40Z; SHA-256 15c3f1656afd861894b180bca7d9214b4cf78a6ad9cd0601c80f5d67d2839528)
- https://huggingface.co/datasets/McGill-NLP/WebLINX/raw/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/splits.json (retrieved 2026-10-18T15:48:39Z; SHA-256 db6fd50e6b1ba053817ede3f2a8ec61a292ad2710dd7f4e300cf685f70d843e6)
- https://huggingface.co/datasets/McGill-NLP/WebLINX/resolve/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/data/chat/valid.json.gz (retrieved 2026-10-18T15:48:42Z; SHA-256 086adc2ee12e711893a59e47822c08cf05cbf8c021db1e7a39f6fbc8d8cef7ab)
- https://huggingface.co/datasets/McGill-NLP/WebLINX/resolve/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/data/chat/test_iid.json.gz (retrieved 2026-10-18T15:48:43Z; SHA-256 0bbdd414f371fea6b4e6741f821bd60aeaf13ba5114456d4cb901bd0e6617ba7)
- https://huggingface.co/datasets/McGill-NLP/WebLINX/resolve/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/data/chat/test_geo.json.gz (retrieved 2026-10-18T15:48:44Z; SHA-256 738fb37c35acaa5a3bfe752886b258d5cacf09cdeec7abe1c71574074011a249)
- https://huggingface.co/datasets/McGill-NLP/WebLINX/resolve/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/data/chat/test_vis.json.gz (retrieved 2026-10-18T15:48:45Z; SHA-256 7371eaa43dc95ff7482844afd840a98f8728df4364baf85e15688d134af07380)
- https://huggingface.co/datasets/McGill-NLP/WebLINX/resolve/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/data/chat/test_cat.json.gz (retrieved 2026-10-18T15:48:46Z; SHA-256 b9ea603cba86761d0780490867bc22ea95ff59e5702dfd765fa58b17d25e7eab)
- https://huggingface.co/datasets/McGill-NLP/WebLINX/resolve/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/data/chat/test_web.json.gz (retrieved 2026-10-18T15:48:47Z; SHA-256 10d780712da997da9ff2d15d642aa199410ebe5d30d2ea3f9ba56fb044a745db)
- https://huggingface.co/datasets/McGill-NLP/WebLINX/raw/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/README.md (retrieved 2026-10-18T15:49:24Z; SHA-256 9bd7512e257f5914d66b091530d7eb711a6f90bc21dc89cbba53015c7136c527)

---

## WebPRM Collection preference data

Checklist-annotated web decision records with page observations, prior actions, one preferred continuation and rejected alternatives for process-reward learning.

- Catalog URL: https://awesomecua.com/resources/url-8dfc84eb4016204fe70a/
- Original source: https://huggingface.co/datasets/LangAGI-Lab/WebPRMCollection_preference_pair
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, reward-models, evaluation
- Evidence checked: 2026-10-17T02:44:50Z
- ID: url:8dfc84eb4016204fe70a

### Limitations

Ten public Parquet shards are present. The card names its split test and reports 9,460 rows; the project’s 40K-plus preference-annotation claim uses a different grain. A row can contain multiple rejected alternatives. No data-license declaration is present.

- Record JSON: https://awesomecua.com/resources/url-8dfc84eb4016204fe70a/record.json

### Structured profile

- Formats: Parquet
- Modalities: screenshots, text, action history
- Splits: test
- Supervision: preferred and rejected continuations, task checklists

#### Count observations

- 9,460 rows — Hub split named test (reported; source: https://huggingface.co/datasets/LangAGI-Lab/WebPRMCollection_preference_pair/raw/main/README.md)

Preserves the publisher’s split label despite the collection’s training purpose. Rows contain lists of rejected candidates. Data license is unknown.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/LangAGI-Lab/WebPRMCollection_preference_pair/raw/main/README.md (retrieved 2026-10-17T02:44:50Z; SHA-256 9c091c5fc625ce53f53f8262f5cee8d08194e4fd1b8eeed543ff1c3723c823fd)
- https://huggingface.co/api/datasets/LangAGI-Lab/WebPRMCollection_preference_pair (retrieved 2026-10-17T02:44:50Z; SHA-256 28a1d5d12e84fc38515bd3c5031ae0cf315c5f8772b90d982d926b98f2857563)
- https://raw.githubusercontent.com/kyle8581/Web-Shepherd/HEAD/README.md (retrieved 2026-10-17T02:44:04Z; SHA-256 07431058d8b9a71b80e75b7a74a40a8346c1503eec240628459cc4d4e2f0802f)

---

## WebsiteBench

Hugging Face copy of the 70 WebsiteBench tasks in Harbor format, where agents explore a production-level reference website in a browser and rebuild a full-stack clone scored by hidden functional and visual tests.

- Catalog URL: https://awesomecua.com/resources/url-687a7b27f38720fe54bc/
- Original source: https://huggingface.co/datasets/TIGER-Lab/WebsiteBench
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation
- Evidence checked: 2026-11-10T03:01:04Z
- ID: url:687a7b27f38720fe54bc

### Limitations

Each task folder has instruction.md, task.toml, an agent environment with a browser gateway and reference website, an oracle solution and a hidden verifier; manifest.json records file hashes. The full set is 9.7 GB, each environment requests 8 CPUs, 8 GiB memory and 20 GiB disk, and code and task definitions are Apache-2.0.

- Record JSON: https://awesomecua.com/resources/url-687a7b27f38720fe54bc/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/TIGER-Lab/WebsiteBench
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/TIGER-Lab/WebsiteBench?expand%5B%5D=cardData&expand%5B%5D=gated&expand%5B%5D=disabled&expand%5B%5D=tags (retrieved 2026-11-10T03:01:04Z; SHA-256 dd90c82730ed48470c35d0323b1a44344b50a4965dae6d42b6fb4ce3fbe46500)
- https://huggingface.co/api/datasets/TIGER-Lab/WebsiteBench?expand%5B%5D=cardData&expand%5B%5D=gated&expand%5B%5D=disabled&expand%5B%5D=tags (retrieved 2026-11-10T03:01:04Z; SHA-256 dd90c82730ed48470c35d0323b1a44344b50a4965dae6d42b6fb4ce3fbe46500)

---

## WebSRC v1.0

Webpage segments, questions, answers, HTML, screenshots and layout metadata for structural reading comprehension.

- Catalog URL: https://awesomecua.com/resources/url-e0ba328ae1a643b0a5aa/
- Original source: https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0
- Kind: dataset
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: screen-understanding, grounding
- Evidence checked: 2026-10-18T04:35:16Z
- ID: url:e0ba328ae1a643b0a5aa

### Limitations

Public release includes train+dev and test ZIP packages plus a test-answer JSON file. The v1.0 card’s exact split table differs from the older project-page headline of 0.44M questions/6.5K pages; counts are kept with their sources. This is a static webpage-understanding dataset. CC-BY-4.0 is the data-card declaration.

- Record JSON: https://awesomecua.com/resources/url-e0ba328ae1a643b0a5aa/record.json

### Structured profile

- Formats: CSV, HTML, JSON, ZIP packages
- Modalities: questions and answers, HTML, screenshots, layout metadata
- Splits: train, dev, test
- Supervision: extractive or yes/no answers, answer DOM-element references

#### Count observations

- 307,315 question–answer examples — WebSRC v1.0 train (reported; source: https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md)
- 4,549 web pages — WebSRC v1.0 train (reported; source: https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md)
- 52,826 question–answer examples — WebSRC v1.0 dev (reported; source: https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md)
- 913 web pages — WebSRC v1.0 dev (reported; source: https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md)
- 40,357 question–answer examples — WebSRC v1.0 test (reported; source: https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md)
- 985 web pages — WebSRC v1.0 test (reported; source: https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md)

Each dataset.csv row is a QA example; web pages and QA examples are different units. Use the v1.0 split table for this release. The card retains email-evaluation instructions, while the manifest now includes test answers; no submission was made.

### License declarations

- code: not recorded
- data: CC-BY-4.0 — https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md
- document: not recorded
- weights: not recorded

- data review: Publisher dataset-card declaration for this release.
  Sources: https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md

### Primary evidence

- https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md (retrieved 2026-10-18T04:35:16Z; SHA-256 061e5bcaa49e819f0133afb912ad5ce20a8c2b6c28ca60319a4635d6ce835ddb)
- https://huggingface.co/api/datasets/X-LANCE/WebSRC_v1.0 (retrieved 2026-10-18T04:33:29Z; SHA-256 a7976dd931c3fcf11de2456614f95eb071978599bd70fb89c0ea009d31da4300)
- https://x-lance.github.io/WebSRC/ (retrieved 2026-10-17T15:37:04Z; SHA-256 3c2c601d8b4ad2f379cac9b97a2cbb901883d9bc6c1a682359f9b4135e6dd4bc)

---

## WenyiWU0111/CoMEM-agent-memory-trajectories

A dataset for GUI-agent memory research containing expanded web links, synthesized tasks, and executed trajectories with successful and failed outcomes.

- Catalog URL: https://awesomecua.com/resources/url-87e0195f2401d5f6f66f/
- Original source: https://huggingface.co/datasets/WenyiWU0111/CoMEM-agent-memory-trajectories
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: data-generation, interaction-history, memory
- Evidence checked: 2026-11-09T19:58:09Z
- ID: url:87e0195f2401d5f6f66f

### Limitations

The card reports 222,235 synthesized tasks and 188,451 trajectories. It lists Apache-2.0 as the license.

- Record JSON: https://awesomecua.com/resources/url-87e0195f2401d5f6f66f/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/WenyiWU0111/CoMEM-agent-memory-trajectories
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/WenyiWU0111/CoMEM-agent-memory-trajectories (retrieved 2026-11-09T19:58:09Z; SHA-256 e272987a86a523262373eea1dc5f950a298eed8202a6bf124bd8330a66108d37)
- https://huggingface.co/api/datasets/WenyiWU0111/CoMEM-agent-memory-trajectories (retrieved 2026-11-09T19:58:09Z; SHA-256 e272987a86a523262373eea1dc5f950a298eed8202a6bf124bd8330a66108d37)

---

## westworld

The task dataset of the Halluminate Westworld web-agent benchmark: 100 validation tasks across e-commerce and travel sites, each with a generation config, domain, categories, difficulty and step limit.

- Catalog URL: https://awesomecua.com/resources/url-b43faa43e897c074b7c8/
- Original source: https://huggingface.co/datasets/Halluminate/westworld
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation
- Evidence checked: 2026-11-10T06:29:24Z
- ID: url:b43faa43e897c074b7c8

### Limitations

One parquet validation split loaded with the datasets library; tasks are instantiated with the westworld package, and the simulated environments need a Halluminate API key. Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-b43faa43e897c074b7c8/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/Halluminate/westworld
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/Halluminate/westworld (retrieved 2026-11-10T06:29:24Z; SHA-256 fa8696e036db3105b15a84e9f0233981c8266615805819ad75dfa7776cc572d4)
- https://huggingface.co/api/datasets/Halluminate/westworld (retrieved 2026-11-10T06:29:24Z; SHA-256 fa8696e036db3105b15a84e9f0233981c8266615805819ad75dfa7776cc572d4)

---

## widget-caption

A dataset of captions describing UI widget functions for training and evaluating models that describe interface elements. It includes 61,286 captioned widgets.

- Catalog URL: https://awesomecua.com/resources/github-google-research-datasets-widget-caption/
- Original source: https://github.com/google-research-datasets/widget-caption
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: screen-understanding, data-generation, evaluation
- Evidence checked: 2026-11-09T19:56:09Z
- ID: github:google-research-datasets/widget-caption

### Limitations

Screens for 12,960 captioned widgets are withheld for copyright reasons. The README explains widget lookup through nodeId and declares a CC BY 4.0 license.

- Record JSON: https://awesomecua.com/resources/github-google-research-datasets-widget-caption/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/google-research-datasets/widget-caption/HEAD/README.md (retrieved 2026-11-09T19:56:09Z; SHA-256 47e102c1672f7f87b06a92122e874622c2dbe2740e8c5e8b44871bb0c8ec3062)

---

## WikiHow Task Set

A Mobile-Env task set for evaluating navigation in the WikiHow app, with supplementary tasks across Android apps. It provides task definitions and rewritten instructions.

- Catalog URL: https://awesomecua.com/resources/url-25af759a783f1514fe58/
- Original source: https://huggingface.co/datasets/zdy023/WikiHow-taskset
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: evaluation, mobile-navigation, workflow, data-generation
- Evidence checked: 2026-11-09T05:05:10Z
- ID: url:25af759a783f1514fe58

### Limitations

The source says the public WikiHow APK and cached website data were removed at WikiHow's request. It describes released open-world task definitions, an Android virtual device archive and human-rewritten instructions. The card declares Apache-2.0.

- Record JSON: https://awesomecua.com/resources/url-25af759a783f1514fe58/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/zdy023/WikiHow-taskset
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/zdy023/WikiHow-taskset (retrieved 2026-11-09T05:05:10Z; SHA-256 5d5c8db478c79bb6cabd29453d83ce64fa54b1a309fb73affe805a57d60527cf)
- https://huggingface.co/api/datasets/zdy023/WikiHow-taskset (retrieved 2026-11-09T05:05:10Z; SHA-256 5d5c8db478c79bb6cabd29453d83ce64fa54b1a309fb73affe805a57d60527cf)
- https://huggingface.co/api/datasets/zdy023/WikiHow-taskset (retrieved 2026-11-09T05:25:47Z; SHA-256 5d5c8db478c79bb6cabd29453d83ce64fa54b1a309fb73affe805a57d60527cf)
- https://huggingface.co/api/datasets/X-LANCE/WikiHow-taskset (retrieved 2026-11-09T05:25:47Z; SHA-256 5d5c8db478c79bb6cabd29453d83ce64fa54b1a309fb73affe805a57d60527cf)

---

## WinDeskGround

Benchmark data for GUI grounding on synthesized multi-window desktops: 1356 samples over 585 images, with controlled occlusion, semantic distraction and clutter plus difficulty levels L1 to L5.

- Catalog URL: https://awesomecua.com/resources/url-897db7dba36e69a60e5e/
- Original source: https://huggingface.co/datasets/Zbao/WinDeskGround
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop
- Topics: grounding, robustness, evaluation
- Evidence checked: 2026-11-10T03:01:09Z
- ID: url:897db7dba36e69a60e5e

### Limitations

The repository holds desktop screenshots with paired debug renderings under sensitivity/ folders and simulation/L1 to L5 folders and declares an Apache-2.0 license. The WinDeskGround GitHub repository holds the generation and evaluation scripts, and WinDeskGround_windows holds the source window images.

- Record JSON: https://awesomecua.com/resources/url-897db7dba36e69a60e5e/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/Zbao/WinDeskGround
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/Zbao/WinDeskGround (retrieved 2026-11-10T03:01:09Z; SHA-256 51844b9973a85a45ae726c182beb722d8207a10bd261289d389dc2e9ac45c845)
- https://huggingface.co/api/datasets/Zbao/WinDeskGround (retrieved 2026-11-10T03:01:09Z; SHA-256 51844b9973a85a45ae726c182beb722d8207a10bd261289d389dc2e9ac45c845)

---

## WinDeskGround_windows

WinDeskGround_windows supplies Windows application screenshots with clickable targets, bounding boxes, and referring expressions for desktop GUI grounding tasks.

- Catalog URL: https://awesomecua.com/resources/url-79b8dfa115894a7f53aa/
- Original source: https://huggingface.co/datasets/Zbao/WinDeskGround_windows
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, windows
- Topics: grounding, screen-understanding, data-generation
- Evidence checked: 2026-11-09T19:57:12Z
- ID: url:79b8dfa115894a7f53aa

### Limitations

The card reports 614 screenshots and 1,578 queries in its domain table. The repository lists an annotation JSON file and images across browser, productivity, communication, and utility categories. The card declares Apache 2.0.

- Record JSON: https://awesomecua.com/resources/url-79b8dfa115894a7f53aa/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/Zbao/WinDeskGround_windows
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/Zbao/WinDeskGround_windows (retrieved 2026-11-09T19:57:12Z; SHA-256 687cfae8c1a7d4288b6912d22aecf6fc5882666b194c8a7620eb73f090fa7514)
- https://huggingface.co/api/datasets/Zbao/WinDeskGround_windows (retrieved 2026-11-09T19:57:12Z; SHA-256 687cfae8c1a7d4288b6912d22aecf6fc5882666b194c8a7620eb73f090fa7514)

---

## WorkDemo-350

Desktop demonstrations with task descriptions, videos, input logs, and action-linked screenshot evidence for studying reusable agent skills.

- Catalog URL: https://awesomecua.com/resources/url-243ab00712ba19cc2089/
- Original source: https://huggingface.co/datasets/yuqi777/WorkDemo-350
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop
- Topics: recording, workflow, video
- Evidence checked: 2026-10-16T10:47:49Z
- ID: url:243ab00712ba19cc2089

### Limitations

The card documents post hoc selection of the 286-task OSWorld subset based on model outcomes, uncalibrated coordinate annotations, and missing task-success acceptance records. It provides no train/test split or complete evaluator and does not claim complete anonymization. Review these limits before training or evaluation; the collection is an offline demonstration asset.

- Record JSON: https://awesomecua.com/resources/url-243ab00712ba19cc2089/record.json

### Structured profile

- Formats: MP4, PNG, JSON, JSONL, commented key logs
- Modalities: screen video, screenshots, input events, task text
- Splits: not recorded
- Supervision: human workflow demonstrations, skill induction

#### Count observations

- 350 demonstrations — packaged tasks/videos (reported; source: https://huggingface.co/datasets/yuqi777/WorkDemo-350/raw/main/README.md)
- 8,388 evidence images — final packaged images (reported; source: https://huggingface.co/datasets/yuqi777/WorkDemo-350/raw/main/README.md)
- 11,951 action records — packaged action traces (reported; source: https://huggingface.co/datasets/yuqi777/WorkDemo-350/raw/main/README.md)

The OSWorld subset was selected post hoc using model outcomes; no train/test split is supplied. Coordinate calibration, task success, and complete anonymization are not established by package-format checks.

### License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/yuqi777/WorkDemo-350/raw/main/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/yuqi777/WorkDemo-350/raw/main/README.md (retrieved 2026-10-16T10:47:49Z; SHA-256 ae14cfe91c8c9a79edf1f306273a2ee9d1790b1dc5be0cd2d89e93df09db42f0)
- https://huggingface.co/datasets/yuqi777/WorkDemo-350/raw/main/README.md (retrieved 2026-10-16T10:47:49Z; SHA-256 ae14cfe91c8c9a79edf1f306273a2ee9d1790b1dc5be0cd2d89e93df09db42f0)

---

## world_model_for_wa_desc_with_tao_dataset

Training data for the world model of the WMA web agent: 14744 steps pairing an objective, previous actions, an observation and the current action with the next state and a description of what changed.

- Catalog URL: https://awesomecua.com/resources/url-96bb23bd687d6c227a41/
- Original source: https://huggingface.co/datasets/LangAGI-Lab/world_model_for_wa_desc_with_tao_dataset
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: world-models, web-navigation, data-generation
- Evidence checked: 2026-11-10T03:01:12Z
- ID: url:96bb23bd687d6c227a41

### Limitations

One Parquet split of 14,744 rows with url, task_id, step_idx, objective, previous_actions, observation, current_action, next_state_acctree, refined_tao, raw_prediction, rationale and next_state_description_with_tao fields. The WMA-Agents README lists it beside a formatted version and the Meta-Llama-3.1-8B-Instruct world model adapter.

- Record JSON: https://awesomecua.com/resources/url-96bb23bd687d6c227a41/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/LangAGI-Lab/world_model_for_wa_desc_with_tao_dataset (retrieved 2026-11-10T03:01:12Z; SHA-256 27e68537e1f7b62f35f47bc9322eea2a77d5af3ae616d10af702f4b65655f982)
- https://huggingface.co/api/datasets/LangAGI-Lab/world_model_for_wa_desc_with_tao_dataset (retrieved 2026-11-10T03:01:12Z; SHA-256 27e68537e1f7b62f35f47bc9322eea2a77d5af3ae616d10af702f4b65655f982)

---

## world_model_for_wa_desc_with_tao_formatted_w_cot

Formatted instruction, input and output examples for training the WMA world model, which describes how a WebArena page changes after an action, with 11795 training and 2949 validation rows.

- Catalog URL: https://awesomecua.com/resources/url-3ef18fbb67e0376561db/
- Original source: https://huggingface.co/datasets/LangAGI-Lab/world_model_for_wa_desc_with_tao_formatted_w_cot
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: world-models, web-navigation
- Evidence checked: 2026-11-10T03:01:06Z
- ID: url:3ef18fbb67e0376561db

### Limitations

Parquet train and validation splits with three string fields, about 163 MB; the card body is the default template and states no license. The WMA-Agents README pairs it with the raw world_model_for_wa_desc_with_tao_dataset and a Llama-3.1-8B world-model adapter.

- Record JSON: https://awesomecua.com/resources/url-3ef18fbb67e0376561db/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/LangAGI-Lab/world_model_for_wa_desc_with_tao_formatted_w_cot (retrieved 2026-11-10T03:01:06Z; SHA-256 64bb48706a581de66ec7a5ed86608fa3dc3d5e6478685b0b58e7c78d043d1957)
- https://huggingface.co/api/datasets/LangAGI-Lab/world_model_for_wa_desc_with_tao_formatted_w_cot (retrieved 2026-11-10T03:01:06Z; SHA-256 64bb48706a581de66ec7a5ed86608fa3dc3d5e6478685b0b58e7c78d043d1957)

---

## WorldGUI-Bench

A desktop GUI evaluation dataset with user requests, instructional videos and pre-actions that vary task starting states. The release includes task metadata and a data archive.

- Catalog URL: https://awesomecua.com/resources/url-b540fe81c57cedb1f556/
- Original source: https://huggingface.co/datasets/hhenryz/WorldGUI-Bench
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop
- Topics: evaluation, robustness, video, planning
- Evidence checked: 2026-11-09T06:16:39Z
- ID: url:b540fe81c57cedb1f556

### Limitations

The repository lists WorldGUI-data.zip and worldgui_metadata.json. The card declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-b540fe81c57cedb1f556/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/hhenryz/WorldGUI-Bench
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/hhenryz/WorldGUI-Bench (retrieved 2026-11-09T06:16:39Z; SHA-256 04918486ebffcb42022477bdcab041b2da78361f0072bc60137c506d3a129a7d)
- https://huggingface.co/api/datasets/hhenryz/WorldGUI-Bench (retrieved 2026-11-09T06:16:39Z; SHA-256 04918486ebffcb42022477bdcab041b2da78361f0072bc60137c506d3a129a7d)

---

## xunsss/osworld2-codex-gpt56sol-0624-attempt-preview

This OSWorld-V2 dataset provides compact tables for browsing Codex task summaries, attempts, trajectory events, and executed GUI or CLI actions.

- Catalog URL: https://awesomecua.com/resources/url-bf57897ba4d047112345/
- Original source: https://huggingface.co/datasets/xunsss/osworld2-codex-gpt56sol-0624-attempt-preview
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop
- Topics: evaluation, interaction-history, observability
- Evidence checked: 2026-11-09T19:55:52Z
- ID: url:bf57897ba4d047112345

### Limitations

The repository lists Parquet files for task summaries, attempts, events, and actions. The card says screenshots and original trajectory files remain in the complete archive.

- Record JSON: https://awesomecua.com/resources/url-bf57897ba4d047112345/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/xunsss/osworld2-codex-gpt56sol-0624-attempt-preview (retrieved 2026-11-09T19:55:52Z; SHA-256 512942c4f0a6a59a6417e8ff9c60f8193dbd8e906bd3a3cc5d4695bbe62f1ea3)
- https://huggingface.co/api/datasets/xunsss/osworld2-codex-gpt56sol-0624-attempt-preview (retrieved 2026-11-09T19:55:52Z; SHA-256 512942c4f0a6a59a6417e8ff9c60f8193dbd8e906bd3a3cc5d4695bbe62f1ea3)

---

## a3-qwen-3.5-9b-trajectories

AgentLab run logs of the A3-Qwen3.5-9B web agent on BrowserGym benchmarks, stored per task as step JSON files with goals, page URLs, DOM and accessibility observations and actions; this address opens the WebArena folder.

- Catalog URL: https://awesomecua.com/resources/url-3ab90a696d8578c944c8/
- Original source: https://huggingface.co/datasets/xhluca/a3-qwen-3.5-9b-trajectories/tree/main/webarena
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, evaluation
- Evidence checked: 2026-11-10T03:01:05Z
- ID: url:3ab90a696d8578c944c8

### Limitations

Top-level folders are miniwob, webarena, visualwebarena, workarena_l1 and workarena_l2; each task folder holds exp_args.json, step_N.json files and summary_info.json. The collection for arXiv 2604.07776 lists it beside the A3-Qwen3.5 models and the A3-Synth training data; the repository has no card or license.

- Record JSON: https://awesomecua.com/resources/url-3ab90a696d8578c944c8/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/xhluca/a3-qwen-3.5-9b-trajectories (retrieved 2026-11-10T03:01:05Z; SHA-256 e68f200e58322e3c039d734f57c8a81c0342ef89f93b5a202c7c5a7f0a4ed94c)
- https://huggingface.co/api/datasets/xhluca/a3-qwen-3.5-9b-trajectories (retrieved 2026-11-10T03:01:05Z; SHA-256 e68f200e58322e3c039d734f57c8a81c0342ef89f93b5a202c7c5a7f0a4ed94c)

---

## Agent Humanization Benchmark (AHB) recordings

Touch-gesture and motion-sensor recordings of people and mobile GUI agents doing the same Chinese-language Android app tasks, with task lists and metadata for training detectors that tell agents from humans.

- Catalog URL: https://awesomecua.com/resources/url-3e1a864c46c8ed5735d4/
- Original source: https://huggingface.co/datasets/lyyang2766/Passing-the-Turing-Test-on-Screen-Agent-Humanization-Benchmark
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: safety-security, mobile-navigation, evaluation
- Evidence checked: 2026-10-18T15:51:35Z
- ID: url:3e1a864c46c8ed5735d4

### Limitations

The Hub repository has no dataset card or license file; the arXiv paper and its code repository link it as the released data. The paper reports that all sessions ran on one Xiaomi Mi Max 2 phone with MIUI 11.0.2.0. Per-archive contents remain unverified because the recording archives were outside the reviewed evidence. Event totals are the paper's figures.

- Record JSON: https://awesomecua.com/resources/url-3e1a864c46c8ed5735d4/record.json

### Structured profile

- Formats: ZIP archives, plain-text gesture logs, CSV, XLSX, Python pickle
- Modalities: touch input events, motion-sensor readings, task instructions
- Splits: not recorded
- Supervision: source labels for human users and named agent configurations, task success scoring in the metadata workbook

#### Count observations

- 116 task descriptions — metadata/tasks.csv at Hub revision 379fd3ef (computed) (computed; source: https://huggingface.co/datasets/lyyang2766/Passing-the-Turing-Test-on-Screen-Agent-Humanization-Benchmark/raw/379fd3ef8b7103757f160ea80ac80998165404fe/metadata/tasks.csv)
- 20 distinct app names — metadata/tasks.csv at Hub revision 379fd3ef (computed) (computed; source: https://huggingface.co/datasets/lyyang2766/Passing-the-Turing-Test-on-Screen-Agent-Humanization-Benchmark/raw/379fd3ef8b7103757f160ea80ac80998165404fe/metadata/tasks.csv)
- 21 applications — dataset described in the paper, grouped into five clusters (reported; source: https://arxiv.org/html/2604.09574v1)
- 72 gesture-recording log files — three agent folders under gesture_recordings/ at Hub revision 379fd3ef (computed) (computed; source: https://huggingface.co/api/datasets/lyyang2766/Passing-the-Turing-Test-on-Screen-Agent-Humanization-Benchmark/revision/379fd3ef8b7103757f160ea80ac80998165404fe)
- 7 gesture-recording ZIP archives — gesture_recordings/ at Hub revision 379fd3ef (computed) (computed; source: https://huggingface.co/api/datasets/lyyang2766/Passing-the-Turing-Test-on-Screen-Agent-Humanization-Benchmark/revision/379fd3ef8b7103757f160ea80ac80998165404fe)
- 8 sensor-recording ZIP archives — sensor_recordings/ at Hub revision 379fd3ef (computed) (computed; source: https://huggingface.co/api/datasets/lyyang2766/Passing-the-Turing-Test-on-Screen-Agent-Humanization-Benchmark/revision/379fd3ef8b7103757f160ea80ac80998165404fe)
- 37,768,698 motion and sensor events — four human sub-populations (paper Table 4) (reported; source: https://arxiv.org/html/2604.09574v1)
- 243,090,929 motion and sensor events — five raw agent configurations (paper Table 4) (reported; source: https://arxiv.org/html/2604.09574v1)
- 280,320,486 motion and sensor events — humanized agents without fake actions (paper Table 5) (reported; source: https://arxiv.org/html/2604.09574v1)
- 154,704,094 motion and sensor events — humanized agents with fake actions (paper Table 5) (reported; source: https://arxiv.org/html/2604.09574v1)

Computed counts come from a script over the pinned Hub file list and tasks.csv. tasks.csv names 20 apps while the paper reports 21. The task texts are in Chinese. The code repository says the metadata workbook holds agent, task, timestamp and success-scoring fields. Event counts are per sensor or touch event, and the four totals are separate populations; these counts are reported separately.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: The Hub repository has no dataset card, license metadata or license file at this revision, and the linked code repository declares no license, so no data grant is established.
  Sources: https://huggingface.co/api/datasets/lyyang2766/Passing-the-Turing-Test-on-Screen-Agent-Humanization-Benchmark/revision/379fd3ef8b7103757f160ea80ac80998165404fe

### Primary evidence

- https://huggingface.co/api/datasets/lyyang2766/Passing-the-Turing-Test-on-Screen-Agent-Humanization-Benchmark/revision/379fd3ef8b7103757f160ea80ac80998165404fe (retrieved 2026-10-18T15:51:35Z; SHA-256 76ac24bccdf4d78e87f86f20ceadf0b3cf25e2d008b017c340908d520743ed3b)
- https://huggingface.co/datasets/lyyang2766/Passing-the-Turing-Test-on-Screen-Agent-Humanization-Benchmark/raw/379fd3ef8b7103757f160ea80ac80998165404fe/metadata/tasks.csv (retrieved 2026-10-18T15:51:35Z; SHA-256 5b906fbc0df5f8677516c1a2c1e47c7c3a191df320574c5c3a100e99616a5f24)
- https://arxiv.org/html/2604.09574v1 (retrieved 2026-10-18T15:51:35Z; SHA-256 21c0f429eede313b7e3d302750bb5d77515af84b21c303c5fc5cc39138eb18c3)
- https://raw.githubusercontent.com/Gebro13/Passing-the-Turing-Test-on-Screen-Agent-Humanization-Benchmark/8924fa3e687af6f264d3b91a2d2f48faf8adfd8c/README.md (retrieved 2026-10-18T15:51:36Z; SHA-256 20ddeb13fedd6e07ff06104b65a2bd09ff7422b28064d7442196301c5172b062)
- https://huggingface.co/api/datasets/lyyang2766/Passing-the-Turing-Test-on-Screen-Agent-Humanization-Benchmark/revision/379fd3ef8b7103757f160ea80ac80998165404fe (retrieved 2026-10-18T15:51:35Z; SHA-256 76ac24bccdf4d78e87f86f20ceadf0b3cf25e2d008b017c340908d520743ed3b)

---

## AgentSynth tasks and trajectories

Published AgentSynth task definitions and recorded GUI trajectories, with OSWorld and InSTA training configurations and packaged screenshots, thoughts and commands.

- Catalog URL: https://awesomecua.com/resources/url-58a209f2b3b970916396/
- Original source: https://huggingface.co/datasets/sunblaze-ucb/AgentSynth
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, web
- Topics: data-generation, long-horizon, imitation-learning
- Evidence checked: 2026-10-18T04:35:17Z
- ID: url:58a209f2b3b970916396

### Limitations

Public Hub manifest contains JSONL task files and trajectory ZIP packages. Counts describe the publisher-reported task collection; independently counted archive-row and ZIP-filename totals remain unavailable.

- Record JSON: https://awesomecua.com/resources/url-58a209f2b3b970916396/record.json

### Structured profile

- Formats: JSONL, ZIP trajectory packages
- Modalities: screenshots, task instructions, LLM thoughts, commands
- Splits: train (osworld configuration), train (insta configuration)
- Supervision: synthetic tasks, agent trajectories

#### Count observations

- > 6,000 tasks — The count is the collection total described by the dataset card; the released-row count remains unverified. (reported; source: https://huggingface.co/datasets/sunblaze-ucb/AgentSynth/raw/9ec3f3139f9786e81aee14b7fff1eb487cc7e991/README.md)

Card maps osworld/train to all_tasks.jsonl and insta/train to task_sequences.jsonl. Six difficulty levels and trajectory screenshots/thoughts/commands are documented. ZIP file labels identify files; trajectory totals are unspecified, and configurations and composed-task levels may overlap.

### License declarations

- code: not recorded
- data: Apache-2.0 — https://huggingface.co/datasets/sunblaze-ucb/AgentSynth/raw/9ec3f3139f9786e81aee14b7fff1eb487cc7e991/README.md
- document: not recorded
- weights: not recorded

- data review: Publisher dataset-card declaration for this release.
  Sources: https://huggingface.co/datasets/sunblaze-ucb/AgentSynth/raw/9ec3f3139f9786e81aee14b7fff1eb487cc7e991/README.md

### Primary evidence

- https://huggingface.co/datasets/sunblaze-ucb/AgentSynth/raw/9ec3f3139f9786e81aee14b7fff1eb487cc7e991/README.md (retrieved 2026-10-18T04:35:17Z; SHA-256 c1669d8e3caa27f8cd47c17b243b6a8d42807438d8a6a36074668adc57d33757)
- https://huggingface.co/api/datasets/sunblaze-ucb/AgentSynth (retrieved 2026-10-18T04:33:20Z; SHA-256 0d3797d75dd4089ece8c8d4624f2a726024d25be255255d8770f78de21d75906)
- https://raw.githubusercontent.com/sunblaze-ucb/AgentSynth/HEAD/README.md (retrieved 2026-10-18T04:27:12Z; SHA-256 42e8b8dead7caea3f8b21e93a075e8c895dfc30a25e1470bf97a90940bbf0106)

---

## AgentTrek

Synthesizes browser-agent trajectories by replaying web tutorials as guidance, releasing the trajectory data with multimodal grounding and reasoning and an AgentTrek-32B agent.

- Catalog URL: https://awesomecua.com/resources/github-xlang-ai-agenttrek/
- Original source: https://github.com/xlang-ai/AgentTrek
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: data-generation, video
- Evidence checked: 2026-10-16T06:36:01Z
- ID: github:xlang-ai/agenttrek

- Record JSON: https://awesomecua.com/resources/github-xlang-ai-agenttrek/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/xlang-ai/AgentTrek/HEAD/README.md (retrieved 2026-10-16T06:36:01Z; SHA-256 17fa475b96bdd00270c656072d3f8fc55d8433f0e3a1c2762110160ec21a5c35)

---

## AMEX

Code for AMEX Android GUI data that converts its three annotation levels into question-answer pairs and fine-tunes a LLaMA2-Accessory model, with a released checkpoint.

- Catalog URL: https://awesomecua.com/resources/github-yuxiangchai-amex-codebase/
- Original source: https://github.com/YuxiangChai/AMEX-codebase
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: data-generation
- Evidence checked: 2026-10-16T06:36:01Z
- ID: github:yuxiangchai/amex-codebase

- Record JSON: https://awesomecua.com/resources/github-yuxiangchai-amex-codebase/record.json

### Structured profile

- Formats: not recorded
- Modalities: screenshots, element annotations, functionality descriptions, action chains
- Splits: not recorded
- Supervision: element grounding, UI functionality, interaction trajectories

#### Count observations

- > 104,000 screenshots — AMEX collection described in the paper (reported; source: https://arxiv.org/abs/2407.17490)

The main repository contains companion training code. The scale and annotation levels here come from the paper.

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/YuxiangChai/AMEX-codebase/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/YuxiangChai/AMEX-codebase/HEAD/README.md (retrieved 2026-10-16T06:36:01Z; SHA-256 3184bfd612543621e57226e9079132dc8d5695339795a60366d3f6d445e13551)
- https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=800&max_results=100&sortBy=submittedDate&sortOrder=descending (retrieved 2026-10-16T06:36:58Z; SHA-256 c87e97eb397da04806d53145cf9c13be739fc657bb54dca9318c8c4ed2a36249)
- https://yxchai.com/AMEX/ (retrieved 2026-10-18T04:27:11Z; SHA-256 4aab61e6a95ab6b6598fb64b8e55d787cd49b5c4f242d15372aed2dd312f97aa)
- https://raw.githubusercontent.com/YuxiangChai/AMEX-codebase/HEAD/LICENSE (retrieved 2026-10-16T06:42:02Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## Android in the Wild

Human demonstrations of Android tasks with screenshots and touch actions.

- Catalog URL: https://awesomecua.com/resources/component-google-research-android-in-the-wild/
- Original source: https://github.com/google-research/google-research/tree/master/android_in_the_wild
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: data-generation, mobile-navigation
- Evidence checked: 2026-10-16T06:38:29Z
- ID: component:google-research/android_in_the_wild

- Record JSON: https://awesomecua.com/resources/component-google-research-android-in-the-wild/record.json

### Structured profile

- Formats: GZIP-compressed TFRecord
- Modalities: screenshots, instructions, actions
- Splits: not recorded
- Supervision: interaction trajectories, action prediction

#### Count observations

- 715,142 episodes — sum of the five published AitW subsets (reported; source: https://raw.githubusercontent.com/google-research/google-research/master/android_in_the_wild/README.md)
- 5,689,993 action examples — sum of the five published AitW subsets (reported; source: https://raw.githubusercontent.com/google-research/google-research/master/android_in_the_wild/README.md)

Episodes and action examples are different units. The collection combines multi-step subsets and hindsight-labeled single-step tasks; preserve subset and split choices.

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/google-research/google-research/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/google-research/google-research/master/android_in_the_wild/README.md (retrieved 2026-10-16T06:38:29Z; SHA-256 6d8964c95db41dada1d5867e50a5ec61f6cb90595965d0e72e010b8e4a12dcb2)
- https://raw.githubusercontent.com/google-research/google-research/HEAD/LICENSE (retrieved 2026-10-16T06:42:06Z; SHA-256 cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30)

---

## android_icon_dataset

A labeled Android icon dataset for studying visual interface elements. Its train split contains images and string class labels.

- Catalog URL: https://awesomecua.com/resources/url-b1c6b94743e6dbac930d/
- Original source: https://huggingface.co/datasets/Lancelot53/android_icon_dataset
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: screen-understanding
- Evidence checked: 2026-11-09T06:16:33Z
- ID: url:b1c6b94743e6dbac930d

### Limitations

The repository contains a Parquet train split. The card lists 8,161 examples and identifies a Misc_or_unknown class.

- Record JSON: https://awesomecua.com/resources/url-b1c6b94743e6dbac930d/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/Lancelot53/android_icon_dataset (retrieved 2026-11-09T06:16:33Z; SHA-256 ebd75e1be578565fb446ef6ab148f5d3e5d456907f5eb5eef25b2301cbd5b9f2)
- https://huggingface.co/api/datasets/Lancelot53/android_icon_dataset (retrieved 2026-11-09T06:16:33Z; SHA-256 ebd75e1be578565fb446ef6ab148f5d3e5d456907f5eb5eef25b2301cbd5b9f2)

---

## AndroidControl

Android demonstrations with high-level goals, step instructions, screenshots, and accessibility trees.

- Catalog URL: https://awesomecua.com/resources/component-google-research-android-control/
- Original source: https://github.com/google-research/google-research/tree/master/android_control
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: data-generation, mobile-navigation
- Evidence checked: 2026-10-16T06:38:29Z
- ID: component:google-research/android_control

- Record JSON: https://awesomecua.com/resources/component-google-research-android-control/record.json

### Structured profile

- Formats: GZIP-compressed TFRecord
- Modalities: screenshots, accessibility trees, instructions, JSON actions
- Splits: publisher split file
- Supervision: interaction trajectories, high- and low-level action instruction

#### Count observations

- > 15,000 demonstrations — AndroidControl collection (reported; source: https://raw.githubusercontent.com/google-research/google-research/master/android_control/README.md)
- 833 applications — AndroidControl collection (reported; source: https://raw.githubusercontent.com/google-research/google-research/master/android_control/README.md)

Step instructions can be repeated across multiple actions. Each episode has one more screenshot than action; step instructions can repeat across multiple actions.

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/google-research/google-research/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/google-research/google-research/master/android_control/README.md (retrieved 2026-10-16T06:38:29Z; SHA-256 e4f8baa15441fb63cad07220cc5a4de177a1f785d4fe1fed5cfcbf3c3867faf1)
- https://raw.githubusercontent.com/google-research/google-research/HEAD/LICENSE (retrieved 2026-10-16T06:42:06Z; SHA-256 cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30)

---

## AndroidHowTo

AndroidHowTo provides scripts and annotations for building instructional mobile UI action datasets linking how-to steps to Android screens.

- Catalog URL: https://awesomecua.com/resources/github-debymf-generating-android-howto/
- Original source: https://github.com/debymf/generating_android_howto
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, data-generation
- Evidence checked: 2026-11-04T13:12:13Z
- ID: github:debymf/generating_android_howto

- Record JSON: https://awesomecua.com/resources/github-debymf-generating-android-howto/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/debymf/generating_android_howto/HEAD/README.md (retrieved 2026-11-04T13:12:13Z; SHA-256 e8c73323ff5bc5cc82583a61dea9686206ded5771235cc52b06b8d58cabad546)

---

## AutoDroid V2 training data

Conversation-formatted supervision released for fine-tuning AutoDroid V2, with the project documenting a ShareGPT-style JSON configuration.

- Catalog URL: https://awesomecua.com/resources/url-9a3506ca6ef034adb424/
- Original source: https://huggingface.co/datasets/BlitherBoom/AutoDroid-V2-Dataset
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: data-generation, imitation-learning, mobile-navigation
- Evidence checked: 2026-10-17T09:15:33Z
- ID: url:9a3506ca6ef034adb424

### Limitations

The public Hub manifest lists AutoDroid-V2-Dataset.json; no training records were downloaded. The card contains only an MIT metadata declaration, so the description and intended training use come from the official repository training guide.

- Record JSON: https://awesomecua.com/resources/url-9a3506ca6ef034adb424/record.json

### Structured profile

- Formats: JSON in ShareGPT conversation format
- Modalities: text
- Splits: not recorded
- Supervision: supervised conversations for AutoDroid-V2 fine-tuning

#### Count observations

No count recorded.

The card has license metadata only. The project training README supplies formatting and purpose. No sample count or split inventory is inferred from the training configuration.

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/BlitherBoom/AutoDroid-V2-Dataset/raw/main/README.md
- document: not recorded
- weights: not recorded

- data review: Publisher dataset-card license declaration for the released data.
  Sources: https://huggingface.co/datasets/BlitherBoom/AutoDroid-V2-Dataset/raw/main/README.md

### Primary evidence

- https://huggingface.co/api/datasets/BlitherBoom/AutoDroid-V2-Dataset (retrieved 2026-10-17T09:15:33Z; SHA-256 1b300edfbf44167da71639a56f8ab668dabd33769575fb313ebef5220fc1bddb)
- https://huggingface.co/datasets/BlitherBoom/AutoDroid-V2-Dataset/raw/main/README.md (retrieved 2026-10-17T09:15:33Z; SHA-256 d8d7a46d41a1a37fe4f0a5f637bf55c649310185329127d8a2204632e480be17)
- https://raw.githubusercontent.com/MobileLLM/AutoDroid-V2/HEAD/step_3_training/README.md (retrieved 2026-10-17T09:14:58Z; SHA-256 8ba37983a2c2da53d96a52696c07e4bdbea4e987a1a07b557935d614c3be46d2)
- https://raw.githubusercontent.com/MobileLLM/AutoDroid-V2/HEAD/README_minimal.md (retrieved 2026-10-17T09:14:58Z; SHA-256 74508100843f8db6db6bb151e77ac1cc604a6b7ebd16d3225266d73434465136)

---

## bevaya/RICO-ScreenQA-Complex

A test dataset of complex questions about RICO interface screens, with screen images and ground-truth answers. The card lists 11,781 examples.

- Catalog URL: https://awesomecua.com/resources/url-b6114625f883ec0fda33/
- Original source: https://huggingface.co/datasets/bevaya/RICO-ScreenQA-Complex
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: screen-understanding, evaluation
- Evidence checked: 2026-11-09T05:05:17Z
- ID: url:b6114625f883ec0fda33

### Limitations

The card lists a test split, image and text fields, and a CC BY 4.0 license. The repository file list contains three test Parquet files.

- Record JSON: https://awesomecua.com/resources/url-b6114625f883ec0fda33/record.json

### License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/bevaya/RICO-ScreenQA-Complex
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/bevaya/RICO-ScreenQA-Complex (retrieved 2026-11-09T05:05:17Z; SHA-256 0f033c7e26d5245ddb127ec8f6ef83f5e967b6159bfc0425e3174be844847d01)
- https://huggingface.co/api/datasets/bevaya/RICO-ScreenQA-Complex (retrieved 2026-11-09T05:05:17Z; SHA-256 0f033c7e26d5245ddb127ec8f6ef83f5e967b6159bfc0425e3174be844847d01)

---

## Browser Agent Failure Corpus

Browser Agent Failure Corpus is a versioned dataset of browser-agent action failures, execution traces, and guardrail counterexamples.

- Catalog URL: https://awesomecua.com/resources/github-mutantweb-browser-agent-failure-corpus/
- Original source: https://github.com/MutantWeb/browser-agent-failure-corpus
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, robustness, safety-security
- Evidence checked: 2026-11-04T14:20:12Z
- ID: github:mutantweb/browser-agent-failure-corpus

- Record JSON: https://awesomecua.com/resources/github-mutantweb-browser-agent-failure-corpus/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/MutantWeb/browser-agent-failure-corpus/HEAD/README.md (retrieved 2026-11-04T14:20:12Z; SHA-256 78d26a8dbaaca6da843cbacb71e271f652f5386831d6a4de1fcadbd16cb28f6a)

---

## CMGUI

18k trajectories with 98k steps from more than 50 Chinese mobile apps in domains such as e-commerce and social media, for building GUI agents on Chinese apps.

- Catalog URL: https://awesomecua.com/resources/url-ab26f9ef56d651cee587/
- Original source: https://huggingface.co/datasets/alibabagroup/CMGUI
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: data-generation
- Evidence checked: 2026-10-16T06:38:26Z
- ID: url:ab26f9ef56d651cee587

- Record JSON: https://awesomecua.com/resources/url-ab26f9ef56d651cee587/record.json

### License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/alibabagroup/CMGUI
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/alibabagroup/CMGUI (retrieved 2026-10-16T06:38:26Z; SHA-256 aa1e063e73269acd0cb06adcef67d6230f0fe9498ed361d92234053dcf035685)
- https://huggingface.co/datasets/alibabagroup/CMGUI/raw/main/README.md (retrieved 2026-10-17T16:10:26Z; SHA-256 6f43b9e5f2c783f91cc3271f51db6a9a521c29f21954a2a30ad0cfa186e1c1b7)
- https://huggingface.co/api/datasets/alibabagroup/CMGUI (retrieved 2026-10-16T06:38:26Z; SHA-256 aa1e063e73269acd0cb06adcef67d6230f0fe9498ed361d92234053dcf035685)

---

## Computer Use Large (markov-ai)

48,478 trimmed, audio-free screen-recording videos (about 12,300 hours) of AutoCAD, Blender, Excel, Photoshop, Salesforce and VS Code use, gathered from the internet, with duration metadata and no action labels.

- Catalog URL: https://awesomecua.com/resources/url-f00b2ed65c517295a6cc/
- Original source: https://huggingface.co/datasets/markov-ai/computer-use-large
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop
- Topics: video, data-generation
- Evidence checked: 2026-10-18T15:51:07Z
- ID: url:f00b2ed65c517295a6cc

### Limitations

The card says the videos were sourced from the internet, trimmed to screen-recording segments and stripped of audio, and are meant for training and evaluating computer-use agents. Per-folder metadata.jsonl files give file name, category, trimmed duration and segment count only; there are no actions, cursor events or instructions. At Hub revision b50aecce the manifest lists 48,477 MP4 files, one fewer than the card (Excel has 8,110 against 8,111). The repository also holds descriptions.parquet and 48,473 per-video JSON files under descriptions/, beyond the card's documented files; the one inspected file gives the source video's title and channel, transcript text in 10-second windows and a short step description or NO_TASK per window. CC-BY-4.0 is the card's declaration for the videos.

- Record JSON: https://awesomecua.com/resources/url-f00b2ed65c517295a6cc/record.json

### Structured profile

- Formats: MP4, JSONL, JSON, Parquet
- Modalities: screen-recording video, per-video duration metadata
- Splits: train
- Supervision: unlabeled screen recordings

#### Count observations

- 48,478 videos — all six software categories (reported; source: https://huggingface.co/datasets/markov-ai/computer-use-large/raw/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9/README.md)
- ≈ 12,300 hours of video — all six software categories after trimming (reported; source: https://huggingface.co/datasets/markov-ai/computer-use-large/raw/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9/README.md)
- 6 software categories — AutoCAD, Blender, Excel, Photoshop, Salesforce, VS Code (reported; source: https://huggingface.co/datasets/markov-ai/computer-use-large/raw/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9/README.md)
- 48,477 MP4 files — data/ at Hub revision b50aecce (computed) (computed; source: https://huggingface.co/api/datasets/markov-ai/computer-use-large/revision/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9)
- 48,473 per-video description JSON files — descriptions/ at Hub revision b50aecce (computed) (computed; source: https://huggingface.co/api/datasets/markov-ai/computer-use-large/revision/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9)

File counts come from a script over the pinned Hub manifest; the card's per-category table gives Excel 8,111 videos where the manifest has 8,110 MP4 files. The card leaves the description files undocumented; their content was checked in one file only. Videos, hours, categories and files are different units; these counts are reported separately. Each category is one configuration with a single train split.

### License declarations

- code: not recorded
- data: CC-BY-4.0 — https://huggingface.co/datasets/markov-ai/computer-use-large/raw/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9/README.md
- document: not recorded
- weights: not recorded

- data review: Dataset-card metadata and License section declare CC-BY-4.0 for this release; the card says the videos were sourced from the internet.
  Sources: https://huggingface.co/datasets/markov-ai/computer-use-large/raw/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9/README.md

### Primary evidence

- https://huggingface.co/datasets/markov-ai/computer-use-large/raw/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9/README.md (retrieved 2026-10-18T15:51:07Z; SHA-256 4e7feff2c4ea2420856a406dd3d74881928c4b86091412825001cf4610050f78)
- https://huggingface.co/api/datasets/markov-ai/computer-use-large/revision/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9 (retrieved 2026-10-18T15:50:47Z; SHA-256 3b3f16168be7ff108abb2a9e55d716b1336601d33cb7c6b8b8b3729994f2d791)
- https://huggingface.co/datasets/markov-ai/computer-use-large/raw/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9/descriptions/vscode/-2x-5DN-caM_descriptions.json (retrieved 2026-10-18T15:50:47Z; SHA-256 50f55d2be263484950dc59bceb4b116a8daaeeb8fb38ee7ab6496a8723c29411)
- https://huggingface.co/datasets/markov-ai/computer-use-large/raw/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9/README.md (retrieved 2026-10-18T15:51:07Z; SHA-256 4e7feff2c4ea2420856a406dd3d74881928c4b86091412825001cf4610050f78)

---

## Computer Use Trajectories (markov-ai)

160 successful OSWorld trajectories (1,378 steps) by a Gemini 3 Flash Preview agent with accessibility-tree grounding, with per-step screenshots, accessibility trees, pyautogui actions, responses and run logs.

- Catalog URL: https://awesomecua.com/resources/url-5a073f50270c4f316ce5/
- Original source: https://huggingface.co/datasets/markov-ai/computer-use
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop
- Topics: data-generation
- Evidence checked: 2026-10-18T11:44:36Z
- ID: url:5a073f50270c4f316ce5

### Limitations

The Hub API at revision de58c88b reports an ungated repository with 16 Parquet shards for the train split and 313 MP4 files under recordings/<domain>/. The card's 160 rows match its per-domain table, but the recording folders hold 313 files with a different domain mix, so some recordings may not belong to a published row; this was not checked. Every row has score 1.0 because only fully successful runs were kept; the set samples successful runs. The card credits a 'ComputerRL' evaluation framework at github.com/anthropics/ComputerRL, which the GitHub API did not resolve on 2026-10-18. The card declares Apache-2.0 for the dataset.

- Record JSON: https://awesomecua.com/resources/url-5a073f50270c4f316ce5/record.json

### Structured profile

- Formats: Parquet, MP4
- Modalities: screenshots, accessibility trees, task instructions, pyautogui actions, model responses, execution logs, screen recordings
- Splits: train
- Supervision: successful agent trajectories

#### Count observations

- 160 trajectories — train split (one row per task trajectory) (reported; source: https://huggingface.co/datasets/markov-ai/computer-use/raw/de58c88b4b33dd03fa4d5d0f490748f576bd37b3/README.md)
- 1,378 steps — all 160 trajectories (reported; source: https://huggingface.co/datasets/markov-ai/computer-use/raw/de58c88b4b33dd03fa4d5d0f490748f576bd37b3/README.md)
- 10 application domains — train split (reported; source: https://huggingface.co/datasets/markov-ai/computer-use/raw/de58c88b4b33dd03fa4d5d0f490748f576bd37b3/README.md)
- 313 MP4 recording files — recordings/ at revision de58c88b (computed) (computed; source: https://huggingface.co/api/datasets/markov-ai/computer-use)

Rows are agent runs filtered to score 1.0. Step and row counts are the card's figures. Recording files were counted from the Hub manifest; the recording-file and row counts differ.

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/markov-ai/computer-use/raw/de58c88b4b33dd03fa4d5d0f490748f576bd37b3/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/markov-ai/computer-use/raw/de58c88b4b33dd03fa4d5d0f490748f576bd37b3/README.md (retrieved 2026-10-18T11:44:36Z; SHA-256 f0880c1d4db8005c9ca02218cf61781f347d4a11aa311aecf5b90119845f4381)
- https://huggingface.co/api/datasets/markov-ai/computer-use (retrieved 2026-10-18T11:44:36Z; SHA-256 73c4ea92c82983d3bc5ac6b8565f199c33f52f4206e5203502d0bf817b5b02cd)
- https://huggingface.co/datasets/markov-ai/computer-use/raw/de58c88b4b33dd03fa4d5d0f490748f576bd37b3/README.md (retrieved 2026-10-18T11:44:36Z; SHA-256 f0880c1d4db8005c9ca02218cf61781f347d4a11aa311aecf5b90119845f4381)

---

## CUA Speedrun results

Trajectory archives and per-task results from CUA Speedrun evaluations of computer-use models on OSWorld subsets, CUA-World and MyPCBench, with verifier scores, measured task times and recorded or estimated costs.

- Catalog URL: https://awesomecua.com/resources/url-099451a33699510476df/
- Original source: https://huggingface.co/datasets/anonymousmypcbench/cua-speedrun-trajectories
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop
- Topics: evaluation, efficiency, observability
- Evidence checked: 2026-10-18T12:32:49Z
- ID: url:099451a33699510476df

### Limitations

The publishing account is anonymous (anonymousmypcbench). The card names the benchmark sets used by CUA Speedrun but cites no paper, and neither the cua-speedrun paper, its project page nor its GitHub README links this repository, so no relation to the paper is asserted. Scores, task times and costs are the publisher's measurements; several costs are API-equivalent token estimates, and the card keeps two Kimi K3 OSWorld2 evaluations as billing-affected recordings. Screenshots for five September evaluations were deleted before publication. No license is declared.

- Record JSON: https://awesomecua.com/resources/url-099451a33699510476df/record.json

### Structured profile

- Formats: ZIP run archives, JSON, SHA-256 checksum lists
- Modalities: screenshots, agent transcripts, action logs, setup and verifier logs, timing and cost records
- Splits: not recorded
- Supervision: verifier task scores, agent-generated trajectories, measured task timings

#### Count observations

- 97 ZIP run archives — repository root at Hub revision 447ff4cd (computed) (computed; source: https://huggingface.co/api/datasets/anonymousmypcbench/cua-speedrun-trajectories/revision/447ff4cd77230ee06ee5b0e864873c43ceb0138c)
- 14 per-evaluation cost evidence JSON files — COST-*.json files at Hub revision 447ff4cd (computed) (computed; source: https://huggingface.co/api/datasets/anonymousmypcbench/cua-speedrun-trajectories/revision/447ff4cd77230ee06ee5b0e864873c43ceb0138c)
- 295 OSWorld tasks — Unanimous-295 set, with per-task metrics for nine models in one JSON file (reported; source: https://huggingface.co/datasets/anonymousmypcbench/cua-speedrun-trajectories/raw/447ff4cd77230ee06ee5b0e864873c43ceb0138c/README.md)

Archive and cost-file counts come from a script over the pinned Hub file list; the card's tables link 39 of the 97 archives, so one benchmark set uses a subset of the archives. The sets differ in size (295, 50, 52, 26 and 38 tasks) and some tables use different tracks and measurement contracts, which the card says limits comparison across them. Mean scores include verifier partial credit; strict passes use recorded verdicts.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: Neither the card metadata nor its text declares a license, and the file list at this revision has no license file, so no data grant is established; agent outputs, screenshots and logged third-party content keep their own terms.
  Sources: https://huggingface.co/datasets/anonymousmypcbench/cua-speedrun-trajectories/raw/447ff4cd77230ee06ee5b0e864873c43ceb0138c/README.md

### Primary evidence

- https://huggingface.co/datasets/anonymousmypcbench/cua-speedrun-trajectories/raw/447ff4cd77230ee06ee5b0e864873c43ceb0138c/README.md (retrieved 2026-10-18T12:32:49Z; SHA-256 948719ad1839eddc0ccc4e9e8a1de218876d96395522546b77e89f71e5df35a8)
- https://huggingface.co/api/datasets/anonymousmypcbench/cua-speedrun-trajectories/revision/447ff4cd77230ee06ee5b0e864873c43ceb0138c (retrieved 2026-10-18T12:32:16Z; SHA-256 894abd6718d735a5845475c2630f7b5cf8c03a32b1046a9e643ee3f2f9f2f6f2)

---

## DragOn

Drag-grounding training and evaluation data pairing each screenshot instruction with start and end boxes, across text highlighting, spreadsheet cells, slide resizing and sliders.

- Catalog URL: https://awesomecua.com/resources/url-b854ff53e497da3a5ad8/
- Original source: https://huggingface.co/datasets/Hcompany/DragOn
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding
- Evidence checked: 2026-10-16T06:38:26Z
- ID: url:b854ff53e497da3a5ad8

### Limitations

The card cites a workshop paper titled "DragOn: A Drag-Grounding Benchmark and Training Dataset for GUI Agents" without an arXiv link. arXiv 2606.06322 has a different title, so no paper relation is recorded.

- Record JSON: https://awesomecua.com/resources/url-b854ff53e497da3a5ad8/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/Hcompany/DragOn
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/Hcompany/DragOn (retrieved 2026-10-16T06:38:26Z; SHA-256 08b5529ce01781143147d56e2278aec2e5bdd972ba7e2fae6ba7e65e62688d40)
- https://huggingface.co/datasets/Hcompany/DragOn/raw/main/README.md (retrieved 2026-10-17T16:10:54Z; SHA-256 e7ef94cafcfd155961beec373f2f4e727715b7d517a819f52b5407fc2dec4009)
- https://huggingface.co/api/datasets/Hcompany/DragOn (retrieved 2026-10-16T06:38:26Z; SHA-256 08b5529ce01781143147d56e2278aec2e5bdd972ba7e2fae6ba7e65e62688d40)

---

## duvo-eye-1-evals

Dataset of per-sample GUI grounding predictions and reference points for public benchmarks, accompanied by a script for rescoring model outputs.

- Catalog URL: https://awesomecua.com/resources/url-dfcb24f23a03e58316cf/
- Original source: https://huggingface.co/datasets/duvoai/duvo-eye-1-evals
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: evaluation, grounding
- Evidence checked: 2026-11-09T06:16:37Z
- ID: url:dfcb24f23a03e58316cf

### Limitations

The repository lists prediction JSONL files and benchmark result files. The card specifies single-shot inference and declares an Apache-2.0 license.

- Record JSON: https://awesomecua.com/resources/url-dfcb24f23a03e58316cf/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/duvoai/duvo-eye-1-evals
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/duvoai/duvo-eye-1-evals (retrieved 2026-11-09T06:16:37Z; SHA-256 829964b0175ba2b6f17506222deb90caf8566ef8231e62703539f89a66cca170)
- https://huggingface.co/api/datasets/duvoai/duvo-eye-1-evals (retrieved 2026-11-09T06:16:37Z; SHA-256 829964b0175ba2b6f17506222deb90caf8566ef8231e62703539f89a66cca170)

---

## EnvDistraction

EnvDistraction provides simulated GUI environments and evaluation scripts for measuring multimodal agent susceptibility to environmental distractions.

- Catalog URL: https://awesomecua.com/resources/github-xbmxb-envdistraction/
- Original source: https://github.com/xbmxb/EnvDistraction
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, web
- Topics: robustness, safety-security, evaluation
- Evidence checked: 2026-11-04T13:12:43Z
- ID: github:xbmxb/envdistraction

- Record JSON: https://awesomecua.com/resources/github-xbmxb-envdistraction/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/xbmxb/EnvDistraction/HEAD/README.md (retrieved 2026-11-04T13:12:43Z; SHA-256 fe5af0a4e28c3a635fc1213c8ebd535ade5f9dfba45986d65f16940c28ce36d8)

---

## FedMABench data partitions

Six families of JSONL partitions of AndroidControl and AitW mobile-agent episodes for FedMABench federated training under app, category and step/episode heterogeneity; screenshots must be rebuilt from the sources.

- Catalog URL: https://awesomecua.com/resources/url-86b3c2ee65911daf84a8/
- Original source: https://huggingface.co/datasets/wwh0411/FedMABench
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, imitation-learning
- Evidence checked: 2026-10-18T16:06:17Z
- ID: url:86b3c2ee65911daf84a8

### Limitations

The Hub manifest at revision 4596a060 holds 41 JSONL partition files in six folders (Basic-AC 15, Category-Level 7, App-Level 5, Basic-AitW 5, Step-Episode 5, ScaleApp 4), plus split JSON files, an overview PDF and .DS_Store files; three folder names end with a trailing space. Inspected records are episode-level, with an instruction, step sub-instructions, original and converted actions, and image paths on the authors' machine. The FedMABench README says unpacked screenshots are not distributed and gives scripts to rebuild them from AndroidControl and AitW. Neither the card nor the Hub metadata declares a license, so the data license stays unknown. Partitions overlap; these counts are reported separately.

- Record JSON: https://awesomecua.com/resources/url-86b3c2ee65911daf84a8/record.json

### Structured profile

- Formats: JSONL, JSON
- Modalities: text instructions, actions, screenshot paths (images not included)
- Splits: federated training partitions, validation sets
- Supervision: episode instructions, step sub-instructions, action sequences

#### Count observations

- 6 dataset families — FedMABench data release (reported; source: https://huggingface.co/datasets/wwh0411/FedMABench/raw/4596a0608a24dddc3f6ba96fb326e915d9632f0b/README.md)
- > 30 subsets — FedMABench data release (reported; source: https://huggingface.co/datasets/wwh0411/FedMABench/raw/4596a0608a24dddc3f6ba96fb326e915d9632f0b/README.md)
- > 800 apps — apps across five categories (reported; source: https://huggingface.co/datasets/wwh0411/FedMABench/raw/4596a0608a24dddc3f6ba96fb326e915d9632f0b/README.md)
- 41 JSONL partition files — Hub manifest at revision 4596a060 (computed) (computed; source: https://huggingface.co/api/datasets/wwh0411/FedMABench/revision/4596a0608a24dddc3f6ba96fb326e915d9632f0b)

A partition file, a task, an episode and a client count are different units. Screenshots are external dependencies that users rebuild from AndroidControl and AitW.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/wwh0411/FedMABench/raw/4596a0608a24dddc3f6ba96fb326e915d9632f0b/README.md (retrieved 2026-10-18T16:06:17Z; SHA-256 2874269995d8c9f5dabe266433ecf724bf54c27af599d899f3f0090b8ee37cdc)
- https://huggingface.co/api/datasets/wwh0411/FedMABench/revision/4596a0608a24dddc3f6ba96fb326e915d9632f0b (retrieved 2026-10-18T16:05:47Z; SHA-256 e3511f0f47d9a40da0ead5ce2eb49f590c010ed6199be0fe052a852e0fc83edf)
- https://raw.githubusercontent.com/wwh0411/FedMABench/417d8b0006830f423c7d07c213fc57277d75d966/README.md (retrieved 2026-10-18T16:05:47Z; SHA-256 b49e2b419918078ef9c68f3c9becc6c13d8fe530c165a36bdd61e370746eeea8)

---

## FiftyOne GUI Grounding Training Set

739 GUI screenshots, mostly macOS browser views, labeled with interaction points, action types and per-action task descriptions in a COCO4GUI-based FiftyOne format for element grounding and click prediction.

- Catalog URL: https://awesomecua.com/resources/url-f0eac3ad813245645492/
- Original source: https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, macos, web
- Topics: grounding, data-generation
- Evidence checked: 2026-10-18T15:34:01Z
- ID: url:f0eac3ad813245645492

### Limitations

First published as harpreetsahota/FiftyOne-GUI-Grounding-Train, which the Hub now resolves to this repository. Per the card, the dataset curator captured and annotated the screenshots with the GUI annotation tool it links, between July 22 and August 8, 2025, mostly on macOS in Arc and Chrome. It is a small training set; samples.json and metadata.json were read.

- Record JSON: https://awesomecua.com/resources/url-f0eac3ad813245645492/record.json

### Structured profile

- Formats: FiftyOne dataset export (samples.json, metadata.json), PNG
- Modalities: screenshots, task descriptions, interaction keypoints
- Splits: train
- Supervision: human-placed interaction points, action types, natural-language task descriptions

#### Count observations

- 739 annotated screenshots — training set described by the card at revision ec67c2bf (reported; source: https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train/raw/ec67c2bfce4f6a9c9fcc52ce455c5b7a783dc812/README.md)

The Hub manifest at this revision lists 739 PNG files under data/. Computed from samples.json at this revision (26 MB): 2,397 interaction keypoints (1,960 click, 185 hover, 158 select, 48 type, 46 drag) and platform labels of 704 macOS, 23 Mobile and 12 blank. Samples also carry a screenparser_preds detection field that the card does not describe; it is not counted as human annotation.

### License declarations

- code: not recorded
- data: Apache-2.0 — https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train/raw/ec67c2bfce4f6a9c9fcc52ce455c5b7a783dc812/README.md
- document: not recorded
- weights: not recorded

- data review: Publisher dataset-card declaration for this release.
  Sources: https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train/raw/ec67c2bfce4f6a9c9fcc52ce455c5b7a783dc812/README.md

### Primary evidence

- https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train/raw/ec67c2bfce4f6a9c9fcc52ce455c5b7a783dc812/README.md (retrieved 2026-10-18T15:34:01Z; SHA-256 d41b2473cac9303784d9470a17c2d56f21e1f7980610acd20de6575817238b35)
- https://huggingface.co/api/datasets/Voxel51/FiftyOne-GUI-Grounding-Train/revision/ec67c2bfce4f6a9c9fcc52ce455c5b7a783dc812 (retrieved 2026-10-18T15:34:01Z; SHA-256 49cf4994baaae0c3703b7b084e7c4640b9a57e9d4bdfa7c9484ad69d41a5eb78)
- https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train/raw/ec67c2bfce4f6a9c9fcc52ce455c5b7a783dc812/metadata.json (retrieved 2026-10-18T15:34:01Z; SHA-256 607b0b21cb543562117e879949cacad745caec12ebadbb5c42010ac3f22898e8)
- https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train/raw/ec67c2bfce4f6a9c9fcc52ce455c5b7a783dc812/README.md (retrieved 2026-10-18T15:34:01Z; SHA-256 d41b2473cac9303784d9470a17c2d56f21e1f7980610acd20de6575817238b35)
- https://huggingface.co/api/datasets/harpreetsahota/FiftyOne-GUI-Grounding-Train (retrieved 2026-10-18T15:34:10Z; SHA-256 49cf4994baaae0c3703b7b084e7c4640b9a57e9d4bdfa7c9484ad69d41a5eb78)
- https://huggingface.co/api/datasets/Voxel51/FiftyOne-GUI-Grounding-Train (retrieved 2026-10-18T15:34:10Z; SHA-256 49cf4994baaae0c3703b7b084e7c4640b9a57e9d4bdfa7c9484ad69d41a5eb78)

---

## FiftyOne GUI Grounding Training Set with Synthetic Augmentation

4,036 GUI screenshots, mostly macOS browser views, with interaction keypoints and task descriptions: 739 manually annotated originals plus 3,297 color-vision and reworded-task variants made with a FiftyOne plugin.

- Catalog URL: https://awesomecua.com/resources/url-c10fd1906c2e7ee289ec/
- Original source: https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, macos, web
- Topics: grounding, data-generation, robustness
- Evidence checked: 2026-10-18T15:59:00Z
- ID: url:c10fd1906c2e7ee289ec

### Limitations

First published as harpreetsahota/FiftyOne-GUI-Grounding-Train-with-Synthetic, which the Hub now resolves to this repository. The card describes grayscale, color inversion, six color-vision simulations, resolution scaling and text variants, and says synthetic samples carry a transform_record field. The exported samples at revision 3deedc5d have no such field (metadata.json lists none), and their tags name only three transforms: 1,884 tritanopia, 942 color-inverted and 471 task-description-augmented samples. The 739 originals are tagged 370 train and 369 val, and every synthetic sample is tagged train. Apache-2.0 is the card's data declaration.

- Record JSON: https://awesomecua.com/resources/url-c10fd1906c2e7ee289ec/record.json

### Structured profile

- Formats: FiftyOne dataset export (samples.json, metadata.json), PNG
- Modalities: screenshots, task descriptions, interaction keypoints
- Splits: train, val
- Supervision: human-placed interaction points, action types, natural-language task descriptions, programmatic image and text augmentations

#### Count observations

- 4,036 samples — whole release (reported; source: https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic/raw/3deedc5d3667696aff317e5e8a3b47d83b9fb48c/README.md)
- 739 original annotated screenshots — real samples in the release (reported; source: https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic/raw/3deedc5d3667696aff317e5e8a3b47d83b9fb48c/README.md)
- 3,297 synthetic variant samples — augmented samples in the release (reported; source: https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic/raw/3deedc5d3667696aff317e5e8a3b47d83b9fb48c/README.md)
- 4,036 PNG files — data/ at Hub revision 3deedc5d (computed) (computed; source: https://huggingface.co/api/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic/revision/3deedc5d3667696aff317e5e8a3b47d83b9fb48c)

Computed from samples.json at this revision (15.7 MB, read once): 4,036 samples, of which 739 have plain timestamp file names and 3,297 carry a hash suffix; sample tags give 1,884 tritanopia, 942 color_inverted and 471 task_description_augmented variants, and 370 train plus 369 val originals; 17,916 keypoints in all, counted again on each variant; platform labels 3,721 macOS, 205 Mobile and 110 blank. Variants duplicate the annotations of their source screenshots; sample counts include those repeated annotations. Samples, files and keypoints are different units; these counts are reported separately.

### License declarations

- code: not recorded
- data: Apache-2.0 — https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic/raw/3deedc5d3667696aff317e5e8a3b47d83b9fb48c/README.md
- document: not recorded
- weights: not recorded

- data review: Publisher dataset-card declaration for this release.
  Sources: https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic/raw/3deedc5d3667696aff317e5e8a3b47d83b9fb48c/README.md

### Primary evidence

- https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic/raw/3deedc5d3667696aff317e5e8a3b47d83b9fb48c/README.md (retrieved 2026-10-18T15:59:00Z; SHA-256 44795390cfe06d7e1fe10541bb949f609cc1af8fd204857f6f6487eb3ba71895)
- https://huggingface.co/api/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic/revision/3deedc5d3667696aff317e5e8a3b47d83b9fb48c (retrieved 2026-10-18T15:58:38Z; SHA-256 3bb91cff67b20daec766bb819352cc443bc03a942985a27a2bb94f36734ddb60)
- https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic/raw/3deedc5d3667696aff317e5e8a3b47d83b9fb48c/metadata.json (retrieved 2026-10-18T15:58:39Z; SHA-256 350cc2918e6a826bfda5f5b5feb9f6f35320d5b7fd06eda1c677e269ee462d07)
- https://huggingface.co/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic/raw/3deedc5d3667696aff317e5e8a3b47d83b9fb48c/README.md (retrieved 2026-10-18T15:59:00Z; SHA-256 44795390cfe06d7e1fe10541bb949f609cc1af8fd204857f6f6487eb3ba71895)
- https://huggingface.co/api/datasets/Voxel51/FiftyOne-GUI-Grounding-Train-with-Synthetic (retrieved 2026-10-18T15:58:39Z; SHA-256 3bb91cff67b20daec766bb819352cc443bc03a942985a27a2bb94f36734ddb60)
- https://huggingface.co/api/datasets/harpreetsahota/FiftyOne-GUI-Grounding-Train-with-Synthetic (retrieved 2026-10-18T15:58:39Z; SHA-256 3bb91cff67b20daec766bb819352cc443bc03a942985a27a2bb94f36734ddb60)

---

## FingerTip-20K

Over 20,000 human Android episodes across 500+ apps with user context and long-term usage patterns, plus tracks for proactive intent prediction and personalized execution.

- Catalog URL: https://awesomecua.com/resources/github-tsinghua-fib-lab-fingertip-20k/
- Original source: https://github.com/tsinghua-fib-lab/FingerTip-20K
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: data-generation
- Evidence checked: 2026-10-16T06:36:02Z
- ID: github:tsinghua-fib-lab/fingertip-20k

- Record JSON: https://awesomecua.com/resources/github-tsinghua-fib-lab-fingertip-20k/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/tsinghua-fib-lab/FingerTip-20K/HEAD/README.md (retrieved 2026-10-16T06:36:02Z; SHA-256 2c67c8b181e7196f3ca1e88888ffc5d6b32afca686a0e5c4353ad3f5af51ff9e)

---

## GTA1 cleaned grounding dataset

Cleaned GUI grounding training data linked by the GTA1 repository, drawn mainly from Aria-UI and OS-Atlas, with samples dropped when the target box and an OmniParser-detected element differ.

- Catalog URL: https://awesomecua.com/resources/url-d46306ac1d0a0cce573a/
- Original source: https://huggingface.co/datasets/HelloKKMe/grounding_dataset
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, web
- Topics: grounding, data-generation
- Evidence checked: 2026-10-18T12:28:59Z
- ID: url:d46306ac1d0a0cce573a

### Limitations

Hub revision 5c0836a5 lists the card, inp.json and ten split image archive parts (image.part.aa to image.part.aj); the repository is not gated and has no card metadata. The card describes desktop and web grounding sources and names no paper; the GTA1 repository README links this repository as GTA1's training data and cleaned dataset, which supports the paper relation. Salesforce later published a separate grounding release with a different field schema and more source datasets; this record covers only this upload. The license comes from the GTA1 README.

- Record JSON: https://awesomecua.com/resources/url-d46306ac1d0a0cce573a/record.json

### Structured profile

- Formats: JSON (inp.json), split binary image archive
- Modalities: GUI screenshots, bounding-box annotations
- Splits: training
- Supervision: instruction-to-bounding-box GUI grounding, OmniParser IoU filtering of annotated boxes

#### Count observations

No count recorded.

The Hub API lists inp.json (767,769,533 bytes) and ten image archive parts (208,677,206,554 bytes in total); an example count is unrecorded. The filtering step and its OmniParser IoU criterion come from the card and the GTA1 preprocessing code; the card notes that the filter can occasionally remove correct samples and puts such cases below 3% of the data.

### License declarations

- code: not recorded
- data: CC-BY-NC-SA-4.0 — https://raw.githubusercontent.com/Yan98/GTA1/81f0c4c2997cf6ad696d42f47c5480f4c856b73a/README.md
- document: not recorded
- weights: not recorded

- data review: The GTA1 repository README, which links this Hub repository as GTA1's training and cleaned dataset, states under License that the dataset follows CC BY-NC-SA 4.0 for non-commercial use only. The Hub card declares no license; upstream source images keep their own terms.
  Sources: https://raw.githubusercontent.com/Yan98/GTA1/81f0c4c2997cf6ad696d42f47c5480f4c856b73a/README.md

### Primary evidence

- https://huggingface.co/datasets/HelloKKMe/grounding_dataset/raw/5c0836a55b4000d8dbf431bbe10c80d2f0d42fb1/README.md (retrieved 2026-10-18T12:28:59Z; SHA-256 cae816e6d5696a1122f836235b70a326a7d66a389d078cc48588cf20bd64a518)
- https://huggingface.co/api/datasets/HelloKKMe/grounding_dataset/revision/5c0836a55b4000d8dbf431bbe10c80d2f0d42fb1 (retrieved 2026-10-18T12:27:44Z; SHA-256 74797aa594a98347ac080d446950094ac34076c749e39a6c99ab1a2751896c7f)
- https://raw.githubusercontent.com/Yan98/GTA1/81f0c4c2997cf6ad696d42f47c5480f4c856b73a/README.md (retrieved 2026-10-18T12:27:44Z; SHA-256 16c633cc2e6e457a37f33b410a93c639edf7b55bb2b590e08f20734da7564951)

---

## GUI-360

Desktop GUI trajectory data supporting multiple interface understanding tasks.

- Catalog URL: https://awesomecua.com/resources/url-0b590d03a3d5103a79e4/
- Original source: https://huggingface.co/datasets/vyokky/GUI-360
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, windows
- Topics: grounding, data-generation
- Evidence checked: 2026-10-16T06:38:26Z
- ID: url:0b590d03a3d5103a79e4

- Record JSON: https://awesomecua.com/resources/url-0b590d03a3d5103a79e4/record.json

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/vyokky/GUI-360
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/vyokky/GUI-360 (retrieved 2026-10-16T06:38:26Z; SHA-256 e51af2845c2f31c7af112579b42c3ff9bf5a2c2356e80932e829bc2be1a341bd)
- https://huggingface.co/api/datasets/vyokky/GUI-360 (retrieved 2026-10-16T06:38:26Z; SHA-256 e51af2845c2f31c7af112579b42c3ff9bf5a2c2356e80932e829bc2be1a341bd)

---

## GUI-Action Narrator

Action narration resources for GUI interaction trajectories.

- Catalog URL: https://awesomecua.com/resources/github-showlab-gui-action-narrator/
- Original source: https://github.com/showlab/GUI-Action-Narrator
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: data-generation, video
- Evidence checked: 2026-10-16T06:40:52Z
- ID: github:showlab/gui-action-narrator

### Limitations

Original repository URL redirects to showlab/GUI-Narrator.

- Record JSON: https://awesomecua.com/resources/github-showlab-gui-action-narrator/record.json

### Structured profile

- Formats: not recorded
- Modalities: GUI video, action captions
- Splits: not recorded
- Supervision: GUI action captioning

#### Count observations

- 4,189 video-captioning samples — Act2Cap benchmark described in the paper (reported; source: https://arxiv.org/abs/2406.13719)

Captioning samples, unique videos and complete task trajectories are different units.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://github.com/showlab/GUI-Action-Narrator (retrieved 2026-10-16T06:40:52Z; SHA-256 379aae1a8890a0c3d3b5999589b8338338cf1ea63883c2b77df678fd3bb367a2)
- https://export.arxiv.org/api/query?id_list=2406.12814%2C2406.13719%2C2406.14056%2C2406.14250%2C2406.14314%2C2406.18082%2C2406.19263%2C2407.00993%2C2407.01476%2C2407.01489%2C2407.01511%2C2407.01558%2C2407.03037%2C2407.03913%2C2407.04346%2C2407.05291%2C2407.07061%2C2407.08850%2C2407.09018%2C2407.09295%2C2407.10956%2C2407.13032%2C2407.13063%2C2407.15673%2C2407.15711%2C2407.16741%2C2407.17490%2C2407.18901%2C2407.19056%2C2407.20183%2C2408.00203%2C2408.02544%2C2408.06327%2C2408.07199%2C2408.11824%2C2408.15978%2C2409.02453%2C2409.04566%2C2409.07429%2C2409.08264%2C2409.09354%2C2409.10741%2C2409.11295%2C2409.13711%2C2409.14337%2C2409.14818%2C2409.15441%2C2409.15637%2C2409.17140%2C2409.20566&max_results=50 (retrieved 2026-10-16T06:31:32Z; SHA-256 b9a83994d8ac36ccdb606a5219511f8bb35ad3948ade4f9f3e28d386221aedfb)

---

## GUI-CIDER causal knowledge data

A published JSONL corpus of synthesized planning and causal knowledge for GUI-agent mid-training, linked directly from the official GUI-CIDER project.

- Catalog URL: https://awesomecua.com/resources/url-d0300db5ba754b1a64fa/
- Original source: https://huggingface.co/datasets/wuuuuuz/GUI-CIDER
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: data-generation, imitation-learning, planning
- Evidence checked: 2026-10-17T11:18:20Z
- ID: url:d0300db5ba754b1a64fa

### Limitations

The official project explicitly links this corpus, and the ungated Hub API lists GUI-CIDER.jsonl. The repository has no README card at the Hub (404); purpose and Android context are therefore supported by the project README and dataset guide, while the API supports only identity/file availability. No sample count, split inventory, or data license was established. The project README’s MIT badge is not transferred to this data artifact.

- Record JSON: https://awesomecua.com/resources/url-d0300db5ba754b1a64fa/record.json

### Structured profile

- Formats: JSONL
- Modalities: text
- Splits: not recorded
- Supervision: synthesized static planning knowledge, synthesized dynamic causal knowledge

#### Count observations

No count recorded.

Purpose is established by the official project. No sample records were downloaded; count and data-license fields remain unknown.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Wuzheng02/GUI-CIDER/HEAD/README.md (retrieved 2026-10-17T11:18:20Z; SHA-256 9a46741bbde1373ed4b87887cdadde98e05ea8795d34efe39fc25d69b4d50213)
- https://huggingface.co/api/datasets/wuuuuuz/GUI-CIDER (retrieved 2026-10-17T11:23:07Z; SHA-256 aec6da0e872092d737953f8b4db227867024da10e127cd32d15d05ff95552d45)
- https://raw.githubusercontent.com/Wuzheng02/GUI-CIDER/HEAD/data/dataset.md (retrieved 2026-10-17T11:24:47Z; SHA-256 bffca456e649a08239f6a1a3be10a7d7c21bcb427e783ba2c304e4b8410d385a)

---

## GUI-Drag

Data for learning text-dragging interactions in graphical interfaces.

- Catalog URL: https://awesomecua.com/resources/url-aa28e1329a52e341d285/
- Original source: https://huggingface.co/datasets/osunlp/GUI-Drag-dataset
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding
- Evidence checked: 2026-10-16T06:38:26Z
- ID: url:aa28e1329a52e341d285

### Limitations

The card links its paper (arXiv 2601.06031) and code repository (OSU-NLP-Group/GUI-Drag). Neither is a reviewed catalog record yet, so no relation is recorded.

- Record JSON: https://awesomecua.com/resources/url-aa28e1329a52e341d285/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/osunlp/GUI-Drag-dataset
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/osunlp/GUI-Drag-dataset (retrieved 2026-10-16T06:38:26Z; SHA-256 cdb8be8c4692a8ddcf8a66c1f0be666a9214718445925fb3c88615a0d641bf3a)
- https://huggingface.co/datasets/osunlp/GUI-Drag-dataset/raw/main/README.md (retrieved 2026-10-17T16:10:54Z; SHA-256 907c8a5169c180491ef8c26c9428b2c67bc4e26f472d6423ce3715cbe47f76ef)
- https://huggingface.co/api/datasets/osunlp/GUI-Drag-dataset (retrieved 2026-10-16T06:38:26Z; SHA-256 cdb8be8c4692a8ddcf8a66c1f0be666a9214718445925fb3c88615a0d641bf3a)

---

## GUI-Libra-81K-SFT

SFT release of GUI-Libra-81K: per-step reasoning traces and coordinate-grounded actions over web and Android screenshots, in JSON annotation files with full, no-reasoning and 1,000-sample variants.

- Catalog URL: https://awesomecua.com/resources/url-f6e1a7527f9346ed1c1d/
- Original source: https://huggingface.co/datasets/GUI-Libra/GUI-Libra-81K-SFT
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web, android
- Topics: data-generation, grounding, web-navigation, mobile-navigation
- Evidence checked: 2026-10-18T12:32:45Z
- ID: url:f6e1a7527f9346ed1c1d

### Limitations

The thin card only describes the annotation files and split image archives; the paper link, training role and data format come from the official GUI-Libra repository, whose SFT guide downloads this dataset. Annotations re-annotate screenshots from public sources (Mind2Web, GUIAct web, AITW, AMEX, AndroidControl, GUI-Odyssey, Android in the Zoo). The 81K figure is the repository's.

- Record JSON: https://awesomecua.com/resources/url-f6e1a7527f9346ed1c1d/record.json

### Structured profile

- Formats: JSON, split tar.gz image archives
- Modalities: screenshots, instructions, interaction history, reasoning text, actions
- Splits: not recorded
- Supervision: step-level reasoning text, demonstrated GUI actions, coordinate-grounded targets

#### Count observations

- ≈ 81,000 reasoning steps — GUI-Libra-81K as described by the official repository README (reported; source: https://raw.githubusercontent.com/GUI-Libra/GUI-Libra/f3e9c78e5c6435d0fb39210191ce1ad284361120/README.md)
- 32 JSON annotation files — data/annotations at revision 05bb2c5f: 8 source subsets, each with full, no-reasoning, 1,000-sample and 1,000-sample no-reasoning variants (computed) (computed; source: https://huggingface.co/api/datasets/GUI-Libra/GUI-Libra-81K-SFT/revision/05bb2c5f7e81de38f3d7826739db46913dd08a23)
- 8 image archive groups — data/images at revision 05bb2c5f, stored as 9 split .tar.gz part files (computed) (computed; source: https://huggingface.co/api/datasets/GUI-Libra/GUI-Libra-81K-SFT/revision/05bb2c5f7e81de38f3d7826739db46913dd08a23)

Steps, files and archive groups are different units and are counted separately. Variant files overlap: the 1,000-sample and no-reasoning files are subsets or reformulations of the same source data and share examples.

### License declarations

- code: not recorded
- data: Apache-2.0 — https://huggingface.co/datasets/GUI-Libra/GUI-Libra-81K-SFT/raw/05bb2c5f7e81de38f3d7826739db46913dd08a23/README.md
- document: not recorded
- weights: not recorded

- data review: Publisher dataset-card declaration for this release.
  Sources: https://huggingface.co/datasets/GUI-Libra/GUI-Libra-81K-SFT/raw/05bb2c5f7e81de38f3d7826739db46913dd08a23/README.md

### Primary evidence

- https://huggingface.co/datasets/GUI-Libra/GUI-Libra-81K-SFT/raw/05bb2c5f7e81de38f3d7826739db46913dd08a23/README.md (retrieved 2026-10-18T12:32:45Z; SHA-256 dc2eec26b0c27a2d6478eb9972a6aa3c14b879cb743301c71571c31b14c802bd)
- https://huggingface.co/api/datasets/GUI-Libra/GUI-Libra-81K-SFT/revision/05bb2c5f7e81de38f3d7826739db46913dd08a23 (retrieved 2026-10-18T12:32:46Z; SHA-256 ef92cfb5e07d55d121f269e6432e41bd6d0c37077a5ce770d2fd6f67287f1444)
- https://raw.githubusercontent.com/GUI-Libra/GUI-Libra/f3e9c78e5c6435d0fb39210191ce1ad284361120/README.md (retrieved 2026-10-18T12:32:46Z; SHA-256 f34c5bcf454368db37dde4bb2229fd14ae5e4a118684c6d7fbb6a25f9f246911)
- https://raw.githubusercontent.com/GUI-Libra/GUI-Libra/f3e9c78e5c6435d0fb39210191ce1ad284361120/SFT/README.md (retrieved 2026-10-18T12:32:46Z; SHA-256 de69ba44d3233547f25f8297edf60300b7a9a7ea261805bacbc00b118d0a08ff)
- https://huggingface.co/datasets/GUI-Libra/GUI-Libra-81K-SFT/raw/05bb2c5f7e81de38f3d7826739db46913dd08a23/README.md (retrieved 2026-10-18T12:32:45Z; SHA-256 dc2eec26b0c27a2d6478eb9972a6aa3c14b879cb743301c71571c31b14c802bd)

---

## GUI-Net-1M

A TongUI-collected training corpus from multimodal web tutorials, distributed as annotation files and split screenshot archives for GUI trajectory supervision.

- Catalog URL: https://awesomecua.com/resources/url-8c9aaafb918aaf8b4e92/
- Original source: https://huggingface.co/datasets/Bofeee5675/GUI-Net-1M
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: data-generation, grounding, imitation-learning
- Evidence checked: 2026-10-17T12:30:54Z
- ID: url:8c9aaafb918aaf8b4e92

### Limitations

The ungated manifest lists JSON annotations and multipart image archives. Training documentation describes roughly one million collected training trajectories from Wikihow, Baidu Experience and GUI videos; this is distinct from larger mixtures that add external datasets. Platform-specific distribution and exact row counts were not established from this release metadata. Apache-2.0 is the publisher dataset declaration, without a grant of additional rights to upstream tutorial content. No image archive or example record was downloaded.

- Record JSON: https://awesomecua.com/resources/url-8c9aaafb918aaf8b4e92/record.json

### Structured profile

- Formats: JSON annotations, multipart image archives
- Modalities: text, screenshots
- Splits: training collection
- Supervision: GUI trajectory supervision from multimodal tutorials

#### Count observations

- ≈ 1,000,000 training trajectories — TongUI-collected GUI-Net-1M data, excluding added external mixtures (reported; source: https://raw.githubusercontent.com/TongUI-agent/TongUI-agent/HEAD/docs/train.md)

The source reports an approximate trajectory total.

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/Bofeee5675/GUI-Net-1M/raw/main/README.md
- document: not recorded
- weights: not recorded

- data review: Publisher declaration for this dataset packaging; original web/tutorial materials retain applicable rights.
  Sources: https://huggingface.co/datasets/Bofeee5675/GUI-Net-1M/raw/main/README.md

### Primary evidence

- https://raw.githubusercontent.com/TongUI-agent/TongUI-agent/HEAD/README.md (retrieved 2026-10-17T12:30:54Z; SHA-256 f30a18d1a533b8f71f436dae2ee7369f8971422bd76527e069499c5bba911912)
- https://huggingface.co/api/datasets/Bofeee5675/GUI-Net-1M (retrieved 2026-10-17T12:32:07Z; SHA-256 314a77eb0ba43bedffbe6869601e41aea41993eaca59d86ba346652c853802d2)
- https://raw.githubusercontent.com/TongUI-agent/TongUI-agent/HEAD/docs/train.md (retrieved 2026-10-17T12:36:55Z; SHA-256 b51acb70c95d079ccbe1de0a685ad7c8a4b3b5bed11e6162e6f7c2f60d78805e)
- https://huggingface.co/datasets/Bofeee5675/GUI-Net-1M/raw/main/README.md (retrieved 2026-10-17T12:32:07Z; SHA-256 c2df5c3a6dd576ae53f0dc0f72ecab07d93ed034b04336abd2072a6f0d812c64)

---

## GUI-Net-Mini

TongUI training mixture: about 143K samples from WikiHow, Baidu Experience and GUI videos plus reprocessed AITW, AMEX, GUIAct, Mind2Web, MiniWoB and ShowUI data, as grounding and navigation JSON with screenshots.

- Catalog URL: https://awesomecua.com/resources/url-0627940da1b988739f75/
- Original source: https://huggingface.co/datasets/Bofeee5675/GUI-Net-Mini
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android, web, desktop
- Topics: data-generation, grounding, imitation-learning
- Evidence checked: 2026-10-18T15:46:31Z
- ID: url:0627940da1b988739f75

### Limitations

The card is titled TongUI-143K. The TongUI training docs list this repository beside GUI-Net-1M as 143k TongUI-collected samples plus about 240k from previous work, used for scaling experiments, and their default 3B configuration, which they say reproduces the paper's results, names 13 datasets whose dataset_info.json files are exactly this repository's 13 annotation files. A streaming script over those files counts 143,856 records in the three TongUI-collected files (WikiHow, Baidu Experience, GUI video) and 379,517 in the ten files reprocessed from AITW, AMEX, GUIAct, Mind2Web, MiniWoB and ShowUI; the card's 237K 'Other' figure matches the 237,564 records in eight of those ten, leaving out the AMEX element and ShowUI web grounding files (141,953 records). Records are LLaMA-Factory conversations: coordinate-prediction grounding turns, or navigation steps with a thought and a JSON action in a smartphone, computer or website action space depending on the file. Screenshots come as 24 split ZIP parts (about 254 GB in the manifest). Apache-2.0 is the card's declaration; the reprocessed datasets and the tutorial and video content keep their own terms.

- Record JSON: https://awesomecua.com/resources/url-0627940da1b988739f75/record.json

### Structured profile

- Formats: LLaMA-Factory JSON conversations, multipart ZIP image archive
- Modalities: screenshots, instructions, reasoning traces, actions
- Splits: training collection
- Supervision: GUI grounding coordinates, GUI navigation steps with thoughts and actions

#### Count observations

- ≈ 143,000 training samples — TongUI-collected part, card table (reported; source: https://huggingface.co/datasets/Bofeee5675/GUI-Net-Mini/raw/7c1ed0cd8fea76d5eba868114d2d6374d4370a12/README.md)
- ≈ 237,000 training samples — data from other sources, card table (reported; source: https://huggingface.co/datasets/Bofeee5675/GUI-Net-Mini/raw/7c1ed0cd8fea76d5eba868114d2d6374d4370a12/README.md)
- 13 JSON annotation files — Hub manifest at revision 7c1ed0cd (computed) (computed; source: https://huggingface.co/api/datasets/Bofeee5675/GUI-Net-Mini/revision/7c1ed0cd8fea76d5eba868114d2d6374d4370a12)
- 24 split ZIP image archive parts — Hub manifest at revision 7c1ed0cd (computed) (computed; source: https://huggingface.co/api/datasets/Bofeee5675/GUI-Net-Mini/revision/7c1ed0cd8fea76d5eba868114d2d6374d4370a12)

The card states numbers without a unit; the training docs call them training data. Record counts computed by streaming the 13 annotation files are in the record notes; the card's two figures and the file counts are different populations and units and are counted separately. No validation or test split is published.

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/Bofeee5675/GUI-Net-Mini/raw/7c1ed0cd8fea76d5eba868114d2d6374d4370a12/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/Bofeee5675/GUI-Net-Mini/raw/7c1ed0cd8fea76d5eba868114d2d6374d4370a12/README.md (retrieved 2026-10-18T15:46:31Z; SHA-256 5559391b26a6541363ea50de16b1c91b3958c18b2668020ccd5daff3b33e5626)
- https://huggingface.co/api/datasets/Bofeee5675/GUI-Net-Mini/revision/7c1ed0cd8fea76d5eba868114d2d6374d4370a12 (retrieved 2026-10-18T15:46:29Z; SHA-256 c9a580a8e25cc011273aa2f7ea10a6045f10787897c51eed50dd172ea1c3cad7)
- https://raw.githubusercontent.com/TongUI-agent/TongUI-agent/82631b583180cdc870b4774d2495dd94f1558c46/docs/train.md (retrieved 2026-10-18T15:46:29Z; SHA-256 b51acb70c95d079ccbe1de0a685ad7c8a4b3b5bed11e6162e6f7c2f60d78805e)
- https://raw.githubusercontent.com/TongUI-agent/TongUI-agent/82631b583180cdc870b4774d2495dd94f1558c46/data/dataset_info.json (retrieved 2026-10-18T15:46:29Z; SHA-256 1287032d17f24bf89313569bd210811675a78d0b2fce73824502d23b16f06ad4)
- https://huggingface.co/datasets/Bofeee5675/GUI-Net-Mini/raw/7c1ed0cd8fea76d5eba868114d2d6374d4370a12/README.md (retrieved 2026-10-18T15:46:31Z; SHA-256 5559391b26a6541363ea50de16b1c91b3958c18b2668020ccd5daff3b33e5626)

---

## GUI-Xplore

Per-app Android exploration videos with screenshot and action sequences, view hierarchies and question-answer pairs for five tasks, from app overview and page analysis to action recall and sequence verification.

- Catalog URL: https://awesomecua.com/resources/url-f56dbd8bfac8b0545e07/
- Original source: https://huggingface.co/datasets/9211sun/GUI-Xplore
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: video, mobile-navigation, screen-understanding, data-generation
- Evidence checked: 2026-10-18T12:29:45Z
- ID: url:f56dbd8bfac8b0545e07

### Limitations

The paper's arXiv HTML links github.com/921112343/GUI-Xplore, whose README names this Hub dataset as the release; the paper link comes from the repository README. View-hierarchy files use Android uiautomator classes and Android package names, and the paper describes collection with DroidBot and crowd workers on cloud mobile devices. The card's summary line gives 32,569 QA pairs while its split table totals 35,316. The repository README lists the Xplore-Agent model, checkpoints and evaluation scripts as not yet released. Data license is CC-BY-4.0 per card metadata; it does not settle rights in third-party app content.

- Record JSON: https://awesomecua.com/resources/url-f56dbd8bfac8b0545e07/record.json

### Structured profile

- Formats: MP4, PNG, JPEG, XML, JSON, CSV
- Modalities: exploration videos, screenshots, view hierarchies, actions, question-answer pairs
- Splits: auto, manual_train, manual_test
- Supervision: exploration recordings, question-answer annotations, action sequences

#### Count observations

- 312 apps — all splits (207 auto, 85 manual_train, 20 manual_test) (reported; source: https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/README.md)
- 34,367 screenshots — all splits (reported; source: https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/README.md)
- 41,293 actions — all splits (reported; source: https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/README.md)
- 15,934 question-answer samples — auto split (reported; source: https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/README.md)
- 16,744 question-answer samples — manual_train split (reported; source: https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/README.md)
- 2,638 question-answer samples — manual_test split (reported; source: https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/README.md)
- > 115 hours of exploration video — all apps (reported; source: https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/README.md)
- 312 MP4 exploration videos — files at Hub revision ebac33a0 (207 auto, 85 manual_train, 20 manual_test) (computed) (computed; source: https://huggingface.co/api/datasets/9211sun/GUI-Xplore/revision/ebac33a0fb368e005af499b5594db4278f49d3da)

Reported counts come from the card's split table. A script over the 15 QA JSON files at revision ebac33a0 counted 15,934 auto, 16,744 manual_train and 2,634 manual_test entries (35,312 in total), so the card's manual_test figure is four higher than the released files. Apps, screenshots, actions, QA samples and video hours are different units and are counted separately.

### License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/README.md (retrieved 2026-10-18T12:29:45Z; SHA-256 3a143538ccdd7ed4ec28974153b43cf44ab2f16dee46e7f74c6fb64e7ac458da)
- https://huggingface.co/api/datasets/9211sun/GUI-Xplore/revision/ebac33a0fb368e005af499b5594db4278f49d3da (retrieved 2026-10-18T12:28:52Z; SHA-256 e2346ed137224f040c012a47d46f613facf449ec418a9ecbfecf97c0254d2fa3)
- https://raw.githubusercontent.com/921112343/GUI-Xplore/3e87e22264a587a3b4ff093a0b7e35d76d1cc554/README.md (retrieved 2026-10-18T12:28:51Z; SHA-256 596648200fb473192bbab00f7b7e01680ec169c67d6a7ebf7978f299f1f4983d)
- https://arxiv.org/html/2503.17709v1 (retrieved 2026-10-18T12:29:10Z; SHA-256 b7d8ea43f0db8c7b2432cee39e8bfb262c9c4bfd8a7290c0b50427d8eb1ac3fd)
- https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/manual_test/data/vh/com_android_documentsui/vh_1724467408.9856646.xml (retrieved 2026-10-18T12:28:52Z; SHA-256 03b665dfc0b49e1721676ce9ffc63532c3b1589304fe6f63ac59f690ab61f76e)
- https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/README.md (retrieved 2026-10-18T12:29:45Z; SHA-256 3a143538ccdd7ed4ec28974153b43cf44ab2f16dee46e7f74c6fb64e7ac458da)

---

## GUIMid training data

A released GUI-agent mid-training mixture and supporting domain datasets, together with a post-training trajectory file and image archives for web and mobile interaction.

- Catalog URL: https://awesomecua.com/resources/url-422010da7a5c845a18f6/
- Original source: https://huggingface.co/datasets/hkust-nlp/GUIMid
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web, android
- Topics: imitation-learning, planning, screen-understanding
- Evidence checked: 2026-10-17T11:23:07Z
- ID: url:422010da7a5c845a18f6

### Limitations

The public manifest includes GUIMid.json, mavis.tar.gz, GUI_trajectory.json, traj.tar.gz and domain-specific JSON files. The card says image data for some individual domains is still forthcoming and its overview inconsistently says nine tasks while later enumerating seven vision-language plus four language-only domains; no aggregate task/sample count is inferred. Training code remains marked coming soon in the repository. MIT is the publisher dataset declaration, not a relicensing of all upstream content.

- Record JSON: https://awesomecua.com/resources/url-422010da7a5c845a18f6/record.json

### Structured profile

- Formats: JSON, tar.gz image archives
- Modalities: text, images
- Splits: train configurations for named mid-training domains
- Supervision: mid-training instruction supervision, GUI post-training trajectories

#### Count observations

No count recorded.

Hub size bands and the inconsistent introductory task count use different units from a verified sample total. Some constituent-domain image packages remain forthcoming.

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/hkust-nlp/GUIMid/raw/main/README.md
- document: not recorded
- weights: not recorded

- data review: Publisher dataset-card declaration for the released packaging.
  Sources: https://huggingface.co/datasets/hkust-nlp/GUIMid/raw/main/README.md

### Primary evidence

- https://huggingface.co/datasets/hkust-nlp/GUIMid/raw/main/README.md (retrieved 2026-10-17T11:23:07Z; SHA-256 1cdf702c819ecf370f4191c6c71fae7b579cfbaf766908b42156964a69eddacc)
- https://huggingface.co/api/datasets/hkust-nlp/GUIMid (retrieved 2026-10-17T11:23:07Z; SHA-256 ededa2b3c8f21af8188152b028758c800db76cdbb8461ba82b8574cab375914e)
- https://api.github.com/repos/hkust-nlp/GUIMid (retrieved 2026-10-17T11:18:19Z; SHA-256 31b836da66c6907ff9a75ebc7f06da0db67e7d9fe9ca92d0c770f5f15f90a39e)
- https://raw.githubusercontent.com/hkust-nlp/GUIMid/HEAD/README.md (retrieved 2026-10-17T11:18:19Z; SHA-256 d9f63a03088c37f7145725c7a182100d1593fceadd26a9bf817d434ca8d6297e)

---

## GUIrilla-Task

macOS screenshots paired with generated instructions and a ground-truth click or type action on a labelled element, collected by the GUIrilla accessibility-API crawler in app-disjoint train and test splits.

- Catalog URL: https://awesomecua.com/resources/url-afe8260e6db2617b72ec/
- Original source: https://huggingface.co/datasets/macpaw-research/GUIrilla-Task
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, macos
- Topics: grounding, action-prediction, data-generation
- Evidence checked: 2026-10-18T12:27:04Z
- ID: url:afe8260e6db2617b72ec

### Limitations

Each record holds the full screenshot, a cropped app-window image, the window's accessibility JSON, the element data (bounding box for clicks, insertion location and text for typing) and task/element categories. The card says GPT-4 agents drafted the tasks during crawling, so instructions are model-generated. The data license is CC-BY-NC-4.0 per card metadata and the bundled LICENSE; the separate MacPaw/GUIrilla code repository's MIT license is not transferred to the data.

- Record JSON: https://awesomecua.com/resources/url-afe8260e6db2617b72ec/record.json

### Structured profile

- Formats: Parquet
- Modalities: screenshots, cropped window images, accessibility trees, instructions, actions
- Splits: train, test
- Supervision: generated task instructions, ground-truth click and type actions, element bounding boxes

#### Count observations

- 25,606 examples — train split at Hub revision ec4853a2 (reported; source: https://huggingface.co/datasets/macpaw-research/GUIrilla-Task/raw/ec4853a26f96e1c8adcc31670054f58a67a87297/README.md)
- 1,565 examples — test split at Hub revision ec4853a2 (reported; source: https://huggingface.co/datasets/macpaw-research/GUIrilla-Task/raw/ec4853a26f96e1c8adcc31670054f58a67a87297/README.md)
- 101 Parquet shards — data/ files at Hub revision ec4853a2 (96 train, 5 test) (computed) (computed; source: https://huggingface.co/api/datasets/macpaw-research/GUIrilla-Task/revision/ec4853a26f96e1c8adcc31670054f58a67a87297)

The card states the splits are application-level disjoint. Example counts come from the card's dataset_info and split table; shard counts were computed from the pinned Hub file list. An example is one screenshot-instruction-action triple; multi-step trajectories use a different unit.

### License declarations

- code: not recorded
- data: cc-by-nc-4.0 — https://huggingface.co/datasets/macpaw-research/GUIrilla-Task/raw/ec4853a26f96e1c8adcc31670054f58a67a87297/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/macpaw-research/GUIrilla-Task/raw/ec4853a26f96e1c8adcc31670054f58a67a87297/README.md (retrieved 2026-10-18T12:27:04Z; SHA-256 2ae8320c30f7d22085f290137e47dd2a735bf69e1a2c524bf1e340d9bd5ea658)
- https://huggingface.co/api/datasets/macpaw-research/GUIrilla-Task/revision/ec4853a26f96e1c8adcc31670054f58a67a87297 (retrieved 2026-10-18T12:26:25Z; SHA-256 bccbc1dd9fd5aae317583d464c9119090984aea910cb8dd6be3cc077d6bbb037)
- https://raw.githubusercontent.com/MacPaw/GUIrilla/15896d8c3158b7c4bbfaafc57582f1a28ff50074/README.md (retrieved 2026-10-18T12:26:24Z; SHA-256 9ffc792287271564b8dc841fa9b86f2cfc7d9f1e2b30c0d90aae059329f59273)
- https://huggingface.co/datasets/macpaw-research/GUIrilla-Task/raw/ec4853a26f96e1c8adcc31670054f58a67a87297/README.md (retrieved 2026-10-18T12:27:04Z; SHA-256 2ae8320c30f7d22085f290137e47dd2a735bf69e1a2c524bf1e340d9bd5ea658)

---

## Mobile-GUI-Worldmodel-SFT

A mobile GUI dataset for world-model training and evaluation. Its trajectory archives pair screenshots with page-state text and action-formatted training examples.

- Catalog URL: https://awesomecua.com/resources/url-e041226738f8ea43a878/
- Original source: https://huggingface.co/datasets/xwk123/Mobile-GUI-Worldmodel-SFT
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: data-generation, screen-understanding, action-prediction, world-models
- Evidence checked: 2026-11-09T05:05:00Z
- ID: url:e041226738f8ea43a878

### Limitations

The card lists AITZ, AITW, AMEX, AndroidControl, and GUI-Odyssey archives, plus annotation scripts and evaluation assets.

- Record JSON: https://awesomecua.com/resources/url-e041226738f8ea43a878/record.json

### License declarations

- code: not recorded
- data: other — https://huggingface.co/datasets/xwk123/Mobile-GUI-Worldmodel-SFT
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/xwk123/Mobile-GUI-Worldmodel-SFT (retrieved 2026-11-09T05:05:00Z; SHA-256 89de56cb4197c62d153e66997b1001aeb3c2cd76043305567c1369e0badba1f8)
- https://huggingface.co/api/datasets/xwk123/Mobile-GUI-Worldmodel-SFT (retrieved 2026-11-09T05:05:00Z; SHA-256 89de56cb4197c62d153e66997b1001aeb3c2cd76043305567c1369e0badba1f8)

---

## Mobile-R1 trajectory sample

Open sample of Mobile-R1's annotated trajectories on Chinese Android apps: 1,007 tasks whose steps pair a screenshot with a thought, a subtask and a mobile_use action such as click, swipe, type or open.

- Catalog URL: https://awesomecua.com/resources/url-114ced4a94d12f384d69/
- Original source: https://huggingface.co/datasets/Mobile-R1/Mobile-R1
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, imitation-learning
- Evidence checked: 2026-10-19T06:56:13Z
- ID: url:114ced4a94d12f384d69

### Limitations

The card describes this release as an open-sourced sample: the full Mobile-R1 dataset has 24,521 manually annotated instances from 4,635 trajectories, of which 1,007 trajectories on 28 applications are published. Instructions, thoughts and subtasks are in Chinese. Each data.jsonl row carries the app name, instruction, system prompt, screen size and a step list whose entries hold an image filename, thought, subtask, a mobile_use function call and the full model-style response. The card's apache-2.0 declaration covers this release and does not settle rights to the app screenshots.

- Record JSON: https://awesomecua.com/resources/url-114ced4a94d12f384d69/record.json

### Structured profile

- Formats: JSONL, PNG images
- Modalities: screenshots, instructions, thoughts, subtask descriptions, actions
- Splits: not recorded
- Supervision: manually annotated trajectories

#### Count observations

- 1,007 trajectories — Mobile-R1 Hub release (card statistics) (reported; source: https://huggingface.co/datasets/Mobile-R1/Mobile-R1/raw/c3904f0fdad03a3a4191492880312bda5ad36516/README.md)
- 28 applications — Mobile-R1 Hub release (card statistics) (reported; source: https://huggingface.co/datasets/Mobile-R1/Mobile-R1/raw/c3904f0fdad03a3a4191492880312bda5ad36516/README.md)
- 3,924 samples (steps) — Mobile-R1 Hub release (card statistics) (reported; source: https://huggingface.co/datasets/Mobile-R1/Mobile-R1/raw/c3904f0fdad03a3a4191492880312bda5ad36516/README.md)
- 1,007 data.jsonl rows — Mobile-R1 Hub release at revision c3904f0 (computed) (computed; source: https://huggingface.co/datasets/Mobile-R1/Mobile-R1/resolve/c3904f0fdad03a3a4191492880312bda5ad36516/data.jsonl)
- 3,899 trajectory step entries — Mobile-R1 Hub release at revision c3904f0 (computed) (computed; source: https://huggingface.co/datasets/Mobile-R1/Mobile-R1/resolve/c3904f0fdad03a3a4191492880312bda5ad36516/data.jsonl)
- 3,924 PNG files under images/ — Mobile-R1 Hub release at revision c3904f0 (computed) (computed; source: https://huggingface.co/api/datasets/Mobile-R1/Mobile-R1/revision/c3904f0fdad03a3a4191492880312bda5ad36516)

Counts use different units; these counts are reported separately. The card's 3,924 samples equal the number of PNG files in the manifest, but data.jsonl references 3,899 distinct images, all present, leaving 25 files unreferenced. The rows use 30 non-empty app_name strings, including variant spellings of the same app (B站 and 哔哩哔哩), plus 5 rows with an empty name; the card reports 28 applications. No train/test split is declared.

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/Mobile-R1/Mobile-R1/raw/c3904f0fdad03a3a4191492880312bda5ad36516/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/Mobile-R1/Mobile-R1/raw/c3904f0fdad03a3a4191492880312bda5ad36516/README.md (retrieved 2026-10-19T06:56:13Z; SHA-256 c92e2343802f3b669e2efd1818ee48080c1eb992fc44237d564a5853b08fd625)
- https://huggingface.co/api/datasets/Mobile-R1/Mobile-R1/revision/c3904f0fdad03a3a4191492880312bda5ad36516 (retrieved 2026-10-19T06:56:14Z; SHA-256 3379e01e9e163c27700a3c11a8647cef1311faad72f740a58d8255ab2342ed98)
- https://huggingface.co/datasets/Mobile-R1/Mobile-R1/resolve/c3904f0fdad03a3a4191492880312bda5ad36516/data.jsonl (retrieved 2026-10-19T06:56:15Z; SHA-256 a5af20573ee10ee858ab6b464cc7ed27b964cd6c967993b3711967c3069ebce3)
- https://huggingface.co/datasets/Mobile-R1/Mobile-R1/raw/c3904f0fdad03a3a4191492880312bda5ad36516/README.md (retrieved 2026-10-19T06:56:13Z; SHA-256 c92e2343802f3b669e2efd1818ee48080c1eb992fc44237d564a5853b08fd625)

---

## MONDAY

Cross-platform mobile GUI trajectory dataset derived from instructional videos, with released data-processing helpers and example evaluation code for Android and iOS data.

- Catalog URL: https://awesomecua.com/resources/github-runamu-monday/
- Original source: https://github.com/runamu/monday
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android, ios, cross-platform
- Topics: data-generation, mobile-navigation, video
- Evidence checked: 2026-10-18T10:59:55Z
- ID: github:runamu/monday

### Limitations

The retained README marks release of the full data-generation pipeline, training scripts, and model checkpoints as pending. The repository code license covers the repository code.

- Record JSON: https://awesomecua.com/resources/github-runamu-monday/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/runamu/monday/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/runamu/monday/HEAD/README.md (retrieved 2026-10-18T10:59:55Z; SHA-256 cb3d2329571a80b6edeab98c04f8b63c7f4e976929788d6a8283238b0b7fdadc)
- https://raw.githubusercontent.com/runamu/monday/HEAD/LICENSE (retrieved 2026-10-18T11:03:47Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## MT-Mind2Web

Multi-turn web-navigation conversations constructed from Mind2Web interactions, with dialogue turns, HTML snapshots, element candidates and click/type/select action sequences.

- Catalog URL: https://awesomecua.com/resources/url-bdfb50330deb97893ce4/
- Original source: https://huggingface.co/datasets/magicgh/MT-Mind2Web
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, imitation-learning, memory
- Evidence checked: 2026-10-17T12:34:10Z
- ID: url:bdfb50330deb97893ce4

### Limitations

The ungated Hub manifest contains train, test-task, test-website and test-subdomain JSON shards plus a candidate-ranking pickle file. Counts distinguish conversation sessions from dialogue turns; neither is a screenshot or action-step count. No pickle or sample data was loaded. The card declares CC-BY-4.0 and identifies the original Mind2Web interactions as its source.

- Record JSON: https://awesomecua.com/resources/url-bdfb50330deb97893ce4/record.json

### Structured profile

- Formats: JSON, auxiliary PKL
- Modalities: dialogue text, HTML, element candidates, actions
- Splits: train, test_task, test_website, test_subdomain
- Supervision: multi-turn web instruction following, element/action prediction

#### Count observations

- 600 conversations — train (reported; source: https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md)
- 34 conversations — test-task (reported; source: https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md)
- 42 conversations — test-website (reported; source: https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md)
- 44 conversations — test-subdomain (reported; source: https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md)
- 2,896 dialogue turns — train (reported; source: https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md)
- 191 dialogue turns — test-task (reported; source: https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md)
- 218 dialogue turns — test-website (reported; source: https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md)
- 216 dialogue turns — test-subdomain (reported; source: https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md)

Conversation, dialogue-turn and action-step units differ. The released file manifest is inspected.

### License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md
- document: not recorded
- weights: not recorded

- data review: Publisher dataset-card declaration for the multi-turn annotation release.
  Sources: https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md

### Primary evidence

- https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md (retrieved 2026-10-17T12:34:10Z; SHA-256 8685e0a26a06b3339b5c078632a7b0ade1ead40e6b586ef1ff3676414699a4bc)
- https://huggingface.co/api/datasets/magicgh/MT-Mind2Web (retrieved 2026-10-17T12:34:10Z; SHA-256 4455e6daf1151694c03b2a1ebd4a7af40b5b079b0568706a1783a0222383bb1d)
- https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=800&max_results=100&sortBy=submittedDate&sortOrder=descending (retrieved 2026-10-16T06:36:58Z; SHA-256 c87e97eb397da04806d53145cf9c13be739fc657bb54dca9318c8c4ed2a36249)

---

## NNetNav WebArena data

NNetNav's WebArena-oriented browser-interaction data release, with separate training and test files.

- Catalog URL: https://awesomecua.com/resources/url-25a4d0ab29b60250863a/
- Original source: https://huggingface.co/datasets/stanfordnlp/nnetnav-wa
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: data-generation, web-navigation
- Evidence checked: 2026-10-16T11:11:53Z
- ID: url:25a4d0ab29b60250863a

### Limitations

The Hub card supplies a license but no detailed schema. Dataset purpose is supported by the project's README; exact sample counts and annotation quality remain unverified.

- Record JSON: https://awesomecua.com/resources/url-25a4d0ab29b60250863a/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/stanfordnlp/nnetnav-wa
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/stanfordnlp/nnetnav-wa (retrieved 2026-10-16T11:11:53Z; SHA-256 3fe40a45aa2bf9d6f0cefffc65ea6382849c3543b44017200a4a8d43ab61e9eb)
- https://raw.githubusercontent.com/MurtyShikhar/NNetnav/HEAD/README.md (retrieved 2026-10-16T10:42:34Z; SHA-256 3095f7262b7d4ff916c6f58c55e6fc9902c08f77d09bf3951199945501148bb3)
- https://huggingface.co/api/datasets/stanfordnlp/nnetnav-wa (retrieved 2026-10-16T11:11:53Z; SHA-256 3fe40a45aa2bf9d6f0cefffc65ea6382849c3543b44017200a4a8d43ab61e9eb)

---

## OS-Genesis mobile training data

Reverse-task-synthesis mobile trajectories released in separate AndroidControl and AndroidWorld training annotation files.

- Catalog URL: https://awesomecua.com/resources/url-d3ec5122a2b52fd5ae4b/
- Original source: https://huggingface.co/datasets/OS-Copilot/OS-Genesis-mobile-data
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: data-generation, mobile-navigation, imitation-learning
- Evidence checked: 2026-10-17T04:01:34Z
- ID: url:d3ec5122a2b52fd5ae4b

### Limitations

The public manifest contains AC/AW JSONL training annotations and a screenshot archive. MIT is declared for the data in its own card, separately from Apache-2.0 declarations on some model checkpoints. The gated web-data release is a separate asset.

- Record JSON: https://awesomecua.com/resources/url-d3ec5122a2b52fd5ae4b/record.json

### Structured profile

- Formats: JSONL, ZIP
- Modalities: screenshots, text, actions
- Splits: AndroidControl training, AndroidWorld training
- Supervision: mobile action trajectories

#### Count observations

No count recorded.

AC and AW refer to distinct target training sets; no sample count is inferred from the two JSONL files or ZIP packaging.

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/OS-Copilot/OS-Genesis-mobile-data/raw/main/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/OS-Copilot/OS-Genesis-mobile-data/raw/main/README.md (retrieved 2026-10-17T04:01:34Z; SHA-256 de9de63e21e60e882277a6268e8153abb6c14aaf3e9a7f83e7f98ac14bf37170)
- https://huggingface.co/api/datasets/OS-Copilot/OS-Genesis-mobile-data (retrieved 2026-10-17T04:01:33Z; SHA-256 6a5e0c2baecc2dc8bf4466903798f5ecda07cdac917042bbd4cfbe54d895c11e)
- https://raw.githubusercontent.com/OS-Copilot/OS-Genesis/HEAD/README.md (retrieved 2026-10-16T06:36:01Z; SHA-256 430e495ab250395d666854bd18b0fc29b819cd784cd7730215ef65e461834d0d)
- https://huggingface.co/datasets/OS-Copilot/OS-Genesis-mobile-data/raw/main/README.md (retrieved 2026-10-17T04:01:34Z; SHA-256 de9de63e21e60e882277a6268e8153abb6c14aaf3e9a7f83e7f98ac14bf37170)

---

## OS-Genesis web training data

Gated OS-Genesis web release holding one JSONL file of reverse-task-synthesis training trajectories and a screenshot archive, named in the project README as training data for its WA checkpoints.

- Catalog URL: https://awesomecua.com/resources/url-31768421b4ecd1ad89f7/
- Original source: https://huggingface.co/datasets/OS-Copilot/OS-Genesis-web-data
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: data-generation, web-navigation, imitation-learning
- Evidence checked: 2026-10-18T15:45:46Z
- ID: url:31768421b4ecd1ad89f7

### Limitations

Access is auto-gated; the Hub API reports MIT in the card metadata for this data release. The manifest at revision 0080190f holds os_genesis_web_training.jsonl and os_genesis_web_screenshots.zip; no record count is asserted. The raw web triples linked by the README on Google Drive and the separate mobile data release are separate assets outside this record.

- Record JSON: https://awesomecua.com/resources/url-31768421b4ecd1ad89f7/record.json

### Structured profile

- Formats: JSONL, ZIP
- Modalities: screenshots, text, actions
- Splits: web training
- Supervision: web action trajectories

#### Count observations

No count recorded.

The README pairs this one training file with the 4B, 7B and 8B WA checkpoints; no sample count is inferred from the JSONL file or ZIP packaging.

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/OS-Copilot/OS-Genesis-web-data
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/OS-Copilot/OS-Genesis-web-data (retrieved 2026-10-18T15:45:46Z; SHA-256 94c7927766c63a5f70f59faf4b50c0b32163228139ab4a3ef2fad64a3c495a0e)
- https://raw.githubusercontent.com/OS-Copilot/OS-Genesis/72128850dad4ca9ba642ee7399794b4fb8f5154d/README.md (retrieved 2026-10-18T15:45:47Z; SHA-256 430e495ab250395d666854bd18b0fc29b819cd784cd7730215ef65e461834d0d)
- https://huggingface.co/api/datasets/OS-Copilot/OS-Genesis-web-data (retrieved 2026-10-18T15:45:46Z; SHA-256 94c7927766c63a5f70f59faf4b50c0b32163228139ab4a3ef2fad64a3c495a0e)

---

## OSWorld file cache (Ubuntu)

Hub-hosted copy of the files that OSWorld's Ubuntu task configurations download for task setup and evaluation, organized by application and task ID after their migration from Google Drive.

- Catalog URL: https://awesomecua.com/resources/url-c885712b9c69579ac591/
- Original source: https://huggingface.co/datasets/xlangai/ubuntu_osworld_file_cache
- Kind: dataset
- Review: curated
- Scope: adjacent
- Environments: desktop, linux
- Topics: evaluation
- Evidence checked: 2026-10-18T11:46:05Z
- ID: url:c885712b9c69579ac591

### Limitations

Adjacent: a file host that the curated OSWorld benchmark depends on; this asset hosts benchmark files. OSWorld task JSON (for example os/5c1075ca, which fetches setup.sh and eval.sh) points at this repository. The Hub API at revision 1e112283 reports an ungated repository with 720 files, most of them in application/task-ID folders, plus a fonts archive. The card metadata declares Apache-2.0, while its License section says the files follow the original OSWorld project's terms.

- Record JSON: https://awesomecua.com/resources/url-c885712b9c69579ac591/record.json

### Structured profile

- Formats: original application file formats, archives
- Modalities: images, documents, spreadsheets, presentations, audio and video, scripts
- Splits: not recorded
- Supervision: task setup and evaluation assets

#### Count observations

- 720 files — Hub manifest at revision 1e112283 (computed) (computed; source: https://huggingface.co/api/datasets/xlangai/ubuntu_osworld_file_cache)
- 262 application/task-ID folders — Hub manifest at revision 1e112283 (computed) (computed; source: https://huggingface.co/api/datasets/xlangai/ubuntu_osworld_file_cache)

Counts come from the Hub file manifest. Task folder and OSWorld task-definition counts use different units; OSWorld tasks have partial folder coverage here.

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/xlangai/ubuntu_osworld_file_cache/raw/1e112283c4ecb08d6fed8069bca7de74fa2f12aa/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/xlangai/ubuntu_osworld_file_cache/raw/1e112283c4ecb08d6fed8069bca7de74fa2f12aa/README.md (retrieved 2026-10-18T11:46:05Z; SHA-256 23b49d5e9a3c5cdcba990640ccf271d35411cc51ff85c18771a9f74b9d351944)
- https://huggingface.co/api/datasets/xlangai/ubuntu_osworld_file_cache (retrieved 2026-10-18T11:46:05Z; SHA-256 064fcc8dd91932dccbb0257be254fe5a95b95f369fb3d41ca2c169413cc424cf)
- https://raw.githubusercontent.com/xlang-ai/OSWorld/b138d348256078fa634fc3b73567a7337c793e6b/evaluation_examples/examples/os/5c1075ca-bb34-46a3-a7a0-029bd7463e79.json (retrieved 2026-10-18T11:46:05Z; SHA-256 6b57e8b32c048a252d8076fc280bf029f869e99e2938530ff78087aa7fdce410)
- https://huggingface.co/datasets/xlangai/ubuntu_osworld_file_cache/raw/1e112283c4ecb08d6fed8069bca7de74fa2f12aa/README.md (retrieved 2026-10-18T11:46:05Z; SHA-256 23b49d5e9a3c5cdcba990640ccf271d35411cc51ff85c18771a9f74b9d351944)

---

## OSWorld-Verified trajectories

Archived OSWorld-Verified evaluation runs of many computer-use agents and step budgets on Ubuntu, each archive holding screenshots, actions, model reasoning and per-task results for analysis.

- Catalog URL: https://awesomecua.com/resources/url-2c99f0de2840277abc72/
- Original source: https://huggingface.co/datasets/xlangai/ubuntu_osworld_verified_trajs
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: evaluation
- Evidence checked: 2026-10-18T12:10:51Z
- ID: url:2c99f0de2840277abc72

### Limitations

The OSWorld project page says all verified trajectories are published in this dataset. Hub API at revision 5473c39e: open access, 100 run archives (99 zip, one tar.gz) plus a README and root all_result.json and args.json files that belong to a single run. Archive names identify the agent or model and often the step budget. The card's totals (15+ model variants, 1000+ episodes, last updated August 2025) predate later uploads, and it calls training on these runs not recommended. The card declares MIT for the data; outputs of third-party models keep their own terms.

- Record JSON: https://awesomecua.com/resources/url-2c99f0de2840277abc72/record.json

### Structured profile

- Formats: zip archives, tar.gz archive, JSON
- Modalities: screenshots, actions, model reasoning, task results
- Splits: not recorded
- Supervision: agent evaluation trajectories

#### Count observations

- 100 run archives — zip and tar.gz files at revision 5473c39e (computed) (computed; source: https://huggingface.co/api/datasets/xlangai/ubuntu_osworld_verified_trajs/revision/5473c39e42a538a187a9b2c2b499db59d560fd8c)

A run archive is one agent configuration evaluated on OSWorld-Verified; task and episode counts use different units. Step budgets in archive names range over 15, 50, 100 and more steps, and several agents have one archive per budget.

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/xlangai/ubuntu_osworld_verified_trajs/raw/5473c39e42a538a187a9b2c2b499db59d560fd8c/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/xlangai/ubuntu_osworld_verified_trajs/raw/5473c39e42a538a187a9b2c2b499db59d560fd8c/README.md (retrieved 2026-10-18T12:10:51Z; SHA-256 3e115bb35b01a9be2c797effd4cac3e9ee2ff10036c0c7df648126db0a5a11fc)
- https://huggingface.co/api/datasets/xlangai/ubuntu_osworld_verified_trajs/revision/5473c39e42a538a187a9b2c2b499db59d560fd8c (retrieved 2026-10-18T12:10:51Z; SHA-256 eec08ba92c8032dd5b978c2a488a27d9193c82be741790da7541fe5c19b96928)
- https://raw.githubusercontent.com/OS-World/OS-World.github.io/62f8466dbe8b4d67c104b5ead3f8271da01aa09d/index.html (retrieved 2026-10-18T12:10:52Z; SHA-256 bf37e00ce23e8c5472d485a6eb3b291ffa2de220b44040402516e41cbc48c516)
- https://huggingface.co/datasets/xlangai/ubuntu_osworld_verified_trajs/raw/5473c39e42a538a187a9b2c2b499db59d560fd8c/README.md (retrieved 2026-10-18T12:10:51Z; SHA-256 3e115bb35b01a9be2c797effd4cac3e9ee2ff10036c0c7df648126db0a5a11fc)

---

## PixelWeb

PixelWeb releases webpage screenshots, DOM data and element images with masks, contours and boxes in 1K, 10K and 100K collections.

- Catalog URL: https://awesomecua.com/resources/url-67ae69986d6408fde468/
- Original source: https://huggingface.co/datasets/cyberalchemist/PixelWeb
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: screen-understanding, grounding, data-generation
- Evidence checked: 2026-11-09T05:05:05Z
- ID: url:67ae69986d6408fde468

### Limitations

The card describes raw and annotated archives, document naming and element class labels. It declares Apache 2.0 licensing.

- Record JSON: https://awesomecua.com/resources/url-67ae69986d6408fde468/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/cyberalchemist/PixelWeb
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/cyberalchemist/PixelWeb (retrieved 2026-11-09T05:05:05Z; SHA-256 9ee3b6af76796b0b07da5d1ba31b564f0de190880f18ececa3ca958705bd3763)
- https://huggingface.co/api/datasets/cyberalchemist/PixelWeb (retrieved 2026-11-09T05:05:05Z; SHA-256 9ee3b6af76796b0b07da5d1ba31b564f0de190880f18ececa3ca958705bd3763)

---

## PSAI Computer Use Dataset

PSAI Computer Use Dataset provides 3,167 human-computer interaction trajectories with synchronized screen video, input events, and DOM/AX snapshots.

- Catalog URL: https://awesomecua.com/resources/github-anaishowland-computeruse-data-psai/
- Original source: https://github.com/anaishowland/computeruse-data-psai
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: data-generation, imitation-learning, recording
- Evidence checked: 2026-11-04T14:02:35Z
- ID: github:anaishowland/computeruse-data-psai

- Record JSON: https://awesomecua.com/resources/github-anaishowland-computeruse-data-psai/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/anaishowland/computeruse-data-psai/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/anaishowland/computeruse-data-psai/HEAD/README.md (retrieved 2026-11-04T14:02:35Z; SHA-256 f5521f8dddc136cae9b84f7ae0f83a535f4611161e95ebc788e21147338140be)
- https://raw.githubusercontent.com/anaishowland/computeruse-data-psai/HEAD/LICENSE (retrieved 2026-11-04T14:07:22Z; SHA-256 242a79eb1cf827de167ccf640900fb55c99326c97ed721105673bf671f7fa06a)

---

## RelationGUI & RelationQA

RelationGUI provides datasets and training code for explicit spatial, hierarchical, and functional relational understanding in GUI agents.

- Catalog URL: https://awesomecua.com/resources/github-malonghui-relationgui/
- Original source: https://github.com/malonghui/RelationGUI
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop, android
- Topics: screen-understanding, grounding, evaluation
- Evidence checked: 2026-11-04T14:02:42Z
- ID: github:malonghui/relationgui

- Record JSON: https://awesomecua.com/resources/github-malonghui-relationgui/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/malonghui/RelationGUI/HEAD/README.md (retrieved 2026-11-04T14:02:42Z; SHA-256 4c4b459ece453ac59e1eead8392b91e816fcdb89ad3753f338b8d3ac6d4197c6)

---

## Rico

Mobile app screenshots, view hierarchies, and interaction traces for UI research.

- Catalog URL: https://awesomecua.com/resources/url-0b134b082a7bd507fc6a/
- Original source: https://www.interactionmining.org/archive/rico
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: screen-understanding
- Evidence checked: 2026-10-16T06:38:29Z
- ID: url:0b134b082a7bd507fc6a

### Limitations

The official project page cites the 2017 Rico paper. The project page reports more than 66,000 screens, while the original publication reports more than 72,000. The retained paper and project page report separate screen and app counts; the reason for their difference remains unresolved. App counts also differ: the official project page reports more than 9.3k Android apps and the retained published abstract more than 9.7k. Profile counts use the project-page scope; no reconciliation is inferred.

- Record JSON: https://awesomecua.com/resources/url-0b134b082a7bd507fc6a/record.json

### Structured profile

- Formats: PNG, JSON, CSV, NumPy NPY, GIF
- Modalities: screenshots, Android view hierarchies, gesture traces, transition animations, app/UI metadata
- Splits: not recorded
- Supervision: UI structure and element properties, recorded human interactions, learned UI layout embeddings

#### Count observations

- > 66,000 unique UI screens — original Rico downloads described on the project page (reported; source: https://www.interactionmining.org/archive/rico)
- > 9,300 Android apps — original Rico collection described on the project page (reported; source: https://www.interactionmining.org/archive/rico)
- 10,811 human interaction traces — crowd-worker collection before automated exploration (reported; source: https://www.interactionmining.org/archive/rico)

Project-page scope: screenshots paired with augmented view hierarchies, gesture coordinates, layout vectors and metadata. These observations describe screens paired with metadata; action and task totals use different units. The later semantic-annotation download augments the same screen corpus. The retained original paper reports more than 72k screens from more than 9.7k apps while this project page says more than 66k screens and more than 9.3k apps; the difference is unresolved. Profile counts follow the project page; the paper reports a separate screen and app population. No train/validation/test partition or data license is established here; archives were not downloaded.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://www.interactionmining.org/archive/rico (retrieved 2026-10-16T06:38:29Z; SHA-256 daa370b9aae5bce9f5171ea81fa4574c6155e04177af1db138529efd76377f89)
- https://danafergan.com/publications/deka2017rico.pdf (retrieved 2026-10-17T10:01:32Z; SHA-256 a1ec58c526b152c052c5c72f9a62725f1026b5f0e4f45c8fe85fce284295da84)

---

## Rico Dataset

Rico Dataset is a collection of mobile app interaction and design data presented through Interaction Mining, with 70k screens and 10k user flows across 5k apps.

- Catalog URL: https://awesomecua.com/resources/url-0c845d69c9498dd4e20c/
- Original source: https://www.interactionmining.org
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: data-generation, ui-design
- Evidence checked: 2026-11-09T06:16:39Z
- ID: url:0c845d69c9498dd4e20c

### Limitations

The site describes a platform for collecting, managing, and sharing mobile interaction datasets and invites contributions or self-hosting. It also states that 10k pieces of private user data are protected.

- Record JSON: https://awesomecua.com/resources/url-0c845d69c9498dd4e20c/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://www.interactionmining.org (retrieved 2026-11-09T06:16:39Z; SHA-256 a6f3f922d63153d90b34c56ba443ce305395e2ba7fa5ebe812993b21525dbd1e)

---

## RICO Semantics

RICO Semantics provides 500,000 human annotations on RICO mobile screens covering icon shapes, semantic roles, and text-element associations.

- Catalog URL: https://awesomecua.com/resources/github-google-research-datasets-rico-semantics/
- Original source: https://github.com/google-research-datasets/rico_semantics
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: screen-understanding, grounding, data-generation
- Evidence checked: 2026-11-04T13:12:16Z
- ID: github:google-research-datasets/rico_semantics

- Record JSON: https://awesomecua.com/resources/github-google-research-datasets-rico-semantics/record.json

### License declarations

- code: CC-BY-SA-4.0 — https://raw.githubusercontent.com/google-research-datasets/rico_semantics/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/google-research-datasets/rico_semantics/HEAD/README.md (retrieved 2026-11-04T13:12:16Z; SHA-256 444a35d65f55407ffb931c1138e984374833990aa7180f029e2228c2f820112b)
- https://raw.githubusercontent.com/google-research-datasets/rico_semantics/HEAD/LICENSE (retrieved 2026-11-04T13:22:34Z; SHA-256 71a43a169b52bb1b39510b65ec5b43b4bbb59196d449a835fe58b50af6a72742)

---

## RICO-SCA

A mobile UI dataset pairing screenshots and widget boxes with synthetic captions and view hierarchy data for screen understanding and interface grounding.

- Catalog URL: https://awesomecua.com/resources/url-72f05843df9bd7ea35af/
- Original source: https://huggingface.co/datasets/bevaya/RICO-SCA
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: grounding, screen-understanding, data-generation
- Evidence checked: 2026-11-09T05:04:57Z
- ID: url:72f05843df9bd7ea35af

### Limitations

The card lists a train split with 71,350 examples and declares Apache-2.0 licensing. It describes the release as a SeeClick cache of data generated with the RICO SCA procedure.

- Record JSON: https://awesomecua.com/resources/url-72f05843df9bd7ea35af/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/bevaya/RICO-SCA
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/bevaya/RICO-SCA (retrieved 2026-11-09T05:04:57Z; SHA-256 fbf299a0803a959045f566e66b5b16e638fc55ea561c6ebd3226817c39098063)
- https://huggingface.co/api/datasets/bevaya/RICO-SCA (retrieved 2026-11-09T05:04:57Z; SHA-256 fbf299a0803a959045f566e66b5b16e638fc55ea561c6ebd3226817c39098063)
- https://huggingface.co/api/datasets/rootsautomation/RICO-SCA (retrieved 2026-11-09T05:26:44Z; SHA-256 fbf299a0803a959045f566e66b5b16e638fc55ea561c6ebd3226817c39098063)
- https://huggingface.co/api/datasets/bevaya/RICO-SCA (retrieved 2026-11-09T05:26:44Z; SHA-256 fbf299a0803a959045f566e66b5b16e638fc55ea561c6ebd3226817c39098063)

---

## RICO-Screen2Words

RICO-Screen2Words pairs Android app screenshots with human screen summaries, app metadata and view hierarchies for mobile interface understanding.

- Catalog URL: https://awesomecua.com/resources/url-cf7c132c9a988d3a6ec4/
- Original source: https://huggingface.co/datasets/bevaya/RICO-Screen2Words
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: screen-understanding, data-generation, ui-design
- Evidence checked: 2026-11-09T05:05:09Z
- ID: url:cf7c132c9a988d3a6ec4

### Limitations

The repository provides Parquet files for train, validation and test splits. The card states that the data uses RICO screens and declares a CC-BY-4.0 license.

- Record JSON: https://awesomecua.com/resources/url-cf7c132c9a988d3a6ec4/record.json

### License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/bevaya/RICO-Screen2Words
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/bevaya/RICO-Screen2Words (retrieved 2026-11-09T05:05:09Z; SHA-256 3b489e1ada913728c95de1a46c264eff62dd8a36303efe797b8647696881d657)
- https://huggingface.co/api/datasets/bevaya/RICO-Screen2Words (retrieved 2026-11-09T05:05:09Z; SHA-256 3b489e1ada913728c95de1a46c264eff62dd8a36303efe797b8647696881d657)

---

## RICO-ScreenAnnotation

A standardized Rico screen-annotation dataset pairing mobile screenshots with text about interface elements and their locations. It provides train, validation, and test splits.

- Catalog URL: https://awesomecua.com/resources/url-2a4dd75acb6efdeb0e4a/
- Original source: https://huggingface.co/datasets/bevaya/RICO-ScreenAnnotation
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: screen-understanding, grounding, data-generation
- Evidence checked: 2026-11-09T05:05:00Z
- ID: url:2a4dd75acb6efdeb0e4a

### Limitations

The card lists screen ID, annotation, and image fields and declares a CC-BY-4.0 license. The repository file list includes Parquet files for all three splits.

- Record JSON: https://awesomecua.com/resources/url-2a4dd75acb6efdeb0e4a/record.json

### License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/bevaya/RICO-ScreenAnnotation
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/bevaya/RICO-ScreenAnnotation (retrieved 2026-11-09T05:05:00Z; SHA-256 3a72b34930d7562051f8d1ef9374129bad2b2b12ad525ef685f4c9d69d90dd0d)
- https://huggingface.co/api/datasets/bevaya/RICO-ScreenAnnotation (retrieved 2026-11-09T05:05:00Z; SHA-256 3a72b34930d7562051f8d1ef9374129bad2b2b12ad525ef685f4c9d69d90dd0d)

---

## RICO-ScreenQA

RICO-ScreenQA provides questions and answers for app screenshots, with images, answer text, and UI-element bounds in train, validation, and test splits.

- Catalog URL: https://awesomecua.com/resources/url-bd15fb092ff80643ed97/
- Original source: https://huggingface.co/datasets/bevaya/RICO-ScreenQA
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: screen-understanding, evaluation
- Evidence checked: 2026-11-09T05:05:05Z
- ID: url:bd15fb092ff80643ed97

### Limitations

The repository lists Parquet files for train, validation, and test splits. The card declares a CC BY 4.0 license and links to the original ScreenQA project.

- Record JSON: https://awesomecua.com/resources/url-bd15fb092ff80643ed97/record.json

### License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/bevaya/RICO-ScreenQA
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/bevaya/RICO-ScreenQA (retrieved 2026-11-09T05:05:05Z; SHA-256 f08afef5a0de2040fde65c5620f9a08c0a7d9a09bf2c833eb838d363cad68bc4)
- https://huggingface.co/api/datasets/bevaya/RICO-ScreenQA (retrieved 2026-11-09T05:05:05Z; SHA-256 f08afef5a0de2040fde65c5620f9a08c0a7d9a09bf2c833eb838d363cad68bc4)

---

## RICO-ScreenQA-Short

A screen question-answering dataset based on RICO interface images, pairing questions with machine-generated short answers. It provides train, validation and test splits.

- Catalog URL: https://awesomecua.com/resources/url-060c9288c7197c5a188e/
- Original source: https://huggingface.co/datasets/bevaya/RICO-ScreenQA-Short
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: screen-understanding, data-generation
- Evidence checked: 2026-11-09T05:05:07Z
- ID: url:060c9288c7197c5a188e

### Limitations

The card lists 68,980 training, 8,618 validation and 8,427 test examples, stored as Parquet files. It declares a CC BY 4.0 license.

- Record JSON: https://awesomecua.com/resources/url-060c9288c7197c5a188e/record.json

### License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/bevaya/RICO-ScreenQA-Short
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/bevaya/RICO-ScreenQA-Short (retrieved 2026-11-09T05:05:07Z; SHA-256 a73cb0dc80512e613a5dfc328e66f01340a67ccafd0bce382f1b907d45ccc175)
- https://huggingface.co/api/datasets/bevaya/RICO-ScreenQA-Short (retrieved 2026-11-09T05:05:07Z; SHA-256 a73cb0dc80512e613a5dfc328e66f01340a67ccafd0bce382f1b907d45ccc175)

---

## RICO-WidgetCaptioning

A mobile UI dataset pairing RICO screenshots and widget regions with human-written captions. It includes view hierarchies and train, validation, and test splits.

- Catalog URL: https://awesomecua.com/resources/url-013bb9256ca6ad5188be/
- Original source: https://huggingface.co/datasets/bevaya/RICO-WidgetCaptioning
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: screen-understanding, grounding, data-generation, mobile-navigation
- Evidence checked: 2026-11-09T06:16:33Z
- ID: url:013bb9256ca6ad5188be

### Limitations

The card lists screenshots, bounding boxes, captions, semantic annotations, and app metadata. It declares a CC-BY-4.0 license.

- Record JSON: https://awesomecua.com/resources/url-013bb9256ca6ad5188be/record.json

### License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/bevaya/RICO-WidgetCaptioning
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/bevaya/RICO-WidgetCaptioning (retrieved 2026-11-09T06:16:33Z; SHA-256 4cb966ead67248ceebf1f744c72438433b92c8d8357edf02002a21e288ab9e6c)
- https://huggingface.co/api/datasets/bevaya/RICO-WidgetCaptioning (retrieved 2026-11-09T06:16:33Z; SHA-256 4cb966ead67248ceebf1f744c72438433b92c8d8357edf02002a21e288ab9e6c)

---

## RoTS

Announced GUI trajectory synthesis resources for recovery from policy-induced errors; the inspected repository marks code and data releases as in preparation.

- Catalog URL: https://awesomecua.com/resources/github-alibabaresearch-rots/
- Original source: https://github.com/AlibabaResearch/RoTS
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: data-generation, robustness
- Evidence checked: 2026-10-16T06:36:02Z
- ID: github:alibabaresearch/rots

### Limitations

The 800k figure describes training samples in the study. The repository code-license declaration covers the repository code.

- Record JSON: https://awesomecua.com/resources/github-alibabaresearch-rots/record.json

### Structured profile

- Formats: not recorded
- Modalities: GUI interaction trajectories
- Splits: not recorded
- Supervision: recovery trajectory synthesis

#### Count observations

- ≈ 800,000 training samples — paper-described synthesis output (reported; source: https://raw.githubusercontent.com/AlibabaResearch/RoTS/HEAD/README.md)

The inspected README marks the dataset and collection pipelines as in preparation. The inspected README marks the dataset and collection pipelines as in preparation; file formats, splits and release-specific data terms remain unknown.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/AlibabaResearch/RoTS/HEAD/README.md (retrieved 2026-10-16T06:36:02Z; SHA-256 bf5c1469d33ced951ff0a5de017494b65f654023ceee8e7fbfd8b60afb082244)
- https://raw.githubusercontent.com/AlibabaResearch/RoTS/HEAD/README.md (retrieved 2026-10-16T06:36:02Z; SHA-256 bf5c1469d33ced951ff0a5de017494b65f654023ceee8e7fbfd8b60afb082244)
- https://raw.githubusercontent.com/AlibabaResearch/RoTS/HEAD/README.md (retrieved 2026-10-16T06:36:02Z; SHA-256 bf5c1469d33ced951ff0a5de017494b65f654023ceee8e7fbfd8b60afb082244)

---

## Sai on OSWorld v2.1 reference-VM runs

Simular's 134 clean runs of its Sai computer-use agent on the 108 OSWorld v2.1 tasks in a reference Ubuntu VM, with OSWorld trajectories, agent records, harness and grader logs, scorecards and screenshot and video tars.

- Catalog URL: https://awesomecua.com/resources/url-a19a076a4808a80f6ac8/
- Original source: https://huggingface.co/datasets/simular-ai/sai-osworld-v21-reference-runs
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: evaluation, observability
- Evidence checked: 2026-10-18T12:34:54Z
- ID: url:a19a076a4808a80f6ac8

### Limitations

The card reports agent model anthropic/claude-opus-5 at max thinking effort on a cocoon microVM built from the official OSWorld v2.1 reference image (Ubuntu 22.04.3), and five guest image builds (ref4, ref5, ref7, ref8, ref9) that differ only in environment fixes. A run is clean under the card's own rule: a numeric score, infra ok or proxy_missing, and no disk-full, driver-timeout or forced-zero replay-render failure. Headline scores are the publisher's. Text files are redacted copies (proxy, credentials, per-run GitLab passwords, host names); images and video are unchanged and show masked GitLab login fields and an internal GitLab address in two tasks. The Hub owner simular-ai is the account named Simular, whose site presents Sai as its agent. No license is declared.

- Record JSON: https://awesomecua.com/resources/url-a19a076a4808a80f6ac8/record.json

### Structured profile

- Formats: JSONL, JSON, plain-text logs, TAR media archives
- Modalities: screenshots, screen recordings, action trajectories, agent messages and events, harness and grader logs, scores
- Splits: not recorded
- Supervision: grader task scores, agent-generated trajectories

#### Count observations

- 134 clean task runs — osworld-v2.1 release as described by the card (reported; source: https://huggingface.co/datasets/simular-ai/sai-osworld-v21-reference-runs/raw/abfb5852189f49e81255c38d98287df29ae53658/README.md)
- 134 run/task directories with traj.jsonl — runs/ at Hub revision abfb5852 (computed) (computed; source: https://huggingface.co/api/datasets/simular-ai/sai-osworld-v21-reference-runs/revision/abfb5852189f49e81255c38d98287df29ae53658)
- 108 distinct OSWorld v2.1 tasks — runs/ at Hub revision abfb5852 (computed) (computed; source: https://huggingface.co/api/datasets/simular-ai/sai-osworld-v21-reference-runs/revision/abfb5852189f49e81255c38d98287df29ae53658)
- 18 batch directories — runs/ at Hub revision abfb5852 (computed) (computed; source: https://huggingface.co/api/datasets/simular-ai/sai-osworld-v21-reference-runs/revision/abfb5852189f49e81255c38d98287df29ae53658)
- 134 per-run media TAR archives — media/ at Hub revision abfb5852 (computed) (computed; source: https://huggingface.co/api/datasets/simular-ai/sai-osworld-v21-reference-runs/revision/abfb5852189f49e81255c38d98287df29ae53658)

Computed counts come from a script over the pinned Hub file list. A run is one task execution; some tasks ran more than once, so 134 run directories cover 108 tasks, grouped under 18 batch directories. Card headline: 0.7731 mean over tasks of each task's mean clean score (first clean run 0.7674, best 0.7938), from the benchmark grader. No task file or media archive was downloaded.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: The card declares no license in its metadata or text, and the file list at this revision has no license file, so no data grant is established; agent outputs and captured third-party content keep their own terms.
  Sources: https://huggingface.co/datasets/simular-ai/sai-osworld-v21-reference-runs/raw/abfb5852189f49e81255c38d98287df29ae53658/README.md

### Primary evidence

- https://huggingface.co/datasets/simular-ai/sai-osworld-v21-reference-runs/raw/abfb5852189f49e81255c38d98287df29ae53658/README.md (retrieved 2026-10-18T12:34:54Z; SHA-256 d11edc15df8bb33c7ef2a49772985166f6fb37107e5e36334653c95108246a12)
- https://huggingface.co/api/datasets/simular-ai/sai-osworld-v21-reference-runs/revision/abfb5852189f49e81255c38d98287df29ae53658 (retrieved 2026-10-18T12:33:58Z; SHA-256 de6231347f32cc04143d47778d616ef03fc6a6d49ebb69b7992a1f95fc7e92ec)

---

## Sai OSWorld-V2 benchmark runs

Simular's per-task evidence from two complete 108-task OSWorld-V2 runs of its Sai computer-use agent: scores, step trajectories, message traces, evaluator and API logs, and run manifests, without screenshots.

- Catalog URL: https://awesomecua.com/resources/url-e0180b9651fec04d0308/
- Original source: https://huggingface.co/datasets/simular-ai/sai-osworld-v2-benchmark-runs
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: evaluation, observability
- Evidence checked: 2026-10-18T12:27:42Z
- ID: url:e0180b9651fec04d0308

### Limitations

The card reports run1 (2026-08-12) at a 0.7276 mean score with 28 perfect tasks and run2 (2026-08-20) at 0.7329 with 33, both 108/108 scored with anthropic/claude-opus-5 at max thinking, a 500-step limit and claude-sonnet-4-6 as evaluator and user simulator; these are publisher measurements. The run manifests record an Ubuntu 1920x1080 VM on AWS, screenshot observations, the pyautogui action space, benchmark release osworld-v2-2026.06.24 and a separate grounding model (simular-ui-venus-15-30b-a3b-rtx6000). Each run root's manifest describes its last partial invocation (a one-task backfill for run1, a three-task infrastructure rerun for run2). Superseded attempt directories are kept beside the canonical three-digit task directories. The card names a RUNS.md index that is absent at this revision. The Hub license is `other` with no license text.

- Record JSON: https://awesomecua.com/resources/url-e0180b9651fec04d0308/record.json

### Structured profile

- Formats: JSON, JSONL, CSV, plain-text logs, Markdown
- Modalities: action trajectories, agent messages and events, runtime and evaluator logs, scores
- Splits: not recorded
- Supervision: evaluator task scores, agent-generated trajectories

#### Count observations

- 2 complete 108-task benchmark runs — Hub revision fb621da2 (reported; source: https://huggingface.co/datasets/simular-ai/sai-osworld-v2-benchmark-runs/raw/fb621da25cb55a45e19f4258eea4c4fd795c625a/README.md)
- 108 canonical task directories with traj.jsonl — run1/ at Hub revision fb621da2 (computed) (computed; source: https://huggingface.co/api/datasets/simular-ai/sai-osworld-v2-benchmark-runs/revision/fb621da25cb55a45e19f4258eea4c4fd795c625a)
- 108 canonical task directories with traj.jsonl — run2/ at Hub revision fb621da2 (computed) (computed; source: https://huggingface.co/api/datasets/simular-ai/sai-osworld-v2-benchmark-runs/revision/fb621da25cb55a45e19f4258eea4c4fd795c625a)
- 23 superseded attempt directories — run1/ at Hub revision fb621da2 (computed) (computed; source: https://huggingface.co/api/datasets/simular-ai/sai-osworld-v2-benchmark-runs/revision/fb621da25cb55a45e19f4258eea4c4fd795c625a)
- 4 superseded attempt directories — run2/ at Hub revision fb621da2 (computed) (computed; source: https://huggingface.co/api/datasets/simular-ai/sai-osworld-v2-benchmark-runs/revision/fb621da25cb55a45e19f4258eea4c4fd795c625a)

Counts come from a script over the pinned Hub file list: a canonical directory has a three-digit task name; suffixed names (_infra_, _hung_, _attempt1 and similar) are superseded attempts that the card keeps as evidence. Screenshots, observation images and recordings were removed by the publisher. Scores come from an LLM evaluator; the run manifests and score tables were read, leaving task files outside this inspection.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: The card metadata declares only `license: other`, and neither the card nor the file list at this revision contains license text, so no data grant is established. Agent outputs and logged third-party content keep their own terms.
  Sources: https://huggingface.co/datasets/simular-ai/sai-osworld-v2-benchmark-runs/raw/fb621da25cb55a45e19f4258eea4c4fd795c625a/README.md

### Primary evidence

- https://huggingface.co/datasets/simular-ai/sai-osworld-v2-benchmark-runs/raw/fb621da25cb55a45e19f4258eea4c4fd795c625a/README.md (retrieved 2026-10-18T12:27:42Z; SHA-256 4538e115e893cdbc8f61446b4bd4a7e173fadb78eef5906e4d236f0a05399ce7)
- https://huggingface.co/api/datasets/simular-ai/sai-osworld-v2-benchmark-runs/revision/fb621da25cb55a45e19f4258eea4c4fd795c625a (retrieved 2026-10-18T12:26:14Z; SHA-256 c71c46888e4f6723aa2f654e2f8256a64f11a56be166aaf05fce9fcd1c012e3d)
- https://huggingface.co/datasets/simular-ai/sai-osworld-v2-benchmark-runs/raw/fb621da25cb55a45e19f4258eea4c4fd795c625a/run1/run_manifest.json (retrieved 2026-10-18T12:26:22Z; SHA-256 72f7d1c318890f190dd8279d8f6a34f2fb2694dd524335fd4b79b87eaafb4410)
- https://huggingface.co/datasets/simular-ai/sai-osworld-v2-benchmark-runs/raw/fb621da25cb55a45e19f4258eea4c4fd795c625a/run2/run_manifest.json (retrieved 2026-10-18T12:26:22Z; SHA-256 2857dfa4d3c3da2058065df7cf476ec07fab866f07a09f8b256e1c19de59d58e)
- https://huggingface.co/datasets/simular-ai/sai-osworld-v2-benchmark-runs/raw/fb621da25cb55a45e19f4258eea4c4fd795c625a/README.md (retrieved 2026-10-18T12:27:42Z; SHA-256 4538e115e893cdbc8f61446b4bd4a7e173fadb78eef5906e4d236f0a05399ce7)

---

## Salesforce Grounding Dataset

GUI grounding set that merges Aria-UI, OmniAct, Widget Caption, UI-Vision and OS-Atlas screenshots into target boxes with action, appearance, function and combined instructions, cited to GTA1.

- Catalog URL: https://awesomecua.com/resources/url-1001251b5a7729988118/
- Original source: https://huggingface.co/datasets/Salesforce/grounding_dataset
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: grounding, data-generation
- Evidence checked: 2026-10-18T12:26:45Z
- ID: url:1001251b5a7729988118

### Limitations

Hub revision 0bf2eb71 lists the card and 75 train Parquet shards; access is open. The card names desktop, web, mobile and operating-system interfaces without naming a mobile OS. Each row keeps a source-dataset tag and the original caption; the card does not describe how the description, function and combined instruction fields were produced, and no rows were downloaded. The card asks users to cite GTA1 and the five source datasets but does not say which GTA1 checkpoint was trained on this release. No license is declared for the compilation itself.

- Record JSON: https://awesomecua.com/resources/url-1001251b5a7729988118/record.json

### Structured profile

- Formats: Parquet
- Modalities: GUI screenshots, bounding boxes, instructions, element descriptions
- Splits: train
- Supervision: instruction-to-bounding-box GUI grounding

#### Count observations

- 70,688 examples — train split at Hub revision 0bf2eb71 (reported; source: https://huggingface.co/datasets/Salesforce/grounding_dataset/raw/0bf2eb71734353da92f137f8b26e27c2f75efcfc/README.md)

The count is the card's dataset_info num_examples for the train split. An example is one screenshot-target pair with its instructions. Rows are tagged ariaui, omniact, widget_caption, ui_vision or os_altas by source.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: The card declares no license for this compilation. It lists the five source datasets' own licenses (Apache-2.0, MIT, CC BY 4.0), which stay with those sources and are not a grant for this release.
  Sources: https://huggingface.co/datasets/Salesforce/grounding_dataset/raw/0bf2eb71734353da92f137f8b26e27c2f75efcfc/README.md

### Primary evidence

- https://huggingface.co/datasets/Salesforce/grounding_dataset/raw/0bf2eb71734353da92f137f8b26e27c2f75efcfc/README.md (retrieved 2026-10-18T12:26:45Z; SHA-256 503369538fd705e5932f9eaa32b1107874fbb1392ead98c64988d9f1da3c4459)
- https://huggingface.co/api/datasets/Salesforce/grounding_dataset/revision/0bf2eb71734353da92f137f8b26e27c2f75efcfc (retrieved 2026-10-18T12:25:55Z; SHA-256 573d7ee66dbb84e8eef9609b7f1ce3913659521a4895fb92c2731b73d7de82ab)

---

## SATraj-OS

Desktop computer-use trajectories with per-step screenshots and success, safety and attack labels, split into capability runs, safe-completion and refusal runs, and a legacy RiOSWorld-derived safety archive.

- Catalog URL: https://awesomecua.com/resources/url-73b9b17648ea7af7aa8f/
- Original source: https://huggingface.co/datasets/AI45Research/SATraj-OS
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop
- Topics: data-generation, safety-security, imitation-learning
- Evidence checked: 2026-10-18T11:15:59Z
- ID: url:73b9b17648ea7af7aa8f

### Limitations

The ungated Hub repository (revision 74deb768) publishes trajectories.jsonl files with zipped or tarred step screenshots in three configs: Capability (tasks from SCOPE-Gen), Safety-v2 (safe completions and refusals on attack-injected Capability tasks) and a legacy Safety archive generated through RiOSWorld rollouts that keeps risky outcomes. Each record has chat-format messages whose assistant turns hold an action description and a coordinate action, plus success, safety, reward and attack fields. The card declares Apache-2.0 for the data; screenshots show third-party desktop applications whose own terms are not addressed. Thunderbird and VLC capability files are present outside the capability config. The Safactory report (arXiv 2605.06230, v2) describes SATraj-OS as produced with its OSGym environment and reports 10,496 trajectories and 158,196 steps. That paper is not yet in the retained archive, so no paper relation is recorded.

- Record JSON: https://awesomecua.com/resources/url-73b9b17648ea7af7aa8f/record.json

### Structured profile

- Formats: JSONL, ZIP image archives, tar.gz image archives
- Modalities: screenshots, instructions, actions, action descriptions
- Splits: capability/train, safety/train, safety_v2/train
- Supervision: computer-use trajectories, task-success labels, safety-outcome labels, safe-refusal examples

#### Count observations

- 4,344 trajectories — Capability set (reported; source: https://huggingface.co/datasets/AI45Research/SATraj-OS/raw/main/README.md)
- 68,140 interaction steps — Capability set (reported; source: https://huggingface.co/datasets/AI45Research/SATraj-OS/raw/main/README.md)
- 541 trajectories — Safety-v2 set (reported; source: https://huggingface.co/datasets/AI45Research/SATraj-OS/raw/main/README.md)
- 3,486 interaction steps — Safety-v2 set (reported; source: https://huggingface.co/datasets/AI45Research/SATraj-OS/raw/main/README.md)
- 6,152 trajectories — legacy Safety archive (reported; source: https://huggingface.co/datasets/AI45Research/SATraj-OS/raw/main/README.md)
- 88,496 interaction steps — legacy Safety archive (reported; source: https://huggingface.co/datasets/AI45Research/SATraj-OS/raw/main/README.md)

Counts are publisher-reported on the card. The card's headline 4,885 trajectories and 71,626 steps cover Capability plus Safety-v2 only. The Safactory report's 10,496 trajectories match Capability plus the legacy Safety archive, but its 158,196 steps do not equal the card's step totals for those sets. A trajectory is a multi-step episode; screenshot counts use a different unit.

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/AI45Research/SATraj-OS/raw/main/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/AI45Research/SATraj-OS/raw/main/README.md (retrieved 2026-10-18T11:15:59Z; SHA-256 2e23775770af343f07319036f671ad5561ec387fcbcc2f7ea9199bf90494d977)
- https://huggingface.co/api/datasets/AI45Research/SATraj-OS (retrieved 2026-10-18T11:16:00Z; SHA-256 9afd95cd02de90cb4fab79a80810f5858409128e23a19b6913b79571ea5766f5)
- https://arxiv.org/html/2605.06230v2 (retrieved 2026-10-18T11:16:01Z; SHA-256 f2b9696b13f7052a31f460675dd19e406485816dd284892378c2e281ec3d3d16)
- https://huggingface.co/datasets/AI45Research/SATraj-OS/raw/main/README.md (retrieved 2026-10-18T11:15:59Z; SHA-256 2e23775770af343f07319036f671ad5561ec387fcbcc2f7ea9199bf90494d977)

---

## ScienceBoard evaluation trajectories

Archives of ScienceBoard agent evaluation runs, separated by agent configuration and screenshot, accessibility-tree or set-of-marks observation mode.

- Catalog URL: https://awesomecua.com/resources/url-4784f63cd7117f64a2a3/
- Original source: https://huggingface.co/datasets/OS-Copilot/ScienceBoard-Traj
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: evaluation, science, workflow
- Evidence checked: 2026-10-17T04:07:19Z
- ID: url:4784f63cd7117f64a2a3

### Limitations

The manifest exposes six ZIP archives but no README card or data-license declaration. The official project announces evaluation-result trajectories.

- Record JSON: https://awesomecua.com/resources/url-4784f63cd7117f64a2a3/record.json

### Structured profile

- Formats: ZIP
- Modalities: screenshots, accessibility trees, text
- Splits: not recorded
- Supervision: evaluation rollout logs

#### Count observations

No count recorded.

Observation modes follow publisher archive labels. No count or training-use permission is inferred.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/OS-Copilot/ScienceBoard-Traj (retrieved 2026-10-17T04:07:19Z; SHA-256 0a97233bd9132fdddc6ddb26fd3cf9f2af06ae086429f367a61cfab0c16c4f44)
- https://raw.githubusercontent.com/OS-Copilot/ScienceBoard/HEAD/README.md (retrieved 2026-10-16T06:35:58Z; SHA-256 4c3fe93aa740dbf4a279a246ddd836f2590a2a36f39b820abe166e38cb484577)
- https://huggingface.co/OS-Copilot/ScienceBoard-Env/raw/main/README.md (retrieved 2026-10-17T04:07:19Z; SHA-256 8ee436f67e708bb917992764bc60a017c9db2edb21bdb99356b35c69f73724d7)
- https://huggingface.co/api/datasets/OS-Copilot/ScienceBoard-Traj (retrieved 2026-10-17T04:07:19Z; SHA-256 0a97233bd9132fdddc6ddb26fd3cf9f2af06ae086429f367a61cfab0c16c4f44)

---

## Two-Box Judge GUI Dataset

Training data for BAMI's local correction model: pairs of cropped GUI screenshots that each highlight one candidate box, with a click command and an automatic label for the box that fits it.

- Catalog URL: https://awesomecua.com/resources/url-e7c3d3d49bf977b49996/
- Original source: https://huggingface.co/datasets/THU-BoZhang/two-box-judge-gui
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web, desktop, windows, macos
- Topics: grounding, data-generation
- Evidence checked: 2026-10-18T15:35:11Z
- ID: url:e7c3d3d49bf977b49996

### Limitations

In each sample, the first crop marks the grounding model's initial box and the second the box found after masking and regrounding; both are crops around the candidate. Labels come from IoU of at least 0.5 or a center point inside the ground-truth box, with box 1 chosen when both or neither qualify, so the classes are imbalanced. The card names GUIAct web data and an unnamed Windows/macOS desktop set as sources. The 12,849-sample validation split that the card and dataset_infos.json report is not in the repository at revision a09c08da, although the bundled loader expects a validation folder. Apache-2.0 is the card's data declaration and does not settle rights in the upstream screenshots. Appendix C.3 of the BAMI paper (v1 HTML) describes training its LoRA Qwen3-VL-8B corrector on 128,487 such samples.

- Record JSON: https://awesomecua.com/resources/url-e7c3d3d49bf977b49996/record.json

### Structured profile

- Formats: Parquet metadata, PNG images
- Modalities: cropped GUI screenshots with a highlighted candidate box, natural-language click commands
- Splits: train
- Supervision: automatically derived choice between two candidate boxes against ground truth

#### Count observations

- 115,638 two-box samples — train/metadata.parquet at revision a09c08da (106,350 labeled box 1, 9,288 labeled box 2) (computed) (computed; source: https://huggingface.co/datasets/THU-BoZhang/two-box-judge-gui/resolve/a09c08daed473ad1154414021a3d724d68deeb37/train/metadata.parquet)
- 12,849 two-box samples — validation split as reported; no validation files at revision a09c08da (reported; source: https://huggingface.co/datasets/THU-BoZhang/two-box-judge-gui/raw/a09c08daed473ad1154414021a3d724d68deeb37/dataset_infos.json)
- 128,487 two-box samples — train plus validation as reported by dataset_infos.json and the card (reported; source: https://huggingface.co/datasets/THU-BoZhang/two-box-judge-gui/raw/a09c08daed473ad1154414021a3d724d68deeb37/dataset_infos.json)

Each sample has two image files, so image and sample counts differ. The train metadata has 27,934 distinct command strings; per its original-path columns, 98,369 train rows come from a desktop-named source folder and 17,269 from another folder. The card's per-source figures (about 70K GUIAct and 423K desktop samples) describe the pool before balancing; this release is the balanced set.

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/THU-BoZhang/two-box-judge-gui/raw/a09c08daed473ad1154414021a3d724d68deeb37/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/THU-BoZhang/two-box-judge-gui/raw/a09c08daed473ad1154414021a3d724d68deeb37/README.md (retrieved 2026-10-18T15:35:11Z; SHA-256 962d7047eaefbd0ea93a9240bd729dae0c042bba27d41a2eb0a8289fcd3bab99)
- https://huggingface.co/api/datasets/THU-BoZhang/two-box-judge-gui/revision/a09c08daed473ad1154414021a3d724d68deeb37 (retrieved 2026-10-18T15:33:04Z; SHA-256 54e36fe240316a7266800b025607da2d10a4aff3f1bcfc814d956a6f1bee4dd5)
- https://huggingface.co/datasets/THU-BoZhang/two-box-judge-gui/raw/a09c08daed473ad1154414021a3d724d68deeb37/dataset_infos.json (retrieved 2026-10-18T15:33:04Z; SHA-256 96259003534aa7368a090f5c71b8da188c0ffbacf5af04ae52f3252b3a189549)
- https://huggingface.co/datasets/THU-BoZhang/two-box-judge-gui/resolve/a09c08daed473ad1154414021a3d724d68deeb37/train/metadata.parquet (retrieved 2026-10-18T15:33:04Z; SHA-256 fabf1525a1e7ad6eac27f6c3c67a24ea1e5881b39cb1e94745a1455558c5ae91)
- https://arxiv.org/html/2605.06664v1 (retrieved 2026-10-18T15:33:04Z; SHA-256 2b2685f4f68842335f3357e1f1670c00a1183ad7c629cc43fe21bca40eb1ecfb)
- https://huggingface.co/datasets/THU-BoZhang/two-box-judge-gui/raw/a09c08daed473ad1154414021a3d724d68deeb37/README.md (retrieved 2026-10-18T15:35:11Z; SHA-256 962d7047eaefbd0ea93a9240bd729dae0c042bba27d41a2eb0a8289fcd3bab99)

---

## UEyes

UEyes is an eye-tracking dataset of 62 participants viewing 1,980 UI screenshots across webpages, desktop interfaces, mobile apps, and posters.

- Catalog URL: https://awesomecua.com/resources/github-yuejiang-nj-ueyes-chi2023/
- Original source: https://github.com/YueJiang-nj/UEyes-CHI2023
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform, web, desktop, android
- Topics: screen-understanding, ui-design
- Evidence checked: 2026-11-04T13:12:46Z
- ID: github:yuejiang-nj/ueyes-chi2023

- Record JSON: https://awesomecua.com/resources/github-yuejiang-nj-ueyes-chi2023/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/YueJiang-nj/UEyes-CHI2023/HEAD/README.md (retrieved 2026-11-04T13:12:46Z; SHA-256 f4320fa807c89af7fc4a7181a0f90053b09156fd2e5d57e0ce5e206233a07c6a)

---

## UI-Ins

Treats grounding instructions as multiple reasoning perspectives, releasing a data pipeline, training code and UI-Ins-7B and 32B models trained by SFT on synthesized instructions, then RL.

- Catalog URL: https://awesomecua.com/resources/github-alibaba-ui-ins/
- Original source: https://github.com/alibaba/UI-Ins
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: data-generation
- Evidence checked: 2026-10-16T06:36:02Z
- ID: github:alibaba/ui-ins

- Record JSON: https://awesomecua.com/resources/github-alibaba-ui-ins/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/alibaba/UI-Ins/HEAD/README.md (retrieved 2026-10-16T06:36:02Z; SHA-256 e06aedcb1760867470afeb27d4eb4cdde9a3b76b9d55af183047df3c0ae2b71c)

---

## UI-Simulator_android_data

Synthetic Android agent training data from UI-Simulator: prompts pairing a goal and a simulated UI element list with next-action responses, in RAG-free, RAG-based and two UI-Simulator-Grow splits.

- Catalog URL: https://awesomecua.com/resources/url-d32dfe60eff4b87c1d05/
- Original source: https://huggingface.co/datasets/UI-Simulator/UI-Simulator_android_data
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: data-generation, mobile-navigation, action-prediction
- Evidence checked: 2026-11-10T03:01:14Z
- ID: url:d32dfe60eff4b87c1d05

### Limitations

Four CSV splits with Arrow copies; license MIT per the card. The RAG-free split has 6,658 rows per the Hub rows API, and the action space covers click, input_text, open_app, scroll, navigate_back and stop.

- Record JSON: https://awesomecua.com/resources/url-d32dfe60eff4b87c1d05/record.json

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/UI-Simulator/UI-Simulator_android_data
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/UI-Simulator/UI-Simulator_android_data (retrieved 2026-11-10T03:01:14Z; SHA-256 72dbd84ef07b8fcfa963f0e426a3bc0f222d8a185696ab18da5bbe0a84d8b80e)
- https://huggingface.co/api/datasets/UI-Simulator/UI-Simulator_android_data (retrieved 2026-11-10T03:01:14Z; SHA-256 72dbd84ef07b8fcfa963f0e426a3bc0f222d8a185696ab18da5bbe0a84d8b80e)

---

## UICrit

Mobile-interface critiques and quality ratings with region coordinates and RICO screen references, including a larger three-annotator release than the original paper dataset.

- Catalog URL: https://awesomecua.com/resources/github-google-research-datasets-uicrit/
- Original source: https://github.com/google-research-datasets/uicrit
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: screen-understanding, ui-design, evaluation
- Evidence checked: 2026-10-17T02:02:45Z
- ID: github:google-research-datasets/uicrit

### Limitations

The published CSV contains critique text, normalized boxes, ratings and RICO IDs; screenshots are referenced through RICO. The README explicitly licenses the work CC-BY-4.0. Its current 1,000-screen, 11,344-critique release differs from the original paper population. The README cites an ACM DOI. Its README establishes mobile interfaces without naming an operating system.

- Record JSON: https://awesomecua.com/resources/github-google-research-datasets-uicrit/record.json

### Structured profile

- Formats: CSV
- Modalities: text, bounding boxes, quality ratings
- Splits: not recorded
- Supervision: design critique, region localization, quality rating

#### Count observations

- 1,000 mobile UI screens — current three-annotator release (reported; source: https://raw.githubusercontent.com/google-research-datasets/uicrit/HEAD/README.md)
- 11,344 design critiques — current three-annotator release (reported; source: https://raw.githubusercontent.com/google-research-datasets/uicrit/HEAD/README.md)

Publisher-reported current release, separate from the smaller original-paper population. Screenshot pixels are obtained through referenced RICO IDs.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/google-research-datasets/uicrit/HEAD/README.md (retrieved 2026-10-17T02:02:45Z; SHA-256 345ff7003120f146016741099dd57b9b1a9ffc54ce1fc90f4d16d61e31d379e6)
- https://api.github.com/repos/google-research-datasets/uicrit (retrieved 2026-10-17T02:02:45Z; SHA-256 5579bbbc622a2f9fa1f77b509c1ece17af023b8c14b53aa48dcc41288a5852f2)
- https://api.github.com/repos/google-research-datasets/uicrit/contents (retrieved 2026-10-17T02:02:45Z; SHA-256 8e790a53de8c40aa14f9e49aebf42b077e6a172a6841f38c7c6851af57b0617a)

---

## UiPad

A macOS UI dataset with 352 screens from 63 applications. It pairs screenshots with available accessibility trees and questions about interface elements and click locations.

- Catalog URL: https://awesomecua.com/resources/url-3ac3ccfb23fe13adf428/
- Original source: https://huggingface.co/datasets/MacPaw/uipad
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, macos
- Topics: screen-understanding, grounding, evaluation
- Evidence checked: 2026-11-09T05:05:14Z
- ID: url:3ac3ccfb23fe13adf428

### Limitations

The card says 68% of screens have JSON accessibility trees and describes numeric, yes/no, text and coordinate questions. It declares an MIT license.

- Record JSON: https://awesomecua.com/resources/url-3ac3ccfb23fe13adf428/record.json

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/MacPaw/uipad
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/MacPaw/uipad (retrieved 2026-11-09T05:05:14Z; SHA-256 9468b853764a07bc936cc38cb2814c64a0166838b7a0006a6e032502be7510f3)
- https://huggingface.co/api/datasets/MacPaw/uipad (retrieved 2026-11-09T05:05:14Z; SHA-256 9468b853764a07bc936cc38cb2814c64a0166838b7a0006a6e032502be7510f3)
- https://huggingface.co/api/datasets/MacPaw/uipad (retrieved 2026-11-09T05:25:51Z; SHA-256 9468b853764a07bc936cc38cb2814c64a0166838b7a0006a6e032502be7510f3)
- https://huggingface.co/api/datasets/macpaw-research/UiPad (retrieved 2026-11-09T05:25:52Z; SHA-256 9468b853764a07bc936cc38cb2814c64a0166838b7a0006a6e032502be7510f3)

---

## Uni-GUI-Desktop-1

Desktop trajectories from the UI-MOPD training data, collected in OSWorld environments: 2,685 tasks across 10 app categories with step screenshots, reasoning traces, normalized actions and pyautogui code.

- Catalog URL: https://awesomecua.com/resources/url-20f7cdee10b0dd70815f/
- Original source: https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Desktop-1
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: data-generation, imitation-learning, cross-app
- Evidence checked: 2026-10-18T15:41:52Z
- ID: url:20f7cdee10b0dd70815f

### Limitations

The UI-MOPD paper builds Uni-GUI from self-collected desktop and mobile trajectories plus cleaned OpenCUA and OpenMobile trajectories; its composition table rounds the self-collected desktop part to about 7K trajectories and 95K steps, so this repository (2,685 trajectories and about 36K steps per the card) holds a portion of it. Per the paper, desktop queries were generated with Kimi-K2.6 from functional points of initialized OSWorld environments, Kimi-K2.6 produced the rollouts and Gemini-3.1-Pro cleaned them; these are model-generated demonstrations. Every folder name ends in an OSWorld task ID: a script over the manifest finds 245 distinct IDs, all present in OSWorld's test_all.json, with up to 19 trajectories each. Two opened task.json files for the same OSWorld task label it 'OSWorld'; one repeats that task's instruction verbatim and the other paraphrases it, so the data overlaps OSWorld's test tasks. Both carry verified: false and task_completed: true, while the card's example shows verified: true; 160 folders also hold a result.txt. Linux is inferred from the paper's use of OSWorld environments and the Linux terminal and /home/user paths in the opened queries. Apache-2.0 is the card's declaration for the data. Only two task.json files and one result.txt were opened.

- Record JSON: https://awesomecua.com/resources/url-20f7cdee10b0dd70815f/record.json

### Structured profile

- Formats: per-trajectory folders with task.json and PNG screenshots
- Modalities: screenshots, task queries, reasoning traces, actions
- Splits: not recorded
- Supervision: teacher-model GUI trajectories cleaned by a filtering pipeline, structured reasoning traces, normalized desktop actions with pyautogui code

#### Count observations

- 2,685 trajectories — Uni-GUI-Desktop-1 card statistics (reported; source: https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Desktop-1/raw/92ef5917cd46a899a13461532fdda9e5a8d3bc62/README.md)
- ≈ 36,000 steps — Uni-GUI-Desktop-1 card statistics (reported; source: https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Desktop-1/raw/92ef5917cd46a899a13461532fdda9e5a8d3bc62/README.md)
- 10 application categories — Uni-GUI-Desktop-1 card statistics (reported; source: https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Desktop-1/raw/92ef5917cd46a899a13461532fdda9e5a8d3bc62/README.md)
- 2,685 task.json trajectory files — Hub manifest at revision 92ef5917 (computed) (computed; source: https://huggingface.co/api/datasets/UI-MOPD/Uni-GUI-Desktop-1/revision/92ef5917cd46a899a13461532fdda9e5a8d3bc62)
- 38,283 PNG screenshot files — Hub manifest at revision 92ef5917 (computed) (computed; source: https://huggingface.co/api/datasets/UI-MOPD/Uni-GUI-Desktop-1/revision/92ef5917cd46a899a13461532fdda9e5a8d3bc62)
- 245 distinct OSWorld task IDs in trajectory folder names — Hub manifest at revision 92ef5917, matched against OSWorld test_all.json (computed) (computed; source: https://huggingface.co/api/datasets/UI-MOPD/Uni-GUI-Desktop-1/revision/92ef5917cd46a899a13461532fdda9e5a8d3bc62)

Trajectories, steps, application categories, files and task IDs are different units and are counted separately. The task.json count from the manifest matches the card's trajectory count; screenshot files were counted from the manifest. Coordinates are normalized to [0, 999] on a 1920x1080 screen. No train/test split is declared.

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Desktop-1/raw/92ef5917cd46a899a13461532fdda9e5a8d3bc62/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Desktop-1/raw/92ef5917cd46a899a13461532fdda9e5a8d3bc62/README.md (retrieved 2026-10-18T15:41:52Z; SHA-256 b42140e6959b7265a2594fe4aabb79cd6f79b48ab6e59c70f018d5ddd011ef63)
- https://huggingface.co/api/datasets/UI-MOPD/Uni-GUI-Desktop-1/revision/92ef5917cd46a899a13461532fdda9e5a8d3bc62 (retrieved 2026-10-18T15:41:30Z; SHA-256 10e90be7f9d76804ea44a39ea33c0d3d6f121fc2cb23d0d5eb0ffa0e3f92a6e4)
- https://arxiv.org/html/2607.04425v1 (retrieved 2026-10-18T15:41:30Z; SHA-256 7fc33cf335f41716d5030d562cd6b53323a32f81551caa130afa43043509511b)
- https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Desktop-1/raw/92ef5917cd46a899a13461532fdda9e5a8d3bc62/47a8cd34-02ce9a50-7af2-47ed-8596-af0c230501f8/task.json (retrieved 2026-10-18T15:41:30Z; SHA-256 f6becd79ec187bd6d6ea2ba3a5521c6b80d6b4b5e5d6efb2e0422ef0f369578a)
- https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Desktop-1/raw/92ef5917cd46a899a13461532fdda9e5a8d3bc62/0c267f5e-02ce9a50-7af2-47ed-8596-af0c230501f8/task.json (retrieved 2026-10-18T15:41:30Z; SHA-256 7af0ffc4d28e344dd6fddd670121573d027b66b72d420fe49db343b35a68bee5)
- https://raw.githubusercontent.com/xlang-ai/OSWorld/b138d348256078fa634fc3b73567a7337c793e6b/evaluation_examples/test_all.json (retrieved 2026-10-18T15:41:30Z; SHA-256 9ebc5187cbd727ef26c24626820076b102fff812863c640a67c467fea9542ab5)
- https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Desktop-1/raw/92ef5917cd46a899a13461532fdda9e5a8d3bc62/README.md (retrieved 2026-10-18T15:41:52Z; SHA-256 b42140e6959b7265a2594fe4aabb79cd6f79b48ab6e59c70f018d5ddd011ef63)

---

## Uni-GUI-Mobile

Self-collected phone trajectories from the UI-MOPD training data: 871 tasks across 10 app categories, each with step screenshots, reasoning traces, normalized tap, swipe and type actions, and adb commands.

- Catalog URL: https://awesomecua.com/resources/url-93278fa5b9e6bd0cbcef/
- Original source: https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Mobile
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: data-generation, mobile-navigation, imitation-learning
- Evidence checked: 2026-10-18T12:32:23Z
- ID: url:93278fa5b9e6bd0cbcef

### Limitations

The UI-MOPD paper builds Uni-GUI from self-collected desktop and mobile trajectories plus cleaned OpenCUA and OpenMobile trajectories; this repository is the self-collected mobile part (the paper's composition table rounds it to about 1K trajectories and 17K steps, the card reports about 14K steps). Per the paper, teacher models produced the rollouts, an automatic judge kept only successful ones, and reasoning traces were rewritten into one format. The card says only 'mobile'; Android is inferred from the adb commands in its step records and the paper's use of AndroidWorld and MobileWorld environments for mobile queries. Apache-2.0 is the card's declaration for the data.

- Record JSON: https://awesomecua.com/resources/url-93278fa5b9e6bd0cbcef/record.json

### Structured profile

- Formats: per-trajectory folders with task.json and PNG screenshots
- Modalities: screenshots, task queries, reasoning traces, actions
- Splits: not recorded
- Supervision: teacher-model GUI trajectories filtered by an automatic success judge, structured reasoning traces, normalized mobile actions with adb commands

#### Count observations

- 871 trajectories — Uni-GUI-Mobile card statistics (reported; source: https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Mobile/raw/45244387a3c284810894bc2be974b28014dcf838/README.md)
- ≈ 14,000 steps — Uni-GUI-Mobile card statistics (reported; source: https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Mobile/raw/45244387a3c284810894bc2be974b28014dcf838/README.md)
- 10 app categories — Uni-GUI-Mobile card statistics (reported; source: https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Mobile/raw/45244387a3c284810894bc2be974b28014dcf838/README.md)
- 871 task.json trajectory files — Hub manifest at revision 45244387 (computed) (computed; source: https://huggingface.co/api/datasets/UI-MOPD/Uni-GUI-Mobile/revision/45244387a3c284810894bc2be974b28014dcf838)
- 14,275 PNG screenshot files — Hub manifest at revision 45244387 (computed) (computed; source: https://huggingface.co/api/datasets/UI-MOPD/Uni-GUI-Mobile/revision/45244387a3c284810894bc2be974b28014dcf838)

Trajectories, steps, app categories and files are different units and are counted separately. The task.json count from the manifest matches the card's trajectory count; screenshot files were counted from the manifest. Coordinates are normalized to [0, 999] on a 1080x2400 screen. No train/test split is declared.

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Mobile/raw/45244387a3c284810894bc2be974b28014dcf838/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Mobile/raw/45244387a3c284810894bc2be974b28014dcf838/README.md (retrieved 2026-10-18T12:32:23Z; SHA-256 5a71bb44474b2544510d62e30112412096b6ffe0f9c2f5abf8e49bf8273bc088)
- https://huggingface.co/api/datasets/UI-MOPD/Uni-GUI-Mobile/revision/45244387a3c284810894bc2be974b28014dcf838 (retrieved 2026-10-18T12:32:02Z; SHA-256 b3ae1be79448b6a2901630def28957fe31e4a16da9ed09c0e4d4e1180faef392)
- https://arxiv.org/html/2607.04425v1 (retrieved 2026-10-18T12:32:02Z; SHA-256 7fc33cf335f41716d5030d562cd6b53323a32f81551caa130afa43043509511b)
- https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Mobile/raw/45244387a3c284810894bc2be974b28014dcf838/README.md (retrieved 2026-10-18T12:32:23Z; SHA-256 5a71bb44474b2544510d62e30112412096b6ffe0f9c2f5abf8e49bf8273bc088)

---

## Uni-GUI-OpenMobile

Android trajectories on 19 open-source apps from the UI-MOPD training data, collected via AndroidWorld: 2,640 tasks with step screenshots, reasoning traces and normalized click, swipe, type and answer actions.

- Catalog URL: https://awesomecua.com/resources/url-66a0adb854eff694965d/
- Original source: https://huggingface.co/datasets/UI-MOPD/Uni-GUI-OpenMobile
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: data-generation, mobile-navigation, imitation-learning
- Evidence checked: 2026-10-18T12:34:20Z
- ID: url:66a0adb854eff694965d

### Limitations

The UI-MOPD paper's Uni-GUI combines self-collected trajectories with cleaned public OpenCUA and OpenMobile (arxiv:2604.15093) trajectories, and its composition table lists a mobile OpenMobile part of about 2.7K trajectories and 35K steps; this repository's name and 2,640 trajectories match that part, though its card describes the data only as collected on open-source apps via AndroidWorld and reports about 25.9K steps. Episode IDs carry split1 to split4 prefixes. Every folder also has a result.json (a sampled one holds the goal and raw per-step model responses with tool calls), and 1,913 folders have a metadata.json. Apache-2.0 is the card's declaration and does not settle rights to the upstream trajectories or app content.

- Record JSON: https://awesomecua.com/resources/url-66a0adb854eff694965d/record.json

### Structured profile

- Formats: per-trajectory folders with task.json, result.json and PNG screenshots
- Modalities: screenshots, task queries, reasoning traces, actions
- Splits: not recorded
- Supervision: agent trajectories cleaned and normalized for supervised training, structured reasoning traces, normalized mobile actions

#### Count observations

- 2,640 trajectories — Uni-GUI-OpenMobile card statistics (reported; source: https://huggingface.co/datasets/UI-MOPD/Uni-GUI-OpenMobile/raw/774eb20f97724bf64faa9e66b1572f05b1688e38/README.md)
- ≈ 25,900 steps — Uni-GUI-OpenMobile card statistics (reported; source: https://huggingface.co/datasets/UI-MOPD/Uni-GUI-OpenMobile/raw/774eb20f97724bf64faa9e66b1572f05b1688e38/README.md)
- 19 open-source Android apps — Uni-GUI-OpenMobile card statistics (reported; source: https://huggingface.co/datasets/UI-MOPD/Uni-GUI-OpenMobile/raw/774eb20f97724bf64faa9e66b1572f05b1688e38/README.md)
- 2,640 task.json trajectory files — Hub manifest at revision 774eb20f (computed) (computed; source: https://huggingface.co/api/datasets/UI-MOPD/Uni-GUI-OpenMobile/revision/774eb20f97724bf64faa9e66b1572f05b1688e38)
- 34,344 PNG screenshot files — Hub manifest at revision 774eb20f (computed) (computed; source: https://huggingface.co/api/datasets/UI-MOPD/Uni-GUI-OpenMobile/revision/774eb20f97724bf64faa9e66b1572f05b1688e38)

Trajectories, steps, apps and files are different units and are counted separately. The task.json count from the manifest matches the card's trajectory count, and the card's per-app counts sum to 2,640 trajectories. Screenshot files were counted from the manifest. Coordinates are normalized to [0, 1000] on a 1080x2400 screen. No train/test split is declared; the split1 to split4 episode prefixes (727, 603, 793 and 517 trajectories) are not documented as splits.

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/UI-MOPD/Uni-GUI-OpenMobile/raw/774eb20f97724bf64faa9e66b1572f05b1688e38/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/UI-MOPD/Uni-GUI-OpenMobile/raw/774eb20f97724bf64faa9e66b1572f05b1688e38/README.md (retrieved 2026-10-18T12:34:20Z; SHA-256 3ac1e8c3b57cf43297a1b4487a621fc8920c0983d62ffa13e468d3a5a3dfcf72)
- https://huggingface.co/api/datasets/UI-MOPD/Uni-GUI-OpenMobile/revision/774eb20f97724bf64faa9e66b1572f05b1688e38 (retrieved 2026-10-18T12:33:58Z; SHA-256 78a2b80c6ad0d44016c7858c47b6871f4de3cfb880dd18ffff446629b0efd1ae)
- https://arxiv.org/html/2607.04425v1 (retrieved 2026-10-18T12:32:02Z; SHA-256 7fc33cf335f41716d5030d562cd6b53323a32f81551caa130afa43043509511b)
- https://huggingface.co/datasets/UI-MOPD/Uni-GUI-OpenMobile/raw/774eb20f97724bf64faa9e66b1572f05b1688e38/split1_1004_ExpenseAddMultipleFromGallery/result.json (retrieved 2026-10-18T12:33:58Z; SHA-256 cd0e9164c57baa4e9d2dc1854337fed09e961cf710ee3a69d52fe1623cca6f9e)
- https://huggingface.co/datasets/UI-MOPD/Uni-GUI-OpenMobile/raw/774eb20f97724bf64faa9e66b1572f05b1688e38/README.md (retrieved 2026-10-18T12:34:20Z; SHA-256 3ac1e8c3b57cf43297a1b4487a621fc8920c0983d62ffa13e468d3a5a3dfcf72)

---

## VideoCAD data

CAD screen recordings paired with action logs and target model images for studying precise interface control and long-horizon visual imitation.

- Catalog URL: https://awesomecua.com/resources/url-2b5dead3172c0b70da7e/
- Original source: https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/WX8PCK
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: grounding, imitation-learning, video
- Evidence checked: 2026-10-17T02:03:20Z
- ID: url:2b5dead3172c0b70da7e

### Limitations

Dataverse reports a RELEASED version 5.0 with 261 unrestricted files and a CC0-1.0 dataset declaration. Archive counts, video counts and trajectory counts are different units. The author repository documents the action and video formats, and Section 3 of the v2 paper identifies the recorded Onshape browser interface. No archives or training samples were downloaded; operating-system coverage is unspecified.

- Record JSON: https://awesomecua.com/resources/url-2b5dead3172c0b70da7e/record.json

### Structured profile

- Formats: ZIP, MP4, JSON, PNG
- Modalities: video, UI action logs, target CAD images
- Splits: not recorded
- Supervision: timestamped UI actions, target model images

#### Count observations

- > 41,000 video recordings — VideoCAD published collection (reported; source: https://dataverse.harvard.edu/api/datasets/:persistentId/?persistentId=doi:10.7910/DVN/WX8PCK)

The reported video total is distinct from the Dataverse package-file count. The exact-version paper identifies the recorded interface as browser-based Onshape.

### License declarations

- code: not recorded
- data: CC0 1.0 — https://dataverse.harvard.edu/api/datasets/:persistentId/?persistentId=doi:10.7910/DVN/WX8PCK
- document: not recorded
- weights: not recorded

### Primary evidence

- https://dataverse.harvard.edu/api/datasets/:persistentId/?persistentId=doi:10.7910/DVN/WX8PCK (retrieved 2026-10-17T02:03:20Z; SHA-256 f67df0a4422a0484aaa2f93cd185b7000070d2a88d919d9ef995587f5e724007)
- https://raw.githubusercontent.com/ghadinehme/VideoCAD/2d69eeaf0ac44210c76dcab2d08b4d4610be236c/README.md (retrieved 2026-10-18T12:02:53.536297+00:00; SHA-256 cbb08803922b4b7736979ca0a5fe552b111fcd428fa9317401bc090b14bb4e54)
- https://arxiv.org/html/2505.24838v2 (retrieved 2026-10-18T12:02:34.311949+00:00; SHA-256 a303d95a811331cd6ee23b0340f1b9ef2dd996835bfbc66656a871ff94eead50)
- https://dataverse.harvard.edu/api/datasets/:persistentId/?persistentId=doi:10.7910/DVN/WX8PCK (retrieved 2026-10-17T02:03:20Z; SHA-256 f67df0a4422a0484aaa2f93cd185b7000070d2a88d919d9ef995587f5e724007)

---

## VideoCUA

Expert desktop computer-use demonstrations from CUA-Suite: 30 fps screen recordings with millisecond-timestamped mouse and keyboard action logs for about 10K tasks in 87 applications.

- Catalog URL: https://awesomecua.com/resources/url-78adf6919bdbce42bc24/
- Original source: https://huggingface.co/datasets/ServiceNow/VideoCUA
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop
- Topics: video, recording, imitation-learning, action-prediction, data-generation
- Evidence checked: 2026-10-18T15:36:02Z
- ID: url:78adf6919bdbce42bc24

### Limitations

At revision 6ecc530d raw_data/ holds one ZIP archive per application, 87 in total and about 26.1 GB. The card describes each archive as task folders with an action_log.json (instruction, platform and timestamped actions) and a 1920x1080 MP4 recording with its metadata; each action carries a groundcua_id that the card says identifies the matching annotated GroundCUA screenshot. Frame extraction into trajectories and LLM-written chain-of-thought steps come from a pipeline in the GroundCUA GitHub repository; this release holds raw recordings and logs as source material. The card names no operating system. The card's metadata declares MIT; its linked LICENSE file is absent from the repository. Task, hour and frame figures are publisher-reported.

- Record JSON: https://awesomecua.com/resources/url-78adf6919bdbce42bc24/record.json

### Structured profile

- Formats: ZIP archives of MP4 video and JSON
- Modalities: screen recordings, action logs, instructions
- Splits: not recorded
- Supervision: human expert task demonstrations, timestamped mouse and keyboard actions, task instructions

#### Count observations

- ≈ 10,000 tasks — VideoCUA corpus as stated on the card (reported; source: https://huggingface.co/datasets/ServiceNow/VideoCUA/raw/6ecc530df848f916bf0d195c66823ef8363abb93/README.md)
- ≈ 55 hours of 30 fps screen recording — VideoCUA corpus as stated on the card (reported; source: https://huggingface.co/datasets/ServiceNow/VideoCUA/raw/6ecc530df848f916bf0d195c66823ef8363abb93/README.md)
- ≈ 6,000,000 video frames — VideoCUA corpus as stated on the card (reported; source: https://huggingface.co/datasets/ServiceNow/VideoCUA/raw/6ecc530df848f916bf0d195c66823ef8363abb93/README.md)
- 87 per-application ZIP archives — raw_data/ at revision 6ecc530d (computed) (computed; source: https://huggingface.co/api/datasets/ServiceNow/VideoCUA/tree/6ecc530df848f916bf0d195c66823ef8363abb93/raw_data)

Tasks, hours, frames and archives are different units and are counted separately. The archive count is computed from the Hub tree listing; the card also reports 87 applications. No train/test split is declared.

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/ServiceNow/VideoCUA/raw/6ecc530df848f916bf0d195c66823ef8363abb93/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/ServiceNow/VideoCUA/raw/6ecc530df848f916bf0d195c66823ef8363abb93/README.md (retrieved 2026-10-18T15:36:02Z; SHA-256 41b871f55b233cc8424ff55fa4294a66fd2f88fe1dbce9dea924fd651ae1b778)
- https://huggingface.co/api/datasets/ServiceNow/VideoCUA?expand%5B%5D=sha&expand%5B%5D=gated&expand%5B%5D=disabled&expand%5B%5D=cardData&expand%5B%5D=lastModified (retrieved 2026-10-18T15:36:02Z; SHA-256 75b4545d65bfb6a101a4624859802a4384e74eba85aacbf6d3f4e395d22ae3d3)
- https://huggingface.co/api/datasets/ServiceNow/VideoCUA/tree/6ecc530df848f916bf0d195c66823ef8363abb93/raw_data (retrieved 2026-10-18T15:36:02Z; SHA-256 fdc432015122390eb89b397ab7031b429ace6d56599ae37ef27a809abb05f254)
- https://huggingface.co/api/datasets/ServiceNow/VideoCUA/tree/6ecc530df848f916bf0d195c66823ef8363abb93 (retrieved 2026-10-18T15:36:03Z; SHA-256 32ffe76e0b63cd91c5b8f44af39630fc390e725061974acc55514d9b1232e87f)
- https://huggingface.co/datasets/ServiceNow/VideoCUA/raw/6ecc530df848f916bf0d195c66823ef8363abb93/README.md (retrieved 2026-10-18T15:36:02Z; SHA-256 41b871f55b233cc8424ff55fa4294a66fd2f88fe1dbce9dea924fd651ae1b778)

---

## VLM-Reasoning-Traces

VLM-Reasoning-Traces releases model outputs comparing base and thinking-enabled vision-language models on AndroidControl, ScreenSpot, and AndroidWorld.

- Catalog URL: https://awesomecua.com/resources/github-llamatouch-vlm-reasoning-traces/
- Original source: https://github.com/LlamaTouch/VLM-Reasoning-Traces
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, evaluation, planning
- Evidence checked: 2026-11-04T13:12:21Z
- ID: github:llamatouch/vlm-reasoning-traces

- Record JSON: https://awesomecua.com/resources/github-llamatouch-vlm-reasoning-traces/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/LlamaTouch/VLM-Reasoning-Traces/HEAD/README.md (retrieved 2026-11-04T13:12:21Z; SHA-256 ace444c823ceaa6c30a25c946828fcf2be8bec5e4f0ce629db816c3fa1a6e946)

---

## WebEvolver SFT data

Two JSONL collections for supervised fine-tuning the WebEvolver agent policy and web world model.

- Catalog URL: https://awesomecua.com/resources/url-e126bbd9729ebdaf05ab/
- Original source: https://huggingface.co/datasets/CognitiveKernel/WebEvolver
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, world-models, imitation-learning
- Evidence checked: 2026-10-18T04:35:17Z
- ID: url:e126bbd9729ebdaf05ab

### Limitations

The card and public manifest identify separate policy-model and world-model JSONL files. The inspected card leaves the row total and complete record schema unstated. MIT is the publisher’s data declaration.

- Record JSON: https://awesomecua.com/resources/url-e126bbd9729ebdaf05ab/record.json

### Structured profile

- Formats: JSONL
- Modalities: not recorded
- Splits: not recorded
- Supervision: agent-policy supervised fine-tuning, web-world-model supervised fine-tuning

#### Count observations

No count recorded.

Two purpose-specific files are released: webevolver_policy_sft.jsonl and webevolver_world_model_sft.jsonl. The files serve policy-model and world-model purposes; their split relationship, modality and example count remain unspecified.

### License declarations

- code: not recorded
- data: MIT — https://huggingface.co/datasets/CognitiveKernel/WebEvolver/raw/13f4f45b359e138a45b1c89bd4e913298c586ca9/README.md
- document: not recorded
- weights: not recorded

- data review: Publisher dataset-card declaration for this release.
  Sources: https://huggingface.co/datasets/CognitiveKernel/WebEvolver/raw/13f4f45b359e138a45b1c89bd4e913298c586ca9/README.md

### Primary evidence

- https://huggingface.co/datasets/CognitiveKernel/WebEvolver/raw/13f4f45b359e138a45b1c89bd4e913298c586ca9/README.md (retrieved 2026-10-18T04:35:17Z; SHA-256 36ccdce12c1b1512ad4b21326c5d0c0379c73e85f0b8150779d43240b54686de)
- https://huggingface.co/api/datasets/CognitiveKernel/WebEvolver (retrieved 2026-10-18T04:33:29Z; SHA-256 cbef3f8037405d311ed9fe8aa620ec3734f91c77ca8f4209fbe98167fb33bee8)
- https://raw.githubusercontent.com/Tencent/SelfEvolvingAgent/HEAD/WebEvolver/README.md (retrieved 2026-10-18T04:27:14Z; SHA-256 447dfa1e52789f7f3f111e9e0d453fb1f9fd8bf2d7b858f28fbe21a2239b4b2e)

---

## WebPRM checklist-generation data

Web-task context, starting observations and action history paired with structured checklists and subgoal analyses for checklist generation.

- Catalog URL: https://awesomecua.com/resources/url-fcc98b149272bbf31b05/
- Original source: https://huggingface.co/datasets/LangAGI-Lab/WebPRMCollection_checklist_generation
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: reward-models, data-generation, web-navigation
- Evidence checked: 2026-10-17T04:01:33Z
- ID: url:fcc98b149272bbf31b05

### Limitations

Five public Parquet shards are present. This collection provides checklist-generation supervision and is distinct from the previously cataloged chosen/rejected preference data. The Hub calls its split test; that label is preserved. No data license is declared.

- Record JSON: https://awesomecua.com/resources/url-fcc98b149272bbf31b05/record.json

### Structured profile

- Formats: Parquet
- Modalities: screenshots, text, action history
- Splits: test
- Supervision: checklist generation, subgoal analysis

#### Count observations

- 3,630 rows — Hub split named test (reported; source: https://huggingface.co/datasets/LangAGI-Lab/WebPRMCollection_checklist_generation/raw/main/README.md)

This is the checklist-generation release. No unique-task count or data permission is inferred.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/LangAGI-Lab/WebPRMCollection_checklist_generation (retrieved 2026-10-17T04:01:33Z; SHA-256 2e4142675f2cb994c21a7620a5188b10147ab03326a2047946886b5916789ec2)
- https://huggingface.co/datasets/LangAGI-Lab/WebPRMCollection_checklist_generation/raw/main/README.md (retrieved 2026-10-17T04:01:33Z; SHA-256 3693cb307065a6ced63a4789a7f592b5eba0ad6a5ffe1a3caf0649decd5cb6e8)
- https://huggingface.co/api/collections/LangAGI-Lab/web-shepherd-advancing-prms-for-reinforcing-web-agents-682b4f4ad607fc27c4dc49e8 (retrieved 2026-10-17T02:45:05Z; SHA-256 647d9e7bdad5fe2c03a8cfcd34d93f3b2bf7c1553b517a4a843bc0113fa47456)
- https://raw.githubusercontent.com/kyle8581/Web-Shepherd/HEAD/README.md (retrieved 2026-10-17T02:44:04Z; SHA-256 07431058d8b9a71b80e75b7a74a40a8346c1503eec240628459cc4d4e2f0802f)
- https://huggingface.co/api/datasets/LangAGI-Lab/WebPRMCollection_checklist_generation (retrieved 2026-10-17T04:01:33Z; SHA-256 2e4142675f2cb994c21a7620a5188b10147ab03326a2047946886b5916789ec2)

---

## WebSRC

WebSRC provides baseline models and processing pipelines for the Web-Based Structural Reading Comprehension dataset over HTML and screenshots.

- Catalog URL: https://awesomecua.com/resources/github-x-lance-websrc-baseline/
- Original source: https://github.com/X-LANCE/WebSRC-Baseline
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: screen-understanding, web-navigation, evaluation
- Evidence checked: 2026-11-04T13:12:43Z
- ID: github:x-lance/websrc-baseline

- Record JSON: https://awesomecua.com/resources/github-x-lance-websrc-baseline/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/X-LANCE/WebSRC-Baseline/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/X-LANCE/WebSRC-Baseline/HEAD/README.md (retrieved 2026-11-04T13:12:43Z; SHA-256 2de9d5b2bd24a3fe11abe41835d249c9b34427548b38e7f0a805045128f2ea27)
- https://raw.githubusercontent.com/X-LANCE/WebSRC-Baseline/HEAD/LICENSE (retrieved 2026-11-04T13:22:35Z; SHA-256 611f5fdb5ad94d56abf287230fdefdcd010aa12eb27fcda436ca82dbc9a0de33)

---

## websrc

websrc is a screenshot-focused WebSRC compilation for answering questions about webpage content and structure. It provides page identifiers, questions, answers, and encoded images.

- Catalog URL: https://awesomecua.com/resources/url-d768dd5245832bc4b824/
- Original source: https://huggingface.co/datasets/bevaya/websrc
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: screen-understanding, evaluation
- Evidence checked: 2026-11-09T05:05:18Z
- ID: url:d768dd5245832bc4b824

### Limitations

The card lists train and dev splits as Parquet files and says this upload omits HTML, other metadata, and the test split. It declares an MIT license.

- Record JSON: https://awesomecua.com/resources/url-d768dd5245832bc4b824/record.json

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/bevaya/websrc
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/bevaya/websrc (retrieved 2026-11-09T05:05:18Z; SHA-256 8a5d0d2c9049976c7e500c1098599d3483639b3cd03baa9173661f7f9d82c903)
- https://huggingface.co/api/datasets/bevaya/websrc (retrieved 2026-11-09T05:05:18Z; SHA-256 8a5d0d2c9049976c7e500c1098599d3483639b3cd03baa9173661f7f9d82c903)

---

## WebUI

Web screenshot and interface data for UI research.

- Catalog URL: https://awesomecua.com/resources/url-13b9442bcb6a8b984c4f/
- Original source: https://huggingface.co/datasets/biglab/webui-all
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: screen-understanding
- Evidence checked: 2026-10-16T06:38:26Z
- ID: url:13b9442bcb6a8b984c4f

### Limitations

The card links the WebUI project's ACM publication (DOI 10.1145/3544548.3581158) and website, so no paper or family relation is recorded.

- Record JSON: https://awesomecua.com/resources/url-13b9442bcb6a8b984c4f/record.json

### License declarations

- code: not recorded
- data: other — https://huggingface.co/datasets/biglab/webui-all
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/biglab/webui-all (retrieved 2026-10-16T06:38:26Z; SHA-256 70928db908760c1561bfc8e0cd7d925e0103ffddef4676fbaa7c1756a804b99a)
- https://huggingface.co/datasets/biglab/webui-all/raw/main/README.md (retrieved 2026-10-17T16:10:53Z; SHA-256 93bd04914735f748d687b71597970a79d95ae8636e7ed75d267ebd6954d11a8f)
- https://huggingface.co/api/datasets/biglab/webui-all (retrieved 2026-10-16T06:38:26Z; SHA-256 70928db908760c1561bfc8e0cd7d925e0103ffddef4676fbaa7c1756a804b99a)
