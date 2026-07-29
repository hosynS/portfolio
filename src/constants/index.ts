import type {
  TNavLink,
  TService,
  TTechnology,
  TProject,
  TCertification,
  TTestimonial,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  // dbt,
  terraform,
  typescript,
  mongodb,
  git,
  docker,
  python,
  pytorch,
  golang,
  bash,
  postgresql,
  kafka,
  mlflow,
  // bi,
  buy,
  cloud,
  nlp,
  // real,
  // gro,
  orc,
  carrent,
  networkAdmin,
  // programmer,
  developer,
  robot,
  analytics,
  statistics,
  // det,
  kube,
  mckinsey,
  keep,
  biHack,
  crudm,
  // rag,
  kag,
  ragEngine,
  creditScoring,
  misephoto,
} from "../assets";

// Import video demo files
// import biVideo from "../assets/videos/bi.mp4";
import buyVideo from "../assets/videos/buy.mp4";
import cloudVideo from "../assets/videos/cloud.mp4";
// import detectoVideo from "../assets/videos/Detecto.mp4";
// import groupieVideo from "../assets/videos/groupie.mp4";
// import realtimeVideo from "../assets/videos/realtime.mp4";
import wheatVideo from "../assets/videos/wheat.mp4";

export const navLinks: TNavLink[] = [
  { id: "about", title: "About" },
  { id: "tech-skills", title: "Tech Skills" },
  { id: "projects", title: "Projects" },
  { id: "certifications", title: "Certifications" },
  { id: "contact", title: "Contact" },
];

const services: TService[] = [
  { title: "Machine Learning Engineering", icon: creator },
  { title: "DevOps Engineering", icon: mobile },
  { title: "Data Engineering", icon: backend },
  { title: "Backend Engineering", icon: web },
];

const technologies: TTechnology[] = [
  { name: "Go", icon: golang },
  { name: "TypeScript", icon: typescript },
  { name: "MLflow", icon: mlflow },
  { name: "Python", icon: python },
  { name: "Bash", icon: bash },
  { name: "PyTorch", icon: pytorch },
  { name: "Docker", icon: docker },
  { name: "Git", icon: git },
  // { name: "dbt", icon: dbt },
  { name: "Terraform", icon: terraform },
  { name: "MongoDB", icon: mongodb },
  { name: "PostgreSQL", icon: postgresql },
  { name: "Kafka", icon: kafka },
  { name: "Kubernetes", icon: kube },
];

const experiences = [
  {
    name: "Financial & Policy RAG Engine",
    description: `• Built a stateful 5-node LangGraph workflow for caching, retrieval, quality grading, generation, and telemetry.

• Implemented two-stage hybrid retrieval: dense vector search with pgvector followed by Hugging Face Cross-Encoder reranking.

• Achieved 100% Hit@10 retrieval recall and 78%+ faithfulness in automated RAG evaluations.

• Reduced repeated-query latency to under 8 ms using SHA-256 TTL response caching.

• Designed resilient PostgreSQL/pgvector storage with automatic SQLite failover and local embedding fallback.

• Integrated Gemini for embeddings and grounded, source-cited answer generation.

• Added MLOps telemetry for latency percentiles, token usage, cache rates, and per-request inference costs.

• Deployed with FastAPI, Docker, Streamlit, and GitHub Actions CI/CD.`,
    tags: [
      { name: "LangGraph", color: "blue-text-gradient" },
      { name: "RAG", color: "green-text-gradient" },
      { name: "Vector Search", color: "pink-text-gradient" },
      { name: "Hugging Face", color: "blue-text-gradient" },
      { name: "MLOps", color: "green-text-gradient" },
    ],
    image: ragEngine,
    sourceCodeLink: "https://github.com/SaddamHosyn/vectorless-financial-rag.git",
    icon: robot,
    iconBg: "#383E56",
  },
  {
    name: "Waste Management RAG",
    description: `• Architected an AI-powered Retrieval-Augmented Generation (RAG) assistant for Mise (Åland's waste management) that accurately resolves complex citizen inquiries regarding waste fees, sorting rules, and administrative forms in Swedish.

• Engineered a robust ingestion and query pipeline using PostgreSQL and pgvector to chunk, embed, and store official municipal PDF documents.

• Integrated Google Gemini models to generate highly precise answers with direct document citations, enforcing strict guardrails against AI hallucinations.

• Implemented custom year-weighted vector retrieval logic to dynamically prioritize the most recent waste tariffs (e.g., 2026 over 2022) without manual filtering.

• Developed a parallel entity-resolution module and complex prompt logic to handle nuanced business rules, seamlessly calculating fee splits between private citizens, businesses, and non-members.

• Deployed an interactive Streamlit frontend featuring automated API retries and strict safeguards against out-of-domain questions to ensure a highly reliable user experience.`,
    tags: [
      { name: "RAG", color: "blue-text-gradient" },
      { name: "Contextual Chunking", color: "green-text-gradient" },
      { name: "Automated Guardrails", color: "pink-text-gradient" },
      { name: "pgvector", color: "blue-text-gradient" },
      { name: "Entity Resolution", color: "green-text-gradient" },
    ],
    image: misephoto,
    sourceCodeLink: "https://github.com/SaddamHosyn/mise-rag-project.git",
    icon: robot,
    iconBg: "#E6DEDD",
  },
  {
    name: "Credit Default Scorer",
    description: `• Built a dbt + DuckDB feature pipeline that transforms raw credit data into a training-ready mart with 190+ features.

• Replaced memory-heavy pandas workflows with vectorized SQL processing, reducing feature engineering for 356k rows to under 30 seconds.

• Trained and evaluated Logistic Regression, LightGBM, XGBoost, and CatBoost models using stratified 5-fold cross-validation.

• Developed a 15-model gradient-boosting ensemble achieving 0.7844 validation ROC-AUC, exceeding the 0.75 quality target.

• Added SHAP analysis for global feature importance and client-level explanations of default-risk predictions.

• Registered models and experiment metadata in MLflow, with artifacts versioned and stored on Hugging Face Hub.

• Served real-time predictions through FastAPI with approximately 25 ms p95 latency and health-check endpoints.

• Implemented PSI-based probability-of-default drift monitoring, dbt data-quality tests, Docker deployment, and GitHub Actions CI/CD.`,
    tags: [
      { name: "Credit Risk Modeling", color: "blue-text-gradient" },
      { name: "Gradient Boosting", color: "green-text-gradient" },
      { name: "MLflow", color: "pink-text-gradient" },
      { name: "Feature Engineering", color: "blue-text-gradient" },
      { name: "SHAP", color: "green-text-gradient" },
    ],
    image: creditScoring,
    sourceCodeLink: "https://www.kaggle.com/competitions/home-credit-default-risk/data?select=application_train.csv",
    icon: analytics,
    iconBg: "#383E56",
  },
  {
    name: "Code-Keeper",
    description: `• Provisioned highly available AWS cloud infrastructure across staging and production environments using Terraform, establishing an ECS-based container orchestration foundation with isolated VPCs, Application Load Balancers, and S3 remote state.

• Engineered a comprehensive CI/CD pipeline using a self-managed GitLab instance deployed via Ansible, automating Python microservice tests, Trivy security vulnerability scans, and continuous Docker image delivery to AWS ECR.

• Architected a resilient backend for an inventory and billing system featuring three independent Python microservices, integrating asynchronous event processing via RabbitMQ and managing persistent relational data with PostgreSQL.

• Implemented enterprise-grade security and deployment controls, including AWS Cognito JWT authentication, least-privilege IAM execution roles, dynamic AWS Secrets Manager injection, and manual approval gates for zero-downtime production rollouts.`,
    tags: [
      { name: "AWS", color: "blue-text-gradient" },
      { name: "Terraform", color: "green-text-gradient" },
      { name: "ECS", color: "pink-text-gradient" },
      { name: "GitLab CI", color: "blue-text-gradient" },
      { name: "Ansible", color: "green-text-gradient" },
      { name: "RabbitMQ", color: "pink-text-gradient" },
      { name: "PostgreSQL", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "Cognito", color: "pink-text-gradient" },
    ],
    image: keep,
    sourceCodeLink: "https://github.com/SaddamHosyn/Code-Keeper",
    icon: analytics,
    iconBg: "#E6DEDD",
  },
  {
    name: "Orchestrator",
    description: `• Migrated a Docker Compose architecture to a production-style, two-node K3s Kubernetes cluster on Vagrant-provisioned virtual machines.

• Architected strict workload separation, exposing the API gateway via NodePort while securing PostgreSQL internally using PVCs.

• Orchestrated six microservices utilizing Kubernetes Deployments, StatefulSets, Services, and HPA.

• Implemented message-driven resilience with RabbitMQ for asynchronous billing processing during downtime.

• Automated the complete cluster lifecycle—including VM creation, K3s installation, node joining, dependency-ordered manifest execution, and kubectl verification—via a single orchestrator script.`,
    tags: [
      { name: "RabbitMQ", color: "blue-text-gradient" },
      { name: "Kubernetes", color: "green-text-gradient" },
      { name: "Docker", color: "pink-text-gradient" },
      { name: "PostgreSQL", color: "blue-text-gradient" },
      { name: "HPA", color: "green-text-gradient" },
      { name: "Vagrant", color: "pink-text-gradient" },
    ],
    image: orc,
    sourceCodeLink: "https://github.com/SaddamHosyn/orchestrator",
    icon: statistics,
    iconBg: "#383E56",
  },
  {
    name: "Cloud Design",
    description: `• Architected and deployed a production-style microservices platform on AWS for inventory and billing workflows.

• Provisioned cloud infrastructure as code using Terraform and containerized backend services with Docker.

• Orchestrated container workloads using Kubernetes and AWS ECS, isolating private resources within a secure VPC.

• Secured public API access via HTTPS and managed authentication, alongside strict private database connectivity.

• Integrated observability, autoscaling, and cost controls to ensure high availability and system reliability under fluctuating workloads.`,
    tags: [
      { name: "AWS", color: "blue-text-gradient" },
      { name: "Terraform", color: "green-text-gradient" },
      { name: "EC2", color: "pink-text-gradient" },
      { name: "Docker", color: "blue-text-gradient" },
      { name: "IaC", color: "green-text-gradient" },
      { name: "ALB", color: "pink-text-gradient" },
      { name: "Auto Scaling", color: "blue-text-gradient" },

    ],
    image: cloud,
    sourceCodeLink: "https://github.com/SaddamHosyn/cloud-design",
    videoDemoLink: cloudVideo,
    icon: analytics,
    iconBg: "#E6DEDD",
  },
  {
    name: "CRUD-MASTER",
    description: `• A resilient, microservices-based application demonstrating modern cloud-native architectural patterns, asynchronous processing, and automated infrastructure provisioning.

• Microservices Architecture & API Gateway: Architected a distributed system using Python and Flask, implementing a centralized API Gateway as a reverse proxy to route traffic securely and seamlessly across isolated backend services.

• Asynchronous Message Queuing: Engineered fault-tolerant billing operations by integrating RabbitMQ, ensuring durable, asynchronous order processing that guarantees zero data loss during simulated service crashes.

• Database Isolation & Persistence: Designed independent PostgreSQL databases for the inventory and billing environments, enforcing strict service decoupling and maintaining eventual consistency across the distributed system.

• Infrastructure as Code (IaC): Automated the provisioning and configuration of three separate virtual machines using Vagrant and shell scripting, establishing a highly reproducible, production-like environment for testing and deployment.`,
    tags: [
      { name: "Microservices", color: "blue-text-gradient" },
      { name: "RabbitMQ", color: "green-text-gradient" },
      { name: "PostgreSQL", color: "pink-text-gradient" },
      { name: "Vagrant", color: "blue-text-gradient" },
      { name: "Flask", color: "green-text-gradient" },
      { name: "IaC", color: "pink-text-gradient" },
    ],
    image: crudm,
    sourceCodeLink: "https://github.com/SaddamHosyn/CRUD-MASTER",
    icon: statistics,
    iconBg: "#383E56",
  },
  {
    name: "Buy-02",
    description: `• Engineered a full-stack microservices e-commerce platform using Spring Boot, Angular, MongoDB, and Kafka to support end-to-end shopping flows.

• Designed a service-oriented architecture utilizing an API Gateway, Eureka service registry, and a database-per-service pattern.

• Implemented event-driven messaging to ensure cascade deletions and maintain data consistency across user, product, media, and order services.

• Built secure REST APIs featuring JWT-based auth and tiered role-based authorization (CLIENT, SELLER, ADMIN).

• Developed a responsive SPA featuring a shopping cart, checkout wizard, order management, and dedicated buyer/seller analytics dashboards.

• Containerized all services and wired a Jenkins and SonarQube pipeline for automated builds, strict quality gates, and continuous deployment.`,
    tags: [
      { name: "Spring-Boot", color: "blue-text-gradient" },
      { name: "Angular", color: "green-text-gradient" },
      { name: "Kafka", color: "pink-text-gradient" },
      { name: "MongoDB", color: "blue-text-gradient" },
      { name: "Eureka", color: "green-text-gradient" },
      { name: "Jenkins", color: "pink-text-gradient" },
    ],
    image: buy,
    sourceCodeLink: "https://github.com/SaddamHosyn/buy-02",
    videoDemoLink: buyVideo,
    icon: networkAdmin,
    iconBg: "#383E56",
  },
  /*
  {
    name: "Real-Time Forum",
    description: `• Built a single-page forum app using Go, SQLite, and Vanilla JavaScript, integrating post feeds, comments, and real-time private messaging.

• Implemented hash-based routing and dynamic DOM rendering to manage seamless SPA navigation.

• Engineered secure session-based auth using cookies and bcrypt password hashing, enforcing strict access controls for content creation.

• Developed a real-time WebSocket messaging layer supporting live user presence, typing indicators, and scroll-based pagination for chat history.

• Coordinated WebSocket, HTTP, and SQLite in Go with middleware, and built a modular Dockerized full-stack app for reproducible deployments.
`,
    tags: [
      { name: "Golang", color: "blue-text-gradient" },
      { name: "SQLite", color: "green-text-gradient" },
      { name: "WebSocket", color: "pink-text-gradient" },
      { name: "JS", color: "blue-text-gradient" },
      { name: "SPA", color: "green-text-gradient" },
      { name: "RealTimeChat", color: "pink-text-gradient" },
    ],
    image: real,
    sourceCodeLink: "https://github.com/SaddamHosyn/real-time-forum",
    videoDemoLink: realtimeVideo,
    icon: developer,
    iconBg: "#383E56",
  },
  */
  {
    name: "BI-Solution-Hackathon",
    description: `• Designed and implemented an end-to-end data engineering and analytics pipeline using Snowflake, DuckDB, Python, SQL, and dbt, following a Bronze–Silver–Gold Medallion Architecture.

• Built automated ETL workflows to ingest, clean, transform, and warehouse ferry operations data into business-ready analytical models for efficient querying.

• Developed an interactive Streamlit BI dashboard with KPI tracking, revenue trends, booking analytics, route performance, sales insights, utilization metrics, and municipality-level analysis.

• Applied modern data engineering best practices including modular pipeline design, local data warehousing, automation, and interactive data visualization for business decision-making.`,
    tags: [
      { name: "Snowflake", color: "blue-text-gradient" },
      { name: "DuckDB", color: "green-text-gradient" },
      { name: "dbt", color: "pink-text-gradient" },
      { name: "Python", color: "blue-text-gradient" },
      { name: "SQL", color: "green-text-gradient" },
      { name: "Streamlit", color: "pink-text-gradient" },
    ],
    image: biHack,
    sourceCodeLink: "https://github.com/SaddamHosyn/bi-solution-hackathon-project",
    icon: analytics,
    iconBg: "#E6DEDD",
  },
  /*
  {
    name: "Groupie Tracker Visualization",
    description: `• Built a Go web app integrating multiple JSON APIs to fetch, parse, and aggregate artists, concert locations, and event dates into structured views.

• Developed a responsive frontend with event-driven interactions, robust HTTP handling, and error management in a clean client-server architecture.

• Delivered a deployable web service demonstrating practical third-party API integration, data transformation, and scalable backend design.
`,
    tags: [
      { name: "Golang", color: "blue-text-gradient" },
      { name: "REST APIs", color: "green-text-gradient" },
      { name: "APIIntegration", color: "pink-text-gradient" },
      { name: "Data Aggregation", color: "blue-text-gradient" },

    ],
    image: gro,
    sourceCodeLink: "https://github.com/SaddamHosyn/Groupie-Tracker-Visualization.git",
    videoDemoLink: groupieVideo,
    icon: programmer,
    iconBg: "#383E56",
  },
  */
  /*
  {
    name: "BI-Solution-Project",
    description: `• Built an end-to-end BI solution analyzing market penetration, tourism demand, and per-capita spending across 16 Åland municipalities.

• Engineered a multi-source pipeline integrating JSON sales logs, ÅSUB demographic APIs, and tourism CSVs into a centralized DuckDB warehouse.

• Architected a Medallion ELT pipeline using Python for raw ingestion and SQL for cross-source standardization across Bronze, Silver, and Gold layers.

• Modeled business aggregates for revenue, seasonal trends, and YoY growth using dbt and GNU Make for modular, reproducible pipelines.

• Delivered an interactive Streamlit dashboard for KPI tracking, municipality deep dives, and product-seasonality analysis.

• Processed 5M+ sales records to surface key 2025 insights, including €101M+ in revenue, 204,579 transactions.`,
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "DuckDB", color: "green-text-gradient" },
      { name: "Streamlit", color: "pink-text-gradient" },
      { name: "ELT", color: "blue-text-gradient" },
      { name: "dbt", color: "green-text-gradient" },
      { name: "SQL", color: "pink-text-gradient" },
    ],
    image: bi,
    sourceCodeLink: "https://github.com/SaddamHosyn/bi-solution-course-project",
    videoDemoLink: biVideo,
    icon: robot,
    iconBg: "#E6DEDD",
  },
  */
];

const projects: TProject[] = [
  /*
  {
    name: "Detecto",
    description: `• Engineered an end-to-end YOLOv8 computer vision system for real-time person detection and occupancy counting.

• Achieved >85% accuracy and <10% false positives with <1.5s inference for near real-time monitoring.

• Built a FastAPI service and React dashboard to visualize live detections, trends, and confidence metrics.

• Implemented structured event logging for operational auditing, system tuning, and data-driven safety decisions.`,
    tags: [
      { name: "YOLOv8", color: "blue-text-gradient" },
      { name: "FastAPI", color: "green-text-gradient" },
      { name: "React", color: "pink-text-gradient" },
      { name: "Deep Learning", color: "blue-text-gradient" },
    ],
    image: det,
    sourceCodeLink: "https://github.com/SaddamHosyn/detecto.git",
    videoDemoLink: detectoVideo,
    icon: robot,
    iconBg: "#E6DEDD",
  },
  */
  {
    name: "Titanic Survival Prediction",
    description: `• Developed an end-to-end machine learning pipeline to predict Titanic passenger survival, highlighting advanced feature engineering and a practical demonstration of the bias-variance tradeoff where simple models ultimately outclassed complex ensembles.

• Engineered high-impact features like ticket-based survival rates and imputed missing data using IterativeImputer to capture nuanced family and group dynamics.

• Designed and evaluated complex predictive architectures, including Stacking (XGBoost, LightGBM, Random Forest) and soft-voting ensembles.

• Identified a critical "overfitting paradox" through cross-validation, revealing that highly tuned ensemble models memorized training noise rather than generalizable patterns.

• Achieved a top Kaggle score (0.78229) using a heavily regularized Logistic Regression model, maintaining a highly robust 2.8% generalization gap.

• Structured the repository with production-ready best practices, including clear dependency management and reproducible Jupyter and Python execution paths.`,
    tags: [
      { name: "Feature Engineering", color: "blue-text-gradient" },
      { name: "Bias-Variance Tradeoff", color: "green-text-gradient" },
      { name: "Logistic Regression", color: "pink-text-gradient" },
      { name: "Ensemble Modeling", color: "blue-text-gradient" },
      { name: "Cross-Validation", color: "green-text-gradient" },
    ],
    image: kag,
    sourceCodeLink: "https://github.com/SaddamHosyn/kaggletitanic.git",
    icon: statistics,
    iconBg: "#383E56",
  },
  {
    name: "NLP Scrapper",
    description: `• Engineered an automated NLP pipeline to scrape live Guardian news and extract insights at scale.

• Implemented SpaCy NER to detect 200+ unique organizations with ~89% precision.

• Trained a TF-IDF vectorized Linear SVM, achieving >95% classification accuracy across five topics.

• Analyzed sentiment across 147 articles (Politics +0.40, Sport -0.12) and flagged 10.2% for scandal risk.

• Identified contextual edge cases to guide future BERT-based model improvements.`,
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "SpaCy", color: "green-text-gradient" },
      { name: "BeautifulSoup", color: "pink-text-gradient" },
    ],
    image: nlp,
    sourceCodeLink: "https://github.com/SaddamHosyn/nlp-scapper",
    icon: developer,
    iconBg: "#383E56",
  },
  {
    name: "Wheat Disease Detection",
    description: `• Engineered a YOLOv5m computer vision pipeline to improve agricultural disease detection over standard models.

• Integrated a Squeeze-and-Excitation attention module to boost feature extraction and spatial dependency.

• Augmented a custom dataset of 11,510 images across 5 wheat conditions (Healthy, Furasiam, Loose Smut, Powdery Mildew, Rust).

• Validated the SE-attention architecture's superiority via ablation studies on YOLOv5 variants and ShuffleNetv2.

• Achieved 82.16% precision, 84.87% recall, and 87.21% mAP@0.5, outperforming Faster R-CNN and SSD baselines.`,
    tags: [
      { name: "Agricultural AI", color: "blue-text-gradient" },
      { name: "PyTorch", color: "green-text-gradient" },
      { name: "YOLOv5", color: "pink-text-gradient" },

    ],
    image: carrent,
    sourceCodeLink: "https://github.com/SaddamHosyn/Wheat-Disease-Detection.git",
    videoDemoLink: wheatVideo,
    icon: analytics,
    iconBg: "#E6DEDD",
  },
];
const certifications: TCertification[] = [
  {
    title: "Data Mining and Access Web Data",
    issuer: "techclass",
    date: "2024",
    link: "https://drive.google.com/file/d/1r5OV-pmfO3MXbkAC2m4srDSKgdcODTn7/preview",
    type: "pdf",
  },
  {
    title: "Scientific Writing",
    issuer: "ICESCO",
    date: "2020",
    link: "https://drive.google.com/file/d/1ExOpb2c-cMhPt3JSztyV1Lgj1OM4VxJS/preview",
    type: "pdf",
  },
  {
    title: "Junction Hackathon",
    issuer: "Junction",
    date: "2025",
    link: "https://drive.google.com/file/d/1oeir8Inb6zKWA0xHHN3EDlkEWiPgYKc2/preview",
    type: "pdf",
  },
  {
    title: "Foundations of Mining Non-Structured Medical Data",
    issuer: "Coursera",
    date: "2021",
    link: "https://drive.google.com/file/d/1sNeJgAcu4t3xGtKj51r52OiYcRjUYQ9u/preview",
    type: "pdf",
  },
  {
    title: "Ethics of AI",
    issuer: "University of Helsinki",
    date: "2021",
    link: "https://drive.google.com/file/d/1Q-A_-YUZS50ZpuhgzAbvAWdxHz-iDJxL/preview",
    type: "pdf",
  },
  {
    title: "Business Analytics with Excel",
    issuer: "simplilearn",
    date: "2024",
    link: "https://drive.google.com/file/d/1W2PShD8xigFH_R2-cEV8Lw0nGwCCqx2U/preview",
    type: "pdf",
  },
  {
    title: "Introduction to SQL",
    issuer: "sololearn",
    date: "2024",
    link: "https://drive.google.com/file/d/1gmwCv3Yl0AA5ipuKPbVDwWCTq5jhq7ds/preview",
    type: "pdf",
  },
  {
    title: "McKinsey.org Forward Program",
    issuer: "McKinsey.org",
    date: "2026",
    link: mckinsey,
    type: "image",
    credentialUrl: "https://www.credly.com/badges/dead2894-8b7f-4934-814a-d5d0d011cc1d",
  },
];

const testimonials: TTestimonial[] = [];

export { services, technologies, experiences, projects, certifications, testimonials };
