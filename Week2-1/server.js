const express = require('express');
const app = express();
const port = 3000;

const winston = require('winston');

// Logger setup
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'calculator-microservice' },
  transports: [
    new winston.transports.Console({ format: winston.format.simple() }),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

// Helper function
const calculate = (req, res, operation) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    logger.error('Invalid input parameters', { num1, num2 });
    return res.status(400).json({ error: 'Invalid numbers provided.' });
  }

  let result;
  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      if (num2 === 0) {
        logger.error('Division by zero');
        return res.status(400).json({ error: 'Cannot divide by zero.' });
      }
      result = num1 / num2;
      break;
  }

  logger.info(`Operation: ${operation} | ${num1} ${operation} ${num2} = ${result}`);
  res.json({ result });
};

// Endpoints
app.get('/add', (req, res) => calculate(req, res, 'add'));
app.get('/subtract', (req, res) => calculate(req, res, 'subtract'));
app.get('/multiply', (req, res) => calculate(req, res, 'multiply'));
app.get('/divide', (req, res) => calculate(req, res, 'divide'));

app.listen(port, () => {
  logger.info(`Calculator microservice listening at http://localhost:${port}`);
});
