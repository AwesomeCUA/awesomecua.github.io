# ScaleCUA (THUDM) Qwen3-VL-8B OSWorld SFT

THUDM ScaleCUA 的监督训练 Qwen3-VL-8B 检查点，作为 OSWorld 桌面计算机使用智能体在线强化学习的初始模型发布。

- 目录页面：https://awesomecua.com/zh/resources/url-50501b63a93c611d6e54/
- English：https://awesomecua.com/resources/url-50501b63a93c611d6e54/index.md
- 原始来源：https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-osworld-sft
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：动作预测
- 证据核查日期：2026-10-18T15:57:54Z
- ID：url:50501b63a93c611d6e54

## 范围记录

Hub API at revision 406fe375 lists four BF16 safetensors shards (about 8.77B parameters) in the Qwen3VLForConditionalGeneration architecture, plus a training args.json; the repository is publicly accessible. The card calls this the SFT start point used to initialize online RL and names Qwen3-VL-8B as its base without Hub base_model metadata, so base_model is unset. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the license of Qwen3-VL-8B; that license is not resolved here. The card reports no score for this checkpoint. The THUDM/SCALE-CUA README lists it among six SFT start-point checkpoints, each with a ModelScope mirror. This project is distinct from OpenGVLab/ScaleCUA.

- 完整记录 JSON：https://awesomecua.com/resources/url-50501b63a93c611d6e54/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：other — https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-osworld-sft/raw/406fe37598dc77b452bee1904c43411fbb6c5fad/README.md

## 一手证据

- https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-osworld-sft/raw/406fe37598dc77b452bee1904c43411fbb6c5fad/README.md（获取于 2026-10-18T15:57:54Z；SHA-256：db1c5b96ae888c47a475250884fdfb73f89f3e371ebc9a4fab1975008394493f）
- https://huggingface.co/api/models/extreme1228/ScaleCUA-qwen3-vl-osworld-sft/revision/406fe37598dc77b452bee1904c43411fbb6c5fad（获取于 2026-10-18T15:57:26Z；SHA-256：2dd5f21883e032c18c3a4af56d8772be57672e839367a6fb17c18282da7f170b）
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md（获取于 2026-10-18T15:55:27Z；SHA-256：d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea）
- https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-osworld-sft/raw/406fe37598dc77b452bee1904c43411fbb6c5fad/README.md（获取于 2026-10-18T15:57:54Z；SHA-256：db1c5b96ae888c47a475250884fdfb73f89f3e371ebc9a4fab1975008394493f）
