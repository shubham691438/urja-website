const express = require("express");
const app = express();
const port = 5000;
const db_connect = require("./db_connect");
const cors = require("cors");
require("dotenv").config();
const matchRoute = require("./routes/matches");
const medalRoute = require("./routes/medals");

app.use(cors());
app.use(express.json());
db_connect();

app.use("/matches", matchRoute);
app.use("/medals", medalRoute);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
