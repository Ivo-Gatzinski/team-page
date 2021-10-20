const inquirer = require("inquirer");

const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

const htmlWrite = require("./src/html");

let manager = {};
const engineers = [];
const interns = [];

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
      message: "What is your engineer's employer ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your engineer's email?",
    },
    {
      type: "input",
      name: "github",
      message: "What is your engineer's GitHub user name?",
    },
  ]).then((answers) => {
    
    engineers.push(new Engineer(answers.name, answers.id, answers.email, answers.github));

    return askUser()});
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
      message: "What is your intern's employer ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your intern's email?",
    },
    {
      type: "input",
      name: "school",
      message: "What is your intern's school?",
    },
  ]).then((answers) => {
    interns.push(new Intern(answers.name, answers.id, answers.email, answers.school));
    return askUser()});
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
      message: "What is your manager's employer ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your manager's email?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the manager's Office Number?",
    },
]).then((answers) => {
    manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    return askUser()});

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
          htmlWrite(manager, engineers, interns);
        } else if (answers.continue === "Engineer") {
          promptEngineer();
        } else if (answers.continue === "Intern") {
          promptIntern();
        } else {
        console.log("Error!");
        }
      })
};

promptManager();
