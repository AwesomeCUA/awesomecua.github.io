# TipTour

macOS menu-bar agent that grounds clicks with a local Core ML control detector and accessibility tree, driven by TypeSafe's JEV text loop or Gemini realtime voice, with a localhost harness for other agents.

- Catalog URL: https://awesomecua.com/resources/github-milind-soni-tiptour-macos/
- Original source: https://github.com/milind-soni/tiptour-macos
- Kind: agent
- Review: curated
- Scope: core
- Environments: desktop, macos
- Topics: grounding, screen-understanding, human-in-the-loop
- Evidence checked: 2026-10-19T06:14:20Z
- ID: github:milind-soni/tiptour-macos

## Limitations

JEV mode sends the typed task, locally detected labels and positions, and action history to TypeSafe's hosted jev-latest model (api.typesafe.ai); it performs only clicks and stops after 12 actions. Gemini mode receives microphone audio and, when enabled, screenshots. Video tours are built by the Elorian service and only point at controls. The localhost harness on 127.0.0.1:19474 exposes observe, ground-target and act endpoints. Requires macOS 14.2+ and an Xcode build; the repository has no releases. The MIT LICENSE also credits Farza's Clicky, the upstream fork source; bundled Neko sprites carry a BSD-2-Clause file.

- Record JSON: https://awesomecua.com/resources/github-milind-soni-tiptour-macos/record.json

## License declarations

- code: MIT — https://raw.githubusercontent.com/milind-soni/tiptour-macos/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/milind-soni/tiptour-macos/HEAD/README.md (retrieved 2026-10-19T06:14:20Z; SHA-256 6e2270a3363dc72464ba5470036a4ae281e246b5d2cac1d30b0fe8c184512d12)
- https://raw.githubusercontent.com/milind-soni/tiptour-macos/c1d2731766ba21160b9b9f7d5178c3ad3bb5e055/docs/tiptour-agent-contract.md (retrieved 2026-10-18T11:57:48Z; SHA-256 b2e40abe98520eb948e07f7b3f01c5a1f33c50c988bcb447ce1708519299ba76)
- https://raw.githubusercontent.com/milind-soni/tiptour-macos/c1d2731766ba21160b9b9f7d5178c3ad3bb5e055/TipTour/Jev/JevClient.swift (retrieved 2026-10-18T11:57:48Z; SHA-256 0739dc4d312a7d8e9d217c499a7ab3ee11e1b538f14edd6419f18508ecbcad08)
- https://raw.githubusercontent.com/milind-soni/tiptour-macos/c1d2731766ba21160b9b9f7d5178c3ad3bb5e055/LICENSE (retrieved 2026-10-18T11:57:47Z; SHA-256 edcf5cfca262f2e2cf30a2e7564c11e147492d175b5c5ad2175cd350cf853ad6)
- https://raw.githubusercontent.com/milind-soni/tiptour-macos/HEAD/LICENSE (retrieved 2026-10-19T06:14:21Z; SHA-256 edcf5cfca262f2e2cf30a2e7564c11e147492d175b5c5ad2175cd350cf853ad6)
