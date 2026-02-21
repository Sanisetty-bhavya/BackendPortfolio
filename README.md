# Bhavyasri Sanisetty – Backend Portfolio

Backend-focused full-stack portfolio for:

- Backend Software Engineer  
- Python Backend Developer  
- Entry-Level SDE  
- Entry-Level Machine Learning Engineer  

The site is built as a real full-stack application:

- **Backend:** Python, FastAPI, SQLite, simple ML inference module  
- **Frontend:** React, Vite, Tailwind CSS  
- **Architecture:** React fetches all portfolio data from the FastAPI backend via HTTP – no project or skills data is hardcoded in React.

---

## Folder structure

- `backend/` – FastAPI app, ML recommendation logic, SQLite models  
- `frontend/` – React + Vite + Tailwind single-page app  
- `requirements.txt` – Python dependencies for the backend  

Key backend files:

- `backend/app/main.py` – FastAPI application and API routes  
- `backend/app/data.py` – Portfolio data served via APIs (about, skills, projects, hiring)  
- `backend/app/schemas.py` – Pydantic models for request/response validation  
- `backend/app/models.py` – SQLAlchemy models (contact messages, prediction logs)  
- `backend/app/ml/smart_farming_model.py` – Smart farming ML-style scoring and recommendation  

Key frontend files:

- `frontend/index.html` – Root HTML shell  
- `frontend/vite.config.js` – Vite config  
- `frontend/tailwind.config.js` – Tailwind configuration  
- `frontend/src/main.jsx` – React entry point  
- `frontend/src/App.jsx` – App layout and data loading from backend  
- `frontend/src/components/*` – Presentational components (hero, tech stack, projects, API playground, contact, etc.)  

---

## Backend – FastAPI

### 1. Create and activate a virtual environment (recommended)

From `C:\Users\sanis\Downloads\Portfolio`:

```powershell
python -m venv .venv
.venv\Scripts\activate
```

### 2. Install Python dependencies

```powershell
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
```

### 3. Run the FastAPI server locally

```powershell
python -m uvicorn backend.app.main:app --reload --port 8000
```

The backend will be available at:

- `http://localhost:8000`
- Automatic API docs: `http://localhost:8000/docs`

SQLite database file will be created in `backend/app/portfolio.db` (relative to the working directory).

---

## Frontend – React + Vite + Tailwind

Node.js and npm are required for the frontend. Install from https://nodejs.org if not already installed.

### 1. Install dependencies

```powershell
cd frontend
npm install
```

### 2. Configure API base URL (optional)

By default, the frontend expects the backend at `http://localhost:8000`.

To override this (for example in production), create a file `frontend/.env`:

```bash
VITE_API_BASE_URL="https://your-backend-domain.onrender.com"
```

### 3. Run the development server

```powershell
cd frontend
npm run dev
```

Then open the URL shown in the terminal (typically `http://localhost:5173`).

---

## API design and endpoints

All portfolio data for the React app is served via JSON APIs.

### Portfolio endpoints

- `GET /api/about`  
  - Returns name, title, summary, location, education.

- `GET /api/skills`  
  - Returns grouped skills (Backend, Frontend, Machine Learning, Database, Tools).

- `GET /api/projects`  
  - Returns all projects with problem → approach → tech stack → result.

- `GET /api/projects/{slug}`  
  - Returns detailed project information.  
  - `smart-farming-ml-backend` includes architecture, API flow, ML pipeline, JSON example, inference details.

- `GET /api/hiring`  
  - Returns target roles, availability, and key links (email, GitHub, LinkedIn, resume URL).

### Smart Farming ML endpoint

- `POST /api/smart-farming/predict`

Request body:

```json
{
  "crop": "rice",
  "soil_type": "loamy",
  "region": "Andhra Pradesh",
  "nitrogen": 90,
  "phosphorus": 40,
  "potassium": 40,
  "ph": 6.5,
  "rainfall": 180
}
```

Response body (example shape):

```json
{
  "recommendation": {
    "crop": "rice",
    "suitability_score": 0.87,
    "fertilizer_plan": "Maintain current nutrient levels with balanced NPK application and periodic soil testing.",
    "pest_management": "Schedule preventive scouting and integrate biological control where possible.",
    "cost_estimate": "High return potential with moderate input costs.",
    "notes": "Conditions are highly favorable for this crop given the current soil and rainfall profile."
  }
}
```

Behind the scenes:

- Validates the request with Pydantic.  
- Uses a lightweight ML-style scoring function and pre-loaded model parameters in `backend/app/ml/crop_model.json`.  
- Logs each prediction to SQLite via the `PredictionLog` model for later analysis or model comparison.  

### Contact endpoint

- `POST /api/contact`

Request body:

```json
{
  "name": "Hiring Manager",
  "email": "manager@example.com",
  "message": "We would like to schedule an interview."
}
```

Behavior:

- Validates input using `ContactCreate` schema.  
- Persists the message in the `contact_messages` table.  
- Returns the stored message including server-side timestamp and ID.

---

## Frontend features

- **Hero section**: Name, title, short intro, and actionable buttons (View Projects, GitHub, Download Resume, Contact).  
- **About**: Professional summary focused on backend, APIs, debugging, and data-driven systems.  
- **Tech Stack**: Cards showing backend, frontend, ML, database, and tools.  
- **Projects**: Each project shows problem → approach → tech stack → result.  
- **Featured project detail**: Dedicated Smart Farming ML backend section with architecture, API flow, ML pipeline, JSON example, and inference explanation.  
- **API Playground**: Buttons that call real backend endpoints (`/api/about`, `/api/skills`, `/api/projects`) and display raw JSON in a terminal-style window.  
- **Hiring information**: Target roles, availability, and direct links (email, GitHub, LinkedIn).  
- **Contact form**: Sends a `POST /api/contact` to the backend and stores messages in SQLite.

Design characteristics:

- Minimal, developer-focused layout (similar to a GitHub project or technical docs).  
- Dark hero with lighter content sections.  
- Deep navy/black background, white text, blue/violet accent.  
- Rounded cards, subtle gradients, small hover animations.  
- Monospace font used for API/JSON examples.

---

## Resume download

The "Download Resume" button in the hero section points to `/resume.pdf`.

To make this work:

1. Place your resume file as `frontend/public/resume.pdf` (create the `public` folder if it does not exist).  
2. Rebuild or restart the frontend dev server.  

In production (e.g. Vercel), the `public` folder is served at the root of the site.

---

## Deployment

### Backend on Render

1. Push this project to a Git repository (GitHub recommended).  
2. In the Render dashboard, create a **New Web Service**.  
3. Connect your GitHub repository.  
4. Set:
   - **Environment**: `Python`  
   - **Build Command**:  
     ```bash
     pip install -r requirements.txt
     ```  
   - **Start Command**:  
     ```bash
     uvicorn backend.app.main:app --host 0.0.0.0 --port 10000
     ```  
5. Set **Port** in Render to `10000`.  
6. Deploy – Render will give you a URL like `https://your-portfolio-backend.onrender.com`.

Remember this URL; it will be used as `VITE_API_BASE_URL` for the frontend.

### Frontend on Vercel

1. In the Vercel dashboard, **Import Project** from the same GitHub repo.  
2. Set:
   - **Framework Preset**: `Vite`  
   - **Root Directory**: `frontend`  
   - **Build Command**: `npm run build`  
   - **Output Directory**: `dist`  
3. Under **Environment Variables**, add:
   - `VITE_API_BASE_URL = https://your-portfolio-backend.onrender.com`  
4. Deploy. Vercel will generate a URL such as `https://bhavyasri-portfolio.vercel.app`.

The deployed frontend will now talk to the deployed FastAPI backend.

---

## What this portfolio demonstrates (for reviewers)

For recruiters and engineering interviewers, this project demonstrates:

- REST API design with request/response validation and clear JSON contracts.  
- Backend-focused thinking: problem/approach/result articulation for each project.  
- Authentication-ready patterns (JWT, MFA, etc.) described in project cards.  
- Integration of a simple ML-style inference pipeline into a real API (`/api/smart-farming/predict`).  
- Database-backed logging for predictions and contact messages using SQLAlchemy and SQLite.  
- Frontend/Backend separation with React consuming only HTTP APIs (no hardcoded data).  
- Debug-friendly features such as the **API Playground** that exposes real responses for manual inspection.

