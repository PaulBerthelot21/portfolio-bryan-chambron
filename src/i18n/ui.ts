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

        '404.head.title' : 'Not Found',
        '404.head.description' : '404 Error — this page was not found',
        '404.hero.title' : 'Page Not Found',
        '404.hero.tagline' : 'Not Found',
    },
    fr: {
        'nav.home': 'Accueil',
        'nav.about': 'À propos',
        'nav.work': 'Travail',

        '404.head.title' : 'Non Trouvé',
        '404.head.description' : 'Erreur 404 — Cette page n\'a pas été trouvé',
        '404.hero.title' : 'Page Non Trouvé',
        '404.hero.tagline' : 'Non Trouvé',
    },
} as const;
