---
title: "win11 跳过TPM2.0 更新21H2正式版"
hidemeta: true
---

>升级后的截图

### 1. 下载家庭版 或者 专业版 系统文件
[](https://www.microsoft.com/zh-cn/software-download/windows11)

### 2. 删除`appraiserres.dll`文件

打开解压后的 `sources`文件夹，删除`appraiserres.dll`文件

### 3. 修改注册列表

参考此链接操作即可[修改注册表](https://www.toutiao.com/article/7019926793574498819/)

### 4. 执行bat脚本

[脚本来自](https://www.youtube.com/watch?v=SfTAhlfRktk&t=29s)

脚本下载地址 
> [百度网盘](https://pan.baidu.com/share/init?surl=en1DfRC17hiB4uOC60ClXQ)
> 提取码`4p36`

脚本代码如下：
```bat
@(set "0=%~f0"^)#) & powershell -nop -c iex([io.file]::ReadAllText($env:0)) & exit/b
#:: double-click to run or just copy-paste into powershell - it's a standalone hybrid script
#:: v2 using ifeo instead of wmi - increased compatibility at the cost of showing a cmd briefly on diskmgmt 

$_Paste_in_Powershell = {
  $N = 'Skip TPM Check on Dynamic Update'
  $B = gwmi -Class __FilterToConsumerBinding -Namespace 'root\subscription' -Filter "Filter = ""__eventfilter.name='$N'""" -ea 0
  $C = gwmi -Class CommandLineEventConsumer -Namespace 'root\subscription' -Filter "Name='$N'" -ea 0
  $F = gwmi -Class __EventFilter -NameSpace 'root\subscription' -Filter "Name='$N'" -ea 0
  if ($B) { $B | rwmi } ; if ($C) { $C | rwmi } ; if ($F) { $F | rwmi }
  $C = "cmd /q $N (c) AveYo, 2021 /d/x/r>nul (erase /f/s/q %systemdrive%\`$windows.~bt\appraiserres.dll"
  $C+= '&md 11&cd 11&ren vd.exe vdsldr.exe&robocopy "../" "./" "vdsldr.exe"&ren vdsldr.exe vd.exe&start vd -Embedding)&rem;'
  $K = 'HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\vdsldr.exe'
  if (test-path $K) {ri $K -force -ea 0; write-host -fore 0xf -back 0xd "`n $N [REMOVED] run again to install "; timeout /t 5}
  else {$0=ni $K; sp $K Debugger $C -force; write-host -fore 0xf -back 0x2 "`n $N [INSTALLED] run again to remove ";timeout /t 5}
  $0 = sp HKLM:\SYSTEM\Setup\MoSetup 'AllowUpgradesWithUnsupportedTPMOrCPU' 1 -type dword -force -ea 0
} ; start -verb runas powershell -args "-nop -c & {`n`n$($_Paste_in_Powershell-replace'"','\"')}"
$_Press_Enter
#,#
``


```

:::tip 协议

- 本作品代码部分采用 [Apache 2.0协议](https://www.apache.org/licenses/LICENSE-2.0)进行许可。遵循许可的前提下，你可以自由地对代码进行修改，再发布，可以将代码用作商业用途。但要求你：
  - **署名**：在原有代码和衍生代码中，保留原作者署名及代码来源信息。
  - **保留许可证**：在原有代码和衍生代码中，保留Apache 2.0协议文件。

- 本作品文档部分采用[知识共享署名 4.0 国际许可协议](http://creativecommons.org/licenses/by/4.0/)进行许可。 遵循许可的前提下，你可以自由地共享，包括在任何媒介上以任何形式复制、发行本作品，亦可以自由地演绎、修改、转换或以本作品为基础进行二次创作。但要求你：
  - **署名**：应在使用本文档的全部或部分内容时候，注明原作者及来源信息。
  - **非商业性使用**：不得用于商业出版或其他任何带有商业性质的行为。如需商业使用，请联系作者。
  - **相同方式共享的条件**：在本文档基础上演绎、修改的作品，应当继续以知识共享署名 4.0国际许可协议进行许可。

:::