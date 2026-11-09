# WebLINX 1.1 (WebLINX-BrowserGym)

WebLINX 1.1, a reprocessed release of WebLINX's conversational web-navigation demonstrations packaged as single-step BrowserGym tasks that score one predicted browser action against the recorded turn.

- Catalog URL: https://awesomecua.com/resources/url-77afb3a9b045a157167c/
- Original source: https://huggingface.co/datasets/McGill-NLP/weblinx-browsergym
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation, action-prediction
- Evidence checked: 2026-10-18T12:21:40Z
- ID: url:77afb3a9b045a157167c

## Limitations

The card and the WebLINX README describe WebLINX 1.1 as derived from WebLINX for BrowserGym and AgentLab: some demonstrations were removed and tab actions were added to the evaluated steps, so results should be reported as WebLINX-1.1, WebLINX-BrowserGym or WebLINX-BG, not compared with WebLINX 1.0. Each demonstration folder holds accessibility trees, DOM snapshots, element properties and boxes, page HTML and screenshots, with per-demonstration ZIP archives alongside. The task loader and scorer live in the separate McGill-NLP/weblinx-browsergym extension repository, which declares no license. CC-BY-NC-SA-4.0 is the card's data declaration, with added terms of use.

- Record JSON: https://awesomecua.com/resources/url-77afb3a9b045a157167c/record.json

## Structured profile

- actions: click, hover, fill, goto, scroll, new_tab, tab_close, tab_focus, send_msg_to_user
- evaluation: Each task replays one recorded turn and ends after one step. The extension's get_reward compares the predicted action with the reference turn: IoU for click and hover, chrF times IoU for text input, URL F-score for page loads, chrF for messages, a distance score for scrolls, intent match for opening or closing tabs and exact target match for tab switches; unsupported intents score 0.
- focus: conversational web navigation, next-action prediction from recorded demonstration states
- observations: screenshot, DOM snapshot, accessibility tree, extra element properties, open tab URLs and titles, chat history and goal
- setting: offline

### Count observations

- 62,966 single-step tasks — all splits, task metadata at revision 9db39ad4 (computed) (computed; source: https://huggingface.co/datasets/McGill-NLP/weblinx-browsergym/raw/9db39ad436c452c92feaaaa0c7e70a0330289827/browsergym/task_metadata/weblinx_all.csv)
- 2,325 demonstrations — all splits, distinct demo_name values at revision 9db39ad4 (computed) (computed; source: https://huggingface.co/datasets/McGill-NLP/weblinx-browsergym/raw/9db39ad436c452c92feaaaa0c7e70a0330289827/browsergym/task_metadata/weblinx_all.csv)
- 26,410 single-step tasks — train split (computed) (computed; source: https://huggingface.co/datasets/McGill-NLP/weblinx-browsergym/raw/9db39ad436c452c92feaaaa0c7e70a0330289827/browsergym/task_metadata/weblinx_all.csv)
- 2,526 single-step tasks — valid split (computed) (computed; source: https://huggingface.co/datasets/McGill-NLP/weblinx-browsergym/raw/9db39ad436c452c92feaaaa0c7e70a0330289827/browsergym/task_metadata/weblinx_all.csv)
- 2,650 single-step tasks — test_iid split (computed) (computed; source: https://huggingface.co/datasets/McGill-NLP/weblinx-browsergym/raw/9db39ad436c452c92feaaaa0c7e70a0330289827/browsergym/task_metadata/weblinx_all.csv)
- 6,802 single-step tasks — test_cat split (computed) (computed; source: https://huggingface.co/datasets/McGill-NLP/weblinx-browsergym/raw/9db39ad436c452c92feaaaa0c7e70a0330289827/browsergym/task_metadata/weblinx_all.csv)
- 8,704 single-step tasks — test_geo split (computed) (computed; source: https://huggingface.co/datasets/McGill-NLP/weblinx-browsergym/raw/9db39ad436c452c92feaaaa0c7e70a0330289827/browsergym/task_metadata/weblinx_all.csv)
- 10,407 single-step tasks — test_vis split (computed) (computed; source: https://huggingface.co/datasets/McGill-NLP/weblinx-browsergym/raw/9db39ad436c452c92feaaaa0c7e70a0330289827/browsergym/task_metadata/weblinx_all.csv)
- 5,467 single-step tasks — test_web split (computed) (computed; source: https://huggingface.co/datasets/McGill-NLP/weblinx-browsergym/raw/9db39ad436c452c92feaaaa0c7e70a0330289827/browsergym/task_metadata/weblinx_all.csv)

A task is one demonstration turn named weblinx.<demo>.<step>. Tasks and demonstrations are different units; split task counts add up to the all-splits total. Counts were computed with a script from browsergym/task_metadata/weblinx_all.csv. The Hub API file list stops at 100,000 entries, so files were not counted. No agent was run.

## License declarations

- code: not recorded
- data: cc-by-nc-sa-4.0 — https://huggingface.co/datasets/McGill-NLP/weblinx-browsergym/raw/9db39ad436c452c92feaaaa0c7e70a0330289827/README.md
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/McGill-NLP/weblinx-browsergym/raw/9db39ad436c452c92feaaaa0c7e70a0330289827/README.md (retrieved 2026-10-18T12:21:40Z; SHA-256 15791d57bbcc8d4c5c88a8a3f5316ed72bc1e2ace939b1fb8dd6039b9a7b0d8b)
- https://huggingface.co/api/datasets/McGill-NLP/weblinx-browsergym (retrieved 2026-10-18T12:21:39Z; SHA-256 9a1bc777aadeb117d66a4bc240401471cbbc21b968140f7ab85cf2ec79c7d164)
- https://huggingface.co/datasets/McGill-NLP/weblinx-browsergym/raw/9db39ad436c452c92feaaaa0c7e70a0330289827/browsergym/task_metadata/weblinx_all.csv (retrieved 2026-10-18T12:21:40Z; SHA-256 d50c9bd8d67675316c50ff0cebf81c8273d1e4b1b815337c16757b0bb370b481)
- https://raw.githubusercontent.com/McGill-NLP/weblinx-browsergym/297e5de4e773b8756b0d4c044f23d5075950dc3d/weblinx_browsergym/__init__.py (retrieved 2026-10-18T12:21:41Z; SHA-256 9f16aa5ee665b9d1b6eb36bd2b1c4303d53c1f0e7cb6b6b664fce03d389c7ab0)
- https://raw.githubusercontent.com/McGill-NLP/weblinx/9a7e814ffaac36d36ae5291dc3407c530055e16f/README.md (retrieved 2026-10-18T12:21:41Z; SHA-256 15c3f1656afd861894b180bca7d9214b4cf78a6ad9cd0601c80f5d67d2839528)
- https://huggingface.co/datasets/McGill-NLP/weblinx-browsergym/raw/9db39ad436c452c92feaaaa0c7e70a0330289827/README.md (retrieved 2026-10-18T12:21:40Z; SHA-256 15791d57bbcc8d4c5c88a8a3f5316ed72bc1e2ace939b1fb8dd6039b9a7b0d8b)
