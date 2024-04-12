import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://bryanchambron.netlify.app/',
    i18n: {
        defaultLocale: "fr",
        locales: ["fr", "en"],
    }
})
