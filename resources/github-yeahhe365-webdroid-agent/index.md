---
title: "WebDroid Agent | AwesomeCUA"
url: https://awesomecua.com/resources/github-yeahhe365-webdroid-agent/
updated: 2026-10-18
type: agent
lang: en
---

# WebDroid Agent

Browser-hosted Android phone agent that connects over WebUSB/WebADB, sends screenshots plus a uiautomator text tree to an OpenAI-compatible or Gemini vision model, and runs its JSON actions through ADB.

- Catalog URL: https://awesomecua.com/resources/github-yeahhe365-webdroid-agent/
- Original source: https://github.com/yeahhe365/WebDroid-Agent
- Kind: agent
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, human-in-the-loop, automation
- Evidence checked: 2026-10-18T15:43:22Z
- ID: github:yeahhe365/webdroid-agent

## Limitations

A React app that runs entirely in a Chromium browser (WebUSB through Tango/WebADB), or in Docker with a local proxy for model requests; the browser is the controller and the operated surface is a USB-connected Android device. Each step captures screencap output and, best effort, a compressed uiautomator dump of visible text, IDs, clickable state and bounds (src/lib/contextBuilder.ts); actions use pixel or 0-1000 normalized coordinates and become adb input, am start and keyboard-broadcast commands (src/adapters/inputCommands.ts). Sensitive taps can require confirmation, take_over hands control back to the user and type_secret sends the model only a secret ID; an unrestricted mode skips these checks. README.md is in Chinese and README.en-US.md is the English version. The repository was renamed from yeahhe365/webadb-autoglm (same repository ID 1244747615).

- Record JSON: https://awesomecua.com/resources/github-yeahhe365-webdroid-agent/record.json

## License declarations

- code: MIT — https://raw.githubusercontent.com/yeahhe365/WebDroid-Agent/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/yeahhe365/WebDroid-Agent/HEAD/README.md (retrieved 2026-10-18T15:43:22Z; SHA-256 4c7962c0068b1dd7e483ddef9c5db7b7c872727ef0c2ac160f1d6359a5db9d06)
- https://api.github.com/repos/yeahhe365/WebDroid-Agent (retrieved 2026-10-18T15:43:23Z; SHA-256 9fd700009d98c4d7e5713d6a37f0b52bc2cd0b6edf3373c49f3578e30027c1dd)
- https://api.github.com/repos/yeahhe365/WebDroid-Agent/git/trees/6ef50805d0f4509d7222dd269d8e329ab95ec902?recursive=1 (retrieved 2026-10-18T15:43:25Z; SHA-256 7111603f8db433834ef0b39f43bcd7b2f0a585932de6603256458a48aa757ad7)
- https://raw.githubusercontent.com/yeahhe365/WebDroid-Agent/6ef50805d0f4509d7222dd269d8e329ab95ec902/README.en-US.md (retrieved 2026-10-18T15:43:25Z; SHA-256 c29b70a96212cfd22008c0d1c7b55da94a2c01e407861e67be09e7a28f8df859)
- https://raw.githubusercontent.com/yeahhe365/WebDroid-Agent/6ef50805d0f4509d7222dd269d8e329ab95ec902/src/lib/contextBuilder.ts (retrieved 2026-10-18T15:43:25Z; SHA-256 cbff4bef5fe7b8015830e8b96da7cc724716c575e9c99840b03d16d536b89da0)
- https://raw.githubusercontent.com/yeahhe365/WebDroid-Agent/6ef50805d0f4509d7222dd269d8e329ab95ec902/src/adapters/inputCommands.ts (retrieved 2026-10-18T15:43:26Z; SHA-256 d230898643e76658658013ed915124d85a7b16167901885b271d5f2dd42e7110)
- https://raw.githubusercontent.com/yeahhe365/WebDroid-Agent/6ef50805d0f4509d7222dd269d8e329ab95ec902/LICENSE (retrieved 2026-10-18T15:43:28Z; SHA-256 e8f924156a6cc9479b17cb02a420d180f58d1532d170c30fc120c197dfcf06b6)
- https://raw.githubusercontent.com/yeahhe365/WebDroid-Agent/HEAD/LICENSE (retrieved 2026-10-18T15:44:10Z; SHA-256 e8f924156a6cc9479b17cb02a420d180f58d1532d170c30fc120c197dfcf06b6)
- https://api.github.com/repos/yeahhe365/webadb-autoglm (retrieved 2026-10-18T15:43:24Z; SHA-256 9fd700009d98c4d7e5713d6a37f0b52bc2cd0b6edf3373c49f3578e30027c1dd)
- https://api.github.com/repos/yeahhe365/WebDroid-Agent (retrieved 2026-10-18T15:43:23Z; SHA-256 9fd700009d98c4d7e5713d6a37f0b52bc2cd0b6edf3373c49f3578e30027c1dd)
