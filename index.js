const inquirer = require("inquirer");
const fs = require("fs");
// const htmlWrite = require("./src/html");

//ask user for info

function promptEngineer() {
  inquirer.prompt([
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
  ]);
}

function promptIntern() {
  inquirer.prompt([
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
  ]);
}

// function promptUser() {
//     promptFirst()
//     .then(() => promptManager())
//     .then(() => promptContinue())
//     .then(() => promptRest())
//     .catch((err) => console.error(err));

// }

// promptUser().then(() => {
//   if (answers.continue === "Finish Building Team") {
//     console.log("Done!");
//   } else if (answers.continue === "Engineer") {
//     promptEngineer();
//   } else if (answers.continue === "Intern") {
//     promptIntern();
//   } else {
//     console.log("Now What?");
//   }
// });

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
    {
      type: "checkbox",
      name: "continue",
      message: "Would you like to add a member of your team?",
      choices: ["Engineer", "Intern", "Finish Building Team"],
    },
  ])
  .then((answers) => {
    if (answers.continue === "Finish Building Team") {
      console.log("Done!");
    } else if (answers.continue === "Engineer") {
      promptEngineer();
    } else if (answers.continue === "Intern") {
      promptIntern();
    } else {
      console.log("Now What?");
    }
  });

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

//send info to html
//call htmlWrite
