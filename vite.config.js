import { defineConfig } from "vite";

export default defineConfig({
  root: "./src",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: new URL("./src/index.html", import.meta.url).pathname,
        "agra-fort": new URL(
          "./src/spots/agra-fort/index.html",
          import.meta.url
        ).pathname,
        "amer-fort": new URL(
          "./src/spots/amer-fort/index.html",
          import.meta.url
        ).pathname,
        "ellora-caves": new URL(
          "./src/spots/ellora-caves/index.html",
          import.meta.url
        ).pathname,
        "gateway-india": new URL(
          "./src/spots/gateway-india/index.html",
          import.meta.url
        ).pathname,
        "goa-beaches": new URL(
          "./src/spots/goa-beaches/index.html",
          import.meta.url
        ).pathname,
        "harmandir-sahib": new URL(
          "./src/spots/harmandir-sahib/index.html",
          import.meta.url
        ).pathname,
        jaisalmer: new URL("./src/spots/jaisalmer/index.html", import.meta.url)
          .pathname,
        "mahabodhi-temple": new URL(
          "./src/spots/mahabodhi-temple/index.html",
          import.meta.url
        ).pathname,
        "mecca-masjid": new URL(
          "./src/spots/mecca-masjid/index.html",
          import.meta.url
        ).pathname,
        "mehrangarh-fort": new URL(
          "./src/spots/mehrangarh-fort/index.html",
          import.meta.url
        ).pathname,
        "mysore-palace": new URL(
          "./src/spots/mysore-palace/index.html",
          import.meta.url
        ).pathname,
        "periyar-national-park": new URL(
          "./src/spots/periyar-national-park/index.html",
          import.meta.url
        ).pathname,
        "red-fort": new URL("./src/spots/red-fort/index.html", import.meta.url)
          .pathname,
        "taj-mahal": new URL(
          "./src/spots/taj-mahal/index.html",
          import.meta.url
        ).pathname,
        varanasi: new URL("./src/spots/varanasi/index.html", import.meta.url)
          .pathname,
      },
    },
  },
});
