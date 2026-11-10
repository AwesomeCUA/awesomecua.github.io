# MacAgentBench

MacAgentBench 包含覆盖 25 个应用的 676 项 macOS 任务；每项任务在独立 Docker 容器中运行，通过含多个检查点的确定性规则检查评分。

- 目录页面：https://awesomecua.com/zh/resources/github-jetastra-macagentbench/
- English：https://awesomecua.com/resources/github-jetastra-macagentbench/index.md
- 原始来源：https://github.com/JetAstra/MacAgentBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、macOS
- 主题：评测
- 证据核查日期：2026-10-16T06:35:59Z
- ID：github:jetastra/macagentbench

- 完整记录 JSON：https://awesomecua.com/resources/github-jetastra-macagentbench/record.json

## 结构化规格

- 动作 / 输出：GUI interactions, command-line operations
- 评测方式：Deterministic rule-based evaluators with intermediate checkpoints.
- 侧重：macOS task completion, cross-application workflows
- 观测：未记录
- 任务设置：交互式

### 数量记录

- 676 个任务 — documented MacAgentBench suite（来源报告；来源：https://raw.githubusercontent.com/JetAstra/MacAgentBench/HEAD/README.md）
- 25 个应用 — documented application coverage（来源报告；来源：https://raw.githubusercontent.com/JetAstra/MacAgentBench/HEAD/README.md）

The benchmark evaluates multiple agent frameworks and GUI/CLI workflows. Framework skills and interfaces affect the task setting, with observation representation varying by framework.

## 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/JetAstra/MacAgentBench/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/JetAstra/MacAgentBench/HEAD/README.md（获取于 2026-10-16T06:35:59Z；SHA-256：f1f8c0cd5d984e4026abea858b54f0f1427c018cad7e75322e744f1e070225a9）
- https://export.arxiv.org/api/query?id_list=2605.06761%2C2605.07110%2C2605.07134%2C2605.09497%2C2605.11212%2C2605.12481%2C2605.12501%2C2605.12549%2C2605.13631%2C2605.14290%2C2605.14747%2C2605.15030%2C2605.15542%2C2605.15777%2C2605.16024%2C2605.16116%2C2605.16402%2C2605.17320%2C2605.18048%2C2605.18652%2C2605.18758%2C2605.19260%2C2605.19769%2C2605.21470%2C2605.25160%2C2605.25624%2C2605.25707%2C2605.26114%2C2605.27761%2C2605.28116%2C2605.28534%2C2605.28646%2C2605.28775%2C2605.29119%2C2605.29324%2C2605.29447%2C2605.29486%2C2605.29534%2C2605.29615%2C2606.06322%2C2606.09426%2C2606.11042%2C2606.22557%2C2606.23189%2C2606.24551%2C2608.17659%2C2609.22000%2C2609.34139&max_results=48（获取于 2026-10-16T06:32:03Z；SHA-256：2adad07a9ec7189aea25e48c76fa28206eda97f8974d5745cadda9529103bb1a）
- https://raw.githubusercontent.com/JetAstra/MacAgentBench/HEAD/LICENSE（获取于 2026-10-16T06:41:59Z；SHA-256：adf69997028988ba1eec34666afa119e007771dfc8e830c5dc50ad650896e897）
