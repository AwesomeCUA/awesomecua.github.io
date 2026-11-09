# OS-Genesis 7B AW

面向 AndroidWorld 的 Qwen2-VL 检查点，基于 OS-Genesis 逆向任务合成生成的移动端轨迹训练，从指令、历史和屏幕预测下一步思考与操作。

- 目录页面：https://awesomecua.com/zh/resources/url-7afa17db925828d9a035/
- English：https://awesomecua.com/resources/url-7afa17db925828d9a035/index.md
- 原始来源：https://huggingface.co/OS-Copilot/OS-Genesis-7B-AW
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：手机操作、动作预测、模仿学习
- 证据核查日期：2026-10-18T15:57:04Z
- ID：url:7afa17db925828d9a035

## 范围记录

Hub API at revision 069001de lists four BF16 safetensors shards (about 8.29B parameters) in the Qwen2VLForConditionalGeneration architecture; the repository is publicly accessible. The card declares Apache-2.0 and Qwen/Qwen2-VL-7B-Instruct as the base, and names the AW training file of the OS-Genesis mobile data as its training data. The OS-Genesis README lists this checkpoint under AndroidWorld, and the card points to its AndroidWorld evaluation code, but the card's family-table caption says AndroidControl. The card's example loads its processor from OS-Atlas-Base-7B. AndroidControl and WebArena variants are separate releases, and no result is transferred to this checkpoint.

- 完整记录 JSON：https://awesomecua.com/resources/url-7afa17db925828d9a035/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/OS-Copilot/OS-Genesis-7B-AW/raw/069001de84358b6a83a3f34638e37df485f49bd0/README.md

## 一手证据

- https://huggingface.co/OS-Copilot/OS-Genesis-7B-AW/raw/069001de84358b6a83a3f34638e37df485f49bd0/README.md（获取于 2026-10-18T15:57:04Z；SHA-256：d21cdbfe878c8e990e8baffca226b9c433ec69839273f8d22bc5c7692337e770）
- https://huggingface.co/api/models/OS-Copilot/OS-Genesis-7B-AW/revision/069001de84358b6a83a3f34638e37df485f49bd0（获取于 2026-10-18T15:56:45Z；SHA-256：f118fbcc0b4622cb7eaf9134f5bb578e74ced0d07be442e8b73307296ed7dc64）
- https://raw.githubusercontent.com/OS-Copilot/OS-Genesis/72128850dad4ca9ba642ee7399794b4fb8f5154d/README.md（获取于 2026-10-18T15:56:45Z；SHA-256：430e495ab250395d666854bd18b0fc29b819cd784cd7730215ef65e461834d0d）
- https://huggingface.co/OS-Copilot/OS-Genesis-7B-AW/raw/069001de84358b6a83a3f34638e37df485f49bd0/README.md（获取于 2026-10-18T15:57:04Z；SHA-256：d21cdbfe878c8e990e8baffca226b9c433ec69839273f8d22bc5c7692337e770）
