#!/bin/bash

# AKHB.ai Project Setup Script for macOS/Linux

echo "========================================"
echo "AKHB.ai - Tax & Advisory Services Setup"
echo "========================================"
echo ""

# Check if Node.js is installed
echo "Checking Node.js installation..."
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is not installed!"
    echo "Please download and install Node.js from: https://nodejs.org/"
    exit 1
fi

echo "Node.js is installed. Proceeding with setup..."
echo ""

# Setup Backend
echo "========================================"
echo "Setting up BACKEND..."
echo "========================================"
cd backend
echo "Installing backend dependencies..."
npm install
if [ $? -ne 0 ]; then
    echo "ERROR: Failed to install backend dependencies"
    exit 1
fi
echo "Backend setup complete!"
cd ..
echo ""

# Setup Frontend
echo "========================================"
echo "Setting up FRONTEND..."
echo "========================================"
cd frontend
echo "Installing frontend dependencies..."
npm install
if [ $? -ne 0 ]; then
    echo "ERROR: Failed to install frontend dependencies"
    exit 1
fi
echo "Frontend setup complete!"
cd ..
echo ""

echo "========================================"
echo "Setup Complete!"
echo "========================================"
echo ""
echo "To start the application:"
echo ""
echo "1. Open a terminal and run:"
echo "   cd backend"
echo "   npm run dev"
echo ""
echo "2. Open another terminal and run:"
echo "   cd frontend"
echo "   npm start"
echo ""
echo "The frontend will open at http://localhost:3000"
echo "The backend API runs at http://localhost:5000"
echo ""
