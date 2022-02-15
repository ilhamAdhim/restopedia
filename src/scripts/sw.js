import "regenerator-runtime";
import { precacheAndRoute } from "workbox-precaching";

import { registerRoute } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies";
import { CONFIG } from "./global/config";

precacheAndRoute(self.__WB_MANIFEST, {
  ignoreURLParametersMatching: [/.*/],
});

// Cache for pages
registerRoute(
  ({ request }) => request.mode === "navigate",
  new StaleWhileRevalidate({
    cacheName: "cache-restopedia-pages",
  })
);

// Cache for images
registerRoute(
  ({ request }) => request.destination === "image",
  new StaleWhileRevalidate({
    cacheName: "cache-restopedia-images",
  })
);

// Cache for JS and CSS
registerRoute(
  ({ request }) =>
    request.destination === "styles" || request.destination === "scripts",
  new StaleWhileRevalidate({
    cacheName: "cache-restopedia-assets",
  })
);

// Cache for API data from dicoding dev
registerRoute(
  new RegExp(CONFIG.BASE_URL),
  StaleWhileRevalidate({
    cacheName: "cache-restopedia-data",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 100,
        maxAgeSeconds: 30 * 60, // 30 Minutes
      }),
    ],
  })
);
