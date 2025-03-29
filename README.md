# SIT737 Cloud Native Application Development Tasks

## Setup Tools and Working Environment
This guide outlines how to install and set up the required tools and environment for running the Calculator Microservice project.

### Summary of Required Tools

| Tool	| Purpose	
----------------------------------------------------------
| Node.js	         | Backend runtime	
| Express	         | API framework	
| Winston	         | Logging system	
| Visual Studio Code | Code editor	
| Git	             | Version control	
| GitHub	         | Code hosting	
| Postman	         | API testing	

⸻

1. Install Node.js

Node.js is a JavaScript runtime used to run backend code.
	•	Visit: https://nodejs.org/en/download
	•	Download the LTS version for your OS.
	•	Follow the installer instructions.

To verify installation:

```bash
node -v
npm -v

```

⸻

2. Install Express (via npm)

Express is a lightweight Node.js web framework.

Once Node.js is installed:

```bash
npm install express
```

You’ll typically run this inside your project folder (e.g., after running npm init).

⸻

3. Install Winston (Logging Library)

npm install winston

This will enable console and file-based logging in your microservice.

⸻

4. Install Visual Studio Code (VS Code)

A lightweight and powerful source-code editor.
	•	Visit: https://code.visualstudio.com/
	•	Download and install for your platform.

Optionally, install useful extensions:
	•	ESLint
	•	Prettier
	•	GitHub Copilot (if available)
	•	REST Client (to test endpoints)

⸻

5. Install Git (Version Control System)

Git is required for version control and pushing code to GitHub.
	•	Visit: https://git-scm.com/downloads
	•	Download and install Git for your OS.

To verify:
```bash
git --version
```


⸻

6. Set Up GitHub Repository
	1.	Go to https://github.com and sign in or create an account.
	2.	Create a new public repository 
	3.	Clone it to your local machine
	4.	After coding:

```bash
git add .
git commit -m "Initial commit"
git push origin main
```


⸻

7. Install Postman (for API Testing)

Postman is used to test your REST API endpoints.
	•	Download from: https://www.postman.com/downloads/
	•	After installation, open Postman and:
    •	Click + to add request
	•	Set request type to GET
	•	Enter your URL like: http://localhost:3000/add?num1=2&num2=3
	•	Hit Send and view the result

⸻




