import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import { astroImageTools } from "astro-imagetools";

export default defineConfig({
  site: "https://ehsan-pourhadi.com",
  integrations: [
    tailwind({ applyBaseStyles: false }),
    react(),
    mdx(),
    astroImageTools,
  ],
  markdown: {
    shikiConfig: {
      theme: "dracula",
      wrap: true,
    },
  },
  vite: {
    ssr: {
      noExternal: ["react-chartjs-2"],
    },
  },
});
