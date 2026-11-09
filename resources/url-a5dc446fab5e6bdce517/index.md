# In-Context Teacher–Student Guidance for Open-Weight Browser Agents

Training-free protocol that turns a teacher model's offline reasoning traces into prompt guidance for open-weight browser agents; on MiniWoB++ it lifts solved student-task pairs from 208 to 271 across ten students.

- Catalog URL: https://awesomecua.com/resources/url-a5dc446fab5e6bdce517/
- Original source: https://sol.sbc.org.br/index.php/kdmile/article/view/44978
- Kind: paper
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, training-free, efficiency
- Evidence checked: 2026-10-19T08:40:18Z
- ID: url:a5dc446fab5e6bdce517

## Limitations

The annotation was reviewed against the publisher PDF and the Crossref deposit for its DOI. The method, In-Context Learning Guidance (ICLG), has GPT-5.1 solve tasks offline and appends its reasoning fields alone to the student prompt; the teacher's low-level actions stay outside that prompt, and teacher calls precede the student run. Evaluation serves the 130 MiniWoB++ tasks locally, caps each run at 5 minutes and 25 interaction steps, counts a score of at least 0.5 as solved, and reports single runs: seven of ten students improve and three lose one task. Retry and refined-prompt ablations cover three students. The paper names no code release or arXiv version.

- Record JSON: https://awesomecua.com/resources/url-a5dc446fab5e6bdce517/record.json

## Authors

Wéwerthon Silva Cardoso, Ricardo Marcacini

## Citation exports

- BibTeX: https://awesomecua.com/resources/url-a5dc446fab5e6bdce517/citation.bib
- CSL JSON: https://awesomecua.com/resources/url-a5dc446fab5e6bdce517/citation.csl.json

## Publication record

- Title: In-Context Teacher–Student Guidance for Open-Weight Browser Agents
- Authors: Wéwerthon Silva Cardoso, Ricardo Marcacini
- Publication date (recorded precision): 2026-10-19
- Publication source: https://sol.sbc.org.br/index.php/kdmile/article/view/44978
- Publication BibTeX: https://awesomecua.com/resources/url-a5dc446fab5e6bdce517/publication-citation.bib
- Publication CSL JSON: https://awesomecua.com/resources/url-a5dc446fab5e6bdce517/publication-citation.csl.json
- Venue: Anais do XIV Symposium on Knowledge Discovery, Mining and Learning (KDMiLe 2026)
- Publisher: Sociedade Brasileira de Computação - SBC
- Pages: 121-128
- DOI: 10.5753/kdmile.2026.32021
- Date source: Crossref metadata deposited for the DOI gives issued and published-online dates of 2026-10-19; precision=day.
- Identity basis: No title, DOI or canonical URL match in the active catalog or the retained arXiv archive, and arXiv searches for the title phrase, the method name and the two authors returned nothing; neither the PDF nor the Crossref deposit names an arXiv version, so this publisher edition seeds the record.
- Source notes: Full paper in the KDMiLe 2026 proceedings published by SBC on its SOL open library. The PDF title page and Crossref list the same two authors in the same order. The PDF grants permission to copy without fee for non-commercial use with notice; no standard license is declared.
- Publication evidence: https://sol.sbc.org.br/index.php/kdmile/article/download/44978/44741, https://api.crossref.org/works/10.5753/kdmile.2026.32021

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://sol.sbc.org.br/index.php/kdmile/article/download/44978/44741 (retrieved 2026-10-19T08:40:18Z; SHA-256 244d2777c017208be3f374b4ab4ef6954c3db314a273e532063d6487c087567d)
- https://api.crossref.org/works/10.5753/kdmile.2026.32021 (retrieved 2026-10-19T08:40:21Z; SHA-256 5345106b26513bf1583ebb0bf29cb15b8fad38c75dcf3da43de6432aee1fddf0)
- https://sol.sbc.org.br/index.php/kdmile/article/download/44978/44741 (retrieved 2026-10-19T08:40:18Z; SHA-256 244d2777c017208be3f374b4ab4ef6954c3db314a273e532063d6487c087567d)
- https://api.crossref.org/works/10.5753/kdmile.2026.32021 (retrieved 2026-10-19T08:40:21Z; SHA-256 5345106b26513bf1583ebb0bf29cb15b8fad38c75dcf3da43de6432aee1fddf0)
