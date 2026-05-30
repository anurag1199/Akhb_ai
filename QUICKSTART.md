# Quick Start Guide

## Run Everything in 5 Minutes ⚡

### Option 1: Windows PowerShell (Recommended)

Open PowerShell and run:

```powershell
cd "d:\Satyam Project"

# Terminal 1: Start Backend
cd backend
npm install
npm run dev

# Terminal 2: Start Frontend (in a new PowerShell window)
cd "d:\Satyam Project\frontend"
npm install
npm start
```

### Option 2: Using npm commands separately

**Terminal 1 - Backend:**
```bash
cd "d:\Satyam Project\backend"
npm install
npm run dev
```

Wait for: `🚀 AKHB.ai Backend server running on http://localhost:5000`

**Terminal 2 - Frontend:**
```bash
cd "d:\Satyam Project\frontend"
npm install
npm start
```

Wait for: Browser opens at `http://localhost:3000`

## What You'll See

### Home Page
- Hero section with AKHB.ai branding
- 4 key features highlighted
- Call-to-action buttons

### Navigation Menu
- **Services** - All 6 tax & advisory services
- **Engagement Models** - 6 pricing tiers
- **AI Tools** - 4 intelligent workflow tools
- **Insights** - Blog articles
- **Contact** - Engagement request form

### Try These Actions

1. **Browse Services** - Click "Services" to see all offerings
2. **Check Engagement Models** - View different pricing options
3. **Explore AI Tools** - Learn about NoticeScope, DraftDesk, etc.
4. **Read Insights** - View blog posts and articles
5. **Submit Request** - Fill the contact form and submit

### Sample Form Data
For testing the contact form:

**Name:** John Doe
**Email:** john@example.com
**Phone:** +91-9876543210
**Company:** Tech Solutions Inc
**Country:** India
**Industry:** Technology
**Matter Type:** Tax
**Mandate:** Need tax optimization strategy for our startup expansion and GST compliance
**Deadline:** 2024-06-30
**Meeting Mode:** Video Call

## API Testing

Test backend endpoints using curl or Postman:

```bash
# Get all services
curl http://localhost:5000/api/services

# Get engagement models
curl http://localhost:5000/api/engagement-models

# Get AI tools
curl http://localhost:5000/api/ai-tools

# Get blog posts
curl http://localhost:5000/api/blog

# Health check
curl http://localhost:5000/api/health
```

## File Structure Overview

```
Backend:
- Runs on port 5000
- API endpoints in /api/*
- Data files: JSON files in src/data/

Frontend:
- Runs on port 3000
- Single-page application (React)
- Communicates with backend via axios
```

## Stopping the Servers

**Backend:** Press `Ctrl+C` in PowerShell
**Frontend:** Press `Ctrl+C` in browser's PowerShell

## Common Issues & Solutions

### "Port 5000 already in use"
```powershell
# Kill process on port 5000
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### "npm not found"
Install Node.js from: https://nodejs.org/

### "Cannot GET /"
Frontend needs backend. Ensure backend is running on port 5000.

### "CORS error"
Restart both backend and frontend.

## Next Steps

1. **Customize Content** - Edit JSON files in `backend/src/data/`
2. **Update Styling** - Modify CSS in `frontend/src/styles/`
3. **Add More Features** - Extend routes and controllers
4. **Deploy** - Use services like Heroku, AWS, or Vercel

## Useful Resources

- Backend API: http://localhost:5000/api
- Frontend UI: http://localhost:3000
- API Health: http://localhost:5000/api/health

---

**You're all set!** The website should now be running. Visit http://localhost:3000
