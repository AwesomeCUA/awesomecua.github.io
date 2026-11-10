# Firecrawl

面向 AI 智能体的托管网页数据 API，可搜索并抓取页面为 Markdown 或 JSON；其 Interact 端点和浏览器沙盒支持通过提示或 Playwright 代码点击、输入和填写表单。

- 目录页面：https://awesomecua.com/zh/resources/url-a06f5cb81d3c41338bb6/
- English：https://awesomecua.com/resources/url-a06f5cb81d3c41338bb6/index.md
- 原始来源：https://www.firecrawl.dev
- 类型：产品
- 审核状态：已审核
- 范围：相关研究
- 运行环境：网页
- 主题：网页导航、沙箱、自动化
- 证据核查日期：2026-10-20T04:19:03Z
- ID：url:a06f5cb81d3c41338bb6

## 范围记录

Recorded as adjacent: the publisher presents Firecrawl as a web data API for AI agents, and its search, scrape, map and crawl endpoints return page content as Markdown, HTML, JSON or screenshots without operating the page. Interact continues from a scrape result: POST /v2/scrape/{scrapeId}/interact takes either a natural-language prompt, which it carries out by clicking, typing and scrolling, or Playwright code, and returns a CDP URL and live-view URLs; named profiles keep browser state such as logins between sessions. The Browser Sandbox (POST /v2/interact) opens a standalone isolated browser session with Playwright and the agent-browser CLI preinstalled, CDP access and an embeddable interactive live view. The /agent endpoint gathers data from a prompt by searching and navigating sites and runs on the publisher's Spark 2 model. The homepage HTML changes on every request, so the primary receipt is the documentation introduction. The homepage also links the repository github.com/firecrawl/firecrawl; hosted feature coverage in that code is unreviewed.

- 完整记录 JSON：https://awesomecua.com/resources/url-a06f5cb81d3c41338bb6/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://docs.firecrawl.dev/introduction.md（获取于 2026-10-20T04:19:03Z；SHA-256：4ebd6ab8be2e75303248a9bcdb8ec2a206ebe88273366aa71e4cc1172766ddc8）
- https://docs.firecrawl.dev/features/interact.md（获取于 2026-10-20T04:19:01Z；SHA-256：d24051dbdcd53fb981ade29129961a3b9c5e099398f714dbf15d40dd7dffd87a）
- https://docs.firecrawl.dev/features/browser.md（获取于 2026-10-20T04:19:02Z；SHA-256：a138e33326831e033d749038ad1c9d5da991bac6fe4d5d35218cbda2478eafc5）
- https://docs.firecrawl.dev/features/agent.md（获取于 2026-10-20T04:19:03Z；SHA-256：d6d01b12c8ab5e30d1c4357fea800017aa8f363f20873b0eb16fbcf143cd5cab）
