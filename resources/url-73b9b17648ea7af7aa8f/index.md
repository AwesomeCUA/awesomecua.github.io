# SATraj-OS

Desktop computer-use trajectories with per-step screenshots and success, safety and attack labels, split into capability runs, safe-completion and refusal runs, and a legacy RiOSWorld-derived safety archive.

- Catalog URL: https://awesomecua.com/resources/url-73b9b17648ea7af7aa8f/
- Original source: https://huggingface.co/datasets/AI45Research/SATraj-OS
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop
- Topics: data-generation, safety-security, imitation-learning
- Evidence checked: 2026-10-18T11:15:59Z
- ID: url:73b9b17648ea7af7aa8f

## Limitations

The ungated Hub repository (revision 74deb768) publishes trajectories.jsonl files with zipped or tarred step screenshots in three configs: Capability (tasks from SCOPE-Gen), Safety-v2 (safe completions and refusals on attack-injected Capability tasks) and a legacy Safety archive generated through RiOSWorld rollouts that keeps risky outcomes. Each record has chat-format messages whose assistant turns hold an action description and a coordinate action, plus success, safety, reward and attack fields. The card declares Apache-2.0 for the data; screenshots show third-party desktop applications whose own terms are not addressed. Thunderbird and VLC capability files are present but not listed in the capability config. The Safactory report (arXiv 2605.06230, v2) describes SATraj-OS as produced with its OSGym environment and reports 10,496 trajectories and 158,196 steps. That paper is not yet in the retained archive, so no paper relation is recorded. Publisher model results trained on the data were not reproduced.

- Record JSON: https://awesomecua.com/resources/url-73b9b17648ea7af7aa8f/record.json

## Structured profile

- formats: JSONL, ZIP image archives, tar.gz image archives
- modalities: screenshots, instructions, actions, action descriptions
- splits: capability/train, safety/train, safety_v2/train
- supervision: computer-use trajectories, task-success labels, safety-outcome labels, safe-refusal examples

### Count observations

- 4,344 trajectories — Capability set (reported; source: https://huggingface.co/datasets/AI45Research/SATraj-OS/raw/main/README.md)
- 68,140 interaction steps — Capability set (reported; source: https://huggingface.co/datasets/AI45Research/SATraj-OS/raw/main/README.md)
- 541 trajectories — Safety-v2 set (reported; source: https://huggingface.co/datasets/AI45Research/SATraj-OS/raw/main/README.md)
- 3,486 interaction steps — Safety-v2 set (reported; source: https://huggingface.co/datasets/AI45Research/SATraj-OS/raw/main/README.md)
- 6,152 trajectories — legacy Safety archive (reported; source: https://huggingface.co/datasets/AI45Research/SATraj-OS/raw/main/README.md)
- 88,496 interaction steps — legacy Safety archive (reported; source: https://huggingface.co/datasets/AI45Research/SATraj-OS/raw/main/README.md)

Counts are publisher-reported on the card and were not recomputed from the JSONL files. The card's headline 4,885 trajectories and 71,626 steps cover Capability plus Safety-v2 only. The Safactory report's 10,496 trajectories match Capability plus the legacy Safety archive, but its 158,196 steps do not equal the card's step totals for those sets. A trajectory is a multi-step episode, not a screenshot count.

## License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/AI45Research/SATraj-OS/raw/main/README.md
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/AI45Research/SATraj-OS/raw/main/README.md (retrieved 2026-10-18T11:15:59Z; SHA-256 2e23775770af343f07319036f671ad5561ec387fcbcc2f7ea9199bf90494d977)
- https://huggingface.co/api/datasets/AI45Research/SATraj-OS (retrieved 2026-10-18T11:16:00Z; SHA-256 9afd95cd02de90cb4fab79a80810f5858409128e23a19b6913b79571ea5766f5)
- https://arxiv.org/html/2605.06230v2 (retrieved 2026-10-18T11:16:01Z; SHA-256 f2b9696b13f7052a31f460675dd19e406485816dd284892378c2e281ec3d3d16)
- https://huggingface.co/datasets/AI45Research/SATraj-OS/raw/main/README.md (retrieved 2026-10-18T11:15:59Z; SHA-256 2e23775770af343f07319036f671ad5561ec387fcbcc2f7ea9199bf90494d977)
