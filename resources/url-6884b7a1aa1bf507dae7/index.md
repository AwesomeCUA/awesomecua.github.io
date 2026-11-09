# Gumloop

Business agent platform whose agents work through app connectors and can turn on a Chromium browser that clicks, types, signs in with saved logins and hands control to a person when a site needs it.

- Catalog URL: https://awesomecua.com/resources/url-6884b7a1aa1bf507dae7/
- Original source: https://www.gumloop.com
- Kind: product
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: web-navigation, automation, tool-integration, workflow, human-in-the-loop
- Evidence checked: 2026-10-20T04:21:11Z
- ID: url:6884b7a1aa1bf507dae7

## Limitations

Recorded as adjacent: Gumloop presents itself as a platform for building, sharing and running AI agents for business teams, which work mainly through app connectors, MCP servers and APIs, and its help pages advise using the agent browser only when no connector or API covers a task. The agent browser is an ability turned on per custom agent, and on Enterprise organizations it is off by default until an admin adds it to a role. It runs Chromium on the agent's computer, which shares the agent's code sandbox, and opens pages, clicks, types, scrolls and switches tabs. Gumloop types saved logins and 2FA codes for the agent without showing them to the model, keeps sign-ins in browser profiles, offers residential proxies and desktop or Pixel 7 mobile emulation, and pauses to hand the live browser to a person at logins, CAPTCHAs or purchase confirmations. Every browser step is recorded for replay. Agents can also be reached from Slack, Microsoft Teams, email and text messages.

- Record JSON: https://awesomecua.com/resources/url-6884b7a1aa1bf507dae7/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://www.gumloop.com (retrieved 2026-10-20T04:21:11Z; SHA-256 642e4fdd4ba7dc302015dbcc14d2693bfa73c6dbc3db7ef6ffc490fba2e43ed3)
- https://docs.gumloop.com/core-concepts/agent_browser.md (retrieved 2026-10-20T04:22:04Z; SHA-256 09680f7a7bd80c485b7bc69583ed882eb1ac5d230ef97553112613f26d17d17c)
- https://docs.gumloop.com/help/browser/browser-vs-connector-vs-api.md (retrieved 2026-10-20T04:22:04Z; SHA-256 6b2411e22fbb7c3c131dca0ffb3b81681b1da711c6de351ff488e2c8f4c76e48)
- https://docs.gumloop.com/core-concepts/agents.md (retrieved 2026-10-20T04:22:05Z; SHA-256 6f063740cfda0e1f87f257a3eff558fd7aefb632cf9b8542af2a5497494b4012)
