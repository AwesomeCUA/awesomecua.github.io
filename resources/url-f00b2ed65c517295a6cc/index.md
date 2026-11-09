# Computer Use Large (markov-ai)

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

## Limitations

The card says the videos were sourced from the internet, trimmed to screen-recording segments and stripped of audio, and are meant for training and evaluating computer-use agents. Per-folder metadata.jsonl files give file name, category, trimmed duration and segment count only; there are no actions, cursor events or instructions. At Hub revision b50aecce the manifest lists 48,477 MP4 files, one fewer than the card (Excel has 8,110 against 8,111). The repository also holds descriptions.parquet and 48,473 per-video JSON files under descriptions/, beyond the card's documented files; the one inspected file gives the source video's title and channel, transcript text in 10-second windows and a short step description or NO_TASK per window. The card's CC-BY-4.0 declaration does not establish rights to the third-party videos.

- Record JSON: https://awesomecua.com/resources/url-f00b2ed65c517295a6cc/record.json

## Structured profile

- formats: MP4, JSONL, JSON, Parquet
- modalities: screen-recording video, per-video duration metadata
- splits: train
- supervision: unlabeled screen recordings

### Count observations

- 48,478 videos — all six software categories (reported; source: https://huggingface.co/datasets/markov-ai/computer-use-large/raw/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9/README.md)
- ≈ 12,300 hours of video — all six software categories after trimming (reported; source: https://huggingface.co/datasets/markov-ai/computer-use-large/raw/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9/README.md)
- 6 software categories — AutoCAD, Blender, Excel, Photoshop, Salesforce, VS Code (reported; source: https://huggingface.co/datasets/markov-ai/computer-use-large/raw/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9/README.md)
- 48,477 MP4 files — data/ at Hub revision b50aecce (computed) (computed; source: https://huggingface.co/api/datasets/markov-ai/computer-use-large/revision/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9)
- 48,473 per-video description JSON files — descriptions/ at Hub revision b50aecce (computed) (computed; source: https://huggingface.co/api/datasets/markov-ai/computer-use-large/revision/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9)

File counts come from a script over the pinned Hub manifest; the card's per-category table gives Excel 8,111 videos where the manifest has 8,110 MP4 files. The card leaves the description files undocumented; their content was checked in one file only. Videos, hours, categories and files are different units; these counts are reported separately. Each category is one configuration with a single train split.

## License declarations

- code: not recorded
- data: CC-BY-4.0 — https://huggingface.co/datasets/markov-ai/computer-use-large/raw/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9/README.md
- document: not recorded
- weights: not recorded

- data review: Dataset-card metadata and License section declare CC-BY-4.0 for this release; the card says the videos were sourced from the internet, and the declaration does not establish rights to those third-party recordings or the software shown.
  Sources: https://huggingface.co/datasets/markov-ai/computer-use-large/raw/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9/README.md

## Primary evidence

- https://huggingface.co/datasets/markov-ai/computer-use-large/raw/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9/README.md (retrieved 2026-10-18T15:51:07Z; SHA-256 4e7feff2c4ea2420856a406dd3d74881928c4b86091412825001cf4610050f78)
- https://huggingface.co/api/datasets/markov-ai/computer-use-large/revision/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9 (retrieved 2026-10-18T15:50:47Z; SHA-256 3b3f16168be7ff108abb2a9e55d716b1336601d33cb7c6b8b8b3729994f2d791)
- https://huggingface.co/datasets/markov-ai/computer-use-large/raw/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9/descriptions/vscode/-2x-5DN-caM_descriptions.json (retrieved 2026-10-18T15:50:47Z; SHA-256 50f55d2be263484950dc59bceb4b116a8daaeeb8fb38ee7ab6496a8723c29411)
- https://huggingface.co/datasets/markov-ai/computer-use-large/raw/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9/README.md (retrieved 2026-10-18T15:51:07Z; SHA-256 4e7feff2c4ea2420856a406dd3d74881928c4b86091412825001cf4610050f78)
