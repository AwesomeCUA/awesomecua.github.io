---
title: "如何选择 GUI 智能体评测基准 | AwesomeCUA"
url: https://awesomecua.com/zh/guides/gui-agent-benchmarks/
updated: 2026-11-11
type: guide
lang: zh-CN
---

# 如何选择 GUI 智能体评测基准

根据需要衡量的能力和环境来选择评测基准。截图中的目标定位、真实网站导航、Android 工作流和跨应用桌面任务，回答的是不同的问题。

| 评测基准 | 环境 | 主要关注点 |
| --- | --- | --- |
| [OSWorld](https://arxiv.org/abs/2404.07972) | 真实桌面环境 | 通过执行结果以及应用和系统状态来检查任务结果。 |
| [WebArena](https://arxiv.org/abs/2307.13854) | 可复现的网站 | Web 任务的功能性完成情况。 |
| [AndroidWorld](https://arxiv.org/abs/2405.14573) | Android 应用 | 参数化的交互任务，带有初始化步骤和成功判定。 |
| [ScreenSpot-Pro](https://arxiv.org/abs/2504.07981) | 专业软件界面截图 | 精确定位指定的 GUI 目标。 |

[对比已审阅的评测基准协议、任务构成与交互接口](https://awesomecua.com/zh/compare/benchmarks/)。

## 哪个评测基准最好？

答案取决于部署目标。做桌面助手，先从桌面任务执行入手；做浏览器智能体，使用 Web 任务并匹配相应的网站条件；做移动端控制，就在移动环境中测试；做定位模型，先单独评测目标定位，再解读端到端的任务结果。

## 报告分数时需要记录哪些信息？

- 评测基准的版本或 commit，以及所用的任务划分。
- 确切的模型权重版本、智能体运行框架、工具和观测接口。
- 动作或步数预算，以及是否有重试或多次尝试。
- 评估器、成功判定标准和汇总方法。
- 环境配置、运行日期，以及网站或应用是否发生过变化。
- 结果是独立复现的，还是由发布方报告的。

缺少这些信息，看似相近的百分比可能来自不同的实验。静态定位准确率与任务完成率应分开排名。

## 如何检查可复现性？

按照评测基准当前的官方配置和评测说明操作，并与论文所用的版本对照。当前的 [OSWorld 仓库](https://github.com/xlang-ai/OSWorld)、[WebArena 仓库](https://github.com/web-arena-x/webarena)和 [AndroidWorld 仓库](https://github.com/google-research/android_world)可作为起点。当你的运行配置和结果都与报告一致时，复现即告成功。

## 在哪里可以找到更多评测基准？

浏览[已审阅的评测基准目录](https://awesomecua.com/zh/categories/benchmark/)，或使用[交互式评测基准筛选](https://awesomecua.com/?kind=benchmark#catalog)。每个资源都列出了一手证据和已记录的规格信息。

编辑更新：2026-10-16。
