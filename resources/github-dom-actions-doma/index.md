# DomA

Source-available edition of the DomA browser-agent extension for Chrome and Edge: it observes pages through set-of-marks screenshots and element lists, acts with DOM events and CDP clicks, and serves its tools over MCP.

- Catalog URL: https://awesomecua.com/resources/github-dom-actions-doma/
- Original source: https://github.com/dom-actions/doma
- Kind: agent
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, automation, tool-integration
- Evidence checked: 2026-10-18T15:43:31Z
- ID: github:dom-actions/doma

## Limitations

The README presents DomA as a browser agent from Stay Browser, and the LICENSE notice names Dom Actions; the commercial store build adds video download, a userscript manager and ad blocking on top of this core. The service worker implements browser_* tools (tabs, navigation, page content, element lists, click, text click, type, select, scroll, script execution, clipboard). browser_screenshot tags up to 150 visible interactive elements with data-som-idx and composites numbers and borders onto a clean viewport capture, grouping the overflow into areas A1 to A5; clicks fall back to CDP Input.dispatchMouseEvent through chrome.debugger. With the Jev switch on, a high-confidence Jev decision can execute a click or type without sending the image to the LLM. Models are user-supplied OpenAI-compatible endpoints. An MCP bridge (stdio server plus a local daemon on ports 3846/3847) and a CLI let Cursor, Claude or OpenClaw drive the extension.

- Record JSON: https://awesomecua.com/resources/github-dom-actions-doma/record.json

## License declarations

- code: PolyForm-Shield-1.0.0 — https://raw.githubusercontent.com/dom-actions/doma/fe3afa7a04d7a2f719e9da82c6b61502504819ce/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: Root LICENSE is the PolyForm Shield License 1.0.0 with a 2026 Dom Actions required notice; it is source-available, not an OSI open-source license, and forbids using the software to compete with DomA. It covers the extension code only.
  Sources: https://raw.githubusercontent.com/dom-actions/doma/fe3afa7a04d7a2f719e9da82c6b61502504819ce/LICENSE

## Primary evidence

- https://raw.githubusercontent.com/dom-actions/doma/HEAD/README.md (retrieved 2026-10-18T15:43:31Z; SHA-256 21a62e98c89f6ccb50a036918275682f938274d796521679c3bcfe292d86b38e)
- https://api.github.com/repos/dom-actions/doma/git/commits/fe3afa7a04d7a2f719e9da82c6b61502504819ce (retrieved 2026-10-18T15:43:09Z; SHA-256 00ac80e84f1bd15742dd72997399cad933cdd2edb0e9b6b51a1aa2143980534c)
- https://raw.githubusercontent.com/dom-actions/doma/fe3afa7a04d7a2f719e9da82c6b61502504819ce/src/services/chat/browserTools.ts (retrieved 2026-10-18T15:43:09Z; SHA-256 5b33ef1d33d7037bbfc9dafb574a07df61e1cdcffd02ac67a04e1fdf270146fa)
- https://raw.githubusercontent.com/dom-actions/doma/fe3afa7a04d7a2f719e9da82c6b61502504819ce/mcp-bridge/README.md (retrieved 2026-10-18T15:43:10Z; SHA-256 a3ee5ff8d8a87b04e6541b838e2d4781bb8b26f3a5c3f11e020f772ec3449bc2)
- https://raw.githubusercontent.com/dom-actions/doma/fe3afa7a04d7a2f719e9da82c6b61502504819ce/LICENSE (retrieved 2026-10-18T15:43:10Z; SHA-256 cc25b07935368ad2a6e962d4b60643c0da6bc57948f5265c1256beb269266660)
