//require the data - drinks.js + food.js --> use an array to store multipule datatypes (line 11)
const drinksData = require("../data/drinks");
const foodData = require("../data/food");

// matching the property name with the connection of the route
// callback functions

// expose the handlers
// this is one big object with a bunch of functions inside (the values are functions)
module.exports = {
  // property = name it based on what it does for you
  // value = the function aka the callback
  all_menu: (req, res) => {
    // render the data and the ejs file for this route
    res.render("pages/menu", {
      // property = this is how ejs accesses the data
      // value = the ACTUAL data in this page
      drinksData: drinksData,
      foodData: foodData
    });
  },
  menu_item: (req, res) => {
    // params are placeholders which provide us with additional information
    // request object (req)contains property called "params" with information
    let id = req.params._id;
    console.log(req.params);
    console.log(id);
    res.render("pages/menu-item", {});
  }
};
