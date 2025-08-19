const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const userController = require("../controllers/user.controller");
const auth = require("../middlewares/auth.middleware");

// Middleware to check validation results
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
};

// ========================= REGISTER ROUTE =========================
router.post(
  "/register",
  [
    body("firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("lastname")
      .isLength({ min: 3 })
      .withMessage("Last name must be at least 3 characters long"),
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  validate, // <-- add validation check here
  userController.registerUser
);

// ========================= LOGIN ROUTE =========================
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  validate, // <-- add validation check here
  userController.loginUser
);

// ========================= GET PROFILE ROUTE =========================
router.get("/profile", auth, userController.getProfile);

module.exports = router;
