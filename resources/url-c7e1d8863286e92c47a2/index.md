# VideoAgentTrek-ScreenFilter

Cursor-detection model in the VideoAgentTrek pipeline that filters screen-recorded tutorial videos by cursor presence before Video2Action extracts GUI action trajectories.

- Catalog URL: https://awesomecua.com/resources/url-c7e1d8863286e92c47a2/
- Original source: https://huggingface.co/xlangai/VideoAgentTrek-ScreenFilter
- Kind: model
- Review: curated
- Scope: core
- Environments: unspecified
- Topics: video, data-generation
- Evidence checked: 2026-11-10T03:01:14Z
- ID: url:c7e1d8863286e92c47a2

## Limitations

The repository holds one PyTorch checkpoint file, which video_preprocess.py loads as a YOLO model through YOLO_MODEL_PATH; license agpl-3.0 per the card. The README reports mining 39k YouTube tutorials into 1.52M interaction steps.

- Record JSON: https://awesomecua.com/resources/url-c7e1d8863286e92c47a2/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: agpl-3.0 — https://huggingface.co/xlangai/VideoAgentTrek-ScreenFilter

## Primary evidence

- https://huggingface.co/api/models/xlangai/VideoAgentTrek-ScreenFilter (retrieved 2026-11-10T03:01:14Z; SHA-256 5a8f3711171dbd61ce37b19495b8a75e3725a615744098e9e708152c59211497)
- https://huggingface.co/api/models/xlangai/VideoAgentTrek-ScreenFilter (retrieved 2026-11-10T03:01:14Z; SHA-256 5a8f3711171dbd61ce37b19495b8a75e3725a615744098e9e708152c59211497)
