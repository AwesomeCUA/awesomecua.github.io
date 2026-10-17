# WindowsWorld

Cross-application Windows benchmark with intermediate task evaluation.

- Catalog URL: https://awesomecua.github.io/resources/github-hitsz-tmg-windowsworld/
- Original source: https://github.com/HITsz-TMG/WindowsWorld
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: windows
- Topics: evaluation, cross-app
- Evidence checked: 2026-10-16T06:35:59Z
- ID: github:hitsz-tmg/windowsworld

## Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.github.io/resources/github-hitsz-tmg-windowsworld/record.json

## Structured profile

- actions: PyAutoGUI, UiPath Computer_13 action interface
- evaluation: Publisher distinguishes S_int (intermediate checkpoint score on L1–L3) and S_final (final completion on L1–L4). Documented step budgets are 15/25/40/20 for L1/L2/L3/L4. Preserve level, observation mode, agent interface and checkpoint/final metric when reporting a run.
- focus: multi-application Windows workflows, intermediate-state and final-goal completion
- observations: screenshot, accessibility tree, screenshot plus accessibility tree, set-of-marks
- setting: interactive

### Count observations

- 181 tasks — WindowsWorld benchmark described in the retained README (reported; source: https://raw.githubusercontent.com/HITsz-TMG/WindowsWorld/HEAD/README.md)
- 17 desktop applications — WindowsWorld coverage described in the retained README (reported; source: https://raw.githubusercontent.com/HITsz-TMG/WindowsWorld/HEAD/README.md)

Interactive VMware/Windows environment. The public repository includes benchmark.json, task/evaluator code and monitoring support; the README refers VM import to Installation Guide.md, whose distribution links and payloads were not inspected for this profile. Checkpoint counts and application counts are not extra tasks. Apache-2.0 is recorded for repository code; Windows, apps and VM artifacts retain separate terms.

## License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/HITsz-TMG/WindowsWorld/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/HITsz-TMG/WindowsWorld/HEAD/README.md (retrieved 2026-10-16T06:35:59Z; SHA-256 9857bd8ae9f521f152761ae3bd85debe4e7471aad34c9eb47618332948bca6c9)
- https://api.github.com/repos/HITsz-TMG/WindowsWorld/git/trees/main?recursive=1 (retrieved 2026-10-17T14:14:05Z; SHA-256 490c9257d56f0a5214e6424e02490379b0b00ca2f7d4626fd5d14e17239d05ed)
- https://raw.githubusercontent.com/HITsz-TMG/WindowsWorld/HEAD/LICENSE (retrieved 2026-10-16T06:41:59Z; SHA-256 a8d1d88a0f9cce3cdbff73b03a80dc5e5d69e3ba2443946c268815a550c9e0ec)
