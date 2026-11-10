---
title: "WebVIA-Agent · 模型 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-62724cba1b5814215cf7/
updated: 2026-10-18
type: model
lang: zh-CN
---

# WebVIA-Agent

WebVIA 推出的基于 GLM-4.1V-9B 的网页探索智能体，读取页面截图和 DOM 树，选择点击、输入或选择操作，以遍历交互式 UI 状态，服务于 UI 到代码转换。

- 目录页面：https://awesomecua.com/zh/resources/url-62724cba1b5814215cf7/
- English：https://awesomecua.com/resources/url-62724cba1b5814215cf7/index.md
- 原始来源：https://huggingface.co/zai-org/WebVIA-Agent
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、数据生成、界面设计
- 证据核查日期：2026-10-18T12:16:11Z
- ID：url:62724cba1b5814215cf7

## 范围记录

In the linked code repository, the agent launcher sends the page's DOM tree with element IDs and a screenshot to a configurable OpenAI-compatible endpoint and parses click[id], enter[id][text] and select[id][text] actions from the reply, so this checkpoint is served separately. Hub API at revision d6ee0ce1 lists four BF16 safetensors shards (about 10.29B parameters) in the Glm4vForConditionalGeneration architecture; access is open. GitHub reports no license for the code repository. The card declares MIT for the checkpoint.

- 完整记录 JSON：https://awesomecua.com/resources/url-62724cba1b5814215cf7/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/zai-org/WebVIA-Agent/raw/d6ee0ce156bc194a4f9ddcd1c4827544321c9db2/README.md

## 一手证据

- https://huggingface.co/zai-org/WebVIA-Agent/raw/d6ee0ce156bc194a4f9ddcd1c4827544321c9db2/README.md（获取于 2026-10-18T12:16:11Z；SHA-256：1b2a79a5d45c3e3524b624e04dc3dce1a4d53d8bcd76da3151ba5a92ea9fba49）
- https://huggingface.co/api/models/zai-org/WebVIA-Agent/revision/d6ee0ce156bc194a4f9ddcd1c4827544321c9db2（获取于 2026-10-18T12:16:12Z；SHA-256：5d7f0dce7579dc1d4c6fe3a82568cec7187c8ef5ee70e27e1b8482ba574f246a）
- https://raw.githubusercontent.com/zheny2751-dotcom/WebVIA/1b228001e8b24f0cab8d9e00a9f6e7ae521d6c67/code/agent/start_agent.py（获取于 2026-10-18T12:16:12Z；SHA-256：79b219bd4a415a6bac297acf2aefb786d0789e8daad386c6ed6cf831be0a77a1）
- https://huggingface.co/zai-org/WebVIA-Agent/raw/d6ee0ce156bc194a4f9ddcd1c4827544321c9db2/README.md（获取于 2026-10-18T12:16:11Z；SHA-256：1b2a79a5d45c3e3524b624e04dc3dce1a4d53d8bcd76da3151ba5a92ea9fba49）
