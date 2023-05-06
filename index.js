const inquirer = require("inquirer");
// require inquirer 
require('console.table');

const employeeDb = require ('./db/queries');

const userPrompts = [
  {
    type: 'list',
    name: 'menuChoice',
    message: 'What do you want to do?',
    choices: [
      {
        name: 'View All Departments',
        value: 1
      },
      {
        name: 'View All Roles',
        value: 2
      },
      {
        name: 'View All Employees',
        value: 3
      },
      {
        name: 'Add Department',
        value: 4
      },
      {
        name: 'Add Role',
        value: 5
      },
      {
        name: 'Add Employee',
        value: 6
      },
      {
        name: 'Update Employee Role',
        value: 7
      },
      {
        name: 'Quit',
        value: 8
      }
    ]
  }
];
