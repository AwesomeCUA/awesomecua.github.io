# OSWorld-Human

提供人类参考轨迹和评分代码，用于衡量计算机使用智能体完成 OSWorld 任务时的操作效率。

- 目录页面：https://awesomecua.com/zh/resources/github-wuklab-osworld-human/
- English：https://awesomecua.com/resources/github-wuklab-osworld-human/index.md
- 原始来源：https://github.com/WukLab/osworld-human
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：评测、效率、工作流
- 证据核查日期：2026-10-17T03:59:54Z
- ID：github:wuklab/osworld-human

## 范围记录

The repository publishes per-application reference JSON files and score.py. It explicitly states that these evaluation solutions should not be used for training. No root code or data-license declaration was found; no license is inherited from OSWorld, and the score script was not executed.

- 完整记录 JSON：https://awesomecua.com/resources/github-wuklab-osworld-human/record.json

## 结构化规格

- 动作 / 输出：efficiency scores
- 评测方式：The scorer consumes OSWorld results and a specified maximum step budget; the README distinguishes single-action and grouped-action WES+ and WES-.
- 侧重：action efficiency relative to humans
- 观测：OSWorld result trajectories, human reference actions
- 任务设置：离线

### 数量记录

未记录数量。

Reference solutions are published for evaluation and expressly discouraged for training. No task count is inferred from file count.

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/WukLab/osworld-human/HEAD/README.md（获取于 2026-10-17T03:59:54Z；SHA-256：35c2f4dbed9d9bfc57f4c5a3f2fd70d313d6b463403b482c2fd4066d27b02cc1）
- https://api.github.com/repos/WukLab/osworld-human（获取于 2026-10-17T03:59:54Z；SHA-256：21c86601da6e77a3326fbcd143e3c5d9a033cd59e6e13973250966dff6f51ae9）
- https://api.github.com/repos/WukLab/osworld-human/git/trees/main?recursive=1（获取于 2026-10-17T03:59:55Z；SHA-256：c7b958d7a075adf5d282be08b68ad2b090568da342d4cb4b501ae808e54d0053）
