# Orca

DeepSeek-native terminal coding agent in Rust whose bundled macOS computer-use driver lets it observe other apps' accessibility trees and screenshots and click, type, send keys and scroll after per-app approval.

- Catalog URL: https://awesomecua.com/resources/github-echovic-orca-agent/
- Original source: https://github.com/echoVic/orca-agent
- Kind: agent
- Review: curated
- Scope: adjacent
- Environments: desktop, macos
- Topics: tool-integration, safety-security
- Evidence checked: 2026-10-20T08:18:08Z
- ID: github:echovic/orca-agent

## Limitations

Published by echoVic as the npm package @blade-ai/orca and native binaries for macOS, Linux and Windows; it is primarily a coding agent that reads and edits code and runs commands with a DeepSeek API key. Computer use is one feature: on macOS 14 or later, in the main interactive TUI session, a `computer` tool backed by the bundled crates/orca-computer-use driver lists and launches apps, observes a window as an accessibility-element outline with ids plus an optional screenshot, and clicks, types, sends keys and scrolls on targets (protocol.rs, observation.rs). Per the computer-use docs, each app needs approval unless a rule or full-auto mode allows it, typing into secure password fields always asks separately, password managers and finance apps are blocked by default, Orca never operates its own host terminal, plan mode only lists and observes, and Esc stops the run. Browser tools used from the separate Pilion Browser come from that host. Root LICENSE is MIT; the latest GitHub release is v0.5.12.

- Record JSON: https://awesomecua.com/resources/github-echovic-orca-agent/record.json

## License declarations

- code: MIT — https://raw.githubusercontent.com/echoVic/orca-agent/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/echoVic/orca-agent/HEAD/README.md (retrieved 2026-10-20T08:18:08Z; SHA-256 64e8367a7bda385173791eceaa010d0671b716f635dbe3cabd467a193f266d0b)
- https://api.github.com/repos/echoVic/orca-agent/git/trees/a016619a31739c938627b611ea7b1bc54572e658?recursive=1 (retrieved 2026-10-20T08:17:29Z; SHA-256 fa30755f1d89e38a6ecbb1f2d59cee1d54d0a626bcf23f3066927f8464ea7ba9)
- https://raw.githubusercontent.com/echoVic/orca-agent/a016619a31739c938627b611ea7b1bc54572e658/LICENSE (retrieved 2026-10-20T08:17:33Z; SHA-256 ca3956b24fe4d01f280e49f616774a467372007a090ebe9f56b1df7dbfb1de86)
- https://raw.githubusercontent.com/echoVic/orca-agent/a016619a31739c938627b611ea7b1bc54572e658/site/src/docs/md/en/computer-use.mdx (retrieved 2026-10-20T08:17:33Z; SHA-256 90378918b4a056b3fbc4d67141e1c158b268203d1b35208ce4dcdcf109e0dbdb)
- https://raw.githubusercontent.com/echoVic/orca-agent/a016619a31739c938627b611ea7b1bc54572e658/crates/orca-computer-use/src/protocol.rs (retrieved 2026-10-20T08:17:34Z; SHA-256 89778d5b83be50682142b7db9709d3368174717e79fc448a4a9945cac2e48477)
- https://raw.githubusercontent.com/echoVic/orca-agent/a016619a31739c938627b611ea7b1bc54572e658/crates/orca-computer-use/src/observation.rs (retrieved 2026-10-20T08:17:34Z; SHA-256 fc3df4cb6b4528cf6fe77a4323999734cecd093e7023ebcb930e32ee5f085f0f)
- https://raw.githubusercontent.com/echoVic/orca-agent/HEAD/LICENSE (retrieved 2026-10-20T08:18:12Z; SHA-256 ca3956b24fe4d01f280e49f616774a467372007a090ebe9f56b1df7dbfb1de86)
