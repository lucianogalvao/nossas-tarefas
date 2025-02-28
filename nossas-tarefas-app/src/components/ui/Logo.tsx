import Image from "next/image";
import React from "react";
import logo from "@/assets/img/png/logo.png";
import cn from "classnames";

interface props {
  stClass?: string;
  classes?: string;
}

export default function Logo({ stClass, classes }: props) {
  return (
    <Image
      src={logo.src}
      alt="Logo representando uma tabela de listas"
      width={100}
      height={100}
      className={cn(stClass, classes)}
    />
  );
}
