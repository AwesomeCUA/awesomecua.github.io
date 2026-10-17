# Mobile3M

Pre-training corpus for Xiaomi's MobileVLM, distributed as per-app graph archives for mobile apps such as Baidu Map, QQ Music, Ctrip and Vipshop.

- Catalog URL: https://awesomecua.github.io/resources/url-b80bfa0a4939a493a11f/
- Original source: https://huggingface.co/datasets/xwk123/Mobile3M
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: screen-understanding
- Evidence checked: 2026-10-16T06:38:26Z
- ID: url:b80bfa0a4939a493a11f

## Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.github.io/resources/url-b80bfa0a4939a493a11f/record.json

## Structured profile

- formats: 7z app-graph archives, multipart 7z files
- modalities: not recorded
- splits: partial training release
- supervision: mobile UI pretraining for MobileVLM

### Count observations

No count recorded.

Official README calls this a partial training release and says app data will be uploaded gradually. Its training-JSON and test-data links point to separate Hub repositories; those artifacts are not counted as files or splits of xwk123/Mobile3M. Public revision 3df26694 lists app-graph archives; their names do not establish a three-million-example downloadable inventory. Precise inner record/modalities schema is not inspected. The card YAML says Apache-2.0 while its prose and official README assign CC-BY-NC-SA-4.0 to data and Apache to code; the existing data-license value remains unknown with the conflict documented.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: The retained first-party API has Apache-2.0 card metadata but its publisher description explicitly assigns Apache to source code and CC-BY-NC-SA-4.0 to the dataset. A single permissive dataset declaration is unresolved.
  Sources: https://huggingface.co/api/datasets/xwk123/Mobile3M

## Primary evidence

- https://huggingface.co/api/datasets/xwk123/Mobile3M (retrieved 2026-10-16T06:38:26Z; SHA-256 356a8dca28fa3dc46bc05b13eaf04a3db273e63c06be4fd15d0e87e0343c0824)
- https://huggingface.co/datasets/xwk123/Mobile3M/raw/3df26694ff9186604eb44a8e633894d3ece67ed9/README.md (retrieved 2026-10-17T14:10:01Z; SHA-256 8a097dbc7384d3743f262dc0164c176ed577bf720cbbc92ff8b3cd820d1aed4f)
- https://raw.githubusercontent.com/XiaoMi/mobilevlm/HEAD/README.md (retrieved 2026-10-17T14:22:04Z; SHA-256 e8a92a783b6b65cacedf105e5ede583668f8774f2a81a2005dc6897da6fa88ef)
- https://huggingface.co/api/datasets/xwk123/Mobile3M (retrieved 2026-10-16T06:38:26Z; SHA-256 356a8dca28fa3dc46bc05b13eaf04a3db273e63c06be4fd15d0e87e0343c0824)
