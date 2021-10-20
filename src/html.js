const fs = require("fs");

const engineerCards = [];
const internCards = [];

function htmlWrite (manager, engineers, interns) { 

function htmlManager (manager) {

return `<div class="col m-2">
<div class="card bg-light border-success" style="width: 14rem;">
    <div class="card-body text-white bg-success">
      <h4 class="card-title">${manager.name}</h4>
      <h5 class="card-text">${manager.getRole()}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${manager.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
      <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
    </ul>
    </div>
</div>
</div>`
}

function htmlEngineer (engineers) {
 
  engineers.forEach((element) => {
  engineerCards.push(`<div class="col m-2">
  <div class="card bg-light border-success" style="width: 14rem;">
      <div class="card-body text-white bg-success">
        <h4 class="card-title">${element.name}</h4>
        <h5 class="card-text">${element.getRole()}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${element.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${element.email}">${element.email}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${element.github}" target="_blank">${element.github}</a></li>
      </ul>
      </div>
  </div>
</div>`)});

}

function htmlIntern (interns) {
 
  interns.forEach((element) => {
  internCards.push(`<div class="col m-2">
            <div class="card bg-light border-success" style="width: 14rem;">
                <div class="card-body text-white bg-success">
                  <h4 class="card-title">${element.name}</h4>
                  <h5 class="card-text">${element.getRole()}</h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${element.id}</li>
                  <li class="list-group-item">Email: <a href="mailto:${element.email}">${element.email}</a></li>
                  <li class="list-group-item">School: ${element.school}</li>
                </ul>
                </div>
            </div>
        </div>`)
  });
}

htmlEngineer(engineers);
htmlIntern(interns);

const htmlInterns = internCards.join("");
const htmlEngineers = engineerCards.join("");

const htmlJoin = `${htmlManager(manager)}${htmlEngineers}${htmlInterns}`


  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Page</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
<h1 class="bg-primary text-white">
My Team
</h1>
    </header>
    <main class="container row mx-auto">
      ${htmlJoin}
    </main>
</body>
</html>
`
return fs.writeFile("dist/index.html", html, (err) => {
  if (err) {
    console.log(err);
  }
});
    
}

module.exports = htmlWrite;