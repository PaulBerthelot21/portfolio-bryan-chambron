"use client";

import { motion } from "framer-motion";
import { useMode } from "@/components/ModeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import {
  productions,
  productionTypeLabels,
  productionTypeColors,
} from "@/data/productions";
import { staggerContainer, slideUp, hoverCard } from "@/lib/motion";
import {
  Radio,
  Podcast,
  Video,
  Calendar,
  ExternalLink,
  ArrowLeft,
  Mic,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const typeIcons = {
  emission: Radio,
  podcast: Podcast,
  video: Video,
  event: Calendar,
  stream: Video,
};

export default function ProductionsPage() {
  const { mode } = useMode();

  // Filtrer par mode ET par statut
  const filteredProductions = productions.filter(
    (p) => p.mode === mode || p.mode === "both"
  );

  const activeProductions = filteredProductions.filter((p) => p.status === "active");
  const upcomingProductions = filteredProductions.filter((p) => p.status === "upcoming");
  const archivedProductions = filteredProductions.filter((p) => p.status === "archived");

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
              {mode === "radio" ? "Mes Émissions Radio" : "Mes Créations Stream"}
            </h1>
            <p
              className={`text-lg md:text-xl max-w-2xl mx-auto ${
                mode === "radio" ? "text-slate-600" : "text-slate-400"
              }`}
            >
              {mode === "radio"
                ? "Découvrez mes émissions et productions radiophoniques."
                : "Retrouvez mes streams, vidéos et contenus gaming."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Productions actives */}
      <section
        className={`py-20 ${mode === "radio" ? "bg-white" : "bg-slate-900"}`}
      >
        <div className="container mx-auto px-4">
          <motion.div
            key={mode}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {/* Header */}
            <motion.div variants={slideUp} className="text-center space-y-4">
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                  mode === "radio"
                    ? "bg-green-100 text-green-800"
                    : "bg-green-900/50 text-green-300"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                En cours
              </div>
              <h2
                className={`text-3xl md:text-4xl font-bold ${
                  mode === "radio" ? "text-slate-900" : "text-white"
                }`}
              >
                Productions Actives
              </h2>
            </motion.div>

            {/* Grid */}
            {activeProductions.length > 0 ? (
              <motion.div
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {activeProductions.map((production) => {
                  const Icon = typeIcons[production.type];
                  const colors = productionTypeColors[production.type];

                  return (
                    <motion.div key={production.id} variants={slideUp}>
                      <motion.div
                        initial="rest"
                        whileHover="hover"
                        variants={hoverCard}
                        className="h-full"
                      >
                        <Card
                          className={`h-full ${
                            mode === "radio"
                              ? "bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200"
                              : "bg-gradient-to-br from-slate-800 to-purple-900/50 border-purple-800/50"
                          }`}
                        >
                          <CardHeader>
                            <div className="flex items-center justify-between mb-2">
                              <span
                                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                                  mode === "radio"
                                    ? colors.radio
                                    : colors.streamer
                                }`}
                              >
                                <Icon className="w-3 h-3" />
                                {productionTypeLabels[production.type]}
                              </span>
                            </div>
                            <CardTitle
                              className={
                                mode === "radio" ? "text-slate-900" : "text-white"
                              }
                            >
                              {production.title}
                            </CardTitle>
                            {production.platform && (
                              <CardDescription
                                className={`flex items-center gap-1 ${
                                  mode === "radio"
                                    ? "text-amber-600"
                                    : "text-purple-400"
                                }`}
                              >
                                <Mic className="w-3 h-3" />
                                {production.platform}
                              </CardDescription>
                            )}
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <p
                              className={`text-sm ${
                                mode === "radio"
                                  ? "text-slate-600"
                                  : "text-slate-400"
                              }`}
                            >
                              {production.description}
                            </p>
                            {production.url && (
                              <Button
                                asChild
                                variant="outline"
                                size="sm"
                                className={`w-full ${
                                  mode === "radio"
                                    ? "border-amber-300 hover:bg-amber-100"
                                    : "border-purple-700 hover:bg-purple-900/50"
                                }`}
                              >
                                <a
                                  href={production.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Découvrir
                                  <ExternalLink className="w-3 h-3 ml-2" />
                                </a>
                              </Button>
                            )}
                          </CardContent>
                        </Card>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                variants={slideUp}
                className={`text-center py-12 ${
                  mode === "radio" ? "text-slate-500" : "text-slate-500"
                }`}
              >
                Aucune production active pour le moment.
              </motion.div>
            )}

            {/* À venir */}
            {upcomingProductions.length > 0 && (
              <>
                <motion.div
                  variants={slideUp}
                  className="text-center space-y-4 pt-12"
                >
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                      mode === "radio"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-blue-900/50 text-blue-300"
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    À venir
                  </div>
                  <h2
                    className={`text-3xl md:text-4xl font-bold ${
                      mode === "radio" ? "text-slate-900" : "text-white"
                    }`}
                  >
                    Prochainement
                  </h2>
                </motion.div>

                <motion.div
                  variants={staggerContainer}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {upcomingProductions.map((production) => {
                    const Icon = typeIcons[production.type];
                    const colors = productionTypeColors[production.type];

                    return (
                      <motion.div key={production.id} variants={slideUp}>
                        <Card
                          className={`h-full opacity-75 ${
                            mode === "radio"
                              ? "bg-slate-100 border-slate-200"
                              : "bg-slate-800/30 border-slate-700"
                          }`}
                        >
                          <CardHeader>
                            <span
                              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium w-fit ${
                                mode === "radio" ? colors.radio : colors.streamer
                              }`}
                            >
                              <Icon className="w-3 h-3" />
                              {productionTypeLabels[production.type]}
                            </span>
                            <CardTitle
                              className={
                                mode === "radio"
                                  ? "text-slate-900"
                                  : "text-white"
                              }
                            >
                              {production.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p
                              className={`text-sm ${
                                mode === "radio"
                                  ? "text-slate-600"
                                  : "text-slate-400"
                              }`}
                            >
                              {production.description}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </>
            )}

            {/* Archives */}
            {archivedProductions.length > 0 && (
              <>
                <motion.div
                  variants={slideUp}
                  className="text-center space-y-4 pt-12"
                >
                  <h2
                    className={`text-2xl font-bold ${
                      mode === "radio" ? "text-slate-600" : "text-slate-400"
                    }`}
                  >
                    Archives
                  </h2>
                </motion.div>

                <motion.div
                  variants={staggerContainer}
                  className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                  {archivedProductions.map((production) => (
                    <motion.div key={production.id} variants={slideUp}>
                      <div
                        className={`p-4 rounded-lg ${
                          mode === "radio"
                            ? "bg-slate-100 text-slate-600"
                            : "bg-slate-800/30 text-slate-500"
                        }`}
                      >
                        <p className="font-medium">{production.title}</p>
                        <p className="text-sm opacity-75">
                          {production.platform}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

