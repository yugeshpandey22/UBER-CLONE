const express = require("express");
const router = express.Router();
const captainController = require("../controllers/captain.controller");
const { body } = require("express-validator");

// Register captain
router.post(
  "/register",
  [
    body("fullName")
      .isLength({ min: 3 })
      .withMessage("Full name must be at least 3 characters long"),
    body("email").isEmail().withMessage("Invalid email address"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
    body("vehicle.name")
      .isLength({ min: 2 })
      .withMessage("Vehicle name is required"),
    body("vehicle.color")
      .isLength({ min: 2 })
      .withMessage("Vehicle color is required"),
    body("plate")
      .isLength({ min: 3 })
      .withMessage("Plate number is required"),
    body("capacity")
      .isInt({ min: 1 })
      .withMessage("Capacity must be at least 1"),
    body("vehicleType")
      .isIn(["car", "bike", "auto"])
      .withMessage("Vehicle type must be car, bike, or auto"),
  ],
  captainController.registerCaptain
);

module.exports = router;
