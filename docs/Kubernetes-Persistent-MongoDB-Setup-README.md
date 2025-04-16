# 📦 Kubernetes Persistent MongoDB Setup

This document explains how to set up persistent storage for a MongoDB deployment in Kubernetes using a Persistent Volume (PV), Persistent Volume Claim (PVC), StorageClass, Service, and Deployment configuration.


## Table of Contents

- [Kubernetes Dashboard UI Deployment](#Kubernetes-Dashboard-UI-Deployment)
- [Persistence in Kubernetes](#Persistence-in-Kubernetes)

--- 

## Kubernetes Dashboard UI Deployment
### 1. Deploy the Dashboard
Run the following command to deploy the Dashboard:
This command downloads and applies the default deployment manifest:

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml
```

This will install:
- The Dashboard web UI
- Role-based access control (RBAC) configurations
- The kubernetes-dashboard service in the kubernetes-dashboard namespace


###  2. Start the Proxy
Start a proxy to securely access the dashboard from your local machine:

```bash
kubectl proxy
```


### 3. Retrieve the Login Token

```bash
kubectl -n kubernetes-dashboard create token admin-user
```
Copy the token and paste it into the Dashboard login page.


### 4. Access the Dashboard
Go to the following URL in your browser:

```
http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/
```

Login using the token.

---

## Persistence in Kubernetes
### 1. Persistent Volume (PV)

```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: mongo-pv
spec:
  capacity:
    storage: 1Gi
  accessModes:
    - ReadWriteMany
  local:
    path: /run/desktop/mnt/host/c/sit323_737-2023-t1-prac2p/Week6/MyMappedFolder
  nodeAffinity:
    required:
      nodeSelectorTerms:
        - matchExpressions:
            - key: kubernetes.io/hostname
              operator: In
              values:
                - docker-desktop
```

---

### 2. Persistent Volume Claim (PVC)

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: mongo-pvc
spec:
  accessModes:
    - ReadWriteMany
  resources:
    requests:
      storage: 1Gi
  storageClassName: "demo-storage"
```

---

### 3. Storage Class

```yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: demo-storage
provisioner: docker.io/hostpath
volumeBindingMode: Immediate
reclaimPolicy: Delete
```

---

### 4. MongoDB Service

```yaml
apiVersion: v1
kind: Service
metadata:
  name: mongo-svc
spec:
  ports:
    - port: 27017
      protocol: TCP
      targetPort: 27017
      nodePort: 32000
  selector:
    app: mongo
  type: NodePort
```

---

### 5. MongoDB Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mongo
spec:
  replicas: 1
  selector:
    matchLabels:
      app: mongo
  template:
    metadata:
      labels:
        app: mongo
    spec:
      containers:
        - image: mongo
          name: mongo
          args: ["--dbpath", "/data/db"]
          env:
            - name: MONGO_INITDB_ROOT_USERNAME
              value: "admin"
            - name: MONGO_INITDB_ROOT_PASSWORD
              value: "password"
          volumeMounts:
            - mountPath: /data/db
              name: mongo-volume
      volumes:
        - name: mongo-volume
          persistentVolumeClaim:
            claimName: mongo-pvc
```

---

## 🔧 Notes

- **PV and PVC** ensure MongoDB data persists across pod restarts.
- **StorageClass** enables dynamic provisioning and defines how storage is created.
- **NodePort 32000** exposes MongoDB for external access.

---

## 🧪 Test Persistence

1. Deploy all components.
2. Access MongoDB using:
   - `mongosh` CLI or
   - MongoDB Compass → New Connection → URI with port `32000`.
3. Insert sample data in MongoDB Shell

```bash
use testdb
db.users.insertOne({name: "Joseph", age: 18, role: "developer"})
db.users.find().pretty()
```

4. Delete the MongoDB pod.
5. Confirm data is retained after pod restarts.

---

## 👤 Compiled by

**Jo. Sabana**  
🔗 GitHub: [@seffy](https://github.com/seffy)
📅 April 2025