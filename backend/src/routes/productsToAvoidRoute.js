const express = require("express");
const router = express.Router();
const productsToAvoidController = require("../controllers/productsToAvoidController");

router.get("/", productsToAvoidController.getAllProducts);

module.exports = router;
