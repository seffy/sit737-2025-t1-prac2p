# Week 4 - Containerisation of My Web Application

For this assignment, I have used my own web application to demonstrate the containerisation process using Docker and Docker Compose.

## Overview

This project focuses on the containerisation of a simple web application. The key tasks include:

- Building a Docker image for the web application.
- Configuring a Docker Compose file to manage the application and its associated services.
- Implementing health checks to ensure the application is running as expected.
- Pushing the Docker image to Docker Hub for further deployment and distribution.

## Accessing the Web Application

Since I used my own web application for this task, you can view and access the source code at the following GitHub repository:

[https://github.com/seffy/sit737hirebuddy](https://github.com/seffy/sit737hirebuddy)

Feel free to explore the repository for further details on the implementation, configurations, and additional documentation.

## What’s Included

- **Dockerfile:** Defines the image build process and exposes the required port.
- **docker-compose.yml:** Orchestrates the application services, including health checks.
- **Health Check Configuration:** Ensures the application remains responsive.
- **Documentation:** Detailed explanations of each step are provided within the repository.

## How to Run Locally

1. Clone the repository:

        git clone https://github.com/seffy/sit737hirebuddy.git

2. Navigate to the project directory:

        cd sit737hirebuddy

3. Build and run the application using Docker Compose:

        docker-compose up --build
        
4. Access the application in your browser at http://localhost:7017.

I had a lot of fun working on this task and learned a great deal about Docker, container orchestration, and health check integration. Enjoy exploring the repository!

