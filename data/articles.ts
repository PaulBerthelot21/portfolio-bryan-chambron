export type ArticleMode = "radio" | "streamer" | "both";

export interface Article {
  id: string;
  title: string;
  source: string;
  url: string;
  tag: string;
  date: string;
  description?: string;
  mode: ArticleMode;
}

export const articles: Article[] = [
  // === ARTICLES STREAMER ===
  {
    id: "streamer-1",
    title: "LeCalme revient sur sa chaîne Twitch",
    source: "Actualité",
    url: "https://www.twitch.tv/le_calme18",
    tag: "Actualité",
    date: "2025-12-17",
    description: "LeCalme revient sur sa chaîne Twitch, une nouvelle aventure commence !",
    mode: "streamer",
  },
  {
    id: "streamer-2",
    title: "LeCalme rejoint le groupe de streamer AFStream",
    source: "AFStream",
    url: "https://www.twitch.tv/afstream_",
    tag: "Actualité",
    date: "2025-02-12",
    description: "LeCalme rejoint le groupe de streamers français AFStream pour de nouvelles aventures en live !",
    mode: "streamer",
  },

  // === ARTICLES ANIMATEUR RADIO ===
  {
    id: "radio-1",
    title: "Bryan Chambron, nouvelle voix de Radio REC",
    source: "Radio REC",
    url: "https://radiorec.fr/",
    tag: "Presse",
    date: "2024-03-10",
    description: "Portrait d'un animateur passionné qui dynamise les ondes de Chauvigny.",
    mode: "radio",
  },
  {
    id: "radio-2",
    title: "Podcast : Les coulisses de l'animation radio",
    source: "Radio REC",
    url: "https://radiorec.fr/",
    tag: "Podcast",
    date: "2024-01-10",
    description: "Bryan partage ses secrets et son parcours dans l'animation radio.",
    mode: "radio",
  },
  {
    id: "radio-3",
    title: "La Quotivienne : l'émission qui fait vibrer les auditeurs",
    source: "Radio REC",
    url: "https://radiorec.fr/",
    tag: "Émission",
    date: "2023-09-15",
    description: "Découvrez l'émission phare animée par Bryan sur Radio REC 103.7 FM.",
    mode: "radio",
  },
  {
    id: "radio-4",
    title: "Interview : Le parcours d'un animateur radio passionné",
    source: "La Nouvelle République",
    url: "#",
    tag: "Interview",
    date: "2023-06-20",
    description: "Bryan Chambron se confie sur son amour pour la radio et ses projets.",
    mode: "radio",
  },
];
