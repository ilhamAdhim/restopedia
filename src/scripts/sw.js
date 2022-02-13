import { precacheAndRoute } from "workbox-precaching";

import { registerRoute } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies";

precacheAndRoute(self.__WB_MANIFEST, {
  ignoreURLParametersMatching: [/.*/],
});

console.log("tes updated");

registerRoute(
  new RegExp("/templates/"),
  new StaleWhileRevalidate({
    cacheName: "pages",
  })
);
