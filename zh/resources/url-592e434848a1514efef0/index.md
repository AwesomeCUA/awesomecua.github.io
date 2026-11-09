# UIX-Qwen2-Mind2Web

UIX-Qwen2 在 Mind2Web 训练集上进一步微调；MultiUI 论文评估其根据截图、任务和先前操作预测下一步网页操作的能力。

- 目录页面：https://awesomecua.com/zh/resources/url-592e434848a1514efef0/
- English：https://awesomecua.com/resources/url-592e434848a1514efef0/index.md
- 原始来源：https://huggingface.co/neulab/UIX-Qwen2-Mind2Web
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、动作预测、GUI 定位
- 证据核查日期：2026-10-18T16:06:26Z
- ID：url:592e434848a1514efef0

## 范围记录

Hub API at revision cf1654a2 lists four root BF16 safetensors shards (about 8.03B parameters) whose config declares LlavaQwenForCausalLM with the google/siglip-so400m-patch14-384 vision tower; the repository is publicly accessible. It also keeps two intermediate training folders, checkpoint-565 and checkpoint-1130, each with its own weight shards plus scheduler, RNG and trainer state. The MultiUI README lists this repository as UIX-Qwen2-M2W on Qwen2-7B-Instruct. The paper marks -M2W models as further fine-tuned on the Mind2Web training set and reports publisher figures for step success rate and element accuracy for UIX-Qwen2-M2W on the cross-task, cross-website and cross-domain splits. The card declares odc-by, a data-oriented designation kept as the publisher's weight declaration; base-model terms are not resolved.

- 完整记录 JSON：https://awesomecua.com/resources/url-592e434848a1514efef0/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：odc-by — https://huggingface.co/neulab/UIX-Qwen2-Mind2Web/raw/cf1654a2df366e87c4ec80009bb958395afe3c35/README.md

## 一手证据

- https://huggingface.co/neulab/UIX-Qwen2-Mind2Web/raw/cf1654a2df366e87c4ec80009bb958395afe3c35/README.md（获取于 2026-10-18T16:06:26Z；SHA-256：62dc9d53441e2075355c39922ba4d158e488658c11950c3748676d1afdf287fa）
- https://huggingface.co/api/models/neulab/UIX-Qwen2-Mind2Web/revision/cf1654a2df366e87c4ec80009bb958395afe3c35（获取于 2026-10-18T16:05:53Z；SHA-256：ab55b10ee9e1daedda116e1ecd3dfa5fa6d37b2f0c62403c79c64dd57e1d9cd3）
- https://raw.githubusercontent.com/neulab/MultiUI/e261d8ad3d329a8b6e719cfd4f6a6d8e6df3cede/README.md（获取于 2026-10-18T16:02:59Z；SHA-256：fe0c03fe73529a29788d559103c4aed48dca6ed9ba3bfd5f151f902fa8858b38）
- https://arxiv.org/html/2410.13824v3（获取于 2026-10-18T16:03:00Z；SHA-256：383ada0c47d09acea6b865ed67571c9540b2d602bd6b0ea8ad3130121efd190c）
- https://huggingface.co/neulab/UIX-Qwen2-Mind2Web/raw/cf1654a2df366e87c4ec80009bb958395afe3c35/config.json（获取于 2026-10-18T16:06:17Z；SHA-256：5deaf05d45d21acaca2d43d129ffadfbda840902167dbaa83a86004d133f2c20）
- https://huggingface.co/neulab/UIX-Qwen2-Mind2Web/raw/cf1654a2df366e87c4ec80009bb958395afe3c35/README.md（获取于 2026-10-18T16:06:26Z；SHA-256：62dc9d53441e2075355c39922ba4d158e488658c11950c3748676d1afdf287fa）
