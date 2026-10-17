# OS-Harm

Benchmark for safety of computer-use agents across misuse, prompt injection, and unintended model behavior.

- Catalog URL: https://awesomecua.github.io/resources/github-tml-epfl-os-harm/
- Original source: https://github.com/tml-epfl/os-harm
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: desktop
- Topics: safety-security, evaluation
- Evidence checked: 2026-10-16T09:36:33Z
- ID: github:tml-epfl/os-harm

## Limitations

The retained task-ID manifests have 50 misuse, 10 injection and 50 misbehavior IDs. Prompt-injection execution expands vectors/goals; the reported 150-task total must not be read as 150 unique released IDs.

- Record JSON: https://awesomecua.github.io/resources/github-tml-epfl-os-harm/record.json

## Structured profile

- actions: OSWorld/PyAutoGUI desktop interaction
- evaluation: Automated LLM judge scores both task accuracy and safety from saved execution traces. Keep judge model/prompt version and harm category with a result; the scripts separately compute predicted metrics. This is an interactive desktop safety benchmark, not a single offline grounding score.
- focus: deliberate misuse, prompt-injection safety, unintended harmful behavior during normal tasks
- observations: screenshot, accessibility tree, screenshot plus accessibility tree, set-of-marks
- setting: interactive

### Count observations

- 150 tasks as reported by the paper/README — reported benchmark total; not a recount of unique released task IDs (reported; source: https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/README.md)
- 50 task IDs — released misuse task-ID list; before injection/goal expansion (computed) (computed; source: https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/evaluation_examples/test_misuse.json)
- 10 task IDs — released injection task-ID list; before injection/goal expansion (computed) (computed; source: https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/evaluation_examples/test_injection.json)
- 50 task IDs — released misbehavior task-ID list; before injection/goal expansion (computed) (computed; source: https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/evaluation_examples/test_misbehavior.json)

README/paper reports 150 tasks, whereas retained misuse/injection/misbehavior lists contain 50/10/50 IDs. run.py expands injection vectors/goals, so the released ID inventory is not a direct recount of paper settings; the complete expanded total was not reconstructed. Judge agreement F1 values in the README measure agreement with human labels, not agent success. Experiments use OSWorld desktop apps, with VMware documented as tested and screenshot/a11y/SOM observation choices. Code Apache-2.0 does not establish VM/app/data rights. Publisher asks that the benchmark not be used directly as agent training data.

## License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/README.md (retrieved 2026-10-16T09:36:33Z; SHA-256 d001158f58ac37b01c8470224db1567a52feb8010877305f7966637cf7400706)
- https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/run.py (retrieved 2026-10-17T14:23:14Z; SHA-256 86dd59a252fd654fc3244268a75de37b2c7f97e16f6b1de8c4cf885458a422f7)
- https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/evaluation_examples/test_misuse.json (retrieved 2026-10-17T14:22:04Z; SHA-256 8ff6092a51cc924c5225ace01c011c6481a2461eb0a47b7360eddaf6619b898c)
- https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/evaluation_examples/test_injection.json (retrieved 2026-10-17T14:22:04Z; SHA-256 b4c451236bb4ff36eb7e790dfa8cb517bffb245602bc441080314b13c8aba54f)
- https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/evaluation_examples/test_misbehavior.json (retrieved 2026-10-17T14:22:05Z; SHA-256 8eb6bade72696c3c0b53160a05b006a773c9e553ab5e401418b54d9acc98c0f2)
- https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/LICENSE (retrieved 2026-10-16T09:39:34Z; SHA-256 7c3ab1eeeb073d92238ecb65ffaebe58ab5922929b115a7c0b64eb4f9a9afc2f)
