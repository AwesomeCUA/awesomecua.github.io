# ScienceBoard

Scientific-workflow tasks for multimodal agents in desktop software such as ChimeraX, KAlgebra, Celestia, Grass GIS and Lean 4, with apps modified to expose state for evaluation.

- Catalog URL: https://awesomecua.github.io/resources/github-os-copilot-scienceboard/
- Original source: https://github.com/OS-Copilot/ScienceBoard
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: desktop
- Topics: evaluation, science
- Evidence checked: 2026-10-16T06:35:58Z
- ID: github:os-copilot/scienceboard

## Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.github.io/resources/github-os-copilot-scienceboard/record.json

## Structured profile

- actions: PyAutoGUI desktop actions, code/tool commands and answer/stop actions according to configured agent mode
- evaluation: Application-specific verifiers inspect state, files, database values, equations, compilation or answer/stop conditions. The official audit records 242 verifier entries across its VM task suite. This profile covers the released VM task definitions; Docker smoke results and Raw/Dual alternatives are separate populations.
- focus: scientific-software desktop workflows, GUI and code-assisted scientific tasks
- observations: desktop screenshots, accessibility-tree observations, set-of-marks with accessibility tree
- setting: interactive

### Count observations

- 169 VM task definitions — tasks/VM/**/*.json at tree 21b5eb0f; excludes tasks/Raw and tasks/Dual (computed) (computed; source: https://api.github.com/repos/OS-Copilot/ScienceBoard/git/trees/main?recursive=1)
- 6 application families — VM suite: Celestia, ChimeraX, GrassGIS, KAlgebra, Lean, TeXstudio (reported; source: https://raw.githubusercontent.com/OS-Copilot/ScienceBoard/HEAD/docs/verifier-audit.md)

Manifest count 169 matches the official verifier audit. Other Raw/Dual definitions can represent alternative execution modes of the same problems and are not added. Official Docker migration documents a 20-task acceptance subset, not a full-suite performance result; legacy VMware remains. External service sign-in/rate limits, amd64 binaries and ChimeraX redistribution terms limit portability. Only code MIT is established; VM, scientific data and bundled apps need their own terms.

## License declarations

- code: MIT — https://raw.githubusercontent.com/OS-Copilot/ScienceBoard/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/OS-Copilot/ScienceBoard/HEAD/README.md (retrieved 2026-10-16T06:35:58Z; SHA-256 4c3fe93aa740dbf4a279a246ddd836f2590a2a36f39b820abe166e38cb484577)
- https://raw.githubusercontent.com/OS-Copilot/ScienceBoard/HEAD/docs/verifier-audit.md (retrieved 2026-10-17T14:21:10Z; SHA-256 d276e11127abc5826bd1b2aa2caf543fcd45a8a60477774e8c8b1054067997ec)
- https://raw.githubusercontent.com/OS-Copilot/ScienceBoard/HEAD/docs/known-issues.md (retrieved 2026-10-17T14:21:10Z; SHA-256 4f90270617c0c1d58f523c0a7f2e4603fa67a49560d68e2f88cfa080d764313b)
- https://api.github.com/repos/OS-Copilot/ScienceBoard/git/trees/main?recursive=1 (retrieved 2026-10-17T14:14:07Z; SHA-256 3398670a517a5d1d71f420dd866493d3f8a77853e3933fd4928103f9a8be1e4f)
- https://raw.githubusercontent.com/OS-Copilot/ScienceBoard/HEAD/sci/base/task.py (retrieved 2026-10-17T14:35:24Z; SHA-256 d6a1481b453c074e34739fd29def56efa35a1dc10e856418f557f067e9ff08c5)
- https://raw.githubusercontent.com/OS-Copilot/ScienceBoard/HEAD/LICENSE (retrieved 2026-10-16T06:41:59Z; SHA-256 cbb1d28b515a39c294963d4bfc24077e669a483fc5ebba9b84a727afd4187426)
