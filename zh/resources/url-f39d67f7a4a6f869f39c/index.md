# Holotron 3 Nano

H Company 基于 NVIDIA Nemotron 3 Nano Omni 后训练的计算机使用策略检查点，采用每个词元激活 30B 参数中 3B 的混合 Mamba-MoE 架构，面向低延迟智能体任务。

- 目录页面：https://awesomecua.com/zh/resources/url-f39d67f7a4a6f869f39c/
- English：https://awesomecua.com/resources/url-f39d67f7a4a6f869f39c/index.md
- 原始来源：https://huggingface.co/Hcompany/Holotron-3-Nano
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面
- 主题：GUI 定位、动作预测、效率
- 证据核查日期：2026-10-19T06:02:55Z
- ID：url:f39d67f7a4a6f869f39c

## 范围记录

Hub API at revision 525e05a4 lists seven safetensors shards (about 33.01B parameters, nearly all BF16) with custom modeling code, and config.json declares NemotronH_Nano_Omni_Reasoning_V3 with 128 routed experts, 6 active per token, and a 262,144-token position limit; the repository is publicly accessible. The card text names the NVIDIA Open Model License while its metadata says 'other' and no license file ships; H's models page lists the same license. The card fetches the RADIO vision code from nvidia/C-RADIOv2-H while the release post names C-RADIOv4, so no encoder version is recorded. OSWorld-Verified, ScreenSpot-Pro, OSWorld-G and internal enterprise scores in the release post are publisher figures.

- 完整记录 JSON：https://awesomecua.com/resources/url-f39d67f7a4a6f869f39c/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：NVIDIA Open Model License — https://huggingface.co/Hcompany/Holotron-3-Nano/raw/525e05a4b21747ea5c32b09a5969bfc425d5e95c/README.md

- 权重审核：Publisher model-card text names the NVIDIA Open Model License for this checkpoint, matching H's models page; the Hub value 'other' is not a license name.
  来源：https://huggingface.co/Hcompany/Holotron-3-Nano/raw/525e05a4b21747ea5c32b09a5969bfc425d5e95c/README.md, https://hcompany.ai/research/models

## 一手证据

- https://huggingface.co/Hcompany/Holotron-3-Nano/raw/525e05a4b21747ea5c32b09a5969bfc425d5e95c/README.md（获取于 2026-10-19T06:02:55Z；SHA-256：5cc77556ea6205641e21d666ddd9a714e5f4b317a6300ebc4af1b80e835f2730）
- https://huggingface.co/api/models/Hcompany/Holotron-3-Nano/revision/525e05a4b21747ea5c32b09a5969bfc425d5e95c（获取于 2026-10-19T06:02:55Z；SHA-256：2cf0bf25a4651598ffa97f1f8346995e1621d5b7c6e8d9e222da2ff5c65201e1）
- https://huggingface.co/Hcompany/Holotron-3-Nano/raw/525e05a4b21747ea5c32b09a5969bfc425d5e95c/config.json（获取于 2026-10-19T06:02:55Z；SHA-256：c35380544d8a4e0363423330906500bf0b542a65daba17af2047637efad8c6ff）
- https://hcompany.ai/research/models（获取于 2026-10-19T06:02:56Z；SHA-256：ddfa335cd71d0a7a4e61640752b1b24830f951a72c175e88fd03bf00a5e783c8）
- https://hcompany.ai/newsroom/holotron3（获取于 2026-10-19T06:02:56Z；SHA-256：f1a85322e0c82ee5b12cf3dbdd986ba2578330df80859a059beddd12f34b573e）
- https://huggingface.co/Hcompany/Holotron-3-Nano/raw/525e05a4b21747ea5c32b09a5969bfc425d5e95c/README.md（获取于 2026-10-19T06:02:55Z；SHA-256：5cc77556ea6205641e21d666ddd9a714e5f4b317a6300ebc4af1b80e835f2730）
