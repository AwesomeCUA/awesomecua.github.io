# OSWorld-V2 0624 Codex attempt trajectories

Self-reported OSWorld-V2 run of a Codex-based harness with gpt-5.6-sol on all 108 tasks: per-step CLI and GUI actions, screenshots and scores, plus retried attempts and the solution and recovery cards that guided them.

- Catalog URL: https://awesomecua.com/resources/url-9112dfcb201f2de7241f/
- Original source: https://huggingface.co/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: evaluation, observability
- Evidence checked: 2026-10-18T15:49:15Z
- ID: url:9112dfcb201f2de7241f

## Limitations

The card calls this a self-reported trajectory package; it links no paper or harness code, and the run was not listed in the official OSWorld-V2 leaderboard data when checked on 2026-10-18. run_manifest.json records benchmark release osworld-v2-2026.06.24, a Docker provider with a QEMU backend at 1920x1080, a 400-step limit, a screenshot at every step with accessibility tree and OCR on demand, and a multi-attempt policy with one reported result per task. Per task_results.csv, 83 reported results come from initial attempts, 22 from recovery attempts and 3 from retries; the preview table names a different selected attempt for 6 tasks, and the manifest and summary.json give different recovery limits (2 and 3). Each attempt has a card written as instructions to the agent: the solution card opened for task 001 lists the exact schedule entries to enter, the events to delete and the final checks, and the recovery card opened for task 002 plans a guided retry from its parent attempt. summary.json reports a mean score of 0.661 and 43 binary passes over 108 tasks (the preview table marks 44 because task 015 scores 0.9999999999999999); these are publisher measurements from guided, multi-attempt runs. Linux is established from the Ubuntu Calendar target and /home/user shell commands in task 001. The card declares no license.

- Record JSON: https://awesomecua.com/resources/url-9112dfcb201f2de7241f/record.json

## Structured profile

- Formats: JSONL, JSON, PNG, CSV, Parquet
- Modalities: screenshots, action trajectories, task guidance cards, scores
- Splits: not recorded
- Supervision: agent-generated trajectories, evaluator task scores

### Count observations

- 108 tasks — OSWorld-V2 v2026.06.24 tasks 001-108 in this run (reported; source: https://huggingface.co/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/raw/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2/run_manifest.json)
- 108 reported task folders with traj.jsonl — Hub manifest at revision 523e49b9 (computed) (computed; source: https://huggingface.co/api/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/revision/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2)
- 154 retained earlier-attempt folders — Hub manifest at revision 523e49b9 (computed) (computed; source: https://huggingface.co/api/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/revision/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2)
- 132 solution cards — Hub manifest at revision 523e49b9 (computed) (computed; source: https://huggingface.co/api/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/revision/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2)
- 51 recovery cards — Hub manifest at revision 523e49b9 (computed) (computed; source: https://huggingface.co/api/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/revision/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2)
- 12,868 PNG screenshots in reported task folders — Hub manifest at revision 523e49b9 (computed) (computed; source: https://huggingface.co/api/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/revision/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2)
- 16,400 PNG screenshots in earlier-attempt folders — Hub manifest at revision 523e49b9 (computed) (computed; source: https://huggingface.co/api/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/revision/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2)

Counts come from a script over the pinned Hub file list; tasks, folders, cards and screenshots are different units and are counted separately. The manifest's own card totals (132 solution, 51 recovery) match the file list. The preview Parquet and CSV tables are derived indexes of the same trajectories. Scores come from the benchmark evaluator as reported by the publisher; no trajectory was replayed.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: Neither the card metadata nor the file list at this revision declares a license, so no data grant is established. Agent outputs and logged third-party content keep their own terms.
  Sources: https://huggingface.co/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/raw/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2/README.md

## Primary evidence

- https://huggingface.co/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/raw/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2/README.md (retrieved 2026-10-18T15:49:15Z; SHA-256 73f86ad3b7fac604225cb982469db22ac68d863cbe0a636e3bee40fd0e7a5bdb)
- https://huggingface.co/api/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/revision/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2 (retrieved 2026-10-18T15:49:14Z; SHA-256 1f1a6cabddd3e68b93b61bb78648788d88df4ca829ebc0d3cc4542049e906857)
- https://huggingface.co/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/raw/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2/run_manifest.json (retrieved 2026-10-18T15:49:14Z; SHA-256 5bb8864f430494a989c86a8717ec1e210e63d16d58a3593990c4986a949a5f20)
- https://huggingface.co/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/raw/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2/summary.json (retrieved 2026-10-18T15:49:14Z; SHA-256 1dab011e8a4f1ed1ca5d0da13252f0ac8fd894d07fe6e286bae041bdb059507d)
- https://huggingface.co/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/raw/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2/task_results.csv (retrieved 2026-10-18T15:49:14Z; SHA-256 dfc978893fc67eeeea8ed1677edde5f6425829f4c3439d8c7b8812ed3384279d)
- https://huggingface.co/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/raw/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2/preview/task_summary.csv (retrieved 2026-10-18T15:49:14Z; SHA-256 dc8267b5a34741f2386d363a8f1ab465db026925c2f52239b5290872d0b572ac)
- https://huggingface.co/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/raw/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2/cards/001/attempt_001/solution_card.json (retrieved 2026-10-18T15:49:14Z; SHA-256 131afcc6939d517594c70890e250d3e8202d4c9c7662e865921eff120e605c00)
- https://huggingface.co/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/raw/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2/cards/002/attempt_002/recovery_card.json (retrieved 2026-10-18T15:49:14Z; SHA-256 7ee876e0e0322f815cc2d8ee171cf721c0680c9396d6cabf32ef4aae32457ff4)
- https://huggingface.co/datasets/xunsss/osworld2-codex-gpt56sol-0624-multi-attempt/raw/523e49b9daa078c6c6b60f8f8a7c881b008f7ed2/tasks/001/traj.jsonl (retrieved 2026-10-18T15:49:14Z; SHA-256 6450de28c3909d27bbb25099589b4c5bfc65daa42be9d21a31b4ad25e3b47f1b)
