export type ProductionType = "emission" | "podcast" | "video" | "event";

export interface Production {
  id: string;
  title: string;
  type: ProductionType;
  description: string;
  platform?: string;
  url?: string;
  image?: string;
  date?: string;
  status: "active" | "archived" | "upcoming";
}

export const productions: Production[] = [
  {
    id: "quotivienne",
    title: "La Quotivienne",
    type: "emission",
    description:
      "L'émission quotidienne de Radio REC ! Actualités locales, météo, agenda et interviews. Du lundi au samedi, retrouvez toute l'actu du pays Chauvinois.",
    platform: "Radio REC 103.7 FM",
    url: "https://radiorec.fr/",
    status: "active",
  },
  {
    id: "emissions-speciales",
    title: "Émissions Spéciales",
    type: "emission",
    description:
      "Couverture d'événements locaux en direct : marchés de Noël, festivals, événements sportifs et culturels de la région.",
    platform: "Radio REC 103.7 FM",
    url: "https://radiorec.fr/",
    status: "active",
  },
  // Ajoute ici d'autres productions (podcasts, vidéos, etc.)
];

export const productionTypeLabels: Record<ProductionType, string> = {
  emission: "Émission",
  podcast: "Podcast",
  video: "Vidéo",
  event: "Événement",
};

export const productionTypeColors: Record<ProductionType, { radio: string; streamer: string }> = {
  emission: {
    radio: "bg-amber-100 text-amber-800",
    streamer: "bg-purple-900/50 text-purple-300",
  },
  podcast: {
    radio: "bg-blue-100 text-blue-800",
    streamer: "bg-blue-900/50 text-blue-300",
  },
  video: {
    radio: "bg-red-100 text-red-800",
    streamer: "bg-red-900/50 text-red-300",
  },
  event: {
    radio: "bg-green-100 text-green-800",
    streamer: "bg-green-900/50 text-green-300",
  },
};

