# OpenMausBot

Desktop chat app whose bots run local Claude, Codex or Grok CLIs and each get a computer: a cloud Linux desktop, local VM, VPS or the host through Cua Driver, plus a built-in browser and approval cards.

- Catalog URL: https://awesomecua.com/resources/github-milind-soni-openmausbot/
- Original source: https://github.com/milind-soni/OpenMausBot
- Kind: agent
- Review: curated
- Scope: core
- Environments: desktop, macos, linux, web
- Topics: sandbox, human-in-the-loop, tool-integration
- Evidence checked: 2026-10-18T11:40:28Z
- ID: github:milind-soni/openmausbot

## Limitations

OpenMausBot ships no model: an Electron shell talks to a local harness server that runs the claude, codex and grok CLIs or other ACP engines and normalises their events. Host control uses the bundled Cua Driver and needs explicit opt-in; the README marks it supported on macOS, beta on Ubuntu Xorg and disabled on Wayland. Cloud computers come from the third-party Boat service and connected apps from Composio. The README says the project was formerly OpenGrokBot. Everything outside enterprise/ is Apache-2.0; enterprise/ is source-available under its own license. Code was read, not run.

- Record JSON: https://awesomecua.com/resources/github-milind-soni-openmausbot/record.json

## License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/milind-soni/OpenMausBot/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/milind-soni/OpenMausBot/HEAD/README.md (retrieved 2026-10-18T11:40:28Z; SHA-256 506bc30fecdebe7a024e7f694304c3dfecfce9c362a1b01ee9751a71faad888f)
- https://raw.githubusercontent.com/milind-soni/OpenMausBot/62a7b7ac72e4f0adae1b373032592df7327d7b26/docs/computer-use-integration.md (retrieved 2026-10-18T11:40:04Z; SHA-256 06789e95d4eca5cd14bdfe9be11bf4c1911c08b21890777d6b33b87912e801bc)
- https://raw.githubusercontent.com/milind-soni/OpenMausBot/62a7b7ac72e4f0adae1b373032592df7327d7b26/apps/docs/content/docs/computers/index.mdx (retrieved 2026-10-18T11:40:05Z; SHA-256 16765486dc0d3ab46f7c3d740cf1f1c64ed6c146923caba72a45f61ae49cc05a)
- https://raw.githubusercontent.com/milind-soni/OpenMausBot/62a7b7ac72e4f0adae1b373032592df7327d7b26/third_party/cua-driver/README.md (retrieved 2026-10-18T11:40:05Z; SHA-256 3462019dea5235431871a0c9c8f83352b9460d49c7694f8e45eb4177662934a8)
- https://raw.githubusercontent.com/milind-soni/OpenMausBot/62a7b7ac72e4f0adae1b373032592df7327d7b26/LICENSE (retrieved 2026-10-18T11:40:05Z; SHA-256 cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30)
- https://raw.githubusercontent.com/milind-soni/OpenMausBot/62a7b7ac72e4f0adae1b373032592df7327d7b26/LICENSING.md (retrieved 2026-10-18T11:40:05Z; SHA-256 e2741dbfc0f289c53b7a6bdbbce4ddca82155c5263ebd478ae19156975cc77b2)
- https://raw.githubusercontent.com/milind-soni/OpenMausBot/HEAD/LICENSE (retrieved 2026-10-18T11:40:33Z; SHA-256 cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30)
