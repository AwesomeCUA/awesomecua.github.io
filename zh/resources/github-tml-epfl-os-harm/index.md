# OS-Harm

评估计算机使用智能体在滥用、提示注入和模型意外行为方面安全性的基准。

- 目录页面：https://awesomecua.com/zh/resources/github-tml-epfl-os-harm/
- English：https://awesomecua.com/resources/github-tml-epfl-os-harm/index.md
- 原始来源：https://github.com/tml-epfl/os-harm
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：安全与防护、评测
- 证据核查日期：2026-10-16T09:36:33Z
- ID：github:tml-epfl/os-harm

## 范围记录

The retained task-ID manifests have 50 misuse, 10 injection and 50 misbehavior IDs. Prompt-injection execution expands vectors/goals; the reported 150-task total and released IDs have different grains.

- 完整记录 JSON：https://awesomecua.com/resources/github-tml-epfl-os-harm/record.json

## 结构化规格

- 动作 / 输出：OSWorld/PyAutoGUI desktop interaction
- 评测方式：Automated LLM judge scores both task accuracy and safety from saved execution traces. Keep judge model/prompt version and harm category with a result; the scripts separately compute predicted metrics. This is an interactive desktop safety benchmark.
- 侧重：deliberate misuse, prompt-injection safety, unintended harmful behavior during normal tasks
- 观测：screenshot, accessibility tree, screenshot plus accessibility tree, set-of-marks
- 任务设置：interactive

### 数量记录

- 150 tasks as reported by the paper/README — reported benchmark total; unique released task IDs use a separate count（来源报告；来源：https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/README.md）
- 50 task IDs — released misuse task-ID list; before injection/goal expansion（计算得出；来源：https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/evaluation_examples/test_misuse.json）
- 10 task IDs — released injection task-ID list; before injection/goal expansion（计算得出；来源：https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/evaluation_examples/test_injection.json）
- 50 task IDs — released misbehavior task-ID list; before injection/goal expansion（计算得出；来源：https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/evaluation_examples/test_misbehavior.json）

README/paper reports 150 tasks, whereas retained misuse/injection/misbehavior lists contain 50/10/50 IDs. run.py expands injection vectors/goals, giving the released ID inventory and paper settings different grains. Judge agreement F1 values in the README measure agreement with human labels. Experiments use OSWorld desktop apps, with VMware documented as tested and screenshot/a11y/SOM observation choices. Code Apache-2.0 does not establish VM/app/data rights. Publisher asks that the benchmark not be used directly as agent training data.

## 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/README.md（获取于 2026-10-16T09:36:33Z；SHA-256：d001158f58ac37b01c8470224db1567a52feb8010877305f7966637cf7400706）
- https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/run.py（获取于 2026-10-17T14:23:14Z；SHA-256：86dd59a252fd654fc3244268a75de37b2c7f97e16f6b1de8c4cf885458a422f7）
- https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/evaluation_examples/test_misuse.json（获取于 2026-10-17T14:22:04Z；SHA-256：8ff6092a51cc924c5225ace01c011c6481a2461eb0a47b7360eddaf6619b898c）
- https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/evaluation_examples/test_injection.json（获取于 2026-10-17T14:22:04Z；SHA-256：b4c451236bb4ff36eb7e790dfa8cb517bffb245602bc441080314b13c8aba54f）
- https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/evaluation_examples/test_misbehavior.json（获取于 2026-10-17T14:22:05Z；SHA-256：8eb6bade72696c3c0b53160a05b006a773c9e553ab5e401418b54d9acc98c0f2）
- https://raw.githubusercontent.com/tml-epfl/os-harm/HEAD/LICENSE（获取于 2026-10-16T09:39:34Z；SHA-256：7c3ab1eeeb073d92238ecb65ffaebe58ab5922929b115a7c0b64eb4f9a9afc2f）
