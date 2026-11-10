# OSWorld

通过实际执行任务，评估智能体在真实桌面环境中的表现。

- 目录页面：https://awesomecua.com/zh/resources/github-xlang-ai-osworld/
- English：https://awesomecua.com/resources/github-xlang-ai-osworld/index.md
- 原始来源：https://github.com/xlang-ai/OSWorld
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux、Windows、macOS
- 主题：评测、跨应用
- 证据核查日期：2026-10-16T06:35:57Z
- ID：github:xlang-ai/osworld

- 完整记录 JSON：https://awesomecua.com/resources/github-xlang-ai-osworld/record.json

## 结构化规格

- 动作 / 输出：mouse and keyboard via PyAutoGUI
- 评测方式：Task-specific execution-based evaluators inspect application or system state.
- 侧重：task completion, cross-application workflows
- 观测：screenshots
- 任务设置：交互式

### 数量记录

- 369 个任务定义 — test_all.json（计算得出）（来源：https://raw.githubusercontent.com/xlang-ai/OSWorld/HEAD/evaluation_examples/test_all.json）
- 361 个任务定义 — test_nogdrive.json（计算得出）（来源：https://raw.githubusercontent.com/xlang-ai/OSWorld/HEAD/evaluation_examples/test_nogdrive.json）

Counts were computed from unique task identifiers in the two inspected manifests. The subsets differ; record the manifest, repository revision, agent interface, and step budget with a score.

## 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/xlang-ai/OSWorld/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/xlang-ai/OSWorld/HEAD/README.md（获取于 2026-10-16T06:35:57Z；SHA-256：83b8684c2f4ac4f31996b8b4752195fcb6cc5429f89d92398177b9b721d787fc）
- https://export.arxiv.org/api/query?id_list=2403.03186%2C2403.03788%2C2403.07718%2C2403.10170%2C2403.11905%2C2403.16971%2C2403.17918%2C2403.20271%2C2404.01549%2C2404.01744%2C2404.02475%2C2404.03648%2C2404.05427%2C2404.05719%2C2404.05955%2C2404.06474%2C2404.07972%2C2404.08755%2C2404.08860%2C2404.08948%2C2404.09992%2C2404.10887%2C2404.11459%2C2404.16006%2C2404.16048%2C2404.16054%2C2404.16660%2C2404.18074%2C2404.19296%2C2405.00516%2C2405.11120%2C2405.12842%2C2405.14573%2C2405.14751%2C2405.15793%2C2405.16247%2C2405.20309%2C2406.01014%2C2406.01623%2C2406.03679%2C2406.06947%2C2406.07822%2C2406.08184%2C2406.08340%2C2406.08451%2C2406.10227%2C2406.10819%2C2406.11317%2C2406.11896%2C2406.12373&max_results=50（获取于 2026-10-16T06:31:28Z；SHA-256：be244bfae7f89ef9449b69d85aac44295eb7b5f7e5e1bbedd76df312696676a7）
- https://raw.githubusercontent.com/xlang-ai/OSWorld/HEAD/evaluation_examples/test_all.json（获取于 2026-10-16T11:34:59Z；SHA-256：9ebc5187cbd727ef26c24626820076b102fff812863c640a67c467fea9542ab5）
- https://raw.githubusercontent.com/xlang-ai/OSWorld/HEAD/evaluation_examples/test_nogdrive.json（获取于 2026-10-16T11:34:59Z；SHA-256：fcb9497e93a8986407345d3012c872c9c2fed253420730fbea64ccfcace67dbb）
- https://raw.githubusercontent.com/xlang-ai/OSWorld/HEAD/LICENSE（获取于 2026-10-16T06:41:57Z；SHA-256：a8d1d88a0f9cce3cdbff73b03a80dc5e5d69e3ba2443946c268815a550c9e0ec）
