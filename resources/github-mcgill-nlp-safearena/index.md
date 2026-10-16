# SafeArena

Web-agent benchmark pairing benign and harmful tasks to study deliberate misuse risks.

- Catalog URL: https://awesomecua.github.io/resources/github-mcgill-nlp-safearena/
- Original source: https://github.com/McGill-NLP/safearena
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: safety-security, evaluation
- Evidence checked: 2026-10-16T09:36:33Z
- ID: github:mcgill-nlp/safearena

## Limitations

Inclusion does not establish reproducibility or endorsement.

## Structured profile

- actions: web interactions
- evaluation: Task outcomes and the Agent Risk Assessment categories evaluate agent behavior on benign and harmful requests.
- focus: web-agent safety, task completion
- observations: not recorded
- setting: interactive

### Count observations

- 250 tasks — safe split (reported; source: https://arxiv.org/abs/2503.04957)
- 250 tasks — harmful split (reported; source: https://arxiv.org/abs/2503.04957)

Use SafeArena-specific containers rather than ordinary WebArena instances. The documented task splits require access approval; the profile does not imply unrestricted dataset access.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/McGill-NLP/safearena/HEAD/README.md (retrieved 2026-10-16T09:36:33Z; SHA-256 ae50121aa60ac26b32d8d6ad6f578f9091a81a3cb9ca28b98050bddee16c929a)
- https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=700&max_results=100&sortBy=submittedDate&sortOrder=descending (retrieved 2026-10-16T06:36:54Z; SHA-256 4953a8e0f029016aef668bce98cec4d2873a7ae49c1fe33c4311fa5eb8d24089)
