# Smol2Operator

Hugging Face 方案将 Aguvis GUI 数据统一为一种操作空间，再分两阶段微调 SmolVLM2-2.2B：先学习截图元素定位，再生成智能体 GUI 操作代码。

- 目录页面：https://awesomecua.com/zh/resources/github-huggingface-smol2operator/
- English：https://awesomecua.com/resources/github-huggingface-smol2operator/index.md
- 原始来源：https://github.com/huggingface/smol2operator
- 类型：框架
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面、Android
- 主题：GUI 定位、模仿学习、数据生成、动作预测
- 证据核查日期：2026-10-18T11:11:16Z
- ID：github:huggingface/smol2operator

## 范围记录

The README is the project write-up. The inspected tree contains recipe.ipynb, action-conversion and Aguvis preprocessing code, a function parser, an action-space converter, a collator and evaluation prompts. The README names derived datasets (smolagents/aguvis-stage-1 and smolagents/aguvis-stage-2), the SmolVLM2-2.2B-Instruct-Agentic-GUI checkpoint and a demo Space as separate Hub assets outside this record. The uses relations record that the recipe transforms the xlangai Aguvis stage 1 and stage 2 releases. ScreenSpot-v2 results are publisher-reported. The repository has no license file, so code permissions are unknown.

- 完整记录 JSON：https://awesomecua.com/resources/github-huggingface-smol2operator/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/huggingface/smol2operator/HEAD/README.md（获取于 2026-10-18T11:11:16Z；SHA-256：d0190080edc5e44afad1a655c2e575c6071afdbab181a75c546e7210d17c4f44）
- https://api.github.com/repos/huggingface/smol2operator（获取于 2026-10-18T11:11:35Z；SHA-256：f9e05da9ff37a969dcf83993af2141e8ef0738ad0c89340660f20f806907a149）
- https://api.github.com/repos/huggingface/smol2operator/git/trees/main?recursive=1（获取于 2026-10-18T11:11:36Z；SHA-256：537f734934d9dbc7eea363326a81558c0fda99d8b292d70219b124b2e5fb8ac9）
