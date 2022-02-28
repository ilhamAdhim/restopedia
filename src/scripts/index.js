import "regenerator-runtime"; /* for async await transpile */
import "../styles/global.scss";
import "../styles/footer.scss";
import "../styles/buttons.scss";
import "../styles/navbar.scss";
import "../styles/hero.scss";
import "../styles/card-item.scss";
import "../styles/loader.scss";
import "../styles/detailResto.scss";
import "../styles/favorite.scss";

import "./components/Navbar.js";
import "../scripts/components/JumbotronComponent.js";
import "../scripts/components/ListData";
import "../scripts/components/CardItem";
import "../scripts/components/DetailResto";
import "../scripts/components/LikeButton";
import "../scripts/components/LoadingIndicator";

import App from "./view/app.js";
import "./utils/subscribe-sw.js";

const app = new App({
  content: document.querySelector("#content"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
});
