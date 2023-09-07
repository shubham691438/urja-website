const express = require("express");
const { addWinner, getWinner } = require("../winners");

const router = express.Router();

router.post("/get-winner", getWinner);
router.post("/add-winner", addWinner);

module.exports = router;
