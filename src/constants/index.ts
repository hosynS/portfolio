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
  gro,
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
      `Traditional agricultural disease detection methods are time-consuming and lack accuracy. Off-the-shelf deep learning models often struggle to effectively extract detailed, complex disease features from wheat fields, limiting the development of smart agriculture.

      Engineered an optimized computer vision pipeline based on the YOLOv5m architecture. To enhance the network's ability to extract subtle disease details, I integrated a Squeeze-and-Excitation (SE) channel attention module directly into the feature extraction network, enabling the model to dynamically prioritize spatial details and disease dependencies.

      Constructed and augmented a dataset of 11,510 images spanning 5 wheat conditions (Healthy, Furasiam Head, Loose Smut, Powdery Mildew, Rust Leaf). Conducted systematic ablation studies, testing YOLOv5 variants (s, m, Lite) and a ShuffleNetv2 backbone, ultimately proving the SE-attention architecture was the most effective.

      The custom YOLOv5m-SE model achieved 82.16% precision, an 84.87% recall rate, and an 87.21% mAP@0.5. It successfully outperformed baseline models like Faster R-CNN, SSD, and YOLOv5m-ShuffleNetv2, demonstrating high accuracy even in complex field backgrounds.`,
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "PyTorch", color: "green-text-gradient" },
      { name: "YOLOv5", color: "pink-text-gradient" },
      { name: "OpenCV", color: "blue-text-gradient" },
      { name: "DataAugmentation", color: "green-text-gradient" },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/SaddamHosyn",
    icon: programmer,
    iconBg: "#383E56",
  },
  {
    name: "BI-Solution-Course-Project",
    description: `Built an end-to-end BI solution for a grocery retail chain in Åland, to analyze market penetration, per-capita grocery spending, and tourism-driven seasonal demand across all 12 municipalities. Solved a multi-source data integration problem by ingesting daily JSON sales logs, ÅSUB demographic API data, and tourism CSV files into a unified DuckDB warehouse.

Designed the pipeline using a Medallion ELT architecture with Bronze, Silver, and Gold layers. Implemented raw ingestion in Python, cleaned and standardized cross-source data in SQL/Python, and modeled business-ready aggregates for municipality revenue, per-capita spend, seasonal sales trends, and YoY growth. Used dbt for modular transformations and GNU Make to orchestrate reproducible pipeline execution.

Delivered an interactive Streamlit dashboard with KPI views, municipality deep dives, and product-seasonality analysis. The system processed 5M+ sales records and surfaced business metrics such as €101M+ revenue, 204,579 transactions, and Kökar as the highest per-capita spending municipality in the 2025 analysis.`,
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
    icon: robot,
    iconBg: "#E6DEDD",
  },
  {
    name: "Buy-02",
    description:
  `Engineered a full-stack microservices e-commerce platform with Spring Boot, Angular, MongoDB, and Kafka, covering the entire flow from product browsing through cart, checkout, and order. Designed and implemented a service-oriented architecture with API Gateway, Eureka service registry, database-per-service pattern, and event-driven messaging for cascade deletions and data consistency across user, product, media, and order services.

Built secure REST APIs with JWT-based authentication and role-based authorization (CLIENT, SELLER, ADMIN), then developed a responsive Angular SPA with shopping cart, checkout wizard, order management, profile management, and buyer/seller analytics dashboards. Containerized all services with Docker Compose and wired a Jenkins + SonarQube CI/CD pipeline that automatically builds, tests, enforces quality gates, and deploys the system on every push, providing production-style deployment steps and technical proof of maintainability and scalability.`,
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
      { name: "IaC", color: "green-text-gradient" },
      
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/SaddamHosyn/cloud-design",
    icon: analytics,
    iconBg: "#E6DEDD",
  },
  {
    name: "Orchestrator",
    description:
  `Built a production-style microservices platform by migrating a Docker Compose architecture to a two-node K3s Kubernetes cluster running on Vagrant-provisioned virtual machines. Designed the cluster with a clear separation between stateless and stateful workloads, exposing only the API gateway through NodePort while keeping PostgreSQL services internal and persisting database state with PersistentVolumeClaims.

Deployed and orchestrated six services using Kubernetes Deployments, StatefulSets, Services, Secrets, and Horizontal Pod Autoscalers. Implemented message-driven resilience with RabbitMQ so billing requests were accepted asynchronously and safely processed even when the billing service was temporarily offline, while all credentials were isolated in Kubernetes Secrets rather than hardcoded into manifests.

Automated the full cluster lifecycle through a single orchestrator script that created VMs, installed K3s, joined the worker node, applied manifests in dependency order, and verified workloads with kubectl. The project showcases Kubernetes operations on a K3s cluster, including containerized microservices, service exposure, persistent storage, autoscaling, and operational troubleshooting in a production-style environment.`,
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
  name: "Real-Time Forum",
  description:
  `Built a single-page forum application with Go, SQLite, and Vanilla JavaScript, combining post feeds, comments, authentication, and real-time private messaging inside a browser-based SPA. The application uses hash-based routing and dynamic DOM rendering to handle all navigation without page reloads, while Go HTTP handlers, middleware, and SQLite-backed persistence manage users, sessions, posts, comments, and chat history.

Implemented secure session-based authentication with cookies, password hashing via bcrypt, and access control so only authenticated users can create posts or comments. The messaging layer uses WebSockets to support real-time private chat, live user presence, typing indicators, ordered conversation lists, and paginated chat history through scroll-based loading of older messages, with Go and SQLite coordinating concurrent connections and persistent message storage.

Structured the project for reproducible development and deployment with a modular backend, single-entry SPA frontend, and Docker-based runtime.`,
  tags: [
    { name: "Golang", color: "blue-text-gradient" },
    { name: "SQLite", color: "green-text-gradient" },
    { name: "WebSocket", color: "pink-text-gradient" },
    { name: "JS", color: "blue-text-gradient" },
    { name: "SPA", color: "green-text-gradient" },
    { name: "RealTimeChat", color: "pink-text-gradient" },
    { name: "SessionAuth", color: "blue-text-gradient" },
  ],
  image: real,
  sourceCodeLink: "https://github.com/SaddamHosyn/real-time-forum",
  icon: developer,
  iconBg: "#383E56",
},
];
const projects: TProject[] = [
  {
    name: "Groupie Tracker Visualization",
    description:
  `Built a Go-based web app. that integrates multiple JSON API endpoints to present structured information about artists, bands, concert locations, event dates, and related entities through a responsive browser interface. The backend retrieves, parses, and combines artist, location, date, and relation resources into coherent views, and event-driven UI interactions let users explore the data without dealing with API complexity. Implemented all server logic in Go with clean request handling, resilient error management, and maintainable code structure, then served the UI via HTML/CSS for interactivity. The result is an easily deployable local web service that demonstrates practical API consumption, transformation of distributed JSON data into usable views, and client-server app. design in Go.`,
    tags: [
      { name: "Golang", color: "blue-text-gradient" },
      { name: "Filtering", color: "green-text-gradient" },
      { name: "APIIntegration", color: "pink-text-gradient" },
    ],
    image: gro,
    sourceCodeLink: "https://github.com/SaddamHosyn/Groupie-Tracker-Visualization.git",
  },
  {
    name: "NLP Scrapper",
    description:
  `An automated pipeline that scrapes live news from The Guardian and runs each article through four NLP techniques to extract meaningful insights at scale. Named Entity Recognition via SpaCy identifies organizations mentioned across articles with ~89% precision, averaging 9.2 entities per article. Topic classification uses a Linear SVM with TF-IDF vectorization trained on 2,000+ BBC articles, reaching >95% accuracy across five categories. Across 147 articles, overall sentiment averaged +0.178. Politics was the most positive topic at +0.40, Sport the most negative at –0.12. Over 200 unique organizations were detected, and 10.2% of articles were flagged as high scandal risk.The main challenge was false positives in scandal detection — words like "toxic" triggering in sports contexts — pointing toward BERT-based contextual embeddings as the next improvement.`,
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "SpaCy", color: "green-text-gradient" },
      { name: "BeautifulSoup", color: "pink-text-gradient" },
    ],
    image: nlp,
    sourceCodeLink: "https://github.com/SaddamHosyn/nlp-scapper",
  },
  {
    name: "Kaggle Titanic",
    description:
  `ML pipeline predicted Titanic survival by comparing 9 models to find what truly generalizes. Feature engineering drove most of the value: age imputation via IterativeImputer, derived features including deck, title, fare per person, and family flags like IsMother and ChildAlone. The strongest was TicketSurvivalRate — capturing group survival dynamics — where families of 5+ survived at 20–30% versus 50–60% for smaller groups. Key finding was the overfitting paradox: Tuned XGBoost hit 85% CV but collapsed to 76.5% on Kaggle (8.4% gap), while Logistic Regression with C=0.1 won with 81% CV and 78.2% Kaggle (2.8% gap) — learned one robust pattern: female + first/second class = survive. Stacking XGBoost, LightGBM, and Random Forest failed because three overfit models voting together are still three overfit models. Lower training accuracy does not mean a worse model — it means a better generalization.`,
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "XGBoost", color: "green-text-gradient" },
      { name: "Scikit-Learn", color: "pink-text-gradient" },
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
