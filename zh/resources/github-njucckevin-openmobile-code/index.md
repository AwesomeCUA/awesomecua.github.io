---
title: "OpenMobile code · 框架 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-njucckevin-openmobile-code/
updated: 2026-10-19
type: framework
lang: zh-CN
---

# OpenMobile code

面向 AndroidWorld 的 OpenMobile 流程：随机游走探索、基于记忆合成任务指令、学习者与专家策略切换采样、转换为 LLaMA-Factory SFT 数据及 AndroidWorld 评估。

- 目录页面：https://awesomecua.com/zh/resources/github-njucckevin-openmobile-code/
- English：https://awesomecua.com/resources/github-njucckevin-openmobile-code/index.md
- 原始来源：https://github.com/njucckevin/OpenMobile-Code
- 类型：框架
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：数据生成、手机操作、模仿学习
- 证据核查日期：2026-10-19T06:53:33Z
- ID：github:njucckevin/openmobile-code

## 范围记录

Official code of the OpenMobile paper (COLM 2026 per the README). AndroidWorld/ holds a modified AndroidWorld copy with exploration (random_walk_aw.py), rollout (run_diy.py), post-processing and evaluation scripts; task_synthesis/ builds screen context and environment memory and generates and judges instructions with a strong multimodal model; LlamaFactory/ registers the four released data splits and gives Qwen3-VL and Qwen3.5 SFT configs. The tree also contains an Android-Lab folder. The Qwen3VL agent in AndroidWorld/android_world/agents/seeact_v.py sends recent plain screenshots to an OpenAI-compatible endpoint and executes the returned mobile_use tool calls; UI-element metadata is saved for post-processing only. The policy-switching mode lets a strong model monitor a weaker actor and take over. The README's AndroidWorld success rates include Qwen3.5-9B results it identifies as unreproducible under vLLM.

- 完整记录 JSON：https://awesomecua.com/resources/github-njucckevin-openmobile-code/record.json

## 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/njucckevin/OpenMobile-Code/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/njucckevin/OpenMobile-Code/faca68f386aff7277cdf494c84693c51090229c6/README.md（获取于 2026-10-19T06:53:33Z；SHA-256：8594e32aab90e0fdbaf436997e4082884423b6d3298f46247dcf0820e0499080）
- https://api.github.com/repos/njucckevin/OpenMobile-Code/git/trees/faca68f386aff7277cdf494c84693c51090229c6?recursive=1（获取于 2026-10-19T06:53:35Z；SHA-256：eb6fdd1db8dc4497999545d3f2cccdc8fe76a4adb2fd645801d0c15a7600b7fb）
- https://raw.githubusercontent.com/njucckevin/OpenMobile-Code/faca68f386aff7277cdf494c84693c51090229c6/AndroidWorld/android_world/agents/seeact_v.py（获取于 2026-10-19T06:53:36Z；SHA-256：93d1727d85392961feeb885c55d3d6834d8ff9f7085c7a54754cff126feee0fd）
- https://raw.githubusercontent.com/njucckevin/OpenMobile-Code/faca68f386aff7277cdf494c84693c51090229c6/LlamaFactory/dataset_info.json（获取于 2026-10-19T06:53:36Z；SHA-256：1c915333e2d61d34742eb6f669ca0a3721f7566ce79a2eecdb9706845bd53138）
- https://raw.githubusercontent.com/njucckevin/OpenMobile-Code/faca68f386aff7277cdf494c84693c51090229c6/LICENSE（获取于 2026-10-19T06:53:35Z；SHA-256：b09fcaf4fbc265223c2479c410beef2b98c5e687c78ecedf3452aa12ffc465f1）
- https://raw.githubusercontent.com/njucckevin/OpenMobile-Code/HEAD/LICENSE（获取于 2026-10-19T06:54:58Z；SHA-256：b09fcaf4fbc265223c2479c410beef2b98c5e687c78ecedf3452aa12ffc465f1）
