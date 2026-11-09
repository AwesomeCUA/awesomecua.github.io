# Computer Agent Arena: Toward Human-Centric Evaluation and Analysis of Computer-Use Agents

Crowdsourced arena where users set tasks on cloud Ubuntu or Windows desktops, watch two anonymous computer-use agents attempt them side by side and vote; reports 2,201 votes over 12 agents.

- Catalog URL: https://awesomecua.com/resources/url-5cfd441becdfc6ea622b/
- Original source: https://openreview.net/forum?id=3x4SDbXbgl
- Kind: paper
- Review: curated
- Scope: core
- Environments: desktop, linux, windows
- Topics: evaluation, sandbox, observability, tool-integration
- Evidence checked: 2026-10-19T07:22:40Z
- ID: url:5cfd441becdfc6ea622b

## Limitations

Reviewed against the ICLR 2026 proceedings page and abstract, the full proceedings PDF and the platform README at commit 4536036; the OpenReview forum lists it as an ICLR 2026 Poster. Two anonymized agents run the same user-written instruction in parallel, identically initialized Ubuntu or Windows virtual machines on AWS EC2, shown to users through a browser VNC view and synchronized replays; the paper turns the pairwise votes into a Bradley-Terry ranking and also collects optional step-level labels. It reports 2,201 filtered votes from 1,058 users over 12 agents, compares pure GUI agents with agents that also call tools or write code, and links github.com/xlang-ai/computer-agent-arena for the platform and a Hugging Face page for the collected data; neither release was reviewed here. No arXiv version was found.

- Record JSON: https://awesomecua.com/resources/url-5cfd441becdfc6ea622b/record.json

## Authors

Bowen Wang, Xinyuan Wang, Jiaqi Deng, Tianbao Xie, Ryan Li, Yanzhe Zhang, Junli Wang, Dunjie Lu, Zicheng Gong, Gavin Li, Toh Hua, Wei-Lin Chiang, Ion Stoica, Diyi Yang, Yu Su, Yi Zhang, Zhiguo Wang, Victor Zhong, Tao Yu

## Citation exports

- BibTeX: https://awesomecua.com/resources/url-5cfd441becdfc6ea622b/citation.bib
- CSL JSON: https://awesomecua.com/resources/url-5cfd441becdfc6ea622b/citation.csl.json

## Publication record

- Title: Computer Agent Arena: Toward Human-Centric Evaluation and Analysis of Computer-Use Agents
- Authors: Bowen Wang, Xinyuan Wang, Jiaqi Deng, Tianbao Xie, Ryan Li, Yanzhe Zhang, Junli Wang, Dunjie Lu, Zicheng Gong, Gavin Li, Toh Hua, Wei-Lin Chiang, Ion Stoica, Diyi Yang, Yu Su, Yi Zhang, Zhiguo Wang, Victor Zhong, Tao Yu
- Publication date (recorded precision): 2026-04-20
- Publication source: https://openreview.net/forum?id=3x4SDbXbgl
- Publication BibTeX: https://awesomecua.com/resources/url-5cfd441becdfc6ea622b/publication-citation.bib
- Publication CSL JSON: https://awesomecua.com/resources/url-5cfd441becdfc6ea622b/publication-citation.csl.json
- venue: International Conference on Learning Representations 2026 (ICLR 2026)
- volume: 2026
- pages: 58008-58068
- date basis: Publisher citation_publication_date metadata on the ICLR proceedings page states 2026-04-20; precision=day.
- identity basis: Same work: the ICLR 2026 proceedings page carries the same title, nineteen authors and abstract as OpenReview note 3x4SDbXbgl (venue ICLR 2026 Poster), which was read in a browser because openreview.net answers automated clients with a challenge page. No arXiv preprint with this title was found.
- notes: Authors follow the proceedings page listing. The PDF byline and OpenReview print the eleventh author as Toh Jing Hua, and the PDF byline lists Ion Stoica before Wei-Lin Chiang. The record URL is the OpenReview forum; the proceedings page is the retained receipt. No DOI is given.
- Publication evidence: https://proceedings.iclr.cc/paper_files/paper/2026/hash/5f1d328711b162e1cf9896c7d6aaecdd-Abstract-Conference.html

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://proceedings.iclr.cc/paper_files/paper/2026/hash/5f1d328711b162e1cf9896c7d6aaecdd-Abstract-Conference.html (retrieved 2026-10-19T07:22:40Z; SHA-256 b58444fac0014fcefe6adbae83d28f036b5a7f2cd861426a8904f9d1d6e882a1)
- https://proceedings.iclr.cc/paper_files/paper/2026/hash/5f1d328711b162e1cf9896c7d6aaecdd-Abstract-Conference.html (retrieved 2026-10-19T07:22:40Z; SHA-256 b58444fac0014fcefe6adbae83d28f036b5a7f2cd861426a8904f9d1d6e882a1)
- https://raw.githubusercontent.com/xlang-ai/computer-agent-arena/4536036e8d0a3de9a0de9829c09f4a5916f73013/README.md (retrieved 2026-10-19T07:21:05Z; SHA-256 00d3174a9b3e8e3a330dc6cec3b054310f64ec469b6b34d41f1f46b4279a72a2)
