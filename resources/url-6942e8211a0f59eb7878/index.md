# Are CAPTCHAs Still Bot-hard? Generalized Visual CAPTCHA Solving with Agentic Vision Language Model

Presents Halligan, a VLM agent that abstracts visual CAPTCHAs into frames, elements and keypoints and solves each as a search problem through generated interaction code, tested on 2,600 challenges of 26 types.

- Catalog URL: https://awesomecua.com/resources/url-6942e8211a0f59eb7878/
- Original source: https://www.usenix.org/conference/usenixsecurity25/presentation/teoh
- Kind: paper
- Review: curated
- Scope: core
- Environments: web
- Topics: safety-security, evaluation, screen-understanding, training-free
- Evidence checked: 2026-10-19T06:22:46Z
- ID: url:6942e8211a0f59eb7878

## Limitations

Reviewed against the USENIX Security 2025 proceedings PDF and the authors' project page halligan.pages.dev, which the paper names as its website; experiments were not reproduced. In the benchmark comparison Halligan used GPT-4o and acted through PyAutoGUI on CAPTCHAs replayed from a local Flask server. The paper reports 1,577 of 2,600 benchmark challenges solved (60.7%) and a 70.6% average solve rate on previously unseen CAPTCHAs over a 30-day field study run through human-driven CAPTCHA farms. It names Zenodo record 10.5281/zenodo.15580923 for its source code and benchmark; that archive was not reviewed here. No arXiv version was found.

- Record JSON: https://awesomecua.com/resources/url-6942e8211a0f59eb7878/record.json

## Authors

Xiwen Teoh, Yun Lin, Siqi Li, Ruofan Liu, Avi Sollomoni, Yaniv Harel, Jin Song Dong

## Citation exports

- BibTeX: https://awesomecua.com/resources/url-6942e8211a0f59eb7878/citation.bib
- CSL JSON: https://awesomecua.com/resources/url-6942e8211a0f59eb7878/citation.csl.json

## Publication record

- Title: Are CAPTCHAs Still Bot-hard? Generalized Visual CAPTCHA Solving with Agentic Vision Language Model
- Authors: Xiwen Teoh, Yun Lin, Siqi Li, Ruofan Liu, Avi Sollomoni, Yaniv Harel, Jin Song Dong
- Publication date (recorded precision): 2025
- Publication source: https://www.usenix.org/conference/usenixsecurity25/presentation/teoh
- Publication BibTeX: https://awesomecua.com/resources/url-6942e8211a0f59eb7878/publication-citation.bib
- Publication CSL JSON: https://awesomecua.com/resources/url-6942e8211a0f59eb7878/publication-citation.csl.json
- venue: Proceedings of the 34th USENIX Security Symposium
- publisher: USENIX Association
- pages: 3747-3766
- date basis: Supplied year precision: 2025. The proceedings PDF cover places the paper in the 34th USENIX Security Symposium; the symposium dates are kept as event dates, not a publication date.
- event dates: August 13–15, 2025
- identity basis: No title, DOI or canonical URL match in the active catalog or the retained arXiv archive, and an arXiv title search returned no preprint of this work.
- notes: Open-access USENIX Security 2025 proceedings edition; the cover prints ISBN 978-1-939133-52-6. USENIX assigns no DOI.
- Publication evidence: https://www.usenix.org/system/files/usenixsecurity25-teoh.pdf

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://www.usenix.org/system/files/usenixsecurity25-teoh.pdf (retrieved 2026-10-19T06:22:10Z; SHA-256 444df8f791f719be164edfe42f86c2ba61173719fa2ad30d5296a0a2108ff3aa)
- https://www.usenix.org/system/files/usenixsecurity25-teoh.pdf (retrieved 2026-10-19T06:22:46Z; SHA-256 444df8f791f719be164edfe42f86c2ba61173719fa2ad30d5296a0a2108ff3aa)
- https://halligan.pages.dev (retrieved 2026-10-19T06:22:10Z; SHA-256 b97016c9a7ccc456a46647a028c7ef23cb074e5e2d713bc2df4d5ce4e0064496)
