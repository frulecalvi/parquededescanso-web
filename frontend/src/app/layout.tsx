import type { Metadata } from "next";
import "./globals.css";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

export const metadata: Metadata = {
  title: "Parque de Descanso",
  description: "Parque de Descanso - Cementerio privado en Mendoza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-[100dvh]">
        {children}
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
