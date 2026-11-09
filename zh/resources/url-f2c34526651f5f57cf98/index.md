# OS-Genesis 8B WA

面向 WebArena 的 InternVL2-8B 检查点，使用 OS-Genesis 逆向任务合成产生的网页轨迹训练；示例提示将截图、无障碍树与指令和动作历史配对。

- 目录页面：https://awesomecua.com/zh/resources/url-f2c34526651f5f57cf98/
- English：https://awesomecua.com/resources/url-f2c34526651f5f57cf98/index.md
- 原始来源：https://huggingface.co/OS-Copilot/OS-Genesis-8B-WA
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、动作预测、模仿学习
- 证据核查日期：2026-10-18T16:15:54Z
- ID：url:f2c34526651f5f57cf98

## 范围记录

Hub API at revision d1ec7c7f lists four BF16 safetensors shards (about 8.08B parameters) in the InternVLChatModel architecture, with custom InternViT and InternLM2 modeling files; the repository is publicly accessible. The card prose and config.json name InternVL2-8B (InternLM2 language model) as the starting model, while the card's YAML base_model field says InternVL2-4B; the prose and configuration are followed. The card lists this checkpoint in its WA table with the OS-Genesis web training file and points to WebArena evaluation code, although its quick-start sentence calls it a mobile action model and its table caption says AndroidControl. The OS-Genesis README lists it under Web. The card declares Apache-2.0. The 4B and 7B WA checkpoints and the AndroidWorld and AndroidControl variants are separate releases, and no result is transferred to this checkpoint; no weights were loaded.

- 完整记录 JSON：https://awesomecua.com/resources/url-f2c34526651f5f57cf98/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/OS-Copilot/OS-Genesis-8B-WA/raw/d1ec7c7f7dd2478d1830e04a812fd216a479e34c/README.md

## 一手证据

- https://huggingface.co/OS-Copilot/OS-Genesis-8B-WA/raw/d1ec7c7f7dd2478d1830e04a812fd216a479e34c/README.md（获取于 2026-10-18T16:15:54Z；SHA-256：c966adef0998300a623921d0882bf155025da261357263cef3ed8c3ac165ed6e）
- https://huggingface.co/api/models/OS-Copilot/OS-Genesis-8B-WA/revision/d1ec7c7f7dd2478d1830e04a812fd216a479e34c（获取于 2026-10-18T16:15:55Z；SHA-256：27a4a4c781412908e220a274b39085507aed74fd56fca2471d9c2b3c7019da37）
- https://huggingface.co/OS-Copilot/OS-Genesis-8B-WA/raw/d1ec7c7f7dd2478d1830e04a812fd216a479e34c/config.json（获取于 2026-10-18T16:15:55Z；SHA-256：918ec82f37bd5bf98f1e2a01940943f4dc7b60b01751447e32324410597278d5）
- https://raw.githubusercontent.com/OS-Copilot/OS-Genesis/72128850dad4ca9ba642ee7399794b4fb8f5154d/README.md（获取于 2026-10-18T16:15:57Z；SHA-256：430e495ab250395d666854bd18b0fc29b819cd784cd7730215ef65e461834d0d）
- https://huggingface.co/OS-Copilot/OS-Genesis-8B-WA/raw/d1ec7c7f7dd2478d1830e04a812fd216a479e34c/README.md（获取于 2026-10-18T16:15:54Z；SHA-256：c966adef0998300a623921d0882bf155025da261357263cef3ed8c3ac165ed6e）
