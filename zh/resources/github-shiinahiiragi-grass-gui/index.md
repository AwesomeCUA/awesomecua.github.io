# grass-gui

ScienceBoard 用于替代原界面的 GRASS GIS 8.4 wxPython 界面，内置 Flask 服务器，可加载地图集和图层、运行 GRASS 命令，并以 JSON 返回图层、区域和控制台状态供任务检查。

- 目录页面：https://awesomecua.com/zh/resources/github-shiinahiiragi-grass-gui/
- English：https://awesomecua.com/resources/github-shiinahiiragi-grass-gui/index.md
- 原始来源：https://github.com/ShiinaHiiragi/grass-gui
- 类型：基础设施
- 审核状态：已审核
- 范围：相关研究
- 运行环境：桌面、Linux
- 主题：科学工作流、评测、状态追踪
- 证据核查日期：2026-10-18T12:13:46Z
- ID：github:shiinahiiragi/grass-gui

## 范围记录

The ScienceBoard README lists this repository among its modified applications as the Python GUI part of GRASS GIS. Its manual.md installs GRASS 8.4 from the ubuntugis PPA and swaps this repository in for /usr/lib/grass84/gui/wxpython. At commit 4fe0312, wxgui.py starts a Flask thread on FLASK_PORT (default 8000) with /version, /init/cmd, /init/map, /init/layer, /init/scale, /dump, /gcmd, /gcmdline and /quit routes; /dump reports map layers, layer windows, toolbars, status-bar mode and scale, the region and console output. The rest of the tree is the upstream wxGUI code with its original README. GitHub does not mark the repository as a fork.

- 完整记录 JSON：https://awesomecua.com/resources/github-shiinahiiragi-grass-gui/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 代码审核：The inspected tree has no license or COPYING file and GitHub reports no license. GRASS GIS's own license is not transferred to this copy by inference.
  来源：https://api.github.com/repos/ShiinaHiiragi/grass-gui/git/trees/4fe031217483301519798b07f83f7f53c5142b09?recursive=1

## 一手证据

- https://raw.githubusercontent.com/ShiinaHiiragi/grass-gui/HEAD/manual.md（获取于 2026-10-18T12:13:46Z；SHA-256：578e99d639e296a8148a2d967a99764df4c4e4debf30c89b01cbc9242f11d656）
- https://raw.githubusercontent.com/OS-Copilot/ScienceBoard/21b5eb0f1d00898f7de9e84c3d33a87c2f2b3c3e/README.md（获取于 2026-10-18T12:10:16Z；SHA-256：4c3fe93aa740dbf4a279a246ddd836f2590a2a36f39b820abe166e38cb484577）
- https://api.github.com/repos/ShiinaHiiragi/grass-gui/git/trees/4fe031217483301519798b07f83f7f53c5142b09?recursive=1（获取于 2026-10-18T12:13:30Z；SHA-256：e88b2d29f8b3939e225cf9bbe68680c7d07ccfd1d130f826074fc2c661bb01be）
- https://raw.githubusercontent.com/ShiinaHiiragi/grass-gui/4fe031217483301519798b07f83f7f53c5142b09/wxgui.py（获取于 2026-10-18T12:13:30Z；SHA-256：7e39b02d2602c84d95e85c9606816d73b2a856b6877e1dc8a7b2af8050fba7a4）
