# Mind2Web data

Hub release of Mind2Web's crowdsourced web-task demonstrations: train-split JSON with raw and cleaned HTML, candidate elements and CLICK/TYPE/SELECT steps, plus a password-protected archive of the three test splits.

- Catalog URL: https://awesomecua.com/resources/url-380a6eedcb4de7778e88/
- Original source: https://huggingface.co/datasets/osunlp/Mind2Web
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, action-prediction, data-generation
- Evidence checked: 2026-10-18T11:38:06Z
- ID: url:380a6eedcb4de7778e88

## Limitations

This is the Hub data release, distinct from the code and benchmark repository github:osu-nlp-group/mind2web. The Hub API at revision 17ece8eb reports an ungated repository holding 11 train JSON shards, test.zip and scores_all_data.pkl. The card declares CC BY 4.0 for the data; the code repository's MIT license is not applied to it. Multimodal-Mind2Web (paired screenshots) and the raw trace dump are separate releases outside this record.

- Record JSON: https://awesomecua.com/resources/url-380a6eedcb4de7778e88/record.json

## Structured profile

- formats: JSON, password-protected ZIP (test splits)
- modalities: task descriptions, raw HTML, cleaned HTML, candidate elements, actions
- splits: train, test_task, test_website, test_domain
- supervision: crowdsourced action sequences, ground-truth target elements

### Count observations

- > 2,000 tasks — full Mind2Web collection (reported; source: https://huggingface.co/datasets/osunlp/Mind2Web/raw/17ece8eb89862368edc0cc806acee6fca5163474/README.md)
- 137 websites — full Mind2Web collection (reported; source: https://huggingface.co/datasets/osunlp/Mind2Web/raw/17ece8eb89862368edc0cc806acee6fca5163474/README.md)
- 31 domains — full Mind2Web collection (reported; source: https://huggingface.co/datasets/osunlp/Mind2Web/raw/17ece8eb89862368edc0cc806acee6fca5163474/README.md)
- 1,009 task instances — train split (reported; source: https://huggingface.co/datasets/osunlp/Mind2Web/raw/17ece8eb89862368edc0cc806acee6fca5163474/README.md)
- 252 task instances — cross-task test split (test_task) (reported; source: https://huggingface.co/datasets/osunlp/Mind2Web/raw/17ece8eb89862368edc0cc806acee6fca5163474/README.md)
- 177 task instances — cross-website test split (test_website) (reported; source: https://huggingface.co/datasets/osunlp/Mind2Web/raw/17ece8eb89862368edc0cc806acee6fca5163474/README.md)
- 912 task instances — cross-domain test split (test_domain) (reported; source: https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web/HEAD/README.md)

Each instance is one task with its multi-step action sequence; step counts use a different unit. The card prints the cross-domain size as '9,12'; the repository README gives 912. The test splits are released only as a ZIP whose password the README publishes, with a request not to redistribute the unzipped files. scores_all_data.pkl holds candidate-ranking outputs of a tuned DeBERTa-v3-base model, not annotations.

## License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/osunlp/Mind2Web/raw/17ece8eb89862368edc0cc806acee6fca5163474/README.md
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/osunlp/Mind2Web/raw/17ece8eb89862368edc0cc806acee6fca5163474/README.md (retrieved 2026-10-18T11:38:06Z; SHA-256 d2da20abbf17ac82f874d78ced28ceaaf3b15466011d3674deaa2c4597862a4a)
- https://huggingface.co/api/datasets/osunlp/Mind2Web (retrieved 2026-10-18T11:38:07Z; SHA-256 25fcf0a0ee9c1c89b33cdae0ebe7ffd5721e4685fe4b74377184be983bd1f597)
- https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web/HEAD/README.md (retrieved 2026-10-18T11:38:07Z; SHA-256 157dbd840264ea29f958c0b7383d63783845c573b3e19a1f39b773be22e0b32d)
- https://huggingface.co/datasets/osunlp/Mind2Web/raw/17ece8eb89862368edc0cc806acee6fca5163474/README.md (retrieved 2026-10-18T11:38:06Z; SHA-256 d2da20abbf17ac82f874d78ced28ceaaf3b15466011d3674deaa2c4597862a4a)
