const express = require("express");
const { getMedalInfo, updateMedalInfo } = require("../medals");

const router = express.Router();

router.get("/get-medal-table", getMedalInfo);
router.post("/update-medal-table", updateMedalInfo);

module.exports = router;
