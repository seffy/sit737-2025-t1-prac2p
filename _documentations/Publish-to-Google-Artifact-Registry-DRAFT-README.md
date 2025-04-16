# HireBuddy – Publish to Google Artifact Registry


Accessing the Web Application

- ✔️ Microservice: [sit737hirebuddy](https://github.com/seffy/sit737hirebuddy)
- ✔️ Weekly Tasks Submission Repo: [sit737-2025-prac5p](https://github.com/seffy/sit737-2025-prac5p)


## Publish to Google Artifact Registry

### 1. Setup Google Cloud

- Create a GCP Project and enable Artifact Registry.
- Create a Docker repository in region `australia-southeast1`.

### 2. Authenticate Docker

```bash
gcloud auth configure-docker australia-southeast1-docker.pkg.dev
```

### 3. Tag Image

```bash
docker tag sit737hirebuddy \
australia-southeast1-docker.pkg.dev/sit737-25t1-sabana-47965ad/hirebuddy/sit737hirebuddy:latest
```

### 4. Push to Artifact Registry

```bash
docker push australia-southeast1-docker.pkg.dev/sit737-25t1-sabana-47965ad/hirebuddy/sit737hirebuddy:latest
```

### 5. Pull & Run the Image

```bash
docker pull australia-southeast1-docker.pkg.dev/sit737-25t1-sabana-47965ad/hirebuddy/sit737hirebuddy:latest

docker run --env-file .env -p 7017:7017 \
australia-southeast1-docker.pkg.dev/sit737-25t1-sabana-47965ad/hirebuddy/sit737hirebuddy:latest
```

---

## ✅ GitHub Repositories

- ✔️ Microservice: [sit737hirebuddy](https://github.com/seffy/sit737hirebuddy)
- ✔️ Weekly Tasks Submission Repo: [sit737-2025-prac5p](https://github.com/seffy/sit737-2025-prac5p)








---
### 👨‍💻 Compiled by:
```
**Jo. Sabana**  
- Student, Master of IT Management Professional, DU, T1 2025
- SIT737 – Cloud-Native Application Development  
- 🔗 GitHub: [@seffy](https://github.com/seffy)
- 📅 April 2025
```