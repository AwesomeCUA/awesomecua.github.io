---
title: "Grounding Multimodal Large Language… · 论文 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-dca82e9214c5926109f1/
updated: 2026-10-19
type: paper
lang: zh-CN
---

# Grounding Multimodal Large Language Model in GUI World

在 50 万张自动采集的网页截图及 3,500 万条元素标注上训练 0.4B 的 SAM 初始化 GUI 元素定位模型，再用位置词元将其连接到 Qwen-VL 规划器，用于 MiniWob、AITW 和 Mind2Web。

- 目录页面：https://awesomecua.com/zh/resources/url-dca82e9214c5926109f1/
- English：https://awesomecua.com/resources/url-dca82e9214c5926109f1/index.md
- 原始来源：https://openreview.net/forum?id=M9iky9Ruhx
- 类型：论文
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、网页、Android
- 主题：GUI 定位、数据生成、网页导航、手机操作
- 证据核查日期：2026-10-19T07:18:20Z
- ID：url:dca82e9214c5926109f1

## 范围记录

Reviewed against the ICLR 2025 proceedings page and PDF; the OpenReview forum lists it as an ICLR 2025 Poster. The grounding model, AssistGUIGrounder (AGG), pairs a SAM-pretrained ViT image encoder and a transformer query encoder with a two-layer box decoder. The data engine loads Common Crawl pages from 118 domains in a browser such as Chrome, scrolls them with Page Down and reads element data through UI Automation; grounding training used 0.36M web images with 22M annotations after smoothing, plus 27K mobile screenshots from WidgetCaption and RICO. ScreenSpot grounding covers mobile, desktop and web screenshots; agent fine-tuning covers MiniWob, AITW and Mind2Web. The paper gives github.com/showlab/AssistGUIGround for code and data; that repository returned HTTP 404 on 2026-10-19. No arXiv version was found.

- 完整记录 JSON：https://awesomecua.com/resources/url-dca82e9214c5926109f1/record.json

## 作者

Weixian Lei, Difei Gao, Mike Zheng Shou

## 引用文件

- BibTeX：https://awesomecua.com/resources/url-dca82e9214c5926109f1/citation.bib
- CSL JSON：https://awesomecua.com/resources/url-dca82e9214c5926109f1/citation.csl.json

```bibtex
@inproceedings{cua_c27a3db23e8af1cc49eabd20,
  title = {{Grounding Multimodal Large Language Model in GUI World}},
  author = {{Weixian Lei} and {Difei Gao} and {Mike Zheng Shou}},
  year = {2025},
  month = may,
  booktitle = {International Conference on Learning Representations 2025 (ICLR 2025)},
  volume = {2025},
  pages = {19742-19765},
  url = {https://openreview.net/forum?id=M9iky9Ruhx},
  note = {Publication date: 2025-05-01.}
}
```

## 发表记录

- 标题：Grounding Multimodal Large Language Model in GUI World
- 作者：Weixian Lei, Difei Gao, Mike Zheng Shou
- 发表日期：2025-05-01
- 发表来源：https://openreview.net/forum?id=M9iky9Ruhx
- 发表版 BibTeX：https://awesomecua.com/resources/url-dca82e9214c5926109f1/publication-citation.bib
- 发表版 CSL JSON：https://awesomecua.com/resources/url-dca82e9214c5926109f1/publication-citation.csl.json
- 发表于：International Conference on Learning Representations 2025 (ICLR 2025)
- 卷：2025
- 页码：19742-19765
- 日期来源：Publisher citation_publication_date metadata on the ICLR proceedings page states 2025-05-01; precision=day.
- 版本对应依据：Same work: the ICLR 2025 proceedings page and PDF carry the same title, three authors and abstract as OpenReview note M9iky9Ruhx (venue ICLR 2025 Poster), which was read in a browser because openreview.net answers automated clients with a challenge page. No arXiv preprint with this title was found.
- 来源备注：The proceedings page metadata lists the authors surname first; the PDF byline order and spelling are retained. The record URL is the OpenReview forum; the proceedings page and PDF are the retained receipts. No DOI is given.
- 发表证据：https://proceedings.iclr.cc/paper_files/paper/2025/hash/31fc85f7461ce71eadf27fb7281973bd-Abstract-Conference.html, https://proceedings.iclr.cc/paper_files/paper/2025/file/31fc85f7461ce71eadf27fb7281973bd-Paper-Conference.pdf

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://proceedings.iclr.cc/paper_files/paper/2025/hash/31fc85f7461ce71eadf27fb7281973bd-Abstract-Conference.html（获取于 2026-10-19T07:18:20Z；SHA-256：60075b72c7f1a92cc64e2d76048ad8d4049969210409245bab84cced1cd53a04）
- https://proceedings.iclr.cc/paper_files/paper/2025/file/31fc85f7461ce71eadf27fb7281973bd-Paper-Conference.pdf（获取于 2026-10-19T07:18:21Z；SHA-256：c5227784f66ec43bc1bd35c6d64f2a7958c4ee159a7a1bd7967b4cd6a3ee986a）
- https://proceedings.iclr.cc/paper_files/paper/2025/hash/31fc85f7461ce71eadf27fb7281973bd-Abstract-Conference.html（获取于 2026-10-19T07:18:20Z；SHA-256：60075b72c7f1a92cc64e2d76048ad8d4049969210409245bab84cced1cd53a04）
- https://proceedings.iclr.cc/paper_files/paper/2025/file/31fc85f7461ce71eadf27fb7281973bd-Paper-Conference.pdf（获取于 2026-10-19T07:18:21Z；SHA-256：c5227784f66ec43bc1bd35c6d64f2a7958c4ee159a7a1bd7967b4cd6a3ee986a）
