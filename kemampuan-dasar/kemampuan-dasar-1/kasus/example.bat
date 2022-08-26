@echo off
for %%f in (*.java) do (
    if "%%~xf"==".java" echo %%f
)