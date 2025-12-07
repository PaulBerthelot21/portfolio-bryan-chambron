"use client";

import { motion } from "framer-motion";
import { useMode } from "@/components/ModeProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { staggerContainer, slideUp } from "@/lib/motion";
import { Mail, MessageSquare, Send } from "lucide-react";

export function Contact() {
  const { mode } = useMode();

  return (
    <section
      id="contact"
      className={`py-20 ${
        mode === "radio"
          ? "bg-gradient-to-b from-white to-amber-50"
          : "bg-gradient-to-b from-slate-900 to-purple-950"
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
              Contact
            </h2>
            <p
              className={`text-lg max-w-2xl mx-auto ${
                mode === "radio" ? "text-slate-600" : "text-slate-400"
              }`}
            >
              Une question, une collaboration ou simplement envie de dire
              bonjour ? N'hésitez pas !
            </p>
          </motion.div>

          {/* Cards contact */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto"
          >
            {/* Email */}
            <motion.div variants={slideUp}>
              <Card
                className={`h-full ${
                  mode === "radio"
                    ? "bg-amber-100/50 border-amber-200"
                    : "bg-purple-900/30 border-purple-800/50"
                }`}
              >
                <CardHeader>
                  <CardTitle
                    className={`flex items-center gap-3 ${
                      mode === "radio" ? "text-slate-900" : "text-white"
                    }`}
                  >
                    <Mail
                      className={
                        mode === "radio" ? "text-amber-600" : "text-purple-400"
                      }
                    />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href="mailto:bryan.chambron@gmail.com"
                    className={`text-lg font-medium transition-colors block ${
                      mode === "radio"
                        ? "text-amber-700 hover:text-amber-800"
                        : "text-purple-300 hover:text-purple-200"
                    }`}
                  >
                    bryan.chambron@gmail.com
                  </a>
                  <CardDescription
                    className={
                      mode === "radio" ? "text-slate-600" : "text-slate-400"
                    }
                  >
                    Je réponds généralement sous 24-48h
                  </CardDescription>
                  <Button
                    asChild
                    className={`w-full group ${
                      mode === "radio"
                        ? "bg-amber-500 hover:bg-amber-600 text-white"
                        : "bg-purple-600 hover:bg-purple-700 text-white"
                    }`}
                  >
                    <a href="mailto:bryan.chambron@gmail.com">
                      M'envoyer un email
                      <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Réseaux sociaux */}
            <motion.div variants={slideUp}>
              <Card
                className={`h-full ${
                  mode === "radio"
                    ? "bg-amber-100/50 border-amber-200"
                    : "bg-purple-900/30 border-purple-800/50"
                }`}
              >
                <CardHeader>
                  <CardTitle
                    className={`flex items-center gap-3 ${
                      mode === "radio" ? "text-slate-900" : "text-white"
                    }`}
                  >
                    <MessageSquare
                      className={
                        mode === "radio" ? "text-amber-600" : "text-purple-400"
                      }
                    />
                    Réseaux sociaux
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription
                    className={
                      mode === "radio" ? "text-slate-600" : "text-slate-400"
                    }
                  >
                    Pour une réponse rapide, envoyez-moi un DM sur mes réseaux !
                  </CardDescription>
                  <div className="flex flex-col gap-2">
                    <Button
                      asChild
                      variant="outline"
                      className={
                        mode === "radio"
                          ? "border-amber-300 hover:bg-amber-100"
                          : "border-purple-700 text-purple-300 hover:bg-purple-900/50"
                      }
                    >
                      <a
                        href="https://www.instagram.com/bryan_chambron/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Instagram
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className={
                        mode === "radio"
                          ? "border-amber-300 hover:bg-amber-100"
                          : "border-purple-700 text-purple-300 hover:bg-purple-900/50"
                      }
                    >
                      <a
                        href="https://www.tiktok.com/@bryan_lecalme"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        TikTok
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
