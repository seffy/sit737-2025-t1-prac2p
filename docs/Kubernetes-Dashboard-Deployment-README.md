# 📦 Kubernetes Dashboard Deployment Guide

This guide provides step-by-step instructions to deploy and access the Kubernetes Dashboard UI.

---

### ✅ Step-by-Step Instructions

## 1. Deploy the Dashboard
Run the following command to deploy the Dashboard:
This command downloads and applies the default deployment manifest:

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml
```

This will install:
- The Dashboard web UI
- Role-based access control (RBAC) configurations
- The kubernetes-dashboard service in the kubernetes-dashboard namespace

##  2. Start the Proxy
Start a proxy to securely access the dashboard from your local machine:

```bash
kubectl proxy
```

--- 

## 3. Create a Service Account (Skip if done already)

dashboard-adminuser.yaml

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: admin-user
  namespace: kubernetes-dashboard
```

---

## 4. Bind the Service Account to a Cluster Role (Skip if done already)

cluster_role_binding.yaml

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: admin-user
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
subjects:
- kind: ServiceAccount
  name: admin-user
  namespace: kubernetes-dashboard

```
## 5. Open Terminal
Run:

```bash
kubectl apply -f dashboard-adminuser.yaml
```

```bash
kubectl apply -f cluster_role_binding.yaml
```


---

## 6. Retrieve the Login Token

```bash
kubectl -n kubernetes-dashboard create token admin-user
```
Copy the token and paste it into the Dashboard login page.



## 7. Access the Dashboard

Go to the following URL in your browser:

```
http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/
```

Login using the token.







---
## 👨‍💻 Compiled by:

**Jo. Sabana**  
- Student, Master of IT Management Professional, DU, T1 2025
- SIT737 – Cloud-Native Application Development  
- 🔗 GitHub: [@seffy](https://github.com/seffy)
📅 April 2025


