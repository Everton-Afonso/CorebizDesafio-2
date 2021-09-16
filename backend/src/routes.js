const express = require('express');

const employeeController = require('./controllers/EmployeeController');

const routes = express.Router();

routes.get('/employee', employeeController.index);
routes.post('/employee', employeeController.create);

module.exports = routes;
