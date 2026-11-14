---
title: "什么是计算机使用智能体？ | AwesomeCUA"
url: https://awesomecua.com/zh/guides/what-are-computer-use-agents/
updated: 2026-11-14
type: guide
lang: zh-CN
---

# 什么是计算机使用智能体？

计算机使用智能体是一类 AI 系统：它观察软件界面，决定下一步操作并执行，再检查执行后的状态，逐步完成用户的目标。所操作的界面可以是浏览器、桌面应用或移动设备。

有些系统主要通过截图、点击和键盘输入来操作，另一些系统则把图形界面交互与代码执行、工具调用结合起来。这是两种不同的执行设计，应分别评估。可参阅 [UI-TARS](https://arxiv.org/abs/2501.12326) 和 [OpenGCUA](https://arxiv.org/abs/2610.22200) 的原始论述。

## 计算机使用智能体如何工作？

1. 观察：获取截图、页面结构、无障碍信息或其他可读取的状态。
1. 规划与定位：确定有用的下一步，并找到能执行这一步的界面元素或工具。
1. 行动：在系统允许的界面范围内点击、输入、滚动、调用工具或执行代码。
1. 检查：查看新的状态，判断进展，然后决定重试、重新规划、停止或请求帮助。

这是一种实用的分解方式。[Agent S](https://arxiv.org/abs/2410.08164) 就是一个例子，它把规划、检索到的经验和计算机交互接口结合在一起。

## GUI 定位与任务完成有什么区别？

界面定位考察模型能否在屏幕上找到正确的目标。任务完成还要求模型选对操作、处理界面状态的切换、跟踪进度并验证最终结果。要完成一个较长的工作流，仅有高定位分数还不够。

[ScreenSpot-Pro](https://arxiv.org/abs/2504.07981) 评测专业软件界面中的定位能力，[OSWorld](https://arxiv.org/abs/2404.07972) 则在真实计算机环境中评测任务完成情况。请根据要衡量的能力选择相应的评测基准。

## 应该从哪些资源入手？

- 桌面评测：[评测基准](https://awesomecua.com/zh/categories/benchmark/)与 OSWorld 论文。
- 模型行为与感知：[GUI 模型系列与模型权重版本](https://awesomecua.com/zh/categories/model/)。
- 训练：[训练数据与监督方式](https://awesomecua.com/zh/guides/gui-agent-training-data/)。
- 部署：[框架](https://awesomecua.com/zh/categories/framework/)与[执行环境](https://awesomecua.com/zh/categories/infrastructure/)。
- 文献：[已审阅的论文与综述](https://awesomecua.com/zh/papers/)。

## 如何理解本目录中的记录？

一个代码仓库、一篇论文、一个数据集和一个模型权重版本，可能描述的是同一个项目中相互关联的部分。[收录方法](https://awesomecua.com/zh/about/)说明了各条记录的审阅方式。

编辑更新：2026-10-16。本指南综合了所链接的一手研究。
