"use client";

import { Navbar } from "@/components/Navbar";
import { ModeToggle } from "@/components/ModeToggle";
import { Hero } from "@/components/sections/Hero";
import { Socials } from "@/components/sections/Socials";
import { Articles } from "@/components/sections/Articles";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ModeToggle />
      <Hero />
      <Socials />
      <Articles />
      <Contact />
      <Footer />
    </main>
  );
}
