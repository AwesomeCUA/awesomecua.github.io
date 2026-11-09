# Surfer-H-CLI

Deprecated runner for H Company's Surfer-H web agent: a policy model reads recent Chrome screenshots, a Holo localizer returns click coordinates, Selenium acts, and an optional validator checks the answer.

- Catalog URL: https://awesomecua.com/resources/github-hcompai-surfer-h-cli/
- Original source: https://github.com/hcompai/surfer-h-cli
- Kind: agent
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, grounding, screen-understanding
- Evidence checked: 2026-10-18T12:33:37Z
- ID: github:hcompai/surfer-h-cli

## Limitations

Archived on GitHub, and the README marks it deprecated in favour of H Company's hosted Models API and Agent API and the hai-agents clients. The loop keeps the last three screenshots by default for the navigation step, which chooses click_element, write_element, scroll, go_back, refresh, wait, restart or answer; click and write targets are named elements that a localizer model (Holo1 or the structured Holo1.5 path) turns into viewport coordinates for Selenium ActionChains. Models are reached through OpenAI-compatible endpoints: H Company's hosted API, a local vLLM server, or a SageMaker deployment; one script uses GPT-4.1 as validator. A FastAPI agent_server.py and a Next.js frontend stream runs to a browser UI. Root LICENSE is the BSD 3-Clause text with an H Company copyright and does not cover the Holo weights.

- Record JSON: https://awesomecua.com/resources/github-hcompai-surfer-h-cli/record.json

## License declarations

- code: BSD-3-Clause — https://raw.githubusercontent.com/hcompai/surfer-h-cli/b054d8ebc98c70736741290a63ee77e37edf5e3e/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: Root LICENSE reproduces the BSD 3-Clause terms under a 2025 H Company copyright; it covers the repository code, not Holo model weights or third-party services.
  Sources: https://raw.githubusercontent.com/hcompai/surfer-h-cli/b054d8ebc98c70736741290a63ee77e37edf5e3e/LICENSE

## Primary evidence

- https://raw.githubusercontent.com/hcompai/surfer-h-cli/HEAD/README.md (retrieved 2026-10-18T12:33:37Z; SHA-256 1f330f8304b99c38d4abd476b25506b42b153702e6a45f831fd7ee08462e117f)
- https://api.github.com/repos/hcompai/surfer-h-cli/git/commits/b054d8ebc98c70736741290a63ee77e37edf5e3e (retrieved 2026-10-18T12:32:49Z; SHA-256 732adaffdf829b9a028d514ee03440e48f6349d7c32dfa129f3dd3711127d835)
- https://raw.githubusercontent.com/hcompai/surfer-h-cli/b054d8ebc98c70736741290a63ee77e37edf5e3e/src/surfer_h_cli/surferh.py (retrieved 2026-10-18T12:32:50Z; SHA-256 e986d55278404e3e54e4dad81eee0c17928b9006f094bbc11720c5e3150741be)
- https://raw.githubusercontent.com/hcompai/surfer-h-cli/b054d8ebc98c70736741290a63ee77e37edf5e3e/src/surfer_h_cli/simple_browser.py (retrieved 2026-10-18T12:32:50Z; SHA-256 2adb4e214cbd9c21f7a30cdc279eebe2f9d6888103408dfe74d85a950213d08c)
- https://raw.githubusercontent.com/hcompai/surfer-h-cli/b054d8ebc98c70736741290a63ee77e37edf5e3e/src/surfer_h_cli/skills/localization.py (retrieved 2026-10-18T12:32:50Z; SHA-256 60619d897fa497a2732b43690aa6b65588dad52be895fb296c0b127ef4a9c059)
- https://raw.githubusercontent.com/hcompai/surfer-h-cli/b054d8ebc98c70736741290a63ee77e37edf5e3e/LICENSE (retrieved 2026-10-18T12:32:50Z; SHA-256 176b3dc7bced16601e6b413fd3c58247dfdb072d910db41df453e38526a1f3ea)
