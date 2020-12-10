var express = require("express");

var PORT = process.env.PORT || 8080;
var path = require("path");
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var handlebars = require("express-handlebars");

app.engine(
  "handlebars",
  handlebars({
    defaultLayout: "main",
    partialsDir: ["views/partials/"],
  }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
