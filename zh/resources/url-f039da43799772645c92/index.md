# OpenMobile-2 extended Android AVDs

七个预配置的 Pixel 6 模拟器镜像，适用于 Android API 33（arm64），附有 Apple Silicon 安装脚本，在 OpenMobile-2 发布内容中列为扩展 Android AVD。

- 目录页面：https://awesomecua.com/zh/resources/url-f039da43799772645c92/
- English：https://awesomecua.com/resources/url-f039da43799772645c92/index.md
- 原始来源：https://huggingface.co/datasets/yanhhh/AndroidAvd
- 类型：基础设施
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：沙箱、手机操作
- 证据核查日期：2026-10-18T16:11:45Z
- ID：url:f039da43799772645c92

## 范围记录

The Hub dataset repository at revision 4d2be380 has no card and no license declaration. It lists 143 files, about 130 GB by listed sizes: seven AVD directories (MineAndroid plus auto, general-user, manual, senior, student and travel variants), their .ini pointers and install_avd.sh. Every config.ini targets android-33 with arm64-v8a on a Pixel 6 profile and Play Store disabled. The script requires an Apple Silicon Mac, installs the android-33 Google APIs arm64-v8a system image through sdkmanager, and warns that -wipe-data erases the installed apps. The variants' app contents remain undocumented; the images remain uninspected. The OpenMobile2-Code README links this repository as 'Extended Android AVDs' in its release list.

- 完整记录 JSON：https://awesomecua.com/resources/url-f039da43799772645c92/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 数据审核：The Hub repository has no card, license tag or license file. The Apache-2.0 license of the linked OpenMobile2-Code repository covers that code only, and the install script accepts the Android SDK licenses for the separately installed system image.
  来源：https://huggingface.co/api/datasets/yanhhh/AndroidAvd/revision/4d2be38083d1a4395ab0de9749983f7091714070

## 一手证据

- https://huggingface.co/datasets/yanhhh/AndroidAvd/raw/4d2be38083d1a4395ab0de9749983f7091714070/install_avd.sh（获取于 2026-10-18T16:11:45Z；SHA-256：22abd21d4dfa43e7cf6eb9ae9ea63b368b754804019283f7d3f01914d8225a51）
- https://huggingface.co/api/datasets/yanhhh/AndroidAvd/revision/4d2be38083d1a4395ab0de9749983f7091714070（获取于 2026-10-18T16:13:14Z；SHA-256：adaf8975470b1bc32f97d0385b5f232184182047fd14885ccd2a0e867a88ec20）
- https://huggingface.co/datasets/yanhhh/AndroidAvd/raw/4d2be38083d1a4395ab0de9749983f7091714070/MineAndroid.avd/config.ini（获取于 2026-10-18T16:11:45Z；SHA-256：dec904f33ded1925234db80035d4e3dadda318fb8a5e362da9a4afa8ab02774f）
- https://raw.githubusercontent.com/OpenMobile2/OpenMobile2-Code/11e26ddc32a98112db38d6363274588cb2387817/README.md（获取于 2026-10-18T16:11:45Z；SHA-256：485279038266d9454df75e27a80a0a0d71c24e90700126d2dcfa0da921b1273d）
