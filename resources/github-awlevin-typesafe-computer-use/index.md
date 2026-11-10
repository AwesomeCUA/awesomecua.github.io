---
title: "typesafe-computer-use | AwesomeCUA"
url: https://awesomecua.com/resources/github-awlevin-typesafe-computer-use/
updated: 2026-10-18
type: agent
lang: en
---

# typesafe-computer-use

Computer-use loop that reads the screen with OCR and accessibility labels, has the hosted TypeSafe classifier choose each next action with a confidence, and calls a writer model only for free text.

- Catalog URL: https://awesomecua.com/resources/github-awlevin-typesafe-computer-use/
- Original source: https://github.com/awlevin/typesafe-computer-use
- Kind: agent
- Review: curated
- Scope: core
- Environments: desktop, macos, windows, linux, web
- Topics: efficiency, action-prediction, screen-understanding
- Evidence checked: 2026-10-18T11:53:03Z
- ID: github:awlevin/typesafe-computer-use

## Limitations

Also called jev. The main loop drives macOS through Vision OCR, the accessibility tree and synthetic input; the Windows adapter (UI Automation, SendInput, Windows OCR) is documented as experimental and untested on Windows. An opt-in browser backend reads the DOM over the Chrome DevTools Protocol, and the Linux sandbox runs only that backend. Linux desktop control is through the OSWorld JevAgent adapter inside OSWorld's Ubuntu VM. Every decision calls the hosted TypeSafe API, so a TypeSafe key is required; an Anthropic or OpenAI-compatible writer is optional. Per-step cost and latency comparisons and the OSWorld run logs are the author's. The README marks the project beta.

- Record JSON: https://awesomecua.com/resources/github-awlevin-typesafe-computer-use/record.json

## License declarations

- code: MIT — https://raw.githubusercontent.com/awlevin/typesafe-computer-use/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/awlevin/typesafe-computer-use/HEAD/README.md (retrieved 2026-10-18T11:53:03Z; SHA-256 f4944e284c939e52d336d4299ed8c6bf19dac7757f632c27d01279eeee21d718)
- https://raw.githubusercontent.com/awlevin/typesafe-computer-use/44ca11f0935b021b73020825da054b5c92cc1288/typesafe_computer_use/decide.py (retrieved 2026-10-18T11:52:40Z; SHA-256 82aaf2f6633f15b257ae2e1ea9ca91d8888de198a64d8d9ef21fcbe7ba962f00)
- https://raw.githubusercontent.com/awlevin/typesafe-computer-use/44ca11f0935b021b73020825da054b5c92cc1288/typesafe_computer_use/actions.py (retrieved 2026-10-18T11:52:40Z; SHA-256 72f149792289be8c44a37f2a223f166a659ba5be58eed87f232f6d22214733bd)
- https://raw.githubusercontent.com/awlevin/typesafe-computer-use/44ca11f0935b021b73020825da054b5c92cc1288/typesafe_computer_use/osworld/agent.py (retrieved 2026-10-18T11:52:40Z; SHA-256 9b0d1eb4ad8dba208cc27b51305699974debe6afad0995b9fa80a968bfc3dcbd)
- https://raw.githubusercontent.com/awlevin/typesafe-computer-use/44ca11f0935b021b73020825da054b5c92cc1288/docs/windows.md (retrieved 2026-10-18T11:52:41Z; SHA-256 677eec08e6231720aee971a6c78927c24a2a9efa52db12fb5a124136d3864041)
- https://raw.githubusercontent.com/awlevin/typesafe-computer-use/44ca11f0935b021b73020825da054b5c92cc1288/docs/browser-backend.md (retrieved 2026-10-18T11:52:41Z; SHA-256 b27b4c4315c441dd59e1c8538ae7cf78d807f0f3335255542ba7fddb7ab038b3)
- https://raw.githubusercontent.com/awlevin/typesafe-computer-use/44ca11f0935b021b73020825da054b5c92cc1288/pyproject.toml (retrieved 2026-10-18T11:52:41Z; SHA-256 cd0bb7adb46f77e0889b166e7ecc2490e5cf200396a7b7b446a446b14745b920)
- https://raw.githubusercontent.com/awlevin/typesafe-computer-use/44ca11f0935b021b73020825da054b5c92cc1288/LICENSE (retrieved 2026-10-18T11:52:41Z; SHA-256 fb99135e22841bb564b275b5c0755ce1e5418faff2c806f25d4a11696214c87c)
- https://raw.githubusercontent.com/awlevin/typesafe-computer-use/HEAD/LICENSE (retrieved 2026-10-18T11:53:13Z; SHA-256 fb99135e22841bb564b275b5c0755ce1e5418faff2c806f25d4a11696214c87c)
