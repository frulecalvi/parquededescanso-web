import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import TopProgressBar from "@/components/TopProgressBar";

export const metadata: Metadata = {
  title: "Parque de Descanso",
  description: "Empresa Fúnebre - Cementerio Parque - Cremaciones - Salas Velatorias",
  icons: {
    icon: "/assets/logo-icon-light-favicon.png",
    shortcut: "/assets/logo-icon-light-favicon.png",
    apple: "/assets/logo-icon-light-favicon.png",
  },
  openGraph: {
    title: "Parque de Descanso",
    description: "Empresa Fúnebre - Cementerio Parque - Cremaciones - Salas Velatorias",
    images: [
      {
        url: "/assets/logo-full-whatsapp.png",
        alt: "Parque de Descanso",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-[100dvh]">
        <Suspense fallback={null}>
          <TopProgressBar />
        </Suspense>
        {children}
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
