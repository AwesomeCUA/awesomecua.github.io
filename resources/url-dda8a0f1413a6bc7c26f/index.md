---
title: "AndroidControl-Curated | AwesomeCUA"
url: https://awesomecua.com/resources/url-dda8a0f1413a6bc7c26f/
updated: 2026-10-18
type: benchmark
lang: en
---

# AndroidControl-Curated

Purified AndroidControl test set that scores predicted clicks against target element boxes and repairs ambiguous or wrong task labels, released as step-level JSON files with screenshot archives.

- Catalog URL: https://awesomecua.com/resources/url-dda8a0f1413a6bc7c26f/
- Original source: https://huggingface.co/datasets/batwBMW/AndroidControl_Curated
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: android
- Topics: evaluation, mobile-navigation, grounding
- Evidence checked: 2026-10-18T16:19:08Z
- ID: url:dda8a0f1413a6bc7c26f

## Limitations

The Hub repository holds five benchmark JSON files, three screenshot tar.gz archives (about 18 GB in total) and the project's web-page assets; the card declares no data license. The point-format files keep coordinate targets, the bbox files add element boxes, and the high-level task-improved file adds revised task text and corrected labels from the paper's LLM-plus-human review; the evaluation script runs that file by default. The GitHub repository batechworks/AndroidControl_Curated carries JSON files with the same names and the vLLM evaluation code.

- Record JSON: https://awesomecua.com/resources/url-dda8a0f1413a6bc7c26f/record.json

## Structured profile

- Actions / outputs: click, long press, swipe, text input, open app, navigate back, wait
- Evaluation: Per-step type accuracy, box accuracy and step success. A step succeeds when the predicted action type matches and, for click and long-press steps, the centre of the predicted box or point lies inside the ground-truth box; in the task-improved file, listed candidate actions count as alternative ground truths.
- Focus: single-step Android GUI action prediction, element grounding against target boxes
- Observations: screenshots, task goals, step instructions (low-level files), action history
- Setting: offline

### Count observations

- 8,377 step records — android_control_high_task-improved.json (high-level goals, revised labels) (computed) (computed; source: https://huggingface.co/datasets/batwBMW/AndroidControl_Curated/resolve/62aeecdcafa4097d340c5a4389690a5f14e938ed/benchmark_resource/android_control_high_task-improved.json)
- 1,540 episodes (distinct screenshot directories) — android_control_high_task-improved.json (computed) (computed; source: https://huggingface.co/datasets/batwBMW/AndroidControl_Curated/resolve/62aeecdcafa4097d340c5a4389690a5f14e938ed/benchmark_resource/android_control_high_task-improved.json)
- 527 step records with revised task text — android_control_high_task-improved.json (computed) (computed; source: https://huggingface.co/datasets/batwBMW/AndroidControl_Curated/resolve/62aeecdcafa4097d340c5a4389690a5f14e938ed/benchmark_resource/android_control_high_task-improved.json)
- 85 step records with corrected ground-truth actions — android_control_high_task-improved.json (gpt_corrected true) (computed) (computed; source: https://huggingface.co/datasets/batwBMW/AndroidControl_Curated/resolve/62aeecdcafa4097d340c5a4389690a5f14e938ed/benchmark_resource/android_control_high_task-improved.json)
- 8,377 step records — android_control_low_bbox.json (step instructions) (computed) (computed; source: https://huggingface.co/datasets/batwBMW/AndroidControl_Curated/resolve/62aeecdcafa4097d340c5a4389690a5f14e938ed/benchmark_resource/android_control_low_bbox.json)

Counts were computed from the pinned JSON files. The high-level bbox file before task correction and the two point-format files have different record totals; these counts are reported separately.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/batwBMW/AndroidControl_Curated/raw/62aeecdcafa4097d340c5a4389690a5f14e938ed/README.md (retrieved 2026-10-18T16:19:08Z; SHA-256 4711ccd07eee077ec4297b9c403dc948b33592a18bed6b7bfb833022ccfda0b9)
- https://huggingface.co/api/datasets/batwBMW/AndroidControl_Curated/revision/62aeecdcafa4097d340c5a4389690a5f14e938ed (retrieved 2026-10-18T16:18:11Z; SHA-256 247a1030646117d8d6dba3947a37ce036027377f4ee884c403d21c2090c693e4)
- https://huggingface.co/datasets/batwBMW/AndroidControl_Curated/resolve/62aeecdcafa4097d340c5a4389690a5f14e938ed/benchmark_resource/android_control_high_task-improved.json (retrieved 2026-10-18T16:18:11Z; SHA-256 e8c851dd1ab367db3e7eef05735920e38d34c43cd8d6f80516fc8bd6aec9656c)
- https://huggingface.co/datasets/batwBMW/AndroidControl_Curated/resolve/62aeecdcafa4097d340c5a4389690a5f14e938ed/benchmark_resource/android_control_low_bbox.json (retrieved 2026-10-18T16:18:11Z; SHA-256 75b442e6b7e627ae4fdf845052734a578999edfa20e09db96007899a85ef2aba)
- https://raw.githubusercontent.com/batechworks/AndroidControl_Curated/955062cc68e20666f71c4930e6025f989393a326/src/eval/evaluate_actions_androidControl_vllm.py (retrieved 2026-10-18T16:17:00Z; SHA-256 77a8b6da8f9c8e5e7016794198bad8e167d6fc5ccfcd66ca0105080e9b01bd49)
- https://raw.githubusercontent.com/batechworks/AndroidControl_Curated/955062cc68e20666f71c4930e6025f989393a326/src/eval/utils.py (retrieved 2026-10-18T16:17:30Z; SHA-256 e8eb46eaecb4abcbeb921e20b86682116505e944b3bf242a62b0cfb24053b244)
