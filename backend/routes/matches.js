const express = require("express");
const {
  addMatchInfo,
  getMatchesBySports,
  latestMatches,
} = require("../LatestMatches");

const router = express.Router();

router.post("/get-match-score", getMatchesBySports);
router.post("/add-match-score", addMatchInfo);
router.get("/latestMatches", latestMatches);

module.exports = router;
