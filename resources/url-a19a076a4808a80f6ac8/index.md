# Sai on OSWorld v2.1 reference-VM runs

Simular's 134 clean runs of its Sai computer-use agent on the 108 OSWorld v2.1 tasks in a reference Ubuntu VM, with OSWorld trajectories, agent records, harness and grader logs, scorecards and screenshot and video tars.

- Catalog URL: https://awesomecua.com/resources/url-a19a076a4808a80f6ac8/
- Original source: https://huggingface.co/datasets/simular-ai/sai-osworld-v21-reference-runs
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: evaluation, observability
- Evidence checked: 2026-10-18T12:34:54Z
- ID: url:a19a076a4808a80f6ac8

## Limitations

The card reports agent model anthropic/claude-opus-5 at max thinking effort on a cocoon microVM built from the official OSWorld v2.1 reference image (Ubuntu 22.04.3), and five guest image builds (ref4, ref5, ref7, ref8, ref9) that differ only in environment fixes. A run is clean under the card's own rule: a numeric score, infra ok or proxy_missing, and no disk-full, driver-timeout or forced-zero replay-render failure. Headline scores are the publisher's. Text files are redacted copies (proxy, credentials, per-run GitLab passwords, host names); images and video are unchanged and show masked GitLab login fields and an internal GitLab address in two tasks. The Hub owner simular-ai is the account named Simular, whose site presents Sai as its agent. No license is declared.

- Record JSON: https://awesomecua.com/resources/url-a19a076a4808a80f6ac8/record.json

## Structured profile

- Formats: JSONL, JSON, plain-text logs, TAR media archives
- Modalities: screenshots, screen recordings, action trajectories, agent messages and events, harness and grader logs, scores
- Splits: not recorded
- Supervision: grader task scores, agent-generated trajectories

### Count observations

- 134 clean task runs — osworld-v2.1 release as described by the card (reported; source: https://huggingface.co/datasets/simular-ai/sai-osworld-v21-reference-runs/raw/abfb5852189f49e81255c38d98287df29ae53658/README.md)
- 134 run/task directories with traj.jsonl — runs/ at Hub revision abfb5852 (computed) (computed; source: https://huggingface.co/api/datasets/simular-ai/sai-osworld-v21-reference-runs/revision/abfb5852189f49e81255c38d98287df29ae53658)
- 108 distinct OSWorld v2.1 tasks — runs/ at Hub revision abfb5852 (computed) (computed; source: https://huggingface.co/api/datasets/simular-ai/sai-osworld-v21-reference-runs/revision/abfb5852189f49e81255c38d98287df29ae53658)
- 18 batch directories — runs/ at Hub revision abfb5852 (computed) (computed; source: https://huggingface.co/api/datasets/simular-ai/sai-osworld-v21-reference-runs/revision/abfb5852189f49e81255c38d98287df29ae53658)
- 134 per-run media TAR archives — media/ at Hub revision abfb5852 (computed) (computed; source: https://huggingface.co/api/datasets/simular-ai/sai-osworld-v21-reference-runs/revision/abfb5852189f49e81255c38d98287df29ae53658)

Computed counts come from a script over the pinned Hub file list. A run is one task execution; some tasks ran more than once, so 134 run directories cover 108 tasks, grouped under 18 batch directories. Card headline: 0.7731 mean over tasks of each task's mean clean score (first clean run 0.7674, best 0.7938), from the benchmark grader. No task file or media archive was downloaded.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: The card declares no license in its metadata or text, and the file list at this revision has no license file, so no data grant is established; agent outputs and captured third-party content keep their own terms.
  Sources: https://huggingface.co/datasets/simular-ai/sai-osworld-v21-reference-runs/raw/abfb5852189f49e81255c38d98287df29ae53658/README.md

## Primary evidence

- https://huggingface.co/datasets/simular-ai/sai-osworld-v21-reference-runs/raw/abfb5852189f49e81255c38d98287df29ae53658/README.md (retrieved 2026-10-18T12:34:54Z; SHA-256 d11edc15df8bb33c7ef2a49772985166f6fb37107e5e36334653c95108246a12)
- https://huggingface.co/api/datasets/simular-ai/sai-osworld-v21-reference-runs/revision/abfb5852189f49e81255c38d98287df29ae53658 (retrieved 2026-10-18T12:33:58Z; SHA-256 de6231347f32cc04143d47778d616ef03fc6a6d49ebb69b7992a1f95fc7e92ec)
