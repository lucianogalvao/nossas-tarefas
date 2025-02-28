"use client";
import { LandingClient } from "@/clients";
import { useEffect } from "react";
import { io } from "socket.io-client";

const BACKEND_URL = process.env.BACKEND_URL;

const SocketTest = () => {
  useEffect(() => {
    const socket = io(BACKEND_URL, {
      transports: ["websocket"],
    });

    socket.on("connect", () => {
      alert(`Cliente conectado ao servidor via Socket.IO ${socket.id}`);
    });

    socket.on("taskCreated", (task) => {
      alert(
        `Nova tarefa criada: \nTítulo: ${task.title} \nDescrição: ${task.description} \nStatus: ${task.status}`
      );
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return <LandingClient />;
};

export default SocketTest;
