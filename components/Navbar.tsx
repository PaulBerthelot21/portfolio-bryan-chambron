"use client";

import { motion } from "framer-motion";
import { useMode } from "@/components/ModeProvider";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Accueil", href: "#" },
  { name: "Réseaux", href: "#socials" },
  { name: "Médias", href: "#articles" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const { mode } = useMode();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? mode === "radio"
            ? "bg-white/80 backdrop-blur-md shadow-sm"
            : "bg-slate-900/80 backdrop-blur-md shadow-lg shadow-purple-900/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className={`text-xl font-bold ${
              mode === "radio"
                ? scrolled
                  ? "text-slate-900"
                  : "text-slate-900"
                : "text-white"
            }`}
          >
            BC
          </motion.a>

          {/* Navigation links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <motion.a
                  href={link.href}
                  whileHover={{ y: -2 }}
                  className={`text-sm font-medium transition-colors ${
                    mode === "radio"
                      ? "text-slate-600 hover:text-amber-600"
                      : "text-slate-300 hover:text-purple-400"
                  }`}
                >
                  {link.name}
                </motion.a>
              </li>
            ))}
          </ul>

          {/* Spacer pour le toggle à droite */}
          <div className="w-24" />
        </div>
      </div>
    </motion.nav>
  );
}

