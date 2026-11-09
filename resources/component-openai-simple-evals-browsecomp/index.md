# BrowseComp

OpenAI's 1,266-question benchmark for browsing agents, whose short, verifiable answers require persistent search and navigation across many websites and are graded by a model judge.

- Catalog URL: https://awesomecua.com/resources/component-openai-simple-evals-browsecomp/
- Original source: https://github.com/openai/simple-evals/blob/main/browsecomp_eval.py
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, web-navigation, long-horizon
- Evidence checked: 2026-10-18T11:08:09Z
- ID: component:openai/simple-evals/browsecomp

## Limitations

This record covers the BrowseComp reference implementation and question set that OpenAI publishes in simple-evals. The launch page (https://openai.com/index/browsecomp/) answered HTTP 403 to the catalog's client and was not used as evidence. The paper (arXiv 2504.12516) is not in the retained archive and no curated receipt cites its arXiv ID, so it is not linked yet. The simple-evals README says the repository is no longer updated for new models but continues to host the BrowseComp reference implementation. The README lists BrowseComp next to an MIT License link, but this record does not treat that as a declaration for the question data, so the data license stays unknown. The derivative BrowseComp-Plus (fixed-corpus retrieval rather than live browsing) is a separate resource and is not covered here.

- Record JSON: https://awesomecua.com/resources/component-openai-simple-evals-browsecomp/record.json

## Structured profile

- actions: not recorded
- evaluation: A grader model extracts the final answer from the response and judges it correct or incorrect against the decrypted reference answer; accuracy is the share judged correct. The reference implementation sends each question to any sampler and does not prescribe browsing tools or an action space.
- focus: open-web information seeking, persistent multi-site search
- observations: not recorded
- setting: interactive

### Count observations

- 1,266 questions — browse_comp_test_set.csv (computed) (computed; source: https://openaipublic.blob.core.windows.net/simple-evals/browse_comp_test_set.csv)

The count is the number of data rows in the released CSV, whose problem and answer fields are XOR-encrypted with a per-row canary and carry a problem_topic label. Results depend on the agent's browsing tools, the grader model and the number of repeats; record these with a score.

## License declarations

- code: MIT — https://raw.githubusercontent.com/openai/simple-evals/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: The simple-evals LICENSE is the standard MIT text and covers the evaluation code; the question CSV is hosted separately and has no data-license declaration in the inspected sources.
  Sources: https://raw.githubusercontent.com/openai/simple-evals/HEAD/LICENSE

## Primary evidence

- https://raw.githubusercontent.com/openai/simple-evals/HEAD/browsecomp_eval.py (retrieved 2026-10-18T11:08:09Z; SHA-256 0bfb33cfdf5fa0e0d7da48068cc86c5a22acc755979be4a2b46f8a821cc44b74)
- https://openaipublic.blob.core.windows.net/simple-evals/browse_comp_test_set.csv (retrieved 2026-10-18T11:08:29Z; SHA-256 7b24471cd5b3eb2a46830a14802b5c029ea62f488ff75a0f88af7923d1454abf)
- https://raw.githubusercontent.com/openai/simple-evals/HEAD/README.md (retrieved 2026-10-18T11:08:34Z; SHA-256 d9647c4a0e34cd9b2b528ff6986141734aac6f5f2f18a068eeadb2af0b29786f)
- https://raw.githubusercontent.com/openai/simple-evals/HEAD/LICENSE (retrieved 2026-10-18T11:08:35Z; SHA-256 d831db55645e47ca8e491c5a0e37f1ee744d7b10bf5aa8d50146c795ac0176c0)
- https://raw.githubusercontent.com/openai/simple-evals/HEAD/LICENSE (retrieved 2026-10-18T11:08:35Z; SHA-256 d831db55645e47ca8e491c5a0e37f1ee744d7b10bf5aa8d50146c795ac0176c0)
