---
title: "VideoCUA | AwesomeCUA"
url: https://awesomecua.com/resources/url-78adf6919bdbce42bc24/
updated: 2026-10-18
type: dataset
lang: en
---

# VideoCUA

Expert desktop computer-use demonstrations from CUA-Suite: 30 fps screen recordings with millisecond-timestamped mouse and keyboard action logs for about 10K tasks in 87 applications.

- Catalog URL: https://awesomecua.com/resources/url-78adf6919bdbce42bc24/
- Original source: https://huggingface.co/datasets/ServiceNow/VideoCUA
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop
- Topics: video, recording, imitation-learning, action-prediction, data-generation
- Evidence checked: 2026-10-18T15:36:02Z
- ID: url:78adf6919bdbce42bc24

## Limitations

At revision 6ecc530d raw_data/ holds one ZIP archive per application, 87 in total and about 26.1 GB. The card describes each archive as task folders with an action_log.json (instruction, platform and timestamped actions) and a 1920x1080 MP4 recording with its metadata; each action carries a groundcua_id that the card says identifies the matching annotated GroundCUA screenshot. Frame extraction into trajectories and LLM-written chain-of-thought steps come from a pipeline in the GroundCUA GitHub repository; this release holds raw recordings and logs as source material. The card names no operating system. The card's metadata declares MIT; its linked LICENSE file is absent from the repository. Task, hour and frame figures are publisher-reported.

- Record JSON: https://awesomecua.com/resources/url-78adf6919bdbce42bc24/record.json

## Structured profile

- Formats: ZIP archives of MP4 video and JSON
- Modalities: screen recordings, action logs, instructions
- Splits: not recorded
- Supervision: human expert task demonstrations, timestamped mouse and keyboard actions, task instructions

### Count observations

- ≈ 10,000 tasks — VideoCUA corpus as stated on the card (reported; source: https://huggingface.co/datasets/ServiceNow/VideoCUA/raw/6ecc530df848f916bf0d195c66823ef8363abb93/README.md)
- ≈ 55 hours of 30 fps screen recording — VideoCUA corpus as stated on the card (reported; source: https://huggingface.co/datasets/ServiceNow/VideoCUA/raw/6ecc530df848f916bf0d195c66823ef8363abb93/README.md)
- ≈ 6,000,000 video frames — VideoCUA corpus as stated on the card (reported; source: https://huggingface.co/datasets/ServiceNow/VideoCUA/raw/6ecc530df848f916bf0d195c66823ef8363abb93/README.md)
- 87 per-application ZIP archives — raw_data/ at revision 6ecc530d (computed) (computed; source: https://huggingface.co/api/datasets/ServiceNow/VideoCUA/tree/6ecc530df848f916bf0d195c66823ef8363abb93/raw_data)

Tasks, hours, frames and archives are different units and are counted separately. The archive count is computed from the Hub tree listing; the card also reports 87 applications. No train/test split is declared.

## License declarations

- code: not recorded
- data: mit — https://huggingface.co/datasets/ServiceNow/VideoCUA/raw/6ecc530df848f916bf0d195c66823ef8363abb93/README.md
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/ServiceNow/VideoCUA/raw/6ecc530df848f916bf0d195c66823ef8363abb93/README.md (retrieved 2026-10-18T15:36:02Z; SHA-256 41b871f55b233cc8424ff55fa4294a66fd2f88fe1dbce9dea924fd651ae1b778)
- https://huggingface.co/api/datasets/ServiceNow/VideoCUA?expand%5B%5D=sha&expand%5B%5D=gated&expand%5B%5D=disabled&expand%5B%5D=cardData&expand%5B%5D=lastModified (retrieved 2026-10-18T15:36:02Z; SHA-256 75b4545d65bfb6a101a4624859802a4384e74eba85aacbf6d3f4e395d22ae3d3)
- https://huggingface.co/api/datasets/ServiceNow/VideoCUA/tree/6ecc530df848f916bf0d195c66823ef8363abb93/raw_data (retrieved 2026-10-18T15:36:02Z; SHA-256 fdc432015122390eb89b397ab7031b429ace6d56599ae37ef27a809abb05f254)
- https://huggingface.co/api/datasets/ServiceNow/VideoCUA/tree/6ecc530df848f916bf0d195c66823ef8363abb93 (retrieved 2026-10-18T15:36:03Z; SHA-256 32ffe76e0b63cd91c5b8f44af39630fc390e725061974acc55514d9b1232e87f)
- https://huggingface.co/datasets/ServiceNow/VideoCUA/raw/6ecc530df848f916bf0d195c66823ef8363abb93/README.md (retrieved 2026-10-18T15:36:02Z; SHA-256 41b871f55b233cc8424ff55fa4294a66fd2f88fe1dbce9dea924fd651ae1b778)
