const express = require("express");
const router = express.Router();
const businessController = require("../controllers/businessController");

router.get("/", businessController.getBusinesses);
router.get("/:id", businessController.getBusinessById);

router.post("/", businessController.addBusiness);

module.exports = router;
