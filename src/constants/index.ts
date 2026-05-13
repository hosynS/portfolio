import type {
  TNavLink,
  TService,
  TTechnology,
  TProject,
  TCertification,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
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
  streamlit,
  flask,
  bi,
  buy,
  kag,
  nlp,
  real,
  net,
  orc,
  carrent,
  networkAdmin,
  programmer,
  developer,
  robot,
  analytics,
  statistics,
} from "../assets";

export const navLinks: TNavLink[] = [
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "tech-stack", title: "Tech Stack" },
  { id: "certifications", title: "Certifications" },
  { id: "contact", title: "Contact" },
];

const services: TService[] = [
  { title: "Backend Development", icon: web },
  { title: "Integration Engineering", icon: creator },
  { title: "DevOps Engineering", icon: mobile },
  { title: "Data Engineering", icon: backend },
  
  
];

const technologies: TTechnology[] = [
  { name: "Python", icon: python },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "Go", icon: golang },
  { name: "Bash", icon: bash },
  { name: "PyTorch", icon: pytorch },
  { name: "Docker", icon: docker },
  { name: "Git", icon: git },
  { name: "MongoDB", icon: mongodb },
  { name: "PostgreSQL", icon: postgresql },
  { name: "Kafka", icon: kafka },
  { name: "Streamlit", icon: streamlit },
  { name: "Flask", icon: flask },
];

const experiences = [
  {
    name: "Wheat Disease Detection",
    description:
      "Engineered a computer vision project with Python and PyTorch, implementing custom model architectures (YOLOv5 + SE blocks) to detect wheat diseases with high accuracy. Worked on data preprocessing with OpenCV, including image augmentation and formatting. Orchestrated model training and evaluation, comparing multiple backbones (ShuffleNetv2, YOLOv5m) and documenting performance metrics.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "pytorch", color: "green-text-gradient" },
      { name: "YOLOv5", color: "pink-text-gradient" },
      { name: "OpenCV", color: "blue-text-gradient" },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/SaddamHosyn",
    icon: programmer,
    iconBg: "#383E56",
  },
  {
    name: "BI-Solution-Course-Project",
    description:
      "Architected an end-to-end ELT data pipeline using Python and DuckDB, implementing Medallion Architecture (Bronze/Silver/Gold) to process 5M+ sales records. Integrated heterogeneous data sources (JSON logs, government APIs, CSV) into a unified analytical warehouse. Developed a comprehensive BI dashboard with Streamlit to visualize per-capita consumption trends and tourism impacts.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "DuckDB", color: "green-text-gradient" },
      { name: "streamlit", color: "pink-text-gradient" },
      { name: "ELT", color: "blue-text-gradient" },
    ],
    image: bi,
    sourceCodeLink: "https://github.com/SaddamHosyn/bi-solution-course-project",
    icon: robot,
    iconBg: "#E6DEDD",
  },
  {
    name: "Buy-02",
    description:
      "Architected a full-stack microservices platform using Spring Boot and Angular, integrating Kafka for event-driven data consistency. Built a robust CI/CD pipeline with Jenkins and SonarQube. Designed scalable data models in MongoDB for shopping carts, order management, and real-time analytics. Implemented secure RESTful APIs with JWT authentication and role-based access control.",
    tags: [
      { name: "spring-boot", color: "blue-text-gradient" },
      { name: "angular", color: "green-text-gradient" },
      { name: "kafka", color: "pink-text-gradient" },
       { name: "mongodb", color: "blue-text-gradient" },
    ],
    image: buy,
    sourceCodeLink: "https://github.com/SaddamHosyn/buy-02",
    icon: networkAdmin,
    iconBg: "#383E56",
  },
  {
    name: "Cloud Design",
    description:
      "Architected and deployed a production-style microservices platform on AWS for inventory and billing workflows. Provisioned infrastructure with Terraform, containerized services with Docker, and orchestrated workloads with Kubernetes/ECS while isolating private resources inside a VPC. Secured public access with HTTPS, managed authentication, and private database connectivity, then added observability, autoscaling, and cost controls to improve reliability under changing workloads.",
    tags: [
      { name: "AWS", color: "blue-text-gradient" },
      { name: "Terraform", color: "green-text-gradient" },
      { name: "Kubernetes", color: "pink-text-gradient" },
      { name: "Docker", color: "blue-text-gradient" },
      { name: "IaC", color: "blue-text-gradient" },
      
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/SaddamHosyn/cloud-design",
    icon: analytics,
    iconBg: "#E6DEDD",
  },
  {
    name: "Orchestrator",
    description:
      "Built a production-style microservices platform by migrating a Docker Compose architecture to a distributed K3s Kubernetes cluster running across master and worker nodes. Containerized and deployed API gateway, inventory, billing, RabbitMQ, and PostgreSQL services using Deployments, StatefulSets, Secrets, Persistent Volumes, and Horizontal Pod Autoscaling. Automated cluster setup with Vagrant and shell scripting, improved service orchestration and fault isolation, and applied DevOps best practices for scalable deployment, configuration, and operations.",
    tags: [
      { name: "RabbitMQ", color: "blue-text-gradient" },
      { name: "Kubernetes", color: "green-text-gradient" },
      { name: "Docker", color: "pink-text-gradient" },
      { name: "PostgreSQL", color: "blue-text-gradient" },
    ],
    image: orc,
    sourceCodeLink: "https://github.com/SaddamHosyn/orchestrator",
    icon: statistics,
    iconBg: "#383E56",
  },
  {
  name: "Real-Time Forum",
  description:
    "Built a modern single-page forum application using Go, SQLite, and Vanilla JavaScript with secure authentication, post feeds, commenting, and real-time private messaging. Implemented WebSocket-based chat with live user presence, ordered conversations, and instant updates without page reloads. Designed the frontend as a lightweight SPA with hash-based routing and dynamic DOM rendering, then containerized the application with Docker for reproducible setup and deployment.",
  tags: [
    { name: "golang", color: "blue-text-gradient" },
    { name: "SQLite", color: "green-text-gradient" },
    { name: "WebSocket", color: "pink-text-gradient" },
    { name: "VanillaJS", color: "blue-text-gradient" },
  ],
  image: real,
  sourceCodeLink: "https://github.com/SaddamHosyn/real-time-forum",
  icon: developer,
  iconBg: "#383E56",
},
];
const projects: TProject[] = [
  {
    name: "Net-Cat",
    description:
      "Built a concurrent TCP chat server in Go supporting multiple simultaneous client connections, message broadcasting, and timestamped chat history. Managed concurrent connections using Goroutines and channels, handling client join/leave events, nicknames, and graceful disconnections.",
    tags: [
      { name: "golang", color: "blue-text-gradient" },
      { name: "TCP", color: "green-text-gradient" },
      { name: "concurrency", color: "pink-text-gradient" },
    ],
    image: net,
    sourceCodeLink: "https://github.com/SaddamHosyn/Net-Cat",
  },
  {
    name: "NLP Scrapper",
    description:
      "Developed a news intelligence pipeline using Python and BeautifulSoup, automating scraping of 300+ articles into a structured SQL database. Implemented NLP processing with SpaCy and NLTK for named entity detection, topic classification (>95% accuracy), and sentiment analysis. Engineered a scandal detection system using word embeddings and distance metrics.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "SpaCy", color: "green-text-gradient" },
      { name: "BeautifulSoup", color: "pink-text-gradient" },
    ],
    image: nlp,
    sourceCodeLink: "https://github.com/SaddamHosyn/nlp-scapper",
  },
  {
    name: "Kaggle Titanic",
    description:
      "Built a machine learning project with advanced feature engineering (imputation, categorical encoding) achieving ~82-84% accuracy. Developed and evaluated ensemble models (Stacking/Voting with XGBoost, LightGBM, Random Forest) using Scikit-Learn pipelines. Structured the project for reproducibility with organized notebooks, data, and dependencies.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "XGBoost", color: "green-text-gradient" },
      { name: "scikit-learn", color: "pink-text-gradient" },
    ],
    image: kag,
    sourceCodeLink: "https://github.com/SaddamHosyn/kaggletitanic",
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
];

export { services, technologies, experiences, projects, certifications };
