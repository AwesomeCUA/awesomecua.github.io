# GUI-Net-Mini

TongUI training mixture: about 143K samples from WikiHow, Baidu Experience and GUI videos plus reprocessed AITW, AMEX, GUIAct, Mind2Web, MiniWoB and ShowUI data, as grounding and navigation JSON with screenshots.

- Catalog URL: https://awesomecua.com/resources/url-0627940da1b988739f75/
- Original source: https://huggingface.co/datasets/Bofeee5675/GUI-Net-Mini
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android, web, desktop
- Topics: data-generation, grounding, imitation-learning
- Evidence checked: 2026-10-18T15:46:31Z
- ID: url:0627940da1b988739f75

## Limitations

The card is titled TongUI-143K. The TongUI training docs list this repository beside GUI-Net-1M as 143k TongUI-collected samples plus about 240k from previous work, used for scaling experiments, and their default 3B configuration, which they say reproduces the paper's results, names 13 datasets whose dataset_info.json files are exactly this repository's 13 annotation files. A streaming script over those files counts 143,856 records in the three TongUI-collected files (WikiHow, Baidu Experience, GUI video) and 379,517 in the ten files reprocessed from AITW, AMEX, GUIAct, Mind2Web, MiniWoB and ShowUI; the card's 237K 'Other' figure matches the 237,564 records in eight of those ten, leaving out the AMEX element and ShowUI web grounding files (141,953 records). Records are LLaMA-Factory conversations: coordinate-prediction grounding turns, or navigation steps with a thought and a JSON action in a smartphone, computer or website action space depending on the file. Screenshots come as 24 split ZIP parts (about 254 GB in the manifest). Apache-2.0 is the card's declaration; the reprocessed datasets and the tutorial and video content keep their own terms.

- Record JSON: https://awesomecua.com/resources/url-0627940da1b988739f75/record.json

## Structured profile

- Formats: LLaMA-Factory JSON conversations, multipart ZIP image archive
- Modalities: screenshots, instructions, reasoning traces, actions
- Splits: training collection
- Supervision: GUI grounding coordinates, GUI navigation steps with thoughts and actions

### Count observations

- ≈ 143,000 training samples — TongUI-collected part, card table (reported; source: https://huggingface.co/datasets/Bofeee5675/GUI-Net-Mini/raw/7c1ed0cd8fea76d5eba868114d2d6374d4370a12/README.md)
- ≈ 237,000 training samples — data from other sources, card table (reported; source: https://huggingface.co/datasets/Bofeee5675/GUI-Net-Mini/raw/7c1ed0cd8fea76d5eba868114d2d6374d4370a12/README.md)
- 13 JSON annotation files — Hub manifest at revision 7c1ed0cd (computed) (computed; source: https://huggingface.co/api/datasets/Bofeee5675/GUI-Net-Mini/revision/7c1ed0cd8fea76d5eba868114d2d6374d4370a12)
- 24 split ZIP image archive parts — Hub manifest at revision 7c1ed0cd (computed) (computed; source: https://huggingface.co/api/datasets/Bofeee5675/GUI-Net-Mini/revision/7c1ed0cd8fea76d5eba868114d2d6374d4370a12)

The card states numbers without a unit; the training docs call them training data. Record counts computed by streaming the 13 annotation files are in the record notes; the card's two figures and the file counts are different populations and units and are counted separately. No validation or test split is published.

## License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/Bofeee5675/GUI-Net-Mini/raw/7c1ed0cd8fea76d5eba868114d2d6374d4370a12/README.md
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/Bofeee5675/GUI-Net-Mini/raw/7c1ed0cd8fea76d5eba868114d2d6374d4370a12/README.md (retrieved 2026-10-18T15:46:31Z; SHA-256 5559391b26a6541363ea50de16b1c91b3958c18b2668020ccd5daff3b33e5626)
- https://huggingface.co/api/datasets/Bofeee5675/GUI-Net-Mini/revision/7c1ed0cd8fea76d5eba868114d2d6374d4370a12 (retrieved 2026-10-18T15:46:29Z; SHA-256 c9a580a8e25cc011273aa2f7ea10a6045f10787897c51eed50dd172ea1c3cad7)
- https://raw.githubusercontent.com/TongUI-agent/TongUI-agent/82631b583180cdc870b4774d2495dd94f1558c46/docs/train.md (retrieved 2026-10-18T15:46:29Z; SHA-256 b51acb70c95d079ccbe1de0a685ad7c8a4b3b5bed11e6162e6f7c2f60d78805e)
- https://raw.githubusercontent.com/TongUI-agent/TongUI-agent/82631b583180cdc870b4774d2495dd94f1558c46/data/dataset_info.json (retrieved 2026-10-18T15:46:29Z; SHA-256 1287032d17f24bf89313569bd210811675a78d0b2fce73824502d23b16f06ad4)
- https://huggingface.co/datasets/Bofeee5675/GUI-Net-Mini/raw/7c1ed0cd8fea76d5eba868114d2d6374d4370a12/README.md (retrieved 2026-10-18T15:46:31Z; SHA-256 5559391b26a6541363ea50de16b1c91b3958c18b2668020ccd5daff3b33e5626)
