---
title: "Scan activity | AwesomeCUA"
url: https://awesomecua.com/updates/
updated: 2026-11-10
type: page
lang: en
---

# Scan activity

Public sources are scheduled for scanning every eight hours. New paper identities are checked against arXiv; editorial annotations and approvals remain separate.

- **Configured scan schedule**: At 00:07, 08:07 and 16:07 UTC
- **Website publication checks**: at :25 and :55 past each hour UTC; a check rebuilds only when the source catalog has a new commit

GitHub scheduling can be delayed. The completion times below record what actually ran, rather than assuming that a scheduled job executed. A scan that finds nothing new publishes no receipt; a new receipt appears at least every 8 hours.

## Current published catalog

- **Reviewed papers and surveys**: 1,718
- **Other reviewed resources**: 3,629
- **Records awaiting review**: 1,188
- **Discovered candidates**: 181

These counts include editorial work completed after the scan below. [Browse reviewed research](https://awesomecua.com/papers/) or [inspect full coverage](https://awesomecua.com/coverage/).

## Latest completed scan

- **Status**: partial
- **Started**: 2026-11-10T08:18:56Z
- **Finished**: 2026-11-10T08:24:39Z
- **Discovery documents fetched**: 103 / 103
- **New paper metadata**: 282
- **New candidate identifiers**: 436
- **Reviewed papers at scan completion**: 1718
- **Pending metadata changes**: 11

[Inspect the workflow run and logs](https://github.com/reacher-z/Awesome-CUA/actions/runs/42781627678)

### Recorded gaps

- github_candidates: Stage exceeded 220 seconds; last verified records retained.

## New to the bibliography

These are newly discovered bibliographic records. Relevance and findings still require editorial review.

- [pix2code: Generating Code from a Graphical User Interface Screenshot](https://awesomecua.com/resources/arxiv-1705-07962/) · metadata verified
- [Help, Anna! Visual Navigation with Natural Multimodal Assistance via Retrospective Curiosity-Encouraging Imitation Learning](https://awesomecua.com/resources/arxiv-1909-01871/) · metadata verified
- [DocVQA: A Dataset for VQA on Document Images](https://awesomecua.com/resources/arxiv-2007-00398/) · metadata verified
- [ThreeDWorld: A Platform for Interactive Multi-Modal Physical Simulation](https://awesomecua.com/resources/arxiv-2007-04954/) · metadata verified
- [Document Visual Question Answering Challenge 2020](https://awesomecua.com/resources/arxiv-2008-08899/) · metadata verified
- [robosuite: A Modular Simulation Framework and Benchmark for Robot Learning](https://awesomecua.com/resources/arxiv-2009-12293/) · metadata verified
- [ALFWorld: Aligning Text and Embodied Environments for Interactive Learning](https://awesomecua.com/resources/arxiv-2010-03768/) · metadata verified
- [Rearrangement: A Challenge for Embodied AI](https://awesomecua.com/resources/arxiv-2011-01975/) · metadata verified
- [VisualMRC: Machine Reading Comprehension on Document Images](https://awesomecua.com/resources/arxiv-2101-11272/) · metadata verified
- [The ThreeDWorld Transport Challenge: A Visually Guided Task-and-Motion Planning Benchmark for Physically Realistic Embodied AI](https://awesomecua.com/resources/arxiv-2103-14025/) · metadata verified
- [iGibson 2.0: Object-Centric Simulation for Robot Learning of Everyday Household Tasks](https://awesomecua.com/resources/arxiv-2108-03272/) · metadata verified
- [Habitat-Matterport 3D Dataset (HM3D): 1000 Large-scale 3D Environments for Embodied AI](https://awesomecua.com/resources/arxiv-2109-08238/) · metadata verified
- [MarkupLM: Pre-training of Text and Markup Language for Visually-rich Document Understanding](https://awesomecua.com/resources/arxiv-2110-08518/) · metadata verified
- [Learning UI Navigation through Demonstrations composed of Macro Actions](https://awesomecua.com/resources/arxiv-2110-08653/) · metadata verified
- [OCR-free Document Understanding Transformer](https://awesomecua.com/resources/arxiv-2111-15664/) · metadata verified
- [Language Models as Zero-Shot Planners: Extracting Actionable Knowledge for Embodied Agents](https://awesomecua.com/resources/arxiv-2201-07207/) · metadata verified
- [OFA: Unifying Architectures, Tasks, and Modalities Through a Simple Sequence-to-Sequence Learning Framework](https://awesomecua.com/resources/arxiv-2202-03052/) · metadata verified
- [Do BERTs Learn to Use Browser User Interface? Exploring Multi-Step Tasks with Unified Vision-and-Language BERTs](https://awesomecua.com/resources/arxiv-2203-07828/) · metadata verified
- [LayoutLMv3: Pre-training for Document AI with Unified Text and Image Masking](https://awesomecua.com/resources/arxiv-2204-08387/) · metadata verified
- [mPLUG: Effective and Efficient Vision-Language Learning by Cross-modal Skip-connections](https://awesomecua.com/resources/arxiv-2205-12005/) · metadata verified
- [IGLU Gridworld: Simple and Fast Environment for Embodied Dialog Agents](https://awesomecua.com/resources/arxiv-2206-00142/) · metadata verified
- [Psychologically-Inspired, Unsupervised Inference of Perceptual Groups of GUI Widgets from GUI Images](https://awesomecua.com/resources/arxiv-2206-10352/) · metadata verified
- [Video PreTraining (VPT): Learning to Act by Watching Unlabeled Online Videos](https://awesomecua.com/resources/arxiv-2206-11795/) · metadata verified
- [VL-CheckList: Evaluating Pre-trained Vision-Language Models with Objects, Attributes and Relations](https://awesomecua.com/resources/arxiv-2207-00221/) · metadata verified
- [Toward Explainable and Fine-Grained 3D Grounding through Referring Textual Phrases](https://awesomecua.com/resources/arxiv-2207-01821/) · metadata verified
- [Masader Plus: A New Interface for Exploring +500 Arabic NLP Datasets](https://awesomecua.com/resources/arxiv-2208-00932/) · metadata verified
- [Effective, Platform-Independent GUI Testing via Image Embedding and Reinforcement Learning](https://awesomecua.com/resources/arxiv-2208-09116/) · metadata verified
- [AccoMontage2: A Complete Harmonization and Accompaniment Arrangement System](https://awesomecua.com/resources/arxiv-2209-00353/) · metadata verified
- [Retrospectives on the Embodied AI Workshop](https://awesomecua.com/resources/arxiv-2210-06849/) · metadata verified
- [SQA3D: Situated Question Answering in 3D Scenes](https://awesomecua.com/resources/arxiv-2210-07474/) · metadata verified

[Download the full scan receipt](https://awesomecua.com/downloads/scan-status.json)

## What the scans do

Scans find new sources and verify bibliographic fields. Editors decide relevance, record dataset permissions, and write summaries. Reviewed snapshots stay as they are, and observed metadata changes go to the review queue.

[Discovery workflow](https://github.com/reacher-z/Awesome-CUA/actions/workflows/scan.yml) · [Publication workflow](https://github.com/AwesomeCUA/awesomecua.github.io/actions/workflows/publish.yml) · [Coverage ledger](https://awesomecua.com/coverage/)

[Search notification receipts](https://github.com/AwesomeCUA/awesomecua.github.io/blob/main/.indexnow/submissions.json) record which changed pages were submitted after publication and the response received. Submission is separate from search indexing.

## Latest paper-discovery pass

2026-11-10T08:19:58Z · 32 / 32 query windows succeeded · 1,512 distinct identifiers · 0 new candidates.

Newly found identifiers go through primary metadata verification and relevance review.

| Area / query | Unique hits | New candidates | Window limit | State |
| --- | --- | --- | --- | --- |
| General computer use<br>computer use agents | 80 | 0 | 80 | success |
| Grounding evaluation<br>GUI grounding benchmark | 80 | 0 | 80 | success |
| Mobile learning<br>mobile GUI agent reinforcement learning | 80 | 0 | 80 | success |
| Web data and evaluation<br>web agent dataset benchmark | 80 | 0 | 80 | success |
| Safety and security<br>computer use agent safety | 80 | 0 | 80 | success |
| Memory and planning<br>GUI agent memory planning | 80 | 0 | 80 | success |
| Desktop platforms<br>desktop computer use agent Windows macOS Linux | 80 | 0 | 80 | success |
| Android<br>Android smartphone GUI agent automation | 80 | 0 | 80 | success |
| iOS<br>iOS iPhone GUI agent benchmark | 80 | 0 | 80 | success |
| HarmonyOS<br>HarmonyOS mobile GUI agent | 80 | 0 | 80 | success |
| Screen understanding<br>GUI screen understanding interface element detection | 80 | 0 | 80 | success |
| Visual grounding<br>screenshot visual grounding click localization agent | 80 | 0 | 80 | success |
| Browser interaction<br>visual web navigation browser agent | 80 | 0 | 80 | success |
| Cross application work<br>cross application multi app GUI agents | 80 | 0 | 80 | success |
| Long horizon tasks<br>long horizon computer use agent workflow planning | 80 | 0 | 80 | success |
| Agent memory<br>GUI agent episodic memory self reflection | 80 | 0 | 80 | success |
| Reinforcement learning<br>computer use agent online reinforcement learning rewards | 80 | 0 | 80 | success |
| Demonstrations<br>GUI agent imitation learning human demonstration trajectories | 80 | 0 | 80 | success |
| Synthetic training data<br>synthetic GUI agent training data generation | 80 | 0 | 80 | success |
| Task verification<br>computer use benchmark task evaluation state verification | 80 | 0 | 80 | success |
| Professional software<br>professional software GUI agent CAD Blender 3D | 80 | 0 | 80 | success |
| Office workflows<br>spreadsheets presentations documents computer use agents | 80 | 0 | 80 | success |
| Assistive interfaces<br>accessibility assistive multimodal GUI agents | 80 | 0 | 80 | success |
| Robustness<br>GUI agent robustness dynamic interfaces distribution shift | 80 | 0 | 80 | success |
| Adversarial security<br>browser GUI agent prompt injection adversarial security | 80 | 0 | 80 | success |
| Human collaboration<br>GUI agent human collaboration clarification intervention | 80 | 0 | 80 | success |
| Efficiency<br>GUI agent efficiency latency visual token compression | 80 | 0 | 80 | success |
| Open models<br>open source GUI model computer use checkpoint | 80 | 0 | 80 | success |
| Workflow automation<br>visual workflow automation robotic process automation agents | 80 | 0 | 80 | success |
| Multilingual interfaces<br>multilingual GUI agent interface grounding | 80 | 0 | 80 | success |
| Testing and exploration<br>GUI agent software testing interface exploration | 80 | 0 | 80 | success |
| Chinese language discovery<br>图形界面 智能体 手机 电脑操作 | 10 | 0 | 80 | success |

Per-query new counts depend on query order and count first discovery in this pass. [Query registry](https://awesomecua.com/downloads/paper-discovery-queries.json) · [Results and source receipts](https://awesomecua.com/downloads/paper-discovery-status.json)

## Conference proceedings sweep

65 keyword-selected titles were inspected across 4 official proceedings snapshots. Title candidates and possible renamed papers await identity and scope review.

[Inspect the selected titles, review boundaries, and primary receipts](https://awesomecua.com/downloads/conference-discovery.json).
