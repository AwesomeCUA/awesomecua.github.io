---
title: "OSWorld-Science task data · 数据集 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-263e82b29d4fca964463/
updated: 2026-10-18
type: dataset
lang: zh-CN
---

# OSWorld-Science task data

OSWorld-Science 在 Hub 上受访问控制的发布版，提供科学软件操作智能体所需的任务定义、预置输入、评分参考资料和预备好的 Ubuntu 虚拟机镜像。

- 目录页面：https://awesomecua.com/zh/resources/url-263e82b29d4fca964463/
- English：https://awesomecua.com/resources/url-263e82b29d4fca964463/index.md
- 原始来源：https://huggingface.co/datasets/SciAILab/OSWorld-Science-data
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux
- 主题：评测、科学工作流
- 证据核查日期：2026-10-18T12:33:40Z
- ID：url:263e82b29d4fca964463

## 范围记录

Access requires manual approval by the publisher; the record rests on the public Hub metadata and file list, the paper and the benchmark README. The paper says the release holds all question sets and images and carries a contamination watermark; the benchmark README says it includes answer keys. The Windows/ANSYS image is not part of the release. Hub metadata declares CC-BY-NC-4.0 for the data; bundled scientific software and third-party inputs keep their own terms.

- 完整记录 JSON：https://awesomecua.com/resources/url-263e82b29d4fca964463/record.json

## 结构化规格

- 格式：JSON, QCOW2, Python, CSV
- 模态：task instructions, input files, reference outputs, VM disk images
- 数据划分：未记录
- 监督信号：expert-defined task definitions, grader reference files

### 数量记录

- 153 个任务定义 JSON 文件 — <domain>/tasks/ at Hub revision 9b8de9ad (chem 44, biomed 34, physics 31, stat 20, eeg 10, econ 6, geoscience 6, linguistics 2)（计算得出）（来源：https://huggingface.co/api/datasets/SciAILab/OSWorld-Science-data/revision/9b8de9ad9325c87fbeba90e0676e8d640be70681）
- 115 个已翻译的任务文件 — ablation/ at Hub revision 9b8de9ad (23 each in es, fr, ja, th, zh)（计算得出）（来源：https://huggingface.co/api/datasets/SciAILab/OSWorld-Science-data/revision/9b8de9ad9325c87fbeba90e0676e8d640be70681）
- 11 个 QCOW2 VM 镜像 — files at Hub revision 9b8de9ad（计算得出）（来源：https://huggingface.co/api/datasets/SciAILab/OSWorld-Science-data/revision/9b8de9ad9325c87fbeba90e0676e8d640be70681）
- 2,759 个文件 — Hub repository at revision 9b8de9ad（计算得出）（来源：https://huggingface.co/api/datasets/SciAILab/OSWorld-Science-data/revision/9b8de9ad9325c87fbeba90e0676e8d640be70681）

All counts come from a script over the pinned Hub file list; no file was downloaded. The paper and README report 146 tasks in seven domains, while the listing has 153 task files in eight domain folders, including six econ tasks; a task file is a definition, while an agent run is a different unit. Task files, translated variants, images and files are different units and are counted separately.

## 许可证信息

- 代码：未记录
- 数据：cc-by-nc-4.0 — https://huggingface.co/datasets/SciAILab/OSWorld-Science-data
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/api/datasets/SciAILab/OSWorld-Science-data/revision/9b8de9ad9325c87fbeba90e0676e8d640be70681（获取于 2026-10-18T12:33:40Z；SHA-256：68262ed16b86bb34261d6be0051011ee459bade323689bb38703342148ccb28e）
- https://raw.githubusercontent.com/DiscoAILab/OSWorld-Science/HEAD/README.md（获取于 2026-10-18T12:32:26Z；SHA-256：5871a62e7dac017cbb16017bc28b956aa20058193aebced9505210f34fdc7057）
- https://arxiv.org/html/2609.39903v1（获取于 2026-10-18T12:32:28Z；SHA-256：b4878955429b6b8d177c7d18fde30004fafd1973dda36f7d0412fb61dd2b0178）
- https://huggingface.co/api/datasets/SciAILab/OSWorld-Science-data/revision/9b8de9ad9325c87fbeba90e0676e8d640be70681（获取于 2026-10-18T12:33:40Z；SHA-256：68262ed16b86bb34261d6be0051011ee459bade323689bb38703342148ccb28e）
