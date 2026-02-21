import json
from pathlib import Path
from typing import Any, Dict


MODEL_PATH = Path(__file__).resolve().parent / "crop_model.json"


def load_model() -> Dict[str, Any]:
    if MODEL_PATH.exists():
        with MODEL_PATH.open("r", encoding="utf-8") as f:
            return json.load(f)
    return {
        "base_scores": {
            "rice": 0.8,
            "wheat": 0.75,
            "maize": 0.7,
        }
    }


MODEL = load_model()


def compute_suitability(crop: str, nitrogen: float, phosphorus: float, potassium: float, ph: float, rainfall: float) -> float:
    base = MODEL.get("base_scores", {}).get(crop.lower(), 0.6)
    nutrient_score = min((nitrogen + phosphorus + potassium) / 300.0, 1.0)
    ph_score = 1.0 - abs(ph - 6.5) / 3.0
    rainfall_score = 1.0 - abs(rainfall - 150.0) / 300.0
    score = 0.4 * base + 0.25 * nutrient_score + 0.2 * ph_score + 0.15 * rainfall_score
    return max(min(score, 1.0), 0.0)


def build_recommendation(crop: str, suitability_score: float) -> Dict[str, str]:
    if suitability_score >= 0.8:
        fertilizer_plan = "Maintain current nutrient levels with balanced NPK application and periodic soil testing."
        pest_management = "Schedule preventive scouting and integrate biological control where possible."
        cost_estimate = "High return potential with moderate input costs."
        notes = "Conditions are highly favorable for this crop given the current soil and rainfall profile."
    elif suitability_score >= 0.6:
        fertilizer_plan = "Adjust NPK ratios to target optimal levels and consider micronutrient supplementation."
        pest_management = "Monitor closely during critical growth stages and prepare targeted treatments."
        cost_estimate = "Balanced risk-reward with standard input costs."
        notes = "Good candidate crop with some factors slightly below ideal thresholds."
    else:
        fertilizer_plan = "Re-evaluate crop choice or significantly improve soil fertility before large-scale planting."
        pest_management = "Plan for resilient varieties and robust integrated pest management."
        cost_estimate = "Higher risk with potentially increased input costs."
        notes = "Current conditions are not ideal; consider alternative crops or corrective actions."
    return {
        "fertilizer_plan": fertilizer_plan,
        "pest_management": pest_management,
        "cost_estimate": cost_estimate,
        "notes": notes,
    }

