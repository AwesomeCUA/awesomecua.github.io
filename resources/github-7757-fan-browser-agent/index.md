# Fan

Electron desktop agent that operates an embedded, visible Chromium browser from numbered DOM and accessibility snapshots, runs bounded JavaScript browser transactions, and hands control back for logins and risky steps.

- Catalog URL: https://awesomecua.com/resources/github-7757-fan-browser-agent/
- Original source: https://github.com/7757/Fan-Browser-Agent
- Kind: agent
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, human-in-the-loop, automation
- Evidence checked: 2026-10-18T16:07:48Z
- ID: github:7757/fan-browser-agent

## Limitations

Early-preview desktop app (v0.4.3 unsigned builds for macOS, Windows and Linux were the latest GitHub release at review). The README states that its Python agent runtime is adapted from Nous Research's Hermes Agent under MIT, and the root LICENSE keeps both copyright notices. Observation (apps/desktop/electron/browser-runtime/observation/operations.cjs) combines CDP DOMSnapshot.captureSnapshot with Accessibility.getFullAXTree into a numbered snapshot; browser_snapshot can attach a plain screenshot or one with numbered element boxes. browser_run executes model-written JavaScript against a sandboxed fan.* API, clicks go through Input.dispatchMouseEvent, and browser_handoff returns control to the user. The runtime also has terminal, file, memory, MCP and scheduled-task tools. Models come from user-configured providers. Code was read, not run.

- Record JSON: https://awesomecua.com/resources/github-7757-fan-browser-agent/record.json

## License declarations

- code: MIT — https://raw.githubusercontent.com/7757/Fan-Browser-Agent/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/7757/Fan-Browser-Agent/HEAD/README.md (retrieved 2026-10-18T16:07:48Z; SHA-256 d123c5afc5ec4cc25c9590a3b390a704eb3179821baab910bb66184097424842)
- https://raw.githubusercontent.com/7757/Fan-Browser-Agent/665b5a6e57eede8cf4d58b85fce6a636d6b6dac7/tools/browser_program_tool.py (retrieved 2026-10-18T16:07:47Z; SHA-256 75f80576d8c2c52cc33ddc30e40a6e4a486bd1adfd41af9bbbadc77d5a6f5f56)
- https://raw.githubusercontent.com/7757/Fan-Browser-Agent/665b5a6e57eede8cf4d58b85fce6a636d6b6dac7/apps/desktop/electron/browser-runtime/observation/operations.cjs (retrieved 2026-10-18T16:07:47Z; SHA-256 df166e24596206f86aacbf7f85cda27138f3ddaed29c826b234f524d0a1f17ce)
- https://raw.githubusercontent.com/7757/Fan-Browser-Agent/665b5a6e57eede8cf4d58b85fce6a636d6b6dac7/apps/desktop/electron/browser-runtime/interaction/click-operations.cjs (retrieved 2026-10-18T16:07:47Z; SHA-256 6643182eefa1642340bab0965675ebfec80055721a179e8bb65a8710ee08e741)
- https://raw.githubusercontent.com/7757/Fan-Browser-Agent/665b5a6e57eede8cf4d58b85fce6a636d6b6dac7/LICENSE (retrieved 2026-10-18T16:07:47Z; SHA-256 8a4885604d276a67e12363f648ac06e27b55d53cea9742a67aac7ecaed0ff655)
- https://raw.githubusercontent.com/7757/Fan-Browser-Agent/HEAD/LICENSE (retrieved 2026-10-18T16:08:09Z; SHA-256 8a4885604d276a67e12363f648ac06e27b55d53cea9742a67aac7ecaed0ff655)
