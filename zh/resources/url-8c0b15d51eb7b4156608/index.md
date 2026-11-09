# ScreenParser

IBM Research 与 ETH Zurich 的 YOLO11-L UI 元素检测器，在网页截图中框选并标注 55 类元素；主检查点在 ScreenParse v2 上训练，v1 检测器保留于分支中。

- 目录页面：https://awesomecua.com/zh/resources/url-8c0b15d51eb7b4156608/
- English：https://awesomecua.com/resources/url-8c0b15d51eb7b4156608/index.md
- 原始来源：https://huggingface.co/docling-project/ScreenParser
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：界面理解
- 证据核查日期：2026-10-18T12:04:56Z
- ID：url:8c0b15d51eb7b4156608

## 范围记录

The model outputs boxes, class labels and confidences only, without element text; the card suggests OCR or a separate vision-language model for text. It is trained on rendered web screenshots, and the card warns that results may differ on native desktop or mobile screens. The main-branch Hub manifest holds one Ultralytics weight file, best.pt, and the card gives a 1280-pixel fine-tuning resolution. Apache-2.0 is the card's weight declaration; base-model and training-data terms are separate.

- 完整记录 JSON：https://awesomecua.com/resources/url-8c0b15d51eb7b4156608/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：Apache-2.0 — https://huggingface.co/docling-project/ScreenParser/raw/f029e565f1206577402e43206454522075be3f72/README.md

- 权重审核：Publisher model-card declaration for this checkpoint; base-model and training-data terms are separate.
  来源：https://huggingface.co/docling-project/ScreenParser/raw/f029e565f1206577402e43206454522075be3f72/README.md

## 一手证据

- https://huggingface.co/docling-project/ScreenParser/raw/f029e565f1206577402e43206454522075be3f72/README.md（获取于 2026-10-18T12:04:56Z；SHA-256：0889bc9a333b47c638fd1e0e437c89c0d76202d9a6fdc419479c5008d52e9aa6）
- https://huggingface.co/api/models/docling-project/ScreenParser（获取于 2026-10-18T12:04:56Z；SHA-256：be47c7821b642c03e5965e1ce4870b2b6f8240f8418c27469f1ced07293a4909）
- https://huggingface.co/docling-project/ScreenParser/raw/f029e565f1206577402e43206454522075be3f72/README.md（获取于 2026-10-18T12:04:56Z；SHA-256：0889bc9a333b47c638fd1e0e437c89c0d76202d9a6fdc419479c5008d52e9aa6）
