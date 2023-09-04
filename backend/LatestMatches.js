const Results = require("./database/results");

const latestMatches = async (req, res) => {
  //   const d = await Results.insertMany([
  //     {
  //       sport: "sport",
  //       gender: "m",
  //       matchTitle: "gf",
  //       team1: "t1",
  //       team2: "t2",
  //       score: "s1",
  //       result1: "r1",
  //       result2: "r2",
  //     },
  //   ]);
  const ans = await Results.find({});
  const data = ans.slice(-5);
  res.status(200).send({
    data,
  });
};

module.exports = latestMatches;
