# OpenDesk

Computer-use MCP server and Python/TypeScript SDKs giving agents Set-of-Marks screenshots, accessibility-based UI actions, mouse, keyboard, OCR, CDP browser control and workflow replay on local or paired machines.

- Catalog URL: https://awesomecua.com/resources/github-vitalops-opendesk/
- Original source: https://github.com/vitalops/opendesk
- Kind: tool
- Review: curated
- Scope: core
- Environments: desktop, macos, linux, windows, web
- Topics: automation, tool-integration, screen-understanding, safety-security, memory
- Evidence checked: 2026-10-20T08:17:46Z
- ID: github:vitalops/opendesk

## Limitations

Published by VitalOps and unrelated to the openDesk office suite. The Python package opendesk is version 0.3.0 in pyproject.toml at the inspected commit, and the README also documents an npm package, @vitalops/opendesk-sdk. marks.py builds Set-of-Marks screenshots from platform accessibility APIs (AppleScript on macOS, AT-SPI2 on Linux, UI Automation on Windows); the browser tool drives Chrome, Edge or Brave over the DevTools protocol. The README also describes record-and-replay workflows compiled for replay without model calls, scheduling, a local screen-memory index, a safety guard with risk tiers, approvals, prompt-injection scanning and a hash-chained audit log, and encrypted pairing for remote machines. docs/eval.md describes an evaluation harness with macOS smoke and prompt-injection suites; its OSWorld adapter is marked untested and was unit-tested with fakes only. No model is bundled; an MCP client or SDK caller supplies the agent. Code was read, not run.

- Record JSON: https://awesomecua.com/resources/github-vitalops-opendesk/record.json

## License declarations

- code: MIT — https://raw.githubusercontent.com/vitalops/opendesk/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/vitalops/opendesk/HEAD/README.md (retrieved 2026-10-20T08:17:46Z; SHA-256 78391eec46769ee8bec1c65bb5328c94aca3757717142be35f4e63e9059003b0)
- https://raw.githubusercontent.com/vitalops/opendesk/b7e564952dc77795cdb1741940354c351e9e6370/README.md (retrieved 2026-10-20T08:17:08Z; SHA-256 78391eec46769ee8bec1c65bb5328c94aca3757717142be35f4e63e9059003b0)
- https://raw.githubusercontent.com/vitalops/opendesk/b7e564952dc77795cdb1741940354c351e9e6370/python/pyproject.toml (retrieved 2026-10-20T08:17:09Z; SHA-256 a10d74cf1b9b50dfc4e98275b4220b9f0f50d0bfb68ed9f3785d6effd860c8f3)
- https://raw.githubusercontent.com/vitalops/opendesk/b7e564952dc77795cdb1741940354c351e9e6370/python/opendesk/computer/marks.py (retrieved 2026-10-20T08:17:16Z; SHA-256 cd85db8949edfda6bdc9d7c5311ea653da9be3e159650ba69b364e6370f96338)
- https://raw.githubusercontent.com/vitalops/opendesk/b7e564952dc77795cdb1741940354c351e9e6370/docs/eval.md (retrieved 2026-10-20T08:17:18Z; SHA-256 05d2a8f3c961b4f94618cf2b26ef81aab58ae73822cf6e865151b4568f3f2185)
- https://raw.githubusercontent.com/vitalops/opendesk/b7e564952dc77795cdb1741940354c351e9e6370/LICENSE (retrieved 2026-10-20T08:17:18Z; SHA-256 78b6dc70a67b47401f51d2a734221901d4774b7f5e138d2db0b40cd979a2bea2)
- https://raw.githubusercontent.com/vitalops/opendesk/HEAD/LICENSE (retrieved 2026-10-20T08:17:48Z; SHA-256 78b6dc70a67b47401f51d2a734221901d4774b7f5e138d2db0b40cd979a2bea2)
