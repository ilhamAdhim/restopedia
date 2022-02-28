import routes from "../routes/routes";
import UrlParser from "../routes/url-parser";

class App {
  constructor({ button, content }) {
    this._button = button;
    this._content = content;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.renderPage();
    await page.afterRenderPage();
  }
}

export default App;
