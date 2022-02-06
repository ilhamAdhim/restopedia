importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js"
);

if (workbox) console.log(`Workbox berhasil dimuat`);
else console.log(`Workbox gagal dimuat`);

console.log("tes");

workbox.precaching.precacheAndRoute([
  // HTML
  "./index.html",

  // CSS
  "./styles/buttons.scss",
  "./styles/card-item.scss",
  "./styles/footer.scss",
  "./styles/global.scss",
  "./styles/hero.scss",
  "./styles/navbar.scss",

  // JS
  "./scripts/components/*",
  "./scripts/utils/*",
  "./scripts/index.js*",
  "./scripts/service-worker.js*",

  // Assets
  "./public/*",
]);

workbox.routing.registerRoute(
  new RegExp("/templates/"),
  workbox.strategies.staleWhileRevalidate({
    cacheName: "pages",
  })
);
