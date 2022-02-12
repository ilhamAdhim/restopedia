import routes from "../routes/routes";
import UrlParser from "../routes/url-parser";

class App {
  constructor({ button, content }) {
    this._button = button;
    this._content = content;

    // this._initialAppShell();
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    console.log(page, "ini apge");
    this._content.innerHTML = await page.renderPage();
    await page.afterRenderPage();

    // const skipLinkElem = document.querySelector(".skip-link");
    // skipLinkElem.addEventListener("click", (event) => {
    //   event.preventDefault();
    //   document.querySelector("#mainContent").focus();
    // });
  }
}

export default App;
