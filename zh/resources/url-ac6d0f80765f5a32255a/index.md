# WebRewardBench

用于网页过程奖励模型的离线偏好评估集，将页面和轨迹上下文与受偏好及被拒绝的候选决策配对。

- 目录页面：https://awesomecua.com/zh/resources/url-ac6d0f80765f5a32255a/
- English：https://awesomecua.com/resources/url-ac6d0f80765f5a32255a/index.md
- 原始来源：https://huggingface.co/datasets/LangAGI-Lab/WebRewardBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、奖励模型、评测
- 证据核查日期：2026-10-17T02:44:50Z
- ID：url:ac6d0f80765f5a32255a

## 范围记录

Two public Parquet shards are present. Card metadata reports 776 test rows, whereas the project describes 1,000-plus test cases without reconciling that count to rows. The 776 test rows and 1,000-plus project cases use unresolved counting units; neither establishes a count of independent tasks. No data license is declared.

- 完整记录 JSON：https://awesomecua.com/resources/url-ac6d0f80765f5a32255a/record.json

## 结构化规格

- 动作 / 输出：candidate-decision preference
- 评测方式：Compare reward-model preferences with the provided chosen/rejected decision labels; no independent score was reproduced.
- 侧重：web process-reward evaluation
- 观测：page screenshots, text observations, action history, task checklists
- 任务设置：离线

### 数量记录

- 776 行 — Hub test split（来源报告；来源：https://huggingface.co/datasets/LangAGI-Lab/WebRewardBench/raw/main/README.md）

The current Hub row count and project case-count claim use unresolved counting units. Candidate lists make rows a different unit from tasks or pairs.

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/LangAGI-Lab/WebRewardBench/raw/main/README.md（获取于 2026-10-17T02:44:50Z；SHA-256：0968f60eea10b95f79cd16ad3746b0e0b1acaeb0e97c45856f709d53a14dd73a）
- https://huggingface.co/api/datasets/LangAGI-Lab/WebRewardBench（获取于 2026-10-17T02:44:50Z；SHA-256：db06c66b8cf5687008b0ad0d9ae269fcc27936887d238cfe2bdeb52151e1683e）
- https://raw.githubusercontent.com/kyle8581/Web-Shepherd/HEAD/README.md（获取于 2026-10-17T02:44:04Z；SHA-256：07431058d8b9a71b80e75b7a74a40a8346c1503eec240628459cc4d4e2f0802f）
