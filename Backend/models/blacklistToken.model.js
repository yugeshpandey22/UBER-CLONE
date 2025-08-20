const mongoose = require("mongoose");

const blacklistTokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
      unique: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      expires: 60 * 60 * 24, // 24 hours (in seconds)
    },
  },
//  { timestamps: true }
);

const BlacklistToken = mongoose.model("BlacklistToken", blacklistTokenSchema);


