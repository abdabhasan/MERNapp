const express = require("express");
const router = express.Router();
const professionalController = require("../controllers/professionalController");
const upload = require("../middlewares/uploadMiddleware");
const generateUniqueName = require("../middlewares/generateUniqueName");

// router.get("/", professionalController.getProfessional);
// router.get("/:id", professionalController.getProfessionalById);
router.post(
  "/",
  upload.single("bg"),
  generateUniqueName,
  professionalController.addProfessional
);

module.exports = router;
