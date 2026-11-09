# GUIGuard-Bench evaluation code

Evaluation code for GUIGuard-Bench: privacy-region recognition scoring, LLM-judged planning consistency on masked screenshots and click grounding under protection, with a small Android and PC example subset.

- Catalog URL: https://awesomecua.com/resources/github-shaluoyan523-guiguard-bench/
- Original source: https://github.com/shaluoyan523/GUIGuard-Bench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: android, desktop
- Topics: safety-security, evaluation, grounding
- Evidence checked: 2026-10-18T15:56:30Z
- ID: github:shaluoyan523/guiguard-bench

## Limitations

The README is an anonymous-review version without authors or a citation; the paper link comes from the GUIGuard project page, which links this repository as the paper's code. The full benchmark data is hosted separately on the Hugging Face Hub; this repository ships only dataset_example/ for smoke tests. The README and croissant.json describe that dataset as MIT, while the Hub dataset card at revision c2b5ca41 declares CC-BY-NC-4.0, so no data license is recorded here. The repository has no LICENSE file and the GitHub API reports no license. Nothing was run.

- Record JSON: https://awesomecua.com/resources/github-shaluoyan523-guiguard-bench/record.json

## Structured profile

- actions: predicted privacy regions with labels, generated next-action plans, predicted click points
- evaluation: privacy_recognition scores region-level privacy predictions against the labels (IoU-only or paper-style scoring); planner_eval has an LLM judge rate step-level semantic consistency between plans from original and protected trajectories on a 0-4 scale; grounding_eval counts a click as correct when the predicted point falls inside the target box.
- focus: privacy-region recognition on GUI screenshots, planning fidelity on privacy-protected screenshots, click grounding under visual privacy protection
- observations: recorded trajectory screenshots, task instructions, next-action plans
- setting: offline

### Count observations

- 34 Android task directories — dataset_example/Android at commit 542a902a, of which 33 are complete trajectories (reported; source: https://raw.githubusercontent.com/shaluoyan523/GUIGuard-Bench/542a902a451592e15ab287414c396aff14fb0d4d/README.md)
- 26 PC trajectories — dataset_example/PC at commit 542a902a (reported; source: https://raw.githubusercontent.com/shaluoyan523/GUIGuard-Bench/542a902a451592e15ab287414c396aff14fb0d4d/README.md)
- 290 next-action grounding samples — dataset_example/grounding_data/manifest.jsonl at commit 542a902a (computed) (computed; source: https://raw.githubusercontent.com/shaluoyan523/GUIGuard-Bench/542a902a451592e15ab287414c396aff14fb0d4d/dataset_example/grounding_data/manifest.jsonl)

Counts describe dataset_example/, the repository's review subset for smoke tests; the README says benchmark numbers need the full Hub dataset. A script over the repository tree at this commit found the same 34 Android directories (task 62 lacks traj.jsonl and task_result.json) and 26 PC directories, and 290 images in each of the original, black-mask and LLM-replacement variants. Directories, trajectories and samples are different units; these counts are reported separately.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: The README's License section covers only the dataset, the repository tree at 542a902a has no LICENSE file, and the GitHub API reports no license; no code license is established.
  Sources: https://raw.githubusercontent.com/shaluoyan523/GUIGuard-Bench/542a902a451592e15ab287414c396aff14fb0d4d/README.md

## Primary evidence

- https://raw.githubusercontent.com/shaluoyan523/GUIGuard-Bench/542a902a451592e15ab287414c396aff14fb0d4d/README.md (retrieved 2026-10-18T15:56:30Z; SHA-256 f7961f6d3f6809f6ae61bf5b679d03595b79c64a15a2687dfccdb1b5a89e065b)
- https://futuresis.github.io/GUIGuard-page/ (retrieved 2026-10-18T15:54:36Z; SHA-256 14fe15c990481087ad504f631dc94d777736373f56344a0746cd77320c3db3b5)
- https://raw.githubusercontent.com/shaluoyan523/GUIGuard-Bench/542a902a451592e15ab287414c396aff14fb0d4d/dataset_example/grounding_data/manifest.jsonl (retrieved 2026-10-18T15:55:25Z; SHA-256 0cd6681a25d989ec0e925c75d3ea06807e1738d3a853c824de473cec0476b23f)
- https://raw.githubusercontent.com/shaluoyan523/GUIGuard-Bench/542a902a451592e15ab287414c396aff14fb0d4d/grounding_eval/grounding_eval/metrics.py (retrieved 2026-10-18T15:55:25Z; SHA-256 5f173b67f64d4aad028253e821f4cd1afbf682cf84dc0a2bbe75feb1e0141302)
- https://raw.githubusercontent.com/shaluoyan523/GUIGuard-Bench/542a902a451592e15ab287414c396aff14fb0d4d/planner_eval/planner_eval/judges/graders/semantic_consistency.py (retrieved 2026-10-18T15:55:26Z; SHA-256 8ee9842717668cb38c400ac41c8a8e1a5c63c26849150715c9b1f8f54512aa25)
- https://raw.githubusercontent.com/shaluoyan523/GUIGuard-Bench/542a902a451592e15ab287414c396aff14fb0d4d/croissant.json (retrieved 2026-10-18T15:54:38Z; SHA-256 b0b84ad6af5b79da3caada0bb559f9022c546e5df03f56a4f6abe45a1958153e)
- https://huggingface.co/datasets/ShaofantuoshuzhengzhiSha/GUIGuard-Bench/raw/c2b5ca415cd854452585260b9eaa74699042d920/README.md (retrieved 2026-10-18T15:56:05Z; SHA-256 81a85cdefb48b37f9869eaa61832d9d97f288cbd443be74e07d779f7948ae229)
