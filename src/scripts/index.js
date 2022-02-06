import "regenerator-runtime"; /* for async await transpile */
import "../styles/global.scss";
import "../styles/footer.scss";
import "../styles/buttons.scss";
import "../styles/navbar.scss";
import "../styles/hero.scss";
import "../styles/card-item.scss";

import "../scripts/components/navbar.js";
import "../scripts/components/hero.js";
import "../scripts/components/ListData.js";
import "./utils/subscribe-sw.js";

import { navbar } from "./utils/setnavbar.js";

navbar();
console.log("Hello Coders! :)");
