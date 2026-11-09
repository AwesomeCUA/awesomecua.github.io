# GUI-Actor 2B Qwen2-VL

GUI-Actor grounding checkpoint built on Qwen2-VL-2B-Instruct with an attention-based action head that proposes ranked click points for an instruction on a screenshot, without emitting coordinates as text.

- Catalog URL: https://awesomecua.com/resources/url-e42b286fd85b62bd7bb1/
- Original source: https://huggingface.co/microsoft/GUI-Actor-2B-Qwen2-VL
- Kind: model
- Review: curated
- Scope: core
- Environments: cross-platform
- Topics: grounding
- Evidence checked: 2026-10-18T12:04:10Z
- ID: url:e42b286fd85b62bd7bb1

## Limitations

Hub API at revision 8f87b366 lists one BF16 safetensors file (about 2.23B parameters); the config names Qwen2VLForConditionalGenerationWithPointer, which loads through the GUI-Actor code. Access to the repository is open. The card says it was fine-tuned for GUI grounding on the cckevinn/GUI-Actor-Data dataset and reports 36.7 on ScreenSpot-Pro, 86.5 on ScreenSpot and 88.6 on ScreenSpot-v2 for this size; these are publisher measurements. The card declares MIT for the checkpoint.

- Record JSON: https://awesomecua.com/resources/url-e42b286fd85b62bd7bb1/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: mit — https://huggingface.co/microsoft/GUI-Actor-2B-Qwen2-VL/raw/8f87b366d004425a9823502553e2097c71116ece/README.md

## Primary evidence

- https://huggingface.co/microsoft/GUI-Actor-2B-Qwen2-VL/raw/8f87b366d004425a9823502553e2097c71116ece/README.md (retrieved 2026-10-18T12:04:10Z; SHA-256 8f872a9016aec48a245d0ac187f22a16f56fd8fc0d7f690b219d3ce0c5ab4413)
- https://huggingface.co/api/models/microsoft/GUI-Actor-2B-Qwen2-VL/revision/8f87b366d004425a9823502553e2097c71116ece (retrieved 2026-10-18T12:04:10Z; SHA-256 1e94e0139ceb46ef70eef0c9b72f22ad623c2d99de41d42522606c0a2847a622)
- https://huggingface.co/microsoft/GUI-Actor-2B-Qwen2-VL/raw/8f87b366d004425a9823502553e2097c71116ece/README.md (retrieved 2026-10-18T12:04:10Z; SHA-256 8f872a9016aec48a245d0ac187f22a16f56fd8fc0d7f690b219d3ce0c5ab4413)
