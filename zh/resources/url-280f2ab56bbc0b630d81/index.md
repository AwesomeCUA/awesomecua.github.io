---
title: "VideoAgentTrek-IDM-s1-7B · 模型 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-280f2ab56bbc0b630d81/
updated: 2026-11-10
type: model
lang: zh-CN
---

# VideoAgentTrek-IDM-s1-7B

VideoAgentTrek Video2Action 流水线中的关键帧检测模型，作为逆动力学的第一阶段，在录屏教程视频中找出 GUI 交互时刻，再由第二个模型标注具体动作。

- 目录页面：https://awesomecua.com/zh/resources/url-280f2ab56bbc0b630d81/
- English：https://awesomecua.com/resources/url-280f2ab56bbc0b630d81/index.md
- 原始来源：https://huggingface.co/xlangai/VideoAgentTrek-IDM-s1-7B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：视频、数据生成
- 证据核查日期：2026-11-10T03:01:02Z
- ID：url:280f2ab56bbc0b630d81

## 范围记录

Five safetensors shards of a Qwen2.5-VL checkpoint with tokenizer, processor and chat-template configs; the card declares Apache-2.0. The VideoAgentTrek video2action.py loads it through KEYFRAME_MODEL_PATH for stage 2 keyframe detection, with the IDM-s2 action identifier and an OpenAI-compatible API for validation and inner-monologue stages; a YOLO cursor detector filters videos beforehand.

- 完整记录 JSON：https://awesomecua.com/resources/url-280f2ab56bbc0b630d81/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/xlangai/VideoAgentTrek-IDM-s1-7B

## 一手证据

- https://huggingface.co/api/models/xlangai/VideoAgentTrek-IDM-s1-7B（获取于 2026-11-10T03:01:02Z；SHA-256：f1759369f0ad84a0d467489b442128ca169fd8339d4634f37c3d1c0612a6c671）
- https://huggingface.co/api/models/xlangai/VideoAgentTrek-IDM-s1-7B（获取于 2026-11-10T03:01:02Z；SHA-256：f1759369f0ad84a0d467489b442128ca169fd8339d4634f37c3d1c0612a6c671）
