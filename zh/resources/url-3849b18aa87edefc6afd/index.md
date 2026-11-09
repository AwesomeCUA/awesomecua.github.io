# OpenMobile-Data

OpenMobile 合成的 Android 智能体数据，包括由 AndroidWorld 运行轨迹生成的四个 LLaMA-Factory SFT 划分文件，以及原始轨迹和截图归档。

- 目录页面：https://awesomecua.com/zh/resources/url-3849b18aa87edefc6afd/
- English：https://awesomecua.com/resources/url-3849b18aa87edefc6afd/index.md
- 原始来源：https://huggingface.co/datasets/cckevinn/OpenMobile-Data
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：数据生成、手机操作、模仿学习
- 证据核查日期：2026-10-19T06:53:38Z
- ID：url:3849b18aa87edefc6afd

## 范围记录

The short card says the four JSON files are LLaMA-Factory training files and raw_dumps.tar.gz holds the original rollout trajectories with the screenshots the training files need. The OpenMobile code README registers the files as openmobile_split1 to openmobile_split4 in ShareGPT format and gives a converter to the Qwen3.5 format. No license is declared on the card.

- 完整记录 JSON：https://awesomecua.com/resources/url-3849b18aa87edefc6afd/record.json

## 结构化规格

- 格式：LLaMA-Factory ShareGPT JSON, tar.gz archive of raw rollouts
- 模态：screenshots, instructions, step histories, reasoning text, actions, target element bounding boxes
- 数据划分：split1, split2, split3, split4
- 监督信号：synthesized task instructions, agent rollout trajectories with learner/expert policy switching

### 数量记录

- ≈ 2,800 synthesized instructions — OpenMobile dataset (project page)（来源报告；来源：https://njucckevin.github.io/openmobile/）
- ≈ 34,000 action steps — OpenMobile dataset (project page)（来源报告；来源：https://njucckevin.github.io/openmobile/）
- 20 Android apps — OpenMobile dataset (project page)（来源报告；来源：https://njucckevin.github.io/openmobile/）

Instruction, step and app counts are the project page's headline figures. Streaming the four split files at revision 8ed12d1 gave 7,393, 6,767, 9,345 and 3,855 step-level samples (27,360 in total), each with one screenshot path into raw_dumps, a system prompt with the mobile_use tool, the task and step history, an assistant thought with a tool call, and a target bounding box; the files exceed the receipt budget, leaving these computed counts outside count observations. Steps in the files and the page's action steps are not reconciled. The four split names are training files.

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 数据审核：The dataset card declares no license; the code repository's Apache-2.0 license is not transferred to the data, and the code README says other released artifacts may have their own terms.
  来源：https://huggingface.co/datasets/cckevinn/OpenMobile-Data/raw/8ed12d15763057f8e8d40134cfddfcc756ff8a7a/README.md

## 一手证据

- https://huggingface.co/datasets/cckevinn/OpenMobile-Data/raw/8ed12d15763057f8e8d40134cfddfcc756ff8a7a/README.md（获取于 2026-10-19T06:53:38Z；SHA-256：5a119d88171e645b3dccad526ed25e75d4e28e4e5c101f89daa1c6697b92d601）
- https://huggingface.co/api/datasets/cckevinn/OpenMobile-Data/revision/8ed12d15763057f8e8d40134cfddfcc756ff8a7a（获取于 2026-10-19T06:53:39Z；SHA-256：054432be78024ecf09b1d8f022c11b82addf7ee5127a8f355d9a6eb18b212355）
- https://njucckevin.github.io/openmobile/（获取于 2026-10-19T06:53:36Z；SHA-256：b37f01ef9fcffa0eef1f6c5c317a333e6f14210dfda54843fdaba2f88331b864）
- https://raw.githubusercontent.com/njucckevin/OpenMobile-Code/faca68f386aff7277cdf494c84693c51090229c6/README.md（获取于 2026-10-19T06:53:33Z；SHA-256：8594e32aab90e0fdbaf436997e4082884423b6d3298f46247dcf0820e0499080）
