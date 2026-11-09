# WildGUI Screenshots (parts 16-19)

配套 Hub 仓库存放 WildGUI 第 16 至 19 部分的截图 tar 分片；对应的轨迹标注及其他部分的图像位于 WildGUI 主仓库。

- 目录页面：https://awesomecua.com/zh/resources/url-348f31b5b339403ec26f/
- English：https://awesomecua.com/resources/url-348f31b5b339403ec26f/index.md
- 原始来源：https://huggingface.co/datasets/joker-112/WildGUI_Screenshots
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、网页、桌面
- 主题：数据生成、视频
- 证据核查日期：2026-10-18T12:28:47Z
- ID：url:348f31b5b339403ec26f

## 范围记录

The repository contains only JPEG frames packed in tar shards (671 for part16, 878 for part17, 212 for part18 and 161 for part19) and no annotations; each frame is stored as {video_id}/screenshot_{MM_SS}.jpg and is linked to an action through the annotation's video_id and timestamp. The card notes that a small fraction of annotated frames may be missing. The Video2GUI project README lists this repository as part of the WildGUI release. The data license is the card's CC-BY-NC-4.0 declaration; frames derived from third-party tutorial videos keep their own rights.

- 完整记录 JSON：https://awesomecua.com/resources/url-348f31b5b339403ec26f/record.json

## 结构化规格

- 格式：tar archives of JPEG frames
- 模态：screenshots
- 数据划分：未记录
- 监督信号：frames referenced by video-derived trajectory annotations

### 数量记录

- 1,922 screenshot tar shards — Hub repository at revision 8d31cbd4 (parts 16-19)（计算得出；来源：https://huggingface.co/api/datasets/joker-112/WildGUI_Screenshots/revision/8d31cbd45c9cb82683bbd5dea767782bb604fbcd）

Shard count computed by script from the pinned Hub API file list; it counts files. The card says each shard holds up to about 20,000 frames; the number of frames was not counted.

## 许可证信息

- 代码：未记录
- 数据：cc-by-nc-4.0 — https://huggingface.co/datasets/joker-112/WildGUI_Screenshots/raw/8d31cbd45c9cb82683bbd5dea767782bb604fbcd/README.md
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/joker-112/WildGUI_Screenshots/raw/8d31cbd45c9cb82683bbd5dea767782bb604fbcd/README.md（获取于 2026-10-18T12:28:47Z；SHA-256：4f2bbaa917b3c4c5927bcd4f23a5e882c58d0610e07f982e6549c840b942c64d）
- https://huggingface.co/api/datasets/joker-112/WildGUI_Screenshots/revision/8d31cbd45c9cb82683bbd5dea767782bb604fbcd（获取于 2026-10-18T12:27:41Z；SHA-256：7532cb6ed1d70aab3c8aa3fc0cc76a4e52809f0440179f0c8f2de4bdfb6349e4）
- https://raw.githubusercontent.com/WeiminXiong/Video2GUI/02f61de0c329f6763ce1b130596a650e4a9291f1/README.md（获取于 2026-10-18T12:27:41Z；SHA-256：5e3e6a0baa737232700c39449d4cbe48dc7e4640fe0de12f521e03b6e7d64f92）
- https://huggingface.co/datasets/joker-112/WildGUI_Screenshots/raw/8d31cbd45c9cb82683bbd5dea767782bb604fbcd/README.md（获取于 2026-10-18T12:28:47Z；SHA-256：4f2bbaa917b3c4c5927bcd4f23a5e882c58d0610e07f982e6549c840b942c64d）
