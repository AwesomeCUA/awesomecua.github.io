# GuideBench

Released data for the GUIDE benchmark: annotated segments of narrated novice screen recordings in 10 applications, for predicting user behavior state, short-term intent and whether and how to help.

- Catalog URL: https://awesomecua.com/resources/url-37b4f525e6d7a56a9967/
- Original source: https://huggingface.co/datasets/kixlab/GuideBench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: desktop, web
- Topics: evaluation, human-in-the-loop, video, screen-understanding
- Evidence checked: 2026-10-19T06:04:35Z
- ID: url:37b4f525e6d7a56a9967

## Limitations

Formerly published as saelyne/GuideBench; the Hub API redirects that name to this repository with the same object ID. Access is gated with automatic approval. The Hub manifest at revision 783caa86 holds three annotation JSON files (one per task), 40 task-description Markdown files, 120 think-aloud transcription JSON files and two CSV files under videos/; no video files are hosted in the repository. The project page lists Photoshop, GIMP, Figma, Canva, PowerPoint, Google Slides, Premiere Pro, CapCut, Google Sheets and Excel without naming operating systems; the environment facets follow from those applications. Models are evaluated on video snippets without the narrations. CC-BY-4.0 is the Hub data declaration.

- Record JSON: https://awesomecua.com/resources/url-37b4f525e6d7a56a9967/record.json

## Structured profile

- Actions / outputs: not recorded
- Evaluation: Accuracy on 9-way behavior-state classification, 4-way multiple-choice intent prediction, and help prediction split into a binary help-need decision and a 4-way multiple-choice help-content question.
- Focus: user behavior state detection, short-term intent prediction, help need and help content prediction
- Observations: screen-recording video segments
- Setting: offline

### Count observations

- 120 demonstrations — GUIDE screen recordings (reported; source: https://guide-bench.github.io)
- 67.5 hours of screen recordings — GUIDE screen recordings (reported; source: https://guide-bench.github.io)
- 54 novice users — GUIDE participants (reported; source: https://guide-bench.github.io)
- 10 applications — GUIDE software coverage (reported; source: https://guide-bench.github.io)
- 40 open-ended tasks — GUIDE task design (reported; source: https://guide-bench.github.io)
- 120 transcription files — Hub manifest at revision 783caa86 (transcriptions/) (computed) (computed; source: https://huggingface.co/api/datasets/kixlab/GuideBench/revision/783caa868dc3a929ef99702731a1e0b27add48f1)
- 40 task-description files — Hub manifest at revision 783caa86 (tasks/) (computed) (computed; source: https://huggingface.co/api/datasets/kixlab/GuideBench/revision/783caa868dc3a929ef99702731a1e0b27add48f1)

Demonstration, hour, user, application and task counts are the project page's figures; file counts come from the Hub manifest. The access gate leaves segment counts per task uncomputed from the annotation files.

## License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/kixlab/GuideBench
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/api/datasets/kixlab/GuideBench/revision/783caa868dc3a929ef99702731a1e0b27add48f1 (retrieved 2026-10-19T06:04:35Z; SHA-256 d1e2fedc00dbf1c9531cd5cc676f900f149690a2e08655f8d93c56d5abd8d389)
- https://guide-bench.github.io (retrieved 2026-10-19T06:04:26Z; SHA-256 0a3441b26d204655fe737e7b3738a61ebb8c67fd0977e26042cad59f24352c14)
- https://huggingface.co/api/datasets/kixlab/GuideBench/revision/783caa868dc3a929ef99702731a1e0b27add48f1 (retrieved 2026-10-19T06:04:35Z; SHA-256 d1e2fedc00dbf1c9531cd5cc676f900f149690a2e08655f8d93c56d5abd8d389)
- https://huggingface.co/api/datasets/saelyne/GuideBench (retrieved 2026-10-19T06:03:50Z; SHA-256 d1e2fedc00dbf1c9531cd5cc676f900f149690a2e08655f8d93c56d5abd8d389)
- https://huggingface.co/api/datasets/kixlab/GuideBench (retrieved 2026-10-19T06:03:50Z; SHA-256 d1e2fedc00dbf1c9531cd5cc676f900f149690a2e08655f8d93c56d5abd8d389)
