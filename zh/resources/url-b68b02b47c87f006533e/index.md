# LFM2-350M-ComputerUse

基于 LFM2-350M 的 LoRA 适配器，使用 GRPO 训练，在 MiniWoB click-test 任务中点击按钮；它以 BrowserGym 无障碍树读取页面，并在沙箱浏览器中执行操作。

- 目录页面：https://awesomecua.com/zh/resources/url-b68b02b47c87f006533e/
- English：https://awesomecua.com/resources/url-b68b02b47c87f006533e/index.md
- 原始来源：https://huggingface.co/DingoBeast/LFM2-350M-ComputerUse
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：强化学习、网页导航
- 证据核查日期：2026-11-10T03:01:13Z
- ID：url:b68b02b47c87f006533e

## 范围记录

The repository holds adapter_model.safetensors and a checkpoint-100 folder with optimizer and scheduler state. Per the README, training used LoRA rank 8 and alpha 16 for 100 iterations with up to 10 browser actions per episode on Modal GPUs; the card's quick-start example is generic text generation.

- 完整记录 JSON：https://awesomecua.com/resources/url-b68b02b47c87f006533e/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/api/models/DingoBeast/LFM2-350M-ComputerUse（获取于 2026-11-10T03:01:13Z；SHA-256：d0cb149920714b972e2b5405d2bea012ba5ecbbc9c2645aa8e57c8ed3138dd6f）
- https://huggingface.co/api/models/DingoBeast/LFM2-350M-ComputerUse（获取于 2026-11-10T03:01:13Z；SHA-256：d0cb149920714b972e2b5405d2bea012ba5ecbbc9c2645aa8e57c8ed3138dd6f）
