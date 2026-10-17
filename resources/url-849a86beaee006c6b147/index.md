# OmniAct

Dataset and benchmark for generating computer interaction programs.

- Catalog URL: https://awesomecua.github.io/resources/url-849a86beaee006c6b147/
- Original source: https://huggingface.co/datasets/Writer/omniact
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: desktop, web
- Topics: evaluation
- Evidence checked: 2026-10-16T06:38:27Z
- ID: url:849a86beaee006c6b147

## Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.github.io/resources/url-849a86beaee006c6b147/record.json

## Structured profile

- actions: PyAutoGUI script: pointer movement/click/drag, key presses, hotkeys, and text entry
- evaluation: The bundled evaluator reports weighted sequence match and action match, comparing action types and applying coordinate, key, and writing penalties. Target element-box metadata is evaluation-only. The retained scorer has a click-penalty defect: predicted coordinates are read from gold_line, so score reproduction requires explicit scorer-version review.
- focus: offline desktop/web action-script generation
- observations: screenshot, natural-language task
- setting: offline

### Count observations

- 6,788 task examples — train split, HF revision 5e4bcb26 (reported; source: https://huggingface.co/datasets/Writer/omniact/raw/5e4bcb26745afc8d58ba9519ea9c9fb832386d26/README.md)
- 2,020 task examples — test split, HF revision 5e4bcb26 (reported; source: https://huggingface.co/datasets/Writer/omniact/raw/5e4bcb26745afc8d58ba9519ea9c9fb832386d26/README.md)
- 991 task examples — val split, HF revision 5e4bcb26 (reported; source: https://huggingface.co/datasets/Writer/omniact/raw/5e4bcb26745afc8d58ba9519ea9c9fb832386d26/README.md)

This released split table totals 9,799 examples; it is not silently substituted for any paper-level collection size. Public files include train/test/val JSON indexes, task/image archives, and eval.py. Evaluation is offline script comparison, not execution success on a live desktop. MIT is the Hub data declaration; original app/content rights are not resolved by it.

## License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/Writer/omniact
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/api/datasets/Writer/omniact (retrieved 2026-10-16T06:38:27Z; SHA-256 2db0a5dd2b983dded3b90a8ecd66cadbb39074f03778a339822418531661b3e3)
- https://huggingface.co/datasets/Writer/omniact/raw/5e4bcb26745afc8d58ba9519ea9c9fb832386d26/README.md (retrieved 2026-10-17T14:10:00Z; SHA-256 7b54ad557f89d621fe39c3d2fe9f02164a2bfcb7fef0db610d964586d3673693)
- https://huggingface.co/datasets/Writer/omniact/raw/5e4bcb26745afc8d58ba9519ea9c9fb832386d26/eval.py (retrieved 2026-10-17T14:22:06Z; SHA-256 a786de678af46df5e2b6b1a2a69d2ee239fe8fd5b63663765d84d39e21fc2365)
- https://huggingface.co/api/datasets/Writer/omniact (retrieved 2026-10-16T06:38:27Z; SHA-256 2db0a5dd2b983dded3b90a8ecd66cadbb39074f03778a339822418531661b3e3)
