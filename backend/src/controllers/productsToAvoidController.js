const jsonData = require("../../public/boycott.json");

exports.getAllProducts = (req, res) => {
  res.json(jsonData);
};
