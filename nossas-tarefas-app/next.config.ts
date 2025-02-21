import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  env: {
    FRONTEND_URL: process.env.FRONTEND_URL,
    BACKEND_URL: process.env.BACKEND_URL,
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_API_ID: process.env.FIREBASE_API_ID,
    FIREBASE_API_VAPID_KEY: process.env.FIREBASE_API_VAPID,
  },
};

export default nextConfig;
