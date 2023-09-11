const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    sport: String,
    gender: String,
    title: String,
    team1: String,
    team2: String,
    score: String,
    result: String,
  },
  { collection: "results" }
);

const model = mongoose.model("results", schema);

module.exports = model;
