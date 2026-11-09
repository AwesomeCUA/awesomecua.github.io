# Click-100k

101,314 组截图与指令配对数据，附点击定位目标框，从公开 GUI 定位数据集及教程视频帧中筛选，并配有 EasyR1 点位预测提示。

- 目录页面：https://awesomecua.com/zh/resources/url-bf847949766b2b257d1c/
- English：https://awesomecua.com/resources/url-bf847949766b2b257d1c/index.md
- 原始来源：https://huggingface.co/datasets/mlfoundations/Click-100k
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、网页
- 主题：GUI 定位、数据生成
- 证据核查日期：2026-10-18T15:54:59Z
- ID：url:bf847949766b2b257d1c

## 范围记录

Sources named by the card: ShowUI (web and desktop), AutoGUI, PC-Agent-E, WaveUI, OS-Atlas, UGround, PixMo Points, SeeClick, UI-Vision, a Jedi spreadsheet subset and frames from professional-application tutorial videos labelled with Claude 4 Sonnet (the card says 85 videos, the release README 80+). Each source was capped at 50k instances, and noisy or trivial samples were removed with OmniParser and grounding-model filters. The card says SeeClick, PixMo and UGround samples were excluded during RL training, so the training subset is smaller than the release. The release declares no data license, and the upstream sources keep their own terms. The training config names the dataset mlfoundations/clicks-100k, a spelling that differs from this Hub ID.

- 完整记录 JSON：https://awesomecua.com/resources/url-bf847949766b2b257d1c/record.json

## 结构化规格

- 格式：Parquet
- 模态：screenshots, instructions, bounding boxes
- 数据划分：train
- 监督信号：element instructions with target bounding boxes

### 数量记录

- 101,314 examples — train split (dataset_info in the card metadata)（来源报告；来源：https://huggingface.co/datasets/mlfoundations/Click-100k/raw/f728db8f1dab96b09f8042c309fffb810f8e19e7/README.md）
- 64 Parquet shards — data/ at Hub revision f728db8f（计算得出；来源：https://huggingface.co/api/datasets/mlfoundations/Click-100k/revision/f728db8f1dab96b09f8042c309fffb810f8e19e7）

Each row holds an image path, the image, an EasyR1 prompt that embeds the element description, pixel and normalized boxes and the image size. Examples and shards are different units. Per-source counts are not given.

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 数据审核：Neither the dataset card nor the release repository declares a license for Click-100k; the code repository has no license file, and the upstream sources keep their own terms.
  来源：https://huggingface.co/datasets/mlfoundations/Click-100k/raw/f728db8f1dab96b09f8042c309fffb810f8e19e7/README.md

## 一手证据

- https://huggingface.co/datasets/mlfoundations/Click-100k/raw/f728db8f1dab96b09f8042c309fffb810f8e19e7/README.md（获取于 2026-10-18T15:54:59Z；SHA-256：3d6d130f966f51338eb58cae805640aa37db9985a7bbc86fa95417bcbef4fe01）
- https://huggingface.co/api/datasets/mlfoundations/Click-100k/revision/f728db8f1dab96b09f8042c309fffb810f8e19e7（获取于 2026-10-18T15:53:39Z；SHA-256：e3636612b79e3c042500613bf351bb4202669acaf1d3ccbb82cc73279bc049a8）
- https://raw.githubusercontent.com/mlfoundations/Gelato/2a8757d473a63d34f71b043192d08dad61d298ee/README.md（获取于 2026-10-18T15:53:38Z；SHA-256：437eb06553ed6d63d871d18842906b26b6148db5b0a5489064736ef6f5f0cfcf）
- https://raw.githubusercontent.com/mlfoundations/Gelato/2a8757d473a63d34f71b043192d08dad61d298ee/training_configs/README.md（获取于 2026-10-18T15:53:37Z；SHA-256：c2a6c7ebe068b732f3e2cf21ee085c1ca375e4c044e39a053bd34e74c0287669）
