---
title: "WildGUI | AwesomeCUA"
url: https://awesomecua.com/resources/url-daf52475338f385b9310/
updated: 2026-10-18
type: dataset
lang: en
---

# WildGUI

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

## Limitations

The card describes this as a personally reprocessed annotation release: records were regenerated and cleaned following the annotation workflow, then split so that each JSONL line holds one task with its ordered action trajectory; action parameters are omitted when grounding is unreliable (use_grounding false). The Video2GUI project README links this repository as the WildGUI dataset and names the joker-112/WildGUI_Screenshots repository as the host of the part16-part19 frames. Its figures of about 12M trajectories over more than 1,500 applications and websites describe WildGUI in the paper; the 19 JSONL shards (about 78 GB) were not downloaded, so the Hub record count is not established. The project README says trajectories and grounding boxes were produced by Gemini-3-Pro, so labels are model-generated. The data license is the card's CC-BY-NC-4.0 declaration; the source videos and screenshots keep their own rights, and the Apache-2.0 license of the project repository is not transferred to the data.

- Record JSON: https://awesomecua.com/resources/url-daf52475338f385b9310/record.json

## Structured profile

- Formats: JSONL, tar archives of JPEG frames
- Modalities: screenshots, instructions, plans, actions, action rationales
- Splits: not recorded
- Supervision: video-derived task instructions and plans, model-generated action grounding

### Count observations

- 19 annotation JSONL shards — Hub repository at revision 75287698 (parts 1-19) (computed) (computed; source: https://huggingface.co/api/datasets/xwm/WildGUI/revision/75287698d5876692d4b998be30a724723906e769)
- 4,137 screenshot tar shards — Hub repository at revision 75287698 (parts 1-15) (computed) (computed; source: https://huggingface.co/api/datasets/xwm/WildGUI/revision/75287698d5876692d4b998be30a724723906e769)
- ≈ 12,000,000 interaction trajectories — WildGUI as described in the Video2GUI project README; not recounted in this Hub release (reported; source: https://raw.githubusercontent.com/WeiminXiong/Video2GUI/02f61de0c329f6763ce1b130596a650e4a9291f1/README.md)

Shard counts were computed by script from the pinned Hub API file list; they count files. Each JSONL line is one task with its ordered action trajectory; the number of lines was not counted. The reported trajectory figure comes from the project README and may differ from the reprocessed Hub release. Frames for parts 16-19 are in a separate repository.

## License declarations

- code: not recorded
- data: cc-by-nc-4.0 — https://huggingface.co/datasets/xwm/WildGUI/raw/75287698d5876692d4b998be30a724723906e769/README.md
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/xwm/WildGUI/raw/75287698d5876692d4b998be30a724723906e769/README.md (retrieved 2026-10-18T12:28:47Z; SHA-256 5bfb27b61da056f73d3d0040098b694b17785bbb56b59ecbc9c10e6a58c82f0a)
- https://huggingface.co/api/datasets/xwm/WildGUI/revision/75287698d5876692d4b998be30a724723906e769 (retrieved 2026-10-18T12:27:40Z; SHA-256 0f2184af45c554954dcdfaf27d74e3a4907e637b7297ca7b5d34372a3f264c8f)
- https://raw.githubusercontent.com/WeiminXiong/Video2GUI/02f61de0c329f6763ce1b130596a650e4a9291f1/README.md (retrieved 2026-10-18T12:27:41Z; SHA-256 5e3e6a0baa737232700c39449d4cbe48dc7e4640fe0de12f521e03b6e7d64f92)
- https://huggingface.co/datasets/xwm/WildGUI/raw/75287698d5876692d4b998be30a724723906e769/README.md (retrieved 2026-10-18T12:28:47Z; SHA-256 5bfb27b61da056f73d3d0040098b694b17785bbb56b59ecbc9c10e6a58c82f0a)
