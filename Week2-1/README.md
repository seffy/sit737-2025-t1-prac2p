# Week 2: Calculator Microservice

## Overview

A Node.js microservice that performs basic arithmetic operations (add, subtract, multiply, divide) via REST API.

---

## Tools Used

- Node.js
- Express.js
- Winston (for logging)

---

## Getting Started

### 1. Clone the Repository

    git clone https://github.com/seffy/sit737-2025-t1-prac2p/Week2-1
    cd Week2-1


### 2. Install Dependencies

    npm install

### 3. Start the Server

    node server.js


## API Endpoints

| Operation      | Method | Example                                  |
|----------------|--------|------------------------------------------|
| Addition       | GET    | `/add?num1=4&num2=2`                     |
| Subtraction    | GET    | `/subtract?num1=4&num2=2`                |
| Multiplication | GET    | `/multiply?num1=4&num2=2`                |
| Division       | GET    | `/divide?num1=4&num2=2`                  |


## Sample Response

    {
      "result": 6
    }


## Logging with Winston
Logs are stored in the logs directory for easy monitoring and troubleshooting:

| Log File          | Description                   | 
|-------------------|-------------------------------|
| logs/combined.log | All operations and activities |  
| logs/error.log    | Errors and invalid operations |

To watch logs in real-time:

    tail -f logs/combined.log





#
#
#
## Additional Resources:

### Set up Working environment 
- If you haven’t already, please refer to the README.md in the homepage for instructions on how to set up the required tools.
https://github.com/seffy/sit737-2025-t1-prac2p/blob/main/README.md
