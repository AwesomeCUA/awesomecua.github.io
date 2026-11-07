# Computer-use agent benchmarks

> 91 curated records of this kind in the AwesomeCUA catalog, each with its complete annotation, primary evidence and license declarations. Snapshot 2026-11-07T05:19:53Z.

HTML page: https://awesomecua.com/categories/benchmark/ · Catalog index: https://awesomecua.com/llms.txt · API: https://awesomecua.com/api/v1/resources.json

Reviews are AI-assisted inspections of primary sources. Code, data, weights and document licenses are recorded separately.

---

## Adversarial Web Agents

Evaluation resources for adversarial attacks on multimodal web agents.

- Catalog URL: https://awesomecua.com/resources/github-chenwu98-agent-attack/
- Original source: https://github.com/ChenWu98/agent-attack
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: safety-security, robustness
- Evidence checked: 2026-10-16T06:40:54Z
- ID: github:chenwu98/agent-attack

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-chenwu98-agent-attack/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ChenWu98/agent-attack/HEAD/README.md (retrieved 2026-10-16T06:40:54Z; SHA-256 0759e1212025ac487c1646877f97526d35db1a62337192800acaff7684471087)
- https://export.arxiv.org/api/query?id_list=2406.12814%2C2406.13719%2C2406.14056%2C2406.14250%2C2406.14314%2C2406.18082%2C2406.19263%2C2407.00993%2C2407.01476%2C2407.01489%2C2407.01511%2C2407.01558%2C2407.03037%2C2407.03913%2C2407.04346%2C2407.05291%2C2407.07061%2C2407.08850%2C2407.09018%2C2407.09295%2C2407.10956%2C2407.13032%2C2407.13063%2C2407.15673%2C2407.15711%2C2407.16741%2C2407.17490%2C2407.18901%2C2407.19056%2C2407.20183%2C2408.00203%2C2408.02544%2C2408.06327%2C2408.07199%2C2408.11824%2C2408.15978%2C2409.02453%2C2409.04566%2C2409.07429%2C2409.08264%2C2409.09354%2C2409.10741%2C2409.11295%2C2409.13711%2C2409.14337%2C2409.14818%2C2409.15441%2C2409.15637%2C2409.17140%2C2409.20566&max_results=50 (retrieved 2026-10-16T06:31:32Z; SHA-256 b9a83994d8ac36ccdb606a5219511f8bb35ad3948ade4f9f3e28d386221aedfb)

---

## AgentBench

Agent evaluation suite with containerized tasks and a function-calling interface, including operating-system and shopping environments.

- Catalog URL: https://awesomecua.com/resources/github-thudm-agentbench/
- Original source: https://github.com/THUDM/AgentBench
- Kind: benchmark
- Review: curated
- Scope: adjacent
- Environments: cross-platform, web
- Topics: evaluation, tool-integration
- Evidence checked: 2026-10-16T10:42:12Z
- ID: github:thudm/agentbench

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-thudm-agentbench/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/THUDM/AgentBench/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/THUDM/AgentBench/HEAD/README.md (retrieved 2026-10-16T10:42:12Z; SHA-256 1b7d1f1cd7a74ac9497c639324ec342dd3f8769e9c0c4cd2cd92a4eb6740ac98)
- https://raw.githubusercontent.com/THUDM/AgentBench/HEAD/LICENSE (retrieved 2026-10-16T10:48:41Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## AgentDAM

Web-agent benchmark for measuring unnecessary use of sensitive personal information during end-to-end task execution.

- Catalog URL: https://awesomecua.com/resources/github-facebookresearch-ai-agent-privacy/
- Original source: https://github.com/facebookresearch/ai-agent-privacy
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: safety-security, evaluation
- Evidence checked: 2026-10-16T10:42:34Z
- ID: github:facebookresearch/ai-agent-privacy

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-facebookresearch-ai-agent-privacy/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/facebookresearch/ai-agent-privacy/HEAD/README.md (retrieved 2026-10-16T10:42:34Z; SHA-256 9c938f8f3f3ee04f459362a8b7d399588fd030ce476cda111e5f23fbf1e31f10)

---

## AgentRewardBench

A benchmark and evaluation toolkit for comparing automatic web-agent judges against expert judgments of task success, side effects and repetition.

- Catalog URL: https://awesomecua.com/resources/github-mcgill-nlp-agent-reward-bench/
- Original source: https://github.com/McGill-NLP/agent-reward-bench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, reward-models, web-navigation
- Evidence checked: 2026-10-17T03:59:54Z
- ID: github:mcgill-nlp/agent-reward-bench

### Limitations

The public repository contains judges, evaluation utilities and annotation files; the linked Hub hosts trajectory/screenshot manifests. No root code license is declared. Dataset Terms of Use are custom and retain third-party restrictions rather than declaring an SPDX license. The paper-reported 1,302 trajectories describe its reviewed study population, not a count recomputed from current Hub files.

- Record JSON: https://awesomecua.com/resources/github-mcgill-nlp-agent-reward-bench/record.json

### Structured profile

- actions: judge verdicts
- evaluation: Compare automatic judgments with expert answers on task success, side effects and repetitiveness.
- focus: automatic evaluator agreement, task success, side effects, repetition
- observations: web trajectories, screenshots, actions
- setting: offline

#### Count observations

- 1,302 trajectories — paper-reported expert-reviewed set (reported; source: https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=700&max_results=100&sortBy=submittedDate&sortOrder=descending)

Counts refer to the paper study; current Hub package files are not converted into trajectory totals.

### License declarations

- code: not recorded
- data: Custom AgentRewardBench Terms of Use — https://huggingface.co/datasets/McGill-NLP/agent-reward-bench/raw/main/README.md
- document: not recorded
- weights: not recorded

- data review: The dataset card supplies custom Terms of Use and preserves third-party conditions. The repository has no root code license, and no dataset license is inherited from its benchmarks.
  Sources: https://huggingface.co/datasets/McGill-NLP/agent-reward-bench/raw/main/README.md

### Primary evidence

- https://raw.githubusercontent.com/McGill-NLP/agent-reward-bench/HEAD/README.md (retrieved 2026-10-17T03:59:54Z; SHA-256 fb753e41c3eb19be172e9e7fccbc6bcadf44288507f82b190ca99e64144294b6)
- https://api.github.com/repos/McGill-NLP/agent-reward-bench (retrieved 2026-10-17T03:59:54Z; SHA-256 7dfac983a6e443d5f66e1fc0fc3706ebea4c93005f03457cc0a2b13a2bd89601)
- https://api.github.com/repos/McGill-NLP/agent-reward-bench/git/trees/main?recursive=1 (retrieved 2026-10-17T03:59:54Z; SHA-256 79a1639cd4738719e51fc7f32313d63c0483914517cee96175459f63513e8c07)
- https://huggingface.co/api/datasets/McGill-NLP/agent-reward-bench (retrieved 2026-10-17T04:03:18Z; SHA-256 20c910fad3ad45a0c8c39b182c53632a821d3b6b546278bea6b7a78fbcb3f6cb)
- https://huggingface.co/datasets/McGill-NLP/agent-reward-bench/raw/main/README.md (retrieved 2026-10-17T04:03:20Z; SHA-256 e16adf817e3950441d70c7bb1bb3f44bd8dc65344938247f23fea4aaff9f654e)
- https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=700&max_results=100&sortBy=submittedDate&sortOrder=descending (retrieved 2026-10-16T06:36:54Z; SHA-256 4953a8e0f029016aef668bce98cec4d2873a7ae49c1fe33c4311fa5eb8d24089)

---

## AndroidArena

Android environment for evaluating language-model-driven agents.

- Catalog URL: https://awesomecua.com/resources/github-androidarenaagent-androidarena/
- Original source: https://github.com/AndroidArenaAgent/AndroidArena
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: android
- Topics: evaluation, mobile-navigation
- Evidence checked: 2026-10-16T06:35:58Z
- ID: github:androidarenaagent/androidarena

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-androidarenaagent-androidarena/record.json

### Structured profile

- actions: app launch/stop, click/double-click/long-click, text input, swipe/drag and Android navigation, finish
- evaluation: The released evaluator compares trajectories with reference actions using longest-common-subsequence-based task reward and completion. Its reversed redundancy metric is the reference/predicted action-length ratio (with 1e-6 denominator smoothing), multiplied by the LLM success flag. LLM success judgments and instruction-constraint checks are separate metrics. Full reference-dependent evaluation coverage cannot be assumed because complete annotated action sequences are not released.
- focus: multi-step Android tasks, cross-app workflows and instruction constraints
- observations: UI hierarchy text, screenshots, combined text/image observations
- setting: interactive

#### Count observations

No count recorded.

README states that task instructions are released but annotated action sequences, apart from the calendar example, will come later. Environment setup targets Android API 33 with uiautomator2 and manual Google-account setup. Public task YAML and evaluator code exist, but benchmark execution and full reference coverage were not verified. No task total is derived from app YAML file counts. Code and data licenses remain unknown.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/AndroidArenaAgent/AndroidArena/HEAD/README.md (retrieved 2026-10-16T06:35:58Z; SHA-256 206bd0dc5220cf754cffc97767cce6a3cd27660ef050a569366bef2331241c60)
- https://raw.githubusercontent.com/AndroidArenaAgent/AndroidArena/HEAD/android_env2/README.md (retrieved 2026-10-17T14:21:10Z; SHA-256 a1e7dc0c5facae030c2cf19aad6511996e7e1198d8d6619268d10c29a1b57bcf)
- https://api.github.com/repos/AndroidArenaAgent/AndroidArena/git/trees/main?recursive=1 (retrieved 2026-10-17T14:14:05Z; SHA-256 edc03388b67143644db4a412e4c888f8c796068daff29f63615f0b6a3a04262a)
- https://raw.githubusercontent.com/AndroidArenaAgent/AndroidArena/HEAD/android_env2/observation.py (retrieved 2026-10-17T14:24:52Z; SHA-256 cfa9d272c85398f54c18d6e7445d680009e8c16d128962235d899592d3094c2f)
- https://raw.githubusercontent.com/AndroidArenaAgent/AndroidArena/HEAD/android_env2/actions.py (retrieved 2026-10-17T14:24:53Z; SHA-256 d25f2edf9202f59615341b62fc6046ac23a6f4cb072a6038ac562506cbdc891c)
- https://raw.githubusercontent.com/AndroidArenaAgent/AndroidArena/HEAD/run_evaluator.py (retrieved 2026-10-17T14:21:10Z; SHA-256 257c42e980a0b14bd74bfcc381a0ecbef2b538c0f1cc1a94d22925efe354fb8e)

---

## AndroidLab

Reproducible Android benchmark of 138 tasks across nine apps on predefined virtual devices, run via AVD on Mac or Docker on Linux, released with the Android Instruct training set.

- Catalog URL: https://awesomecua.com/resources/github-thudm-android-lab/
- Original source: https://github.com/THUDM/Android-Lab
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: android
- Topics: evaluation, mobile-navigation
- Evidence checked: 2026-10-16T06:35:58Z
- ID: github:thudm/android-lab

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-thudm-android-lab/record.json

### Structured profile

- actions: Android operations through the agent framework
- evaluation: The evaluation pipeline produces success, subgoal success, reversed redundancy, and reasonable-operation metrics; result generation requires a configured judge model.
- focus: Android task completion, subgoal completion, operation efficiency
- observations: UI XML, set-of-marks views
- setting: interactive

#### Count observations

- 138 tasks — benchmark task collection (reported; source: https://raw.githubusercontent.com/THUDM/Android-Lab/HEAD/README.md)
- 9 applications — benchmark application set (reported; source: https://raw.githubusercontent.com/THUDM/Android-Lab/HEAD/README.md)

The benchmark uses predefined virtual-device images and apps chosen to work without network/login requirements. XML and SoM modes should be reported separately. These counts concern evaluation tasks, not the separately released Android Instruct training set.

### License declarations

- code: MIT — https://raw.githubusercontent.com/THUDM/Android-Lab/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/THUDM/Android-Lab/HEAD/README.md (retrieved 2026-10-16T06:35:58Z; SHA-256 340680a9a7833d103234b8367195deebd29bfec7e25ebc50c2dc04fc3627e55b)
- https://raw.githubusercontent.com/THUDM/Android-Lab/HEAD/README.md (retrieved 2026-10-16T06:35:58Z; SHA-256 340680a9a7833d103234b8367195deebd29bfec7e25ebc50c2dc04fc3627e55b)
- https://raw.githubusercontent.com/THUDM/Android-Lab/HEAD/LICENSE (retrieved 2026-10-16T06:41:58Z; SHA-256 1bbbee919161337e2456c587c6be809214406482cd9f1292a9eb62428f6961f3)

---

## AndroidWorld

Android environment with programmatic task evaluation for mobile agents.

- Catalog URL: https://awesomecua.com/resources/github-google-research-android-world/
- Original source: https://github.com/google-research/android_world
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: android
- Topics: evaluation, mobile-navigation
- Evidence checked: 2026-10-16T06:35:57Z
- ID: github:google-research/android_world

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-google-research-android-world/record.json

### Structured profile

- actions: Android device interactions
- evaluation: Programmatic task-specific initialization, system-state success checks, and teardown.
- focus: mobile task completion
- observations: screenshots, accessibility information
- setting: interactive

#### Count observations

- 116 task definitions — parameterized AndroidWorld tasks (reported; source: https://raw.githubusercontent.com/google-research/android_world/HEAD/README.md)
- 20 applications — documented AndroidWorld app set (reported; source: https://raw.githubusercontent.com/google-research/android_world/HEAD/README.md)

Random parameters produce many instances from the same task definitions. Preserve seeds and parameterization; 116 is not a count of all possible task instances.

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/google-research/android_world/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/google-research/android_world/HEAD/README.md (retrieved 2026-10-16T06:35:57Z; SHA-256 93201de5e21f2b12283a75b1e2c357781b2e6cc27eab20cc7dd7aa0f5919d839)
- https://export.arxiv.org/api/query?id_list=2403.03186%2C2403.03788%2C2403.07718%2C2403.10170%2C2403.11905%2C2403.16971%2C2403.17918%2C2403.20271%2C2404.01549%2C2404.01744%2C2404.02475%2C2404.03648%2C2404.05427%2C2404.05719%2C2404.05955%2C2404.06474%2C2404.07972%2C2404.08755%2C2404.08860%2C2404.08948%2C2404.09992%2C2404.10887%2C2404.11459%2C2404.16006%2C2404.16048%2C2404.16054%2C2404.16660%2C2404.18074%2C2404.19296%2C2405.00516%2C2405.11120%2C2405.12842%2C2405.14573%2C2405.14751%2C2405.15793%2C2405.16247%2C2405.20309%2C2406.01014%2C2406.01623%2C2406.03679%2C2406.06947%2C2406.07822%2C2406.08184%2C2406.08340%2C2406.08451%2C2406.10227%2C2406.10819%2C2406.11317%2C2406.11896%2C2406.12373&max_results=50 (retrieved 2026-10-16T06:31:28Z; SHA-256 be244bfae7f89ef9449b69d85aac44295eb7b5f7e5e1bbedd76df312696676a7)
- https://raw.githubusercontent.com/google-research/android_world/HEAD/LICENSE (retrieved 2026-10-16T06:41:57Z; SHA-256 b09fcaf4fbc265223c2479c410beef2b98c5e687c78ecedf3452aa12ffc465f1)

---

## AppSim-Bench

Simulated mobile applications and evaluation tooling for reproducible GUI-agent tasks with controlled application state.

- Catalog URL: https://awesomecua.com/resources/github-acrab-agentic-labs-appsim/
- Original source: https://github.com/Acrab-Agentic-Labs/AppSim
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: android
- Topics: evaluation, sandbox
- Evidence checked: 2026-10-16T10:42:12Z
- ID: github:acrab-agentic-labs/appsim

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-acrab-agentic-labs-appsim/record.json

### Structured profile

- actions: mobile GUI operations
- evaluation: Controlled backend data and outcome-based task verification.
- focus: mobile task completion
- observations: mobile interfaces
- setting: interactive

#### Count observations

- 557 tasks — AppSim-Bench paper-described release (reported; source: https://arxiv.org/abs/2609.07712)
- 17 applications — published simulated app set (reported; source: https://raw.githubusercontent.com/Acrab-Agentic-Labs/AppSim/HEAD/README.md)

Use the simulated apps and controlled backend state supplied by the benchmark. Desktop host instructions are not the platform being evaluated.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Acrab-Agentic-Labs/AppSim/HEAD/README.md (retrieved 2026-10-16T10:42:12Z; SHA-256 12dc2afe339c1ed66e4a6a4ccf5ae13d27ce32f452960341529a4b9016f69059)
- https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=100&max_results=100&sortBy=submittedDate&sortOrder=descending (retrieved 2026-10-16T06:36:32Z; SHA-256 13d3fb5811d203f2e6b80eb45d30ebc0b3cfefd88e2034ffa3b1b80687bef285)

---

## AppWorld

Simulated applications, user data, and state-based task checks for evaluating agents that interact through APIs and code.

- Catalog URL: https://awesomecua.com/resources/github-stonybrooknlp-appworld/
- Original source: https://github.com/StonyBrookNLP/appworld
- Kind: benchmark
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: evaluation, tool-integration, cross-app
- Evidence checked: 2026-10-16T10:45:03Z
- ID: github:stonybrooknlp/appworld

### Limitations

Primarily API and coding interaction; included as an adjacent comparison for GUI and hybrid agents.

- Record JSON: https://awesomecua.com/resources/github-stonybrooknlp-appworld/record.json

### Structured profile

- actions: Python code, application API calls
- evaluation: State-based unit tests check task outcomes and unintended changes.
- focus: interactive coding, cross-app tool use
- observations: API documentation, execution feedback
- setting: interactive

#### Count observations

- 750 tasks — original AppWorld benchmark (2024 paper) (reported; source: https://arxiv.org/abs/2407.18901)
- 9 applications — original AppWorld environment (2024 paper) (reported; source: https://arxiv.org/abs/2407.18901)

This is an adjacent API/coding benchmark, not a screenshot-only task suite. Preserve the named release; task counts here refer to the original paper.

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/StonyBrookNLP/appworld/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/stonybrooknlp/appworld/HEAD/README.md (retrieved 2026-10-16T10:45:03Z; SHA-256 f4049141b6e520217395b7ccd9f27048c8e0f90331690dcbef300d2bc4ff7bdd)
- https://export.arxiv.org/api/query?id_list=2406.12814%2C2406.13719%2C2406.14056%2C2406.14250%2C2406.14314%2C2406.18082%2C2406.19263%2C2407.00993%2C2407.01476%2C2407.01489%2C2407.01511%2C2407.01558%2C2407.03037%2C2407.03913%2C2407.04346%2C2407.05291%2C2407.07061%2C2407.08850%2C2407.09018%2C2407.09295%2C2407.10956%2C2407.13032%2C2407.13063%2C2407.15673%2C2407.15711%2C2407.16741%2C2407.17490%2C2407.18901%2C2407.19056%2C2407.20183%2C2408.00203%2C2408.02544%2C2408.06327%2C2408.07199%2C2408.11824%2C2408.15978%2C2409.02453%2C2409.04566%2C2409.07429%2C2409.08264%2C2409.09354%2C2409.10741%2C2409.11295%2C2409.13711%2C2409.14337%2C2409.14818%2C2409.15441%2C2409.15637%2C2409.17140%2C2409.20566&max_results=50 (retrieved 2026-10-16T06:31:32Z; SHA-256 b9a83994d8ac36ccdb606a5219511f8bb35ad3948ade4f9f3e28d386221aedfb)
- https://raw.githubusercontent.com/StonyBrookNLP/appworld/HEAD/LICENSE (retrieved 2026-10-16T10:48:42Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## B-MoCA

Mobile control benchmark with varied interface configurations.

- Catalog URL: https://awesomecua.com/resources/github-jylee425-b-moca/
- Original source: https://github.com/jylee425/b-moca
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: android
- Topics: evaluation, robustness
- Evidence checked: 2026-10-16T06:35:58Z
- ID: github:jylee425/b-moca

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-jylee425-b-moca/record.json

### Structured profile

- actions: normalized touch/lift coordinate pairs for tap or swipe
- evaluation: Task success is detected using Appium; positive task reward terminates the episode. Environment variants change device/locale/wallpaper/DPI/dark mode and are loaded as snapshots. The numeric action interface is (touch_y, touch_x, lift_y, lift_x); wrapper/tanh transformations must be kept with the evaluated agent.
- focus: Android control across visual/device variation, generalization across environment snapshots
- observations: screenshot pixels, XML view hierarchy, goal instruction
- setting: interactive

#### Count observations

- 131 task-definition files — asset/tasks/**/*.textproto in retained release/ver.3 tree; not a paper test-task total (computed) (computed; source: https://api.github.com/repos/jylee425/b-moca/git/trees/release/ver.3?recursive=1)
- 35 environment configuration rows — environments_train.csv, retained release/ver.3 snapshot (computed) (computed; source: https://raw.githubusercontent.com/jylee425/b-moca/HEAD/asset/environments/config/environments_train.csv)
- 10 environment configuration rows — environments_test.csv, retained release/ver.3 snapshot (computed) (computed; source: https://raw.githubusercontent.com/jylee425/b-moca/HEAD/asset/environments/config/environments_test.csv)

Current source inventory differs in grain from published experiment subsets: do not multiply 131 definitions by 35/10 configuration rows or label the product as evaluated tasks. Setup requires Android API 29, Appium, external app versions and generated AVD snapshots. No apps/snapshots were downloaded or run. Code Apache-2.0 does not establish data or app rights.

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/jylee425/b-moca/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/jylee425/b-moca/HEAD/readme.md (retrieved 2026-10-16T06:35:58Z; SHA-256 bd1354c8008d7d79d4883c0c037b7918392f86fab61391b39b52e507b04672ce)
- https://api.github.com/repos/jylee425/b-moca/git/trees/release/ver.3?recursive=1 (retrieved 2026-10-17T14:14:05Z; SHA-256 06ba40a5e0d5fb52e7bf5e5df636cb8e8bbbc56a8308dc6d528012489f7650ee)
- https://raw.githubusercontent.com/jylee425/b-moca/HEAD/bmoca/environment/coordinator.py (retrieved 2026-10-17T14:24:53Z; SHA-256 34bc0c23949732e0a8091e334d59d2d41cae49a82cde850247aa0e6d739d2464)
- https://raw.githubusercontent.com/jylee425/b-moca/HEAD/bmoca/environment/environment.py (retrieved 2026-10-17T14:21:10Z; SHA-256 d866af344c0cff5255b813576f2e9e9c5c2964e6809058b39e2b5180af71d946)
- https://raw.githubusercontent.com/jylee425/b-moca/HEAD/asset/environments/config/environments_train.csv (retrieved 2026-10-17T14:23:14Z; SHA-256 c278cc28f8a0667b7fdc6ba638704cfbe43783cd496181231c45c865087543f3)
- https://raw.githubusercontent.com/jylee425/b-moca/HEAD/asset/environments/config/environments_test.csv (retrieved 2026-10-17T14:23:15Z; SHA-256 4b92933fe4f4f66e71a694b579940db11bedd5ea8f153752a44e633825b06fa3)
- https://raw.githubusercontent.com/jylee425/b-moca/HEAD/LICENSE (retrieved 2026-10-16T06:41:58Z; SHA-256 cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30)
- https://api.github.com/repos/gimme1dollar/b-moca (retrieved 2026-10-17T14:14:03Z; SHA-256 9d4706306b04960f0eb4298887496961efdee6b7d41445e82abcac489d63779f)
- https://api.github.com/repos/jylee425/b-moca (retrieved 2026-10-17T14:14:04Z; SHA-256 9d4706306b04960f0eb4298887496961efdee6b7d41445e82abcac489d63779f)

---

## BrowserART

Red-teaming benchmark and test suite from Scale AI evaluating whether refusal-trained language models can be jailbroken when deployed as browser agents.

- Catalog URL: https://awesomecua.com/resources/github-scaleapi-browser-art/
- Original source: https://github.com/scaleapi/browser-art
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: safety-security, evaluation, web-navigation
- Evidence checked: 2026-10-18T10:59:54Z
- ID: github:scaleapi/browser-art

### Limitations

The retained README and LICENSE contain conflicting code-license declarations. The catalog leaves the code-license value unknown pending an upstream clarification; it does not infer data or model permissions.

- Record JSON: https://awesomecua.com/resources/github-scaleapi-browser-art/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: The retained README states that the project is MIT licensed, while the retained LICENSE contains Creative Commons Attribution-NonCommercial-NoDerivatives 4.0. These declarations conflict, so a settled code license is not asserted.
  Sources: https://raw.githubusercontent.com/scaleapi/browser-art/HEAD/README.md, https://raw.githubusercontent.com/scaleapi/browser-art/HEAD/LICENSE

### Primary evidence

- https://raw.githubusercontent.com/scaleapi/browser-art/HEAD/README.md (retrieved 2026-10-18T10:59:54Z; SHA-256 a9d33536fae38485eb6aac9698ae22ed3533510d43f783d6c0e9f9cf95d9c58f)
- https://raw.githubusercontent.com/scaleapi/browser-art/HEAD/LICENSE (retrieved 2026-10-18T11:03:46Z; SHA-256 f7f28b8c7a1af76b9874ca6d040e8b1eb6768fd1043106c9d315090ea96754e7)
- https://raw.githubusercontent.com/scaleapi/browser-art/HEAD/LICENSE (retrieved 2026-10-18T11:03:46Z; SHA-256 f7f28b8c7a1af76b9874ca6d040e8b1eb6768fd1043106c9d315090ea96754e7)

---

## BrowserGym

Unified interfaces for browser-agent tasks and benchmark environments.

- Catalog URL: https://awesomecua.com/resources/github-servicenow-browsergym/
- Original source: https://github.com/ServiceNow/BrowserGym
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation
- Evidence checked: 2026-10-16T06:35:57Z
- ID: github:servicenow/browsergym

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-servicenow-browsergym/record.json

### Structured profile

- actions: element-ID actions, coordinate mouse and keyboard actions, tab/navigation/scroll operations, Python/Playwright action mode
- evaluation: Gymnasium reset/step interface delegates reward, completion, messages and task info to each adapter’s validate() method. There is no universal BrowserGym success metric or shared task total; retain benchmark/adapter version and action subset for comparisons.
- focus: shared browser-agent evaluation interface, benchmark adapters with separate task definitions
- observations: browser screenshot, DOM snapshot, accessibility tree, tab/URL state, previous action and its error, chat messages and task goal
- setting: mixed

#### Count observations

No count recorded.

A framework with interactive browser adapters and a static WebLINX evaluation integration, so the profile setting is mixed. README-listed integrations are not added as disjoint tasks or datasets. Core requires Playwright/Chromium; individual benchmarks have their own setup, credentials, licenses and validation rules. Apache-2.0 covers repository code only. No browser tasks or third-party project code were executed.

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/ServiceNow/BrowserGym/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ServiceNow/BrowserGym/HEAD/README.md (retrieved 2026-10-16T06:35:57Z; SHA-256 7b685115ef822989fac9093518d16c46f0202736d005eed56e7f9fc36b43f3ee)
- https://raw.githubusercontent.com/ServiceNow/BrowserGym/HEAD/browsergym/core/src/browsergym/core/env.py (retrieved 2026-10-17T14:22:05Z; SHA-256 867cc6efdfead356839fef8a26b492502b8b5e3d165d1b3c17d24aaeec268d63)
- https://raw.githubusercontent.com/ServiceNow/BrowserGym/HEAD/docs/src/core/action_space.rst (retrieved 2026-10-17T14:21:11Z; SHA-256 c4bbe6b7d0cb36a5d5effab1aa5568301cead97fe4015273e1b82c667da3823a)
- https://api.github.com/repos/ServiceNow/BrowserGym/git/trees/main?recursive=1 (retrieved 2026-10-17T14:14:08Z; SHA-256 418efbe8c65ad7ebab61d3a066339876c820a9c957506eb456b8078ab352f6bf)
- https://raw.githubusercontent.com/ServiceNow/BrowserGym/HEAD/LICENSE (retrieved 2026-10-16T06:41:57Z; SHA-256 b192c58991e8ff585cc574615d40e74185404d4b96c1109d423071ab1367344b)

---

## ClawBench

Everyday-task benchmark on live websites that runs browser agents in containerized Chromium, blocks each final submission request for scoring by URL match and an LLM judge, and records five layers of run evidence.

- Catalog URL: https://awesomecua.com/resources/github-tiger-ai-lab-clawbench/
- Original source: https://github.com/TIGER-AI-Lab/ClawBench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation, workflow, observability
- Evidence checked: 2026-10-18T11:53:46Z
- ID: github:tiger-ai-lab/clawbench

### Limitations

Renamed from reacher-z/ClawBench; both API names return repository 1206519531 (TIGER-AI-Lab/ClawBench), which is not a fork and not archived. Counts and scoring rules were read at commit 07eb50a3. The tree also holds v1-lite, claw-eval and environmental-observation task folders, which are not counted here. Task definitions and execution traces are also published as Hugging Face datasets (NAIL-Group/ClawBench, NAIL-Group/ClawBenchV1Trace, TIGER-Lab/ClawBenchV2Trace), whose cards and licenses were not reviewed for this record. Apache-2.0 is recorded for repository code only. Nothing was installed or run.

- Record JSON: https://awesomecua.com/resources/github-tiger-ai-lab-clawbench/record.json

### Structured profile

- actions: harness-defined browser actions such as navigating, clicking and filling forms
- evaluation: Two stages per task run: a request interceptor inside the container blocks the final HTTP request and marks the run intercepted when its URL regex and method match the task's eval_schema; an LLM judge (default deepseek-v4-pro at temperature 0) then checks the intercepted body against the instruction. A pass needs both. The original V1 paper rubric instead compares agent and human-reference trajectories.
- focus: everyday online tasks on production websites, multi-step, write-heavy form workflows
- observations: not recorded
- setting: interactive

#### Count observations

- 152 tasks — V1 corpus shipped in test-cases/v1 (task.json files) (computed) (computed; source: https://api.github.com/repos/TIGER-AI-Lab/ClawBench/git/trees/d12a2dda577f2c943a74d833e8253860eda81eaf?recursive=1)
- 129 tasks — V2 corpus shipped in test-cases/v2 (task.json files) (computed) (computed; source: https://api.github.com/repos/TIGER-AI-Lab/ClawBench/git/trees/d12a2dda577f2c943a74d833e8253860eda81eaf?recursive=1)
- 153 tasks — V1 corpus as published in the paper and used as the scoring denominator (reported; source: https://raw.githubusercontent.com/TIGER-AI-Lab/ClawBench/07eb50a3d4c5a799f5ad4eebd57c67c10417787f/eval/scoring.md)
- 130 tasks — V2 corpus as published and used as the scoring denominator (reported; source: https://raw.githubusercontent.com/TIGER-AI-Lab/ClawBench/07eb50a3d4c5a799f5ad4eebd57c67c10417787f/eval/scoring.md)
- 143 live websites — shipped V1 corpus (reported; source: https://raw.githubusercontent.com/TIGER-AI-Lab/ClawBench/HEAD/README.md)
- 63 live websites — shipped V2 corpus (reported; source: https://raw.githubusercontent.com/TIGER-AI-Lab/ClawBench/HEAD/README.md)

The README says two ASPCA tasks were removed after publication, so the shipped corpora hold 152 and 129 tasks while scoring.md still divides by 153 and 130. Live sites change over time, and the README asks for comparisons under the same corpus revision, harness and rubric. Agents run through selectable harnesses (for example Hermes and OpenClaw), so observations and actions depend on the harness.

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/TIGER-AI-Lab/ClawBench/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/TIGER-AI-Lab/ClawBench/HEAD/README.md (retrieved 2026-10-18T11:53:46Z; SHA-256 61bad2a8e6ab56df159237d75f1081e1246b294183b31ef7abe47193ac26b541)
- https://api.github.com/repos/TIGER-AI-Lab/ClawBench/git/trees/d12a2dda577f2c943a74d833e8253860eda81eaf?recursive=1 (retrieved 2026-10-18T11:54:35Z; SHA-256 144a65c3dd92c7437e4ce065bed7b16e4c33496ea395d2bb1ecbd74132da29ce)
- https://raw.githubusercontent.com/TIGER-AI-Lab/ClawBench/07eb50a3d4c5a799f5ad4eebd57c67c10417787f/eval/scoring.md (retrieved 2026-10-18T11:54:36Z; SHA-256 8d8ade83a355e10800591435de5aa111e8d8297374b025ff88804358ee80b71a)
- https://raw.githubusercontent.com/TIGER-AI-Lab/ClawBench/HEAD/LICENSE (retrieved 2026-10-18T11:55:00Z; SHA-256 cb861e529412e9eec01498bdf4b74c5ee4f29139737a1193e39b24004019e606)
- https://api.github.com/repos/reacher-z/ClawBench (retrieved 2026-10-18T11:54:36Z; SHA-256 4b80afa11f3998830090c9c186afc753f261cc05abbcd4d906400f757f41e4da)
- https://api.github.com/repos/TIGER-AI-Lab/ClawBench (retrieved 2026-10-18T11:54:37Z; SHA-256 4b80afa11f3998830090c9c186afc753f261cc05abbcd4d906400f757f41e4da)

---

## ColorBench

A graph-based mobile GUI benchmark that evaluates long tasks through screenshot states and multiple valid or erroneous transitions, including reflection, replanning and backtracking.

- Catalog URL: https://awesomecua.com/resources/github-madeagents-colorbench/
- Original source: https://github.com/MadeAgents/ColorBench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: android
- Topics: evaluation, mobile-navigation, long-horizon, cross-app
- Evidence checked: 2026-10-17T11:18:16Z
- ID: github:madeagents/colorbench

### Limitations

The source tree contains graph and task JSON files plus construction/evaluation code; the linked ungated Hub provides the screenshot archive. The environment is static but interactive and graph-based, not a live-device deployment. Counts are publisher-reported task/app inventories. Apache-2.0 declarations for repository code and the Hub dataset are separately retained; third-party application visuals are not granted additional rights by this catalog.

- Record JSON: https://awesomecua.com/resources/github-madeagents-colorbench/record.json

### Structured profile

- actions: mobile GUI operations along graph transitions
- evaluation: The publisher reports success rate, completion rate and atomic-capability diagnostics using graph-based evaluation.
- focus: long-horizon mobile task completion, multi-path graph interaction
- observations: mobile screenshots represented as graph states
- setting: interactive

#### Count observations

- 175 tasks — reported ColorBench benchmark (reported; source: https://raw.githubusercontent.com/MadeAgents/ColorBench/HEAD/README.md)
- 101 cross-app tasks — reported ColorBench benchmark (reported; source: https://raw.githubusercontent.com/MadeAgents/ColorBench/HEAD/README.md)
- 74 single-app tasks — reported ColorBench benchmark (reported; source: https://raw.githubusercontent.com/MadeAgents/ColorBench/HEAD/README.md)
- 21 mobile applications — reported ColorBench benchmark (reported; source: https://raw.githubusercontent.com/MadeAgents/ColorBench/HEAD/README.md)

The interaction environment replays graph states rather than running real user accounts. The 101 and 74 subsets partition the reported 175 tasks; do not add the three counts.

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/MadeAgents/ColorBench/HEAD/LICENSE
- data: apache-2.0 — https://huggingface.co/datasets/Norsheep/ColorBench/raw/main/README.md
- document: not recorded
- weights: not recorded

- code review: Repository source LICENSE.
  Sources: https://raw.githubusercontent.com/MadeAgents/ColorBench/HEAD/LICENSE

- data review: Publisher metadata for the separately hosted screenshot archive; underlying third-party content retains applicable rights.
  Sources: https://huggingface.co/datasets/Norsheep/ColorBench/raw/main/README.md

### Primary evidence

- https://raw.githubusercontent.com/MadeAgents/ColorBench/HEAD/README.md (retrieved 2026-10-17T11:18:16Z; SHA-256 5c0190fffb68b91c1855a408f6a5e252871d94000b95fa258504a3c100600cec)
- https://api.github.com/repos/MadeAgents/ColorBench (retrieved 2026-10-17T11:18:16Z; SHA-256 2f6940503cc0d6cb97bdf142d6b8c6ab116de82227f2fa6d97fd56d7e5aebec0)
- https://api.github.com/repos/MadeAgents/ColorBench/git/trees/main?recursive=1 (retrieved 2026-10-17T11:22:54Z; SHA-256 6a00c093a6794ec4a172d30b70fdabc17400584a9e25a157a47a7661dbdd20fa)
- https://huggingface.co/api/datasets/Norsheep/ColorBench (retrieved 2026-10-17T11:23:06Z; SHA-256 c0c3286b5150e128e55034ba0393ef85f7fcf73e4b73f4276389a04c9bcec919)
- https://huggingface.co/datasets/Norsheep/ColorBench/raw/main/README.md (retrieved 2026-10-17T11:23:06Z; SHA-256 4bcf87ecfbbb8e07a01b21415a970c8b53a5283bf6872b657040d3f45c9241f7)
- https://raw.githubusercontent.com/MadeAgents/ColorBench/HEAD/LICENSE (retrieved 2026-10-17T11:22:54Z; SHA-256 130976c026bcafa9dcc479697fe6595dbefb73cdb375fc47b8478acc16e6ea73)

---

## CRAB

Cross-environment benchmark framework for multimodal agents.

- Catalog URL: https://awesomecua.com/resources/github-camel-ai-crab/
- Original source: https://github.com/camel-ai/crab
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: desktop, android
- Topics: evaluation, cross-app
- Evidence checked: 2026-10-16T06:35:58Z
- ID: github:camel-ai/crab

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-camel-ai-crab/record.json

### Structured profile

- actions: Python-defined environment actions
- evaluation: Graph-based evaluators measure progress through task requirements.
- focus: cross-environment tasks
- observations: not recorded
- setting: interactive

#### Count observations

- 120 tasks — CRAB Benchmark-v0 (paper) (reported; source: https://arxiv.org/abs/2407.01511)

CRAB is also an extensible framework. The 120-task count belongs to Benchmark-v0, not every environment that can be created with the framework.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/camel-ai/crab/HEAD/README.md (retrieved 2026-10-16T06:35:58Z; SHA-256 7b894c5474ba78294427cfd4ef0eea8cb22d76dfa0c2e8c7f01e31ad927064e9)
- https://export.arxiv.org/api/query?id_list=2406.12814%2C2406.13719%2C2406.14056%2C2406.14250%2C2406.14314%2C2406.18082%2C2406.19263%2C2407.00993%2C2407.01476%2C2407.01489%2C2407.01511%2C2407.01558%2C2407.03037%2C2407.03913%2C2407.04346%2C2407.05291%2C2407.07061%2C2407.08850%2C2407.09018%2C2407.09295%2C2407.10956%2C2407.13032%2C2407.13063%2C2407.15673%2C2407.15711%2C2407.16741%2C2407.17490%2C2407.18901%2C2407.19056%2C2407.20183%2C2408.00203%2C2408.02544%2C2408.06327%2C2408.07199%2C2408.11824%2C2408.15978%2C2409.02453%2C2409.04566%2C2409.07429%2C2409.08264%2C2409.09354%2C2409.10741%2C2409.11295%2C2409.13711%2C2409.14337%2C2409.14818%2C2409.15441%2C2409.15637%2C2409.17140%2C2409.20566&max_results=50 (retrieved 2026-10-16T06:31:32Z; SHA-256 b9a83994d8ac36ccdb606a5219511f8bb35ad3948ade4f9f3e28d386221aedfb)

---

## CUAVerifierBench

Human-annotated browser-agent trajectories for comparing automated task-success and process-quality verifiers against reviewer judgments.

- Catalog URL: https://awesomecua.com/resources/url-d5140d438466c1e1348a/
- Original source: https://huggingface.co/datasets/microsoft/CUAVerifierBench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, reward-models, web-navigation
- Evidence checked: 2026-10-17T02:42:32Z
- ID: url:d5140d438466c1e1348a

### Limitations

Public Parquet configs separate trajectories from per-reviewer annotations. The card declares MIT. The two splits have different review stages: Online-Mind2Web includes blind and verifier-informed annotations, whereas the internal split is blind-only. This measures verifier agreement rather than agent task success.

- Record JSON: https://awesomecua.com/resources/url-d5140d438466c1e1348a/record.json

### Structured profile

- actions: success verdict, process score
- evaluation: Agreement metrics including Cohen’s kappa, accuracy and F1 against human annotations; review stages must be kept distinct.
- focus: verifier-human agreement, process quality
- observations: screenshots, action logs, final answers
- setting: offline

#### Count observations

- 106 trajectories — fara7b_om2w_browserbase split (reported; source: https://huggingface.co/datasets/microsoft/CUAVerifierBench/raw/main/README.md)
- 154 trajectories — internal split (reported; source: https://huggingface.co/datasets/microsoft/CUAVerifierBench/raw/main/README.md)
- 215 annotation rows — fara7b_om2w_browserbase split (reported; source: https://huggingface.co/datasets/microsoft/CUAVerifierBench/raw/main/README.md)
- 154 annotation rows — internal split (reported; source: https://huggingface.co/datasets/microsoft/CUAVerifierBench/raw/main/README.md)

Trajectory rows and reviewer rows have different grains. Internal task labels do not make the released Parquet files private. No payload data was downloaded.

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/microsoft/CUAVerifierBench/raw/main/README.md
- document: not recorded
- weights: not recorded

- data review: The benchmark's Hub dataset card declares MIT in its metadata header (license: mit).
  Sources: https://huggingface.co/datasets/microsoft/CUAVerifierBench/raw/main/README.md

### Primary evidence

- https://huggingface.co/datasets/microsoft/CUAVerifierBench/raw/main/README.md (retrieved 2026-10-17T02:42:32Z; SHA-256 44d7190b72ae489297f59d6fadff635ced6dd067c845c77b04f187a7b2d7bec7)
- https://huggingface.co/api/datasets/microsoft/CUAVerifierBench (retrieved 2026-10-17T02:42:32Z; SHA-256 fb1fe8a9fd6e45fc82157c65c08d5c682d08bead5196308776200ef3c39c1e41)

---

## EIA

Evaluation suite for Environmental Injection Attacks that embed invisible malicious HTML elements into benign websites to test privacy leakage in generalist web agents.

- Catalog URL: https://awesomecua.com/resources/github-osu-nlp-group-eia-against-webagent/
- Original source: https://github.com/OSU-NLP-Group/EIA_against_webagent
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: safety-security, evaluation, web-navigation
- Evidence checked: 2026-10-18T10:59:54Z
- ID: github:osu-nlp-group/eia_against_webagent

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-osu-nlp-group-eia-against-webagent/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/OSU-NLP-Group/EIA_against_webagent/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/OSU-NLP-Group/EIA_against_webagent/HEAD/README.md (retrieved 2026-10-18T10:59:54Z; SHA-256 61eb6109404f266fd22c6fa8ca58ef773a9d502567403f42edc096958ab2e430)
- https://raw.githubusercontent.com/OSU-NLP-Group/EIA_against_webagent/HEAD/LICENSE (retrieved 2026-10-18T11:03:46Z; SHA-256 953ff47dbbc0c0563d1ec2d245b06d1206f2f38c4ed2f0da728e027ae2e5a973)

---

## FedMABench

A federated mobile-agent training and evaluation suite that varies user-data heterogeneity and application distribution, with released partition annotations and inference/scoring scripts.

- Catalog URL: https://awesomecua.com/resources/github-wwh0411-fedmabench/
- Original source: https://github.com/wwh0411/FedMABench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: android
- Topics: evaluation, imitation-learning, mobile-navigation
- Evidence checked: 2026-10-17T11:18:17Z
- ID: github:wwh0411/fedmabench

### Limitations

The public Hub lists six dataset families of JSON/JSONL partition annotations. The repository explicitly says unpacked screenshots are not provided and must be reconstructed from original AndroidControl and AITW sources. This is offline training/evaluation infrastructure rather than a live Android task environment. No repository license file or dataset-license declaration was found in the inspected sources; neither is inferred from the underlying ms-swift project.

- Record JSON: https://awesomecua.com/resources/github-wwh0411-fedmabench/record.json

### Structured profile

- actions: model predictions on mobile-agent examples
- evaluation: The provided evaluation workflow performs model inference over selected partitions and invokes test_swift_fed.py for accuracy scoring.
- focus: mobile-agent federated training, data heterogeneity
- observations: mobile-agent examples with externally sourced screenshots
- setting: offline

#### Count observations

- 6 dataset families — released FedMABench partition families (reported; source: https://huggingface.co/datasets/wwh0411/FedMABench/raw/main/README.md)
- 3 heterogeneity types — publisher benchmark overview (reported; source: https://raw.githubusercontent.com/wwh0411/FedMABench/HEAD/README.md)
- 8 federated learning algorithms — publisher benchmark overview (reported; source: https://raw.githubusercontent.com/wwh0411/FedMABench/HEAD/README.md)

The dataset-family count does not count tasks, apps, screenshots or client instances. Code and data licenses are unknown; external image sources are required.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/wwh0411/FedMABench/HEAD/README.md (retrieved 2026-10-17T11:18:17Z; SHA-256 b49e2b419918078ef9c68f3c9becc6c13d8fe530c165a36bdd61e370746eeea8)
- https://api.github.com/repos/wwh0411/FedMABench (retrieved 2026-10-17T11:18:17Z; SHA-256 3e1b2b643a263af129b3a4092a84efe47d3643f00509f7b9517da21a4aac0371)
- https://api.github.com/repos/wwh0411/FedMABench/git/trees/master?recursive=1 (retrieved 2026-10-17T11:22:54Z; SHA-256 4fb977a469cee3d5083da0b5bf2984fedc6b867146a90b20963985e08f9e9716)
- https://huggingface.co/api/datasets/wwh0411/FedMABench (retrieved 2026-10-17T11:23:06Z; SHA-256 df5379f4a9b350dad0c3d374d2f9a1d6eacd974b6d54750e2a14ecec1faec6e5)
- https://huggingface.co/datasets/wwh0411/FedMABench/raw/main/README.md (retrieved 2026-10-17T11:23:06Z; SHA-256 2874269995d8c9f5dabe266433ecf724bf54c27af599d899f3f0090b8ee37cdc)

---

## GUI-Robust

Evaluation scripts and linked data for comparing GUI action predictions and task execution under ordinary and anomalous interface conditions.

- Catalog URL: https://awesomecua.com/resources/github-chessbean1-gui-robust/
- Original source: https://github.com/chessbean1/GUI-Robust
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: evaluation, robustness
- Evidence checked: 2026-10-16T10:43:11Z
- ID: github:chessbean1/gui-robust

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-chessbean1-gui-robust/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/chessbean1/GUI-Robust/HEAD/README.md (retrieved 2026-10-16T10:43:11Z; SHA-256 93defc2b31d0f8e6144e77cda4a74abeafd5253ae18a626bfc625f429050770a)

---

## GUIHalluBench

Measures hallucination in UI-element parsing by matching the boxes and descriptions a model lists for 1,000 English and 1,000 Chinese screenshots against human annotations.

- Catalog URL: https://awesomecua.com/resources/github-ant-research-guihallubench/
- Original source: https://github.com/ant-research/GUIHalluBench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: evaluation, robustness
- Evidence checked: 2026-10-16T06:40:51Z
- ID: github:ant-research/guihallubench

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-ant-research-guihallubench/record.json

### Structured profile

- actions: list of UI element boxes [x1,y1,x2,y2] and text descriptions
- evaluation: Metrics use greedy one-to-one matching in descending IoU order, then micro precision/recall/F1 and lowercased difflib.SequenceMatcher description similarity on matched pairs. Actual metrics.py accepts IoU >= 0.5 at its default threshold; README prose says > 0.5. Predictions align to annotations by image_path; callers must supply complete prediction coverage because missing predictions are not independently enumerated by evaluate_dataset.
- focus: GUI page-element detection, element-description consistency
- observations: page screenshot
- setting: offline

#### Count observations

- 1,000 page-annotation entries — English annotation subset reported by README (reported; source: https://raw.githubusercontent.com/ant-research/GUIHalluBench/HEAD/README.md)
- 1,000 page-annotation entries — Chinese annotation subset reported by README (reported; source: https://raw.githubusercontent.com/ant-research/GUIHalluBench/HEAD/README.md)

Each annotation entry represents a page, not one UI element. README’s illustrative num_samples=4796 output is not adopted as a corpus count. Public tree contains both annotation JSON files and an images.tar.gz Git-LFS pointer; payload availability/integrity was not tested by downloading images. LEGAL.md only governs comment-language precedence, not a code/data license grant; both slots remain unknown. No benchmark run was performed.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://github.com/ant-research/GUIHalluBench (retrieved 2026-10-16T06:40:51Z; SHA-256 51df9dbcf52f46e4774207f2e6ad84dc8a6d117cdab6f77a38e9897ded1d0963)
- https://raw.githubusercontent.com/ant-research/GUIHalluBench/HEAD/README.md (retrieved 2026-10-16T06:35:59Z; SHA-256 d9c476d6960a4ef99e20d4c3b5d35a63f3ae5e61fc20e9dea00b11e64b74c9e9)
- https://raw.githubusercontent.com/ant-research/GUIHalluBench/HEAD/src/metrics.py (retrieved 2026-10-17T14:21:09Z; SHA-256 f36707dfcd3e83fc9d7f57b50d0c27007801e5029cc1ac255e000560ecf778fc)
- https://api.github.com/repos/ant-research/GUIHalluBench/git/trees/master?recursive=1 (retrieved 2026-10-17T14:14:07Z; SHA-256 c0896bc90d515b7bd8fe86b062aeb199bd47570e6eca8474986f5b1ef1d98dbd)
- https://raw.githubusercontent.com/ant-research/GUIHalluBench/HEAD/LEGAL.md (retrieved 2026-10-17T14:21:09Z; SHA-256 adba50d9794b9ef3f7ec8cbc680f7f1fa3fbf9df0ac8d1f9b9ccab6d941bc11b)
- https://raw.githubusercontent.com/ant-research/GUIHalluBench/HEAD/.gitattributes (retrieved 2026-10-17T14:34:56Z; SHA-256 8f35fa75be42a7a53e4f96de1b62be84962d2cf1beb8b23dfcfaecfaea4a6b90)

---

## iOSWorld

Native iPhone-simulator benchmark with shared user data, application workflows, agent runners, and rubric-based scoring.

- Catalog URL: https://awesomecua.com/resources/github-ljang0-iosworld/
- Original source: https://github.com/ljang0/iOSWorld
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: ios
- Topics: evaluation, cross-app, memory
- Evidence checked: 2026-10-16T10:42:12Z
- ID: github:ljang0/iosworld

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-ljang0-iosworld/record.json

### Structured profile

- actions: touch actions, MCP tools (optional)
- evaluation: Rubric satisfaction per task; full-task pass requires every criterion to be satisfied.
- focus: personalized phone tasks, cross-app workflows
- observations: screenshots, accessibility XML (optional)
- setting: interactive

#### Count observations

- 133 tasks — tasks.json benchmark (reported; source: https://raw.githubusercontent.com/ljang0/iOSWorld/HEAD/README.md)
- 26 applications — bundled SwiftUI apps (reported; source: https://raw.githubusercontent.com/ljang0/iOSWorld/HEAD/README.md)

Vision-only, vision-plus-XML, and MCP modes expose different information and tools. The documented default evaluator is model-based; compare the same mode and judge.

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/ljang0/iOSWorld/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ljang0/iOSWorld/HEAD/README.md (retrieved 2026-10-16T10:42:12Z; SHA-256 706f9d770b65a1238e56f74f7dd5089c7756cc88e0ac09d80c7b2b3085a09b27)
- https://raw.githubusercontent.com/ljang0/iOSWorld/HEAD/LICENSE (retrieved 2026-10-16T10:48:41Z; SHA-256 fa9fe1e31ed8da21d0b51621d3a3669ced4f0e42353aaf4bd8be1615d200eaac)

---

## LlamaTouch

Mobile UI task evaluation using application state information.

- Catalog URL: https://awesomecua.com/resources/github-llamatouch-llamatouch/
- Original source: https://github.com/LlamaTouch/LlamaTouch
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: android
- Topics: evaluation
- Evidence checked: 2026-10-16T06:35:58Z
- ID: github:llamatouch/llamatouch

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-llamatouch-llamatouch/record.json

### Structured profile

- actions: device actions through AgentEnv
- evaluation: Checks whether the recorded execution visits all annotated essential states rather than requiring an identical action sequence.
- focus: mobile task completion, essential-state evaluation
- observations: screenshots, view hierarchies, Android activity names
- setting: interactive

#### Count observations

- 495 tasks — complete task collection (reported; source: https://raw.githubusercontent.com/LlamaTouch/LlamaTouch/HEAD/README.md)
- 102 tasks — AITW-derived subset (reported; source: https://raw.githubusercontent.com/LlamaTouch/LlamaTouch/HEAD/README.md)
- 393 tasks — self-constructed subset (reported; source: https://raw.githubusercontent.com/LlamaTouch/LlamaTouch/HEAD/README.md)
- 46 Android applications — self-constructed subset (reported; source: https://raw.githubusercontent.com/LlamaTouch/LlamaTouch/HEAD/README.md)

Application coverage refers to the self-constructed subset. Task execution and essential-state annotation are separate components; counts are publisher-reported, not a fresh task-file recount.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/LlamaTouch/LlamaTouch/HEAD/README.md (retrieved 2026-10-16T06:35:58Z; SHA-256 4c4fe0fa92961f7286b6553b13117b2942e8482a48b7120a79e57dce2f8d42b9)
- https://raw.githubusercontent.com/LlamaTouch/LlamaTouch/HEAD/README.md (retrieved 2026-10-16T06:35:58Z; SHA-256 4c4fe0fa92961f7286b6553b13117b2942e8482a48b7120a79e57dce2f8d42b9)

---

## MacAgentBench

676 macOS tasks across 25 applications, each run in its own Docker container and scored by deterministic rule-based checks with multiple checkpoints.

- Catalog URL: https://awesomecua.com/resources/github-jetastra-macagentbench/
- Original source: https://github.com/JetAstra/MacAgentBench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: desktop, macos
- Topics: evaluation
- Evidence checked: 2026-10-16T06:35:59Z
- ID: github:jetastra/macagentbench

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-jetastra-macagentbench/record.json

### Structured profile

- actions: GUI interactions, command-line operations
- evaluation: Deterministic rule-based evaluators with intermediate checkpoints.
- focus: macOS task completion, cross-application workflows
- observations: not recorded
- setting: interactive

#### Count observations

- 676 tasks — documented MacAgentBench suite (reported; source: https://raw.githubusercontent.com/JetAstra/MacAgentBench/HEAD/README.md)
- 25 applications — documented application coverage (reported; source: https://raw.githubusercontent.com/JetAstra/MacAgentBench/HEAD/README.md)

The benchmark evaluates multiple agent frameworks and GUI/CLI workflows. Framework skills and interfaces affect the task setting; the inspected README does not define one universal observation representation.

### License declarations

- code: MIT — https://raw.githubusercontent.com/JetAstra/MacAgentBench/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/JetAstra/MacAgentBench/HEAD/README.md (retrieved 2026-10-16T06:35:59Z; SHA-256 f1f8c0cd5d984e4026abea858b54f0f1427c018cad7e75322e744f1e070225a9)
- https://export.arxiv.org/api/query?id_list=2605.06761%2C2605.07110%2C2605.07134%2C2605.09497%2C2605.11212%2C2605.12481%2C2605.12501%2C2605.12549%2C2605.13631%2C2605.14290%2C2605.14747%2C2605.15030%2C2605.15542%2C2605.15777%2C2605.16024%2C2605.16116%2C2605.16402%2C2605.17320%2C2605.18048%2C2605.18652%2C2605.18758%2C2605.19260%2C2605.19769%2C2605.21470%2C2605.25160%2C2605.25624%2C2605.25707%2C2605.26114%2C2605.27761%2C2605.28116%2C2605.28534%2C2605.28646%2C2605.28775%2C2605.29119%2C2605.29324%2C2605.29447%2C2605.29486%2C2605.29534%2C2605.29615%2C2606.06322%2C2606.09426%2C2606.11042%2C2606.22557%2C2606.23189%2C2606.24551%2C2608.17659%2C2609.22000%2C2609.34139&max_results=48 (retrieved 2026-10-16T06:32:03Z; SHA-256 2adad07a9ec7189aea25e48c76fa28206eda97f8974d5745cadda9529103bb1a)
- https://raw.githubusercontent.com/JetAstra/MacAgentBench/HEAD/LICENSE (retrieved 2026-10-16T06:41:59Z; SHA-256 adf69997028988ba1eec34666afa119e007771dfc8e830c5dc50ad650896e897)

---

## MCPWorld

Evaluation environment combining computer interaction with tool access.

- Catalog URL: https://awesomecua.com/resources/github-saagent-mcpworld/
- Original source: https://github.com/SAAgent/MCPWorld
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: evaluation, tool-integration
- Evidence checked: 2026-10-16T06:35:59Z
- ID: github:saagent/mcpworld

### Limitations

The retained paper reports 201 tasks, whereas the retained repository README describes approximately 170. These are separate source descriptions; their release/version difference has not been established.

- Record JSON: https://awesomecua.com/resources/github-saagent-mcpworld/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/SAAgent/MCPWorld/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/SAAgent/MCPWorld/HEAD/README.md (retrieved 2026-10-16T06:35:59Z; SHA-256 5559ca58f8ee06d2812c6cbc8c3e49ef112f4ef41fdcf4e95568b268bb24bf14)
- https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=600&max_results=100&sortBy=submittedDate&sortOrder=descending (retrieved 2026-10-16T06:36:50Z; SHA-256 26fb4922c4c0bb5c9069935ed0aef0a9f56938cf8ae1af9724894fa1409955fb)
- https://raw.githubusercontent.com/SAAgent/MCPWorld/HEAD/README.md (retrieved 2026-10-16T06:35:59Z; SHA-256 5559ca58f8ee06d2812c6cbc8c3e49ef112f4ef41fdcf4e95568b268bb24bf14)
- https://raw.githubusercontent.com/SAAgent/MCPWorld/HEAD/LICENSE (retrieved 2026-10-16T06:41:59Z; SHA-256 d7a04bf11ce24a7b79cd44b4a78dcc9971eaeb3b565821de437e0ecb7723e634)

---

## Mind2Web

Human demonstrations and tasks for generalist web navigation research.

- Catalog URL: https://awesomecua.com/resources/github-osu-nlp-group-mind2web/
- Original source: https://github.com/OSU-NLP-Group/Mind2Web
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation
- Evidence checked: 2026-10-16T06:35:57Z
- ID: github:osu-nlp-group/mind2web

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-osu-nlp-group-mind2web/record.json

### Structured profile

- actions: CLICK, TYPE, SELECT
- evaluation: Offline candidate and action evaluation against recorded demonstrations; the repository distinguishes macro from micro averaging.
- focus: web action prediction, generalization to unseen sites and domains
- observations: task instructions, HTML, recorded action history
- setting: offline

#### Count observations

- 1,009 task instances — train split (reported; source: https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web/HEAD/README.md)
- 252 task instances — cross-task test split (reported; source: https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web/HEAD/README.md)
- 177 task instances — cross-website test split (reported; source: https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web/HEAD/README.md)
- 912 task instances — cross-domain test split (reported; source: https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web/HEAD/README.md)

These are reported split inventories, not online task-success measurements. Original Mind2Web, Multimodal-Mind2Web, and Online-Mind2Web have different inputs/protocols. The authors require macro-average metrics for comparison with the paper; test archives remain upstream.

### License declarations

- code: MIT — https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web/HEAD/README.md (retrieved 2026-10-16T06:35:57Z; SHA-256 157dbd840264ea29f958c0b7383d63783845c573b3e19a1f39b773be22e0b32d)
- https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web/HEAD/README.md (retrieved 2026-10-16T06:35:57Z; SHA-256 157dbd840264ea29f958c0b7383d63783845c573b3e19a1f39b773be22e0b32d)
- https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web/HEAD/LICENSE (retrieved 2026-10-16T06:41:57Z; SHA-256 953ff47dbbc0c0563d1ec2d245b06d1206f2f38c4ed2f0da728e027ae2e5a973)

---

## Mind2Web 2

Long-horizon agentic web search benchmark whose Agent-as-a-Judge framework scores time-varying, citation-backed answers, with evaluation scripts for its dev and test sets.

- Catalog URL: https://awesomecua.com/resources/github-osu-nlp-group-mind2web-2/
- Original source: https://github.com/OSU-NLP-Group/Mind2Web-2
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation, long-horizon
- Evidence checked: 2026-10-17T17:18:21Z
- ID: github:osu-nlp-group/mind2web-2

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-osu-nlp-group-mind2web-2/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web-2/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web-2/HEAD/README.md (retrieved 2026-10-17T17:18:21Z; SHA-256 5cc72b992cfc11094dcf341c284d5baadc6c66a302fdfd474b27913fe1c91f6f)
- https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web-2/HEAD/LICENSE (retrieved 2026-10-17T17:18:56Z; SHA-256 93b43d692b033b76129504448695bfe76ef22d18b11e51352bfab4b5622e5aaa)

---

## MiniWoB++

Over 100 web-interaction environments extending OpenAI's MiniWoB, controlled from Python through a Gymnasium API that drives the browser with Selenium.

- Catalog URL: https://awesomecua.com/resources/github-farama-foundation-miniwob-plusplus/
- Original source: https://github.com/Farama-Foundation/miniwob-plusplus
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, reinforcement-learning
- Evidence checked: 2026-10-16T06:40:54Z
- ID: github:farama-foundation/miniwob-plusplus

### Limitations

The maintainer README identifies MiniWoB++ as the extension introduced in the 2018 workflow-guided exploration paper. It separately links World of Bits as the source for the original MiniWoB predecessor. The current Farama interface, environment inventory, and maintenance status belong to the retained repository snapshot.

- Record JSON: https://awesomecua.com/resources/github-farama-foundation-miniwob-plusplus/record.json

### Structured profile

- actions: configurable coordinate actions, element-reference actions, keyboard input
- evaluation: not recorded
- focus: small web interaction tasks
- observations: task instructions, screenshots, visible DOM-element attributes
- setting: interactive

#### Count observations

- > 100 web environments — README collection size (reported; source: https://raw.githubusercontent.com/Farama-Foundation/miniwob-plusplus/HEAD/README.md)

The README gives a lower bound, not an exact active-environment inventory. Action presets expose different capabilities, so comparisons must identify the preset. Environment-specific reward details are not normalized here. The repository is in maintenance mode.

### License declarations

- code: MIT — https://raw.githubusercontent.com/Farama-Foundation/miniwob-plusplus/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/Farama-Foundation/miniwob-plusplus/HEAD/README.md (retrieved 2026-10-16T06:40:54Z; SHA-256 90499776fa1b23e08ac85190ad3be709caa9172ff4f2a0a106b0fa350568e86f)
- https://raw.githubusercontent.com/Farama-Foundation/miniwob-plusplus/HEAD/README.md (retrieved 2026-10-16T06:40:54Z; SHA-256 90499776fa1b23e08ac85190ad3be709caa9172ff4f2a0a106b0fa350568e86f)
- https://miniwob.farama.org/content/observation_space/ (retrieved 2026-10-17T02:03:23Z; SHA-256 511039e0e3c26b117e7e0a001746c26ec6d94a8ab8c467f0be0bc1a0b01e870a)
- https://miniwob.farama.org/content/action_space/ (retrieved 2026-10-17T02:03:23Z; SHA-256 ae7bf6a3b98b198b985d7ca7b41cb2bdab3cf48e6445467ad9a8d4a2c8df240f)
- https://raw.githubusercontent.com/Farama-Foundation/miniwob-plusplus/HEAD/LICENSE (retrieved 2026-10-16T06:42:07Z; SHA-256 fd6529fb8f648d4130fd969e3d7fc740c9992a0bd94a1998f52555a873311511)

---

## MLA-Trust

Unified evaluation framework measuring truthfulness, controllability, safety, and privacy of multimodal LLM agents across interactive web and mobile GUI tasks.

- Catalog URL: https://awesomecua.com/resources/github-thu-ml-mla-trust/
- Original source: https://github.com/thu-ml/MLA-Trust
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web, android, cross-platform
- Topics: safety-security, evaluation, robustness
- Evidence checked: 2026-10-18T10:59:55Z
- ID: github:thu-ml/mla-trust

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-thu-ml-mla-trust/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/thu-ml/MLA-Trust/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/thu-ml/MLA-Trust/HEAD/README.md (retrieved 2026-10-18T10:59:55Z; SHA-256 d69da19edaed185ad3071a97db3bb3fcfbdb14c0b514b7d27794b39fbe8e2541)
- https://raw.githubusercontent.com/thu-ml/MLA-Trust/HEAD/LICENSE (retrieved 2026-10-18T11:03:46Z; SHA-256 240fb6820e7bcb0753617bcad6ffbd4a9ba83ca98e1e6aaa06c7b197b244bf16)

---

## MMBench-GUI

Four-level GUI-agent benchmark across six platforms, from content understanding and element grounding to task automation and collaboration, scored with an efficiency-quality area metric.

- Catalog URL: https://awesomecua.com/resources/github-open-compass-mmbench-gui/
- Original source: https://github.com/open-compass/MMBench-GUI
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: evaluation, grounding
- Evidence checked: 2026-10-16T06:35:58Z
- ID: github:open-compass/mmbench-gui

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-open-compass-mmbench-gui/record.json

### Structured profile

- actions: not recorded
- evaluation: Level-specific evaluation; Efficiency–Quality Area (EQA) combines navigation quality and efficiency.
- focus: screen understanding, grounding, task automation, task collaboration
- observations: screenshots
- setting: mixed

#### Count observations

- > 8,000 tasks — reported multi-level benchmark (reported; source: https://raw.githubusercontent.com/open-compass/MMBench-GUI/HEAD/README.md)

The README documents four levels, but its release notes and TODOs distinguish released L1/L2 evaluation from pending L3/L4 integration. Do not treat every level as the same evaluator or a complete implemented interface.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/open-compass/MMBench-GUI/HEAD/README.md (retrieved 2026-10-16T06:35:58Z; SHA-256 35db9fca3ed1c1a3513924fefff4ccd224bc70cd7eb4bf8c54fcb9048851988e)

---

## MMInA

Multimodal web tasks in a WebArena-based environment that chain from 1 to 10 hops across sites such as a shopping store and Wikipedia, testing long-chain reasoning.

- Catalog URL: https://awesomecua.com/resources/github-shulin16-mmina/
- Original source: https://github.com/shulin16/MMInA
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, long-horizon
- Evidence checked: 2026-10-16T06:35:58Z
- ID: github:shulin16/mmina

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-shulin16-mmina/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/shulin16/MMInA/HEAD/README.md (retrieved 2026-10-16T06:35:58Z; SHA-256 abc848e7eb5181be22168dbc076446c5eb0f065fd57c7e10367284ca6e50bf5c)

---

## MobBench task definitions

A public set of real-device mobile task definitions used to evaluate MobA, with Chinese and English task material packaged in a versioned JSON release.

- Catalog URL: https://awesomecua.com/resources/url-b53e03a6e4ca4226d126/
- Original source: https://huggingface.co/datasets/OpenDFM/MobA-MobBench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: android
- Topics: evaluation, mobile-navigation
- Evidence checked: 2026-10-17T12:32:07Z
- ID: url:b53e03a6e4ca4226d126

### Limitations

The ungated manifest lists MobBench_tasks_release_v1.0.json and bilingual cards. The card reports fifty tasks; no sample records were downloaded to recount them. This release supplies task definitions and agent setup guidance, not an independently verified automatic judge or a bundled Android environment. The data card declares CC-BY-NC-SA-4.0; code and model licenses are separate.

- Record JSON: https://awesomecua.com/resources/url-b53e03a6e4ca4226d126/record.json

### Structured profile

- actions: mobile GUI actions through a separately configured agent
- evaluation: The publisher reports a fifty-task real-device evaluation; the inspected release does not establish an automatic correctness judge.
- focus: mobile task completion
- observations: Android device interface
- setting: interactive

#### Count observations

- 50 tasks — MobBench tasks used in the paper (reported; source: https://huggingface.co/datasets/OpenDFM/MobA-MobBench/raw/main/README.md)

Task definitions are distinct from device images, agent execution and automated scoring.

### License declarations

- code: not recorded
- data: cc-by-nc-sa-4.0 — https://huggingface.co/datasets/OpenDFM/MobA-MobBench/raw/main/README.md
- document: not recorded
- weights: not recorded

- data review: Dataset-card declaration for the MobBench task-definition release only.
  Sources: https://huggingface.co/datasets/OpenDFM/MobA-MobBench/raw/main/README.md

### Primary evidence

- https://huggingface.co/datasets/OpenDFM/MobA-MobBench/raw/main/README.md (retrieved 2026-10-17T12:32:07Z; SHA-256 231a8f483256c774840c99383ab6536520a0aed0f04d62b4d64f1f59477b906e)
- https://huggingface.co/api/datasets/OpenDFM/MobA-MobBench (retrieved 2026-10-17T12:32:07Z; SHA-256 4e7225f956d7cee98fe671e7bfd91fc407d87dd805d8f0c11c3b0c839714ccf3)

---

## Mobile-Bench-v2 released data

Offline mobile-agent task data spanning common tasks and released noisy, contaminated and ambiguous-instruction subsets.

- Catalog URL: https://awesomecua.com/resources/url-1d5b85321b98765141fc/
- Original source: https://huggingface.co/datasets/xwk123/MobileBench-v2
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: android
- Topics: evaluation, mobile-navigation, robustness
- Evidence checked: 2026-10-17T04:01:33Z
- ID: url:1d5b85321b98765141fc

### Limitations

The card distinguishes complete common-simple/common-complex JSON files from sampled noisy and ambiguous subsets; common tasks also require the separately cataloged Mobile3M dataset. Card metadata says Apache-2.0, while the prose explicitly assigns Apache-2.0 to code and CC-BY-NC-SA-4.0 to data. Do not apply the permissive header to dataset payloads, and do not describe every announced split as fully released.

- Record JSON: https://awesomecua.com/resources/url-1d5b85321b98765141fc/record.json

### Structured profile

- actions: mobile UI actions, clarification responses
- evaluation: Paper defines multi-path and noise/ambiguity evaluations; the public card identifies which files are full common-task sets and which are samples.
- focus: offline multi-path evaluation, noisy interfaces, ambiguous instructions
- observations: mobile screenshots, XML UI state, instructions
- setting: offline

#### Count observations

No count recorded.

Release completeness differs by split. No full-benchmark sample total is inferred from the archive manifest.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: The same first-party card has an Apache-2.0 metadata header but explicitly assigns Apache-2.0 to code and CC-BY-NC-SA-4.0 to the dataset in its License section. Preserve both declarations and leave a single data license unresolved instead of displaying the permissive header as the data permission.
  Sources: https://huggingface.co/datasets/xwk123/MobileBench-v2/raw/main/README.md

### Primary evidence

- https://huggingface.co/datasets/xwk123/MobileBench-v2/raw/main/README.md (retrieved 2026-10-17T04:01:33Z; SHA-256 13424be795c7b75b8c2195469c1252a7b3ec633e8bb31f1f6d7e44476611cbe9)
- https://huggingface.co/api/datasets/xwk123/MobileBench-v2 (retrieved 2026-10-17T04:01:33Z; SHA-256 247b1766b8cbdb2943c4602d2667f9f06dec8b84f0d24457080d499177475f22)
- https://export.arxiv.org/api/query?id_list=2503.16788%2C2503.17709%2C2503.18492%2C2503.19537%2C2503.20978%2C2503.21620%2C2503.23434%2C2504.01382%2C2504.07981%2C2504.10445%2C2504.10458%2C2504.11257%2C2504.11281%2C2504.12679%2C2504.13805%2C2504.13865%2C2504.14239%2C2504.18575%2C2504.19838%2C2504.20464%2C2505.10924%2C2505.11891%2C2505.12299%2C2505.12632%2C2505.13227%2C2505.13887%2C2505.13909%2C2505.14289%2C2505.15810%2C2505.16282%2C2505.16827%2C2505.18829%2C2505.19897%2C2505.21496%2C2505.21499%2C2505.21936%2C2505.22648%2C2505.23762%2C2505.24838%2C2506.00618%2C2506.01391%2C2506.01968%2C2506.02456%2C2506.03143%2C2506.03569%2C2506.04135%2C2506.04614%2C2506.07672%2C2506.08012%2C2506.08972&max_results=50 (retrieved 2026-10-16T06:31:42Z; SHA-256 afe4e75ffb8a5c44f4c088a90ffa5f53553036f514aa768f5aee0c5aa38d731e)
- https://huggingface.co/api/datasets/xwk123/Mobile3M (retrieved 2026-10-16T06:38:26Z; SHA-256 356a8dca28fa3dc46bc05b13eaf04a3db273e63c06be4fd15d0e87e0343c0824)

---

## Mobile-Eval-E task definitions

Task definitions for Mobile-Agent-E’s long-horizon, multi-app Android evaluation, packaged as a 25-record test split with rubrics and human-reference operation strings.

- Catalog URL: https://awesomecua.com/resources/url-342b081c3668a8bbe155/
- Original source: https://huggingface.co/datasets/mikewang/mobile_eval_e
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: android
- Topics: evaluation, long-horizon, cross-app
- Evidence checked: 2026-10-18T04:27:15Z
- ID: url:342b081c3668a8bbe155

### Limitations

The public Hub manifest contains one test Parquet file. This resource is the benchmark’s task-definition package, not a bundled phone environment or agent. Card metadata supplies rubrics/reference-operation fields but no data-license declaration or verified automated scorer; the code repository’s MIT license is not transferred to these records.

- Record JSON: https://awesomecua.com/resources/url-342b081c3668a8bbe155/record.json

### Structured profile

- actions: not recorded
- evaluation: The published task schema contains rubrics and human_reference_operations. No automated scoring protocol or single numeric agent metric is established by the inspected card; execution uses separately configured Android tooling.
- focus: long-horizon multi-app Android task execution
- observations: task instructions, app/scenario metadata
- setting: interactive

#### Count observations

- 25 task-definition records — Hub test split at revision b8eca829 (reported; source: https://huggingface.co/datasets/mikewang/mobile_eval_e/raw/b8eca82988ed8d4f9dec01eaa9d51abf4b35aa83/README.md)

Features are task_id, instruction, type, apps, scenario, rubrics and human-reference operation strings. A task record is not an action count or recorded screenshot trajectory. Public Parquet inventory was checked but no sample rows were downloaded; companion README limits the tested agent platform to Android.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: No data-license declaration is present in the inspected task card; companion code MIT does not establish a dataset grant.
  Sources: https://huggingface.co/datasets/mikewang/mobile_eval_e/raw/b8eca82988ed8d4f9dec01eaa9d51abf4b35aa83/README.md

### Primary evidence

- https://raw.githubusercontent.com/X-PLUG/MobileAgent/HEAD/Mobile-Agent-E/README.md (retrieved 2026-10-18T04:27:15Z; SHA-256 f8515fbce73ea0ef3d1d558d4567bb949244e6384e61c956ba3ddbc27294f0ae)
- https://huggingface.co/api/datasets/mikewang/mobile_eval_e (retrieved 2026-10-18T04:33:29Z; SHA-256 f9b10eada9e0a64e26f1a7d477768f218b807103199855d893b3ab07feddc755)
- https://huggingface.co/datasets/mikewang/mobile_eval_e/raw/b8eca82988ed8d4f9dec01eaa9d51abf4b35aa83/README.md (retrieved 2026-10-18T04:35:15Z; SHA-256 9fdf43753fbfac9868d8bec57fa5601db3e03ed5c30fb981f9da88f6b75ffcc5)
- https://export.arxiv.org/api/query?id_list=2412.04454%2C2412.04626%2C2412.05467%2C2412.09362%2C2412.09605%2C2412.10342%2C2412.10742%2C2412.10840%2C2412.13103%2C2412.13194%2C2412.13501%2C2412.14161%2C2412.14470%2C2412.16256%2C2412.17589%2C2412.18116%2C2412.18426%2C2412.19723%2C2501.01149%2C2501.04575%2C2501.07572%2C2501.11733%2C2501.12326%2C2501.13896%2C2501.16150%2C2502.01600%2C2502.01977%2C2502.02982%2C2502.06395%2C2502.07949%2C2502.08047%2C2502.08226%2C2502.11357%2C2502.13053%2C2502.13923%2C2502.14282%2C2502.18906%2C2503.00401%2C2503.02268%2C2503.03196%2C2503.04730%2C2503.05143%2C2503.06470%2C2503.09263%2C2503.11069%2C2503.11170%2C2503.12687%2C2503.15661%2C2503.15937%2C2503.16465&max_results=50 (retrieved 2026-10-16T06:31:38Z; SHA-256 e96b86015c763c780e0430a8d0867b96cae947f50e888b3441c85abcaa42de78)

---

## MobileAgentBench

Automated benchmark for mobile LLM agents whose default tasks use ten Simple Mobile Tools Android apps, installed as a Python library that detects task completion.

- Catalog URL: https://awesomecua.com/resources/github-mobileagentbench-mobile-agent-bench/
- Original source: https://github.com/MobileAgentBench/mobile-agent-bench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: android
- Topics: evaluation, mobile-navigation
- Evidence checked: 2026-10-16T06:35:58Z
- ID: github:mobileagentbench/mobile-agent-bench

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-mobileagentbench-mobile-agent-bench/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/MobileAgentBench/mobile-agent-bench/HEAD/README.md (retrieved 2026-10-16T06:35:58Z; SHA-256 e1d75e8a196f19af6050c53694383f069561244c810ca259c5f8075ee91f72b1)

---

## MobileGUI-VBench

Mobile-app task definitions covering everyday scenarios, with annotated preconditions and clarification requirements for evaluating agent behavior.

- Catalog URL: https://awesomecua.com/resources/url-d7a4f34a6a5202af5f64/
- Original source: https://huggingface.co/datasets/vivo-ai/MobileGUI-VBench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: evaluation, mobile-navigation, cross-app
- Evidence checked: 2026-10-17T02:42:32Z
- ID: url:d7a4f34a6a5202af5f64

### Limitations

Public task files are available as JSONL and XLSX with documentation. The card explicitly declares Apache-2.0 for the dataset, despite having no license field in its YAML metadata. It identifies mobile apps without fixing an operating-system taxonomy; model scores are not imported.

- Record JSON: https://awesomecua.com/resources/url-d7a4f34a6a5202af5f64/record.json

### Structured profile

- actions: mobile interface operations, clarification requests
- evaluation: Published task definitions include preconditions and clarification requirements; the metadata review does not independently validate the reported agent scores.
- focus: mobile task completion, clarification behavior, cross-app tasks
- observations: mobile app interfaces
- setting: interactive

#### Count observations

- 150 tasks — MobileGUI-VBench release (reported; source: https://huggingface.co/datasets/vivo-ai/MobileGUI-VBench/raw/main/README.md)
- 40 mobile apps — MobileGUI-VBench release (reported; source: https://huggingface.co/datasets/vivo-ai/MobileGUI-VBench/raw/main/README.md)

The card describes 140 single-app and 10 cross-app tasks. Task and app counts are different units.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/vivo-ai/MobileGUI-VBench/raw/main/README.md (retrieved 2026-10-17T02:42:32Z; SHA-256 422ff6a557a1aabd8f6c6ef26e5fd05b992f4acf0e5128ab8bc437021fcc5ea7)
- https://huggingface.co/api/datasets/vivo-ai/MobileGUI-VBench (retrieved 2026-10-17T02:42:32Z; SHA-256 5850fc58f54c877cffe328dba2a0b5e3e98767637aae6d6efd9a037cf06eabce)

---

## MobileGym

A browser-hosted mobile-app simulator with programmable state, parameterized tasks and deterministic state-checking judges for parallel GUI-agent evaluation and online reinforcement learning.

- Catalog URL: https://awesomecua.com/resources/github-purewhiter-mobilegym/
- Original source: https://github.com/Purewhiter/mobilegym
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, mobile-navigation, reinforcement-learning, sandbox
- Evidence checked: 2026-10-17T11:18:19Z
- ID: github:purewhiter/mobilegym

### Limitations

The inspected code release is v0.1.0, with a separately listed data-v0.1.0 archive. The interaction target is a browser-hosted Android-like simulation; real-device transfer results are separate publisher-reported experiments. Source split manifests contain 160 training IDs and 256 test IDs with no duplicates or overlap. Platform/training code declares Apache-2.0. LICENSE-DATA applies CC-BY-NC-4.0 only to maintainer-created compilation, curation and synthetic content, and explicitly leaves third-party UGC/API terms and author rights separate. No runtime, archive or model was executed/downloaded.

- Record JSON: https://awesomecua.com/resources/github-purewhiter-mobilegym/record.json

### Structured profile

- actions: tap, type, swipe, back, home, drag, complete
- evaluation: Deterministic task judges inspect state changes; reported metrics distinguish success, progress, false completion and unexpected side effects.
- focus: mobile GUI task completion in simulation, state verification and parallel training
- observations: simulated mobile screenshots, structured simulator state for judges
- setting: interactive

#### Count observations

- 416 task templates — publisher benchmark overview (reported; source: https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/README.md)
- 28 simulated apps — publisher benchmark overview (reported; source: https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/README.md)
- 160 task identifiers — bench_env/splits/train.txt (computed) (computed; source: https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/bench_env/splits/train.txt)
- 256 task identifiers — bench_env/splits/test.txt (computed) (computed; source: https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/bench_env/splits/test.txt)

The split-ID inventory is not a count of sampled trajectories, live Android apps or real user accounts. Extra runtime/data dependencies and third-party content terms remain distinct.

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/LICENSE
- data: CC-BY-NC-4.0 — https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/LICENSE-DATA
- document: not recorded
- weights: not recorded

- code review: Core source LICENSE; mobilegym-rl has a separate matching Apache-2.0 license and retains vendored notices.
  Sources: https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/LICENSE

- data review: Limited to maintainers’ dataset compilation/curation and authored synthetic content; third-party user content remains subject to platform terms and its authors’ rights.
  Sources: https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/LICENSE-DATA

### Primary evidence

- https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/README.md (retrieved 2026-10-17T11:18:19Z; SHA-256 815294dd2aa4bf8264978c3bfedee85a3a2c835c511860c732314a4c282a974a)
- https://api.github.com/repos/Purewhiter/mobilegym (retrieved 2026-10-17T11:18:18Z; SHA-256 48df04a2fbf479f956d5c7f22d7006c22f591b8857cab8a1d64c196349045495)
- https://api.github.com/repos/Purewhiter/mobilegym/git/trees/main?recursive=1 (retrieved 2026-10-17T11:22:56Z; SHA-256 68f1fa16c0999079bccc3aa1b6c3c22b72b570a5b971837c5026ea5408853375)
- https://api.github.com/repos/Purewhiter/mobilegym/releases/tags/v0.1.0 (retrieved 2026-10-17T11:23:08Z; SHA-256 cb1057b0a0a2ef7ab781414c168bb41f0f3da88afc042ce266d6063493561bde)
- https://api.github.com/repos/Purewhiter/mobilegym/releases/tags/data-v0.1.0 (retrieved 2026-10-17T11:23:09Z; SHA-256 ad0c86a6cdde2caba8bd1f98b121803817d93718319a863b0b833da2760c23aa)
- https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/LICENSE (retrieved 2026-10-17T11:22:59Z; SHA-256 7618cd7de039c264759ca8ca0b9130c6de63a4536dcf436baedd4cfbf639073e)
- https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/mobilegym-rl/LICENSE (retrieved 2026-10-17T11:27:50Z; SHA-256 58d1e17ffe5109a7ae296caafcadfdbe6a7d176f0bc4ab01e12a689b0499d8bd)
- https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/LICENSE-DATA (retrieved 2026-10-17T11:22:59Z; SHA-256 e222fa518c5003d425ee9b371e987c95ba10e52b54fea078571254ae6a8eaf23)
- https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/bench_env/splits/train.txt (retrieved 2026-10-17T11:27:49Z; SHA-256 0ecef460fecfd8aa91dcbb2cd4cca17b033f620f85a50d7f0b598ed19a27c0eb)
- https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/bench_env/splits/test.txt (retrieved 2026-10-17T11:27:48Z; SHA-256 a3d485015d480f4f1ebbd12dbbf02c25c0aa667d1afcf5f6fa35f0263a82c567)

---

## MobileGym++ / MobileGym++ Bench

Browser-rendered mobile simulation with resettable app state and a shared task suite for GUI-only and GUI-plus-tool agents.

- Catalog URL: https://awesomecua.com/resources/github-openmobile2-mobilegym-plusplus/
- Original source: https://github.com/OpenMobile2/MobileGym-plusplus
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: mobile-navigation, evaluation, cross-app, tool-integration
- Evidence checked: 2026-10-17T01:48:10Z
- ID: github:openmobile2/mobilegym-plusplus

### Limitations

These clients simulate named commercial applications and are not those commercial products. The code and simulator data have distinct license files. No benchmark run was performed. The README describes a phone that runs in the browser, and the Android-emulator playground is a separate OpenMobile2 release, so the platform facet is web rather than a mobile operating system.

- Record JSON: https://awesomecua.com/resources/github-openmobile2-mobilegym-plusplus/record.json

### Structured profile

- actions: GUI gestures, foreground-app tool calls in hybrid mode
- evaluation: Programmatic checkers inspect changes in application state; both modes share task definitions and initial states.
- focus: task completion, cross-application workflows, GUI and app-native tool comparison
- observations: screenshots
- setting: interactive

#### Count observations

- 215 task definitions — official.json (computed) (computed; source: https://raw.githubusercontent.com/OpenMobile2/MobileGym-plusplus/HEAD/bench_env/benchmark/official.json)
- 63 simulated clients — complete simulator installation (reported; source: https://raw.githubusercontent.com/OpenMobile2/MobileGym-plusplus/HEAD/README.md)
- 35 simulated clients — new clients in this release (reported; source: https://raw.githubusercontent.com/OpenMobile2/MobileGym-plusplus/HEAD/README.md)

The task count was checked against unique task_id values in the published manifest. The 35 new clients are a subset of 63 total clients. This simulator runs in a browser; Android-emulator apps are a separate part of OpenMobile-2.

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/OpenMobile2/MobileGym-plusplus/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/OpenMobile2/MobileGym-plusplus/HEAD/README.md (retrieved 2026-10-17T01:48:10Z; SHA-256 d9f850ec196e715650e679cb81515adaa64ddc5a60a882bfe97b0f6a098ddc83)
- https://os-copilot.github.io/OpenMobile2-Home/ (retrieved 2026-10-17T01:46:06Z; SHA-256 9b385e9f6aa2f7169f616a76887df3b76df605cb2bea071d99ee7ca3f9b659cc)
- https://raw.githubusercontent.com/OpenMobile2/MobileGym-plusplus/HEAD/bench_env/benchmark/official.json (retrieved 2026-10-17T01:50:11Z; SHA-256 35c1641b349201c68917fbe4c4036814487678e9588d9b1c903af26917800316)
- https://raw.githubusercontent.com/OpenMobile2/MobileGym-plusplus/HEAD/LICENSE (retrieved 2026-10-17T01:52:51Z; SHA-256 7618cd7de039c264759ca8ca0b9130c6de63a4536dcf436baedd4cfbf639073e)

---

## MobileSafetyBench

Android emulator testbed that scores mobile device-control agents on both safety and helpfulness, using ADB and Appium for observations, actions and success checks.

- Catalog URL: https://awesomecua.com/resources/github-jylee425-mobilesafetybench/
- Original source: https://github.com/jylee425/mobilesafetybench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: android
- Topics: safety-security, evaluation
- Evidence checked: 2026-10-16T06:35:58Z
- ID: github:jylee425/mobilesafetybench

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-jylee425-mobilesafetybench/record.json

### Structured profile

- actions: tap/long-tap/swipe, navigation buttons and text editing, refuse, ask-consent and complete, task-specific shortcut actions
- evaluation: Appium-backed task evaluators track goal achievement and harm prevention as separate booleans, plus risk-detection step and completion progress. The base evaluator defaults to max_step=15; task-specific overrides must be retained. Results are not a single generic success-rate metric.
- focus: mobile task helpfulness, harm prevention during Android interaction
- observations: screenshot pixels, parsed UI hierarchy text, task instruction and interaction history
- setting: interactive

#### Count observations

No count recorded.

Inspected release/ver.3 branch exposes task definitions, Android environment and per-task evaluators. It requires Android API 34, Appium/ADB and documented third-party app versions; those APKs/accounts were not acquired. The action parser includes semantic shortcuts in addition to screen gestures, so this is not a strictly coordinate-only action setting. No corpus task total is inferred from evaluator-module or file counts. Apache-2.0 applies to repository code, not automatically app/data assets.

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/jylee425/mobilesafetybench/HEAD/LICENSE.txt
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/jylee425/mobilesafetybench/HEAD/README.md (retrieved 2026-10-16T06:35:58Z; SHA-256 e733115d9b2fbe910cb3891162f04a89af8cbda25255c8f0bf60f78101e4309a)
- https://api.github.com/repos/jylee425/mobilesafetybench/git/trees/release/ver.3?recursive=1 (retrieved 2026-10-17T14:14:05Z; SHA-256 8dc66f6c5087a32c5c9fb7b3104ea6f9e0082255e2ba3cf9ba8244ce5a24da6f)
- https://raw.githubusercontent.com/jylee425/mobilesafetybench/HEAD/mobile_safety/environment.py (retrieved 2026-10-17T14:21:09Z; SHA-256 f56d6345546a9c67a2113cfba5b7148f5bd6b48fac5c34f1a5f4080e2d81ae2f)
- https://raw.githubusercontent.com/jylee425/mobilesafetybench/HEAD/mobile_safety/component/parser.py (retrieved 2026-10-17T14:21:10Z; SHA-256 120487c3a6492371321dd3eebcd65dc59de6a82454d622d7fed3a7d86b8fa6c5)
- https://raw.githubusercontent.com/jylee425/mobilesafetybench/HEAD/mobile_safety/evaluator/_base_evaluator.py (retrieved 2026-10-17T14:23:14Z; SHA-256 918e3aa64ab3f578fb54580da123c1ff4508022b64ce74f88ce28c7a612756a4)
- https://raw.githubusercontent.com/jylee425/mobilesafetybench/HEAD/LICENSE.txt (retrieved 2026-10-16T06:41:58Z; SHA-256 cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30)

---

## MobileWorld (Tongyi-MAI)

A containerized Android evaluation environment with GUI-only, agent-user interaction and MCP-augmented tasks, plus checks on application and backend state.

- Catalog URL: https://awesomecua.com/resources/github-tongyi-mai-mobileworld/
- Original source: https://github.com/Tongyi-MAI/MobileWorld
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: android
- Topics: evaluation, mobile-navigation, human-in-the-loop, tool-integration
- Evidence checked: 2026-10-17T09:12:16Z
- ID: github:tongyi-mai/mobileworld

### Limitations

This is Tongyi-MAI/MobileWorld, distinct from jacklishufan/MobileWorld (MobileWorldBench). Public source includes task definitions, verification logic and environment orchestration. The README reports 201 tasks across 20 applications; this is not an independent count of the evolving task tree. Linux/KVM or WSL2/KVM is required by the documented host setup, with macOS support in progress. MCP and simulated-user settings can require separate external services.

- Record JSON: https://awesomecua.com/resources/github-tongyi-mai-mobileworld/record.json

### Structured profile

- actions: Android GUI operations, MCP calls when enabled, agent-user interaction when enabled
- evaluation: The publisher documents text-answer matching, backend database verification, local-storage inspection and application callbacks.
- focus: Android task completion, agent-user interaction, hybrid GUI and MCP use
- observations: Android application interface, user-agent interaction when enabled
- setting: interactive

#### Count observations

- 201 tasks — README benchmark overview (reported; source: https://raw.githubusercontent.com/Tongyi-MAI/MobileWorld/HEAD/README.md)
- 20 mobile applications — README benchmark overview (reported; source: https://raw.githubusercontent.com/Tongyi-MAI/MobileWorld/HEAD/README.md)

Publisher-reported inventory. GUI-only, agent-user and MCP-augmented configurations have different dependencies and task eligibility; preserve enabled modes and step budget with results.

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/Tongyi-MAI/MobileWorld/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: Repository code license; self-hosted applications, model APIs and MCP services keep their own terms.
  Sources: https://raw.githubusercontent.com/Tongyi-MAI/MobileWorld/HEAD/LICENSE

### Primary evidence

- https://raw.githubusercontent.com/Tongyi-MAI/MobileWorld/HEAD/README.md (retrieved 2026-10-17T09:12:16Z; SHA-256 fbc306b3414dfdb230171358efd6eb8d67573fbb94e11487a4a7e971e2abf0d9)
- https://api.github.com/repos/Tongyi-MAI/MobileWorld (retrieved 2026-10-17T09:12:15Z; SHA-256 266e1fe5b5b1a4c1540ab0fd5eba206395084ee283f0079f424930a156cf8e18)
- https://api.github.com/repos/Tongyi-MAI/MobileWorld/git/trees/main?recursive=1 (retrieved 2026-10-17T09:14:08Z; SHA-256 14500ed2dfa14bb5c34211090f0c8827e4a16c3233e35a2d695c0d7261f9358b)
- https://raw.githubusercontent.com/Tongyi-MAI/MobileWorld/HEAD/LICENSE (retrieved 2026-10-17T09:14:09Z; SHA-256 b09fcaf4fbc265223c2479c410beef2b98c5e687c78ecedf3452aa12ffc465f1)

---

## MobileWorldBench

Benchmark of semantic world modeling for mobile agents, with question-answering tasks and GPT-judged generation tasks, plus training data built on AitW and AndroidControl screens.

- Catalog URL: https://awesomecua.com/resources/github-jacklishufan-mobileworld/
- Original source: https://github.com/jacklishufan/MobileWorld
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: android
- Topics: evaluation, mobile-navigation
- Evidence checked: 2026-10-16T06:40:51Z
- ID: github:jacklishufan/mobileworld

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-jacklishufan-mobileworld/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://github.com/jacklishufan/MobileWorld (retrieved 2026-10-16T06:40:51Z; SHA-256 dfcbaa088cc21dd4e3c67d6eb3b3a1dc476217165ce2ca0daa2facfda71b5a38)

---

## OmniAct

Dataset and benchmark for generating computer interaction programs.

- Catalog URL: https://awesomecua.com/resources/url-849a86beaee006c6b147/
- Original source: https://huggingface.co/datasets/Writer/omniact
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: desktop, web
- Topics: evaluation
- Evidence checked: 2026-10-16T06:38:27Z
- ID: url:849a86beaee006c6b147

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/url-849a86beaee006c6b147/record.json

### Structured profile

- actions: PyAutoGUI script: pointer movement/click/drag, key presses, hotkeys, and text entry
- evaluation: The bundled evaluator reports weighted sequence match and action match, comparing action types and applying coordinate, key, and writing penalties. Target element-box metadata is evaluation-only. The retained scorer has a click-penalty defect: predicted coordinates are read from gold_line, so score reproduction requires explicit scorer-version review.
- focus: offline desktop/web action-script generation
- observations: screenshot, natural-language task
- setting: offline

#### Count observations

- 6,788 task examples — train split, HF revision 5e4bcb26 (reported; source: https://huggingface.co/datasets/Writer/omniact/raw/5e4bcb26745afc8d58ba9519ea9c9fb832386d26/README.md)
- 2,020 task examples — test split, HF revision 5e4bcb26 (reported; source: https://huggingface.co/datasets/Writer/omniact/raw/5e4bcb26745afc8d58ba9519ea9c9fb832386d26/README.md)
- 991 task examples — val split, HF revision 5e4bcb26 (reported; source: https://huggingface.co/datasets/Writer/omniact/raw/5e4bcb26745afc8d58ba9519ea9c9fb832386d26/README.md)

This released split table totals 9,799 examples; it is not silently substituted for any paper-level collection size. Public files include train/test/val JSON indexes, task/image archives, and eval.py. Evaluation is offline script comparison, not execution success on a live desktop. MIT is the Hub data declaration; original app/content rights are not resolved by it.

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/Writer/omniact
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/Writer/omniact (retrieved 2026-10-16T06:38:27Z; SHA-256 2db0a5dd2b983dded3b90a8ecd66cadbb39074f03778a339822418531661b3e3)
- https://huggingface.co/datasets/Writer/omniact/raw/5e4bcb26745afc8d58ba9519ea9c9fb832386d26/README.md (retrieved 2026-10-17T14:10:00Z; SHA-256 7b54ad557f89d621fe39c3d2fe9f02164a2bfcb7fef0db610d964586d3673693)
- https://huggingface.co/datasets/Writer/omniact/raw/5e4bcb26745afc8d58ba9519ea9c9fb832386d26/eval.py (retrieved 2026-10-17T14:22:06Z; SHA-256 a786de678af46df5e2b6b1a2a69d2ee239fe8fd5b63663765d84d39e21fc2365)
- https://huggingface.co/api/datasets/Writer/omniact (retrieved 2026-10-16T06:38:27Z; SHA-256 2db0a5dd2b983dded3b90a8ecd66cadbb39074f03778a339822418531661b3e3)

---

## Online Mind2Web

300 tasks on 136 live websites for evaluating web agents online, with outdated tasks replaced over time, human-reviewed submissions and the WebJudge automatic evaluator.

- Catalog URL: https://awesomecua.com/resources/github-osu-nlp-group-online-mind2web/
- Original source: https://github.com/OSU-NLP-Group/Online-Mind2Web
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation
- Evidence checked: 2026-10-16T06:35:57Z
- ID: github:osu-nlp-group/online-mind2web

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-osu-nlp-group-online-mind2web/record.json

### Structured profile

- actions: web interactions
- evaluation: Human evaluation and WebJudge-based evaluation are documented as distinct assessment paths.
- focus: live-web task completion
- observations: not recorded
- setting: interactive

#### Count observations

- 300 tasks — documented Online-Mind2Web suite (reported; source: https://raw.githubusercontent.com/OSU-NLP-Group/Online-Mind2Web/HEAD/README.md)
- 136 websites — documented site coverage (reported; source: https://raw.githubusercontent.com/OSU-NLP-Group/Online-Mind2Web/HEAD/README.md)

Tasks are actively replaced when websites or requirements become invalid. Record the task revision and submission schema; a constant headline task count does not imply an unchanged test set.

### License declarations

- code: MIT — https://raw.githubusercontent.com/OSU-NLP-Group/Online-Mind2Web/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/OSU-NLP-Group/Online-Mind2Web/HEAD/README.md (retrieved 2026-10-16T06:35:57Z; SHA-256 49d7cc317fd2ba0df65abf65a0357d1fa2384e59019a96d4e24b784888599eaa)
- https://raw.githubusercontent.com/OSU-NLP-Group/Online-Mind2Web/HEAD/LICENSE (retrieved 2026-10-16T06:41:57Z; SHA-256 93675f9d13697ae98889d703b8fae86a7200623e7ae8d844c9ee2200ad480583)

---

## OpenApps

Configurable browser apps and task rewards for testing computer-use agents under changes in content, layout and appearance.

- Catalog URL: https://awesomecua.com/resources/github-facebookresearch-openapps/
- Original source: https://github.com/facebookresearch/OpenApps
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, robustness, cross-app, sandbox
- Evidence checked: 2026-10-18T04:35:18Z
- ID: github:facebookresearch/openapps

### Limitations

Public code includes app/task/configuration and agent-launching implementations. README distinguishes moving main from v1.0-paper and explicitly says even that tag is not a byte-exact snapshot of the published runs. CC-BY-NC-4.0 is the repository’s declared code license; third-party WebShop, map and icon content retain separate terms. No commercial-use permission or fixed downloadable task total is inferred.

- Record JSON: https://awesomecua.com/resources/github-facebookresearch-openapps/record.json

### Structured profile

- actions: click, type, scroll, configured BrowserGym/AgentLab actions
- evaluation: Tasks define check_if_task_is_complete(initial_state,current_state); app-specific reward logic evaluates underlying state, with custom checks for code-editor file contents. Observation/history flags are configurable. No universal single fixed task total or published-run reproduction is implied.
- focus: UI-agent reliability under environment variation, state-based browser task evaluation
- observations: screenshots, accessibility trees, set-of-marks and coordinates (configurable)
- setting: interactive

#### Count observations

No count recorded.

Preserve the code/tag, app state, theme/layout/content choices, goal variant and action/observation configuration. Current main refactors the paper-era appearance surface, and the v1.0-paper tag includes post-publication fixes that may move rewards. The environments run as browser apps; phone/tablet viewports are not native Android/iOS environments.

### License declarations

- code: CC-BY-NC-4.0 — https://raw.githubusercontent.com/facebookresearch/OpenApps/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: Reviewed repository license declaration for code; third-party dependencies, data, weights and executable environment images are separate.
  Sources: https://raw.githubusercontent.com/facebookresearch/OpenApps/HEAD/LICENSE

### Primary evidence

- https://raw.githubusercontent.com/facebookresearch/OpenApps/HEAD/README.md (retrieved 2026-10-18T04:35:18Z; SHA-256 1df0f66584b37e7dba90811a7732d3b0c13c96cd7da4aec3970a18be36a6cec1)
- https://api.github.com/repos/facebookresearch/OpenApps (retrieved 2026-10-18T04:33:19Z; SHA-256 2c57b627cb344e360480c10e74dcdd1d1ed321d9a7a4e3891bc970355b15f4cd)
- https://api.github.com/repos/facebookresearch/OpenApps/git/trees/main?recursive=1 (retrieved 2026-10-18T04:35:18Z; SHA-256 34aa76fbd6cca6ac2f3949792144662b90d85d7a18988afabcb570167ea5c1d6)
- https://raw.githubusercontent.com/facebookresearch/OpenApps/HEAD/docs/tasks.md (retrieved 2026-10-18T04:40:40Z; SHA-256 af030b93a7604c063b08f003b0a0124a6e95e560649d0306bfe40dd87fed563d)
- https://raw.githubusercontent.com/facebookresearch/OpenApps/HEAD/docs/agents.md (retrieved 2026-10-18T04:40:40Z; SHA-256 aede4dfd965bd3484336f40ddb1bd6db48aed00ab45e27c048b76cc4601d71b3)
- https://raw.githubusercontent.com/facebookresearch/OpenApps/HEAD/LICENSE (retrieved 2026-10-18T04:35:20Z; SHA-256 336255dc30193e8e15d689d9481bb05673d89055718f3a96923a7ffb99adbbaf)

---

## OS-Critic Bench

A cross-platform GUI-critic benchmark with mobile, desktop and web JSONL splits and screenshot assets, accompanied by public inference and accuracy-scoring scripts.

- Catalog URL: https://awesomecua.com/resources/url-c73ba0618d1b3c505887/
- Original source: https://huggingface.co/datasets/OS-Copilot/OS-Critic-Bench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: cross-platform, desktop, web
- Topics: evaluation, reward-models, screen-understanding
- Evidence checked: 2026-10-17T11:18:18Z
- ID: url:c73ba0618d1b3c505887

### Limitations

The Hub card provides split/format/license metadata, while the official OS-Oracle README establishes critic-evaluation purpose and platform scope. The repository currently releases only benchmark inference/scoring components; data-synthesis code, training datasets and model checkpoints remain unchecked TODOs and are not counted as released assets. Apache-2.0 is recorded for benchmark data only; the evaluation code has no inspected license declaration.

- Record JSON: https://awesomecua.com/resources/url-c73ba0618d1b3c505887/record.json

### Structured profile

- actions: critic-model responses
- evaluation: The official repository runs model inference and computes accuracy with cal_acc.py.
- focus: GUI critic prediction
- observations: benchmark JSONL, UI screenshots
- setting: offline

#### Count observations

- 3 platform JSONL splits — mobile/desktop/web configurations in the Hub card (computed) (computed; source: https://huggingface.co/datasets/OS-Copilot/OS-Critic-Bench/raw/main/README.md)

No sample count is inferred from the n<1K Hub size band. Evaluation code availability does not establish the release of OS-Oracle training data or weights.

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/OS-Copilot/OS-Critic-Bench/raw/main/README.md
- document: not recorded
- weights: not recorded

- data review: Publisher dataset-card license declaration for OS-Critic-Bench; not an evaluation-code or model-weight license.
  Sources: https://huggingface.co/datasets/OS-Copilot/OS-Critic-Bench/raw/main/README.md

### Primary evidence

- https://raw.githubusercontent.com/numbmelon/OS-Oracle/HEAD/README.md (retrieved 2026-10-17T11:18:18Z; SHA-256 58305b8ebe1af5dfbddd636484d63722d4e21d28ed3e22bb8c0068e654f33479)
- https://api.github.com/repos/numbmelon/OS-Oracle (retrieved 2026-10-17T11:18:17Z; SHA-256 17bcf851f39d06e7e357871df1dc1ddf697bcbea31842c16348227bbf4fbb224)
- https://api.github.com/repos/numbmelon/OS-Oracle/git/trees/main?recursive=1 (retrieved 2026-10-17T11:22:55Z; SHA-256 516beea465382b54548e4b8bfd12ae510080a49451b30262ad1c769ed5a3398e)
- https://huggingface.co/api/datasets/OS-Copilot/OS-Critic-Bench (retrieved 2026-10-17T11:23:06Z; SHA-256 ef311b49437e246ffef6ad13c090277a0bdacc4a124e5b3cfe8d2643ced8f843)
- https://huggingface.co/datasets/OS-Copilot/OS-Critic-Bench/raw/main/README.md (retrieved 2026-10-17T11:23:07Z; SHA-256 4139e25e8911ca8450f6db9acb8dc3a98c126c3c43514c72bcefa4ed33b8ffa8)

---

## OS-Harm

Benchmark for safety of computer-use agents across misuse, prompt injection, and unintended model behavior.

- Catalog URL: https://awesomecua.com/resources/github-tml-epfl-os-harm/
- Original source: https://github.com/tml-epfl/os-harm
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: desktop
- Topics: safety-security, evaluation
- Evidence checked: 2026-10-16T09:36:33Z
- ID: github:tml-epfl/os-harm

### Limitations

The retained task-ID manifests have 50 misuse, 10 injection and 50 misbehavior IDs. Prompt-injection execution expands vectors/goals; the reported 150-task total must not be read as 150 unique released IDs.

- Record JSON: https://awesomecua.com/resources/github-tml-epfl-os-harm/record.json

### Structured profile

- actions: OSWorld/PyAutoGUI desktop interaction
- evaluation: Automated LLM judge scores both task accuracy and safety from saved execution traces. Keep judge model/prompt version and harm category with a result; the scripts separately compute predicted metrics. This is an interactive desktop safety benchmark, not a single offline grounding score.
- focus: deliberate misuse, prompt-injection safety, unintended harmful behavior during normal tasks
- observations: screenshot, accessibility tree, screenshot plus accessibility tree, set-of-marks
- setting: interactive

#### Count observations

- 150 tasks as reported by the paper/README — reported benchmark total; not a recount of unique released task IDs (reported; source: https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/README.md)
- 50 task IDs — released misuse task-ID list; before injection/goal expansion (computed) (computed; source: https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/evaluation_examples/test_misuse.json)
- 10 task IDs — released injection task-ID list; before injection/goal expansion (computed) (computed; source: https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/evaluation_examples/test_injection.json)
- 50 task IDs — released misbehavior task-ID list; before injection/goal expansion (computed) (computed; source: https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/evaluation_examples/test_misbehavior.json)

README/paper reports 150 tasks, whereas retained misuse/injection/misbehavior lists contain 50/10/50 IDs. run.py expands injection vectors/goals, so the released ID inventory is not a direct recount of paper settings; the complete expanded total was not reconstructed. Judge agreement F1 values in the README measure agreement with human labels, not agent success. Experiments use OSWorld desktop apps, with VMware documented as tested and screenshot/a11y/SOM observation choices. Code Apache-2.0 does not establish VM/app/data rights. Publisher asks that the benchmark not be used directly as agent training data.

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/README.md (retrieved 2026-10-16T09:36:33Z; SHA-256 d001158f58ac37b01c8470224db1567a52feb8010877305f7966637cf7400706)
- https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/run.py (retrieved 2026-10-17T14:23:14Z; SHA-256 86dd59a252fd654fc3244268a75de37b2c7f97e16f6b1de8c4cf885458a422f7)
- https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/evaluation_examples/test_misuse.json (retrieved 2026-10-17T14:22:04Z; SHA-256 8ff6092a51cc924c5225ace01c011c6481a2461eb0a47b7360eddaf6619b898c)
- https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/evaluation_examples/test_injection.json (retrieved 2026-10-17T14:22:04Z; SHA-256 b4c451236bb4ff36eb7e790dfa8cb517bffb245602bc441080314b13c8aba54f)
- https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/evaluation_examples/test_misbehavior.json (retrieved 2026-10-17T14:22:05Z; SHA-256 8eb6bade72696c3c0b53160a05b006a773c9e553ab5e401418b54d9acc98c0f2)
- https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/LICENSE (retrieved 2026-10-16T09:39:34Z; SHA-256 7c3ab1eeeb073d92238ecb65ffaebe58ab5922929b115a7c0b64eb4f9a9afc2f)

---

## OS-Map

An OSWorld-derived desktop benchmark with an Ubuntu virtual-machine environment and expanded task configurations for measuring breadth and depth of computer interaction.

- Catalog URL: https://awesomecua.com/resources/github-os-copilot-os-map/
- Original source: https://github.com/OS-Copilot/OS-Map
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: evaluation, long-horizon, cross-app
- Evidence checked: 2026-10-17T09:12:14Z
- ID: github:os-copilot/os-map

### Limitations

Public task manifests, agent runner and evaluator code are present, and the linked ungated Hub manifest lists Ubuntu0.zip and task files. The main setup supports x86 VMware Workstation and says ARM/Docker alternatives are still in development. An inherited evaluation-examples README still mentions Windows 10 and under-construction status; those statements are retained as a documentation inconsistency, not interpreted as verified Windows support. The manifest has 416 category/task references but 412 globally distinct ID strings.

- Record JSON: https://awesomecua.com/resources/github-os-copilot-os-map/record.json

### Structured profile

- actions: actions executed by the OSWorld-derived DesktopEnv
- evaluation: Task configurations provide evaluators for application/system state, using an OSWorld-derived runtime.
- focus: breadth of desktop task coverage, depth of desktop task execution
- observations: desktop observations from an Ubuntu virtual machine
- setting: interactive

#### Count observations

- 416 category/task references — evaluation_examples/all.json (computed) (computed; source: https://raw.githubusercontent.com/OS-Copilot/OS-Map/HEAD/evaluation_examples/all.json)

416 category/task pairs are unique, but only 412 bare ID strings are unique across categories. This is a manifest-reference count, not a claim of 416 semantically distinct tasks. Main runtime documentation specifies Ubuntu; the subdirectory README retains older Windows-only wording.

### License declarations

- code: MIT — https://raw.githubusercontent.com/OS-Copilot/OS-Map/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: Repository code LICENSE; no license is inferred for the VM image or bundled third-party applications.
  Sources: https://raw.githubusercontent.com/OS-Copilot/OS-Map/HEAD/LICENSE

### Primary evidence

- https://raw.githubusercontent.com/OS-Copilot/OS-Map/HEAD/README.md (retrieved 2026-10-17T09:12:14Z; SHA-256 fc9f3c8d9fffdff8b51e312b013be0d9fdfc10e57fdc2ec4a8a8d012c4b42475)
- https://api.github.com/repos/OS-Copilot/OS-Map (retrieved 2026-10-17T09:12:14Z; SHA-256 d6c91b4910e92f40cc694b4cb6467c1a20f42c0c14047b95a1e777aca0892677)
- https://api.github.com/repos/OS-Copilot/OS-Map/git/trees/main?recursive=1 (retrieved 2026-10-17T09:14:07Z; SHA-256 41342157c53f28ad2729137491930225ac11da922e7b16762e84ac958a2e9d28)
- https://raw.githubusercontent.com/OS-Copilot/OS-Map/HEAD/LICENSE (retrieved 2026-10-17T09:14:07Z; SHA-256 1dd924135cbf0a85ce72d75025259adb7b849970d400af4ed854327a34e7ee41)
- https://raw.githubusercontent.com/OS-Copilot/OS-Map/HEAD/evaluation_examples/all.json (retrieved 2026-10-17T09:17:22Z; SHA-256 4199af4c8bc60451079d8a2e7598ab7386bd82b0d5c9ad7e6927d6cb8e03ad6f)
- https://raw.githubusercontent.com/OS-Copilot/OS-Map/HEAD/evaluation_examples/README.md (retrieved 2026-10-17T09:17:22Z; SHA-256 a6b60d5721cfdd26416e7d0ae3192360896427a97ccb3793812cc150e9cd7126)
- https://huggingface.co/api/datasets/os-map/OSMAP (retrieved 2026-10-17T09:14:16Z; SHA-256 d2da837872b123f2927a069a020aeb14fb4b22148599c9f2e8b6689ee444ec88)

---

## OSWorld

Execution-based evaluation of agents performing tasks in real desktop environments.

- Catalog URL: https://awesomecua.com/resources/github-xlang-ai-osworld/
- Original source: https://github.com/xlang-ai/OSWorld
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: desktop, linux, windows, macos
- Topics: evaluation, cross-app
- Evidence checked: 2026-10-16T06:35:57Z
- ID: github:xlang-ai/osworld

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-xlang-ai-osworld/record.json

### Structured profile

- actions: mouse and keyboard via PyAutoGUI
- evaluation: Task-specific execution-based evaluators inspect application or system state.
- focus: task completion, cross-application workflows
- observations: screenshots
- setting: interactive

#### Count observations

- 369 task definitions — test_all.json (computed) (computed; source: https://raw.githubusercontent.com/xlang-ai/OSWorld/HEAD/evaluation_examples/test_all.json)
- 361 task definitions — test_nogdrive.json (computed) (computed; source: https://raw.githubusercontent.com/xlang-ai/OSWorld/HEAD/evaluation_examples/test_nogdrive.json)

Counts were computed from unique task identifiers in the two inspected manifests. The subsets differ; record the manifest, repository revision, agent interface, and step budget with a score.

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/xlang-ai/OSWorld/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/xlang-ai/OSWorld/HEAD/README.md (retrieved 2026-10-16T06:35:57Z; SHA-256 83b8684c2f4ac4f31996b8b4752195fcb6cc5429f89d92398177b9b721d787fc)
- https://export.arxiv.org/api/query?id_list=2403.03186%2C2403.03788%2C2403.07718%2C2403.10170%2C2403.11905%2C2403.16971%2C2403.17918%2C2403.20271%2C2404.01549%2C2404.01744%2C2404.02475%2C2404.03648%2C2404.05427%2C2404.05719%2C2404.05955%2C2404.06474%2C2404.07972%2C2404.08755%2C2404.08860%2C2404.08948%2C2404.09992%2C2404.10887%2C2404.11459%2C2404.16006%2C2404.16048%2C2404.16054%2C2404.16660%2C2404.18074%2C2404.19296%2C2405.00516%2C2405.11120%2C2405.12842%2C2405.14573%2C2405.14751%2C2405.15793%2C2405.16247%2C2405.20309%2C2406.01014%2C2406.01623%2C2406.03679%2C2406.06947%2C2406.07822%2C2406.08184%2C2406.08340%2C2406.08451%2C2406.10227%2C2406.10819%2C2406.11317%2C2406.11896%2C2406.12373&max_results=50 (retrieved 2026-10-16T06:31:28Z; SHA-256 be244bfae7f89ef9449b69d85aac44295eb7b5f7e5e1bbedd76df312696676a7)
- https://raw.githubusercontent.com/xlang-ai/OSWorld/HEAD/evaluation_examples/test_all.json (retrieved 2026-10-16T11:34:59Z; SHA-256 9ebc5187cbd727ef26c24626820076b102fff812863c640a67c467fea9542ab5)
- https://raw.githubusercontent.com/xlang-ai/OSWorld/HEAD/evaluation_examples/test_nogdrive.json (retrieved 2026-10-16T11:34:59Z; SHA-256 fcb9497e93a8986407345d3012c872c9c2fed253420730fbea64ccfcace67dbb)
- https://raw.githubusercontent.com/xlang-ai/OSWorld/HEAD/LICENSE (retrieved 2026-10-16T06:41:57Z; SHA-256 a8d1d88a0f9cce3cdbff73b03a80dc5e5d69e3ba2443946c268815a550c9e0ec)

---

## OSWorld-G

Computer-use grounding benchmark with original and refined instructions, released with the Jedi synthetic data pipeline, a 4-million-example Jedi dataset and Jedi-3B and Jedi-7B models.

- Catalog URL: https://awesomecua.com/resources/github-xlang-ai-osworld-g/
- Original source: https://github.com/xlang-ai/OSWorld-G
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: desktop
- Topics: evaluation, grounding
- Evidence checked: 2026-10-16T06:35:57Z
- ID: github:xlang-ai/osworld-g

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-xlang-ai-osworld-g/record.json

### Structured profile

- actions: click point or box center, refusal represented by negative coordinates in the evaluator
- evaluation: The inspected Jedi runner maps predictions from resized-image coordinates back to the original image, then checks the predicted center against rectangle/polygon targets or the refusal rule. It reports overall and classification-group accuracy. This is offline grounding, not OSWorld task-execution success.
- focus: desktop GUI grounding, infeasible-target refusal
- observations: screenshot, instruction
- setting: offline

#### Count observations

No count recorded.

The repository retains original OSWorld-G.json and refined OSWorld-G_refined.json instructions; treat them as alternative benchmark versions, not additional disjoint tasks. Refined instructions reduce requirements beyond grounding. The same repository also contains Jedi training/rendering material, which is excluded from benchmark counts. The standalone generic eval.py entry point is a stub; the named model runner supplies image_size to its geometry helper. No task count or successful execution is inferred from repository file totals. Apache-2.0 is recorded for code only.

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/xlang-ai/OSWorld-G/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/xlang-ai/OSWorld-G/HEAD/README.md (retrieved 2026-10-16T06:35:57Z; SHA-256 e814851bc3016a2abf59358f99b80afd9c2bd5894fc34baddfb7e4d0aa03bd45)
- https://api.github.com/repos/xlang-ai/OSWorld-G/git/trees/main?recursive=1 (retrieved 2026-10-17T14:14:05Z; SHA-256 48308bba4f26b02cb7b8fbbc433bb31ec81c494dabd3af437ddbb10b8d9ce667)
- https://raw.githubusercontent.com/xlang-ai/OSWorld-G/HEAD/evaluation/qwen25_vllm_osworld_g_jedi.py (retrieved 2026-10-17T14:22:04Z; SHA-256 64f64e0b847e0fa200aa6051e20b8035a436df00e2ef0d769688ab13fa4d3046)
- https://raw.githubusercontent.com/xlang-ai/OSWorld-G/HEAD/evaluation/eval.py (retrieved 2026-10-17T14:21:09Z; SHA-256 b85f5685ce6c200ea648471666177859693d7f40cf50c12d08765ae68580de4a)
- https://raw.githubusercontent.com/xlang-ai/OSWorld-G/HEAD/LICENSE (retrieved 2026-10-16T06:41:57Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## OSWorld-Human

Human reference trajectories and scoring code for measuring the action efficiency of computer-use agents on OSWorld tasks.

- Catalog URL: https://awesomecua.com/resources/github-wuklab-osworld-human/
- Original source: https://github.com/WukLab/osworld-human
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: desktop
- Topics: evaluation, efficiency, workflow
- Evidence checked: 2026-10-17T03:59:54Z
- ID: github:wuklab/osworld-human

### Limitations

The repository publishes per-application reference JSON files and score.py. It explicitly states that these evaluation solutions should not be used for training. No root code or data-license declaration was found; no license is inherited from OSWorld, and the score script was not executed.

- Record JSON: https://awesomecua.com/resources/github-wuklab-osworld-human/record.json

### Structured profile

- actions: efficiency scores
- evaluation: The scorer consumes OSWorld results and a specified maximum step budget; the README distinguishes single-action and grouped-action WES+ and WES-.
- focus: action efficiency relative to humans
- observations: OSWorld result trajectories, human reference actions
- setting: offline

#### Count observations

No count recorded.

Reference solutions are published for evaluation and expressly discouraged for training. No task count is inferred from file count.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/WukLab/osworld-human/HEAD/README.md (retrieved 2026-10-17T03:59:54Z; SHA-256 35c2f4dbed9d9bfc57f4c5a3f2fd70d313d6b463403b482c2fd4066d27b02cc1)
- https://api.github.com/repos/WukLab/osworld-human (retrieved 2026-10-17T03:59:54Z; SHA-256 21c86601da6e77a3326fbcd143e3c5d9a033cd59e6e13973250966dff6f51ae9)
- https://api.github.com/repos/WukLab/osworld-human/git/trees/main?recursive=1 (retrieved 2026-10-17T03:59:55Z; SHA-256 c7b958d7a075adf5d282be08b68ad2b090568da342d4cb4b501ae808e54d0053)

---

## PopupAttack

Resources for evaluating GUI agents under malicious popup instructions.

- Catalog URL: https://awesomecua.com/resources/github-salt-nlp-popupattack/
- Original source: https://github.com/SALT-NLP/PopupAttack
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: safety-security
- Evidence checked: 2026-10-16T06:40:54Z
- ID: github:salt-nlp/popupattack

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-salt-nlp-popupattack/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/SALT-NLP/PopupAttack/HEAD/README.md (retrieved 2026-10-16T06:40:54Z; SHA-256 24251854f9481af5c8db65750197604546f000b54868930a6de79adc365db854)

---

## PPTC

PowerPoint creation and editing benchmark with API-based execution and checks of the resulting presentation files.

- Catalog URL: https://awesomecua.com/resources/github-gydpku-pptc/
- Original source: https://github.com/gydpku/PPTC
- Kind: benchmark
- Review: curated
- Scope: adjacent
- Environments: unspecified
- Topics: evaluation, tool-integration
- Evidence checked: 2026-10-16T10:42:12Z
- ID: github:gydpku/pptc

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-gydpku-pptc/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/gydpku/PPTC/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/gydpku/PPTC/HEAD/README.md (retrieved 2026-10-16T10:42:12Z; SHA-256 63349e7557bd99240d4628de3994a53b69e54e3bd809895be11e9879bfba40cb)
- https://raw.githubusercontent.com/gydpku/PPTC/HEAD/LICENSE (retrieved 2026-10-16T10:48:41Z; SHA-256 f872ff2b1a064f46a45eee86f2cb2562fc0513285b80036c6cf7df9a5ffc6c70)

---

## Precision CUA Bench

Evaluation resources for pixel-precise cursor grounding in code editors.

- Catalog URL: https://awesomecua.com/resources/github-microsoft-precision-cua-bench/
- Original source: https://github.com/microsoft/precision-cua-bench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: evaluation, grounding
- Evidence checked: 2026-10-16T06:40:52Z
- ID: github:microsoft/precision-cua-bench

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-microsoft-precision-cua-bench/record.json

### Structured profile

- actions: pixel (x,y) cursor coordinate
- evaluation: The inspected evaluator scales target boxes from a 1000×1000 reference grid into image pixels and tests pixel predictions, allowing ±10 pixels around the center along any target dimension narrower than 1 pixel after scaling. It reports cumulative hit accuracy by turn (earlier hits remain correct), miss distances, any-turn hit rate, and a correction rate whose denominator is all successfully processed samples. The default budget is five turns; retain prompt/feedback variant, turn budget, and processed/skipped coverage.
- focus: pixel-precise editor cursor placement, multi-turn visual self-correction
- observations: code-editor screenshot, cursor-location instruction, red-cross feedback marking previous incorrect prediction
- setting: offline

#### Count observations

No count recorded.

The release has four editor/theme JSONL partitions (Cursor/VS Code × dark/light) and screenshot files. Partitions are not train/test splits or independent task totals. README’s initial field table calls bbox pixel coordinates, but the evaluation-format section and actual ratio_h/ratio_w=dimension/1000 code use normalized target boxes; profile follows the inspected evaluator and retains the inconsistency. Source/images were not executed or downloaded as a dataset. MIT is recorded for repository code only.

### License declarations

- code: MIT — https://raw.githubusercontent.com/microsoft/precision-cua-bench/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://github.com/microsoft/precision-cua-bench (retrieved 2026-10-16T06:40:52Z; SHA-256 23d0dc8ea0a10c080cf8ae32121eade2785ae923a6b0d853d166c94c195e789b)
- https://raw.githubusercontent.com/microsoft/precision-cua-bench/HEAD/README.md (retrieved 2026-10-16T06:35:59Z; SHA-256 84ad4fb798abb776dce813cf4dab296d6e03248d8ae29388e1f06cccd27d1241)
- https://raw.githubusercontent.com/microsoft/precision-cua-bench/HEAD/eval/test_allturns_api.py (retrieved 2026-10-17T14:21:08Z; SHA-256 1fda7c3980fe7a7c373478eda6ecfabff227e92c2b1f19c6fe903b408f583797)
- https://api.github.com/repos/microsoft/precision-cua-bench/git/trees/main?recursive=1 (retrieved 2026-10-17T14:14:06Z; SHA-256 ede84e3dda47f80fada4234caa2423db08e21ff7667a37599c03aae657b2f84b)
- https://export.arxiv.org/api/query?id_list=2603.12823%2C2603.14707%2C2603.15039%2C2603.17357%2C2603.18429%2C2603.19191%2C2603.24440%2C2603.25226%2C2603.25864%2C2603.26211%2C2603.26648%2C2603.29318%2C2604.01535%2C2604.02947%2C2604.04399%2C2604.05477%2C2604.06126%2C2604.06182%2C2604.06367%2C2604.07429%2C2604.08455%2C2604.08516%2C2604.08523%2C2604.09155%2C2604.09574%2C2604.09587%2C2604.09815%2C2604.09937%2C2604.11259%2C2604.11784%2C2604.12284%2C2604.13019%2C2604.13822%2C2604.14113%2C2604.14262%2C2604.14956%2C2604.15093%2C2604.15309%2C2604.17817%2C2604.17821%2C2604.18860%2C2604.24964%2C2604.25380%2C2604.25562%2C2604.27151%2C2604.27253%2C2604.27776%2C2605.00642%2C2605.06393%2C2605.06664&max_results=50 (retrieved 2026-10-16T06:32:00Z; SHA-256 4d09ebfb093e43a4c44adef86c8fa8374f90d907fc33bd8e12a1315e62d5a583)
- https://raw.githubusercontent.com/microsoft/precision-cua-bench/HEAD/LICENSE (retrieved 2026-10-16T06:41:59Z; SHA-256 c2cfccb812fe482101a8f04597dfc5a9991a6b2748266c47ac91b6a5aae15383)

---

## RecreationBench

Tasks for recreating reference applications with hybrid computer interaction.

- Catalog URL: https://awesomecua.com/resources/url-d9d8e68f19ef0956d189/
- Original source: https://huggingface.co/datasets/Qwen/RecreationBench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: evaluation, tool-integration
- Evidence checked: 2026-10-16T06:50:49Z
- ID: url:d9d8e68f19ef0956d189

### Limitations

Dataset card declares multiple upstream licenses; do not treat the package as having one blanket permissive license.

- Record JSON: https://awesomecua.com/resources/url-d9d8e68f19ef0956d189/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/Qwen/RecreationBench/raw/main/README.md (retrieved 2026-10-16T06:50:49Z; SHA-256 79deaa899d085ece77a127d53b12ddb9edea8a796943f35b75e9acec67bcb976)

---

## RiOSWorld

Measures risky behavior of multimodal computer-use agents in an Ubuntu virtual machine, with risk scenarios such as phishing emails and released evaluation trajectories.

- Catalog URL: https://awesomecua.com/resources/github-yjyddq-riosworld/
- Original source: https://github.com/yjyddq/RiOSWorld
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: evaluation
- Evidence checked: 2026-10-16T06:35:59Z
- ID: github:yjyddq/riosworld

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-yjyddq-riosworld/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/yjyddq/RiOSWorld/HEAD/README.md (retrieved 2026-10-16T06:35:59Z; SHA-256 c984f114df33af953a97d22e14e14246f8a98e0866edcaf283900b309b71d8d1)

---

## SaaS-Bench

106 browser-driven business workflows across 23 self-hosted SaaS apps in six domains, scored by per-task verifiers that read each app's database and give partial credit.

- Catalog URL: https://awesomecua.com/resources/github-unipat-ai-saas-bench/
- Original source: https://github.com/UniPat-AI/SaaS-Bench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, workflow
- Evidence checked: 2026-10-16T06:35:59Z
- ID: github:unipat-ai/saas-bench

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-unipat-ai-saas-bench/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/UniPat-AI/SaaS-Bench/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/UniPat-AI/SaaS-Bench/HEAD/README.md (retrieved 2026-10-16T06:35:59Z; SHA-256 8cfab6fca80090adb47c4ef634f89eedd49a6204dbdc2b5b8e0d6f04c32db289)
- https://raw.githubusercontent.com/UniPat-AI/SaaS-Bench/HEAD/LICENSE (retrieved 2026-10-16T06:41:59Z; SHA-256 971246559df3f118e367cb299d3544f94e7c3d30db39f05c0c164589af4f3a88)

---

## SafeArena

Web-agent benchmark pairing benign and harmful tasks to study deliberate misuse risks.

- Catalog URL: https://awesomecua.com/resources/github-mcgill-nlp-safearena/
- Original source: https://github.com/McGill-NLP/safearena
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: safety-security, evaluation
- Evidence checked: 2026-10-16T09:36:33Z
- ID: github:mcgill-nlp/safearena

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-mcgill-nlp-safearena/record.json

### Structured profile

- actions: web interactions
- evaluation: Task outcomes and the Agent Risk Assessment categories evaluate agent behavior on benign and harmful requests.
- focus: web-agent safety, task completion
- observations: not recorded
- setting: interactive

#### Count observations

- 250 tasks — safe split (reported; source: https://arxiv.org/abs/2503.04957)
- 250 tasks — harmful split (reported; source: https://arxiv.org/abs/2503.04957)

Use SafeArena-specific containers rather than ordinary WebArena instances. The documented task splits require access approval; the profile does not imply unrestricted dataset access.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/McGill-NLP/safearena/HEAD/README.md (retrieved 2026-10-16T09:36:33Z; SHA-256 ae50121aa60ac26b32d8d6ad6f578f9091a81a3cb9ca28b98050bddee16c929a)
- https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=700&max_results=100&sortBy=submittedDate&sortOrder=descending (retrieved 2026-10-16T06:36:54Z; SHA-256 4953a8e0f029016aef668bce98cec4d2873a7ae49c1fe33c4311fa5eb8d24089)

---

## ScienceBoard

Scientific-workflow tasks for multimodal agents in desktop software such as ChimeraX, KAlgebra, Celestia, Grass GIS and Lean 4, with apps modified to expose state for evaluation.

- Catalog URL: https://awesomecua.com/resources/github-os-copilot-scienceboard/
- Original source: https://github.com/OS-Copilot/ScienceBoard
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: desktop
- Topics: evaluation, science
- Evidence checked: 2026-10-16T06:35:58Z
- ID: github:os-copilot/scienceboard

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-os-copilot-scienceboard/record.json

### Structured profile

- actions: PyAutoGUI desktop actions, code/tool commands and answer/stop actions according to configured agent mode
- evaluation: Application-specific verifiers inspect state, files, database values, equations, compilation or answer/stop conditions. The official audit records 242 verifier entries across its VM task suite. This profile covers the released VM task definitions; Docker smoke results and Raw/Dual alternatives are separate populations.
- focus: scientific-software desktop workflows, GUI and code-assisted scientific tasks
- observations: desktop screenshots, accessibility-tree observations, set-of-marks with accessibility tree
- setting: interactive

#### Count observations

- 169 VM task definitions — tasks/VM/**/*.json at tree 21b5eb0f; excludes tasks/Raw and tasks/Dual (computed) (computed; source: https://api.github.com/repos/OS-Copilot/ScienceBoard/git/trees/main?recursive=1)
- 6 application families — VM suite: Celestia, ChimeraX, GrassGIS, KAlgebra, Lean, TeXstudio (reported; source: https://raw.githubusercontent.com/OS-Copilot/ScienceBoard/HEAD/docs/verifier-audit.md)

Manifest count 169 matches the official verifier audit. Other Raw/Dual definitions can represent alternative execution modes of the same problems and are not added. Official Docker migration documents a 20-task acceptance subset, not a full-suite performance result; legacy VMware remains. External service sign-in/rate limits, amd64 binaries and ChimeraX redistribution terms limit portability. Only code MIT is established; VM, scientific data and bundled apps need their own terms.

### License declarations

- code: MIT — https://raw.githubusercontent.com/OS-Copilot/ScienceBoard/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/OS-Copilot/ScienceBoard/HEAD/README.md (retrieved 2026-10-16T06:35:58Z; SHA-256 4c3fe93aa740dbf4a279a246ddd836f2590a2a36f39b820abe166e38cb484577)
- https://raw.githubusercontent.com/OS-Copilot/ScienceBoard/HEAD/docs/verifier-audit.md (retrieved 2026-10-17T14:21:10Z; SHA-256 d276e11127abc5826bd1b2aa2caf543fcd45a8a60477774e8c8b1054067997ec)
- https://raw.githubusercontent.com/OS-Copilot/ScienceBoard/HEAD/docs/known-issues.md (retrieved 2026-10-17T14:21:10Z; SHA-256 4f90270617c0c1d58f523c0a7f2e4603fa67a49560d68e2f88cfa080d764313b)
- https://api.github.com/repos/OS-Copilot/ScienceBoard/git/trees/main?recursive=1 (retrieved 2026-10-17T14:14:07Z; SHA-256 3398670a517a5d1d71f420dd866493d3f8a77853e3933fd4928103f9a8be1e4f)
- https://raw.githubusercontent.com/OS-Copilot/ScienceBoard/HEAD/sci/base/task.py (retrieved 2026-10-17T14:35:24Z; SHA-256 d6a1481b453c074e34739fd29def56efa35a1dc10e856418f557f067e9ff08c5)
- https://raw.githubusercontent.com/OS-Copilot/ScienceBoard/HEAD/LICENSE (retrieved 2026-10-16T06:41:59Z; SHA-256 cbb1d28b515a39c294963d4bfc24077e669a483fc5ebba9b84a727afd4187426)

---

## Screen Point-and-Read / Tree-of-Lens

Screen-reading benchmark and Tree-of-Lens implementation for interpreting user-indicated regions and their layout context.

- Catalog URL: https://awesomecua.com/resources/github-ucsb-ai-screen-point-and-read/
- Original source: https://github.com/UCSB-AI/Screen-Point-and-Read
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: screen-understanding, grounding, evaluation
- Evidence checked: 2026-10-16T10:43:11Z
- ID: github:ucsb-ai/screen-point-and-read

### Limitations

The canonical repository now belongs to UCSB-AI. Its README lists additional setup documentation and evaluation scripts as unfinished.

- Record JSON: https://awesomecua.com/resources/github-ucsb-ai-screen-point-and-read/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/UCSB-AI/Screen-Point-and-Read/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/eric-ai-lab/Screen-Point-and-Read/HEAD/README.md (retrieved 2026-10-16T10:43:11Z; SHA-256 7567287ceee0ad2d3d5605abb44ac50463c1008f9b6309393695763cf2ce89bb)
- https://raw.githubusercontent.com/UCSB-AI/Screen-Point-and-Read/HEAD/LICENSE (retrieved 2026-10-16T10:48:42Z; SHA-256 4748fb7d92f7a3a2a4a93353db96f6a2df547e5ea9ae87afa811c5423e96f363)
- https://api.github.com/repos/eric-ai-lab/Screen-Point-and-Read (retrieved 2026-10-17T14:14:01Z; SHA-256 868e18717ff76355c6552a5629b15de9fed1add1262fa5801ecabd7a7fb333d4)
- https://api.github.com/repos/UCSB-AI/Screen-Point-and-Read (retrieved 2026-10-17T14:14:02Z; SHA-256 868e18717ff76355c6552a5629b15de9fed1add1262fa5801ecabd7a7fb333d4)

---

## ScreenSpot

GUI grounding test set of 1,272 screenshot instructions from iOS, Android, macOS, Windows and web interfaces, each labeled with the target element's bounding box.

- Catalog URL: https://awesomecua.com/resources/url-7abb418096432f56c685/
- Original source: https://huggingface.co/datasets/rootsautomation/ScreenSpot
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding, evaluation
- Evidence checked: 2026-10-16T06:38:26Z
- ID: url:7abb418096432f56c685

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/url-7abb418096432f56c685/record.json

### Structured profile

- actions: predicted click point; a predicted box is reduced to its center
- evaluation: The SeeClick evaluator scores whether the predicted point falls inside the target box, with platform and text/icon breakdowns. The Hub packaging uses xyxy boxes, whereas the original evaluator reads xywh and converts it; adapt the loader to the chosen release.
- focus: single-step GUI element grounding
- observations: screenshot, English instruction
- setting: offline

#### Count observations

- 1,272 instruction–target examples — Hub test split at 0be08781; not unique screenshots (reported; source: https://huggingface.co/datasets/bevaya/ScreenSpot/raw/0be08781e2e188582f6131625ae1598d443b4d5d/README.md)

Offline, zero-shot evaluation across mobile, desktop, and web. The card explicitly excludes training use in its intended-use description. Public API reports ungated Parquet files and canonical Hub id bevaya/ScreenSpot; the catalog identity is preserved. Apache-2.0 is the Hub data declaration. No runtime or underlying screenshot rights audit was performed.

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/rootsautomation/ScreenSpot
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/rootsautomation/ScreenSpot (retrieved 2026-10-16T06:38:26Z; SHA-256 9e2d2a2c076032225911ae1032b548eafa6331ea81a2779632610f0f1c82dfd9)
- https://huggingface.co/datasets/bevaya/ScreenSpot/raw/0be08781e2e188582f6131625ae1598d443b4d5d/README.md (retrieved 2026-10-17T14:10:00Z; SHA-256 5ab2240c064502f75a6726311e10e7724ab7055347697f883b15a6ee8e7d00a6)
- https://raw.githubusercontent.com/njucckevin/SeeClick/HEAD/pretrain/screenspot_test.py (retrieved 2026-10-17T14:22:04Z; SHA-256 eb72113eefd4868114f8a8105eba2d3385da9034a5b3a4860661e03ae7dcae15)
- https://huggingface.co/api/datasets/rootsautomation/ScreenSpot (retrieved 2026-10-16T06:38:26Z; SHA-256 9e2d2a2c076032225911ae1032b548eafa6331ea81a2779632610f0f1c82dfd9)
- https://huggingface.co/api/datasets/bevaya/ScreenSpot (retrieved 2026-10-17T19:14:56Z; SHA-256 af0c4babeff84158ff196b54bf47242923bbf502d2805a1dd4eb52dba44be89c)
- https://huggingface.co/api/datasets/rootsautomation/ScreenSpot (retrieved 2026-10-17T19:14:56Z; SHA-256 af0c4babeff84158ff196b54bf47242923bbf502d2805a1dd4eb52dba44be89c)

---

## ScreenSpot Pro

GUI grounding benchmark focused on professional high-resolution interfaces.

- Catalog URL: https://awesomecua.com/resources/github-likaixin2000-screenspot-pro-gui-grounding/
- Original source: https://github.com/likaixin2000/ScreenSpot-Pro-GUI-Grounding
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: desktop, windows, macos, linux
- Topics: evaluation, grounding
- Evidence checked: 2026-10-16T06:35:58Z
- ID: github:likaixin2000/screenspot-pro-gui-grounding

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-likaixin2000-screenspot-pro-gui-grounding/record.json

### Structured profile

- actions: predicted target coordinates
- evaluation: For positive targets, the predicted point must fall inside the annotated bounding box.
- focus: GUI grounding
- observations: high-resolution screenshots, target instructions
- setting: offline

#### Count observations

- 1,581 target annotations — sum of icon/text counts in the published card table (computed) (computed; source: https://huggingface.co/datasets/likaixin/ScreenSpot-Pro/raw/main/README.md)

Language, instruction style, and positive/negative target configuration are explicit evaluator options. This profile describes target localization, not end-to-end workflow completion. The target count is computed from the card table, not from expanded language/style evaluation instances.

### License declarations

- code: MIT — https://raw.githubusercontent.com/likaixin2000/ScreenSpot-Pro-GUI-Grounding/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/likaixin2000/ScreenSpot-Pro-GUI-Grounding/HEAD/readme.md (retrieved 2026-10-16T06:35:58Z; SHA-256 7b64ccad9cfec24c2c9cb35f55923bff93d53729cef3cc7463c79b29bdb1de1a)
- https://raw.githubusercontent.com/likaixin2000/ScreenSpot-Pro-GUI-Grounding/HEAD/eval_screenspot_pro.py (retrieved 2026-10-16T11:38:05Z; SHA-256 a77c859775b33591b5619e8520c94702a53a1f9a29ada93e66744dbe23afe9dc)
- https://huggingface.co/datasets/likaixin/ScreenSpot-Pro/raw/main/README.md (retrieved 2026-10-16T11:35:55Z; SHA-256 76ae2231564fe84af029f8625c02d9cd7fb6cf85c5f8af1b2a2593e2107719d9)
- https://raw.githubusercontent.com/likaixin2000/ScreenSpot-Pro-GUI-Grounding/HEAD/LICENSE (retrieved 2026-10-16T06:41:57Z; SHA-256 c78681e624c748b7a9980b6a9fd1514cec5140c7b3c7f08fe21b36bc7468f2ce)

---

## ScreenSpot v2

Second version of the ScreenSpot grounding test set, published by OS-Copilot as separate desktop, mobile and web annotation files with a shared screenshot archive.

- Catalog URL: https://awesomecua.com/resources/url-bd7214de6d98917c2350/
- Original source: https://huggingface.co/datasets/OS-Copilot/ScreenSpot-v2
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding, evaluation
- Evidence checked: 2026-10-16T06:38:26Z
- ID: url:bd7214de6d98917c2350

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/url-bd7214de6d98917c2350/record.json

### Structured profile

- actions: click coordinates
- evaluation: The inspected Jedi evaluation adapter reads the v2 mobile/desktop/web annotation files, scores a point against the target box, and reports overall, platform, and text/icon accuracy. This is a named compatible evaluator implementation; the OS-Atlas dataset card itself supplies no evaluator specification.
- focus: single-step GUI grounding on the ScreenSpot-v2 release
- observations: screenshot, instruction
- setting: offline

#### Count observations

No count recorded.

The public Hub revision 5efbb1f1 contains three platform JSON annotation files and an image ZIP; its card only declares Apache-2.0. No sample total or equivalence to the original ScreenSpot test count is asserted. Keep v2 separate from v1 and retain evaluator/version and coordinate conversion when comparing results. Files were listed, not downloaded as data.

### License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/OS-Copilot/ScreenSpot-v2
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/OS-Copilot/ScreenSpot-v2 (retrieved 2026-10-16T06:38:26Z; SHA-256 7feddadc306e384f8df6a3d9c8afc0c776cb3734c4c7fe3eb842eab85537f408)
- https://osatlas.github.io/ (retrieved 2026-10-17T14:22:05Z; SHA-256 94547cb88756cf6a36bfb86d5fe9bdca1e40d7edb9e452c33cb462bbe760fed0)
- https://raw.githubusercontent.com/xlang-ai/OSWorld-G/HEAD/evaluation/qwen25_vllm_screenspot_v2_jedi.py (retrieved 2026-10-17T14:21:09Z; SHA-256 0e8772bc8fd5a25c50d3c2f6b0caee05ed2ab4659d46d99d60adf2b5ab29e997)
- https://raw.githubusercontent.com/xlang-ai/OSWorld-G/HEAD/evaluation/eval.py (retrieved 2026-10-17T14:21:09Z; SHA-256 b85f5685ce6c200ea648471666177859693d7f40cf50c12d08765ae68580de4a)
- https://huggingface.co/api/datasets/OS-Copilot/ScreenSpot-v2 (retrieved 2026-10-16T06:38:26Z; SHA-256 7feddadc306e384f8df6a3d9c8afc0c776cb3734c4c7fe3eb842eab85537f408)

---

## ScreenSpot-v2 instruction variants

Instruction variants over ScreenSpot-v2 screenshots that distinguish original commands, explicit actions, target descriptions and impossible operations.

- Catalog URL: https://awesomecua.com/resources/url-17729e1c532ba7043404/
- Original source: https://huggingface.co/datasets/likaixin/ScreenSpot-v2-variants
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding, evaluation, robustness
- Evidence checked: 2026-10-17T04:07:19Z
- ID: url:17729e1c532ba7043404

### Limitations

Public image files and desktop/mobile/web annotation JSON files are listed. This is a changed instruction set over an existing screenshot collection, not an independent new screenshot corpus. No data license or precise example count is declared in the card; no paper relationship is inferred from its generic project/PDF links.

- Record JSON: https://awesomecua.com/resources/url-17729e1c532ba7043404/record.json

### Structured profile

- actions: target localization, identification of impossible requests
- evaluation: Publisher supplies original, action, description and negative instruction types; no common end-to-end success metric is asserted.
- focus: instruction-form robustness, negative grounding requests
- observations: screenshots, instructions
- setting: offline

#### Count observations

- 4 instruction types — instruction-variant design (reported; source: https://huggingface.co/datasets/likaixin/ScreenSpot-v2-variants/raw/main/README.md)

Reuses ScreenSpot-v2 imagery. Image-file count is not treated as a count of independent screenshots or tasks.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/likaixin/ScreenSpot-v2-variants/raw/main/README.md (retrieved 2026-10-17T04:07:19Z; SHA-256 7fb2bc9499d8a2b37b663c116af49d11bba493e6767d76a5305fad93257bebf2)
- https://huggingface.co/api/datasets/likaixin/ScreenSpot-v2-variants (retrieved 2026-10-17T04:07:19Z; SHA-256 dea98efa75e063eee2d6bfb5d46da94b41df3d779e2fb0bdaea7866534b5c469)

---

## SPA-Bench

340 single-app and cross-app tasks over 66 Chinese and English Android apps, with plug-in support for 11 smartphone agents and automatic coarse-to-fine success detection.

- Catalog URL: https://awesomecua.com/resources/github-ai-agents-2030-spa-bench/
- Original source: https://github.com/ai-agents-2030/SPA-Bench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: android
- Topics: evaluation, mobile-navigation
- Evidence checked: 2026-10-16T06:35:58Z
- ID: github:ai-agents-2030/spa-bench

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-ai-agents-2030-spa-bench/record.json

### Structured profile

- actions: agent-specific Android actions
- evaluation: A multimodal evaluator and annotated key-component matching assess completion; the framework also reports resource-use metrics.
- focus: mobile task completion, resource use, cross-app workflows
- observations: screenshot trajectories
- setting: interactive

#### Count observations

- 340 tasks — complete README task collection (reported; source: https://raw.githubusercontent.com/ai-agents-2030/SPA-Bench/HEAD/README.md)
- 300 tasks — single-app subset (reported; source: https://raw.githubusercontent.com/ai-agents-2030/SPA-Bench/HEAD/README.md)
- 40 tasks — cross-app subset (reported; source: https://raw.githubusercontent.com/ai-agents-2030/SPA-Bench/HEAD/README.md)
- 66 applications — README total including third-party, Google, and system apps (reported; source: https://raw.githubusercontent.com/ai-agents-2030/SPA-Bench/HEAD/README.md)

The two task subsets partition the 340 tasks. The integrated agent and evaluator modes must accompany results. The preconfigured emulator snapshot is still marked coming soon in the inspected documentation.

### License declarations

- code: MIT — https://raw.githubusercontent.com/ai-agents-2030/SPA-Bench/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ai-agents-2030/SPA-Bench/HEAD/README.md (retrieved 2026-10-16T06:35:58Z; SHA-256 5294a67728072a3658cb2073bdf9a084fe3c00d87a848923dff68adb35213072)
- https://raw.githubusercontent.com/ai-agents-2030/SPA-Bench/HEAD/README.md (retrieved 2026-10-16T06:35:58Z; SHA-256 5294a67728072a3658cb2073bdf9a084fe3c00d87a848923dff68adb35213072)
- https://raw.githubusercontent.com/ai-agents-2030/SPA-Bench/HEAD/Documentation.md (retrieved 2026-10-17T02:03:23Z; SHA-256 a55290d62f8823097c73d74bac4eb08853a3caff724382e60a6a9364e7ced987)
- https://raw.githubusercontent.com/ai-agents-2030/SPA-Bench/HEAD/LICENSE (retrieved 2026-10-16T06:41:58Z; SHA-256 6962bfc8ee16c6e985e4fb680b8fe46d5b34d30f7cb8a1e61fd4c55c93120ddf)

---

## Spider2-V

Visual agent evaluation on data-science and engineering workflows.

- Catalog URL: https://awesomecua.com/resources/github-xlang-ai-spider2-v/
- Original source: https://github.com/xlang-ai/Spider2-V
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: evaluation, workflow
- Evidence checked: 2026-10-16T06:35:58Z
- ID: github:xlang-ai/spider2-v

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-xlang-ai-spider2-v/record.json

### Structured profile

- actions: PyAutoGUI mouse and keyboard actions
- evaluation: Task-specific evaluation functions are invoked after agent execution.
- focus: data-science workflows, multi-application task completion
- observations: screenshots, accessibility trees, set-of-marks views
- setting: interactive

#### Count observations

- 494 task definitions — evaluation_examples/test_all.json (computed) (computed; source: https://raw.githubusercontent.com/xlang-ai/Spider2-V/HEAD/evaluation_examples/test_all.json)
- 20 applications — README task-suite coverage (reported; source: https://raw.githubusercontent.com/xlang-ai/Spider2-V/HEAD/README.md)

Counted unique task IDs in the full manifest. Verbose versus abstract instructions and account versus non-account tasks form different subsets. The Ubuntu VM and external-account requirements are part of the protocol; no accounts or environments were provisioned.

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/xlang-ai/Spider2-V/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/xlang-ai/Spider2-V/HEAD/README.md (retrieved 2026-10-16T06:35:58Z; SHA-256 e3edf30ab45da16382b46d8c542607c1bbbfcf077b6df57a2decf938fc84ff0f)
- https://raw.githubusercontent.com/xlang-ai/Spider2-V/HEAD/README.md (retrieved 2026-10-16T06:35:58Z; SHA-256 e3edf30ab45da16382b46d8c542607c1bbbfcf077b6df57a2decf938fc84ff0f)
- https://raw.githubusercontent.com/xlang-ai/Spider2-V/HEAD/evaluation_examples/test_all.json (retrieved 2026-10-17T02:06:30Z; SHA-256 338dd38ba7047b0cf6dbc68f3f7b9374f962708fa2dadcc8d126c232dfc31746)
- https://raw.githubusercontent.com/xlang-ai/Spider2-V/HEAD/LICENSE (retrieved 2026-10-16T06:41:59Z; SHA-256 a8d1d88a0f9cce3cdbff73b03a80dc5e5d69e3ba2443946c268815a550c9e0ec)

---

## ST-WebAgentBench

BrowserGym-based benchmark for evaluating the safety and policy compliance of enterprise web agents across six trustworthiness risk dimensions.

- Catalog URL: https://awesomecua.com/resources/github-segev-shlomov-st-webagentbench/
- Original source: https://github.com/segev-shlomov/ST-WebAgentBench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: safety-security, evaluation, web-navigation
- Evidence checked: 2026-10-18T10:59:54Z
- ID: github:segev-shlomov/st-webagentbench

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-segev-shlomov-st-webagentbench/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/segev-shlomov/ST-WebAgentBench/HEAD/README.md (retrieved 2026-10-18T10:59:54Z; SHA-256 e712feb15886d5a2aba1051d419dc69dc6e58c9a86a9d2d566090bbbf67492fc)

---

## TheAgentCompany

Self-contained workplace environment for evaluating agents on professional tasks involving websites, files, code, and simulated coworkers.

- Catalog URL: https://awesomecua.com/resources/github-theagentcompany-theagentcompany/
- Original source: https://github.com/TheAgentCompany/TheAgentCompany
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: evaluation, workflow, cross-app
- Evidence checked: 2026-10-16T10:42:34Z
- ID: github:theagentcompany/theagentcompany

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-theagentcompany-theagentcompany/record.json

### Structured profile

- actions: web browsing, code execution, coworker communication
- evaluation: Task-specific evaluator scripts run within the prepared workplace environment.
- focus: professional workflows, multi-tool tasks
- observations: not recorded
- setting: interactive

#### Count observations

- 175 task images — workspace images documented by the README (reported; source: https://raw.githubusercontent.com/TheAgentCompany/TheAgentCompany/HEAD/README.md)

Each task is packaged as a Docker image. Record task-image and server versions; the environment includes simulated coworkers and external application state.

### License declarations

- code: MIT — https://raw.githubusercontent.com/TheAgentCompany/TheAgentCompany/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/TheAgentCompany/TheAgentCompany/HEAD/README.md (retrieved 2026-10-16T10:42:34Z; SHA-256 d1646f67d49d38ef1e81bf7b5057dfc3d6f172b4c8a7413a2cc78741ccb08723)
- https://raw.githubusercontent.com/TheAgentCompany/TheAgentCompany/HEAD/LICENSE (retrieved 2026-10-16T10:48:42Z; SHA-256 2d6976a9b482bb14d9cd4f0d97ce6e14305496f1649b8667cb91d027c670930f)

---

## VeriWeb (formerly VeriGUI)

Verifiable web information-seeking benchmark renamed from VeriGUI; desktop evaluation is described as future work.

- Catalog URL: https://awesomecua.com/resources/github-verigui-team-verigui/
- Original source: https://github.com/VeriGUI-Team/VeriGUI
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation
- Evidence checked: 2026-10-16T06:35:59Z
- ID: github:verigui-team/verigui

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-verigui-team-verigui/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/VeriGUI-Team/VeriGUI/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/VeriGUI-Team/VeriGUI/HEAD/README.md (retrieved 2026-10-16T06:35:59Z; SHA-256 e9a0866c8d9fa1759dedebd5ea3a4176009e51eb669f5877540524e53ac1077d)
- https://raw.githubusercontent.com/VeriGUI-Team/VeriGUI/HEAD/LICENSE (retrieved 2026-10-16T06:41:59Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## VideoGUI

Benchmark for desktop GUI tasks derived from instructional videos.

- Catalog URL: https://awesomecua.com/resources/github-showlab-videogui/
- Original source: https://github.com/showlab/videogui
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: desktop
- Topics: evaluation, video
- Evidence checked: 2026-10-16T06:35:58Z
- ID: github:showlab/videogui

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-showlab-videogui/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/showlab/videogui/HEAD/README.md (retrieved 2026-10-16T06:35:58Z; SHA-256 1a21631fb312cc7eac35547792611a84f13dcf756a3cf92209676ccdb92cbc6b)

---

## VisualAgentBench

Evaluation framework spanning visual GUI, embodied, and design tasks, including mobile and WebArena-based environments.

- Catalog URL: https://awesomecua.com/resources/github-thudm-visualagentbench/
- Original source: https://github.com/THUDM/VisualAgentBench
- Kind: benchmark
- Review: curated
- Scope: adjacent
- Environments: cross-platform, web, android
- Topics: evaluation
- Evidence checked: 2026-10-16T10:42:12Z
- ID: github:thudm/visualagentbench

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-thudm-visualagentbench/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/THUDM/VisualAgentBench/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/THUDM/VisualAgentBench/HEAD/README.md (retrieved 2026-10-16T10:42:12Z; SHA-256 21afbc4086441dee131fe4b84986870f9b280413dd2a38df6e99406f1fc45586)
- https://raw.githubusercontent.com/THUDM/VisualAgentBench/HEAD/LICENSE (retrieved 2026-10-16T10:48:41Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## VisualWebArena

Visually grounded web tasks extending the WebArena evaluation setting.

- Catalog URL: https://awesomecua.com/resources/github-web-arena-x-visualwebarena/
- Original source: https://github.com/web-arena-x/visualwebarena
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, screen-understanding
- Evidence checked: 2026-10-16T06:35:57Z
- ID: github:web-arena-x/visualwebarena

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-web-arena-x-visualwebarena/record.json

### Structured profile

- actions: browser element actions
- evaluation: Execution-based completion checks for visually grounded web tasks.
- focus: multimodal web task completion
- observations: screenshots with set-of-mark annotations, caption-augmented accessibility tree
- setting: interactive

#### Count observations

- 910 tasks — full VWA suite (reported; source: https://raw.githubusercontent.com/web-arena-x/visualwebarena/HEAD/README.md)
- 233 human trajectories — one task from each template type (reported; source: https://raw.githubusercontent.com/web-arena-x/visualwebarena/HEAD/README.md)

The 233 demonstration trajectories are not the full 910-task evaluation set. Observation modes and captioning components differ across baseline agents.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/web-arena-x/visualwebarena/HEAD/README.md (retrieved 2026-10-16T06:35:57Z; SHA-256 182529c2fce1e41f3a2162727205c54da8b3d2381b2273d726170ee9d8cf65cc)

---

## VisualWebBench

Evaluation of multimodal models on visual web understanding tasks.

- Catalog URL: https://awesomecua.com/resources/github-visualwebbench-visualwebbench/
- Original source: https://github.com/VisualWebBench/VisualWebBench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, screen-understanding
- Evidence checked: 2026-10-16T06:35:58Z
- ID: github:visualwebbench/visualwebbench

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-visualwebbench-visualwebbench/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/VisualWebBench/VisualWebBench/HEAD/README.md (retrieved 2026-10-16T06:35:58Z; SHA-256 262947081ddd17dbf5bb3d072574a19bbf30510c42c3ff42c9851a748fd37546)

---

## WeaveBench

Computer-use benchmark mixing graphical interaction and code execution.

- Catalog URL: https://awesomecua.com/resources/url-6a212bc12f82c824f6b9/
- Original source: https://huggingface.co/datasets/wanlilll/WeaveBench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: evaluation, tool-integration
- Evidence checked: 2026-10-16T06:38:27Z
- ID: url:6a212bc12f82c824f6b9

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/url-6a212bc12f82c824f6b9/record.json

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/wanlilll/WeaveBench
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/api/datasets/wanlilll/WeaveBench (retrieved 2026-10-16T06:38:27Z; SHA-256 e65e5793fe5b251ef7793a0618f4e8139fe5c92c2cf8093d0cc6142e8ece9d02)
- https://huggingface.co/api/datasets/wanlilll/WeaveBench (retrieved 2026-10-16T06:38:27Z; SHA-256 e65e5793fe5b251ef7793a0618f4e8139fe5c92c2cf8093d0cc6142e8ece9d02)

---

## Web Context Bench (Python)

Local-page benchmark comparing six browser representations on token use, factual reading and target-element selection, with deterministic answer scoring.

- Catalog URL: https://awesomecua.com/resources/github-charlypoly-web-context-bench-python/
- Original source: https://github.com/charlypoly/web-context-bench-python
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, grounding, efficiency, screen-understanding
- Evidence checked: 2026-10-20T11:51:30.874397Z
- ID: github:charlypoly/web-context-bench-python

### Limitations

This is a single-snapshot representation evaluation on local fixtures and captured pages, not a live multi-step agent benchmark. Its shared-prompt, one-model setup differs from complete Browser Use or Stagehand agents. The methodology notes unresolved redistribution licensing for third-party practice-site snapshots; MIT is recorded for repository code only.

- Record JSON: https://awesomecua.com/resources/github-charlypoly-web-context-bench-python/record.json

### Structured profile

- actions: READ text answer, ACT selector, text/label, accessible role/name, DOM index, Stagehand reference or screenshot point, according to the representation
- evaluation: READ uses normalized exact match against an answer or allowed alias. ACT resolves predicted identifiers to ground-truth elements, or checks screenshot points inside the target box. Representation-token accounting subtracts fixed-prompt tokens; screenshots use billed input usage minus the fixed prompt. These are answer/target correctness and token metrics, not completed-task success.
- focus: Browser-representation token use, Factual READ accuracy, ACT target-element selection
- observations: Top-document HTML, Markdown converted from HTML, Playwright accessibility snapshot, Browser Use indexed DOM, Stagehand hybrid snapshot, Viewport screenshot
- setting: offline

#### Count observations

No count recorded.

Fixed local-page observations; the reported run uses claude-sonnet-5 and a shared prompt, without scrolling or an agent loop. Browser Use disables its viewport cutoff and sends untruncated text; Stagehand uses a separate matched browser load. Short-string representability labels are approximate. Offline does not mean API-free. Third-party snapshot redistribution remains unresolved; results were not reproduced.

### License declarations

- code: MIT — https://raw.githubusercontent.com/charlypoly/web-context-bench-python/58d604bfaaac60ad42f02013f53f9fb301c1dcda/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: The inspected root LICENSE contains complete MIT terms for repository software. The methodology explicitly leaves redistribution permission for captured third-party practice-site pages unresolved; code MIT is not a blanket snapshot/data license.
  Sources: https://raw.githubusercontent.com/charlypoly/web-context-bench-python/58d604bfaaac60ad42f02013f53f9fb301c1dcda/LICENSE

### Primary evidence

- https://raw.githubusercontent.com/charlypoly/web-context-bench-python/58d604bfaaac60ad42f02013f53f9fb301c1dcda/README.md (retrieved 2026-10-20T11:51:30.874397Z; SHA-256 14775f6e3daba69d4684380fd33bf717bdc3093b65be796eb863bbd27d0c0bab)
- https://api.github.com/search/repositories?q=topic%3Aweb-agents+is%3Apublic+fork%3Afalse+created%3A2008-01-01..2026-10-20&per_page=100&page=1&sort=updated&order=asc (retrieved 2026-10-20T11:05:35.063004+00:00; SHA-256 3e22e1cbfa47bcf98f6f70a5f6f162a31a509a9f2091a84679bb5231977e29d9)
- https://github.com/charlypoly/web-context-bench-python (retrieved 2026-10-20T11:50:54.545491Z; SHA-256 fd30e94e78e7167a49579922259fde1c7d7f8259e9f00afba15faf3a71966a94)
- https://raw.githubusercontent.com/charlypoly/web-context-bench-python/58d604bfaaac60ad42f02013f53f9fb301c1dcda/METHODOLOGY.md (retrieved 2026-10-20T11:52:30.131541Z; SHA-256 1c3c0cbf9f9d9f7cd9e7a2f027ecb217fd5c16fa157916281a15bb7f403f6f1c)
- https://raw.githubusercontent.com/charlypoly/web-context-bench-python/58d604bfaaac60ad42f02013f53f9fb301c1dcda/src/wpbench/scoring.py (retrieved 2026-10-20T11:53:28.567861Z; SHA-256 8cada5d71b5a61e7aff2e1ac2b951c266eb2db7c082c06c5a13aa127d42b3fc5)
- https://raw.githubusercontent.com/charlypoly/web-context-bench-python/58d604bfaaac60ad42f02013f53f9fb301c1dcda/LICENSE (retrieved 2026-10-20T11:51:41.499735Z; SHA-256 9b64ef672f5091b6074d02502f6d3c161d94308a3d9d142d7437dcddf611bbc4)

---

## WebArena

Self-hosted web environments and tasks for evaluating autonomous web agents.

- Catalog URL: https://awesomecua.com/resources/github-web-arena-x-webarena/
- Original source: https://github.com/web-arena-x/webarena
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation
- Evidence checked: 2026-10-16T06:35:57Z
- ID: github:web-arena-x/webarena

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-web-arena-x-webarena/record.json

### Structured profile

- actions: browser element actions
- evaluation: Functional correctness of completed web tasks.
- focus: web task completion
- observations: HTML or accessibility tree
- setting: interactive

#### Count observations

- 812 task examples — canonical WebArena evaluation suite (reported; source: https://raw.githubusercontent.com/web-arena-x/webarena/HEAD/README.md)

The canonical repository documents self-hosted websites and environment resets. Its README recommends BrowserGym/AgentLab for newer infrastructure; harness changes must be recorded.

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/web-arena-x/webarena/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/web-arena-x/webarena/HEAD/README.md (retrieved 2026-10-16T06:35:57Z; SHA-256 081c826497f9b7da4952771ee128c2215ec3532379db0fe9f7fcbd899d9c9287)
- https://export.arxiv.org/api/query?id_list=1802.08802%2C1808.09132%2C2005.03776%2C2101.09465%2C2103.16057%2C2104.08560%2C2105.13231%2C2107.03374%2C2107.13731%2C2108.03353%2C2202.02312%2C2202.08137%2C2204.01691%2C2205.11029%2C2207.01206%2C2209.08199%2C2209.08655%2C2209.14927%2C2209.15099%2C2210.02663%2C2210.03629%2C2210.03945%2C2211.07615%2C2301.10165%2C2301.13280%2C2302.04761%2C2303.07280%2C2303.08774%2C2303.17491%2C2303.17580%2C2304.04370%2C2304.07061%2C2305.04091%2C2305.05662%2C2305.08144%2C2305.10601%2C2305.11854%2C2305.12487%2C2305.14257%2C2305.14325%2C2305.16504%2C2305.16653%2C2305.19308%2C2306.00245%2C2306.06070%2C2306.07863%2C2307.10088%2C2307.12856%2C2307.13854%2C2308.01990&max_results=50 (retrieved 2026-10-16T06:31:20Z; SHA-256 cbe8bfcbce4170a94a6cf42de01fbe0a448e7b1d29fa75a0de877105a98ec08e)
- https://raw.githubusercontent.com/web-arena-x/webarena/HEAD/LICENSE (retrieved 2026-10-16T06:41:57Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## WebCanvas

Framework and evaluation resources for real-world web agents.

- Catalog URL: https://awesomecua.com/resources/github-imeanai-webcanvas/
- Original source: https://github.com/iMeanAI/WebCanvas
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation
- Evidence checked: 2026-10-16T06:35:59Z
- ID: github:imeanai/webcanvas

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-imeanai-webcanvas/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/iMeanAI/WebCanvas/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/iMeanAI/WebCanvas/HEAD/README.md (retrieved 2026-10-16T06:35:59Z; SHA-256 5b2b4b4ce1241db7fd776f2ba0856ec2e0e441a56fa6461234abe0c6516f643e)
- https://raw.githubusercontent.com/iMeanAI/WebCanvas/HEAD/LICENSE (retrieved 2026-10-16T06:42:00Z; SHA-256 cbaab6bcbc9c3e28d0de902e12f92c2466103c775cb2a5af1e6d4110e82223a6)

---

## WebClick

A web-interface localization benchmark with screenshot instructions and target boxes, including agent browsing, human browsing and calendar cases.

- Catalog URL: https://awesomecua.com/resources/url-5e2bd1b3398974b79c9c/
- Original source: https://huggingface.co/datasets/Hcompany/WebClick
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: grounding, evaluation, web-navigation
- Evidence checked: 2026-10-17T04:01:33Z
- ID: url:5e2bd1b3398974b79c9c

### Limitations

Four public test Parquet shards are present. The dataset card declares Apache-2.0. This is an offline localization test, not an end-to-end web-task success benchmark; reported screenshots and samples are not summed as different populations.

- Record JSON: https://awesomecua.com/resources/url-5e2bd1b3398974b79c9c/record.json

### Structured profile

- actions: click target or bounding box
- evaluation: Assess localization against annotated targets; agentbrowse, humanbrowse and calendars are distinct source buckets.
- focus: instruction-conditioned web localization
- observations: web screenshots, instructions
- setting: offline

#### Count observations

- 1,639 examples — test split (reported; source: https://huggingface.co/datasets/Hcompany/WebClick/raw/main/README.md)

The card reports more than 100 websites but does not provide a precise website total. Grounding accuracy does not establish task completion.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/Hcompany/WebClick/raw/main/README.md (retrieved 2026-10-17T04:01:33Z; SHA-256 958bbf0eb9f61afd6c576673fbe6f7d84e6c4b8a9d4d8c4fc0e1224b5d8da30b)
- https://huggingface.co/api/datasets/Hcompany/WebClick (retrieved 2026-10-17T04:01:33Z; SHA-256 c9576957a3cb14785bf274691b50f90b04567a442ed60ee8c39f0f73108359f4)

---

## WebGames

150 client-side web challenges in five capability domains, built to be easy for humans but hard for browsing agents, each revealing a password when solved.

- Catalog URL: https://awesomecua.com/resources/github-convergence-ai-webgames/
- Original source: https://github.com/convergence-ai/webgames
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation
- Evidence checked: 2026-10-16T06:35:59Z
- ID: github:convergence-ai/webgames

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-convergence-ai-webgames/record.json

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/convergence-ai/webgames/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/convergence-ai/webgames/HEAD/README.md (retrieved 2026-10-16T06:35:59Z; SHA-256 a2df62f9b4359f7839c7d6c6917ff654f9eadeafa92f96311495b71e37abd9ba)
- https://raw.githubusercontent.com/convergence-ai/webgames/HEAD/LICENSE (retrieved 2026-10-16T06:42:00Z; SHA-256 0e03b68c7acb0b340e47f9000ac3808950e2ac8c4cd05960437a9e46e3c09a62)

---

## WebGuard

Codebase, annotation toolkit, and action-level risk dataset for training and evaluating guardrail models that flag unsafe browser-agent actions before execution.

- Catalog URL: https://awesomecua.com/resources/github-osu-nlp-group-webguard/
- Original source: https://github.com/OSU-NLP-Group/WebGuard
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: safety-security, evaluation, web-navigation
- Evidence checked: 2026-10-18T10:59:53Z
- ID: github:osu-nlp-group/webguard

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-osu-nlp-group-webguard/record.json

### License declarations

- code: MIT — https://raw.githubusercontent.com/OSU-NLP-Group/WebGuard/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/OSU-NLP-Group/WebGuard/HEAD/README.md (retrieved 2026-10-18T10:59:53Z; SHA-256 be53561dcf69cb2295a26eaebf965eead10b3504fca30f71f73dc5e5728fc5b3)
- https://raw.githubusercontent.com/OSU-NLP-Group/WebGuard/HEAD/LICENSE (retrieved 2026-10-18T11:03:46Z; SHA-256 93b43d692b033b76129504448695bfe76ef22d18b11e51352bfab4b5622e5aaa)

---

## WebLINX

Demonstrations and evaluation for conversational web navigation.

- Catalog URL: https://awesomecua.com/resources/github-mcgill-nlp-weblinx/
- Original source: https://github.com/mcgill-nlp/weblinx
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation
- Evidence checked: 2026-10-16T06:35:57Z
- ID: github:mcgill-nlp/weblinx

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-mcgill-nlp-weblinx/record.json

### Structured profile

- actions: predicted browser actions
- evaluation: Offline evaluation compares action predictions against recorded human demonstrations.
- focus: conversational web navigation, next-action prediction
- observations: dialogue history, HTML, screenshots, action history
- setting: offline

#### Count observations

- ≈ 100,000 interactions — original paper benchmark (reported; source: https://export.arxiv.org/api/query?id_list=2308.03688%2C2308.15272%2C2309.08172%2C2309.11436%2C2310.04716%2C2310.04869%2C2310.05126%2C2310.06770%2C2310.08740%2C2310.10634%2C2310.11441%2C2310.16042%2C2310.18331%2C2311.01767%2C2311.07562%2C2311.09278%2C2311.12983%2C2311.18751%2C2312.03003%2C2312.06677%2C2312.08914%2C2312.11671%2C2312.13108%2C2312.13771%2C2312.15820%2C2312.16062%2C2401.01614%2C2401.04124%2C2401.07781%2C2401.10935%2C2401.13178%2C2401.13649%2C2401.13919%2C2401.14268%2C2401.16158%2C2402.01030%2C2402.04476%2C2402.04615%2C2402.05930%2C2402.06596%2C2402.07456%2C2402.07939%2C2402.07945%2C2402.08567%2C2402.11941%2C2402.14073%2C2402.15057%2C2402.16965%2C2402.17553%2C2403.02713&max_results=50)
- ≈ 2,300 expert demonstrations — original paper benchmark (reported; source: https://export.arxiv.org/api/query?id_list=2308.03688%2C2308.15272%2C2309.08172%2C2309.11436%2C2310.04716%2C2310.04869%2C2310.05126%2C2310.06770%2C2310.08740%2C2310.10634%2C2310.11441%2C2310.16042%2C2310.18331%2C2311.01767%2C2311.07562%2C2311.09278%2C2311.12983%2C2311.18751%2C2312.03003%2C2312.06677%2C2312.08914%2C2312.11671%2C2312.13108%2C2312.13771%2C2312.15820%2C2312.16062%2C2401.01614%2C2401.04124%2C2401.07781%2C2401.10935%2C2401.13178%2C2401.13649%2C2401.13919%2C2401.14268%2C2401.16158%2C2402.01030%2C2402.04476%2C2402.04615%2C2402.05930%2C2402.06596%2C2402.07456%2C2402.07939%2C2402.07945%2C2402.08567%2C2402.11941%2C2402.14073%2C2402.15057%2C2402.16965%2C2402.17553%2C2403.02713&max_results=50)
- > 150 websites — original paper benchmark (reported; source: https://export.arxiv.org/api/query?id_list=2308.03688%2C2308.15272%2C2309.08172%2C2309.11436%2C2310.04716%2C2310.04869%2C2310.05126%2C2310.06770%2C2310.08740%2C2310.10634%2C2310.11441%2C2310.16042%2C2310.18331%2C2311.01767%2C2311.07562%2C2311.09278%2C2311.12983%2C2311.18751%2C2312.03003%2C2312.06677%2C2312.08914%2C2312.11671%2C2312.13108%2C2312.13771%2C2312.15820%2C2312.16062%2C2401.01614%2C2401.04124%2C2401.07781%2C2401.10935%2C2401.13178%2C2401.13649%2C2401.13919%2C2401.14268%2C2401.16158%2C2402.01030%2C2402.04476%2C2402.04615%2C2402.05930%2C2402.06596%2C2402.07456%2C2402.07939%2C2402.07945%2C2402.08567%2C2402.11941%2C2402.14073%2C2402.15057%2C2402.16965%2C2402.17553%2C2403.02713&max_results=50)

The figures are rounded descriptions from the original paper. WebLINX 1.1 / BrowserGym removes some demonstrations and changes evaluated steps, including tab actions; do not mix those results or counts with the original release. This profile does not treat replayed demonstration steps as live task completion.

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/mcgill-nlp/weblinx/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/mcgill-nlp/weblinx/HEAD/README.md (retrieved 2026-10-16T06:35:57Z; SHA-256 15c3f1656afd861894b180bca7d9214b4cf78a6ad9cd0601c80f5d67d2839528)
- https://raw.githubusercontent.com/mcgill-nlp/weblinx/HEAD/README.md (retrieved 2026-10-16T06:35:57Z; SHA-256 15c3f1656afd861894b180bca7d9214b4cf78a6ad9cd0601c80f5d67d2839528)
- https://export.arxiv.org/api/query?id_list=2308.03688%2C2308.15272%2C2309.08172%2C2309.11436%2C2310.04716%2C2310.04869%2C2310.05126%2C2310.06770%2C2310.08740%2C2310.10634%2C2310.11441%2C2310.16042%2C2310.18331%2C2311.01767%2C2311.07562%2C2311.09278%2C2311.12983%2C2311.18751%2C2312.03003%2C2312.06677%2C2312.08914%2C2312.11671%2C2312.13108%2C2312.13771%2C2312.15820%2C2312.16062%2C2401.01614%2C2401.04124%2C2401.07781%2C2401.10935%2C2401.13178%2C2401.13649%2C2401.13919%2C2401.14268%2C2401.16158%2C2402.01030%2C2402.04476%2C2402.04615%2C2402.05930%2C2402.06596%2C2402.07456%2C2402.07939%2C2402.07945%2C2402.08567%2C2402.11941%2C2402.14073%2C2402.15057%2C2402.16965%2C2402.17553%2C2403.02713&max_results=50 (retrieved 2026-10-16T06:31:24Z; SHA-256 3aac6e9748769efff3c475ede0da192776daa03431d231b5f67e2aa50f8a3be9)
- https://huggingface.co/datasets/McGill-NLP/WebLINX/raw/main/README.md (retrieved 2026-10-17T02:03:23Z; SHA-256 9bd7512e257f5914d66b091530d7eb711a6f90bc21dc89cbba53015c7136c527)
- https://raw.githubusercontent.com/mcgill-nlp/weblinx/HEAD/LICENSE (retrieved 2026-10-16T06:41:57Z; SHA-256 cc0156153933fb96f6f3bf8d736c15e24d78d0838945c2ed456e3ada96cf67c4)

---

## WebRewardBench

An offline preference-evaluation set for web process reward models, pairing page and trajectory context with preferred and rejected candidate decisions.

- Catalog URL: https://awesomecua.com/resources/url-ac6d0f80765f5a32255a/
- Original source: https://huggingface.co/datasets/LangAGI-Lab/WebRewardBench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, reward-models, evaluation
- Evidence checked: 2026-10-17T02:44:50Z
- ID: url:ac6d0f80765f5a32255a

### Limitations

Two public Parquet shards are present. Card metadata reports 776 test rows, whereas the project describes 1,000-plus test cases without reconciling that count to rows. Both observations are retained as a grain/coverage caveat rather than treating either as a confirmed number of independent tasks. No data license is declared.

- Record JSON: https://awesomecua.com/resources/url-ac6d0f80765f5a32255a/record.json

### Structured profile

- actions: candidate-decision preference
- evaluation: Compare reward-model preferences with the provided chosen/rejected decision labels; no independent score was reproduced.
- focus: web process-reward evaluation
- observations: page screenshots, text observations, action history, task checklists
- setting: offline

#### Count observations

- 776 rows — Hub test split (reported; source: https://huggingface.co/datasets/LangAGI-Lab/WebRewardBench/raw/main/README.md)

The current Hub row count and project case-count claim use unresolved counting units. Candidate lists mean a row must not be assumed to equal one task or one pair.

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://huggingface.co/datasets/LangAGI-Lab/WebRewardBench/raw/main/README.md (retrieved 2026-10-17T02:44:50Z; SHA-256 0968f60eea10b95f79cd16ad3746b0e0b1acaeb0e97c45856f709d53a14dd73a)
- https://huggingface.co/api/datasets/LangAGI-Lab/WebRewardBench (retrieved 2026-10-17T02:44:50Z; SHA-256 db06c66b8cf5687008b0ad0d9ae269fcc27936887d238cfe2bdeb52151e1683e)
- https://raw.githubusercontent.com/kyle8581/Web-Shepherd/HEAD/README.md (retrieved 2026-10-17T02:44:04Z; SHA-256 07431058d8b9a71b80e75b7a74a40a8346c1503eec240628459cc4d4e2f0802f)

---

## WebShop

Simulated shopping environment for instruction-following web agents.

- Catalog URL: https://awesomecua.com/resources/github-princeton-nlp-webshop/
- Original source: https://github.com/princeton-nlp/WebShop
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation
- Evidence checked: 2026-10-16T06:35:57Z
- ID: github:princeton-nlp/webshop

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-princeton-nlp-webshop/record.json

### Structured profile

- actions: search queries, click actions, product option selection
- evaluation: not recorded
- focus: instruction-conditioned product selection, web navigation
- observations: HTML pages, simplified text views
- setting: interactive

#### Count observations

- 12,087 instructions — crowd-sourced instruction collection (reported; source: https://raw.githubusercontent.com/princeton-nlp/WebShop/HEAD/README.md)
- ≈ 1,180,000 products — full product inventory (reported; source: https://raw.githubusercontent.com/princeton-nlp/WebShop/HEAD/README.md)

This is a simulated shop. The default preview loads 1,000 products, while the full inventory is much larger; report the loaded subset and observation mode. Instructions and products are different populations. Detailed reward semantics are not normalized in this profile.

### License declarations

- code: MIT — https://raw.githubusercontent.com/princeton-nlp/WebShop/HEAD/LICENSE.md
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/princeton-nlp/WebShop/HEAD/README.md (retrieved 2026-10-16T06:35:57Z; SHA-256 79b7a90a1413a52deb53142b5bbd81ecf40f61743bd4601c2835e91375898ec0)
- https://raw.githubusercontent.com/princeton-nlp/WebShop/HEAD/README.md (retrieved 2026-10-16T06:35:57Z; SHA-256 79b7a90a1413a52deb53142b5bbd81ecf40f61743bd4601c2835e91375898ec0)
- https://raw.githubusercontent.com/princeton-nlp/WebShop/HEAD/LICENSE.md (retrieved 2026-10-16T06:41:58Z; SHA-256 8872dbf8660b00890b5e07ce1ea1f7a44fa7ae4e1857da56caba172b51dab3cb)

---

## WebsiteBench

Website reconstruction benchmark: agents explore a production-level site through a browser, rebuild a full-stack version, and are scored by hidden functional and visual test cases across 70 tasks.

- Catalog URL: https://awesomecua.com/resources/github-tiger-ai-lab-websitebench/
- Original source: https://github.com/TIGER-AI-Lab/WebsiteBench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation, long-horizon, ui-design
- Evidence checked: 2026-11-06T06:21:48Z
- ID: github:tiger-ai-lab/websitebench

### Limitations

Read at commit 78f5558e. The README and docs/tasks.md were reviewed; the 70 tasks and 46,916 hidden cases were checked by summing the docs/tasks.md table. The README's paper badge has no link, so no paper relation is recorded. Apache-2.0 is the README's statement for benchmark code, task definitions and verifier. Leaderboard scores were not checked. Nothing was installed or run.

- Record JSON: https://awesomecua.com/resources/github-tiger-ai-lab-websitebench/record.json

### Structured profile

- actions: harness-defined browser actions through the task's local browser service
- evaluation: Hidden test cases per task. A case passes when its functional checks pass and every visual checkpoint's flat-baseline-normalized RGB SSIM reaches 0.99. A task's reward is passed cases divided by cases, weighted equally.
- focus: full-stack website reconstruction from browser exploration, without the source code, visual appearance and functional behavior of the rebuilt site
- observations: not recorded
- setting: interactive

#### Count observations

- 70 tasks — released tasks (reported; source: https://raw.githubusercontent.com/TIGER-AI-Lab/WebsiteBench/78f5558e8197bb91b3bab63428c12b92060ddc6f/docs/tasks.md)
- 46,916 test cases — hidden test cases summed over the docs/tasks.md table (computed) (computed; source: https://raw.githubusercontent.com/TIGER-AI-Lab/WebsiteBench/78f5558e8197bb91b3bab63428c12b92060ddc6f/docs/tasks.md)

Agents run through selectable Harbor agents, so observations and actions depend on the agent. Each task requests 8 CPUs, 8 GiB of memory and 20 GiB of disk per environment, with up to 16 hours for the agent.

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/TIGER-AI-Lab/WebsiteBench/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/TIGER-AI-Lab/WebsiteBench/78f5558e8197bb91b3bab63428c12b92060ddc6f/README.md (retrieved 2026-11-06T06:21:48Z; SHA-256 c79cb821975c34552a46f01349edd0869c2f20c9a85d4b7811155d3fb7f7f0b2)
- https://raw.githubusercontent.com/TIGER-AI-Lab/WebsiteBench/78f5558e8197bb91b3bab63428c12b92060ddc6f/docs/tasks.md (retrieved 2026-11-06T06:21:44Z; SHA-256 d98bd00fb45abc63df0fddd6d9f9f5e669396cd53c157e5e06d6de9d103adf09)
- https://raw.githubusercontent.com/TIGER-AI-Lab/WebsiteBench/HEAD/LICENSE (retrieved 2026-11-06T06:22:02Z; SHA-256 cda5b289b68650d0643c0ded2d43dc797cb7777c4d943f2b03067250de6d3c26)

---

## WebTailBench

Live-web task definitions and rubrics for evaluating computer-use agents, with preserved original tasks, a refreshed V2 task suite and a separate refusal set.

- Catalog URL: https://awesomecua.com/resources/url-3b6dfd52f98bfe76bc7f/
- Original source: https://huggingface.co/datasets/microsoft/WebTailBench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation, safety-security
- Evidence checked: 2026-10-17T02:42:32Z
- ID: url:3b6dfd52f98bfe76bc7f

### Limitations

Public TSV files contain V1, V2 and refusal task definitions. The card declares MIT for the dataset. V1 and V2 share the same 609 task identities and must not be summed as distinct tasks. The May 2026 refresh supersedes calendar-bound task wording; live-site availability is not established by this metadata review.

- Record JSON: https://awesomecua.com/resources/url-3b6dfd52f98bfe76bc7f/record.json

### Structured profile

- actions: browser interaction
- evaluation: Task-specific precomputed rubrics; refusal tasks are a separate evaluation population.
- focus: live web task completion, unsafe-request refusal
- observations: web pages
- setting: interactive

#### Count observations

- 609 task identities — main V1/V2 suite (shared identities) (reported; source: https://huggingface.co/datasets/microsoft/WebTailBench/raw/main/README.md)
- 111 tasks — refusal suite (reported; source: https://huggingface.co/datasets/microsoft/WebTailBench/raw/main/README.md)

V2 refreshes task strings and rubrics while preserving V1 task IDs. Counts are task definitions, not independently verified runnable website states.

### License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/microsoft/WebTailBench/raw/main/README.md
- document: not recorded
- weights: not recorded

- data review: The benchmark's Hub dataset card declares MIT in its metadata header (license: mit).
  Sources: https://huggingface.co/datasets/microsoft/WebTailBench/raw/main/README.md

### Primary evidence

- https://huggingface.co/datasets/microsoft/WebTailBench/raw/main/README.md (retrieved 2026-10-17T02:42:32Z; SHA-256 c4cfc361d1d47d7855269af4110483363964e23f9c65244a1182830eccccbb7f)
- https://huggingface.co/api/datasets/microsoft/WebTailBench (retrieved 2026-10-17T02:42:32Z; SHA-256 93469a20d333219dde89a225891a54ee716120d559eb8ac9f69a1a7ee84f57a3)

---

## WebTestBench

An end-to-end web-testing benchmark where agents derive test checklists from development instructions, interact with deployed applications and report functional or constraint-related defects.

- Catalog URL: https://awesomecua.com/resources/github-friedrichor-webtestbench/
- Original source: https://github.com/friedrichor/WebTestBench
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation, tool-integration
- Evidence checked: 2026-10-17T11:18:18Z
- ID: github:friedrichor/webtestbench

### Limitations

Public evaluation/deployment scripts accompany an ungated Hub release with JSON/JSONL metadata and 100 application ZIP files. The ZIP count is an artifact inventory, not an asserted test-case or defect count. The documented baseline uses Claude Agent SDK and a pinned Playwright MCP version with external model credentials; these were not installed or run. Code and data Apache-2.0 declarations are retained separately.

- Record JSON: https://awesomecua.com/resources/github-friedrichor-webtestbench/record.json

### Structured profile

- actions: browser interaction, test checklist generation, defect reports
- evaluation: The supplied WebTester pipeline separates checklist generation from interactive defect detection and provides a scoring workflow.
- focus: web functionality testing, latent permission and business constraints
- observations: web application interface, development instruction
- setting: interactive

#### Count observations

- 7 application categories — publisher benchmark overview (reported; source: https://raw.githubusercontent.com/friedrichor/WebTestBench/HEAD/README.md)
- 100 web-application archives — Hub file manifest (computed) (computed; source: https://huggingface.co/api/datasets/friedrichor/WebTestBench)

The 100 archive files are not counted as 100 independent test tasks or defects. Backend/tool versions and deployment settings affect reproducibility.

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/friedrichor/WebTestBench/HEAD/LICENSE
- data: apache-2.0 — https://huggingface.co/datasets/friedrichor/WebTestBench/raw/main/README.md
- document: not recorded
- weights: not recorded

- code review: Repository source LICENSE; external tools and services retain their own licenses.
  Sources: https://raw.githubusercontent.com/friedrichor/WebTestBench/HEAD/LICENSE

- data review: Publisher Hub-card license declaration for the released benchmark dataset.
  Sources: https://huggingface.co/datasets/friedrichor/WebTestBench/raw/main/README.md

### Primary evidence

- https://raw.githubusercontent.com/friedrichor/WebTestBench/HEAD/README.md (retrieved 2026-10-17T11:18:18Z; SHA-256 b41472026cd7d4f81a01d58bf39193dc1fabc7875c61e370090a20cc77500cdd)
- https://api.github.com/repos/friedrichor/WebTestBench (retrieved 2026-10-17T11:18:18Z; SHA-256 7203ecc2aae5f1697eeeb804ca8f21d47b9f22a8b8fa43a4064c4e1c49f5e72c)
- https://api.github.com/repos/friedrichor/WebTestBench/git/trees/main?recursive=1 (retrieved 2026-10-17T11:22:55Z; SHA-256 bd1f09149b00d59a0078d414216bd2fb78e09ce7212d15bbda84ddec7052c8af)
- https://huggingface.co/api/datasets/friedrichor/WebTestBench (retrieved 2026-10-17T11:23:08Z; SHA-256 db1e97f40107038ae03835dc20f17b13b37e74b5c8587f8c39b441271618f017)
- https://huggingface.co/datasets/friedrichor/WebTestBench/raw/main/README.md (retrieved 2026-10-17T11:23:08Z; SHA-256 6f2f94a25ed66a14779f6b4e6686044d0510eb32a0187645cc473978d93f7c5b)
- https://raw.githubusercontent.com/friedrichor/WebTestBench/HEAD/LICENSE (retrieved 2026-10-17T11:22:55Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)

---

## WebVoyager

Multimodal web navigation agent and evaluation tasks on real websites.

- Catalog URL: https://awesomecua.com/resources/github-minorjerry-webvoyager/
- Original source: https://github.com/MinorJerry/WebVoyager
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation
- Evidence checked: 2026-10-16T06:35:57Z
- ID: github:minorjerry/webvoyager

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-minorjerry-webvoyager/record.json

### Structured profile

- actions: Selenium-backed browser interactions
- evaluation: The repository supplies an automated multimodal-model evaluation protocol.
- focus: live-web task completion
- observations: webpage screenshots, textual task instructions
- setting: interactive

#### Count observations

- 643 task queries — WebVoyager task collection (reported; source: https://raw.githubusercontent.com/MinorJerry/WebVoyager/HEAD/README.md)
- 15 websites — WebVoyager task collection (reported; source: https://raw.githubusercontent.com/MinorJerry/WebVoyager/HEAD/README.md)
- 90 tasks — separate GAIA validation-derived web subset (reported; source: https://raw.githubusercontent.com/MinorJerry/WebVoyager/HEAD/README.md)

The GAIA-derived subset is separate from the 643 WebVoyager queries. Live sites and time-sensitive travel tasks can change; record the task snapshot and evaluation date.

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/MinorJerry/WebVoyager/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/MinorJerry/WebVoyager/HEAD/README.md (retrieved 2026-10-16T06:35:57Z; SHA-256 b5523941b2773634fdcf359b5b89bf0aca589f33ad9db30692c8b1912ed5dda5)
- https://raw.githubusercontent.com/MinorJerry/WebVoyager/HEAD/LICENSE (retrieved 2026-10-16T06:41:57Z; SHA-256 43070e2d4e532684de521b885f385d0841030efa2b1a20bafb76133a5e1379c1)

---

## Windows Agent Arena

Windows 11 benchmark for multimodal desktop agents in a reproducible VM that runs locally or in parallel on Azure ML, with a harder mode where agents must set tasks up themselves.

- Catalog URL: https://awesomecua.com/resources/github-microsoft-windowsagentarena/
- Original source: https://github.com/microsoft/WindowsAgentArena
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: windows, desktop
- Topics: evaluation
- Evidence checked: 2026-10-16T06:35:57Z
- ID: github:microsoft/windowsagentarena

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-microsoft-windowsagentarena/record.json

### Structured profile

- actions: agent-defined Windows interactions
- evaluation: Task configuration selects an evaluator and expected application or system outcome; evaluators return a reward for the resulting state.
- focus: Windows task completion, desktop workflows
- observations: screenshots, accessibility information, screen-element detections
- setting: interactive

#### Count observations

- 154 task definitions — evaluation_examples_windows/test_all.json (computed) (computed; source: https://raw.githubusercontent.com/microsoft/WindowsAgentArena/HEAD/src/win-arena-container/client/evaluation_examples_windows/test_all.json)

Counted unique identifiers in the inspected manifest. Normal and hard modes differ in how much task setup the agent must perform. Record the difficulty and observation/backend configuration with each result; no VM was launched.

### License declarations

- code: MIT — https://raw.githubusercontent.com/microsoft/WindowsAgentArena/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/microsoft/WindowsAgentArena/HEAD/README.md (retrieved 2026-10-16T06:35:57Z; SHA-256 e481abd422a4cc8b819ad84b32684e4af641e18a7c0d277dd608cfd5d3c5e6ad)
- https://raw.githubusercontent.com/microsoft/WindowsAgentArena/HEAD/README.md (retrieved 2026-10-16T06:35:57Z; SHA-256 e481abd422a4cc8b819ad84b32684e4af641e18a7c0d277dd608cfd5d3c5e6ad)
- https://raw.githubusercontent.com/microsoft/WindowsAgentArena/HEAD/docs/Develop-Tasks.md (retrieved 2026-10-17T02:06:30Z; SHA-256 c565dc02ab0049bf9710b87e2760dda8d7c92268ea78f0354952695ab59c0de3)
- https://raw.githubusercontent.com/microsoft/WindowsAgentArena/HEAD/src/win-arena-container/client/evaluation_examples_windows/test_all.json (retrieved 2026-10-17T02:06:30Z; SHA-256 902fb24cf0a9e146bf6c29288e74a7254fe40294e49dd47363e0b15d65608fef)
- https://raw.githubusercontent.com/microsoft/WindowsAgentArena/HEAD/LICENSE (retrieved 2026-10-16T06:41:57Z; SHA-256 9906940f61b1f0b533fa7d99baf55178b2808fbe113ea51dfbfad8572ccd5f2b)

---

## WindowsAgentArena-V2

Windows benchmark revision with task/evaluator fixes and VM-initialization support, documented alongside PC-Agent-E.

- Catalog URL: https://awesomecua.com/resources/github-gair-nlp-windowsagentarena-v2/
- Original source: https://github.com/GAIR-NLP/WindowsAgentArena-V2
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: desktop, windows
- Topics: evaluation, cross-app, robustness
- Evidence checked: 2026-10-18T04:35:17Z
- ID: github:gair-nlp/windowsagentarena-v2

### Limitations

Repository contains executable evaluation code and task definitions. README links a separate Windows 11 VM snapshot; that image and its software licenses/access were not validated by downloading it. MIT is recorded for repository code only. Default task selection and the reported full suite have different scopes.

- Record JSON: https://awesomecua.com/resources/github-gair-nlp-windowsagentarena-v2/record.json

### Structured profile

- actions: PyAutoGUI
- evaluation: Runner exposes four observation choices and uses PyAutoGUI. count.py sums the last score in each results.json and divides by the number of traj.jsonl files, multiplying by 100; it separately reports result/trajectory/error-file coverage. This denominator is not automatically the full benchmark size.
- focus: Windows desktop task execution, revised task evaluators
- observations: screenshot, accessibility tree, screenshot plus accessibility tree, set-of-marks
- setting: interactive

#### Count observations

- 141 tasks — full WindowsAgentArena-V2 suite reported by README (reported; source: https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/README.md)
- 11 Windows applications — full suite coverage reported by README (reported; source: https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/README.md)
- 20 task IDs — shipped test_custom.json selection (computed) (computed; source: https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/src/win-arena-container/client/evaluation_examples_windows/test_custom.json)

README sample config uses max_steps=30. The shipped selected-task index has 20 IDs, not 141; preserve the selected task list, trial ID, score coverage and VM snapshot when comparing runs. Docker/Windows-11 setup is required. No VM or benchmark was executed.

### License declarations

- code: MIT — https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: Reviewed repository license declaration for code; third-party dependencies, data, weights and executable environment images are separate.
  Sources: https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/LICENSE

### Primary evidence

- https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/README.md (retrieved 2026-10-18T04:35:17Z; SHA-256 1dd744ce565ec00b20ea5637eb7bc6112e97fb9044bd9a471f7cc4b7227ca344)
- https://api.github.com/repos/GAIR-NLP/WindowsAgentArena-V2 (retrieved 2026-10-18T04:33:20Z; SHA-256 0b0af02d3c2c4916dd786b868b99d60b4681927d0273a23661eb2b6db7cf9404)
- https://api.github.com/repos/GAIR-NLP/WindowsAgentArena-V2/git/trees/main?recursive=1 (retrieved 2026-10-18T04:35:16Z; SHA-256 638ef9ee593a3a560c1d0b3fb2bc4a9d31a3e904c0111971924a6d66e1763aa6)
- https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/src/win-arena-container/client/run.py (retrieved 2026-10-18T04:40:39Z; SHA-256 494de9e74629ac2c55358629c0d9ba13703f36317057a3089388fbb6e80ca28f)
- https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/src/win-arena-container/client/evaluation_examples_windows/test_custom.json (retrieved 2026-10-18T04:40:39Z; SHA-256 e45ba7fdc7555f46ad1b4cfaab79d00754909d053fc49d5bab651b0fb593439b)
- https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/count.py (retrieved 2026-10-18T04:40:39Z; SHA-256 f12147ac78c39c72eb75f9c37b293ba7fff3209fc5758fd51c69abbd96d80a97)
- https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/LICENSE (retrieved 2026-10-18T04:35:20Z; SHA-256 2a2d1e46940b570d60f5e2198ed27fcec6316fc8489e9660da8777dbd75aaeec)

---

## WindowsWorld

Cross-application Windows benchmark with intermediate task evaluation.

- Catalog URL: https://awesomecua.com/resources/github-hitsz-tmg-windowsworld/
- Original source: https://github.com/HITsz-TMG/WindowsWorld
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: desktop, windows
- Topics: evaluation, cross-app
- Evidence checked: 2026-10-16T06:35:59Z
- ID: github:hitsz-tmg/windowsworld

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-hitsz-tmg-windowsworld/record.json

### Structured profile

- actions: PyAutoGUI, UiPath Computer_13 action interface
- evaluation: Publisher distinguishes S_int (intermediate checkpoint score on L1–L3) and S_final (final completion on L1–L4). Documented step budgets are 15/25/40/20 for L1/L2/L3/L4. Preserve level, observation mode, agent interface and checkpoint/final metric when reporting a run.
- focus: multi-application Windows workflows, intermediate-state and final-goal completion
- observations: screenshot, accessibility tree, screenshot plus accessibility tree, set-of-marks
- setting: interactive

#### Count observations

- 181 tasks — WindowsWorld benchmark described in the retained README (reported; source: https://raw.githubusercontent.com/HITsz-TMG/WindowsWorld/HEAD/README.md)
- 17 desktop applications — WindowsWorld coverage described in the retained README (reported; source: https://raw.githubusercontent.com/HITsz-TMG/WindowsWorld/HEAD/README.md)

Interactive VMware/Windows environment. The public repository includes benchmark.json, task/evaluator code and monitoring support; the README refers VM import to Installation Guide.md, whose distribution links and payloads were not inspected for this profile. Checkpoint counts and application counts are not extra tasks. Apache-2.0 is recorded for repository code; Windows, apps and VM artifacts retain separate terms.

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/HITsz-TMG/WindowsWorld/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/HITsz-TMG/WindowsWorld/HEAD/README.md (retrieved 2026-10-16T06:35:59Z; SHA-256 9857bd8ae9f521f152761ae3bd85debe4e7471aad34c9eb47618332948bca6c9)
- https://api.github.com/repos/HITsz-TMG/WindowsWorld/git/trees/main?recursive=1 (retrieved 2026-10-17T14:14:05Z; SHA-256 490c9257d56f0a5214e6424e02490379b0b00ca2f7d4626fd5d14e17239d05ed)
- https://raw.githubusercontent.com/HITsz-TMG/WindowsWorld/HEAD/LICENSE (retrieved 2026-10-16T06:41:59Z; SHA-256 a8d1d88a0f9cce3cdbff73b03a80dc5e5d69e3ba2443946c268815a550c9e0ec)

---

## WONDERBREAD

An offline benchmark of workflow documentation, quality assessment and knowledge transfer using human web-navigation demonstrations, action traces and written procedures.

- Catalog URL: https://awesomecua.com/resources/github-hazyresearch-wonderbread/
- Original source: https://github.com/HazyResearch/wonderbread
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, workflow, video, screen-understanding
- Evidence checked: 2026-10-17T09:12:11Z
- ID: github:hazyresearch/wonderbread

### Limitations

The repository contains evaluation and collection code; the linked Zenodo release exposes the full, gold and debug demonstration archives and metadata. This measures workflow understanding rather than interactive agent task completion. Zenodo declares CC-BY-4.0 for that dataset; no repository-level code license was found. Archives and human demonstration records were not downloaded.

- Record JSON: https://awesomecua.com/resources/github-hazyresearch-wonderbread/record.json

### Structured profile

- actions: generate procedures, segment demonstrations, answer workflow questions, validate and rank procedures
- evaluation: Task-specific scripts evaluate six workflow-understanding task types; model outputs are not treated as successful interactive execution.
- focus: workflow documentation, workflow quality assessment, workflow knowledge transfer
- observations: screen recordings, action traces, screenshots, written standard operating procedures
- setting: offline

#### Count observations

- 6 task types — WONDERBREAD BPM benchmark (reported; source: https://raw.githubusercontent.com/HazyResearch/wonderbread/HEAD/README.md)
- 2,928 human demonstrations — full dataset release 14094162 (reported; source: https://zenodo.org/api/records/14094162)
- 598 web navigation workflows — full dataset release 14094162 (reported; source: https://zenodo.org/api/records/14094162)
- 724 human demonstrations — gold subset used for the original paper evaluations (reported; source: https://zenodo.org/api/records/14094162)

Counts are publisher-reported. The gold subset covers 162 workflows and differs from the full collection; scores require the exact task and subset.

### License declarations

- code: not recorded
- data: cc-by-4.0 — https://zenodo.org/api/records/14094162
- document: not recorded
- weights: not recorded

- data review: The linked Zenodo dataset release declares CC-BY-4.0; this does not assign a code license to the repository.
  Sources: https://zenodo.org/api/records/14094162

### Primary evidence

- https://raw.githubusercontent.com/HazyResearch/wonderbread/HEAD/README.md (retrieved 2026-10-17T09:12:11Z; SHA-256 1e4308d59a22b39543c28b745a58d3d7c47be1ab9df9a4c5c0fe868a810350b2)
- https://api.github.com/repos/HazyResearch/wonderbread (retrieved 2026-10-17T09:12:11Z; SHA-256 5ba27e24455b36b52bf65b3c9f589e760f97a576bb01d622d89836c5bb53b38c)
- https://api.github.com/repos/HazyResearch/wonderbread/git/trees/main?recursive=1 (retrieved 2026-10-17T09:14:04Z; SHA-256 accb518a5362948cf96e9f0b684fb6fcc9b26e43a691016ae70a3283c0e1e2c2)
- https://zenodo.org/api/records/14094162 (retrieved 2026-10-17T09:15:34Z; SHA-256 68b4b952c1ab90484d457b392de1d0c95a24f6cc1674c82125a6bd26f1cb1016)

---

## WorkArena

Browser-based enterprise workflow tasks built around ServiceNow.

- Catalog URL: https://awesomecua.com/resources/github-servicenow-workarena/
- Original source: https://github.com/ServiceNow/WorkArena
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, workflow
- Evidence checked: 2026-10-16T06:35:57Z
- ID: github:servicenow/workarena

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-servicenow-workarena/record.json

### Structured profile

- actions: BrowserGym browser actions
- evaluation: Task-specific checks on ServiceNow workflows; levels and task configurations define different evaluations.
- focus: enterprise web workflows, compositional tasks
- observations: multimodal browser observations
- setting: interactive

#### Count observations

- 33 task definitions — WorkArena-L1 atomic tasks (reported; source: https://raw.githubusercontent.com/ServiceNow/WorkArena/HEAD/README.md)
- 19,912 task instances — WorkArena-L1 documented instances (reported; source: https://raw.githubusercontent.com/ServiceNow/WorkArena/HEAD/README.md)
- 682 task definitions — WorkArena++ compositional tasks (reported; source: https://raw.githubusercontent.com/ServiceNow/WorkArena/HEAD/README.md)

Definitions and instantiated tasks are different units. ServiceNow instance access is gated. WorkArena-L1 and WorkArena++ should be reported separately.

### License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/ServiceNow/WorkArena/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/ServiceNow/WorkArena/HEAD/README.md (retrieved 2026-10-16T06:35:57Z; SHA-256 834a48f0346036a0fc591a36f9eb6f513b44a2777a66afa0917f28fc63f29334)
- https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=800&max_results=100&sortBy=submittedDate&sortOrder=descending (retrieved 2026-10-16T06:36:58Z; SHA-256 c87e97eb397da04806d53145cf9c13be739fc657bb54dca9318c8c4ed2a36249)
- https://raw.githubusercontent.com/ServiceNow/WorkArena/HEAD/LICENSE (retrieved 2026-10-16T06:41:57Z; SHA-256 b192c58991e8ff585cc574615d40e74185404d4b96c1109d423071ab1367344b)

---

## WorldGUI

611 desktop GUI tasks that agents must complete from varied starting points, shipped with instructional videos and project files, plus the self-reflective WorldGUI-Agent baseline.

- Catalog URL: https://awesomecua.com/resources/github-showlab-worldgui/
- Original source: https://github.com/showlab/WorldGUI
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: desktop
- Topics: evaluation, robustness
- Evidence checked: 2026-10-16T06:35:58Z
- ID: github:showlab/worldgui

### Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.com/resources/github-showlab-worldgui/record.json

### License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

### Primary evidence

- https://raw.githubusercontent.com/showlab/WorldGUI/HEAD/README.md (retrieved 2026-10-16T06:35:58Z; SHA-256 ea54ea82b86548ff38913ef328ec18152ace71a3fe9bb497bcabcaad24e6a678)
