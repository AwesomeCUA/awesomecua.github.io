# MobileGym++ / MobileGym++ Bench

Browser-rendered mobile simulation with resettable app state and a shared task suite for GUI-only and GUI-plus-tool agents.

- Catalog URL: https://awesomecua.github.io/resources/github-openmobile2-mobilegym-plusplus/
- Original source: https://github.com/OpenMobile2/MobileGym-plusplus
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: mobile-navigation, evaluation, cross-app, tool-integration
- Evidence checked: 2026-10-17T01:48:10Z
- ID: github:openmobile2/mobilegym-plusplus

## Limitations

These clients simulate named commercial applications and are not those commercial products. The code and simulator data have distinct license files. No benchmark run was performed.

- Record JSON: https://awesomecua.github.io/resources/github-openmobile2-mobilegym-plusplus/record.json

## Structured profile

- actions: GUI gestures, foreground-app tool calls in hybrid mode
- evaluation: Programmatic checkers inspect changes in application state; both modes share task definitions and initial states.
- focus: task completion, cross-application workflows, GUI and app-native tool comparison
- observations: screenshots
- setting: interactive

### Count observations

- 215 task definitions — official.json (computed) (computed; source: https://raw.githubusercontent.com/OpenMobile2/MobileGym-plusplus/HEAD/bench_env/benchmark/official.json)
- 63 simulated clients — complete simulator installation (reported; source: https://raw.githubusercontent.com/OpenMobile2/MobileGym-plusplus/HEAD/README.md)
- 35 simulated clients — new clients in this release (reported; source: https://raw.githubusercontent.com/OpenMobile2/MobileGym-plusplus/HEAD/README.md)

The task count was checked against unique task_id values in the published manifest. The 35 new clients are a subset of 63 total clients. This simulator runs in a browser; Android-emulator apps are a separate part of OpenMobile-2.

## License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/OpenMobile2/MobileGym-plusplus/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/OpenMobile2/MobileGym-plusplus/HEAD/README.md (retrieved 2026-10-17T01:48:10Z; SHA-256 d9f850ec196e715650e679cb81515adaa64ddc5a60a882bfe97b0f6a098ddc83)
- https://os-copilot.github.io/OpenMobile2-Home/ (retrieved 2026-10-17T01:46:06Z; SHA-256 9b385e9f6aa2f7169f616a76887df3b76df605cb2bea071d99ee7ca3f9b659cc)
- https://raw.githubusercontent.com/OpenMobile2/MobileGym-plusplus/HEAD/bench_env/benchmark/official.json (retrieved 2026-10-17T01:50:11Z; SHA-256 35c1641b349201c68917fbe4c4036814487678e9588d9b1c903af26917800316)
- https://raw.githubusercontent.com/OpenMobile2/MobileGym-plusplus/HEAD/LICENSE (retrieved 2026-10-17T01:52:51Z; SHA-256 7618cd7de039c264759ca8ca0b9130c6de63a4536dcf436baedd4cfbf639073e)
