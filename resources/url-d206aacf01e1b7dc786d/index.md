# GroundUI-18K

AgentStudio's full GUI grounding test set: 18,026 instruction and target-box examples on web, desktop and mobile screenshots, pooled from Mind2Web, OmniACT, MoTIF, ScreenSpot and AgentStudio.

- Catalog URL: https://awesomecua.com/resources/url-d206aacf01e1b7dc786d/
- Original source: https://huggingface.co/datasets/agent-studio/GroundUI-18K
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web, desktop, cross-platform
- Topics: grounding, evaluation
- Evidence checked: 2026-10-18T16:19:41Z
- ID: url:d206aacf01e1b7dc786d

## Limitations

The card calls this the full GroundUI-18K of AgentStudio and a test set reserved from training, although the single Hub split is named train. One split in 19 Parquet shards carries image, image_path, instruction, bbox, resolution, source and platform fields. Platform and source tallies come from the Hugging Face dataset-viewer statistics. Source labels are three Mind2Web test subsets, OmniACT, MoTIF, ScreenSpot and AgentStudio screens; mobile rows name no operating system. The AgentStudio evaluation README says GroundUI-18K was recaptioned with CogVLM2; the published instruction version remains unspecified in the card. MIT is the dataset-card declaration; screenshots drawn from upstream datasets keep their own terms.

- Record JSON: https://awesomecua.com/resources/url-d206aacf01e1b7dc786d/record.json

## Structured profile

- Actions / outputs: click coordinate
- Evaluation: The AgentStudio evaluator scores a predicted click 1 when it falls strictly inside the annotated bounding box and 0 otherwise; grounding accuracy and task success are separate measures.
- Focus: instruction-conditioned GUI element grounding
- Observations: screenshots, natural-language instructions
- Setting: offline

### Count observations

- 18,026 examples — Hub split at revision f061eba2 (named train, described as a test set) (reported; source: https://huggingface.co/datasets/agent-studio/GroundUI-18K/raw/f061eba2b7e3fffcf511694f15ad3ca38898ab9e/README.md)
- 11,593 examples — platform label web (computed) (computed; source: https://datasets-server.huggingface.co/statistics?dataset=agent-studio/GroundUI-18K&config=default&split=train)
- 2,476 examples — platform label desktop (computed) (computed; source: https://datasets-server.huggingface.co/statistics?dataset=agent-studio/GroundUI-18K&config=default&split=train)
- 3,957 examples — platform label mobile (computed) (computed; source: https://datasets-server.huggingface.co/statistics?dataset=agent-studio/GroundUI-18K&config=default&split=train)

Source-label tallies from the same statistics: mind2web_test_domain 5,817, mind2web_test_task 2,080, mind2web_test_website 1,371, omniact 3,804, motif 3,455, screenspot 1,272 and agent_studio 227. A 1,000-example subset was sampled from this set for efficient benchmarking and is published as a separate Hub repository; this count covers the full set.

## License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/agent-studio/GroundUI-18K/raw/f061eba2b7e3fffcf511694f15ad3ca38898ab9e/README.md
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/agent-studio/GroundUI-18K/raw/f061eba2b7e3fffcf511694f15ad3ca38898ab9e/README.md (retrieved 2026-10-18T16:19:41Z; SHA-256 8903b306da4517a3ba90998759883bb0af2995410eff9349c36c8143073a9290)
- https://huggingface.co/api/datasets/agent-studio/GroundUI-18K/revision/f061eba2b7e3fffcf511694f15ad3ca38898ab9e (retrieved 2026-10-18T16:19:44Z; SHA-256 54436ec8e82156648f4e04e4a1b6830a73c6de30245a7304bdc0ce92b5153724)
- https://datasets-server.huggingface.co/statistics?dataset=agent-studio/GroundUI-18K&config=default&split=train (retrieved 2026-10-18T16:19:45Z; SHA-256 5e9ee49bba2b05f26330bd61168e2aabbea1ccf45d26538b440db8fcd3818e46)
- https://raw.githubusercontent.com/ltzheng/agent-studio/39959e230fecd6651e5700936432861ca7ef7016/eval_agent_desiderata/README.md (retrieved 2026-10-18T16:19:45Z; SHA-256 1f2b513c700b31a1bacd023a54c6d4cadac9e02092e526d42c32103cb476c359)
- https://raw.githubusercontent.com/ltzheng/agent-studio/39959e230fecd6651e5700936432861ca7ef7016/eval_agent_desiderata/eval_gui_grounding.py (retrieved 2026-10-18T16:19:45Z; SHA-256 d503891371a62b6d8532667aea53f40c8691a2c3daaab5ea5a33ebce80eb83c8)
- https://raw.githubusercontent.com/ltzheng/agent-studio/39959e230fecd6651e5700936432861ca7ef7016/README.md (retrieved 2026-10-18T16:19:47Z; SHA-256 996f153a3a281dd5167bdea1d32bc12027386a42114dd23e78bfa23daaeb6cf8)
- https://huggingface.co/datasets/agent-studio/GroundUI-18K/raw/f061eba2b7e3fffcf511694f15ad3ca38898ab9e/README.md (retrieved 2026-10-18T16:19:41Z; SHA-256 8903b306da4517a3ba90998759883bb0af2995410eff9349c36c8143073a9290)
