// list all the starting endpoints we can receive (list of possible destinations)

// Require any other js file or dependencies NEEDED in THIS file
// We need to require the js files and dependencies even though they are in app.js because
// every file is on its own until we expose it to other files using module.exports
// express is the glue that connects one js file to another
const express = require("express");
const router = express.Router(); //Router is a constructor function
//we need more routes pages in the routes folder
const siteRouter = require("./siteRouter");
const menuRouter = require("./menuRouter");
const reservationRouter = require("./reservationRouter");

// TABLE OF CONTEXT (CONTENTS?)
// Middleware to say, these routes are the starting points of the URL
// which will lead you to the rest of the path
// these are the routes that exist in our application
// router.use("/", siteRouter);
router.use("/menu", menuRouter);
// router.use("/reservation", reservationRouter);

// EXPOSE the routes to the application
// expose routes with module.exports to export info to rest of js files

// <3
module.exports = router;
