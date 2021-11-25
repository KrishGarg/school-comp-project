import { defineConfig } from "vite";

export default defineConfig({
  root: "./src",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: new URL("./src/index.html", import.meta.url).pathname,
        "agra-fort": new URL("./src/spots/agra-fort.html", import.meta.url)
          .pathname,
        "amer-fort": new URL("./src/spots/amer-fort.html", import.meta.url)
          .pathname,
        "ellora-caves": new URL(
          "./src/spots/ellora-caves.html",
          import.meta.url
        ).pathname,
        "gateway-india": new URL(
          "./src/spots/gateway-india.html",
          import.meta.url
        ).pathname,
        "goa-beaches": new URL("./src/spots/goa-beaches.html", import.meta.url)
          .pathname,
        "harmandir-sahib": new URL(
          "./src/spots/harmandir-sahib.html",
          import.meta.url
        ).pathname,
        jaisalmer: new URL("./src/spots/jaisalmer.html", import.meta.url)
          .pathname,
        "mahabodhi-temple": new URL(
          "./src/spots/mahabodhi-temple.html",
          import.meta.url
        ).pathname,
        "mecca-masjid": new URL(
          "./src/spots/mecca-masjid.html",
          import.meta.url
        ).pathname,
        "mehrangarh-fort": new URL(
          "./src/spots/mehrangarh-fort.html",
          import.meta.url
        ).pathname,
        "mysore-palace": new URL(
          "./src/spots/mysore-palace.html",
          import.meta.url
        ).pathname,
        "periyar-national-park": new URL(
          "./src/spots/periyar-national-park.html",
          import.meta.url
        ).pathname,
        "red-fort": new URL("./src/spots/red-fort.html", import.meta.url)
          .pathname,
        "taj-mahal": new URL("./src/spots/taj-mahal.html", import.meta.url)
          .pathname,
        varanasi: new URL("./src/spots/varanasi.html", import.meta.url)
          .pathname,
      },
    },
  },
});
