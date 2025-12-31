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

<img width="1919" height="1077" alt="Screenshot 2025-12-29 213220" src="https://github.com/user-attachments/assets/24b4f474-2b93-4dea-a5fd-685a1698b602" />

---

### 🔹 Docker Image Build & Push (Terminal Output)
Backend and frontend Docker images are successfully built and pushed to the container registry.

<img width="1918" height="1078" alt="image" src="https://github.com/user-attachments/assets/e1c797ef-303e-4bb8-bb53-942ddad3cada" />


---

### 🔹 Docker Registry – Images Available
Verified images are present in the Docker registry after push.
<img width="1918" height="1078" alt="image" src="https://github.com/user-attachments/assets/b8b52490-53b1-4821-afdf-b71db8ce4fc3" />


---

### 🔹 Kubernetes Deployment (Pods & Services)
Application running successfully inside Kubernetes cluster.

<img width="1918" height="1078" alt="image" src="https://github.com/user-attachments/assets/ad2e8e1a-34d1-499f-b988-6fa64c5a7e40" />


---

### 🔹 Argo CD GitOps Sync
Automatic deployment via GitOps after manifest update.

<img width="1919" height="1077" alt="Screenshot 2025-12-31 093745" src="https://github.com/user-attachments/assets/19f506d3-b94d-4bbd-ae57-c4e49a5856da" />


---

### 🔹 Prometheus Targets (UP)
Node.js backend `/metrics` endpoint successfully scraped.

<img width="1919" height="1079" alt="Screenshot 2025-12-31 181527" src="https://github.com/user-attachments/assets/c1bd819b-9cf7-4338-83ee-c52846838db9" />


---

### 🔹 Grafana Monitoring Dashboard
Real-time Node.js application metrics visualization.

<img width="1918" height="1078" alt="Screenshot 2025-12-31 170024" src="https://github.com/user-attachments/assets/a30d7366-dbd0-4073-9f10-5d64f5a45dfa" />


---

### 🔹 Node.js Metrics Endpoint
Metrics exposed from backend application.


<img width="1918" height="1076" alt="Screenshot 2025-12-31 182035" src="https://github.com/user-attachments/assets/423a62e6-5567-4116-9eb4-2adfaa258835" />

## 🖥️ Final Application Output

After successful CI/CD pipeline execution, Docker image build, Kubernetes
deployment, and GitOps synchronization using Argo CD, the application is
running and accessible.

This confirms the complete end-to-end DevOps workflow is working as expected.

<img width="1919" height="1077" alt="Screenshot 2025-12-30 180813" src="https://github.com/user-attachments/assets/be94b198-345b-487c-b902-8568e5295407" />











