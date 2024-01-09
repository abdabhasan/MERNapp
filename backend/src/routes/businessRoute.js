const express = require("express");
const router = express.Router();
const businessController = require("../controllers/businessController");

const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

router.get("/businesses", businessController.getBusinesses);
router.post(
  "/businesses",
  upload.single("image"),
  businessController.addBusiness
);

module.exports = router;
