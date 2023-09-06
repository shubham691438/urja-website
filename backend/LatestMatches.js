const Results = require("./database/results");

exports.addMatchInfo = async (req, res) => {
  const { sport, gender, matchTitle, team1, team2, score, result } = req.body;

  const newMatch = new Results({
    sport,
    gender,
    matchTitle,
    team1,
    team2,
    score,
    result,
  });

  await newMatch.save();
  res.status(201).json({ msg: "Match added successfully", success: true });
};

exports.getMatchesBySports = async (req, res) => {
  const { sport } = req.params;

  const ans = await Results.find({ sport });
  res.status(200).json({
    data: ans,
    success: true,
  });
};
