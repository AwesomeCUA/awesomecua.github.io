# ScaleCUA (THUDM) Qwen3.5-9B OSWorld

THUDM ScaleCUA 的 Qwen3.5-9B 计算机使用智能体检查点，从 SFT 初始模型出发经在线 RL 训练，用于 OSWorld 桌面任务，可通过兼容 OpenAI 的端点提供服务。

- 目录页面：https://awesomecua.com/zh/resources/url-0919e695670c5740a123/
- English：https://awesomecua.com/resources/url-0919e695670c5740a123/index.md
- 原始来源：https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-osworld
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：强化学习、动作预测
- 证据核查日期：2026-10-18T15:41:57Z
- ID：url:0919e695670c5740a123

## 范围记录

Hub API at revision 2ad1314b lists four BF16 safetensors shards (about 9.41B parameters) in the Qwen3_5ForConditionalGeneration architecture; access is open. The card calls this the online-RL (RLVR) checkpoint and names extreme1228/ScaleCUA-qwen3.5-osworld-sft as its start point, which is also its Hub base_model. The card and the THUDM/SCALE-CUA README report 68.7% on OSWorld; this is a publisher figure. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the license of Qwen3.5-9B; that license is not resolved here. This project is distinct from OpenGVLab/ScaleCUA.

- 完整记录 JSON：https://awesomecua.com/resources/url-0919e695670c5740a123/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：other — https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-osworld/raw/2ad1314b6076591e35f299b2efed214e2454deab/README.md

## 一手证据

- https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-osworld/raw/2ad1314b6076591e35f299b2efed214e2454deab/README.md（获取于 2026-10-18T15:41:57Z；SHA-256：8dbec1da9f5dddb73561021af5f386e0c456e6b9ea8b6d422aa60df5f57abd44）
- https://huggingface.co/api/models/extreme1228/ScaleCUA-qwen3.5-osworld/revision/2ad1314b6076591e35f299b2efed214e2454deab（获取于 2026-10-18T15:41:39Z；SHA-256：38f67b1b143810cd843f99f047fd3310b26b0084948a8d6b3dc31999ce20ab74）
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md（获取于 2026-10-18T15:41:39Z；SHA-256：d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea）
- https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-osworld/raw/2ad1314b6076591e35f299b2efed214e2454deab/README.md（获取于 2026-10-18T15:41:57Z；SHA-256：8dbec1da9f5dddb73561021af5f386e0c456e6b9ea8b6d422aa60df5f57abd44）
