# OS-Genesis 4B WA

面向 WebArena 的 InternVL2-4B 检查点，基于 OS-Genesis 逆向任务合成生成的网页轨迹训练，从指令、历史和页面预测下一步思考与操作。

- 目录页面：https://awesomecua.com/zh/resources/url-807dadc7dc4ba995bbbe/
- English：https://awesomecua.com/resources/url-807dadc7dc4ba995bbbe/index.md
- 原始来源：https://huggingface.co/OS-Copilot/OS-Genesis-4B-WA
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、动作预测、模仿学习
- 证据核查日期：2026-10-18T16:02:38Z
- ID：url:807dadc7dc4ba995bbbe

## 范围记录

Hub API at revision 511f2ec2 lists two BF16 safetensors shards (about 4.15B parameters) in the InternVLChatModel architecture, with custom InternVL and Phi-3 modeling files; the repository is publicly accessible. The card declares Apache-2.0 and OpenGVLab/InternVL2-4B as the base, calls it a web action model, names the OS-Genesis web training file as its training data and points to WebArena evaluation code, although its family-table caption says AndroidControl. The OS-Genesis README lists it under Web. The card's example prompt combines a screenshot, an accessibility tree, the instruction and the action history. AndroidWorld and AndroidControl variants are separate releases, and no result is transferred to this checkpoint.

- 完整记录 JSON：https://awesomecua.com/resources/url-807dadc7dc4ba995bbbe/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/OS-Copilot/OS-Genesis-4B-WA/raw/511f2ec231a517e79d1f913524b9b652dfc5b98e/README.md

## 一手证据

- https://huggingface.co/OS-Copilot/OS-Genesis-4B-WA/raw/511f2ec231a517e79d1f913524b9b652dfc5b98e/README.md（获取于 2026-10-18T16:02:38Z；SHA-256：bcaeb91865427132f00c4fd2d9af33f9b808bdc3a15f3d479ee25a3453b340ea）
- https://huggingface.co/api/models/OS-Copilot/OS-Genesis-4B-WA/revision/511f2ec231a517e79d1f913524b9b652dfc5b98e（获取于 2026-10-18T16:02:18Z；SHA-256：b8957e2835af052bab25c3fa939601d3fd5fd3d59f48bc1807aadfd4c3ab3df5）
- https://raw.githubusercontent.com/OS-Copilot/OS-Genesis/72128850dad4ca9ba642ee7399794b4fb8f5154d/README.md（获取于 2026-10-18T16:02:18Z；SHA-256：430e495ab250395d666854bd18b0fc29b819cd784cd7730215ef65e461834d0d）
- https://huggingface.co/OS-Copilot/OS-Genesis-4B-WA/raw/511f2ec231a517e79d1f913524b9b652dfc5b98e/README.md（获取于 2026-10-18T16:02:38Z；SHA-256：bcaeb91865427132f00c4fd2d9af33f9b808bdc3a15f3d479ee25a3453b340ea）
