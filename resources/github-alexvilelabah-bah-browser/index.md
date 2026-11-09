# Bah

Electron AI browser whose side-panel agent reads numbered page elements from the DOM or accessibility tree, page text and OCR, then clicks and types through Chromium input events, using cloud or local Ollama models.

- Catalog URL: https://awesomecua.com/resources/github-alexvilelabah-bah-browser/
- Original source: https://github.com/alexvilelabah/bah-browser
- Kind: agent
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, human-in-the-loop, automation
- Evidence checked: 2026-10-18T15:46:09Z
- ID: github:alexvilelabah/bah-browser

## Limitations

Browser application by VilelaLab with Windows and macOS builds (release v1.9.2). The agent loop observes each page through an injected script or the CDP accessibility tree (src/renderer/page-executor.ts), adds tesseract.js OCR text, and attaches a page screenshot only when the configured model accepts images (src/main/ai-engine.ts); clicks and keys go through Electron sendInputEvent on the page (src/main/main.ts). Tools include element-reference clicks and fills, coordinate clicks, tabs and navigation, plus non-interface skills such as image generation, video and price lookups. The README states a 25-step cap, confirmation before paying, buying, deleting or entering card data, and a hand-off on CAPTCHAs and login walls. It runs in the user's persistent logged-in session, presents a Chrome user agent and masks navigator.webdriver, and the app also bundles an ad blocker, password manager, media downloader and torrent client. Supported providers are DeepSeek, Mistral, NVIDIA NIM and Ollama.

- Record JSON: https://awesomecua.com/resources/github-alexvilelabah-bah-browser/record.json

## License declarations

- code: MIT — https://raw.githubusercontent.com/alexvilelabah/bah-browser/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/alexvilelabah/bah-browser/HEAD/README.md (retrieved 2026-10-18T15:46:09Z; SHA-256 3ea4ce1a8965d8f880b6776ae8203aff5e63994c77dd44d2245315f1e7aa19c4)
- https://api.github.com/repos/alexvilelabah/bah-browser (retrieved 2026-10-18T15:46:10Z; SHA-256 bf0ad7dfbd7cf46bd160275a0128196f13aa63f3cac5059f32bfdba3b24e56e4)
- https://api.github.com/repos/alexvilelabah/bah-browser/git/trees/6441bdce349ab31041c79f5b9002d82e0fa9f4bc?recursive=1 (retrieved 2026-10-18T15:46:11Z; SHA-256 8682c74424570d8181af812c426e92ecd071586f033da1e9c4d3a789d927f45a)
- https://raw.githubusercontent.com/alexvilelabah/bah-browser/6441bdce349ab31041c79f5b9002d82e0fa9f4bc/src/renderer/page-executor.ts (retrieved 2026-10-18T15:46:11Z; SHA-256 f092fe6b3199d6525ba61db8cb5d90c3398c1e974be0813a6239c33ee411870e)
- https://raw.githubusercontent.com/alexvilelabah/bah-browser/6441bdce349ab31041c79f5b9002d82e0fa9f4bc/src/main/ai-engine.ts (retrieved 2026-10-18T15:46:11Z; SHA-256 d6ffb9b27132a5834b25c0de9d5469c70a75a8ce3fdb3c476ea0f3ba85da8c1b)
- https://raw.githubusercontent.com/alexvilelabah/bah-browser/6441bdce349ab31041c79f5b9002d82e0fa9f4bc/src/main/main.ts (retrieved 2026-10-18T15:46:12Z; SHA-256 a37361b80074e376de55115338401f46ef5f99f008d2f93d1127cce7ab799c7a)
- https://raw.githubusercontent.com/alexvilelabah/bah-browser/6441bdce349ab31041c79f5b9002d82e0fa9f4bc/LICENSE (retrieved 2026-10-18T15:46:12Z; SHA-256 40a1c1e0a2996effbe5ab31283e34886b02125428d23bfb5d69aaa14e0dd17f7)
- https://raw.githubusercontent.com/alexvilelabah/bah-browser/HEAD/LICENSE (retrieved 2026-10-18T15:46:47Z; SHA-256 40a1c1e0a2996effbe5ab31283e34886b02125428d23bfb5d69aaa14e0dd17f7)
