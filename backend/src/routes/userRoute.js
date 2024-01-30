const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const userController = require("../controllers/userController");

router.post(
  "/register",
  [
    check("email", "Please include a valid email").isEmail().normalizeEmail(),
    check("password", "Password must be at least 6 characters long ").isLength({
      min: 6,
    }),
  ],
  userController.register
);

router.post(
  "/login",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  userController.login
);

router.get("/checkSession", userController.checkSession);

router.get("/logout", userController.logout);

module.exports = router;
