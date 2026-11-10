# OpenMobile-Data-v2

来自仿真器和模拟器轨迹的移动端智能体监督数据，另含用于强化学习、带有初始状态和成功判定条件的可执行任务。

- 目录页面：https://awesomecua.com/zh/resources/url-546e6c95825d1318c98d/
- English：https://awesomecua.com/resources/url-546e6c95825d1318c98d/index.md
- 原始来源：https://huggingface.co/datasets/OpenMobile-2/OpenMobile-Data-v2
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android、网页
- 主题：手机操作、数据生成、强化学习、工具集成
- 证据核查日期：2026-10-17T01:48:51Z
- ID：url:546e6c95825d1318c98d

## 范围记录

The reviewed card contains no explicit license declaration, so data-license status remains unknown. The repository code license is not inherited. The current code README points to the v2 dataset.

- 完整记录 JSON：https://awesomecua.com/resources/url-546e6c95825d1318c98d/record.json

## 结构化规格

- 格式：JSON, JSONL, PNG
- 模态：screenshots, text, tool calls
- 数据划分：sft/train, rl/train
- 监督信号：next-action supervision, verifiable task outcomes

### 数量记录

- 11,643 条轨迹 — SFT collection（来源报告；来源：https://huggingface.co/datasets/OpenMobile-2/OpenMobile-Data-v2/raw/main/README.md）
- 118,582 个决策步骤 — SFT collection（来源报告；来源：https://huggingface.co/datasets/OpenMobile-2/OpenMobile-Data-v2/raw/main/README.md）
- 2,475 个可执行任务 — RL collection（来源报告；来源：https://huggingface.co/datasets/OpenMobile-2/OpenMobile-Data-v2/raw/main/README.md）

These are publisher-reported totals at three distinct grains. Earlier screenshots may be collapsed; each SFT example keeps at most three images. The card and repository disagree on the singular/plural RL filename, so consumers should inspect the actual file manifest.

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/OpenMobile-2/OpenMobile-Data-v2/raw/main/README.md（获取于 2026-10-17T01:48:51Z；SHA-256：abacf9a10759a9e7a8eeec5a266c96ed83742bd9296a19be95d09c9717e18b7c）
- https://raw.githubusercontent.com/OpenMobile2/OpenMobile2-Code/HEAD/README.md（获取于 2026-10-17T01:48:10Z；SHA-256：485279038266d9454df75e27a80a0a0d71c24e90700126d2dcfa0da921b1273d）
- https://huggingface.co/api/datasets/OpenMobile-2/OpenMobile-Data（获取于 2026-10-17T19:15:18Z；SHA-256：14b1211ed709147f4022f311c17303ca70faaffa22be143617eb431d966eec1a）
- https://huggingface.co/api/datasets/OpenMobile-2/OpenMobile-Data-v2（获取于 2026-10-17T19:15:20Z；SHA-256：14b1211ed709147f4022f311c17303ca70faaffa22be143617eb431d966eec1a）
