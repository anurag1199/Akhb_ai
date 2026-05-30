# AKHB.ai - Professional Tax & Advisory Services Website

A full-stack web application for AKHB.ai, a professional tax and advisory services firm with AI-enabled workflows.

## Project Structure

```
Satyam Project/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── serviceController.js
│   │   ├── routes/
│   │   │   └── serviceRoutes.js
│   │   ├── data/
│   │   │   ├── services.json
│   │   │   ├── engagement-models.json
│   │   │   ├── ai-tools.json
│   │   │   └── blog-posts.json
│   │   └── server.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   │   ├── index.css
│   │   │   └── App.css
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   │   └── index.html
│   └── package.json
└── README.md
```

## Features

### Backend (Node.js + Express)
- RESTful API endpoints for services, engagement models, and AI tools
- Service data management
- Engagement request submission with lead scoring
- Blog/insights data management
- CORS-enabled for frontend integration

### Frontend (React)
- Modern, responsive UI with professional design
- Navigation across multiple pages:
  - **Home**: Hero section with features overview
  - **Services**: Display all tax and advisory services
  - **Engagement Models**: Different engagement options with pricing
  - **AI Tools**: AI-powered workflow tools (NoticeScope, DraftDesk, Refund360, Global Entry Navigator)
  - **Insights**: Blog posts and resources
  - **Contact**: Engagement request form with validation
- Form submission with real-time feedback
- Lead scoring system integration
- Fully styled with custom CSS

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Windows, macOS, or Linux

### Installation

#### 1. Backend Setup

Navigate to the backend directory:
```bash
cd "d:\Satyam Project\backend"
```

Install dependencies:
```bash
npm install
```

Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

#### 2. Frontend Setup

Open a new terminal and navigate to the frontend directory:
```bash
cd "d:\Satyam Project\frontend"
```

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm start
```

The frontend will open on `http://localhost:3000`

## API Endpoints

### Services
- `GET /api/services` - Get all services

### Engagement Models
- `GET /api/engagement-models` - Get all engagement models
- `GET /api/engagement-models/:id` - Get single engagement model

### AI Tools
- `GET /api/ai-tools` - Get all AI tools
- `GET /api/ai-tools/:id` - Get single AI tool

### Blog/Insights
- `GET /api/blog` - Get all blog posts
- `GET /api/blog?featured=true` - Get featured blog posts
- `GET /api/blog/:slug` - Get single blog post by slug

### Engagement Requests
- `POST /api/engagement/request` - Submit engagement request
- `GET /api/engagement/status/:request_id` - Check request status

### Health Check
- `GET /api/health` - API health check

## Service Categories

The platform offers 6 core service clusters:
1. **Entry and Structuring** - New market decisions and business structure optimization
2. **Tax Controversy** - Expert handling of tax notices and disputes
3. **GST and Indirect Tax** - Compliance and refund management
4. **Assurance and CFO Support** - Financial reporting and controls
5. **Forensic and Governance** - Sensitive reviews and governance support
6. **AI-enabled Workflows** - Speed and consistency through automation

## Engagement Models

Six engagement options available:
1. **Intro Call** - Initial fit assessment (Unspecified)
2. **Advisory Sprint** - Short-term projects (INR 25k–75k)
3. **Monthly Retainer** - Ongoing support (INR 75k–2.5L+)
4. **Matter-Based** - Specific dispute handling (Custom)
5. **Cross-Border** - International expansion (INR 1.5L+)
6. **Enterprise/RFP** - Large-scale mandates (Custom)

## AI Tools

Four intelligent workflow tools:
1. **NoticeScope** - Tax notice analysis and action planning
2. **DraftDesk** - Structured draft preparation
3. **Refund360** - Refund and interest scenario modeling
4. **Global Entry Navigator** - Cross-border structuring comparison

## Form Submission

The engagement request form includes:
- Contact information
- Company details
- Matter type and urgency
- Mandate summary
- Meeting preferences
- Privacy and conflict-check consents
- Automatic lead scoring

Lead Score Calculation:
- Base: 50 points
- Matter type: +15-20 points
- Exposure band: +10-20 points
- Mandate documentation: +15 points
- Final score determines routing priority

## Technology Stack

### Frontend
- React 18.2.0
- React Router DOM 6.8.0
- Axios for API calls
- Custom CSS (no frameworks)

### Backend
- Express.js 4.18.2
- Node.js
- CORS support
- UUID for request IDs
- dotenv for configuration

## Configuration

### Environment Variables

**Backend (.env)**
```
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

## Development

### Backend Development
```bash
cd backend
npm run dev    # Runs with nodemon for auto-reload
```

### Frontend Development
```bash
cd frontend
npm start      # Runs on port 3000 with hot reload
```

## Build for Production

### Frontend Build
```bash
cd frontend
npm run build   # Creates optimized build in build/ folder
```

### Backend Production
Update `.env`:
```
PORT=5000
NODE_ENV=production
FRONTEND_URL=https://yourdomain.com
```

Run with:
```bash
npm start
```

## Data Management

All data is stored in JSON files in the `backend/src/data/` directory:
- **services.json** - Service offerings
- **engagement-models.json** - Pricing and engagement options
- **ai-tools.json** - AI tool descriptions and features
- **blog-posts.json** - Article and insight content

To update data, simply edit the JSON files and restart the backend.

## Customization

### Adding New Services
Edit `backend/src/data/services.json` and add a new service object.

### Adding Blog Posts
Edit `backend/src/data/blog-posts.json` and add a new post object.

### Styling
Modify CSS files in `frontend/src/styles/`:
- `index.css` - Global styles
- `App.css` - Component styles

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Data Privacy

The application includes:
- Privacy consent checkboxes on the engagement form
- Conflict-of-interest acknowledgement
- Data handling notes in all AI tool descriptions
- CORS configuration for secure cross-origin requests

## Responsive Design

The website is fully responsive and works on:
- Desktop (1200px and above)
- Tablet (768px to 1199px)
- Mobile (below 768px)

## Troubleshooting

### Backend won't start
1. Check Node.js is installed: `node --version`
2. Ensure port 5000 is not in use
3. Install dependencies: `npm install`

### Frontend shows blank page
1. Check backend is running on port 5000
2. Clear browser cache and refresh
3. Check browser console for errors

### API calls fail
1. Verify backend server is running
2. Check CORS configuration in backend
3. Verify API endpoints in network tab

## Future Enhancements

- Database integration (MongoDB/PostgreSQL)
- User authentication and login
- Client dashboard for engagement tracking
- Email notifications
- Document management system
- Multi-language support
- Payment integration

## Support

For questions or issues, refer to the API documentation in the backend or contact the development team.

## License

This project is proprietary software of AKHB.ai. All rights reserved.

---

**Created**: May 31, 2026
**Version**: 1.0.0
**Status**: Production Ready
