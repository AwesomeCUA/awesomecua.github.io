# FedMABench data partitions

FedMABench 联邦训练数据将 AndroidControl 与 AitW 移动端智能体任务记录按应用、类别及步骤或任务轮次差异划分为六组 JSONL 分区；截图须从原始数据重建。

- 目录页面：https://awesomecua.com/zh/resources/url-86b3c2ee65911daf84a8/
- English：https://awesomecua.com/resources/url-86b3c2ee65911daf84a8/index.md
- 原始来源：https://huggingface.co/datasets/wwh0411/FedMABench
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：手机操作、模仿学习
- 证据核查日期：2026-10-18T16:06:17Z
- ID：url:86b3c2ee65911daf84a8

## 范围记录

The Hub manifest at revision 4596a060 holds 41 JSONL partition files in six folders (Basic-AC 15, Category-Level 7, App-Level 5, Basic-AitW 5, Step-Episode 5, ScaleApp 4), plus split JSON files, an overview PDF and .DS_Store files; three folder names end with a trailing space. Inspected records are episode-level, with an instruction, step sub-instructions, original and converted actions, and image paths on the authors' machine. The FedMABench README says unpacked screenshots are not distributed and gives scripts to rebuild them from AndroidControl and AitW. Neither the card nor the Hub metadata declares a license, so the data license stays unknown. Partitions overlap; these counts are reported separately.

- 完整记录 JSON：https://awesomecua.com/resources/url-86b3c2ee65911daf84a8/record.json

## 结构化规格

- 格式：JSONL, JSON
- 模态：text instructions, actions, screenshot paths (images not included)
- 数据划分：federated training partitions, validation sets
- 监督信号：episode instructions, step sub-instructions, action sequences

### 数量记录

- 6 个数据集系列 — FedMABench data release（来源报告；来源：https://huggingface.co/datasets/wwh0411/FedMABench/raw/4596a0608a24dddc3f6ba96fb326e915d9632f0b/README.md）
- > 30 个子集 — FedMABench data release（来源报告；来源：https://huggingface.co/datasets/wwh0411/FedMABench/raw/4596a0608a24dddc3f6ba96fb326e915d9632f0b/README.md）
- > 800 个应用 — apps across five categories（来源报告；来源：https://huggingface.co/datasets/wwh0411/FedMABench/raw/4596a0608a24dddc3f6ba96fb326e915d9632f0b/README.md）
- 41 个 JSONL 分区文件 — Hub manifest at revision 4596a060（计算得出）（来源：https://huggingface.co/api/datasets/wwh0411/FedMABench/revision/4596a0608a24dddc3f6ba96fb326e915d9632f0b）

A partition file, a task, an episode and a client count are different units. Screenshots are external dependencies that users rebuild from AndroidControl and AitW.

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/wwh0411/FedMABench/raw/4596a0608a24dddc3f6ba96fb326e915d9632f0b/README.md（获取于 2026-10-18T16:06:17Z；SHA-256：2874269995d8c9f5dabe266433ecf724bf54c27af599d899f3f0090b8ee37cdc）
- https://huggingface.co/api/datasets/wwh0411/FedMABench/revision/4596a0608a24dddc3f6ba96fb326e915d9632f0b（获取于 2026-10-18T16:05:47Z；SHA-256：e3511f0f47d9a40da0ead5ce2eb49f590c010ed6199be0fe052a852e0fc83edf）
- https://raw.githubusercontent.com/wwh0411/FedMABench/417d8b0006830f423c7d07c213fc57277d75d966/README.md（获取于 2026-10-18T16:05:47Z；SHA-256：b49e2b419918078ef9c68f3c9becc6c13d8fe530c165a36bdd61e370746eeea8）
