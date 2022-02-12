import APIHandler from "../../data/api-handler";
import UrlParser from "../../routes/url-parser";

const Detail = {
  async renderPage() {
    console.log("ini detail page");
    return `
      <h2> Ini halaman detail</h2>
      `;
  },
  async afterRenderPage() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    try {
      const dataRestaurant = await APIHandler.getRestaurantDetail(url?.id);
      console.log(dataRestaurant);
      // restaurantListElement.restaurants = dataRestaurant;
      // loadingContainer.style.display = "none";
      // contentContainer.style.display = "block";
    } catch (error) {
      console.log(error);
    }
  },
};

export default Detail;
