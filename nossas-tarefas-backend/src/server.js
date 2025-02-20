const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js");
const { Task } = require("./models/Task.js");
const { User } = require("./models/User.js");

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});

module.exports = app;
