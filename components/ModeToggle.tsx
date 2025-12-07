"use client";

import { useMode } from "./ModeProvider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Radio, Tv } from "lucide-react";

export function ModeToggle() {
  const { mode, toggleMode } = useMode();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-20 left-4 md:top-4 md:right-4 md:left-auto z-50 flex items-center gap-2 md:gap-3 bg-card/90 backdrop-blur-md border border-border rounded-full px-3 py-1.5 md:px-4 md:py-2 shadow-lg"
    >
      <div className="flex items-center gap-1 md:gap-2">
        <Radio
          className={`w-4 h-4 transition-colors ${
            mode === "radio" ? "text-primary" : "text-muted-foreground"
          }`}
        />
        <Label
          htmlFor="mode-toggle"
          className={`text-xs md:text-sm font-medium transition-colors cursor-pointer hidden sm:inline ${
            mode === "radio" ? "text-primary" : "text-muted-foreground"
          }`}
        >
          Radio
        </Label>
      </div>

      <Switch
        id="mode-toggle"
        checked={mode === "streamer"}
        onCheckedChange={toggleMode}
        className="data-[state=checked]:bg-purple-600 data-[state=unchecked]:bg-amber-500 scale-90 md:scale-100"
      />

      <div className="flex items-center gap-1 md:gap-2">
        <Label
          htmlFor="mode-toggle"
          className={`text-xs md:text-sm font-medium transition-colors cursor-pointer hidden sm:inline ${
            mode === "streamer" ? "text-primary" : "text-muted-foreground"
          }`}
        >
          Stream
        </Label>
        <Tv
          className={`w-4 h-4 transition-colors ${
            mode === "streamer" ? "text-primary" : "text-muted-foreground"
          }`}
        />
      </div>
    </motion.div>
  );
}
