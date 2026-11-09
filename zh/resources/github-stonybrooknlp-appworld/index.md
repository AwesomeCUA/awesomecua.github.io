# AppWorld

提供模拟应用、用户数据和基于状态的任务检查，用于评估通过 API 和代码交互的智能体。

- 目录页面：https://awesomecua.com/zh/resources/github-stonybrooknlp-appworld/
- English：https://awesomecua.com/resources/github-stonybrooknlp-appworld/index.md
- 原始来源：https://github.com/StonyBrookNLP/appworld
- 类型：评测基准
- 审核状态：已审核
- 范围：相关研究
- 运行环境：unspecified
- 主题：评测、工具集成、跨应用
- 证据核查日期：2026-10-16T10:45:03Z
- ID：github:stonybrooknlp/appworld

## 范围记录

Primarily API and coding interaction; included as an adjacent comparison for GUI and hybrid agents.

- 完整记录 JSON：https://awesomecua.com/resources/github-stonybrooknlp-appworld/record.json

## 结构化规格

- 动作 / 输出：Python code, application API calls
- 评测方式：State-based unit tests check task outcomes and unintended changes.
- 侧重：interactive coding, cross-app tool use
- 观测：API documentation, execution feedback
- 任务设置：interactive

### 数量记录

- 750 tasks — original AppWorld benchmark (2024 paper)（来源报告；来源：https://arxiv.org/abs/2407.18901）
- 9 applications — original AppWorld environment (2024 paper)（来源报告；来源：https://arxiv.org/abs/2407.18901）

This is an adjacent API/coding benchmark. Preserve the named release; task counts here refer to the original paper.

## 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/StonyBrookNLP/appworld/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/stonybrooknlp/appworld/HEAD/README.md（获取于 2026-10-16T10:45:03Z；SHA-256：f4049141b6e520217395b7ccd9f27048c8e0f90331690dcbef300d2bc4ff7bdd）
- https://export.arxiv.org/api/query?id_list=2406.12814%2C2406.13719%2C2406.14056%2C2406.14250%2C2406.14314%2C2406.18082%2C2406.19263%2C2407.00993%2C2407.01476%2C2407.01489%2C2407.01511%2C2407.01558%2C2407.03037%2C2407.03913%2C2407.04346%2C2407.05291%2C2407.07061%2C2407.08850%2C2407.09018%2C2407.09295%2C2407.10956%2C2407.13032%2C2407.13063%2C2407.15673%2C2407.15711%2C2407.16741%2C2407.17490%2C2407.18901%2C2407.19056%2C2407.20183%2C2408.00203%2C2408.02544%2C2408.06327%2C2408.07199%2C2408.11824%2C2408.15978%2C2409.02453%2C2409.04566%2C2409.07429%2C2409.08264%2C2409.09354%2C2409.10741%2C2409.11295%2C2409.13711%2C2409.14337%2C2409.14818%2C2409.15441%2C2409.15637%2C2409.17140%2C2409.20566&max_results=50（获取于 2026-10-16T06:31:32Z；SHA-256：b9a83994d8ac36ccdb606a5219511f8bb35ad3948ade4f9f3e28d386221aedfb）
- https://raw.githubusercontent.com/StonyBrookNLP/appworld/HEAD/LICENSE（获取于 2026-10-16T10:48:42Z；SHA-256：c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4）
