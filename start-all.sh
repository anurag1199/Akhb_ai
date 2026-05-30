#!/bin/bash
# Start AKHB.ai Frontend and Backend
# This script opens both servers

cd "$(dirname "$0")"

echo "Starting AKHB.ai Services..."
echo ""

# Check if terminal emulator is available
if command -v gnome-terminal &> /dev/null; then
    # Linux with GNOME
    gnome-terminal --tab --title="AKHB Backend" -- bash -c "cd backend && npm run dev"
    sleep 2
    gnome-terminal --tab --title="AKHB Frontend" -- bash -c "cd frontend && npm start"
elif command -v xterm &> /dev/null; then
    # Linux with xterm
    xterm -title "AKHB Backend" -e "cd backend && npm run dev" &
    sleep 2
    xterm -title "AKHB Frontend" -e "cd frontend && npm start" &
elif [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    open -a Terminal <(echo "cd '$(pwd)/backend' && npm run dev")
    sleep 2
    open -a Terminal <(echo "cd '$(pwd)/frontend' && npm start")
else
    # Fallback
    echo "Please run the following commands in separate terminals:"
    echo ""
    echo "Terminal 1:"
    echo "  cd backend && npm run dev"
    echo ""
    echo "Terminal 2:"
    echo "  cd frontend && npm start"
    exit 1
fi

echo ""
echo "Services are starting..."
echo "Backend: http://localhost:5000"
echo "Frontend: http://localhost:3000"
echo ""
