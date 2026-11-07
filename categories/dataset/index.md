# Computer-use agent datasets

> 86 curated records of this kind in the AwesomeCUA catalog, each with its complete annotation, primary evidence and license declarations. Snapshot 2026-11-07T05:19:53Z.

HTML page: https://awesomecua.com/categories/dataset/ · Catalog index: https://awesomecua.com/llms.txt · API: https://awesomecua.com/api/v1/resources.json

Reviews are AI-assisted inspections of primary sources. Code, data, weights and document licenses are recorded separately.

---

## AgentNet

22.6K human-annotated desktop computer-use tasks on Windows, macOS and Ubuntu, released with OpenCUA for training and evaluating vision-language-action models.

- Catalog URL: https://awesomecua.com/resources/url-964d70c40bfc5ca8e1ee/
- Original source: https://huggingface.co/datasets/xlangai/AgentNet
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop
- Topics: data-generation
- Evidence checked: 2026-10-16T06:38:26Z
- ID: url:964d70c40bfc5ca8e1ee

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/url-964d70c40bfc5ca8e1ee/record.json

### Structured profile

- formats: JSONL, image archives
- modalities: screenshots, instructions, actions, generated reasoning
- splits: not recorded
- supervision: computer-use trajectories, synthesized reasoning

#### Count observations

- ≈ 22,600 tasks — AgentNet collection (reported; source: https://huggingface.co/datasets/xlangai/AgentNet/raw/main/README.md)

The card distinguishes human task instructions from generated summaries, reasoning, reflections, and quality fields. Generated labels are not independent human quality acceptance records.

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/xlangai/AgentNet
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/xlangai/AgentNet (retrieved 2026-10-16T06:38:26Z; SHA-256 f23c588ea9fb27210f9d605e164a32527a24298ca516df98272ff7ca7110eac6)
- https://huggingface.co/datasets/xlangai/AgentNet/raw/main/README.md (retrieved 2026-10-16T11:40:46Z; SHA-256 327a77856df259db0a0c2405478f75a0d0f2bf17c51806abc7c509ad82c3ad57)
- https://huggingface.co/api/datasets/xlangai/AgentNet (retrieved 2026-10-16T06:38:26Z; SHA-256 f23c588ea9fb27210f9d605e164a32527a24298ca516df98272ff7ca7110eac6)

---

## AgentSynth tasks and trajectories

Published AgentSynth task definitions and recorded GUI trajectories, with OSWorld and InSTA training configurations and packaged screenshots, thoughts and commands.

- Catalog URL: https://awesomecua.com/resources/url-58a209f2b3b970916396/
- Original source: https://huggingface.co/datasets/sunblaze-ucb/AgentSynth
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, web
- Topics: data-generation, long-horizon, imitation-learning
- Evidence checked: 2026-10-18T04:35:17Z
- ID: url:58a209f2b3b970916396

### Limitations

Public Hub manifest contains JSONL task files and trajectory ZIP packages. Counts describe the publisher-reported task collection, not independently counted archive rows or numbers inferred from ZIP filenames.

- Record JSON: https://awesomecua.com/resources/url-58a209f2b3b970916396/record.json

### Structured profile

- formats: JSONL, ZIP trajectory packages
- modalities: screenshots, task instructions, LLM thoughts, commands
- splits: train (osworld configuration), train (insta configuration)
- supervision: synthetic tasks, agent trajectories

#### Count observations

- > 6,000 tasks — collection described in the dataset card; not an independently counted release-row total (reported; source: https://huggingface.co/datasets/sunblaze-ucb/AgentSynth/raw/9ec3f3139f9786e81aee14b7fff1eb487cc7e991/README.md)

Card maps osworld/train to all_tasks.jsonl and insta/train to task_sequences.jsonl. Six difficulty levels and trajectory screenshots/thoughts/commands are documented. ZIP file labels are not trajectory counts; configurations and composed-task levels are not assumed disjoint.

### License declarations

- code: not recorded
- data: Apache-2.0 — https://huggingface.co/datasets/sunblaze-ucb/AgentSynth/raw/9ec3f3139f9786e81aee14b7fff1eb487cc7e991/README.md
- document: not recorded
- weights: not recorded

- data review: Publisher dataset-card declaration for this release; it does not establish rights to all upstream screenshots, applications or source content.
  Sources: https://huggingface.co/datasets/sunblaze-ucb/AgentSynth/raw/9ec3f3139f9786e81aee14b7fff1eb487cc7e991/README.md

### Primary evidence

- https://huggingface.co/datasets/sunblaze-ucb/AgentSynth/raw/9ec3f3139f9786e81aee14b7fff1eb487cc7e991/README.md (retrieved 2026-10-18T04:35:17Z; SHA-256 c1669d8e3caa27f8cd47c17b243b6a8d42807438d8a6a36074668adc57d33757)
- https://huggingface.co/api/datasets/sunblaze-ucb/AgentSynth (retrieved 2026-10-18T04:33:20Z; SHA-256 0d3797d75dd4089ece8c8d4624f2a726024d25be255255d8770f78de21d75906)
- https://raw.githubusercontent.com/sunblaze-ucb/AgentSynth/HEAD/README.md (retrieved 2026-10-18T04:27:12Z; SHA-256 42e8b8dead7caea3f8b21e93a075e8c895dfc30a25e1470bf97a90940bbf0106)

---

## AgentTrek

Synthesizes browser-agent trajectories by replaying web tutorials as guidance, releasing the trajectory data with multimodal grounding and reasoning and an AgentTrek-32B agent.

- Catalog URL: https://awesomecua.com/resources/github-xlang-ai-agenttrek/
- Original source: https://github.com/xlang-ai/AgentTrek
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: data-generation, video
- Evidence checked: 2026-10-16T06:36:01Z
- ID: github:xlang-ai/agenttrek

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-xlang-ai-agenttrek/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/xlang-ai/AgentTrek/HEAD/README.md (retrieved 2026-10-16T06:36:01Z; SHA-256 17fa475b96bdd00270c656072d3f8fc55d8433f0e3a1c2762110160ec21a5c35)

---

## Aguvis stage 1 grounding data

The first-stage Aguvis training collection, packaging GUI element-grounding annotations and image archives from multiple interface-data sources.

- Catalog URL: https://awesomecua.com/resources/url-06dd5ac7917c45d48509/
- Original source: https://huggingface.co/datasets/xlangai/aguvis-stage1
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding, data-generation
- Evidence checked: 2026-10-17T02:03:33Z
- ID: url:06dd5ac7917c45d48509

### Limitations

The manifest contains grounding JSON annotations and packaged images. The card declares Apache-2.0, which is recorded for this release without overriding source-dataset rights. This first-stage grounding collection is distinct from the project’s second-stage trajectory collection. No archive or training sample was downloaded.

- Record JSON: https://awesomecua.com/resources/url-06dd5ac7917c45d48509/record.json

### Structured profile

- formats: JSON annotations, ZIP image packages, multipart TAR image packages
- modalities: GUI screenshots, grounding annotations
- splits: training
- supervision: GUI grounding supervised fine-tuning

#### Count observations

No count recorded.

Stage 1 grounding release, Hub revision 5d11f8f5. JSON annotations and ZIP/multipart TAR image packages are publicly listed. The official training configuration groups web, desktop and mobile inputs and selects all rows of its configured inputs; this is a training recipe, not a release sample count or held-out split. The config names omniact.json while the Hub manifest lists omniact_fix.json, so local paths need reconciliation. No sample total is inferred from names such as webui350k. Apache-2.0 is the release card declaration; upstream source rights remain separate.

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/xlangai/aguvis-stage1/raw/main/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/xlangai/aguvis-stage1/raw/main/README.md (retrieved 2026-10-17T02:03:33Z; SHA-256 38bda302cf741b9d2b2394b53d157b3c19d8a73e3704c01ed2f9a27c374feb77)
- https://huggingface.co/api/datasets/xlangai/aguvis-stage1 (retrieved 2026-10-17T02:03:33Z; SHA-256 cb3b8ec88d811d946df3cbf38ef555db5a10d1124668765710c380e9b1988b06)
- https://raw.githubusercontent.com/xlang-ai/aguvis/HEAD/README.md (retrieved 2026-10-16T06:36:00Z; SHA-256 2dd9f36b818c1b7b6bd772ba8575f6c0ebab6d9e0d307edcc2f196f3e4ba502e)
- https://raw.githubusercontent.com/xlang-ai/aguvis/HEAD/data/stage1.yaml (retrieved 2026-10-17T14:21:11Z; SHA-256 f6a9e55c5d48469e2c8f7799d917d25e7a758036f71c7c045fa92c35057d20da)
- https://huggingface.co/datasets/xlangai/aguvis-stage1/raw/main/README.md (retrieved 2026-10-17T02:03:33Z; SHA-256 38bda302cf741b9d2b2394b53d157b3c19d8a73e3704c01ed2f9a27c374feb77)

---

## Aguvis stage 2 trajectory data

The second-stage Aguvis collection of interface trajectories for learning action sequences, planning and reasoning after grounding pretraining.

- Catalog URL: https://awesomecua.com/resources/url-b5e2127e07f692d516b9/
- Original source: https://huggingface.co/datasets/xlangai/aguvis-stage2
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: planning, data-generation
- Evidence checked: 2026-10-17T02:03:33Z
- ID: url:b5e2127e07f692d516b9

### Limitations

The manifest contains trajectory annotations and archives associated with mobile, desktop and web sources. The card declares Apache-2.0; underlying source content may retain separate terms. This stage has a different training purpose and files from the grounding release. No archive or training sample was downloaded.

- Record JSON: https://awesomecua.com/resources/url-b5e2127e07f692d516b9/record.json

### Structured profile

- formats: JSON annotations, ZIP image packages, multipart TAR image packages
- modalities: GUI screenshots, natural-language instructions, action trajectories
- splits: training
- supervision: GUI trajectory supervised fine-tuning, planning and reasoning with inner monologue

#### Count observations

No count recorded.

Stage 2 trajectory release, Hub revision bd6f1ed4, is distinct from Stage 1 grounding. The public manifest lists source-specific JSON levels and image ZIP/multipart TAR packages. The training recipe uses all rows for some inputs and random:33% for others; several l2 paths occur twice while the manifest also contains l3 files. Recipe rows/levels are neither independent datasets nor disjoint train/test splits. No example/action/trajectory count is inferred. Apache-2.0 is the card declaration, with separate underlying source terms.

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/xlangai/aguvis-stage2/raw/main/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/xlangai/aguvis-stage2/raw/main/README.md (retrieved 2026-10-17T02:03:33Z; SHA-256 550293f00905615e19e63ac896818f9875dad38fea0ffe196c6302a29719aa72)
- https://huggingface.co/api/datasets/xlangai/aguvis-stage2 (retrieved 2026-10-17T02:03:33Z; SHA-256 f030264a7a8c7485dc7cf15ca554d84450cc492d2ac90e5965810a0207ef370b)
- https://raw.githubusercontent.com/xlang-ai/aguvis/HEAD/README.md (retrieved 2026-10-16T06:36:00Z; SHA-256 2dd9f36b818c1b7b6bd772ba8575f6c0ebab6d9e0d307edcc2f196f3e4ba502e)
- https://raw.githubusercontent.com/xlang-ai/aguvis/HEAD/data/stage2.yaml (retrieved 2026-10-17T14:21:11Z; SHA-256 8c1b39e9d16067018ce845fd4e996f34e2b47346c342b2ba26b030f4a5338b66)
- https://huggingface.co/datasets/xlangai/aguvis-stage2/raw/main/README.md (retrieved 2026-10-17T02:03:33Z; SHA-256 550293f00905615e19e63ac896818f9875dad38fea0ffe196c6302a29719aa72)

---

## AMEX

Code for AMEX Android GUI data that converts its three annotation levels into question-answer pairs and fine-tunes a LLaMA2-Accessory model, with a released checkpoint.

- Catalog URL: https://awesomecua.com/resources/github-yuxiangchai-amex-codebase/
- Original source: https://github.com/YuxiangChai/AMEX-codebase
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: data-generation
- Evidence checked: 2026-10-16T06:36:01Z
- ID: github:yuxiangchai/amex-codebase

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-yuxiangchai-amex-codebase/record.json

### Structured profile

- formats: not recorded
- modalities: screenshots, element annotations, functionality descriptions, action chains
- splits: not recorded
- supervision: element grounding, UI functionality, interaction trajectories

#### Count observations

- > 104,000 screenshots — AMEX collection described in the paper (reported; source: https://arxiv.org/abs/2407.17490)

The main repository contains companion training code. The scale and annotation levels here come from the paper, not an independent download or completeness audit.

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/YuxiangChai/AMEX-codebase/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/YuxiangChai/AMEX-codebase/HEAD/README.md (retrieved 2026-10-16T06:36:01Z; SHA-256 3184bfd612543621e57226e9079132dc8d5695339795a60366d3f6d445e13551)
- https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=800&max_results=100&sortBy=submittedDate&sortOrder=descending (retrieved 2026-10-16T06:36:58Z; SHA-256 c87e97eb397da04806d53145cf9c13be739fc657bb54dca9318c8c4ed2a36249)
- https://yxchai.com/AMEX/ (retrieved 2026-10-18T04:27:11Z; SHA-256 4aab61e6a95ab6b6598fb64b8e55d787cd49b5c4f242d15372aed2dd312f97aa)
- https://raw.githubusercontent.com/YuxiangChai/AMEX-codebase/HEAD/LICENSE (retrieved 2026-10-16T06:42:02Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## Android in the Wild

Human demonstrations of Android tasks with screenshots and touch actions.

- Catalog URL: https://awesomecua.com/resources/component-google-research-android-in-the-wild/
- Original source: https://github.com/google-research/google-research/tree/master/android_in_the_wild
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: data-generation, mobile-navigation
- Evidence checked: 2026-10-16T06:38:29Z
- ID: component:google-research/android_in_the_wild

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/component-google-research-android-in-the-wild/record.json

### Structured profile

- formats: GZIP-compressed TFRecord
- modalities: screenshots, instructions, actions
- splits: not recorded
- supervision: interaction trajectories, action prediction

#### Count observations

- 715,142 episodes — sum of the five published AitW subsets (reported; source: https://raw.githubusercontent.com/google-research/google-research/master/android_in_the_wild/README.md)
- 5,689,993 action examples — sum of the five published AitW subsets (reported; source: https://raw.githubusercontent.com/google-research/google-research/master/android_in_the_wild/README.md)

Episodes and action examples are different units. The collection combines multi-step subsets and hindsight-labeled single-step tasks; preserve subset and split choices.

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/google-research/google-research/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/google-research/google-research/master/android_in_the_wild/README.md (retrieved 2026-10-16T06:38:29Z; SHA-256 6d8964c95db41dada1d5867e50a5ec61f6cb90595965d0e72e010b8e4a12dcb2)
- https://raw.githubusercontent.com/google-research/google-research/HEAD/LICENSE (retrieved 2026-10-16T06:42:06Z; SHA-256 cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30)

---

## AndroidCode

HTML and annotation release used for Code2World’s action-conditioned GUI-state prediction training, constructed from mobile GUI trajectories.

- Catalog URL: https://awesomecua.com/resources/url-cf4d2d45a7314cb16acb/
- Original source: https://huggingface.co/datasets/GD-ML/AndroidCode
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: world-models, data-generation, screen-understanding
- Evidence checked: 2026-10-18T04:27:14Z
- ID: url:cf4d2d45a7314cb16acb

### Limitations

The Hub card is license-only; semantic description and reported scale come from the official Code2World README. The public manifest contains HTML files, Android-Control train/test JSON files and extraction/loading scripts. It does not list standalone screenshot image files, and embedded/reference image packaging was not inspected. MIT is the data-card declaration, not a grant for every upstream source dataset.

- Record JSON: https://awesomecua.com/resources/url-cf4d2d45a7314cb16acb/record.json

### Structured profile

- formats: HTML, JSON, Python extraction/loading scripts
- modalities: GUI screenshots (described input), GUI actions, HTML
- splits: Android-Control train file, Android-Control test file
- supervision: action-conditioned next-state code prediction, generated HTML supervision

#### Count observations

- > 80,000 screen–action pairs — AndroidCode corpus described by Code2World README; released JSON rows not recounted (reported; source: https://raw.githubusercontent.com/AMAP-ML/Code2World/HEAD/readme.md)

The manifest lists 58,953 HTML files, which are not converted into transition/example counts. The reported >80k pairs and the HTML-file inventory have different units. The card itself has no sample schema or count; archive/image completeness and JSON contents were not audited.

### License declarations

- code: not recorded
- data: MIT — https://huggingface.co/datasets/GD-ML/AndroidCode/raw/af316a6be79bbe08c4fc09ea588b5f80f177ed25/README.md
- document: not recorded
- weights: not recorded

- data review: Publisher dataset-card declaration for this release; it does not establish rights to all upstream screenshots, applications or source content.
  Sources: https://huggingface.co/datasets/GD-ML/AndroidCode/raw/af316a6be79bbe08c4fc09ea588b5f80f177ed25/README.md

### Primary evidence

- https://raw.githubusercontent.com/AMAP-ML/Code2World/HEAD/readme.md (retrieved 2026-10-18T04:27:14Z; SHA-256 26c14a14166d3b747454d1924ecdf6d96652ac857ae6ad488630dc843036a777)
- https://huggingface.co/api/datasets/GD-ML/AndroidCode (retrieved 2026-10-18T04:33:22Z; SHA-256 5774a3c096264fbba58b7a16587ea65f35628edb9ca39afe8a32c74ec7fd1ce7)
- https://huggingface.co/datasets/GD-ML/AndroidCode/raw/af316a6be79bbe08c4fc09ea588b5f80f177ed25/README.md (retrieved 2026-10-18T04:35:17Z; SHA-256 d8d7a46d41a1a37fe4f0a5f637bf55c649310185329127d8a2204632e480be17)

---

## AndroidControl

Android demonstrations with high-level goals, step instructions, screenshots, and accessibility trees.

- Catalog URL: https://awesomecua.com/resources/component-google-research-android-control/
- Original source: https://github.com/google-research/google-research/tree/master/android_control
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: data-generation, mobile-navigation
- Evidence checked: 2026-10-16T06:38:29Z
- ID: component:google-research/android_control

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/component-google-research-android-control/record.json

### Structured profile

- formats: GZIP-compressed TFRecord
- modalities: screenshots, accessibility trees, instructions, JSON actions
- splits: publisher split file
- supervision: interaction trajectories, high- and low-level action instruction

#### Count observations

- > 15,000 demonstrations — AndroidControl collection (reported; source: https://raw.githubusercontent.com/google-research/google-research/master/android_control/README.md)
- 833 applications — AndroidControl collection (reported; source: https://raw.githubusercontent.com/google-research/google-research/master/android_control/README.md)

Step instructions can be repeated across multiple actions. Each episode has one more screenshot than action; do not count repeated step instructions as independent task goals.

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/google-research/google-research/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/google-research/google-research/master/android_control/README.md (retrieved 2026-10-16T06:38:29Z; SHA-256 e4f8baa15441fb63cad07220cc5a4de177a1f785d4fe1fed5cfcbf3c3867faf1)
- https://raw.githubusercontent.com/google-research/google-research/HEAD/LICENSE (retrieved 2026-10-16T06:42:06Z; SHA-256 cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30)

---

## Aria-UI Context-aware Data

Episode-based mobile GUI grounding data released with Aria-UI for incorporating interaction history into target localization.

- Catalog URL: https://awesomecua.com/resources/url-07b65dc937756ddff4a1/
- Original source: https://huggingface.co/datasets/Aria-UI/Aria-UI_Context-aware_Data
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: grounding, memory
- Evidence checked: 2026-10-16T11:11:53Z
- ID: url:07b65dc937756ddff4a1

### Limitations

The publisher reports approximately 992K instruction-output pairs in its repository. The Hub card contains only a license declaration; schema quality and exact sample counts were not independently verified.

- Record JSON: https://awesomecua.com/resources/url-07b65dc937756ddff4a1/record.json

### Structured profile

- formats: not recorded
- modalities: screen observations, instructions, interaction history
- splits: not recorded
- supervision: context-aware grounding

#### Count observations

- ≈ 992,000 instruction-output pairs — context-aware episode training release (reported; source: https://raw.githubusercontent.com/AriaUI/Aria-UI/HEAD/README.md)

The Hub card contains only licensing metadata. The project README supports the episode-training description and rounded count; archive-level quality and exact row counts remain unverified.

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/Aria-UI/Aria-UI_Context-aware_Data
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/Aria-UI/Aria-UI_Context-aware_Data (retrieved 2026-10-16T11:11:53Z; SHA-256 79f91aab71bb8a0ec3ad9859cbc42d70227e01db729ec80dc5690b466b259cad)
- https://raw.githubusercontent.com/AriaUI/Aria-UI/HEAD/README.md (retrieved 2026-10-16T06:36:00Z; SHA-256 a2a3c5ad115e4e2109b56686c9e0b073bcfec6d9f052a58bc92683af44933480)
- https://huggingface.co/api/datasets/Aria-UI/Aria-UI_Context-aware_Data (retrieved 2026-10-16T11:11:53Z; SHA-256 79f91aab71bb8a0ec3ad9859cbc42d70227e01db729ec80dc5690b466b259cad)

---

## Aria-UI Data

GUI element descriptions and grounding instructions spanning web, mobile, and Ubuntu desktop interfaces.

- Catalog URL: https://awesomecua.com/resources/url-f8566bd0394d36ed4f8e/
- Original source: https://huggingface.co/datasets/Aria-UI/Aria-UI_Data
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web, android, desktop, linux
- Topics: grounding, screen-understanding
- Evidence checked: 2026-10-16T10:42:13Z
- ID: url:f8566bd0394d36ed4f8e

### Limitations

The publisher flags original desktop files as deprecated because of screenshot-mapping issues, and identifies corrected versions in the dataset card.

- Record JSON: https://awesomecua.com/resources/url-f8566bd0394d36ed4f8e/record.json

### Structured profile

- formats: JSON annotations, image archives
- modalities: screenshots, instructions, element captions
- splits: not recorded
- supervision: element grounding, element descriptions

#### Count observations

- ≈ 2,900,000 instructions — web subset (reported; source: https://huggingface.co/datasets/Aria-UI/Aria-UI_Data/raw/main/README.md)
- ≈ 173,000 images — web subset (reported; source: https://huggingface.co/datasets/Aria-UI/Aria-UI_Data/raw/main/README.md)
- ≈ 1,100,000 instructions — mobile subset (reported; source: https://huggingface.co/datasets/Aria-UI/Aria-UI_Data/raw/main/README.md)
- ≈ 104,000 images — mobile subset (reported; source: https://huggingface.co/datasets/Aria-UI/Aria-UI_Data/raw/main/README.md)
- ≈ 150,000 instructions — desktop subset (reported; source: https://huggingface.co/datasets/Aria-UI/Aria-UI_Data/raw/main/README.md)
- ≈ 7,800 images — desktop subset (reported; source: https://huggingface.co/datasets/Aria-UI/Aria-UI_Data/raw/main/README.md)

The card identifies deprecated desktop files with screenshot-mapping errors and names corrected releases. Counts are rounded publisher figures for separate platform subsets; instructions and images are not interchangeable.

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/Aria-UI/Aria-UI_Data/raw/main/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/Aria-UI/Aria-UI_Data/raw/main/README.md (retrieved 2026-10-16T10:42:13Z; SHA-256 8713ca2a6b1962d5dce7da132e1135898d467053dc6b53b4463a0d43a6433bcb)
- https://huggingface.co/datasets/Aria-UI/Aria-UI_Data/raw/main/README.md (retrieved 2026-10-16T10:42:13Z; SHA-256 8713ca2a6b1962d5dce7da132e1135898d467053dc6b53b4463a0d43a6433bcb)

---

## AutoDroid V2 training data

Conversation-formatted supervision released for fine-tuning AutoDroid V2, with the project documenting a ShareGPT-style JSON configuration.

- Catalog URL: https://awesomecua.com/resources/url-9a3506ca6ef034adb424/
- Original source: https://huggingface.co/datasets/BlitherBoom/AutoDroid-V2-Dataset
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: data-generation, imitation-learning, mobile-navigation
- Evidence checked: 2026-10-17T09:15:33Z
- ID: url:9a3506ca6ef034adb424

### Limitations

The public Hub manifest lists AutoDroid-V2-Dataset.json; no training records were downloaded. The card contains only an MIT metadata declaration, so the description and intended training use come from the official repository training guide. Sample count, split sizes and third-party-content rights remain unverified; the training command max_samples value is not treated as a dataset count.

- Record JSON: https://awesomecua.com/resources/url-9a3506ca6ef034adb424/record.json

### Structured profile

- formats: JSON in ShareGPT conversation format
- modalities: text
- splits: not recorded
- supervision: supervised conversations for AutoDroid-V2 fine-tuning

#### Count observations

No count recorded.

The card has license metadata only. The project training README supplies formatting and purpose. No sample count or split inventory is inferred from the training configuration.

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/BlitherBoom/AutoDroid-V2-Dataset/raw/main/README.md
- document: not recorded
- weights: not recorded

- data review: Publisher dataset-card license declaration; does not establish permissions for model weights or third-party application content.
  Sources: https://huggingface.co/datasets/BlitherBoom/AutoDroid-V2-Dataset/raw/main/README.md

### Primary evidence

- https://huggingface.co/api/datasets/BlitherBoom/AutoDroid-V2-Dataset (retrieved 2026-10-17T09:15:33Z; SHA-256 1b300edfbf44167da71639a56f8ab668dabd33769575fb313ebef5220fc1bddb)
- https://huggingface.co/datasets/BlitherBoom/AutoDroid-V2-Dataset/raw/main/README.md (retrieved 2026-10-17T09:15:33Z; SHA-256 d8d7a46d41a1a37fe4f0a5f637bf55c649310185329127d8a2204632e480be17)
- https://raw.githubusercontent.com/MobileLLM/AutoDroid-V2/HEAD/step_3_training/README.md (retrieved 2026-10-17T09:14:58Z; SHA-256 8ba37983a2c2da53d96a52696c07e4bdbea4e987a1a07b557935d614c3be46d2)
- https://raw.githubusercontent.com/MobileLLM/AutoDroid-V2/HEAD/README_minimal.md (retrieved 2026-10-17T09:14:58Z; SHA-256 74508100843f8db6db6bb151e77ac1cc604a6b7ebd16d3225266d73434465136)

---

## AutoGUI v1 training data

Screenshot-based grounding and captioning samples with UI functionality descriptions, target coordinates, and bounding boxes.

- Catalog URL: https://awesomecua.com/resources/url-79287058342289aa5d45/
- Original source: https://huggingface.co/datasets/AutoGUI/AutoGUI-v1-702k
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web, cross-platform
- Topics: grounding, screen-understanding
- Evidence checked: 2026-10-16T10:42:13Z
- ID: url:79287058342289aa5d45

### Limitations

The row count is not a unique-screen count. The data card documents image scaling conventions that affect coordinate interpretation.

- Record JSON: https://awesomecua.com/resources/url-79287058342289aa5d45/record.json

### Structured profile

- formats: not recorded
- modalities: screenshots, instructions, functionality labels, bounding boxes
- splits: train
- supervision: element grounding, functionality captioning

#### Count observations

- 701,864 training rows — default/train in the dataset card metadata (reported; source: https://huggingface.co/datasets/AutoGUI/AutoGUI-v1-702k/raw/main/README.md)

Rows are not unique screenshots. The card documents image-downscaling conventions that affect coordinates; preserve the device and original image-size fields.

### License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/AutoGUI/AutoGUI-v1-702k/raw/main/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/AutoGUI/AutoGUI-v1-702k/raw/main/README.md (retrieved 2026-10-16T10:42:13Z; SHA-256 c73b46acc2ff034a443fb8dbde327de1888535267199c9fb1819adf66898f1d7)
- https://huggingface.co/datasets/AutoGUI/AutoGUI-v1-702k/raw/main/README.md (retrieved 2026-10-16T10:42:13Z; SHA-256 c73b46acc2ff034a443fb8dbde327de1888535267199c9fb1819adf66898f1d7)

---

## CAGUI

Chinese Android GUI benchmark released with AgentCPM-GUI, with a grounding track for widgets and OCR text and an agent track for multi-step tasks in Chinese apps.

- Catalog URL: https://awesomecua.com/resources/url-a06622da7688e3718a7b/
- Original source: https://huggingface.co/datasets/openbmb/CAGUI
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: data-generation
- Evidence checked: 2026-10-16T06:38:26Z
- ID: url:a06622da7688e3718a7b

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/url-a06622da7688e3718a7b/record.json

### License declarations

- code: not recorded
- data: cc-by-nc-4.0 — https://huggingface.co/datasets/openbmb/CAGUI
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/openbmb/CAGUI (retrieved 2026-10-16T06:38:26Z; SHA-256 98699e13f7c7f5af812e1cbbd5e71eaceefa8aa73ca37167a772774a40818efd)
- https://huggingface.co/api/datasets/openbmb/CAGUI (retrieved 2026-10-16T06:38:26Z; SHA-256 98699e13f7c7f5af812e1cbbd5e71eaceefa8aa73ca37167a772774a40818efd)

---

## CMGUI

18k trajectories with 98k steps from more than 50 Chinese mobile apps in domains such as e-commerce and social media, for building GUI agents on Chinese apps.

- Catalog URL: https://awesomecua.com/resources/url-ab26f9ef56d651cee587/
- Original source: https://huggingface.co/datasets/alibabagroup/CMGUI
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: data-generation
- Evidence checked: 2026-10-16T06:38:26Z
- ID: url:ab26f9ef56d651cee587

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/url-ab26f9ef56d651cee587/record.json

### License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/alibabagroup/CMGUI
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/alibabagroup/CMGUI (retrieved 2026-10-16T06:38:26Z; SHA-256 aa1e063e73269acd0cb06adcef67d6230f0fe9498ed361d92234053dcf035685)
- https://huggingface.co/datasets/alibabagroup/CMGUI/raw/main/README.md (retrieved 2026-10-17T16:10:26Z; SHA-256 6f43b9e5f2c783f91cc3271f51db6a9a521c29f21954a2a30ad0cfa186e1c1b7)
- https://huggingface.co/api/datasets/alibabagroup/CMGUI (retrieved 2026-10-16T06:38:26Z; SHA-256 aa1e063e73269acd0cb06adcef67d6230f0fe9498ed361d92234053dcf035685)

---

## CUA-Gym

Computer-use environment and task resources for agent research.

- Catalog URL: https://awesomecua.com/resources/url-6aa1aa58a7a888395189/
- Original source: https://huggingface.co/datasets/xlangai/CUA-Gym
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop
- Topics: evaluation, data-generation
- Evidence checked: 2026-10-16T06:38:26Z
- ID: url:6aa1aa58a7a888395189

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/url-6aa1aa58a7a888395189/record.json

### License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/xlangai/CUA-Gym
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/xlangai/CUA-Gym (retrieved 2026-10-16T06:38:26Z; SHA-256 43b8ebde3b971e1b8b61d789c786ead59b45a2490bc6ed19e204bafc03a31f44)
- https://huggingface.co/datasets/xlangai/CUA-Gym/raw/main/README.md (retrieved 2026-10-17T16:10:25Z; SHA-256 962cd9162bea83f7adfedb3da50129bcf4203ae65176bdf53f0af6788b9603ef)
- https://huggingface.co/api/datasets/xlangai/CUA-Gym (retrieved 2026-10-16T06:38:26Z; SHA-256 43b8ebde3b971e1b8b61d789c786ead59b45a2490bc6ed19e204bafc03a31f44)

---

## DragOn

Drag-grounding training and evaluation data pairing each screenshot instruction with start and end boxes, across text highlighting, spreadsheet cells, slide resizing and sliders.

- Catalog URL: https://awesomecua.com/resources/url-b854ff53e497da3a5ad8/
- Original source: https://huggingface.co/datasets/Hcompany/DragOn
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding
- Evidence checked: 2026-10-16T06:38:26Z
- ID: url:b854ff53e497da3a5ad8

### Limitations

The card cites a workshop paper titled "DragOn: A Drag-Grounding Benchmark and Training Dataset for GUI Agents" without an arXiv link. arXiv 2606.06322 has a different title, so no paper relation is recorded.

- Record JSON: https://awesomecua.com/resources/url-b854ff53e497da3a5ad8/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/Hcompany/DragOn
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/Hcompany/DragOn (retrieved 2026-10-16T06:38:26Z; SHA-256 08b5529ce01781143147d56e2278aec2e5bdd972ba7e2fae6ba7e65e62688d40)
- https://huggingface.co/datasets/Hcompany/DragOn/raw/main/README.md (retrieved 2026-10-17T16:10:54Z; SHA-256 e7ef94cafcfd155961beec373f2f4e727715b7d517a819f52b5407fc2dec4009)
- https://huggingface.co/api/datasets/Hcompany/DragOn (retrieved 2026-10-16T06:38:26Z; SHA-256 08b5529ce01781143147d56e2278aec2e5bdd972ba7e2fae6ba7e65e62688d40)

---

## Dreamer V1 Data

Web-world-model training data with prompts, images, action descriptions, and responses, released with the WebDreamer project.

- Catalog URL: https://awesomecua.com/resources/url-eadc6cba9ea46c38dd1d/
- Original source: https://huggingface.co/datasets/osunlp/Dreamer-V1-Data
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: world-models, data-generation
- Evidence checked: 2026-10-16T11:09:28Z
- ID: url:eadc6cba9ea46c38dd1d

### Limitations

The card reports a cleaned size of 3.12M without explicitly defining its counting unit. The catalog leaves the exact sample count unknown. Its data license differs from the model-weight license.

- Record JSON: https://awesomecua.com/resources/url-eadc6cba9ea46c38dd1d/record.json

### Structured profile

- formats: not recorded
- modalities: images, prompts, actions, responses
- splits: not recorded
- supervision: web-world-model prediction

#### Count observations

No count recorded.

The card reports a cleaned size of 3.12M without defining the counting unit, so no sample total is inferred. The data card declares noncommercial share-alike terms, separately from the model-weight license.

### License declarations

- code: not recorded
- data: cc-by-nc-sa-4.0 — https://huggingface.co/datasets/osunlp/Dreamer-V1-Data/raw/main/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/osunlp/Dreamer-V1-Data/raw/main/README.md (retrieved 2026-10-16T11:09:28Z; SHA-256 e656246f09340fed08136cf41a8b79880e19e1397ddd176410688ddee4e6365c)
- https://huggingface.co/datasets/osunlp/Dreamer-V1-Data/raw/main/README.md (retrieved 2026-10-16T11:09:28Z; SHA-256 e656246f09340fed08136cf41a8b79880e19e1397ddd176410688ddee4e6365c)

---

## DroidCall data

Instruction-to-function-call examples for learning Android intent invocation, with training, testing and API-annotation files for mobile task execution.

- Catalog URL: https://awesomecua.com/resources/url-ae8f5208eea9e7f1f606/
- Original source: https://huggingface.co/datasets/mllmTeam/DroidCall
- Kind: dataset
- Review: curated
- Scope: adjacent
- Environments: android
- Topics: mobile-navigation, tool-integration, data-generation
- Evidence checked: 2026-10-17T02:02:28Z
- ID: url:ae8f5208eea9e7f1f606

### Limitations

The release provides JSONL data and API annotations. This is Android intent-calling supervision rather than screenshot-and-click trajectories, so it is marked adjacent. The dataset card declares Apache-2.0; the companion repository’s MIT code license is a separate declaration.

- Record JSON: https://awesomecua.com/resources/url-ae8f5208eea9e7f1f606/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/mllmTeam/DroidCall/raw/main/README.md
- document: not recorded
- weights: not recorded

- data review: The Hub dataset card declares Apache-2.0 in its metadata header (license: apache-2.0). The companion repository's MIT code license is a separate declaration.
  Sources: https://huggingface.co/datasets/mllmTeam/DroidCall/raw/main/README.md

### Primary evidence

- https://huggingface.co/datasets/mllmTeam/DroidCall/raw/main/README.md (retrieved 2026-10-17T02:02:28Z; SHA-256 08a6c5cfa655e1ecd774a41a9a815e845ad0afd47b289378bc1d6ee66c81dda9)
- https://huggingface.co/api/datasets/mllmTeam/DroidCall (retrieved 2026-10-17T02:02:28Z; SHA-256 c7804987d56b03314a4c48e3ddf2e5819fc0d9c83cc65ba54a981a2f4a584dd9)

---

## FingerTip-20K

Over 20,000 human Android episodes across 500+ apps with user context and long-term usage patterns, plus tracks for proactive intent prediction and personalized execution.

- Catalog URL: https://awesomecua.com/resources/github-tsinghua-fib-lab-fingertip-20k/
- Original source: https://github.com/tsinghua-fib-lab/FingerTip-20K
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: data-generation
- Evidence checked: 2026-10-16T06:36:02Z
- ID: github:tsinghua-fib-lab/fingertip-20k

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-tsinghua-fib-lab-fingertip-20k/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/tsinghua-fib-lab/FingerTip-20K/HEAD/README.md (retrieved 2026-10-16T06:36:02Z; SHA-256 2c67c8b181e7196f3ca1e88888ffc5d6b32afca686a0e5c4353ad3f5af51ff9e)

---

## Go-Browse-WA processed data

Flattened web-interaction training records with accessibility-tree observations, assistant completions, trajectory rewards and step-link metadata.

- Catalog URL: https://awesomecua.com/resources/url-a13a187bc058fbb4f6af/
- Original source: https://huggingface.co/datasets/apurvaga/go-browse-wa
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, imitation-learning
- Evidence checked: 2026-10-17T02:44:50Z
- ID: url:a13a187bc058fbb4f6af

### Limitations

The public release contains nine Parquet shards. The short card supplies schema and split metadata but no license declaration; the official README describes successful and unsuccessful trajectories processed for fine-tuning. The raw screenshot/HTML corpus is a separate release and is not claimed to be included here.

- Record JSON: https://awesomecua.com/resources/url-a13a187bc058fbb4f6af/record.json

### Structured profile

- formats: Parquet
- modalities: text, accessibility-tree observations, actions
- splits: train
- supervision: action completion, trajectory outcome

#### Count observations

- 164,533 step records — train split (reported; source: https://huggingface.co/datasets/apurvaga/go-browse-wa/raw/main/README.md)

The card count is flattened step records, not trajectories or independent tasks. Both successful and unsuccessful trajectories are included according to the project README; no license is declared.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/apurvaga/go-browse-wa (retrieved 2026-10-17T02:44:50Z; SHA-256 494f4ac9ab9e94831dcf768be001b7284e30e00704674358baf3bb2060344361)
- https://huggingface.co/datasets/apurvaga/go-browse-wa/raw/main/README.md (retrieved 2026-10-17T02:44:50Z; SHA-256 18ab64833acf31113a83b2463359f1c7e37c4aaabfe11c33db2ba3e7d32818c6)
- https://raw.githubusercontent.com/ApGa/Go-Browse/HEAD/README.md (retrieved 2026-10-17T02:44:04Z; SHA-256 0d4b28c993ccb977c7910ff3fecb5de29db364a7a7ad55523c8e052c9bae2566)
- https://huggingface.co/api/datasets/apurvaga/go-browse-wa (retrieved 2026-10-17T02:44:50Z; SHA-256 494f4ac9ab9e94831dcf768be001b7284e30e00704674358baf3bb2060344361)

---

## GroundGUI RL Dataset

Desktop grounding prompts selected from GroundCUA and formatted for click-based reinforcement learning with target-box rewards.

- Catalog URL: https://awesomecua.com/resources/url-4e71dc456c4112eed727/
- Original source: https://huggingface.co/datasets/PrentisAI/GroundGUI_RL
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop
- Topics: grounding, reinforcement-learning, data-generation
- Evidence checked: 2026-10-17T01:48:10Z
- ID: url:4e71dc456c4112eed727

### Limitations

The card declares MIT and attributes the source examples to GroundCUA. Its separate claim about UI-Vision overlap is not independently validated by this catalog.

- Record JSON: https://awesomecua.com/resources/url-4e71dc456c4112eed727/record.json

### Structured profile

- formats: Parquet
- modalities: screenshots, text, coordinates
- splits: train
- supervision: instruction-to-click grounding, target bounding boxes

#### Count observations

- 12,600 prompts — RL training corpus (reported; source: https://huggingface.co/datasets/PrentisAI/GroundGUI_RL/raw/main/README.md)
- 11,205 screenshots — RL training corpus (reported; source: https://huggingface.co/datasets/PrentisAI/GroundGUI_RL/raw/main/README.md)
- 87 desktop applications — RL training corpus (reported; source: https://huggingface.co/datasets/PrentisAI/GroundGUI_RL/raw/main/README.md)

Publisher-reported counts cover a selection and reformatting of GroundCUA, not a new disjoint image collection. No independent image-overlap audit was performed.

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/PrentisAI/GroundGUI_RL/raw/main/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/PrentisAI/GroundGUI_RL/raw/main/README.md (retrieved 2026-10-17T01:48:10Z; SHA-256 34f0025f686d0e48e2baa5244056a4362018aaad77ac54abea7f1f6eb25c4276)
- https://huggingface.co/datasets/PrentisAI/GroundGUI_RL/raw/main/README.md (retrieved 2026-10-17T01:48:10Z; SHA-256 34f0025f686d0e48e2baa5244056a4362018aaad77ac54abea7f1f6eb25c4276)

---

## Grounding-Anything-GUI

The public training archive linked by the Phi-Ground project for its Phi-Ground-Any model.

- Catalog URL: https://awesomecua.com/resources/url-d1830de02226155ee16d/
- Original source: https://huggingface.co/datasets/Miaosen/Grounding-Anything-GUI
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, data-generation
- Evidence checked: 2026-10-17T02:42:32Z
- ID: url:d1830de02226155ee16d

### Limitations

The Hub exposes train.zip and a card containing only license/language metadata. The official repository marks this training-data release complete, but its Phi-Ground-Any paper is still pending. No binding to the earlier Phi-Ground paper, sample count, split structure or operating-system coverage is inferred.

- Record JSON: https://awesomecua.com/resources/url-d1830de02226155ee16d/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/Miaosen/Grounding-Anything-GUI
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/Miaosen/Grounding-Anything-GUI (retrieved 2026-10-17T02:42:32Z; SHA-256 c64f72eae3dd50d28996f99ab744a5093896e8bb29caa6f7b33a2f60a0b530a5)
- https://huggingface.co/datasets/Miaosen/Grounding-Anything-GUI/raw/main/README.md (retrieved 2026-10-17T02:42:32Z; SHA-256 31b964cfd198f99491f0f480024b2322fbdf3a237f7806847e83978109bc5856)
- https://raw.githubusercontent.com/microsoft/Phi-Ground/HEAD/README.md (retrieved 2026-10-16T06:36:00Z; SHA-256 a0609394a736dc495d077cd57a2945b018123e5b3f9514d7d5bafb9e690aeae2)
- https://huggingface.co/api/datasets/Miaosen/Grounding-Anything-GUI (retrieved 2026-10-17T02:42:32Z; SHA-256 c64f72eae3dd50d28996f99ab744a5093896e8bb29caa6f7b33a2f60a0b530a5)

---

## GUI-360

Desktop GUI trajectory data supporting multiple interface understanding tasks.

- Catalog URL: https://awesomecua.com/resources/url-0b590d03a3d5103a79e4/
- Original source: https://huggingface.co/datasets/vyokky/GUI-360
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, windows
- Topics: grounding, data-generation
- Evidence checked: 2026-10-16T06:38:26Z
- ID: url:0b590d03a3d5103a79e4

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/url-0b590d03a3d5103a79e4/record.json

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/vyokky/GUI-360
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/vyokky/GUI-360 (retrieved 2026-10-16T06:38:26Z; SHA-256 e51af2845c2f31c7af112579b42c3ff9bf5a2c2356e80932e829bc2be1a341bd)
- https://huggingface.co/api/datasets/vyokky/GUI-360 (retrieved 2026-10-16T06:38:26Z; SHA-256 e51af2845c2f31c7af112579b42c3ff9bf5a2c2356e80932e829bc2be1a341bd)

---

## GUI-Action Narrator

Action narration resources for GUI interaction trajectories.

- Catalog URL: https://awesomecua.com/resources/github-showlab-gui-action-narrator/
- Original source: https://github.com/showlab/GUI-Action-Narrator
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: data-generation, video
- Evidence checked: 2026-10-16T06:40:52Z
- ID: github:showlab/gui-action-narrator

### Limitations

Original repository URL redirects to showlab/GUI-Narrator.

- Record JSON: https://awesomecua.com/resources/github-showlab-gui-action-narrator/record.json

### Structured profile

- formats: not recorded
- modalities: GUI video, action captions
- splits: not recorded
- supervision: GUI action captioning

#### Count observations

- 4,189 video-captioning samples — Act2Cap benchmark described in the paper (reported; source: https://arxiv.org/abs/2406.13719)

A captioning sample is not necessarily a unique video or complete task trajectory. Package layout and split sizes were not established by the inspected sources.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://github.com/showlab/GUI-Action-Narrator (retrieved 2026-10-16T06:40:52Z; SHA-256 379aae1a8890a0c3d3b5999589b8338338cf1ea63883c2b77df678fd3bb367a2)
- https://export.arxiv.org/api/query?id_list=2406.12814%2C2406.13719%2C2406.14056%2C2406.14250%2C2406.14314%2C2406.18082%2C2406.19263%2C2407.00993%2C2407.01476%2C2407.01489%2C2407.01511%2C2407.01558%2C2407.03037%2C2407.03913%2C2407.04346%2C2407.05291%2C2407.07061%2C2407.08850%2C2407.09018%2C2407.09295%2C2407.10956%2C2407.13032%2C2407.13063%2C2407.15673%2C2407.15711%2C2407.16741%2C2407.17490%2C2407.18901%2C2407.19056%2C2407.20183%2C2408.00203%2C2408.02544%2C2408.06327%2C2408.07199%2C2408.11824%2C2408.15978%2C2409.02453%2C2409.04566%2C2409.07429%2C2409.08264%2C2409.09354%2C2409.10741%2C2409.11295%2C2409.13711%2C2409.14337%2C2409.14818%2C2409.15441%2C2409.15637%2C2409.17140%2C2409.20566&max_results=50 (retrieved 2026-10-16T06:31:32Z; SHA-256 b9a83994d8ac36ccdb606a5219511f8bb35ad3948ade4f9f3e28d386221aedfb)

---

## GUI-Actor data

A processed screenshot and bounding-box collection released for training GUI-Actor visual grounding models.

- Catalog URL: https://awesomecua.com/resources/url-66096ad4057a3d3726f5/
- Original source: https://huggingface.co/datasets/cckevinn/GUI-Actor-Data
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, data-generation
- Evidence checked: 2026-10-17T02:42:32Z
- ID: url:66096ad4057a3d3726f5

### Limitations

Public JSON annotations and image archives are present. The card has no data-license declaration. Its source list contains mismatched hyperlinks and says six datasets while naming fewer distinct entries; no source-derivation relationships or aggregate count are imported from that list.

- Record JSON: https://awesomecua.com/resources/url-66096ad4057a3d3726f5/record.json

### Structured profile

- formats: JSON annotations, ZIP image packages, multipart image archives
- modalities: GUI screenshots, bounding boxes, grounding annotations
- splits: training
- supervision: GUI grounding with bounding-box supervision

#### Count observations

No count recorded.

Public Hub revision 5a0b35fb includes six bbox JSON files and associated image archives. The training configuration names six input paths with sampling_strategy=all; those input paths are not six disjoint datasets or a verified example count. The card’s source-list wording and mismatched hyperlinks remain unresolved, so its approximately 1M screenshots/10M elements headline is not adopted as a release inventory. No data license is established by the card, and the model repository license is not transferred to these data.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/cckevinn/GUI-Actor-Data/raw/main/README.md (retrieved 2026-10-17T02:42:32Z; SHA-256 e42bbcf8d466c977f9b2150feb73d8cbda2ff907c279630ad4730a8b1f5d665c)
- https://huggingface.co/api/datasets/cckevinn/GUI-Actor-Data (retrieved 2026-10-17T02:42:32Z; SHA-256 d6271cff879b1a2a70490cf3dd95765bef44ecfca531d8ef3545f101673b4423)
- https://raw.githubusercontent.com/microsoft/GUI-Actor/HEAD/README.md (retrieved 2026-10-16T06:36:00Z; SHA-256 2dafdebf2fa1e0a5db871addd103e50cb55625f0108c757708029e885920ee4e)
- https://raw.githubusercontent.com/microsoft/GUI-Actor/HEAD/data/data_config.yaml (retrieved 2026-10-17T14:21:12Z; SHA-256 3521c849b29d7fc88430a8e73a8b2aeb2e613d7fa16ca054dd5bf4ec011b36ca)

---

## GUI-CIDER causal knowledge data

A published JSONL corpus of synthesized planning and causal knowledge for GUI-agent mid-training, linked directly from the official GUI-CIDER project.

- Catalog URL: https://awesomecua.com/resources/url-d0300db5ba754b1a64fa/
- Original source: https://huggingface.co/datasets/wuuuuuz/GUI-CIDER
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: data-generation, imitation-learning, planning
- Evidence checked: 2026-10-17T11:18:20Z
- ID: url:d0300db5ba754b1a64fa

### Limitations

The official project explicitly links this corpus, and the ungated Hub API lists GUI-CIDER.jsonl. The repository has no README card at the Hub (404); purpose and Android context are therefore supported by the project README and dataset guide, while the API supports only identity/file availability. No sample count, split inventory, or data license was established. The project README’s MIT badge is not transferred to this data artifact.

- Record JSON: https://awesomecua.com/resources/url-d0300db5ba754b1a64fa/record.json

### Structured profile

- formats: JSONL
- modalities: text
- splits: not recorded
- supervision: synthesized static planning knowledge, synthesized dynamic causal knowledge

#### Count observations

No count recorded.

Purpose is established by the official project, not by API tags. No sample records were downloaded; count and data-license fields remain unknown.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Wuzheng02/GUI-CIDER/HEAD/README.md (retrieved 2026-10-17T11:18:20Z; SHA-256 9a46741bbde1373ed4b87887cdadde98e05ea8795d34efe39fc25d69b4d50213)
- https://huggingface.co/api/datasets/wuuuuuz/GUI-CIDER (retrieved 2026-10-17T11:23:07Z; SHA-256 aec6da0e872092d737953f8b4db227867024da10e127cd32d15d05ff95552d45)
- https://raw.githubusercontent.com/Wuzheng02/GUI-CIDER/HEAD/data/dataset.md (retrieved 2026-10-17T11:24:47Z; SHA-256 bffca456e649a08239f6a1a3be10a7d7c21bcb427e783ba2c304e4b8410d385a)

---

## GUI-Drag

Data for learning text-dragging interactions in graphical interfaces.

- Catalog URL: https://awesomecua.com/resources/url-aa28e1329a52e341d285/
- Original source: https://huggingface.co/datasets/osunlp/GUI-Drag-dataset
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding
- Evidence checked: 2026-10-16T06:38:26Z
- ID: url:aa28e1329a52e341d285

### Limitations

The card links its paper (arXiv 2601.06031) and code repository (OSU-NLP-Group/GUI-Drag). Neither is a reviewed catalog record yet, so no relation is recorded.

- Record JSON: https://awesomecua.com/resources/url-aa28e1329a52e341d285/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/osunlp/GUI-Drag-dataset
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/osunlp/GUI-Drag-dataset (retrieved 2026-10-16T06:38:26Z; SHA-256 cdb8be8c4692a8ddcf8a66c1f0be666a9214718445925fb3c88615a0d641bf3a)
- https://huggingface.co/datasets/osunlp/GUI-Drag-dataset/raw/main/README.md (retrieved 2026-10-17T16:10:54Z; SHA-256 907c8a5169c180491ef8c26c9428b2c67bc4e26f472d6423ce3715cbe47f76ef)
- https://huggingface.co/api/datasets/osunlp/GUI-Drag-dataset (retrieved 2026-10-16T06:38:26Z; SHA-256 cdb8be8c4692a8ddcf8a66c1f0be666a9214718445925fb3c88615a0d641bf3a)

---

## GUI-Lasagne L1

The published GUI-Lasagne training-data collection used for SpiritSight, distributed as dated archive shards for visual interface learning.

- Catalog URL: https://awesomecua.com/resources/url-0c5659ca9e59d942aea3/
- Original source: https://huggingface.co/datasets/SenseLLM/GUI-Lasagne-L1
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, screen-understanding, data-generation
- Evidence checked: 2026-10-17T02:02:28Z
- ID: url:0c5659ca9e59d942aea3

### Limitations

Public archive shards are present. The dataset card declares Apache-2.0; it does not resolve rights in third-party interface content. The short card supplies no reliable sample count or explicit train/test partition, so these remain unspecified. The dataset card and archive inventory do not establish its platform distribution; the associated model's platform coverage is not inherited. An associated SpiritSight model card still describes dataset release as forthcoming; the independent dataset card and public archive manifest establish this release's availability.

- Record JSON: https://awesomecua.com/resources/url-0c5659ca9e59d942aea3/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/SenseLLM/GUI-Lasagne-L1/raw/main/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/SenseLLM/GUI-Lasagne-L1/raw/main/README.md (retrieved 2026-10-17T02:02:28Z; SHA-256 270b3af0904a2a50d040948100a327458839dffa5083fc74bb030298f5ab3985)
- https://huggingface.co/api/datasets/SenseLLM/GUI-Lasagne-L1 (retrieved 2026-10-17T02:02:28Z; SHA-256 224d6487de47cc63251c3b5c5c9f6e75e692b5ef0e12f0a7f71000da0b866e6f)
- https://huggingface.co/SenseLLM/SpiritSight-Agent-8B/raw/main/README.md (retrieved 2026-10-17T02:02:28Z; SHA-256 916bde91ff00aba22ff13ed3d8b4ca679bc8c198632f1d3bc9469660287cb5d3)
- https://huggingface.co/datasets/SenseLLM/GUI-Lasagne-L1/raw/main/README.md (retrieved 2026-10-17T02:02:28Z; SHA-256 270b3af0904a2a50d040948100a327458839dffa5083fc74bb030298f5ab3985)

---

## GUI-Net-1M

A TongUI-collected training corpus from multimodal web tutorials, distributed as annotation files and split screenshot archives for GUI trajectory supervision.

- Catalog URL: https://awesomecua.com/resources/url-8c9aaafb918aaf8b4e92/
- Original source: https://huggingface.co/datasets/Bofeee5675/GUI-Net-1M
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: data-generation, grounding, imitation-learning
- Evidence checked: 2026-10-17T12:30:54Z
- ID: url:8c9aaafb918aaf8b4e92

### Limitations

The ungated manifest lists JSON annotations and multipart image archives. Training documentation describes roughly one million collected training trajectories from Wikihow, Baidu Experience and GUI videos; this is distinct from larger mixtures that add external datasets. Platform-specific distribution and exact row counts were not established from this release metadata. Apache-2.0 is the publisher dataset declaration, without a grant of additional rights to upstream tutorial content. No image archive or example record was downloaded.

- Record JSON: https://awesomecua.com/resources/url-8c9aaafb918aaf8b4e92/record.json

### Structured profile

- formats: JSON annotations, multipart image archives
- modalities: text, screenshots
- splits: training collection
- supervision: GUI trajectory supervision from multimodal tutorials

#### Count observations

- ≈ 1,000,000 training trajectories — TongUI-collected GUI-Net-1M data, excluding added external mixtures (reported; source: https://raw.githubusercontent.com/TongUI-agent/TongUI-agent/HEAD/docs/train.md)

The source reports an approximate trajectory total; it does not establish per-platform counts or a complete test-split inventory.

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/Bofeee5675/GUI-Net-1M/raw/main/README.md
- document: not recorded
- weights: not recorded

- data review: Publisher declaration for this dataset packaging; original web/tutorial materials retain applicable rights.
  Sources: https://huggingface.co/datasets/Bofeee5675/GUI-Net-1M/raw/main/README.md

### Primary evidence

- https://raw.githubusercontent.com/TongUI-agent/TongUI-agent/HEAD/README.md (retrieved 2026-10-17T12:30:54Z; SHA-256 f30a18d1a533b8f71f436dae2ee7369f8971422bd76527e069499c5bba911912)
- https://huggingface.co/api/datasets/Bofeee5675/GUI-Net-1M (retrieved 2026-10-17T12:32:07Z; SHA-256 314a77eb0ba43bedffbe6869601e41aea41993eaca59d86ba346652c853802d2)
- https://raw.githubusercontent.com/TongUI-agent/TongUI-agent/HEAD/docs/train.md (retrieved 2026-10-17T12:36:55Z; SHA-256 b51acb70c95d079ccbe1de0a685ad7c8a4b3b5bed11e6162e6f7c2f60d78805e)
- https://huggingface.co/datasets/Bofeee5675/GUI-Net-1M/raw/main/README.md (retrieved 2026-10-17T12:32:07Z; SHA-256 c2df5c3a6dd576ae53f0dc0f72ecab07d93ed034b04336abd2072a6f0d812c64)

---

## GUI-Odyssey

Human-demonstrated Android episodes for cross-app navigation, spanning six task types, 212 apps and about 1,400 app combinations, for training and evaluating agents.

- Catalog URL: https://awesomecua.com/resources/github-opengvlab-gui-odyssey/
- Original source: https://github.com/OpenGVLab/GUI-Odyssey
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: cross-app, data-generation
- Evidence checked: 2026-10-16T06:36:01Z
- ID: github:opengvlab/gui-odyssey

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-opengvlab-gui-odyssey/record.json

### Structured profile

- formats: JSON annotations, PNG screenshots
- modalities: screenshots, instructions, actions, bounding boxes, step context
- splits: random, task, device, app
- supervision: cross-app trajectories, action grounding

#### Count observations

- 8,334 episodes — recommended hflqf88888/GUIOdyssey release (reported; source: https://huggingface.co/datasets/hflqf88888/GUIOdyssey/raw/main/README.md)

The repository gives conflicting episode totals (8,334 and 8,834). This profile uses 8,334 from the specifically recommended current dataset card. No independent archive recount was performed. Coordinates are normalized to 0–1000.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/OpenGVLab/GUI-Odyssey/HEAD/README.md (retrieved 2026-10-16T06:36:01Z; SHA-256 4585b765d7c8b3e9bb6187d36d576edde454d4c0158a6aa8b3fdbedf34c89a15)
- https://huggingface.co/datasets/hflqf88888/GUIOdyssey/raw/main/README.md (retrieved 2026-10-16T11:39:52Z; SHA-256 fd627ee0a6ee0596e0ee8147996b9a7a3436f754fc95ed63cf5f408d778b2831)
- https://raw.githubusercontent.com/OpenGVLab/GUI-Odyssey/HEAD/introduction.md (retrieved 2026-10-16T11:39:52Z; SHA-256 78c19ee712487af60df1913f11572958564e59a1a2cc663b1b30d971855d7a28)

---

## GUI-R1 data bundle

Training and evaluation Parquet bundles accompanying GUI-R1, including GUI grounding and mobile/web action-prediction data.

- Catalog URL: https://awesomecua.com/resources/url-df680385f18b01a825be/
- Original source: https://huggingface.co/datasets/ritzzai/GUI-R1
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, windows, linux, macos, android, web
- Topics: grounding, reinforcement-learning, evaluation
- Evidence checked: 2026-10-17T02:42:32Z
- ID: url:df680385f18b01a825be

### Limitations

The Hub is a dataset repository with Parquet payloads, although the short card mistakenly calls it a model. The official project identifies it as training/evaluation data and describes subsequent expanded mixtures. MIT is declared in this dataset card; upstream dataset terms remain separate. No 3K/800K aggregate count is inferred for the mutable bundle.

- Record JSON: https://awesomecua.com/resources/url-df680385f18b01a825be/record.json

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/ritzzai/GUI-R1/raw/main/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/ritzzai/GUI-R1/raw/main/README.md (retrieved 2026-10-17T02:42:32Z; SHA-256 7b14996d1a99675990cb2f3aeada2b2f9898f9daee46d3680988e16f6365abe3)
- https://huggingface.co/api/datasets/ritzzai/GUI-R1 (retrieved 2026-10-17T02:42:32Z; SHA-256 f31ae9547d94967dd91f5cde5e5c66430d7d59ee3a525c0914bc600a79999af7)
- https://raw.githubusercontent.com/ritzz-ai/GUI-R1/HEAD/README.md (retrieved 2026-10-16T10:43:11Z; SHA-256 94c7c78bede11dde727940f56592a04594c1c59438812dff47540bf53c1bed7d)
- https://huggingface.co/datasets/ritzzai/GUI-R1/raw/main/README.md (retrieved 2026-10-17T02:42:32Z; SHA-256 7b14996d1a99675990cb2f3aeada2b2f9898f9daee46d3680988e16f6365abe3)

---

## GUI-World

GUI video benchmark and training data covering six scenarios, from Android and iOS to websites and XR, with eight question types for image and video LLMs and the GUI-Vid model.

- Catalog URL: https://awesomecua.com/resources/github-dongping-chen-gui-world/
- Original source: https://github.com/Dongping-Chen/GUI-World
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: video, screen-understanding
- Evidence checked: 2026-10-16T06:40:52Z
- ID: github:dongping-chen/gui-world

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-dongping-chen-gui-world/record.json

### Structured profile

- formats: not recorded
- modalities: videos, frame images, text
- splits: train, test
- supervision: GUI video question answering, temporal interface understanding

#### Count observations

- 6 GUI scenario categories — dataset taxonomy (reported; source: https://raw.githubusercontent.com/Dongping-Chen/GUI-World/master/Readme.md)
- 8 question types — dataset taxonomy (reported; source: https://raw.githubusercontent.com/Dongping-Chen/GUI-World/master/Readme.md)

Taxonomy counts describe coverage, not the number of videos or questions. Cases include Android, iOS, desktop software, websites, multi-application use, and XR. Keyframe-selection settings affect evaluation; exact sample inventories are not reported here.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://github.com/Dongping-Chen/GUI-World (retrieved 2026-10-16T06:40:52Z; SHA-256 d02fa5da3384a3e58cf1d28aad47497de73fe3aad0ce57219585da04fc3187ef)
- https://raw.githubusercontent.com/Dongping-Chen/GUI-World/master/Readme.md (retrieved 2026-10-17T02:03:23Z; SHA-256 905bf69ce80c866377841474cefe08f85ec4ef552cdd9ffeb2fb1531e07370b6)
- https://huggingface.co/datasets/ONE-Lab/GUI-World/raw/main/README.md (retrieved 2026-10-17T02:06:30Z; SHA-256 d2dd5886bce90f6eaee880719c79a6ede6ec0eaa08da32d7610bde656b8dc9ed)
- https://export.arxiv.org/api/query?id_list=2403.03186%2C2403.03788%2C2403.07718%2C2403.10170%2C2403.11905%2C2403.16971%2C2403.17918%2C2403.20271%2C2404.01549%2C2404.01744%2C2404.02475%2C2404.03648%2C2404.05427%2C2404.05719%2C2404.05955%2C2404.06474%2C2404.07972%2C2404.08755%2C2404.08860%2C2404.08948%2C2404.09992%2C2404.10887%2C2404.11459%2C2404.16006%2C2404.16048%2C2404.16054%2C2404.16660%2C2404.18074%2C2404.19296%2C2405.00516%2C2405.11120%2C2405.12842%2C2405.14573%2C2405.14751%2C2405.15793%2C2405.16247%2C2405.20309%2C2406.01014%2C2406.01623%2C2406.03679%2C2406.06947%2C2406.07822%2C2406.08184%2C2406.08340%2C2406.08451%2C2406.10227%2C2406.10819%2C2406.11317%2C2406.11896%2C2406.12373&max_results=50 (retrieved 2026-10-16T06:31:28Z; SHA-256 be244bfae7f89ef9449b69d85aac44295eb7b5f7e5e1bbedd76df312696676a7)

---

## GUIAct

Web and Android GUI action-instruction data, with single-step, multi-step and smartphone partitions.

- Catalog URL: https://awesomecua.com/resources/url-6cd150ec23361b4d2e84/
- Original source: https://huggingface.co/datasets/yiye2023/GUIAct
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web, android
- Topics: grounding, data-generation
- Evidence checked: 2026-10-16T06:36:01Z
- ID: url:6cd150ec23361b4d2e84

### Limitations

Public JSON annotations and Parquet image packages are present. The project README declares CC-BY-4.0 for datasets, while this Hub card declares Apache-2.0; these conflicting declarations are retained without asserting a single confirmed data license. The project code’s MIT declaration is separate.

- Record JSON: https://awesomecua.com/resources/url-6cd150ec23361b4d2e84/record.json

### Structured profile

- formats: JSON, Parquet
- modalities: screenshots, instructions, actions
- splits: train, test
- supervision: single-step actions, multi-step navigation

#### Count observations

- ≈ 67,000 action instructions — single-step portion (reported; source: https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md)
- ≈ 15,000 action instructions — multi-step portion (reported; source: https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md)

Quantities are rounded publisher descriptions, not downloaded sample counts. Data-license declarations conflict across first-party sources; no permissive license is inferred.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: Conflicting first-party dataset declarations: the GUICourse project README assigns CC-BY-4.0 to the datasets, while this exact Hub card declares Apache-2.0. The code MIT declaration does not resolve the data conflict.
  Sources: https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md, https://huggingface.co/datasets/yiye2023/GUIAct/raw/main/README.md

### Primary evidence

- https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md (retrieved 2026-10-16T06:36:01Z; SHA-256 0968273442bfb9a6478fe78f8b9a6247a3bb8e6d028880939b432fd009961e98)
- https://huggingface.co/api/datasets/yiye2023/GUIAct (retrieved 2026-10-17T04:01:33Z; SHA-256 624ccdd6e6c5b29b588a4289d1d94c1a1c0803868bd586175f2c9ebc3bfdd0b6)
- https://huggingface.co/datasets/yiye2023/GUIAct/raw/main/README.md (retrieved 2026-10-17T04:01:33Z; SHA-256 98b45ea81164d1e1a1dd82255207053b15cd6c69d922a1c5cf3387ce604d4b74)

---

## GUIChat

Conversational GUI supervision with text-rich images and bounding boxes, organized as single-turn questions and multi-turn dialogues.

- Catalog URL: https://awesomecua.com/resources/url-edf38d43800be8c955ae/
- Original source: https://huggingface.co/datasets/yiye2023/GUIChat
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, data-generation
- Evidence checked: 2026-10-16T06:36:01Z
- ID: url:edf38d43800be8c955ae

### Limitations

Public JSON annotations and Parquet image packages are present. The project README declares CC-BY-4.0 for datasets, while this Hub card declares Apache-2.0; these conflicting declarations are retained without asserting a single confirmed data license. The project code’s MIT declaration is separate.

- Record JSON: https://awesomecua.com/resources/url-edf38d43800be8c955ae/record.json

### Structured profile

- formats: JSON, Parquet
- modalities: screenshots, text, bounding boxes
- splits: not recorded
- supervision: single-turn question answering, multi-turn dialogue

#### Count observations

- ≈ 44,000 QA pairs — single-turn portion (reported; source: https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md)
- ≈ 6,000 dialogues — multi-turn portion (reported; source: https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md)

Quantities are rounded publisher descriptions, not downloaded sample counts. Data-license declarations conflict across first-party sources; no permissive license is inferred.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: Conflicting first-party dataset declarations: the GUICourse project README assigns CC-BY-4.0 to the datasets, while this exact Hub card declares Apache-2.0. The code MIT declaration does not resolve the data conflict.
  Sources: https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md, https://huggingface.co/datasets/yiye2023/GUIChat/raw/main/README.md

### Primary evidence

- https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md (retrieved 2026-10-16T06:36:01Z; SHA-256 0968273442bfb9a6478fe78f8b9a6247a3bb8e6d028880939b432fd009961e98)
- https://huggingface.co/api/datasets/yiye2023/GUIChat (retrieved 2026-10-17T04:01:33Z; SHA-256 3ccb4a9ded4f45aa334f0df5dc9a0f8963c645857e8442c46efe1d9cf4a4360b)
- https://huggingface.co/datasets/yiye2023/GUIChat/raw/main/README.md (retrieved 2026-10-17T04:01:33Z; SHA-256 4bcf87ecfbbb8e07a01b21415a970c8b53a5283bf6872b657040d3f45c9241f7)

---

## GUICourse

Three datasets for turning general VLMs into GUI agents: GUIEnv for OCR and grounding, GUIAct with 67k single-step and 15k multi-step web and Android actions, and GUIChat dialogues.

- Catalog URL: https://awesomecua.com/resources/github-yiye3-guicourse/
- Original source: https://github.com/yiye3/GUICourse
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: data-generation
- Evidence checked: 2026-10-16T06:36:01Z
- ID: github:yiye3/guicourse

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-yiye3-guicourse/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md (retrieved 2026-10-16T06:36:01Z; SHA-256 0968273442bfb9a6478fe78f8b9a6247a3bb8e6d028880939b432fd009961e98)

---

## GUIEnv-local

The released local-supervision portion of GUIEnv, pairing webpage regions and text for OCR and GUI grounding.

- Catalog URL: https://awesomecua.com/resources/url-0af07e00658a430cee6a/
- Original source: https://huggingface.co/datasets/yiye2023/GUIEnv
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: grounding, data-generation
- Evidence checked: 2026-10-16T06:36:01Z
- ID: url:0af07e00658a430cee6a

### Limitations

Public JSON annotations and Parquet image packages are present. The project README declares CC-BY-4.0 for datasets, while this Hub card declares Apache-2.0; these conflicting declarations are retained without asserting a single confirmed data license. The project code’s MIT declaration is separate. Only GUIEnv-local is marked released; the advertised 10M-example GUIEnv-global pretraining collection is still unchecked and is not counted here.

- Record JSON: https://awesomecua.com/resources/url-0af07e00658a430cee6a/record.json

### Structured profile

- formats: JSON, Parquet
- modalities: screenshots, text, bounding boxes
- splits: train, test
- supervision: OCR, region-text grounding

#### Count observations

- ≈ 700,000 region-text QA pairs — GUIEnv-local SFT data (reported; source: https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md)

Quantities are rounded publisher descriptions, not downloaded sample counts. Data-license declarations conflict across first-party sources; no permissive license is inferred.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: Conflicting first-party dataset declarations: the GUICourse project README assigns CC-BY-4.0 to the datasets, while this exact Hub card declares Apache-2.0. The code MIT declaration does not resolve the data conflict.
  Sources: https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md, https://huggingface.co/datasets/yiye2023/GUIEnv/raw/main/README.md

### Primary evidence

- https://raw.githubusercontent.com/yiye3/GUICourse/HEAD/README.md (retrieved 2026-10-16T06:36:01Z; SHA-256 0968273442bfb9a6478fe78f8b9a6247a3bb8e6d028880939b432fd009961e98)
- https://huggingface.co/api/datasets/yiye2023/GUIEnv (retrieved 2026-10-17T04:01:33Z; SHA-256 15813be05dc76aed5f667875188bf9612e74ff2f4699d270dd0d1aeda86767f8)
- https://huggingface.co/datasets/yiye2023/GUIEnv/raw/main/README.md (retrieved 2026-10-17T04:01:33Z; SHA-256 4bcf87ecfbbb8e07a01b21415a970c8b53a5283bf6872b657040d3f45c9241f7)

---

## GUIMid training data

A released GUI-agent mid-training mixture and supporting domain datasets, together with a post-training trajectory file and image archives for web and mobile interaction.

- Catalog URL: https://awesomecua.com/resources/url-422010da7a5c845a18f6/
- Original source: https://huggingface.co/datasets/hkust-nlp/GUIMid
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web, android
- Topics: imitation-learning, planning, screen-understanding
- Evidence checked: 2026-10-17T11:23:07Z
- ID: url:422010da7a5c845a18f6

### Limitations

The public manifest includes GUIMid.json, mavis.tar.gz, GUI_trajectory.json, traj.tar.gz and domain-specific JSON files. The card says image data for some individual domains is still forthcoming and its overview inconsistently says nine tasks while later enumerating seven vision-language plus four language-only domains; no aggregate task/sample count is inferred. Training code remains marked coming soon in the repository. MIT is the publisher dataset declaration, not a relicensing of all upstream content.

- Record JSON: https://awesomecua.com/resources/url-422010da7a5c845a18f6/record.json

### Structured profile

- formats: JSON, tar.gz image archives
- modalities: text, images
- splits: train configurations for named mid-training domains
- supervision: mid-training instruction supervision, GUI post-training trajectories

#### Count observations

No count recorded.

Do not treat Hub size bands or the inconsistent introductory task count as a sample total. Some constituent-domain image packages remain forthcoming.

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/hkust-nlp/GUIMid/raw/main/README.md
- document: not recorded
- weights: not recorded

- data review: Publisher dataset-card declaration for the released packaging; original source datasets retain their own terms.
  Sources: https://huggingface.co/datasets/hkust-nlp/GUIMid/raw/main/README.md

### Primary evidence

- https://huggingface.co/datasets/hkust-nlp/GUIMid/raw/main/README.md (retrieved 2026-10-17T11:23:07Z; SHA-256 1cdf702c819ecf370f4191c6c71fae7b579cfbaf766908b42156964a69eddacc)
- https://huggingface.co/api/datasets/hkust-nlp/GUIMid (retrieved 2026-10-17T11:23:07Z; SHA-256 ededa2b3c8f21af8188152b028758c800db76cdbb8461ba82b8574cab375914e)
- https://api.github.com/repos/hkust-nlp/GUIMid (retrieved 2026-10-17T11:18:19Z; SHA-256 31b836da66c6907ff9a75ebc7f06da0db67e7d9fe9ca92d0c770f5f15f90a39e)
- https://raw.githubusercontent.com/hkust-nlp/GUIMid/HEAD/README.md (retrieved 2026-10-17T11:18:19Z; SHA-256 d9f63a03088c37f7145725c7a182100d1593fceadd26a9bf817d434ca8d6297e)

---

## GUIOdyssey — current data release

Cross-app Android interaction episodes with fine-grained step instructions, screen descriptions, action context, and target boxes.

- Catalog URL: https://awesomecua.com/resources/url-511903ebfac45e6751b2/
- Original source: https://huggingface.co/datasets/hflqf88888/GUIOdyssey
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation, cross-app, data-generation
- Evidence checked: 2026-10-16T11:39:52Z
- ID: url:511903ebfac45e6751b2

### Limitations

The project recommends this release over its earlier OpenGVLab/GUI-Odyssey upload. Episode count follows the current data card; conflicting repository prose is documented in the profile.

- Record JSON: https://awesomecua.com/resources/url-511903ebfac45e6751b2/record.json

### Structured profile

- formats: JSON annotations, PNG screenshots
- modalities: screenshots, instructions, actions, bounding boxes, step context
- splits: random, task, device, app
- supervision: cross-app trajectories, action grounding

#### Count observations

- 8,334 episodes — recommended hflqf88888/GUIOdyssey release (reported; source: https://huggingface.co/datasets/hflqf88888/GUIOdyssey/raw/main/README.md)

The repository gives conflicting episode totals (8,334 and 8,834). This profile uses 8,334 from the specifically recommended current dataset card. No independent archive recount was performed. Coordinates are normalized to 0–1000.

### License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/hflqf88888/GUIOdyssey/raw/main/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/hflqf88888/GUIOdyssey/raw/main/README.md (retrieved 2026-10-16T11:39:52Z; SHA-256 fd627ee0a6ee0596e0ee8147996b9a7a3436f754fc95ed63cf5f408d778b2831)
- https://raw.githubusercontent.com/OpenGVLab/GUI-Odyssey/HEAD/README.md (retrieved 2026-10-16T06:36:01Z; SHA-256 4585b765d7c8b3e9bb6187d36d576edde454d4c0158a6aa8b3fdbedf34c89a15)
- https://raw.githubusercontent.com/OpenGVLab/GUI-Odyssey/HEAD/introduction.md (retrieved 2026-10-16T11:39:52Z; SHA-256 78c19ee712487af60df1913f11572958564e59a1a2cc663b1b30d971855d7a28)
- https://huggingface.co/datasets/hflqf88888/GUIOdyssey/raw/main/README.md (retrieved 2026-10-16T11:39:52Z; SHA-256 fd627ee0a6ee0596e0ee8147996b9a7a3436f754fc95ed63cf5f408d778b2831)

---

## Jedi

Synthetic GUI grounding data associated with UI decomposition research and the OSWorld-G benchmark.

- Catalog URL: https://awesomecua.com/resources/url-e062cf1445eaee0f3ade/
- Original source: https://huggingface.co/datasets/xlangai/Jedi
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop
- Topics: grounding, data-generation
- Evidence checked: 2026-10-16T09:33:18Z
- ID: url:e062cf1445eaee0f3ade

### Limitations

The dataset card requires coordinate scaling to stay aligned with the image processor. Follow the publisher recipe before using the grounding labels.

- Record JSON: https://awesomecua.com/resources/url-e062cf1445eaee0f3ade/record.json

### Structured profile

- formats: not recorded
- modalities: images, text, coordinates
- splits: not recorded
- supervision: icon grounding, component grounding, layout grounding, refusal

#### Count observations

No count recorded.

Coordinates were resized for a specified Qwen2.5-VL image processor and must remain aligned with image resizing. AGUVIS++ material requires images from upstream AGUVIS and OS-Atlas releases; this repository is not a self-contained copy of every referenced image collection.

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/xlangai/Jedi
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/xlangai/Jedi (retrieved 2026-10-16T09:33:18Z; SHA-256 63ff72bea0a2cb9218093d7a5a420b39c01861aef66141433d7c56c1e0ad05ad)
- https://huggingface.co/datasets/xlangai/Jedi/raw/main/README.md (retrieved 2026-10-17T02:02:38Z; SHA-256 1d4d15c0cd27837602d55f0fda1ed91d9e8a98b33b3e3c4ba64decae42399558)
- https://huggingface.co/api/datasets/xlangai/Jedi (retrieved 2026-10-16T09:33:18Z; SHA-256 63ff72bea0a2cb9218093d7a5a420b39c01861aef66141433d7c56c1e0ad05ad)

---

## Mobile3M

Pre-training corpus for Xiaomi's MobileVLM, distributed as per-app graph archives for mobile apps such as Baidu Map, QQ Music, Ctrip and Vipshop.

- Catalog URL: https://awesomecua.com/resources/url-b80bfa0a4939a493a11f/
- Original source: https://huggingface.co/datasets/xwk123/Mobile3M
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: screen-understanding
- Evidence checked: 2026-10-16T06:38:26Z
- ID: url:b80bfa0a4939a493a11f

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/url-b80bfa0a4939a493a11f/record.json

### Structured profile

- formats: 7z app-graph archives, multipart 7z files
- modalities: not recorded
- splits: partial training release
- supervision: mobile UI pretraining for MobileVLM

#### Count observations

No count recorded.

Official README calls this a partial training release and says app data will be uploaded gradually. Its training-JSON and test-data links point to separate Hub repositories; those artifacts are not counted as files or splits of xwk123/Mobile3M. Public revision 3df26694 lists app-graph archives; their names do not establish a three-million-example downloadable inventory. Precise inner record/modalities schema is not inspected. The card YAML says Apache-2.0 while its prose and official README assign CC-BY-NC-SA-4.0 to data and Apache to code; the existing data-license value remains unknown with the conflict documented.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: The retained first-party API has Apache-2.0 card metadata but its publisher description explicitly assigns Apache to source code and CC-BY-NC-SA-4.0 to the dataset. A single permissive dataset declaration is unresolved.
  Sources: https://huggingface.co/api/datasets/xwk123/Mobile3M

### Primary evidence

- https://huggingface.co/api/datasets/xwk123/Mobile3M (retrieved 2026-10-16T06:38:26Z; SHA-256 356a8dca28fa3dc46bc05b13eaf04a3db273e63c06be4fd15d0e87e0343c0824)
- https://huggingface.co/datasets/xwk123/Mobile3M/raw/3df26694ff9186604eb44a8e633894d3ece67ed9/README.md (retrieved 2026-10-17T14:10:01Z; SHA-256 8a097dbc7384d3743f262dc0164c176ed577bf720cbbc92ff8b3cd820d1aed4f)
- https://raw.githubusercontent.com/XiaoMi/mobilevlm/HEAD/README.md (retrieved 2026-10-17T14:22:04Z; SHA-256 e8a92a783b6b65cacedf105e5ede583668f8774f2a81a2005dc6897da6fa88ef)
- https://huggingface.co/api/datasets/xwk123/Mobile3M (retrieved 2026-10-16T06:38:26Z; SHA-256 356a8dca28fa3dc46bc05b13eaf04a3db273e63c06be4fd15d0e87e0343c0824)

---

## MobileViews

Over 600,000 Android screenshot and view-hierarchy pairs from more than 20,000 Google Play apps, collected with an optimized DroidBot, with complete per-app traces.

- Catalog URL: https://awesomecua.com/resources/url-cc4aa8caeee0cff58e73/
- Original source: https://huggingface.co/datasets/mllmTeam/MobileViews
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: screen-understanding
- Evidence checked: 2026-10-16T06:38:26Z
- ID: url:cc4aa8caeee0cff58e73

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/url-cc4aa8caeee0cff58e73/record.json

### Structured profile

- formats: JPEG, JSON, XML, Parquet, CSV, ZIP packages, HTML/JavaScript trace visualization
- modalities: screenshots, view hierarchies, action traces, app metadata
- splits: not recorded
- supervision: paired screenshot/view-hierarchy structure, recorded app states, actions and transitions

#### Count observations

- > 600,000 screenshot–view-hierarchy pairs — publisher-reported MobileViews-600K first release (reported; source: https://huggingface.co/datasets/mllmTeam/MobileViews/raw/c734715eb90a8f3ac0c80973f93ee63950e5a8c8/README.md)
- > 20,000 Android apps — publisher-reported MobileViews-600K first release (reported; source: https://huggingface.co/datasets/mllmTeam/MobileViews/raw/c734715eb90a8f3ac0c80973f93ee63950e5a8c8/README.md)

Counts describe the card’s first-release claim, not an independently counted archive inventory. The card distinguishes globally image-hash-deduplicated screenshot/VH pairs from the November 2024 complete-app traces; trace state counts must not be added as new unique screens. JPEG/JSON and Parquet are alternative representations. Listed filename ranges are examples, not a complete count proof. No train/validation/test split is documented. Hub revision c734715e is ungated; MIT is its data declaration, without resolving third-party app content rights.

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/mllmTeam/MobileViews
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/mllmTeam/MobileViews (retrieved 2026-10-16T06:38:26Z; SHA-256 d36d62283deecd3c5ccf1ac1af49aa7ba779a1d69cdcaea39a1bed37ff5d66b9)
- https://huggingface.co/datasets/mllmTeam/MobileViews/raw/c734715eb90a8f3ac0c80973f93ee63950e5a8c8/README.md (retrieved 2026-10-17T14:10:01Z; SHA-256 94a4f04e180dbd597c271b0d7470c907e6526b95a6420f01b3183feb1ee24d6e)
- https://huggingface.co/api/datasets/mllmTeam/MobileViews (retrieved 2026-10-16T06:38:26Z; SHA-256 d36d62283deecd3c5ccf1ac1af49aa7ba779a1d69cdcaea39a1bed37ff5d66b9)

---

## MONDAY

Cross-platform mobile GUI trajectory dataset derived from instructional videos, with released data-processing helpers and example evaluation code for Android and iOS data.

- Catalog URL: https://awesomecua.com/resources/github-runamu-monday/
- Original source: https://github.com/runamu/monday
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android, ios, cross-platform
- Topics: data-generation, mobile-navigation, video
- Evidence checked: 2026-10-18T10:59:55Z
- ID: github:runamu/monday

### Limitations

The retained README marks release of the full data-generation pipeline, training scripts, and model checkpoints as pending. Linked video content and datasets remain subject to their original licenses; the repository code license does not establish a blanket data or weights license.

- Record JSON: https://awesomecua.com/resources/github-runamu-monday/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/runamu/monday/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/runamu/monday/HEAD/README.md (retrieved 2026-10-18T10:59:55Z; SHA-256 cb3d2329571a80b6edeab98c04f8b63c7f4e976929788d6a8283238b0b7fdadc)
- https://raw.githubusercontent.com/runamu/monday/HEAD/LICENSE (retrieved 2026-10-18T11:03:47Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## MONDAY annotations

Video-derived mobile navigation annotations that pair scene boundaries and screen or element boxes with action labels for training and evaluating GUI agents.

- Catalog URL: https://awesomecua.com/resources/url-570654ff67ecefa2b955/
- Original source: https://huggingface.co/datasets/runamu/MONDAY
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android, ios
- Topics: data-generation, mobile-navigation, video, imitation-learning
- Evidence checked: 2026-10-17T12:32:07Z
- ID: url:570654ff67ecefa2b955

### Limitations

The ungated Hub publishes four Parquet splits containing video identifiers and annotations. Original videos and extracted screenshots must be obtained separately; the code README explains that consumers download source videos from YouTube. A Windows Mobile unseen-OS test split is documented but is not labeled desktop Windows here. The companion code has an Apache-2.0 file, while the data card declares no data license and the repository defers third-party materials to original terms. Training scripts, pretrained checkpoints and the full generation pipeline remain planned updates.

- Record JSON: https://awesomecua.com/resources/url-570654ff67ecefa2b955/record.json

### Structured profile

- formats: Parquet
- modalities: text, timestamps, bounding boxes, action labels
- splits: train, validation, test, test_unseen_os
- supervision: video-derived scene and action annotations

#### Count observations

- 19,725 video annotation records — train split (reported; source: https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md)
- 495 video annotation records — validation split (reported; source: https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md)
- 100 video annotation records — test split (reported; source: https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md)
- 50 video annotation records — test_unseen_os split (reported; source: https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md)
- ≈ 333,000 detected scenes — publisher overview of MONDAY (reported; source: https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md)
- ≈ 313,000 identified actions — publisher overview of MONDAY (reported; source: https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md)

Split counts are video-annotation rows; scene and action totals are rounded publisher reports and are not added to row counts. Source videos/images are not included in the Hub files.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: No dataset-license declaration in the inspected card; Apache-2.0 applies to companion code and is not transferred to YouTube content or this annotation package.
  Sources: https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md, https://raw.githubusercontent.com/runamu/monday/HEAD/README.md, https://raw.githubusercontent.com/runamu/monday/HEAD/LICENSE

### Primary evidence

- https://huggingface.co/datasets/runamu/MONDAY/raw/main/README.md (retrieved 2026-10-17T12:32:07Z; SHA-256 62a346fd0d328deb5b56a652c8581850b0c8120f5c77e53b33f24b9baf937adb)
- https://huggingface.co/api/datasets/runamu/MONDAY (retrieved 2026-10-17T12:32:07Z; SHA-256 f55c319a70c8ff988049363dc8fc266a9f1b1a09b8ac7096ee573f962e8f9492)
- https://raw.githubusercontent.com/runamu/monday/HEAD/README.md (retrieved 2026-10-17T12:30:53Z; SHA-256 cb3d2329571a80b6edeab98c04f8b63c7f4e976929788d6a8283238b0b7fdadc)
- https://raw.githubusercontent.com/runamu/monday/HEAD/LICENSE (retrieved 2026-10-17T12:34:09Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## MoTIF

Mobile task demonstrations and natural-language instructions.

- Catalog URL: https://awesomecua.com/resources/github-aburns4-motif/
- Original source: https://github.com/aburns4/MoTIF
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: mobile-navigation
- Evidence checked: 2026-10-16T06:36:01Z
- ID: github:aburns4/motif

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-aburns4-motif/record.json

### Structured profile

- formats: JSON metadata, screen images
- modalities: screenshots, view hierarchies, language, interaction sequences, feasibility labels
- splits: not recorded
- supervision: interaction trajectories, task feasibility

#### Count observations

No count recorded.

The raw collection mixes action, language, exploration, and unusable/other traces. These groups have different annotation coverage; not every raw trace is a valid task demonstration.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/aburns4/MoTIF/HEAD/README.md (retrieved 2026-10-16T06:36:01Z; SHA-256 4b2f5a23dc28e96b671272380b953e7fabaf34f4b1e83f3513643846718e3389)

---

## MT-Mind2Web

Multi-turn web-navigation conversations constructed from Mind2Web interactions, with dialogue turns, HTML snapshots, element candidates and click/type/select action sequences.

- Catalog URL: https://awesomecua.com/resources/url-bdfb50330deb97893ce4/
- Original source: https://huggingface.co/datasets/magicgh/MT-Mind2Web
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, imitation-learning, memory
- Evidence checked: 2026-10-17T12:34:10Z
- ID: url:bdfb50330deb97893ce4

### Limitations

The ungated Hub manifest contains train, test-task, test-website and test-subdomain JSON shards plus a candidate-ranking pickle file. Counts distinguish conversation sessions from dialogue turns; neither is a screenshot or action-step count. No pickle or sample data was loaded. The card declares CC-BY-4.0 and identifies the original Mind2Web interactions as its source.

- Record JSON: https://awesomecua.com/resources/url-bdfb50330deb97893ce4/record.json

### Structured profile

- formats: JSON, auxiliary PKL
- modalities: dialogue text, HTML, element candidates, actions
- splits: train, test_task, test_website, test_subdomain
- supervision: multi-turn web instruction following, element/action prediction

#### Count observations

- 600 conversations — train (reported; source: https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md)
- 34 conversations — test-task (reported; source: https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md)
- 42 conversations — test-website (reported; source: https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md)
- 44 conversations — test-subdomain (reported; source: https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md)
- 2,896 dialogue turns — train (reported; source: https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md)
- 191 dialogue turns — test-task (reported; source: https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md)
- 218 dialogue turns — test-website (reported; source: https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md)
- 216 dialogue turns — test-subdomain (reported; source: https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md)

Conversation, dialogue-turn and action-step units differ. The released file manifest is inspected; underlying examples were not downloaded.

### License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md
- document: not recorded
- weights: not recorded

- data review: Publisher dataset-card declaration for the multi-turn annotation release.
  Sources: https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md

### Primary evidence

- https://huggingface.co/datasets/magicgh/MT-Mind2Web/raw/main/README.md (retrieved 2026-10-17T12:34:10Z; SHA-256 8685e0a26a06b3339b5c078632a7b0ade1ead40e6b586ef1ff3676414699a4bc)
- https://huggingface.co/api/datasets/magicgh/MT-Mind2Web (retrieved 2026-10-17T12:34:10Z; SHA-256 4455e6daf1151694c03b2a1ebd4a7af40b5b079b0568706a1783a0222383bb1d)
- https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=800&max_results=100&sortBy=submittedDate&sortOrder=descending (retrieved 2026-10-16T06:36:58Z; SHA-256 c87e97eb397da04806d53145cf9c13be739fc657bb54dca9318c8c4ed2a36249)

---

## MultiUI

7.3 million training samples built from webpage UIs and structured with enhanced accessibility trees, for text-rich visual understanding, released with UIX-Qwen2 models.

- Catalog URL: https://awesomecua.com/resources/github-neulab-multiui/
- Original source: https://github.com/neulab/multiui
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: screen-understanding, data-generation
- Evidence checked: 2026-10-16T06:36:01Z
- ID: github:neulab/multiui

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-neulab-multiui/record.json

### Structured profile

- formats: not recorded
- modalities: webpage UI content, text, accessibility-derived structure
- splits: training collection
- supervision: UI understanding, text-rich visual tasks

#### Count observations

- ≈ 7,300,000 samples — reported MultiUI training collection (reported; source: https://raw.githubusercontent.com/neulab/multiui/HEAD/README.md)

The README provides a rounded sample count. It does not establish a unique-screenshot inventory or a normalized split breakdown. Synthetic examples and publicly sourced web content have provenance and quality limits; data terms must be checked separately from repository code.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/neulab/multiui/HEAD/README.md (retrieved 2026-10-16T06:36:01Z; SHA-256 fe0c03fe73529a29788d559103c4aed48dca6ed9ba3bfd5f151f902fa8858b38)
- https://raw.githubusercontent.com/neulab/multiui/HEAD/README.md (retrieved 2026-10-16T06:36:01Z; SHA-256 fe0c03fe73529a29788d559103c4aed48dca6ed9ba3bfd5f151f902fa8858b38)

---

## NNetNav Live data

Browser-interaction data released with NNetNav for its live-website setting, with separate training and test files.

- Catalog URL: https://awesomecua.com/resources/url-4f47abde8cd28a1ec1e1/
- Original source: https://huggingface.co/datasets/stanfordnlp/nnetnav-live
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: data-generation, web-navigation
- Evidence checked: 2026-10-16T11:11:53Z
- ID: url:4f47abde8cd28a1ec1e1

### Limitations

The Hub card supplies a license but no detailed schema. Dataset purpose is supported by the project's README; exact sample counts and annotation quality remain unverified.

- Record JSON: https://awesomecua.com/resources/url-4f47abde8cd28a1ec1e1/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/stanfordnlp/nnetnav-live
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/stanfordnlp/nnetnav-live (retrieved 2026-10-16T11:11:53Z; SHA-256 d8f8571dfc583d3a46d5b3a6a285e77f17057b36a8111d416d711513aa4ecf16)
- https://raw.githubusercontent.com/MurtyShikhar/NNetnav/HEAD/README.md (retrieved 2026-10-16T10:42:34Z; SHA-256 3095f7262b7d4ff916c6f58c55e6fc9902c08f77d09bf3951199945501148bb3)
- https://huggingface.co/api/datasets/stanfordnlp/nnetnav-live (retrieved 2026-10-16T11:11:53Z; SHA-256 d8f8571dfc583d3a46d5b3a6a285e77f17057b36a8111d416d711513aa4ecf16)

---

## NNetNav WebArena data

NNetNav's WebArena-oriented browser-interaction data release, with separate training and test files.

- Catalog URL: https://awesomecua.com/resources/url-25a4d0ab29b60250863a/
- Original source: https://huggingface.co/datasets/stanfordnlp/nnetnav-wa
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: data-generation, web-navigation
- Evidence checked: 2026-10-16T11:11:53Z
- ID: url:25a4d0ab29b60250863a

### Limitations

The Hub card supplies a license but no detailed schema. Dataset purpose is supported by the project's README; exact sample counts and annotation quality remain unverified.

- Record JSON: https://awesomecua.com/resources/url-25a4d0ab29b60250863a/record.json

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/stanfordnlp/nnetnav-wa
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/stanfordnlp/nnetnav-wa (retrieved 2026-10-16T11:11:53Z; SHA-256 3fe40a45aa2bf9d6f0cefffc65ea6382849c3543b44017200a4a8d43ab61e9eb)
- https://raw.githubusercontent.com/MurtyShikhar/NNetnav/HEAD/README.md (retrieved 2026-10-16T10:42:34Z; SHA-256 3095f7262b7d4ff916c6f58c55e6fc9902c08f77d09bf3951199945501148bb3)
- https://huggingface.co/api/datasets/stanfordnlp/nnetnav-wa (retrieved 2026-10-16T11:11:53Z; SHA-256 3fe40a45aa2bf9d6f0cefffc65ea6382849c3543b44017200a4a8d43ab61e9eb)

---

## OpenMobile-Data-v2

Mobile-agent supervision from emulator and simulator trajectories, plus executable tasks with starting states and success checks for reinforcement learning.

- Catalog URL: https://awesomecua.com/resources/url-546e6c95825d1318c98d/
- Original source: https://huggingface.co/datasets/OpenMobile-2/OpenMobile-Data-v2
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android, web
- Topics: mobile-navigation, data-generation, reinforcement-learning, tool-integration
- Evidence checked: 2026-10-17T01:48:51Z
- ID: url:546e6c95825d1318c98d

### Limitations

The reviewed card contains no explicit license declaration, so data-license status remains unknown. The repository code license is not inherited. The current code README points to the v2 dataset; an older project-page URL was not counted as a separate asset.

- Record JSON: https://awesomecua.com/resources/url-546e6c95825d1318c98d/record.json

### Structured profile

- formats: JSON, JSONL, PNG
- modalities: screenshots, text, tool calls
- splits: sft/train, rl/train
- supervision: next-action supervision, verifiable task outcomes

#### Count observations

- 11,643 trajectories — SFT collection (reported; source: https://huggingface.co/datasets/OpenMobile-2/OpenMobile-Data-v2/raw/main/README.md)
- 118,582 decision steps — SFT collection (reported; source: https://huggingface.co/datasets/OpenMobile-2/OpenMobile-Data-v2/raw/main/README.md)
- 2,475 executable tasks — RL collection (reported; source: https://huggingface.co/datasets/OpenMobile-2/OpenMobile-Data-v2/raw/main/README.md)

These are publisher-reported totals at three distinct grains, not values to sum. Earlier screenshots may be collapsed; each SFT example keeps at most three images. The card and repository disagree on the singular/plural RL filename, so consumers should inspect the actual file manifest.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/OpenMobile-2/OpenMobile-Data-v2/raw/main/README.md (retrieved 2026-10-17T01:48:51Z; SHA-256 abacf9a10759a9e7a8eeec5a266c96ed83742bd9296a19be95d09c9717e18b7c)
- https://raw.githubusercontent.com/OpenMobile2/OpenMobile2-Code/HEAD/README.md (retrieved 2026-10-17T01:48:10Z; SHA-256 485279038266d9454df75e27a80a0a0d71c24e90700126d2dcfa0da921b1273d)
- https://huggingface.co/api/datasets/OpenMobile-2/OpenMobile-Data (retrieved 2026-10-17T19:15:18Z; SHA-256 14b1211ed709147f4022f311c17303ca70faaffa22be143617eb431d966eec1a)
- https://huggingface.co/api/datasets/OpenMobile-2/OpenMobile-Data-v2 (retrieved 2026-10-17T19:15:20Z; SHA-256 14b1211ed709147f4022f311c17303ca70faaffa22be143617eb431d966eec1a)

---

## OS-Atlas Data

GUI grounding pre-training data for OS-Atlas in desktop (Linux, macOS, Windows), mobile and web domains, with element boxes stored as relative left, top, right and bottom ratios.

- Catalog URL: https://awesomecua.com/resources/url-0fdeb1cf5f49f84820e6/
- Original source: https://huggingface.co/datasets/OS-Copilot/OS-Atlas-data
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding, data-generation
- Evidence checked: 2026-10-16T06:38:26Z
- ID: url:0fdeb1cf5f49f84820e6

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/url-0fdeb1cf5f49f84820e6/record.json

### Structured profile

- formats: JSON annotations, image archives
- modalities: screenshots, referring expressions, bounding boxes
- splits: not recorded
- supervision: element grounding

#### Count observations

- > 270,000 screenshots — SeeClick-derived web subset (reported; source: https://huggingface.co/datasets/OS-Copilot/OS-Atlas-data/raw/main/README.md)
- > 3,000,000 UI elements — SeeClick-derived web subset (reported; source: https://huggingface.co/datasets/OS-Copilot/OS-Atlas-data/raw/main/README.md)
- ≥ 1,600,000 images — FineWeb-derived subset (reported; source: https://huggingface.co/datasets/OS-Copilot/OS-Atlas-data/raw/main/README.md)

These are subset-specific counts, not a total for the full OS-Atlas release. Raw boxes use 0–1 coordinates; the documented training wrapper scales them to 0–1000.

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/OS-Copilot/OS-Atlas-data
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/OS-Copilot/OS-Atlas-data (retrieved 2026-10-16T06:38:26Z; SHA-256 c2c5f7b3f07d92349ffd8256792599c856ed77c89108c45dbaef48a4699abe20)
- https://huggingface.co/datasets/OS-Copilot/OS-Atlas-data/raw/main/README.md (retrieved 2026-10-16T11:40:46Z; SHA-256 19f28b4bc0798e28180b968010c0f7c8dfed2dbfb24b122b958476b871d2e4fd)
- https://huggingface.co/api/datasets/OS-Copilot/OS-Atlas-data (retrieved 2026-10-16T06:38:26Z; SHA-256 c2c5f7b3f07d92349ffd8256792599c856ed77c89108c45dbaef48a4699abe20)

---

## OS-Genesis

Interaction-driven pipeline that synthesizes mobile and web GUI agent trajectories without human supervision or predefined tasks, via reverse task synthesis and a trajectory reward model.

- Catalog URL: https://awesomecua.com/resources/github-os-copilot-os-genesis/
- Original source: https://github.com/OS-Copilot/OS-Genesis
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: data-generation
- Evidence checked: 2026-10-16T06:36:01Z
- ID: github:os-copilot/os-genesis

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-os-copilot-os-genesis/record.json

### Structured profile

- formats: JSONL trajectories, JSON transition triples
- modalities: screenshots, text, actions
- splits: not recorded
- supervision: reverse task synthesis, GUI action trajectories

#### Count observations

No count recorded.

The repository links distinct AndroidControl-oriented, AndroidWorld-oriented, and web training files plus raw pre-state/action/post-state triples. These are training artifacts, not a documented train/test split, and related representations are not disjoint corpus totals. No numerical inventory is asserted from release names or linked archives.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/OS-Copilot/OS-Genesis/HEAD/README.md (retrieved 2026-10-16T06:36:01Z; SHA-256 430e495ab250395d666854bd18b0fc29b819cd784cd7730215ef65e461834d0d)
- https://raw.githubusercontent.com/OS-Copilot/OS-Genesis/HEAD/README.md (retrieved 2026-10-16T06:36:01Z; SHA-256 430e495ab250395d666854bd18b0fc29b819cd784cd7730215ef65e461834d0d)
- https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=800&max_results=100&sortBy=submittedDate&sortOrder=descending (retrieved 2026-10-16T06:36:58Z; SHA-256 c87e97eb397da04806d53145cf9c13be739fc657bb54dca9318c8c4ed2a36249)

---

## OS-Genesis mobile training data

Reverse-task-synthesis mobile trajectories released in separate AndroidControl and AndroidWorld training annotation files.

- Catalog URL: https://awesomecua.com/resources/url-d3ec5122a2b52fd5ae4b/
- Original source: https://huggingface.co/datasets/OS-Copilot/OS-Genesis-mobile-data
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: data-generation, mobile-navigation, imitation-learning
- Evidence checked: 2026-10-17T04:01:34Z
- ID: url:d3ec5122a2b52fd5ae4b

### Limitations

The public manifest contains AC/AW JSONL training annotations and a screenshot archive. MIT is declared for the data in its own card, separately from Apache-2.0 declarations on some model checkpoints. The gated web-data release is not included in this asset.

- Record JSON: https://awesomecua.com/resources/url-d3ec5122a2b52fd5ae4b/record.json

### Structured profile

- formats: JSONL, ZIP
- modalities: screenshots, text, actions
- splits: AndroidControl training, AndroidWorld training
- supervision: mobile action trajectories

#### Count observations

No count recorded.

AC and AW refer to distinct target training sets; no sample count is inferred from the two JSONL files or ZIP packaging.

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/OS-Copilot/OS-Genesis-mobile-data/raw/main/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/OS-Copilot/OS-Genesis-mobile-data/raw/main/README.md (retrieved 2026-10-17T04:01:34Z; SHA-256 de9de63e21e60e882277a6268e8153abb6c14aaf3e9a7f83e7f98ac14bf37170)
- https://huggingface.co/api/datasets/OS-Copilot/OS-Genesis-mobile-data (retrieved 2026-10-17T04:01:33Z; SHA-256 6a5e0c2baecc2dc8bf4466903798f5ecda07cdac917042bbd4cfbe54d895c11e)
- https://raw.githubusercontent.com/OS-Copilot/OS-Genesis/HEAD/README.md (retrieved 2026-10-16T06:36:01Z; SHA-256 430e495ab250395d666854bd18b0fc29b819cd784cd7730215ef65e461834d0d)
- https://huggingface.co/datasets/OS-Copilot/OS-Genesis-mobile-data/raw/main/README.md (retrieved 2026-10-17T04:01:34Z; SHA-256 de9de63e21e60e882277a6268e8153abb6c14aaf3e9a7f83e7f98ac14bf37170)

---

## PC-Agent-E training data

Released dataset used to train PC-Agent-E, linked by the official pipeline for refining human trajectories and synthesizing action reasoning.

- Catalog URL: https://awesomecua.com/resources/url-14449fe321e0a1ca34ea/
- Original source: https://huggingface.co/datasets/henryhe0123/PC-Agent-E
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, windows, linux
- Topics: data-generation, imitation-learning
- Evidence checked: 2026-10-18T04:27:13Z
- ID: url:14449fe321e0a1ca34ea

### Limitations

Hub release contains data.zip. The archive was not downloaded and its internal schema/example total were not independently inspected. Training-purpose and platform descriptions come from the official pipeline README; the brief card establishes the paper association and MIT data declaration.

- Record JSON: https://awesomecua.com/resources/url-14449fe321e0a1ca34ea/record.json

### Structured profile

- formats: ZIP package
- modalities: GUI screenshots, action trajectories, generated reasoning
- splits: training
- supervision: human demonstration refinement, generated action reasoning, trajectory augmentation

#### Count observations

No count recorded.

Public manifest exposes data.zip; the internal file schema and number of examples remain unverified. Supervision describes the publisher’s refinement/thought-completion/trajectory-boost pipeline, not an independently sampled data-quality audit.

### License declarations

- code: not recorded
- data: MIT — https://huggingface.co/datasets/henryhe0123/PC-Agent-E/raw/4f64c7b055154bed9ffea677aa86aeb51a01cb73/README.md
- document: not recorded
- weights: not recorded

- data review: Publisher dataset-card declaration for this release; it does not establish rights to all upstream screenshots, applications or source content.
  Sources: https://huggingface.co/datasets/henryhe0123/PC-Agent-E/raw/4f64c7b055154bed9ffea677aa86aeb51a01cb73/README.md

### Primary evidence

- https://raw.githubusercontent.com/GAIR-NLP/PC-Agent-E/HEAD/README.md (retrieved 2026-10-18T04:27:13Z; SHA-256 3ffb8c843c6acb8c2d5bbba11ba49d6b36cd566553a89974b6252a2bfd289d5d)
- https://huggingface.co/api/datasets/henryhe0123/PC-Agent-E (retrieved 2026-10-18T04:33:21Z; SHA-256 66f70ee2704cdf2e8847cfe04be05d9e14b3a3c1bee953e744f8209d6c9c2b85)
- https://huggingface.co/datasets/henryhe0123/PC-Agent-E/raw/4f64c7b055154bed9ffea677aa86aeb51a01cb73/README.md (retrieved 2026-10-18T04:35:17Z; SHA-256 4dfd1f3ec40f7ff3c94896955216cb60a25114b320caff29e909d296d375d6ef)

---

## Plan-and-Act training data

Planner and action-executor training examples for WebArena-Lite and WebVoyager, with model-specific processed files and raw trajectory annotations.

- Catalog URL: https://awesomecua.com/resources/url-ba6453cfdae0eb049ced/
- Original source: https://huggingface.co/datasets/xTRam1/plan-and-act-data
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: planning, web-navigation, data-generation
- Evidence checked: 2026-10-17T02:02:29Z
- ID: url:ba6453cfdae0eb049ced

### Limitations

The public manifest exposes JSON/JSONL data for planner and actor roles, including train and validation variants. The card declares MIT. Its loading examples use a different Hub repository identifier and omit the data/ prefix for one file; use the inspected xTRam1 manifest rather than copying those examples verbatim. Third-party site content retains its own terms.

- Record JSON: https://awesomecua.com/resources/url-ba6453cfdae0eb049ced/record.json

### Structured profile

- formats: JSON, JSONL
- modalities: text, plans, actions
- splits: train (QwQ-32B files), validation (QwQ-32B files)
- supervision: high-level plans, action execution

#### Count observations

No count recorded.

The release contains planner and actor files for two web environments. No sample count is inferred from the package-file manifest. Card loading examples have repository/path inconsistencies.

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/xTRam1/plan-and-act-data/raw/main/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/xTRam1/plan-and-act-data/raw/main/README.md (retrieved 2026-10-17T02:02:29Z; SHA-256 2ec8f4a03b8331bdd2ba8d6f6800d6dea9d955cfd9e7c1d2168ecb64deb25448)
- https://huggingface.co/api/datasets/xTRam1/plan-and-act-data (retrieved 2026-10-17T02:02:28Z; SHA-256 a98f98b7d4ceb81b00f217983ff271257f2f1e7d2c1a09836b872b2350d79ae9)
- https://huggingface.co/datasets/xTRam1/plan-and-act-data/raw/main/README.md (retrieved 2026-10-17T02:02:29Z; SHA-256 2ec8f4a03b8331bdd2ba8d6f6800d6dea9d955cfd9e7c1d2168ecb64deb25448)

---

## Rico

Mobile app screenshots, view hierarchies, and interaction traces for UI research.

- Catalog URL: https://awesomecua.com/resources/url-0b134b082a7bd507fc6a/
- Original source: https://www.interactionmining.org/archive/rico
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: screen-understanding
- Evidence checked: 2026-10-16T06:38:29Z
- ID: url:0b134b082a7bd507fc6a

### Limitations

The official project page cites the 2017 Rico paper. The project page reports more than 66,000 screens, while the original publication reports more than 72,000. These source-specific counts are kept separate; the reason for the difference is not established by these sources. App counts also differ: the official project page reports more than 9.3k Android apps and the retained published abstract more than 9.7k. Profile counts use the project-page scope; no reconciliation is inferred.

- Record JSON: https://awesomecua.com/resources/url-0b134b082a7bd507fc6a/record.json

### Structured profile

- formats: PNG, JSON, CSV, NumPy NPY, GIF
- modalities: screenshots, Android view hierarchies, gesture traces, transition animations, app/UI metadata
- splits: not recorded
- supervision: UI structure and element properties, recorded human interactions, learned UI layout embeddings

#### Count observations

- > 66,000 unique UI screens — original Rico downloads described on the project page (reported; source: https://www.interactionmining.org/archive/rico)
- > 9,300 Android apps — original Rico collection described on the project page (reported; source: https://www.interactionmining.org/archive/rico)
- 10,811 human interaction traces — crowd-worker collection before automated exploration (reported; source: https://www.interactionmining.org/archive/rico)

Project-page scope: screenshots paired with augmented view hierarchies, gesture coordinates, layout vectors and metadata. These observations are not action/task totals. The later semantic-annotation download is a related augmentation of screens, not an additional disjoint corpus. The retained original paper reports more than 72k screens from more than 9.7k apps while this project page says more than 66k screens and more than 9.3k apps; the difference is unresolved. Profile counts follow the project page and do not merge these populations. No train/validation/test partition or data license is established here; archives were not downloaded.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://www.interactionmining.org/archive/rico (retrieved 2026-10-16T06:38:29Z; SHA-256 daa370b9aae5bce9f5171ea81fa4574c6155e04177af1db138529efd76377f89)
- https://danafergan.com/publications/deka2017rico.pdf (retrieved 2026-10-17T10:01:32Z; SHA-256 a1ec58c526b152c052c5c72f9a62725f1026b5f0e4f45c8fe85fce284295da84)

---

## RoTS

Announced GUI trajectory synthesis resources for recovery from policy-induced errors; the inspected repository marks code and data releases as in preparation.

- Catalog URL: https://awesomecua.com/resources/github-alibabaresearch-rots/
- Original source: https://github.com/AlibabaResearch/RoTS
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: data-generation, robustness
- Evidence checked: 2026-10-16T06:36:02Z
- ID: github:alibabaresearch/rots

### Limitations

The 800k figure describes training samples in the study, not an independently counted public download. The repository code-license declaration does not establish terms for an unreleased dataset.

- Record JSON: https://awesomecua.com/resources/github-alibabaresearch-rots/record.json

### Structured profile

- formats: not recorded
- modalities: GUI interaction trajectories
- splits: not recorded
- supervision: recovery trajectory synthesis

#### Count observations

- ≈ 800,000 training samples — paper-described synthesis output; not a released file inventory (reported; source: https://raw.githubusercontent.com/AlibabaResearch/RoTS/HEAD/README.md)

The inspected README marks the dataset and collection pipelines as in preparation. This profile records an announced research asset, not a verified downloadable corpus; file formats, splits, and release-specific data terms remain unknown.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/AlibabaResearch/RoTS/HEAD/README.md (retrieved 2026-10-16T06:36:02Z; SHA-256 bf5c1469d33ced951ff0a5de017494b65f654023ceee8e7fbfd8b60afb082244)
- https://raw.githubusercontent.com/AlibabaResearch/RoTS/HEAD/README.md (retrieved 2026-10-16T06:36:02Z; SHA-256 bf5c1469d33ced951ff0a5de017494b65f654023ceee8e7fbfd8b60afb082244)
- https://raw.githubusercontent.com/AlibabaResearch/RoTS/HEAD/README.md (retrieved 2026-10-16T06:36:02Z; SHA-256 bf5c1469d33ced951ff0a5de017494b65f654023ceee8e7fbfd8b60afb082244)

---

## ScaleCUA Data

Cross-platform training data released with ScaleCUA, with grounding and navigation annotations for Ubuntu, Windows, macOS, Android, iPhone and web screenshots.

- Catalog URL: https://awesomecua.com/resources/url-631e74223e198ef40202/
- Original source: https://huggingface.co/datasets/OpenGVLab/ScaleCUA-Data
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: data-generation
- Evidence checked: 2026-10-16T06:38:26Z
- ID: url:631e74223e198ef40202

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/url-631e74223e198ef40202/record.json

### Structured profile

- formats: JSONL annotations, JSON manifest, split image archives
- modalities: screenshots, text, actions
- splits: not recorded
- supervision: GUI grounding, GUI action trajectories

#### Count observations

- 6 platform categories — Linux, macOS, Windows, Android, iOS, and Web (reported; source: https://huggingface.co/datasets/OpenGVLab/ScaleCUA-Data/raw/main/README.md)

The six categories include Web, so they are not six operating systems. Grounding and trajectory annotations follow different collection processes. No sample total or train/test division is inferred from archive-part counts or Hub size tags.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/OpenGVLab/ScaleCUA-Data (retrieved 2026-10-16T06:38:26Z; SHA-256 dca4b89176c7653e83545363e4868bd2d5f0bf618df007b68a7e25407262f1ac)
- https://huggingface.co/datasets/OpenGVLab/ScaleCUA-Data/raw/main/README.md (retrieved 2026-10-17T02:02:37Z; SHA-256 8c545d66cc7199a9258bd91ed48930691d0d99555bc30ee457fae9bf656fd18d)
- https://huggingface.co/api/datasets/OpenGVLab/ScaleCUA-Data (retrieved 2026-10-16T06:38:26Z; SHA-256 dca4b89176c7653e83545363e4868bd2d5f0bf618df007b68a7e25407262f1ac)

---

## ScienceBoard evaluation trajectories

Archives of ScienceBoard agent evaluation runs, separated by agent configuration and screenshot, accessibility-tree or set-of-marks observation mode.

- Catalog URL: https://awesomecua.com/resources/url-4784f63cd7117f64a2a3/
- Original source: https://huggingface.co/datasets/OS-Copilot/ScienceBoard-Traj
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: evaluation, science, workflow
- Evidence checked: 2026-10-17T04:07:19Z
- ID: url:4784f63cd7117f64a2a3

### Limitations

The manifest exposes six ZIP archives but no README card or data-license declaration. The official project announces evaluation-result trajectories; this record does not label them as a training corpus or infer a trajectory count from archive names. Internal schemas and complete payload contents were not inspected.

- Record JSON: https://awesomecua.com/resources/url-4784f63cd7117f64a2a3/record.json

### Structured profile

- formats: ZIP
- modalities: screenshots, accessibility trees, text
- splits: not recorded
- supervision: evaluation rollout logs

#### Count observations

No count recorded.

Observation modes follow publisher archive labels rather than inspected record schemas. No count or training-use permission is inferred.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/OS-Copilot/ScienceBoard-Traj (retrieved 2026-10-17T04:07:19Z; SHA-256 0a97233bd9132fdddc6ddb26fd3cf9f2af06ae086429f367a61cfab0c16c4f44)
- https://raw.githubusercontent.com/OS-Copilot/ScienceBoard/HEAD/README.md (retrieved 2026-10-16T06:35:58Z; SHA-256 4c3fe93aa740dbf4a279a246ddd836f2590a2a36f39b820abe166e38cb484577)
- https://huggingface.co/OS-Copilot/ScienceBoard-Env/raw/main/README.md (retrieved 2026-10-17T04:07:19Z; SHA-256 8ee436f67e708bb917992764bc60a017c9db2edb21bdb99356b35c69f73724d7)
- https://huggingface.co/api/datasets/OS-Copilot/ScienceBoard-Traj (retrieved 2026-10-17T04:07:19Z; SHA-256 0a97233bd9132fdddc6ddb26fd3cf9f2af06ae086429f367a61cfab0c16c4f44)

---

## Screen2Words

Mobile screen descriptions for language-based screen understanding.

- Catalog URL: https://awesomecua.com/resources/github-google-research-datasets-screen2words/
- Original source: https://github.com/google-research-datasets/screen2words
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: screen-understanding
- Evidence checked: 2026-10-16T06:36:01Z
- ID: github:google-research-datasets/screen2words

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-google-research-datasets-screen2words/record.json

### Structured profile

- formats: CSV
- modalities: text summaries, RICO screen references
- splits: train, dev, test
- supervision: screen summarization

#### Count observations

- 112,085 summaries — screen2words release (reported; source: https://raw.githubusercontent.com/google-research-datasets/screen2words/HEAD/README.md)
- 22,417 screens — RICO screens referenced by screen2words (reported; source: https://raw.githubusercontent.com/google-research-datasets/screen2words/HEAD/README.md)

Multiple summaries describe one screen. The repository provides annotations and split files; use the referenced RICO assets for screenshots.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/google-research-datasets/screen2words/HEAD/README.md (retrieved 2026-10-16T06:36:01Z; SHA-256 8be66dc5a3907e0e84993a66679416d928ed1a32aae70db8bb0e0f771c7a8715)

---

## ScreenDrag

GUI dragging data with screen observations, prior state, and continuous pointer actions, provided as trajectory files and Parquet representations.

- Catalog URL: https://awesomecua.com/resources/url-fe43af1801032be708cc/
- Original source: https://huggingface.co/datasets/h-siyuan/ScreenDrag
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop
- Topics: grounding, evaluation
- Evidence checked: 2026-10-16T11:12:56Z
- ID: url:fe43af1801032be708cc

### Limitations

Raw and Parquet folders are alternative views of the same data and should not be counted as independent samples. The inspected card did not state a license.

- Record JSON: https://awesomecua.com/resources/url-fe43af1801032be708cc/record.json

### Structured profile

- formats: Parquet, episode files
- modalities: screen images, instructions, previous state, continuous actions
- splits: train, test
- supervision: continuous GUI dragging

#### Count observations

No count recorded.

Raw and Parquet folders are alternative views of the same data. Each sample describes a dragging task over multiple timesteps; action vectors encode button state and coordinates.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/h-siyuan/ScreenDrag/raw/main/README.md (retrieved 2026-10-16T11:12:56Z; SHA-256 39c7c028f7ef5ca5c75f79b59a107c7e25444776095a2a08bb7535c4f523f7fa)
- https://raw.githubusercontent.com/showlab/showui-pi/HEAD/README.md (retrieved 2026-10-16T11:09:28Z; SHA-256 88df552ccbe80efd7020905d77d526f4f9efe2d09a11fed2714b083988f9dcef)

---

## ScreenQA

About 86,000 human-written question-answer pairs over 35,000 Rico mobile screenshots, plus ScreenQA Short and ComplexQA variants, for benchmarking screen content understanding.

- Catalog URL: https://awesomecua.com/resources/github-google-research-datasets-screen-qa/
- Original source: https://github.com/google-research-datasets/screen_qa
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: screen-understanding
- Evidence checked: 2026-10-16T06:36:01Z
- ID: github:google-research-datasets/screen_qa

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-google-research-datasets-screen-qa/record.json

### Structured profile

- formats: JSON
- modalities: questions, answers, screen references, bounding boxes
- splits: train, validation, test
- supervision: screen question answering, answer grounding

#### Count observations

- 68,951 question-answer pairs — original ScreenQA train split (reported; source: https://raw.githubusercontent.com/google-research-datasets/screen_qa/HEAD/README.md)
- 8,614 question-answer pairs — original ScreenQA validation split (reported; source: https://raw.githubusercontent.com/google-research-datasets/screen_qa/HEAD/README.md)
- 8,419 question-answer pairs — original ScreenQA test split (reported; source: https://raw.githubusercontent.com/google-research-datasets/screen_qa/HEAD/README.md)

All questions for a given screenshot share one split. ScreenQA Short reuses the same questions/screens; ComplexQA is a separate extension. Do not add these variants as independent original examples.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/google-research-datasets/screen_qa/HEAD/README.md (retrieved 2026-10-16T06:36:01Z; SHA-256 7d1bfe7d6eddd5d3fc4c33d4814de3cabf7a6b6fd3d3f85ba4c2b33036bf8867)

---

## ScreenRef

GUI screenshots paired with localization instructions and targets, including absent-target examples; image access is gated under publisher terms.

- Catalog URL: https://awesomecua.com/resources/url-56bda04bd8d3a438deb3/
- Original source: https://huggingface.co/datasets/PrentisAI/ScreenRef
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, web, android, linux
- Topics: grounding, data-generation, screen-understanding
- Evidence checked: 2026-10-17T01:48:51Z
- ID: url:56bda04bd8d3a438deb3

### Limitations

The public Hub API reports gated=auto and a Restricted Research-Only declaration. The companion card distinguishes annotations from screenshots and limits reuse. Access terms were inspected as public metadata; no access agreement was accepted or gated files downloaded.

- Record JSON: https://awesomecua.com/resources/url-56bda04bd8d3a438deb3/record.json

### Structured profile

- formats: Parquet
- modalities: screenshots, text, coordinates
- splits: train
- supervision: instruction-to-click grounding, bounding boxes, absent-target abstention

#### Count observations

- 585,981 distinct screenshots — ScreenRef image inventory (reported; source: https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md)
- 633,369 annotation rows — full recipe (reported; source: https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md)
- 22,475 annotation rows — refusal subset of full recipe (reported; source: https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md)

The publisher reports these inventories in the companion annotation card. The refusal subset is included in the full recipe. Screenshot access is gated; no image download or independent corpus recount was performed.

### License declarations

- code: not recorded
- data: other — https://huggingface.co/datasets/PrentisAI/ScreenRef
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/PrentisAI/ScreenRef (retrieved 2026-10-17T01:48:51Z; SHA-256 634b479c7d089e50735f6d4a25f78a63f4d0c2a8c1955015e7641b7afd61c317)
- https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md (retrieved 2026-10-17T01:48:10Z; SHA-256 96a87222645c3f823e6f67e50708792e2917ddeb8eea5aacdf2de8c5bbff165f)
- https://huggingface.co/api/datasets/PrentisAI/ScreenRef (retrieved 2026-10-17T01:48:51Z; SHA-256 634b479c7d089e50735f6d4a25f78a63f4d0c2a8c1955015e7641b7afd61c317)

---

## ScreenRef Annotations

Annotation files, task recipes, and image manifests for ScreenRef; screenshots reside in the separately gated image repository.

- Catalog URL: https://awesomecua.com/resources/url-c1db2ba79e6d6a3db2b9/
- Original source: https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, web, android, linux
- Topics: grounding, data-generation
- Evidence checked: 2026-10-17T01:48:10Z
- ID: url:c1db2ba79e6d6a3db2b9

### Limitations

The card declares restricted academic research use and no redistribution. Annotation coordinates use a normalized 1000 by 1000 space. Some source instructions name gestures other than the single-click target; the publisher recommends treating those as location supervision.

- Record JSON: https://awesomecua.com/resources/url-c1db2ba79e6d6a3db2b9/record.json

### Structured profile

- formats: JSONL, JSON task recipes, TSV manifests
- modalities: text, coordinates, image references
- splits: full/train, point/train
- supervision: instruction-to-click grounding, bounding boxes, absent-target abstention

#### Count observations

- 633,369 annotation rows — full recipe (reported; source: https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md)
- 610,894 annotation rows — point recipe (reported; source: https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md)

The recipes reuse source images and are not additive datasets. This download contains no screenshots. Counts are publisher-reported; rows named for trajectories are independent decision examples, not full trajectories.

### License declarations

- code: not recorded
- data: other — https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md (retrieved 2026-10-17T01:48:10Z; SHA-256 96a87222645c3f823e6f67e50708792e2917ddeb8eea5aacdf2de8c5bbff165f)
- https://huggingface.co/datasets/PrentisAI/ScreenRef-Annotations/raw/main/README.md (retrieved 2026-10-17T01:48:10Z; SHA-256 96a87222645c3f823e6f67e50708792e2917ddeb8eea5aacdf2de8c5bbff165f)

---

## ScreenSpot-Pro data

High-resolution professional interface screenshots and target annotations for evaluating instruction-based GUI localization.

- Catalog URL: https://awesomecua.com/resources/url-c79e152e6f7af1a9efed/
- Original source: https://huggingface.co/datasets/likaixin/ScreenSpot-Pro
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, windows, macos, linux
- Topics: grounding, evaluation
- Evidence checked: 2026-10-16T11:35:55Z
- ID: url:c79e152e6f7af1a9efed

### Limitations

This is the benchmark data asset, distinct from its evaluation-code repository. Target counts are not unique image counts.

- Record JSON: https://awesomecua.com/resources/url-c79e152e6f7af1a9efed/record.json

### Structured profile

- formats: JSON annotations, screen images
- modalities: high-resolution screenshots, instructions, bounding boxes
- splits: not recorded
- supervision: GUI grounding

#### Count observations

- 1,581 target annotations — sum of icon/text counts in the published card table (computed) (computed; source: https://huggingface.co/datasets/likaixin/ScreenSpot-Pro/raw/main/README.md)

Counts describe target annotations, not unique screenshots or expanded language/style variants. The evaluation code can reuse a target across configurations.

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/likaixin/ScreenSpot-Pro/raw/main/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/likaixin/ScreenSpot-Pro/raw/main/README.md (retrieved 2026-10-16T11:35:55Z; SHA-256 76ae2231564fe84af029f8625c02d9cd7fb6cf85c5f8af1b2a2593e2107719d9)
- https://raw.githubusercontent.com/likaixin2000/ScreenSpot-Pro-GUI-Grounding/HEAD/eval_screenspot_pro.py (retrieved 2026-10-16T11:38:05Z; SHA-256 a77c859775b33591b5619e8520c94702a53a1f9a29ada93e66744dbe23afe9dc)
- https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=700&max_results=100&sortBy=submittedDate&sortOrder=descending (retrieved 2026-10-16T06:36:54Z; SHA-256 4953a8e0f029016aef668bce98cec4d2873a7ae49c1fe33c4311fa5eb8d24089)
- https://gui-agent.github.io/grounding-leaderboard/ (retrieved 2026-10-18T04:27:10Z; SHA-256 2f7f635dee3c593b40efc61246c082ab1d76f7ce78f84a1d4b6391d30fa4e8fd)
- https://huggingface.co/datasets/likaixin/ScreenSpot-Pro/raw/main/README.md (retrieved 2026-10-16T11:35:55Z; SHA-256 76ae2231564fe84af029f8625c02d9cd7fb6cf85c5f8af1b2a2593e2107719d9)

---

## ShowUI Desktop

7,496 desktop grounding examples built from OmniAct screenshots, with annotations rewritten by GPT-4o to describe element appearance, spatial relations and function.

- Catalog URL: https://awesomecua.com/resources/url-f976dec3d1c5e0bedbd7/
- Original source: https://huggingface.co/datasets/showlab/ShowUI-desktop-8K
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop
- Topics: data-generation
- Evidence checked: 2026-10-16T06:38:26Z
- ID: url:f976dec3d1c5e0bedbd7

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/url-f976dec3d1c5e0bedbd7/record.json

### Structured profile

- formats: Hub table with an image column
- modalities: screenshots, text, bounding boxes, points
- splits: train
- supervision: instruction-to-element grounding

#### Count observations

- 7,496 examples — train split declared in the dataset card (reported; source: https://huggingface.co/datasets/showlab/ShowUI-desktop-8K/raw/main/README.md)

The 8K release name is not an exact record count; the card declares 7,496 examples. Images and original annotations come from OmniAct and are augmented with generated descriptions. Examples are not asserted to be unique screenshots.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/showlab/ShowUI-desktop-8K (retrieved 2026-10-16T06:38:26Z; SHA-256 84bd2ef05ea837eaeebb248002b2942dd5c72f072beb29a9bd70eda1ea433a31)
- https://huggingface.co/datasets/showlab/ShowUI-desktop-8K/raw/main/README.md (retrieved 2026-10-17T02:02:38Z; SHA-256 577a78efa03cde05141c23033222014094681cb5d04786dbb4a698df8543b3df)
- https://huggingface.co/api/datasets/showlab/ShowUI-desktop-8K (retrieved 2026-10-16T06:38:26Z; SHA-256 84bd2ef05ea837eaeebb248002b2942dd5c72f072beb29a9bd70eda1ea433a31)
- https://huggingface.co/api/datasets/showlab/ShowUI-desktop (retrieved 2026-10-17T19:14:57Z; SHA-256 57eaa720c20e9e3a4428c8292c150e1949f3372c75c6890e424ba3c6600a5e5d)
- https://huggingface.co/api/datasets/showlab/ShowUI-desktop-8K (retrieved 2026-10-17T19:14:58Z; SHA-256 57eaa720c20e9e3a4428c8292c150e1949f3372c75c6890e424ba3c6600a5e5d)

---

## ShowUI-web

Web-interface grounding examples with instructions, element boxes and points, paired with a separately packaged screenshot archive.

- Catalog URL: https://awesomecua.com/resources/url-8933977bb0a57940ed23/
- Original source: https://huggingface.co/datasets/showlab/ShowUI-web
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: grounding, data-generation
- Evidence checked: 2026-10-17T02:42:32Z
- ID: url:8933977bb0a57940ed23

### Limitations

Public Parquet annotations, metadata JSON and images.tar.gz are present. The card refers to image.tar.gz in its extraction command, while the actual archive is plural. No data-license declaration is present; the ShowUI code or model licenses are not inherited.

- Record JSON: https://awesomecua.com/resources/url-8933977bb0a57940ed23/record.json

### Structured profile

- formats: Parquet, JSON, TAR.GZ
- modalities: screenshots, text, bounding boxes, points
- splits: train
- supervision: element grounding

#### Count observations

- 21,988 rows — train split (reported; source: https://huggingface.co/datasets/showlab/ShowUI-web/raw/main/README.md)

Row count is the card dataset_info value; one row may contain multiple instructions. The card summarizes screenshots as approximately 22K. No data license is declared.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/showlab/ShowUI-web/raw/main/README.md (retrieved 2026-10-17T02:42:32Z; SHA-256 08586aa1ded1f1a1f984fb55697fdb1007d86c7fdf4988a2dc1fcf3fdfd49a47)
- https://huggingface.co/api/datasets/showlab/ShowUI-web (retrieved 2026-10-17T02:42:32Z; SHA-256 12412480f1a3957069d9dcdc53abce4ad3e34be7dac7ca6fe1726d04764cadfd)

---

## ShowUI-π training data

Drag-and-click episode data for the ShowUI-π model, spanning desktop editing, presentation, handwriting and other interface tasks.

- Catalog URL: https://awesomecua.com/resources/url-3dab53c6c38c9e7217ea/
- Original source: https://huggingface.co/datasets/showlab/ShowUI-pi-data
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop
- Topics: grounding, action-prediction, imitation-learning
- Evidence checked: 2026-10-17T04:01:33Z
- ID: url:3dab53c6c38c9e7217ea

### Limitations

Public Parquet chunks and LeRobot metadata are present. The card names a v3.0 revision in its usage example; this review verifies the main manifest and does not assert that tag’s compatibility. No data license is declared. Hub size-category bands are not treated as episode counts.

- Record JSON: https://awesomecua.com/resources/url-3dab53c6c38c9e7217ea/record.json

### Structured profile

- formats: Parquet, LeRobot metadata
- modalities: screenshots, instructions, actions
- splits: not recorded
- supervision: drag trajectories, click episodes

#### Count observations

No count recorded.

No sample or episode count is inferred from the size tag or package manifest. Main-branch files were inspected; the card’s v3.0 usage example was not executed.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/showlab/ShowUI-pi-data/raw/main/README.md (retrieved 2026-10-17T04:01:33Z; SHA-256 0e3a2a923865ae24d0de590143e9e32564b0e20db059579582d6181cdcf75bf1)
- https://huggingface.co/api/datasets/showlab/ShowUI-pi-data (retrieved 2026-10-17T04:01:33Z; SHA-256 86fadf9a32185f018f6a8e49d52b39ee5c99c177075510361202dc25a214191f)

---

## UGround V1 Data

Gated web grounding training data for UGround in Web-Hybrid and Web-Direct subsets, with a bounding-box version whose coordinates are normalized to 0-999.

- Catalog URL: https://awesomecua.com/resources/url-c4898ad1bfc049926a63/
- Original source: https://huggingface.co/datasets/osunlp/UGround-V1-Data
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding, data-generation
- Evidence checked: 2026-10-16T06:38:26Z
- ID: url:c4898ad1bfc049926a63

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/url-c4898ad1bfc049926a63/record.json

### Structured profile

- formats: Parquet shards
- modalities: GUI screenshots, natural-language grounding descriptions
- splits: not recorded
- supervision: GUI visual-grounding training for the UGround-V1 family

#### Count observations

No count recorded.

Public API revision 33325877 lists Parquet assets but gated=auto; the pinned raw card returned HTTP 401 and no access was requested. Official README identifies this as V1 training data; the API excerpt also announces a Web-Hybrid bounding-box variant with coordinates normalized to [0,999]. That does not establish every shard schema or a release-wide point/bbox count. No train/test partition, example total, or unrestricted downloadability is claimed. Preserve the recorded CC-BY-NC-SA-4.0 data declaration separately from model/code terms.

### License declarations

- code: not recorded
- data: cc-by-nc-sa-4.0 — https://huggingface.co/datasets/osunlp/UGround-V1-Data
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/osunlp/UGround-V1-Data (retrieved 2026-10-16T06:38:26Z; SHA-256 0342862bd7857dd21e389ee5d351375dfea722cad4725c8e33271efc93e009f6)
- https://raw.githubusercontent.com/OSU-NLP-Group/UGround/HEAD/README.md (retrieved 2026-10-16T06:36:00Z; SHA-256 72ca3f23114c3a08fefb724573acf10c9f0a1b3d4a50d811c98356264ecf6ffc)
- https://huggingface.co/api/datasets/osunlp/UGround-V1-Data (retrieved 2026-10-16T06:38:26Z; SHA-256 0342862bd7857dd21e389ee5d351375dfea722cad4725c8e33271efc93e009f6)

---

## UI-AGILE-Data

UI-AGILE training annotations and screenshots together with converted GUI-grounding and AndroidControl evaluation files.

- Catalog URL: https://awesomecua.com/resources/url-41abb1b7206689cf5057/
- Original source: https://huggingface.co/datasets/KDEGroup/UI-AGILE-Data
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: grounding, reinforcement-learning, evaluation
- Evidence checked: 2026-10-17T02:43:19Z
- ID: url:41abb1b7206689cf5057

### Limitations

Public JSON, image archives and Parquet evaluation files are present. The card has no data-license declaration; the model’s MIT declaration is not inherited. The publisher describes fixes to AndroidControl action parameters, but those corrections were not independently reproduced or applied to upstream resources.

- Record JSON: https://awesomecua.com/resources/url-41abb1b7206689cf5057/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/KDEGroup/UI-AGILE-Data/raw/main/README.md (retrieved 2026-10-17T02:43:19Z; SHA-256 ce35413bc1ef28338bc6fd9f132fa271a4f5e0bf23cecd7346f54adf0a964fd7)
- https://huggingface.co/api/datasets/KDEGroup/UI-AGILE-Data (retrieved 2026-10-17T02:43:19Z; SHA-256 7782422de88830a497d9eb530bd2f0fb6283904cbb25dafcf2ff4d03358a377a)

---

## UI-Genie reward data

Mobile GUI reward annotations released for training UI-Genie’s trajectory-assessment model.

- Catalog URL: https://awesomecua.com/resources/url-84e5aeeffaf561baa966/
- Original source: https://huggingface.co/datasets/HanXiao1999/UI-Genie-RM-517k
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: data-generation, mobile-navigation, reward-models
- Evidence checked: 2026-10-17T04:01:34Z
- ID: url:84e5aeeffaf561baa966

### Limitations

The public manifest contains reward_data.jsonl but no separately packaged image archive. The card declares MIT. The 517k identifier is not converted into a verified sample count, and complete image packaging is not inferred from the JSONL filename.

- Record JSON: https://awesomecua.com/resources/url-84e5aeeffaf561baa966/record.json

### Structured profile

- formats: JSONL
- modalities: text
- splits: not recorded
- supervision: trajectory rewards

#### Count observations

No count recorded.

The public manifest contains reward_data.jsonl but no separately packaged image archive. The card declares MIT. The 517k identifier is not converted into a verified sample count, and complete image packaging is not inferred from the JSONL filename.

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/HanXiao1999/UI-Genie-RM-517k/raw/main/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/HanXiao1999/UI-Genie-RM-517k/raw/main/README.md (retrieved 2026-10-17T04:01:34Z; SHA-256 dddb70b2b6986525f3980cbe50c3241d17f840a81fda9715b01ac3b25dd35d63)
- https://huggingface.co/api/datasets/HanXiao1999/UI-Genie-RM-517k (retrieved 2026-10-17T04:01:33Z; SHA-256 ab4bf30b6188959f825f2747ca711b0f190dddfe1658319c881ca9c73be9ecc9)
- https://raw.githubusercontent.com/Euphoria16/UI-Genie/HEAD/README.md (retrieved 2026-10-17T03:59:54Z; SHA-256 e08569bd9d8a6ff44537d4fe69243ddfeb8a41ae5c9f87ef84af50a67c64c726)
- https://huggingface.co/datasets/HanXiao1999/UI-Genie-RM-517k/raw/main/README.md (retrieved 2026-10-17T04:01:34Z; SHA-256 dddb70b2b6986525f3980cbe50c3241d17f840a81fda9715b01ac3b25dd35d63)

---

## UI-Genie trajectory data

Synthetic mobile GUI trajectory supervision and screenshots released with the UI-Genie agent-training pipeline.

- Catalog URL: https://awesomecua.com/resources/url-2e1927450da2183a5abe/
- Original source: https://huggingface.co/datasets/HanXiao1999/UI-Genie-Agent-16k
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: data-generation, mobile-navigation, imitation-learning
- Evidence checked: 2026-10-17T04:01:34Z
- ID: url:2e1927450da2183a5abe

### Limitations

Public JSONL annotations and screenshots are present. MIT is declared in the dataset card. The release name, model-card links and annotation filename use different size labels; this review does not infer a reliable trajectory count from them.

- Record JSON: https://awesomecua.com/resources/url-2e1927450da2183a5abe/record.json

### Structured profile

- formats: JSONL, PNG
- modalities: screenshots, text, actions
- splits: not recorded
- supervision: GUI action trajectories

#### Count observations

No count recorded.

Public JSONL annotations and screenshots are present. MIT is declared in the dataset card. The release name, model-card links and annotation filename use different size labels; this review does not infer a reliable trajectory count from them.

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/HanXiao1999/UI-Genie-Agent-16k/raw/main/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/HanXiao1999/UI-Genie-Agent-16k/raw/main/README.md (retrieved 2026-10-17T04:01:34Z; SHA-256 a748fc7dbb53d5d751c5ee109e437c377e214b1d837762f8d09995349d86cec9)
- https://huggingface.co/api/datasets/HanXiao1999/UI-Genie-Agent-16k (retrieved 2026-10-17T04:01:33Z; SHA-256 548df402288350920a26bff2099544bf21835200ee58ff2c657c331fa6200317)
- https://raw.githubusercontent.com/Euphoria16/UI-Genie/HEAD/README.md (retrieved 2026-10-17T03:59:54Z; SHA-256 e08569bd9d8a6ff44537d4fe69243ddfeb8a41ae5c9f87ef84af50a67c64c726)
- https://huggingface.co/datasets/HanXiao1999/UI-Genie-Agent-16k/raw/main/README.md (retrieved 2026-10-17T04:01:34Z; SHA-256 a748fc7dbb53d5d751c5ee109e437c377e214b1d837762f8d09995349d86cec9)
- https://huggingface.co/api/datasets/HanXiao1999/UI-Genie-Agent-5k (retrieved 2026-10-17T19:15:09Z; SHA-256 66006a586e03be3eb1dfc29dc9c951241fd7e4204430e7db258da1037e17ac6e)
- https://huggingface.co/api/datasets/HanXiao1999/UI-Genie-Agent-16k (retrieved 2026-10-17T19:15:10Z; SHA-256 66006a586e03be3eb1dfc29dc9c951241fd7e4204430e7db258da1037e17ac6e)

---

## UI-Ins

Treats grounding instructions as multiple reasoning perspectives, releasing a data pipeline, training code and UI-Ins-7B and 32B models trained by SFT on synthesized instructions, then RL.

- Catalog URL: https://awesomecua.com/resources/github-alibaba-ui-ins/
- Original source: https://github.com/alibaba/UI-Ins
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: data-generation
- Evidence checked: 2026-10-16T06:36:02Z
- ID: github:alibaba/ui-ins

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-alibaba-ui-ins/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/alibaba/UI-Ins/HEAD/README.md (retrieved 2026-10-16T06:36:02Z; SHA-256 e06aedcb1760867470afeb27d4eb4cdde9a3b76b9d55af183047df3c0ae2b71c)

---

## UI-R1 3B training data

The released mobile training subset for the original UI-R1 3B model, with action annotations and individual screenshot files.

- Catalog URL: https://awesomecua.com/resources/url-7c568d88a472f914d316/
- Original source: https://huggingface.co/datasets/LZXzju/UI-R1-3B-Train
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: data-generation, grounding, action-prediction
- Evidence checked: 2026-10-17T02:03:33Z
- ID: url:7c568d88a472f914d316

### Limitations

The public manifest includes train.json and a train_imgs directory. The card has no dataset-license declaration, and the model’s MIT metadata is not inherited. The official repository identifies this as v1 training data drawn from AndroidControl and ScreenSpot; later enlarged training mixtures are distinct.

- Record JSON: https://awesomecua.com/resources/url-7c568d88a472f914d316/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/LZXzju/UI-R1-3B-Train/raw/main/README.md (retrieved 2026-10-17T02:03:33Z; SHA-256 640cb5908abefb770ea6bb8d12f22e9eca622224fa73e9f5c67a3a95f4f7b8e5)
- https://huggingface.co/api/datasets/LZXzju/UI-R1-3B-Train (retrieved 2026-10-17T02:03:33Z; SHA-256 482d1304ad53736b3e410694cfa427067ff8b45267374964e4a8ff3833afbbd3)
- https://raw.githubusercontent.com/lll6gg/UI-R1/HEAD/README.md (retrieved 2026-10-16T06:36:00Z; SHA-256 f55ac6a0c50d298d46c5f7083a0879959fd7cd3c1d91496af295ebf2afcc13a3)

---

## UI-S1 released training examples

A public example subset of the UI-S1 mobile training data, packaged as JSONL annotations and Parquet images.

- Catalog URL: https://awesomecua.com/resources/url-16184830c0f4bdb146fa/
- Original source: https://huggingface.co/datasets/mPLUG/UI_S1_dataset
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: reinforcement-learning, data-generation, mobile-navigation
- Evidence checked: 2026-10-17T04:07:19Z
- ID: url:16184830c0f4bdb146fa

### Limitations

The release contains train_1000.jsonl and images.parquet. The official README explicitly describes 1,000 released examples and calls the release only part of the training dataset. Apache-2.0 is declared by the dataset card; this is not the complete training corpus.

- Record JSON: https://awesomecua.com/resources/url-16184830c0f4bdb146fa/record.json

### Structured profile

- formats: JSONL, Parquet
- modalities: images, text, actions
- splits: training example subset
- supervision: GUI actions

#### Count observations

- 1,000 training examples — public example subset (reported; source: https://raw.githubusercontent.com/X-PLUG/MobileAgent/HEAD/UI-S1/README.md)

The count is explicitly reported by the publisher, not inferred from the filename. Full training data remains outside this release.

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/mPLUG/UI_S1_dataset/raw/main/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/mPLUG/UI_S1_dataset/raw/main/README.md (retrieved 2026-10-17T04:07:19Z; SHA-256 d826463e2aa159f083dc74869bfabb8abb5b8ea4f2cdf4aeb7676172b18aaaa5)
- https://huggingface.co/api/datasets/mPLUG/UI_S1_dataset (retrieved 2026-10-17T04:07:19Z; SHA-256 cdfbcbf23a3b1b4a609e1943e80dcf144ca1224a74ebf2308fde4fcb4326ab3c)
- https://raw.githubusercontent.com/X-PLUG/MobileAgent/HEAD/UI-S1/README.md (retrieved 2026-10-17T04:06:57Z; SHA-256 f668c890a5a87953a243715d0d47367c23f0c99b524d80f48bbdde8163f3e942)
- https://huggingface.co/datasets/mPLUG/UI_S1_dataset/raw/main/README.md (retrieved 2026-10-17T04:07:19Z; SHA-256 d826463e2aa159f083dc74869bfabb8abb5b8ea4f2cdf4aeb7676172b18aaaa5)

---

## UI-Vision

Desktop GUI data for interface understanding and interaction research.

- Catalog URL: https://awesomecua.com/resources/url-2c2004baae4669f8169a/
- Original source: https://huggingface.co/datasets/ServiceNow/ui-vision
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop
- Topics: grounding, screen-understanding
- Evidence checked: 2026-10-16T06:38:26Z
- ID: url:2c2004baae4669f8169a

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/url-2c2004baae4669f8169a/record.json

### Structured profile

- formats: JSON annotations, image files
- modalities: screenshots, bounding boxes, UI labels, action annotations
- splits: not recorded
- supervision: element grounding, layout grounding, action prediction

#### Count observations

- 83 software applications — paper-described benchmark coverage (reported; source: https://huggingface.co/datasets/ServiceNow/ui-vision/raw/main/README.md)

This is an offline evaluation dataset. Application coverage is not a sample count. The inspected file-layout documentation describes grounding annotations and images; it does not establish a common split or complete action-trajectory inventory.

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/ServiceNow/ui-vision
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/ServiceNow/ui-vision (retrieved 2026-10-16T06:38:26Z; SHA-256 34f4ad5c9e7160b5be5aa8ae77e6e9f83a277aada41a272b82a2628d21159a8c)
- https://huggingface.co/datasets/ServiceNow/ui-vision/raw/main/README.md (retrieved 2026-10-17T02:02:37Z; SHA-256 295cf7f7500a18cea5c80eab1cdf4d7264f2f0e959b75efc5ba59083d93c9097)
- https://huggingface.co/api/datasets/ServiceNow/ui-vision (retrieved 2026-10-16T06:38:26Z; SHA-256 34f4ad5c9e7160b5be5aa8ae77e6e9f83a277aada41a272b82a2628d21159a8c)

---

## UIBert AppSim and RefExp annotations

Two Rico-derived UI component retrieval datasets: AppSim pairs semantically similar elements across screens, while RefExp links referring expressions to target elements.

- Catalog URL: https://awesomecua.com/resources/github-google-research-datasets-uibert/
- Original source: https://github.com/google-research-datasets/uibert
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: grounding, screen-understanding, evaluation
- Evidence checked: 2026-10-17T12:30:54Z
- ID: github:google-research-datasets/uibert

### Limitations

The archived repository retains TFRecord train/dev/test files for AppSim and RefExp. These are annotation and UI-structure records with Rico image identifiers, not a republished complete screenshot collection or a UIBert checkpoint. The README’s 72k figure describes the upstream Rico source, not the number of released AppSim/RefExp examples; no sample total is inferred. The publisher explicitly assigns CC-BY-4.0 to these datasets.

- Record JSON: https://awesomecua.com/resources/github-google-research-datasets-uibert/record.json

### Structured profile

- formats: TFRecord
- modalities: text, bounding boxes, UI hierarchy metadata, Rico image identifiers
- splits: AppSim train/dev/test, RefExp train/dev/test
- supervision: similar UI element retrieval, referring-expression component retrieval

#### Count observations

No count recorded.

Original UI images are retrieved separately by Rico IDs. No release-specific sample count is established.

### License declarations

- code: not recorded
- data: CC-BY-4.0 — https://raw.githubusercontent.com/google-research-datasets/uibert/HEAD/README.md
- document: not recorded
- weights: not recorded

- data review: The README explicitly says the datasets are licensed under CC BY 4.0; original Rico materials keep their source terms.
  Sources: https://raw.githubusercontent.com/google-research-datasets/uibert/HEAD/README.md

### Primary evidence

- https://raw.githubusercontent.com/google-research-datasets/uibert/HEAD/README.md (retrieved 2026-10-17T12:30:54Z; SHA-256 45d1ca0f5c727cf58b2671dc5579f0628f4d78e07b977a5d8b018295c6fe1f58)
- https://api.github.com/repos/google-research-datasets/uibert (retrieved 2026-10-17T12:30:54Z; SHA-256 24a7838d425bdae363a7d5872702996b22068c1f0e47be274fdfbc4b0e20144f)
- https://api.github.com/repos/google-research-datasets/uibert/git/trees/main?recursive=1 (retrieved 2026-10-17T12:32:05Z; SHA-256 9a6fc19c6b407309943fe645f4addb3d032f153856976c4f8d7a8cfb6d2ffe6b)
- https://interactionmining.org/rico (retrieved 2026-10-17T12:36:55Z; SHA-256 f752ebfb2598b7f848d343f428502b28e0f591f27849ab707f14bee398d4eb8d)

---

## UICrit

Mobile-interface critiques and quality ratings with region coordinates and RICO screen references, including a larger three-annotator release than the original paper dataset.

- Catalog URL: https://awesomecua.com/resources/github-google-research-datasets-uicrit/
- Original source: https://github.com/google-research-datasets/uicrit
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: screen-understanding, ui-design, evaluation
- Evidence checked: 2026-10-17T02:02:45Z
- ID: github:google-research-datasets/uicrit

### Limitations

The published CSV contains critique text, normalized boxes, ratings and RICO IDs; screenshots are referenced through RICO. The README explicitly licenses the work CC-BY-4.0. Its current 1,000-screen, 11,344-critique release differs from the original paper population. The README cites an ACM DOI rather than an arXiv ID, so no paper relation is asserted here. Its README establishes mobile interfaces without naming an operating system.

- Record JSON: https://awesomecua.com/resources/github-google-research-datasets-uicrit/record.json

### Structured profile

- formats: CSV
- modalities: text, bounding boxes, quality ratings
- splits: not recorded
- supervision: design critique, region localization, quality rating

#### Count observations

- 1,000 mobile UI screens — current three-annotator release (reported; source: https://raw.githubusercontent.com/google-research-datasets/uicrit/HEAD/README.md)
- 11,344 design critiques — current three-annotator release (reported; source: https://raw.githubusercontent.com/google-research-datasets/uicrit/HEAD/README.md)

Publisher-reported current release, separate from the smaller original-paper population. Screenshot pixels are obtained through referenced RICO IDs.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/google-research-datasets/uicrit/HEAD/README.md (retrieved 2026-10-17T02:02:45Z; SHA-256 345ff7003120f146016741099dd57b9b1a9ffc54ce1fc90f4d16d61e31d379e6)
- https://api.github.com/repos/google-research-datasets/uicrit (retrieved 2026-10-17T02:02:45Z; SHA-256 5579bbbc622a2f9fa1f77b509c1ece17af023b8c14b53aa48dcc41288a5852f2)
- https://api.github.com/repos/google-research-datasets/uicrit/contents (retrieved 2026-10-17T02:02:45Z; SHA-256 8e790a53de8c40aa14f9e49aebf42b077e6a172a6841f38c7c6851af57b0617a)

---

## VideoCAD data

CAD screen recordings paired with action logs and target model images for studying precise interface control and long-horizon visual imitation.

- Catalog URL: https://awesomecua.com/resources/url-2b5dead3172c0b70da7e/
- Original source: https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/WX8PCK
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: grounding, imitation-learning, video
- Evidence checked: 2026-10-17T02:03:20Z
- ID: url:2b5dead3172c0b70da7e

### Limitations

Dataverse reports a RELEASED version 5.0 with 261 unrestricted files and a CC0-1.0 dataset declaration. Archive count is not a video or trajectory count. The author repository documents the action and video formats, and Section 3 of the v2 paper identifies the recorded Onshape browser interface. No archives or training samples were downloaded; operating-system coverage is unspecified.

- Record JSON: https://awesomecua.com/resources/url-2b5dead3172c0b70da7e/record.json

### Structured profile

- formats: ZIP, MP4, JSON, PNG
- modalities: video, UI action logs, target CAD images
- splits: not recorded
- supervision: timestamped UI actions, target model images

#### Count observations

- > 41,000 video recordings — VideoCAD published collection (reported; source: https://dataverse.harvard.edu/api/datasets/:persistentId/?persistentId=doi:10.7910/DVN/WX8PCK)

The reported video total is distinct from the Dataverse package-file count. The exact-version paper identifies the recorded interface as browser-based Onshape; operating-system compatibility is not established.

### License declarations

- code: not recorded
- data: CC0 1.0 — https://dataverse.harvard.edu/api/datasets/:persistentId/?persistentId=doi:10.7910/DVN/WX8PCK
- document: not recorded
- weights: not recorded

### Primary evidence

- https://dataverse.harvard.edu/api/datasets/:persistentId/?persistentId=doi:10.7910/DVN/WX8PCK (retrieved 2026-10-17T02:03:20Z; SHA-256 f67df0a4422a0484aaa2f93cd185b7000070d2a88d919d9ef995587f5e724007)
- https://raw.githubusercontent.com/ghadinehme/VideoCAD/2d69eeaf0ac44210c76dcab2d08b4d4610be236c/README.md (retrieved 2026-10-18T12:02:53.536297+00:00; SHA-256 cbb08803922b4b7736979ca0a5fe552b111fcd428fa9317401bc090b14bb4e54)
- https://arxiv.org/html/2505.24838v2 (retrieved 2026-10-18T12:02:34.311949+00:00; SHA-256 a303d95a811331cd6ee23b0340f1b9ef2dd996835bfbc66656a871ff94eead50)
- https://dataverse.harvard.edu/api/datasets/:persistentId/?persistentId=doi:10.7910/DVN/WX8PCK (retrieved 2026-10-17T02:03:20Z; SHA-256 f67df0a4422a0484aaa2f93cd185b7000070d2a88d919d9ef995587f5e724007)

---

## Wave UI

Screenshot-instruction records with target boxes and UI metadata such as OCR, source, element type and platform.

- Catalog URL: https://awesomecua.com/resources/url-0dbb55f127da04d95222/
- Original source: https://huggingface.co/datasets/agentsea/wave-ui
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: grounding, screen-understanding
- Evidence checked: 2026-10-17T04:01:33Z
- ID: url:0dbb55f127da04d95222

### Limitations

Train, validation and test Parquet files are publicly listed. The compilation license explicitly preserves each image’s original source terms and grants no extra rights to those images. The card exposes a platform column without listing its values, so operating-system coverage remains unspecified.

- Record JSON: https://awesomecua.com/resources/url-0dbb55f127da04d95222/record.json

### Structured profile

- formats: Parquet
- modalities: images, text, bounding boxes, OCR metadata
- splits: train, validation, test
- supervision: instruction-to-target boxes

#### Count observations

- 63,530 rows — train split (reported; source: https://huggingface.co/datasets/agentsea/wave-ui/raw/main/README.md)
- 7,944 rows — validation split (reported; source: https://huggingface.co/datasets/agentsea/wave-ui/raw/main/README.md)
- 7,938 rows — test split (reported; source: https://huggingface.co/datasets/agentsea/wave-ui/raw/main/README.md)

Card-reported row counts are not unique-screen counts. The source field is important for the per-image license terms; the compilation does not relicense original images.

### License declarations

- code: not recorded
- data: Wave UI Dataset License; per-image source terms retained — https://huggingface.co/datasets/agentsea/wave-ui/raw/main/LICENSE.md
- document: not recorded
- weights: not recorded

- data review: The compilation expressly does not relicense its images and lists differing source terms. No blanket permissive data license is appropriate.
  Sources: https://huggingface.co/datasets/agentsea/wave-ui/raw/main/LICENSE.md

### Primary evidence

- https://huggingface.co/api/datasets/agentsea/wave-ui (retrieved 2026-10-17T04:01:33Z; SHA-256 76e5e458eb8788f2c2cfddd06cb944327f363ec70120e122ce93d1350cf82e19)
- https://huggingface.co/datasets/agentsea/wave-ui/raw/main/README.md (retrieved 2026-10-17T04:01:33Z; SHA-256 27ec13aa77dc55113e4d1a19c2269070e2d69d2fe8df8e2313721a1e3fc66bd9)
- https://huggingface.co/datasets/agentsea/wave-ui/raw/main/LICENSE.md (retrieved 2026-10-17T04:06:57Z; SHA-256 63c6b3ce6a3d9c21a505865ceed698df2894bcb292590c59686e9477df867942)
- https://huggingface.co/datasets/cckevinn/GUI-Actor-Data/raw/main/README.md (retrieved 2026-10-17T02:42:32Z; SHA-256 e42bbcf8d466c977f9b2150feb73d8cbda2ff907c279630ad4730a8b1f5d665c)
- https://huggingface.co/api/datasets/agentsea/wave-ui (retrieved 2026-10-17T04:01:33Z; SHA-256 76e5e458eb8788f2c2cfddd06cb944327f363ec70120e122ce93d1350cf82e19)

---

## WebEvolver SFT data

Two JSONL collections for supervised fine-tuning the WebEvolver agent policy and web world model.

- Catalog URL: https://awesomecua.com/resources/url-e126bbd9729ebdaf05ab/
- Original source: https://huggingface.co/datasets/CognitiveKernel/WebEvolver
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, world-models, imitation-learning
- Evidence checked: 2026-10-18T04:35:17Z
- ID: url:e126bbd9729ebdaf05ab

### Limitations

The card and public manifest identify separate policy-model and world-model JSONL files. No row total or complete record schema is documented in the inspected card; the files were not downloaded as training samples. MIT is the publisher’s data declaration.

- Record JSON: https://awesomecua.com/resources/url-e126bbd9729ebdaf05ab/record.json

### Structured profile

- formats: JSONL
- modalities: not recorded
- splits: not recorded
- supervision: agent-policy supervised fine-tuning, web-world-model supervised fine-tuning

#### Count observations

No count recorded.

Two purpose-specific files are released: webevolver_policy_sft.jsonl and webevolver_world_model_sft.jsonl. They are not assumed disjoint train/test splits, and no modality or example count is inferred from filenames alone.

### License declarations

- code: not recorded
- data: MIT — https://huggingface.co/datasets/CognitiveKernel/WebEvolver/raw/13f4f45b359e138a45b1c89bd4e913298c586ca9/README.md
- document: not recorded
- weights: not recorded

- data review: Publisher dataset-card declaration for this release; it does not establish rights to all upstream screenshots, applications or source content.
  Sources: https://huggingface.co/datasets/CognitiveKernel/WebEvolver/raw/13f4f45b359e138a45b1c89bd4e913298c586ca9/README.md

### Primary evidence

- https://huggingface.co/datasets/CognitiveKernel/WebEvolver/raw/13f4f45b359e138a45b1c89bd4e913298c586ca9/README.md (retrieved 2026-10-18T04:35:17Z; SHA-256 36ccdce12c1b1512ad4b21326c5d0c0379c73e85f0b8150779d43240b54686de)
- https://huggingface.co/api/datasets/CognitiveKernel/WebEvolver (retrieved 2026-10-18T04:33:29Z; SHA-256 cbef3f8037405d311ed9fe8aa620ec3734f91c77ca8f4209fbe98167fb33bee8)
- https://raw.githubusercontent.com/Tencent/SelfEvolvingAgent/HEAD/WebEvolver/README.md (retrieved 2026-10-18T04:27:14Z; SHA-256 447dfa1e52789f7f3f111e9e0d453fb1f9fd8bf2d7b858f28fbe21a2239b4b2e)

---

## WebPRM checklist-generation data

Web-task context, starting observations and action history paired with structured checklists and subgoal analyses for checklist generation.

- Catalog URL: https://awesomecua.com/resources/url-fcc98b149272bbf31b05/
- Original source: https://huggingface.co/datasets/LangAGI-Lab/WebPRMCollection_checklist_generation
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: reward-models, data-generation, web-navigation
- Evidence checked: 2026-10-17T04:01:33Z
- ID: url:fcc98b149272bbf31b05

### Limitations

Five public Parquet shards are present. This collection provides checklist-generation supervision and is distinct from the previously cataloged chosen/rejected preference data. The Hub calls its split test; that label is preserved. No data license is declared.

- Record JSON: https://awesomecua.com/resources/url-fcc98b149272bbf31b05/record.json

### Structured profile

- formats: Parquet
- modalities: screenshots, text, action history
- splits: test
- supervision: checklist generation, subgoal analysis

#### Count observations

- 3,630 rows — Hub split named test (reported; source: https://huggingface.co/datasets/LangAGI-Lab/WebPRMCollection_checklist_generation/raw/main/README.md)

This is the checklist-generation release rather than the separate preference-pair collection. No unique-task count or data permission is inferred.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/LangAGI-Lab/WebPRMCollection_checklist_generation (retrieved 2026-10-17T04:01:33Z; SHA-256 2e4142675f2cb994c21a7620a5188b10147ab03326a2047946886b5916789ec2)
- https://huggingface.co/datasets/LangAGI-Lab/WebPRMCollection_checklist_generation/raw/main/README.md (retrieved 2026-10-17T04:01:33Z; SHA-256 3693cb307065a6ced63a4789a7f592b5eba0ad6a5ffe1a3caf0649decd5cb6e8)
- https://huggingface.co/api/collections/LangAGI-Lab/web-shepherd-advancing-prms-for-reinforcing-web-agents-682b4f4ad607fc27c4dc49e8 (retrieved 2026-10-17T02:45:05Z; SHA-256 647d9e7bdad5fe2c03a8cfcd34d93f3b2bf7c1553b517a4a843bc0113fa47456)
- https://raw.githubusercontent.com/kyle8581/Web-Shepherd/HEAD/README.md (retrieved 2026-10-17T02:44:04Z; SHA-256 07431058d8b9a71b80e75b7a74a40a8346c1503eec240628459cc4d4e2f0802f)
- https://huggingface.co/api/datasets/LangAGI-Lab/WebPRMCollection_checklist_generation (retrieved 2026-10-17T04:01:33Z; SHA-256 2e4142675f2cb994c21a7620a5188b10147ab03326a2047946886b5916789ec2)

---

## WebPRM Collection preference data

Checklist-annotated web decision records with page observations, prior actions, one preferred continuation and rejected alternatives for process-reward learning.

- Catalog URL: https://awesomecua.com/resources/url-8dfc84eb4016204fe70a/
- Original source: https://huggingface.co/datasets/LangAGI-Lab/WebPRMCollection_preference_pair
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, reward-models, evaluation
- Evidence checked: 2026-10-17T02:44:50Z
- ID: url:8dfc84eb4016204fe70a

### Limitations

Ten public Parquet shards are present. The card names its split test and reports 9,460 rows; the project’s 40K-plus preference-annotation claim is a different grain and is not substituted for this row count. A row can contain multiple rejected alternatives. No data-license declaration is present.

- Record JSON: https://awesomecua.com/resources/url-8dfc84eb4016204fe70a/record.json

### Structured profile

- formats: Parquet
- modalities: screenshots, text, action history
- splits: test
- supervision: preferred and rejected continuations, task checklists

#### Count observations

- 9,460 rows — Hub split named test (reported; source: https://huggingface.co/datasets/LangAGI-Lab/WebPRMCollection_preference_pair/raw/main/README.md)

Preserves the publisher’s split label despite the collection’s training purpose. Rows are not individual preference pairs because rejected is a list. Data license is unknown.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/LangAGI-Lab/WebPRMCollection_preference_pair/raw/main/README.md (retrieved 2026-10-17T02:44:50Z; SHA-256 9c091c5fc625ce53f53f8262f5cee8d08194e4fd1b8eeed543ff1c3723c823fd)
- https://huggingface.co/api/datasets/LangAGI-Lab/WebPRMCollection_preference_pair (retrieved 2026-10-17T02:44:50Z; SHA-256 28a1d5d12e84fc38515bd3c5031ae0cf315c5f8772b90d982d926b98f2857563)
- https://raw.githubusercontent.com/kyle8581/Web-Shepherd/HEAD/README.md (retrieved 2026-10-17T02:44:04Z; SHA-256 07431058d8b9a71b80e75b7a74a40a8346c1503eec240628459cc4d4e2f0802f)

---

## WebSRC v1.0

Webpage segments, questions, answers, HTML, screenshots and layout metadata for structural reading comprehension.

- Catalog URL: https://awesomecua.com/resources/url-e0ba328ae1a643b0a5aa/
- Original source: https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0
- Kind: dataset
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: screen-understanding, grounding
- Evidence checked: 2026-10-18T04:35:16Z
- ID: url:e0ba328ae1a643b0a5aa

### Limitations

Public release includes train+dev and test ZIP packages plus a test-answer JSON file. The v1.0 card’s exact split table differs from the older project-page headline of 0.44M questions/6.5K pages; counts are kept with their sources. This is static webpage understanding, not an interactive browser-agent trajectory dataset. CC-BY-4.0 is the data-card declaration.

- Record JSON: https://awesomecua.com/resources/url-e0ba328ae1a643b0a5aa/record.json

### Structured profile

- formats: CSV, HTML, JSON, ZIP packages
- modalities: questions and answers, HTML, screenshots, layout metadata
- splits: train, dev, test
- supervision: extractive or yes/no answers, answer DOM-element references

#### Count observations

- 307,315 question–answer examples — WebSRC v1.0 train (reported; source: https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md)
- 4,549 web pages — WebSRC v1.0 train (reported; source: https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md)
- 52,826 question–answer examples — WebSRC v1.0 dev (reported; source: https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md)
- 913 web pages — WebSRC v1.0 dev (reported; source: https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md)
- 40,357 question–answer examples — WebSRC v1.0 test (reported; source: https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md)
- 985 web pages — WebSRC v1.0 test (reported; source: https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md)

Each dataset.csv row is a QA example; web pages and QA examples are different units. Use the v1.0 split table rather than merging the older project headline into it. The card retains email-evaluation instructions, while the manifest now includes test answers; no submission was made. Payload archives were not downloaded.

### License declarations

- code: not recorded
- data: CC-BY-4.0 — https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md
- document: not recorded
- weights: not recorded

- data review: Publisher dataset-card declaration for this release; it does not establish rights to all upstream screenshots, applications or source content.
  Sources: https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md

### Primary evidence

- https://huggingface.co/datasets/X-LANCE/WebSRC_v1.0/raw/7aa0bc6efc7ef43f68c192e2091108541acbaf1a/README.md (retrieved 2026-10-18T04:35:16Z; SHA-256 061e5bcaa49e819f0133afb912ad5ce20a8c2b6c28ca60319a4635d6ce835ddb)
- https://huggingface.co/api/datasets/X-LANCE/WebSRC_v1.0 (retrieved 2026-10-18T04:33:29Z; SHA-256 a7976dd931c3fcf11de2456614f95eb071978599bd70fb89c0ea009d31da4300)
- https://x-lance.github.io/WebSRC/ (retrieved 2026-10-17T15:37:04Z; SHA-256 3c2c601d8b4ad2f379cac9b97a2cbb901883d9bc6c1a682359f9b4135e6dd4bc)

---

## WebUI

Web screenshot and interface data for UI research.

- Catalog URL: https://awesomecua.com/resources/url-13b9442bcb6a8b984c4f/
- Original source: https://huggingface.co/datasets/biglab/webui-all
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: screen-understanding
- Evidence checked: 2026-10-16T06:38:26Z
- ID: url:13b9442bcb6a8b984c4f

### Limitations

The card links the WebUI project's ACM publication (DOI 10.1145/3544548.3581158) and website, not an arXiv record or a catalogued repository, so no paper or family relation is recorded.

- Record JSON: https://awesomecua.com/resources/url-13b9442bcb6a8b984c4f/record.json

### License declarations

- code: not recorded
- data: other — https://huggingface.co/datasets/biglab/webui-all
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/biglab/webui-all (retrieved 2026-10-16T06:38:26Z; SHA-256 70928db908760c1561bfc8e0cd7d925e0103ffddef4676fbaa7c1756a804b99a)
- https://huggingface.co/datasets/biglab/webui-all/raw/main/README.md (retrieved 2026-10-17T16:10:53Z; SHA-256 93bd04914735f748d687b71597970a79d95ae8636e7ed75d267ebd6954d11a8f)
- https://huggingface.co/api/datasets/biglab/webui-all (retrieved 2026-10-16T06:38:26Z; SHA-256 70928db908760c1561bfc8e0cd7d925e0103ffddef4676fbaa7c1756a804b99a)

---

## WorkDemo-350

Desktop demonstrations with task descriptions, videos, input logs, and action-linked screenshot evidence for studying reusable agent skills.

- Catalog URL: https://awesomecua.com/resources/url-243ab00712ba19cc2089/
- Original source: https://huggingface.co/datasets/yuqi777/WorkDemo-350
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop
- Topics: recording, workflow, video
- Evidence checked: 2026-10-16T10:47:49Z
- ID: url:243ab00712ba19cc2089

### Limitations

The card documents post hoc selection of the 286-task OSWorld subset based on model outcomes, uncalibrated coordinate annotations, and missing task-success acceptance records. It provides no train/test split or complete evaluator and does not claim complete anonymization. Review these limits before training or evaluation; the collection is an offline demonstration asset.

- Record JSON: https://awesomecua.com/resources/url-243ab00712ba19cc2089/record.json

### Structured profile

- formats: MP4, PNG, JSON, JSONL, commented key logs
- modalities: screen video, screenshots, input events, task text
- splits: not recorded
- supervision: human workflow demonstrations, skill induction

#### Count observations

- 350 demonstrations — packaged tasks/videos (reported; source: https://huggingface.co/datasets/yuqi777/WorkDemo-350/raw/main/README.md)
- 8,388 evidence images — final packaged images (reported; source: https://huggingface.co/datasets/yuqi777/WorkDemo-350/raw/main/README.md)
- 11,951 action records — packaged action traces (reported; source: https://huggingface.co/datasets/yuqi777/WorkDemo-350/raw/main/README.md)

The OSWorld subset was selected post hoc using model outcomes; no train/test split is supplied. Coordinate calibration, task success, and complete anonymization are not established by package-format checks.

### License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/yuqi777/WorkDemo-350/raw/main/README.md
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/yuqi777/WorkDemo-350/raw/main/README.md (retrieved 2026-10-16T10:47:49Z; SHA-256 ae14cfe91c8c9a79edf1f306273a2ee9d1790b1dc5be0cd2d89e93df09db42f0)
- https://huggingface.co/datasets/yuqi777/WorkDemo-350/raw/main/README.md (retrieved 2026-10-16T10:47:49Z; SHA-256 ae14cfe91c8c9a79edf1f306273a2ee9d1790b1dc5be0cd2d89e93df09db42f0)
