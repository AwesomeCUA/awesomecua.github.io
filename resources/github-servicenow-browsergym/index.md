# BrowserGym

Unified interfaces for browser-agent tasks and benchmark environments.

- Catalog URL: https://awesomecua.github.io/resources/github-servicenow-browsergym/
- Original source: https://github.com/ServiceNow/BrowserGym
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation
- Evidence checked: 2026-10-16T06:35:57Z
- ID: github:servicenow/browsergym

## Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.github.io/resources/github-servicenow-browsergym/record.json

## Structured profile

- actions: element-ID actions, coordinate mouse and keyboard actions, tab/navigation/scroll operations, Python/Playwright action mode
- evaluation: Gymnasium reset/step interface delegates reward, completion, messages and task info to each adapter’s validate() method. There is no universal BrowserGym success metric or shared task total; retain benchmark/adapter version and action subset for comparisons.
- focus: shared browser-agent evaluation interface, benchmark adapters with separate task definitions
- observations: browser screenshot, DOM snapshot, accessibility tree, tab/URL state, previous action and its error, chat messages and task goal
- setting: mixed

### Count observations

No count recorded.

A framework with interactive browser adapters and a static WebLINX evaluation integration, so the profile setting is mixed. README-listed integrations are not added as disjoint tasks or datasets. Core requires Playwright/Chromium; individual benchmarks have their own setup, credentials, licenses and validation rules. Apache-2.0 covers repository code only. No browser tasks or third-party project code were executed.

## License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/ServiceNow/BrowserGym/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/ServiceNow/BrowserGym/HEAD/README.md (retrieved 2026-10-16T06:35:57Z; SHA-256 7b685115ef822989fac9093518d16c46f0202736d005eed56e7f9fc36b43f3ee)
- https://raw.githubusercontent.com/ServiceNow/BrowserGym/HEAD/browsergym/core/src/browsergym/core/env.py (retrieved 2026-10-17T14:22:05Z; SHA-256 867cc6efdfead356839fef8a26b492502b8b5e3d165d1b3c17d24aaeec268d63)
- https://raw.githubusercontent.com/ServiceNow/BrowserGym/HEAD/docs/src/core/action_space.rst (retrieved 2026-10-17T14:21:11Z; SHA-256 c4bbe6b7d0cb36a5d5effab1aa5568301cead97fe4015273e1b82c667da3823a)
- https://api.github.com/repos/ServiceNow/BrowserGym/git/trees/main?recursive=1 (retrieved 2026-10-17T14:14:08Z; SHA-256 418efbe8c65ad7ebab61d3a066339876c820a9c957506eb456b8078ab352f6bf)
- https://raw.githubusercontent.com/ServiceNow/BrowserGym/HEAD/LICENSE (retrieved 2026-10-16T06:41:57Z; SHA-256 b192c58991e8ff585cc574615d40e74185404d4b96c1109d423071ab1367344b)
