# Gelato OS-World agent trajectories

Gelato-30B-A3B and GTA1-32B OS-World agent runs, three trials each in the same GPT-5-planned GTA1.5-based harness, with per-task trajectories, initial and step screenshots, and automated results.

- Catalog URL: https://awesomecua.com/resources/url-aed610c413d6bb9f1caa/
- Original source: https://huggingface.co/datasets/mlfoundations/gelato-osworld-agent-trajectories
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop
- Topics: evaluation, observability
- Evidence checked: 2026-10-18T15:37:17Z
- ID: url:aed610c413d6bb9f1caa

## Limitations

The dataset card holds only license metadata; the description and scope come from the official Gelato README, which says this repository provides all of the agent's OS-World trajectories from runs on a fixed OS-World snapshot with GPT-5 as planner and a 50-step limit. The file list also holds the GTA1-32B baseline runs from the same harness, which the README compares but does not name as part of this release. The README reports 58.71 ± 0.66% automated and 61.85 ± 0.79% human-corrected success for Gelato-30B-A3B, against 56.97 ± 1.47% and 59.47 ± 1.27% for GTA1-32B; these were not reproduced. The GitHub repository has no license file; MIT is the dataset card's declaration. Files were not downloaded.

- Record JSON: https://awesomecua.com/resources/url-aed610c413d6bb9f1caa/record.json

## Structured profile

- formats: JSONL, PNG, plain text
- modalities: screenshots, action trajectories, task results
- splits: not recorded
- supervision: agent-generated trajectories, automated task results

### Count observations

- 2,166 task trajectory directories with traj.jsonl — six run directories at Hub revision b9495a8e (computed) (computed; source: https://huggingface.co/api/datasets/mlfoundations/gelato-osworld-agent-trajectories/revision/b9495a8eca361b16d564e62cc0041ed3aecef618)
- 6 run directories — gelato-30b/run_1-3 and gta1-32b_baseline/run_1-3 at Hub revision b9495a8e (computed) (computed; source: https://huggingface.co/api/datasets/mlfoundations/gelato-osworld-agent-trajectories/revision/b9495a8eca361b16d564e62cc0041ed3aecef618)
- 361 distinct OS-World tasks — each run directory at Hub revision b9495a8e (the same task set in all six) (computed) (computed; source: https://huggingface.co/api/datasets/mlfoundations/gelato-osworld-agent-trajectories/revision/b9495a8eca361b16d564e62cc0041ed3aecef618)
- 34,598 PNG screenshots — six run directories at Hub revision b9495a8e (computed) (computed; source: https://huggingface.co/api/datasets/mlfoundations/gelato-osworld-agent-trajectories/revision/b9495a8eca361b16d564e62cc0041ed3aecef618)

Counts come from a script over the pinned Hub file list. Every task directory holds traj.jsonl, result.txt, an initial screenshot and step screenshots; the 361 tasks span 10 OS-World domain folders. Results are the automated evaluation; the README's human re-check of 20 tasks lives in the GitHub repository, not here. Directories, tasks and screenshots are different units and are not summed.

## License declarations

- code: not recorded
- data: MIT — https://huggingface.co/datasets/mlfoundations/gelato-osworld-agent-trajectories/raw/b9495a8eca361b16d564e62cc0041ed3aecef618/README.md
- document: not recorded
- weights: not recorded

- data review: Dataset-card metadata declaration (license: mit) for this release; the card has no other text, and the declaration does not establish rights to the applications or content shown in the screenshots.
  Sources: https://huggingface.co/datasets/mlfoundations/gelato-osworld-agent-trajectories/raw/b9495a8eca361b16d564e62cc0041ed3aecef618/README.md

## Primary evidence

- https://raw.githubusercontent.com/mlfoundations/Gelato/2a8757d473a63d34f71b043192d08dad61d298ee/README.md (retrieved 2026-10-18T15:37:17Z; SHA-256 437eb06553ed6d63d871d18842906b26b6148db5b0a5489064736ef6f5f0cfcf)
- https://huggingface.co/api/datasets/mlfoundations/gelato-osworld-agent-trajectories/revision/b9495a8eca361b16d564e62cc0041ed3aecef618 (retrieved 2026-10-18T15:36:09Z; SHA-256 218daeb50d48f98a41b69b9eae6ef3bb7676b6a1da223574cbf3348490878c6f)
- https://huggingface.co/datasets/mlfoundations/gelato-osworld-agent-trajectories/raw/b9495a8eca361b16d564e62cc0041ed3aecef618/README.md (retrieved 2026-10-18T15:36:09Z; SHA-256 d8d7a46d41a1a37fe4f0a5f637bf55c649310185329127d8a2204632e480be17)
