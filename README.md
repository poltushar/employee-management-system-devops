# Employee-Management-System-Devops 🌍✈️🚀

Employee Management System (EMS) built with React.js and Node.js to demonstrate a real-world DevOps workflow. The app is containerized using Docker with CI pipelines that build and push images to Docker Hub. GitOps-based deployment is implemented using Argo CD on a local Kubernetes (KIND) cluster.


# Project Flow Diagram

<img width="1530" height="818" alt="ChatGPT Image Dec 29, 2025, 05_45_43 PM" src="https://github.com/user-attachments/assets/8a8677c6-038a-421b-bfe7-7c65efc4aaeb" />

# 🚀 End-to-End DevOps Project — MERN Application

This project demonstrates a **complete DevOps lifecycle** for a MERN stack application, covering **CI/CD, containerization, Kubernetes deployment, GitOps, and monitoring** using industry-standard tools.

It is designed to reflect **real-world DevOps practices** and production-level troubleshooting.

---

## 📌 Project Overview

The goal of this project is to automate the build, deployment, and monitoring of a MERN application using DevOps tools.

### Key Highlights:
- Automated CI/CD pipeline
- Dockerized backend & frontend
- Kubernetes-based deployment
- GitOps with Argo CD
- Application monitoring using Prometheus & Grafana
- Node.js application metrics exposed via `/metrics`

---

## 🧰 Tech Stack

### Application
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB

### DevOps & Cloud
- **CI/CD:** Jenkins, GitHub Actions
- **Containerization:** Docker
- **Orchestration:** Kubernetes (KIND)
- **GitOps:** Argo CD
- **Monitoring:** Prometheus, Grafana
- **Cloud:** AWS EC2 (optional)

---

## 🔄 CI/CD Workflow

1. Developer pushes code to GitHub
2. Jenkins CI pipeline triggers automatically
3. Docker images are built and pushed to registry
4. Kubernetes manifests are updated
5. Argo CD detects changes and syncs deployment
6. Application is deployed to Kubernetes cluster

---

## ☸ Kubernetes Architecture

- Backend and frontend deployed as Kubernetes Deployments
- Services expose applications internally and externally
- MongoDB runs as a separate service
- ServiceMonitor used for Prometheus scraping

---

## 📊 Monitoring & Observability

### Prometheus
- Scrapes Node.js application metrics from `/metrics`
- Uses ServiceMonitor (Prometheus Operator)

### Grafana Dashboard
Monitors:
- Node.js version
- CPU usage
- Memory usage
- Event loop lag
- Pod restart count

Example metrics:
```promql
nodejs_version_info
process_cpu_seconds_total
process_resident_memory_bytes
```

## 🖥️ Execution Screenshots (Proof of Work)

Below screenshots demonstrate successful execution of the complete DevOps pipeline,
from CI to production deployment and monitoring.

---

### 🔹 Jenkins CI Pipeline – Build & Push
Triggered automatically on GitHub push.

![Jenkins Pipeline](execution-screenshots/jenkins-pipeline-success.png)

---

### 🔹 Docker Images Created & Pushed
Backend and frontend images built and pushed to registry.

![Docker Images](execution-screenshots/docker-images.png)

---

### 🔹 Kubernetes Deployment (Pods & Services)
Application running successfully inside Kubernetes cluster.

![Kubernetes Pods](execution-screenshots/kubernetes-pods-running.png)

---

### 🔹 Argo CD GitOps Sync
Automatic deployment via GitOps after manifest update.

![Argo CD Sync](execution-screenshots/argo-sync-success.png)

---

### 🔹 Prometheus Targets (UP)
Node.js backend `/metrics` endpoint successfully scraped.

![Prometheus Targets](execution-screenshots/prometheus-targets-up.png)

---

### 🔹 Grafana Monitoring Dashboard
Real-time Node.js application metrics visualization.

![Grafana Dashboard](execution-screenshots/grafana-dashboard.png)

---

### 🔹 Node.js Metrics Endpoint
Metrics exposed from backend application.

![Node.js Metrics](execution-screenshots/nodejs-metrics-endpoint.png)











