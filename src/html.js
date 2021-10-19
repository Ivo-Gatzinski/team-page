

const fs = require("fs");

function htmlWrite (manager, engineers, interns) { 

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
        <div class="col m-2">
            <div class="card bg-light border-success" style="width: 14rem;">
                <div class="card-body text-white bg-success">
                  <h4 class="card-title">John</h4>
                  <h5 class="card-text">Manager</h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: 1</li>
                  <li class="list-group-item">Email: <a href="mailto:email@example.com">john@john.com</a></li>
                  <li class="list-group-item">Office Number: 1</li>
                </ul>
                </div>
            </div>
        </div>
        <div class="col m-2">
            <div class="card bg-light border-success" style="width: 14rem;">
                <div class="card-body text-white bg-success">
                  <h4 class="card-title">John</h4>
                  <h5 class="card-text">Engineer</h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: 2</li>
                  <li class="list-group-item">Email: <a href="mailto:email@example.com">john@john.com</a></li>
                  <li class="list-group-item">GitHub: <a href="https://github.com/john-john" target="_blank">john-john</a></li>
                </ul>
                </div>
            </div>
        </div>
        <div class="col m-2">
          <div class="card bg-light border-success" style="width: 14rem;">
              <div class="card-body text-white bg-success">
                <h4 class="card-title">John</h4>
                <h5 class="card-text">Engineer</h5>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: 3</li>
                <li class="list-group-item">Email: <a href="mailto:email@example.com">john@john.com</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/john-john" target="_blank">john-john</a></li>
              </ul>
              </div>
          </div>
      </div>
      <div class="col m-2">
        <div class="card bg-light border-success" style="width: 14rem;">
            <div class="card-body text-white bg-success">
              <h4 class="card-title">John</h4>
              <h5 class="card-text">Engineer</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: 4</li>
              <li class="list-group-item">Email: <a href="mailto:email@example.com">john@john.com</a></li>
              <li class="list-group-item">GitHub: <a href="https://github.com/john-john" target="_blank">john-john</a></li>
            </ul>
            </div>
        </div>
    </div>
        <div class="col m-2">
            <div class="card bg-light border-success" style="width: 14rem;">
                <div class="card-body text-white bg-success">
                  <h4 class="card-title">John</h4>
                  <h5 class="card-text">Intern</h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: 5</li>
                  <li class="list-group-item">Email: <a href="mailto:email@example.com">john@john.com</a></li>
                  <li class="list-group-item">School: John University</li>
                </ul>
                </div>
            </div>
        </div>
    </main>
</body>
</html>
`
return fs.writeFile("../dist/index.html", html);
    
}

//get info from index
//write html


module.exports = htmlWrite;