// config/firebaseAdmin.js
const admin = require('firebase-admin');

const serviceAccountPath = process.env.FIREBASE_PRIVATE_KEY_PATH;

if (!serviceAccountPath) {
  throw new Error("Caminho para a chave privada não está definido no .env");
}

admin.initializeApp({
  credential: admin.credential.cert(require(serviceAccountPath)),
});

const messaging = admin.messaging();

module.exports = messaging;