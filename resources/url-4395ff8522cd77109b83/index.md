# LongHorizonUI: A Unified Framework for Robust long-horizon Task Automation of GUI Agent

Training-free GUI agent that indexes screen elements via icon detection and OCR, checks each step with multi-level reflection and recovers by fallback clicks or rollback; introduces LongGUIBench, tasks over 15 steps.

- Catalog URL: https://awesomecua.com/resources/url-4395ff8522cd77109b83/
- Original source: https://openreview.net/forum?id=BK7Mk5d4WE
- Kind: paper
- Review: curated
- Scope: core
- Environments: android, desktop
- Topics: long-horizon, evaluation, self-reflection, robustness, screen-understanding, training-free
- Evidence checked: 2026-10-19T06:45:27Z
- ID: url:4395ff8522cd77109b83

## Limitations

Reviewed against the ICLR 2026 proceedings page and PDF; the OpenReview forum lists it as an ICLR 2026 Poster. Experiments were not reproduced. LongHorizonUI's components run without fine-tuning, with Gemini 2.5 Pro as the default backbone; Appendix D.6 also reports Gemini 1.5 Flash and Qwen2.5-VL-7B backbones. LongGUIBench tasks need more than 15 steps across games and general apps; the paper states 371 scenarios but gives 207 game scenarios in Section 2.1 and 224 in Appendix D.2, and does not name the benchmark's device platform. Other reported evaluations are ScreenSpot grounding, AndroidControl and GUI-Odyssey, plus zero-shot AndroidWorld and OSWorld runs in Appendix D.5. The paper points to kane2kang.github.io/LongHorizonUI for code, which was not reviewed here. No arXiv version was found.

- Record JSON: https://awesomecua.com/resources/url-4395ff8522cd77109b83/record.json

## Authors

Bin Kang, Shaoguo Wen, Yifei Bi, Shunlong Wu, Xinbin Yuan, Rui Shao, Junle Wang, Zhuotao Tian

## Citation exports

- BibTeX: https://awesomecua.com/resources/url-4395ff8522cd77109b83/citation.bib
- CSL JSON: https://awesomecua.com/resources/url-4395ff8522cd77109b83/citation.csl.json

## Publication record

- Title: LongHorizonUI: A Unified Framework for Robust long-horizon Task Automation of GUI Agent
- Authors: Bin Kang, Shaoguo Wen, Yifei Bi, Shunlong Wu, Xinbin Yuan, Rui Shao, Junle Wang, Zhuotao Tian
- Publication date (recorded precision): 2026-04-20
- Publication source: https://openreview.net/forum?id=BK7Mk5d4WE
- Publication BibTeX: https://awesomecua.com/resources/url-4395ff8522cd77109b83/publication-citation.bib
- Publication CSL JSON: https://awesomecua.com/resources/url-4395ff8522cd77109b83/publication-citation.csl.json
- venue: International Conference on Learning Representations 2026 (ICLR 2026)
- volume: 2026
- pages: 59-82
- date basis: Publisher citation_publication_date metadata on the ICLR proceedings page states 2026-04-20; precision=day.
- identity basis: Same work: the ICLR 2026 proceedings page and PDF carry the same title, eight authors and abstract as OpenReview note BK7Mk5d4WE (venue ICLR 2026 Poster), which was read in a browser because openreview.net answers automated clients with a challenge page. No arXiv preprint with this title was found.
- notes: The proceedings page metadata lists the third author as "BI, YIFEI"; the PDF byline prints "Yifei Bi", which is retained. The record URL is the OpenReview forum; the proceedings page and PDF are the retained receipts. No DOI is given.
- Publication evidence: https://proceedings.iclr.cc/paper_files/paper/2026/hash/002a6bef26174b590e4eab95b63feb1b-Abstract-Conference.html, https://proceedings.iclr.cc/paper_files/paper/2026/file/002a6bef26174b590e4eab95b63feb1b-Paper-Conference.pdf

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://proceedings.iclr.cc/paper_files/paper/2026/hash/002a6bef26174b590e4eab95b63feb1b-Abstract-Conference.html (retrieved 2026-10-19T06:45:27Z; SHA-256 fda88d4c935640339743751062d9deffa985e01c8dde011d0828f518dacf5091)
- https://proceedings.iclr.cc/paper_files/paper/2026/file/002a6bef26174b590e4eab95b63feb1b-Paper-Conference.pdf (retrieved 2026-10-19T06:41:02Z; SHA-256 009272a661a93100f6e776ab83f5cd2957a81e6a0b0e4e5d53633dfd9f93bd80)
- https://proceedings.iclr.cc/paper_files/paper/2026/hash/002a6bef26174b590e4eab95b63feb1b-Abstract-Conference.html (retrieved 2026-10-19T06:45:27Z; SHA-256 fda88d4c935640339743751062d9deffa985e01c8dde011d0828f518dacf5091)
- https://proceedings.iclr.cc/paper_files/paper/2026/file/002a6bef26174b590e4eab95b63feb1b-Paper-Conference.pdf (retrieved 2026-10-19T06:41:02Z; SHA-256 009272a661a93100f6e776ab83f5cd2957a81e6a0b0e4e5d53633dfd9f93bd80)
