from datetime import datetime
from typing import List, Optional

from pydantic import BaseModel, EmailStr


class About(BaseModel):
    name: str
    title: str
    summary: str
    location: str
    education: str


class SkillCategory(BaseModel):
    category: str
    items: List[str]


class Project(BaseModel):
    id: int
    slug: str
    name: str
    role: str
    problem: str
    approach: str
    tech_stack: List[str]
    result: str
    featured: bool
    source_url: Optional[str] = None


class ProjectDetail(Project):
    architecture: str
    api_flow: str
    ml_pipeline: str
    json_example: str
    inference_details: str


class HiringInfo(BaseModel):
    roles: List[str]
    availability: List[str]
    email: EmailStr
    github: str
    linkedin: str
    resume_url: Optional[str]


class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    message: str


class ContactResponse(BaseModel):
    id: int
    name: str
    email: EmailStr
    message: str
    created_at: datetime

    class Config:
        orm_mode = True


class SmartFarmingPredictRequest(BaseModel):
    crop: str
    soil_type: str
    region: str
    nitrogen: float
    phosphorus: float
    potassium: float
    ph: float
    rainfall: float


class SmartFarmingRecommendation(BaseModel):
    crop: str
    suitability_score: float
    fertilizer_plan: str
    pest_management: str
    cost_estimate: str
    notes: str


class SmartFarmingPredictResponse(BaseModel):
    recommendation: SmartFarmingRecommendation
