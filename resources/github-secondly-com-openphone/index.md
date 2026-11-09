# OpenPhone (Secondly)

AI-native Android OS on LineageOS whose privileged assistant uses new framework services to read the screen and UI tree and tap, swipe and type across apps, with confirmations, watchers and an audit log.

- Catalog URL: https://awesomecua.com/resources/github-secondly-com-openphone/
- Original source: https://github.com/secondly-com/OpenPhone
- Kind: agent
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, human-in-the-loop, safety-security
- Evidence checked: 2026-10-18T15:46:31Z
- ID: github:secondly-com/openphone

## Limitations

Developer preview based on LineageOS 23.2 / Android 16, targeting the Pixel 9a first, with an emulator build path. The repository holds an overlay (the privileged OpenPhoneAssistant app and vendor configuration), patch stacks for LineageOS repositories and build scripts; it does not vendor the Android source. The frameworks_base patches add an agent manager service with task-scoped input action execution, a framework-mediated UI tree snapshot, opt-in screenshots captured by system_server, a pending-action confirmation flow and a tamper-evident audit log. overlay/vendor/openphone/config/openphone_model_tools.json lists 54 model-visible tools, including screen reading, tap, swipe, typing, app launch, messages, calendar, watchers and background jobs. Models are reached through a development model broker in services/. It is unrelated to the HKUDS OpenPhone mobile foundation-model paper (arXiv 2510.22009). Code was read, not built or run.

- Record JSON: https://awesomecua.com/resources/github-secondly-com-openphone/record.json

## License declarations

- code: PolyForm-Noncommercial-1.0.0 — https://raw.githubusercontent.com/secondly-com/OpenPhone/b4b6e76fc353bac249a9877cdda9722e7b3f3db8/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: GitHub reports NOASSERTION. LICENSE is a custom mixed-license notice that places OpenPhone-owned materials under PolyForm Noncommercial 1.0.0 (text in docs/legal/LICENSE.noncommercial); this is source-available, not an open-source license, and it does not relicense the Android, LineageOS or GPL material the patches touch.
  Sources: https://raw.githubusercontent.com/secondly-com/OpenPhone/b4b6e76fc353bac249a9877cdda9722e7b3f3db8/LICENSE, https://raw.githubusercontent.com/secondly-com/OpenPhone/b4b6e76fc353bac249a9877cdda9722e7b3f3db8/docs/legal/LICENSE.noncommercial

## Primary evidence

- https://raw.githubusercontent.com/secondly-com/OpenPhone/HEAD/README.md (retrieved 2026-10-18T15:46:31Z; SHA-256 2f59d1bb27c2ab6041ca0e1f11526818fa7a7ab3e676dafbb646a7a61e17aacd)
- https://raw.githubusercontent.com/secondly-com/OpenPhone/b4b6e76fc353bac249a9877cdda9722e7b3f3db8/patches/frameworks_base/0003-OpenPhone-add-task-scoped-input-action-execution.patch (retrieved 2026-10-18T15:46:11Z; SHA-256 2fb596e43ed7e8baa1ccc5fce1b32b1c237468e24cdb14350d898648cf21cf2c)
- https://raw.githubusercontent.com/secondly-com/OpenPhone/b4b6e76fc353bac249a9877cdda9722e7b3f3db8/patches/frameworks_base/0017-OpenPhone-framework-mediated-UI-tree-snapshot.patch (retrieved 2026-10-18T15:46:11Z; SHA-256 632146c12f13198f0d3c77f4c256b206d31af96aa5aada84f098b0e3973815fa)
- https://raw.githubusercontent.com/secondly-com/OpenPhone/b4b6e76fc353bac249a9877cdda9722e7b3f3db8/overlay/packages/apps/OpenPhoneAssistant/src/org/openphone/assistant/agent/FrameworkToolExecutor.java (retrieved 2026-10-18T15:46:11Z; SHA-256 830ae7eae39ce64719493b2c220ff0b220a9bc314e71c169224d64c980d3eb23)
- https://raw.githubusercontent.com/secondly-com/OpenPhone/b4b6e76fc353bac249a9877cdda9722e7b3f3db8/overlay/vendor/openphone/config/openphone_model_tools.json (retrieved 2026-10-18T15:46:12Z; SHA-256 eee43e026576617b186c5e89803cee42646cb8b2bdcce142f7449602d3a86f10)
- https://raw.githubusercontent.com/secondly-com/OpenPhone/b4b6e76fc353bac249a9877cdda9722e7b3f3db8/LICENSE (retrieved 2026-10-18T15:46:12Z; SHA-256 45ed2adbc9092ba471690f70e3d8191bcaa616d053cfd7a2f86e4ec0f094719d)
- https://raw.githubusercontent.com/secondly-com/OpenPhone/b4b6e76fc353bac249a9877cdda9722e7b3f3db8/docs/legal/LICENSE.noncommercial (retrieved 2026-10-18T15:46:12Z; SHA-256 4723409558ffb850c2c43302dae8b5c3359bcb8d9596293e888414d494115717)
