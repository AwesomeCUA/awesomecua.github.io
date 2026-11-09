# Roubao

On-device Android phone agent in Kotlin that captures screenshots and taps, swipes and types through Shizuku without a PC, running a planner, executor and reflector loop on any OpenAI-compatible VLM, GUI-Owl or MAI-UI.

- Catalog URL: https://awesomecua.com/resources/github-turbo1123-roubao/
- Original source: https://github.com/Turbo1123/roubao
- Kind: agent
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, automation, planning, self-reflection
- Evidence checked: 2026-10-20T07:57:16Z
- ID: github:turbo1123/roubao

## Limitations

Kotlin Android app (minimum SDK 26) published by Turbo1123. Shizuku gives it ADB-level shell access without root, which DeviceController.kt uses for screencap, input tap/swipe/text and am start; the agent's floating overlay is hidden while each plain screenshot is taken. In the default mode MobileAgent.kt runs Manager (plan), Executor (one of click, double_tap, long_press, type, swipe, system_button, open_app, wait, take_over or answer, with pixel coordinates), ActionReflector (compares the before and after screenshots) and an optional Notetaker over an OpenAI-compatible VLM API, for at most 25 steps by default; the README calls this layer a Kotlin port of Mobile-Agent-v3. Two other modes call GUI-Owl through Alibaba Cloud DashScope's GUI agent endpoint (default model pre-gui_owl_7b), which returns actions directly, or an OpenAI-compatible MAI-UI server (default localhost:8000, MAI-UI-2B) with MAI-UI's prompt format and up to three history screenshots. A Skills layer (app/src/main/assets/skills.json) can instead hand a request to another app through a deep link, and Tools cover app search, deep links, clipboard, shell and HTTP. When screencap is blocked on a secure screen the agent asks the user before continuing; the Manager prompt stops the run when a screen actively asks for payment confirmation, a password or biometric verification, and the Executor can hand logins and captchas to the user (take_over) or ask for confirmation of payment actions. The README says a 2.0 version based on AccessibilityService is developed on a separate branch; this record describes main. Root LICENSE is MIT; latest release V1.4.2.

- Record JSON: https://awesomecua.com/resources/github-turbo1123-roubao/record.json

## License declarations

- code: MIT — https://raw.githubusercontent.com/Turbo1123/roubao/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/Turbo1123/roubao/HEAD/README.md (retrieved 2026-10-20T07:57:16Z; SHA-256 261913e9940568c5bf0410b8c7ae3577bf7524320eb7dde000c9d58a01cee624)
- https://api.github.com/repos/Turbo1123/roubao/git/trees/c8a6d7f03422eb01744b01f3ee77bf7757741f7e?recursive=1 (retrieved 2026-10-20T07:56:09Z; SHA-256 d3d68cf0a39dc11e27c4cc140f203a24de8fc4a216b1b16db568b8fce7563e8f)
- https://raw.githubusercontent.com/Turbo1123/roubao/c8a6d7f03422eb01744b01f3ee77bf7757741f7e/LICENSE (retrieved 2026-10-20T07:56:12Z; SHA-256 aabaf29fcf492a29bc5ac5c7d014596a7b11bd2d4cc2272880db8c5627e11818)
- https://raw.githubusercontent.com/Turbo1123/roubao/c8a6d7f03422eb01744b01f3ee77bf7757741f7e/app/src/main/java/com/roubao/autopilot/agent/MobileAgent.kt (retrieved 2026-10-20T07:56:13Z; SHA-256 562c7295c605f7e4758c920600f9fbfdf8abfa512102d53501566ce7a9927fbe)
- https://raw.githubusercontent.com/Turbo1123/roubao/c8a6d7f03422eb01744b01f3ee77bf7757741f7e/app/src/main/java/com/roubao/autopilot/agent/Manager.kt (retrieved 2026-10-20T07:56:56Z; SHA-256 9498818798128144f48a3b31d672932d6fe61eef227ac6d177a4de00c984ac93)
- https://raw.githubusercontent.com/Turbo1123/roubao/c8a6d7f03422eb01744b01f3ee77bf7757741f7e/app/src/main/java/com/roubao/autopilot/agent/Executor.kt (retrieved 2026-10-20T07:56:15Z; SHA-256 d8f80ba345b9f3ea27355b24a7d4c30a25dc827fa1040ed03c554d2274a2b8da)
- https://raw.githubusercontent.com/Turbo1123/roubao/c8a6d7f03422eb01744b01f3ee77bf7757741f7e/app/src/main/java/com/roubao/autopilot/controller/DeviceController.kt (retrieved 2026-10-20T07:56:14Z; SHA-256 f03f82fa472653d1e06b290cd8a83218f7d54a996be53fdd9f4d8fe7c187a4cb)
- https://raw.githubusercontent.com/Turbo1123/roubao/c8a6d7f03422eb01744b01f3ee77bf7757741f7e/app/src/main/java/com/roubao/autopilot/vlm/GUIOwlClient.kt (retrieved 2026-10-20T07:56:14Z; SHA-256 69a77101ff939d49def1af6d7bd5a8511eb60bec4ab72ac1cabbd878731726df)
- https://raw.githubusercontent.com/Turbo1123/roubao/c8a6d7f03422eb01744b01f3ee77bf7757741f7e/app/src/main/java/com/roubao/autopilot/vlm/MAIUIClient.kt (retrieved 2026-10-20T07:56:14Z; SHA-256 332089c55843bd7e02e6a5e1075b881834cb43c556ccecf15586b76191197cd6)
- https://raw.githubusercontent.com/Turbo1123/roubao/HEAD/LICENSE (retrieved 2026-10-20T07:57:19Z; SHA-256 aabaf29fcf492a29bc5ac5c7d014596a7b11bd2d4cc2272880db8c5627e11818)
