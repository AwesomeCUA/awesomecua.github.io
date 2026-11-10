# Screen Annotation

Google Research 发布的 ScreenAI Screen Annotation 数据；训练、验证和测试 CSV 按类型、边界框坐标、屏幕文字和图像说明描述 Rico 移动端界面元素。

- 目录页面：https://awesomecua.com/zh/resources/github-google-research-datasets-screen-annotation/
- English：https://awesomecua.com/resources/github-google-research-datasets-screen-annotation/index.md
- 原始来源：https://github.com/google-research-datasets/screen_annotation
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：界面理解
- 证据核查日期：2026-10-18T12:32:42Z
- ID：github:google-research-datasets/screen_annotation

## 范围记录

Each CSV row pairs a Rico screen ID with one text serialization of the screen's UI elements, nested by containment; screenshots come from Rico, which the Rico paper describes as Android apps. The README says the labels were produced automatically and then verified and corrected by human raters, and that the splits follow Screen2Words. Its per-split figures (15,743, 2,364 and 4,310 screenshots) are larger than the rows in the CSVs at commit 053a4a1c: 15,548 train, 2,311 valid and 4,217 test. The README names the columns image_id and label, while the files use screen_id and screen_annotation. CC BY 4.0 is the README's dataset declaration; the repository has no LICENSE file, and Rico screenshots keep their own terms.

- 完整记录 JSON：https://awesomecua.com/resources/github-google-research-datasets-screen-annotation/record.json

## 结构化规格

- 格式：CSV
- 模态：text annotations, bounding-box coordinates, Rico screen IDs
- 数据划分：train, valid, test
- 监督信号：screen annotation: UI element type, location, text and image description

### 数量记录

- 15,743 张截图 — train split as stated in the README (Screen2Words split)（来源报告；来源：https://raw.githubusercontent.com/google-research-datasets/screen_annotation/053a4a1c4737969def99fd36084d7adf3715798f/README.md）
- 2,364 张截图 — validation split as stated in the README (Screen2Words split)（来源报告；来源：https://raw.githubusercontent.com/google-research-datasets/screen_annotation/053a4a1c4737969def99fd36084d7adf3715798f/README.md）
- 4,310 张截图 — test split as stated in the README (Screen2Words split)（来源报告；来源：https://raw.githubusercontent.com/google-research-datasets/screen_annotation/053a4a1c4737969def99fd36084d7adf3715798f/README.md）
- 2,311 个已标注界面（CSV 行） — valid.csv at commit 053a4a1c（计算得出）（来源：https://raw.githubusercontent.com/google-research-datasets/screen_annotation/053a4a1c4737969def99fd36084d7adf3715798f/valid.csv）
- 4,217 个已标注界面（CSV 行） — test.csv at commit 053a4a1c（计算得出）（来源：https://raw.githubusercontent.com/google-research-datasets/screen_annotation/053a4a1c4737969def99fd36084d7adf3715798f/test.csv）

The README's split sizes count screenshots; the CSV row counts count annotated screens, one row per screen ID. train.csv holds 15,548 rows at the same commit. Labels were machine-generated and then verified and corrected by human raters, according to the README.

## 许可证信息

- 代码：未记录
- 数据：CC-BY-4.0 — https://raw.githubusercontent.com/google-research-datasets/screen_annotation/053a4a1c4737969def99fd36084d7adf3715798f/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：The README states that the dataset is licensed under CC BY 4.0; Rico screenshots keep their own terms.
  来源：https://raw.githubusercontent.com/google-research-datasets/screen_annotation/053a4a1c4737969def99fd36084d7adf3715798f/README.md

## 一手证据

- https://raw.githubusercontent.com/google-research-datasets/screen_annotation/053a4a1c4737969def99fd36084d7adf3715798f/README.md（获取于 2026-10-18T12:32:42Z；SHA-256：db749dd869ced469a63b403173d9a69593778afc4afb43aacde4f2149d0485f9）
- https://api.github.com/repos/google-research-datasets/screen_annotation/git/trees/053a4a1c4737969def99fd36084d7adf3715798f?recursive=1（获取于 2026-10-18T12:32:43Z；SHA-256：ca12adf80ac7aa1efa98dab82d3a533fb40b49eeb8510f28df696788efa5236a）
- https://danafergan.com/publications/deka2017rico.pdf（获取于 2026-10-18T12:33:11Z；SHA-256：a1ec58c526b152c052c5c72f9a62725f1026b5f0e4f45c8fe85fce284295da84）
- https://raw.githubusercontent.com/google-research-datasets/screen_annotation/053a4a1c4737969def99fd36084d7adf3715798f/valid.csv（获取于 2026-10-18T12:32:44Z；SHA-256：a1f5928168d2dc71e70f41f8dcd7cc8f855d76bde709ddfd4b58e4660aa18457）
- https://raw.githubusercontent.com/google-research-datasets/screen_annotation/053a4a1c4737969def99fd36084d7adf3715798f/test.csv（获取于 2026-10-18T12:32:44Z；SHA-256：db247ac02ce875c49c3429ae0bdfef0039cacc663598c61b7541f24342537f98）
