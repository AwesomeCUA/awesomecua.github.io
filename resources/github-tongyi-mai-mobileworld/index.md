# MobileWorld (Tongyi-MAI)

A containerized Android evaluation environment with GUI-only, agent-user interaction and MCP-augmented tasks, plus checks on application and backend state.

- Catalog URL: https://awesomecua.github.io/resources/github-tongyi-mai-mobileworld/
- Original source: https://github.com/Tongyi-MAI/MobileWorld
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: android
- Topics: evaluation, mobile-navigation, human-in-the-loop, tool-integration
- Evidence checked: 2026-10-17T09:12:16Z
- ID: github:tongyi-mai/mobileworld

## Limitations

This is Tongyi-MAI/MobileWorld, distinct from jacklishufan/MobileWorld (MobileWorldBench). Public source includes task definitions, verification logic and environment orchestration. The README reports 201 tasks across 20 applications; this is not an independent count of the evolving task tree. Linux/KVM or WSL2/KVM is required by the documented host setup, with macOS support in progress. MCP and simulated-user settings can require separate external services.

- Record JSON: https://awesomecua.github.io/resources/github-tongyi-mai-mobileworld/record.json

## Structured profile

- actions: Android GUI operations, MCP calls when enabled, agent-user interaction when enabled
- evaluation: The publisher documents text-answer matching, backend database verification, local-storage inspection and application callbacks.
- focus: Android task completion, agent-user interaction, hybrid GUI and MCP use
- observations: Android application interface, user-agent interaction when enabled
- setting: interactive

### Count observations

- 201 tasks — README benchmark overview (reported; source: https://raw.githubusercontent.com/Tongyi-MAI/MobileWorld/HEAD/README.md)
- 20 mobile applications — README benchmark overview (reported; source: https://raw.githubusercontent.com/Tongyi-MAI/MobileWorld/HEAD/README.md)

Publisher-reported inventory. GUI-only, agent-user and MCP-augmented configurations have different dependencies and task eligibility; preserve enabled modes and step budget with results.

## License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/Tongyi-MAI/MobileWorld/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: Repository code license; self-hosted applications, model APIs and MCP services keep their own terms.
  Sources: https://raw.githubusercontent.com/Tongyi-MAI/MobileWorld/HEAD/LICENSE

## Primary evidence

- https://raw.githubusercontent.com/Tongyi-MAI/MobileWorld/HEAD/README.md (retrieved 2026-10-17T09:12:16Z; SHA-256 fbc306b3414dfdb230171358efd6eb8d67573fbb94e11487a4a7e971e2abf0d9)
- https://api.github.com/repos/Tongyi-MAI/MobileWorld (retrieved 2026-10-17T09:12:15Z; SHA-256 266e1fe5b5b1a4c1540ab0fd5eba206395084ee283f0079f424930a156cf8e18)
- https://api.github.com/repos/Tongyi-MAI/MobileWorld/git/trees/main?recursive=1 (retrieved 2026-10-17T09:14:08Z; SHA-256 14500ed2dfa14bb5c34211090f0c8827e4a16c3233e35a2d695c0d7261f9358b)
- https://raw.githubusercontent.com/Tongyi-MAI/MobileWorld/HEAD/LICENSE (retrieved 2026-10-17T09:14:09Z; SHA-256 b09fcaf4fbc265223c2479c410beef2b98c5e687c78ecedf3452aa12ffc465f1)
