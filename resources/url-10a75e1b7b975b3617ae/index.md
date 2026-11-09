# PSAI computer-use dataset

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

## Limitations

Released by Paradigm Shift AI. The card reports 2,220 browser and 947 computer tasks over 294 websites and 173 applications, labels most tasks cross-platform with a few Windows or macOS tasks, and says human vendors performed the tasks under signed release agreements but that recordings may contain personal information. Hub API at revision 0e1b7c63: not gated, 16 parquet shards, 3,167 MP4 videos and 1,766 DOM-snapshot zips; there is no LICENSE file in the repository. The card metadata declares MIT for the data.

- Record JSON: https://awesomecua.com/resources/url-10a75e1b7b975b3617ae/record.json

## Structured profile

- Formats: Parquet, MP4, zip archives, JSON strings
- Modalities: screen videos, screenshots, DOM snapshots, keyboard and mouse events, task metadata
- Splits: train
- Supervision: human computer-use demonstrations, reasoning steps

### Count observations

- 3,167 tasks — unique completed tasks in the train split (reported; source: https://huggingface.co/datasets/anaisleila/computer-use-data-psai/raw/0e1b7c63072833ba58b89dcfcc0cbac45107b0f4/README.md)
- 3,267 rows — train split rows, including 100 duplicate rows (reported; source: https://huggingface.co/datasets/anaisleila/computer-use-data-psai/raw/0e1b7c63072833ba58b89dcfcc0cbac45107b0f4/README.md)
- 14,740 screenshots — images embedded in the parquet files, covering 1,349 tasks (reported; source: https://huggingface.co/datasets/anaisleila/computer-use-data-psai/raw/0e1b7c63072833ba58b89dcfcc0cbac45107b0f4/README.md)
- 3,167 video files — videos/*.mp4 at revision 0e1b7c63 (computed) (computed; source: https://huggingface.co/api/datasets/anaisleila/computer-use-data-psai/revision/0e1b7c63072833ba58b89dcfcc0cbac45107b0f4)
- 1,766 DOM snapshot archives — dom_snaps/*.zip at revision 0e1b7c63 (computed) (computed; source: https://huggingface.co/api/datasets/anaisleila/computer-use-data-psai/revision/0e1b7c63072833ba58b89dcfcc0cbac45107b0f4)

Rows carry task name, category (browser or computer task), sub-categories, application or website, difficulty, OS label, login requirement, completion time, screenshots, video and DOM file paths, event JSON, reasoning steps and system metadata. Tasks share template IDs across vendors. Deduplicate on unique_data_id.

## License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/anaisleila/computer-use-data-psai/raw/0e1b7c63072833ba58b89dcfcc0cbac45107b0f4/README.md
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/anaisleila/computer-use-data-psai/raw/0e1b7c63072833ba58b89dcfcc0cbac45107b0f4/README.md (retrieved 2026-10-18T12:12:10Z; SHA-256 599cec3395df4562f867d0262183df8fc0bd6c2c3e871d518298772e4498c94e)
- https://huggingface.co/api/datasets/anaisleila/computer-use-data-psai/revision/0e1b7c63072833ba58b89dcfcc0cbac45107b0f4 (retrieved 2026-10-18T12:12:10Z; SHA-256 4b2708de50c2368246883bc0d62919cef0c6843c2172c5ec708d168a0670eaf7)
- https://huggingface.co/datasets/anaisleila/computer-use-data-psai/raw/0e1b7c63072833ba58b89dcfcc0cbac45107b0f4/README.md (retrieved 2026-10-18T12:12:10Z; SHA-256 599cec3395df4562f867d0262183df8fc0bd6c2c3e871d518298772e4498c94e)
