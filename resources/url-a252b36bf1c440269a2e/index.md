# Online-Mind2Web task data

Gated Hub release of the Online-Mind2Web task set: one JSON test split of tasks on live websites, 300 tasks on 136 sites per the project README, which the publishers revise when sites change.

- Catalog URL: https://awesomecua.com/resources/url-a252b36bf1c440269a2e/
- Original source: https://huggingface.co/datasets/osunlp/Online-Mind2Web
- Kind: dataset
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, evaluation
- Evidence checked: 2026-10-18T11:39:35Z
- ID: url:a252b36bf1c440269a2e

## Limitations

The Hub API at revision eacad896 reports gated 'auto' (access is approved automatically after a logged-in request) and one data file, Online_Mind2Web.json, configured as the test split. The card and task file sit behind the gate; the description and counts come from the project README, which links this dataset as its data. The Hub card metadata declares CC BY 4.0, matching the README's dataset license; the repository code is MIT and is not applied to the data. The publishers replace invalid tasks over time (36 on 2025-11-03), so a result needs the dataset revision.

- Record JSON: https://awesomecua.com/resources/url-a252b36bf1c440269a2e/record.json

## Structured profile

- formats: JSON
- modalities: text
- splits: test
- supervision: task definitions for live-web evaluation

### Count observations

- 300 tasks — Online-Mind2Web task set as documented in the README (reported; source: https://raw.githubusercontent.com/OSU-NLP-Group/Online-Mind2Web/HEAD/README.md)
- 136 websites — Online-Mind2Web task set as documented in the README (reported; source: https://raw.githubusercontent.com/OSU-NLP-Group/Online-Mind2Web/HEAD/README.md)

Counts describe the task set according to the README; the gated file count remains unknown. The README says replacements aim to keep the same websites and a similar reference length, but the task population still changes between revisions.

## License declarations

- code: not recorded
- data: cc-by-4.0 — https://huggingface.co/datasets/osunlp/Online-Mind2Web
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/api/datasets/osunlp/Online-Mind2Web (retrieved 2026-10-18T11:39:35Z; SHA-256 a72ff426815ef4dcabcefd4a315b2c683b81107bee905a05f2d41ecfcdda0a23)
- https://raw.githubusercontent.com/OSU-NLP-Group/Online-Mind2Web/HEAD/README.md (retrieved 2026-10-18T11:39:36Z; SHA-256 49d7cc317fd2ba0df65abf65a0357d1fa2384e59019a96d4e24b784888599eaa)
- https://huggingface.co/api/datasets/osunlp/Online-Mind2Web (retrieved 2026-10-18T11:39:35Z; SHA-256 a72ff426815ef4dcabcefd4a315b2c683b81107bee905a05f2d41ecfcdda0a23)
