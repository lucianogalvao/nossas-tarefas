import React from "react";
import st from "@/styles/splashScreen.module.sass";
import cn from "classnames";
import Logo from "./ui/Logo";

export default function SplashScreen() {
  return (
    <div
      className={cn(
        "bg-ntBblue w-screen h-screen fixed top-0 left-0 flex justify-center items-center flex-col",
        st.core
      )}
    >
      <Logo stClass={st.logo} />
      <p className="font-bold text-2xl mt-8 text-white">Nossas tarefas</p>
    </div>
  );
}
