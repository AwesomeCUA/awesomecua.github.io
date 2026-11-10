---
title: "AdapAction: Adaptive Target Action Backdoor… | AwesomeCUA"
url: https://awesomecua.com/resources/url-e876bff0950b82a0c9b7/
updated: 2026-10-19
type: paper
lang: en
---

# AdapAction: Adaptive Target Action Backdoor Attack against GUI Agents

Backdoor attack that fine-tunes GUI agents on teacher-written malicious trajectories, so a trigger makes the agent choose a harmful action fitting the current screen and instruction; tested on AitZ and AndroidControl.

- Catalog URL: https://awesomecua.com/resources/url-e876bff0950b82a0c9b7/
- Original source: https://openaccess.thecvf.com/content/CVPR2026/html/Chen_AdapAction_Adaptive_Target_Action_Backdoor_Attack_against_GUI_Agents_CVPR_2026_paper.html
- Kind: paper
- Review: curated
- Scope: core
- Environments: android
- Topics: safety-security, mobile-navigation
- Evidence checked: 2026-10-19T06:38:37Z
- ID: url:e876bff0950b82a0c9b7

## Limitations

The annotation was reviewed against the CVF open-access landing page and PDF. A teacher model (for example Gemini 2.5 Pro) writes malicious reasoning trajectories drawn from a five-category malicious action library, and the agent learns them by supervised fine-tuning, which the paper calls Context-Aware Behavioral Imitation. Main results fine-tune Qwen2-VL-2B and Qwen2-VL-7B at a 0.1 poisoning ratio with a blended visual trigger; an AndroidWorld emulator deployment through Mobile-Agent-v3 is described in the supplementary material. The paper links no code release or arXiv version.

- Record JSON: https://awesomecua.com/resources/url-e876bff0950b82a0c9b7/record.json

## Authors

Baicheng Chen, Mingda Zhang, Min Zhang, Haizhou Li, Baoyuan Wu

## Citation exports

- BibTeX: https://awesomecua.com/resources/url-e876bff0950b82a0c9b7/citation.bib
- CSL JSON: https://awesomecua.com/resources/url-e876bff0950b82a0c9b7/citation.csl.json

```bibtex
@inproceedings{cua_a2a53f955040d6d6aba935d9,
  title = {{AdapAction: Adaptive Target Action Backdoor Attack against GUI Agents}},
  author = {{Baicheng Chen} and {Mingda Zhang} and {Min Zhang} and {Haizhou Li} and {Baoyuan Wu}},
  year = {2026},
  month = jun,
  booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
  pages = {27894-27905},
  url = {https://openaccess.thecvf.com/content/CVPR2026/html/Chen\_AdapAction\_Adaptive\_Target\_Action\_Backdoor\_Attack\_against\_GUI\_Agents\_CVPR\_2026\_paper.html},
  note = {Publication date: 2026-06.}
}
```

## Publication record

- Title: AdapAction: Adaptive Target Action Backdoor Attack against GUI Agents
- Authors: Baicheng Chen, Mingda Zhang, Min Zhang, Haizhou Li, Baoyuan Wu
- Publication date (recorded precision): 2026-06
- Publication source: https://openaccess.thecvf.com/content/CVPR2026/html/Chen_AdapAction_Adaptive_Target_Action_Backdoor_Attack_against_GUI_Agents_CVPR_2026_paper.html
- Publication BibTeX: https://awesomecua.com/resources/url-e876bff0950b82a0c9b7/publication-citation.bib
- Publication CSL JSON: https://awesomecua.com/resources/url-e876bff0950b82a0c9b7/publication-citation.csl.json
- Venue: Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition
- Pages: 27894-27905
- Date source: Year from publisher citation metadata and month from the same page's embedded BibTeX; no day is supplied.
- Identity basis: No title, DOI or canonical URL match in the active catalog or the retained arXiv archive, and an arXiv title and abstract search for AdapAction returned nothing; neither the landing page nor the PDF names an arXiv version, so this publisher edition seeds the record.
- Source notes: CVF open-access accepted version; the PDF states that the final proceedings version is on IEEE Xplore. The landing page, BibTeX and PDF title page list the same five authors in the same order.
- Publication evidence: https://openaccess.thecvf.com/content/CVPR2026/html/Chen_AdapAction_Adaptive_Target_Action_Backdoor_Attack_against_GUI_Agents_CVPR_2026_paper.html, https://openaccess.thecvf.com/content/CVPR2026/papers/Chen_AdapAction_Adaptive_Target_Action_Backdoor_Attack_against_GUI_Agents_CVPR_2026_paper.pdf

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://openaccess.thecvf.com/content/CVPR2026/html/Chen_AdapAction_Adaptive_Target_Action_Backdoor_Attack_against_GUI_Agents_CVPR_2026_paper.html (retrieved 2026-10-19T06:38:37Z; SHA-256 c540ae31dfb8a356917ef343c6e2bd1036bf0758276f838a5fd608cde690e7da)
- https://openaccess.thecvf.com/content/CVPR2026/papers/Chen_AdapAction_Adaptive_Target_Action_Backdoor_Attack_against_GUI_Agents_CVPR_2026_paper.pdf (retrieved 2026-10-19T06:38:38Z; SHA-256 946cbc9a6e0ab3161e6e4d7d71a58433eba6b51babe3cdcf58b9f30c3a388cb0)
- https://openaccess.thecvf.com/content/CVPR2026/html/Chen_AdapAction_Adaptive_Target_Action_Backdoor_Attack_against_GUI_Agents_CVPR_2026_paper.html (retrieved 2026-10-19T06:38:37Z; SHA-256 c540ae31dfb8a356917ef343c6e2bd1036bf0758276f838a5fd608cde690e7da)
- https://openaccess.thecvf.com/content/CVPR2026/papers/Chen_AdapAction_Adaptive_Target_Action_Backdoor_Attack_against_GUI_Agents_CVPR_2026_paper.pdf (retrieved 2026-10-19T06:38:38Z; SHA-256 946cbc9a6e0ab3161e6e4d7d71a58433eba6b51babe3cdcf58b9f30c3a388cb0)
