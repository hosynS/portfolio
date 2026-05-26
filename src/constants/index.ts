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
  dbt,
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
  spring,
  bi,
  buy,
  cloud,
  nlp,
  real,
  gro,
  orc,
  carrent,
  networkAdmin,
  programmer,
  developer,
  robot,
  analytics,
  statistics,
  det,
  kube,
} from "../assets";

// Import video demo files
import biVideo from "../assets/videos/bi.mp4";
import buyVideo from "../assets/videos/buy.mp4";
import cloudVideo from "../assets/videos/cloud.mp4";
import detectoVideo from "../assets/videos/Detecto.mp4";
import groupieVideo from "../assets/videos/groupie.mp4";
import realtimeVideo from "../assets/videos/realtime.mp4";
import wheatVideo from "../assets/videos/wheat.mp4";

export const navLinks: TNavLink[] = [
  { id: "about", title: "About" },
  { id: "tech-skills", title: "Tech Skills" },
  { id: "projects", title: "Projects" },
  { id: "certifications", title: "Certifications" },
  { id: "contact", title: "Contact" },
];

const services: TService[] = [
  { title: "Backend Engineering", icon: web },
  { title: "System Integration", icon: creator },
  { title: "DevOps Engineering", icon: mobile },
  { title: "Data Engineering", icon: backend },
  
  
];

const technologies: TTechnology[] = [
  { name: "Go", icon: golang },
  { name: "TypeScript", icon: typescript },
  { name: "Spring Boot", icon: spring },
  { name: "Python", icon: python },
  { name: "Bash", icon: bash },
  { name: "PyTorch", icon: pytorch },
  { name: "Docker", icon: docker },
  { name: "Git", icon: git },
  { name: "dbt", icon: dbt },
  { name: "MongoDB", icon: mongodb },
  { name: "PostgreSQL", icon: postgresql },
  { name: "Kafka", icon: kafka },
  { name: "Kubernetes", icon: kube },
];

const experiences = [
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
      { name: "DataPipelines", color: "blue-text-gradient" },
    ],
    image: bi,
    sourceCodeLink: "https://github.com/SaddamHosyn/bi-solution-course-project",
    videoDemoLink: biVideo,
    icon: robot,
    iconBg: "#E6DEDD",
  },
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
];

const projects: TProject[] = [
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

const testimonials: TTestimonial[] = [];

export { services, technologies, experiences, projects, certifications, testimonials };
