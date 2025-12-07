"use client";

import { motion } from "framer-motion";
import { useMode } from "@/components/ModeProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { staggerContainer, slideUp, slideInLeft, slideInRight } from "@/lib/motion";
import { Mail, Send, MessageSquare } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const { mode } = useMode();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'envoi du formulaire
    console.log("Form submitted:", formData);
    alert("Message envoyé ! (simulation)");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Infos contact */}
            <motion.div variants={slideInLeft} className="space-y-8">
              <Card
                className={`${
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
                <CardContent>
                  <a
                    href="mailto:bryan.chambron@gmail.com"
                    className={`text-lg font-medium transition-colors ${
                      mode === "radio"
                        ? "text-amber-700 hover:text-amber-800"
                        : "text-purple-300 hover:text-purple-200"
                    }`}
                  >
                    bryan.chambron@gmail.com
                  </a>
                  <CardDescription
                    className={`mt-2 ${
                      mode === "radio" ? "text-slate-600" : "text-slate-400"
                    }`}
                  >
                    Je réponds généralement sous 24-48h
                  </CardDescription>
                </CardContent>
              </Card>

              <Card
                className={`${
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
                <CardContent>
                  <CardDescription
                    className={
                      mode === "radio" ? "text-slate-600" : "text-slate-400"
                    }
                  >
                    Pour une réponse rapide, envoyez-moi un DM sur{" "}
                    <a
                      href="https://www.tiktok.com/@bryan_lecalme"
                      className={`font-medium ${
                        mode === "radio"
                          ? "text-amber-700 hover:text-amber-800"
                          : "text-purple-300 hover:text-purple-200"
                      }`}
                    >
                      TikTok
                    </a>{" "}
                    ou{" "}
                    <a
                      href="https://www.instagram.com/bryan_chambron/"
                      className={`font-medium ${
                        mode === "radio"
                          ? "text-amber-700 hover:text-amber-800"
                          : "text-purple-300 hover:text-purple-200"
                      }`}
                    >
                      Instagram
                    </a>
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Décoration */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`hidden lg:block w-32 h-32 rounded-full blur-2xl ${
                  mode === "radio" ? "bg-amber-300/50" : "bg-purple-600/30"
                }`}
              />
            </motion.div>

            {/* Formulaire */}
            <motion.div variants={slideInRight}>
              <Card
                className={`${
                  mode === "radio"
                    ? "bg-white border-slate-200"
                    : "bg-slate-800/50 border-slate-700"
                }`}
              >
                <CardHeader>
                  <CardTitle
                    className={mode === "radio" ? "text-slate-900" : "text-white"}
                  >
                    Envoyez-moi un message
                  </CardTitle>
                  <CardDescription
                    className={
                      mode === "radio" ? "text-slate-600" : "text-slate-400"
                    }
                  >
                    Remplissez le formulaire ci-dessous
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className={
                          mode === "radio" ? "text-slate-700" : "text-slate-300"
                        }
                      >
                        Nom
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Votre nom"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={
                          mode === "radio"
                            ? "bg-white border-slate-300 focus:border-amber-500"
                            : "bg-slate-900/50 border-slate-600 focus:border-purple-500 text-white placeholder:text-slate-500"
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className={
                          mode === "radio" ? "text-slate-700" : "text-slate-300"
                        }
                      >
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="votre@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={
                          mode === "radio"
                            ? "bg-white border-slate-300 focus:border-amber-500"
                            : "bg-slate-900/50 border-slate-600 focus:border-purple-500 text-white placeholder:text-slate-500"
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className={
                          mode === "radio" ? "text-slate-700" : "text-slate-300"
                        }
                      >
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Votre message..."
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className={
                          mode === "radio"
                            ? "bg-white border-slate-300 focus:border-amber-500 resize-none"
                            : "bg-slate-900/50 border-slate-600 focus:border-purple-500 text-white placeholder:text-slate-500 resize-none"
                        }
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className={`w-full group ${
                        mode === "radio"
                          ? "bg-amber-500 hover:bg-amber-600 text-white"
                          : "bg-purple-600 hover:bg-purple-700 text-white"
                      }`}
                    >
                      Envoyer le message
                      <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

