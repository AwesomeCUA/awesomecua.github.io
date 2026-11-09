# OpenJev

Decision models at 1.7B, 4B and 8B that answer typed questions with calibrated probabilities in one pass; trained on browser-agent steps and general decision data, they pick a web agent's next operation and element.

- Catalog URL: https://awesomecua.com/resources/github-alanhuangyoo-openjev/
- Original source: https://github.com/alanhuangyoo/OpenJev
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: action-prediction, web-navigation, efficiency
- Evidence checked: 2026-10-18T16:16:18Z
- ID: github:alanhuangyoo/openjev

## Limitations

Models and code for an open replacement of a hosted System One decision API. A Qwen3 or Qwen3.5 backbone without its vocabulary head scores each option with a pointer head, so one pass answers every question in a request; a local server exposes POST /v1/systemone. Browser steps arrive as page text, numbered elements and recent actions, and the model chooses an operation (click, type, DONE and others) and a target element. The repository holds the wev package (data conversion for Mind2Web, NNetNav and WebChain, training, calibration, export, serving), teacher-collection scripts, the OpenJev-Bench browser-lane client (2,346 frozen steps stored in the Hub dataset alanhuangya/OpenJev-Data), locked results and the paper source; the paper is a Zenodo deposit (doi 10.5281/zenodo.22941164) with no catalog record. The models also answer general decisions such as triage and routing. Results are publisher-reported, and live-website numbers use an LLM judge. Not a fork, not archived. Code was read, not run.

- Record JSON: https://awesomecua.com/resources/github-alanhuangyoo-openjev/record.json

## License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/alanhuangyoo/OpenJev/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/alanhuangya/OpenJev-4B/raw/368713247ad2a50d56542b4d812823626eb504e7/README.md

- weights review: All three Hub model cards declare apache-2.0 (OpenJev-4B at 3687132, OpenJev-8B at 32bc7cb, OpenJev-1.7B at 7418ae8). This covers the released weights only; the README warns that parts of the training data are research-only or subject to a model provider's terms.
  Sources: https://huggingface.co/alanhuangya/OpenJev-4B/raw/368713247ad2a50d56542b4d812823626eb504e7/README.md, https://huggingface.co/alanhuangya/OpenJev-8B/raw/32bc7cb98f8fc0c0b517d440d1b97de521eb3315/README.md, https://huggingface.co/alanhuangya/OpenJev-1.7B/raw/7418ae8b6e3b6a6507a8a58729ae491cd1c732d9/README.md

## Primary evidence

- https://raw.githubusercontent.com/alanhuangyoo/OpenJev/HEAD/README.md (retrieved 2026-10-18T16:16:18Z; SHA-256 c5dee060aab4f95fd80d8d3b463b336e67fbea6f42df31e6f334942335523ebe)
- https://raw.githubusercontent.com/alanhuangyoo/OpenJev/da6a68fb9195958cc0a6cdb7b35587acec436a65/wev/model.py (retrieved 2026-10-18T16:15:40Z; SHA-256 f7e09479e92b5cc321adc2f6f5116b79cd99c3348fc2ffe55e32b6829c9d08d8)
- https://raw.githubusercontent.com/alanhuangyoo/OpenJev/da6a68fb9195958cc0a6cdb7b35587acec436a65/wev/serve.py (retrieved 2026-10-18T16:15:40Z; SHA-256 43c32fdd4dc7f0ba95373efde8af01f294271c3375cf0b2a163f3c16fe1f3bf8)
- https://raw.githubusercontent.com/alanhuangyoo/OpenJev/da6a68fb9195958cc0a6cdb7b35587acec436a65/scripts/wev_bench.py (retrieved 2026-10-18T16:15:41Z; SHA-256 3b1ad4252bca15a371971c966f2b6bf449cb84d5e17e9fa1e731126610fc319b)
- https://raw.githubusercontent.com/alanhuangyoo/OpenJev/da6a68fb9195958cc0a6cdb7b35587acec436a65/wev/mind2web.py (retrieved 2026-10-18T16:15:41Z; SHA-256 80e3a7862829bee82d1af0db8acb17ac22afea5f348bf48dd49e8ad02f060f89)
- https://huggingface.co/alanhuangya/OpenJev-4B/raw/368713247ad2a50d56542b4d812823626eb504e7/README.md (retrieved 2026-10-18T16:15:41Z; SHA-256 41e6569e5cb51644144ad39ee6d60915fabef9cc9e8fe04b66dff1f0aee27f44)
- https://huggingface.co/alanhuangya/OpenJev-8B/raw/32bc7cb98f8fc0c0b517d440d1b97de521eb3315/README.md (retrieved 2026-10-18T16:15:41Z; SHA-256 d306d34c702cc349375f9052fd60a915392142476d944a27a463d478fe5f6fc7)
- https://huggingface.co/alanhuangya/OpenJev-1.7B/raw/7418ae8b6e3b6a6507a8a58729ae491cd1c732d9/README.md (retrieved 2026-10-18T16:15:41Z; SHA-256 0744b90308c2aa923b80a697eabc36c78a44437ec350e225a881719a9d622f66)
- https://raw.githubusercontent.com/alanhuangyoo/OpenJev/HEAD/LICENSE (retrieved 2026-10-18T16:16:36Z; SHA-256 6b08bb37982c233aa12bcbdf19106da12f3f4fcf800773ea42e28ebeddd34fb8)
