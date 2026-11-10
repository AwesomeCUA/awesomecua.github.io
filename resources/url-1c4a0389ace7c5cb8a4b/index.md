# OSWorld 2.0 task classes

Gated Hub release of the OSWorld 2.0 benchmark's Python task classes, which hold task setup and evaluator logic kept out of the public code to limit leakage and are pinned per benchmark release.

- Catalog URL: https://awesomecua.com/resources/url-1c4a0389ace7c5cb8a4b/
- Original source: https://huggingface.co/datasets/xlangai/osworld_v2_tasks
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: evaluation, long-horizon
- Evidence checked: 2026-10-18T11:47:41Z
- ID: url:1c4a0389ace7c5cb8a4b

## Limitations

The Hub API at revision 0a1aadad reports gated 'auto' (access is approved automatically after a logged-in request) and 147 files: 108 task_*.py classes, 34 task implementation notes, a task-hash manifest and the card. The card and files sit behind the gate; the description comes from the OSWorld-V2 README, which links this dataset as its data and downloads it into evaluation_examples/task_class. The README pins task, asset and website snapshots per benchmark release (osworld-v2.1 recommended, plus osworld-v2-2026.08.08 and osworld-v2-2026.06.24); main-branch file counts are distinct from release task counts. Task assets are in the separate gated xlangai/osworld_v2_assets_gated dataset and anonymous runtime assets in xlangai/osworld_v2_assets; neither is covered here. The code repository github.com/xlang-ai/OSWorld-V2 has no active catalog record, so no component relation is recorded. The card metadata declares Apache-2.0.

- Record JSON: https://awesomecua.com/resources/url-1c4a0389ace7c5cb8a4b/record.json

## Structured profile

- Formats: Python, Markdown, JSON manifest
- Modalities: Python task classes, implementation notes
- Splits: not recorded
- Supervision: task setup and evaluator code

### Count observations

- 108 task class files — task_*.py on the main branch at revision 0a1aadad (computed) (computed; source: https://huggingface.co/api/datasets/xlangai/osworld_v2_tasks)
- 34 implementation note files — implementation_notes/task_*.md on the main branch at revision 0a1aadad (computed) (computed; source: https://huggingface.co/api/datasets/xlangai/osworld_v2_tasks)

Counts are files in the public main-branch manifest. Benchmark releases are pinned to their own tags; these are main-branch counts.

## License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/xlangai/osworld_v2_tasks
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/api/datasets/xlangai/osworld_v2_tasks (retrieved 2026-10-18T11:47:41Z; SHA-256 b9ef429ad3f9ef51702093db5bc1cb4e53d6ed5624cd2003162c4fedb3855c87)
- https://raw.githubusercontent.com/xlang-ai/OSWorld-V2/d9953673daf55381237e058fd9388cc2d74c5538/README.md (retrieved 2026-10-18T11:47:41Z; SHA-256 0d1d3e91e8786720a167b8bc26a41bd27832eefae652ab1c166193073e99b2b4)
- https://huggingface.co/api/datasets/xlangai/osworld_v2_tasks (retrieved 2026-10-18T11:47:41Z; SHA-256 b9ef429ad3f9ef51702093db5bc1cb4e53d6ed5624cd2003162c4fedb3855c87)
