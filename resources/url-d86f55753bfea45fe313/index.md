# GroundUI-1K

AgentStudio's 1,000-example GUI grounding test set, sampled from GroundUI-18K: web, desktop and mobile screenshots with GPT-4o-recaptioned instructions and target bounding boxes.

- Catalog URL: https://awesomecua.com/resources/url-d86f55753bfea45fe313/
- Original source: https://huggingface.co/datasets/agent-studio/GroundUI-1K
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web, desktop, cross-platform
- Topics: grounding, evaluation
- Evidence checked: 2026-10-18T16:08:23Z
- ID: url:d86f55753bfea45fe313

## Limitations

The card calls this a test set and asks that it be reserved from training, although the Hub split is named train. One Parquet split in two shards carries image, instruction, raw_instruction, bbox, resolution, source and platform fields; platform and source tallies come from the Hugging Face dataset-viewer statistics. Source labels name Mind2Web test subsets, OmniACT, MoTIF, ScreenSpot and AgentStudio screens; mobile rows name no operating system. MIT is the dataset-card declaration, and screenshots drawn from upstream datasets keep their own terms.

- Record JSON: https://awesomecua.com/resources/url-d86f55753bfea45fe313/record.json

## Structured profile

- Actions / outputs: click coordinate
- Evaluation: The AgentStudio evaluator scores a predicted click 1 when it falls strictly inside the annotated bounding box and 0 otherwise; grounding accuracy and task success are separate measures.
- Focus: instruction-conditioned GUI element grounding
- Observations: screenshots, natural-language instructions
- Setting: offline

### Count observations

- 1,000 examples — Hub split at revision 5d18efc3 (named train, described as a test set) (reported; source: https://huggingface.co/datasets/agent-studio/GroundUI-1K/raw/5d18efc3085902648b7031bf747a1090356a1b17/README.md)
- 400 examples — platform label web (computed) (computed; source: https://datasets-server.huggingface.co/statistics?dataset=agent-studio/GroundUI-1K&config=default&split=train)
- 300 examples — platform label desktop (computed) (computed; source: https://datasets-server.huggingface.co/statistics?dataset=agent-studio/GroundUI-1K&config=default&split=train)
- 300 examples — platform label mobile (computed) (computed; source: https://datasets-server.huggingface.co/statistics?dataset=agent-studio/GroundUI-1K&config=default&split=train)

Subset of GroundUI-18K sampled for efficient benchmarking; this count covers the subset, while the larger set is a separate Hub repository. Instructions were recaptioned with GPT-4o; raw_instruction keeps the source wording.

## License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/agent-studio/GroundUI-1K/raw/5d18efc3085902648b7031bf747a1090356a1b17/README.md
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/agent-studio/GroundUI-1K/raw/5d18efc3085902648b7031bf747a1090356a1b17/README.md (retrieved 2026-10-18T16:08:23Z; SHA-256 d1072a12c9cbcb48e73434620b62e39a8857bdb1d598fc2f64396b8523ec6e4c)
- https://huggingface.co/api/datasets/agent-studio/GroundUI-1K/revision/5d18efc3085902648b7031bf747a1090356a1b17 (retrieved 2026-10-18T16:07:58Z; SHA-256 652082bd5c0e35322611a1c97a9291f061598ec7930b998ea4b437d3d56fd1f0)
- https://datasets-server.huggingface.co/statistics?dataset=agent-studio/GroundUI-1K&config=default&split=train (retrieved 2026-10-18T16:07:17Z; SHA-256 afd9a96bdb3d2a6575c9b738ed709fad9ba41523bd82ee7714d6ffd54e22665a)
- https://raw.githubusercontent.com/ltzheng/agent-studio/39959e230fecd6651e5700936432861ca7ef7016/eval_agent_desiderata/README.md (retrieved 2026-10-18T16:07:58Z; SHA-256 1f2b513c700b31a1bacd023a54c6d4cadac9e02092e526d42c32103cb476c359)
- https://raw.githubusercontent.com/ltzheng/agent-studio/39959e230fecd6651e5700936432861ca7ef7016/eval_agent_desiderata/eval_gui_grounding.py (retrieved 2026-10-18T16:07:58Z; SHA-256 d503891371a62b6d8532667aea53f40c8691a2c3daaab5ea5a33ebce80eb83c8)
- https://huggingface.co/datasets/agent-studio/GroundUI-1K/raw/5d18efc3085902648b7031bf747a1090356a1b17/README.md (retrieved 2026-10-18T16:08:23Z; SHA-256 d1072a12c9cbcb48e73434620b62e39a8857bdb1d598fc2f64396b8523ec6e4c)
