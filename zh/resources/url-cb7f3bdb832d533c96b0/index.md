---
title: "SWE-bench Multimodal · 评测基准 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-cb7f3bdb832d533c96b0/
updated: 2026-10-18
type: benchmark
lang: zh-CN
---

# SWE-bench Multimodal

针对视觉 JavaScript 和 TypeScript 软件的问题解决基准；每项任务的问题描述或补丁包含截图、设计稿或渲染图，并用仓库单元测试检查修复结果。

- 目录页面：https://awesomecua.com/zh/resources/url-cb7f3bdb832d533c96b0/
- English：https://awesomecua.com/resources/url-cb7f3bdb832d533c96b0/index.md
- 原始来源：https://huggingface.co/datasets/SWE-bench/SWE-bench_Multimodal
- 类型：评测基准
- 审核状态：已审核
- 范围：相关研究
- 运行环境：网页
- 主题：评测、界面理解
- 证据核查日期：2026-10-18T11:11:00Z
- ID：url:cb7f3bdb832d533c96b0

## 范围记录

Adjacent scope: agents resolve issues by producing code patches, and every instance requires interpreting interface screenshots, recordings or renderings of front-end software; code-only operation is allowed. The card's prose describes 612 issue-pull request pairs (102 dev, 510 test) from 17 repositories, while the card's dataset_info and the Hub dataset viewer report 100 dev and 480 test rows for the released Parquet files; the published rows are counted here and the difference is unexplained. The card's eval.yaml describes 517 issues with visual elements and the paper abstract reports 617 task instances. The card declares no data license, so data terms remain unknown. An older copy exists at princeton-nlp/SWE-bench_Multimodal. Evaluation uses the SWE-bench harness and per-instance Docker images; nothing was run here.

- 完整记录 JSON：https://awesomecua.com/resources/url-cb7f3bdb832d533c96b0/record.json

## 结构化规格

- 动作 / 输出：code patch submission
- 评测方式：Submitted patches are applied in per-instance Docker images and judged by the repository's FAIL_TO_PASS and PASS_TO_PASS unit tests through the SWE-bench harness; the reported metric is the percentage of instances resolved.
- 侧重：issue resolution in visual JavaScript/TypeScript software, interpreting screenshots and renderings in issue reports
- 观测：repository checkout, issue text, issue and patch images
- 任务设置：离线

### 数量记录

- 480 个任务实例 — Hub test split as released (dataset_info and dataset viewer)（来源报告；来源：https://datasets-server.huggingface.co/size?dataset=SWE-bench/SWE-bench_Multimodal）
- 100 个任务实例 — Hub dev split as released (dataset_info and dataset viewer)（来源报告；来源：https://datasets-server.huggingface.co/size?dataset=SWE-bench/SWE-bench_Multimodal）
- 612 组 issue–pull request 对 — dataset card prose (102 dev and 510 test from 17 repositories)（来源报告；来源：https://huggingface.co/datasets/SWE-bench/SWE-bench_Multimodal/raw/main/README.md）

The released Parquet rows (100 dev, 480 test) differ from the card's prose totals (102 dev, 510 test); record the Hub revision and split with a score. The dev and test splits use disjoint repositories. Some carbon-design-system accessibility tests fetch a rule engine over the network at evaluation time, so their verdicts can vary between runs.

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/SWE-bench/SWE-bench_Multimodal/raw/main/README.md（获取于 2026-10-18T11:11:00Z；SHA-256：dbff146d57bbc200cb584c300d045bc81ab738cec0c07ae405e4f5ebbf5dc6ea）
- https://huggingface.co/api/datasets/SWE-bench/SWE-bench_Multimodal（获取于 2026-10-18T11:11:01Z；SHA-256：5f1503ae26a328a37c4d3f67d1b73b0d64e3dd80534eed4604a8b65944bcd6dc）
- https://datasets-server.huggingface.co/size?dataset=SWE-bench/SWE-bench_Multimodal（获取于 2026-10-18T11:11:05Z；SHA-256：8347894b2ea01e61e4d74fbbeaeacd7809ae0bef9beabdb74c16636cfbd9a3fc）
