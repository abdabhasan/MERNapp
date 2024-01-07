const express = require("express");
const router = express.Router();
const businessController = require("../controllers/businessController");
const upload = require("../middlewares/upload");

router.get("/businesses", businessController.getBusinesses);
router.post(
  "/businesses",
  upload.single("image"),
  businessController.addBusiness
);

module.exports = router;
