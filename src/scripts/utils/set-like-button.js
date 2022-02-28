import LikeRestoIDB from "../data/resto-idb";
import {
  renderLikeButtonTemplate,
  renderLikedButtonTemplate,
} from "../view/templates/LikeButton";

const LikeButtonInitiator = {
  async init({ likeButtonWrapper, data }) {
    this._likeButtonWrapper = likeButtonWrapper;
    this._restaurant = data;
    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const resto = await LikeRestoIDB.getRestaurant(id);
    return !!resto;
  },

  _renderLike() {
    this._likeButtonWrapper.innerHTML = renderLikedButtonTemplate();
    const likeButton = document.querySelector("#likeButton");

    likeButton.addEventListener("click", async () => {
      await LikeRestoIDB.updateRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonWrapper.innerHTML = renderLikeButtonTemplate();

    const likeButton = document.querySelector("#likeButton");
    likeButton.addEventListener("click", async () => {
      await LikeRestoIDB.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};
export default LikeButtonInitiator;
