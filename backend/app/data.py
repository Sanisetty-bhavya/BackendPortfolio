from .schemas import About, SkillCategory, Project, ProjectDetail, HiringInfo


ABOUT = About(
    name="Bhavyasri Sanisetty",
    title="ML Systems Engineer | Backend & Scalable AI Infrastructure",
    summary=(
        "I design and build **production-ready backend systems** for **machine learning** and **GenAI applications**. "
        "My work focuses on **FastAPI-based architectures**, **secure authentication systems**, and **scalable API layers** "
        "that serve **real-time ML inference** workloads. I specialize in bridging models with real-world "
        "applications through clean, modular **backend system design**."
    ),
    location="Guntur, Andhra Pradesh, India",
    education="B.Tech in Computer Science & Engineering (2025)",
)


SKILLS = [
    SkillCategory(
        category="Backend Systems",
        items=["Python", "FastAPI", "Flask", "REST APIs"],
    ),
    SkillCategory(
        category="Security Systems",
        items=["JWT Authentication", "OTP Verification", "Role-Based Access"],
    ),
    SkillCategory(
        category="ML Systems",
        items=["PyTorch", "Scikit-learn", "Feature Engineering", "Time-Series Modeling"],
    ),
    SkillCategory(
        category="Databases",
        items=["MongoDB", "SQLite", "FAISS (Vector DB)"],
    ),
    SkillCategory(
        category="Tools & Ops",
        items=["Git", "Linux", "Postman", "Railway"],
    ),
]


PROJECTS = [
    Project(
        id=1,
        slug="smart-agriculture-ml-platform",
        name="Smart Agriculture ML Platform (Production ML System)",
        role="Production ML Engineer",
        problem="Real-world recommendation systems require accurate model selection, **scalable inference pipelines**, and reliable APIs for real-time decision-making.",
        approach=(
            "• Evaluated 20+ ML/DL models across 22 classes (2,200 structured records)\n"
            "• Built **ensemble Voting Classifier** improving accuracy by 15–20%\n"
            "• Developed **image classification pipelines** for 232 species using 65k+ labeled images (ResNet50, CNN, ViT)\n"
            "• Designed **modular FastAPI backend** with schema validation and structured JSON responses\n"
            "• Secured APIs using **JWT authentication** and deployed on Railway"
        ),
        tech_stack=["Python", "FastAPI", "PyTorch", "ResNet50", "ViT", "Railway"],
        result=(
            "• Delivered a **production-ready ML inference system** with real-time prediction capabilities\n"
            "• Enabled **scalable and reusable API architecture** for multiple ML tasks\n"
            "• Improved model performance and reliability through **ensemble learning**"
        ),
        featured=True,
        source_url="https://github.com/Sanisetty-bhavya",
    ),
    Project(
        id=2,
        slug="mfa-backend-system",
        name="Multi-Factor Authentication Backend (Secure API System)",
        role="Security & Backend Engineer",
        problem="Applications require **secure authentication systems** that handle identity verification without compromising scalability or usability.",
        approach=(
            "• Implemented **JWT-based authentication** with bcrypt password hashing\n"
            "• Built **multi-step authentication flow** (login → OTP verification → session activation)\n"
            "• Designed **middleware for route protection** and token validation\n"
            "• Enforced token expiry, role-based access, and secure session handling"
        ),
        tech_stack=["Python", "FastAPI", "JWT", "bcrypt", "OTP", "Middleware"],
        result=(
            "• Delivered a **secure and modular authentication system** for protecting backend APIs\n"
            "• Ensured **reliable access control** and session management for production use"
        ),
        featured=True,
        source_url="https://github.com/Sanisetty-bhavya/Multi-Factor-Authentication-System/tree/main",
    ),
    Project(
        id=3,
        slug="prompt-to-ui-generator",
        name="Prompt-to-UI Generator (LLM-driven UI System)",
        role="GenAI & Systems Engineer",
        problem="Developers need faster ways to convert ideas into **UI prototypes** without manual frontend development.",
        approach=(
            "• Built **FastAPI backend** to convert natural language prompts into **structured JSON UI schemas**\n"
            "• Developed React frontend to **dynamically render UI components** from backend responses\n"
            "• Designed **modular API** for prompt parsing and component generation"
        ),
        tech_stack=["Python", "FastAPI", "React", "LLMs", "JSON Schema", "Tailwind"],
        result=(
            "• Enabled **rapid UI prototyping** by transforming text prompts into interactive layouts\n"
            "• Reduced development effort for early-stage UI design and experimentation"
        ),
        featured=True,
        source_url="https://github.com/Sanisetty-bhavya/Prompt-to-UI_Generator",
    ),
    Project(
        id=4,
        slug="language-translation-client",
        name="Language Translation Client (API Integration System)",
        role="API Systems Engineer",
        problem="External APIs can be unreliable, slow, and costly without proper **request handling and resilience**.",
        approach=(
            "• Built **backend client** to integrate with external translation APIs\n"
            "• Implemented **input validation**, response normalization, and error handling\n"
            "• Added **caching layer** to store frequent translations and reduce API calls"
        ),
        tech_stack=["Python", "FastAPI", "Caching", "API Normalization", "Requests"],
        result=(
            "• Improved **reliability and latency** of translation workflows\n"
            "• Reduced redundant API usage and optimized performance"
        ),
        featured=True,
        source_url="https://github.com/Sanisetty-bhavya/LanguageTranslationClient",
    ),
    Project(
        id=5,
        slug="hybrid-transformer-forecasting",
        name="Hybrid Transformer Forecasting System (ML System)",
        role="ML Systems Engineer",
        problem="Traditional models struggle with **noisy time-series data** and fail to capture **long-range dependencies**.",
        approach=(
            "• Designed a **hybrid deep learning architecture** combining fuzzy preprocessing, ANN layers, and Transformer attention\n"
            "• Implemented **fuzzy preprocessing** for noise reduction and feature extraction\n"
            "• Utilized **Transformer attention mechanisms** for long-range temporal modeling"
        ),
        tech_stack=["Python", "PyTorch", "Transformers", "ANN", "Fuzzy Logic"],
        result=(
            "• Achieved **15–20% error reduction** compared to classical ML models\n"
            "• Delivered a **robust forecasting pipeline** for complex, noisy datasets"
        ),
        featured=True,
        source_url="https://github.com/Sanisetty-bhavya",
    ),
    Project(
        id=6,
        slug="academic-success-prediction",
        name="Academic Success Prediction System (ML Pipeline)",
        role="ML Pipeline Engineer",
        problem="Institutions need **data-driven insights** to predict student performance and improve academic outcomes.",
        approach=(
            "• Built **ML pipeline** using structured academic data\n"
            "• Performed **feature engineering** and model training using scikit-learn\n"
            "• Evaluated models using classification metrics and cross-validation"
        ),
        tech_stack=["Python", "Scikit-learn", "Pandas", "Feature Engineering", "MLOps"],
        result=(
            "• Delivered **predictive insights** for student performance trends\n"
            "• Demonstrated practical application of ML in **decision support systems**"
        ),
        featured=True,
        source_url="https://github.com/Sanisetty-bhavya",
    ),
]


SMART_FARMING_DETAIL = ProjectDetail(
    **PROJECTS[0].dict(),
    why_hard=(
        "• High variability in environmental and soil data\n"
        "• Multi-modal inputs (structured + image data)\n"
        "• Need for low-latency real-time inference\n"
        "• Generalization across regions and crop types"
    ),
    system_overview=(
        "Built a production-grade ML inference backend integrating structured prediction models and image classification pipelines. "
        "The system exposes REST APIs for real-time crop recommendation, pest detection, and weed classification."
    ),
    architecture_desc=(
        "Client\n"
        "   ↓\n"
        "FastAPI Backend\n"
        "   ↓\n"
        "Validation Layer (Pydantic)\n"
        "   ↓\n"
        "Model Router\n"
        "   ↓\n"
        "Ensemble Model / Image Model\n"
        "   ↓\n"
        "Prediction Engine\n"
        "   ↓\n"
        "Logging Layer\n"
        "   ↓\n"
        "JSON Response"
    ),
    data_pipeline=(
        "Structured Data: Soil nutrients (N, P, K), pH, temperature, humidity, rainfall.\n"
        "Image Data: 65k+ labeled images, 232 species.\n"
        "Processing: Feature scaling, encoding, image preprocessing & augmentation."
    ),
    model_core_logic=(
        "Evaluated 20+ ML/DL models and implemented a Voting Classifier ensemble for structured data. "
        "Used ResNet50, CNN, and ViT for image classification tasks, optimizing for both accuracy and robustness."
    ),
    evaluation=(
        "Performed rigorous cross-validation and accuracy benchmarking. "
        "Result: Achieved a 15–20% improvement over baseline models in prediction accuracy."
    ),
    deployment_scaling=(
        "FastAPI backend with JWT-secured endpoints, deployed on Railway using a stateless API design to ensure horizontal scalability."
    ),
    api_example=(
        'POST /api/predict\n'
        '{\n'
        '  "nitrogen": 90,\n'
        '  "phosphorus": 40,\n'
        '  "temperature": 28\n'
        '}'
    ),
    engineering_decisions=(
        "• Ensemble models for improved generalization\n"
        "• FastAPI for async and high-performance APIs\n"
        "• Modular architecture for scalability\n"
        "• Logging for observability"
    ),
    tradeoffs_limitations=(
        "• Ensemble models increase inference latency\n"
        "• Image models require higher compute resources\n"
        "• Dataset limits geographic generalization"
    ),
    future_work=(
        "• Real-time sensor integration\n"
        "• Automated retraining pipeline\n"
        "• Edge deployment support"
    ),
)


MFA_DETAIL = ProjectDetail(
    **PROJECTS[1].dict(),
    why_hard=(
        "• Secure token handling and validation\n"
        "• Preventing unauthorized access\n"
        "• Managing session lifecycle\n"
        "• Balancing security with performance"
    ),
    system_overview=(
        "Developed a FastAPI-based authentication system implementing JWT tokens and "
        "OTP-based multi-factor authentication to secure backend APIs."
    ),
    architecture_desc=(
        "Client\n"
        "   ↓\n"
        "Login Request\n"
        "   ↓\n"
        "Password Validation (bcrypt)\n"
        "   ↓\n"
        "OTP Generation\n"
        "   ↓\n"
        "OTP Verification\n"
        "   ↓\n"
        "JWT Token Issuance\n"
        "   ↓\n"
        "Protected Routes"
    ),
    data_pipeline=(
        "Login credentials → Password hash comparison → OTP delivery → Verification state management → Token generation."
    ),
    model_core_logic=(
        "• Password hashing using bcrypt\n"
        "• OTP-based verification flow\n"
        "• JWT token generation and validation\n"
        "• Middleware-based route protection"
    ),
    evaluation=(
        "Tested against OWASP authentication benchmarks to ensure session isolation and token integrity."
    ),
    deployment_scaling=(
        "Stateless authentication system using middleware for centralized access control and role-based authorization."
    ),
    api_example=(
        "Login → OTP → Token → Access Protected APIs"
    ),
    engineering_decisions=(
        "• JWT for scalable stateless sessions\n"
        "• OTP for additional security layer\n"
        "• Middleware for centralized validation"
    ),
    tradeoffs_limitations=(
        "• OTP introduces additional latency\n"
        "• Token management complexity\n"
        "• Requires secure storage of secrets"
    ),
    future_work=(
        "• OAuth integration\n"
        "• Refresh token mechanism\n"
        "• Rate limiting for login endpoints"
    ),
)


PROMPT_UI_DETAIL = ProjectDetail(
    **PROJECTS[2].dict(),
    why_hard=(
        "• Mapping natural language to structured UI\n"
        "• Handling ambiguous user input\n"
        "• Designing flexible UI schemas"
    ),
    system_overview=(
        "Built a system that converts natural language prompts into structured UI definitions "
        "and dynamically renders them via a frontend."
    ),
    architecture_desc=(
        "User Prompt\n"
        "   ↓\n"
        "FastAPI Backend\n"
        "   ↓\n"
        "NLP Processing\n"
        "   ↓\n"
        "JSON UI Schema\n"
        "   ↓\n"
        "React Renderer\n"
        "   ↓\n"
        "UI Output"
    ),
    data_pipeline=(
        "NLP-based prompt parsing → Mapping to component registry → JSON schema generation → React rendering."
    ),
    model_core_logic=(
        "• NLP-based prompt parsing\n"
        "• JSON schema generation\n"
        "• Dynamic UI rendering"
    ),
    evaluation=(
        "Measured against 50+ diverse layout prompts to ensure schema validity and rendering consistency."
    ),
    deployment_scaling=(
        "FastAPI backend and React frontend with a modular component mapping system."
    ),
    api_example=(
        "POST /api/ui/generate\n"
        "{\n"
        "  \"prompt\": \"Create a login form\"\n"
        "}"
    ),
    engineering_decisions=(
        "• JSON schema for flexibility\n"
        "• Separation of backend and UI rendering\n"
        "• Modular architecture"
    ),
    tradeoffs_limitations=(
        "• Limited understanding of complex prompts\n"
        "• UI consistency challenges\n"
        "• Requires schema standardization"
    ),
    future_work=(
        "• Advanced NLP models\n"
        "• UI template learning\n"
        "• Drag-and-drop editing"
    ),
)


TRANSLATION_CLIENT_DETAIL = ProjectDetail(
    **PROJECTS[3].dict(),
    why_hard=(
        "• Dependency on third-party APIs\n"
        "• Handling failures gracefully\n"
        "• Maintaining consistent responses"
    ),
    system_overview=(
        "Developed a backend wrapper around translation APIs to improve reliability "
        "through validation, normalization, and caching."
    ),
    architecture_desc=(
        "Client\n"
        "   ↓\n"
        "Validation Layer\n"
        "   ↓\n"
        "External API\n"
        "   ↓\n"
        "Response Normalization\n"
        "   ↓\n"
        "Caching Layer\n"
        "   ↓\n"
        "Output"
    ),
    data_pipeline=(
        "Input text validation → Provider-specific request mapping → Response schema normalization → Caching → Final JSON output."
    ),
    model_core_logic=(
        "• Input validation\n"
        "• Response normalization\n"
        "• Error handling\n"
        "• Caching frequent requests"
    ),
    evaluation=(
        "Verified with multi-language payloads to confirm response consistency across providers."
    ),
    deployment_scaling=(
        "Modular backend client designed for high availability and resilient external integration."
    ),
    api_example=(
        "GET /api/translate?text=Hello&target=te\n"
        "{\n"
        "  \"translated\": \"హలో\",\n"
        "  \"cached\": true\n"
        "}"
    ),
    engineering_decisions=(
        "• Caching to reduce API calls\n"
        "• Normalization for consistency\n"
        "• Error handling for resilience"
    ),
    tradeoffs_limitations=(
        "• Cache invalidation complexity\n"
        "• External API dependency remains\n"
        "• Limited control over API latency"
    ),
    future_work=(
        "• Multi-provider fallback\n"
        "• Distributed caching\n"
        "• Rate limiting"
    ),
)


HYBRID_FORECASTING_DETAIL = ProjectDetail(
    **PROJECTS[4].dict(),
    why_hard=(
        "• Noise in real-world data\n"
        "• Temporal dependencies\n"
        "• Nonlinear relationships"
    ),
    system_overview=(
        "Designed a hybrid deep learning architecture combining fuzzy preprocessing, ANN layers, and Transformer attention."
    ),
    architecture_desc=(
        "Time-Series Data\n"
        "   ↓\n"
        "Feature Engineering\n"
        "   ↓\n"
        "Fuzzy Preprocessing\n"
        "   ↓\n"
        "ANN Layer\n"
        "   ↓\n"
        "Transformer Attention\n"
        "   ↓\n"
        "Prediction Output"
    ),
    data_pipeline=(
        "Raw time-series → Fuzzy normalization → Feature extraction via ANN → Long-range temporal modeling via Transformer → Forecast."
    ),
    model_core_logic=(
        "• Fuzzy preprocessing for noise reduction\n"
        "• ANN for feature extraction\n"
        "• Transformer for temporal modeling"
    ),
    evaluation=(
        "MAE and RMSE benchmarking against classical ML models. \n"
        "Result: 15–20% error reduction on noisy multivariate data."
    ),
    deployment_scaling=(
        "Engineered for high-accuracy forecasting workloads with modular data pipelines."
    ),
    api_example=(
        "POST /api/forecast\n"
        "{\n"
        "  \"series\": [10, 12, 15, 14, 18],\n"
        "  \"steps\": 3\n"
        "}"
    ),
    engineering_decisions=(
        "• Hybrid model for robustness\n"
        "• Transformer for long-range dependencies\n"
        "• Modular pipeline"
    ),
    tradeoffs_limitations=(
        "• Higher computational cost\n"
        "• Training complexity\n"
        "• Requires careful tuning"
    ),
    future_work=(
        "• Multi-horizon forecasting\n"
        "• Real-time deployment\n"
        "• Probabilistic outputs"
    ),
)


ACADEMIC_PREDICTION_DETAIL = ProjectDetail(
    **PROJECTS[5].dict(),
    why_hard=(
        "• Feature selection complexity\n"
        "• Data imbalance\n"
        "• Model generalization"
    ),
    system_overview=(
        "Built a machine learning pipeline for predicting academic performance using structured datasets."
    ),
    architecture_desc=(
        "Dataset\n"
        "   ↓\n"
        "Data Cleaning\n"
        "   ↓\n"
        "Feature Engineering\n"
        "   ↓\n"
        "Model Training\n"
        "   ↓\n"
        "Evaluation\n"
        "   ↓\n"
        "Prediction"
    ),
    data_pipeline=(
        "Student record ingestion → Preprocessing & normalization → Feature selection → Model training & comparison → Insight generation."
    ),
    model_core_logic=(
        "• Data preprocessing\n"
        "• Feature engineering\n"
        "• Model comparison"
    ),
    evaluation=(
        "Assessed via Accuracy, Precision, and Recall across cross-validation folds."
    ),
    deployment_scaling=(
        "Standard ML pipeline designed for batch processing and decision support."
    ),
    api_example=(
        "POST /api/predict/success\n"
        "{\n"
        "  \"gpa\": 3.8,\n"
        "  \"attendance\": 95\n"
        "}"
    ),
    engineering_decisions=(
        "• Multiple model comparison\n"
        "• Structured pipeline design"
    ),
    tradeoffs_limitations=(
        "• Limited dataset size\n"
        "• Generalization constraints"
    ),
    future_work=(
        "• Larger datasets\n"
        "• Feature expansion\n"
        "• Real-time analytics"
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
    email="bhavyasrisanisetty@gmail.com",
    github="https://github.com/Sanisetty-bhavya",
    linkedin="https://www.linkedin.com/in/bhavyasri-sanisetty-31948424b",
    resume_url=None,
)
