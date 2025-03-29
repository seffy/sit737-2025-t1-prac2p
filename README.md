# SIT737 Cloud Native Application Development 


## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/seffy/sit737-2025-t1-prac2p
cd [Folder Name]
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Server

```bash
node server.js
```


#
#
 

## Tools and Working Environment
This guide outlines how to install and set up the required tools and environment for running the SIT737 Cloud Native Application Development Weekly Tasks.

### Summary of Required Tools

| Tool			 | Purpose		|			|
|------------------------|----------------------|-----------------------|
| Node.js	         | Backend runtime	| Week 1,2,3,4,5	|
| Express	         | API framework	| Week 1,2,3,4,5	|
| Visual Studio Code     | Code editor		| Week 1,2,3,4,5	|
| Git	                 | Version control	| Week 1,2,3,4,5	|
| GitHub	         | Code hosting		| Week 1,2,3,4,5	|
| Winston	         | Logging system	| Week 2,3		|
| Postman	         | API testing		| Week 3 		|

---

1. Install Visual Studio Code (VS Code)

A lightweight and powerful source-code editor.
- Visit: https://code.visualstudio.com/
- Download and install for your platform.

Optionally, install useful extensions:
- ESLint
- Prettier
- GitHub Copilot (if available)
- REST Client (to test endpoints)

---

2. Install Git (Version Control System)
   - Git is required for version control and pushing code to GitHub.
     1. Visit: https://git-scm.com/downloads
     2. Download and install Git for your OS.

To verify:
```bash
git --version
```

---

3. Set Up GitHub Repository
   1. Go to https://github.com and sign in or create an account.
   2. Create a new public repository
   3. Clone it to your local machine
   4. After coding:

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

---



4. Install Node.js
   - Node.js is a JavaScript runtime used to run backend code.
     1. Visit: https://nodejs.org/en/download
     2. Download the LTS version for your OS.
     3. Follow the installer instructions.

To verify installation:

```bash
node -v
npm -v
```

---

5. Install Express (via npm)

- Express is a lightweight Node.js web framework.
- Once Node.js is installed:

```bash
npm install express
```

You’ll typically run this inside your project folder (e.g., after running npm init).

---

6. Install Winston (Logging Library)
```bash
npm install winston
```
This will enable console and file-based logging in your microservice.

---

7. Install Postman (for API Testing)
   Postman is used to test your REST API endpoints.
   	1. Download from: https://www.postman.com/downloads/
   	2. After installation, open Postman and:
   	3. Click + to add request
   	4. Set request type to GET
   	5. Enter your URL like: http://localhost:3000/add?num1=2&num2=3
   	6. Hit Send and view the result

---

8. To Be Announced


 ### Author: 
 	Joseph
 	DU S739 Student
 	SIT737 Cloud Native Application Development 
 	Australia
