const express = require("express");
const router = express.Router();

const supermarkets = [
  { id: 1, store: "shok", miles: 4 },
  { id: 2, store: "bim", miles: 1 },
  { id: 3, store: "migros", miles: 2 },
];

router.get("", (req, res) => {
  const { miles } = req.query;
  const parsedMiles = parseInt(miles);
  console.log("miles : ", miles);
  console.log("Parsed : ", parsedMiles);
  if (!isNaN(parsedMiles)) {
    const filteredStores = supermarkets.filter((s) => s.miles <= parsedMiles);
    res.send(filteredStores);
  } else res.send(supermarkets);
});

module.exports = router;
