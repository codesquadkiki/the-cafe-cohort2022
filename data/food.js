const { v4: uuid } = require("uuid");

// Yes? YAAAASSSSSS YOU GO GURL
module.exports = [
  {
    _id: uuid(),
    item: "Bread Basket",
    description: "Assortment of fresh baked fruit breads and muffins",
    price: "5.50"
  },
  {
    _id: uuid(),
    item: "Honey Almond Granola with Fruits",
    description:
      "Natural cereal of honey toasted oats, raisins, almonds and dates",
    price: "7.00"
  },
  {
    _id: uuid(),
    item: "Belgian Waffle",
    description: "Vanilla flavored batter with malted flour",
    price: "7.50"
  },
  {
    _id: uuid(),
    item: "Scrambled eggs",
    description:
      "Scrambled eggs, roasted red pepper and garlic, with green onions",
    price: "7.50"
  },
  {
    _id: uuid(),
    item: "Blueberry Pancakes",
    description: "With syrup, butter and lots of berries",
    price: "8.50"
  }
];
