import type { Metadata } from "next";
import "@/app/globals.css";
import "@/styles/globals.sass";

export const metadata: Metadata = {
  title: "Nossas Tarefas",
  description: "Aplicativo simples para gerenciameto das nossas tarefas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={"antialiased"}>{children}</body>
    </html>
  );
}
