const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    branch: String,
    gold: {
      type: Number,
      default: 0,
    },
    silver: {
      type: Number,
      default: 0,
    },
    bronze: {
      type: Number,
      default: 0,
    },
    points: {
      type: Number,
      default: 0,
    },
  },
  { collection: "medals" }
);

const model = mongoose.model("medals", schema);

module.exports = model;
