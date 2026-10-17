# ColorBench

A graph-based mobile GUI benchmark that evaluates long tasks through screenshot states and multiple valid or erroneous transitions, including reflection, replanning and backtracking.

- Catalog URL: https://awesomecua.github.io/resources/github-madeagents-colorbench/
- Original source: https://github.com/MadeAgents/ColorBench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: android
- Topics: evaluation, mobile-navigation, long-horizon, cross-app
- Evidence checked: 2026-10-17T11:18:16Z
- ID: github:madeagents/colorbench

## Limitations

The source tree contains graph and task JSON files plus construction/evaluation code; the linked ungated Hub provides the screenshot archive. The environment is static but interactive and graph-based, not a live-device deployment. Counts are publisher-reported task/app inventories. Apache-2.0 declarations for repository code and the Hub dataset are separately retained; third-party application visuals are not granted additional rights by this catalog.

- Record JSON: https://awesomecua.github.io/resources/github-madeagents-colorbench/record.json

## Structured profile

- actions: mobile GUI operations along graph transitions
- evaluation: The publisher reports success rate, completion rate and atomic-capability diagnostics using graph-based evaluation.
- focus: long-horizon mobile task completion, multi-path graph interaction
- observations: mobile screenshots represented as graph states
- setting: interactive

### Count observations

- 175 tasks — reported ColorBench benchmark (reported; source: https://raw.githubusercontent.com/MadeAgents/ColorBench/HEAD/README.md)
- 101 cross-app tasks — reported ColorBench benchmark (reported; source: https://raw.githubusercontent.com/MadeAgents/ColorBench/HEAD/README.md)
- 74 single-app tasks — reported ColorBench benchmark (reported; source: https://raw.githubusercontent.com/MadeAgents/ColorBench/HEAD/README.md)
- 21 mobile applications — reported ColorBench benchmark (reported; source: https://raw.githubusercontent.com/MadeAgents/ColorBench/HEAD/README.md)

The interaction environment replays graph states rather than running real user accounts. The 101 and 74 subsets partition the reported 175 tasks; do not add the three counts.

## License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/MadeAgents/ColorBench/HEAD/LICENSE
- data: apache-2.0 — https://huggingface.co/datasets/Norsheep/ColorBench/raw/main/README.md
- document: not recorded
- weights: not recorded

- code review: Repository source LICENSE.
  Sources: https://raw.githubusercontent.com/MadeAgents/ColorBench/HEAD/LICENSE

- data review: Publisher metadata for the separately hosted screenshot archive; underlying third-party content retains applicable rights.
  Sources: https://huggingface.co/datasets/Norsheep/ColorBench/raw/main/README.md

## Primary evidence

- https://raw.githubusercontent.com/MadeAgents/ColorBench/HEAD/README.md (retrieved 2026-10-17T11:18:16Z; SHA-256 5c0190fffb68b91c1855a408f6a5e252871d94000b95fa258504a3c100600cec)
- https://api.github.com/repos/MadeAgents/ColorBench (retrieved 2026-10-17T11:18:16Z; SHA-256 2f6940503cc0d6cb97bdf142d6b8c6ab116de82227f2fa6d97fd56d7e5aebec0)
- https://api.github.com/repos/MadeAgents/ColorBench/git/trees/main?recursive=1 (retrieved 2026-10-17T11:22:54Z; SHA-256 6a00c093a6794ec4a172d30b70fdabc17400584a9e25a157a47a7661dbdd20fa)
- https://huggingface.co/api/datasets/Norsheep/ColorBench (retrieved 2026-10-17T11:23:06Z; SHA-256 c0c3286b5150e128e55034ba0393ef85f7fcf73e4b73f4276389a04c9bcec919)
- https://huggingface.co/datasets/Norsheep/ColorBench/raw/main/README.md (retrieved 2026-10-17T11:23:06Z; SHA-256 4bcf87ecfbbb8e07a01b21415a970c8b53a5283bf6872b657040d3f45c9241f7)
- https://raw.githubusercontent.com/MadeAgents/ColorBench/HEAD/LICENSE (retrieved 2026-10-17T11:22:54Z; SHA-256 130976c026bcafa9dcc479697fe6595dbefb73cdb375fc47b8478acc16e6ea73)
