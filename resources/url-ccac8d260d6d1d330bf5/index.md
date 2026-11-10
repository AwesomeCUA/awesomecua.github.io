---
title: "WebArena-Infinity browser agent trajectories | AwesomeCUA"
url: https://awesomecua.com/resources/url-ccac8d260d6d1d330bf5/
updated: 2026-10-18
type: dataset
lang: en
---

# WebArena-Infinity browser agent trajectories

Passing runs of three browser agents on 13 WebArena-Infinity web apps generated from product documentation, with per-step reasoning, actions, screenshots and programmatic verifier results.

- Catalog URL: https://awesomecua.com/resources/url-ccac8d260d6d1d330bf5/
- Original source: https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, data-generation, imitation-learning
- Evidence checked: 2026-10-18T12:33:11Z
- ID: url:ccac8d260d6d1d330bf5

## Limitations

Released by the web-arena-x organization. The card cites a project page (webarena.dev/webarena-infinity); the environment-generation pipeline is the separate repository github.com/web-arena-x/webarena-infinity. Only trajectories that passed the programmatic state checks in a three-repetition final run are included; the sample contains successful trajectories. In the sampled history files, Gemini 2.5 Flash (Browser Use harness) acts on indexed DOM elements, while Kimi K2.5 and Qwen 2.5 VL Plus trajectories store clicks as absolute pixel coordinates next to the model's raw output. MIT is the card's data declaration.

- Record JSON: https://awesomecua.com/resources/url-ccac8d260d6d1d330bf5/record.json

## Structured profile

- Formats: JSON, PNG
- Modalities: browser screenshots, task instructions, agent reasoning, actions
- Splits: not recorded
- Supervision: agent-generated successful trajectories, programmatic state-verifier outcomes

### Count observations

- 2,329 trajectories — manifest.json at revision 73cf7f57: Gemini 2.5 Flash 978, Kimi K2.5 643, Qwen 2.5 VL Plus 708 (computed) (computed; source: https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories/resolve/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe/data/manifest.json)
- 1,124 distinct tasks (environment and task_id pairs) — manifest.json at revision 73cf7f57 (computed) (computed; source: https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories/resolve/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe/data/manifest.json)
- 13 web-application environments — manifest.json at revision 73cf7f57 (computed) (computed; source: https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories/resolve/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe/data/manifest.json)
- 25,503 agent steps (sum of the manifest steps field) — manifest.json at revision 73cf7f57 (computed) (computed; source: https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories/resolve/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe/data/manifest.json)
- 2,195 trajectory folders with history.json — Hub file tree at revision 73cf7f57 (computed) (computed; source: https://huggingface.co/api/datasets/webarena-x/webarena-infinity-trajectories/revision/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe)

Trajectories, tasks, environments, steps and folders are different units and are counted separately. Each agent has at most one trajectory per task. Manifest difficulty labels: 604 easy, 508 medium, 1,217 hard. The manifest lists 134 Gemini trajectories (89 gitlab-plan-and-track, 45 gmail) whose folders are absent from the file tree at this revision, so 2,195 trajectories have files. Two history files were sampled.

## License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories/raw/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe/README.md
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories/raw/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe/README.md (retrieved 2026-10-18T12:33:11Z; SHA-256 02e1fc0c65b0314dffb0c141d07048f11a29789938902d617408fc680b3b1031)
- https://huggingface.co/api/datasets/webarena-x/webarena-infinity-trajectories/revision/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe (retrieved 2026-10-18T12:32:01Z; SHA-256 b764c9a4e6c27838c898d433b386a0b08a864ba53a0edfa896391db28d939e15)
- https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories/resolve/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe/data/manifest.json (retrieved 2026-10-18T12:32:01Z; SHA-256 d0c98be46cfc16e8eb408c62c774924edd8b7bd9f958fe65d983d55072a38c4d)
- https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories/resolve/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe/data/gemini/paypal-my-wallet/task_e1/history.json (retrieved 2026-10-18T12:33:30Z; SHA-256 3e990071c45afa463fe8372fd613ca78852fc42a35877373336d7a742fee256a)
- https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories/resolve/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe/data/kimi/gmail/task_e10/history.json (retrieved 2026-10-18T12:33:30Z; SHA-256 cfa5f0eda4c0817879c957c70aad7881013a5b4590e0270a4ae86b8e26a0e596)
- https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories/raw/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe/README.md (retrieved 2026-10-18T12:33:11Z; SHA-256 02e1fc0c65b0314dffb0c141d07048f11a29789938902d617408fc680b3b1031)
