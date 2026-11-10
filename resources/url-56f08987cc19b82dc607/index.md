# WebChain v2

Cleaned v2 release of WebChain's human web trajectories, packaged as trajectory-level and Seed-style sliding-window SFT Parquet with aligned screenshots, plus action metadata and a 150-trace evaluation subset.

- Catalog URL: https://awesomecua.com/resources/url-56f08987cc19b82dc607/
- Original source: https://huggingface.co/datasets/webagentlab/webchain
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: data-generation, web-navigation, grounding, planning, imitation-learning
- Evidence checked: 2026-10-18T15:33:42Z
- ID: url:56f08987cc19b82dc607

## Limitations

The card calls this the cleaned, training-ready release and points to the publisher's separate original release (Hub repository webagentlab/webchain-legacy) for raw JSON records, split screenshot archives and the earlier high- and low-level formulations. Its counts (31,675 trajectories, 317,682 steps) are after cleaning; the paper's 31,725 trajectories and 317,993 steps describe the corpus before it. Annotators executed tasks on live websites; tasks were synthesized from site schemas and reasoning text was added in post-processing. CC-BY-4.0 is the card's data declaration.

- Record JSON: https://awesomecua.com/resources/url-56f08987cc19b82dc607/record.json

## Structured profile

- Formats: Parquet (Trace SFT and Seed/Demo SFT), Parquet and CSV metadata tables, SHA-256 manifests
- Modalities: viewport screenshots, task queries, reasoning text, actions, DOM and accessibility-tree references in trace metadata
- Splits: not recorded
- Supervision: human-executed web task trajectories, click coordinates, bounding boxes and CSS selectors, action types and text arguments, reasoning text added in post-processing

### Count observations

- 31,675 cleaned trajectories — WebChain v2 release as stated on its card (reported; source: https://huggingface.co/datasets/webagentlab/webchain/raw/59ab57fea3d6270c260b6603418afb93dee8c1ce/README.md)
- 317,682 interaction steps — WebChain v2 release as stated on its card (reported; source: https://huggingface.co/datasets/webagentlab/webchain/raw/59ab57fea3d6270c260b6603418afb93dee8c1ce/README.md)
- 39,332 Seed/Demo sliding-window rows — WebChain v2 release as stated on its card (reported; source: https://huggingface.co/datasets/webagentlab/webchain/raw/59ab57fea3d6270c260b6603418afb93dee8c1ce/README.md)
- 263,995 SFT image/action turns — WebChain v2 release as stated on its card (reported; source: https://huggingface.co/datasets/webagentlab/webchain/raw/59ab57fea3d6270c260b6603418afb93dee8c1ce/README.md)
- 150 evaluation traces — test_suite_150 subset as stated on the card (reported; source: https://huggingface.co/datasets/webagentlab/webchain/raw/59ab57fea3d6270c260b6603418afb93dee8c1ce/README.md)
- 48 data parts per format — Hub manifest at revision 59ab57fe, data/trace_sft and data/seed_sft (computed) (computed; source: https://huggingface.co/api/datasets/webagentlab/webchain/revision/59ab57fea3d6270c260b6603418afb93dee8c1ce)
- 71 SFT Parquet shards per format — Hub manifest at revision 59ab57fe, data/trace_sft and data/seed_sft (computed) (computed; source: https://huggingface.co/api/datasets/webagentlab/webchain/revision/59ab57fea3d6270c260b6603418afb93dee8c1ce)

Trajectories, steps, windows, turns, parts and shards are different units and are counted separately. Trace SFT has one row per cleaned trajectory; Seed/Demo SFT re-cuts the same trajectories into bounded windows, so the formats overlap. The 150-trace subset is a stratified sample for loader checks and compact offline evaluation; the card does not say it is held out from the parts. The part and shard counts from the manifest match the card.

## License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/webagentlab/webchain/raw/59ab57fea3d6270c260b6603418afb93dee8c1ce/README.md
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/webagentlab/webchain/raw/59ab57fea3d6270c260b6603418afb93dee8c1ce/README.md (retrieved 2026-10-18T15:33:42Z; SHA-256 ac41dbb10c924efbad8cc93340a34a73cb9218f1930ef6d8dced582050cbd68c)
- https://huggingface.co/api/datasets/webagentlab/webchain/revision/59ab57fea3d6270c260b6603418afb93dee8c1ce (retrieved 2026-10-18T15:33:18Z; SHA-256 b2845f4365632a07cf5296879f18b516603a08a7b7700558db543962475a7bfa)
- https://huggingface.co/datasets/webagentlab/webchain/raw/59ab57fea3d6270c260b6603418afb93dee8c1ce/README.md (retrieved 2026-10-18T15:33:42Z; SHA-256 ac41dbb10c924efbad8cc93340a34a73cb9218f1930ef6d8dced582050cbd68c)
