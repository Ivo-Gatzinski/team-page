const inquirer = require("inquirer");
const fs = require("fs");
// const htmlWrite = require("./src/htmlWrite");

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
      name: "gitHub",
      message: "What is your GitHub user name?",
    },
  ]).then(() => {askUser()});
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
  ]).then(() => {askUser()});
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
]).then(() => {askUser()});

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
            console.log("Error!");
        }
      })
};

promptManager();

//call htmlWrite(answers);
