---
title: "OSWorld 2.0 task classes · 数据集 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-1c4a0389ace7c5cb8a4b/
updated: 2026-10-18
type: dataset
lang: zh-CN
---

# OSWorld 2.0 task classes

OSWorld 2.0 基准的受限 Hub 发布版，包含 Python 任务类，其中的任务设置与评估逻辑未放入公开代码，以减少泄漏，并按基准版本固定。

- 目录页面：https://awesomecua.com/zh/resources/url-1c4a0389ace7c5cb8a4b/
- English：https://awesomecua.com/resources/url-1c4a0389ace7c5cb8a4b/index.md
- 原始来源：https://huggingface.co/datasets/xlangai/osworld_v2_tasks
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux
- 主题：评测、长任务
- 证据核查日期：2026-10-18T11:47:41Z
- ID：url:1c4a0389ace7c5cb8a4b

## 范围记录

The Hub API at revision 0a1aadad reports gated 'auto' (access is approved automatically after a logged-in request) and 147 files: 108 task_*.py classes, 34 task implementation notes, a task-hash manifest and the card. The card and files sit behind the gate; the description comes from the OSWorld-V2 README, which links this dataset as its data and downloads it into evaluation_examples/task_class. The README pins task, asset and website snapshots per benchmark release (osworld-v2.1 recommended, plus osworld-v2-2026.08.08 and osworld-v2-2026.06.24); main-branch file counts are distinct from release task counts. Task assets are in the separate gated xlangai/osworld_v2_assets_gated dataset and anonymous runtime assets in xlangai/osworld_v2_assets; neither is covered here. The code repository github.com/xlang-ai/OSWorld-V2 has no active catalog record, so no component relation is recorded. The card metadata declares Apache-2.0.

- 完整记录 JSON：https://awesomecua.com/resources/url-1c4a0389ace7c5cb8a4b/record.json

## 结构化规格

- 格式：Python, Markdown, JSON manifest
- 模态：Python task classes, implementation notes
- 数据划分：未记录
- 监督信号：task setup and evaluator code

### 数量记录

- 108 个任务类文件 — task_*.py on the main branch at revision 0a1aadad（计算得出）（来源：https://huggingface.co/api/datasets/xlangai/osworld_v2_tasks）
- 34 个实现说明文件 — implementation_notes/task_*.md on the main branch at revision 0a1aadad（计算得出）（来源：https://huggingface.co/api/datasets/xlangai/osworld_v2_tasks）

Counts are files in the public main-branch manifest. Benchmark releases are pinned to their own tags; these are main-branch counts.

## 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/xlangai/osworld_v2_tasks
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/api/datasets/xlangai/osworld_v2_tasks（获取于 2026-10-18T11:47:41Z；SHA-256：b9ef429ad3f9ef51702093db5bc1cb4e53d6ed5624cd2003162c4fedb3855c87）
- https://raw.githubusercontent.com/xlang-ai/OSWorld-V2/d9953673daf55381237e058fd9388cc2d74c5538/README.md（获取于 2026-10-18T11:47:41Z；SHA-256：0d1d3e91e8786720a167b8bc26a41bd27832eefae652ab1c166193073e99b2b4）
- https://huggingface.co/api/datasets/xlangai/osworld_v2_tasks（获取于 2026-10-18T11:47:41Z；SHA-256：b9ef429ad3f9ef51702093db5bc1cb4e53d6ed5624cd2003162c4fedb3855c87）
