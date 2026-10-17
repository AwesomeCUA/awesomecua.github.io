# MobileGym

A browser-hosted mobile-app simulator with programmable state, parameterized tasks and deterministic state-checking judges for parallel GUI-agent evaluation and online reinforcement learning.

- Catalog URL: https://awesomecua.github.io/resources/github-purewhiter-mobilegym/
- Original source: https://github.com/Purewhiter/mobilegym
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, mobile-navigation, reinforcement-learning, sandbox
- Evidence checked: 2026-10-17T11:18:19Z
- ID: github:purewhiter/mobilegym

## Limitations

The inspected code release is v0.1.0, with a separately listed data-v0.1.0 archive. The interaction target is a browser-hosted Android-like simulation; real-device transfer results are separate publisher-reported experiments. Source split manifests contain 160 training IDs and 256 test IDs with no duplicates or overlap. Platform/training code declares Apache-2.0. LICENSE-DATA applies CC-BY-NC-4.0 only to maintainer-created compilation, curation and synthetic content, and explicitly leaves third-party UGC/API terms and author rights separate. No runtime, archive or model was executed/downloaded.

- Record JSON: https://awesomecua.github.io/resources/github-purewhiter-mobilegym/record.json

## Structured profile

- actions: tap, type, swipe, back, home, drag, complete
- evaluation: Deterministic task judges inspect state changes; reported metrics distinguish success, progress, false completion and unexpected side effects.
- focus: mobile GUI task completion in simulation, state verification and parallel training
- observations: simulated mobile screenshots, structured simulator state for judges
- setting: interactive

### Count observations

- 416 task templates — publisher benchmark overview (reported; source: https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/README.md)
- 28 simulated apps — publisher benchmark overview (reported; source: https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/README.md)
- 160 task identifiers — bench_env/splits/train.txt (computed) (computed; source: https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/bench_env/splits/train.txt)
- 256 task identifiers — bench_env/splits/test.txt (computed) (computed; source: https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/bench_env/splits/test.txt)

The split-ID inventory is not a count of sampled trajectories, live Android apps or real user accounts. Extra runtime/data dependencies and third-party content terms remain distinct.

## License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/LICENSE
- data: CC-BY-NC-4.0 — https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/LICENSE-DATA
- document: not recorded
- weights: not recorded

- code review: Core source LICENSE; mobilegym-rl has a separate matching Apache-2.0 license and retains vendored notices.
  Sources: https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/LICENSE

- data review: Limited to maintainers’ dataset compilation/curation and authored synthetic content; third-party user content remains subject to platform terms and its authors’ rights.
  Sources: https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/LICENSE-DATA

## Primary evidence

- https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/README.md (retrieved 2026-10-17T11:18:19Z; SHA-256 815294dd2aa4bf8264978c3bfedee85a3a2c835c511860c732314a4c282a974a)
- https://api.github.com/repos/Purewhiter/mobilegym (retrieved 2026-10-17T11:18:18Z; SHA-256 48df04a2fbf479f956d5c7f22d7006c22f591b8857cab8a1d64c196349045495)
- https://api.github.com/repos/Purewhiter/mobilegym/git/trees/main?recursive=1 (retrieved 2026-10-17T11:22:56Z; SHA-256 68f1fa16c0999079bccc3aa1b6c3c22b72b570a5b971837c5026ea5408853375)
- https://api.github.com/repos/Purewhiter/mobilegym/releases/tags/v0.1.0 (retrieved 2026-10-17T11:23:08Z; SHA-256 cb1057b0a0a2ef7ab781414c168bb41f0f3da88afc042ce266d6063493561bde)
- https://api.github.com/repos/Purewhiter/mobilegym/releases/tags/data-v0.1.0 (retrieved 2026-10-17T11:23:09Z; SHA-256 ad0c86a6cdde2caba8bd1f98b121803817d93718319a863b0b833da2760c23aa)
- https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/LICENSE (retrieved 2026-10-17T11:22:59Z; SHA-256 7618cd7de039c264759ca8ca0b9130c6de63a4536dcf436baedd4cfbf639073e)
- https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/mobilegym-rl/LICENSE (retrieved 2026-10-17T11:27:50Z; SHA-256 58d1e17ffe5109a7ae296caafcadfdbe6a7d176f0bc4ab01e12a689b0499d8bd)
- https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/LICENSE-DATA (retrieved 2026-10-17T11:22:59Z; SHA-256 e222fa518c5003d425ee9b371e987c95ba10e52b54fea078571254ae6a8eaf23)
- https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/bench_env/splits/train.txt (retrieved 2026-10-17T11:27:49Z; SHA-256 0ecef460fecfd8aa91dcbb2cd4cca17b033f620f85a50d7f0b598ed19a27c0eb)
- https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/bench_env/splits/test.txt (retrieved 2026-10-17T11:27:48Z; SHA-256 a3d485015d480f4f1ebbd12dbbf02c25c0aa667d1afcf5f6fa35f0263a82c567)
