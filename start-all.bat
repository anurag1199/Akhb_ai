@echo off
REM Start AKHB.ai Frontend and Backend
REM This script opens both servers in separate windows

cd /d "%~dp0"

echo Starting AKHB.ai Services...
echo.

REM Start Backend in new window
start "AKHB Backend (Port 5000)" cmd /k "cd backend && npm run dev"

REM Wait a moment for backend to start
timeout /t 3 /nobreak

REM Start Frontend in new window
start "AKHB Frontend (Port 3000)" cmd /k "cd frontend && npm start"

echo.
echo Services are starting...
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
echo.
echo Check the opened windows for startup messages.
