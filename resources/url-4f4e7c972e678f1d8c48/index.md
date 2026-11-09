# Kura

Enterprise browser-agent builder whose Recursion agent runs plain-language steps on the live page and saves them as workflow blocks (actions, navigation, extraction, checks) with cached selectors, deployable as APIs.

- Catalog URL: https://awesomecua.com/resources/url-4f4e7c972e678f1d8c48/
- Original source: https://www.trykura.com
- Kind: product
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, automation, workflow
- Evidence checked: 2026-10-20T04:56:55Z
- ID: url:4f4e7c972e678f1d8c48

## Limitations

The homepage says Kura is backed by Y Combinator and lists client-side encryption, stealth browsers, proxy management, credential handling and audit trails. The documentation says the Recursion agent executes each plain-language instruction on the web page in real time and adds the matching blocks to a workflow; Action blocks click, type, press keys and refresh, go back or open, close and switch tabs, alongside navigation, extraction, checkpoint (natural-language assertion), for-loop and conditional blocks. Action and navigation blocks cache the elements or URLs they used and fall back to full reasoning when a cached step fails. A deployed agent gets synchronous and asynchronous API endpoints. The benchmarks page reports 87.0% on 602 of WebVoyager's 643 tasks (41 removed as impossible, booking, login or print tasks) and 90% against 56% for Anthropic's computer-use demo on 50 sampled tasks, for a hierarchical agent of planners, an executor and critics that runs mainly on GPT-4o; these figures are publisher-reported.

- Record JSON: https://awesomecua.com/resources/url-4f4e7c972e678f1d8c48/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://docs.trykura.com/introduction.md (retrieved 2026-10-20T04:56:55Z; SHA-256 6206452c93711e66e14e2566ea6a6e9f22d0a3903a611e215594a4bcf93d0db9)
- https://docs.trykura.com/recursion-agent/using-recursion-agent.md (retrieved 2026-10-20T04:56:02Z; SHA-256 3d51e28a2ca0d59b075e6bb466a540d891c0b14035fc2dfad69c0c677678ab70)
- https://docs.trykura.com/workflow-blocks/action.md (retrieved 2026-10-20T04:56:03Z; SHA-256 dcd43c18ac8f2c6f67102ca07804de93d8e316d2b1bce238c58b2bd5f413999c)
- https://docs.trykura.com/workflow-blocks/caching.md (retrieved 2026-10-20T04:56:03Z; SHA-256 44bee2cd164283ee426dbe7de196fc67364c1ae32ae88553d072e02a2f6386aa)
- https://docs.trykura.com/productionizing/deployment.md (retrieved 2026-10-20T04:56:04Z; SHA-256 317935f61f75e2c65f938a21fcbc2e3b8f10e08e47703b9878cba8703510bfc3)
- https://www.trykura.com/static/js/main.32ab346a.js (retrieved 2026-10-20T04:56:01Z; SHA-256 ef422bc19d3d2b3ce5fa18f304ae4d481217a96e4d1c60354be7d0ba51446712)
