# OSWorld-Verified trajectories

Archived OSWorld-Verified evaluation runs of many computer-use agents and step budgets on Ubuntu, each archive holding screenshots, actions, model reasoning and per-task results for analysis.

- Catalog URL: https://awesomecua.com/resources/url-2c99f0de2840277abc72/
- Original source: https://huggingface.co/datasets/xlangai/ubuntu_osworld_verified_trajs
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: evaluation
- Evidence checked: 2026-10-18T12:10:51Z
- ID: url:2c99f0de2840277abc72

## Limitations

The OSWorld project page says all verified trajectories are published in this dataset. Hub API at revision 5473c39e: not gated, 100 run archives (99 zip, one tar.gz) plus a README and root all_result.json and args.json files that belong to a single run. Archive names identify the agent or model and often the step budget. The card's totals (15+ model variants, 1000+ episodes, last updated August 2025) predate later uploads, and it calls training on these runs not recommended. Archives were not downloaded. The card declares MIT for the data; outputs of third-party models keep their own terms.

- Record JSON: https://awesomecua.com/resources/url-2c99f0de2840277abc72/record.json

## Structured profile

- formats: zip archives, tar.gz archive, JSON
- modalities: screenshots, actions, model reasoning, task results
- splits: not recorded
- supervision: agent evaluation trajectories

### Count observations

- 100 run archives — zip and tar.gz files at revision 5473c39e (computed) (computed; source: https://huggingface.co/api/datasets/xlangai/ubuntu_osworld_verified_trajs/revision/5473c39e42a538a187a9b2c2b499db59d560fd8c)

A run archive is one agent configuration evaluated on OSWorld-Verified, not one task or episode. Step budgets in archive names range over 15, 50, 100 and more steps, and several agents have one archive per budget. Episode and task counts inside archives were not recounted.

## License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/xlangai/ubuntu_osworld_verified_trajs/raw/5473c39e42a538a187a9b2c2b499db59d560fd8c/README.md
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/xlangai/ubuntu_osworld_verified_trajs/raw/5473c39e42a538a187a9b2c2b499db59d560fd8c/README.md (retrieved 2026-10-18T12:10:51Z; SHA-256 3e115bb35b01a9be2c797effd4cac3e9ee2ff10036c0c7df648126db0a5a11fc)
- https://huggingface.co/api/datasets/xlangai/ubuntu_osworld_verified_trajs/revision/5473c39e42a538a187a9b2c2b499db59d560fd8c (retrieved 2026-10-18T12:10:51Z; SHA-256 eec08ba92c8032dd5b978c2a488a27d9193c82be741790da7541fe5c19b96928)
- https://raw.githubusercontent.com/OS-World/OS-World.github.io/62f8466dbe8b4d67c104b5ead3f8271da01aa09d/index.html (retrieved 2026-10-18T12:10:52Z; SHA-256 bf37e00ce23e8c5472d485a6eb3b291ffa2de220b44040402516e41cbc48c516)
- https://huggingface.co/datasets/xlangai/ubuntu_osworld_verified_trajs/raw/5473c39e42a538a187a9b2c2b499db59d560fd8c/README.md (retrieved 2026-10-18T12:10:51Z; SHA-256 3e115bb35b01a9be2c797effd4cac3e9ee2ff10036c0c7df648126db0a5a11fc)
