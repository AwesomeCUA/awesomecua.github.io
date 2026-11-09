# GTA1 cleaned grounding dataset

Cleaned GUI grounding training data linked by the GTA1 repository, drawn mainly from Aria-UI and OS-Atlas, with samples dropped when the target box and an OmniParser-detected element differ.

- Catalog URL: https://awesomecua.com/resources/url-d46306ac1d0a0cce573a/
- Original source: https://huggingface.co/datasets/HelloKKMe/grounding_dataset
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, web
- Topics: grounding, data-generation
- Evidence checked: 2026-10-18T12:28:59Z
- ID: url:d46306ac1d0a0cce573a

## Limitations

Hub revision 5c0836a5 lists the card, inp.json and ten split image archive parts (image.part.aa to image.part.aj); the repository is not gated and has no card metadata. The card describes desktop and web grounding sources and names no paper; the GTA1 repository README links this repository as GTA1's training data and cleaned dataset, which supports the paper relation. Salesforce later published a separate grounding release with a different field schema and more source datasets; this record covers only this upload. The license comes from the GTA1 README.

- Record JSON: https://awesomecua.com/resources/url-d46306ac1d0a0cce573a/record.json

## Structured profile

- formats: JSON (inp.json), split binary image archive
- modalities: GUI screenshots, bounding-box annotations
- splits: training
- supervision: instruction-to-bounding-box GUI grounding, OmniParser IoU filtering of annotated boxes

### Count observations

No count recorded.

inp.json (767,769,533 bytes) and ten image archive parts (208,677,206,554 bytes in total) were listed through the Hub API but not downloaded, so no example count is given; the Hub size band is not a sample count. The filtering step and its OmniParser IoU criterion come from the card and the GTA1 preprocessing code; the card notes that the filter can occasionally remove correct samples and puts such cases below 3% of the data.

## License declarations

- code: not recorded
- data: CC-BY-NC-SA-4.0 — https://raw.githubusercontent.com/Yan98/GTA1/81f0c4c2997cf6ad696d42f47c5480f4c856b73a/README.md
- document: not recorded
- weights: not recorded

- data review: The GTA1 repository README, which links this Hub repository as GTA1's training and cleaned dataset, states under License that the dataset follows CC BY-NC-SA 4.0 for non-commercial use only. The Hub card declares no license; upstream source images keep their own terms.
  Sources: https://raw.githubusercontent.com/Yan98/GTA1/81f0c4c2997cf6ad696d42f47c5480f4c856b73a/README.md

## Primary evidence

- https://huggingface.co/datasets/HelloKKMe/grounding_dataset/raw/5c0836a55b4000d8dbf431bbe10c80d2f0d42fb1/README.md (retrieved 2026-10-18T12:28:59Z; SHA-256 cae816e6d5696a1122f836235b70a326a7d66a389d078cc48588cf20bd64a518)
- https://huggingface.co/api/datasets/HelloKKMe/grounding_dataset/revision/5c0836a55b4000d8dbf431bbe10c80d2f0d42fb1 (retrieved 2026-10-18T12:27:44Z; SHA-256 74797aa594a98347ac080d446950094ac34076c749e39a6c99ab1a2751896c7f)
- https://raw.githubusercontent.com/Yan98/GTA1/81f0c4c2997cf6ad696d42f47c5480f4c856b73a/README.md (retrieved 2026-10-18T12:27:44Z; SHA-256 16c633cc2e6e457a37f33b410a93c639edf7b55bb2b590e08f20734da7564951)
