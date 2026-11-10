---
title: "Sai OSWorld-V2 benchmark runs · 数据集 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-e0180b9651fec04d0308/
updated: 2026-10-18
type: dataset
lang: zh-CN
---

# Sai OSWorld-V2 benchmark runs

收录 Simular 的 Sai 计算机使用智能体两次完整的 108 任务 OSWorld-V2 运行证据：分数、逐步轨迹、消息记录、评估器和 API 日志及运行清单，不含截图。

- 目录页面：https://awesomecua.com/zh/resources/url-e0180b9651fec04d0308/
- English：https://awesomecua.com/resources/url-e0180b9651fec04d0308/index.md
- 原始来源：https://huggingface.co/datasets/simular-ai/sai-osworld-v2-benchmark-runs
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux
- 主题：评测、可观测性
- 证据核查日期：2026-10-18T12:27:42Z
- ID：url:e0180b9651fec04d0308

## 范围记录

The card reports run1 (2026-08-12) at a 0.7276 mean score with 28 perfect tasks and run2 (2026-08-20) at 0.7329 with 33, both 108/108 scored with anthropic/claude-opus-5 at max thinking, a 500-step limit and claude-sonnet-4-6 as evaluator and user simulator; these are publisher measurements. The run manifests record an Ubuntu 1920x1080 VM on AWS, screenshot observations, the pyautogui action space, benchmark release osworld-v2-2026.06.24 and a separate grounding model (simular-ui-venus-15-30b-a3b-rtx6000). Each run root's manifest describes its last partial invocation (a one-task backfill for run1, a three-task infrastructure rerun for run2). Superseded attempt directories are kept beside the canonical three-digit task directories. The card names a RUNS.md index that is absent at this revision. The Hub license is `other` with no license text.

- 完整记录 JSON：https://awesomecua.com/resources/url-e0180b9651fec04d0308/record.json

## 结构化规格

- 格式：JSON, JSONL, CSV, plain-text logs, Markdown
- 模态：action trajectories, agent messages and events, runtime and evaluator logs, scores
- 数据划分：未记录
- 监督信号：evaluator task scores, agent-generated trajectories

### 数量记录

- 2 次完整的基准测试运行（108 个任务） — Hub revision fb621da2（来源报告；来源：https://huggingface.co/datasets/simular-ai/sai-osworld-v2-benchmark-runs/raw/fb621da25cb55a45e19f4258eea4c4fd795c625a/README.md）
- 108 个含 traj.jsonl 的规范任务目录 — run1/ at Hub revision fb621da2（计算得出）（来源：https://huggingface.co/api/datasets/simular-ai/sai-osworld-v2-benchmark-runs/revision/fb621da25cb55a45e19f4258eea4c4fd795c625a）
- 108 个含 traj.jsonl 的规范任务目录 — run2/ at Hub revision fb621da2（计算得出）（来源：https://huggingface.co/api/datasets/simular-ai/sai-osworld-v2-benchmark-runs/revision/fb621da25cb55a45e19f4258eea4c4fd795c625a）
- 23 个已被取代的尝试目录 — run1/ at Hub revision fb621da2（计算得出）（来源：https://huggingface.co/api/datasets/simular-ai/sai-osworld-v2-benchmark-runs/revision/fb621da25cb55a45e19f4258eea4c4fd795c625a）
- 4 个已被取代的尝试目录 — run2/ at Hub revision fb621da2（计算得出）（来源：https://huggingface.co/api/datasets/simular-ai/sai-osworld-v2-benchmark-runs/revision/fb621da25cb55a45e19f4258eea4c4fd795c625a）

Counts come from a script over the pinned Hub file list: a canonical directory has a three-digit task name; suffixed names (_infra_, _hung_, _attempt1 and similar) are superseded attempts that the card keeps as evidence. Screenshots, observation images and recordings were removed by the publisher. Scores come from an LLM evaluator; the run manifests and score tables were read, leaving task files outside this inspection.

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 数据审核：The card metadata declares only `license: other`, and neither the card nor the file list at this revision contains license text, so no data grant is established. Agent outputs and logged third-party content keep their own terms.
  来源：https://huggingface.co/datasets/simular-ai/sai-osworld-v2-benchmark-runs/raw/fb621da25cb55a45e19f4258eea4c4fd795c625a/README.md

## 一手证据

- https://huggingface.co/datasets/simular-ai/sai-osworld-v2-benchmark-runs/raw/fb621da25cb55a45e19f4258eea4c4fd795c625a/README.md（获取于 2026-10-18T12:27:42Z；SHA-256：4538e115e893cdbc8f61446b4bd4a7e173fadb78eef5906e4d236f0a05399ce7）
- https://huggingface.co/api/datasets/simular-ai/sai-osworld-v2-benchmark-runs/revision/fb621da25cb55a45e19f4258eea4c4fd795c625a（获取于 2026-10-18T12:26:14Z；SHA-256：c71c46888e4f6723aa2f654e2f8256a64f11a56be166aaf05fce9fcd1c012e3d）
- https://huggingface.co/datasets/simular-ai/sai-osworld-v2-benchmark-runs/raw/fb621da25cb55a45e19f4258eea4c4fd795c625a/run1/run_manifest.json（获取于 2026-10-18T12:26:22Z；SHA-256：72f7d1c318890f190dd8279d8f6a34f2fb2694dd524335fd4b79b87eaafb4410）
- https://huggingface.co/datasets/simular-ai/sai-osworld-v2-benchmark-runs/raw/fb621da25cb55a45e19f4258eea4c4fd795c625a/run2/run_manifest.json（获取于 2026-10-18T12:26:22Z；SHA-256：2857dfa4d3c3da2058065df7cf476ec07fab866f07a09f8b256e1c19de59d58e）
- https://huggingface.co/datasets/simular-ai/sai-osworld-v2-benchmark-runs/raw/fb621da25cb55a45e19f4258eea4c4fd795c625a/README.md（获取于 2026-10-18T12:27:42Z；SHA-256：4538e115e893cdbc8f61446b4bd4a7e173fadb78eef5906e4d236f0a05399ce7）
