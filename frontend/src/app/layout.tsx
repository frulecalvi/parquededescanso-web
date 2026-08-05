import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import TopProgressBar from "@/components/TopProgressBar";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.parquededescanso.com"),
  title: {
    default: "Parque de Descanso | Cementerio Parque, Cremaciones y Salas Velatorias en Mendoza",
    template: "%s | Parque de Descanso",
  },
  description:
    "Empresa Fúnebre en Guaymallén, Mendoza. Cementerio Parque, Cremaciones, Salas Velatorias, Venta de Parcelas y Servicios de Sepelio las 24hs.",
  keywords: [
    "cementerio parque mendoza",
    "parque de descanso",
    "crematorio mendoza",
    "salas velatorias mendoza",
    "parcelas cementerio mendoza",
    "servicios funebres mendoza",
    "sepelio mendoza",
    "funeraria mendoza",
    "inhumación mendoza",
    "cremación mendoza",
  ],
  icons: {
    icon: "/assets/logo-icon-light-favicon.png",
    shortcut: "/assets/logo-icon-light-favicon.png",
    apple: "/assets/logo-icon-light-favicon.png",
  },
  openGraph: {
    title: "Parque de Descanso | Cementerio Parque, Cremaciones y Salas Velatorias en Mendoza",
    description:
      "Empresa Fúnebre en Guaymallén, Mendoza. Cementerio Parque, Cremaciones, Salas Velatorias, Venta de Parcelas y Servicios de Sepelio las 24hs.",
    url: "https://www.parquededescanso.com",
    siteName: "Parque de Descanso",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/assets/logo-full-whatsapp.png",
        width: 1200,
        height: 630,
        alt: "Parque de Descanso - Cementerio Parque en Mendoza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parque de Descanso | Cementerio Parque, Cremaciones y Salas Velatorias en Mendoza",
    description:
      "Empresa Fúnebre en Guaymallén, Mendoza. Cementerio Parque, Cremaciones, Salas Velatorias, Venta de Parcelas y Servicios de Sepelio las 24hs.",
    images: ["/assets/logo-full-whatsapp.png"],
  },
  alternates: {
    canonical: "https://www.parquededescanso.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <StructuredData type="localBusiness" data={{}} />
        <StructuredData type="organization" data={{}} />
      </head>
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
