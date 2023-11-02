const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    sport: String,
    gender: String,
    matchTitle:String,
    team1: String,
    team2: String,
    date: Date,
    time: String,
    location:String,
    createdAt: {
      type: Date,
      default: Date.now
    }
    
  },
  { collection: "upcommingMatch" }
);

const model = mongoose.model("upcommingMatch", schema);

module.exports = model;
