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
    tag: "Actualité",
    date: "2024-08-05",
    description: "Un animateur passionné qui dynamise les ondes de Chauvigny.",
    mode: "radio",
  },
  {
    id: "radio-2",
    title: "Bryan Chambron (LeCalme) sur Radio Parole de Vie",
    source: "Radio Parole de Vie",
    url: "https://www.youtube.com/watch?v=tspcxr4UwzI",
    tag: "Interview",
    date: "2022-02-22",
    description: "Bryan Chambron (LeCalme) sur Radio Parole de Vie, une interview exclusive !",
    mode: "radio",
  }
];
