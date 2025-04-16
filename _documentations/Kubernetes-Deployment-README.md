# 📦 SIT737 Task 6.1P – Kubernetes Deployment of HireBuddy


## 📁 Note on Submission Location

📌 Due to a Git submodule-related error during commit and push, the source code and files for **Task 6.1P** and **Task 6.2C** have been uploaded in the following folder within the main repository:

🔗 [https://github.com/seffy/sit737hirebuddy](https://github.com/seffy/sit737hirebuddy)

Please refer to that folder for all deployment files and documentation.




## ✅ Overview

This task demonstrates how we deployed the HireBuddy Node.js application into a Kubernetes cluster using Docker Desktop. The application was containerized using Docker, uploaded to Docker Hub, and deployed to the cluster using Kubernetes manifests. The app was then exposed via a NodePort service and tested through both browser and terminal.

---

## 🛠️ Tools Used

- **Docker Desktop** (with Kubernetes enabled)
- **Node.js**
- **Docker CLI**
- **kubectl** (Kubernetes CLI)
- **Git + GitHub**
- **Visual Studio Code**

---

## 📁 Project Structure

```
sit737hirebuddy/
├── Dockerfile
├── deployment.yaml
├── service.yaml
└── README.md
```

---

## 🚀 Step-by-Step Deployment Instructions

### 1. ✅ Enable Kubernetes on Docker Desktop

1. Open **Docker Desktop > Settings > Kubernetes**
2. Tick ✅ “Enable Kubernetes”
3. Wait until the status shows: **Kubernetes is running**

Confirm setup in terminal:
```bash
kubectl cluster-info
kubectl get nodes
```

---

### 2. 🐳 Build and Push Docker Image

```bash
docker build -t josabana/sit737hirebuddy .
docker push josabana/sit737hirebuddy
```

> This packages our Node.js app and makes it accessible from Kubernetes via Docker Hub.

---

### 3. ⚙️ Apply Kubernetes Deployment

Create `deployment.yaml`:
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: hirebuddy-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      app: hirebuddy
  template:
    metadata:
      labels:
        app: hirebuddy
    spec:
      containers:
        - name: hirebuddy-container
          image: josabana/sit737hirebuddy
          ports:
            - containerPort: 3000
```

Apply and verify:
```bash
kubectl apply -f deployment.yaml
kubectl get deployments
kubectl get pods
```

---

### 4. 🌐 Expose the App with NodePort

Create `service.yaml`:
```yaml
apiVersion: v1
kind: Service
metadata:
  name: hirebuddy-service
spec:
  type: NodePort
  selector:
    app: hirebuddy
  ports:
    - protocol: TCP
      port: 80
      targetPort: 3000
      nodePort: 30007
```

Apply and verify:
```bash
kubectl apply -f service.yaml
kubectl get services
```

---

### 5. 🔍 Test the Application

#### Curl Test:
```bash
curl http://localhost:30007
```

Expected output:
```
Found. Redirecting to /login
```

✅ This shows the app is running and redirecting to the login page.

#### Browser Test:
Open:
```
http://localhost:30007/login
```

This should load the HireBuddy login page.

---

## 🔗 Repository

GitHub repo: [https://github.com/seffy/sit737hirebuddy](https://github.com/seffy/sit737hirebuddy)


---
### 👨‍💻 Compiled by:
```
**Jo. Sabana**  
- Student, Master of IT Management Professional, DU, T1 2025
- SIT737 – Cloud-Native Application Development  
- 🔗 GitHub: [@seffy](https://github.com/seffy)
- 📅 April 2025
```