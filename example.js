const fs = require("fs");
const Truck = require("./lib/Truck");
const Car = require("./lib/Car");

const listings = [
  new Car("Subaru", "Forester", "Red", 4),
  new Truck("Toyota", "Tundra", "White", true),
  new Car("Honda", "Accord", "White", 4),
  new Truck("Ford", "F150", "Blue", false),
];

function renderCarCard(car) {
  return `<div class="card">
      <h2>${car.getMake()} 🚗</h2>
      <p>Model: ${car.getModel()}</p>
      <p>Color: ${car.getColor()}</p>
      <p>Doors: ${car.getDoors()}</p>
    </div>`;
}

function renderTruckCard(truck) {
  return `<div class="card">
      <h2>${truck.getMake()} 🚚</h2>
      <p>Model: ${truck.getModel()}</p>
      <p>Color: ${truck.getColor()}</p>
      ${truck.getHasCamperShell() ? "<p>Has a camper shell.</p>" : ""}
    </div>`;
}

function renderCard(vehicle) {
  // if vehicle type is truck
  switch (vehicle.getType()) {
    case "Truck":
      return renderTruckCard(vehicle);
    case "Car":
      return renderCarCard(vehicle);

    default:
      return "";
  }
}

function renderHtml(vehicles) {
  console.log("vehicles", vehicles);
  const cards = vehicles.map((vehicle) => renderCard(vehicle));
  console.log("cards", cards);

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
  
      <style>
        .container,
        h1 {
          max-width: 960px;
          display: flex;
          flex-wrap: wrap;
          margin: 0 auto;
        }
  
        .card {
          flex: 1 0 33.33%;
        }
      </style>
    </head>
    <body>
      <h1>Listings</h1>
      <div class="container">
        ${cards.join("")}
      </div>
    </body>
  </html>
  `;
}

const html = renderHtml(listings);
fs.writeFile("index.html", html, (err) => {
  if (err) {
    console.log(err);
    return;
    0;
  }
  console.log("Success!!");
});