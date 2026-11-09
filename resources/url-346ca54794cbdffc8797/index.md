# OSWorld Ubuntu VM images

Hub host of OSWorld's prebuilt Ubuntu virtual machines: VMware archives for x86 and arm64 and a QEMU qcow2 archive, which OSWorld's VMware and Docker providers download on first run.

- Catalog URL: https://awesomecua.com/resources/url-346ca54794cbdffc8797/
- Original source: https://huggingface.co/datasets/xlangai/ubuntu_osworld
- Kind: infrastructure
- Review: curated
- Scope: adjacent
- Environments: desktop, linux
- Topics: sandbox, evaluation
- Evidence checked: 2026-10-18T12:18:42Z
- ID: url:346ca54794cbdffc8797

## Limitations

Adjacent: environment images that the curated OSWorld benchmark boots, not a benchmark or training set by itself. At revision a5d9c3ea the manifest holds Ubuntu-x86.zip, Ubuntu-arm.zip and Ubuntu.qcow2.zip (about 12 GB each), two further qcow2 images (Ubuntu_claude.qcow2 and Ubuntu_claude2.qcow2, about 23.7 GB each) that the card does not describe, and aliyun_config.sh. OSWorld's VMware provider picks the x86 or arm64 archive by host architecture, and its Docker provider fetches Ubuntu.qcow2.zip. The card also mentions task examples in evaluation_examples.zip, which the manifest does not contain. Apache-2.0 is the card's metadata declaration and does not relicense Ubuntu or bundled applications. The images were not downloaded or booted.

- Record JSON: https://awesomecua.com/resources/url-346ca54794cbdffc8797/record.json

## License declarations

- code: not recorded
- data: apache-2.0 — https://huggingface.co/datasets/xlangai/ubuntu_osworld/raw/a5d9c3eaae98eebf6e3a0beb84e7e47cf72ae133/README.md
- document: not recorded
- weights: not recorded

## Primary evidence

- https://huggingface.co/datasets/xlangai/ubuntu_osworld/raw/a5d9c3eaae98eebf6e3a0beb84e7e47cf72ae133/README.md (retrieved 2026-10-18T12:18:42Z; SHA-256 0fa1943315f1acba9100333ebbae47d45ca7847fe37d8be60e79cb4d116b40d3)
- https://huggingface.co/api/datasets/xlangai/ubuntu_osworld (retrieved 2026-10-18T12:18:42Z; SHA-256 9dbfc4c8700370f5f1246007c7b7f2090e25e1c3ab310947e44cb641f2dd8c42)
- https://huggingface.co/api/datasets/xlangai/ubuntu_osworld/tree/a5d9c3eaae98eebf6e3a0beb84e7e47cf72ae133 (retrieved 2026-10-18T12:18:42Z; SHA-256 733d3b45084e5cec853a4cb6313ab3d7ce93982606be1f6c61ef724de11f4981)
- https://raw.githubusercontent.com/xlang-ai/OSWorld/b138d348256078fa634fc3b73567a7337c793e6b/desktop_env/providers/vmware/manager.py (retrieved 2026-10-18T12:18:43Z; SHA-256 ada6bed8d1923969833b2835b832df825d8c7be092648cee98c0a7eefc447f9a)
- https://raw.githubusercontent.com/xlang-ai/OSWorld/b138d348256078fa634fc3b73567a7337c793e6b/desktop_env/providers/docker/manager.py (retrieved 2026-10-18T12:18:43Z; SHA-256 3580c99cdefd711bf7d1093aeb2719e58ddad387358ff7938eb0700d3c5d03fa)
- https://huggingface.co/datasets/xlangai/ubuntu_osworld/raw/a5d9c3eaae98eebf6e3a0beb84e7e47cf72ae133/README.md (retrieved 2026-10-18T12:18:42Z; SHA-256 0fa1943315f1acba9100333ebbae47d45ca7847fe37d8be60e79cb4d116b40d3)
