const express = require("express");
const router = express.Router();
const businessController = require("../controllers/businessController");
const upload = require("../middlewares/uploadMiddleware");
const generateUniqueName = require("../middlewares/generateUniqueName");

router.get("/", businessController.getBusinesses);
router.get("/:id", businessController.getBusinessById);
router.post(
  "/",
  upload.single("bg"),
  generateUniqueName,
  businessController.addBusiness
);

module.exports = router;
