# B-MoCA

Mobile control benchmark with varied interface configurations.

- Catalog URL: https://awesomecua.github.io/resources/github-jylee425-b-moca/
- Original source: https://github.com/jylee425/b-moca
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: android
- Topics: evaluation, robustness
- Evidence checked: 2026-10-16T06:35:58Z
- ID: github:jylee425/b-moca

## Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.github.io/resources/github-jylee425-b-moca/record.json

## Structured profile

- actions: normalized touch/lift coordinate pairs for tap or swipe
- evaluation: Task success is detected using Appium; positive task reward terminates the episode. Environment variants change device/locale/wallpaper/DPI/dark mode and are loaded as snapshots. The numeric action interface is (touch_y, touch_x, lift_y, lift_x); wrapper/tanh transformations must be kept with the evaluated agent.
- focus: Android control across visual/device variation, generalization across environment snapshots
- observations: screenshot pixels, XML view hierarchy, goal instruction
- setting: interactive

### Count observations

- 131 task-definition files — asset/tasks/**/*.textproto in retained release/ver.3 tree; not a paper test-task total (computed) (computed; source: https://api.github.com/repos/jylee425/b-moca/git/trees/release/ver.3?recursive=1)
- 35 environment configuration rows — environments_train.csv, retained release/ver.3 snapshot (computed) (computed; source: https://raw.githubusercontent.com/jylee425/b-moca/HEAD/asset/environments/config/environments_train.csv)
- 10 environment configuration rows — environments_test.csv, retained release/ver.3 snapshot (computed) (computed; source: https://raw.githubusercontent.com/jylee425/b-moca/HEAD/asset/environments/config/environments_test.csv)

Current source inventory differs in grain from published experiment subsets: do not multiply 131 definitions by 35/10 configuration rows or label the product as evaluated tasks. Setup requires Android API 29, Appium, external app versions and generated AVD snapshots. No apps/snapshots were downloaded or run. Code Apache-2.0 does not establish data or app rights.

## License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/jylee425/b-moca/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/jylee425/b-moca/HEAD/readme.md (retrieved 2026-10-16T06:35:58Z; SHA-256 bd1354c8008d7d79d4883c0c037b7918392f86fab61391b39b52e507b04672ce)
- https://api.github.com/repos/jylee425/b-moca/git/trees/release/ver.3?recursive=1 (retrieved 2026-10-17T14:14:05Z; SHA-256 06ba40a5e0d5fb52e7bf5e5df636cb8e8bbbc56a8308dc6d528012489f7650ee)
- https://raw.githubusercontent.com/jylee425/b-moca/HEAD/bmoca/environment/coordinator.py (retrieved 2026-10-17T14:24:53Z; SHA-256 34bc0c23949732e0a8091e334d59d2d41cae49a82cde850247aa0e6d739d2464)
- https://raw.githubusercontent.com/jylee425/b-moca/HEAD/bmoca/environment/environment.py (retrieved 2026-10-17T14:21:10Z; SHA-256 d866af344c0cff5255b813576f2e9e9c5c2964e6809058b39e2b5180af71d946)
- https://raw.githubusercontent.com/jylee425/b-moca/HEAD/asset/environments/config/environments_train.csv (retrieved 2026-10-17T14:23:14Z; SHA-256 c278cc28f8a0667b7fdc6ba638704cfbe43783cd496181231c45c865087543f3)
- https://raw.githubusercontent.com/jylee425/b-moca/HEAD/asset/environments/config/environments_test.csv (retrieved 2026-10-17T14:23:15Z; SHA-256 4b92933fe4f4f66e71a694b579940db11bedd5ea8f153752a44e633825b06fa3)
- https://raw.githubusercontent.com/jylee425/b-moca/HEAD/LICENSE (retrieved 2026-10-16T06:41:58Z; SHA-256 cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30)
- https://api.github.com/repos/gimme1dollar/b-moca (retrieved 2026-10-17T14:14:03Z; SHA-256 9d4706306b04960f0eb4298887496961efdee6b7d41445e82abcac489d63779f)
- https://api.github.com/repos/jylee425/b-moca (retrieved 2026-10-17T14:14:04Z; SHA-256 9d4706306b04960f0eb4298887496961efdee6b7d41445e82abcac489d63779f)
