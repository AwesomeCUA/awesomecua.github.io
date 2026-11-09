# Webfuse

Web augmentation proxy that serves a site inside the user's browser and lets AI agents read DOM, screenshot or accessibility-tree snapshots and click, type or scroll through an automation API and a session MCP server.

- Catalog URL: https://awesomecua.com/resources/url-255e1ea24461c1f205eb/
- Original source: https://www.webfuse.com
- Kind: product
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, automation
- Evidence checked: 2026-10-20T07:44:35Z
- ID: url:255e1ea24461c1f205eb

## Limitations

Webfuse serves an existing website through a configurable proxy session and injects Extensions on the client side without changes to the site's code. Its Automation API, callable from an Extension, provides perception (DOM snapshot, Base64 screenshot of the page, accessibility tree, text selection) and actuation (click, type, scroll, select, key press, mouse move, text selection), targeting an element, CSS selector, point coordinate or Webfuse element ID across shadow DOM and iframes; the screenshot method is documented for Chromium-based browsers only. The Session MCP Server exposes the same tools, plus navigate and page info, to MCP clients authenticated with a Space automation key. tool.applyD2Snap() applies the DOM downsampling method of arXiv 2508.04412, whose second author, Nicholas Piël, is named on the about page as Webfuse's CEO and founder; the about page also says Webfuse grew out of the team's Surfly session technology. The pricing page lists Spark and Forge monthly plans metered in virtual minutes, a custom Foundry tier and a 14-day free trial. Pricing, compliance claims and reliability were not independently tested.

- Record JSON: https://awesomecua.com/resources/url-255e1ea24461c1f205eb/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://www.webfuse.com (retrieved 2026-10-20T07:44:35Z; SHA-256 fefc742997e8194b58a78aec02851b28e12022142b29192c0e66de2dc10f3b0c)
- https://dev.webfuse.com/automation-api/ (retrieved 2026-10-20T04:42:27Z; SHA-256 f9cf3c404ea47b3a08e721fad221e22af7a572e644d444681050464436153f57)
- https://dev.webfuse.com/session-mcp-server/ (retrieved 2026-10-20T04:42:28Z; SHA-256 81638efdf342de6c33cf07b17afa86b445d29e07a43c224c10f0239a9465b156)
- https://www.webfuse.com/about (retrieved 2026-10-20T04:42:30Z; SHA-256 1ff86ef397a5945b62ff15d0d595fe0291a416c2bc1a04dc452a50c0e07e52a1)
- https://www.webfuse.com/pricing (retrieved 2026-10-20T04:42:31Z; SHA-256 45f93d7c9a9d4f0470aa0b4d3e89ef3f61a8a984cc64ef9589edf98f5469ef9d)
