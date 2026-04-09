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
    why_hard: str
    system_overview: str
    architecture_desc: str
    data_pipeline: str
    model_core_logic: str
    evaluation: str
    deployment_scaling: str
    api_example: str
    engineering_decisions: str
    tradeoffs_limitations: str
    future_work: str


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
    id: str
    name: str
    email: EmailStr
    message: str
    created_at: datetime


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
