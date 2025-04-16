# Kubernetes Dashboard Deployment Guide

This guide provides step-by-step instructions to deploy and access the Kubernetes Dashboard UI.

---

## ✅ Step-by-Step Instructions

### Deploy the Dashboard
Run the following command to deploy the Dashboard:

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml
```

###  Start the Proxy
Start a local proxy to access the Dashboard:

```bash
kubectl proxy
```

Access the Dashboard at:
```
http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/
```

---

## 3Create a Service Account

dashboard-adminuser.yaml

```bash
apiVersion: v1
kind: ServiceAccount
metadata:
  name: admin-user
  namespace: kubernetes-dashboard
```

---

### 4. Bind the Service Account to a Cluster Role

cluster_role_binding.yaml

```bash
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
### 5. Open Terminal
Run:

```bash
kubectl apply -f dashboard-adminuser.yaml
```

```bash
kubectl apply -f cluster_role_binding.yaml
```


---

### 6. Retrieve the Login Token

```bash
kubectl -n kubernetes-dashboard create token admin-user
```

Copy the token and paste it into the Dashboard login page.

---

### 7. Access the Dashboard

Go to the following URL in your browser:

```
http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/
```

Login using the token.

---
