"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMode } from "@/components/ModeProvider";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Radio, Tv } from "lucide-react";
import { Switch } from "@/components/ui/switch";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Accueil", href: "/" },
  { name: "Parcours", href: "/parcours" },
  { name: "Productions", href: "/productions" },
];

export function Navbar() {
  const { mode, toggleMode } = useMode();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? mode === "radio"
              ? "bg-white/95 backdrop-blur-md shadow-sm"
              : "bg-slate-900/95 backdrop-blur-md shadow-lg shadow-purple-900/10"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              onClick={handleLinkClick}
              className={`text-xl font-bold ${
                mode === "radio" ? "text-slate-900" : "text-white"
              }`}
            >
              <motion.span whileHover={{ scale: 1.05 }} className="inline-block">
                BC
              </motion.span>
            </Link>

            {/* Navigation links - Desktop */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors ${
                      mode === "radio"
                        ? "text-slate-600 hover:text-amber-600"
                        : "text-slate-300 hover:text-purple-400"
                    }`}
                  >
                    <motion.span whileHover={{ y: -2 }} className="inline-block">
                      {link.name}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right side: Mode Toggle + Hamburger */}
            <div className="flex items-center gap-3">
              {/* Mode Toggle */}
              <div
                className={`flex items-center gap-2 md:gap-3 px-3 py-1.5 rounded-full border ${
                  mode === "radio"
                    ? "bg-amber-50 border-amber-200"
                    : "bg-purple-900/50 border-purple-700"
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <Radio
                    className={`w-4 h-4 transition-colors ${
                      mode === "radio"
                        ? "text-amber-600"
                        : "text-slate-500"
                    }`}
                  />
                  <span
                    className={`hidden md:inline text-sm font-medium transition-colors ${
                      mode === "radio"
                        ? "text-amber-700"
                        : "text-slate-500"
                    }`}
                  >
                    Radio
                  </span>
                </div>
                <Switch
                  checked={mode === "streamer"}
                  onCheckedChange={toggleMode}
                  className="data-[state=checked]:bg-purple-600 data-[state=unchecked]:bg-amber-500 scale-90 md:scale-100"
                />
                <div className="flex items-center gap-1.5">
                  <span
                    className={`hidden md:inline text-sm font-medium transition-colors ${
                      mode === "streamer"
                        ? "text-purple-400"
                        : "text-slate-500"
                    }`}
                  >
                    Stream
                  </span>
                  <Tv
                    className={`w-4 h-4 transition-colors ${
                      mode === "streamer"
                        ? "text-purple-400"
                        : "text-slate-500"
                    }`}
                  />
                </div>
              </div>

              {/* Hamburger button - Mobile */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden p-2 rounded-lg transition-colors ${
                  mode === "radio"
                    ? "text-slate-900 hover:bg-amber-100"
                    : "text-white hover:bg-purple-900/50"
                }`}
                aria-label="Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className={`absolute inset-0 ${
                mode === "radio" ? "bg-white" : "bg-slate-900"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative flex flex-col items-center justify-center min-h-screen"
            >
              <ul className="flex flex-col items-center gap-8">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}
                      className={`text-3xl font-bold transition-colors ${
                        mode === "radio"
                          ? "text-slate-900 hover:text-amber-600"
                          : "text-white hover:text-purple-400"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
