# WebTailBench

用于评估计算机使用智能体的实时网页任务定义和评分标准，包含保留的原始任务、更新后的 V2 任务集及独立的拒绝任务集。

- 目录页面：https://awesomecua.com/zh/resources/url-3b6dfd52f98bfe76bc7f/
- English：https://awesomecua.com/resources/url-3b6dfd52f98bfe76bc7f/index.md
- 原始来源：https://huggingface.co/datasets/microsoft/WebTailBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、安全与防护
- 证据核查日期：2026-10-17T02:42:32Z
- ID：url:3b6dfd52f98bfe76bc7f

## 范围记录

Public TSV files contain V1, V2 and refusal task definitions. The card declares MIT for the dataset. V1 and V2 share the same 609 task identities. The May 2026 refresh supersedes calendar-bound task wording.

- 完整记录 JSON：https://awesomecua.com/resources/url-3b6dfd52f98bfe76bc7f/record.json

## 结构化规格

- 动作 / 输出：browser interaction
- 评测方式：Task-specific precomputed rubrics; refusal tasks are a separate evaluation population.
- 侧重：live web task completion, unsafe-request refusal
- 观测：web pages
- 任务设置：交互式

### 数量记录

- 609 个任务标识 — main V1/V2 suite (shared identities)（来源报告；来源：https://huggingface.co/datasets/microsoft/WebTailBench/raw/main/README.md）
- 111 个任务 — refusal suite（来源报告；来源：https://huggingface.co/datasets/microsoft/WebTailBench/raw/main/README.md）

V2 refreshes task strings and rubrics while preserving V1 task IDs. Counts are task definitions.

## 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/microsoft/WebTailBench/raw/main/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：The benchmark's Hub dataset card declares MIT in its metadata header (license: mit).
  来源：https://huggingface.co/datasets/microsoft/WebTailBench/raw/main/README.md

## 一手证据

- https://huggingface.co/datasets/microsoft/WebTailBench/raw/main/README.md（获取于 2026-10-17T02:42:32Z；SHA-256：c4cfc361d1d47d7855269af4110483363964e23f9c65244a1182830eccccbb7f）
- https://huggingface.co/api/datasets/microsoft/WebTailBench（获取于 2026-10-17T02:42:32Z；SHA-256：93469a20d333219dde89a225891a54ee716120d559eb8ac9f69a1a7ee84f57a3）
