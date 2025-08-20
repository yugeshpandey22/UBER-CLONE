const Captain = require("../models/captain.model");
const bcrypt = require("bcryptjs");

// ✅ Register Captain
module.exports.createCaptain = async (data) => {
  const { fullName, email, password, vehicle, plate, capacity, vehicleType } = data;

  if (!fullName || !email || !password || !vehicle || !plate || !capacity || !vehicleType) {
    throw new Error("All fields are required");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new captain
  const captain = await Captain.create({
    fullName,
    email,
    password: hashedPassword,
    vehicle,      // object { name, color }
    plate,
    capacity,
    vehicleType,
  });

  return captain;
};
