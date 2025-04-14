# SIT737 Task 6.2C – Interacting with Kubernetes and Updating Deployment

## ✅ Overview

In Task 6.2C, we built upon our Kubernetes deployment from Task 6.1P by interacting directly with the deployed application using `kubectl` and port forwarding. We also updated the Node.js application, rebuilt it with a new image tag, and rolled out the updated version using Kubernetes.

---

## 🛠️ Required Tools

- Visual Studio Code
- Git + GitHub
- Node.js
- Express.js
- Docker + Docker Compose
- Kubernetes + kubectl (Docker Desktop)
- Kubernetes Dashboard (optional)

---

## 🔹 Part 1: Interact with the Deployed Application

### 1. Verify Kubernetes Cluster and Pod
```bash
kubectl cluster-info
kubectl get nodes
kubectl get pods
kubectl get services
```

### 2. Port Forward to the Pod
```bash
kubectl port-forward pod/hirebuddy-deployment-<pod-id> 3000:3000
```

### 3. Open App in Browser
```
http://localhost:3000
```

---

## 🔹 Part 2: Update the Application

### 1. Modify App Code
In `server.js`, we updated the homepage response:
```js
res.send('Welcome to HireBuddy, Buddy!');
```

### 2. Rebuild and Push Docker Image
```bash
docker build -t josabana/sit737hirebuddy:v2 .
docker push josabana/sit737hirebuddy:v2
```

### 3. Update Kubernetes Deployment
In `deployment.yaml`:
```yaml
containers:
  - name: hirebuddy-container
    image: josabana/sit737hirebuddy:v2
```

### 4. Apply Changes and Verify
```bash
kubectl apply -f deployment.yaml
kubectl rollout status deployment hirebuddy-deployment
```

### 5. Port Forward New Pod and Access
```bash
kubectl get pods
kubectl port-forward pod/hirebuddy-deployment-<new-pod-id> 3000:3000
```

Visit: `http://localhost:3000`

---

## 📁 Source Files

- `Dockerfile`
- `deployment.yaml` (with image tag `v2`)
- `service.yaml`

---

## 🔗 Repository and Submission Notes

Due to a Git submodule-related error during commit and push, the source code and files for **Task 6.1P** and **Task 6.2C** have been uploaded in the following folder within the main repository:

📂 **Main Repo (Task Code):**  
[https://github.com/seffy/sit737hirebuddy](https://github.com/seffy/sit737hirebuddy)

📁 **Submission Folder Reference (6.1P and 6.2C):**  
[https://github.com/seffy/sit737-2025-t1-prac2p/tree/main/Task6.1P%20and%206.2C](https://github.com/seffy/sit737-2025-t1-prac2p/tree/main/Task6.1P%20and%206.2C)

---

## 🧠 Summary

This task helped us build confidence in interacting with Kubernetes using the CLI, performing live updates via port forwarding, and simulating a real production upgrade using tagged Docker images. We learned the lifecycle of deploying, updating, and testing containerized applications using Kubernetes clusters in a local environment.
