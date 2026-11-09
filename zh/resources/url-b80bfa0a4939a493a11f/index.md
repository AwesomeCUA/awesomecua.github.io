# Mobile3M

小米 MobileVLM 的预训练语料，以各应用的图结构归档文件分发，涵盖百度地图、QQ 音乐、携程和唯品会等移动应用。

- 目录页面：https://awesomecua.com/zh/resources/url-b80bfa0a4939a493a11f/
- English：https://awesomecua.com/resources/url-b80bfa0a4939a493a11f/index.md
- 原始来源：https://huggingface.co/datasets/xwk123/Mobile3M
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：界面理解
- 证据核查日期：2026-10-16T06:38:26Z
- ID：url:b80bfa0a4939a493a11f

- 完整记录 JSON：https://awesomecua.com/resources/url-b80bfa0a4939a493a11f/record.json

## 结构化规格

- 格式：7z app-graph archives, multipart 7z files
- 模态：未记录
- 数据划分：partial training release
- 监督信号：mobile UI pretraining for MobileVLM

### 数量记录

未记录数量。

Official README calls this a partial training release and says app data will be uploaded gradually. Its training-JSON and test-data links point to separate Hub repositories with separate file and split inventories. Public revision 3df26694 lists app-graph archives; the downloadable example count remains unspecified. The card YAML says Apache-2.0 while its prose and official README assign CC-BY-NC-SA-4.0 to data and Apache to code; the existing data-license value remains unknown with the conflict documented.

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 数据审核：The retained first-party API has Apache-2.0 card metadata but its publisher description explicitly assigns Apache to source code and CC-BY-NC-SA-4.0 to the dataset. A single permissive dataset declaration is unresolved.
  来源：https://huggingface.co/api/datasets/xwk123/Mobile3M

## 一手证据

- https://huggingface.co/api/datasets/xwk123/Mobile3M（获取于 2026-10-16T06:38:26Z；SHA-256：356a8dca28fa3dc46bc05b13eaf04a3db273e63c06be4fd15d0e87e0343c0824）
- https://huggingface.co/datasets/xwk123/Mobile3M/raw/3df26694ff9186604eb44a8e633894d3ece67ed9/README.md（获取于 2026-10-17T14:10:01Z；SHA-256：8a097dbc7384d3743f262dc0164c176ed577bf720cbbc92ff8b3cd820d1aed4f）
- https://raw.githubusercontent.com/XiaoMi/mobilevlm/HEAD/README.md（获取于 2026-10-17T14:22:04Z；SHA-256：e8a92a783b6b65cacedf105e5ede583668f8774f2a81a2005dc6897da6fa88ef）
- https://huggingface.co/api/datasets/xwk123/Mobile3M（获取于 2026-10-16T06:38:26Z；SHA-256：356a8dca28fa3dc46bc05b13eaf04a3db273e63c06be4fd15d0e87e0343c0824）
