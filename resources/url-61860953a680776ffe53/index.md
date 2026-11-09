# GUIGuard-Bench public-ladder release

Public-ladder release of GUIGuard-Bench: 121 Android and Linux desktop agent trajectories whose 2,002 screenshots carry region-level privacy labels, for privacy recognition, protected-screen planning and click grounding.

- Catalog URL: https://awesomecua.com/resources/url-61860953a680776ffe53/
- Original source: https://huggingface.co/datasets/ShaofantuoshuzhengzhiSha/GUIGuard-Bench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: android, desktop, linux
- Topics: safety-security, evaluation, grounding, screen-understanding
- Evidence checked: 2026-10-18T15:37:19Z
- ID: url:61860953a680776ffe53

## Limitations

This Hub repository is the public-ladder subset: the paper and project page describe 241 trajectories with 4,080 screenshots, while this card's evaluation set has 121. The reference_virtual_android and reference_virtual_pc folders contain emulated Android and Windows trajectories without privacy labels as reference material outside the evaluation. The card is an anonymous-review version without a citation; the paper link comes from the project page that the paper's abstract links. Screenshots contain personal information, and the card limits use to research.

- Record JSON: https://awesomecua.com/resources/url-61860953a680776ffe53/record.json

## Structured profile

- Actions / outputs: recorded Android atomic actions, recorded PC pyautogui actions, click coordinates for grounding
- Evaluation: Region-level privacy labels (risk level, category, task essentiality, boxes) support recognition scoring; planning is compared before and after protection methods (black mask, mosaic, random blocks, LLM text replacement); grounding follows a ScreenSpot-style click check. The card does not ship a scorer; it points to an anonymized toolkit.
- Focus: privacy-risk recognition in GUI agent screenshots, agent planning fidelity on privacy-protected screenshots, click grounding under visual privacy protection
- Observations: recorded trajectory screenshots, task goals, plan and progress text
- Setting: offline

### Count observations

- 121 evaluation trajectories — public-ladder evaluation set (68 Android + 53 PC) (reported; source: https://huggingface.co/datasets/ShaofantuoshuzhengzhiSha/GUIGuard-Bench/raw/c2b5ca415cd854452585260b9eaa74699042d920/README.md)
- 2,002 screenshots (evaluation samples) — public-ladder evaluation set, data/eval.jsonl (reported; source: https://huggingface.co/datasets/ShaofantuoshuzhengzhiSha/GUIGuard-Bench/raw/c2b5ca415cd854452585260b9eaa74699042d920/README.md)
- 26,407 region-level privacy annotations — public-ladder evaluation set (reported; source: https://huggingface.co/datasets/ShaofantuoshuzhengzhiSha/GUIGuard-Bench/raw/c2b5ca415cd854452585260b9eaa74699042d920/README.md)
- 68 Android task directories — Android/ at revision c2b5ca41 (computed) (computed; source: https://huggingface.co/api/datasets/ShaofantuoshuzhengzhiSha/GUIGuard-Bench/revision/c2b5ca415cd854452585260b9eaa74699042d920)
- 53 PC task directories — PC/ at revision c2b5ca41 (computed) (computed; source: https://huggingface.co/api/datasets/ShaofantuoshuzhengzhiSha/GUIGuard-Bench/revision/c2b5ca415cd854452585260b9eaa74699042d920)

Trajectories, screenshots and annotations are different units and are counted separately. The manifest also lists 1,239 Android and 763 PC images, which together match the 2,002 samples. A script over data/eval.jsonl at this revision (11 MB, read once) found 2,002 rows from 121 task folders, 26,407 privacy labels and 1,949 labelled rows, matching the card. Reference-only folders hold 238 and 150 top-level directories; they are excluded from these counts.

## License declarations

- code: not recorded
- data: CC-BY-NC-4.0 — https://huggingface.co/datasets/ShaofantuoshuzhengzhiSha/GUIGuard-Bench/raw/c2b5ca415cd854452585260b9eaa74699042d920/README.md
- document: not recorded
- weights: not recorded

- data review: Publisher dataset-card declaration for this release; it does not establish rights to the applications, websites and personal content shown in the screenshots.
  Sources: https://huggingface.co/datasets/ShaofantuoshuzhengzhiSha/GUIGuard-Bench/raw/c2b5ca415cd854452585260b9eaa74699042d920/README.md

## Primary evidence

- https://huggingface.co/datasets/ShaofantuoshuzhengzhiSha/GUIGuard-Bench/raw/c2b5ca415cd854452585260b9eaa74699042d920/README.md (retrieved 2026-10-18T15:37:19Z; SHA-256 81a85cdefb48b37f9869eaa61832d9d97f288cbd443be74e07d779f7948ae229)
- https://huggingface.co/api/datasets/ShaofantuoshuzhengzhiSha/GUIGuard-Bench/revision/c2b5ca415cd854452585260b9eaa74699042d920 (retrieved 2026-10-18T15:37:19Z; SHA-256 788d251b561c0dfda4b5c6e643c2af0cc683ef8978759e6fa392db2e9548096b)
- https://raw.githubusercontent.com/Futuresis/GUIGuard-page/df9c709058d7e39d1f9286edd33c9f645aa60b55/index.html (retrieved 2026-10-18T15:37:19Z; SHA-256 14fe15c990481087ad504f631dc94d777736373f56344a0746cd77320c3db3b5)
- https://huggingface.co/datasets/ShaofantuoshuzhengzhiSha/GUIGuard-Bench/raw/c2b5ca415cd854452585260b9eaa74699042d920/README.md (retrieved 2026-10-18T15:37:19Z; SHA-256 81a85cdefb48b37f9869eaa61832d9d97f288cbd443be74e07d779f7948ae229)
