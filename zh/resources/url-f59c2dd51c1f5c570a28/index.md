# ScaleCUA (THUDM) GLM-4.6V-Flash OSWorld SFT

THUDM 的 ScaleCUA 发布 GLM-4.6V-Flash 监督训练检查点，作为 OSWorld 桌面计算机使用智能体在线强化学习的初始化起点。

- 目录页面：https://awesomecua.com/zh/resources/url-f59c2dd51c1f5c570a28/
- English：https://awesomecua.com/resources/url-f59c2dd51c1f5c570a28/index.md
- 原始来源：https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-osworld-sft
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：动作预测
- 证据核查日期：2026-10-19T06:05:00Z
- ID：url:f59c2dd51c1f5c570a28

## 范围记录

Hub API at revision b13810f3 lists five BF16 safetensors shards (about 10.29B parameters) in the Glm4vForConditionalGeneration architecture, plus args.json and training-state files under iter_0001838/; the repository is publicly accessible. The card calls this the SFT start point used to initialize online RL and names GLM-4.6V-Flash as its base without Hub base_model metadata, so base_model is unset. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the base model's license; that license is not resolved here. The card reports no score for this checkpoint. The THUDM/SCALE-CUA README lists it among six SFT start-point checkpoints, each with a ModelScope mirror. This project is distinct from OpenGVLab/ScaleCUA.

- 完整记录 JSON：https://awesomecua.com/resources/url-f59c2dd51c1f5c570a28/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：other — https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-osworld-sft/raw/b13810f35275021d1d70082b4d1071e941a2a857/README.md

## 一手证据

- https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-osworld-sft/raw/b13810f35275021d1d70082b4d1071e941a2a857/README.md（获取于 2026-10-19T06:05:00Z；SHA-256：d4dbc07bbc6c5b548d198e324302a2c3a7f075f38c764da660c35ab2f5028286）
- https://huggingface.co/api/models/extreme1228/ScaleCUA-glm4.6v-osworld-sft/revision/b13810f35275021d1d70082b4d1071e941a2a857（获取于 2026-10-19T06:05:01Z；SHA-256：f27d3fcc8c98d68e9b29f2e43eac963322de6488bf35e5b9991bbbfd4bf05231）
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md（获取于 2026-10-19T06:05:01Z；SHA-256：d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea）
- https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-osworld-sft/raw/b13810f35275021d1d70082b4d1071e941a2a857/README.md（获取于 2026-10-19T06:05:00Z；SHA-256：d4dbc07bbc6c5b548d198e324302a2c3a7f075f38c764da660c35ab2f5028286）
