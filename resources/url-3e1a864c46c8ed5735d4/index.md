# Agent Humanization Benchmark (AHB) recordings

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

## Limitations

The Hub repository has no dataset card or license file; the arXiv paper and its code repository link it as the released data. The paper reports that all sessions ran on one Xiaomi Mi Max 2 phone with MIUI 11.0.2.0. Per-archive contents remain unverified because the recording archives were outside the reviewed evidence. Event totals are the paper's figures.

- Record JSON: https://awesomecua.com/resources/url-3e1a864c46c8ed5735d4/record.json

## Structured profile

- formats: ZIP archives, plain-text gesture logs, CSV, XLSX, Python pickle
- modalities: touch input events, motion-sensor readings, task instructions
- splits: not recorded
- supervision: source labels for human users and named agent configurations, task success scoring in the metadata workbook

### Count observations

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

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: The Hub repository has no dataset card, license metadata or license file at this revision, and the linked code repository declares no license, so no data grant is established.
  Sources: https://huggingface.co/api/datasets/lyyang2766/Passing-the-Turing-Test-on-Screen-Agent-Humanization-Benchmark/revision/379fd3ef8b7103757f160ea80ac80998165404fe

## Primary evidence

- https://huggingface.co/api/datasets/lyyang2766/Passing-the-Turing-Test-on-Screen-Agent-Humanization-Benchmark/revision/379fd3ef8b7103757f160ea80ac80998165404fe (retrieved 2026-10-18T15:51:35Z; SHA-256 76ac24bccdf4d78e87f86f20ceadf0b3cf25e2d008b017c340908d520743ed3b)
- https://huggingface.co/datasets/lyyang2766/Passing-the-Turing-Test-on-Screen-Agent-Humanization-Benchmark/raw/379fd3ef8b7103757f160ea80ac80998165404fe/metadata/tasks.csv (retrieved 2026-10-18T15:51:35Z; SHA-256 5b906fbc0df5f8677516c1a2c1e47c7c3a191df320574c5c3a100e99616a5f24)
- https://arxiv.org/html/2604.09574v1 (retrieved 2026-10-18T15:51:35Z; SHA-256 21c0f429eede313b7e3d302750bb5d77515af84b21c303c5fc5cc39138eb18c3)
- https://raw.githubusercontent.com/Gebro13/Passing-the-Turing-Test-on-Screen-Agent-Humanization-Benchmark/8924fa3e687af6f264d3b91a2d2f48faf8adfd8c/README.md (retrieved 2026-10-18T15:51:36Z; SHA-256 20ddeb13fedd6e07ff06104b65a2bd09ff7422b28064d7442196301c5172b062)
- https://huggingface.co/api/datasets/lyyang2766/Passing-the-Turing-Test-on-Screen-Agent-Humanization-Benchmark/revision/379fd3ef8b7103757f160ea80ac80998165404fe (retrieved 2026-10-18T15:51:35Z; SHA-256 76ac24bccdf4d78e87f86f20ceadf0b3cf25e2d008b017c340908d520743ed3b)
