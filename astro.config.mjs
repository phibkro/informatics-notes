import starlight from "@astrojs/starlight";
import vercelStatic from "@astrojs/vercel/static";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Informatikk notater",
      defaultLocale: "root",
      social: {
        github: "https://github.com/phibkro",
        linkedin: "https://www.linkedin.com/in/philib-krogh/",
      },
      lastUpdated: true,
      sidebar: [
        {
          label: "Begynn her!",
          autogenerate: {
            directory: "introduksjon",
          },
        },
        {
          label: "Emner",
          collapsed: true,
          autogenerate: {
            directory: "emner",
          },
        },
        {
          label: "Kompendium",
          collapsed: true,
          autogenerate: {
            directory: "kompendium",
          },
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
  output: "server",
  adapter: vercelStatic(),
});
