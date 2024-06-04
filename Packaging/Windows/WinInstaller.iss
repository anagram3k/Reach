; Script generated by the Inno Setup Script Wizard.
; SEE THE DOCUMENTATION FOR DETAILS ON CREATING INNO SETUP SCRIPT FILES!

#define MyAppName "Reach"
#define MyAppVersion "1.6.4"
#define MyAppPublisher "Sinuslabs"
#define MyAppURL "https://sinuslabs.io"
#define MyAppExeName "reach.vst3"

[Setup]
AppId={{714C974F-D5D1-4585-B8D6-FFB183A2E195}
AppName={#MyAppName}
AppVersion={#MyAppVersion}
AppVerName={#MyAppName} {#MyAppVersion}
AppPublisher={#MyAppPublisher}
AppPublisherURL={#MyAppURL}
AppSupportURL={#MyAppURL}
AppUpdatesURL={#MyAppURL}
DefaultGroupName={#MyAppName}
AllowNoIcons=yes
OutputDir=C:\Users\sinus\Documents\GitHub\{#MyAppName}\build\Windows\
OutputBaseFilename={#MyAppName}-Windows
Compression=lzma
SolidCompression=yes
WizardStyle=modern
AppCopyright=2024 {#MyAppPublisher}
WizardImageFile=C:\Users\sinus\Documents\GitHub\{#MyAppName}\Packaging\Windows\Resources\Background.bmp
WizardSmallImageFile=C:\Users\sinus\Documents\GitHub\{#MyAppName}\Packaging\Windows\Resources\SmallLogo.bmp
DefaultDirName="C:\Program Files\Common Files\VST3\{#MyAppName}\"
DisableDirPage=no
DirExistsWarning=no
LicenseFile=C:\Users\sinus\Documents\GitHub\{#MyAppName}\Packaging\Windows\Resources\license.txt

[Files]
Source: "C:\Users\sinus\Documents\GitHub\{#MyAppName}\Binaries\Compiled\VST3\{#MyAppExeName}"; DestDir: "{app}"; Flags: ignoreversion

[Icons]
Name: "{group}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"