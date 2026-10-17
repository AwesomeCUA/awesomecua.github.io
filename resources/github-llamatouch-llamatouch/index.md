# LlamaTouch

Mobile UI task evaluation using application state information.

- Catalog URL: https://awesomecua.github.io/resources/github-llamatouch-llamatouch/
- Original source: https://github.com/LlamaTouch/LlamaTouch
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: android
- Topics: evaluation
- Evidence checked: 2026-10-16T06:35:58Z
- ID: github:llamatouch/llamatouch

## Limitations

Inclusion does not establish reproducibility or endorsement.

## Structured profile

- actions: device actions through AgentEnv
- evaluation: Checks whether the recorded execution visits all annotated essential states rather than requiring an identical action sequence.
- focus: mobile task completion, essential-state evaluation
- observations: screenshots, view hierarchies, Android activity names
- setting: interactive

### Count observations

- 495 tasks — complete task collection (reported; source: https://raw.githubusercontent.com/LlamaTouch/LlamaTouch/HEAD/README.md)
- 102 tasks — AITW-derived subset (reported; source: https://raw.githubusercontent.com/LlamaTouch/LlamaTouch/HEAD/README.md)
- 393 tasks — self-constructed subset (reported; source: https://raw.githubusercontent.com/LlamaTouch/LlamaTouch/HEAD/README.md)
- 46 Android applications — self-constructed subset (reported; source: https://raw.githubusercontent.com/LlamaTouch/LlamaTouch/HEAD/README.md)

Application coverage refers to the self-constructed subset. Task execution and essential-state annotation are separate components; counts are publisher-reported, not a fresh task-file recount.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/LlamaTouch/LlamaTouch/HEAD/README.md (retrieved 2026-10-16T06:35:58Z; SHA-256 4c4fe0fa92961f7286b6553b13117b2942e8482a48b7120a79e57dce2f8d42b9)
- https://raw.githubusercontent.com/LlamaTouch/LlamaTouch/HEAD/README.md (retrieved 2026-10-16T06:35:58Z; SHA-256 4c4fe0fa92961f7286b6553b13117b2942e8482a48b7120a79e57dce2f8d42b9)
