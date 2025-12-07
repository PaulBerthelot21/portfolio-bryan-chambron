export interface Article {
  id: string;
  title: string;
  source: string;
  url: string;
  tag: string;
  date: string;
  description?: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Bryan Chambron, la nouvelle voix de la radio locale",
    source: "La Voix du Nord",
    url: "#",
    tag: "Presse",
    date: "2024-03-15",
    description: "Portrait d'un animateur passionné qui révolutionne les ondes.",
  },
  {
    id: "2",
    title: "Le streaming gaming en pleine expansion : interview exclusive",
    source: "Gamekult",
    url: "#",
    tag: "Gaming",
    date: "2024-02-20",
    description: "Discussion sur l'évolution du streaming et de la communauté gaming.",
  },
  {
    id: "3",
    title: "Podcast : Les coulisses de l'animation radio",
    source: "Radio France",
    url: "#",
    tag: "Podcast",
    date: "2024-01-10",
    description: "Bryan partage ses secrets et son parcours dans l'animation.",
  },
  {
    id: "4",
    title: "Twitch Rivals : Bryan dans le top 10 des streamers français",
    source: "Twitch Blog",
    url: "#",
    tag: "Événement",
    date: "2023-12-05",
    description: "Retour sur une performance exceptionnelle lors du tournoi.",
  },
  {
    id: "5",
    title: "L'art de créer du contenu authentique",
    source: "Medium",
    url: "#",
    tag: "Article",
    date: "2023-11-18",
    description: "Réflexions sur la création de contenu et l'engagement communautaire.",
  },
  {
    id: "6",
    title: "Festival des Créateurs : Bryan Chambron en guest star",
    source: "YouTube News",
    url: "#",
    tag: "Événement",
    date: "2023-10-22",
    description: "Participation au plus grand rassemblement de créateurs francophones.",
  },
];

