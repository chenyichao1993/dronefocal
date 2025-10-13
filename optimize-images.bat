@echo off
echo ========================================
echo   DroneFocal Image Optimizer
echo ========================================
echo.

echo Checking if Node.js is installed...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js found!
echo.

echo Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo Dependencies installed successfully!
echo.

echo Starting image optimization...
echo.
call npm run optimize-images

echo.
echo ========================================
echo   Optimization completed!
echo ========================================
echo.
echo Check the images/optimized/ folder for results
echo.
pause
