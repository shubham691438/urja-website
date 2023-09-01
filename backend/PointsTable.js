const Medals = require("./database/medals");

const pointsTable = async (req, res) => {
  const data = await Medals.find({}).sort({
    points: 1,
    gold: 1,
    silver: 1,
    bronze: 1,
  });
  res.status(200).send({
    data,
  });
};

module.exports = pointsTable;
