# SIT737 Task 6.2C – Interacting with Kubernetes and Updating Deployment

## ✅ Overview

In this task, we extended our Kubernetes deployment skills by interacting with the running cluster using `kubectl` and Kubernetes Dashboard. We also updated our Node.js application by creating a new Docker image version, then rolled out the update using Kubernetes.

---

## 🛠️ Tools Used

- Docker Desktop (with Kubernetes enabled)
- Node.js
- Docker CLI
- kubectl
- Git + GitHub
- Visual Studio Code

---

## 📁 Project Structure

```
sit737hirebuddy/
├── Dockerfile
├── deployment.yaml
├── service.yaml
├── README.md
└── (Updated Node.js source files)
```

---

## 🔹 Part I – Interacting with the Running App

### ✅ Check Cluster Resources
```bash
kubectl get pods
kubectl get services
```

### ✅ Port Forwarding to Access App
```bash
kubectl port-forward pod/<pod-name> 3000:3000
```

Then access in browser:
```
http://localhost:3000
```

---

## 🔹 Part II – Updating the Application

### ✅ Modify the App
We updated the application (e.g., changed UI text or page title) to simulate a version update.

### ✅ Build and Push New Docker Image
```bash
docker build -t josabana/sit737hirebuddy:v2 .
docker push josabana/sit737hirebuddy:v2
```

### ✅ Update Deployment YAML
Edit `deployment.yaml`:
```yaml
image: josabana/sit737hirebuddy:v2
```

Then apply and verify:
```bash
kubectl apply -f deployment.yaml
kubectl rollout status deployment hirebuddy-deployment
```

---

## 📸 Screenshots

- `kubectl get pods` showing deployment status
- Kubernetes Dashboard showing pod and deployment running
- App output in browser after update
- Terminal showing successful port forwarding

---

## 📁 Note on Submission

Due to Git submodule sync issues, the files for Task 6.1P and 6.2C are uploaded to:

🔗 [https://github.com/seffy/sit737hirebuddy](https://github.com/seffy/sit737hirebuddy)

---

## 🧠 Reflection

This task demonstrated how we can interact with live workloads in Kubernetes using CLI and dashboard tools. We also simulated a version upgrade scenario to understand rolling updates in cloud-native applications. This mirrors real-world CI/CD pipelines and shows how DevOps teams manage deployments at scale.
