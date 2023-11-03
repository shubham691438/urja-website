const Medals = require("./database/medals");

exports.updateMedalInfo = async (req, res) => {
  const { branch, gold, silver, bronze, points } = req.body;
  try {
    const branchToUpdate = await Medals.findOne({ branch });
    if (branchToUpdate === null) {
      const newMedal = new Medals({
        branch,
        gold,
        silver,
        bronze,
        points,
      });
      await newMedal.save();
      res.status(201).json({ msg: "Medal Table Updated", success: true });
    } else {
      branchToUpdate.gold += gold;
      branchToUpdate.silver += silver;
      branchToUpdate.bronze += bronze;
      branchToUpdate.points += points;
      await branchToUpdate.save();
      res.status(201).json({ msg: "Medal Table Updated", success: true });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getMedalInfo = async (req, res) => {
  try {
    const medals = await Medals.find();

    if (!medals) {
      return res.status(404).json({ message: 'No medals found', success: false });
    }

    res.status(200).json({ medals, success: true });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ message: 'Internal server error', success: false });
  }
};
