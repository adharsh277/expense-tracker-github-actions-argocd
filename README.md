# 💸 Expense Tracker Backend — Full Stack DevOps CI/CD Project

This project demonstrates a complete **CI/CD workflow** using Docker, GitHub Actions, Docker Hub, and **Render** for production deployment. It's a simple but powerful **Node.js + Express + MongoDB API** that enables tracking of personal expenses — and it's entirely containerized and cloud-ready.

Our goal?  
Build and deploy a full-stack backend using real-world DevOps practices — with automation, pipelines, and zero manual errors. ✅

---

## 🔧 Tech Stack & Tools

[![Node.js](https://img.shields.io/badge/Node.js-Backend-green?logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-Routing-black?logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb)](https://www.mongodb.com/)
[![Docker](https://img.shields.io/badge/Docker-Containerization-blue?logo=docker)](https://www.docker.com/)
[![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-CI%2FCD-blue?logo=githubactions)](https://github.com/features/actions)
[![Docker Hub](https://img.shields.io/badge/Docker%20Hub-Registry-blue?logo=docker)](https://hub.docker.com/)
[![Render](https://img.shields.io/badge/Render-Deployment-blueviolet?logo=render)](https://render.com/)

---
## 🛠️ Features

- 🧾 Add, view, and manage personal expenses
- 🐳 Containerized with Docker
- ⚙️ Automated CI/CD using GitHub Actions
- ☁️ Deployed publicly using Render (PaaS)
- 🔐 Secure deployment with secrets and environment variables
- 🌐 RESTful API routing

## 🚀 Live Demo

Visit: [https://expense-tracker-backend-latest.onrender.com](https://expense-tracker-backend-latest.onrender.com)

---



## 📦 Docker Image
🔗 Docker Hub Repo: aadhi160/expense-tracker-backend

📥 Pull command:

bash
Copy
Edit
docker pull aadhi160/expense-tracker-backend:latest


## ⚙️ CI/CD Workflow
Trigger: On every push to main branch

🧪 Installs dependencies & builds the Node.js app

🐳 Builds Docker image

📤 Pushes the image to Docker Hub

☁️ Render automatically pulls and redeploys the image

Fully automated, no manual intervention needed.

🧠 Skills You Will Learn
Category	Skills Developed
🧱 Backend	Node.js, Express, MongoDB
🐳 DevOps	Docker, Docker Hub, Render Deployment
🔁 CI/CD	GitHub Actions Workflow, Secrets, Automation
☁️ Cloud Delivery	Live production hosting using Render
🧪 Debugging	Log tracing, ENV configs, Deployment 

## 📜 GitHub Actions: .github/workflows/ci.yml
yaml
Copy
Edit
name: CI/CD for Node.js Backend

on:
  push:
    branches: [ main ]

jobs:
  build-and-push:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install
        working-directory: backend

      - name: Docker login
        run: echo "${{ secrets.DOCKER_PASSWORD }}" | docker login -u "${{ secrets.DOCKER_USERNAME }}" --password-stdin

      - name: Docker build
        run: docker build -t ${{ secrets.DOCKER_USERNAME }}/expense-tracker-backend ./backend

      - name: Docker push
        run: docker push ${{ secrets.DOCKER_USERNAME }}/expense-tracker-backend
🌱 Future Improvements
Add frontend using React or Vue

Add authentication (JWT, OAuth)

Integrate MongoDB Atlas for production-ready DB

Monitoring with Prometheus or Grafana

Argo CD-based GitOps (optional future goal)

🤝 Acknowledgements
Thanks to:

Render for the seamless container hosting

Docker & GitHub for dev automation

MongoDB for a scalable document store

📌 Author
Adharsh U.

Cloud & DevOps Enthusiast | Docker • GitHub Actions • Azure • Kubernetes
📫 LinkedIn: linkedin.com/in/adharsh-yourprofile
🌍 Portfolio: coming soon...

## 📁 Folder Structure

```bash
.
├── backend/
│   ├── routes/
│   ├── models/
│   ├── server.js
│   └── package.json
├── k8s/                  # (Optional) Kubernetes YAMLs for future use
├── .github/workflows/
│   └── ci.yml            # GitHub Actions CI/CD pipeline
└── Dockerfile


