# GUIMid training data

已发布的 GUI 智能体中期训练混合数据及配套领域数据集，另含后期训练轨迹文件和网页、移动端交互图像归档。

- 目录页面：https://awesomecua.com/zh/resources/url-422010da7a5c845a18f6/
- English：https://awesomecua.com/resources/url-422010da7a5c845a18f6/index.md
- 原始来源：https://huggingface.co/datasets/hkust-nlp/GUIMid
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、Android
- 主题：模仿学习、规划、界面理解
- 证据核查日期：2026-10-17T11:23:07Z
- ID：url:422010da7a5c845a18f6

## 范围记录

The public manifest includes GUIMid.json, mavis.tar.gz, GUI_trajectory.json, traj.tar.gz and domain-specific JSON files. The card says image data for some individual domains is still forthcoming and its overview inconsistently says nine tasks while later enumerating seven vision-language plus four language-only domains; no aggregate task/sample count is inferred. Training code remains marked coming soon in the repository. MIT is the publisher dataset declaration, not a relicensing of all upstream content.

- 完整记录 JSON：https://awesomecua.com/resources/url-422010da7a5c845a18f6/record.json

## 结构化规格

- 格式：JSON, tar.gz image archives
- 模态：text, images
- 数据划分：train configurations for named mid-training domains
- 监督信号：mid-training instruction supervision, GUI post-training trajectories

### 数量记录

未记录数量。

Hub size bands and the inconsistent introductory task count use different units from a verified sample total. Some constituent-domain image packages remain forthcoming.

## 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/hkust-nlp/GUIMid/raw/main/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：Publisher dataset-card declaration for the released packaging.
  来源：https://huggingface.co/datasets/hkust-nlp/GUIMid/raw/main/README.md

## 一手证据

- https://huggingface.co/datasets/hkust-nlp/GUIMid/raw/main/README.md（获取于 2026-10-17T11:23:07Z；SHA-256：1cdf702c819ecf370f4191c6c71fae7b579cfbaf766908b42156964a69eddacc）
- https://huggingface.co/api/datasets/hkust-nlp/GUIMid（获取于 2026-10-17T11:23:07Z；SHA-256：ededa2b3c8f21af8188152b028758c800db76cdbb8461ba82b8574cab375914e）
- https://api.github.com/repos/hkust-nlp/GUIMid（获取于 2026-10-17T11:18:19Z；SHA-256：31b836da66c6907ff9a75ebc7f06da0db67e7d9fe9ca92d0c770f5f15f90a39e）
- https://raw.githubusercontent.com/hkust-nlp/GUIMid/HEAD/README.md（获取于 2026-10-17T11:18:19Z；SHA-256：d9f63a03088c37f7145725c7a182100d1593fceadd26a9bf817d434ca8d6297e）
