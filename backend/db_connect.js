const mongoose = require("mongoose");
const medals = require("./database/medals");

const db_connect = async () => {
  try {
    const conn = await mongoose.connect(process.env.URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};
module.exports = db_connect;
