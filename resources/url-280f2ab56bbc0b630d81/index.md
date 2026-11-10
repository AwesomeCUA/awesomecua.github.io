---
title: "VideoAgentTrek-IDM-s1-7B | AwesomeCUA"
url: https://awesomecua.com/resources/url-280f2ab56bbc0b630d81/
updated: 2026-11-10
type: model
lang: en
---

# VideoAgentTrek-IDM-s1-7B

Keyframe detection model for the VideoAgentTrek Video2Action pipeline, the first inverse-dynamics stage that finds GUI interaction moments in screen-recorded tutorial videos before a second model labels the actions.

- Catalog URL: https://awesomecua.com/resources/url-280f2ab56bbc0b630d81/
- Original source: https://huggingface.co/xlangai/VideoAgentTrek-IDM-s1-7B
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: video, data-generation
- Evidence checked: 2026-11-10T03:01:02Z
- ID: url:280f2ab56bbc0b630d81

## Limitations

Five safetensors shards of a Qwen2.5-VL checkpoint with tokenizer, processor and chat-template configs; the card declares Apache-2.0. The VideoAgentTrek video2action.py loads it through KEYFRAME_MODEL_PATH for stage 2 keyframe detection, with the IDM-s2 action identifier and an OpenAI-compatible API for validation and inner-monologue stages; a YOLO cursor detector filters videos beforehand.

- Record JSON: https://awesomecua.com/resources/url-280f2ab56bbc0b630d81/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: apache-2.0 — https://huggingface.co/xlangai/VideoAgentTrek-IDM-s1-7B

## Primary evidence

- https://huggingface.co/api/models/xlangai/VideoAgentTrek-IDM-s1-7B (retrieved 2026-11-10T03:01:02Z; SHA-256 f1759369f0ad84a0d467489b442128ca169fd8339d4634f37c3d1c0612a6c671)
- https://huggingface.co/api/models/xlangai/VideoAgentTrek-IDM-s1-7B (retrieved 2026-11-10T03:01:02Z; SHA-256 f1759369f0ad84a0d467489b442128ca169fd8339d4634f37c3d1c0612a6c671)
