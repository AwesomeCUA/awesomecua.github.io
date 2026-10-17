# GUIMid training data

A released GUI-agent mid-training mixture and supporting domain datasets, together with a post-training trajectory file and image archives for web and mobile interaction.

- Catalog URL: https://awesomecua.github.io/resources/url-422010da7a5c845a18f6/
- Original source: https://huggingface.co/datasets/hkust-nlp/GUIMid
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web, android
- Topics: imitation-learning, planning, screen-understanding
- Evidence checked: 2026-10-17T11:23:07Z
- ID: url:422010da7a5c845a18f6

## Limitations

The public manifest includes GUIMid.json, mavis.tar.gz, GUI_trajectory.json, traj.tar.gz and domain-specific JSON files. The card says image data for some individual domains is still forthcoming and its overview inconsistently says nine tasks while later enumerating seven vision-language plus four language-only domains; no aggregate task/sample count is inferred. Training code remains marked coming soon in the repository. MIT is the publisher dataset declaration, not a relicensing of all upstream content.

- Record JSON: https://awesomecua.github.io/resources/url-422010da7a5c845a18f6/record.json

## Structured profile

- formats: JSON, tar.gz image archives
- modalities: text, images
- splits: train configurations for named mid-training domains
- supervision: mid-training instruction supervision, GUI post-training trajectories

### Count observations

No count recorded.

Do not treat Hub size bands or the inconsistent introductory task count as a sample total. Some constituent-domain image packages remain forthcoming.

## License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/hkust-nlp/GUIMid/raw/main/README.md
- document: not recorded
- weights: not recorded

- data review: Publisher dataset-card declaration for the released packaging; original source datasets retain their own terms.
  Sources: https://huggingface.co/datasets/hkust-nlp/GUIMid/raw/main/README.md

## Primary evidence

- https://huggingface.co/datasets/hkust-nlp/GUIMid/raw/main/README.md (retrieved 2026-10-17T11:23:07Z; SHA-256 1cdf702c819ecf370f4191c6c71fae7b579cfbaf766908b42156964a69eddacc)
- https://huggingface.co/api/datasets/hkust-nlp/GUIMid (retrieved 2026-10-17T11:23:07Z; SHA-256 ededa2b3c8f21af8188152b028758c800db76cdbb8461ba82b8574cab375914e)
- https://api.github.com/repos/hkust-nlp/GUIMid (retrieved 2026-10-17T11:18:19Z; SHA-256 31b836da66c6907ff9a75ebc7f06da0db67e7d9fe9ca92d0c770f5f15f90a39e)
- https://raw.githubusercontent.com/hkust-nlp/GUIMid/HEAD/README.md (retrieved 2026-10-17T11:18:19Z; SHA-256 d9f63a03088c37f7145725c7a182100d1593fceadd26a9bf817d434ca8d6297e)
