# Gelato-30B-A3B

Qwen3-VL-30B-A3B-Instruct 检查点在 Click-100k 上使用 GRPO 训练，根据截图和元素描述返回一个归一化到 0–1000 范围的(x,y)点击坐标。

- 目录页面：https://awesomecua.com/zh/resources/url-46502d87b2c13515790a/
- English：https://awesomecua.com/resources/url-46502d87b2c13515790a/index.md
- 原始来源：https://huggingface.co/mlfoundations/Gelato-30B-A3B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：GUI 定位、强化学习
- 证据核查日期：2026-10-18T15:54:59Z
- ID：url:46502d87b2c13515790a

## 范围记录

The card's example prompts for one (x,y) point and rescales it from a 0–1000 frame to pixels. The Hub manifest at revision 161e9288 lists 14 Safetensors shards; the API reports 31,070,754,032 BF16 parameters. The release README says the published weights are the step-84 checkpoint of a 100-step DAPO-style GRPO run and that all intermediate checkpoints are released, but the Hub shows only the main branch of this repository.

- 完整记录 JSON：https://awesomecua.com/resources/url-46502d87b2c13515790a/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：Apache-2.0 — https://huggingface.co/mlfoundations/Gelato-30B-A3B/raw/161e92880a1685a98caa5ef5de8813fe8a43cbb4/README.md

- 权重审核：Model-card metadata declaration for this checkpoint; the code repository has no license file and the Click-100k data terms are separate.
  来源：https://huggingface.co/mlfoundations/Gelato-30B-A3B/raw/161e92880a1685a98caa5ef5de8813fe8a43cbb4/README.md

## 一手证据

- https://huggingface.co/mlfoundations/Gelato-30B-A3B/raw/161e92880a1685a98caa5ef5de8813fe8a43cbb4/README.md（获取于 2026-10-18T15:54:59Z；SHA-256：ae96174873e2a52a206ea9b7e718609678ec15e5830f5eac1f52d325770fcd8b）
- https://huggingface.co/api/models/mlfoundations/Gelato-30B-A3B/revision/161e92880a1685a98caa5ef5de8813fe8a43cbb4（获取于 2026-10-18T15:53:38Z；SHA-256：89a8d65f413e2664c4355df9de84fc46bd9612d914df96affd05d68f88eb10e7）
- https://raw.githubusercontent.com/mlfoundations/Gelato/2a8757d473a63d34f71b043192d08dad61d298ee/README.md（获取于 2026-10-18T15:53:38Z；SHA-256：437eb06553ed6d63d871d18842906b26b6148db5b0a5489064736ef6f5f0cfcf）
- https://huggingface.co/mlfoundations/Gelato-30B-A3B/raw/161e92880a1685a98caa5ef5de8813fe8a43cbb4/README.md（获取于 2026-10-18T15:54:59Z；SHA-256：ae96174873e2a52a206ea9b7e718609678ec15e5830f5eac1f52d325770fcd8b）
