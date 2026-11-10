---
title: "Predicate Systems (formerly SentienceAPI) | AwesomeCUA"
url: https://awesomecua.com/resources/url-4ee15c39dc38f230ad58/
updated: 2026-10-20
type: product
lang: en
---

# Predicate Systems (formerly SentienceAPI)

Runtime trust layer for browser agents: a sidecar checks each action against local policy before it runs, and SDKs turn pages into compact ranked element snapshots and verify outcomes with DOM assertions.

- Catalog URL: https://awesomecua.com/resources/url-4ee15c39dc38f230ad58/
- Original source: https://predicatesystems.ai
- Kind: product
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, safety-security, state-tracking, observability, efficiency
- Evidence checked: 2026-10-20T07:47:34Z
- ID: url:4ee15c39dc38f230ad58

## Limitations

Predicate Systems Inc. was formerly SentienceAPI; www.sentienceapi.com redirects to this site. It has three parts. Predicate Authority is a Rust sidecar that evaluates local YAML policies and issues signed mandates before an action executes. Predicate Runtime, with Python and TypeScript SDKs, collects element geometry through a browser extension, gives the model a structured snapshot of element IDs, roles, text, importance scores and boxes (about 0.6-1.2k tokens per step by the publisher's estimate), executes the chosen action and runs assertions such as url_contains or exists; it runs standalone with Playwright or under browser-use, and an optional Gateway reranks elements with ONNX models. predicate-secure wraps frameworks such as browser-use, Playwright and LangChain with both checks. The documentation also covers Predicate Studio traces and Predicate Vault. New accounts start with 100 free credits.

- Record JSON: https://awesomecua.com/resources/url-4ee15c39dc38f230ad58/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://predicatesystems.ai (retrieved 2026-10-20T07:47:34Z; SHA-256 36c1848163bd104823d84ec9f4cf619f8d7756ea9560c993513742681423c7ca)
- https://predicatesystems.ai/docs/sdk/overview (retrieved 2026-10-20T05:04:58Z; SHA-256 62e882ba04cdd54ba3a514b40531ed720db93b1973ba885c85b4ae5d09a516d1)
- https://predicatesystems.ai/how-it-works (retrieved 2026-10-20T05:04:59Z; SHA-256 efa6f03629601068ec049ef9c1e54f69a4f34b9c498d74cf3c5e1a7bb29ce5e6)
