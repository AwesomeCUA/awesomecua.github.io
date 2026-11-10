# OSWorld file cache (Ubuntu)

OSWorld 的 Ubuntu 任务配置在设置和评估时下载的文件的 Hub 托管副本，从 Google Drive 迁移后按应用和任务 ID 组织。

- 目录页面：https://awesomecua.com/zh/resources/url-c885712b9c69579ac591/
- English：https://awesomecua.com/resources/url-c885712b9c69579ac591/index.md
- 原始来源：https://huggingface.co/datasets/xlangai/ubuntu_osworld_file_cache
- 类型：数据集
- 审核状态：已审核
- 范围：相关研究
- 运行环境：桌面、Linux
- 主题：评测
- 证据核查日期：2026-10-18T11:46:05Z
- ID：url:c885712b9c69579ac591

## 范围记录

Adjacent: a file host that the curated OSWorld benchmark depends on; this asset hosts benchmark files. OSWorld task JSON (for example os/5c1075ca, which fetches setup.sh and eval.sh) points at this repository. The Hub API at revision 1e112283 reports an ungated repository with 720 files, most of them in application/task-ID folders, plus a fonts archive. The card metadata declares Apache-2.0, while its License section says the files follow the original OSWorld project's terms.

- 完整记录 JSON：https://awesomecua.com/resources/url-c885712b9c69579ac591/record.json

## 结构化规格

- 格式：original application file formats, archives
- 模态：images, documents, spreadsheets, presentations, audio and video, scripts
- 数据划分：未记录
- 监督信号：task setup and evaluation assets

### 数量记录

- 720 个文件 — Hub manifest at revision 1e112283（计算得出）（来源：https://huggingface.co/api/datasets/xlangai/ubuntu_osworld_file_cache）
- 262 个应用/任务 ID 文件夹 — Hub manifest at revision 1e112283（计算得出）（来源：https://huggingface.co/api/datasets/xlangai/ubuntu_osworld_file_cache）

Counts come from the Hub file manifest. Task folder and OSWorld task-definition counts use different units; OSWorld tasks have partial folder coverage here.

## 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/xlangai/ubuntu_osworld_file_cache/raw/1e112283c4ecb08d6fed8069bca7de74fa2f12aa/README.md
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/xlangai/ubuntu_osworld_file_cache/raw/1e112283c4ecb08d6fed8069bca7de74fa2f12aa/README.md（获取于 2026-10-18T11:46:05Z；SHA-256：23b49d5e9a3c5cdcba990640ccf271d35411cc51ff85c18771a9f74b9d351944）
- https://huggingface.co/api/datasets/xlangai/ubuntu_osworld_file_cache（获取于 2026-10-18T11:46:05Z；SHA-256：064fcc8dd91932dccbb0257be254fe5a95b95f369fb3d41ca2c169413cc424cf）
- https://raw.githubusercontent.com/xlang-ai/OSWorld/b138d348256078fa634fc3b73567a7337c793e6b/evaluation_examples/examples/os/5c1075ca-bb34-46a3-a7a0-029bd7463e79.json（获取于 2026-10-18T11:46:05Z；SHA-256：6b57e8b32c048a252d8076fc280bf029f869e99e2938530ff78087aa7fdce410）
- https://huggingface.co/datasets/xlangai/ubuntu_osworld_file_cache/raw/1e112283c4ecb08d6fed8069bca7de74fa2f12aa/README.md（获取于 2026-10-18T11:46:05Z；SHA-256：23b49d5e9a3c5cdcba990640ccf271d35411cc51ff85c18771a9f74b9d351944）
