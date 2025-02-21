import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "nossas-tarefas-wpn.firebaseapp.com",
  projectId: "nossas-tarefas-wpn",
  storageBucket: "nossas-tarefas-wpn.firebasestorage.app",
  messagingSenderId: process.env.FIREBASE_API_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_API_APP_ID,
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const getFirebaseToken = async () => {
  try {
    const token = await getToken(messaging, {
      vapidKey: process.env.FIREBASE_API_VAPID_KEY,
    });
    if (token) {
      console.log("Token do dispositivo: ", token);
    } else {
      console.log("Falha ao obter o token FCM.");
    }
  } catch (error) {
    console.error("Erro ao obter o token FCM:", error);
  }
};

export const listenForMessages = () => {
  onMessage(messaging, (payload) => {
    console.log("Mensagem recebida:", payload);
    alert(`Nova notificação: ${payload.notification.title}`);
  });
};
