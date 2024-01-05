const express = require("express");
const router = express.Router();

const groceryList = [
  {
    item: "milk",
    quantity: 4,
  },
  {
    item: "apple",
    quantity: 4,
  },
];

router.get("/", (req, res) => {
  res.send(groceryList);
});

router.get("/:item", (req, res) => {
  const { item } = req.params;
  const groceryItem = groceryList.find((g) => g.item === item);

  res.send(groceryItem);
});

router.post("/", (req, res) => {
  console.log(req.body);
  groceryList.push(req.body);
  res.sendStatus(201);
});

module.exports = router;
