export type SocialMode = "radio" | "streamer" | "both";

export interface Social {
  id: string;
  name: string;
  url: string;
  description: string;
  icon: "twitch" | "instagram" | "tiktok" | "youtube" | "facebook";
  color: string;
  hoverColor: string;
  mode: SocialMode;
}

export const socials: Social[] = [
  // === RÉSEAUX STREAMER ===
  {
    id: "twitch-streamer",
    name: "Twitch",
    url: "https://www.twitch.tv/le_calme18",
    description: "Streams en direct, gaming et discussions avec la communauté",
    icon: "twitch",
    color: "bg-purple-600",
    hoverColor: "hover:bg-purple-700",
    mode: "streamer",
  },
  {
    id: "tiktok-streamer",
    name: "TikTok",
    url: "https://www.tiktok.com/@lecalme18",
    description: "Pour découvrir ce qui se passe sur Twitch, c'est ici mais en format court !",
    icon: "tiktok",
    color: "bg-black",
    hoverColor: "hover:bg-gray-900",
    mode: "streamer",
  },
  {
    id: "youtube-streamer",
    name: "YouTube",
    url: "https://www.youtube.com/@LeCalme35",
    description: "Replays, best-of et du kiff quoi ! Pour ceux qui préfèrent le format long !",
    icon: "youtube",
    color: "bg-red-600",
    hoverColor: "hover:bg-red-700",
    mode: "streamer",
  },

  // === RÉSEAUX ANIMATEUR ===
  {
    id: "tiktok-animateur",
    name: "TikTok",
    url: "https://www.tiktok.com/@bryan_lecalme",
    description: "Chroniques musicales, d'actualités et quotidien d'animateur radio",
    icon: "tiktok",
    color: "bg-black",
    hoverColor: "hover:bg-gray-900",
    mode: "radio",
  },

  // === RÉSEAUX COMMUNS (les deux modes) ===
  {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/bryan_chambron/",
    description: "Tout savoir sur mon actualité, photos beau gosse et moments du quotidien",
    icon: "instagram",
    color: "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400",
    hoverColor: "hover:opacity-90",
    mode: "radio",
  },
  {
    id: "facebook",
    name: "Facebook",
    url: "https://www.facebook.com/bryan.chambron/",
    description: "Pour suivre mon parcours radiophonique",
    icon: "facebook",
    color: "bg-blue-600",
    hoverColor: "hover:bg-blue-700",
    mode: "radio",
  },
];
