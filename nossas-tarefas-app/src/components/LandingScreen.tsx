"use client";
import React, { useEffect, useState } from "react";
import Logo from "./ui/Logo";
import { Form, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import st from "@/styles/landingScreen.module.sass";

const formSchema = z.object({
  login: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function LandingScreen() {
  const [loaded, isLoaded] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      isLoaded(true);
    }, 1200);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      login: "",
    },
  });

  const goToSignup = () => {
    router.push("/registro"); // Redireciona para a tela de cadastro
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Logo stClass={st.logo} classes={`${loaded && "!top-[23.5%]"}`} />
      <section
        className={`${
          !loaded ? "opacity-0" : "opacity-100"
        } transition-all duration-75 relative`}
      >
        <h1>Bem-vindo!</h1>
        <Form {...form}>
          <form onSubmit={() => alert("Blabla")}>
            <FormField
              name="login"
              render={({ field }) => (
                <>
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <Input {...field} />
                  </FormItem>
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <Input type="password" {...field} />
                  </FormItem>
                </>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
        <Button onClick={goToSignup}>Não tenho cadastro</Button>
      </section>
    </div>
  );
}
