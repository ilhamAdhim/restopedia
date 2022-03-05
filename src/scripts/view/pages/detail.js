import APIHandler from "../../data/api-handler";
import UrlParser from "../../routes/url-parser";
import LikeButtonInitiator from "../../utils/set-like-button";
import { navbar } from "../../utils/setnavbar";

const Detail = {
  async renderPage() {
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

            <div id="likeButtonWrapper"></div>
        </div>
      `;
  },
  async afterRenderPage() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const contentContainer = document.querySelector("#content-detail");
    const loadingContainer = document.querySelector("loading-indicator");
    const detailRestoContainer = document.querySelector("detail-resto");
    const likeButtonWrapper = document.querySelector("#likeButtonWrapper");

    loadingContainer.style.display = "block";
    contentContainer.style.display = "none";
    try {
      const dataRestaurant = await APIHandler.getRestaurantDetail(url?.id);

      LikeButtonInitiator.init({
        likeButtonWrapper: likeButtonWrapper,
        data: dataRestaurant,
      });

      detailRestoContainer.restaurant = dataRestaurant;
      contentContainer.style.display = "block";
      loadingContainer.style.display = "none";
    } catch (error) {
      loadingContainer.style.display = "none";
      contentContainer.style.display = "none";
      contentContainer.innerHTML = `INI ERROR : ${error}`;
    }

    navbar();
  },
};

export default Detail;
