const express = require("express");
const router = express.Router();

const jsonData = require("../../public/boycott.json");

router.get("/", (req, res) => {
  res.json(jsonData);
});

module.exports = router;
