import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Benson's Blog",
      description: "Benson's Blog",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
