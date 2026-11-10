---
title: "META-GUI dataset | AwesomeCUA"
url: https://awesomecua.com/resources/url-05a9a7c592089d1ddd46/
updated: 2026-10-18
type: dataset
lang: en
---

# META-GUI dataset

Hub release of META-GUI, task-oriented dialogues in which an agent operates mobile apps: each turn pairs the conversation with screenshots, view-hierarchy XML, recorded GUI actions and a reply.

- Catalog URL: https://awesomecua.com/resources/url-05a9a7c592089d1ddd46/
- Original source: https://huggingface.co/datasets/X-LANCE/META-GUI
- Kind: dataset
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: mobile-navigation, human-in-the-loop, action-prediction
- Evidence checked: 2026-10-18T15:46:20Z
- ID: url:05a9a7c592089d1ddd46

## Limitations

The card only links the paper and the X-LANCE/META-GUI-baseline repository, which documents the raw dialog folders (dialog.json, per-turn actions.json, PNG screenshots and XML view hierarchies) and the processed data.json fields. The Hub manifest at revision 12660de5 holds train.tar and test.tar (about 14.3 GB and 1.8 GB); the baseline README instead describes train and dev folders from an Amazon S3 archive, and the split correspondence is not established. No source names the mobile operating system. Apache-2.0 is the Hub card's data declaration; the baseline code's MIT license is separate.

- Record JSON: https://awesomecua.com/resources/url-05a9a7c592089d1ddd46/record.json

## Structured profile

- Formats: TAR archives, JSON, PNG, XML
- Modalities: dialogue text, screenshots, view hierarchies, actions
- Splits: train, test
- Supervision: GUI action sequences per dialogue turn, target elements for clicks, system response text

### Count observations

No count recorded.

Splits are the two Hub archive names; the baseline README's processed data uses train and dev folders. Formats inside the archives come from the baseline README's raw-data description.

## License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/X-LANCE/META-GUI/raw/12660de515ad55e40e8c4e5afa8f4d0e7430ab34/README.md
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/X-LANCE/META-GUI/raw/12660de515ad55e40e8c4e5afa8f4d0e7430ab34/README.md (retrieved 2026-10-18T15:46:20Z; SHA-256 cb86b4648766f07f671290abec4b75658496082a2e77661ca47aa593351eacda)
- https://huggingface.co/api/datasets/X-LANCE/META-GUI/revision/12660de515ad55e40e8c4e5afa8f4d0e7430ab34 (retrieved 2026-10-18T15:45:56Z; SHA-256 ef370ba12e94c45d0fb74fe3e44b29f9e058e19fab739a15a6a1d04f4101460d)
- https://raw.githubusercontent.com/X-LANCE/META-GUI-baseline/a845f88e7d89fe60d3666d15adb32d4e2ef907db/README.md (retrieved 2026-10-18T15:45:57Z; SHA-256 2cea1be73ea75acd46990ab1fb567fbd83ad58a2bc69ca858b207660df9fe8c1)
- https://huggingface.co/datasets/X-LANCE/META-GUI/raw/12660de515ad55e40e8c4e5afa8f4d0e7430ab34/README.md (retrieved 2026-10-18T15:46:20Z; SHA-256 cb86b4648766f07f671290abec4b75658496082a2e77661ca47aa593351eacda)
