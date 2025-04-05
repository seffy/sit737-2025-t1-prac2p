# SIT737 Cloud Native Application Development

Welcome to the SIT737 Cloud Native Application Development repository. This project is designed to help you learn and apply cloud-native practices using modern tools such as Node.js, Express, Docker, and more. It contains weekly tasks and practical exercises to build your skills in developing scalable and maintainable applications.

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Clone the Repository](#clone-the-repository)
  - [Install Dependencies](#install-dependencies)
  - [Start the Server](#start-the-server)
- [Development Environment Setup](#development-environment-setup)
  - [Visual Studio Code](#visual-studio-code)
  - [Git & GitHub](#git--github)
  - [Node.js & Express](#nodejs--express)
  - [Winston Logging](#winston-logging)
  - [Postman for API Testing](#postman-for-api-testing)
  - [Docker](#docker)
- [Usage](#usage)
- [Additional Notes](#additional-notes)
- [Contributing](#contributing)
- [Author & Contact](#author--contact)
- [License](#license)

## Overview

This repository provides a practical approach to cloud-native application development. Key learning areas include:

- **Backend Development:** Creating lightweight and robust APIs with Node.js and Express.
- **Logging:** Implementing logging with Winston to monitor application behavior.
- **Containerization:** Packaging your application using Docker for consistency and scalability.
- **Testing:** Utilizing Postman to ensure your API endpoints perform as expected.

## Project Structure

A typical project structure is as follows:

	├── Week1/
	├── Week2/
	├── Week3/
	├── ...
	└── README.md # Project documentation (this file) 


## Prerequisites

Before you begin, ensure you have you install what is only required in each tasks:

- **Visual Studio Code (VS Code):** A powerful and lightweight code editor.
- **Git:** Version control system.
- **Node.js (v14+ recommended):** JavaScript runtime for server-side development.
- **npm:** Node package manager.
- **Docker:** For containerizing the application.
- **Postman:** API testing tool.
- TBD

## Installation

### Clone the Repository
Open your terminal and clone the repository using Git:

    git clone https://github.com/seffy/sit737-2025-t1-prac2p.git
    cd sit737-2025-t1-prac2p

### Install Dependencies
Install the project dependencies with npm:

    npm install

This installs essential packages like:

'Express': To create the web server and define API routes.
'Winston': For logging system events.
Other dependencies as defined in 'package.json'.
    
### Start the Server

    node server.js
    
The server should now be running on http://localhost:3000.


## Development Environment Setup
This guide outlines how to install and set up the required tools and environment for running the SIT737 Cloud Native Application Development Weekly Tasks.

### Summary of Required Tools

| | Tool			 | Purpose		|			|
|--|----------------------|----------------------|-----------------------|
| 1 | Visual Studio Code     | Code editor		| Week 1,2,3,4,5	|
| 2 | Git	                 | Version control	| Week 1,2,3,4,5	|
| 3 | GitHub (or GitHub Desktop)	         | Code hosting		| Week 1,2,3,4,5	|
| 4 | Node.js	         | Backend runtime	| Week 1,2,3,4,5	|
| 5 | Express	         | API framework	| Week 1,2,3,4,5	|
| 6 | Winston	         | Logging system	| Week 2,3		|
| 7 | Postman	         | API testing		| Week 3 		|
| 8 | Docker	         | Containerisation platform for packaging and running the application		| Week 4 		|

---

### Visual Studio Code
- A lightweight and powerful source-code editor.
- Visit: https://code.visualstudio.com/
- Download and install for your platform.
    
  Recommended Extensions:
   - ESLint: For identifying and reporting on patterns in JavaScript.
   - Prettier: For code formatting.
   - GitHub Copilot: For AI-assisted code suggestions (if available).
   - REST Client: To directly test API endpoints within VS Code.

---

###  Git & GitHub
**Git (Version Control System)**
   - Git is required for version control and pushing code to GitHub.
     1. Visit: https://git-scm.com/downloads
     2. Download and install Git for your OS.

        To verify:
    
            git --version

**Set Up GitHub Repository**
   1. Go to https://github.com and sign in or create an account.
   2. Create a new public repository and follow on screen instructions.
   3. Clone it to your local machine using the generated code or using web URL via Github Desktop.
   
       After coding:

          git add .
          git commit -m "Initial commit"
          git push origin main

---

### Node.js & Express
   -** Node.js is a JavaScript runtime used to run backend code.**
     1. Visit: https://nodejs.org/en/download
     2. Download the LTS version for your OS.
     3. Follow the installer instructions.

        To verify installation:
    
            node -v
            npm -v

 - **Install Express (via npm)**
    - Express is a lightweight Node.js web framework.
    - Once Node.js is installed:
    
          npm install express

You’ll typically run this inside your project folder (e.g., after running npm init).

---

### Winston Logging

       npm install winston

This will enable console and file-based logging in your microservice.

---


### Postman for API Testing
   Postman is used to test your REST API endpoints.
   	1. Download from: https://www.postman.com/downloads/
   	2. After installation, open Postman and:
   	3. Click + to add request
   	4. Set request type to GET
   	5. Enter your URL like: http://localhost:3000/add?num1=2&num2=3
   	6. Hit Send and view the result

---
### Docker
   1. Go to the official Docker website: https://www.docker.com/products/docker-desktop
   2. Download Docker Desktop
   3. Choose the version that matches your operating system (Windows, macOS, or Linux).
   4. Run the installer
   5. Follow the on-screen instructions to install Docker Desktop.
   6. Launch Docker Desktop
   7. After installation, open Docker Desktop to ensure it's running correctly.
   8. You should see the Docker icon in your system tray or menu bar.
   9. Verify Installation
   10. Open a terminal or command prompt and run:

    docker --version
    
If Docker is installed correctly, it will display the version number.


---

...

9. To Be Announced



#
#
#
### (Personal Use) Setting up basic NodeJS project
    mkdir Week4
    cd Week4
    npm init -y
    npm install express winston



 ### Author & Contact
 	Joseph
 	DU S739 Student
 	SIT737 Cloud Native Application Development 
 	Australia
