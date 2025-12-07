import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ModeProvider } from "@/components/ModeProvider";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bryan Chambron | Animateur Radio & Streamer",
  description:
    "Portfolio de Bryan Chambron - Animateur radio passionné et streamer Twitch. Découvrez mon univers, mes projets et retrouvez-moi sur les réseaux.",
  keywords: [
    "Bryan Chambron",
    "animateur radio",
    "streamer",
    "Twitch",
    "podcast",
    "créateur de contenu",
  ],
  authors: [{ name: "Bryan Chambron" }],
  openGraph: {
    title: "Bryan Chambron | Animateur Radio & Streamer",
    description:
      "Découvrez l'univers de Bryan Chambron, animateur radio et streamer Twitch.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bryan Chambron | Animateur Radio & Streamer",
    description:
      "Découvrez l'univers de Bryan Chambron, animateur radio et streamer Twitch.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ModeProvider>{children}</ModeProvider>
      </body>
    </html>
  );
}
