/**
 * Récupère les témoignages en fonction de la langue
 * @param {string} lang - Code de langue ('fr' ou 'en')
 * @returns {Array} Liste des témoignages
 */
export function getTestimonials(lang) {
  return [
    {
      name: "Sophie Martin",
      role: "Directrice de Radio France",
      content: lang === "fr" 
        ? "Bryan est un animateur exceptionnel, avec une présence vocale remarquable et une vraie capacité à engager son audience."
        : "Bryan is an exceptional host, with a remarkable vocal presence and a real ability to engage his audience.",
    },
    {
      name: "Thomas Durand",
      role: "Producteur",
      content: lang === "fr"
        ? "Travailler avec Bryan est toujours un plaisir. Son professionnalisme et sa créativité font de lui un partenaire idéal pour nos projets."
        : "Working with Bryan is always a pleasure. His professionalism and creativity make him an ideal partner for our projects."
    },
    {
      name: "Emma Bernard",
      role: "Auditrice fidèle",
      content: lang === "fr"
        ? "Je suis ses émissions depuis des années et il a toujours su se renouveler tout en gardant cette authenticité qui le caractérise."
        : "I have been following his shows for years and he has always managed to reinvent himself while maintaining the authenticity that characterizes him."
    }
  ];
} 