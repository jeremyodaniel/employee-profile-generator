const inquirer = require('inquirer');

var employees = [];
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern= require("./lib/Intern");

const employeeQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "What is the employee's name? ",
  },
  {
    type: 'input',
    name: 'id',
    message: "What is the employee's id? ",
  },
  {
    type: 'input',
    name: 'email',
    message: "What is the employee's email? ",
  },
];

const managerQuestions = [
  // spread operator
  ...employeeQuestions,

  {
    type: 'input',
    name: 'officeNumber',
    message: "What is the manager's office number? ",
  },
];

const engineerQuestions = [
  ...employeeQuestions,

  {
    type: 'input',
    name: 'github',
    message: "What is the engineer's Github? ",
  },
];		

const internQuestions = [
  ...employeeQuestions,

  {
    type: 'input',
    name: 'school',
    message: "What was the intern's school? ",
  },
];		

function createManager() {
	inquirer.prompt(managerQuestions)
		.then(function(data) {
      const manager = new Manager(
        data.name, data.id, data.email, data.officeNumber 
        )
        employees.push(manager);
        console.log(employees);
          createNewTeamMember();

		})
};

function createEngineer() {
  inquirer.prompt(engineerQuestions)
		.then(function(data) {
      const engineer = new Engineer(
        data.name, data.id, data.email, data.github 
      )
      employees.push(engineer);
        createNewTeamMember();
		})
};

function createIntern() {
  inquirer.prompt(internQuestions)
		.then(function(data) {
      const intern = new Intern(
        data.name, data.id, data.email, data.school 
      )
      employees.push(intern);
        createNewTeamMember();
		})
};

function createNewTeamMember() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'employeeType',
      choices: ['Intern', 'Engineer', 'quit']
    },
  
  ])
		.then(function(data) {
      if (data.employeeType === 'Intern') {
        createIntern();
      }
      if (data.employeeType === 'Engineer') {
        createEngineer();
      }
		})
};


createManager();