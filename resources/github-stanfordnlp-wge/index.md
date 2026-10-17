# Workflow-Guided Exploration research code

Research code that learns browser-control policies by constraining exploration with workflows induced from demonstrations, with a Selenium-based MiniWoB environment and experiment harness.

- Catalog URL: https://awesomecua.github.io/resources/github-stanfordnlp-wge/
- Original source: https://github.com/stanfordnlp/wge
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: reinforcement-learning, web-navigation, workflow, history
- Evidence checked: 2026-10-17T11:18:16Z
- ID: github:stanfordnlp/wge

## Limitations

The released repository includes training policies, experiment configuration and a MiniWoB sandbox extended for the 2018 paper. This is the WGE implementation, not another copy of the already cataloged Farama MiniWoB++ benchmark and not the original OpenAI MiniWoB release. Its documented dependency is PyTorch 0.1.12, and current runtime compatibility was not tested. Stanford code declares Apache-2.0; bundled third-party browser tasks and externally downloaded demonstration/embedding data retain their own terms.

- Record JSON: https://awesomecua.github.io/resources/github-stanfordnlp-wge/record.json

## License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/stanfordnlp/wge/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: Stanford WGE source license; not a blanket license for all third-party tasks, embeddings or demonstration resources.
  Sources: https://raw.githubusercontent.com/stanfordnlp/wge/HEAD/LICENSE

## Primary evidence

- https://raw.githubusercontent.com/stanfordnlp/wge/HEAD/README.md (retrieved 2026-10-17T11:18:16Z; SHA-256 50ee5234bf62320d096fbe4c11c7be21f50c9e09dae97754a16a5bbde2f1ab19)
- https://api.github.com/repos/stanfordnlp/wge (retrieved 2026-10-17T11:18:15Z; SHA-256 66fcd6577d1867abf84e62fe9edf2e3f223292724cbe6b9d0ef02b582db5c8b2)
- https://api.github.com/repos/stanfordnlp/wge/git/trees/master?recursive=1 (retrieved 2026-10-17T11:19:50Z; SHA-256 926aff11e14c529d05d9bc51fe12aadb007818119da55f99c2fa47d0387f466d)
- https://raw.githubusercontent.com/stanfordnlp/wge/HEAD/third-party/miniwob-sandbox/README.md (retrieved 2026-10-17T11:20:17Z; SHA-256 249b23ff62e21bd446b3e411b1d7ea7f173c7e19e42ed75e97800ed32201bb3a)
- https://raw.githubusercontent.com/stanfordnlp/wge/HEAD/LICENSE (retrieved 2026-10-17T11:23:05Z; SHA-256 3df3dd1e3149cd6cc1a7b052a237a6653449a7c5f18edf19a3a79294c7d541c1)
