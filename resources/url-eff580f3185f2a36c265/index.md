# Yutori

Yutori's web-agent platform: the Navigator computer-use model API (n1.5 for browsers, n2 for full desktops), task APIs for browsing, research and Scout web monitoring, and the Delegate personal agent.

- Catalog URL: https://awesomecua.com/resources/url-eff580f3185f2a36c265/
- Original source: https://yutori.com
- Kind: product
- Review: curated
- Scope: core
- Environments: web, desktop, macos
- Topics: web-navigation, automation, tool-integration
- Evidence checked: 2026-10-20T05:23:11Z
- ID: url:eff580f3185f2a36c265

## Limitations

Yutori was founded by Abhishek Das, Devi Parikh and Dhruv Batra and announced its seed round in March 2025. Navigator models are called through an OpenAI Chat Completions-compatible endpoint: the caller sends a screenshot and a task, the model returns actions as tool calls, and the caller executes them and sends a fresh screenshot in an agent loop. n1.5 drives browsers in a normalized 1000x1000 coordinate space with a core set of 18 coordinate-based tools or an expanded set that adds element extraction, find, set_element_value and JavaScript execution, and can return JSON matching a caller schema. n2 operates a full desktop through batched GUI actions plus bash and file tools; the SDK ships local Docker and Daytona examples, and Yutori MCP runs it on the visible macOS desktop, sending screen contents to Yutori. A Python SDK wraps the APIs, a CLI runs research, browsing and Scout tasks, and an MCP server with workflow skills exposes these tasks and computer use to coding agents. Scouts monitor the web on a schedule, and Delegate is a consumer agent meant to complete handed-off tasks independently. Yutori also publishes a computer-use leaderboards page compiling reported results for six benchmarks. The publisher describes its Online-Mind2Web figure as independently verified and its Navi-Bench v2 and Westworld figures as its own evaluations.

- Record JSON: https://awesomecua.com/resources/url-eff580f3185f2a36c265/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://yutori.com/llms.txt (retrieved 2026-10-20T05:23:11Z; SHA-256 822e35d2ec69df8b89cdda8d03ff48fb0b345365b92534e6af00a7ae643cce3a)
- https://yutori.com/api/llms.txt (retrieved 2026-10-20T05:22:56Z; SHA-256 5b14d5fedf3be3ea19e70ac6425b7fd8bb80aeaab17b379c636ef66a7bf3b423)
- https://yutori.com/leaderboards.md (retrieved 2026-10-20T05:22:56Z; SHA-256 63614bc1a81a0090992b8ac6ed1ee9471ca22239e699f14e3480657a8c1f24db)
