# WebLINX dataset

WebLINX 1.0 的 Hub 数据将对话式网页导航演示预处理为逐轮记录，包含对话、清理后的 HTML、候选元素和操作历史，并提供重排序数据。

- 目录页面：https://awesomecua.com/zh/resources/url-1517e989c470563bd08d/
- English：https://awesomecua.com/resources/url-1517e989c470563bd08d/index.md
- 原始来源：https://huggingface.co/datasets/McGill-NLP/WebLINX
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、人机协作、动作预测
- 证据核查日期：2026-10-18T15:49:24Z
- ID：url:1517e989c470563bd08d

## 范围记录

The WebLINX repository README calls this the official dataset page and its library loads the data. The main revision a30ff2cb holds the preprocessed chat and reranking configurations, per-split CSV files, splits.json and prompt templates; the card points to a separate McGill-NLP/WebLINX-full repository for the complete raw demonstrations outside this record. The card describes WebLINX 1.1, a reprocessed BrowserGym release in another Hub repository, and links this original release as the v1.0 tag. CC-BY-NC-SA-4.0 with added terms of use is the card's data declaration; the code repository's Apache-2.0 license is separate.

- 完整记录 JSON：https://awesomecua.com/resources/url-1517e989c470563bd08d/record.json

## 结构化规格

- 格式：gzip-compressed JSON Lines, CSV, JSON
- 模态：dialogue utterances, cleaned HTML, candidate element descriptions, action history, viewport size
- 数据划分：train, valid, test_iid, test_geo, test_vis, test_cat, test_web
- 监督信号：next action per navigator turn, conversational instructions and responses

### 数量记录

- 2,337 条演示 — all splits in splits.json at revision a30ff2cb (train, valid and five test splits; disjoint)（计算得出）（来源：https://huggingface.co/datasets/McGill-NLP/WebLINX/raw/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/splits.json）
- 969 条演示 — train split in splits.json at revision a30ff2cb（计算得出）（来源：https://huggingface.co/datasets/McGill-NLP/WebLINX/raw/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/splits.json）
- 100 条演示 — valid split in splits.json at revision a30ff2cb（计算得出）（来源：https://huggingface.co/datasets/McGill-NLP/WebLINX/raw/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/splits.json）
- 100 条演示 — test_iid split in splits.json at revision a30ff2cb（计算得出）（来源：https://huggingface.co/datasets/McGill-NLP/WebLINX/raw/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/splits.json）
- 290 条演示 — test_geo split in splits.json at revision a30ff2cb（计算得出）（来源：https://huggingface.co/datasets/McGill-NLP/WebLINX/raw/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/splits.json）
- 444 条演示 — test_vis split in splits.json at revision a30ff2cb（计算得出）（来源：https://huggingface.co/datasets/McGill-NLP/WebLINX/raw/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/splits.json）
- 223 条演示 — test_cat split in splits.json at revision a30ff2cb（计算得出）（来源：https://huggingface.co/datasets/McGill-NLP/WebLINX/raw/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/splits.json）
- 211 条演示 — test_web split in splits.json at revision a30ff2cb（计算得出）（来源：https://huggingface.co/datasets/McGill-NLP/WebLINX/raw/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/splits.json）
- 2,126 条 chat-config 轮次记录 — valid split, data/chat/valid.json.gz at revision a30ff2cb（计算得出）（来源：https://huggingface.co/datasets/McGill-NLP/WebLINX/resolve/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/data/chat/valid.json.gz）
- 2,308 条 chat-config 轮次记录 — test_iid split, data/chat/test_iid.json.gz at revision a30ff2cb（计算得出）（来源：https://huggingface.co/datasets/McGill-NLP/WebLINX/resolve/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/data/chat/test_iid.json.gz）
- 7,672 条 chat-config 轮次记录 — test_geo split, data/chat/test_geo.json.gz at revision a30ff2cb（计算得出）（来源：https://huggingface.co/datasets/McGill-NLP/WebLINX/resolve/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/data/chat/test_geo.json.gz）
- 9,023 条 chat-config 轮次记录 — test_vis split, data/chat/test_vis.json.gz at revision a30ff2cb（计算得出）（来源：https://huggingface.co/datasets/McGill-NLP/WebLINX/resolve/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/data/chat/test_vis.json.gz）
- 5,971 条 chat-config 轮次记录 — test_cat split, data/chat/test_cat.json.gz at revision a30ff2cb（计算得出）（来源：https://huggingface.co/datasets/McGill-NLP/WebLINX/resolve/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/data/chat/test_cat.json.gz）
- 4,856 条 chat-config 轮次记录 — test_web split, data/chat/test_web.json.gz at revision a30ff2cb（计算得出）（来源：https://huggingface.co/datasets/McGill-NLP/WebLINX/resolve/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/data/chat/test_web.json.gz）

Counts were computed with a script. Demonstrations come from splits.json, whose seven splits are disjoint; its iid_all list is the union of valid and test_iid and overlaps those splits. Turn records are rows of the chat configuration, one per evaluated navigator turn, a different unit from demonstrations; the train file exceeds the catalog's 10 MB evidence budget, leaving its turn-record count unrecorded. The card's extra test split duplicates test_iid. The counts cover demonstrations and chat turn records; reranking files and CSVs fall outside those counts. Screenshots are not in this repository.

## 许可证信息

- 代码：未记录
- 数据：cc-by-nc-sa-4.0 — https://huggingface.co/datasets/McGill-NLP/WebLINX/raw/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/README.md
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/McGill-NLP/WebLINX/raw/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/README.md（获取于 2026-10-18T15:49:24Z；SHA-256：9bd7512e257f5914d66b091530d7eb711a6f90bc21dc89cbba53015c7136c527）
- https://huggingface.co/api/datasets/McGill-NLP/WebLINX/revision/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13（获取于 2026-10-18T15:48:39Z；SHA-256：940bc61bb13a1ea7a4a038a812161121d932e2cd5af4d866accc508839d401de）
- https://raw.githubusercontent.com/McGill-NLP/weblinx/9a7e814ffaac36d36ae5291dc3407c530055e16f/README.md（获取于 2026-10-18T15:48:40Z；SHA-256：15c3f1656afd861894b180bca7d9214b4cf78a6ad9cd0601c80f5d67d2839528）
- https://huggingface.co/datasets/McGill-NLP/WebLINX/raw/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/splits.json（获取于 2026-10-18T15:48:39Z；SHA-256：db6fd50e6b1ba053817ede3f2a8ec61a292ad2710dd7f4e300cf685f70d843e6）
- https://huggingface.co/datasets/McGill-NLP/WebLINX/resolve/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/data/chat/valid.json.gz（获取于 2026-10-18T15:48:42Z；SHA-256：086adc2ee12e711893a59e47822c08cf05cbf8c021db1e7a39f6fbc8d8cef7ab）
- https://huggingface.co/datasets/McGill-NLP/WebLINX/resolve/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/data/chat/test_iid.json.gz（获取于 2026-10-18T15:48:43Z；SHA-256：0bbdd414f371fea6b4e6741f821bd60aeaf13ba5114456d4cb901bd0e6617ba7）
- https://huggingface.co/datasets/McGill-NLP/WebLINX/resolve/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/data/chat/test_geo.json.gz（获取于 2026-10-18T15:48:44Z；SHA-256：738fb37c35acaa5a3bfe752886b258d5cacf09cdeec7abe1c71574074011a249）
- https://huggingface.co/datasets/McGill-NLP/WebLINX/resolve/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/data/chat/test_vis.json.gz（获取于 2026-10-18T15:48:45Z；SHA-256：7371eaa43dc95ff7482844afd840a98f8728df4364baf85e15688d134af07380）
- https://huggingface.co/datasets/McGill-NLP/WebLINX/resolve/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/data/chat/test_cat.json.gz（获取于 2026-10-18T15:48:46Z；SHA-256：b9ea603cba86761d0780490867bc22ea95ff59e5702dfd765fa58b17d25e7eab）
- https://huggingface.co/datasets/McGill-NLP/WebLINX/resolve/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/data/chat/test_web.json.gz（获取于 2026-10-18T15:48:47Z；SHA-256：10d780712da997da9ff2d15d642aa199410ebe5d30d2ea3f9ba56fb044a745db）
- https://huggingface.co/datasets/McGill-NLP/WebLINX/raw/a30ff2cbecb75f2d04fac75a2b92721c6c9e3f13/README.md（获取于 2026-10-18T15:49:24Z；SHA-256：9bd7512e257f5914d66b091530d7eb711a6f90bc21dc89cbba53015c7136c527）
