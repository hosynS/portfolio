# 3D Portfolio — Saddam Hussain

## 🌐 Live Demo

Explore the live demonstration of the project:
[saddamhosyn.github.io/portfolio](https://saddamhosyn.github.io/portfolio/)

## 📝 Description

**3D Portfolio** is a premium, fully responsive portfolio website built with **React.js**, **Three.js**, and **Tailwind CSS**. It showcases projects, experience, technical skills, and certifications using interactive 3D elements and animations.

<details><summary><b>Folder Structure</b></summary>

```bash
portfolio/
├── reactjs18-3d-portfolio/   # Main React Vite App
├   ├── src/
├   ├   ├── App.tsx
├   ├   ├── globals.css
├   ├   ├── main.tsx
├   ├   ├── vite.env.d.ts
├   ├   ├── components/
├   ├   ├   ├── atoms/
├   ├   ├   ├   └── Header.tsx
├   ├   ├   ├── canvas/
├   ├   ├   ├   ├── Ball.tsx
├   ├   ├   ├   ├── Computers.tsx
├   ├   ├   ├   ├── Earth.tsx
├   ├   ├   ├   ├── Stars.tsx
├   ├   ├   ├   └── index.ts
├   ├   ├   ├── layout/
├   ├   ├   ├   ├── Loader.tsx
├   ├   ├   ├   └── Navbar.tsx
├   ├   ├   ├── sections/
├   ├   ├   ├   ├── About.tsx
├   ├   ├   ├   ├── Contact.tsx
├   ├   ├   ├   ├── Experience.tsx
├   ├   ├   ├   ├── Feedbacks.tsx
├   ├   ├   ├   ├── Hero.tsx
├   ├   ├   ├   ├── Tech.tsx
├   ├   ├   ├   ├── Works.tsx
├   ├   ├   ├   └── page.tsx
├   ├   ├   └── index.ts
├   ├   ├── constants/
├   ├   ├   ├── config.ts
├   ├   ├   ├── styles.ts
├   ├   ├   └── index.ts
├   ├   ├── hoc/
├   ├   ├   ├── SectionWrapper.tsx
├   ├   ├   └── index.ts
├   ├   ├── utils/
├   ├   ├   └── motion.ts
├   ├   ├── types/
├   ├   ├   └── index.d.ts
├   ├   └── assets/
├   ├       ├── company/
├   ├       ├── tech/
├   ├       └── index.ts
├   ├── public/
├   ├   ├── desktop_pc
├   ├   ├── planet
├   ├   ├── logo.png
├   ├   └── logo.svg
├   ├── .env
├   ├── .gitignore
├   ├── index.html
├   ├── LICENSE
├   ├── README.md
├   ├── package.json
├   └── vite.config.js
├── package.json              # Root package.json (workspace scripts)
└── how2run.txt               # Local notes
```

</details>

## 📖 Table of Contents

<details><summary>Table of Contents</summary>

- [Live Demo](#-live-demo)
- [Description](#-description)
- [Technologies Used](#-technologies-used)
- [Get Started](#-get-started)
  - [Prerequisites](#-prerequisites)
  - [Installation and Run Locally](#-installation-and-run-locally)
  - [Scripts](#-scripts)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
- [Contact](#-contact-us)
- [License](#-license)

</details>

## ✨ Technologies Used

<details><summary><b>3D Portfolio</b> is built using the following technologies:</summary>

- [TypeScript](https://www.typescriptlang.org/): TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
- [Vite](https://vitejs.dev/): Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.
- [React.js](https://reactjs.org/): React is a free and open-source front-end JavaScript library for building user interfaces.
- [Three.js](https://threejs.org/): Three.js is a cross-browser JavaScript library used to create and display animated 3D computer graphics in a web browser using WebGL.
- [Framer Motion](https://www.framer.com/motion/): Framer Motion is a production-ready motion library for React.
- [Tailwind CSS](https://tailwindcss.com/): Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.
- [ESLint](https://eslint.org/): ESLint is a static code analysis tool for identifying problematic patterns found in JavaScript code.
- [Prettier](https://prettier.io/): Prettier is an opinionated code formatter.

</details><br/>

[![Technologies Used](https://skillicons.dev/icons?i=ts,vite,react,threejs,tailwind,github)](https://skillicons.dev)

## 🧰 Get Started

To get this project up and running in your development environment, follow these step-by-step instructions.

### 📋 Prerequisites

In order to install and run this project locally, you would need to have the following installed on your local machine.

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/get-npm)
- [Git](https://git-scm.com/downloads)

### ⚙️ Installation and Run Locally

**Step 0 (Configure EmailJS):**

The contact form uses EmailJS to send client-side emails. You need to create a free account at [EmailJS](https://emailjs.com/) and set the environment variables in a `.env` file (see the [Environment Variables](#-environment-variables) section below).

**Step 1 (Clone the Repo):**

Download or clone this repo by using the link below:

```bash
git clone https://github.com/SaddamHosyn/portfolio.git
```

**Step 2 (Install Dependencies):**

Execute the following command in the root directory of the repo to install root & project dependencies:

```bash
npm install
```

**Step 3 (Run the development server):**

Run the development server using the root workspace script:

```bash
npm run dev
```

*Note: The React application is configured with a base URL of `/portfolio/`. Once the server starts, navigate to `http://localhost:5173/portfolio/` to see your portfolio.*

## 🔒 Environment Variables

Create a `.env` file in the main project directory (`reactjs18-3d-portfolio/.env`) and add the following keys with your credentials from EmailJS:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_ACCESS_TOKEN=your_access_token
```

## 🚀 Deployment

The portfolio is set up to automatically deploy to **GitHub Pages** using GitHub Actions workflows defined in `.github/workflows/deploy.yml`. 

Every push to the `main` branch compiles the production bundle and deploys the update automatically to:
**https://saddamhosyn.github.io/portfolio/**

You can also run a manual build locally:

```bash
npm run build
```

## ✉️ Contact Us

Feel free to reach out via email at: **sadamhos92@gmail.com** or connect with me on [LinkedIn](https://www.linkedin.com/in/saddam-hussain-khan).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
