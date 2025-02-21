"use client";
import { useEffect } from "react";
import { io } from "socket.io-client";
import {
  getFirebaseToken,
  listenForMessages,
} from "../firebase/firebaseConfig";

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

    getFirebaseToken();
    listenForMessages();

    return () => {
      socket.disconnect();
    };
  }, []);

  return <h1>Teste de Conexão Socket.IO</h1>;
};

export default SocketTest;
