

const fs = require("fs");

function htmlWrite (manager, engineers, interns) { 

// separate html bits for each type

function htmlManager (manager) {

return `<div class="col m-2">
<div class="card bg-light border-success" style="width: 14rem;">
    <div class="card-body text-white bg-success">
      <h4 class="card-title">${manager.name}</h4>
      <h5 class="card-text">${manager.getRole()}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${manager.id}</li>
      <li class="list-group-item">Email: <a href="mailto:email@example.com">${manager.email}/a></li>
      <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
    </ul>
    </div>
</div>
</div>`
}

function htmlEngineer (engineers) {
  return `<div class="col m-2">
  <div class="card bg-light border-success" style="width: 14rem;">
      <div class="card-body text-white bg-success">
        <h4 class="card-title">${engineers[0].name}</h4>
        <h5 class="card-text">${engineers[0].getRole()}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineers[0].id}</li>
        <li class="list-group-item">Email: <a href="mailto:email@example.com">${engineers[0].email}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/john-john" target="_blank">${engineers[0].github}</a></li>
      </ul>
      </div>
  </div>
</div>`
}

function htmlIntern (interns) {
  return `<div class="col m-2">
            <div class="card bg-light border-success" style="width: 14rem;">
                <div class="card-body text-white bg-success">
                  <h4 class="card-title">${interns[0].name}</h4>
                  <h5 class="card-text">${interns[0].getRole()}</h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${interns[0].id}</li>
                  <li class="list-group-item">Email: <a href="mailto:email@example.com">${interns[0].email}</a></li>
                  <li class="list-group-item">School: ${interns[0].school}</li>
                </ul>
                </div>
            </div>
        </div>`
}

//join html bits

const htmlJoin =  `${htmlManager()}${htmlEngineer()}${htmlIntern()}`

// insert into html

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
return fs.writeFile("../dist/index.html", html, (err) => {
  if (err) {
    console.log(err);
  }
});
    
}

module.exports = htmlWrite;