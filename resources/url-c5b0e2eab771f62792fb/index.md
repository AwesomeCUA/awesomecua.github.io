---
title: "laya-browser | AwesomeCUA"
url: https://awesomecua.com/resources/url-c5b0e2eab771f62792fb/
updated: 2026-10-18
type: model
lang: en
---

# laya-browser

Non-generative browser-agent policy fine-tuned from the 322M laya encoder: one forward pass over page text and the interactive-element list picks the next operation and its target element.

- Catalog URL: https://awesomecua.com/resources/url-c5b0e2eab771f62792fb/
- Original source: https://huggingface.co/cklxx/laya-browser
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, action-prediction, efficiency
- Evidence checked: 2026-10-18T12:13:54Z
- ID: url:c5b0e2eab771f62792fb

## Limitations

Built as the per-step decision head of the jev-ultrafast browser agent. The remote code builds each request from the page URL, title, up to 1,200 characters of page text, the interactive elements with their roles and the last ten actions; it takes no screenshot, and a separate local LLM writes the text that TYPE_TEXT enters. The repository also ships a jev-ultrafast-compatible server, evaluation suites, training pipeline code, a harness patch and result logs. The card reports 11 to 14 of 54 multi-step tasks on held-out real sites for version v19s and 22 to 27 ms per decision on one RTX 4070 Ti SUPER; these are publisher measurements. The card metadata declares Apache-2.0 and says the training datasets keep their own licenses.

- Record JSON: https://awesomecua.com/resources/url-c5b0e2eab771f62792fb/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/cklxx/laya-browser/raw/645cf366a2ae35f1086e8c20eff48f909bb49206/README.md

## Primary evidence

- https://huggingface.co/cklxx/laya-browser/raw/645cf366a2ae35f1086e8c20eff48f909bb49206/README.md (retrieved 2026-10-18T12:13:54Z; SHA-256 09dd7dc3675472a53ee8ab2996ae28ba7831e384503d889947b9811959f540e2)
- https://huggingface.co/api/models/cklxx/laya-browser/revision/645cf366a2ae35f1086e8c20eff48f909bb49206 (retrieved 2026-10-18T12:13:55Z; SHA-256 cf1089fa62e9a7f942c4bf071708d47d72b712ab9a99b5ba930341df5169e2ac)
- https://huggingface.co/cklxx/laya-browser/raw/645cf366a2ae35f1086e8c20eff48f909bb49206/modeling_laya_browser.py (retrieved 2026-10-18T12:13:55Z; SHA-256 d084f8720ee4a738efc3cee6e0cef78ab983af8cf17939957af2c2265fdd99d1)
- https://huggingface.co/cklxx/laya-browser/raw/645cf366a2ae35f1086e8c20eff48f909bb49206/README.md (retrieved 2026-10-18T12:13:54Z; SHA-256 09dd7dc3675472a53ee8ab2996ae28ba7831e384503d889947b9811959f540e2)
