@echo off
dir D:\Fun
for /r D:\Fun %%f in (*.java) do echo Ada file java pada direktori - %%~f


SET /P Q= %%f "akan diganti nama? Pilih 1(ya) atau 2 (tidak)): "

2>NUL CALL :CASE_%Pilihan% # jump to :CASE_ya, :CASE_tidak, etc.
IF ERRORLEVEL 1 CALL :DEFAULT_CASE # If label doesn't exist

ECHO Done.
EXIT /B

:CASE_ya
  COLOR CF
  GOTO END_CASE
:CASE_tidak
  COLOR 9F
  GOTO END_CASE
:DEFAULT_CASE
  ECHO Pilihan tidak ada "%Pilihan%"
  GOTO END_CASE
:END_CASE
  VER > NUL # reset ERRORLEVEL
  GOTO :EOF # return from CALL

) 
pause

)


