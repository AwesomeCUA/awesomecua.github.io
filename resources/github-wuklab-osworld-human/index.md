# OSWorld-Human

Human reference trajectories and scoring code for measuring the action efficiency of computer-use agents on OSWorld tasks.

- Catalog URL: https://awesomecua.github.io/resources/github-wuklab-osworld-human/
- Original source: https://github.com/WukLab/osworld-human
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: desktop
- Topics: evaluation, efficiency, workflow
- Evidence checked: 2026-10-17T03:59:54Z
- ID: github:wuklab/osworld-human

## Limitations

The repository publishes per-application reference JSON files and score.py. It explicitly states that these evaluation solutions should not be used for training. No root code or data-license declaration was found; no license is inherited from OSWorld, and the score script was not executed.

## Structured profile

- actions: efficiency scores
- evaluation: The scorer consumes OSWorld results and a specified maximum step budget; the README distinguishes single-action and grouped-action WES+ and WES-.
- focus: action efficiency relative to humans
- observations: OSWorld result trajectories, human reference actions
- setting: offline

### Count observations

No count recorded.

Reference solutions are published for evaluation and expressly discouraged for training. No task count is inferred from file count.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/WukLab/osworld-human/HEAD/README.md (retrieved 2026-10-17T03:59:54Z; SHA-256 35c2f4dbed9d9bfc57f4c5a3f2fd70d313d6b463403b482c2fd4066d27b02cc1)
- https://api.github.com/repos/WukLab/osworld-human (retrieved 2026-10-17T03:59:54Z; SHA-256 21c86601da6e77a3326fbcd143e3c5d9a033cd59e6e13973250966dff6f51ae9)
- https://api.github.com/repos/WukLab/osworld-human/git/trees/main?recursive=1 (retrieved 2026-10-17T03:59:55Z; SHA-256 c7b958d7a075adf5d282be08b68ad2b090568da342d4cb4b501ae808e54d0053)
