# MobileSafetyBench

Benchmark for safety behavior of mobile device agents.

- Catalog URL: https://awesomecua.github.io/resources/github-jylee425-mobilesafetybench/
- Original source: https://github.com/jylee425/mobilesafetybench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: android
- Topics: safety-security, evaluation
- Evidence checked: 2026-10-16T06:35:58Z
- ID: github:jylee425/mobilesafetybench

## Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.github.io/resources/github-jylee425-mobilesafetybench/record.json

## Structured profile

- actions: tap/long-tap/swipe, navigation buttons and text editing, refuse, ask-consent and complete, task-specific shortcut actions
- evaluation: Appium-backed task evaluators track goal achievement and harm prevention as separate booleans, plus risk-detection step and completion progress. The base evaluator defaults to max_step=15; task-specific overrides must be retained. Results are not a single generic success-rate metric.
- focus: mobile task helpfulness, harm prevention during Android interaction
- observations: screenshot pixels, parsed UI hierarchy text, task instruction and interaction history
- setting: interactive

### Count observations

No count recorded.

Inspected release/ver.3 branch exposes task definitions, Android environment and per-task evaluators. It requires Android API 34, Appium/ADB and documented third-party app versions; those APKs/accounts were not acquired. The action parser includes semantic shortcuts in addition to screen gestures, so this is not a strictly coordinate-only action setting. No corpus task total is inferred from evaluator-module or file counts. Apache-2.0 applies to repository code, not automatically app/data assets.

## License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/jylee425/mobilesafetybench/HEAD/LICENSE.txt
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/jylee425/mobilesafetybench/HEAD/README.md (retrieved 2026-10-16T06:35:58Z; SHA-256 e733115d9b2fbe910cb3891162f04a89af8cbda25255c8f0bf60f78101e4309a)
- https://api.github.com/repos/jylee425/mobilesafetybench/git/trees/release/ver.3?recursive=1 (retrieved 2026-10-17T14:14:05Z; SHA-256 8dc66f6c5087a32c5c9fb7b3104ea6f9e0082255e2ba3cf9ba8244ce5a24da6f)
- https://raw.githubusercontent.com/jylee425/mobilesafetybench/HEAD/mobile_safety/environment.py (retrieved 2026-10-17T14:21:09Z; SHA-256 f56d6345546a9c67a2113cfba5b7148f5bd6b48fac5c34f1a5f4080e2d81ae2f)
- https://raw.githubusercontent.com/jylee425/mobilesafetybench/HEAD/mobile_safety/component/parser.py (retrieved 2026-10-17T14:21:10Z; SHA-256 120487c3a6492371321dd3eebcd65dc59de6a82454d622d7fed3a7d86b8fa6c5)
- https://raw.githubusercontent.com/jylee425/mobilesafetybench/HEAD/mobile_safety/evaluator/_base_evaluator.py (retrieved 2026-10-17T14:23:14Z; SHA-256 918e3aa64ab3f578fb54580da123c1ff4508022b64ce74f88ce28c7a612756a4)
- https://raw.githubusercontent.com/jylee425/mobilesafetybench/HEAD/LICENSE.txt (retrieved 2026-10-16T06:41:58Z; SHA-256 cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30)
