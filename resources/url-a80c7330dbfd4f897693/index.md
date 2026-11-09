# InSTA 150k Tasks (v3)

About 150k web navigation tasks from the InSTA project, each giving a website domain, an instruction, suggested steps and success criteria, with train and test splits drawn from different websites.

- Catalog URL: https://awesomecua.com/resources/url-a80c7330dbfd4f897693/
- Original source: https://huggingface.co/datasets/data-for-agents/insta-150k-v3
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, data-generation
- Evidence checked: 2026-10-18T16:03:36Z
- ID: url:a80c7330dbfd4f897693

## Limitations

The card cites arXiv 2502.06776 (InSTA: Towards Internet-Scale Training For Agents) and points to an LLM judge in the separate data-for-agents/insta code repository; this record covers the task data. Rows contain text task specifications alone, with agent trajectories and screenshots outside this release. The card declares MIT for the dataset.

- Record JSON: https://awesomecua.com/resources/url-a80c7330dbfd4f897693/record.json

## Structured profile

- formats: Parquet
- modalities: text
- splits: train, test
- supervision: task instructions, suggested step lists, success criteria

### Count observations

- ≈ 150,000 tasks — complete v3 release (reported; source: https://huggingface.co/datasets/data-for-agents/insta-150k-v3/raw/5a689ac657a24b0e55b1c0a0d690acfadd443c38/README.md)
- 143,508 examples — train split (reported; source: https://huggingface.co/datasets/data-for-agents/insta-150k-v3/raw/5a689ac657a24b0e55b1c0a0d690acfadd443c38/README.md)
- 2,933 examples — test split (reported; source: https://huggingface.co/datasets/data-for-agents/insta-150k-v3/raw/5a689ac657a24b0e55b1c0a0d690acfadd443c38/README.md)
- 2,933 distinct website domains — test split (computed) (computed; source: https://huggingface.co/datasets/data-for-agents/insta-150k-v3/resolve/5a689ac657a24b0e55b1c0a0d690acfadd443c38/data/test-00000-of-00001.parquet)

Split sizes are the card's dataset_info num_examples. The distinct-domain count was computed from the inspected test Parquet file.

## License declarations

- code: not recorded
- data: MIT — https://huggingface.co/datasets/data-for-agents/insta-150k-v3/raw/5a689ac657a24b0e55b1c0a0d690acfadd443c38/README.md
- document: not recorded
- weights: not recorded

- data review: Publisher dataset-card declaration for the v3 task release; the InSTA code repository and the websites named in tasks are not covered by this evidence.
  Sources: https://huggingface.co/datasets/data-for-agents/insta-150k-v3/raw/5a689ac657a24b0e55b1c0a0d690acfadd443c38/README.md

## Primary evidence

- https://huggingface.co/datasets/data-for-agents/insta-150k-v3/raw/5a689ac657a24b0e55b1c0a0d690acfadd443c38/README.md (retrieved 2026-10-18T16:03:36Z; SHA-256 0a005ebed3bc549e700fb3d6a8db64a99fe28acce7c46ceb4c66cbe37c009d23)
- https://huggingface.co/api/datasets/data-for-agents/insta-150k-v3 (retrieved 2026-10-18T16:03:35Z; SHA-256 480f7e251f32652812aafd5ffcb638a14c9612cec73bbb33c245f9685a542808)
- https://huggingface.co/datasets/data-for-agents/insta-150k-v3/resolve/5a689ac657a24b0e55b1c0a0d690acfadd443c38/data/test-00000-of-00001.parquet (retrieved 2026-10-18T16:04:11Z; SHA-256 3ae8bb40fd3da6991c15e5d34579b0a631f9ad520ad70a09358ef99770cb239d)
- https://huggingface.co/datasets/data-for-agents/insta-150k-v3/raw/5a689ac657a24b0e55b1c0a0d690acfadd443c38/README.md (retrieved 2026-10-18T16:03:36Z; SHA-256 0a005ebed3bc549e700fb3d6a8db64a99fe28acce7c46ceb4c66cbe37c009d23)
