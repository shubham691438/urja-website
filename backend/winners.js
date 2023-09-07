const Winners = require("./database/winners");

exports.addWinner = async (req, res) => {
  try {
    const { branch, sport, gender, position } = req.body;
    const obj = new Winners({
      branch,
      sport,
      gender,
      position,
    });
    await obj.save();
    res.status(201).json({
      msg: "winner data added",
      success: true,
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

exports.getWinner = async (req, res) => {};
