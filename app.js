const bodyParser = require("body-parser");
const express = require("express");
const resorts = require("./routes/resorts");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("it's me hi");
});

app.listen(4000, () => {
  console.log("listening on port 4000");
});

app.use("/", resorts, (req, res) => {
  res.send("calling resorts is verifing your answer");
});
