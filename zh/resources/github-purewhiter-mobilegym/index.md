# MobileGym

运行于浏览器的移动应用模拟器，提供可编程状态、参数化任务和确定性的状态检查评判机制，用于并行评估 GUI 智能体和在线强化学习。

- 目录页面：https://awesomecua.com/zh/resources/github-purewhiter-mobilegym/
- English：https://awesomecua.com/resources/github-purewhiter-mobilegym/index.md
- 原始来源：https://github.com/Purewhiter/mobilegym
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、手机操作、强化学习、沙箱
- 证据核查日期：2026-10-17T11:18:19Z
- ID：github:purewhiter/mobilegym

## 范围记录

The inspected code release is v0.1.0, with a separately listed data-v0.1.0 archive. The interaction target is a browser-hosted Android-like simulation; real-device transfer results are separate publisher-reported experiments. Source split manifests contain 160 training IDs and 256 test IDs with no duplicates or overlap. Platform/training code declares Apache-2.0. LICENSE-DATA applies CC-BY-NC-4.0 only to maintainer-created compilation, curation and synthetic content, and explicitly leaves third-party UGC/API terms and author rights separate. No runtime, archive or model was executed/downloaded.

- 完整记录 JSON：https://awesomecua.com/resources/github-purewhiter-mobilegym/record.json

## 结构化规格

- 动作 / 输出：tap, type, swipe, back, home, drag, complete
- 评测方式：Deterministic task judges inspect state changes; reported metrics distinguish success, progress, false completion and unexpected side effects.
- 侧重：mobile GUI task completion in simulation, state verification and parallel training
- 观测：simulated mobile screenshots, structured simulator state for judges
- 任务设置：interactive

### 数量记录

- 416 task templates — publisher benchmark overview（来源报告；来源：https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/README.md）
- 28 simulated apps — publisher benchmark overview（来源报告；来源：https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/README.md）
- 160 task identifiers — bench_env/splits/train.txt（计算得出；来源：https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/bench_env/splits/train.txt）
- 256 task identifiers — bench_env/splits/test.txt（计算得出；来源：https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/bench_env/splits/test.txt）

The split-ID inventory counts task IDs. Extra runtime/data dependencies and third-party content terms remain distinct.

## 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/LICENSE
- 数据：CC-BY-NC-4.0 — https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/LICENSE-DATA
- 文档：未记录
- 权重：未记录

- 代码审核：Core source LICENSE; mobilegym-rl has a separate matching Apache-2.0 license and retains vendored notices.
  来源：https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/LICENSE

- 数据审核：Limited to maintainers’ dataset compilation/curation and authored synthetic content; third-party user content remains subject to platform terms and its authors’ rights.
  来源：https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/LICENSE-DATA

## 一手证据

- https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/README.md（获取于 2026-10-17T11:18:19Z；SHA-256：815294dd2aa4bf8264978c3bfedee85a3a2c835c511860c732314a4c282a974a）
- https://api.github.com/repos/Purewhiter/mobilegym（获取于 2026-10-17T11:18:18Z；SHA-256：48df04a2fbf479f956d5c7f22d7006c22f591b8857cab8a1d64c196349045495）
- https://api.github.com/repos/Purewhiter/mobilegym/git/trees/main?recursive=1（获取于 2026-10-17T11:22:56Z；SHA-256：68f1fa16c0999079bccc3aa1b6c3c22b72b570a5b971837c5026ea5408853375）
- https://api.github.com/repos/Purewhiter/mobilegym/releases/tags/v0.1.0（获取于 2026-10-17T11:23:08Z；SHA-256：cb1057b0a0a2ef7ab781414c168bb41f0f3da88afc042ce266d6063493561bde）
- https://api.github.com/repos/Purewhiter/mobilegym/releases/tags/data-v0.1.0（获取于 2026-10-17T11:23:09Z；SHA-256：ad0c86a6cdde2caba8bd1f98b121803817d93718319a863b0b833da2760c23aa）
- https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/LICENSE（获取于 2026-10-17T11:22:59Z；SHA-256：7618cd7de039c264759ca8ca0b9130c6de63a4536dcf436baedd4cfbf639073e）
- https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/mobilegym-rl/LICENSE（获取于 2026-10-17T11:27:50Z；SHA-256：58d1e17ffe5109a7ae296caafcadfdbe6a7d176f0bc4ab01e12a689b0499d8bd）
- https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/LICENSE-DATA（获取于 2026-10-17T11:22:59Z；SHA-256：e222fa518c5003d425ee9b371e987c95ba10e52b54fea078571254ae6a8eaf23）
- https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/bench_env/splits/train.txt（获取于 2026-10-17T11:27:49Z；SHA-256：0ecef460fecfd8aa91dcbb2cd4cca17b033f620f85a50d7f0b598ed19a27c0eb）
- https://raw.githubusercontent.com/Purewhiter/mobilegym/HEAD/bench_env/splits/test.txt（获取于 2026-10-17T11:27:48Z；SHA-256：a3d485015d480f4f1ebbd12dbbf02c25c0aa667d1afcf5f6fa35f0263a82c567）
