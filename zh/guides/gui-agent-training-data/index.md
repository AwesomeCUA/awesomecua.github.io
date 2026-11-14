---
title: "在哪里找到 GUI 智能体的训练数据 | AwesomeCUA"
url: https://awesomecua.com/zh/guides/gui-agent-training-data/
updated: 2026-11-14
type: guide
lang: zh-CN
---

# 在哪里找到 GUI 智能体的训练数据

先确定模型需要哪种监督方式：屏幕理解、元素定位、单步动作，还是完整的交互轨迹。然后在下载前核对平台、标注格式、数据划分和许可证。

## 哪些数据类型有用？

- 屏幕理解：截图配以描述、问题或结构标注。
- 界面定位：指令和屏幕配以目标元素或位置。
- 动作预测：观察和指令配以下一步动作。
- 轨迹：由观察和动作组成的序列，展示任务如何一步步完成。

这些监督方式服务于不同的训练目标。任务覆盖范围取决于数据集所包含的演示。

## 有哪些具体的起点？

| 资源 | 需要检查的内容 |
| --- | --- |
| [Android in the Wild](https://github.com/google-research/google-research/tree/master/android_in_the_wild) | 包含屏幕、指令和动作的 Android 任务演示；注意区分回合（episode）与单步动作样本。 |
| [AndroidControl](https://github.com/google-research/google-research/tree/master/android_control) | 高层任务目标、分步指令、截图、无障碍树和动作标注。 |
| [AgentNet](https://huggingface.co/datasets/xlangai/AgentNet) | 与 [OpenCUA](https://arxiv.org/abs/2508.09123) 研究体系配套的计算机使用演示数据。 |
| [OS-Atlas data](https://huggingface.co/datasets/OS-Copilot/OS-Atlas-data) | GUI 定位数据，以及发布方关于访问方式和许可证的声明。 |
| [Mind2Web](https://github.com/OSU-NLP-Group/Mind2Web) | Web 任务演示，以及跨网站、跨领域的泛化数据划分。 |

[对比已审阅的数据集格式、计数单位与数据划分](https://awesomecua.com/zh/compare/datasets/)。

## 可以用评测基准的样本做训练吗？

先查看样本所属的数据划分和评测协议。用衡量泛化能力的样本做训练，可能让你原本想做的比较失去意义。保留各数据划分的定义，记录所有重叠情况和过滤决策，并按所属划分的用途使用可下载的任务。

## 代码、数据和模型权重的许可证如何核查？

代码、数据集和模型权重可能采用不同的许可证分发。请查看当前的数据集卡、原始采集条款、访问限制以及所有上游组件。AwesomeCUA 分别记录这些声明，未知项留空。

## 如何比较数据集规模？

明确计数单位：任务、回合、动作、截图、指令和 UI 元素是不同的量。托管平台给出的规模分类可能按打包文件计数，与语义样本数不同。比较时应选用与训练目标相匹配的量。

继续浏览[已审阅的数据集目录](https://awesomecua.com/zh/categories/dataset/)，或在[可检索的数据集列表](https://awesomecua.com/?kind=dataset#catalog)中搜索。通过[元数据导出](https://awesomecua.com/zh/data/)，可以用程序查看各资源记录的来源和许可证。

编辑更新：2026-10-16。
