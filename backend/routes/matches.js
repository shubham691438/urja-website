const express = require("express");
const { addMatchInfo, getMatchesBySports } = require("../LatestMatches");

const router = express.Router();

router.get("/get-match-score", getMatchesBySports);
router.post("/add-match-score", addMatchInfo);

module.exports = router;
