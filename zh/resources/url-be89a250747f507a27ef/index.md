# MoGUI

Android 应用 GUI 抓取数据包含逐应用导航图，以 UI 操作连接屏幕 ID，另有 200 个分片归档保存捕获的屏幕。

- 目录页面：https://awesomecua.com/zh/resources/url-be89a250747f507a27ef/
- English：https://awesomecua.com/resources/url-be89a250747f507a27ef/index.md
- 原始来源：https://huggingface.co/datasets/OpenDFM/MoGUI
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：界面理解、数据生成、手机操作
- 证据核查日期：2026-10-19T06:19:12Z
- ID：url:be89a250747f507a27ef

## 范围记录

The card carries the license, links and citation requests (MobA, META-GUI, CAM-GUI and a MoGUI/MoCon technical report); the announced complete report remains unlinked, leaving the paper relation unrecorded. The repository's MoGUI_Paper_v0.1.pdf is a two-page pre-release announcement without methods or statistics. Android is established by the metadata: Google Play package names, android.widget element classes and Android permission-controller screens. At revision 19639219 the manifest holds 200 metadata JSON shards, 200 moguidata tar.gz shards totalling about 1.14 TB, and an apk_infos.json file of Google Play listing fields per package. Metadata shard 1 alone holds navigation graphs for 1,084 app packages listing 13,726 valid screens. A streamed read of the start of the first tar.gz shard showed per-app folders of PNG screenshots with same-named XML files. CC BY-NC-SA 4.0 is the card's data declaration and does not establish rights to the third-party apps shown. The sibling MoCon dataset is a separate release.

- 完整记录 JSON：https://awesomecua.com/resources/url-be89a250747f507a27ef/record.json

## 结构化规格

- 格式：JSON, tar.gz archives, PNG, XML
- 模态：UI action strings naming element text, package, widget class and bounds, screenshots (seen in a partial archive read), XML view hierarchies (seen in a partial archive read)
- 数据划分：未记录
- 监督信号：crawled screen-transition navigation graphs

### 数量记录

未记录数量。

Each metadata shard maps an app package to a root screen, a valid-screen list and a navigation graph whose nodes are screen hashes with next screens and the triggering actions. Only metadata shard 1 was counted; total app, screen and transition counts remain unspecified by the publisher, and file counts are a separate unit from samples.

## 许可证信息

- 代码：未记录
- 数据：cc-by-nc-sa-4.0 — https://huggingface.co/datasets/OpenDFM/MoGUI/raw/19639219617d083a03e24842fc620e010cc63189/README.md
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/OpenDFM/MoGUI/raw/19639219617d083a03e24842fc620e010cc63189/README.md（获取于 2026-10-19T06:19:12Z；SHA-256：bb6ec801aed5db9d540cf3ccbae6a5e6bc2c26348d69dd34c72c3d88a57492b8）
- https://huggingface.co/api/datasets/OpenDFM/MoGUI/revision/19639219617d083a03e24842fc620e010cc63189（获取于 2026-10-19T06:19:11Z；SHA-256：aa4356912f147cade9b4f9067103beff80dc594f7b6562f6ae61ac4b9ef9bb71）
- https://huggingface.co/datasets/OpenDFM/MoGUI/resolve/19639219617d083a03e24842fc620e010cc63189/metadata/data_00001_of_00200.json（获取于 2026-10-18T16:04:11Z；SHA-256：758a3c377b240a779d73b96b4c2ac5a185c99e0dc04bbda5d4dbcaa3ae59f166）
- https://huggingface.co/api/datasets/OpenDFM/MoGUI/tree/19639219617d083a03e24842fc620e010cc63189/moguidata（获取于 2026-10-18T16:04:13Z；SHA-256：a518ed2d7726225d4c399bdd06c3d9e1a5333425b6dd86446e3d22f2fef1a007）
- https://huggingface.co/datasets/OpenDFM/MoGUI/resolve/19639219617d083a03e24842fc620e010cc63189/MoGUI_Paper_v0.1.pdf（获取于 2026-10-18T16:04:23Z；SHA-256：5f7a66c12756ae057bbd3216e45b874825e671769e751cd7efb31081d05a52f5）
- https://huggingface.co/datasets/OpenDFM/MoGUI/raw/19639219617d083a03e24842fc620e010cc63189/README.md（获取于 2026-10-19T06:19:12Z；SHA-256：bb6ec801aed5db9d540cf3ccbae6a5e6bc2c26348d69dd34c72c3d88a57492b8）
