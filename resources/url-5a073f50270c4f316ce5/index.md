# Computer Use Trajectories (markov-ai)

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

## Limitations

The Hub API at revision de58c88b reports an ungated repository with 16 Parquet shards for the train split and 313 MP4 files under recordings/<domain>/. The card's 160 rows match its per-domain table, but the recording folders hold 313 files with a different domain mix, so some recordings may not belong to a published row; this was not checked. Every row has score 1.0 because only fully successful runs were kept; the set samples successful runs. The card credits a 'ComputerRL' evaluation framework at github.com/anthropics/ComputerRL, which the GitHub API did not resolve on 2026-10-18. The card declares Apache-2.0 for the dataset.

- Record JSON: https://awesomecua.com/resources/url-5a073f50270c4f316ce5/record.json

## Structured profile

- formats: Parquet, MP4
- modalities: screenshots, accessibility trees, task instructions, pyautogui actions, model responses, execution logs, screen recordings
- splits: train
- supervision: successful agent trajectories

### Count observations

- 160 trajectories — train split (one row per task trajectory) (reported; source: https://huggingface.co/datasets/markov-ai/computer-use/raw/de58c88b4b33dd03fa4d5d0f490748f576bd37b3/README.md)
- 1,378 steps — all 160 trajectories (reported; source: https://huggingface.co/datasets/markov-ai/computer-use/raw/de58c88b4b33dd03fa4d5d0f490748f576bd37b3/README.md)
- 10 application domains — train split (reported; source: https://huggingface.co/datasets/markov-ai/computer-use/raw/de58c88b4b33dd03fa4d5d0f490748f576bd37b3/README.md)
- 313 MP4 recording files — recordings/ at revision de58c88b (computed) (computed; source: https://huggingface.co/api/datasets/markov-ai/computer-use)

Rows are agent runs filtered to score 1.0. Step and row counts are the card's figures. Recording files were counted from the Hub manifest; the recording-file and row counts differ.

## License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/markov-ai/computer-use/raw/de58c88b4b33dd03fa4d5d0f490748f576bd37b3/README.md
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/markov-ai/computer-use/raw/de58c88b4b33dd03fa4d5d0f490748f576bd37b3/README.md (retrieved 2026-10-18T11:44:36Z; SHA-256 f0880c1d4db8005c9ca02218cf61781f347d4a11aa311aecf5b90119845f4381)
- https://huggingface.co/api/datasets/markov-ai/computer-use (retrieved 2026-10-18T11:44:36Z; SHA-256 73c4ea92c82983d3bc5ac6b8565f199c33f52f4206e5203502d0bf817b5b02cd)
- https://huggingface.co/datasets/markov-ai/computer-use/raw/de58c88b4b33dd03fa4d5d0f490748f576bd37b3/README.md (retrieved 2026-10-18T11:44:36Z; SHA-256 f0880c1d4db8005c9ca02218cf61781f347d4a11aa311aecf5b90119845f4381)
