# OS-Genesis 4B AC

InternVL2-4B 检查点基于 OS-Genesis AndroidControl 轨迹微调；模型卡提示将截图和无障碍树与目标、操作历史结合，生成下一步思考与操作。

- 目录页面：https://awesomecua.com/zh/resources/url-b1837823421bd08cb826/
- English：https://awesomecua.com/resources/url-b1837823421bd08cb826/index.md
- 原始来源：https://huggingface.co/OS-Copilot/OS-Genesis-4B-AC
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：手机操作、动作预测、模仿学习
- 证据核查日期：2026-10-18T16:04:12Z
- ID：url:b1837823421bd08cb826

## 范围记录

This is the 4B AndroidControl (AC) task-specific checkpoint; the card calls it a mobile action model, and the 7B and 8B AC checkpoints and the AndroidWorld (AW) and web variants are separate releases, with results scoped to each release. The card prose, its YAML base_model field and config.json agree on InternVL2-4B, whose language model is Phi-3-mini (Phi3ForCausalLM). The card and the OS-Genesis repository README both list it among the AC family models used for the AndroidControl benchmark. Two public Safetensors shards are present and the Hub reports 4,146,868,224 BF16 parameters. The card declares Apache-2.0 for the checkpoint. No checkpoint was loaded and no result was reproduced.

- 完整记录 JSON：https://awesomecua.com/resources/url-b1837823421bd08cb826/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：Apache-2.0 — https://huggingface.co/OS-Copilot/OS-Genesis-4B-AC/raw/c73c72530fb7a9d7e482fbb96ad23b118a47e8c3/README.md

- 权重审核：Publisher model-card declaration for the checkpoint; base-model, code and training-data terms are separate.
  来源：https://huggingface.co/OS-Copilot/OS-Genesis-4B-AC/raw/c73c72530fb7a9d7e482fbb96ad23b118a47e8c3/README.md

## 一手证据

- https://huggingface.co/OS-Copilot/OS-Genesis-4B-AC/raw/c73c72530fb7a9d7e482fbb96ad23b118a47e8c3/README.md（获取于 2026-10-18T16:04:12Z；SHA-256：db757573a6e4646207890032dffd6bc7592409063399b2dd8d1d0e706db18394）
- https://huggingface.co/api/models/OS-Copilot/OS-Genesis-4B-AC/revision/c73c72530fb7a9d7e482fbb96ad23b118a47e8c3（获取于 2026-10-18T16:03:42Z；SHA-256：212d8f3727374d3fb2f91de0381698199e05855d2206cf68498d36c22b213df4）
- https://huggingface.co/OS-Copilot/OS-Genesis-4B-AC/raw/c73c72530fb7a9d7e482fbb96ad23b118a47e8c3/config.json（获取于 2026-10-18T16:03:42Z；SHA-256：bda54194dc2fa23a880791f0a7ce2d78cc1be849d745c0af67bbf96cbbb05a8c）
- https://raw.githubusercontent.com/OS-Copilot/OS-Genesis/72128850dad4ca9ba642ee7399794b4fb8f5154d/README.md（获取于 2026-10-18T16:03:42Z；SHA-256：430e495ab250395d666854bd18b0fc29b819cd784cd7730215ef65e461834d0d）
- https://huggingface.co/OS-Copilot/OS-Genesis-4B-AC/raw/c73c72530fb7a9d7e482fbb96ad23b118a47e8c3/README.md（获取于 2026-10-18T16:04:12Z；SHA-256：db757573a6e4646207890032dffd6bc7592409063399b2dd8d1d0e706db18394）
