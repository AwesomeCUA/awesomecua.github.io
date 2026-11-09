# ScaleCUA (THUDM) Qwen3-VL-8B ScienceBoard SFT

THUDM ScaleCUA 的 Qwen3-VL-8B 监督学习检查点，作为其 ScienceBoard 计算机使用智能体在线 RL 训练的初始模型发布。

- 目录页面：https://awesomecua.com/zh/resources/url-058cb7a92cba506f9739/
- English：https://awesomecua.com/resources/url-058cb7a92cba506f9739/index.md
- 原始来源：https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-scienceboard-sft
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：动作预测、科学工作流
- 证据核查日期：2026-10-18T15:40:15Z
- ID：url:058cb7a92cba506f9739

## 范围记录

Hub API at revision 48c39bb3 lists four BF16 safetensors shards (about 8.77B parameters) in the Qwen3VLForConditionalGeneration architecture, plus a training-state file iter_0000494/common.pt; access is open. The card calls this the SFT start point used to initialize online RL and names Qwen3-VL-8B as its base without Hub base_model metadata, so base_model is unset. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the base model's license; that license is not resolved here. The card reports no score for this checkpoint. The THUDM/SCALE-CUA README lists it among six SFT start-point checkpoints, each with a ModelScope mirror. This project is distinct from OpenGVLab/ScaleCUA.

- 完整记录 JSON：https://awesomecua.com/resources/url-058cb7a92cba506f9739/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：other — https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-scienceboard-sft/raw/48c39bb30e1920e02c440fc256f5bb4e1d44765b/README.md

## 一手证据

- https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-scienceboard-sft/raw/48c39bb30e1920e02c440fc256f5bb4e1d44765b/README.md（获取于 2026-10-18T15:40:15Z；SHA-256：30280bb114a38b1118a92fa575a0acca169bf833fe1a490080e275c92b6b286d）
- https://huggingface.co/api/models/extreme1228/ScaleCUA-qwen3-vl-scienceboard-sft/revision/48c39bb30e1920e02c440fc256f5bb4e1d44765b（获取于 2026-10-18T15:39:37Z；SHA-256：da5c9b828ce4c562b2dbb767829b64960d73d1c0d1161f17ef00dc652f0abb1e）
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md（获取于 2026-10-18T15:39:37Z；SHA-256：d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea）
- https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-scienceboard-sft/raw/48c39bb30e1920e02c440fc256f5bb4e1d44765b/README.md（获取于 2026-10-18T15:40:15Z；SHA-256：30280bb114a38b1118a92fa575a0acca169bf833fe1a490080e275c92b6b286d）
