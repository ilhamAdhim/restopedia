import APIHandler from "../../data/api-handler";
import { navbar } from "../../utils/setnavbar";

const Home = {
  async renderPage() {
    return `
    <loading-indicator></loading-indicator>
  
    <div id="content">
    <jumbotron-component></jumbotron-component>
        <h2> Daftar Restoran </h2>
        <list-data></list-data>
    </div>
      `;
  },

  async afterRenderPage() {
    const contentContainer = document.querySelector("#content");
    const loadingContainer = document.querySelector("loading-indicator");
    const restaurantListElement = document.querySelector("list-data");

    loadingContainer.style.display = "block";
    contentContainer.style.display = "none";

    try {
      const dataRestaurant = await APIHandler.getAllRestaurant();
      restaurantListElement.restaurants = dataRestaurant;
      loadingContainer.style.display = "none";
      contentContainer.style.display = "block";
    } catch (error) {
      console.log("Offline detected, getting data from cache . . .");
      // TODO : Fetch data dari cache
      loadingContainer.style.display = "none";
      contentContainer.style.display = "none";
      contentContainer.innerHTML = `INI ERROR : ${error}`;
    }

    navbar();
  },
};

export default Home;
