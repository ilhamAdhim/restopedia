/* eslint-disable no-undef */
importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js"
);

if (workbox) console.log("Workbox berhasil dimuat");
else console.log("Workbox gagal dimuat");

console.log("tes");

workbox.precaching.precacheAndRoute([
  // HTML
  { url: "./index.html", revision: null },

  // CSS
  { url: "../styles/buttons.scss", revision: null },
  { url: "../styles/card-item.scss", revision: null },
  { url: "../styles/footer.scss", revision: null },
  { url: "../styles/global.scss", revision: null },
  { url: "../styles/hero.scss", revision: null },
  { url: "../styles/navbar.scss", revision: null },

  // JS
  { url: "./scripts/index.js", revision: null },

  { url: "./scripts/components/hero.js", revision: null },
  { url: "./scripts/components/ListData.js", revision: null },
  { url: "./scripts/components/navbar.js", revision: null },

  { url: "./scripts/utils/cache-helper.js", revision: null },
  { url: "./scripts/utils/setnavbar.js", revision: null },
  { url: "./scripts/utils/subscribe-sw.js", revision: null },

  { url: "./scripts/data/api-handler.js", revision: null },
  { url: "./scripts/data/endpoints.js", revision: null },
  { url: "./scripts/global/config.js", revision: null },

  // Assets
  { url: "./public/", revision: null },
]);

// workbox.routing.registerRoute(
//   new RegExp("/templates/"),
//   workbox.strategies.staleWhileRevalidate({
//     cacheName: "pages",
//   })
// );
