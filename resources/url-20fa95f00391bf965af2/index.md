# DynamicGUIBench

Desktop benchmark of 500 OSWorld-style tasks whose interfaces change between observations through scripted pop-ups, timed edits and shifting lists, with bilingual instructions and end-state evaluators.

- Catalog URL: https://awesomecua.com/resources/url-20fa95f00391bf965af2/
- Original source: https://huggingface.co/datasets/L1007555652/osworld_env
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: evaluation, state-tracking, robustness
- Evidence checked: 2026-10-18T15:40:40Z
- ID: url:20fa95f00391bf965af2

## Limitations

The Hub repository is named osworld_env; its card titles the release DynamicGUIBench. The manifest at revision 44adf69d holds 500 task JSON files under dynamic/ plus per-application asset folders and three stray .nfs files; it contains no agent code. The card states that its Qwen3-VL and UI-TARS results come from the original 150-task release and do not carry over to the 500-task expansion. Tasks run in a separately configured OSWorld environment. No data license is declared.

- Record JSON: https://awesomecua.com/resources/url-20fa95f00391bf965af2/record.json

## Structured profile

- actions: desktop GUI actions through a separately configured agent
- evaluation: Each task JSON names an OSWorld evaluator function with its expected result for an executable end-state check; a config_myself block launches applications and scripts the dynamic events during the run.
- focus: desktop task completion when interface state changes between observations
- observations: English and Chinese task instructions, live desktop application state
- setting: interactive

### Count observations

- 500 task JSON files — dynamic/ directory at Hub revision 44adf69d (computed) (computed; source: https://huggingface.co/api/datasets/L1007555652/osworld_env)
- 150 tasks — original verified release before the 20 August 2026 expansion (reported; source: https://huggingface.co/datasets/L1007555652/osworld_env/raw/44adf69d36a9bd27fbf2173fa619eb0ee92da095/README.md)

Computed per-folder task files: Chrome 75, GIMP 45, LibreOffice Calc 50, Impress 42, Writer 50, multi-app 66, OS 42, Thunderbird 44, VLC 38 and VS Code 48. The card groups tasks into interruptive UI states, ephemeral references, dynamic list selection and content-triggered interaction.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: Neither the dataset card nor the Hub metadata declares a license for the task files or assets.
  Sources: https://huggingface.co/datasets/L1007555652/osworld_env/raw/44adf69d36a9bd27fbf2173fa619eb0ee92da095/README.md

## Primary evidence

- https://huggingface.co/datasets/L1007555652/osworld_env/raw/44adf69d36a9bd27fbf2173fa619eb0ee92da095/README.md (retrieved 2026-10-18T15:40:40Z; SHA-256 8492eacf5283bbb02e54c8f4f340bbfebee6539f49f8933743ac310abdf418e0)
- https://huggingface.co/api/datasets/L1007555652/osworld_env (retrieved 2026-10-18T15:40:40Z; SHA-256 2f568cf0a9b4a7691097809c10f8455372841d6f09421287e4380b1b3de8e3e0)
- https://huggingface.co/datasets/L1007555652/osworld_env/raw/44adf69d36a9bd27fbf2173fa619eb0ee92da095/dynamic/chrome/chrome_addcart.json (retrieved 2026-10-18T15:40:41Z; SHA-256 64334a72b6d5a9e2cf3a04650db9cd4a73fd36919648853ae266fcc88d60bd0b)
