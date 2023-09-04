const Results = require("./database/results");

const matches = async (req, res) => {
  const sport = req.body.sport;
  let male = await Results.find({ sport, gender: "m" });
  let female = await Results.find({ sport, gender: "f" });
  console.log(male);
  male = male.reverse();
  female = female.reverse();
  res.status(200).send({
    male,
    female,
  });
};

module.exports = matches;
