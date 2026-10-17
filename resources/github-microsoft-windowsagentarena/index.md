# Windows Agent Arena

Windows desktop agent evaluation environment.

- Catalog URL: https://awesomecua.github.io/resources/github-microsoft-windowsagentarena/
- Original source: https://github.com/microsoft/WindowsAgentArena
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: windows, desktop
- Topics: evaluation
- Evidence checked: 2026-10-16T06:35:57Z
- ID: github:microsoft/windowsagentarena

## Limitations

Inclusion does not establish reproducibility or endorsement.

## Structured profile

- actions: agent-defined Windows interactions
- evaluation: Task configuration selects an evaluator and expected application or system outcome; evaluators return a reward for the resulting state.
- focus: Windows task completion, desktop workflows
- observations: screenshots, accessibility information, screen-element detections
- setting: interactive

### Count observations

- 154 task definitions — evaluation_examples_windows/test_all.json (computed) (computed; source: https://raw.githubusercontent.com/microsoft/WindowsAgentArena/HEAD/src/win-arena-container/client/evaluation_examples_windows/test_all.json)

Counted unique identifiers in the inspected manifest. Normal and hard modes differ in how much task setup the agent must perform. Record the difficulty and observation/backend configuration with each result; no VM was launched.

## License declarations

- code: MIT — https://raw.githubusercontent.com/microsoft/WindowsAgentArena/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/microsoft/WindowsAgentArena/HEAD/README.md (retrieved 2026-10-16T06:35:57Z; SHA-256 e481abd422a4cc8b819ad84b32684e4af641e18a7c0d277dd608cfd5d3c5e6ad)
- https://raw.githubusercontent.com/microsoft/WindowsAgentArena/HEAD/README.md (retrieved 2026-10-16T06:35:57Z; SHA-256 e481abd422a4cc8b819ad84b32684e4af641e18a7c0d277dd608cfd5d3c5e6ad)
- https://raw.githubusercontent.com/microsoft/WindowsAgentArena/HEAD/docs/Develop-Tasks.md (retrieved 2026-10-17T02:06:30Z; SHA-256 c565dc02ab0049bf9710b87e2760dda8d7c92268ea78f0354952695ab59c0de3)
- https://raw.githubusercontent.com/microsoft/WindowsAgentArena/HEAD/src/win-arena-container/client/evaluation_examples_windows/test_all.json (retrieved 2026-10-17T02:06:30Z; SHA-256 902fb24cf0a9e146bf6c29288e74a7254fe40294e49dd47363e0b15d65608fef)
- https://raw.githubusercontent.com/microsoft/WindowsAgentArena/HEAD/LICENSE (retrieved 2026-10-16T06:41:57Z; SHA-256 9906940f61b1f0b533fa7d99baf55178b2808fbe113ea51dfbfad8572ccd5f2b)
