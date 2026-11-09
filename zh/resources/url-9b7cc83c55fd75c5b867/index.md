# ScaleCUA (THUDM) Qwen3.5-9B OSWorld SFT

THUDM 的 ScaleCUA 发布 Qwen3.5-9B 监督训练检查点，作为 OSWorld 计算机使用智能体在线强化学习的初始化起点。

- 目录页面：https://awesomecua.com/zh/resources/url-9b7cc83c55fd75c5b867/
- English：https://awesomecua.com/resources/url-9b7cc83c55fd75c5b867/index.md
- 原始来源：https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-osworld-sft
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：动作预测
- 证据核查日期：2026-10-18T16:08:23Z
- ID：url:9b7cc83c55fd75c5b867

## 范围记录

Hub API at revision ff2508f6 lists four BF16 safetensors shards (about 9.41B parameters) in the Qwen3_5ForConditionalGeneration architecture, plus a training-state file iter_0001940/common.pt; the repository is publicly accessible. The card calls this the SFT start point used to initialize online RL and names Qwen3.5-9B as its base without Hub base_model metadata, so base_model is unset. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the base model's license; that license is not resolved here. The card reports no score for this checkpoint. The THUDM/SCALE-CUA README lists it among six SFT start-point checkpoints, each with a ModelScope mirror. This project is distinct from OpenGVLab/ScaleCUA.

- 完整记录 JSON：https://awesomecua.com/resources/url-9b7cc83c55fd75c5b867/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：other — https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-osworld-sft/raw/ff2508f621e46efa7ec2d449a182ab9a9a0e9745/README.md

## 一手证据

- https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-osworld-sft/raw/ff2508f621e46efa7ec2d449a182ab9a9a0e9745/README.md（获取于 2026-10-18T16:08:23Z；SHA-256：7589b02e03bcfaf31709ea6b8c0263d17b935b21042f6694dcfe5b66efbc6937）
- https://huggingface.co/api/models/extreme1228/ScaleCUA-qwen3.5-osworld-sft/revision/ff2508f621e46efa7ec2d449a182ab9a9a0e9745（获取于 2026-10-18T16:08:05Z；SHA-256：e0accb8f68bfa0886c16b9842f29b9076c2860d3f8745c766f864f098ffe71dd）
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md（获取于 2026-10-18T16:08:05Z；SHA-256：d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea）
- https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-osworld-sft/raw/ff2508f621e46efa7ec2d449a182ab9a9a0e9745/README.md（获取于 2026-10-18T16:08:23Z；SHA-256：7589b02e03bcfaf31709ea6b8c0263d17b935b21042f6694dcfe5b66efbc6937）
