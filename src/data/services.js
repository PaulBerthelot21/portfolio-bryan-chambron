/**
 * Récupère les services en fonction de la langue
 * @param {string} lang - Code de langue ('fr' ou 'en')
 * @returns {Array} Liste des services
 */
export function getServices(lang) {
  return [
    {
      title: lang === "fr" ? "Animation d'événements" : "Event Hosting",
      description: lang === "fr" 
        ? "Animation professionnelle pour vos conférences, séminaires, galas et événements d'entreprise."
        : "Professional hosting for your conferences, seminars, galas and corporate events.",
      imageSrc: "/assets/services/bryan_ordi.png"
    },
    {
      title: lang === "fr" ? "Production audio" : "Audio Production",
      description: lang === "fr"
        ? "Production de podcasts, jingles et contenu audio professionnel pour votre marque ou projet."
        : "Production of podcasts, jingles and professional audio content for your brand or project.",
        imageSrc: "/assets/services/bryan_machine.png"
      },
    {
      title: lang === "fr" ? "Formation médias" : "Media Training",
      description: lang === "fr"
        ? "Coaching pour améliorer votre présence vocale et médiatique, techniques d'interview et de présentation."
        : "Coaching to improve your vocal and media presence, interview and presentation techniques.",
        imageSrc: "/assets/services/bryan_ordi.png"
      }
  ];
} 