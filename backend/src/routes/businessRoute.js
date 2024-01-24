const express = require("express");
const router = express.Router();
const businessController = require("../controllers/businessController");
// const upload = require("../middlewares/uploadMiddleware");

router.get("/", businessController.getBusinesses);
router.get("/:id", businessController.getBusinessById);
// router.post("/", upload.single("image"), businessController.addBusiness);
router.post("/", businessController.addBusiness);

module.exports = router;
