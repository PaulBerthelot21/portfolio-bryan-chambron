export interface CareerStep {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: "formation" | "radio" | "national";
  logo?: string;
}

export const careerSteps: CareerStep[] = [
  {
    id: "mission-locale",
    title: "Découverte de la radio",
    organization: "Mission Locale",
    period: "Début de parcours",
    description:
      "Premiers pas dans l'univers de la communication et découverte de la passion pour l'animation. Une expérience fondatrice qui a révélé ma vocation pour le monde de la radio.",
    type: "formation",
  },
  {
    id: "parole-de-vie",
    title: "Animateur Radio",
    organization: "Radio Parole de Vie",
    period: "Premières ondes",
    description:
      "Première expérience en tant qu'animateur radio. Apprentissage des bases du métier, de la technique au contact avec les auditeurs. Une école de la vie radiophonique.",
    type: "radio",
  },
  {
    id: "radio-laser",
    title: "Animateur Radio",
    organization: "Radio Laser / Skol",
    period: "Montée en compétences",
    description:
      "Développement de mon style d'animation et perfectionnement technique. Création d'émissions originales et renforcement du lien avec les auditeurs.",
    type: "radio",
  },
  {
    id: "nrj",
    title: "Animateur Radio",
    organization: "NRJ",
    period: "L'expérience nationale",
    description:
      "Passage sur une radio nationale de référence. Une expérience professionnalisante au contact des meilleurs standards de l'industrie radiophonique française.",
    type: "national",
  },
  {
    id: "radio-rec",
    title: "Animateur Radio",
    organization: "Radio REC 103.7 FM",
    period: "Aujourd'hui",
    description:
      "Animateur sur Radio REC à Chauvigny. Entre La Quotivienne et émissions spéciales, je continue de faire vibrer les auditeurs avec passion et bonne humeur !",
    type: "radio",
  },
];

