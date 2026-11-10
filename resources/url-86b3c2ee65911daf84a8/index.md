---
title: "FedMABench data partitions | AwesomeCUA"
url: https://awesomecua.com/resources/url-86b3c2ee65911daf84a8/
updated: 2026-10-18
type: dataset
lang: en
---

# FedMABench data partitions

Six families of JSONL partitions of AndroidControl and AitW mobile-agent episodes for FedMABench federated training under app, category and step/episode heterogeneity; screenshots must be rebuilt from the sources.

- Catalog URL: https://awesomecua.com/resources/url-86b3c2ee65911daf84a8/
- Original source: https://huggingface.co/datasets/wwh0411/FedMABench
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, imitation-learning
- Evidence checked: 2026-10-18T16:06:17Z
- ID: url:86b3c2ee65911daf84a8

## Limitations

The Hub manifest at revision 4596a060 holds 41 JSONL partition files in six folders (Basic-AC 15, Category-Level 7, App-Level 5, Basic-AitW 5, Step-Episode 5, ScaleApp 4), plus split JSON files, an overview PDF and .DS_Store files; three folder names end with a trailing space. Inspected records are episode-level, with an instruction, step sub-instructions, original and converted actions, and image paths on the authors' machine. The FedMABench README says unpacked screenshots are not distributed and gives scripts to rebuild them from AndroidControl and AitW. Neither the card nor the Hub metadata declares a license, so the data license stays unknown. Partitions overlap; these counts are reported separately.

- Record JSON: https://awesomecua.com/resources/url-86b3c2ee65911daf84a8/record.json

## Structured profile

- Formats: JSONL, JSON
- Modalities: text instructions, actions, screenshot paths (images not included)
- Splits: federated training partitions, validation sets
- Supervision: episode instructions, step sub-instructions, action sequences

### Count observations

- 6 dataset families — FedMABench data release (reported; source: https://huggingface.co/datasets/wwh0411/FedMABench/raw/4596a0608a24dddc3f6ba96fb326e915d9632f0b/README.md)
- > 30 subsets — FedMABench data release (reported; source: https://huggingface.co/datasets/wwh0411/FedMABench/raw/4596a0608a24dddc3f6ba96fb326e915d9632f0b/README.md)
- > 800 apps — apps across five categories (reported; source: https://huggingface.co/datasets/wwh0411/FedMABench/raw/4596a0608a24dddc3f6ba96fb326e915d9632f0b/README.md)
- 41 JSONL partition files — Hub manifest at revision 4596a060 (computed) (computed; source: https://huggingface.co/api/datasets/wwh0411/FedMABench/revision/4596a0608a24dddc3f6ba96fb326e915d9632f0b)

A partition file, a task, an episode and a client count are different units. Screenshots are external dependencies that users rebuild from AndroidControl and AitW.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/wwh0411/FedMABench/raw/4596a0608a24dddc3f6ba96fb326e915d9632f0b/README.md (retrieved 2026-10-18T16:06:17Z; SHA-256 2874269995d8c9f5dabe266433ecf724bf54c27af599d899f3f0090b8ee37cdc)
- https://huggingface.co/api/datasets/wwh0411/FedMABench/revision/4596a0608a24dddc3f6ba96fb326e915d9632f0b (retrieved 2026-10-18T16:05:47Z; SHA-256 e3511f0f47d9a40da0ead5ce2eb49f590c010ed6199be0fe052a852e0fc83edf)
- https://raw.githubusercontent.com/wwh0411/FedMABench/417d8b0006830f423c7d07c213fc57277d75d966/README.md (retrieved 2026-10-18T16:05:47Z; SHA-256 b49e2b419918078ef9c68f3c9becc6c13d8fe530c165a36bdd61e370746eeea8)
