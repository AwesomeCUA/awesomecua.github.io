# WebChain (original release)

Original WebChain release of human-annotated trajectories on live websites, with raw JSON records, viewport and partial full-page screenshots, and Parquet files for high-level planning and low-level grounding steps.

- Catalog URL: https://awesomecua.com/resources/url-116431f8ea32dbc6d637/
- Original source: https://huggingface.co/datasets/webagentlab/webchain-legacy
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: data-generation, web-navigation, grounding, planning
- Evidence checked: 2026-10-18T12:24:21Z
- ID: url:116431f8ea32dbc6d637

## Limitations

The publisher's cleaned v2 release is a separate Hub repository (webagentlab/webchain) whose card calls this repository the original release with the least-processed artifacts and earlier high- and low-level formulations; v2 reports different counts after cleaning. Here the image and full-page screenshot folders are split ZIP sets, and the card says full-page screenshots cover only some steps. Rationales come from synthetic generation. CC-BY-4.0 is the card's data declaration and does not establish rights to the captured websites' content.

- Record JSON: https://awesomecua.com/resources/url-116431f8ea32dbc6d637/record.json

## Structured profile

- formats: zipped JSON, split ZIP image archives, Parquet
- modalities: viewport screenshots, partial full-page screenshots, HTML snapshots, accessibility-tree snapshots, instructions, actions
- splits: high-level train, high-level test, low-level train, low-level test
- supervision: human-executed web task trajectories, element bounding boxes and click coordinates, CSS selectors and DOM references, action types and input text, generated rationales where included

### Count observations

- 31,725 trajectories — WebChain corpus as stated on the original-release card (reported; source: https://huggingface.co/datasets/webagentlab/webchain-legacy/raw/bd5699076abec17010963ca6a7c66ea7c5fa01ff/README.md)
- 317,993 interaction steps — WebChain corpus as stated on the original-release card (reported; source: https://huggingface.co/datasets/webagentlab/webchain-legacy/raw/bd5699076abec17010963ca6a7c66ea7c5fa01ff/README.md)
- 428 web domains — WebChain corpus as stated on the original-release card (reported; source: https://huggingface.co/datasets/webagentlab/webchain-legacy/raw/bd5699076abec17010963ca6a7c66ea7c5fa01ff/README.md)
- 13 Parquet files — processed/high_parquet (2) and processed/low_parquet (11) at revision bd569907 (computed) (computed; source: https://huggingface.co/api/datasets/webagentlab/webchain-legacy)

Trajectories, steps, domains and files are different units and are counted separately. The trajectory, step and domain figures match the paper's statistics; the v2 card says they describe the corpus before final cleaning. The file count comes from the Hub manifest.

## License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/webagentlab/webchain-legacy/raw/bd5699076abec17010963ca6a7c66ea7c5fa01ff/README.md
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/webagentlab/webchain-legacy/raw/bd5699076abec17010963ca6a7c66ea7c5fa01ff/README.md (retrieved 2026-10-18T12:24:21Z; SHA-256 730371b6a3093cb13b226fb19ff4002450ebafc4c5a3c620effdb70122d3ab60)
- https://huggingface.co/api/datasets/webagentlab/webchain-legacy (retrieved 2026-10-18T12:24:21Z; SHA-256 808a507eed99aac784cf773cf1c4dbb0cd03a4c66b75c49466f3c0dc353a325b)
- https://huggingface.co/datasets/webagentlab/webchain/raw/59ab57fea3d6270c260b6603418afb93dee8c1ce/README.md (retrieved 2026-10-18T12:24:21Z; SHA-256 ac41dbb10c924efbad8cc93340a34a73cb9218f1930ef6d8dced582050cbd68c)
- https://huggingface.co/datasets/webagentlab/webchain-legacy/raw/bd5699076abec17010963ca6a7c66ea7c5fa01ff/README.md (retrieved 2026-10-18T12:24:21Z; SHA-256 730371b6a3093cb13b226fb19ff4002450ebafc4c5a3c620effdb70122d3ab60)
