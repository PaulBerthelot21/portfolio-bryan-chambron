"use client";

import { motion } from "framer-motion";
import { useMode } from "@/components/ModeProvider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { staggerContainer, slideUp, hoverCard } from "@/lib/motion";
import { articles } from "@/data/articles";
import { ExternalLink, Calendar, Tag } from "lucide-react";

export function Articles() {
  const { mode } = useMode();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getTagColor = (tag: string) => {
    const colors: Record<string, string> = {
      Presse:
        mode === "radio"
          ? "bg-amber-100 text-amber-800"
          : "bg-purple-900/50 text-purple-300",
      Gaming:
        mode === "radio"
          ? "bg-green-100 text-green-800"
          : "bg-emerald-900/50 text-emerald-300",
      Podcast:
        mode === "radio"
          ? "bg-blue-100 text-blue-800"
          : "bg-blue-900/50 text-blue-300",
      Événement:
        mode === "radio"
          ? "bg-pink-100 text-pink-800"
          : "bg-pink-900/50 text-pink-300",
      Article:
        mode === "radio"
          ? "bg-slate-100 text-slate-800"
          : "bg-slate-700/50 text-slate-300",
    };
    return colors[tag] || colors.Article;
  };

  return (
    <section
      id="articles"
      className={`py-20 ${
        mode === "radio"
          ? "bg-white"
          : "bg-gradient-to-b from-purple-950 to-slate-900"
      }`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={slideUp} className="text-center space-y-4">
            <h2
              className={`text-4xl md:text-5xl font-bold ${
                mode === "radio" ? "text-slate-900" : "text-white"
              }`}
            >
              Médias & Articles
            </h2>
            <p
              className={`text-lg max-w-2xl mx-auto ${
                mode === "radio" ? "text-slate-600" : "text-slate-400"
              }`}
            >
              Découvrez mes apparitions dans les médias et articles de presse
            </p>
          </motion.div>

          {/* Grid d'articles */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {articles.map((article) => (
              <motion.div key={article.id} variants={slideUp}>
                <motion.a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial="rest"
                  whileHover="hover"
                  variants={hoverCard}
                  className="block h-full"
                >
                  <Card
                    className={`h-full transition-all group ${
                      mode === "radio"
                        ? "bg-white hover:bg-amber-50 border-slate-200 hover:border-amber-300"
                        : "bg-slate-800/50 hover:bg-purple-900/30 border-slate-700 hover:border-purple-600"
                    }`}
                  >
                    <CardHeader className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${getTagColor(
                            article.tag
                          )}`}
                        >
                          <Tag className="w-3 h-3" />
                          {article.tag}
                        </span>
                        <ExternalLink
                          className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${
                            mode === "radio"
                              ? "text-amber-600"
                              : "text-purple-400"
                          }`}
                        />
                      </div>
                      <CardTitle
                        className={`text-lg leading-tight ${
                          mode === "radio" ? "text-slate-900" : "text-white"
                        }`}
                      >
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {article.description && (
                        <CardDescription
                          className={
                            mode === "radio" ? "text-slate-600" : "text-slate-400"
                          }
                        >
                          {article.description}
                        </CardDescription>
                      )}
                      <div
                        className={`flex items-center justify-between text-sm ${
                          mode === "radio"
                            ? "text-slate-500"
                            : "text-slate-500"
                        }`}
                      >
                        <span className="font-medium">{article.source}</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {formatDate(article.date)}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

