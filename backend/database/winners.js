const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    branch: String,
    sport: String,
    gender: String,
    position: Number,
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  { collection: "winners" }
);

const model = mongoose.model("winners", schema);

module.exports = model;
