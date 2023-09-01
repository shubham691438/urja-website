const express = require("express");
const app = express();
const port = 5000;
const db_connect = require("./db_connect");
const cors = require("cors");
require("dotenv").config();
const pointsTable = require("./PointsTable");

app.use(cors());
app.use(express.json());
db_connect();

app.get("/points", pointsTable);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
