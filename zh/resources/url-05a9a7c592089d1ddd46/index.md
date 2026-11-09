# META-GUI dataset

META-GUI 的 Hub 发布版，收录智能体操作移动应用的任务型对话；每轮将对话与截图、视图层级 XML、记录的 GUI 操作和回复配对。

- 目录页面：https://awesomecua.com/zh/resources/url-05a9a7c592089d1ddd46/
- English：https://awesomecua.com/resources/url-05a9a7c592089d1ddd46/index.md
- 原始来源：https://huggingface.co/datasets/X-LANCE/META-GUI
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：手机操作、人机协作、动作预测
- 证据核查日期：2026-10-18T15:46:20Z
- ID：url:05a9a7c592089d1ddd46

## 范围记录

The card only links the paper and the X-LANCE/META-GUI-baseline repository, which documents the raw dialog folders (dialog.json, per-turn actions.json, PNG screenshots and XML view hierarchies) and the processed data.json fields. The Hub manifest at revision 12660de5 holds train.tar and test.tar (about 14.3 GB and 1.8 GB); the baseline README instead describes train and dev folders from an Amazon S3 archive, and the split correspondence is not established. No source names the mobile operating system. Apache-2.0 is the Hub card's data declaration; the baseline code's MIT license is separate.

- 完整记录 JSON：https://awesomecua.com/resources/url-05a9a7c592089d1ddd46/record.json

## 结构化规格

- 格式：TAR archives, JSON, PNG, XML
- 模态：dialogue text, screenshots, view hierarchies, actions
- 数据划分：train, test
- 监督信号：GUI action sequences per dialogue turn, target elements for clicks, system response text

### 数量记录

未记录数量。

Splits are the two Hub archive names; the baseline README's processed data uses train and dev folders. Formats inside the archives come from the baseline README's raw-data description.

## 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/X-LANCE/META-GUI/raw/12660de515ad55e40e8c4e5afa8f4d0e7430ab34/README.md
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/X-LANCE/META-GUI/raw/12660de515ad55e40e8c4e5afa8f4d0e7430ab34/README.md（获取于 2026-10-18T15:46:20Z；SHA-256：cb86b4648766f07f671290abec4b75658496082a2e77661ca47aa593351eacda）
- https://huggingface.co/api/datasets/X-LANCE/META-GUI/revision/12660de515ad55e40e8c4e5afa8f4d0e7430ab34（获取于 2026-10-18T15:45:56Z；SHA-256：ef370ba12e94c45d0fb74fe3e44b29f9e058e19fab739a15a6a1d04f4101460d）
- https://raw.githubusercontent.com/X-LANCE/META-GUI-baseline/a845f88e7d89fe60d3666d15adb32d4e2ef907db/README.md（获取于 2026-10-18T15:45:57Z；SHA-256：2cea1be73ea75acd46990ab1fb567fbd83ad58a2bc69ca858b207660df9fe8c1）
- https://huggingface.co/datasets/X-LANCE/META-GUI/raw/12660de515ad55e40e8c4e5afa8f4d0e7430ab34/README.md（获取于 2026-10-18T15:46:20Z；SHA-256：cb86b4648766f07f671290abec4b75658496082a2e77661ca47aa593351eacda）
