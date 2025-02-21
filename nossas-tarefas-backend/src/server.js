const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js");
const taskRoutes = require("./routes/index");
const authRoutes = require("./routes/index");

require("dotenv").config();

const http = require("http");
const { initSocket } = require("./config/socket");
const app = express();
const server = http.createServer(app);
const io = initSocket(server);

app.use(express.json());
app.use(cors());

connectDB();

app.use("/", taskRoutes);
app.use("/", authRoutes);

server.listen(process.env.PORT, () => {
  console.log(`Server running at ${process.env.BACKEND_URL}`);
});

module.exports = { app, io };
