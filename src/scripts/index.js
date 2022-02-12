import "regenerator-runtime"; /* for async await transpile */
import "../styles/global.scss";
import "../styles/footer.scss";
import "../styles/buttons.scss";
import "../styles/navbar.scss";
import "../styles/hero.scss";
import "../styles/card-item.scss";

import "./components/Navbar.js";
import "../scripts/components/JumbotronComponent.js";
import "../scripts/components/ListData.js";
import "../scripts/components/CardItem";

import App from "./view/app.js";

const app = new App({
  content: document.querySelector("#content"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
});
