import LikeRestoIDB from "../../data/resto-idb";
import { navbar } from "../../utils/setnavbar";

const Favorite = {
  async renderPage() {
    return `
      <div id="content">  
        <h2> Restoran yang Disukai</h2>

        <div id="empty-data"></div>
        <list-data></list-data>
      </div>
        `;
  },

  async afterRenderPage() {
    const restoFavData = await LikeRestoIDB.getAllRestaurants();
    const contentContainer = document.querySelector("list-data");
    const emptyDataContainer = document.querySelector("#empty-data");

    if (restoFavData.length === 0) {
      emptyDataContainer.style.display = "block";
      contentContainer.style.display = "none";

      emptyDataContainer.innerHTML = `
          <img class="lazyload" src="./images/not-found.png" alt="Data tidak ditemukan" class="image-not-found">
          <div class="primary-message"> Tidak ada restoran yang disukai </div>
          <div class="secondary-message"> Tambahkan restoran dengan klik icon hati di detail restoran </div>
      `;
    } else {
      emptyDataContainer.style.display = "none";
      contentContainer.style.display = "flex";

      contentContainer.restaurants = restoFavData;
    }
    navbar();

    return "";
  },
};

export default Favorite;
