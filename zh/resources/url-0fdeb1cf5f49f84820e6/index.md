# OS-Atlas Data

OS-Atlas 的 GUI 定位预训练数据，覆盖桌面端（Linux、macOS、Windows）、移动端和网页；元素框以左、上、右、下边界的相对比例存储。

- 目录页面：https://awesomecua.com/zh/resources/url-0fdeb1cf5f49f84820e6/
- English：https://awesomecua.com/resources/url-0fdeb1cf5f49f84820e6/index.md
- 原始来源：https://huggingface.co/datasets/OS-Copilot/OS-Atlas-data
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位、数据生成
- 证据核查日期：2026-10-16T06:38:26Z
- ID：url:0fdeb1cf5f49f84820e6

- 完整记录 JSON：https://awesomecua.com/resources/url-0fdeb1cf5f49f84820e6/record.json

## 结构化规格

- 格式：JSON annotations, image archives
- 模态：screenshots, referring expressions, bounding boxes
- 数据划分：未记录
- 监督信号：element grounding

### 数量记录

- > 270,000 screenshots — SeeClick-derived web subset（来源报告；来源：https://huggingface.co/datasets/OS-Copilot/OS-Atlas-data/raw/main/README.md）
- > 3,000,000 UI elements — SeeClick-derived web subset（来源报告；来源：https://huggingface.co/datasets/OS-Copilot/OS-Atlas-data/raw/main/README.md）
- ≥ 1,600,000 images — FineWeb-derived subset（来源报告；来源：https://huggingface.co/datasets/OS-Copilot/OS-Atlas-data/raw/main/README.md）

These are subset-specific counts for OS-Atlas. Raw boxes use 0–1 coordinates; the documented training wrapper scales them to 0–1000.

## 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/OS-Copilot/OS-Atlas-data
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/api/datasets/OS-Copilot/OS-Atlas-data（获取于 2026-10-16T06:38:26Z；SHA-256：c2c5f7b3f07d92349ffd8256792599c856ed77c89108c45dbaef48a4699abe20）
- https://huggingface.co/datasets/OS-Copilot/OS-Atlas-data/raw/main/README.md（获取于 2026-10-16T11:40:46Z；SHA-256：19f28b4bc0798e28180b968010c0f7c8dfed2dbfb24b122b958476b871d2e4fd）
- https://huggingface.co/api/datasets/OS-Copilot/OS-Atlas-data（获取于 2026-10-16T06:38:26Z；SHA-256：c2c5f7b3f07d92349ffd8256792599c856ed77c89108c45dbaef48a4699abe20）
