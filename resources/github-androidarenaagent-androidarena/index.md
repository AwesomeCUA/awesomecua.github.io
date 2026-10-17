# AndroidArena

Android environment for evaluating language-model-driven agents.

- Catalog URL: https://awesomecua.github.io/resources/github-androidarenaagent-androidarena/
- Original source: https://github.com/AndroidArenaAgent/AndroidArena
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: android
- Topics: evaluation, mobile-navigation
- Evidence checked: 2026-10-16T06:35:58Z
- ID: github:androidarenaagent/androidarena

## Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.github.io/resources/github-androidarenaagent-androidarena/record.json

## Structured profile

- actions: app launch/stop, click/double-click/long-click, text input, swipe/drag and Android navigation, finish
- evaluation: The released evaluator compares trajectories with reference actions using longest-common-subsequence-based task reward and completion. Its reversed redundancy metric is the reference/predicted action-length ratio (with 1e-6 denominator smoothing), multiplied by the LLM success flag. LLM success judgments and instruction-constraint checks are separate metrics. Full reference-dependent evaluation coverage cannot be assumed because complete annotated action sequences are not released.
- focus: multi-step Android tasks, cross-app workflows and instruction constraints
- observations: UI hierarchy text, screenshots, combined text/image observations
- setting: interactive

### Count observations

No count recorded.

README states that task instructions are released but annotated action sequences, apart from the calendar example, will come later. Environment setup targets Android API 33 with uiautomator2 and manual Google-account setup. Public task YAML and evaluator code exist, but benchmark execution and full reference coverage were not verified. No task total is derived from app YAML file counts. Code and data licenses remain unknown.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/AndroidArenaAgent/AndroidArena/HEAD/README.md (retrieved 2026-10-16T06:35:58Z; SHA-256 206bd0dc5220cf754cffc97767cce6a3cd27660ef050a569366bef2331241c60)
- https://raw.githubusercontent.com/AndroidArenaAgent/AndroidArena/HEAD/android_env2/README.md (retrieved 2026-10-17T14:21:10Z; SHA-256 a1e7dc0c5facae030c2cf19aad6511996e7e1198d8d6619268d10c29a1b57bcf)
- https://api.github.com/repos/AndroidArenaAgent/AndroidArena/git/trees/main?recursive=1 (retrieved 2026-10-17T14:14:05Z; SHA-256 edc03388b67143644db4a412e4c888f8c796068daff29f63615f0b6a3a04262a)
- https://raw.githubusercontent.com/AndroidArenaAgent/AndroidArena/HEAD/android_env2/observation.py (retrieved 2026-10-17T14:24:52Z; SHA-256 cfa9d272c85398f54c18d6e7445d680009e8c16d128962235d899592d3094c2f)
- https://raw.githubusercontent.com/AndroidArenaAgent/AndroidArena/HEAD/android_env2/actions.py (retrieved 2026-10-17T14:24:53Z; SHA-256 d25f2edf9202f59615341b62fc6046ac23a6f4cb072a6038ac562506cbdc891c)
- https://raw.githubusercontent.com/AndroidArenaAgent/AndroidArena/HEAD/run_evaluator.py (retrieved 2026-10-17T14:21:10Z; SHA-256 257c42e980a0b14bd74bfcc381a0ecbef2b538c0f1cc1a94d22925efe354fb8e)
