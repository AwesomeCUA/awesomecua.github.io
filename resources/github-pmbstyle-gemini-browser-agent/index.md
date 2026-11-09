# Gemini Browser Agent

Chrome extension and Python WebSocket bridge that run Gemini 2.5 Computer Use on the user's active tab, sending tab screenshots to the model and executing its clicks, typing and scrolling via content scripts.

- Catalog URL: https://awesomecua.com/resources/github-pmbstyle-gemini-browser-agent/
- Original source: https://github.com/pmbstyle/gemini-browser-agent
- Kind: agent
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, automation
- Evidence checked: 2026-10-20T08:41:39Z
- ID: github:pmbstyle/gemini-browser-agent

## Limitations

The README calls the project a research experiment and scaffolding. websocket_agent.py is a local WebSocket server that calls gemini-2.5-computer-use-preview-10-2025 through google-genai with the browser computer-use environment; widget/ is an unpacked Manifest V3 extension with a side panel where the user connects to the bridge and enters a goal. Each turn the extension captures the visible tab with chrome.tabs.captureVisibleTab, the bridge converts the model's 0-1000 normalized coordinates to viewport pixels, and the extension carries out clicks, typing, key presses, hovering, scrolling and navigation by injecting functions (chrome.scripting.executeScript) that dispatch synthetic DOM events at document.elementFromPoint. Drag and drop is approximated with mousedown and mouseup events, unhandled model actions return an unimplemented warning, and the side panel sets a step limit (default 10). It needs a Gemini API key and acts in the user's own browser without a sandbox; the README points to the author's separate gemini-computer-use repository for sandboxed runs. The repository has no license file at the inspected commit.

- Record JSON: https://awesomecua.com/resources/github-pmbstyle-gemini-browser-agent/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: The inspected recursive tree has no license file and the README names no license; source terms remain unknown.
  Sources: https://api.github.com/repos/pmbstyle/gemini-browser-agent/git/trees/540b6fd7f1bfcfc351b2f7139ea4404cb089472f?recursive=1

## Primary evidence

- https://raw.githubusercontent.com/pmbstyle/gemini-browser-agent/HEAD/README.md (retrieved 2026-10-20T08:41:39Z; SHA-256 e7e20064cbb8a84025f04dddf5a6e849fe05405ed2e779a1fc04cdb3493757bd)
- https://raw.githubusercontent.com/pmbstyle/gemini-browser-agent/540b6fd7f1bfcfc351b2f7139ea4404cb089472f/README.md (retrieved 2026-10-20T08:39:58Z; SHA-256 e7e20064cbb8a84025f04dddf5a6e849fe05405ed2e779a1fc04cdb3493757bd)
- https://raw.githubusercontent.com/pmbstyle/gemini-browser-agent/540b6fd7f1bfcfc351b2f7139ea4404cb089472f/websocket_agent.py (retrieved 2026-10-20T08:40:04Z; SHA-256 a9fdbe483e2717f92dd902577247ef6d5478b55e0d532710fca422ed2887782a)
- https://raw.githubusercontent.com/pmbstyle/gemini-browser-agent/540b6fd7f1bfcfc351b2f7139ea4404cb089472f/widget/actions/browserActions.js (retrieved 2026-10-20T08:40:14Z; SHA-256 2fd9d29f3b2c1c80ca2188e3b10a5682490d11884a57c938f8f56cd809cde394)
- https://raw.githubusercontent.com/pmbstyle/gemini-browser-agent/540b6fd7f1bfcfc351b2f7139ea4404cb089472f/widget/manifest.json (retrieved 2026-10-20T08:40:33Z; SHA-256 7bab746e7cf307067432b25d28ef4dd85c6682b2f88c156bde2208d7409c9ccc)
- https://api.github.com/repos/pmbstyle/gemini-browser-agent/git/trees/540b6fd7f1bfcfc351b2f7139ea4404cb089472f?recursive=1 (retrieved 2026-10-20T08:41:08Z; SHA-256 84df487918fcec7f8565aed76ef0c7c4da0e4ee98d3c578e13a7aecebc365d5a)
