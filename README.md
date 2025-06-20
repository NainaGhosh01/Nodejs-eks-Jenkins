# 🚀 CI/CD Pipeline for Node.js Application using Jenkins, Docker & AWS EKS

## 📌 Overview

This repository demonstrates a complete CI/CD pipeline for deploying a Node.js application using **Jenkins**, **Docker**, and **Amazon EKS** (Kubernetes). The pipeline automates the entire software delivery process — from code integration and testing to Docker image creation and Kubernetes deployment.

---

## ✨ Features

- ✅ **Automated Testing**: Ensures code quality using Jest before deployment.
- 🐳 **Docker Image Build**: Packages the application into a Docker container.
- ☸️ **Kubernetes Deployment**: Deploys the latest image to an Amazon EKS cluster.
- 📩 **Email Notifications**: Sends build result notifications for success or failure.
- 🔄 **Fully Automated CI/CD**: Hands-free pipeline via Jenkins after a code push or manual trigger.

---

## 🛠️ Architecture

**Source Control:**  
GitHub repository (`main` branch) hosting the Node.js app and deployment configs.

**CI/CD Flow:**  
1. Jenkins polls or receives webhook from GitHub.
2. Runs `npm install` and `npm test`.
3. Builds a Docker image and pushes it to **Amazon ECR**.
4. Deploys to **AWS EKS** using `kubectl apply -f k8s.yaml`.
5. Sends email notifications using SMTP.

---

## ⚙️ Prerequisites

Make sure the following are set up before running this project:

### ✅ Jenkins (self-hosted on EC2)
- Required Plugins:
  - Pipeline
  - Docker Pipeline
  - Kubernetes CLI Plugin
  - Email Extension Plugin

### ✅ AWS Resources
- ECR repository for image storage.
- EKS cluster for Kubernetes deployment.
- IAM credentials for Jenkins to access ECR & EKS.

### ✅ GitHub
- Repository with:
  - `Jenkinsfile`
  - `Dockerfile`
  - `k8s.yaml`
  - Node.js app source
- Webhook configured to trigger Jenkins (optional)

---

## 🔁 CI/CD Pipeline Stages

| Stage                | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| **Checkout Code**     | Clones the latest code from the GitHub repository                          |
| **Install Dependencies** | Runs `npm install` to install packages                                  |
| **Run Tests**         | Executes unit tests using Jest to verify functionality                     |
| **Build Docker Image**| Builds Docker image using provided Dockerfile                              |
| **Push to ECR**       | Pushes image to Amazon Elastic Container Registry                          |
| **Deploy to EKS**     | Applies Kubernetes manifest (`k8s.yaml`) to deploy the app                 |
| **Post Actions**      | Sends email notification with job status                                   |

---

## 📬 Notifications

- Configured via **SMTP (Gmail)** using Jenkins Email Extension Plugin.
- Emails sent to specified recipients on both **success** and **failure**.

---
