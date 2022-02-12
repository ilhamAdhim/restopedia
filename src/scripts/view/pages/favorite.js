const Favorite = {
  async renderPage() {
    console.log("ini favorite page");

    return `
        <div class="content">
        <h2 class="content__heading">Favorites Restaurant</h2>
          <div id="cards" class="cards">
 
          </div>
        </div>
        `;
  },

  async afterRenderPage() {
    return "";
  },
};

export default Favorite;
