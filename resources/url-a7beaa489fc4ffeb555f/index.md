# LearnGUI

Mobile GUI benchmark for learning from demonstrations: 2,252 offline tasks and 101 online tasks with human step-by-step trajectories, each query paired with one to three similar support demonstrations.

- Catalog URL: https://awesomecua.com/resources/url-a7beaa489fc4ffeb555f/
- Original source: https://huggingface.co/datasets/lgy0404/LearnGUI
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: evaluation, mobile-navigation, imitation-learning
- Evidence checked: 2026-10-18T16:00:11Z
- ID: url:a7beaa489fc4ffeb555f

## Limitations

The Hub repository holds data only: multi-part offline screenshot archives, element and instruction annotations, k-shot pairings in task_split.json (the card's tree spells it task_spilit.json), and 101 online task folders with screenshots, UI XML files, operation logs and one screen recording each. Offline-Train (2,001 tasks) doubles as a training split. The card names no mobile operating system. Inference and evaluation code is in the separately cataloged LearnAct repository (github:lgy0404/learnact). The card declares Apache-2.0 for the dataset.

- Record JSON: https://awesomecua.com/resources/url-a7beaa489fc4ffeb555f/record.json

## Structured profile

- Actions / outputs: mobile GUI actions such as CLICK[x,y] and SWIPE[direction]
- Evaluation: The card describes offline evaluation against ground-truth step actions and online evaluation on 101 interactive tasks; no evaluator ships in this dataset repository, and none was run.
- Focus: demonstration-conditioned mobile GUI task execution, k-shot (k = 1, 2, 3) support demonstrations with instruction, UI and action similarity scores
- Observations: step screenshots, high-level and low-level instructions, UI element annotations, support demonstrations
- Setting: mixed

### Count observations

- 2,353 tasks — LearnGUI offline and online tasks combined (reported; source: https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/README.md)
- 2,252 tasks — LearnGUI-Offline (reported; source: https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/README.md)
- 101 tasks — LearnGUI-Online (reported; source: https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/README.md)
- 2,001 tasks — Offline-Train split (reported; source: https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/README.md)
- 251 tasks — Offline-Test split (reported; source: https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/README.md)
- 26,184 step actions — Offline-Train split (reported; source: https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/README.md)
- 3,469 step actions — Offline-Test split (reported; source: https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/README.md)
- 1,423 step actions — Online-Test split (reported; source: https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/README.md)
- 73 applications — LearnGUI offline and online tasks combined (reported; source: https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/README.md)
- 101 task instruction files — online/low_level_instructions at the inspected revision (computed) (computed; source: https://huggingface.co/api/datasets/lgy0404/LearnGUI)
- 101 screen recordings — online/raw_data at the inspected revision (computed) (computed; source: https://huggingface.co/api/datasets/lgy0404/LearnGUI)

Task, step-action, application and file counts are different units; these counts are reported separately. Each k-shot table row reuses the same split tasks with a different number of support demonstrations; the 1-, 2- and 3-shot rows describe those same tasks.

## License declarations

- code: not recorded
- data: Apache-2.0 — https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/README.md
- document: not recorded
- weights: not recorded

- data review: Publisher dataset-card declaration for the LearnGUI release; the LearnAct code repository and app content shown in screenshots are not covered by this evidence.
  Sources: https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/README.md

## Primary evidence

- https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/README.md (retrieved 2026-10-18T16:00:11Z; SHA-256 a7c0fae7a067f7b4704170c73589dae43e4df541a80c5f00d0a98f79bb1e7e7c)
- https://huggingface.co/api/datasets/lgy0404/LearnGUI (retrieved 2026-10-18T16:00:11Z; SHA-256 19300276c328762286e677eed624bc169c189cafa48571244e791008bf576c50)
- https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/online/low_level_instructions/AudioRecorderRecordAudio.json (retrieved 2026-10-18T16:00:11Z; SHA-256 d5b3c31b62e08bce07270e0f99d0c8608b68f64848251329e725384825b68b5d)
- https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/README.md (retrieved 2026-10-18T16:00:11Z; SHA-256 a7c0fae7a067f7b4704170c73589dae43e4df541a80c5f00d0a98f79bb1e7e7c)
