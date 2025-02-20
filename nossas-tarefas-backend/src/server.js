const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js");
const taskRoutes = require("./routes/index");

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.use("/", taskRoutes);
app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});

module.exports = app;
