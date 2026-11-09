# GUI-Libra 7B

GUI-Libra 检查点基于 Qwen2.5-VL-7B-Instruct 微调，约有 82.9 亿 BF16 参数，将截图、任务和操作历史转化为<think>推理块及带 point_2d 坐标的 JSON 操作。

- 目录页面：https://awesomecua.com/zh/resources/url-f52794224f9541fd9eb3/
- English：https://awesomecua.com/resources/url-f52794224f9541fd9eb3/index.md
- 原始来源：https://huggingface.co/GUI-Libra/GUI-Libra-7B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、Android
- 主题：GUI 定位、动作预测、网页导航、手机操作、强化学习
- 证据核查日期：2026-10-18T15:56:14Z
- ID：url:f52794224f9541fd9eb3

## 范围记录

The Hub manifest at revision 0355b647 lists 4 Safetensors shards with an index plus configuration and tokenizer files. The card's usage section serves the checkpoint through vLLM as an OpenAI-compatible endpoint and prompts it with a GUI action list (Click, Select, Write, KeyboardPress, Scroll). Its vllm serve command names GUI-Libra-4B, while its Python example names GUI-Libra-7B. The paper link and the web and Android evaluation targets come from the official GitHub README, which the card links. Apache-2.0 is the card's weight declaration; the code repository's license and the training data's terms are separate.

- 完整记录 JSON：https://awesomecua.com/resources/url-f52794224f9541fd9eb3/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：Apache-2.0 — https://huggingface.co/GUI-Libra/GUI-Libra-7B/raw/0355b647f41136c65bd6c7f6705fba8e5a2e250a/README.md

- 权重审核：Model-card metadata declaration (license: apache-2.0) for this checkpoint; the code repository's license and the training data's terms are separate.
  来源：https://huggingface.co/GUI-Libra/GUI-Libra-7B/raw/0355b647f41136c65bd6c7f6705fba8e5a2e250a/README.md

## 一手证据

- https://huggingface.co/GUI-Libra/GUI-Libra-7B/raw/0355b647f41136c65bd6c7f6705fba8e5a2e250a/README.md（获取于 2026-10-18T15:56:14Z；SHA-256：93e22f5ded472a60c66b812bd9a5c07ae93634c68195b4c9d36fca2dbc780f8d）
- https://huggingface.co/api/models/GUI-Libra/GUI-Libra-7B/revision/0355b647f41136c65bd6c7f6705fba8e5a2e250a（获取于 2026-10-18T15:55:30Z；SHA-256：3e6048b720e7dc0e10a88eb5b34804a8e063cfa255813281157bce9dbe7981fc）
- https://raw.githubusercontent.com/GUI-Libra/GUI-Libra/f3e9c78e5c6435d0fb39210191ce1ad284361120/README.md（获取于 2026-10-18T15:55:29Z；SHA-256：f34c5bcf454368db37dde4bb2229fd14ae5e4a118684c6d7fbb6a25f9f246911）
- https://huggingface.co/GUI-Libra/GUI-Libra-7B/raw/0355b647f41136c65bd6c7f6705fba8e5a2e250a/README.md（获取于 2026-10-18T15:56:14Z；SHA-256：93e22f5ded472a60c66b812bd9a5c07ae93634c68195b4c9d36fca2dbc780f8d）
