# Sai OSWorld-V2 benchmark runs

Simular's per-task evidence from two complete 108-task OSWorld-V2 runs of its Sai computer-use agent: scores, step trajectories, message traces, evaluator and API logs, and run manifests, without screenshots.

- Catalog URL: https://awesomecua.com/resources/url-e0180b9651fec04d0308/
- Original source: https://huggingface.co/datasets/simular-ai/sai-osworld-v2-benchmark-runs
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: evaluation, observability
- Evidence checked: 2026-10-18T12:27:42Z
- ID: url:e0180b9651fec04d0308

## Limitations

The card reports run1 (2026-08-12) at a 0.7276 mean score with 28 perfect tasks and run2 (2026-08-20) at 0.7329 with 33, both 108/108 scored with anthropic/claude-opus-5 at max thinking, a 500-step limit and claude-sonnet-4-6 as evaluator and user simulator; these are publisher measurements. The run manifests record an Ubuntu 1920x1080 VM on AWS, screenshot observations, the pyautogui action space, benchmark release osworld-v2-2026.06.24 and a separate grounding model (simular-ui-venus-15-30b-a3b-rtx6000). Each run root's manifest describes its last partial invocation (a one-task backfill for run1, a three-task infrastructure rerun for run2). Superseded attempt directories are kept beside the canonical three-digit task directories. The card names a RUNS.md index that is absent at this revision. The Hub license is `other` with no license text.

- Record JSON: https://awesomecua.com/resources/url-e0180b9651fec04d0308/record.json

## Structured profile

- Formats: JSON, JSONL, CSV, plain-text logs, Markdown
- Modalities: action trajectories, agent messages and events, runtime and evaluator logs, scores
- Splits: not recorded
- Supervision: evaluator task scores, agent-generated trajectories

### Count observations

- 2 complete 108-task benchmark runs — Hub revision fb621da2 (reported; source: https://huggingface.co/datasets/simular-ai/sai-osworld-v2-benchmark-runs/raw/fb621da25cb55a45e19f4258eea4c4fd795c625a/README.md)
- 108 canonical task directories with traj.jsonl — run1/ at Hub revision fb621da2 (computed) (computed; source: https://huggingface.co/api/datasets/simular-ai/sai-osworld-v2-benchmark-runs/revision/fb621da25cb55a45e19f4258eea4c4fd795c625a)
- 108 canonical task directories with traj.jsonl — run2/ at Hub revision fb621da2 (computed) (computed; source: https://huggingface.co/api/datasets/simular-ai/sai-osworld-v2-benchmark-runs/revision/fb621da25cb55a45e19f4258eea4c4fd795c625a)
- 23 superseded attempt directories — run1/ at Hub revision fb621da2 (computed) (computed; source: https://huggingface.co/api/datasets/simular-ai/sai-osworld-v2-benchmark-runs/revision/fb621da25cb55a45e19f4258eea4c4fd795c625a)
- 4 superseded attempt directories — run2/ at Hub revision fb621da2 (computed) (computed; source: https://huggingface.co/api/datasets/simular-ai/sai-osworld-v2-benchmark-runs/revision/fb621da25cb55a45e19f4258eea4c4fd795c625a)

Counts come from a script over the pinned Hub file list: a canonical directory has a three-digit task name; suffixed names (_infra_, _hung_, _attempt1 and similar) are superseded attempts that the card keeps as evidence. Screenshots, observation images and recordings were removed by the publisher. Scores come from an LLM evaluator; the run manifests and score tables were read, leaving task files outside this inspection.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: The card metadata declares only `license: other`, and neither the card nor the file list at this revision contains license text, so no data grant is established. Agent outputs and logged third-party content keep their own terms.
  Sources: https://huggingface.co/datasets/simular-ai/sai-osworld-v2-benchmark-runs/raw/fb621da25cb55a45e19f4258eea4c4fd795c625a/README.md

## Primary evidence

- https://huggingface.co/datasets/simular-ai/sai-osworld-v2-benchmark-runs/raw/fb621da25cb55a45e19f4258eea4c4fd795c625a/README.md (retrieved 2026-10-18T12:27:42Z; SHA-256 4538e115e893cdbc8f61446b4bd4a7e173fadb78eef5906e4d236f0a05399ce7)
- https://huggingface.co/api/datasets/simular-ai/sai-osworld-v2-benchmark-runs/revision/fb621da25cb55a45e19f4258eea4c4fd795c625a (retrieved 2026-10-18T12:26:14Z; SHA-256 c71c46888e4f6723aa2f654e2f8256a64f11a56be166aaf05fce9fcd1c012e3d)
- https://huggingface.co/datasets/simular-ai/sai-osworld-v2-benchmark-runs/raw/fb621da25cb55a45e19f4258eea4c4fd795c625a/run1/run_manifest.json (retrieved 2026-10-18T12:26:22Z; SHA-256 72f7d1c318890f190dd8279d8f6a34f2fb2694dd524335fd4b79b87eaafb4410)
- https://huggingface.co/datasets/simular-ai/sai-osworld-v2-benchmark-runs/raw/fb621da25cb55a45e19f4258eea4c4fd795c625a/run2/run_manifest.json (retrieved 2026-10-18T12:26:22Z; SHA-256 2857dfa4d3c3da2058065df7cf476ec07fab866f07a09f8b256e1c19de59d58e)
- https://huggingface.co/datasets/simular-ai/sai-osworld-v2-benchmark-runs/raw/fb621da25cb55a45e19f4258eea4c4fd795c625a/README.md (retrieved 2026-10-18T12:27:42Z; SHA-256 4538e115e893cdbc8f61446b4bd4a7e173fadb78eef5906e4d236f0a05399ce7)
