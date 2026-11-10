# OS-Map

源自 OSWorld 的桌面基准，提供 Ubuntu 虚拟机环境和扩展的任务配置，用于衡量计算机交互的广度与深度。

- 目录页面：https://awesomecua.com/zh/resources/github-os-copilot-os-map/
- English：https://awesomecua.com/resources/github-os-copilot-os-map/index.md
- 原始来源：https://github.com/OS-Copilot/OS-Map
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux
- 主题：评测、长任务、跨应用
- 证据核查日期：2026-10-17T09:12:14Z
- ID：github:os-copilot/os-map

## 范围记录

Public task manifests, agent runner and evaluator code are present, and the linked ungated Hub manifest lists Ubuntu0.zip and task files. The main setup supports x86 VMware Workstation and says ARM/Docker alternatives are still in development. An inherited evaluation-examples README still mentions Windows 10 and under-construction status; those statements are retained as a documentation inconsistency. The manifest has 416 category/task references but 412 globally distinct ID strings.

- 完整记录 JSON：https://awesomecua.com/resources/github-os-copilot-os-map/record.json

## 结构化规格

- 动作 / 输出：actions executed by the OSWorld-derived DesktopEnv
- 评测方式：Task configurations provide evaluators for application/system state, using an OSWorld-derived runtime.
- 侧重：breadth of desktop task coverage, depth of desktop task execution
- 观测：desktop observations from an Ubuntu virtual machine
- 任务设置：交互式

### 数量记录

- 416 个类别/任务引用 — evaluation_examples/all.json（计算得出）（来源：https://raw.githubusercontent.com/OS-Copilot/OS-Map/HEAD/evaluation_examples/all.json）

416 category/task pairs are unique, but only 412 bare ID strings are unique across categories. This is a manifest-reference count. Main runtime documentation specifies Ubuntu; the subdirectory README retains older Windows-only wording.

## 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/OS-Copilot/OS-Map/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 代码审核：Repository code LICENSE; no license is inferred for the VM image or bundled third-party applications.
  来源：https://raw.githubusercontent.com/OS-Copilot/OS-Map/HEAD/LICENSE

## 一手证据

- https://raw.githubusercontent.com/OS-Copilot/OS-Map/HEAD/README.md（获取于 2026-10-17T09:12:14Z；SHA-256：fc9f3c8d9fffdff8b51e312b013be0d9fdfc10e57fdc2ec4a8a8d012c4b42475）
- https://api.github.com/repos/OS-Copilot/OS-Map（获取于 2026-10-17T09:12:14Z；SHA-256：d6c91b4910e92f40cc694b4cb6467c1a20f42c0c14047b95a1e777aca0892677）
- https://api.github.com/repos/OS-Copilot/OS-Map/git/trees/main?recursive=1（获取于 2026-10-17T09:14:07Z；SHA-256：41342157c53f28ad2729137491930225ac11da922e7b16762e84ac958a2e9d28）
- https://raw.githubusercontent.com/OS-Copilot/OS-Map/HEAD/LICENSE（获取于 2026-10-17T09:14:07Z；SHA-256：1dd924135cbf0a85ce72d75025259adb7b849970d400af4ed854327a34e7ee41）
- https://raw.githubusercontent.com/OS-Copilot/OS-Map/HEAD/evaluation_examples/all.json（获取于 2026-10-17T09:17:22Z；SHA-256：4199af4c8bc60451079d8a2e7598ab7386bd82b0d5c9ad7e6927d6cb8e03ad6f）
- https://raw.githubusercontent.com/OS-Copilot/OS-Map/HEAD/evaluation_examples/README.md（获取于 2026-10-17T09:17:22Z；SHA-256：a6b60d5721cfdd26416e7d0ae3192360896427a97ccb3793812cc150e9cd7126）
- https://huggingface.co/api/datasets/os-map/OSMAP（获取于 2026-10-17T09:14:16Z；SHA-256：d2da837872b123f2927a069a020aeb14fb4b22148599c9f2e8b6689ee444ec88）
