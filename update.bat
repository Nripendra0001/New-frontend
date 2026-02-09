@echo off
title Vercel Auto Deploy - Frontend

echo ===============================
echo   SarkariNext Frontend Deploy
echo ===============================
echo.

git add .

set msg=update
set /p msg=Enter commit message (or press Enter for "update"): 

if "%msg%"=="" set msg=update

git commit -m "%msg%"
git push

echo.
echo ===============================
echo   Successfully pushed!
echo   Vercel will auto-deploy
echo ===============================
echo.

pause
