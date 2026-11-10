# OpenApps

提供可配置的浏览器应用和任务奖励，用于测试计算机使用智能体在内容、布局和外观变化下的表现。

- 目录页面：https://awesomecua.com/zh/resources/github-facebookresearch-openapps/
- English：https://awesomecua.com/resources/github-facebookresearch-openapps/index.md
- 原始来源：https://github.com/facebookresearch/OpenApps
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、鲁棒性、跨应用、沙箱
- 证据核查日期：2026-10-18T04:35:18Z
- ID：github:facebookresearch/openapps

## 范围记录

Public code includes app/task/configuration and agent-launching implementations. README distinguishes moving main from v1.0-paper and says even that tag differs at the byte level from the published runs. CC-BY-NC-4.0 is the repository’s declared code license. No commercial-use permission or fixed downloadable task total is inferred.

- 完整记录 JSON：https://awesomecua.com/resources/github-facebookresearch-openapps/record.json

## 结构化规格

- 动作 / 输出：click, type, scroll, configured BrowserGym/AgentLab actions
- 评测方式：Tasks define check_if_task_is_complete(initial_state,current_state); app-specific reward logic evaluates underlying state, with custom checks for code-editor file contents. Observation/history flags are configurable. No universal single fixed task total or published-run reproduction is implied.
- 侧重：UI-agent reliability under environment variation, state-based browser task evaluation
- 观测：screenshots, accessibility trees, set-of-marks and coordinates (configurable)
- 任务设置：交互式

### 数量记录

未记录数量。

Preserve the code/tag, app state, theme/layout/content choices, goal variant and action/observation configuration. Current main refactors the paper-era appearance surface, and the v1.0-paper tag includes post-publication fixes that may move rewards. The environments run as browser apps with phone/tablet viewports.

## 许可证信息

- 代码：CC-BY-NC-4.0 — https://raw.githubusercontent.com/facebookresearch/OpenApps/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 代码审核：Reviewed repository license declaration for code; third-party dependencies, data, weights and executable environment images are separate.
  来源：https://raw.githubusercontent.com/facebookresearch/OpenApps/HEAD/LICENSE

## 一手证据

- https://raw.githubusercontent.com/facebookresearch/OpenApps/HEAD/README.md（获取于 2026-10-18T04:35:18Z；SHA-256：1df0f66584b37e7dba90811a7732d3b0c13c96cd7da4aec3970a18be36a6cec1）
- https://api.github.com/repos/facebookresearch/OpenApps（获取于 2026-10-18T04:33:19Z；SHA-256：2c57b627cb344e360480c10e74dcdd1d1ed321d9a7a4e3891bc970355b15f4cd）
- https://api.github.com/repos/facebookresearch/OpenApps/git/trees/main?recursive=1（获取于 2026-10-18T04:35:18Z；SHA-256：34aa76fbd6cca6ac2f3949792144662b90d85d7a18988afabcb570167ea5c1d6）
- https://raw.githubusercontent.com/facebookresearch/OpenApps/HEAD/docs/tasks.md（获取于 2026-10-18T04:40:40Z；SHA-256：af030b93a7604c063b08f003b0a0124a6e95e560649d0306bfe40dd87fed563d）
- https://raw.githubusercontent.com/facebookresearch/OpenApps/HEAD/docs/agents.md（获取于 2026-10-18T04:40:40Z；SHA-256：aede4dfd965bd3484336f40ddb1bd6db48aed00ab45e27c048b76cc4601d71b3）
- https://raw.githubusercontent.com/facebookresearch/OpenApps/HEAD/LICENSE（获取于 2026-10-18T04:35:20Z；SHA-256：336255dc30193e8e15d689d9481bb05673d89055718f3a96923a7ffb99adbbaf）
