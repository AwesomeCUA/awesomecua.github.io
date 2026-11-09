# OSWorld file cache (Ubuntu)

Hub-hosted copy of the files that OSWorld's Ubuntu task configurations download for task setup and evaluation, organized by application and task ID after their migration from Google Drive.

- Catalog URL: https://awesomecua.com/resources/url-c885712b9c69579ac591/
- Original source: https://huggingface.co/datasets/xlangai/ubuntu_osworld_file_cache
- Kind: dataset
- Review: curated
- Scope: adjacent
- Environments: desktop, linux
- Topics: evaluation
- Evidence checked: 2026-10-18T11:46:05Z
- ID: url:c885712b9c69579ac591

## Limitations

Adjacent: a file host that the curated OSWorld benchmark depends on; this asset hosts benchmark files. OSWorld task JSON (for example os/5c1075ca, which fetches setup.sh and eval.sh) points at this repository. The Hub API at revision 1e112283 reports an ungated repository with 720 files, most of them in application/task-ID folders, plus a fonts archive. The card metadata declares Apache-2.0, while its License section says the files follow the original OSWorld project's terms.

- Record JSON: https://awesomecua.com/resources/url-c885712b9c69579ac591/record.json

## Structured profile

- formats: original application file formats, archives
- modalities: images, documents, spreadsheets, presentations, audio and video, scripts
- splits: not recorded
- supervision: task setup and evaluation assets

### Count observations

- 720 files — Hub manifest at revision 1e112283 (computed) (computed; source: https://huggingface.co/api/datasets/xlangai/ubuntu_osworld_file_cache)
- 262 application/task-ID folders — Hub manifest at revision 1e112283 (computed) (computed; source: https://huggingface.co/api/datasets/xlangai/ubuntu_osworld_file_cache)

Counts come from the Hub file manifest. A task folder is not an OSWorld task definition, and not every OSWorld task has a folder here.

## License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/xlangai/ubuntu_osworld_file_cache/raw/1e112283c4ecb08d6fed8069bca7de74fa2f12aa/README.md
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/xlangai/ubuntu_osworld_file_cache/raw/1e112283c4ecb08d6fed8069bca7de74fa2f12aa/README.md (retrieved 2026-10-18T11:46:05Z; SHA-256 23b49d5e9a3c5cdcba990640ccf271d35411cc51ff85c18771a9f74b9d351944)
- https://huggingface.co/api/datasets/xlangai/ubuntu_osworld_file_cache (retrieved 2026-10-18T11:46:05Z; SHA-256 064fcc8dd91932dccbb0257be254fe5a95b95f369fb3d41ca2c169413cc424cf)
- https://raw.githubusercontent.com/xlang-ai/OSWorld/b138d348256078fa634fc3b73567a7337c793e6b/evaluation_examples/examples/os/5c1075ca-bb34-46a3-a7a0-029bd7463e79.json (retrieved 2026-10-18T11:46:05Z; SHA-256 6b57e8b32c048a252d8076fc280bf029f869e99e2938530ff78087aa7fdce410)
- https://huggingface.co/datasets/xlangai/ubuntu_osworld_file_cache/raw/1e112283c4ecb08d6fed8069bca7de74fa2f12aa/README.md (retrieved 2026-10-18T11:46:05Z; SHA-256 23b49d5e9a3c5cdcba990640ccf271d35411cc51ff85c18771a9f74b9d351944)
