from .schemas import About, SkillCategory, Project, ProjectDetail, HiringInfo


ABOUT = About(
    name="Bhavyasri Sanisetty",
    title="Backend Software Engineer | Python (FastAPI/Flask) | REST APIs | Machine Learning",
    summary=(
        "Backend-focused software engineer who builds REST APIs, authentication systems, "
        "and machine learning powered applications using Python. Comfortable debugging APIs, "
        "designing data models, and integrating external services."
    ),
    location="Guntur, Andhra Pradesh, India",
    education="B.Tech in Computer Science and Engineering",
)


SKILLS = [
    SkillCategory(
        category="Backend",
        items=["Python", "FastAPI", "Flask", "REST APIs", "Authentication"],
    ),
    SkillCategory(
        category="Frontend",
        items=["React", "HTML5", "CSS3", "JavaScript (ES6)", "Tailwind CSS"],
    ),
    SkillCategory(
        category="Machine Learning",
        items=["Pandas", "NumPy", "Scikit-learn"],
    ),
    SkillCategory(
        category="Database",
        items=["SQLite", "MongoDB"],
    ),
    SkillCategory(
        category="Tools",
        items=["Git", "GitHub", "Postman", "Linux"],
    ),
]


PROJECTS = [
    Project(
        id=1,
        slug="smart-farming-ml-backend",
        name="Smart Farming ML Backend Service",
        role="Backend Developer, ML Integration",
        problem="Farmers need real-time recommendations for crop selection and resource planning based on soil and environmental data.",
        approach="Designed a FastAPI-based backend that exposes REST endpoints for crop suitability prediction using a serialized ML pipeline and logs every inference to a database for monitoring.",
        tech_stack=["Python", "FastAPI", "Pandas", "NumPy", "Scikit-learn", "SQLite"],
        result="Provides low-latency JSON predictions for crop recommendations and resource planning, enabling data-driven decisions in the field.",
        featured=True,
        source_url="https://github.com/Sanisetty-bhavya",
    ),
    Project(
        id=2,
        slug="multi-factor-auth-system",
        name="Multi-Factor Authentication System",
        role="Backend Developer",
        problem="Applications require secure login flows combining passwords, tokens, and one-time codes without compromising user experience.",
        approach="Implemented JWT-based authentication with bcrypt password hashing, email and mobile OTP verification, and robust token expiry handling with detailed error responses.",
        tech_stack=["Python", "FastAPI", "JWT", "bcrypt", "SQLite", "Postman"],
        result="Ensures secure access to protected routes with a clear separation of authentication and authorization concerns.",
        featured=False,
        source_url="https://github.com/Sanisetty-bhavya/Multi-Factor-Authentication-System/tree/main",
    ),
    Project(
        id=3,
        slug="prompt-to-ui-generator",
        name="Prompt-to-UI Generator",
        role="Backend and Frontend Developer",
        problem="Developers want to quickly prototype UIs from natural language descriptions without manual layout coding.",
        approach="Built a FastAPI backend that processes natural language prompts into structured JSON, and a React frontend that renders components dynamically from the response.",
        tech_stack=["Python", "FastAPI", "React", "JavaScript", "Tailwind CSS"],
        result="Allows rapid iteration on UI ideas by turning plain-text prompts into interactive layouts.",
        featured=False,
        source_url="https://github.com/Sanisetty-bhavya/Prompt-to-UI_Generator",
    ),
    Project(
        id=4,
        slug="language-translation-client",
        name="Language Translation Client",
        role="Backend Developer",
        problem="Applications that rely on external translation APIs need resilient wrappers that handle failures and reduce costs.",
        approach="Created a backend client that validates input, calls external translation APIs, normalizes JSON responses, and caches frequent translations.",
        tech_stack=["Python", "FastAPI", "Requests", "Caching", "JSON"],
        result="Improves reliability and latency of translation flows while reducing repeated API calls.",
        featured=False,
        source_url="https://github.com/Sanisetty-bhavya/LanguageTranslationClient",
    ),
]


SMART_FARMING_DETAIL = ProjectDetail(
    **PROJECTS[0].dict(),
    architecture=(
        "The service exposes a FastAPI backend with dedicated routers for prediction, "
        "monitoring, and configuration. Incoming requests pass through validation, "
        "feature engineering, and a serialized ML model before being logged to SQLite."
    ),
    api_flow=(
        "1) Client sends POST /api/smart-farming/predict with soil and weather features. "
        "2) Request is validated and normalized. "
        "3) Features are fed into the loaded model. "
        "4) Model output is combined with rule-based adjustments. "
        "5) Final recommendation and metadata are returned as JSON and logged."
    ),
    ml_pipeline=(
        "Data normalization, feature scaling, model inference using a pre-trained classifier, "
        "and post-processing that enriches predictions with fertilizer, pest, and cost guidance."
    ),
    json_example=(
        '{\n'
        '  "crop": "rice",\n'
        '  "soil_type": "loamy",\n'
        '  "region": "Andhra Pradesh",\n'
        '  "nitrogen": 90,\n'
        '  "phosphorus": 40,\n'
        '  "potassium": 40,\n'
        '  "ph": 6.5,\n'
        '  "rainfall": 180\n'
        '}'
    ),
    inference_details=(
        "The model calculates a suitability score for the requested crop and combines it "
        "with handcrafted domain rules for resource planning. Each prediction is stored "
        "together with input features, enabling later analysis and model comparison."
    ),
)


HIRING = HiringInfo(
    roles=[
        "Backend Developer",
        "Python Developer",
        "Software Development Engineer (Entry Level)",
        "Machine Learning Engineer (Entry Level)",
    ],
    availability=[
        "Open to full-time roles",
        "Open to relocation",
        "Open to remote opportunities",
    ],
    email="sanisettyb@gmail.com",
    github="https://github.com/Sanisetty-bhavya",
    linkedin="https://www.linkedin.com/in/bhavyasri-sanisetty-31948424b",
    resume_url=None,
)
