# Firecrawl

Hosted web data API for AI agents that searches and scrapes pages into Markdown or JSON, with an Interact endpoint and browser sandbox in which prompts or Playwright code click, type and fill forms.

- Catalog URL: https://awesomecua.com/resources/url-a06f5cb81d3c41338bb6/
- Original source: https://www.firecrawl.dev
- Kind: product
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: web-navigation, sandbox, automation
- Evidence checked: 2026-10-20T04:19:03Z
- ID: url:a06f5cb81d3c41338bb6

## Limitations

Recorded as adjacent: the publisher presents Firecrawl as a web data API for AI agents, and its search, scrape, map and crawl endpoints return page content as Markdown, HTML, JSON or screenshots without operating the page. Interact continues from a scrape result: POST /v2/scrape/{scrapeId}/interact takes either a natural-language prompt, which it carries out by clicking, typing and scrolling, or Playwright code, and returns a CDP URL and live-view URLs; named profiles keep browser state such as logins between sessions. The Browser Sandbox (POST /v2/interact) opens a standalone isolated browser session with Playwright and the agent-browser CLI preinstalled, CDP access and an embeddable interactive live view. The /agent endpoint gathers data from a prompt by searching and navigating sites and runs on the publisher's Spark 2 model. The homepage HTML changes on every request, so the primary receipt is the documentation introduction. The homepage also links the repository github.com/firecrawl/firecrawl; hosted feature coverage in that code is unreviewed.

- Record JSON: https://awesomecua.com/resources/url-a06f5cb81d3c41338bb6/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://docs.firecrawl.dev/introduction.md (retrieved 2026-10-20T04:19:03Z; SHA-256 4ebd6ab8be2e75303248a9bcdb8ec2a206ebe88273366aa71e4cc1172766ddc8)
- https://docs.firecrawl.dev/features/interact.md (retrieved 2026-10-20T04:19:01Z; SHA-256 d24051dbdcd53fb981ade29129961a3b9c5e099398f714dbf15d40dd7dffd87a)
- https://docs.firecrawl.dev/features/browser.md (retrieved 2026-10-20T04:19:02Z; SHA-256 a138e33326831e033d749038ad1c9d5da991bac6fe4d5d35218cbda2478eafc5)
- https://docs.firecrawl.dev/features/agent.md (retrieved 2026-10-20T04:19:03Z; SHA-256 d6d01b12c8ab5e30d1c4357fea800017aa8f363f20873b0eb16fbcf143cd5cab)
