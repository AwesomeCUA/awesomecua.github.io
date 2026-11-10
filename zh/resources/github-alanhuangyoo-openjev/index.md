---
title: "OpenJev · 模型 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-alanhuangyoo-openjev/
updated: 2026-10-18
type: model
lang: zh-CN
---

# OpenJev

1.7B、4B 和 8B 决策模型可单次回答类型化问题并给出校准概率；使用浏览器智能体步骤和通用决策数据训练，用于选择网页智能体的下一步操作及元素。

- 目录页面：https://awesomecua.com/zh/resources/github-alanhuangyoo-openjev/
- English：https://awesomecua.com/resources/github-alanhuangyoo-openjev/index.md
- 原始来源：https://github.com/alanhuangyoo/OpenJev
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：动作预测、网页导航、效率
- 证据核查日期：2026-10-18T16:16:18Z
- ID：github:alanhuangyoo/openjev

## 范围记录

Models and code for an open replacement of a hosted System One decision API. A Qwen3 or Qwen3.5 backbone without its vocabulary head scores each option with a pointer head, so one pass answers every question in a request; a local server exposes POST /v1/systemone. Browser steps arrive as page text, numbered elements and recent actions, and the model chooses an operation (click, type, DONE and others) and a target element. The repository holds the wev package (data conversion for Mind2Web, NNetNav and WebChain, training, calibration, export, serving), teacher-collection scripts, the OpenJev-Bench browser-lane client (2,346 frozen steps stored in the Hub dataset alanhuangya/OpenJev-Data), locked results and the paper source; the paper is a Zenodo deposit (doi 10.5281/zenodo.22941164) with no catalog record. The models also answer general decisions such as triage and routing. Results are publisher-reported, and live-website numbers use an LLM judge.

- 完整记录 JSON：https://awesomecua.com/resources/github-alanhuangyoo-openjev/record.json

## 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/alanhuangyoo/OpenJev/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/alanhuangya/OpenJev-4B/raw/368713247ad2a50d56542b4d812823626eb504e7/README.md

- 权重审核：All three Hub model cards declare apache-2.0 (OpenJev-4B at 3687132, OpenJev-8B at 32bc7cb, OpenJev-1.7B at 7418ae8). This covers the released weights only; the README warns that parts of the training data are research-only or subject to a model provider's terms.
  来源：https://huggingface.co/alanhuangya/OpenJev-4B/raw/368713247ad2a50d56542b4d812823626eb504e7/README.md, https://huggingface.co/alanhuangya/OpenJev-8B/raw/32bc7cb98f8fc0c0b517d440d1b97de521eb3315/README.md, https://huggingface.co/alanhuangya/OpenJev-1.7B/raw/7418ae8b6e3b6a6507a8a58729ae491cd1c732d9/README.md

## 一手证据

- https://raw.githubusercontent.com/alanhuangyoo/OpenJev/HEAD/README.md（获取于 2026-10-18T16:16:18Z；SHA-256：c5dee060aab4f95fd80d8d3b463b336e67fbea6f42df31e6f334942335523ebe）
- https://raw.githubusercontent.com/alanhuangyoo/OpenJev/da6a68fb9195958cc0a6cdb7b35587acec436a65/wev/model.py（获取于 2026-10-18T16:15:40Z；SHA-256：f7e09479e92b5cc321adc2f6f5116b79cd99c3348fc2ffe55e32b6829c9d08d8）
- https://raw.githubusercontent.com/alanhuangyoo/OpenJev/da6a68fb9195958cc0a6cdb7b35587acec436a65/wev/serve.py（获取于 2026-10-18T16:15:40Z；SHA-256：43c32fdd4dc7f0ba95373efde8af01f294271c3375cf0b2a163f3c16fe1f3bf8）
- https://raw.githubusercontent.com/alanhuangyoo/OpenJev/da6a68fb9195958cc0a6cdb7b35587acec436a65/scripts/wev_bench.py（获取于 2026-10-18T16:15:41Z；SHA-256：3b1ad4252bca15a371971c966f2b6bf449cb84d5e17e9fa1e731126610fc319b）
- https://raw.githubusercontent.com/alanhuangyoo/OpenJev/da6a68fb9195958cc0a6cdb7b35587acec436a65/wev/mind2web.py（获取于 2026-10-18T16:15:41Z；SHA-256：80e3a7862829bee82d1af0db8acb17ac22afea5f348bf48dd49e8ad02f060f89）
- https://huggingface.co/alanhuangya/OpenJev-4B/raw/368713247ad2a50d56542b4d812823626eb504e7/README.md（获取于 2026-10-18T16:15:41Z；SHA-256：41e6569e5cb51644144ad39ee6d60915fabef9cc9e8fe04b66dff1f0aee27f44）
- https://huggingface.co/alanhuangya/OpenJev-8B/raw/32bc7cb98f8fc0c0b517d440d1b97de521eb3315/README.md（获取于 2026-10-18T16:15:41Z；SHA-256：d306d34c702cc349375f9052fd60a915392142476d944a27a463d478fe5f6fc7）
- https://huggingface.co/alanhuangya/OpenJev-1.7B/raw/7418ae8b6e3b6a6507a8a58729ae491cd1c732d9/README.md（获取于 2026-10-18T16:15:41Z；SHA-256：0744b90308c2aa923b80a697eabc36c78a44437ec350e225a881719a9d622f66）
- https://raw.githubusercontent.com/alanhuangyoo/OpenJev/HEAD/LICENSE（获取于 2026-10-18T16:16:36Z；SHA-256：6b08bb37982c233aa12bcbdf19106da12f3f4fcf800773ea42e28ebeddd34fb8）
