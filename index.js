const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

const htmlWrite = require("./src/htmlWrite");

let manager = {};

const engineer = [];
const intern = [];


function promptEngineer() {
  inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your engineer's name?",
      },
    {
      type: "input",
      name: "id",
      message: "What is your employer ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub user name?",
    },
  ]).then(() => {
    
    engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);

    askUser()});
}

function promptIntern() {
  inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your intern's name?",
      },
    {
      type: "input",
      name: "id",
      message: "What is your employer ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    {
      type: "input",
      name: "school",
      message: "What is your school?",
    },
  ]).then(() => {
    intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    askUser()});
}

function promptManager() {
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your Team Manager's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is your employer ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the Manager's Office Number?",
    },
]).then(() => {
    manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    askUser()});

};

function askUser() {
    inquirer
  .prompt([
    {
        type: "list",
        name: "continue",
        message: "Would you like to add a member of your team?",
        choices: ["Engineer", "Intern", "Finish Building Team"],
      },
    ]).then((answers) => {
        if (answers.continue === "Finish Building Team") {
          console.log("Done!");
        } else if (answers.continue === "Engineer") {
          promptEngineer();
        } else if (answers.continue === "Intern") {
          promptIntern();
        } else {
            // htmlWrite();
            console.log("Error!");
        }
      })
};

promptManager();

//create instances of classes;
//call htmlWrite(answers);
