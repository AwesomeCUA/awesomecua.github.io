# Andee

On-device Android agent in one APK that operates any app through an accessibility service, reading an element outline or, when needed, a screenshot with a labelled 8x12 grid, on any OpenAI-compatible model.

- Catalog URL: https://awesomecua.com/resources/github-kuafuai-andee/
- Original source: https://github.com/kuafuai/andee
- Kind: agent
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, grounding, memory, safety-security
- Evidence checked: 2026-10-20T08:00:27Z
- ID: github:kuafuai/andee

## Limitations

Kotlin Android app for Android 11 (API 30) or later, published by KUAFUAI, with a floating-ball persona, voice input and output, an encrypted on-device notebook and scheduled scenes. One AccessibilityService is the entry point. ScreenController.kt renders the pruned accessibility tree as an outline with one line per element, an element id, a clickable mark and a centre in 0-1000 relative coordinates; for apps that draw their own pixels the model gets a screenshot (accessibility takeScreenshot, or MediaProjection per ScreenCapture.kt) overlaid with an 8-column by 12-row labelled grid, taps by cell and which third of it, and can request a zoomed view with a red crosshair before committing. A per-location guard refuses a fourth tap within 120 px of the same spot inside five minutes. Text goes in through the accessibility input channel on Android 13 or later, with ADBKeyboard as the fallback. LocalBrain.kt runs a non-streaming tool-calling loop against any OpenAI-compatible endpoint for a configurable number of steps (1 to 200); the brain can instead run elsewhere and reach the device over a WebSocket hub. The README states that the dispatcher stops before a purchase's final confirmation, never enters payment passwords, and types vault passwords without returning them to the model. Optional extras include a robot dog driven through a USB OTG dongle. Root LICENSE is the Andee Open Source License: Apache-2.0 text with additional conditions (no white-labelling, no multi-tenant hosting, written authorisation to ship it inside another product); GitHub reports NOASSERTION. The README says ML Kit barcode and play-services stubs bundled with the app are not open source. Not a fork, not archived; release v0.5.2 tags the inspected commit. Code was read, not run.

- Record JSON: https://awesomecua.com/resources/github-kuafuai-andee/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: Root LICENSE is the custom Andee Open Source License, the Apache-2.0 text modified by additional conditions in its Part A (no white-labelling, no multi-tenant hosting without written authorisation, written authorisation to distribute it inside another product); it is not a standard SPDX license, and GitHub reports NOASSERTION.
  Sources: https://raw.githubusercontent.com/kuafuai/andee/634c6ee34ef11454116de7311bc901c3783c345c/LICENSE

## Primary evidence

- https://raw.githubusercontent.com/kuafuai/andee/HEAD/README.md (retrieved 2026-10-20T08:00:27Z; SHA-256 af06d7bce0a4faf5ff10e0dfcb6f50538ca48d7d0ac21ab15489dc28af18e44d)
- https://api.github.com/repos/kuafuai/andee/git/trees/634c6ee34ef11454116de7311bc901c3783c345c?recursive=1 (retrieved 2026-10-20T07:59:27Z; SHA-256 a238d3ec93be2cdafd86499647f910efc8d8b757aea11512666bf4e24b829789)
- https://raw.githubusercontent.com/kuafuai/andee/634c6ee34ef11454116de7311bc901c3783c345c/LICENSE (retrieved 2026-10-20T07:59:30Z; SHA-256 f7655506b6a1e66156b05dd42ab11790463ce18a39087e1d06723140d6d2cb4d)
- https://raw.githubusercontent.com/kuafuai/andee/634c6ee34ef11454116de7311bc901c3783c345c/app/src/main/java/net/kuafuai/andee/screen/ScreenController.kt (retrieved 2026-10-20T07:59:30Z; SHA-256 1f0d63a5202474a1b7ac07d72d06ae70e1b3d06b96cc26e3eb9f0076e79271e8)
- https://raw.githubusercontent.com/kuafuai/andee/634c6ee34ef11454116de7311bc901c3783c345c/app/src/main/java/net/kuafuai/andee/screen/ScreenCapture.kt (retrieved 2026-10-20T07:59:31Z; SHA-256 0a06269701741c40391ba561a25af14206ffa72d318c5a97d7135f9e5a6ceb58)
- https://raw.githubusercontent.com/kuafuai/andee/634c6ee34ef11454116de7311bc901c3783c345c/app/src/main/java/net/kuafuai/andee/brain/LocalBrain.kt (retrieved 2026-10-20T07:59:31Z; SHA-256 4f1f51af648465a5f7f558697649efdf675defbe58624e51d4c76f199e6cfd6b)
