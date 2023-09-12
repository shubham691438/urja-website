const Results = require("./database/results");
const UpcommingMatches=require("./database/upcommingMatch");

exports.addMatchInfo = async (req, res) => {
  const { sport, gender, matchTitle, team1, team2, score, result } = req.body;
  let x = await Results.findOne({ sport, gender, matchTitle, team1, team2 });
  if (x != null) {
    x.score = score;
    x.result = result;
    await x.save();
    res
      .status(201)
      .json({ msg: "Match score updated successfully", success: true });
    return;
  }

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
  console.log(sport)

  const ans = await Results.find({ sport });
  res.status(200).json({
    data: ans,
    success: true,
  });
};

exports.addUpcommingMatch = async (req, res) => {
  const { sport, gender, matchTitle, team1, team2, date, time,location } = req.body;
  let x = await UpcommingMatches.findOne({ sport, gender, matchTitle, team1, team2 });
  if (x != null) {
    x.date = date;
    x.time = time;
    x.location=location;
    await x.save();
    res
      .status(201)
      .json({ msg: "Match updated successfully", success: true });
    return;
  }

  const newMatch = new UpcommingMatches({
    sport,
    gender,
    matchTitle,
    team1,
    team2,
    date,
    time,
    location,
  });

  await newMatch.save();
  res.status(201).json({ msg: "Match added successfully", success: true });
};

exports.getUpcommingMatchesBySports = async (req, res) => {
  const { sport } = req.params;
  console.log(sport)

  const ans = await UpcommingMatches.find({ sport });
  res.status(200).json({
    data: ans,
    success: true,
  });
};


