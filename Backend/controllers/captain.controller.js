const Captain = require("../models/captain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");

exports.registerCaptain = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullName, email, password, vehicle, plate, capacity, vehicleType } = req.body;

    const isCaptainExists = await Captain.findOne({ email });
    if (isCaptainExists) {
      return res.status(400).json({ message: "Captain already exists" });
    }

    const captain = await captainService.createCaptain({
      fullName,
      email,
      password,
      vehicle,
      plate,
      capacity,
      vehicleType,
    });

    const token = captain.generateAuthToken(); // ensure model me method ho

    res.status(201).json({ token, captain });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
