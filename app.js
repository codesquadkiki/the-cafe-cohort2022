// Require all dependencies in order for our appliction to work
const express = require("express");
const path = require("path");
const methodOverride = require("method-override"); // this allows delete, edit, etc.
const app = express();
const morgan = require("morgan");
const PORT = 8080; // number data-type (codesandbox.io uses 8080)
// require index route so that our app knows where to go (connects app.js to index.js (which is exposing the routes))
const routes = require("./routes/index");

// Configure the application to know which server language its using
app.set("view engine", "ejs");

// Middleware
app.use(morgan("dev")); // combined, dev, etc.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("X-HTTP-Method-Override"));
app.use(routes);

// Tell the application where are the routes
// v This is a way to test that the server works v
// app.get("/", (request, response) => {
//   response.send("we're DOINT it");
// });
// hail to the QueenBoo // HA
// Y'all are the bomb - Kit
// Run our server

app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
});
