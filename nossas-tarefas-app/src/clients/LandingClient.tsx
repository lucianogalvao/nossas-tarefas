import React, { useEffect, useState } from "react";
import { LandingScreen, SplashScreen } from "@/components";

export default function LandingClient() {
  const [ready, setReady] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 2000);
  });

  if (!ready) {
    return <SplashScreen />;
  }
  return (
    <main>
      <LandingScreen />
    </main>
  );
}
