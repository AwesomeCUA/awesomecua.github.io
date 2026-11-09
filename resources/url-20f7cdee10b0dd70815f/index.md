# Uni-GUI-Desktop-1

Desktop trajectories from the UI-MOPD training data, collected in OSWorld environments: 2,685 tasks across 10 app categories with step screenshots, reasoning traces, normalized actions and pyautogui code.

- Catalog URL: https://awesomecua.com/resources/url-20f7cdee10b0dd70815f/
- Original source: https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Desktop-1
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: data-generation, imitation-learning, cross-app
- Evidence checked: 2026-10-18T15:41:52Z
- ID: url:20f7cdee10b0dd70815f

## Limitations

The UI-MOPD paper builds Uni-GUI from self-collected desktop and mobile trajectories plus cleaned OpenCUA and OpenMobile trajectories; its composition table rounds the self-collected desktop part to about 7K trajectories and 95K steps, so this repository (2,685 trajectories and about 36K steps per the card) holds a portion of it. Per the paper, desktop queries were generated with Kimi-K2.6 from functional points of initialized OSWorld environments, Kimi-K2.6 produced the rollouts and Gemini-3.1-Pro cleaned them, so these are not human demonstrations. Every folder name ends in an OSWorld task ID: a script over the manifest finds 245 distinct IDs, all present in OSWorld's test_all.json, with up to 19 trajectories each. Two opened task.json files for the same OSWorld task label it 'OSWorld'; one repeats that task's instruction verbatim and the other paraphrases it, so the data overlaps OSWorld's test tasks. Both carry verified: false and task_completed: true, while the card's example shows verified: true; 160 folders also hold a result.txt. Linux is inferred from the paper's use of OSWorld environments and the Linux terminal and /home/user paths in the opened queries. Apache-2.0 is the card's declaration and does not cover third-party application content in screenshots. Only two task.json files and one result.txt were opened.

- Record JSON: https://awesomecua.com/resources/url-20f7cdee10b0dd70815f/record.json

## Structured profile

- formats: per-trajectory folders with task.json and PNG screenshots
- modalities: screenshots, task queries, reasoning traces, actions
- splits: not recorded
- supervision: teacher-model GUI trajectories cleaned by a filtering pipeline, structured reasoning traces, normalized desktop actions with pyautogui code

### Count observations

- 2,685 trajectories — Uni-GUI-Desktop-1 card statistics (reported; source: https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Desktop-1/raw/92ef5917cd46a899a13461532fdda9e5a8d3bc62/README.md)
- ≈ 36,000 steps — Uni-GUI-Desktop-1 card statistics (reported; source: https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Desktop-1/raw/92ef5917cd46a899a13461532fdda9e5a8d3bc62/README.md)
- 10 application categories — Uni-GUI-Desktop-1 card statistics (reported; source: https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Desktop-1/raw/92ef5917cd46a899a13461532fdda9e5a8d3bc62/README.md)
- 2,685 task.json trajectory files — Hub manifest at revision 92ef5917 (computed) (computed; source: https://huggingface.co/api/datasets/UI-MOPD/Uni-GUI-Desktop-1/revision/92ef5917cd46a899a13461532fdda9e5a8d3bc62)
- 38,283 PNG screenshot files — Hub manifest at revision 92ef5917 (computed) (computed; source: https://huggingface.co/api/datasets/UI-MOPD/Uni-GUI-Desktop-1/revision/92ef5917cd46a899a13461532fdda9e5a8d3bc62)
- 245 distinct OSWorld task IDs in trajectory folder names — Hub manifest at revision 92ef5917, matched against OSWorld test_all.json (computed) (computed; source: https://huggingface.co/api/datasets/UI-MOPD/Uni-GUI-Desktop-1/revision/92ef5917cd46a899a13461532fdda9e5a8d3bc62)

Trajectories, steps, application categories, files and task IDs are different units and are not summed. The task.json count from the manifest matches the card's trajectory count; screenshot files were counted from the manifest, not opened. Coordinates are normalized to [0, 999] on a 1920x1080 screen. No train/test split is declared.

## License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Desktop-1/raw/92ef5917cd46a899a13461532fdda9e5a8d3bc62/README.md
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Desktop-1/raw/92ef5917cd46a899a13461532fdda9e5a8d3bc62/README.md (retrieved 2026-10-18T15:41:52Z; SHA-256 b42140e6959b7265a2594fe4aabb79cd6f79b48ab6e59c70f018d5ddd011ef63)
- https://huggingface.co/api/datasets/UI-MOPD/Uni-GUI-Desktop-1/revision/92ef5917cd46a899a13461532fdda9e5a8d3bc62 (retrieved 2026-10-18T15:41:30Z; SHA-256 10e90be7f9d76804ea44a39ea33c0d3d6f121fc2cb23d0d5eb0ffa0e3f92a6e4)
- https://arxiv.org/html/2607.04425v1 (retrieved 2026-10-18T15:41:30Z; SHA-256 7fc33cf335f41716d5030d562cd6b53323a32f81551caa130afa43043509511b)
- https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Desktop-1/raw/92ef5917cd46a899a13461532fdda9e5a8d3bc62/47a8cd34-02ce9a50-7af2-47ed-8596-af0c230501f8/task.json (retrieved 2026-10-18T15:41:30Z; SHA-256 f6becd79ec187bd6d6ea2ba3a5521c6b80d6b4b5e5d6efb2e0422ef0f369578a)
- https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Desktop-1/raw/92ef5917cd46a899a13461532fdda9e5a8d3bc62/0c267f5e-02ce9a50-7af2-47ed-8596-af0c230501f8/task.json (retrieved 2026-10-18T15:41:30Z; SHA-256 7af0ffc4d28e344dd6fddd670121573d027b66b72d420fe49db343b35a68bee5)
- https://raw.githubusercontent.com/xlang-ai/OSWorld/b138d348256078fa634fc3b73567a7337c793e6b/evaluation_examples/test_all.json (retrieved 2026-10-18T15:41:30Z; SHA-256 9ebc5187cbd727ef26c24626820076b102fff812863c640a67c467fea9542ab5)
- https://huggingface.co/datasets/UI-MOPD/Uni-GUI-Desktop-1/raw/92ef5917cd46a899a13461532fdda9e5a8d3bc62/README.md (retrieved 2026-10-18T15:41:52Z; SHA-256 b42140e6959b7265a2594fe4aabb79cd6f79b48ab6e59c70f018d5ddd011ef63)
