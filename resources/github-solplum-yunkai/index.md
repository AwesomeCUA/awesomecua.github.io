# Yunkai

Android phone assistant combining model-driven tool use with accessibility-tree reading, screenshots, and tap, swipe and text-entry primitives. Its documented interaction flow presents operation plans for user confirmation.

- Catalog URL: https://awesomecua.github.io/resources/github-solplum-yunkai/
- Original source: https://github.com/solplum/yunkai
- Kind: agent
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, screen-understanding, human-in-the-loop
- Evidence checked: 2026-10-20T11:57:12.431753+00:00
- ID: github:solplum/yunkai

## Limitations

The Android AccessibilityService contains concrete screen-reading and action paths. The inspected HarmonyOS accessibility extension is a lifecycle/event scaffold with its screen-content probe disabled; HDC appears in an external UI-test driver, so Harmony GUI-control parity is not established by this review. Setup requires a configured OpenAI-compatible model endpoint and API key: local storage does not establish offline inference or a no-transmission guarantee. Documented approval and privacy mechanisms are not independently tested security guarantees. No app, device test or model inference was run.

- Record JSON: https://awesomecua.github.io/resources/github-solplum-yunkai/record.json

## License declarations

- code: MIT — https://raw.githubusercontent.com/solplum/yunkai/2aa6cd83165bfc201b0128c250e80892895d63af/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: Complete root MIT license text inspected at the pinned commit. Repository software only; data, weights and third-party assets retain separate terms.
  Sources: https://raw.githubusercontent.com/solplum/yunkai/2aa6cd83165bfc201b0128c250e80892895d63af/LICENSE

## Primary evidence

- https://raw.githubusercontent.com/solplum/yunkai/2aa6cd83165bfc201b0128c250e80892895d63af/README.md (retrieved 2026-10-20T11:57:12.431753+00:00; SHA-256 eea31b35aa0b55c97f8ccda3438382ad49d2453671b49bb817efb5bc3384e900)
- https://api.github.com/search/repositories?q=topic%3Amobile-agent+is%3Apublic+fork%3Afalse+created%3A2008-01-01..2026-10-20&per_page=100&page=1&sort=updated&order=asc (retrieved 2026-10-20T11:06:00.276978+00:00; SHA-256 01f97a863952373bd10a1f849d79706344be63f5774fe7e0cfe9ba774e41d213)
- https://api.github.com/repos/solplum/yunkai/commits/main (retrieved 2026-10-20T11:54:02.419278+00:00; SHA-256 e2797712132e69cc50fa7ad2ae815a48339f77eebec1e85a5dc0cd75702574f1)
- https://api.github.com/repos/solplum/yunkai/git/trees/4ca94f2f7d8f13099ae2c351d9578ed5ef0cb509?recursive=1 (retrieved 2026-10-20T11:56:30.226860+00:00; SHA-256 08f48cb5c15b8d505e76a91d996c656d87765946cc7137bce088e73e6e64cf06)
- https://raw.githubusercontent.com/solplum/yunkai/2aa6cd83165bfc201b0128c250e80892895d63af/LICENSE (retrieved 2026-10-20T11:57:22.238029+00:00; SHA-256 c39441f92c303832d42f1f153c4442533ac925007e12d70f3199c568a0baac88)
- https://raw.githubusercontent.com/solplum/yunkai/2aa6cd83165bfc201b0128c250e80892895d63af/yunkai-android/app/src/main/java/com/zhuolin/yunkai/service/screen/ScreenSenseService.kt (retrieved 2026-10-20T11:59:51.424713+00:00; SHA-256 964aad706676fc7b74e532f8bc441fa766f3ce0ca3e4d0e115c7a90c70656883)
- https://raw.githubusercontent.com/solplum/yunkai/2aa6cd83165bfc201b0128c250e80892895d63af/yunkai-harmony/entry/src/main/ets/service/tools/M2Tools.ets (retrieved 2026-10-20T11:59:54.745065+00:00; SHA-256 628cc3015999176052a09e3f3bbb8635d87163a9430d98cb6a6a7c09117dfd37)
- https://raw.githubusercontent.com/solplum/yunkai/2aa6cd83165bfc201b0128c250e80892895d63af/yunkai-harmony/entry/src/main/ets/service/screen/ScreenSenseExtension.ets (retrieved 2026-10-20T12:04:53.632582+00:00; SHA-256 ba8c9b0f4b5cea5ac36a4b49f3cf27e77e5c6beb49022e43c667e359be2c6fca)
- https://raw.githubusercontent.com/solplum/yunkai/2aa6cd83165bfc201b0128c250e80892895d63af/yunkai-harmony/tests/fullflow/drive_harmony.sh (retrieved 2026-10-20T12:04:56.914360+00:00; SHA-256 423a77e1fd57f3e105898f1adfc94c493de5c0de97fae4379f9cf540c89d4640)
