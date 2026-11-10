# Nakama

A team AI agent platform, run as managed cloud or one Docker container, whose agents can drive a per-user Kernel cloud browser or Chrome on the server to open pages, click and fill forms.

- Catalog URL: https://awesomecua.com/resources/github-ahmadrosid-nakama/
- Original source: https://github.com/ahmadrosid/nakama
- Kind: agent
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: web-navigation, human-in-the-loop, tool-integration
- Evidence checked: 2026-11-10T06:29:34Z
- ID: github:ahmadrosid/nakama

## Limitations

browser-tools.ts defines six cloud-browser tools (browser_navigate, browser_read, browser_scroll, browser_playwright, browser_screenshot, browser_computer) backed by Kernel, which needs a Kernel API key; the user watches and signs in through a live Browser panel and approves outgoing messages. The agent-browser skill runs the agent-browser CLI with Chrome through the bash tool. Declared license MIT.

- Record JSON: https://awesomecua.com/resources/github-ahmadrosid-nakama/record.json

## License declarations

- code: MIT — https://raw.githubusercontent.com/ahmadrosid/nakama/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/ahmadrosid/nakama/bfc563424cd8353f0020da2f80398bbef685075c/README.md (retrieved 2026-11-10T06:29:34Z; SHA-256 b0783bad84b1ec2ede804cb6ab9aca106620de4a6293f6781a8d98a03ba41e56)
- https://raw.githubusercontent.com/ahmadrosid/nakama/HEAD/LICENSE (retrieved 2026-11-10T06:22:36Z; SHA-256 243a8f957c5f593ffd1378dd55163e6bcbefd502f32c143f32cf2bdb08a46193)
