# Mobile-Eval-E task definitions

Task definitions for Mobile-Agent-E’s long-horizon, multi-app Android evaluation, packaged as a 25-record test split with rubrics and human-reference operation strings.

- Catalog URL: https://awesomecua.github.io/resources/url-342b081c3668a8bbe155/
- Original source: https://huggingface.co/datasets/mikewang/mobile_eval_e
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: android
- Topics: evaluation, long-horizon, cross-app
- Evidence checked: 2026-10-18T04:27:15Z
- ID: url:342b081c3668a8bbe155

## Limitations

The public Hub manifest contains one test Parquet file. This resource is the benchmark’s task-definition package, not a bundled phone environment or agent. Card metadata supplies rubrics/reference-operation fields but no data-license declaration or verified automated scorer; the code repository’s MIT license is not transferred to these records.

- Record JSON: https://awesomecua.github.io/resources/url-342b081c3668a8bbe155/record.json

## Structured profile

- actions: not recorded
- evaluation: The published task schema contains rubrics and human_reference_operations. No automated scoring protocol or single numeric agent metric is established by the inspected card; execution uses separately configured Android tooling.
- focus: long-horizon multi-app Android task execution
- observations: task instructions, app/scenario metadata
- setting: interactive

### Count observations

- 25 task-definition records — Hub test split at revision b8eca829 (reported; source: https://huggingface.co/datasets/mikewang/mobile_eval_e/raw/b8eca82988ed8d4f9dec01eaa9d51abf4b35aa83/README.md)

Features are task_id, instruction, type, apps, scenario, rubrics and human-reference operation strings. A task record is not an action count or recorded screenshot trajectory. Public Parquet inventory was checked but no sample rows were downloaded; companion README limits the tested agent platform to Android.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: No data-license declaration is present in the inspected task card; companion code MIT does not establish a dataset grant.
  Sources: https://huggingface.co/datasets/mikewang/mobile_eval_e/raw/b8eca82988ed8d4f9dec01eaa9d51abf4b35aa83/README.md

## Primary evidence

- https://raw.githubusercontent.com/X-PLUG/MobileAgent/HEAD/Mobile-Agent-E/README.md (retrieved 2026-10-18T04:27:15Z; SHA-256 f8515fbce73ea0ef3d1d558d4567bb949244e6384e61c956ba3ddbc27294f0ae)
- https://huggingface.co/api/datasets/mikewang/mobile_eval_e (retrieved 2026-10-18T04:33:29Z; SHA-256 f9b10eada9e0a64e26f1a7d477768f218b807103199855d893b3ab07feddc755)
- https://huggingface.co/datasets/mikewang/mobile_eval_e/raw/b8eca82988ed8d4f9dec01eaa9d51abf4b35aa83/README.md (retrieved 2026-10-18T04:35:15Z; SHA-256 9fdf43753fbfac9868d8bec57fa5601db3e03ed5c30fb981f9da88f6b75ffcc5)
- https://export.arxiv.org/api/query?id_list=2412.04454%2C2412.04626%2C2412.05467%2C2412.09362%2C2412.09605%2C2412.10342%2C2412.10742%2C2412.10840%2C2412.13103%2C2412.13194%2C2412.13501%2C2412.14161%2C2412.14470%2C2412.16256%2C2412.17589%2C2412.18116%2C2412.18426%2C2412.19723%2C2501.01149%2C2501.04575%2C2501.07572%2C2501.11733%2C2501.12326%2C2501.13896%2C2501.16150%2C2502.01600%2C2502.01977%2C2502.02982%2C2502.06395%2C2502.07949%2C2502.08047%2C2502.08226%2C2502.11357%2C2502.13053%2C2502.13923%2C2502.14282%2C2502.18906%2C2503.00401%2C2503.02268%2C2503.03196%2C2503.04730%2C2503.05143%2C2503.06470%2C2503.09263%2C2503.11069%2C2503.11170%2C2503.12687%2C2503.15661%2C2503.15937%2C2503.16465&max_results=50 (retrieved 2026-10-16T06:31:38Z; SHA-256 e96b86015c763c780e0430a8d0867b96cae947f50e888b3441c85abcaa42de78)
