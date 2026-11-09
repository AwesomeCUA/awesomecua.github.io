# Jev for Chrome

Chrome extension agent that sends an indexed table of visible page controls to the TypeSafe Jev decision model, asks a small text model only for typed strings, and acts through Chrome's debugger input.

- Catalog URL: https://awesomecua.com/resources/github-chy4pro-jev-for-chrome/
- Original source: https://github.com/chy4pro/jev-for-chrome
- Kind: agent
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, automation, efficiency
- Evidence checked: 2026-10-18T16:05:00Z
- ID: github:chy4pro/jev-for-chrome

## Limitations

Community Manifest V3 extension that its README describes as a port of browser-use/jev-ultrafast, not affiliated with TypeSafe or Browser Use. The content script (src/content/snapshot.ts) lists visible, hit-tested interactive elements with role, accessible name, value and link target, plus up to 6,000 characters of page text; no screenshots are sent. Jev is a hosted model reached through OpenRouter, TypeSafe or Cloudflare Workers AI; TYPE_TEXT values come from an OpenAI-compatible text model. Clicks and keystrokes are dispatched through chrome.debugger (src/background/input.ts), with synthetic DOM events when that is switched off. The README reports 13 of 17 publisher-chosen tasks passing in one recorded headless-Chromium run (docs/e2e-suite-2026-09-19.md); this is not a standard benchmark and was not reproduced. Code was read, not run.

- Record JSON: https://awesomecua.com/resources/github-chy4pro-jev-for-chrome/record.json

## License declarations

- code: MIT — https://raw.githubusercontent.com/chy4pro/jev-for-chrome/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/chy4pro/jev-for-chrome/HEAD/docs/store-listing.md (retrieved 2026-10-18T16:05:00Z; SHA-256 4a6f2617ef256b00810a6b744f6a8d1637fcafaa6d91aeccb9a847171e8049cb)
- https://raw.githubusercontent.com/chy4pro/jev-for-chrome/d5c24de556ade0f0a9c7a4c6ebb9dab305e4209e/README.md (retrieved 2026-10-18T16:04:58Z; SHA-256 aa9232c8c85fae093653716dfab0ba6ddf6e16d06c0d19685a7f23d4aa4b3cc5)
- https://raw.githubusercontent.com/chy4pro/jev-for-chrome/d5c24de556ade0f0a9c7a4c6ebb9dab305e4209e/src/content/snapshot.ts (retrieved 2026-10-18T16:04:06Z; SHA-256 215ca2af82f05ff8efc33437a9aa2d5ba24548455e9f8706bfa0b2f97bf16da4)
- https://raw.githubusercontent.com/chy4pro/jev-for-chrome/d5c24de556ade0f0a9c7a4c6ebb9dab305e4209e/src/background/input.ts (retrieved 2026-10-18T16:04:06Z; SHA-256 c4e2df2d37258b73a42fbff76b79d874e25eefdea3a711c78d82e14bc4e176b6)
- https://raw.githubusercontent.com/chy4pro/jev-for-chrome/d5c24de556ade0f0a9c7a4c6ebb9dab305e4209e/src/shared/providers/typesafe.ts (retrieved 2026-10-18T16:04:06Z; SHA-256 acfedb26507cae6755fe3ec8c109c0e52e338a3ed06832e6afdeab302af3a147)
- https://raw.githubusercontent.com/chy4pro/jev-for-chrome/d5c24de556ade0f0a9c7a4c6ebb9dab305e4209e/docs/e2e-suite-2026-09-19.md (retrieved 2026-10-18T16:04:06Z; SHA-256 ccce28f5965e3061a74337d26dd57e34bbbeb49a6f2b382ebd33ed87759b5bef)
- https://raw.githubusercontent.com/chy4pro/jev-for-chrome/d5c24de556ade0f0a9c7a4c6ebb9dab305e4209e/LICENSE (retrieved 2026-10-18T16:04:06Z; SHA-256 0a09b4afbb17eecc7c57cb169710ca41017d9ce046ff116b6b7f49a25ac2c519)
- https://raw.githubusercontent.com/chy4pro/jev-for-chrome/HEAD/LICENSE (retrieved 2026-10-18T16:05:11Z; SHA-256 0a09b4afbb17eecc7c57cb169710ca41017d9ce046ff116b6b7f49a25ac2c519)
