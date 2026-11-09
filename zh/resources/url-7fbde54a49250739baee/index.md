# ScaleCUA (THUDM) GLM-4.6V-Flash ScienceBoard SFT

THUDM ScaleCUA 的监督训练 GLM-4.6V-Flash 检查点，作为 ScienceBoard 计算机使用智能体在线强化学习的初始模型发布。

- 目录页面：https://awesomecua.com/zh/resources/url-7fbde54a49250739baee/
- English：https://awesomecua.com/resources/url-7fbde54a49250739baee/index.md
- 原始来源：https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-scienceboard-sft
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：动作预测、科学工作流
- 证据核查日期：2026-10-18T16:01:08Z
- ID：url:7fbde54a49250739baee

## 范围记录

Hub API at revision 2bcf77b8 lists five BF16 safetensors shards (about 10.29B parameters) in the Glm4vForConditionalGeneration architecture, plus training-state files under iter_0000494/; the repository is publicly accessible. The card calls this the SFT start point used to initialize online RL and names GLM-4.6V-Flash as its base without Hub base_model metadata, so base_model is unset. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the base model's license; that license is not resolved here. The card reports no score for this checkpoint. The THUDM/SCALE-CUA README lists it among six SFT start-point checkpoints, each with a ModelScope mirror. This project is distinct from OpenGVLab/ScaleCUA.

- 完整记录 JSON：https://awesomecua.com/resources/url-7fbde54a49250739baee/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：other — https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-scienceboard-sft/raw/2bcf77b8a30c161d9ed2e075276877275319d1ad/README.md

## 一手证据

- https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-scienceboard-sft/raw/2bcf77b8a30c161d9ed2e075276877275319d1ad/README.md（获取于 2026-10-18T16:01:08Z；SHA-256：0e3266010e93daa32e8ba81ceca8d83771ecbbbd8cd409833d0aae518e6348db）
- https://huggingface.co/api/models/extreme1228/ScaleCUA-glm4.6v-scienceboard-sft/revision/2bcf77b8a30c161d9ed2e075276877275319d1ad（获取于 2026-10-18T16:00:48Z；SHA-256：4feef38e55602ab8eb6cbc2f1d8dcccc7d3d1cad0e91128570ca85e9e8caa177）
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md（获取于 2026-10-18T16:00:48Z；SHA-256：d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea）
- https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-scienceboard-sft/raw/2bcf77b8a30c161d9ed2e075276877275319d1ad/README.md（获取于 2026-10-18T16:01:08Z；SHA-256：0e3266010e93daa32e8ba81ceca8d83771ecbbbd8cd409833d0aae518e6348db）
