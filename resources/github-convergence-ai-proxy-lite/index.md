# Proxy Lite

Convergence AI's open-weights web agent runner: a Playwright Chromium loop that sends annotated screenshots and numbered element lists to proxy-lite-3b and executes its click, type, scroll and navigation tool calls.

- Catalog URL: https://awesomecua.com/resources/github-convergence-ai-proxy-lite/
- Original source: https://github.com/convergence-ai/proxy-lite
- Kind: agent
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, automation
- Evidence checked: 2026-10-19T06:47:28Z
- ID: github:convergence-ai/proxy-lite

## Limitations

The repository is the scaffold for Convergence AI's proxy-lite-3b model: a CLI (proxy), a Streamlit app and a Runner that loops a solver and a webbrowser environment. By default it calls a demo endpoint on Hugging Face Spaces, which the README reserves for demonstrations; it recommends serving convergence-ai/proxy-lite-3b with vLLM and the hermes tool-call parser for production. The webbrowser environment (src/proxy_lite/environments/webbrowser.py) launches Chromium through Playwright with playwright_stealth, injects JavaScript to find interactable elements, and by default sends a screenshot annotated with numbered bounding boxes plus a text list of the marked elements; earlier screenshots are dropped from the context. BrowserTool exposes goto, google_search, click, type, scroll, back, wait, reload and do_nothing actions addressed by mark_id. The README says the model is meant to complete tasks autonomously and may struggle with logins or user-confirmed steps. Model weights are not in this repository. Code was read.

- Record JSON: https://awesomecua.com/resources/github-convergence-ai-proxy-lite/record.json

## License declarations

- code: CC-BY-NC-4.0 — https://raw.githubusercontent.com/convergence-ai/proxy-lite/a4389c599d5f5f77dc18510c879e2e783434766b/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: The repository LICENSE file states that the work is licensed under CC BY-NC 4.0 (a notice, not the legal code); recorded for code only; it is not applied to the proxy-lite-3b weights or the hosted Proxy service.
  Sources: https://raw.githubusercontent.com/convergence-ai/proxy-lite/a4389c599d5f5f77dc18510c879e2e783434766b/LICENSE

## Primary evidence

- https://raw.githubusercontent.com/convergence-ai/proxy-lite/a4389c599d5f5f77dc18510c879e2e783434766b/README.md (retrieved 2026-10-19T06:47:28Z; SHA-256 1ac1036e2ed944d36ed8aa9d1294bb359b85091f276114118aa3c5b77f7f7593)
- https://api.github.com/repos/convergence-ai/proxy-lite/git/trees/a4389c599d5f5f77dc18510c879e2e783434766b?recursive=1 (retrieved 2026-10-19T06:47:29Z; SHA-256 07b4e718c079d9fa161f810ffe0644b30403a73bf315daddd5bd38b0018f7dcc)
- https://raw.githubusercontent.com/convergence-ai/proxy-lite/a4389c599d5f5f77dc18510c879e2e783434766b/src/proxy_lite/environments/webbrowser.py (retrieved 2026-10-19T06:47:29Z; SHA-256 9ebe6fd41fe0c62816547a35dd9a0b64ed96c4476b5e2e1a55d52aeb8bee0583)
- https://raw.githubusercontent.com/convergence-ai/proxy-lite/a4389c599d5f5f77dc18510c879e2e783434766b/src/proxy_lite/browser/browser.py (retrieved 2026-10-19T06:47:29Z; SHA-256 369df6ed8e0cd2ed33031af48ff475e722ebded7c63fd69703738c1863fe2eda)
- https://raw.githubusercontent.com/convergence-ai/proxy-lite/a4389c599d5f5f77dc18510c879e2e783434766b/src/proxy_lite/tools/browser_tool.py (retrieved 2026-10-19T06:47:30Z; SHA-256 56d51de9e960738bcaf6211c30d2de9096643e3749d4cb3319387abee62e0a90)
- https://raw.githubusercontent.com/convergence-ai/proxy-lite/a4389c599d5f5f77dc18510c879e2e783434766b/src/proxy_lite/agents/proxy_lite_agent.py (retrieved 2026-10-19T06:47:30Z; SHA-256 e19427b2b64c1c0b26e163c8532df43846153a0aa4e21ef2aef733c345015807)
- https://raw.githubusercontent.com/convergence-ai/proxy-lite/a4389c599d5f5f77dc18510c879e2e783434766b/pyproject.toml (retrieved 2026-10-19T06:47:30Z; SHA-256 5ee90766c962e95294ae81faf1b758486befe9cfe62548d1cb55d7d1e8373903)
- https://raw.githubusercontent.com/convergence-ai/proxy-lite/a4389c599d5f5f77dc18510c879e2e783434766b/LICENSE (retrieved 2026-10-19T06:47:30Z; SHA-256 58861e2641c884b02cc0f8b589fbbb17657df93ed0da92534c1cec8b543be4c4)
