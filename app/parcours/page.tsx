"use client";

import { motion } from "framer-motion";
import { useMode } from "@/components/ModeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { careerSteps } from "@/data/career";
import { staggerContainer, slideUp } from "@/lib/motion";
import { Radio, Briefcase, Star, ArrowLeft } from "lucide-react";
import Link from "next/link";

const typeIcons = {
  formation: Briefcase,
  radio: Radio,
  national: Star,
};

const typeLabels = {
  formation: "Formation",
  radio: "Radio locale",
  national: "Radio nationale",
};

export default function ParcoursPage() {
  const { mode } = useMode();

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero section */}
      <section
        className={`pt-32 pb-16 ${
          mode === "radio"
            ? "bg-gradient-to-b from-amber-50 to-white"
            : "bg-gradient-to-b from-purple-950 to-slate-900"
        }`}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <Link
              href="/"
              className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                mode === "radio"
                  ? "text-amber-600 hover:text-amber-700"
                  : "text-purple-400 hover:text-purple-300"
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à l'accueil
            </Link>

            <h1
              className={`text-4xl md:text-6xl font-bold ${
                mode === "radio" ? "text-slate-900" : "text-white"
              }`}
            >
              Mon Parcours Radio
            </h1>
            <p
              className={`text-lg md:text-xl max-w-2xl mx-auto ${
                mode === "radio" ? "text-slate-600" : "text-slate-400"
              }`}
            >
              De mes premiers pas à aujourd'hui, découvrez les étapes qui ont
              forgé ma passion pour l'animation radio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline section */}
      <section
        className={`py-20 ${
          mode === "radio" ? "bg-white" : "bg-slate-900"
        }`}
      >
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            {/* Timeline */}
            <div className="relative">
              {/* Ligne verticale */}
              <div
                className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 ${
                  mode === "radio" ? "bg-amber-200" : "bg-purple-800"
                }`}
                style={{ transform: "translateX(-50%)" }}
              />

              {/* Étapes */}
              {careerSteps.map((step, index) => {
                const Icon = typeIcons[step.type];
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={step.id}
                    variants={slideUp}
                    className={`relative flex items-center mb-12 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Point sur la timeline */}
                    <div
                      className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-4 ${
                        mode === "radio"
                          ? "bg-amber-500 border-amber-200"
                          : "bg-purple-500 border-purple-900"
                      }`}
                      style={{ transform: "translateX(-50%)" }}
                    />

                    {/* Carte */}
                    <div
                      className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                        isEven ? "md:pr-8 md:text-right" : "md:pl-8"
                      }`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={`p-6 rounded-2xl shadow-lg ${
                          mode === "radio"
                            ? "bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200"
                            : "bg-gradient-to-br from-slate-800 to-purple-900/50 border border-purple-800/50"
                        }`}
                      >
                        {/* Badge type */}
                        <div
                          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                            step.type === "national"
                              ? mode === "radio"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-yellow-900/50 text-yellow-300"
                              : mode === "radio"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-purple-900/50 text-purple-300"
                          }`}
                        >
                          <Icon className="w-3 h-3" />
                          {typeLabels[step.type]}
                        </div>

                        {/* Période */}
                        <p
                          className={`text-sm font-medium mb-1 ${
                            mode === "radio"
                              ? "text-amber-600"
                              : "text-purple-400"
                          }`}
                        >
                          {step.period}
                        </p>

                        {/* Organisation */}
                        <h3
                          className={`text-xl md:text-2xl font-bold mb-2 ${
                            mode === "radio" ? "text-slate-900" : "text-white"
                          }`}
                        >
                          {step.organization}
                        </h3>

                        {/* Titre */}
                        <p
                          className={`text-sm font-medium mb-3 ${
                            mode === "radio"
                              ? "text-slate-700"
                              : "text-slate-300"
                          }`}
                        >
                          {step.title}
                        </p>

                        {/* Description */}
                        <p
                          className={`text-sm leading-relaxed ${
                            mode === "radio"
                              ? "text-slate-600"
                              : "text-slate-400"
                          }`}
                        >
                          {step.description}
                        </p>
                      </motion.div>
                    </div>

                    {/* Spacer pour l'autre côté */}
                    <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                  </motion.div>
                );
              })}

              {/* Point final */}
              <motion.div
                variants={slideUp}
                className="absolute left-8 md:left-1/2 bottom-0"
                style={{ transform: "translateX(-50%)" }}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    mode === "radio"
                      ? "bg-amber-500 text-white"
                      : "bg-purple-500 text-white"
                  }`}
                >
                  <Radio className="w-4 h-4" />
                </div>
              </motion.div>
            </div>

            {/* Message de fin */}
            <motion.div
              variants={slideUp}
              className="text-center mt-20 space-y-4"
            >
              <p
                className={`text-lg ${
                  mode === "radio" ? "text-slate-600" : "text-slate-400"
                }`}
              >
                L'aventure continue sur les ondes de
              </p>
              <a
                href="https://radiorec.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-2xl font-bold transition-colors ${
                  mode === "radio"
                    ? "text-amber-600 hover:text-amber-700"
                    : "text-purple-400 hover:text-purple-300"
                }`}
              >
                <Radio className="w-6 h-6" />
                Radio REC 103.7 FM
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

