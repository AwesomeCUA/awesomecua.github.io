# Buddy

Android app whose accessibility service serves a local MCP server of phone tools, letting Claude Code, Codex or OpenCode, run in an on-device proot Linux, read the screen, tap, type and open apps.

- Catalog URL: https://awesomecua.com/resources/github-ghorbelhamdi-buddy-android/
- Original source: https://github.com/ghorbelhamdi/buddy-android
- Kind: agent
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, human-in-the-loop, safety-security, tool-integration
- Evidence checked: 2026-10-20T08:13:05Z
- ID: github:ghorbelhamdi/buddy-android

## Limitations

Requires a 64-bit Android 11+ phone; the README says it was tested on one OnePlus 12 and uses no adb, PC or root. Tools.java registers the phone tools; read_screen walks the accessibility node tree of the visible windows into a numbered list, and tap acts on those nodes or their clickable ancestors, with a separate screenshot tool. The agents (Claude Code, Codex or OpenCode) are installed into an Alpine Linux that Buddy runs under proot and use the user's own plan or OpenCode's free models; no model is bundled. Actions that send, post, buy, delete or change settings go through confirm cards, and per-app Trust, Hard or Smart rules are enforced by the app; the README names prompt injection from on-screen text as the main risk. benchmark/ reports a small timing comparison of seven model and agent pairs on five phone tasks, two runs each, checked by hand on one phone.

- Record JSON: https://awesomecua.com/resources/github-ghorbelhamdi-buddy-android/record.json

## License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/ghorbelhamdi/buddy-android/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/ghorbelhamdi/buddy-android/HEAD/README.md (retrieved 2026-10-20T08:13:05Z; SHA-256 ac9b961b7cdbdc0760407e7ed53f444495d619e85e4f9057696a0258de19a124)
- https://raw.githubusercontent.com/ghorbelhamdi/buddy-android/522cb600ba35c092fb10a4054881087e4168e07c/README.md (retrieved 2026-10-20T08:12:42Z; SHA-256 ac9b961b7cdbdc0760407e7ed53f444495d619e85e4f9057696a0258de19a124)
- https://raw.githubusercontent.com/ghorbelhamdi/buddy-android/522cb600ba35c092fb10a4054881087e4168e07c/app/src/main/java/app/buddy/assistant/Tools.java (retrieved 2026-10-20T08:12:43Z; SHA-256 0e27239e987811fe386bd23f96f3dce6b3ef99ba20f5b1d99d356104c1e9e00d)
- https://raw.githubusercontent.com/ghorbelhamdi/buddy-android/522cb600ba35c092fb10a4054881087e4168e07c/benchmark/README.md (retrieved 2026-10-20T08:12:44Z; SHA-256 51030ac156f1a36d4756266240b404d26918cda290ba3a05dd345ad6544191a5)
- https://raw.githubusercontent.com/ghorbelhamdi/buddy-android/522cb600ba35c092fb10a4054881087e4168e07c/LICENSE (retrieved 2026-10-20T08:12:44Z; SHA-256 c95bae1d1ce0235ecccd3560b772ec1efb97f348a79f0fbe0a634f0c2ccefe2c)
- https://raw.githubusercontent.com/ghorbelhamdi/buddy-android/HEAD/LICENSE (retrieved 2026-10-20T08:13:08Z; SHA-256 c95bae1d1ce0235ecccd3560b772ec1efb97f348a79f0fbe0a634f0c2ccefe2c)
