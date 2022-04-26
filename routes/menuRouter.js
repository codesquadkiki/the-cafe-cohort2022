// Require any other js file or dependencies NEEDED in THIS file
const express = require("express");
const menuCtrl = require("../controllers/menuCtrl");
const router = express.Router();

// continuing with the routes BEYOND what was stated in the index.js
// http://localhost:8080/menu/
//This isn't '/menu' because '/menu' is already defined in index.js
router.route("/").get(menuCtrl.all_menu);

// http://localhost:8080/menu/2039480239-34972394728-9387492
router.route("/:_id").get(menuCtrl.menu_item);

// menu_item
// bread_basket

// EXPOSE the routes to the application
// expose routes with module.exports to export info to rest of js files
module.exports = router;

// ROUTER tells you WHERE TO GO in the CONTROLLER (leads you there)
// this is a way to organize the information that's intuitive
