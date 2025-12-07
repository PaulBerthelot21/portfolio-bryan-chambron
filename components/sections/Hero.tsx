"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMode } from "@/components/ModeProvider";
import { Button } from "@/components/ui/button";
import { fadeIn, slideUp, staggerContainer } from "@/lib/motion";
import { Radio, Tv, ExternalLink } from "lucide-react";
import Image from "next/image";

const content = {
  radio: {
    title: "Bryan Chambron",
    subtitle: "Animateur Radio",
    description:
      "Passionné par les ondes depuis toujours, j'anime des émissions qui font vibrer les auditeurs. Entre musique, interviews et bonne humeur, je crée des moments uniques à la radio.",
    cta: "Écouter mes émissions",
    image: "/images/logo_bryan_chambron_animateur.jpg",
    icon: Radio,
  },
  streamer: {
    title: "Bryan Chambron",
    subtitle: "Streamer & Créateur",
    description:
      "Du gaming aux discussions en live, je partage ma passion avec une communauté incroyable sur Twitch. Rejoins l'aventure et deviens membre de la team !",
    cta: "Rejoindre le stream",
    image: "/images/logo_bryan_chambron_streamer.png",
    icon: Tv,
  },
};

export function Hero() {
  const { mode } = useMode();
  const currentContent = content[mode];
  const Icon = currentContent.icon;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background animé */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`absolute inset-0 ${
              mode === "radio"
                ? "bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100"
                : "bg-gradient-to-br from-purple-950 via-slate-900 to-violet-950"
            }`}
          />
        </AnimatePresence>

        {/* Pattern décoratif */}
        <div
          className={`absolute inset-0 opacity-5 ${
            mode === "streamer" ? "opacity-10" : ""
          }`}
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${
              mode === "radio" ? "#92400e" : "#9333ea"
            } 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Cercles décoratifs flottants */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl ${
            mode === "radio" ? "bg-amber-300/30" : "bg-purple-600/20"
          }`}
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl ${
            mode === "radio" ? "bg-orange-300/30" : "bg-violet-600/20"
          }`}
        />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 py-20"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu texte */}
          <motion.div variants={slideUp} className="space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={mode}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                    mode === "radio"
                      ? "bg-amber-100 text-amber-800"
                      : "bg-purple-900/50 text-purple-300 border border-purple-700"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {currentContent.subtitle}
                </div>

                <h1
                  className={`text-5xl md:text-7xl font-bold tracking-tight ${
                    mode === "radio" ? "text-slate-900" : "text-white"
                  }`}
                >
                  {currentContent.title}
                </h1>

                <p
                  className={`text-lg md:text-xl leading-relaxed max-w-xl ${
                    mode === "radio" ? "text-slate-600" : "text-slate-300"
                  }`}
                >
                  {currentContent.description}
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button
                    size="lg"
                    className={`group ${
                      mode === "radio"
                        ? "bg-amber-500 hover:bg-amber-600 text-white"
                        : "bg-purple-600 hover:bg-purple-700 text-white"
                    }`}
                  >
                    {currentContent.cta}
                    <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className={
                      mode === "streamer"
                        ? "border-purple-700 text-purple-300 hover:bg-purple-900/50"
                        : ""
                    }
                  >
                    En savoir plus
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={fadeIn}
            className="relative flex justify-center lg:justify-end"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={mode}
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotate: 5 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative"
              >
                <div
                  className={`relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl ${
                    mode === "radio"
                      ? "ring-4 ring-amber-300"
                      : "ring-4 ring-purple-500"
                  }`}
                >
                  <Image
                    key={currentContent.image}
                    src={currentContent.image}
                    alt={currentContent.subtitle}
                    fill
                    sizes="(max-width: 768px) 288px, 384px"
                    className="object-cover"
                    priority
                    unoptimized
                  />
                </div>

                {/* Badge flottant */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className={`absolute -bottom-4 -right-4 px-4 py-2 rounded-full text-sm font-bold shadow-lg ${
                    mode === "radio"
                      ? "bg-white text-amber-600"
                      : "bg-purple-600 text-white"
                  }`}
                >
                  {mode === "radio" ? "🎙️ On Air" : "🔴 Live"}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className={`w-6 h-10 rounded-full border-2 flex justify-center pt-2 ${
            mode === "radio" ? "border-slate-400" : "border-slate-500"
          }`}
        >
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className={`w-1.5 h-1.5 rounded-full ${
              mode === "radio" ? "bg-slate-400" : "bg-slate-500"
            }`}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

