export const languages = {
    en: 'English',
    fr: 'Français',
};

export const defaultLang = 'fr';

export const ui = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.work': 'Work',

        'index.header.hero.title': 'Hello, my name is Bryan Chambron',
        'index.header.hero.tagline': '',

        '404.head.title' : 'Not Found',
        '404.head.description' : '404 Error — this page was not found',
        '404.hero.title' : 'Page Not Found',
        '404.hero.tagline' : 'Not Found',
    },
    fr: {
        'nav.home': 'Accueil',
        'nav.about': 'À propos',
        'nav.work': 'Travail',

        'index.header.hero.title': 'Bonjour, je suis Bryan Chambron',
        'index.header.hero.tagline': 'Je suis animateur radio, disponible dans toute la France !',

        'index.header.roles.radio-animation': 'Animation radio',
        'index.header.roles.editing': 'Montage',
        'index.header.roles.social-network-management': 'Gestion réseaux sociaux',

        'index.header.img.alt' : 'Bryan Chambron positionnée de trois quarts, retardant la caméra d\'un regard sérieux et déterminé',

        '404.head.title' : 'Non Trouvé',
        '404.head.description' : 'Erreur 404 — Cette page n\'a pas été trouvé',
        '404.hero.title' : 'Page Non Trouvé',
        '404.hero.tagline' : 'Non Trouvé',
    },
} as const;
