# ScienceBoard

面向多模态智能体的科学工作流程任务，涉及 ChimeraX、KAlgebra、Celestia、Grass GIS 和 Lean 4 等桌面软件；应用经过修改，可暴露状态供评估使用。

- 目录页面：https://awesomecua.com/zh/resources/github-os-copilot-scienceboard/
- English：https://awesomecua.com/resources/github-os-copilot-scienceboard/index.md
- 原始来源：https://github.com/OS-Copilot/ScienceBoard
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：评测、科学工作流
- 证据核查日期：2026-10-16T06:35:58Z
- ID：github:os-copilot/scienceboard

- 完整记录 JSON：https://awesomecua.com/resources/github-os-copilot-scienceboard/record.json

## 结构化规格

- 动作 / 输出：PyAutoGUI desktop actions, code/tool commands and answer/stop actions according to configured agent mode
- 评测方式：Application-specific verifiers inspect state, files, database values, equations, compilation or answer/stop conditions. The official audit records 242 verifier entries across its VM task suite. This profile covers the released VM task definitions; Docker smoke results and Raw/Dual alternatives are separate populations.
- 侧重：scientific-software desktop workflows, GUI and code-assisted scientific tasks
- 观测：desktop screenshots, accessibility-tree observations, set-of-marks with accessibility tree
- 任务设置：interactive

### 数量记录

- 169 VM task definitions — tasks/VM/**/*.json at tree 21b5eb0f; excludes tasks/Raw and tasks/Dual（计算得出；来源：https://api.github.com/repos/OS-Copilot/ScienceBoard/git/trees/main?recursive=1）
- 6 application families — VM suite: Celestia, ChimeraX, GrassGIS, KAlgebra, Lean, TeXstudio（来源报告；来源：https://raw.githubusercontent.com/OS-Copilot/ScienceBoard/HEAD/docs/verifier-audit.md）

Manifest count 169 matches the official verifier audit. Other Raw/Dual definitions can represent alternative execution modes of the same problems. Official Docker migration documents a 20-task acceptance subset; full-suite performance uses a different scope, and legacy VMware remains. External service sign-in/rate limits, amd64 binaries and ChimeraX redistribution terms limit portability. Only code MIT is established; VM, scientific data and bundled apps need their own terms.

## 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/OS-Copilot/ScienceBoard/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/OS-Copilot/ScienceBoard/HEAD/README.md（获取于 2026-10-16T06:35:58Z；SHA-256：4c3fe93aa740dbf4a279a246ddd836f2590a2a36f39b820abe166e38cb484577）
- https://raw.githubusercontent.com/OS-Copilot/ScienceBoard/HEAD/docs/verifier-audit.md（获取于 2026-10-17T14:21:10Z；SHA-256：d276e11127abc5826bd1b2aa2caf543fcd45a8a60477774e8c8b1054067997ec）
- https://raw.githubusercontent.com/OS-Copilot/ScienceBoard/HEAD/docs/known-issues.md（获取于 2026-10-17T14:21:10Z；SHA-256：4f90270617c0c1d58f523c0a7f2e4603fa67a49560d68e2f88cfa080d764313b）
- https://api.github.com/repos/OS-Copilot/ScienceBoard/git/trees/main?recursive=1（获取于 2026-10-17T14:14:07Z；SHA-256：3398670a517a5d1d71f420dd866493d3f8a77853e3933fd4928103f9a8be1e4f）
- https://raw.githubusercontent.com/OS-Copilot/ScienceBoard/HEAD/sci/base/task.py（获取于 2026-10-17T14:35:24Z；SHA-256：d6a1481b453c074e34739fd29def56efa35a1dc10e856418f557f067e9ff08c5）
- https://raw.githubusercontent.com/OS-Copilot/ScienceBoard/HEAD/LICENSE（获取于 2026-10-16T06:41:59Z；SHA-256：cbb1d28b515a39c294963d4bfc24077e669a483fc5ebba9b84a727afd4187426）
