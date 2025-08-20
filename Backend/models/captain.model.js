const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const captainSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      minlength: 3,
    },
    lastname: {
      type: String,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
     match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],},
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    socketId: {
      type: String,
      default: null, // real-time connection ke liye
    },
    status: {
      type: String,
      enum: ["active", "inactive", ],
      default: "inactive", // default status
    },
    vehicle: {
      type: String,
      required: true, // e.g. "Honda City"
      minlength: 3 ,
    },
    location: {
        lat:{
        type: Number,
        },
        lng:{
        type: Number,
        }
    },
    plate: {
      type: String,
      required: true, // e.g. "UP14AB1234"
      minlength: 3,
    },
    capacity: {
      type: Number,
      required: true, // e.g. 4 seats
      min: 1,
    },
    vehicleType: {
      type: String,
      enum: ["car", "bike", "auto"],
      required: true,
    },
  },
  { timestamps: true }
);

const Captain = mongoose.model("Captain", captainSchema);

module.exports = Captain;




captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id: this._id }, process.env.JWT_SECRET, {expiresIn: "24h" });
    return token;
  }
  captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
  };

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  }