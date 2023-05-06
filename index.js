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

const createDepart = [
  {
    type: 'input',
    name: 'newDepart',
    message: 'Enter the name of the new department'
  }
];

function firstProm() {
  menu = () => {
    inquirer.prompt(userPrompts)
      .then(answer => {
        switch(answer.menuChoice) {
          case 1:
            listDepart()
            break;
          case 2: 
            listRoles()
            break;
          case 3: 
            listEmployees()
            break;
          case 4:
            addDepart()
            break;
          case 5:
            addRole()
            break;
          case 6:
            addEmployee()
            break;
          case 7:
            updateEmployee()
            break;
          case 8:
            employeeDb.connect.end();
            break;
        }
      })
  }
}