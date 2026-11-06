# Computer-use agent tools

> 22 curated records of this kind in the AwesomeCUA catalog, each with its complete annotation, primary evidence and license declarations. Snapshot 2026-11-06T09:00:05Z.

HTML page: https://awesomecua.com/categories/tool/ · Catalog index: https://awesomecua.com/llms.txt · API: https://awesomecua.com/api/v1/resources.json

Reviews are AI-assisted inspections of primary sources. Counts are resources, not independent projects. Code, data, weights and document licenses are recorded separately; unknown values stay unknown.

---

## Activity Recorder

Windows tray utility that records primary-display screenshots, keyboard key codes and mouse events as local JPEG and JSON files for training-data collection.

- Catalog URL: https://awesomecua.com/resources/github-anikasomaia-local-activity-recorder/
- Original source: https://github.com/anikasomaia/local-activity-recorder
- Kind: tool
- Review: curated
- Scope: core
- Environments: desktop, windows
- Topics: recording, data-generation
- Evidence checked: 2026-10-20T11:57:15.716415+00:00
- ID: github:anikasomaia/local-activity-recorder

### Limitations

Recording is started and stopped from the tray; screenshots use a five-second timer. The manual Upload Data action uses a built-in third-party demonstration endpoint unless changed in code, sending recorded files as base64 JSON. Successful uploads move files into uploaded subfolders rather than delete them; no automatic expiry policy was found in the inspected capture/upload path. Sensitive-application filters are listed as future work. The README's .NET version requirements are inconsistent, and long-session behavior was not established. No license declaration was found in the inspected files or complete tree's license-file names, so code permission remains unknown. No activity was captured and no uploader or executable was run.

- Record JSON: https://awesomecua.com/resources/github-anikasomaia-local-activity-recorder/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: No license declaration was found in the inspected README/C# files, and the complete pinned tree has no LICENSE, LICENCE or COPYING-named file. Public source access does not establish reuse permission.
  Sources: https://api.github.com/repos/anikasomaia/local-activity-recorder/git/trees/f7ec5b6ecf0ba1bfe6362d7f2bfb0f1af5ac6bc7?recursive=1

### Primary evidence

- https://raw.githubusercontent.com/anikasomaia/local-activity-recorder/967cea087bf6496b3b82743fb96770fa29f8e203/README.md (retrieved 2026-10-20T11:57:15.716415+00:00; SHA-256 440e0e43026ba7a20eaca17507cec33bd697d8b1eed6fb056be34136b3f4f76f)
- https://api.github.com/search/repositories?q=topic%3Acomputer-use-agents+is%3Apublic+fork%3Afalse+created%3A2008-01-01..2026-10-20&per_page=100&page=1&sort=updated&order=asc (retrieved 2026-10-20T11:04:41.685729+00:00; SHA-256 90c30399c8aa5031f82164978bc12eae3bebba172758d20877a87fec53566c12)
- https://api.github.com/repos/anikasomaia/local-activity-recorder/commits/master (retrieved 2026-10-20T11:54:07.061516+00:00; SHA-256 f5b501fa132163d749c6695d81c76d45fdff2888ea890e31cbaa9bc4172fed3b)
- https://api.github.com/repos/anikasomaia/local-activity-recorder/git/trees/f7ec5b6ecf0ba1bfe6362d7f2bfb0f1af5ac6bc7?recursive=1 (retrieved 2026-10-20T11:56:33.833893+00:00; SHA-256 ee9e5899d1f150982eb05ca1f8794406cef0ffc80eb8223811b504ff972370c1)
- https://raw.githubusercontent.com/anikasomaia/local-activity-recorder/967cea087bf6496b3b82743fb96770fa29f8e203/Program.cs (retrieved 2026-10-20T12:05:00.168119+00:00; SHA-256 ce3022b4016d140eac554e392dbe42f54ffb3e8098b03e2bf72e92ff49c5d084)
- https://raw.githubusercontent.com/anikasomaia/local-activity-recorder/967cea087bf6496b3b82743fb96770fa29f8e203/DataUploader.cs (retrieved 2026-10-20T12:05:03.421222+00:00; SHA-256 e70e2e68b5dd586e5ad0fb0b12c8b937b4614bd5237bac61d03d22144c4751f4)

---

## Agent Browser Shield

Browser extension for filtering potentially unsafe agent input.

- Catalog URL: https://awesomecua.com/resources/github-pixiebrix-agent-browser-shield/
- Original source: https://github.com/pixiebrix/agent-browser-shield
- Kind: tool
- Review: curated
- Scope: core
- Environments: web
- Topics: safety-security
- Evidence checked: 2026-10-16T06:36:05Z
- ID: github:pixiebrix/agent-browser-shield

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-pixiebrix-agent-browser-shield/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/pixiebrix/agent-browser-shield/HEAD/README.md (retrieved 2026-10-16T06:36:05Z; SHA-256 8682f83d71dd4d44772db3e531f2a9fcb168729211e0cc43493020a0773b0aba)

---

## agent-browser

A browser-automation command-line interface that exposes browser state and interaction commands for AI agents.

- Catalog URL: https://awesomecua.com/resources/github-vercel-labs-agent-browser/
- Original source: https://github.com/vercel-labs/agent-browser
- Kind: tool
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, automation, tool-integration
- Evidence checked: 2026-10-17T03:59:53Z
- ID: github:vercel-labs/agent-browser

### Limitations

The repository publishes a Rust-based CLI and platform-specific release binaries. The inspected release is v0.39.1. Apache-2.0 is declared for the code; Chrome and other external browser components retain separate terms. No package or browser was installed.

- Record JSON: https://awesomecua.com/resources/github-vercel-labs-agent-browser/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/vercel-labs/agent-browser/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/vercel-labs/agent-browser/HEAD/README.md (retrieved 2026-10-17T03:59:53Z; SHA-256 4a9783ee8ebee10caaedfe2bdd2182539368e60e8eefadaee4cb7bab7fc75c12)
- https://api.github.com/repos/vercel-labs/agent-browser (retrieved 2026-10-17T03:59:53Z; SHA-256 6b1120e122d5d110b0da568fbbf0560fd81a4cf8d50602c397a8382617343329)
- https://api.github.com/repos/vercel-labs/agent-browser/git/trees/main?recursive=1 (retrieved 2026-10-17T03:59:53Z; SHA-256 6a90f0b79089f895fab5d35443fd113faa056f404c807966b23210c1c427e62e)
- https://api.github.com/repos/vercel-labs/agent-browser/releases/latest (retrieved 2026-10-17T04:00:55Z; SHA-256 1a4213f48240031c7837e9651bda8cebb84d69d0d97a65f012082a53a7a1f702)
- https://raw.githubusercontent.com/vercel-labs/agent-browser/HEAD/LICENSE (retrieved 2026-10-17T04:00:56Z; SHA-256 014bb31e83d5c2e76aea1cc6e82217346ab41362f32cb355ad0f5c10aa0aeaff)
- https://raw.githubusercontent.com/vercel-labs/agent-browser/HEAD/LICENSE (retrieved 2026-10-17T04:00:56Z; SHA-256 014bb31e83d5c2e76aea1cc6e82217346ab41362f32cb355ad0f5c10aa0aeaff)

---

## AUITestAgent

Generates mobile GUI interactions from natural-language test requirements and checks application behavior against those requirements.

- Catalog URL: https://awesomecua.com/resources/github-bz-lab-auitestagent/
- Original source: https://github.com/bz-lab/AUITestAgent
- Kind: tool
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: automation, evaluation
- Evidence checked: 2026-10-16T10:43:11Z
- ID: github:bz-lab/auitestagent

### Limitations

Its README describes mobile apps without naming an operating system.

- Record JSON: https://awesomecua.com/resources/github-bz-lab-auitestagent/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/bz-lab/AUITestAgent/HEAD/README.md (retrieved 2026-10-16T10:43:11Z; SHA-256 dc60f683b0f44ccee4e54e5cbe1552ee3454e1ec4ed5c04635fedb83a325f51f)

---

## Browser Use WebUI

A Gradio interface for configuring and running Browser Use agents, including persistent browser sessions and interaction recordings.

- Catalog URL: https://awesomecua.com/resources/github-browser-use-web-ui/
- Original source: https://github.com/browser-use/web-ui
- Kind: tool
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, tool-integration, recording
- Evidence checked: 2026-10-17T03:59:54Z
- ID: github:browser-use/web-ui

### Limitations

The repository publishes UI source and release v3.0.0 under MIT. It is a distinct user interface built on the existing Browser Use framework, not a second framework identity. The UI supports several external model providers whose terms are separate; no dependencies were installed.

- Record JSON: https://awesomecua.com/resources/github-browser-use-web-ui/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/browser-use/web-ui/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/browser-use/web-ui/HEAD/README.md (retrieved 2026-10-17T03:59:54Z; SHA-256 5047bcf2f0e92f0d34a57ac7d83166903a16a9909c700c0647b8a48363bd94f9)
- https://api.github.com/repos/browser-use/web-ui (retrieved 2026-10-17T03:59:53Z; SHA-256 7fb0738bc9b837f7b3e645c406e04d5c7c4d0860ea636a96e4e9d84d9510dd82)
- https://api.github.com/repos/browser-use/web-ui/git/trees/main?recursive=1 (retrieved 2026-10-17T03:59:54Z; SHA-256 fcbf1775e3513625103d389c737e98e939e17140baac9bc8000b582ab2729a46)
- https://api.github.com/repos/browser-use/web-ui/releases/latest (retrieved 2026-10-17T04:01:00Z; SHA-256 f87ee752c38653c447eed4a9abd83e71dedd40298758bcb9aa993b731362c453)
- https://raw.githubusercontent.com/browser-use/web-ui/HEAD/LICENSE (retrieved 2026-10-17T04:01:01Z; SHA-256 612d1382ec1a426eaf3672aafb13bafcfe91b2c90a0fe339822ffc9c895003ca)
- https://raw.githubusercontent.com/browser-use/web-ui/HEAD/LICENSE (retrieved 2026-10-17T04:01:01Z; SHA-256 612d1382ec1a426eaf3672aafb13bafcfe91b2c90a0fe339822ffc9c895003ca)

---

## BrowserTrace

Local, cloud-free replay debugger that records each Browser Use step's screenshot, URL, action and model I/O as a timeline and reports the step at which a failed run diverges from a known-good one.

- Catalog URL: https://awesomecua.com/resources/github-aaronlab-browsertrace/
- Original source: https://github.com/aaronlab/browsertrace
- Kind: tool
- Review: curated
- Scope: core
- Environments: web
- Topics: observability
- Evidence checked: 2026-10-16T06:36:05Z
- ID: github:aaronlab/browsertrace

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-aaronlab-browsertrace/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/aaronlab/browsertrace/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/aaronlab/browsertrace/HEAD/README.md (retrieved 2026-10-16T06:36:05Z; SHA-256 86d7fbe30596de4a1f1a1df2a986f5f247351a91c0c593dc4c29ba9c70d28c8f)
- https://raw.githubusercontent.com/aaronlab/browsertrace/HEAD/LICENSE (retrieved 2026-10-16T06:42:06Z; SHA-256 7b4ea96686420061c9d0e1ad4984d7c5efb7e1a62ce6dffd47862f02a7260867)

---

## Chrome DevTools MCP

MCP tools for browser control and inspection through Chrome DevTools.

- Catalog URL: https://awesomecua.com/resources/github-chromedevtools-chrome-devtools-mcp/
- Original source: https://github.com/ChromeDevTools/chrome-devtools-mcp
- Kind: tool
- Review: curated
- Scope: core
- Environments: web
- Topics: automation, tool-integration
- Evidence checked: 2026-10-16T06:40:53Z
- ID: github:chromedevtools/chrome-devtools-mcp

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-chromedevtools-chrome-devtools-mcp/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/ChromeDevTools/chrome-devtools-mcp/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ChromeDevTools/chrome-devtools-mcp/HEAD/README.md (retrieved 2026-10-16T06:40:53Z; SHA-256 059a0349daaef6bda98eae6d9384ed349ac94b8033b18be817c317a01b472024)
- https://raw.githubusercontent.com/ChromeDevTools/chrome-devtools-mcp/HEAD/LICENSE (retrieved 2026-10-16T06:42:07Z; SHA-256 58d1e17ffe5109a7ae296caafcadfdbe6a7d176f0bc4ab01e12a689b0499d8bd)

---

## GUI Grounding Evaluation Harness

ScreenSpot-Pro evaluation harness with explicit coordinate transforms, prompt and crop-based inference comparisons, and per-sample grounding accuracy and cost records.

- Catalog URL: https://awesomecua.com/resources/github-patrickstarl-gui-grounding-eval/
- Original source: https://github.com/PatrickStarL/gui-grounding-eval
- Kind: tool
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, evaluation, efficiency
- Evidence checked: 2026-10-20T11:51:38.123692Z
- ID: github:patrickstarl/gui-grounding-eval

### Limitations

This is an independent harness using ScreenSpot-Pro, not a new dataset or verified leaderboard entry. The read code maps points back to original-image coordinates and scores point-in-box hits; documentation limits comparisons by prompt, model, subset and provider behavior. No OS support, code license or external data/weight license was established in this bounded review. Model calls, tests and reported results were not executed or reproduced.

- Record JSON: https://awesomecua.com/resources/github-patrickstarl-gui-grounding-eval/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/PatrickStarL/gui-grounding-eval/d92b059caa0e0acf8db76f2164dd7be2617ccc72/README.md (retrieved 2026-10-20T11:51:38.123692Z; SHA-256 3226df7608039522072e59d459094fc45be9c5a6be7ea0d7ad76ddf9723a3aea)
- https://api.github.com/search/repositories?q=topic%3Agui-grounding+is%3Apublic+fork%3Afalse+created%3A2008-01-01..2026-10-20&per_page=100&page=1&sort=updated&order=asc (retrieved 2026-10-20T11:04:53.470789+00:00; SHA-256 3d76d934e98641746085772b98ee17059749f980a616435498a7ad483bd4cec1)
- https://github.com/PatrickStarL/gui-grounding-eval (retrieved 2026-10-20T11:51:05.389053Z; SHA-256 4fe6f65a21586dde0bf8b64f8c49e5c583b320bf5e0c2b8253baf2cd3fcfc5d2)
- https://raw.githubusercontent.com/PatrickStarL/gui-grounding-eval/d92b059caa0e0acf8db76f2164dd7be2617ccc72/ssp_eval/metrics.py (retrieved 2026-10-20T11:53:32.022035Z; SHA-256 c3eb1708b7d57dcde7478ca2f5063241b1ab567b2ba2ba28b9956b043da2b6c2)
- https://raw.githubusercontent.com/PatrickStarL/gui-grounding-eval/d92b059caa0e0acf8db76f2164dd7be2617ccc72/ssp_eval/geometry.py (retrieved 2026-10-20T11:53:35.461491Z; SHA-256 66fa5940f0c4f6265cb162cb0596402848dd2a49fd48b07ee950dc866b8730a5)
- https://raw.githubusercontent.com/PatrickStarL/gui-grounding-eval/d92b059caa0e0acf8db76f2164dd7be2617ccc72/ssp_eval/runner.py (retrieved 2026-10-20T11:53:38.931130Z; SHA-256 f83bc0632a616e7b01c8a46b0e435733f0cc47b4a19f0c709b221eaee8a0db5f)

---

## Mobile Harness

Portable agent instructions and integration tooling for local or cloud phone control through mobilerun-core.

- Catalog URL: https://awesomecua.com/resources/github-droidrun-mobile-harness/
- Original source: https://github.com/droidrun/mobile-harness
- Kind: tool
- Review: curated
- Scope: core
- Environments: android, ios
- Topics: automation, tool-integration
- Evidence checked: 2026-10-16T10:42:12Z
- ID: github:droidrun/mobile-harness

### Limitations

The publisher describes this as a Markdown harness, not an agent runtime. Published benchmark results have not been independently reproduced.

- Record JSON: https://awesomecua.com/resources/github-droidrun-mobile-harness/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/droidrun/mobile-harness/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/droidrun/mobile-harness/HEAD/README.md (retrieved 2026-10-16T10:42:12Z; SHA-256 0d05433c730e74f13be753fa6156737f797a69d61d8793e47f5a56b3a63ee790)
- https://raw.githubusercontent.com/droidrun/mobile-harness/HEAD/LICENSE (retrieved 2026-10-16T10:48:41Z; SHA-256 de215a2914d50cb87fcab9e19efc856b9e600a68eefec5c63e284dae34977133)

---

## Mobile Next MCP

An MCP server exposing mobile accessibility snapshots, screenshots and device interactions across real devices, simulators and emulators.

- Catalog URL: https://awesomecua.com/resources/github-mobile-next-mobile-mcp/
- Original source: https://github.com/mobile-next/mobile-mcp
- Kind: tool
- Review: curated
- Scope: core
- Environments: android, ios
- Topics: mobile-navigation, tool-integration, automation
- Evidence checked: 2026-10-17T03:59:53Z
- ID: github:mobile-next/mobile-mcp

### Limitations

Source and release 1.0.11 are public. The README specifies iOS and Android device setup and supports local devices as well as a separate cloud offering. Apache-2.0 is declared for this code; no cloud-service pricing or permissions are inferred.

- Record JSON: https://awesomecua.com/resources/github-mobile-next-mobile-mcp/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/mobile-next/mobile-mcp/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/mobile-next/mobile-mcp/HEAD/README.md (retrieved 2026-10-17T03:59:53Z; SHA-256 bc24fa665d1a49fa806d58ec569d93e134058e0cb1a7bc9324339ba0e35ff107)
- https://api.github.com/repos/mobile-next/mobile-mcp (retrieved 2026-10-17T03:59:53Z; SHA-256 80e8ad254f71f5c80b91a6b80edd09f96116ef4967ae4e6832e5960357f7b99a)
- https://api.github.com/repos/mobile-next/mobile-mcp/git/trees/main?recursive=1 (retrieved 2026-10-17T03:59:53Z; SHA-256 49684448428c28afd4bf191f695c3d45fbe46910fa93951d2a02f6b8afcf9f16)
- https://api.github.com/repos/mobile-next/mobile-mcp/releases/latest (retrieved 2026-10-17T04:00:57Z; SHA-256 43a5c02407afe86b6f1fedb4299f28420778ce21825cd87516deafe05507a7bc)
- https://raw.githubusercontent.com/mobile-next/mobile-mcp/HEAD/LICENSE (retrieved 2026-10-17T04:00:58Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)
- https://raw.githubusercontent.com/mobile-next/mobile-mcp/HEAD/LICENSE (retrieved 2026-10-17T04:00:58Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## Mobilerun Portal (formerly Droidrun Portal)

An Android accessibility service that exposes UI-element inspection, device-control interfaces and screen feedback to mobile automation agents.

- Catalog URL: https://awesomecua.com/resources/github-droidrun-mobilerun-portal/
- Original source: https://github.com/droidrun/mobilerun-portal
- Kind: tool
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, screen-understanding, tool-integration
- Evidence checked: 2026-10-17T03:59:54Z
- ID: github:droidrun/mobilerun-portal

### Limitations

The official API resolves the former Droidrun Portal path to mobilerun-portal. Release metadata lists a v0.7.25 Android APK. Although GitHub labels its license NOASSERTION, the inspected LICENSE explicitly grants AGPL version 3 or later for the program. Accessibility-dependent UI functions require the service; no permissions were granted or device operated.

- Record JSON: https://awesomecua.com/resources/github-droidrun-mobilerun-portal/record.json

### License declarations

- code: AGPL-3.0-or-later — https://raw.githubusercontent.com/droidrun/mobilerun-portal/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: GitHub classifies this license as NOASSERTION, but the actual program-specific notice is explicit. Do not reduce the permission to a generic unknown or silently transfer the framework MIT declaration.
  Sources: https://raw.githubusercontent.com/droidrun/mobilerun-portal/HEAD/LICENSE

### Primary evidence

- https://raw.githubusercontent.com/droidrun/mobilerun-portal/HEAD/README.md (retrieved 2026-10-17T03:59:54Z; SHA-256 fd2257dd735dbb755f2de36b44e425e5862004a04130e53e92b330f1419479a0)
- https://api.github.com/repos/droidrun/mobilerun-portal (retrieved 2026-10-17T04:01:56Z; SHA-256 be519be28e277bd979717996e9587879c6a5d9235b95944305252b18595da413)
- https://api.github.com/repos/droidrun/mobilerun-portal/git/trees/main?recursive=1 (retrieved 2026-10-17T03:59:54Z; SHA-256 65e81cfc9f227350e33da9e09030a7098e82a6021aa9b04cf0485ed2acee95a0)
- https://api.github.com/repos/droidrun/mobilerun-portal/releases/latest (retrieved 2026-10-17T04:01:01Z; SHA-256 31b8d75541bbfb7dba2f80adc83aa099ef83ca057b467eb2cb98b586f6d9d045)
- https://raw.githubusercontent.com/droidrun/mobilerun-portal/HEAD/LICENSE (retrieved 2026-10-17T04:01:01Z; SHA-256 945331c1cfa589694eb6ccc51574a72ee215a01b10bd5556f1b8be8d11bd71ab)
- https://api.github.com/repos/droidrun/droidrun-portal (retrieved 2026-10-17T03:59:54Z; SHA-256 be519be28e277bd979717996e9587879c6a5d9235b95944305252b18595da413)

---

## OculiX (SikuliX continuation)

A maintained continuation of SikuliX that locates on-screen targets with image matching and OCR, drives desktop or Android interfaces, and exposes scripting and optional MCP interfaces.

- Catalog URL: https://awesomecua.com/resources/github-oculix-org-oculix/
- Original source: https://github.com/oculix-org/Oculix
- Kind: tool
- Review: curated
- Scope: core
- Environments: desktop, windows, macos, linux, android
- Topics: automation, grounding, tool-integration
- Evidence checked: 2026-10-17T11:18:14Z
- ID: github:oculix-org/oculix

### Limitations

The official stable-release API lists v4.0.0 with platform-specific API/IDE JARs and an MCP server JAR; no binary was downloaded. The default README still advertises 3.0.3, so release-specific compatibility follows the release notes rather than that older badge. The RaiMan/SikuliX1 API resolves to oculix-org/SikuliX1, whose README calls itself a historical mirror and directs current users here; it is not separately counted. MIT describes the project source. Retained dependency notices also include GPL/LGPL, Apache, BSD and MPL declarations; a bundled artifact is not asserted to be uniformly MIT.

- Record JSON: https://awesomecua.com/resources/github-oculix-org-oculix/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/oculix-org/Oculix/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: Publisher project-source LICENSE. Third-party dependency notices are separately retained and no blanket MIT assertion is made for the compiled distribution.
  Sources: https://raw.githubusercontent.com/oculix-org/Oculix/HEAD/LICENSE

### Primary evidence

- https://raw.githubusercontent.com/oculix-org/Oculix/HEAD/README.md (retrieved 2026-10-17T11:18:14Z; SHA-256 41d32f40bfb960f38b77ebb62a73ae20454be6c52829c9cbf0b8fedd27de2297)
- https://api.github.com/repos/oculix-org/Oculix (retrieved 2026-10-17T11:18:14Z; SHA-256 151ed1aaf544b9afcfd2d8f13d0fa682d8cf8f8a68496af20c3597b082070801)
- https://api.github.com/repos/oculix-org/Oculix/git/trees/master?recursive=1 (retrieved 2026-10-17T11:19:48Z; SHA-256 cba4541e5d89210b570e42cc69c1529ca36e698622c69b4bb0eeffe56339a759)
- https://api.github.com/repos/oculix-org/Oculix/releases/latest (retrieved 2026-10-17T11:23:08Z; SHA-256 1022eb9591a2f01833e88c2bae2869faeac9b92e535901d2c79e93a714278777)
- https://raw.githubusercontent.com/oculix-org/SikuliX1/HEAD/README.md (retrieved 2026-10-17T11:18:14Z; SHA-256 8994ff2000b0871aca819ecd7233430bb82cea3f0134a555cebbfa9e02e0f4da)
- https://api.github.com/repos/RaiMan/SikuliX1 (retrieved 2026-10-17T11:18:13Z; SHA-256 102b86e9019fe5e936486b3213d2bbd9e80d6c7ad393284b1a4298b0be555ce7)
- https://raw.githubusercontent.com/oculix-org/Oculix/HEAD/LICENSE (retrieved 2026-10-17T11:23:03Z; SHA-256 cea4b6292d59625e14968ec666faa7ae6e237b510d846a96875bd6a282677f3a)
- https://raw.githubusercontent.com/oculix-org/Oculix/HEAD/API/src/main/resources/Settings/THIRD-PARTY.txt (retrieved 2026-10-17T11:27:50Z; SHA-256 f0e0d8aa91c1c60bac2250688248c85503036aeac37ec02b8a75fe9d50b6ae4c)

---

## OmniParser

Screenshot parser that detects interactable regions and captions icons so vision-language models can ground actions, released as V1.5 and V2 weights alongside OmniTool for driving a Windows 11 VM.

- Catalog URL: https://awesomecua.com/resources/github-microsoft-omniparser/
- Original source: https://github.com/microsoft/OmniParser
- Kind: tool
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: screen-understanding, grounding
- Evidence checked: 2026-10-16T06:36:04Z
- ID: github:microsoft/omniparser

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-microsoft-omniparser/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/microsoft/OmniParser/HEAD/README.md (retrieved 2026-10-16T06:36:04Z; SHA-256 f4ebaafcc0ab0b9e9cc55cb587678e5c83a5bbd64469fb2cc52bc63843c5cc6d)

---

## Playwright MCP

MCP server that lets LLM clients drive Playwright browsers through structured accessibility snapshots instead of screenshots, with opt-in vision, PDF and devtools capabilities.

- Catalog URL: https://awesomecua.com/resources/github-microsoft-playwright-mcp/
- Original source: https://github.com/microsoft/playwright-mcp
- Kind: tool
- Review: curated
- Scope: core
- Environments: web
- Topics: automation, tool-integration
- Evidence checked: 2026-10-16T06:40:53Z
- ID: github:microsoft/playwright-mcp

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-microsoft-playwright-mcp/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/microsoft/playwright-mcp/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/microsoft/playwright-mcp/HEAD/README.md (retrieved 2026-10-16T06:40:53Z; SHA-256 b33aa71a13d655e96e6b736d0c9de1e5ddea52f205916ca20b876387ff830e87)
- https://raw.githubusercontent.com/microsoft/playwright-mcp/HEAD/LICENSE (retrieved 2026-10-16T06:42:07Z; SHA-256 9a7110fc2d2f964038e5dc49128f908f29f47a574c961cba16085914e879cbda)

---

## Set of Mark

Visual-prompting toolbox that labels image regions for multimodal reference and grounding, including GUI applications.

- Catalog URL: https://awesomecua.com/resources/github-microsoft-som/
- Original source: https://github.com/microsoft/SoM
- Kind: tool
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: grounding
- Evidence checked: 2026-10-16T06:36:04Z
- ID: github:microsoft/som

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-microsoft-som/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/microsoft/SoM/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/microsoft/SoM/HEAD/README.md (retrieved 2026-10-16T06:36:04Z; SHA-256 b3fa8b7e24a01da023a5f21023c4853a90388dd7744055fbb5a2888938c68b0c)
- https://raw.githubusercontent.com/microsoft/SoM/HEAD/LICENSE (retrieved 2026-10-16T06:42:06Z; SHA-256 c2cfccb812fe482101a8f04597dfc5a9991a6b2748266c47ac91b6a5aae15383)

---

## Sikuli legacy research implementation

The original Sikuli source distribution combines screenshot targets with a Jython scripting library and IDE for visual GUI automation and testing.

- Catalog URL: https://awesomecua.com/resources/github-sikuli-sikuli/
- Original source: https://github.com/sikuli/sikuli
- Kind: tool
- Review: curated
- Scope: core
- Environments: desktop, macos, linux, windows
- Topics: automation, grounding, screen-understanding, history
- Evidence checked: 2026-10-17T11:28:12Z
- ID: github:sikuli/sikuli

### Limitations

This is the retained Sikuli X-1.0rc3 source line, explicitly marked unsupported by its maintainers. Its documented build targets include historical macOS, Linux and Windows setups; present-day build compatibility was not tested. The official documentation cites the 2009 search/automation and 2010 visual-testing papers. Follow-up SikuliX and current OculiX are distinguished from this legacy research implementation. MIT applies to project code; external libraries keep their own terms.

- Record JSON: https://awesomecua.com/resources/github-sikuli-sikuli/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/sikuli/sikuli/HEAD/copyright.txt
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: Original Sikuli copyright/license file for project source; bundled third-party libraries are not relicensed by this assertion.
  Sources: https://raw.githubusercontent.com/sikuli/sikuli/HEAD/copyright.txt

### Primary evidence

- https://raw.githubusercontent.com/sikuli/sikuli/HEAD/docs/source/index.rst (retrieved 2026-10-17T11:28:12Z; SHA-256 e752b2226af679a778e21506e660742376be3d7effe621f63c0b8816d3323729)
- https://api.github.com/repos/sikuli/sikuli (retrieved 2026-10-17T11:18:12Z; SHA-256 90d840ab98d35b90c0f91f93dc2dc752eac631a4bdc299601bffe8856610dd4c)
- https://api.github.com/repos/sikuli/sikuli/git/trees/develop?recursive=1 (retrieved 2026-10-17T11:19:49Z; SHA-256 8ee5f1e75659bfbce0d9b22967ff2b51335be5f19a3dc9e645273cc51333153e)
- https://raw.githubusercontent.com/sikuli/sikuli/HEAD/README.md (retrieved 2026-10-17T11:18:13Z; SHA-256 ed7659fff11dac079b99ad3c264f7e1e0a97f313a75379067e1c7fccca23ef88)
- https://raw.githubusercontent.com/sikuli/sikuli/HEAD/docs/source/tutorials/helloworld/helloworld-mac.rst (retrieved 2026-10-17T11:28:13Z; SHA-256 bab2f2dae13092e9c94f5d4b077bc96a6aa7da5257b54089f76ff5c0b0f61402)
- https://raw.githubusercontent.com/sikuli/sikuli/HEAD/build-linux.txt (retrieved 2026-10-17T11:28:13Z; SHA-256 28354a06091997d233cc5124958d85b75a5d815677c58b4fbabd492a6b0038d3)
- https://raw.githubusercontent.com/sikuli/sikuli/HEAD/build-win32.txt (retrieved 2026-10-17T11:28:13Z; SHA-256 b7c66064d08c6a768a4ed93fee0f86f837b41d51e60785d44a59d7a13bd2452a)
- https://raw.githubusercontent.com/sikuli/sikuli/HEAD/copyright.txt (retrieved 2026-10-17T11:23:03Z; SHA-256 717e5c54ef8201b2307c9828a6bacb7710385e5014adba93e5f1dc444339fdab)

---

## TAG attention-driven GUI grounding

Grounding and evaluation code that aggregates a pretrained vision-language model’s attention maps to localize requested interface elements without fine-tuning.

- Catalog URL: https://awesomecua.com/resources/github-heimingx-tag/
- Original source: https://github.com/HeimingX/TAG
- Kind: tool
- Review: curated
- Scope: core
- Environments: web
- Topics: grounding, evaluation, training-free
- Evidence checked: 2026-10-17T02:02:06Z
- ID: github:heimingx/tag

### Limitations

The release contains grounding and benchmark evaluation code. The inspected root repository metadata does not declare a code license. It uses external pretrained models rather than publishing a new trained checkpoint, and the README restricts redistribution of unzipped benchmark data.

- Record JSON: https://awesomecua.com/resources/github-heimingx-tag/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/HeimingX/TAG/HEAD/README.md (retrieved 2026-10-17T02:02:06Z; SHA-256 68cb0deb8a2eb49fb9236ae3d885b043d240dded0fce31cf7425130a56ff5819)
- https://api.github.com/repos/HeimingX/TAG (retrieved 2026-10-17T02:02:05Z; SHA-256 a33bee17685d64d23fb4d65b30b9c52f3a6dd5b21789d7b3509eb2e15145de6f)
- https://api.github.com/repos/HeimingX/TAG/git/trees/main?recursive=1 (retrieved 2026-10-17T02:02:05Z; SHA-256 fac4f5e38011bbcfef916063d495c21d49830759af4e8713a60d7bae992d2710)

---

## Tarsier

Perception utilities for web agents that tag interactable elements with typed IDs an LLM can act on, and use OCR to render page screenshots as whitespace-structured text for models without vision.

- Catalog URL: https://awesomecua.com/resources/github-reworkd-tarsier/
- Original source: https://github.com/reworkd/tarsier
- Kind: tool
- Review: curated
- Scope: core
- Environments: web
- Topics: screen-understanding
- Evidence checked: 2026-10-16T06:36:04Z
- ID: github:reworkd/tarsier

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-reworkd-tarsier/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/reworkd/tarsier/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/reworkd/tarsier/HEAD/README.md (retrieved 2026-10-16T06:36:04Z; SHA-256 2a313a5a1c433c0609067c6d875d5ff69493e8792d2173e458eb5db8bf232977)
- https://raw.githubusercontent.com/reworkd/tarsier/HEAD/LICENSE (retrieved 2026-10-16T06:42:06Z; SHA-256 f4ff2ba0f16e8abb7087071651c217ced6421e224313755c5d88433e324f19a1)

---

## UI Defect Mocker

Synthesizes visual UI defects from mobile screenshots and Android layout metadata to support GUI-testing experiments.

- Catalog URL: https://awesomecua.com/resources/github-zju-aces-ise-uidefectmocker/
- Original source: https://github.com/ZJU-ACES-ISE/UIDefectMocker
- Kind: tool
- Review: curated
- Scope: core
- Environments: android
- Topics: data-generation, evaluation, screen-understanding
- Evidence checked: 2026-10-16T13:17:23Z
- ID: github:zju-aces-ise/uidefectmocker

### Limitations

This entry describes the released screenshot-defect tool, separately from the under-construction ChatUITest project hub.

- Record JSON: https://awesomecua.com/resources/github-zju-aces-ise-uidefectmocker/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/ZJU-ACES-ISE/UIDefectMocker/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ZJU-ACES-ISE/UIDefectMocker/HEAD/README.md (retrieved 2026-10-16T13:17:23Z; SHA-256 fc3009b355e46549c5128c933bb333aa37b1db5ac8ea8f2d0f300848d8a62200)
- https://raw.githubusercontent.com/ZJU-ACES-ISE/UIDefectMocker/HEAD/LICENSE (retrieved 2026-10-16T13:29:25Z; SHA-256 2b75b184f28b204d8e2c7b45a341e4583202cf4c9da8964f108770929d1193ba)

---

## Web-Shepherd inference and evaluation

Process-reward inference and benchmark-evaluation utilities that use task checklists to assess individual web-agent decisions.

- Catalog URL: https://awesomecua.com/resources/github-kyle8581-web-shepherd/
- Original source: https://github.com/kyle8581/Web-Shepherd
- Kind: tool
- Review: curated
- Scope: core
- Environments: web
- Topics: reward-models, evaluation, web-navigation
- Evidence checked: 2026-10-17T02:44:04Z
- ID: github:kyle8581/web-shepherd

### Limitations

The tree contains src/webprm modules and a WebRewardBench evaluation script. The README’s illustrative folder layout differs from the actual tree, so a complete training pipeline is not claimed. No root code license is declared. Some old checkpoint links are unavailable; current model releases are separately identified through the official Hub collection.

- Record JSON: https://awesomecua.com/resources/github-kyle8581-web-shepherd/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/kyle8581/Web-Shepherd/HEAD/README.md (retrieved 2026-10-17T02:44:04Z; SHA-256 07431058d8b9a71b80e75b7a74a40a8346c1503eec240628459cc4d4e2f0802f)
- https://api.github.com/repos/kyle8581/Web-Shepherd (retrieved 2026-10-17T02:44:04Z; SHA-256 52925efd66489696c4e1f31f0f8353997fe534df9fcd42e50232cc78f0506903)
- https://api.github.com/repos/kyle8581/Web-Shepherd/git/trees/main?recursive=1 (retrieved 2026-10-17T02:44:04Z; SHA-256 ba7d28866cec4fb889499fc011473aedcdcc36fd8175c73527eafd7ef6b6dbba)

---

## WebMarker

A browser library that labels interactive elements and their boxes for visual prompting, preserving element mappings that automation code can use to execute selected actions.

- Catalog URL: https://awesomecua.com/resources/github-reidbarber-webmarker/
- Original source: https://github.com/reidbarber/webmarker
- Kind: tool
- Review: curated
- Scope: core
- Environments: web
- Topics: grounding, screen-understanding, tool-integration
- Evidence checked: 2026-10-17T12:30:56Z
- ID: github:reidbarber/webmarker

### Limitations

Source and npm release metadata for webmarker-js 0.7.0 are public. The documented mark/unmark API supports screenshot prompts and Playwright interaction, but this utility is not itself a language model or autonomous agent. The WebVoyager/Set-of-Mark references are usage inspiration and are not asserted as papers introducing this library. No package was installed or executed.

- Record JSON: https://awesomecua.com/resources/github-reidbarber-webmarker/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/reidbarber/webmarker/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: Publisher source license for WebMarker.
  Sources: https://raw.githubusercontent.com/reidbarber/webmarker/HEAD/LICENSE

### Primary evidence

- https://raw.githubusercontent.com/reidbarber/webmarker/HEAD/README.md (retrieved 2026-10-17T12:30:56Z; SHA-256 b46edb85d41e033f84bdd9bb96122f801364448f28a36fa6deccc110a19b6ffc)
- https://api.github.com/repos/reidbarber/webmarker (retrieved 2026-10-17T12:30:56Z; SHA-256 a44253aa866acd38fc3e2275aae61ecd051f956b18cb7b29346c699cf6241d6b)
- https://api.github.com/repos/reidbarber/webmarker/git/trees/main?recursive=1 (retrieved 2026-10-17T12:32:06Z; SHA-256 fc8de18814136ca3684749363727f263908c23e6ae274a0ed589923774aa3a95)
- https://registry.npmjs.org/webmarker-js/latest (retrieved 2026-10-17T12:34:10Z; SHA-256 1caae04ee16fcc72c48439677f5aba55128879cd99d6d55fd72caa85a7030e69)
- https://raw.githubusercontent.com/reidbarber/webmarker/HEAD/LICENSE (retrieved 2026-10-17T12:34:10Z; SHA-256 62dcdb525872e3f49d90ff9b354b79341ac2574522bca7c7146f79040491a627)

---

## Windows-MCP

A Windows MCP bridge exposing application, window, keyboard and mouse operations plus native UI-state inspection for agents.

- Catalog URL: https://awesomecua.com/resources/github-cursortouch-windows-mcp/
- Original source: https://github.com/CursorTouch/Windows-MCP
- Kind: tool
- Review: curated
- Scope: core
- Environments: windows, desktop, web
- Topics: tool-integration, automation, screen-understanding
- Evidence checked: 2026-10-17T03:59:53Z
- ID: github:cursortouch/windows-mcp

### Limitations

Public source and official release metadata are present. The README explicitly supports Windows 10 and 11 and includes a browser DOM inspection mode. Code is MIT-licensed. This is an execution tool, not a trained model; runtime behavior and latency claims were not independently tested.

- Record JSON: https://awesomecua.com/resources/github-cursortouch-windows-mcp/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/CursorTouch/Windows-MCP/HEAD/LICENSE.md
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/CursorTouch/Windows-MCP/HEAD/README.md (retrieved 2026-10-17T03:59:53Z; SHA-256 bbec20828c8a0f5483be68f6a00c47b202e9431268d96c1195fbf0745aca1364)
- https://api.github.com/repos/CursorTouch/Windows-MCP (retrieved 2026-10-17T03:59:53Z; SHA-256 ef43250ad8e57c3267f2a8e0aaeb655eb3445ade8d2dee8c243dc6e241a9d2d8)
- https://api.github.com/repos/CursorTouch/Windows-MCP/git/trees/main?recursive=1 (retrieved 2026-10-17T03:59:53Z; SHA-256 652b580c99ac2de9d56d124225ba302f0dd83430ccc9b5162e16f683c56b952f)
- https://api.github.com/repos/CursorTouch/Windows-MCP/releases/latest (retrieved 2026-10-17T04:00:58Z; SHA-256 db3de978027106a991da3f7f2d78b216cfffee9b08604872fa3216927acc7a2d)
- https://raw.githubusercontent.com/CursorTouch/Windows-MCP/HEAD/LICENSE.md (retrieved 2026-10-17T04:00:59Z; SHA-256 20ced59173768e20e91a43e3a80443aa1200b129c134f07f0cc45779747a1743)
- https://raw.githubusercontent.com/CursorTouch/Windows-MCP/HEAD/LICENSE.md (retrieved 2026-10-17T04:00:59Z; SHA-256 20ced59173768e20e91a43e3a80443aa1200b129c134f07f0cc45779747a1743)
