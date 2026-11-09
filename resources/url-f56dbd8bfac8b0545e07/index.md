# GUI-Xplore

Per-app Android exploration videos with screenshot and action sequences, view hierarchies and question-answer pairs for five tasks, from app overview and page analysis to action recall and sequence verification.

- Catalog URL: https://awesomecua.com/resources/url-f56dbd8bfac8b0545e07/
- Original source: https://huggingface.co/datasets/9211sun/GUI-Xplore
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: video, mobile-navigation, screen-understanding, data-generation
- Evidence checked: 2026-10-18T12:29:45Z
- ID: url:f56dbd8bfac8b0545e07

## Limitations

The paper's arXiv HTML links github.com/921112343/GUI-Xplore, whose README names this Hub dataset as the release; the card itself does not cite the paper. View-hierarchy files use Android uiautomator classes and Android package names, and the paper describes collection with DroidBot and crowd workers on cloud mobile devices. The card's summary line gives 32,569 QA pairs while its split table totals 35,316. The repository README lists the Xplore-Agent model, checkpoints and evaluation scripts as not yet released. Data license is CC-BY-4.0 per card metadata; it does not settle rights in third-party app content.

- Record JSON: https://awesomecua.com/resources/url-f56dbd8bfac8b0545e07/record.json

## Structured profile

- formats: MP4, PNG, JPEG, XML, JSON, CSV
- modalities: exploration videos, screenshots, view hierarchies, actions, question-answer pairs
- splits: auto, manual_train, manual_test
- supervision: exploration recordings, question-answer annotations, action sequences

### Count observations

- 312 apps — all splits (207 auto, 85 manual_train, 20 manual_test) (reported; source: https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/README.md)
- 34,367 screenshots — all splits (reported; source: https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/README.md)
- 41,293 actions — all splits (reported; source: https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/README.md)
- 15,934 question-answer samples — auto split (reported; source: https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/README.md)
- 16,744 question-answer samples — manual_train split (reported; source: https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/README.md)
- 2,638 question-answer samples — manual_test split (reported; source: https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/README.md)
- > 115 hours of exploration video — all apps (reported; source: https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/README.md)
- 312 MP4 exploration videos — files at Hub revision ebac33a0 (207 auto, 85 manual_train, 20 manual_test) (computed) (computed; source: https://huggingface.co/api/datasets/9211sun/GUI-Xplore/revision/ebac33a0fb368e005af499b5594db4278f49d3da)

Reported counts come from the card's split table. A script over the 15 QA JSON files at revision ebac33a0 counted 15,934 auto, 16,744 manual_train and 2,634 manual_test entries (35,312 in total), so the card's manual_test figure is four higher than the released files. Apps, screenshots, actions, QA samples and video hours are different units and are not summed.

## License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/README.md
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/README.md (retrieved 2026-10-18T12:29:45Z; SHA-256 3a143538ccdd7ed4ec28974153b43cf44ab2f16dee46e7f74c6fb64e7ac458da)
- https://huggingface.co/api/datasets/9211sun/GUI-Xplore/revision/ebac33a0fb368e005af499b5594db4278f49d3da (retrieved 2026-10-18T12:28:52Z; SHA-256 e2346ed137224f040c012a47d46f613facf449ec418a9ecbfecf97c0254d2fa3)
- https://raw.githubusercontent.com/921112343/GUI-Xplore/3e87e22264a587a3b4ff093a0b7e35d76d1cc554/README.md (retrieved 2026-10-18T12:28:51Z; SHA-256 596648200fb473192bbab00f7b7e01680ec169c67d6a7ebf7978f299f1f4983d)
- https://arxiv.org/html/2503.17709v1 (retrieved 2026-10-18T12:29:10Z; SHA-256 b7d8ea43f0db8c7b2432cee39e8bfb262c9c4bfd8a7290c0b50427d8eb1ac3fd)
- https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/manual_test/data/vh/com_android_documentsui/vh_1724467408.9856646.xml (retrieved 2026-10-18T12:28:52Z; SHA-256 03b665dfc0b49e1721676ce9ffc63532c3b1589304fe6f63ac59f690ab61f76e)
- https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/README.md (retrieved 2026-10-18T12:29:45Z; SHA-256 3a143538ccdd7ed4ec28974153b43cf44ab2f16dee46e7f74c6fb64e7ac458da)
