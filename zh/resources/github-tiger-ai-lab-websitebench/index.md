# WebsiteBench

网站重建基准：智能体通过浏览器探索生产级网站，重建全栈版本，并在 70 项任务中通过隐藏的功能与视觉测试用例评分。

- 目录页面：https://awesomecua.com/zh/resources/github-tiger-ai-lab-websitebench/
- English：https://awesomecua.com/resources/github-tiger-ai-lab-websitebench/index.md
- 原始来源：https://github.com/TIGER-AI-Lab/WebsiteBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、长任务、界面设计
- 证据核查日期：2026-11-06T06:21:48Z
- ID：github:tiger-ai-lab/websitebench

## 范围记录

Read at commit 78f5558e. The README and docs/tasks.md were reviewed; the 70 tasks and 46,916 hidden cases were checked by summing the docs/tasks.md table. The README's paper badge has no link, so no paper relation is recorded. Apache-2.0 is the README's statement for benchmark code, task definitions and verifier. Nothing was installed or run.

- 完整记录 JSON：https://awesomecua.com/resources/github-tiger-ai-lab-websitebench/record.json

## 结构化规格

- 动作 / 输出：harness-defined browser actions through the task's local browser service
- 评测方式：Hidden test cases per task. A case passes when its functional checks pass and every visual checkpoint's flat-baseline-normalized RGB SSIM reaches 0.99. A task's reward is passed cases divided by cases, weighted equally.
- 侧重：full-stack website reconstruction from browser exploration, without the source code, visual appearance and functional behavior of the rebuilt site
- 观测：未记录
- 任务设置：interactive

### 数量记录

- 70 tasks — released tasks（来源报告；来源：https://raw.githubusercontent.com/TIGER-AI-Lab/WebsiteBench/78f5558e8197bb91b3bab63428c12b92060ddc6f/docs/tasks.md）
- 46,916 test cases — hidden test cases summed over the docs/tasks.md table（计算得出；来源：https://raw.githubusercontent.com/TIGER-AI-Lab/WebsiteBench/78f5558e8197bb91b3bab63428c12b92060ddc6f/docs/tasks.md）

Agents run through selectable Harbor agents, so observations and actions depend on the agent. Each task requests 8 CPUs, 8 GiB of memory and 20 GiB of disk per environment, with up to 16 hours for the agent.

## 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/TIGER-AI-Lab/WebsiteBench/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/TIGER-AI-Lab/WebsiteBench/78f5558e8197bb91b3bab63428c12b92060ddc6f/README.md（获取于 2026-11-06T06:21:48Z；SHA-256：c79cb821975c34552a46f01349edd0869c2f20c9a85d4b7811155d3fb7f7f0b2）
- https://raw.githubusercontent.com/TIGER-AI-Lab/WebsiteBench/78f5558e8197bb91b3bab63428c12b92060ddc6f/docs/tasks.md（获取于 2026-11-06T06:21:44Z；SHA-256：d98bd00fb45abc63df0fddd6d9f9f5e669396cd53c157e5e06d6de9d103adf09）
- https://raw.githubusercontent.com/TIGER-AI-Lab/WebsiteBench/HEAD/LICENSE（获取于 2026-11-06T06:22:02Z；SHA-256：cda5b289b68650d0643c0ded2d43dc797cb7777c4d943f2b03067250de6d3c26）
