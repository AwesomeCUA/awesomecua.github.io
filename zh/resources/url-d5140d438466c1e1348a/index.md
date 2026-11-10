# CUAVerifierBench

人工标注的浏览器智能体轨迹，用于将自动化任务成功与过程质量验证器的判断同评审人员的判断进行比较。

- 目录页面：https://awesomecua.com/zh/resources/url-d5140d438466c1e1348a/
- English：https://awesomecua.com/resources/url-d5140d438466c1e1348a/index.md
- 原始来源：https://huggingface.co/datasets/microsoft/CUAVerifierBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、奖励模型、网页导航
- 证据核查日期：2026-10-17T02:42:32Z
- ID：url:d5140d438466c1e1348a

## 范围记录

Public Parquet configs separate trajectories from per-reviewer annotations. The card declares MIT. The two splits have different review stages: Online-Mind2Web includes blind and verifier-informed annotations, whereas the internal split is blind-only. This measures verifier agreement.

- 完整记录 JSON：https://awesomecua.com/resources/url-d5140d438466c1e1348a/record.json

## 结构化规格

- 动作 / 输出：success verdict, process score
- 评测方式：Agreement metrics including Cohen’s kappa, accuracy and F1 against human annotations; review stages must be kept distinct.
- 侧重：verifier-human agreement, process quality
- 观测：screenshots, action logs, final answers
- 任务设置：离线

### 数量记录

- 106 条轨迹 — fara7b_om2w_browserbase split（来源报告；来源：https://huggingface.co/datasets/microsoft/CUAVerifierBench/raw/main/README.md）
- 154 条轨迹 — internal split（来源报告；来源：https://huggingface.co/datasets/microsoft/CUAVerifierBench/raw/main/README.md）
- 215 行标注数据 — fara7b_om2w_browserbase split（来源报告；来源：https://huggingface.co/datasets/microsoft/CUAVerifierBench/raw/main/README.md）
- 154 行标注数据 — internal split（来源报告；来源：https://huggingface.co/datasets/microsoft/CUAVerifierBench/raw/main/README.md）

Trajectory rows and reviewer rows have different grains. The released Parquet files are public despite internal task labels. No payload data was downloaded.

## 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/microsoft/CUAVerifierBench/raw/main/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：The benchmark's Hub dataset card declares MIT in its metadata header (license: mit).
  来源：https://huggingface.co/datasets/microsoft/CUAVerifierBench/raw/main/README.md

## 一手证据

- https://huggingface.co/datasets/microsoft/CUAVerifierBench/raw/main/README.md（获取于 2026-10-17T02:42:32Z；SHA-256：44d7190b72ae489297f59d6fadff635ced6dd067c845c77b04f187a7b2d7bec7）
- https://huggingface.co/api/datasets/microsoft/CUAVerifierBench（获取于 2026-10-17T02:42:32Z；SHA-256：fb1fe8a9fd6e45fc82157c65c08d5c682d08bead5196308776200ef3c39c1e41）
