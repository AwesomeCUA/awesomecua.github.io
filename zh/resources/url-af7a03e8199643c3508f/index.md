# ScaleCUA (THUDM) Qwen3.5-9B ScienceBoard SFT

THUDM ScaleCUA 的监督训练 Qwen3.5-9B 检查点，作为 ScienceBoard 计算机使用智能体在线强化学习的初始模型发布。

- 目录页面：https://awesomecua.com/zh/resources/url-af7a03e8199643c3508f/
- English：https://awesomecua.com/resources/url-af7a03e8199643c3508f/index.md
- 原始来源：https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-scienceboard-sft
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：动作预测、科学工作流
- 证据核查日期：2026-10-18T15:57:18Z
- ID：url:af7a03e8199643c3508f

## 范围记录

Hub API at revision f697d10e lists four BF16 safetensors shards (about 9.41B parameters) in the Qwen3_5ForConditionalGeneration architecture, plus a training-state file iter_0000494/common.pt; the repository is publicly accessible. The card calls this the SFT start point used to initialize online RL and names Qwen3.5-9B as its base without Hub base_model metadata, so base_model is unset. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the base model's license; that license is not resolved here. The card reports no score for this checkpoint. The THUDM/SCALE-CUA README lists it among six SFT start-point checkpoints, each with a ModelScope mirror. This project is distinct from OpenGVLab/ScaleCUA.

- 完整记录 JSON：https://awesomecua.com/resources/url-af7a03e8199643c3508f/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：other — https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-scienceboard-sft/raw/f697d10e7c30cbc7b88d677a81336210b80827d3/README.md

## 一手证据

- https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-scienceboard-sft/raw/f697d10e7c30cbc7b88d677a81336210b80827d3/README.md（获取于 2026-10-18T15:57:18Z；SHA-256：45b91f7927b1a1e59754db4c6596268c82a114e0d900cd9b12cc6067ada2c4d2）
- https://huggingface.co/api/models/extreme1228/ScaleCUA-qwen3.5-scienceboard-sft/revision/f697d10e7c30cbc7b88d677a81336210b80827d3（获取于 2026-10-18T15:56:44Z；SHA-256：7a2980b96ce8865010151e5dac614a924ee0e59a17d893321ad73e1e708eecbd）
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md（获取于 2026-10-18T15:56:44Z；SHA-256：d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea）
- https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-scienceboard-sft/raw/f697d10e7c30cbc7b88d677a81336210b80827d3/README.md（获取于 2026-10-18T15:57:18Z；SHA-256：45b91f7927b1a1e59754db4c6596268c82a114e0d900cd9b12cc6067ada2c4d2）
