# GUI-Libra 3B

GUI-Libra 检查点基于 Qwen2.5-VL-3B-Instruct 微调，约有 40.7 亿 BF16 参数，将截图、任务和操作历史转化为<think>推理块及带 point_2d 坐标的 JSON 操作。

- 目录页面：https://awesomecua.com/zh/resources/url-ae8e3fa5a67a608804f8/
- English：https://awesomecua.com/resources/url-ae8e3fa5a67a608804f8/index.md
- 原始来源：https://huggingface.co/GUI-Libra/GUI-Libra-3B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、Android
- 主题：GUI 定位、动作预测、网页导航、手机操作、强化学习
- 证据核查日期：2026-10-18T15:56:14Z
- ID：url:ae8e3fa5a67a608804f8

## 范围记录

The Hub manifest at revision 98ec8af3 lists 2 Safetensors shards with an index plus configuration and tokenizer files. The card's usage section serves the checkpoint through vLLM as an OpenAI-compatible endpoint and prompts it with a GUI action list (Click, Select, Write, KeyboardPress, Scroll). Its vllm serve command names GUI-Libra-4B, while its Python example names GUI-Libra-3B. The paper link and the web and Android evaluation targets come from the official GitHub README, which the card links. Apache-2.0 is the card's weight declaration; the code repository's license and the training data's terms are separate.

- 完整记录 JSON：https://awesomecua.com/resources/url-ae8e3fa5a67a608804f8/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：Apache-2.0 — https://huggingface.co/GUI-Libra/GUI-Libra-3B/raw/98ec8af3939dbfa87e9e39082c7edbb1c1e7ee1f/README.md

- 权重审核：Model-card metadata declaration (license: apache-2.0) for this checkpoint; the code repository's license and the training data's terms are separate.
  来源：https://huggingface.co/GUI-Libra/GUI-Libra-3B/raw/98ec8af3939dbfa87e9e39082c7edbb1c1e7ee1f/README.md

## 一手证据

- https://huggingface.co/GUI-Libra/GUI-Libra-3B/raw/98ec8af3939dbfa87e9e39082c7edbb1c1e7ee1f/README.md（获取于 2026-10-18T15:56:14Z；SHA-256：e678c8bb953de37182a69d60aa8c8fd7c9dd273fcd9cee457e8d2447b4b9feab）
- https://huggingface.co/api/models/GUI-Libra/GUI-Libra-3B/revision/98ec8af3939dbfa87e9e39082c7edbb1c1e7ee1f（获取于 2026-10-18T15:55:30Z；SHA-256：2cae2eed1c4d3c6551b737d48d7cfaad1c87413292530753c0ea80a8a1877755）
- https://raw.githubusercontent.com/GUI-Libra/GUI-Libra/f3e9c78e5c6435d0fb39210191ce1ad284361120/README.md（获取于 2026-10-18T15:55:29Z；SHA-256：f34c5bcf454368db37dde4bb2229fd14ae5e4a118684c6d7fbb6a25f9f246911）
- https://huggingface.co/GUI-Libra/GUI-Libra-3B/raw/98ec8af3939dbfa87e9e39082c7edbb1c1e7ee1f/README.md（获取于 2026-10-18T15:56:14Z；SHA-256：e678c8bb953de37182a69d60aa8c8fd7c9dd273fcd9cee457e8d2447b4b9feab）
