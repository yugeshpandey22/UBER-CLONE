const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const BlacklistToken = require("../models/blacklistToken.model");

// Middleware to authenticate user using JWT
const auth = async (req, res, next) => {
  try {
    // 1. Token ko nikalna (ya to cookie se ya header se)
    let token = req.cookies?.token;

    if (!token && req.headers["authorization"]) {
      // Example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6..."
      token = req.headers["authorization"].split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({ message: "Unauthorized - " });
    }

    // 2. Blacklist check
    const isBlacklisted = await BlacklistToken.findOne({ token });
    if (isBlacklisted) {
      return res.status(401).json({ message: "Unauthorized - Token blacklisted" });
    }

    // 3. Token verify
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 4. User find
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ message: "Unauthorized - User not found" });
    }

    // 5. Request me user set
    req.user = user;
    req.token = token;

    next();
  } catch (err) {
    console.error("Auth Middleware Error:", err.message);
    return res.status(401).json({ message: "Unauthorized - Invalid token" });
  }
};

module.exports = auth;
