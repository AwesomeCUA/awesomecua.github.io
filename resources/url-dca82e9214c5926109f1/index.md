---
title: "Grounding Multimodal Large Language Model in… | AwesomeCUA"
url: https://awesomecua.com/resources/url-dca82e9214c5926109f1/
updated: 2026-10-19
type: paper
lang: en
---

# Grounding Multimodal Large Language Model in GUI World

Trains a 0.4B SAM-initialized GUI grounding model on 0.5M auto-collected web screenshots with 35M element annotations, then links it to a Qwen-VL planner through a position token for MiniWob, AITW and Mind2Web.

- Catalog URL: https://awesomecua.com/resources/url-dca82e9214c5926109f1/
- Original source: https://openreview.net/forum?id=M9iky9Ruhx
- Kind: paper
- Review: curated
- Scope: core
- Environments: cross-platform, web, android
- Topics: grounding, data-generation, web-navigation, mobile-navigation
- Evidence checked: 2026-10-19T07:18:20Z
- ID: url:dca82e9214c5926109f1

## Limitations

Reviewed against the ICLR 2025 proceedings page and PDF; the OpenReview forum lists it as an ICLR 2025 Poster. The grounding model, AssistGUIGrounder (AGG), pairs a SAM-pretrained ViT image encoder and a transformer query encoder with a two-layer box decoder. The data engine loads Common Crawl pages from 118 domains in a browser such as Chrome, scrolls them with Page Down and reads element data through UI Automation; grounding training used 0.36M web images with 22M annotations after smoothing, plus 27K mobile screenshots from WidgetCaption and RICO. ScreenSpot grounding covers mobile, desktop and web screenshots; agent fine-tuning covers MiniWob, AITW and Mind2Web. The paper gives github.com/showlab/AssistGUIGround for code and data; that repository returned HTTP 404 on 2026-10-19. No arXiv version was found.

- Record JSON: https://awesomecua.com/resources/url-dca82e9214c5926109f1/record.json

## Authors

Weixian Lei, Difei Gao, Mike Zheng Shou

## Citation exports

- BibTeX: https://awesomecua.com/resources/url-dca82e9214c5926109f1/citation.bib
- CSL JSON: https://awesomecua.com/resources/url-dca82e9214c5926109f1/citation.csl.json

```bibtex
@inproceedings{cua_c27a3db23e8af1cc49eabd20,
  title = {{Grounding Multimodal Large Language Model in GUI World}},
  author = {{Weixian Lei} and {Difei Gao} and {Mike Zheng Shou}},
  year = {2025},
  month = may,
  booktitle = {International Conference on Learning Representations 2025 (ICLR 2025)},
  volume = {2025},
  pages = {19742-19765},
  url = {https://openreview.net/forum?id=M9iky9Ruhx},
  note = {Publication date: 2025-05-01.}
}
```

## Publication record

- Title: Grounding Multimodal Large Language Model in GUI World
- Authors: Weixian Lei, Difei Gao, Mike Zheng Shou
- Publication date (recorded precision): 2025-05-01
- Publication source: https://openreview.net/forum?id=M9iky9Ruhx
- Publication BibTeX: https://awesomecua.com/resources/url-dca82e9214c5926109f1/publication-citation.bib
- Publication CSL JSON: https://awesomecua.com/resources/url-dca82e9214c5926109f1/publication-citation.csl.json
- Venue: International Conference on Learning Representations 2025 (ICLR 2025)
- Volume: 2025
- Pages: 19742-19765
- Date source: Publisher citation_publication_date metadata on the ICLR proceedings page states 2025-05-01; precision=day.
- Identity basis: Same work: the ICLR 2025 proceedings page and PDF carry the same title, three authors and abstract as OpenReview note M9iky9Ruhx (venue ICLR 2025 Poster), which was read in a browser because openreview.net answers automated clients with a challenge page. No arXiv preprint with this title was found.
- Source notes: The proceedings page metadata lists the authors surname first; the PDF byline order and spelling are retained. The record URL is the OpenReview forum; the proceedings page and PDF are the retained receipts. No DOI is given.
- Publication evidence: https://proceedings.iclr.cc/paper_files/paper/2025/hash/31fc85f7461ce71eadf27fb7281973bd-Abstract-Conference.html, https://proceedings.iclr.cc/paper_files/paper/2025/file/31fc85f7461ce71eadf27fb7281973bd-Paper-Conference.pdf

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://proceedings.iclr.cc/paper_files/paper/2025/hash/31fc85f7461ce71eadf27fb7281973bd-Abstract-Conference.html (retrieved 2026-10-19T07:18:20Z; SHA-256 60075b72c7f1a92cc64e2d76048ad8d4049969210409245bab84cced1cd53a04)
- https://proceedings.iclr.cc/paper_files/paper/2025/file/31fc85f7461ce71eadf27fb7281973bd-Paper-Conference.pdf (retrieved 2026-10-19T07:18:21Z; SHA-256 c5227784f66ec43bc1bd35c6d64f2a7958c4ee159a7a1bd7967b4cd6a3ee986a)
- https://proceedings.iclr.cc/paper_files/paper/2025/hash/31fc85f7461ce71eadf27fb7281973bd-Abstract-Conference.html (retrieved 2026-10-19T07:18:20Z; SHA-256 60075b72c7f1a92cc64e2d76048ad8d4049969210409245bab84cced1cd53a04)
- https://proceedings.iclr.cc/paper_files/paper/2025/file/31fc85f7461ce71eadf27fb7281973bd-Paper-Conference.pdf (retrieved 2026-10-19T07:18:21Z; SHA-256 c5227784f66ec43bc1bd35c6d64f2a7958c4ee159a7a1bd7967b4cd6a3ee986a)
