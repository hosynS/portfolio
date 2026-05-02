import type {
  TNavLink,
  TService,
  TTechnology,
  TProject,
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
  tensorflow,
  pytorch,
  golang,
  bash,
  githubActions,
  sqlite,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Backend Development",
    icon: web,
  },
  {
    title: "Computer Vision",
    icon: backend,
  },
  {
    title: "DevOps Engineering",
    icon: mobile,
  },
  {
    title: "MLOps",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Go",
    icon: golang,
  },
  {
    name: "Bash",
    icon: bash,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "GitHub Actions",
    icon: githubActions,
  },
  {
    name: "SQLite",
    icon: sqlite,
  },
];

const experiences = [
  {
    name: "Wheat Disease Detection",
    description:
      "Engineered a computer vision project with Python and PyTorch, implementing custom model architectures (YOLOv5 + SE blocks) to detect wheat diseases with high accuracy. Worked on data preprocessing with OpenCV, including image augmentation and formatting. Orchestrated model training and evaluation, comparing multiple backbones (ShuffleNetv2, YOLOv5m) and documenting performance metrics.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pytorch",
        color: "green-text-gradient",
      },
      {
        name: "YOLOv5",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
    icon: starbucks,
    iconBg: "#383E56",
  },
  {
    name: "BI Solution Hack",
    description:
      "Architected an end-to-end ELT data pipeline using Python and DuckDB, implementing Medallion Architecture (Bronze/Silver/Gold) to process 5M+ sales records. Integrated heterogeneous data sources (JSON logs, government APIs, CSV) into a unified analytical warehouse. Developed a comprehensive BI dashboard with Streamlit to visualize per-capita consumption trends and tourism impacts.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "DuckDB",
        color: "green-text-gradient",
      },
      {
        name: "streamlit",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/SaddamHosyn/bi-solution-hack",
    icon: tesla,
    iconBg: "#E6DEDD",
  },
  {
    name: "Buy-02",
    description:
      "Architected a full-stack microservices platform using Spring Boot and Angular, integrating Kafka for event-driven data consistency. Built a robust CI/CD pipeline with Jenkins and SonarQube. Designed scalable data models in MongoDB for shopping carts, order management, and real-time analytics. Implemented secure RESTful APIs with JWT authentication and role-based access control.",
    tags: [
      {
        name: "spring-boot",
        color: "blue-text-gradient",
      },
      {
        name: "angular",
        color: "green-text-gradient",
      },
      {
        name: "kafka",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/SaddamHosyn/buy-02",
    icon: shopify,
    iconBg: "#383E56",
  },
  {
    name: "Detecto",
    description:
      "Built a real-time object detection system using FastAPI and YOLOv8, processing image/video streams to detect and count people with ≥85% accuracy. Developed a RESTful backend storing detection metadata in SQLite. Engineered automated alert workflows using n8n for Slack notifications when thresholds exceeded. Integrated a React/Vite frontend for visual monitoring with real-time bounding boxes.",
    tags: [
      {
        name: "FastAPI",
        color: "blue-text-gradient",
      },
      {
        name: "YOLOv8",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/SaddamHosyn/detecto",
    icon: meta,
    iconBg: "#E6DEDD",
  },
];



const projects: TProject[] = [
  {
    name: "Net-Cat",
    description:
      "Built a concurrent TCP chat server in Go supporting multiple simultaneous client connections, message broadcasting, and timestamped chat history. Managed concurrent connections using Goroutines and channels, handling client join/leave events, nicknames, and graceful disconnections.",
    tags: [
      {
        name: "golang",
        color: "blue-text-gradient",
      },
      {
        name: "TCP",
        color: "green-text-gradient",
      },
      {
        name: "concurrency",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/SaddamHosyn/Net-Cat",
  },
  {
    name: "NLP Scrapper",
    description:
      "Developed a news intelligence pipeline using Python and BeautifulSoup, automating scraping of 300+ articles into a structured SQL database. Implemented NLP processing with SpaCy and NLTK for named entity detection, topic classification (>95% accuracy), and sentiment analysis. Engineered a scandal detection system using word embeddings and distance metrics.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "SpaCy",
        color: "green-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/SaddamHosyn/nlp-scapper",
  },
  {
    name: "Kaggle Titanic",
    description:
      "Built a machine learning project with advanced feature engineering (imputation, categorical encoding) achieving ~82-84% accuracy. Developed and evaluated ensemble models (Stacking/Voting with XGBoost, LightGBM, Random Forest) using Scikit-Learn pipelines. Structured the project for reproducibility with organized notebooks, data, and dependencies.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "XGBoost",
        color: "green-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/SaddamHosyn/kaggletitanic",
  },
];

export { services, technologies, experiences, projects };

