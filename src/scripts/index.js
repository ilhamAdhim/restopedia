import "regenerator-runtime"; /* for async await transpile */
import "../styles/global.scss";
import "../styles/footer.scss";
import "../styles/navbar.scss";

import "../scripts/components/navbar.js";
import { navbar } from "./setnavbar.js";

navbar();
console.log("Hello Coders! :)");
