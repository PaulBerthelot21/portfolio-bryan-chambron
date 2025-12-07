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
      className="fixed top-4 right-4 z-50 flex items-center gap-3 bg-card/80 backdrop-blur-md border border-border rounded-full px-4 py-2 shadow-lg"
    >
      <div className="flex items-center gap-2">
        <Radio
          className={`w-4 h-4 transition-colors ${
            mode === "radio" ? "text-primary" : "text-muted-foreground"
          }`}
        />
        <Label
          htmlFor="mode-toggle"
          className={`text-sm font-medium transition-colors cursor-pointer ${
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
        className="data-[state=checked]:bg-purple-600 data-[state=unchecked]:bg-amber-500"
      />

      <div className="flex items-center gap-2">
        <Label
          htmlFor="mode-toggle"
          className={`text-sm font-medium transition-colors cursor-pointer ${
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

