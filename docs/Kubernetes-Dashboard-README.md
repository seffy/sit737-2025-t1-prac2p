# Kubernetes Dashboard Deployment Guide

This guide provides step-by-step instructions to deploy and access the Kubernetes Dashboard UI.

---

## ✅ Step-by-Step Instructions

### 1. Deploy the Dashboard
Run the following command to deploy the Dashboard:

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml
```

---

### 2. Start the Proxy
Start a local proxy to access the Dashboard:

```bash
kubectl proxy
```

Access the Dashboard at:
```
http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/
```

---

### 3. Create a Service Account

```bash
kubectl apply -f - <<EOF
apiVersion: v1
kind: ServiceAccount
metadata:
  name: admin-user
  namespace: kubernetes-dashboard
EOF
```

---

### 4. Bind the Service Account to a Cluster Role

```bash
kubectl apply -f - <<EOF
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: admin-user-binding
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
subjects:
- kind: ServiceAccount
  name: admin-user
  namespace: kubernetes-dashboard
EOF
```

---

### 5. Retrieve the Login Token

```bash
kubectl -n kubernetes-dashboard create token admin-user
```

Copy the token and paste it into the Dashboard login page.

---

### 6. Access the Dashboard

Go to the following URL in your browser:

```
http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/
```

Login using the token.

---


### 7. Generate Token: 
```bash
kubectl -n kubernetes-dashboard create token admin-user
```
