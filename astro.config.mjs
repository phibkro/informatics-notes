import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Informatics Degree in docs",
      defaultLocale: "root",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Begynn her!",
          autogenerate: { directory: "introduksjon" },
        },
        {
          label: "Emner",
          collapsed: true,
          autogenerate: { directory: "emner" },
        },
        {
          label: "Kompendium",
          collapsed: true,
          autogenerate: { directory: "kompendium" },
        },
      ],
      locales: {
        /* root: {
          label: "English",
          lang: "en",
        }, */
        root: {
          label: "Norsk",
          lang: "no",
        },
      },
    }),
  ],
});
