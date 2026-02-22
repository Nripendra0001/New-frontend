@echo off 
title SarkariNext Git Auto Deploy 
cd /d "%%~dp0" 
echo [1/5] Git Status... 
git status 
echo [2/5] Adding files... 
git add . 
set /p msg=Enter commit message (default: update): 
if "%%msg%%"=="" set msg=update 
echo [3/5] Commit... 
git commit -m "%%msg%%" 
echo [4/5] Push... 
git push origin main 
echo Done ?? 
pause 
