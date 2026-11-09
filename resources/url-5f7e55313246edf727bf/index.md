# GUI-Odyssey — original OpenGVLab release

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

## Limitations

The card now asks users to switch to the newer hflqf88888/GUIOdyssey release, which reports a different episode total; this record keeps the earlier OpenGVLab upload, whose card still links the GUI-Odyssey repository and paper. Hub API at revision 71e0e7e2: open access, with all_anno.json, 7,735 annotation JSON files, four split files and screenshot folders; its sibling list stops at 100,000 entries. A paginated Hub tree listing at the same revision counted 118,791 PNG files in 100 screenshot folders; zipped copies of annotations and screenshots sit under zips/. The card declares CC-BY-4.0 for the data.

- Record JSON: https://awesomecua.com/resources/url-5f7e55313246edf727bf/record.json

## Structured profile

- Formats: JSON annotations, PNG screenshots, zip archives
- Modalities: screenshots, instructions, actions, click and scroll coordinates, device metadata
- Splits: random, task, device, app
- Supervision: cross-app trajectories, action grounding

### Count observations

- 7,735 episodes — original OpenGVLab/GUI-Odyssey release (reported; source: https://huggingface.co/datasets/OpenGVLab/GUI-Odyssey/raw/71e0e7e2d169c642e7a99c264d82ffecadf67889/README.md)
- 7,735 annotation JSON files — annotations/ at revision 71e0e7e2 (computed) (computed; source: https://huggingface.co/api/datasets/OpenGVLab/GUI-Odyssey/revision/71e0e7e2d169c642e7a99c264d82ffecadf67889)

Each annotation file is one episode keyed by episode_id, with device, task (category, apps, meta-task, instruction) and per-step screenshot, action, info and ps fields; actions are CLICK, SCROLL, LONG_PRESS, TYPE, COMPLETE, IMPOSSIBLE, HOME and BACK, with coordinates normalized to 0-1000. Each split file lists train and test episode IDs.

## License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/OpenGVLab/GUI-Odyssey/raw/71e0e7e2d169c642e7a99c264d82ffecadf67889/README.md
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/OpenGVLab/GUI-Odyssey/raw/71e0e7e2d169c642e7a99c264d82ffecadf67889/README.md (retrieved 2026-10-18T12:08:12Z; SHA-256 e881ff64f9657889838715ff44588c4963a41b7b389d527da88214626fd8159a)
- https://huggingface.co/api/datasets/OpenGVLab/GUI-Odyssey/revision/71e0e7e2d169c642e7a99c264d82ffecadf67889 (retrieved 2026-10-18T12:08:13Z; SHA-256 4a8355cb0fb25eb47234f7ed6eace6abf12e462768f7f9240f81577a58811c4e)
- https://huggingface.co/datasets/OpenGVLab/GUI-Odyssey/raw/71e0e7e2d169c642e7a99c264d82ffecadf67889/README.md (retrieved 2026-10-18T12:08:12Z; SHA-256 e881ff64f9657889838715ff44588c4963a41b7b389d527da88214626fd8159a)
