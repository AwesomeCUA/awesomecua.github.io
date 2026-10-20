# Mobster engine

iOS agent engine organized around an observe, decide, verify and act loop, using WebDriverAgent screen state and phone actions such as taps, typing, swipes and app switches.

- Catalog URL: https://awesomecua.github.io/resources/github-radishsoftware-mobster/
- Original source: https://github.com/RadishSoftware/mobster
- Kind: agent
- Review: curated
- Scope: core
- Environments: ios
- Topics: mobile-navigation, evaluation
- Evidence checked: 2026-10-20T11:57:18.994340+00:00
- ID: github:radishsoftware/mobster

## Limitations

This entry covers the published engine, not the separate Mobster for Mac product. The documented reference example requires an already-serving WebDriverAgent runner for an iPhone and a model-service key; it performs a fixed read-only Settings task and declines approvals. The repository lists benchmark/evaluation tooling, but dated simulator subsets, real-device trials and earlier engine results are different evaluation populations. The README explicitly places several product modules outside this repository. Source inspection confirms WDA dispatch paths, not task success, security guarantees or reproducible performance; no phone, simulator, model or benchmark was run. MIT applies to the inspected repository software, not automatically to external WDA code, images or other data.

- Record JSON: https://awesomecua.github.io/resources/github-radishsoftware-mobster/record.json

## License declarations

- code: MIT — https://raw.githubusercontent.com/RadishSoftware/mobster/738cecdd3eacb9df88d48efb9efa53507bb4aeb4/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: Complete root MIT license text inspected at the pinned commit. Applies to repository software; data, weights, external WebDriverAgent code and separately distributed products do not inherit this declaration.
  Sources: https://raw.githubusercontent.com/RadishSoftware/mobster/738cecdd3eacb9df88d48efb9efa53507bb4aeb4/LICENSE

## Primary evidence

- https://raw.githubusercontent.com/RadishSoftware/mobster/738cecdd3eacb9df88d48efb9efa53507bb4aeb4/README.md (retrieved 2026-10-20T11:57:18.994340+00:00; SHA-256 dfffdc4b5850ed6bfe0bcfe705fa5918d61420f8c80df2e38f61b7d1fb3819ec)
- https://api.github.com/search/repositories?q=topic%3Amobile-agent+is%3Apublic+fork%3Afalse+created%3A2008-01-01..2026-10-20&per_page=100&page=1&sort=updated&order=asc (retrieved 2026-10-20T11:06:00.276978+00:00; SHA-256 01f97a863952373bd10a1f849d79706344be63f5774fe7e0cfe9ba774e41d213)
- https://api.github.com/repos/RadishSoftware/mobster/commits/main (retrieved 2026-10-20T11:54:17.260430+00:00; SHA-256 fde31e2fdae142655f09fa14fb3114bf39a22cc1ff7994204a66622f5cbfe2c7)
- https://api.github.com/repos/RadishSoftware/mobster/git/trees/81f2c1990c07a3aaf001a5c3eb4f37a457f0fb3d?recursive=1 (retrieved 2026-10-20T11:56:37.457839+00:00; SHA-256 8c2b9647b33a93b1a33e9256307e09b0f3e6aa62608019defa6dcdc5d7bff3dc)
- https://raw.githubusercontent.com/RadishSoftware/mobster/738cecdd3eacb9df88d48efb9efa53507bb4aeb4/LICENSE (retrieved 2026-10-20T11:57:25.539870+00:00; SHA-256 f9ad743798f16491100ea692069e346f82bbdb5a5df91e4e01c1d6168f2513cf)
- https://raw.githubusercontent.com/RadishSoftware/mobster/738cecdd3eacb9df88d48efb9efa53507bb4aeb4/mobile_agent/drivers.py (retrieved 2026-10-20T12:05:06.711971+00:00; SHA-256 4296a186cc2c00b9de93ababae490dc99cba596d858eff195e40283d58d73a0a)
