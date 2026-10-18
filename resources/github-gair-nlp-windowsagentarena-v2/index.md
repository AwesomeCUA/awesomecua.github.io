# WindowsAgentArena-V2

Windows benchmark revision with task/evaluator fixes and VM-initialization support, documented alongside PC-Agent-E.

- Catalog URL: https://awesomecua.github.io/resources/github-gair-nlp-windowsagentarena-v2/
- Original source: https://github.com/GAIR-NLP/WindowsAgentArena-V2
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: desktop, windows
- Topics: evaluation, cross-app, robustness
- Evidence checked: 2026-10-18T04:35:17Z
- ID: github:gair-nlp/windowsagentarena-v2

## Limitations

Repository contains executable evaluation code and task definitions. README links a separate Windows 11 VM snapshot; that image and its software licenses/access were not validated by downloading it. MIT is recorded for repository code only. Default task selection and the reported full suite have different scopes.

- Record JSON: https://awesomecua.github.io/resources/github-gair-nlp-windowsagentarena-v2/record.json

## Structured profile

- actions: PyAutoGUI
- evaluation: Runner exposes four observation choices and uses PyAutoGUI. count.py sums the last score in each results.json and divides by the number of traj.jsonl files, multiplying by 100; it separately reports result/trajectory/error-file coverage. This denominator is not automatically the full benchmark size.
- focus: Windows desktop task execution, revised task evaluators
- observations: screenshot, accessibility tree, screenshot plus accessibility tree, set-of-marks
- setting: interactive

### Count observations

- 141 tasks — full WindowsAgentArena-V2 suite reported by README (reported; source: https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/README.md)
- 11 Windows applications — full suite coverage reported by README (reported; source: https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/README.md)
- 20 task IDs — shipped test_custom.json selection (computed) (computed; source: https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/src/win-arena-container/client/evaluation_examples_windows/test_custom.json)

README sample config uses max_steps=30. The shipped selected-task index has 20 IDs, not 141; preserve the selected task list, trial ID, score coverage and VM snapshot when comparing runs. Docker/Windows-11 setup is required. No VM or benchmark was executed.

## License declarations

- code: MIT — https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: Reviewed repository license declaration for code; third-party dependencies, data, weights and executable environment images are separate.
  Sources: https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/LICENSE

## Primary evidence

- https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/README.md (retrieved 2026-10-18T04:35:17Z; SHA-256 1dd744ce565ec00b20ea5637eb7bc6112e97fb9044bd9a471f7cc4b7227ca344)
- https://api.github.com/repos/GAIR-NLP/WindowsAgentArena-V2 (retrieved 2026-10-18T04:33:20Z; SHA-256 0b0af02d3c2c4916dd786b868b99d60b4681927d0273a23661eb2b6db7cf9404)
- https://api.github.com/repos/GAIR-NLP/WindowsAgentArena-V2/git/trees/main?recursive=1 (retrieved 2026-10-18T04:35:16Z; SHA-256 638ef9ee593a3a560c1d0b3fb2bc4a9d31a3e904c0111971924a6d66e1763aa6)
- https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/src/win-arena-container/client/run.py (retrieved 2026-10-18T04:40:39Z; SHA-256 494de9e74629ac2c55358629c0d9ba13703f36317057a3089388fbb6e80ca28f)
- https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/src/win-arena-container/client/evaluation_examples_windows/test_custom.json (retrieved 2026-10-18T04:40:39Z; SHA-256 e45ba7fdc7555f46ad1b4cfaab79d00754909d053fc49d5bab651b0fb593439b)
- https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/count.py (retrieved 2026-10-18T04:40:39Z; SHA-256 f12147ac78c39c72eb75f9c37b293ba7fff3209fc5758fd51c69abbd96d80a97)
- https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/LICENSE (retrieved 2026-10-18T04:35:20Z; SHA-256 2a2d1e46940b570d60f5e2198ed27fcec6316fc8489e9660da8777dbd75aaeec)
