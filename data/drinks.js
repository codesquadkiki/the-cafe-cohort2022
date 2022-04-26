const { v4: uuid } = require("uuid"); // v4 = verison 4, adding ":uuid" renames it (can rename to anything that makes more sense to you)

module.exports = [
  {
    _id: uuid(),
    item: "Coffee",
    description: "Regular coffee",
    price: "2.50"
  },
  {
    _id: uuid(),
    item: "Chocolato",
    description: "Chocolate espresso with milk",
    price: "4.50"
  },
  {
    _id: uuid(),
    item: "Corretto",
    description: "Whiskey and coffee",
    price: "5.00"
  },
  {
    _id: uuid(),
    item: "Iced tea",
    description: "Hot tea, except not hot",
    price: "3.00"
  },
  {
    _id: uuid(),
    item: "Soda",
    description: "Coke, Sprite, Fanta, etc",
    price: "2.50"
  }
];
