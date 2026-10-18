# AgentSynth tasks and trajectories

Published AgentSynth task definitions and recorded GUI trajectories, with OSWorld and InSTA training configurations and packaged screenshots, thoughts and commands.

- Catalog URL: https://awesomecua.github.io/resources/url-58a209f2b3b970916396/
- Original source: https://huggingface.co/datasets/sunblaze-ucb/AgentSynth
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, web
- Topics: data-generation, long-horizon, imitation-learning
- Evidence checked: 2026-10-18T04:35:17Z
- ID: url:58a209f2b3b970916396

## Limitations

Public Hub manifest contains JSONL task files and trajectory ZIP packages. Counts describe the publisher-reported task collection, not independently counted archive rows or numbers inferred from ZIP filenames.

- Record JSON: https://awesomecua.github.io/resources/url-58a209f2b3b970916396/record.json

## Structured profile

- formats: JSONL, ZIP trajectory packages
- modalities: screenshots, task instructions, LLM thoughts, commands
- splits: train (osworld configuration), train (insta configuration)
- supervision: synthetic tasks, agent trajectories

### Count observations

- > 6,000 tasks — collection described in the dataset card; not an independently counted release-row total (reported; source: https://huggingface.co/datasets/sunblaze-ucb/AgentSynth/raw/9ec3f3139f9786e81aee14b7fff1eb487cc7e991/README.md)

Card maps osworld/train to all_tasks.jsonl and insta/train to task_sequences.jsonl. Six difficulty levels and trajectory screenshots/thoughts/commands are documented. ZIP file labels are not trajectory counts; configurations and composed-task levels are not assumed disjoint.

## License declarations

- code: not recorded
- data: Apache-2.0 — https://huggingface.co/datasets/sunblaze-ucb/AgentSynth/raw/9ec3f3139f9786e81aee14b7fff1eb487cc7e991/README.md
- document: not recorded
- weights: not recorded

- data review: Publisher dataset-card declaration for this release; it does not establish rights to all upstream screenshots, applications or source content.
  Sources: https://huggingface.co/datasets/sunblaze-ucb/AgentSynth/raw/9ec3f3139f9786e81aee14b7fff1eb487cc7e991/README.md

## Primary evidence

- https://huggingface.co/datasets/sunblaze-ucb/AgentSynth/raw/9ec3f3139f9786e81aee14b7fff1eb487cc7e991/README.md (retrieved 2026-10-18T04:35:17Z; SHA-256 c1669d8e3caa27f8cd47c17b243b6a8d42807438d8a6a36074668adc57d33757)
- https://huggingface.co/api/datasets/sunblaze-ucb/AgentSynth (retrieved 2026-10-18T04:33:20Z; SHA-256 0d3797d75dd4089ece8c8d4624f2a726024d25be255255d8770f78de21d75906)
- https://raw.githubusercontent.com/sunblaze-ucb/AgentSynth/HEAD/README.md (retrieved 2026-10-18T04:27:12Z; SHA-256 42e8b8dead7caea3f8b21e93a075e8c895dfc30a25e1470bf97a90940bbf0106)
