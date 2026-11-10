# AgentRewardBench

AgentRewardBench 提供基准和评估工具，将自动网页智能体评判器对任务成功、附带影响和重复操作的判断与专家判断进行比较。

- 目录页面：https://awesomecua.com/zh/resources/github-mcgill-nlp-agent-reward-bench/
- English：https://awesomecua.com/resources/github-mcgill-nlp-agent-reward-bench/index.md
- 原始来源：https://github.com/McGill-NLP/agent-reward-bench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、奖励模型、网页导航
- 证据核查日期：2026-10-17T03:59:54Z
- ID：github:mcgill-nlp/agent-reward-bench

## 范围记录

The public repository contains judges, evaluation utilities and annotation files; the linked Hub hosts trajectory/screenshot manifests. No root code license is declared. Dataset Terms of Use are custom and retain third-party restrictions rather than declaring an SPDX license. The paper-reported 1,302 trajectories describe its reviewed study population.

- 完整记录 JSON：https://awesomecua.com/resources/github-mcgill-nlp-agent-reward-bench/record.json

## 结构化规格

- 动作 / 输出：judge verdicts
- 评测方式：Compare automatic judgments with expert answers on task success, side effects and repetitiveness.
- 侧重：automatic evaluator agreement, task success, side effects, repetition
- 观测：web trajectories, screenshots, actions
- 任务设置：离线

### 数量记录

- 1,302 条轨迹 — paper-reported expert-reviewed set（来源报告；来源：https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=700&max_results=100&sortBy=submittedDate&sortOrder=descending）

Counts refer to the paper study.

## 许可证信息

- 代码：未记录
- 数据：Custom AgentRewardBench Terms of Use — https://huggingface.co/datasets/McGill-NLP/agent-reward-bench/raw/main/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：The dataset card supplies custom Terms of Use and preserves third-party conditions. The repository has no root code license, and no dataset license is inherited from its benchmarks.
  来源：https://huggingface.co/datasets/McGill-NLP/agent-reward-bench/raw/main/README.md

## 一手证据

- https://raw.githubusercontent.com/McGill-NLP/agent-reward-bench/HEAD/README.md（获取于 2026-10-17T03:59:54Z；SHA-256：fb753e41c3eb19be172e9e7fccbc6bcadf44288507f82b190ca99e64144294b6）
- https://api.github.com/repos/McGill-NLP/agent-reward-bench（获取于 2026-10-17T03:59:54Z；SHA-256：7dfac983a6e443d5f66e1fc0fc3706ebea4c93005f03457cc0a2b13a2bd89601）
- https://api.github.com/repos/McGill-NLP/agent-reward-bench/git/trees/main?recursive=1（获取于 2026-10-17T03:59:54Z；SHA-256：79a1639cd4738719e51fc7f32313d63c0483914517cee96175459f63513e8c07）
- https://huggingface.co/api/datasets/McGill-NLP/agent-reward-bench（获取于 2026-10-17T04:03:18Z；SHA-256：20c910fad3ad45a0c8c39b182c53632a821d3b6b546278bea6b7a78fbcb3f6cb）
- https://huggingface.co/datasets/McGill-NLP/agent-reward-bench/raw/main/README.md（获取于 2026-10-17T04:03:20Z；SHA-256：e16adf817e3950441d70c7bb1bb3f44bd8dc65344938247f23fea4aaff9f654e）
- https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=700&max_results=100&sortBy=submittedDate&sortOrder=descending（获取于 2026-10-16T06:36:54Z；SHA-256：4953a8e0f029016aef668bce98cec4d2873a7ae49c1fe33c4311fa5eb8d24089）
