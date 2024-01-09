const express = require("express");
const router = express.Router();
const businessController = require("../controllers/businessController");

router.get("/businesses", businessController.getBusinesses);
router.get("/businesses/:id", businessController.getBusinessById);

router.post("/businesses", businessController.addBusiness);

module.exports = router;
