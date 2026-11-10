# Uni-GUI-Mobile

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

## Limitations

The UI-MOPD paper builds Uni-GUI from self-collected desktop and mobile trajectories plus cleaned OpenCUA and OpenMobile trajectories; this repository is the self-collected mobile part (the paper's composition table rounds it to about 1K trajectories and 17K steps, the card reports about 14K steps). Per the paper, teacher models produced the rollouts, an automatic judge kept only successful ones, and reasoning traces were rewritten into one format. The card says only 'mobile'; Android is inferred from the adb commands in its step records and the paper's use of AndroidWorld and MobileWorld environments for mobile queries. Apache-2.0 is the card's declaration for the data.

- Record JSON: https://awesomecua.com/resources/url-93278fa5b9e6bd0cbcef/record.json

## Structured profile

- Formats: per-trajectory folders with task.json and PNG screenshots
- Modalities: screenshots, task queries, reasoning traces, actions
- Splits: not recorded
- Supervision: teacher-model GUI trajectories filtered by an automatic success judge, structured reasoning traces, normalized mobile actions with adb commands

### Count observations

- 871 trajectories — Uni-GUI-Mobile card statistics (reported; source: https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Mobile/raw/45244387a3c284810894bc2be974b28014dcf838/README.md)
- ≈ 14,000 steps — Uni-GUI-Mobile card statistics (reported; source: https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Mobile/raw/45244387a3c284810894bc2be974b28014dcf838/README.md)
- 10 app categories — Uni-GUI-Mobile card statistics (reported; source: https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Mobile/raw/45244387a3c284810894bc2be974b28014dcf838/README.md)
- 871 task.json trajectory files — Hub manifest at revision 45244387 (computed) (computed; source: https://huggingface.co/api/datasets/UI-MOPD/Uni-GUI-Mobile/revision/45244387a3c284810894bc2be974b28014dcf838)
- 14,275 PNG screenshot files — Hub manifest at revision 45244387 (computed) (computed; source: https://huggingface.co/api/datasets/UI-MOPD/Uni-GUI-Mobile/revision/45244387a3c284810894bc2be974b28014dcf838)

Trajectories, steps, app categories and files are different units and are counted separately. The task.json count from the manifest matches the card's trajectory count; screenshot files were counted from the manifest. Coordinates are normalized to [0, 999] on a 1080x2400 screen. No train/test split is declared.

## License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Mobile/raw/45244387a3c284810894bc2be974b28014dcf838/README.md
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Mobile/raw/45244387a3c284810894bc2be974b28014dcf838/README.md (retrieved 2026-10-18T12:32:23Z; SHA-256 5a71bb44474b2544510d62e30112412096b6ffe0f9c2f5abf8e49bf8273bc088)
- https://huggingface.co/api/datasets/UI-MOPD/Uni-GUI-Mobile/revision/45244387a3c284810894bc2be974b28014dcf838 (retrieved 2026-10-18T12:32:02Z; SHA-256 b3ae1be79448b6a2901630def28957fe31e4a16da9ed09c0e4d4e1180faef392)
- https://arxiv.org/html/2607.04425v1 (retrieved 2026-10-18T12:32:02Z; SHA-256 7fc33cf335f41716d5030d562cd6b53323a32f81551caa130afa43043509511b)
- https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Mobile/raw/45244387a3c284810894bc2be974b28014dcf838/README.md (retrieved 2026-10-18T12:32:23Z; SHA-256 5a71bb44474b2544510d62e30112412096b6ffe0f9c2f5abf8e49bf8273bc088)
