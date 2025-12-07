export type ProductionType = "emission" | "podcast" | "video" | "event" | "stream";
export type ProductionMode = "radio" | "streamer" | "both";

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
  mode: ProductionMode;
}

export const productions: Production[] = [
  // === PRODUCTIONS ANIMATEUR RADIO ===
  
  {
    id: "bey-sort-et-vous-raconte-sa-vie-de-rockstar",
    title: "BEY SORT ET VOUS RACONTE SA « VIE DE ROCKSTAR »",
    type: "emission",
    description:
      "Dans votre émission du jour, Il voulait devenir une rockstar et c’en est devenu une . Aujourd’hui je suis avec Bey, pour aborder son dernier single “ Vie de Rockstar ” sortie vendredi 7 mars , son actu , son histoire et sa vie de rockstar .",
    platform: "Radio REC 103.7 FM",
    url: "https://radiorec.fr/bey-sort-et-vous-raconte-sa-vie-de-rockstar/",
    status: "active",
    mode: "radio",
  },
  {
    id: "harmattan-brothers",
    title: "HARMATTAN BROTHERS",
    type: "emission",
    description:
      "Dans votre émission du jour, ils seront tous les 3 ce soir au nouveau théâtre de Châtellerault à 20h30 , aujourd'hui je suis avec le groupe Harmattan Brothers , pour aborder leur concert et puis leur actus. ",
    platform: "Radio REC 103.7 FM",
    url: "https://radiorec.fr/harmattan-brothers/",
    status: "active",
    mode: "radio",
  },
  {
    id: "french-fresh",
    title: "French Fresh",
    type: "emission",
    description:
      "FrenchFresh du jour ! Trois vibes, trois artistes, trois ambiances",
    platform: "TikTok",
    url: "https://www.tiktok.com/@bryan_lecalme/video/7579193395722145046",
    status: "active",
    mode: "radio",
  },
  

  // === PRODUCTIONS STREAMER ===
  {
    id: "best-of-youtube",
    title: "Best-of YouTube",
    type: "video",
    description:
      "Les meilleurs moments des streams compilés sur YouTube. Rattrape ce que tu as manqué !",
    platform: "YouTube",
    url: "https://www.youtube.com/@LeCalme35",
    status: "active",
    mode: "streamer",
  },
];

export const productionTypeLabels: Record<ProductionType, string> = {
  emission: "Émission",
  podcast: "Podcast",
  video: "Vidéo",
  event: "Événement",
  stream: "Stream",
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
  stream: {
    radio: "bg-purple-100 text-purple-800",
    streamer: "bg-purple-900/50 text-purple-300",
  },
};
