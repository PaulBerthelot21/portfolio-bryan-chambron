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
    description: "Clips gaming, moments forts et contenus viraux",
    icon: "tiktok",
    color: "bg-black",
    hoverColor: "hover:bg-gray-900",
    mode: "streamer",
  },
  {
    id: "youtube-streamer",
    name: "YouTube",
    url: "https://www.youtube.com/@LeCalme35",
    description: "Replays, best-of et contenus exclusifs",
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
    description: "Coulisses radio, moments fun et tendances",
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
    description: "Coulisses, photos et moments du quotidien",
    icon: "instagram",
    color: "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400",
    hoverColor: "hover:opacity-90",
    mode: "both",
  },
  {
    id: "facebook",
    name: "Facebook",
    url: "https://www.facebook.com/bryan.chambron/",
    description: "Actualités, événements et communauté",
    icon: "facebook",
    color: "bg-blue-600",
    hoverColor: "hover:bg-blue-700",
    mode: "both",
  },
];
