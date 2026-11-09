# PokeClaw

Android app that runs a phone-control agent on the device, reading the UI tree through an Accessibility service and tapping, swiping and typing with on-device Gemma 4 or an optional cloud model.

- Catalog URL: https://awesomecua.com/resources/github-agents-io-pokeclaw/
- Original source: https://github.com/agents-io/PokeClaw
- Kind: agent
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, automation
- Evidence checked: 2026-10-18T11:54:35Z
- ID: github:agents-io/pokeclaw

## Limitations

Also called PocketClaw. The task loop runs inside the installed APK; ADB control from a host is outside this architecture. Local mode runs Gemma 4 through LiteRT-LM after a model download of about 2.6 GB; Cloud mode calls a hosted model. The tool registry also has notification, clipboard, call, file and knowledge-base tools, plus a separate D-pad tool set for Android TV devices. The README reports pass rates, for example 18 of 20 cloud tasks on a Pixel 8 Pro, from the author's trials.

- Record JSON: https://awesomecua.com/resources/github-agents-io-pokeclaw/record.json

## License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/agents-io/PokeClaw/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/agents-io/PokeClaw/HEAD/README.md (retrieved 2026-10-18T11:54:35Z; SHA-256 2aa506fd4870c06d311d6c1f4f00eaa5367705ee903491e034b5cdd2842408fc)
- https://raw.githubusercontent.com/agents-io/PokeClaw/936eca3ef7881e37908b5f183bf948ccaf1615e4/app/src/main/java/io/agents/pokeclaw/tool/ToolRegistry.kt (retrieved 2026-10-18T11:54:10Z; SHA-256 d38651fb47b4a9b8b83200b60ee8160d13728477b48a04a4881b31b74ddf501c)
- https://raw.githubusercontent.com/agents-io/PokeClaw/936eca3ef7881e37908b5f183bf948ccaf1615e4/app/src/main/java/io/agents/pokeclaw/service/ClawAccessibilityService.java (retrieved 2026-10-18T11:54:11Z; SHA-256 3c7d43e9fa6ed01b04ebf90fc25ddb2191a4db9f5501e52dd020bf00b8ec6b1d)
- https://raw.githubusercontent.com/agents-io/PokeClaw/936eca3ef7881e37908b5f183bf948ccaf1615e4/LICENSE (retrieved 2026-10-18T11:54:11Z; SHA-256 4387763272c00e188bf8a111b9f99babfa7bf877ed56e774ed6a02a4856512ac)
- https://raw.githubusercontent.com/agents-io/PokeClaw/HEAD/LICENSE (retrieved 2026-10-18T11:54:51Z; SHA-256 4387763272c00e188bf8a111b9f99babfa7bf877ed56e774ed6a02a4856512ac)
