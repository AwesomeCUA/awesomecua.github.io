# ScreenDrag

包含屏幕观察、先前状态和连续指针操作的 GUI 拖动数据，以轨迹文件和 Parquet 格式提供。

- 目录页面：https://awesomecua.com/zh/resources/url-fe43af1801032be708cc/
- English：https://awesomecua.com/resources/url-fe43af1801032be708cc/index.md
- 原始来源：https://huggingface.co/datasets/h-siyuan/ScreenDrag
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：GUI 定位、评测
- 证据核查日期：2026-10-16T11:12:56Z
- ID：url:fe43af1801032be708cc

## 范围记录

Raw and Parquet folders are alternative views of the same data. The inspected card did not state a license.

- 完整记录 JSON：https://awesomecua.com/resources/url-fe43af1801032be708cc/record.json

## 结构化规格

- 格式：Parquet, episode files
- 模态：screen images, instructions, previous state, continuous actions
- 数据划分：train, test
- 监督信号：continuous GUI dragging

### 数量记录

未记录数量。

Raw and Parquet folders are alternative views of the same data. Each sample describes a dragging task over multiple timesteps; action vectors encode button state and coordinates.

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/h-siyuan/ScreenDrag/raw/main/README.md（获取于 2026-10-16T11:12:56Z；SHA-256：39c7c028f7ef5ca5c75f79b59a107c7e25444776095a2a08bb7535c4f523f7fa）
- https://raw.githubusercontent.com/showlab/showui-pi/HEAD/README.md（获取于 2026-10-16T11:09:28Z；SHA-256：88df552ccbe80efd7020905d77d526f4f9efe2d09a11fed2714b083988f9dcef）
