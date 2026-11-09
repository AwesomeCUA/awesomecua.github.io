# CUA Speedrun results

Trajectory archives and per-task results from CUA Speedrun evaluations of computer-use models on OSWorld subsets, CUA-World and MyPCBench, with verifier scores, measured task times and recorded or estimated costs.

- Catalog URL: https://awesomecua.com/resources/url-099451a33699510476df/
- Original source: https://huggingface.co/datasets/anonymousmypcbench/cua-speedrun-trajectories
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop
- Topics: evaluation, efficiency, observability
- Evidence checked: 2026-10-18T12:32:49Z
- ID: url:099451a33699510476df

## Limitations

The publishing account is anonymous (anonymousmypcbench). The card names the benchmark sets used by CUA Speedrun but cites no paper, and neither the cua-speedrun paper, its project page nor its GitHub README links this repository, so no relation to the paper is asserted. Scores, task times and costs are the publisher's measurements; several costs are API-equivalent token estimates, and the card keeps two Kimi K3 OSWorld2 evaluations as billing-affected recordings. Screenshots for five September evaluations were deleted before publication. No license is declared.

- Record JSON: https://awesomecua.com/resources/url-099451a33699510476df/record.json

## Structured profile

- formats: ZIP run archives, JSON, SHA-256 checksum lists
- modalities: screenshots, agent transcripts, action logs, setup and verifier logs, timing and cost records
- splits: not recorded
- supervision: verifier task scores, agent-generated trajectories, measured task timings

### Count observations

- 97 ZIP run archives — repository root at Hub revision 447ff4cd (computed) (computed; source: https://huggingface.co/api/datasets/anonymousmypcbench/cua-speedrun-trajectories/revision/447ff4cd77230ee06ee5b0e864873c43ceb0138c)
- 14 per-evaluation cost evidence JSON files — COST-*.json files at Hub revision 447ff4cd (computed) (computed; source: https://huggingface.co/api/datasets/anonymousmypcbench/cua-speedrun-trajectories/revision/447ff4cd77230ee06ee5b0e864873c43ceb0138c)
- 295 OSWorld tasks — Unanimous-295 set, with per-task metrics for nine models in one JSON file (reported; source: https://huggingface.co/datasets/anonymousmypcbench/cua-speedrun-trajectories/raw/447ff4cd77230ee06ee5b0e864873c43ceb0138c/README.md)

Archive and cost-file counts come from a script over the pinned Hub file list; the card's tables link 39 of the 97 archives, so one benchmark set uses a subset of the archives. The sets differ in size (295, 50, 52, 26 and 38 tasks) and some tables use different tracks and measurement contracts, which the card says limits comparison across them. Mean scores include verifier partial credit; strict passes use recorded verdicts.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: Neither the card metadata nor its text declares a license, and the file list at this revision has no license file, so no data grant is established; agent outputs, screenshots and logged third-party content keep their own terms.
  Sources: https://huggingface.co/datasets/anonymousmypcbench/cua-speedrun-trajectories/raw/447ff4cd77230ee06ee5b0e864873c43ceb0138c/README.md

## Primary evidence

- https://huggingface.co/datasets/anonymousmypcbench/cua-speedrun-trajectories/raw/447ff4cd77230ee06ee5b0e864873c43ceb0138c/README.md (retrieved 2026-10-18T12:32:49Z; SHA-256 948719ad1839eddc0ccc4e9e8a1de218876d96395522546b77e89f71e5df35a8)
- https://huggingface.co/api/datasets/anonymousmypcbench/cua-speedrun-trajectories/revision/447ff4cd77230ee06ee5b0e864873c43ceb0138c (retrieved 2026-10-18T12:32:16Z; SHA-256 894abd6718d735a5845475c2630f7b5cf8c03a32b1046a9e643ee3f2f9f2f6f2)
