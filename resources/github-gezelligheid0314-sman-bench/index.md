# SMAN-Bench

Evaluation code for SMAN-Bench (Mobile-Bench-v2): AppAgent and Mobile-Agent-v2 runners replay recorded Android pages for single-path, multi-path, noisy and ambiguous tasks, scored by step and task success.

- Catalog URL: https://awesomecua.com/resources/github-gezelligheid0314-sman-bench/
- Original source: https://github.com/gezelligheid0314/SMAN-Bench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: android
- Topics: evaluation, mobile-navigation, robustness
- Evidence checked: 2026-10-20T07:38:59Z
- ID: github:gezelligheid0314/sman-bench

## Limitations

SMAN-Bench is the title of the ICLR 2026 edition of the Mobile-Bench-v2 paper; that edition's proceedings PDF gives this repository as its code and data location, and the README's dataset badge links the Hugging Face release xwk123/MobileBench-v2, which holds the task data. The repository itself has code only, no task files. AppAgent runners draw numbered boxes for clickable and scrollable elements, taken from each recorded page's XML, onto the screenshot; Mobile-Agent-v2 runners (memory unit on, reflection off by default) receive the centre coordinates of the same elements. Single-path and ambiguous runs step through the ground-truth page sequence whatever the agent chooses; multi-path runs move through the recorded page graph according to the agent's actions (default limit 20 rounds) and succeed on reaching the goal page. Ambiguous runs prompt with the task's vague instruction and per-step instructions, or with the complete instruction. eval.py has scorers for single-path, multi-path and noisy runs, printing task success rate, action accuracy and action-type accuracy; the noisy scorer checks the ground-truth click or swipe coordinates against the predicted element's bounds and typed text by character-level F1 above 0.5. Model endpoints are set in config/config.yaml. The README shows an MIT badge, but the tree at the reviewed commit has no LICENSE file. Not a fork, not archived; no release.

- Record JSON: https://awesomecua.com/resources/github-gezelligheid0314-sman-bench/record.json

## Structured profile

- Actions / outputs: click a labelled element, scroll a labelled element in a direction, input text
- Evaluation: Predicted actions are mapped to the recorded action IDs of each page. Single-path runs are scored step by step against the ground-truth path (action accuracy, action-type accuracy, success only when every step matches); multi-path runs succeed when the agent's actions reach the goal page in the recorded page graph; noisy runs check ground-truth click and swipe coordinates against the predicted element's bounds and typed text by character-level F1.
- Focus: single-path step accuracy, multi-path task completion, robustness to pop-ups and ads, ambiguous instructions
- Observations: recorded Android screenshots with element boxes drawn from the page XML, element centre coordinates (Mobile-Agent-v2 runner), task instructions
- Setting: offline

### Count observations

No count recorded.

The task files and counts belong to the Hugging Face data release; this repository contains the code. Scoring rules are taken from eval.py at the reviewed commit, which has no separate scorer for the ambiguous split.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: The README shows an MIT badge linking a LICENSE file, but the complete tree at the reviewed commit has no license file, so no grant is established.
  Sources: https://api.github.com/repos/gezelligheid0314/SMAN-Bench/git/trees/8f3358fc8a065454b66d1e8f4f6029a2eb8ac327?recursive=1

## Primary evidence

- https://raw.githubusercontent.com/gezelligheid0314/SMAN-Bench/HEAD/readme.md (retrieved 2026-10-20T07:38:59Z; SHA-256 73cdb1d20119322652fce8f475be5304efdc78ba9ce7162b282790646bc56a1e)
- https://api.github.com/repos/gezelligheid0314/SMAN-Bench/git/trees/8f3358fc8a065454b66d1e8f4f6029a2eb8ac327?recursive=1 (retrieved 2026-10-20T04:19:28Z; SHA-256 e3b1edf5ebd8a3c4ece3fe55994678b01188bf8c8aed5ac3ebbd93a818eec0c8)
- https://raw.githubusercontent.com/gezelligheid0314/SMAN-Bench/8f3358fc8a065454b66d1e8f4f6029a2eb8ac327/readme.md (retrieved 2026-10-20T04:20:09Z; SHA-256 73cdb1d20119322652fce8f475be5304efdc78ba9ce7162b282790646bc56a1e)
- https://proceedings.iclr.cc/paper_files/paper/2026/file/1b4279dc1ec8d0183c22528664d84459-Paper-Conference.pdf (retrieved 2026-10-20T04:20:08Z; SHA-256 061442053b0487074fd3556a298e8e7a8715741c6f8939b31ead7b9326ffccb6)
- https://raw.githubusercontent.com/gezelligheid0314/SMAN-Bench/8f3358fc8a065454b66d1e8f4f6029a2eb8ac327/eval.py (retrieved 2026-10-20T04:19:29Z; SHA-256 860f45a6ff49829b3e5ff6ad938862c7420d09bf41964340d87927f636bef45c)
- https://raw.githubusercontent.com/gezelligheid0314/SMAN-Bench/8f3358fc8a065454b66d1e8f4f6029a2eb8ac327/appagent/appagent_singlepath.py (retrieved 2026-10-20T04:19:29Z; SHA-256 b49ccd022e82f2da2727ec9c048cc5c6eaa9edd0c8953d17e06548bc2859c232)
- https://raw.githubusercontent.com/gezelligheid0314/SMAN-Bench/8f3358fc8a065454b66d1e8f4f6029a2eb8ac327/appagent/appagent_multipath.py (retrieved 2026-10-20T04:21:04Z; SHA-256 fe4dffc17866473e8c26871ca71d12ce2c04187e17df80fa6b1be232b7fbd571)
- https://raw.githubusercontent.com/gezelligheid0314/SMAN-Bench/8f3358fc8a065454b66d1e8f4f6029a2eb8ac327/appagent/appagent_ambiguous.py (retrieved 2026-10-20T04:21:05Z; SHA-256 0640d5cba898e72764c49039fc837c7b4846b868b3c4d94300d540c62a7f00c0)
- https://raw.githubusercontent.com/gezelligheid0314/SMAN-Bench/8f3358fc8a065454b66d1e8f4f6029a2eb8ac327/mobileagent/mobileagent_singlepath.py (retrieved 2026-10-20T04:19:29Z; SHA-256 f7ec44782984c911ef7c0472fdedccf4286d55ed08f9d072f2599f651a567565)
