@echo off
dir D:\Fun
for /r D:\Fun %%a in (*.java) do echo Ada file java pada direktori - %%~a
pause
) else (
echo File tidak ditemukan !
pause
)

