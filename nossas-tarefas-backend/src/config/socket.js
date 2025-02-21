const socketIo = require("socket.io");

let io;

function initSocket(server) {
  io = socketIo(server, {
    cors: {
      origin: process.env.FRONTEND_URL,
      methods: ["GET", "POST"],
    },
    transports: ["websocket", "polling"],
  });

  io.on("connection", (socket) => {
    console.log("Novo cliente conectado!");
    socket.on("disconnect", () => {
      console.log("Cliente desconectado!");
    });
  });

  return io;
}

function getIo() {
  if (!io) {
    throw new Error("Socket.io não foi inicializado!");
  }
  return io;
}

module.exports = { initSocket, getIo };
