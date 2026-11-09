# GroundCUA dataset

GroundCUA 项目的桌面 GUI 定位数据：87 款应用的 PNG 截图按哈希与 JSON 标注配对，标注列出元素边界框、可见文字和可选的粗分类。

- 目录页面：https://awesomecua.com/zh/resources/url-f6c88faa4392848f81b6/
- English：https://awesomecua.com/resources/url-f6c88faa4392848f81b6/index.md
- 原始来源：https://huggingface.co/datasets/ServiceNow/GroundCUA
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Windows、macOS、Linux
- 主题：GUI 定位、界面理解、数据生成
- 证据核查日期：2026-10-18T15:33:17Z
- ID：url:f6c88faa4392848f81b6

## 范围记录

At revision 5d6845b0 a paged listing of the Hub tree gives 51,175 PNG screenshots under images/ and 51,175 JSON annotation files with the same hashes under data/, in 87 application folders. The project's GitHub README reports 56K screenshots and about 3.56M element annotations, so the Hub file count and the reported screenshot count differ. The card says categories are approximate and present only for some elements. The repository root also holds an instruction_tuning.tar.gz archive (about 202 MB). The card names Windows, macOS and Linux for the applications but does not label each screenshot's operating system. MIT is the card's data declaration and does not establish rights to the captured applications' content.

- 完整记录 JSON：https://awesomecua.com/resources/url-f6c88faa4392848f81b6/record.json

## 结构化规格

- 格式：PNG, JSON
- 模态：desktop screenshots, element annotations
- 数据划分：未记录
- 监督信号：UI element bounding boxes, element text or short descriptions, coarse element categories for some elements

### 数量记录

- 51,175 screenshot-annotation file pairs — Hub release at revision 5d6845b0 (images/*.png matched by hash to data/*.json)（计算得出；来源：https://huggingface.co/api/datasets/ServiceNow/GroundCUA/tree/5d6845b0116029d46ec762e734701c5b8ce207c3/data）
- 87 application folders — data/ at revision 5d6845b0（计算得出；来源：https://huggingface.co/api/datasets/ServiceNow/GroundCUA/tree/5d6845b0116029d46ec762e734701c5b8ce207c3/data）
- ≈ 56,000 screenshots — GroundCUA dataset as described in the project README（来源报告；来源：https://raw.githubusercontent.com/ServiceNow/GroundCUA/94cba61693d6258c7100f7016a299b84b1bb7732/README.md）
- ≈ 3,560,000 element annotations — GroundCUA dataset as described in the project README（来源报告；来源：https://raw.githubusercontent.com/ServiceNow/GroundCUA/94cba61693d6258c7100f7016a299b84b1bb7732/README.md）

Screenshots, file pairs, folders and element annotations are different units and are counted separately. The pair count was computed by paging the recursive Hub tree of data/ and images/ at revision 5d6845b0; the listed receipt records the 87 application folders. The README figures describe the project dataset. No train/test split is declared.

## 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/ServiceNow/GroundCUA/raw/5d6845b0116029d46ec762e734701c5b8ce207c3/README.md
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/ServiceNow/GroundCUA/raw/5d6845b0116029d46ec762e734701c5b8ce207c3/README.md（获取于 2026-10-18T15:33:17Z；SHA-256：fe18179d2a2de962e29b9cb7efbad79add481c65840d235163af0b8cb88d72da）
- https://huggingface.co/api/datasets/ServiceNow/GroundCUA?expand%5B%5D=sha&expand%5B%5D=gated&expand%5B%5D=disabled&expand%5B%5D=cardData&expand%5B%5D=lastModified（获取于 2026-10-18T15:34:25Z；SHA-256：1dfb2e14b6113d469314c2f1b752214d8f6f795710387b9f0e3769d218179191）
- https://huggingface.co/api/datasets/ServiceNow/GroundCUA/tree/5d6845b0116029d46ec762e734701c5b8ce207c3/data（获取于 2026-10-18T15:33:17Z；SHA-256：a0534eba3c6ef17b9d63eec787825e29507eed375e778effe84230930e00628b）
- https://huggingface.co/api/datasets/ServiceNow/GroundCUA/tree/5d6845b0116029d46ec762e734701c5b8ce207c3（获取于 2026-10-18T15:33:18Z；SHA-256：5ae73e5d203c9561fde9279e39e0dc15e375c2e806408d4addd8ae002de5849a）
- https://raw.githubusercontent.com/ServiceNow/GroundCUA/94cba61693d6258c7100f7016a299b84b1bb7732/README.md（获取于 2026-10-18T15:33:18Z；SHA-256：ea25e5db95415f19bcf42f37547912eed185b72441a4fa57a0c981a7f50d732a）
- https://huggingface.co/datasets/ServiceNow/GroundCUA/raw/5d6845b0116029d46ec762e734701c5b8ce207c3/README.md（获取于 2026-10-18T15:33:17Z；SHA-256：fe18179d2a2de962e29b9cb7efbad79add481c65840d235163af0b8cb88d72da）
