# Go-Browse-WA processed data

Flattened web-interaction training records with accessibility-tree observations, assistant completions, trajectory rewards and step-link metadata.

- Catalog URL: https://awesomecua.github.io/resources/url-a13a187bc058fbb4f6af/
- Original source: https://huggingface.co/datasets/apurvaga/go-browse-wa
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, imitation-learning
- Evidence checked: 2026-10-17T02:44:50Z
- ID: url:a13a187bc058fbb4f6af

## Limitations

The public release contains nine Parquet shards. The short card supplies schema and split metadata but no license declaration; the official README describes successful and unsuccessful trajectories processed for fine-tuning. The raw screenshot/HTML corpus is a separate release and is not claimed to be included here.

## Structured profile

- formats: Parquet
- modalities: text, accessibility-tree observations, actions
- splits: train
- supervision: action completion, trajectory outcome

### Count observations

- 164,533 step records — train split (reported; source: https://huggingface.co/datasets/apurvaga/go-browse-wa/raw/main/README.md)

The card count is flattened step records, not trajectories or independent tasks. Both successful and unsuccessful trajectories are included according to the project README; no license is declared.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/api/datasets/apurvaga/go-browse-wa (retrieved 2026-10-17T02:44:50Z; SHA-256 494f4ac9ab9e94831dcf768be001b7284e30e00704674358baf3bb2060344361)
- https://huggingface.co/datasets/apurvaga/go-browse-wa/raw/main/README.md (retrieved 2026-10-17T02:44:50Z; SHA-256 18ab64833acf31113a83b2463359f1c7e37c4aaabfe11c33db2ba3e7d32818c6)
- https://raw.githubusercontent.com/ApGa/Go-Browse/HEAD/README.md (retrieved 2026-10-17T02:44:04Z; SHA-256 0d4b28c993ccb977c7910ff3fecb5de29db364a7a7ad55523c8e052c9bae2566)
- https://huggingface.co/api/datasets/apurvaga/go-browse-wa (retrieved 2026-10-17T02:44:50Z; SHA-256 494f4ac9ab9e94831dcf768be001b7284e30e00704674358baf3bb2060344361)
