@echo off
REM AKHB.ai Project Setup Script

echo ===============================================
echo AKHB.ai - Tax & Advisory Services Setup
echo ===============================================
echo.

REM Check if Node.js is installed
echo Checking Node.js installation...
node --version > nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed!
    echo Please download and install Node.js from: https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js is installed. Proceeding with setup...
echo.

REM Setup Backend
echo ===============================================
echo Setting up BACKEND...
echo ===============================================
cd backend
echo Installing backend dependencies...
call npm install
if errorlevel 1 (
    echo ERROR: Failed to install backend dependencies
    pause
    exit /b 1
)
echo Backend setup complete!
cd ..
echo.

REM Setup Frontend
echo ===============================================
echo Setting up FRONTEND...
echo ===============================================
cd frontend
echo Installing frontend dependencies...
call npm install
if errorlevel 1 (
    echo ERROR: Failed to install frontend dependencies
    pause
    exit /b 1
)
echo Frontend setup complete!
cd ..
echo.

echo ===============================================
echo Setup Complete!
echo ===============================================
echo.
echo To start the application:
echo.
echo 1. Open a PowerShell window and run:
echo    cd backend
echo    npm run dev
echo.
echo 2. Open another PowerShell window and run:
echo    cd frontend
echo    npm start
echo.
echo The frontend will open at http://localhost:3000
echo The backend API runs at http://localhost:5000
echo.
pause
