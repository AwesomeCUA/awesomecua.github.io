# OSWorld-Science task data

Gated Hub release of OSWorld-Science task definitions, staged inputs, grader references and prepared Ubuntu VM images for computer-use agents working in scientific software.

- Catalog URL: https://awesomecua.com/resources/url-263e82b29d4fca964463/
- Original source: https://huggingface.co/datasets/SciAILab/OSWorld-Science-data
- Kind: dataset
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: evaluation, science
- Evidence checked: 2026-10-18T12:33:40Z
- ID: url:263e82b29d4fca964463

## Limitations

Access requires manual approval by the publisher; the record rests on the public Hub metadata and file list, the paper and the benchmark README. The paper says the release holds all question sets and images and carries a contamination watermark; the benchmark README says it includes answer keys. The Windows/ANSYS image is not part of the release. Hub metadata declares CC-BY-NC-4.0 for the data; bundled scientific software and third-party inputs keep their own terms.

- Record JSON: https://awesomecua.com/resources/url-263e82b29d4fca964463/record.json

## Structured profile

- formats: JSON, QCOW2, Python, CSV
- modalities: task instructions, input files, reference outputs, VM disk images
- splits: not recorded
- supervision: expert-defined task definitions, grader reference files

### Count observations

- 153 task-definition JSON files — <domain>/tasks/ at Hub revision 9b8de9ad (chem 44, biomed 34, physics 31, stat 20, eeg 10, econ 6, geoscience 6, linguistics 2) (computed) (computed; source: https://huggingface.co/api/datasets/SciAILab/OSWorld-Science-data/revision/9b8de9ad9325c87fbeba90e0676e8d640be70681)
- 115 translated task files — ablation/ at Hub revision 9b8de9ad (23 each in es, fr, ja, th, zh) (computed) (computed; source: https://huggingface.co/api/datasets/SciAILab/OSWorld-Science-data/revision/9b8de9ad9325c87fbeba90e0676e8d640be70681)
- 11 QCOW2 VM images — files at Hub revision 9b8de9ad (computed) (computed; source: https://huggingface.co/api/datasets/SciAILab/OSWorld-Science-data/revision/9b8de9ad9325c87fbeba90e0676e8d640be70681)
- 2,759 files — Hub repository at revision 9b8de9ad (computed) (computed; source: https://huggingface.co/api/datasets/SciAILab/OSWorld-Science-data/revision/9b8de9ad9325c87fbeba90e0676e8d640be70681)

All counts come from a script over the pinned Hub file list; no file was downloaded. The paper and README report 146 tasks in seven domains, while the listing has 153 task files in eight domain folders, including six econ tasks; a task file is a definition, while an agent run is a different unit. Task files, translated variants, images and files are different units and are counted separately.

## License declarations

- code: not recorded
- data: cc-by-nc-4.0 — https://huggingface.co/datasets/SciAILab/OSWorld-Science-data
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/api/datasets/SciAILab/OSWorld-Science-data/revision/9b8de9ad9325c87fbeba90e0676e8d640be70681 (retrieved 2026-10-18T12:33:40Z; SHA-256 68262ed16b86bb34261d6be0051011ee459bade323689bb38703342148ccb28e)
- https://raw.githubusercontent.com/DiscoAILab/OSWorld-Science/HEAD/README.md (retrieved 2026-10-18T12:32:26Z; SHA-256 5871a62e7dac017cbb16017bc28b956aa20058193aebced9505210f34fdc7057)
- https://arxiv.org/html/2609.39903v1 (retrieved 2026-10-18T12:32:28Z; SHA-256 b4878955429b6b8d177c7d18fde30004fafd1973dda36f7d0412fb61dd2b0178)
- https://huggingface.co/api/datasets/SciAILab/OSWorld-Science-data/revision/9b8de9ad9325c87fbeba90e0676e8d640be70681 (retrieved 2026-10-18T12:33:40Z; SHA-256 68262ed16b86bb34261d6be0051011ee459bade323689bb38703342148ccb28e)
