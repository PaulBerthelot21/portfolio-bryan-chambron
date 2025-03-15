export const languages = {
  fr: 'Français',
  en: 'English',
};

export const defaultLang = 'fr';

export const ui = {
  fr: {
    'nav.title': 'Bryan Chambron',
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    'welcome.title': 'Bienvenue sur mon portfolio',
    'welcome.subtitle': 'Je suis Bryan Chambron, animateur radio',
    'welcome.cta': 'En savoir plus',
    'lang.select': 'Choisir la langue',
    'error.404.title': 'Page non trouvée',
    'error.404.message': 'Désolé, la page que vous cherchez n\'existe pas ou a été déplacée.',
    'error.404.back': 'Retour à l\'accueil',
    'about.title': 'À propos',
    'about.paragraph1': 'Bienvenue sur la page "À propos" en français. Cette page sert à tester le changement de langue.',
    'about.paragraph2': 'Vous pouvez changer de langue en utilisant le sélecteur dans l\'en-tête et vérifier que vous restez sur la même page.',
    'footer.developed': 'Développé par',
    'footer.rights': 'Tous droits réservés.',
    'footer.legal': 'Mentions légales',
    'footer.privacy': 'Politique de confidentialité',
    'testimonials.title': 'Ce qu\'ils disent de moi',
    'services.title': 'Mes services',
    'services.subtitle': 'Découvrez les prestations que je propose pour répondre à vos besoins',
    'social.title': 'Suivez-moi sur les réseaux'
  },
  en: {
    'nav.title': 'Bryan Chambron',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'welcome.title': 'Welcome to my portfolio',
    'welcome.subtitle': 'I am Bryan Chambron, radio presenter',
    'welcome.cta': 'Learn more',
    'lang.select': 'Select language',
    'error.404.title': 'Page not found',
    'error.404.message': 'Sorry, the page you are looking for doesn\'t exist or has been moved.',
    'error.404.back': 'Back to home',
    'about.title': 'About',
    'about.paragraph1': 'Welcome to the "About" page in English. This page is used to test language switching.',
    'about.paragraph2': 'You can change the language using the selector in the header and check that you stay on the same page.',
    'footer.developed': 'Developed by',
    'footer.rights': 'All rights reserved.',
    'footer.legal': 'Legal notice',
    'footer.privacy': 'Privacy policy',
    'testimonials.title': 'What They Say About Me',
    'services.title': 'My Services',
    'services.subtitle': 'Discover the services I offer to meet your needs',
    'social.title': 'Follow me on social media'
  },
} as const;

export type UI = typeof ui;
export type Language = keyof typeof languages;
export type UIKey = keyof (typeof ui)[typeof defaultLang];

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: UIKey) {
    return ui[lang][key] || ui[defaultLang][key];
  };
} 