---
title: "WildGUI Screenshots (parts 16-19) | AwesomeCUA"
url: https://awesomecua.com/resources/url-348f31b5b339403ec26f/
updated: 2026-10-18
type: dataset
lang: en
---

# WildGUI Screenshots (parts 16-19)

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

## Limitations

The repository contains only JPEG frames packed in tar shards (671 for part16, 878 for part17, 212 for part18 and 161 for part19) and no annotations; each frame is stored as {video_id}/screenshot_{MM_SS}.jpg and is linked to an action through the annotation's video_id and timestamp. The card notes that a small fraction of annotated frames may be missing. The Video2GUI project README lists this repository as part of the WildGUI release. The data license is the card's CC-BY-NC-4.0 declaration; frames derived from third-party tutorial videos keep their own rights.

- Record JSON: https://awesomecua.com/resources/url-348f31b5b339403ec26f/record.json

## Structured profile

- Formats: tar archives of JPEG frames
- Modalities: screenshots
- Splits: not recorded
- Supervision: frames referenced by video-derived trajectory annotations

### Count observations

- 1,922 screenshot tar shards — Hub repository at revision 8d31cbd4 (parts 16-19) (computed) (computed; source: https://huggingface.co/api/datasets/joker-112/WildGUI_Screenshots/revision/8d31cbd45c9cb82683bbd5dea767782bb604fbcd)

Shard count computed by script from the pinned Hub API file list; it counts files. The card says each shard holds up to about 20,000 frames; the number of frames was not counted.

## License declarations

- code: not recorded
- data: cc-by-nc-4.0 — https://huggingface.co/datasets/joker-112/WildGUI_Screenshots/raw/8d31cbd45c9cb82683bbd5dea767782bb604fbcd/README.md
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/joker-112/WildGUI_Screenshots/raw/8d31cbd45c9cb82683bbd5dea767782bb604fbcd/README.md (retrieved 2026-10-18T12:28:47Z; SHA-256 4f2bbaa917b3c4c5927bcd4f23a5e882c58d0610e07f982e6549c840b942c64d)
- https://huggingface.co/api/datasets/joker-112/WildGUI_Screenshots/revision/8d31cbd45c9cb82683bbd5dea767782bb604fbcd (retrieved 2026-10-18T12:27:41Z; SHA-256 7532cb6ed1d70aab3c8aa3fc0cc76a4e52809f0440179f0c8f2de4bdfb6349e4)
- https://raw.githubusercontent.com/WeiminXiong/Video2GUI/02f61de0c329f6763ce1b130596a650e4a9291f1/README.md (retrieved 2026-10-18T12:27:41Z; SHA-256 5e3e6a0baa737232700c39449d4cbe48dc7e4640fe0de12f521e03b6e7d64f92)
- https://huggingface.co/datasets/joker-112/WildGUI_Screenshots/raw/8d31cbd45c9cb82683bbd5dea767782bb604fbcd/README.md (retrieved 2026-10-18T12:28:47Z; SHA-256 4f2bbaa917b3c4c5927bcd4f23a5e882c58d0610e07f982e6549c840b942c64d)
