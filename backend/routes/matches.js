const express = require("express");
const { addMatchInfo, getMatchesBySports,addUpcommingMatch,getUpcommingMatchesBySports } = require("../LatestMatches");

const router = express.Router();

router.get("/get-match-score/:sport", getMatchesBySports);
router.post("/add-match-score", addMatchInfo);

router.post("/add-upcomming-match",addUpcommingMatch)
router.get("/get-upcomming-matches/:sport",getUpcommingMatchesBySports)

module.exports = router;
