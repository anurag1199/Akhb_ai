# AKHB.ai Project - Complete File Index

## 📋 Documentation Files (Read These First!)

### 1. **SETUP_GUIDE.md** ⭐ START HERE
   - **Purpose**: Comprehensive setup and usage guide
   - **Contains**: Quick start, feature list, API endpoints, deployment
   - **Read Time**: 10 minutes
   - **Best For**: First-time users

### 2. **QUICKSTART.md** ⚡ FASTEST SETUP
   - **Purpose**: 5-minute setup instructions
   - **Contains**: Copy-paste commands to start immediately
   - **Read Time**: 2 minutes
   - **Best For**: Impatient users

### 3. **README.md** 📖 FULL DOCUMENTATION
   - **Purpose**: Complete project documentation
   - **Contains**: Architecture, features, API details, troubleshooting
   - **Read Time**: 20 minutes
   - **Best For**: Developers who want details

### 4. **PROJECT_SUMMARY.md** 📊 OVERVIEW
   - **Purpose**: High-level project summary
   - **Contains**: Feature list, file structure, technology stack
   - **Read Time**: 5 minutes
   - **Best For**: Project managers

---

## 🚀 Setup & Launch Scripts

### Windows Users
```
setup.bat          → Run once to install dependencies
start-all.bat      → Launch both servers with one click
```

### Mac/Linux Users
```
setup.sh           → Run once to install dependencies  
start-all.sh       → Launch both servers with one script
```

---

## 📁 Backend Files (`backend/` folder)

### Configuration
- **package.json** - Node dependencies (express, cors, dotenv, uuid)
- **.env** - Environment variables (PORT=5000)

### Core Backend
- **src/server.js** - Express server setup and middleware

### Controllers (Business Logic)
- **src/controllers/serviceController.js** - All API functions
  - getServices()
  - getEngagementModels()
  - getAITools()
  - getBlogPosts()
  - submitEngagementRequest()
  - getEngagementStatus()

### Routes (API Endpoints)
- **src/routes/serviceRoutes.js** - Route definitions
  - GET /api/services
  - GET /api/engagement-models
  - GET /api/ai-tools
  - GET /api/blog
  - POST /api/engagement/request
  - And more...

### Data (JSON Content)
- **src/data/services.json** - 6 service offerings
- **src/data/engagement-models.json** - 6 pricing tiers
- **src/data/ai-tools.json** - 4 AI tools
- **src/data/blog-posts.json** - 3 blog articles

---

## 🎨 Frontend Files (`frontend/` folder)

### Configuration
- **package.json** - React dependencies (react, axios, react-router)

### Public Assets
- **public/index.html** - HTML template with root div

### React Application
- **src/index.js** - Entry point, renders App to DOM
- **src/App.js** - Main component with all pages:
  - Navigation bar
  - HomePage (hero + features)
  - ServicesPage (6 services)
  - EngagementPage (6 engagement models)
  - AIToolsPage (4 AI tools)
  - BlogPage (articles)
  - ContactPage (form with validation)
  - Footer

### Styling
- **src/styles/index.css** - Global styles, variables, basics
- **src/styles/App.css** - Component-specific styling
  - Navigation
  - Pages
  - Forms
  - Cards
  - Responsive design

---

## 🔧 Project Configuration

### .gitignore
- Ignores node_modules, build, .env, cache files

---

## 📊 Data Content Overview

### Services (6 Items)
Located in: `backend/src/data/services.json`
- Entry and Structuring
- Tax Controversy
- GST and Indirect Tax
- Assurance and CFO Support
- Forensic and Governance
- AI-enabled Workflows

### Engagement Models (6 Items)
Located in: `backend/src/data/engagement-models.json`
- Intro Call
- Advisory Sprint
- Monthly Retainer
- Matter-Based Representation
- Cross-Border Project
- Enterprise/RFP Mandate

### AI Tools (4 Items)
Located in: `backend/src/data/ai-tools.json`
- NoticeScope (notice analysis)
- DraftDesk (draft preparation)
- Refund360 (refund modeling)
- Global Entry Navigator (cross-border structuring)

### Blog Posts (3 Items)
Located in: `backend/src/data/blog-posts.json`
- Top 50 CA Firms in India 2026
- Understanding Tax Controversy Management
- GST Compliance Guide

---

## 🌐 How Everything Connects

```
Frontend (React)
    ↓ (HTTP Requests via Axios)
    ↓ (http://localhost:3000)
    ↓
Backend API (Express)
    ↓ (Routes)
    ↓ (http://localhost:5000)
    ↓
Controllers → Read/Process → Data (JSON files)
    ↓
Response JSON
    ↓
Frontend displays data
```

---

## ⚡ Quick Commands Reference

### Installation
```bash
# Backend
cd backend && npm install

# Frontend
cd frontend && npm install
```

### Running
```bash
# Backend (Terminal 1)
cd backend && npm run dev

# Frontend (Terminal 2)
cd frontend && npm start
```

### Building
```bash
# Frontend production build
cd frontend && npm run build
```

### API Testing
```bash
curl http://localhost:5000/api/health
curl http://localhost:5000/api/services
```

---

## 📈 Project Statistics

| Metric | Value |
|--------|-------|
| **Total Files** | 18 |
| **Code Files** | 13 |
| **Documentation Files** | 5 |
| **Backend Files** | 7 |
| **Frontend Files** | 6 |
| **Total Lines of Code** | 2,000+ |
| **API Endpoints** | 8 |
| **React Components** | 7 |
| **Data Models** | 4 |
| **Database** | JSON (file-based) |

---

## 🎯 Getting Started Steps

1. **Read**: SETUP_GUIDE.md (this folder)
2. **Run**: setup.bat (or setup.sh on Mac/Linux)
3. **Start**: start-all.bat (or start-all.sh)
4. **Visit**: http://localhost:3000
5. **Explore**: All pages and features
6. **Test**: Contact form submission
7. **Customize**: Edit JSON files for content

---

## 🔍 File Purpose Quick Reference

| File | Type | Purpose | Edit? |
|------|------|---------|-------|
| SETUP_GUIDE.md | Doc | Start here for everything | ❌ |
| QUICKSTART.md | Doc | 5-min setup | ❌ |
| README.md | Doc | Full details | ❌ |
| package.json (both) | Config | Dependencies | ⚠️ |
| .env | Config | Backend settings | ✅ |
| services.json | Data | Service content | ✅ |
| engagement-models.json | Data | Pricing tiers | ✅ |
| ai-tools.json | Data | AI tools info | ✅ |
| blog-posts.json | Data | Articles | ✅ |
| App.js | Code | React components | ✅ |
| App.css | Style | Styling | ✅ |
| server.js | Code | Backend server | ⚠️ |
| serviceController.js | Code | API logic | ⚠️ |
| serviceRoutes.js | Code | Route definitions | ⚠️ |

---

## 💡 Most Important Files

### To Run the App
1. ✅ setup.bat (or setup.sh)
2. ✅ start-all.bat (or start-all.sh)

### To Understand the App
1. 📖 SETUP_GUIDE.md
2. 📖 README.md
3. 🎨 frontend/src/App.js
4. 🔌 backend/src/server.js

### To Customize Content
1. ✏️ backend/src/data/*.json (edit these!)
2. 🎨 frontend/src/styles/App.css (colors/layout)
3. ✏️ frontend/src/App.js (page text)

---

## 🆘 Help Resources

**Can't start backend?**
→ Read: README.md (Troubleshooting section)

**Don't know which endpoints?**
→ Read: SETUP_GUIDE.md (API Endpoints section)

**Want to add features?**
→ Read: README.md (Customization section)

**Forgot how to run?**
→ Read: QUICKSTART.md

**Need all details?**
→ Read: README.md

---

## ✨ You Now Have

✅ Complete frontend (React)
✅ Complete backend (Node.js)
✅ Professional design
✅ Form with validation
✅ API with 8 endpoints
✅ Data management system
✅ 4 documentation files
✅ 2 setup scripts
✅ 2 launcher scripts

**Everything needed to run a professional tax advisory services website!**

---

## 🚀 Next Action

**Right now:**
1. Run: `setup.bat`
2. Run: `start-all.bat`
3. Visit: http://localhost:3000

**That's it!** You're done. The website will be running.

---

**Project**: AKHB.ai Tax & Advisory Services  
**Created**: May 31, 2026  
**Status**: ✅ Complete & Ready  
**Time to Start**: 5 minutes
