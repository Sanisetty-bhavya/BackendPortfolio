from datetime import datetime
from typing import List

from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pymongo.database import Database

from . import data
from .database import get_mongo_db
from .schemas import (
    About,
    ContactCreate,
    ContactResponse,
    HiringInfo,
    Project,
    ProjectDetail,
    SmartFarmingPredictRequest,
    SmartFarmingPredictResponse,
    SmartFarmingRecommendation,
    SkillCategory,
)
from .ml.smart_farming_model import build_recommendation, compute_suitability


app = FastAPI(
    title="Bhavyasri Sanisetty Portfolio API",
    description="Backend API powering the portfolio site, exposing project, skills, and smart farming ML endpoints.",
    version="1.0.0",
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/about", response_model=About, tags=["portfolio"])
def get_about() -> About:
    return data.ABOUT


@app.get("/api/skills", response_model=List[SkillCategory], tags=["portfolio"])
def get_skills() -> List[SkillCategory]:
    return data.SKILLS


@app.get("/api/projects", response_model=List[Project], tags=["portfolio"])
def get_projects() -> List[Project]:
    return data.PROJECTS


@app.get("/api/projects/{slug}", response_model=ProjectDetail, tags=["portfolio"])
def get_project_detail(slug: str) -> ProjectDetail:
    if slug == data.SMART_FARMING_DETAIL.slug:
        return data.SMART_FARMING_DETAIL
    for project in data.PROJECTS:
        if project.slug == slug:
            return ProjectDetail(
                **project.dict(),
                architecture="Architecture details for this project are described at a high level.",
                api_flow="Requests flow through validation, business logic, and persistence layers.",
                ml_pipeline="This project does not include an ML pipeline.",
                json_example="{}",
                inference_details="No ML-specific inference details for this project.",
            )
    raise HTTPException(status_code=404, detail="Project not found")


@app.get("/api/hiring", response_model=HiringInfo, tags=["portfolio"])
def get_hiring() -> HiringInfo:
    return data.HIRING


@app.post("/api/contact", response_model=ContactResponse, tags=["contact"])
def create_contact(message: ContactCreate, db: Database = Depends(get_mongo_db)) -> ContactResponse:
    now = datetime.utcnow()
    doc = {
        "name": message.name,
        "email": message.email,
        "message": message.message,
        "created_at": now,
    }
    result = db.contact_messages.insert_one(doc)
    stored = db.contact_messages.find_one({"_id": result.inserted_id})
    return ContactResponse(
        id=str(stored["_id"]),
        name=stored["name"],
        email=stored["email"],
        message=stored["message"],
        created_at=stored["created_at"],
    )


@app.post(
    "/api/smart-farming/predict",
    response_model=SmartFarmingPredictResponse,
    tags=["smart-farming"],
)
def predict_smart_farming(
    request: SmartFarmingPredictRequest, db: Database = Depends(get_mongo_db)
) -> SmartFarmingPredictResponse:
    score = compute_suitability(
        crop=request.crop,
        nitrogen=request.nitrogen,
        phosphorus=request.phosphorus,
        potassium=request.potassium,
        ph=request.ph,
        rainfall=request.rainfall,
    )
    recommendation_data = build_recommendation(request.crop, score)
    recommendation = SmartFarmingRecommendation(
        crop=request.crop,
        suitability_score=round(score, 3),
        fertilizer_plan=recommendation_data["fertilizer_plan"],
        pest_management=recommendation_data["pest_management"],
        cost_estimate=recommendation_data["cost_estimate"],
        notes=recommendation_data["notes"],
    )
    db_log = {
        "crop": request.crop,
        "soil_type": request.soil_type,
        "region": request.region,
        "recommendation": recommendation.notes,
        "created_at": datetime.utcnow(),
    }
    db.prediction_logs.insert_one(db_log)
    return SmartFarmingPredictResponse(recommendation=recommendation)


@app.get("/")
def root():
    return {"message": "Bhavyasri Sanisetty Portfolio Backend API is live 🚀"}
