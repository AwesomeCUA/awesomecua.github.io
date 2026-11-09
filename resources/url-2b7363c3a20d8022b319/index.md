# MemGUI-Bench agent trajectories

Recorded MemGUI-Bench runs of mobile GUI agents and models, packaged as per-agent ZIP archives with step screenshots, action logs and evaluator outputs, plus compressed trajectory previews for the leaderboard viewer.

- Catalog URL: https://awesomecua.com/resources/url-2b7363c3a20d8022b319/
- Original source: https://huggingface.co/datasets/lgy0404/memgui-bench-trajs
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: evaluation, memory
- Evidence checked: 2026-10-19T07:05:19Z
- ID: url:2b7363c3a20d8022b319

## Limitations

The card says each attempt holds step screenshots, a log.json action sequence, evaluation_summary.json and final_decision.json, and action visualizations. The MemGUI-Bench README asks submitters to add a gzip JSON preview and MP4 under site/trajs/ through Hub pull requests. Archive names identify the agent or model, such as M3A, T3A, Mobile-Agent-E, Agent-S2, GUI-Owl-7B and several API models. The card's usage section shows an older run.py interface. The card's apache-2.0 declaration does not settle rights to app screenshots.

- Record JSON: https://awesomecua.com/resources/url-2b7363c3a20d8022b319/record.json

## Structured profile

- Formats: ZIP archives, gzip JSON, MP4
- Modalities: screenshots, action logs, evaluation results, video previews
- Splits: not recorded
- Supervision: agent execution trajectories with LLM-judged outcomes

### Count observations

- 14 per-agent ZIP archives — Hub manifest at revision 4525fc5 (computed) (computed; source: https://huggingface.co/api/datasets/lgy0404/memgui-bench-trajs/revision/4525fc5b11cf0033cc31cafa78beb2237df6890a)
- 19 gzip JSON trajectory preview bundles — site/trajs/ in the Hub manifest at revision 4525fc5 (computed) (computed; source: https://huggingface.co/api/datasets/lgy0404/memgui-bench-trajs/revision/4525fc5b11cf0033cc31cafa78beb2237df6890a)

Archives and preview bundles are different packagings and overlap in the agents they cover; neither is a trajectory or task count. site/trajs/index.json lists only 9 of the 19 preview bundles.

## License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/lgy0404/memgui-bench-trajs/raw/4525fc5b11cf0033cc31cafa78beb2237df6890a/README.md
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/lgy0404/memgui-bench-trajs/raw/4525fc5b11cf0033cc31cafa78beb2237df6890a/README.md (retrieved 2026-10-19T07:05:19Z; SHA-256 62d58168fbb7a1a7fd895627d839a4b37d0c46f9d2914c2888ea2356cc012735)
- https://huggingface.co/api/datasets/lgy0404/memgui-bench-trajs/revision/4525fc5b11cf0033cc31cafa78beb2237df6890a (retrieved 2026-10-19T07:05:19Z; SHA-256 36b39075a426e792530250753c3befd3136b963e65b67e230ed1deedca9b1296)
- https://huggingface.co/datasets/lgy0404/memgui-bench-trajs/raw/4525fc5b11cf0033cc31cafa78beb2237df6890a/site/trajs/index.json (retrieved 2026-10-19T07:05:21Z; SHA-256 d7889d1a5f6da09930ce70b128e304d61b08768c27bc0500cb9f8863b314a866)
- https://raw.githubusercontent.com/lgy0404/MemGUI-Bench/3fb01b6cc0d13e287c67f488c76f449df7d65558/README.md (retrieved 2026-10-19T07:05:14Z; SHA-256 fab1bf3b766c2e59e46515dd60cf71b040986690b169bfcc0d35c6e9bc0f58fb)
- https://huggingface.co/datasets/lgy0404/memgui-bench-trajs/raw/4525fc5b11cf0033cc31cafa78beb2237df6890a/README.md (retrieved 2026-10-19T07:05:19Z; SHA-256 62d58168fbb7a1a7fd895627d839a4b37d0c46f9d2914c2888ea2356cc012735)
