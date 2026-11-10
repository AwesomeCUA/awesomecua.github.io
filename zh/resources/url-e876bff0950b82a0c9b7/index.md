---
title: "AdapAction: Adaptive Target Action… · 论文 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-e876bff0950b82a0c9b7/
updated: 2026-10-19
type: paper
lang: zh-CN
---

# AdapAction: Adaptive Target Action Backdoor Attack against GUI Agents

一种后门攻击：用教师模型编写的恶意轨迹微调 GUI 智能体，使触发信号促使其选择符合当前屏幕与指令的有害动作；在 AitZ 和 AndroidControl 上测试。

- 目录页面：https://awesomecua.com/zh/resources/url-e876bff0950b82a0c9b7/
- English：https://awesomecua.com/resources/url-e876bff0950b82a0c9b7/index.md
- 原始来源：https://openaccess.thecvf.com/content/CVPR2026/html/Chen_AdapAction_Adaptive_Target_Action_Backdoor_Attack_against_GUI_Agents_CVPR_2026_paper.html
- 类型：论文
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：安全与防护、手机操作
- 证据核查日期：2026-10-19T06:38:37Z
- ID：url:e876bff0950b82a0c9b7

## 范围记录

The annotation was reviewed against the CVF open-access landing page and PDF. A teacher model (for example Gemini 2.5 Pro) writes malicious reasoning trajectories drawn from a five-category malicious action library, and the agent learns them by supervised fine-tuning, which the paper calls Context-Aware Behavioral Imitation. Main results fine-tune Qwen2-VL-2B and Qwen2-VL-7B at a 0.1 poisoning ratio with a blended visual trigger; an AndroidWorld emulator deployment through Mobile-Agent-v3 is described in the supplementary material. The paper links no code release or arXiv version.

- 完整记录 JSON：https://awesomecua.com/resources/url-e876bff0950b82a0c9b7/record.json

## 作者

Baicheng Chen, Mingda Zhang, Min Zhang, Haizhou Li, Baoyuan Wu

## 引用文件

- BibTeX：https://awesomecua.com/resources/url-e876bff0950b82a0c9b7/citation.bib
- CSL JSON：https://awesomecua.com/resources/url-e876bff0950b82a0c9b7/citation.csl.json

```bibtex
@inproceedings{cua_a2a53f955040d6d6aba935d9,
  title = {{AdapAction: Adaptive Target Action Backdoor Attack against GUI Agents}},
  author = {{Baicheng Chen} and {Mingda Zhang} and {Min Zhang} and {Haizhou Li} and {Baoyuan Wu}},
  year = {2026},
  month = jun,
  booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
  pages = {27894-27905},
  url = {https://openaccess.thecvf.com/content/CVPR2026/html/Chen\_AdapAction\_Adaptive\_Target\_Action\_Backdoor\_Attack\_against\_GUI\_Agents\_CVPR\_2026\_paper.html},
  note = {Publication date: 2026-06.}
}
```

## 发表记录

- 标题：AdapAction: Adaptive Target Action Backdoor Attack against GUI Agents
- 作者：Baicheng Chen, Mingda Zhang, Min Zhang, Haizhou Li, Baoyuan Wu
- 发表日期：2026-06
- 发表来源：https://openaccess.thecvf.com/content/CVPR2026/html/Chen_AdapAction_Adaptive_Target_Action_Backdoor_Attack_against_GUI_Agents_CVPR_2026_paper.html
- 发表版 BibTeX：https://awesomecua.com/resources/url-e876bff0950b82a0c9b7/publication-citation.bib
- 发表版 CSL JSON：https://awesomecua.com/resources/url-e876bff0950b82a0c9b7/publication-citation.csl.json
- 发表于：Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition
- 页码：27894-27905
- 日期来源：Year from publisher citation metadata and month from the same page's embedded BibTeX; no day is supplied.
- 版本对应依据：No title, DOI or canonical URL match in the active catalog or the retained arXiv archive, and an arXiv title and abstract search for AdapAction returned nothing; neither the landing page nor the PDF names an arXiv version, so this publisher edition seeds the record.
- 来源备注：CVF open-access accepted version; the PDF states that the final proceedings version is on IEEE Xplore. The landing page, BibTeX and PDF title page list the same five authors in the same order.
- 发表证据：https://openaccess.thecvf.com/content/CVPR2026/html/Chen_AdapAction_Adaptive_Target_Action_Backdoor_Attack_against_GUI_Agents_CVPR_2026_paper.html, https://openaccess.thecvf.com/content/CVPR2026/papers/Chen_AdapAction_Adaptive_Target_Action_Backdoor_Attack_against_GUI_Agents_CVPR_2026_paper.pdf

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://openaccess.thecvf.com/content/CVPR2026/html/Chen_AdapAction_Adaptive_Target_Action_Backdoor_Attack_against_GUI_Agents_CVPR_2026_paper.html（获取于 2026-10-19T06:38:37Z；SHA-256：c540ae31dfb8a356917ef343c6e2bd1036bf0758276f838a5fd608cde690e7da）
- https://openaccess.thecvf.com/content/CVPR2026/papers/Chen_AdapAction_Adaptive_Target_Action_Backdoor_Attack_against_GUI_Agents_CVPR_2026_paper.pdf（获取于 2026-10-19T06:38:38Z；SHA-256：946cbc9a6e0ab3161e6e4d7d71a58433eba6b51babe3cdcf58b9f30c3a388cb0）
- https://openaccess.thecvf.com/content/CVPR2026/html/Chen_AdapAction_Adaptive_Target_Action_Backdoor_Attack_against_GUI_Agents_CVPR_2026_paper.html（获取于 2026-10-19T06:38:37Z；SHA-256：c540ae31dfb8a356917ef343c6e2bd1036bf0758276f838a5fd608cde690e7da）
- https://openaccess.thecvf.com/content/CVPR2026/papers/Chen_AdapAction_Adaptive_Target_Action_Backdoor_Attack_against_GUI_Agents_CVPR_2026_paper.pdf（获取于 2026-10-19T06:38:38Z；SHA-256：946cbc9a6e0ab3161e6e4d7d71a58433eba6b51babe3cdcf58b9f30c3a388cb0）
