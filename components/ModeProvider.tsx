"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Mode = "radio" | "streamer";

interface ModeContextType {
  mode: Mode;
  toggleMode: () => void;
  setMode: (mode: Mode) => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>("radio");

  useEffect(() => {
    // Appliquer la classe sur le body selon le mode
    document.body.classList.remove("mode-radio", "mode-streamer");
    document.body.classList.add(`mode-${mode}`);
  }, [mode]);

  const toggleMode = () => {
    setMode((prev) => (prev === "radio" ? "streamer" : "radio"));
  };

  return (
    <ModeContext.Provider value={{ mode, toggleMode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error("useMode doit être utilisé dans un ModeProvider");
  }
  return context;
}

