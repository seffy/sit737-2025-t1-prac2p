
# Week 3: Advanced Calculator Microservice 

## Overview

This week’s task enhances the calculator microservice by adding support for advanced arithmetic operations such as **Exponentiation**, **Square Root**, and **Modulo**. These operations are accessible through dedicated API endpoints, with input validation and Winston-based logging implemented to ensure reliability and maintainability.

---

## Tools Used

- Node.js
- Express.js
- Winston (for logging)
- Visual Studio Code
- Git & GitHub
- Postman (for testing)

---

## Getting Started - How to Run 

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
Server will run at: http://localhost:3000


## API Endpoints

| Operation | Endpoint | Description | 
|-----------|----------|--------------| 
Exponentiation | /power?num1=2&num2=3 | Calculates 2 raised to the power of 3 = 8| 
Square Root | /sqrt?num1=9 |  Calculates the square root of 9 = 3 | 
Modulo | /mod?num1=10&num2=3 | Calculates 10 % 3 = 1| 
Addition | /add?num1=4&num2=2 |  Adds 4 + 2 = 6 | 
Subtraction | /subtract?num1=4&num2=2 | Subtracts 4 - 2 = 2 | 
Multiplication | /multiply?num1=4&num2=2 | Multiplies 4 * 2 = 8 | 
Division | /divide?num1=4&num2=2 | Divides 4 / 2 = 2 | 


## Test Using Postman or Browser
You can test the API endpoints by sending GET requests using:
- Postman (recommended)
- Your web browser (for basic GET calls)


#
#
#
## Read more:

### Set up Working environment 
- If you haven’t already, please refer to the README.md in the homepage for instructions on how to set up the required tools.
https://github.com/seffy/sit737-2025-t1-prac2p/blob/main/README.md


