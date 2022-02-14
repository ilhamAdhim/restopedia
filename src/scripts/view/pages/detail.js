import APIHandler from "../../data/api-handler";
import UrlParser from "../../routes/url-parser";
import LikeButtonInitiator from "../../utils/set-like-button";

const Detail = {
  async renderPage() {
    console.log("ini detail page");
    return `
        <div class="detail-page">
            <a class="button-kembali" href="/#/">
            <span>
              <i class="fa fa-arrow-left"></i>
                <span style="margin-left : 1em"> Kembali </span>
              </span>
            </a>
          
            <loading-indicator></loading-indicator>

            <div id="content-detail" class="content-detail">
                <detail-resto></detail-resto>
            </div>

            <like-button></like-button>
        </div>
      `;
  },
  async afterRenderPage() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const contentContainer = document.querySelector("#content-detail");
    const loadingContainer = document.querySelector("loading-indicator");
    const detailRestoContainer = document.querySelector("detail-resto");
    const likeButtonWrapper = document.querySelector("like-button");

    loadingContainer.style.display = "block";
    contentContainer.style.display = "none";
    try {
      const dataRestaurant = await APIHandler.getRestaurantDetail(url?.id);

      LikeButtonInitiator.init({
        likeButtonWrapper: likeButtonWrapper,
        data: dataRestaurant,
      });

      detailRestoContainer.restaurant = dataRestaurant;
      loadingContainer.style.display = "none";
      contentContainer.style.display = "block";
    } catch (error) {
      loadingContainer.style.display = "none";
      contentContainer.style.display = "none";
      contentContainer.innerHTML = `INI ERROR : ${error}`;
    }
  },
};

export default Detail;
