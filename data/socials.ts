export interface Social {
  id: string;
  name: string;
  url: string;
  description: string;
  icon: "twitch" | "instagram" | "tiktok" | "youtube" | "facebook";
  color: string;
  hoverColor: string;
}

export const socials: Social[] = [
  {
    id: "twitch",
    name: "Twitch",
    url: "https://twitch.tv/bryanchambron",
    description: "Streams en direct, gaming et discussions avec la communauté",
    icon: "twitch",
    color: "bg-purple-600",
    hoverColor: "hover:bg-purple-700",
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://instagram.com/bryanchambron",
    description: "Coulisses, photos et moments du quotidien",
    icon: "instagram",
    color: "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400",
    hoverColor: "hover:opacity-90",
  },
  {
    id: "tiktok",
    name: "TikTok",
    url: "https://tiktok.com/@bryanchambron",
    description: "Clips courts, tendances et contenus viraux",
    icon: "tiktok",
    color: "bg-black",
    hoverColor: "hover:bg-gray-900",
  },
  {
    id: "youtube",
    name: "YouTube",
    url: "https://youtube.com/@bryanchambron",
    description: "Replays, vlogs et contenus exclusifs",
    icon: "youtube",
    color: "bg-red-600",
    hoverColor: "hover:bg-red-700",
  },
  {
    id: "facebook",
    name: "Facebook",
    url: "https://facebook.com/bryanchambron",
    description: "Actualités, événements et communauté",
    icon: "facebook",
    color: "bg-blue-600",
    hoverColor: "hover:bg-blue-700",
  },
];

