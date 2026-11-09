# GUI-World data

Hub release of GUI-World: GUI screen-recording videos from six scenarios (Android, iOS, website, software, multi-app and XR) with train and benchmark annotation JSONL for GUI-oriented video question answering.

- Catalog URL: https://awesomecua.com/resources/url-40ce19527f25bfa3bd63/
- Original source: https://huggingface.co/datasets/ONE-Lab/GUI-World
- Kind: dataset
- Review: curated
- Scope: core
- Environments: cross-platform, android, ios, web
- Topics: video, screen-understanding, evaluation
- Evidence checked: 2026-10-18T11:41:24Z
- ID: url:40ce19527f25bfa3bd63

## Limitations

This is the Hub data release; the repository record github:dongping-chen/gui-world covers the evaluation and GUI-Vid code and case studies, and its README calls this dataset the canonical train and test release. The Hub API at revision 7901fa3f reports an ungated repository with 12 annotation JSONL files (benchmark and train for each scenario) and 12,379 MP4 or MOV video files in per-scenario folders. The card has no license metadata field; its License section states CC BY 4.0. The GUI-Vid checkpoint is a separate Hub model.

- Record JSON: https://awesomecua.com/resources/url-40ce19527f25bfa3bd63/record.json

## Structured profile

- Formats: MP4 and MOV video files, JSONL annotations
- Modalities: screen-recording videos, text annotations
- Splits: train, benchmark
- Supervision: GUI-oriented question-answer annotations

### Count observations

- 12,379 video files — MP4 and MOV files in the Hub manifest at revision 7901fa3f (computed) (computed; source: https://huggingface.co/api/datasets/ONE-Lab/GUI-World)
- 12 annotation files — JSONL files under Annotation/benchmark and Annotation/train at revision 7901fa3f (computed) (computed; source: https://huggingface.co/api/datasets/ONE-Lab/GUI-World)
- 6 GUI scenario categories — dataset taxonomy (reported; source: https://huggingface.co/datasets/ONE-Lab/GUI-World/raw/7901fa3f0b9e36afa87d24ff9ecd48037c7fd6a0/README.md)
- 8 question types — dataset taxonomy (reported; source: https://huggingface.co/datasets/ONE-Lab/GUI-World/raw/7901fa3f0b9e36afa87d24ff9ecd48037c7fd6a0/README.md)

Video files were counted from the Hub file manifest; video, question and annotation counts use different units.

## License declarations

- code: not recorded
- data: CC-BY-4.0 — https://huggingface.co/datasets/ONE-Lab/GUI-World/raw/7901fa3f0b9e36afa87d24ff9ecd48037c7fd6a0/README.md
- document: not recorded
- weights: not recorded

- data review: The card states that the work is licensed under CC BY 4.0. The declaration is recorded in prose because enrich only extracts card metadata.
  Sources: https://huggingface.co/datasets/ONE-Lab/GUI-World/raw/7901fa3f0b9e36afa87d24ff9ecd48037c7fd6a0/README.md

## Primary evidence

- https://huggingface.co/datasets/ONE-Lab/GUI-World/raw/7901fa3f0b9e36afa87d24ff9ecd48037c7fd6a0/README.md (retrieved 2026-10-18T11:41:24Z; SHA-256 d2dd5886bce90f6eaee880719c79a6ede6ec0eaa08da32d7610bde656b8dc9ed)
- https://huggingface.co/api/datasets/ONE-Lab/GUI-World (retrieved 2026-10-18T11:41:24Z; SHA-256 dfb9a575c567a2fe97640cd1f1f73c8fa6ba970c392f335791f1ed857f504a89)
- https://raw.githubusercontent.com/Dongping-Chen/GUI-World/master/Readme.md (retrieved 2026-10-18T11:41:24Z; SHA-256 905bf69ce80c866377841474cefe08f85ec4ef552cdd9ffeb2fb1531e07370b6)
