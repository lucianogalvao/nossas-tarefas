import withPWA from "next-pwa";

const nextConfig = {
  env: {
    FRONTEND_URL: process.env.FRONTEND_URL || "",
    BACKEND_URL: process.env.BACKEND_URL || "",
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY || "",
    FIREBASE_API_APP_ID: process.env.FIREBASE_API_APP_ID || "",
    FIREBASE_API_VAPID_KEY: process.env.FIREBASE_API_VAPID_KEY || "",
  },
};

export default withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  sw: "sw.js", 
})(nextConfig);
