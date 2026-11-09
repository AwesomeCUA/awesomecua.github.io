# BU-30B-A3B-Preview

Browser Use's open-weight browser-agent model, fine-tuned from Qwen3-VL-30B-A3B-Instruct (30B total, 3B active parameters) to serve as the LLM of the browser-use library through BU Cloud or vLLM.

- Catalog URL: https://awesomecua.com/resources/url-2c4b53bc04f33578e9b8/
- Original source: https://huggingface.co/browser-use/bu-30b-a3b-preview
- Kind: model
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation
- Evidence checked: 2026-10-18T11:36:28Z
- ID: url:2c4b53bc04f33578e9b8

## Limitations

A preview release. The Hub API at revision 28f795cd lists 13 BF16 safetensors shards (31,070,754,032 parameters) in the Qwen3VLMoeForConditionalGeneration architecture; the repository is not gated. The card gives a 65,536-token context and quickstarts for BU Cloud (API key) and a local vLLM server, but no benchmark results, training data or training method, so its capability claims were not checked. The card metadata declares no license. The repository's LICENSE is a modified MIT text that withholds all rights from anyone whose company or employer has global consolidated annual revenue above US$1 million (measured for the preceding month), and points them to a commercial license or the hosted service instead.

- Record JSON: https://awesomecua.com/resources/url-2c4b53bc04f33578e9b8/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: Modified MIT License (Browser Use, revenue-restricted) — https://huggingface.co/browser-use/bu-30b-a3b-preview/raw/28f795cd9ec73aedf2970a8914bbbf0d18accd82/LICENSE

- weights review: The card metadata has no license field. The repository LICENSE is a custom modified MIT text with a revenue restriction, so it is recorded verbatim by name rather than as SPDX MIT.
  Sources: https://huggingface.co/browser-use/bu-30b-a3b-preview/raw/28f795cd9ec73aedf2970a8914bbbf0d18accd82/LICENSE

## Primary evidence

- https://huggingface.co/browser-use/bu-30b-a3b-preview/raw/28f795cd9ec73aedf2970a8914bbbf0d18accd82/README.md (retrieved 2026-10-18T11:36:28Z; SHA-256 a500e70f875f4204c7711df18b46a7e9171c2ac7e3f7569dd0826cf11f4d2587)
- https://huggingface.co/api/models/browser-use/bu-30b-a3b-preview (retrieved 2026-10-18T11:36:30Z; SHA-256 48085eded704d2a53bc4439b3a904d5c4146bd3b29903fcaf55f34d0b24d0a9b)
- https://huggingface.co/browser-use/bu-30b-a3b-preview/raw/28f795cd9ec73aedf2970a8914bbbf0d18accd82/LICENSE (retrieved 2026-10-18T11:36:30Z; SHA-256 26272dfb472cc79cdc667dd962b8876b8087297ee7cc9737291b428eb3bfc32e)
