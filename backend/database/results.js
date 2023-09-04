const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    sport: String,
    gender: String,
    matchTitle: String,
    team1: String,
    team2: String,
    score: String,
    result1: String,
    result2: String,
  },
  { collection: "results" }
);

const model = mongoose.model("results", schema);

module.exports = model;
