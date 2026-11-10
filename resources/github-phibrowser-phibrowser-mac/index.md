---
title: "Phi Browser | AwesomeCUA"
url: https://awesomecua.com/resources/github-phibrowser-phibrowser-mac/
updated: 2026-10-18
type: infrastructure
lang: en
---

# Phi Browser

Native macOS client of a Chromium browser whose agent Spaces let the built-in assistant or external agents drive windows over a consent-gated DevTools Protocol socket while the user watches and can take control.

- Catalog URL: https://awesomecua.com/resources/github-phibrowser-phibrowser-mac/
- Original source: https://github.com/phibrowser/phibrowser-mac
- Kind: infrastructure
- Review: curated
- Scope: core
- Environments: web, desktop, macos
- Topics: web-navigation, human-in-the-loop, safety-security
- Evidence checked: 2026-10-18T15:44:36Z
- ID: github:phibrowser/phibrowser-mac

## Limitations

This is the open macOS client (Swift, AppKit and SwiftUI). Building it requires the prebuilt Phi Framework, the publisher's own Chromium build, whose source is unpublished; the built-in assistant's models, prompts and pipelines run server-side, outside this repository, and a self-built copy has no Phi Cloud access. Sources/ChromiumBridge/AgentCDP/AgentCDPListener.swift owns a Unix-domain socket through which agent tools reach the browser's DevTools endpoint after per-agent user consent. tools/phi-browser-skill (SKILL.md, scripts/lib/cdp.mjs) is an Agent Skill that drives agent Spaces: hidden windows on a chosen profile that the user can watch, take over and hand back, or off-screen shadow windows. Privacy and local-model statements are publisher claims.

- Record JSON: https://awesomecua.com/resources/github-phibrowser-phibrowser-mac/record.json

## License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/phibrowser/phibrowser-mac/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/phibrowser/phibrowser-mac/HEAD/README.md (retrieved 2026-10-18T15:44:36Z; SHA-256 e3220badbc2d7391a6eb799f8014f44d76156f2fb7f0bba581f74f0c8ff99128)
- https://raw.githubusercontent.com/phibrowser/phibrowser-mac/7ace23508bb9e2dceea393cd223628b14514681f/Sources/ChromiumBridge/AgentCDP/AgentCDPListener.swift (retrieved 2026-10-18T15:44:22Z; SHA-256 4baeb23b56aa42d138b56775be3ee54d6ae9488e00901111035dfe6b620812d1)
- https://raw.githubusercontent.com/phibrowser/phibrowser-mac/7ace23508bb9e2dceea393cd223628b14514681f/tools/phi-browser-skill/SKILL.md (retrieved 2026-10-18T15:44:22Z; SHA-256 b25192207cca26069c8dda437c49ec31bad26ddfd3c8e44c76eccb71410f707d)
- https://raw.githubusercontent.com/phibrowser/phibrowser-mac/7ace23508bb9e2dceea393cd223628b14514681f/tools/phi-browser-skill/scripts/lib/cdp.mjs (retrieved 2026-10-18T15:44:22Z; SHA-256 1ea23ce373bdcca229f6aaf7c652ee8945aad2d07f77c3aa2fcb45d439b8090d)
- https://raw.githubusercontent.com/phibrowser/phibrowser-mac/7ace23508bb9e2dceea393cd223628b14514681f/LICENSE (retrieved 2026-10-18T15:44:23Z; SHA-256 7c1eb6bf2936ea78c389fd1fa17e116364853a1577df105bc4db6fd929b849c3)
- https://raw.githubusercontent.com/phibrowser/phibrowser-mac/HEAD/LICENSE (retrieved 2026-10-18T15:44:45Z; SHA-256 7c1eb6bf2936ea78c389fd1fa17e116364853a1577df105bc4db6fd929b849c3)
