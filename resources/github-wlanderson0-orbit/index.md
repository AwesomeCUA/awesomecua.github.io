# ORBIT framework

Inspect-based multi-agent evaluation framework with role, scheduling and communication controls, BrowserART accessibility-tree actions, and desktop mouse, keyboard and screenshot tools.

- Catalog URL: https://awesomecua.github.io/resources/github-wlanderson0-orbit/
- Original source: https://github.com/wlanderson0/orbit
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: evaluation, safety-security, web-navigation, observability
- Evidence checked: 2026-10-20T13:41:22.467183+00:00
- ID: github:wlanderson0/orbit

## Limitations

Reviewed version 1.0.3 source at commit 588b3035, not an asserted reproduction of the paper. BrowserART tools return accessibility trees, including the screenshot-named refresh. Qualification is scenario-specific: the project documents browser-judge and desktop-scoring limits; its opt-in exact-send oracle covers one derived local task, not SMTP delivery. Runtime profiles and scoring policies are separate. Apache-2.0 is the top-level Orbit code declaration; third-party components and external data/environments retain separate terms. No installation, release archive or live evaluation was tested.

- Record JSON: https://awesomecua.github.io/resources/github-wlanderson0-orbit/record.json

## License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/wlanderson0/orbit/588b3035f92450ec4f0496bb8b629daa205e84c7/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: Record only the publisher's top-level Apache-2.0 declaration for Orbit-original code. NOTICE explicitly preserves per-component terms; neither bundled or external data nor model weights inherit this declaration. Its account of BrowserART licensing is not an independent resolution of upstream conflicting declarations.
  Sources: https://raw.githubusercontent.com/wlanderson0/orbit/588b3035f92450ec4f0496bb8b629daa205e84c7/LICENSE, https://raw.githubusercontent.com/wlanderson0/orbit/588b3035f92450ec4f0496bb8b629daa205e84c7/NOTICE

## Primary evidence

- https://raw.githubusercontent.com/wlanderson0/orbit/588b3035f92450ec4f0496bb8b629daa205e84c7/README.md (retrieved 2026-10-20T13:41:22.467183+00:00; SHA-256 b6743e3e9e5256d7afa8bb411baf246b60ba71bcfb84eda5a816fba3ddd7d78b)
- https://api.github.com/repos/wlanderson0/orbit (retrieved 2026-10-20T13:39:57.052202+00:00; SHA-256 0436414b9bcc4307f3bcde476a544da6fe1dd5baa90939eed392942490fbfbf7)
- https://raw.githubusercontent.com/wlanderson0/orbit/588b3035f92450ec4f0496bb8b629daa205e84c7/orbit/scenarios/browser/browserart/tools.py (retrieved 2026-10-20T13:42:37.098639+00:00; SHA-256 c47d046b129999da5e63b7723a3f3e2e0cc31c27ce74b45f71f8c6d0df1fc0d8)
- https://raw.githubusercontent.com/wlanderson0/orbit/588b3035f92450ec4f0496bb8b629daa205e84c7/orbit/scenarios/desktop/osworld/tools.py (retrieved 2026-10-20T14:10:32.910533Z; SHA-256 2cce76b22252a415d64c356b2062771e528b554dd83b6f88fca769f48fa8a826)
- https://raw.githubusercontent.com/wlanderson0/orbit/588b3035f92450ec4f0496bb8b629daa205e84c7/docs/benchmark-qualification.md (retrieved 2026-10-20T14:09:35.060985Z; SHA-256 66515d7ee87eab5a2f42c26132d0bf3e2a3b9c006156d2378181cf91966a2903)
- https://raw.githubusercontent.com/wlanderson0/orbit/588b3035f92450ec4f0496bb8b629daa205e84c7/orbit/scenarios/browser/browserart/scorer.py (retrieved 2026-10-20T14:10:29.541892Z; SHA-256 94c781028dc80b2a748d759fae2456f6a986da7487651a6bcbb179e8ad4fe023)
- https://raw.githubusercontent.com/wlanderson0/orbit/588b3035f92450ec4f0496bb8b629daa205e84c7/LICENSE (retrieved 2026-10-20T13:41:29.036076+00:00; SHA-256 cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30)
- https://raw.githubusercontent.com/wlanderson0/orbit/588b3035f92450ec4f0496bb8b629daa205e84c7/NOTICE (retrieved 2026-10-20T14:09:31.550310Z; SHA-256 f68a64f775b1f329416f2fe294bb07b5e475893f77d1cdb5300bdb08acf95410)
- https://arxiv.org/html/2609.33102v1 (retrieved 2026-10-20T13:12:28.833839+00:00; SHA-256 3ea667f4187ba601011e5ff00c4d63676b6d9903d12b80a0d7d5dd9920f00c65)
