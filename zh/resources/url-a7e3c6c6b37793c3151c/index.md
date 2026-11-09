# MolmoPoint-GUISyn

Ai2 合成 GUI 元素定位数据集包含约 36K 张由代码渲染的桌面、移动端和网页截图，每张均有密集元素边界框、名称及每个元素的五条自然语言意图，用于训练指向模型。

- 目录页面：https://awesomecua.com/zh/resources/url-a7e3c6c6b37793c3151c/
- English：https://awesomecua.com/resources/url-a7e3c6c6b37793c3151c/index.md
- 原始来源：https://huggingface.co/datasets/allenai/MolmoPoint-GUISyn
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、桌面、Windows、macOS、Linux、Android、iOS、网页
- 主题：GUI 定位、数据生成
- 证据核查日期：2026-10-19T06:17:16Z
- ID：url:a7e3c6c6b37793c3151c

## 范围记录

Screenshots are rendered with headless Chromium from HTML that Claude Sonnet 4.6 wrote, so the Windows, macOS, Linux, iOS and Android labels describe simulated interfaces; the card says this content is subject to Anthropic's terms. Each example keeps its source HTML and generation metadata. The Hub repository also holds the MolmoPoint paper PDF; the generation pipeline and the companion pointing model are released separately.

- 完整记录 JSON：https://awesomecua.com/resources/url-a7e3c6c6b37793c3151c/record.json

## 结构化规格

- 格式：Parquet
- 模态：screenshots, HTML source, bounding boxes, instructions
- 数据划分：desktop train, desktop validation, mobile train, mobile validation, web train, web validation
- 监督信号：synthetic GUI element annotations, element names, natural-language interaction intents

### 数量记录

- ≈ 36,000 screenshots — all three subsets as described in the card prose（来源报告；来源：https://huggingface.co/datasets/allenai/MolmoPoint-GUISyn/raw/24bb3e990bb1e48796d80ade9dbc858dda695e75/README.md）
- 16,232 screenshot examples — desktop train split in the card metadata（来源报告；来源：https://huggingface.co/datasets/allenai/MolmoPoint-GUISyn/raw/24bb3e990bb1e48796d80ade9dbc858dda695e75/README.md）
- 256 screenshot examples — desktop validation split in the card metadata（来源报告；来源：https://huggingface.co/datasets/allenai/MolmoPoint-GUISyn/raw/24bb3e990bb1e48796d80ade9dbc858dda695e75/README.md）
- 9,830 screenshot examples — web train split in the card metadata（来源报告；来源：https://huggingface.co/datasets/allenai/MolmoPoint-GUISyn/raw/24bb3e990bb1e48796d80ade9dbc858dda695e75/README.md）
- 256 screenshot examples — web validation split in the card metadata（来源报告；来源：https://huggingface.co/datasets/allenai/MolmoPoint-GUISyn/raw/24bb3e990bb1e48796d80ade9dbc858dda695e75/README.md）
- ≈ 10,500 screenshot examples — mobile subset as described in the card prose（来源报告；来源：https://huggingface.co/datasets/allenai/MolmoPoint-GUISyn/raw/24bb3e990bb1e48796d80ade9dbc858dda695e75/README.md）

The card metadata gives split sizes for the desktop and web configurations only; the mobile configuration's sizes appear only as the prose figure of 10.5K. The prose figures for desktop (16.6K) and web (10.2K) differ slightly from the metadata split totals (16,488 and 10,086). Each element carries a name, five intents and center/size coordinates; the card reports an average of 54 annotated elements per image. Annotations are LLM-generated.

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 数据审核：Conflicting declarations in the same card: the metadata header declares Apache-2.0, while the License section declares ODC-BY and adds that Claude-generated screenshots are subject to Anthropic's terms. The GitHub code license does not resolve the data terms.
  来源：https://huggingface.co/datasets/allenai/MolmoPoint-GUISyn/raw/24bb3e990bb1e48796d80ade9dbc858dda695e75/README.md

## 一手证据

- https://huggingface.co/datasets/allenai/MolmoPoint-GUISyn/raw/24bb3e990bb1e48796d80ade9dbc858dda695e75/README.md（获取于 2026-10-19T06:17:16Z；SHA-256：74fe1e395b4121dec7ea222d2ee42d1b538f4d7445a2a59158d96d9208af01dd）
- https://huggingface.co/api/datasets/allenai/MolmoPoint-GUISyn/revision/24bb3e990bb1e48796d80ade9dbc858dda695e75（获取于 2026-10-19T06:17:16Z；SHA-256：df47b9fad1bfd4ec67013263cd4bfe1be0a32e3f303f2e13be068ac81bdc4101）
- https://huggingface.co/datasets/allenai/MolmoPoint-GUISyn/raw/24bb3e990bb1e48796d80ade9dbc858dda695e75/README.md（获取于 2026-10-19T06:17:16Z；SHA-256：74fe1e395b4121dec7ea222d2ee42d1b538f4d7445a2a59158d96d9208af01dd）
