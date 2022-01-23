const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const allEmployees = [];

function init() {
  //creating function to call at the end of each questionare
  createTeam();
  function createTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "Which employee position will you be adding?",
          name: "addEmployee",
          choices: ["Manager", "Engineer", "Intern", "Team is complete!"],
        },
      ])
      .then((userInput) => {
        switch (userInput.addEmployee) {
          case "Manager":
            addManager();
            break;
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
        }
      });
  }

  function addManager() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the manager's name?",
          name: "managerName",
        },
        {
          type: "input",
          message: "Please input your manager's ID.",
          name: "managerId",
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is your manager's email?",
        },
        {
          type: "input",
          name: "officeNumber",
          message: " What is the manager's office number?",
        },
      ])
      .then((data) => {
        const manager = new Manager(
          data.managerName,
          data.managerId,
          data.managerEmail,
          data.officeNumber
        );
        allEmployees.push(manager);
        createTeam();
      });
  }

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the engineer's name?",
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is the engineer's ID?",
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the enginner's email?",
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "What is the engineer's GitHub address?",
        },
      ])
      .then((data) => {
        const engineer = new Engineer(
          data.engineerName,
          data.engineerId,
          data.engineerEmail,
          data.engineerGithub
        );
        allEmployees.push(engineer);
        createTeam();
      });
  }
  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the name of the intern?",
        },
        {
          type: "input",
          name: "internId",
          message: "What is the intern's ID?",
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is the email address of the intern?",
        },
        {
          type: "input",
          name: "internSchool",
          message: "What school did/does the intern attend?",
        },
      ])
      .then((data) => {
        const intern = new Intern(
          data.internName,
          data.internId,
          data.internEmail,
          data.internSchool
        );
        allEmployees.push(intern);
        createTeam();
      });
  }
}
console.log(allEmployees);
function buildHTML() {}
init();
// require manager,engineer, intern
// require inquirer const inquirer = require('inquirer')
// make a function called create Manager which asks a few questions.
//call another function  to add more employees.
//Through inquirer you
//Based on these choices, create a function for engineer.
//Consider using switch or if/else for various roles ie if they choose engineer, then run create engineer
//only create 1 manager
//all functions will be inquirer prompts
